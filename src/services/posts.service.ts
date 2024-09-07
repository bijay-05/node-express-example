import PostsModel from "../models/posts.model.js";
import { IPost } from "../interfaces";

export const getAllPosts = async(): Promise<{posts: IPost[]; message:string}> => {
    try {
        const posts = await PostsModel.findAll();
        return {
            posts,
            message: 'Posts fetched successfully'
        }
    } catch (error) {
        console.log('Error from getAllPosts service: ', error);
        throw error;
    }
}

export const createPost = async(post: Omit<IPost, 'id'>): Promise<{createdPost: IPost; message: string}> => {
    try {
        const createdPost = await PostsModel.create(post);
        return {
            createdPost,
            message: 'Post created successully'
        }       
    } catch (error) {
        console.log('Error from createPost service: ', error);
        throw error;
    }
}