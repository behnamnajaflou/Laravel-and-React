import { Outlet } from "react-router-dom";

export default function DefaultLayout(){
    return(
        <div>
            <h1>defaullllt</h1>
            <div>
                <Outlet />
            </div>
        </div>
    )
}