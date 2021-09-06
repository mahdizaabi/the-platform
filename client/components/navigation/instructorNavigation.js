import Link from 'next/link';
import { useEffect, useState } from 'react';

const InstructorNavigation = () => {
    const [currentPath, setCurrentPath] = useState("");
    useEffect(() => {
        process.browser && setCurrentPath(window.location.pathname)

    }, [process.browser && window.location.pathname])


    return (
        <div className="nav flex-column nav-pills">

            <Link href="/instructor">
                <a className={`nav-link ${currentPath === '/instructor' && 'active'}`}>Instructor Dashboard</a>
            </Link>

            <Link href="/instructor/course/create">
                <a className={`nav-link ${currentPath === '/instructor/course/create' && 'active'}`}>create course</a>
            </Link>
        </div>
    )
}

export default InstructorNavigation;