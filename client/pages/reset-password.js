import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import { SyncOutlined } from "@ant-design/icons";
import Link from 'next/link';
import { useState, useContext, useEffect } from "react";
import { Context } from '../context'
import { useRouter } from 'next/router';


const resetPasswordComponent = () => {

    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [inputName, setInputName] = useState("");
    const [code, setCode] = useState("")
    const [passwordInput, setPasswordInput] = useState(false);
    const [newPassword, setNewPassword] = useState('')
    //GLOBAL STATE
    const { state, dispatch } = useContext(Context);
    const { user } = state;

    const router = useRouter();
/*
    useEffect(() => {
        if (user) {
            router.push('/')
        }
    }, [user]) */

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post("/api/forgot-password", { email })
            setSuccess(true)
            setLoading(false);
            toast("check your email fro the secret code");
        } catch (error) {
            //error : {response:{data:error}}
            console.log(err.response.data)
            setLoading(false);
            toast.error(err.response.data);
        }
    }

    const handleCodeAndNewPasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post("/api/reset-password", { code, hashedPassword:newPassword })
            setLoading(false);
            toast("success!");
            router.push("/login");
        } catch (error) {
            //error : {response:"message"}
            setLoading(false);
            toast.error(error.response);
        }
    }

    return (
        <>
            <h1 className="jumbotron bg-primary square text-center p-5 ">{!success ? "reset passsword" : "enter code"}</h1>
            <div className="container shadow p-3 mb-5 bg-white rounded offset-md-4 col-md-4 pb-3">
                <form action="" onSubmit={success ? handleCodeAndNewPasswordSubmit : handleEmailSubmit}>
                    {!success && <input
                        type="email"
                        name="emailInput"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setInputName(e.target.name)
                        }}
                        className="form-control mb-4 p-2" id=""
                        placeholder="Enter email"
                        required
                    />}
                    {success && (
                        <>
                            <label htmlFor="codeInput">Enter received Code</label>
                            <input
                                type="text"
                                name="codeInput"
                                value={code}
                                onChange={(e) => {
                                    setCode(e.target.value)
                                    setInputName(e.target.name)
                                }}
                                className="form-control mb-4 p-2" id=""
                                placeholder="Enter code"
                                required
                            />

                            <label htmlFor="codeInput">Enter new Password</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={newPassword}
                                onChange={(e) => {
                                    setNewPassword(e.target.value)
                                    setInputName(e.target.name)
                                }}
                                className="form-control mb-4 p-2" id=""
                                placeholder="Enter new password"
                                required
                            />
                        </>
                    )}

                    <button type="submit"
                        className="btn btn-block w-100 btn-primary"
                        disabled={!email}
                    > {loading ? <SyncOutlined spin /> : "Submit"}
                    </button>
                </form>
            </div>


        </>
    )

}

export default resetPasswordComponent;