import {prisma} from "../config/db";

import {Request,Response} from "express";



export const createBlog=async(req: Request, res: Response)=>{
    try {
        const blog=req.body;
await prisma.blog.create({

    data: blog,
})
res.json({
    message:"blog created successfully"
})
    } catch (error) {
        console.log(error);
        
        
    }
};

export const getAllBlog= async(req: Request, res: Response)=>{
    try {
const blogs = await prisma.blog.findMany({})
        res.json(blogs)
    } catch (error) {
        console.log(error);

    }
};
export const getUserwithBlog=async(req: Request, res: Response)=>{
    try {
        const id=req.params;
        const userId = await prisma.blog.findMany({
            where:{
                user_id:id,
            },
            select:{
                title:true,
                CreatedDate:true,
                user:{
                    select:{
                        username:true,
                        email:true,
                    },

                }
            }
        });
        res.json(userId)


        
    } catch (error) {
        console.log(error);
        
    }
};
export const updateBlog = async (req: Request, res: Response) => {
    const { id } = req.params;
    const title = req.body.title;
  
    try {
    
          const blogs = await prisma.blog.update({
            where: {
              id: id,
            },
            data: {
              title: title,
            },
          });
          res.json(blogs)

          
      }
     catch (error) {
      console.log(error);
    }
}
export const deletBlog=async(req: Request, res: Response)=>{
    try {
        const id=req.params;
       await  prisma.blog.deleteMany({
            where:{
            
user_id:id,
            }
        })
       res.json({
        message:"blog deleted"
       }) 
    } catch (error) {
       console.log(error);
        
    }
};