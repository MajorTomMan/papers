package com.My.Server.socket;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import jakarta.websocket.OnClose;
import jakarta.websocket.OnError;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;

@Component
@Service
@ServerEndpoint("/Group/{name}")
public class webSocketServer {
    // concurrent包的线程安全Set，用来存放每个客户端对应的WebSocket对象。
    private static ConcurrentHashMap<String, webSocketServer> webSocketMap = new ConcurrentHashMap<>();
    // 与某个客户端的连接会话，需要通过它来给客户端发送数据
    protected Session session;
    private String name;
    private static ConcurrentHashMap<String, Object> map = new ConcurrentHashMap<>();

    /**
     * 连接建立成功调用的方法
     * 
     * @throws IOException
     */
    @OnOpen
    public void onOpen(Session session, @PathParam("name") String name) throws IOException {
    }

    @OnError
    public void onError(Throwable e, Session session) {
        try {
            session.close();
        } catch (Exception e1) {
            // TODO Auto-generated catch block
            e1.printStackTrace();
        }
    }

    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose() {

    }

    /**
     * 收到客户端消息后调用的方法
     * @ Param message 客户端发送过来的消息
     */
    @OnMessage
    public void onMessage(String message, Session session) {
    }

    private void sendMessage(String result) throws IOException {
        if(session.isOpen()){
            this.session.getBasicRemote().sendText(result);
        }
    }

    private void startThread(Boolean flag) {
        Thread thread = new Thread() {
            @Override
            public void run() {
                // TODO Auto-generated method stub
                while (flag) {
                    try {
                        Thread.sleep(3);
                    } catch (InterruptedException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    }
                }
            }
        };
        thread.start();
    }
}
