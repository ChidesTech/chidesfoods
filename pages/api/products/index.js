import Product from "../../../models/ProductModel";
import dbConnect from "../../../utils/MongoConnect";


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
    dbConnect();

    if (req.method === "GET") {
        try {
            // const products = await Product.find();
            // res.status(200).send(products);
          const  products = [
                {_id : 1 ,name :"first", image :"http://res.cloudinary.com/chidestech/image/upload/v1641464145/awsvoz6xbck77htqe5qf.jpg", price:7000},
                {_id : 2 ,name :"first", image :"http://res.cloudinary.com/chidestech/image/upload/v1641464145/awsvoz6xbck77htqe5qf.jpg", price:7000},
                {_id : 3 ,name :"first", image :"http://res.cloudinary.com/chidestech/image/upload/v1641464145/awsvoz6xbck77htqe5qf.jpg", price:7000},
            ]
            res.status(200).send(products);

        } catch (error) {
            res.status(500).send(error);
        }
    }

    if (req.method === "POST") {
        try {
            let product = new Product(req.body);
            product = await product.save();
            res.status(201).send(product);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
