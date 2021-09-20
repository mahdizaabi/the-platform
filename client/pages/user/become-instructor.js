import axios from 'axios';
import { useContext, useState } from 'react';
import { Button } from 'antd';
import {
    SettingOutlined,
    UserSwitchOutlined,
    LoadingOutlined
} from '@ant-design/icons';
import { toast } from 'react-toastify';
import { Context } from '../../context';
import { useRouter } from 'next/router';

const BecomeInstructor = () => {
    const [loading, setLoading] = useState(false);
    const { state: { user } } = useContext(Context);

    const router = useRouter();
    const test = () => {
        router.push('/stripe/callback')
    }

    const becomeInstructor = () => {
        axios.post('https://tpbackend01.azurewebsites.net/api/make-instructor').then(response => {
            console.log(response)

            //the link take the user to an external resource which is the strip configuration page!
            window.location.href = response.data
        })
            .catch(e => console.log(e))
    }
    return (<>
        <h1 className="p-4 jumbotron text-center square">
            #Become Instructor now !
        </h1>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <div className="pt-4 d-flex  justify-content-center flex-column align-items-center text-centers">
                        <UserSwitchOutlined className="display-1 pb-3">
                        </UserSwitchOutlined>
                        <br />

                        <h2>Setup Payout</h2>
                        <Button
                            onClick={test}
                            className="mb-3 d-flex align-items-center"
                            type="primary"
                            shape="round"
                            icon={loading ? <LoadingOutlined></LoadingOutlined> : <SettingOutlined></SettingOutlined>}
                            size="large"
                            disabled={user && user.role && user.role.includes("Instructor")}
                        >
                            {loading ? "processiing" : "submit"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default BecomeInstructor;