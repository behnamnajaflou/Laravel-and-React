import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Users from "./views/Users";
import Notfound from "./views/Notfound";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element : <DefaultLayout />,
        children : [
            {
                path: '/',
                element : <Navigate to="/Users" />
            },

            {
                path: '/users',
                element : <Users />
            },
            {
                path: '/dashboard',
                element : <Dashboard />
            }
        ]
    },
    {
        path: '/',
        element : <GuestLayout />,
        children : [
            {
                path: '/login',
                element : <Login />
            },
        
            {
                path: '/signup',
                element : <SignUp />
            }
        ]
    },

    {
        path: '*',
        element : <Notfound />
    }
])

export default router;