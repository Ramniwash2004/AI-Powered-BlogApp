import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const BlogTableItem = ({ blog, fetchBlogs,index }) => {
    const {title,createdAt}=blog;
    const BlogDate=new Date(createdAt);

    const {axios}=useAppContext();

    const deleteBlog=async()=>{
        const confirm =window.confirm("Are you sure you want to delete this blog?")
        if(!confirm) return;
        try{
            const {data}= await axios.post("/api/blog/delete",{id:blog._id})
            if(data.success){
                toast.success(data.message)
                await fetchBlogs();
            }else{
                toast.error(data.message)
            }
        }catch(error){
            toast.error(error.message)
        }
    }

    const togglePublish=async()=>{
        try{
            const {data}= await axios.post("/api/blog/toggle-publish",{id:blog._id})
            if(data.success){
                toast.success(data.message)
                await fetchBlogs();
            }else{
                toast.error(data.message)
            }
        }catch(error){
            toast.error(error.message)
        }
        
    }

    return (
        <tr className="border-y bg-gray-100">
            <th className="px-2 py-4">{index}</th>
            <td className="px-2 py-4">{title}</td>
            <td className="px-2 py-4 max-sm:hidden">{BlogDate.toDateString()}</td>
            <td className="px-2 py-4 max-sm:hidden">
                <p className={`${blog.ispublished ? "text-green-600":"text-orange-700"}`}>{blog.ispublished ?"published":"unpublished"}</p>
            </td>
            <td className="px-2 py-4 flex text-xs gap-3">
                <button onClick={togglePublish} className="border px-2 py-0.5  mt-1 rounded cursor-pointer">{blog.ispublished ?"unpublish":"publish"}</button>
                <img src={assets.cross_icon} alt="" className="w-10 h-10 hover:scale-110  transition-all cursor-pointer" onClick={deleteBlog}/>
            </td>
        </tr>
    );
}

export default BlogTableItem;