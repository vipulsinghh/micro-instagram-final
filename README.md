# Micro Instagram Backend

This is a simple backend for a Micro Instagram application built with Node.js, Express.js, and MySQL.

## Prerequisites

-   Node.js (v14 or higher recommended)
-   npm (comes with Node.js)
-   MySQL server

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd micro-instagram-backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file in the root directory and add your database credentials:**

    ```
    DB_HOST=localhost
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=micro_instagram
    DB_PORT=3306
    ```

    Replace the placeholders with your actual MySQL credentials.

4.  **Run database migrations:**

    ```bash
    npx sequelize db:migrate
    ```

5.  **Start the application:**

    ```bash
    npm start
    ```

    The server will run on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint             | Description                                       |
| ------ | -------------------- | ------------------------------------------------- |
| GET    | `/users`             | Get all users                                     |
| POST   | `/users`             | Create a new user                                 |
| PUT    | `/users/:userId`     | Edit a user                                       |
| DELETE | `/users/:userId`     | Delete a user                                     |
| GET    | `/users/:userId/posts` | Get all posts of a user                       |
| GET    | `/posts`             | Get all posts                                     |
| POST   | `/posts`             | Create a post for a user                         |
| PUT    | `/posts/:postId`      | Edit a post                                       |
| DELETE | `/posts/:postId`      | Delete a post                                     |