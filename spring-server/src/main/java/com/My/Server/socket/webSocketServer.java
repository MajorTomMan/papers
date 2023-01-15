package com.My.Server.socket;

import java.io.IOException;
import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArraySet;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import com.My.Server.entity.Message;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@Service
@ServerEndpoint("/msg/{userId}")
public class webSocketServer {
    // 与某个客户端的连接会话，需要通过它来给客户端发送数据
    protected Session session;
    private String userId;
    // concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。
    // 虽然@Component默认是单例模式的，但springboot还是会为每个websocket连接初始化一个bean，所以可以用一个静态set保存起来。
    // 注：底下WebSocket是当前类名
    private static CopyOnWriteArraySet<webSocketServer> webSockets = new CopyOnWriteArraySet<>();
    // 用来存在线连接用户信息
    private static ConcurrentHashMap<String, Session> sessionPool = new ConcurrentHashMap<String, Session>();
    /* 消息类 */
    private Message message = new Message();

    /**
     * 连接建立成功调用的方法
     * 
     * @throws IOException
     */
    @OnOpen
    public void onOpen(Session session, @PathParam(value = "userId") String userId) throws IOException {
        this.session = session;
        this.userId = userId;
        webSockets.add(this);
        sessionPool.put(userId, session);
        log.info("【websocket消息】有新的连接，总数为:" + webSockets.size());
    }

    @OnError
    public void onError(Throwable e, Session session) {
        log.error("用户错误,原因:" + e.getMessage());
        e.printStackTrace();
    }

    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose() {
        webSockets.remove(this);
        sessionPool.remove(this.userId);
        log.info("【websocket消息】连接断开，总数为:" + webSockets.size());
    }

    /**
     * 收到客户端消息后调用的方法
     * 
     * @throws IOException
     * @ Param message 客户端发送过来的消息
     */
    @OnMessage
    public void onMessage(String msg) throws IOException {
        log.info("【websocket消息】收到客户端消息:" + msg);
        sendAllMessage(msg);
    }

    private void sendAllMessage(String msg) throws IOException {
        message.setUserName(userId);
        message.setSendingTime(DateFormat.getDateInstance(DateFormat.MEDIUM, Locale.CHINA).format(new Date()));
        message.setContent(msg);
        log.info("【websocket消息】广播消息:" + msg);
        for (webSocketServer webSocket : webSockets) {
            try {
                if (webSocket.session.isOpen()) {
                    webSocket.session.getAsyncRemote().sendText("test");
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    // 此为单点消息
    private void sendOneMessage(String userId, String message) {
        Session session = sessionPool.get(userId);
        if (session != null && session.isOpen()) {
            try {
                log.info("【websocket消息】 单点消息:" + message);
                session.getAsyncRemote().sendText(message);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    // 此为单点消息(多人)
    private void sendMoreMessage(String[] userIds, String message) {
        for (String userId : userIds) {
            Session session = sessionPool.get(userId);
            if (session != null && session.isOpen()) {
                try {
                    log.info("【websocket消息】 单点消息:" + message);
                    session.getAsyncRemote().sendText(message);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }

    }
}
