import User from "../../../models/UserModel";
import dbConnect from "../../../utils/MongoConnect";


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
    dbConnect();

    if (req.method === "GET") {
        try {
            const users = await User.find();
            res.status(200).send(users);

        } catch (error) {
            res.status(500).send(error);
        }
    }

   
}
