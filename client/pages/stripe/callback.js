import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { Context } from "../../context"


//request the backend to get the latest user stripe data, and store them to ze database after setting up the stripe
// information oe the frontEnd
const StripeCallback = () => {
    const { state: { user }, dispatch } = useContext(Context);
    useEffect(() => {
        if (user) {
            const user = JSON.parse(window.localStorage.getItem("currentUser"));
                const header = user.jwt;
            const res = axios.get(process.env.NEXT_PUBLIC_API + '/makeInstructor',{
                headers: {
                  'Authorization': `Bearer ${header}`
                }}).then(res => {
                dispatch({
                    type: "LOGIN",
                    payload: res.data
                })
                window.localStorage.setItem("currentUser", JSON.stringify(res.data))
                window.location.href = "/user"
            }).catch((e) => {
                console.log(e.response.data)
                window.location.href = "/user"
            })
        }
    }, [])

    return (<>

        <SyncOutlined spin className="d-flex justify-content-center display-1 text-danger p-3"></SyncOutlined>
    </>)
}



export default StripeCallback;