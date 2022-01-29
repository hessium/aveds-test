import Home from '../pages/Home';
import Contacts from "../pages/Contacts";
import Personal from "../pages/Personal";
import Login from "../pages/Login";

export const privateRoutes = [
    {path:  '/home', component: Home, exact: true},
    {path:  '/personal', component: Personal, exact: true},  
    {path:  '/contacts', component: Contacts, exact: true},

]

export const publicRoutes = [
    {path:  '/home', component: Home, exact: true},
    {path:  '/login', component: Login, exact: true},
]