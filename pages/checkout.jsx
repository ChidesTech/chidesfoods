import { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import axios from "axios";
import {useDispatch} from "react-redux";
import { addCheckoutInfo } from "../redux/checkoutSlice";

export default function Checkout(params) {
    const [name , setName] = useState("");
    const [address , setAddress] = useState("");
    const [number , setNumber] = useState(0);
    const [city , setCity] = useState("");
    const [state , setState] = useState("");
    const [error , setError] = useState("");
    const user = useSelector(state => state.user.info);
    const checkout = useSelector(state => state.checkout.info);
    const router = useRouter();
    const dispatch = useDispatch()
    useEffect(() => {
        if (!user._id ) {
            router.push("/login")
        }
        if(checkout){
            setName(checkout.name);
            setAddress(checkout.address);
            setCity(checkout.city);
            setState(checkout.state);
            setNumber(Number(checkout.number));
        }
    }, []);


    async function submitHandler(e) {
        e.preventDefault();
        if(!name || !address || !city || !state){
            setError("Please Fill All Fields");
            return;
        }
     dispatch(addCheckoutInfo({name, address, number:number.toString(), city, state}));
     router.push("/place-order");  
    }
    return <form action="" className="form" onSubmit={submitHandler}>
    {error && <div className="alert alert-danger">{error}</div>}
    <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control " placeholder="Enter Name" />
    <input type="text" value={address} onChange={e => setAddress(e.target.value)} className="form-control " placeholder="Enter Address" />
    <input type="number" value={number} onChange={e => setNumber(e.target.value)} className="form-control " placeholder="Enter Number" />
    <input type="text" value={city} onChange={e => setCity(e.target.value)} className="form-control " placeholder="Enter City" />
    <input type="text" value={state} onChange={e => setState(e.target.value)} className="form-control " placeholder="Enter State" />
    <button type="submit" className="btn-black form-control text-bold">Continue</button>
</form>
}