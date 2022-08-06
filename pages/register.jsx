import { useState } from "react"
import Link from "next/link";
import axios from "axios";
import validator from "validator";
import { useRouter } from "next/router";





export default function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
   const router = useRouter();
  async function submitHandler(e){
         e.preventDefault();
     if(validator.isEmpty(email) || validator.isEmpty(username) || validator.isEmpty(password) || validator.isEmpty(confirmPassword)){
            setError("All fields are required");
            return;
            }
            
       if(!validator.isEmail(email)){
         setError("Invalid Email");
         return;
         }
       
         if(!validator.isAlphanumeric(username)){
         setError("Username must be alphanumeric");
         return;
         }

         if(password.length < 6 ){
            setError("Password must be at least 6 characters");
            return;
         }

         if(password !== confirmPassword){
         setError("Passwords do not match");
         return;

         }
         try {
            const {data} = await axios.post("http://localhost:3000/api/users/register", {email, username, password});
            if(data){
                alert("Registration Successful");
                router.push("/login")
            }   
         } catch (error) {
            error.response && error.response.data.message
                ? setError(error.response.data.message)
                : setError(error.message);
         }
      
  }

    return <>
  <form action="" className="form" onSubmit={submitHandler}>
    {error && <div className="alert alert-danger">{error}</div> }
    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control " placeholder="Enter Email" />
    <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="form-control " placeholder="Enter Username" />
    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control " placeholder="Enter Password" />
    <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="form-control " placeholder="Confirm Password" />
    <button type="submit" className="btn-black form-control text-bold">Register</button>
  <Link href="/login">Register</Link>

  </form>
    </>

}





