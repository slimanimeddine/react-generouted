import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <div>post header</div>
            <Outlet />
            <div>post footer</div>
        </>
    )
}