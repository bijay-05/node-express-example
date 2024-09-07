import express, {Request, Response, NextFunction} from 'express';

import * as postService from '../services/posts.service.js';
import { IPost } from '../interfaces/posts.interface.js';

export const getAllPosts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { posts, message } = await postService.getAllPosts();
        res.status(200).json({ posts, message })
    } catch (error) {
        next(error)
    }
}

export const createPost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const post : Omit<IPost, 'id'> = req.body;
    try {
        const { createdPost, message } = await postService.createPost(post);
        res.status(201).json({createdPost, message})
    } catch (error) {
        next(error)
    }
}