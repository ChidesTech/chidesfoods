import User from "../../../models/UserModel";
import dbConnect from "../../../utils/MongoConnect";
import bcrypt from "bcryptjs";
import cookie from "cookie";
import {v4 as createToken} from "uuid";
    // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
    export default async function handler(req, res) {
     dbConnect();
    if(req.method === "POST"){
        let existingUser = await User.findOne({ email: req.body.email });
        if (!existingUser) {
            res.status(500).send({ message: "User does not exist" });
            return;
        }
        if (!bcrypt.compareSync(req.body.password, existingUser.password)) {
            res.status(500).send({ message: "Incorrect Password" });
            return;
        }       
        const token = createToken();
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token,{
                maxAge : 60*60*24*30,
                sameSite : "strict",
                path :"/",

            })
        )
        res.status(200).send({ 
            _id: existingUser._id,
            email : existingUser.email,
            username : existingUser.username,
            isAdmin : existingUser.isAdmin,
            token });      
    }
  }
  