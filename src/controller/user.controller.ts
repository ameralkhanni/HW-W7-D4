import {prisma} from "../config/db";

import {Request,Response} from "express";

export const Register=async(req:Request, res:Response)=>{

    try {
        const user=req.body;
        await prisma.user.create({
            data: user,
        });
        res.json({
            message:"user created successfully"
        });
    } catch (error) {
        console.log(error);
        
        
    }
};
export const getAllUsers = async(req: Request, res: Response)=>{
    const users = await prisma.user.findMany();
    res.json(users);

}

// logIn

export const Login =async(req:Request, res:Response)=>{

const {username,password} = req.body;
try{
 let user=await prisma.user.findFirst({
    where:{
        username,
        password,
    },
});
if(!user){
    res.json({
        message:"woring username or password",
    });
} res.json({
    message:`wellcome back ${user?.id}`,

})
} catch(error){
    console.log(error);
    
}
    
}