import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast({buttonText}){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button type="submit" className="btn btn-block w-100 btn-primary" onClick={notify}>{buttonText}</button>
      <ToastContainer position="top-center"/>
    </div>
  );
}

export default Toast;