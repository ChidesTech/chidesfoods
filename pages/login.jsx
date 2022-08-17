import { useEffect, useState } from "react"
import Link from "next/link";
import axios from "axios";
import validator from "validator";
import { useRouter } from "next/router";
import { saveUser } from "../redux/userSlice";
import {useDispatch, useSelector} from "react-redux";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.info);
    useEffect(() => {
        if (user._id ) {
            router.push("/")
        }
    }, [])
    async function submitHandler(e) {
        e.preventDefault();
        if (validator.isEmpty(email) || validator.isEmpty(password)) {
            setError("All fields are required");
            return;
        }

        if (!validator.isEmail(email)) {
            setError("Invalid Email");
            return;
        }

        try {
            const { data } = await axios.post("//users/login", { email, password });
            if (data) {
                alert("Login Successful");
                
              dispatch(saveUser(data));
                router.push("/")
            }
        } catch (error) {
            error.response && error.response.data.message
                ? setError(error.response.data.message)
                : setError(error.message);
        }

    }

    return <>
        <form action="" className="form" onSubmit={submitHandler}>
            {error && <div className="alert alert-danger">{error}</div>}
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control " placeholder="Enter Email" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control " placeholder="Enter Password" />
            <button type="submit" className="btn-black form-control text-bold">Login</button>
            <Link href="/register">Register</Link>

        </form>
    </>

}





