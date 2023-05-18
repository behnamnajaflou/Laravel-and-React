import { Outlet } from "react-router-dom";

export default function GuestLayout(){
    return(
        <div>
            <h1>hello from guest</h1>
            <Outlet />
        </div>
    )
}