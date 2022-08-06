import User from "../../../models/UserModel";
import Order from "../../../models/OrderModel";
import dbConnect from "../../../utils/MongoConnect";


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
dbConnect();
const {
    query : {id}
}  = req;
   
    if(req.method === "GET"){
        try {
            const user = await User.findById(id);
            const orders = await Order.find({user : id});
            res.status(200).send({user : user, orders: orders});

        } catch (error) {
            res.status(500).send(error);
        }
    }
   
    if(req.method === "POST"){
        try {
            let product = new Product(req.body);
            product = await product.save();
            res.status(201).send(product);

        } catch (error) {
            res.status(500).send(error);
        }
    }

    if(req.method === "DELETE"){
        try {
            const deletedProduct = await Product.findByIdAndRemove(id);
            res.status(200).send(deletedProduct);

        } catch (error) {
            res.status(500).send(error);
        }
    }

  }
  