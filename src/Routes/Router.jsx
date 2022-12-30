import Categories from "../Components/Categories/Categories";
import SubCategories from "../Components/Categories/SubCategories";
import Delivery from "../Components/Delivery/Delivery";
import Item from "../Components/Item/Item";
import Order from "../Components/Order/Order";
import Sliders from "../Components/Slider/Sliders";


const { createBrowserRouter } = require("react-router-dom");
const { default: DashboardOne } = require("../Components/DashboardOne");
const { default: Main } = require("../Layouts/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <DashboardOne></DashboardOne>
            },
            {
                path: '/dashboard',
                element: <DashboardOne></DashboardOne>
            },
            {
                path: '/slider',
                element: <Sliders></Sliders>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/subCategories',
                element: <SubCategories></SubCategories>
            },
            {
                path: '/items',
                element: <Item></Item>
            },
            {
                path:'/orders',
                element:<Order></Order>
            },
            {
                path:'/delivery',
                element:<Delivery></Delivery>
            }
        ]
    }
])