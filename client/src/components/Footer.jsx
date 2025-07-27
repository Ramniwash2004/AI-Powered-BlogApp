import React from "react";
import { assets, footer_data } from "../assets/assets";

const Footer = () => {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/5">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10
             py-10 border-b border-grey-500/30 text-gray-500">
                <div>
                    <img src={assets.logo} alt="logo" className="w-24 sm:w-44"/>
                    <p className="max-w-[40rem] mt-6">Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Est, ut minus. Natus ex consequatur ea consequuntur 
                        optio molestiae, beatae modi voluptas quibusdam similique itaque aperiam 
                        quae doloribus necessitatibus eveniet cupiditate? 
                    </p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footer_data.map((section,index)=>(
                        <div key={index}>
                            <h3 className="font-semibold text-base mb-2 text-gray-900 md:mb-5">
                                {section.title}
                            </h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link,i)=>(
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
            Copyright 2025 © Ramniwash -All Right Reserved.</p>
        </footer>
    );
}
export default Footer;