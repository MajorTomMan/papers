module.exports = {
    port: 4000, // express 服务启动端口
    /* 数据库相关配置 */
    config: {
      host: 'localhost', // 主机名
      port: 3300,        // MySQL 默认端口为 3306
      user: 'master',          // 使用 root 用户登入 MySQL
      password: '981221', // MySQL 密码，用你自己的
      database: 'chatroom', // 使用数据库
      charset:'utf8'
    }
}