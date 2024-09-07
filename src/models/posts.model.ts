import { PrismaClient } from '@prisma/client'
import { IPost } from '../interfaces'

const prisma = new PrismaClient();


class PostModel {
    
    async findAll(): Promise<IPost[]> {
        const allPosts = await prisma.posts.findMany();

        return allPosts
    }

    async create(post: Omit<IPost, 'id'>): Promise<IPost> {
        const createdPost = await prisma.posts.create({
            data: post
        })

        return createdPost
    }
}