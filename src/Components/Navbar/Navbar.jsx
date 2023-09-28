import { NavLink, Outlet } from "react-router-dom";
import {AiOutlineMenuFold} from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {

    const[open,setOpen] =useState(false)

    return (
        <div>
            <section className="flex shadow-lg justify-between items-center px-16 py-5">
                <img className="w-[150px] md:w-[200px]" src="/Logo.png" alt="" />

                <div className="md:hidden lg:hidden text-3xl" onClick={() => setOpen(!open)} >
                    {
                        open === true ? <AiOutlineMenuFold></AiOutlineMenuFold> :   <AiOutlineMenuFold></AiOutlineMenuFold>
                    }
              
                </div>
                <nav className="flex">
                    <ul className={`lg:flex md:flex  md:gap-4 lg:gap-7 absolute md:static lg:static bg-white p-2 rounded-xl ${open ?"top-16 left-64":"hidden"}`}>
                        <li className="text-sm md:text-lg lg:text-lg">
                            <NavLink to="/"
                                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] font-semibold underline" : "active"}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="text-sm md:text-lg lg:text-lg">
                            <NavLink to='/donation' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] font-semibold underline" : "active"}
                            >Donation</NavLink>
                        </li>
                        <li className="text-sm md:text-lg lg:text-lg">
                            <NavLink to='/statistics' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] font-semibold underline" : "active"}>Statistics</NavLink>
                        </li>
                    </ul>
                </nav>
            </section>

            <Outlet></Outlet>

        </div>
    );
};

export default Navbar;