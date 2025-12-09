import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";


const Signup = () => {
    const navigate = useNavigate();
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [username, setuername] = useState("");
    const [password, setpassword] = useState("");
    const [message, setmessage] = useState("");

    const formSubmit = (e) => {
        e.preventDefalut();

        const signDetails = { firstname, lastname, email, username, password }

        try {
            const respones = axios.post("https://job-final.onrender.com/register/", signDetails, {
                headers: {
                    "content-Type": "application/json",
                },
            });
            if (respones.status === 200 || respones.status === 201) {
                setmessage("✅ Registered successfully!");
                navigate("")
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
            }

        } catch (error) {
            setmessage("❌ Something went wrong. Try again!");
        }

    }

    return (
        <>
            <form onSubmit={formSubmit} className="form-container">
                <p>{message}</p>
                <label>First Name</label>
                <input type="text" placeholder="Enter Your First Name" name="firstname" value={firstname} onChange={(g) => (setfirstname(g.target.value))} />
                <label>Last Name</label>
                <input type="text" placeholder="Enter Your Last Name" name="lastname" value={lastname} onChange={(g) => (setlastname(g.target.value))} />
                <label>Email</label>
                <input type="text" placeholder="Enter Your Email" name="email" value={email} onChange={(g) => (setemail(g.target.value))} />
                <label>User Name</label>
                <input type="text" placeholder="Enter Your UserName" name="username" value={username} onChange={(g) => (setuername(g.target.value))} />
                <label>Password</label>
                <input type="password" placeholder="Enter Your Password" name="password" value={password} onChange={(g) => (setpassword(g.target.value))} />
                <button type="sumbit">Signup</button>
            </form>
        </>
    )
}
export default Signup