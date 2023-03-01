import { Router } from "express";
import { Login, Register, getAllUsers } from "../controller/user.controller";
const router=Router();
router.post('/',Register)
router.get('/',getAllUsers)

router.get('/user',Login)

export default router;