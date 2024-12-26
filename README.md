# Micro Instagram Backend

This is a simple backend for a Micro Instagram application built with Node.js, Express.js, Sequelize ORM, and MySQL.

## Prerequisites

-   **Node.js (v14 or higher recommended):** Download and install from [https://nodejs.org/](https://nodejs.org/).
-   **npm (comes with Node.js):** Usually installed along with Node.js.
-   **MySQL Server:** Download and install from [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/).
    -   During installation, make a note of your **root password**, **host** (usually `localhost`), and **port** (usually `3306`).
-   **MySQL Client (optional but recommended):**  MySQL Workbench ([https://www.mysql.com/products/workbench/](https://www.mysql.com/products/workbench/)) or a similar client to visually manage your database.

## Installation and Setup

1.  **Clone the repository (if applicable):**

    -   If the project is on GitHub (or a similar platform), clone it to your local machine:

    ```bash
    git clone <repository_url>
    cd micro-instagram-backend
    ```

2.  **Install dependencies:**

    -   Open your terminal and navigate to the project directory:

    ```bash
    cd micro-instagram-backend
    ```

    -   Install the required Node.js packages:

    ```bash
    npm install
    ```

3.  **Create the database:**

    -   Open your MySQL client (e.g., MySQL Workbench or the command-line client).
    -   Connect to your MySQL server using your root credentials.
    -   Create a new database named `microinstagram`:

        ```sql
        CREATE DATABASE microinstagram;
        ```

4.  **Configure environment variables:**

    -   Create a file named `.env` in the root directory of the project.
    -   Add the following content to your `.env` file, replacing the placeholders with your actual database credentials:

        ```
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=
        DB_NAME=microinstagram
        DB_PORT=3306
        ```

5.  **Run database migrations:**

    -   In your terminal, run the following command to create the necessary tables in your database:

        ```bash
        npx sequelize db:migrate
        ```

    -   **Note:** If you encounter issues, you might need to delete the `SequelizeMeta` table in your database (if it exists) and run the command again.

## Starting the Application

1.  **Start the server:**

    -   In your terminal, run:

        ```bash
        npm start
        ```

    -   This will start the application using `nodemon`, which will automatically restart the server when you make code changes.

2.  **Access the API:**

    -   The API will be available at `http://localhost:3001` (unless you change the port in your code).

## API Endpoints

| Method | Endpoint                | Description                                           | Request Body (JSON)                                                                              |
| ------ | ----------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| GET    | `/users`                | Get all users                                         | -                                                                                                |
| POST   | `/users`                | Create a new user                                     | `{ "name": "string", "mobileNumber": "string(unique)", "address": "string", "postCount": integer(default 0) }` |
| PUT    | `/users/:userId`        | Edit a user (replace `:userId` with the actual user ID) | `{ "name": "string", "mobileNumber": "string", "address": "string", "postCount": integer }`       |
| DELETE | `/users/:userId`        | Delete a user                                         | -                                                                                                |
| GET    | `/users/:userId/posts`  | Get all posts of a user                              | -                                                                                                |
| GET    | `/posts`                | Get all posts                                         | -                                                                                                |
| POST   | `/posts`                | Create a post for a user                             | `{ "title": "string", "description": "string", "images": ["string", "string"], "userId": integer }` |
| PUT    | `/posts/:postId`         | Edit a post                                           | `{ "title": "string", "description": "string", "images": ["string", "string"] }`                  |
| DELETE | `/posts/:postId`         | Delete a post                                         | -                                                                                                |

## Testing the API

You can use tools like Postman ([https://www.postman.com/](https://www.postman.com/)) or Insomnia ([https://insomnia.rest/](https://insomnia.rest/)) to test the API endpoints.

**Example (using Postman):**

1.  **Create a new request.**
2.  **Set the request method (GET, POST, PUT, DELETE).**
3.  **Enter the URL (e.g., `http://localhost:3001/users`).**
4.  **Add a request body (in JSON format) for POST and PUT requests.**
5.  **Send the request.**

## Troubleshooting

-   **Tables not created:**
    -   Make sure your database credentials in `.env` are correct.
    -   Verify that your MySQL server is running.
    -   Delete the `SequelizeMeta` table in your database and re-run migrations (`npx sequelize db:migrate`).
    -   Check the terminal output for any error messages during migration.
-   **Connection errors:**
    -   Double-check your firewall settings to ensure that your Node.js application can connect to the MySQL server.
-   **Other errors:**
    -   Examine the error messages in the terminal carefully. They often provide helpful clues for debugging.

## Project Structure