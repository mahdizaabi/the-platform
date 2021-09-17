import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import "../public/css/styles.css";
import TopNavigation from "../components/TopNavigation"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider, Context } from '../context';
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { render } from 'react-dom'


const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 3000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}


function MyApp({ Component, pageProps }) {
    console.log("_app is rendering now")
    return (
        <Provider>
            <AlertProvider template={AlertTemplate} {...options}>

                <ToastContainer position="top-center" />
                <TopNavigation />
                <Component {...pageProps} />
            </AlertProvider>

        </Provider>
    )
}

export default MyApp;
