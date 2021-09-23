
import { Menu } from "antd";
import Link from "next/link";
import {
    AppstoreOutlined, CoffeeOutlined, LoginOutlined,
    LogoutOutlined, UserAddOutlined,
    CarryOutOutlined,
    TeamOutlined
} from '@ant-design/icons'
import { useState, useEffect, useContext } from "react";
import { Context } from '../context'
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import SubMenu from "antd/lib/menu/SubMenu";
const { Item, ItemGroup } = Menu;

const TopNavigation = () => {

    const [currentPath, setCurrentPath] = useState("");
    const { state, dispatch } = useContext(Context);
    const { user } = state;


    const router = useRouter();
    useEffect(() => {
        process.browser && setCurrentPath(window.location.pathname)

    }, [process.browser && window.location.pathname])

    const logout = async () => {
        try {
            dispatch({
                type: "LOGOUT"
            })
            window.localStorage.removeItem('currentUser');
            const { data } = await axios.get(process.env.NEXT_PUBLIC_API  + "/loogout");
            router.push('/login')

        } catch (e) {
            toast(e.data)
        }

    }
    return (
        <Menu theme="dark" className="" mode="horizontal" selectedKeys={[currentPath]}>
            <Item key="/" onClick={(e) => setCurrentPath(e.key)} icon={<AppstoreOutlined />}>
                <Link href="/">
                    <a className={"type"}>App</a>
                </Link>
            </Item>

            {user && user.role && user.role.includes("ROLE_INSTRUCTOR") ?
                (<Item key="/instructor/course/create" icon={<CarryOutOutlined />} onClick={(e) => setCurrentPath(e.key)} >
                    <Link href="/instructor/course/create" >
                        <a className={"type"}>Create Course</a>
                    </Link>
                </Item>) :

                (
                    <Item key="/user/become-instructor" icon={<TeamOutlined />} onClick={(e) => setCurrentPath(e.key)}>
                        <Link href="/user/become-instructor">
                            <a className={"type"}>Become instructor</a>
                        </Link>
                    </Item>
                )
            }


            {!user && <>

                <Item key="/login" onClick={(e) => setCurrentPath(e.key)} icon={<LoginOutlined />}>
                    <Link href="/login">
                        <a className={"type"}>Login</a>
                    </Link>
                </Item>



                <Item key="/register " onClick={(e) => setCurrentPath(e.key)} icon={<UserAddOutlined />}>
                    <Link href="/register">
                        <a>Register</a>
                    </Link>
                </Item>
            </>}


            {user && user.role && user.role.includes("ROLE_INSTRUCTOR") &&

                <Item
                  
                    key="/instructor"
                    icon={<CarryOutOutlined />}
                    onClick={(e) => setCurrentPath(e.key)} >
                    <Link href="/instructor" >
                        <a >Instructor</a>
                    </Link>
                </Item>
            }


            {user &&
                <SubMenu style={{marginLeft:"auto", paddingRight:"24px"}}
                    theme="dark" key="submenu" icon={<CoffeeOutlined />} title={user?.username}>
                    <ItemGroup theme="dark">
                        <Item theme="dark"  key="/user">
                            <Link href="/user">
                                <a>Dashboard</a>
                            </Link>
                        </Item>
                        <Item theme="dark"  key="/loggout" onClick={() => logout()}>
                            <Link href="/">
                                <a>Logout</a>
                            </Link>
                        </Item>
                    </ItemGroup>

                </SubMenu>

            }
        </Menu>
    )
}


export default TopNavigation;