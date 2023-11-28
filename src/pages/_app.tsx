import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <div>main header</div>
            <Outlet />
            <div>main footer</div>
        </>
    )
}