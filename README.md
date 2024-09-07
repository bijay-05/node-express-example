# node-express-example
Learning to build REST APIs with ExpressJS in Node

Let's start by installing required packages with `npm`.
```
npm i express @prisma/client prisma 
npm i -D typescript tsx # dev dependencies
```

## Running postgresql database
We will run postgresql database in docker container with the following command.
```
$ docker run -p 5432:5432 -e POSTGRES_PASSWORD=<password> -d postgres
$ docker ps # check if container is up or not
```

## Create Database schema
We will use `Prisma ORM` to create database schema and run migrations to migrate the `Prisma Model` to database.
```
$ npx prisma init
$ npx prisma migrate dev
```

## Directory structure

`index.ts`  => `Routes`  => `Controllers`  => `Services`  => `Models`

- The request from client flows in above direction.
- There are pre-defined routes with different HTTP verbs in `Routes`
- `Request` and `Response` handling is done by `Controllers`
- All the logic to serve the use cases are handled by `Services`
- Finally, `Models` serve as the persistence layer, acting as a bridge between database and application.

### Post request success
![](https://github.com/bijay-05/node-express-example/blob/main/images/create-post-request-success.png)
