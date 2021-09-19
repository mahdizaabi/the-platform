import { useEffect, useState } from "react";
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import { SyncOutlined } from "@ant-design/icons";
import Link from 'next/link';
import { Context } from "../context";
import { useContext } from "react";
import { useRouter } from "next/router";
const Register = () => {

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const {state, dispatch} = useContext(Context)

    const {user} = state;

    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push('/')
        }
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true);
            const { data } = await axios.post(`http://tpbackend01.azurewebsites.net/api/register`, { username, email, password })
            setLoading(false)
            toast.success('registration succefull, please login')
        } catch (err) {
            toast.error(err.response.data);
            setLoading(false);
        }
    }
    return (
        <>
            <h1 className="jumbotron bg-primary square text-center p-5 ">Register</h1>
            <div className="container shadow p-3 mb-5 bg-white rounded offset-md-4 col-md-4 pb-3">
                <form action="" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => { setName(e.target.value) }}
                        className="form-control mb-4 p-2" id=""
                        placeholder="Enter name"
                        required
                    />
                    <input
                        type="email"
                        name=""
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        className="form-control mb-4 p-2" id=""
                        placeholder="Enter email"
                        required
                    />
                    <input
                        type="password"
                        name=""
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        className="form-control mb-4 p-2" id=""
                        placeholder="Enter password"
                        required
                    />

                    <button type="submit"
                        className="btn btn-block w-100 btn-primary"
                        disabled={!username || !email || !password || loading}
                    > {loading ? <SyncOutlined spin /> : "Submit"}

                    </button>
                </form>

                <p className="text-center p-3">
                    Already registred?
                    <Link href="/login">
                        <a>login</a>
                    </Link>
                </p>
            </div>
        </>
    )
}


export default Register;