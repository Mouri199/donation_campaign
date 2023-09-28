import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import DonationDetails from "../DonationDetails/DonationDetails";
import Error from "../Error/Error";



const router= createBrowserRouter([
    {
        path:"/",
        element: <Navbar></Navbar>,
        errorElement: <Error></Error>,
        children:[
            {
                path: "/",
                element:<Home></Home>,
                loader: () => fetch(`fakeData.json`),
                
            },
            {
                path: "/donation",
                element:<Donation></Donation>,
                loader:() => fetch(`fakeData.json`) ,
            },
            {
                path:"/donationDetails/:id",
                element:<DonationDetails></DonationDetails>,
                loader:() => fetch(`fakeData.json`) ,
               

            },
            {
                path: "/statistics",
                element: <Statistics ></Statistics>,
                loader:() => fetch(`fakeData.json`)
            }
        ]
    }
])

export default router;