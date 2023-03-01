import  express ,{Application} from "express";
const app:Application= express();
import userRoutes from './routes/user.routes'
import { connectDB } from "./config/db";
let port:number=3003;
app.use(express.json());
connectDB()

app.use('/users',userRoutes);



app.listen(port,() => console.log(`express server started on port ${port}`));

