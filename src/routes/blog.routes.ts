import { Router } from "express";
import { createBlog, deletBlog, getAllBlog, getUserwithBlog, updateBlog } from "../controller/blog.controller";
const router=Router();
router.post('/',createBlog)
router.get('/',getAllBlog)
router.get('/:id',getUserwithBlog)
router.delete('/:id',deletBlog)
router.put('/:id',updateBlog)






export default router