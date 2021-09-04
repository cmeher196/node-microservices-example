const config = {
    PORT: process.env.PORT || 8080,
    news_url: (process.env.news_URL || "http://localhost:8082/"),
    users_url: (process.env.users_URL || "http://localhost:8081/auth/v1/users/"),
    read_news_url: (process.env.news_URL || "http://localhost:8084/api/readLater")
}

module.exports = config