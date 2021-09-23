import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import UserNav from '../navigation/userNavigation';
import { SyncOutlined } from '@ant-design/icons';

// HOC component to check whether the user is logeedin,
// then it render the component child, whether ot not the user is logein .
const LearnerRoute = ({ children }) => {


    const router = useRouter()
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get(process.env.NEXT_PUBLIC_API  + '/current-user');
                if (data.ok) {
                    setHidden(false)
                }
            }
            catch (e) {
                setHidden(true);
                console.error(e);
                router.push('/login');
            }
        }
        fetchUser();
    }, [])
    return (
        <>
            {hidden ? <SyncOutlined spin className="d-flex justify-content-center text-center p-4"></SyncOutlined> :
                
                <div className="container-fluid">
                    <h1>HIGHER ORDER COMPONENT</h1>
                 {children}
                </div>

            }
        </>
    )
}

export default LearnerRoute;