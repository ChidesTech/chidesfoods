import Order from "../../../models/OrderModel";
import dbConnect from "../../../utils/MongoConnect";


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
    dbConnect();

    if (req.method === "GET") {
        try {
            const orders = await Order.find();
            res.status(200).send(orders);

        } catch (error) {
            res.status(500).send(error);
        }
    }
    if (req.method === "POST") {
        try {
            let total = req.body.cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
            let order = new Order({
                name : req.body.name,
                address : req.body.address,
                number : req.body.number,
                city : req.body.city,
                state : req.body.state,
                user : req.body.user,
                cartItems : req.body.cartItems,
                total : total
            });
            order = await order.save();
            res.status(201).send(order);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
