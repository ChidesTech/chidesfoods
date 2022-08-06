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
            const product = await Product.findById(id);
            res.status(200).send(product);

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
            const deletedOrder = await Order.findByIdAndRemove(id);
            res.status(200).send(deletedOrder);

        } catch (error) {
            res.status(500).send(error);
        }
    }

  }
  