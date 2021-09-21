import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context';
import UserRoute from '../../components/routes/UserRoute';
import { useAlert } from 'react-alert'
import axios from 'axios';
import { Avatar } from 'antd'
import Link from 'next/link'
import { SyncOutlined, PlayCircleOutlined } from '@ant-design/icons'
const UserIndex = () => {
    const { state: { user } } = useContext(Context);
    const [fetchedCourses, setFetchedCourses] = useState([]);
    const alert = useAlert();
    useEffect(() => {
        const loadCourses = async () => {
            try {
                const user = window.localStorage.getItem("currentUser");
                const header = user.jwt;
                    console.log("======>", user)
                const response = await axios.get(`https://tpbackend01.azurewebsites.net/api/checkuser`,{
                    headers: {
                      'Authorization': `Bearer ${header}`
                    }})
                setFetchedCourses(response.data)
                console.log(response.data)
                alert.success('Courses are succefully loaded')
            } catch (error) {
                console.log(error.message)
                alert.error("couldnx't fetch the courses, try later")
            }

        }
        loadCourses()
    }, [])

    return (
        <div>
            <h1>User is activeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
        </div>
    )
}

export default UserIndex;