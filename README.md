# Blogg API

This is a simple blogging platform API built with Express and Mongoose, following the MVC architecture. It includes endpoints for creating, reading, updating, and deleting blog posts.

## Features

- Create, read, update, and delete blog posts
- JSON responses with status messages
- Cross-Origin Resource Sharing (CORS) enabled
- API documentation generated with `apidoc`

## Prerequisites

- Node.js (v14.x or higher)
- MongoDB 7 or higher

## Installation

1. **Clone the repository:**

    ```
    git clone https://github.com/anandpotukuchi/blogg-backend.git
    cd blogg-backend
    ```

2. **Install dependencies:**

    ```
    npm i
    ```

3. **Creating the variables:**

    ```
    cp env.example .env
    ```

4. **Run the application:**

    ```
    npm start
    ```

    The server will start on `http://localhost:3000`.

## API Documentation

Generate the API documentation using `apidoc`:

1. **Install `apidoc`:**

    ```
    npm install apidoc -g
    ```

    Or, if you prefer a local installation:

    ``
    npm install apidoc --save-dev
    ```

2. **Generate the documentation:**

    ```
    npx apidoc -i routes/ -o apidoc/
    ```

    If `apidoc` is installed globally, use:

    ```
    apidoc -i routes/ -o apidoc/
    ```

3. **View the documentation:**

    The documentation will be generated in the `apidoc/` directory. You can view it by navigating to `http://localhost:3000/apidoc`.

## Project Structure

```
/blogg-backend
│
├── /controllers
│ └── postController.js
│
├── /models
│ └── Post.js
│
├── /routes
│ └── postRoutes.js
│
├── /views
│ └── posts.pug
│
├── /apidoc
│ └── [generated documentation]
│
├── app.js
├── package.json
├── .env
└── README.md
```

## Routes

- **GET /posts**: Get all posts
- **POST /posts**: Create a new post
- **GET /posts/:id**: Get a post by ID
- **PUT /posts/:id**: Update a post by ID
- **DELETE /posts/:id**: Delete a post by ID

## Example Post Data

```
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post. It contains valuable information and insights.",
  "author": "John Doe"
}```



