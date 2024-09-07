import express, {Application} from 'express';
import postRouter from './routes/posts.route.js'
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';


const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(express.json());

app.use('/posts',postRouter);

app.use(notFound);
app.use(errorHandler);

const server = app.listen(PORT, () => {
    console.log("Server running ...")
    
})

process.on('SIGINT', () => server.close(() => {
    console.log('Received kill signal, shutting down gracefully');
    process.exit(0);
}))

process.on('SIGTERM', () => server.close(() => {
    console.log('Received kill signal, shutting down gracefully');
    process.exit(0);
}))

