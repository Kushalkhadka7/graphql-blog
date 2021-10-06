# TypeScript-Graphql-mongo-blog-app

## **Overview**

This is a simple app created using typescript and graphql (Apollo Server). It uses mongodb as database. User can register and login to the app and the create posts, comment on other user post or on their own post. The authentication is done using `Jwt`. One the user login `accessToken` and `refreshToken` is provides. So to access the protected routes like creating post or commenting on post, accessToken should be provided in auth headers for verification.

### **Prerequisites**

- [Git](https://git-scm.com/downloads)
- [Docker](https://docs.docker.com/install/)
- [Node.js](https://yarnpkg.com/en/docs/install)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [NPM](https://docs.npmjs.com/getting-started/installing-node)
- [ApolloServer](https://www.apollographql.com/docs/apollo-server/)
- [TypeScript](https://www.typescriptlang.org/)

## **Getting Started**

- Git clone the repository

  ```
  git clone git@github.com:Kushalkhadka7/ts-node-graphql.git <app_name>
  ```

- Cd to `<app_name>` and then:
  ```
  yarn or npm install
  ```
- Copy `.env.example` to `.env` file and update the credentials.
  ```
  cp .env.example .env
  ```
- App is ready to be started, Now need to setup database.

### **Setup mongo database using mongo atlas**

- Go to `https://www.mongodb.com/` and create account.
- Create a project and a database in mongo atlas (It will take a while, depending on the region.)
- It will create a `mongodb` cluster with the selected provider in selected region.
- Once the cluster gets created, now create the database.
- Click connect button which will give the connection string to the database.

  ```
  mongodb+srv://<name>:<password>@cluster0.ztyf9.mongodb.net/ <database_name>?retryWrites=true&w=majority
  ```

- Copy the connection string and replace `MONGO_URI` value in .env file with the connection string, also update the db credentials in the connection string.

### **Setup mongo database using docker-compose**

[TODO]

### **Starting the app**

- Once the db is setup, the app can be started.

  ```
  yarn start or npm start
  ```

- Navigate to the browser and `localhost:3000/graphql`, graphql playground is ready.

## **Using the app.**

- Register and Login

  ```
    mutation {
      register(name: "test", email: "tst@gmail.com", password: "test123"){
        name,email
      },

      login(email: "test@gmail.com", password: "test123") {
        accessToken
        refreshToken
        user {
          name
          email
        }
      }
    }
  ```

- It will give `accessToken` and `refreshToken` along with logged in user details.
- Use the `accessToken` in auth header to access other routes.
  ```
  {
    authorization: "Bearer <access_token>"
  }
  ```
- Now protected routes can be accessed.

- Create Post

  ```
  mutation {
    createPost(description: "<post text here>") {
      description
    }
  }
  ```

- Query posts

  ```
  query {
    # Get all posts created by logged in user, along with the comments associated with them.
    getPosts {
      description,
      comments {
        description
      }
    }


    # Get single post.
    getPost(postId:"post_id") {
      description,
      comments{
        description
      }
    }
  }
  ```

> Note: For more details about available schemas, they can be found under files directory.
