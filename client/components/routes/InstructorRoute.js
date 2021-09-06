import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import UserNav from '../navigation/userNavigation';
import { SyncOutlined } from '@ant-design/icons';
import { Context } from '../../context';
import InstructorNavigation from '../navigation/InstructorNavigation';



// UINSTRUCTOR ROUTE PROTECTION
// HOC component to check whether the user is Instructor:
// The BACKEND need to check whether or not the user is instructor before serving the page with content
//The BACKEND WILL CHEKC for :
// --1. THE SESSION TOKEN whether or not the user has an active session
// --3. USER EXIST
//---2  USER has INSTRUCTOR Rights by fetchin

const InstructorRoute = ({ children }) => {
    const router = useRouter()
    const [hidden, setHidden] = useState(true);
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        const fetchConstructor = async () => {
            try {
                const { data } = await axios.get('/api/current-instructor');
                if (data.ok) {
                    setHidden(false)
                }
            }
            catch (e) {
                setHidden(true);
                console.error(e);
                if(state.user) {
                  router.push('/')
                }
                else {
                    router.push('/login')

                }
               
            }
        }
        fetchConstructor();
    }, [])
    return (
        <>
            {hidden ? <SyncOutlined spin className="d-flex justify-content-center text-center p-2"></SyncOutlined> :

                <div className="container-fluid">
                    <div className="row">

                        <div className="nav-side col-md-2">
                            <InstructorNavigation />
                        </div>
                        <div className="main-content col-md-10">
                            {children}
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default InstructorRoute;