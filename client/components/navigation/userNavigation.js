import Link from 'next/link';
import { useEffect, useState } from 'react';

const UserNav = () => {


    const [currentPath, setCurrentPath] = useState("");
    useEffect(() => {
        process.browser && setCurrentPath(window.location.pathname)

    }, [process.browser && window.location.pathname])




    return (
        <div className="nav flex-column nav-pills">

            <Link href="/user">
                <a href="" className={`nav-link ${currentPath === '/user' && 'active'}`}>Dashboard</a>
            </Link>
        </div>
    )
}

export default UserNav;