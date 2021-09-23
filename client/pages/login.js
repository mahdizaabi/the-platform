import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import { SyncOutlined } from "@ant-design/icons";
import Link from 'next/link';
import { useState, useContext, useEffect } from "react";
import { Context } from '../context'
import { useRouter } from 'next/router';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    //GLOBAL STATE
    const { state, dispatch } = useContext(Context);
    const { user } = state;

    const router = useRouter();

    //toprevent an authenticated user from accessing the login page
    /*
    useEffect(() => {
            if (user) {
                router.push('/')
        }
    }, [user])
*/
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true);
            const response = await axios.post(process.env.NEXT_PUBLIC_API + `/loogin`, { "username": email, password })
            const { data } = response;
            console.log(response.headers);
            console.log(data)
            dispatch({
                type: "LOGIN",
                payload: data
            })
            //save userData in local storage, to avoid data lost after refreshing!
            window.localStorage.setItem('currentUser', JSON.stringify(data));
            setLoading(false)
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.jwt}`;
            toast.success("You've been succeffully signin")
            router.push('/user');

        } catch (err) {
            console.log(err.response.data)
            toast.error(err.response.data);
            setLoading(false);
        }
    }
    return (
        <>
            <h1 className="jumbotron bg-primary square text-center p-5 ">Login</h1>
            <div className="container shadow p-3 mb-5 bg-white rounded offset-md-4 col-md-4 pb-3">
                <form action="" onSubmit={handleSubmit}>

                    <input
                        type=""
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
                        disabled={!email || !password || loading}
                    > {loading ? <SyncOutlined spin /> : "Submit"}

                    </button>
                </form>

                <p className="text-center p-3">
                    Not yet registred ?{" "}
                    <Link href="/register">
                        <a>Register</a>
                    </Link>
                </p>

                <p className="text-center">
                    forgot password ?
                    <Link href="/reset-password">
                        <a className="text-danger">reset password</a>
                    </Link>
                </p>


            </div>


        </>
    )
}


export default Login;
