import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {assets} from "../../assets/assets";
import Sidebar from "../../components/admin/Sidebar";
import { useAppContext } from "../../context/AppContext";

const Layout=()=>{
    const {axios,setToken,navigate}=useAppContext()

    const logout=()=>{
        localStorage.removeItem("token");
        axios.defaults.headers.common["Authorization"]=null;
        setToken(null)
        navigate("/");
    }
    return (
        <>
        <div className=" flex justify-between items-center my-4 h-[70px] px-4 sm:px-12 py-10 mx-5 sm:mx-20 xl:mx-32 border-b-2 border-gray-200">
            <img src={assets.logo} alt="" className="w-32 sm:w-44 cursor-pointer" onClick={()=> navigate("/")}/>
            <button onClick={logout} className="items-center rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5">Logout</button>
        </div>
        <div className="flex h-[calc(100vh-70px)]">
            <Sidebar/>
            <Outlet/>
        </div>
        </>
        
    );
}
export default Layout;