import express, { Router } from "express";
import * as postController from '../controllers/posts.controller.js'

const router: Router = express.Router();

router.route('/')
.get(postController.getAllPosts)
.post(postController.createPost)


export default router;