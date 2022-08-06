import User from "../../../models/UserModel";
import dbConnect from "../../../utils/MongoConnect";
import bcrypt from "bcryptjs";


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
dbConnect();
   
  

    if(req.method === "POST"){
        let email = await User.findOne({ email: req.body.email });
    if (email) {
        res.status(500).send({ message: "Email has already been used" })
        console.log({ message: "Email has already been used" })
        return;
    };
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        isAdmin : false
    });

    await user.save();
    res.send(user);
    }
  }
  