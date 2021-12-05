import IRoute from "../interfaces/route";
import HomePage from "../pages/home";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/about',
        name: 'About Page',
        component: HomePage,
        exact: true
    },
]

export default routes
