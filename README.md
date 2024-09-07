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