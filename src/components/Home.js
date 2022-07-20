import React from 'react';
import logo from '../assets/icons/logo.png'
import { Link } from 'react-router-dom';
import cover1 from '../assets/images/cover5.png'
import cover2 from '../assets/images/cover2.png'
import cover3 from '../assets/images/cover3.png'


const Home = () => {


    return (
        <div className="bg-gray-50">

            <div className="text-xl  flex border-b border-gray-100  p-2 md:w-10/12 mx-auto">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-8 h-8 mx-2" />
                    <h1 className="font-semibold font-Inter">Coverview</h1>
                </div>

                <Link to="/editor" className="hover:translate-x-2 duration-300 bg-gray-700 group rounded-xl px-6 text-white text-lg ml-auto mr-4 font-Inter font-semibold p-2">
                    <span className="">Go to editor &rarr;</span>
                </Link>
            </div>

            <div className="  mx-auto px-20 py-6   flex flex-col items-center">
                <h1 className="w-7/12 m-10 text-center md:text-5xl text-2xl font-extrabold text-gray-700 font-Anek">
                    Creating cover images for your blogs is now super easy
                </h1>
            </div>




            <div className=" temple flex flex-row items-center justify-center mx-auto md:w-10/12">

                <div className="m-4 transform -translate-y-20 border animate  rotate-6 duration-100 bg-white p-2 shadow-sm w-1/5 rounded-lg flex flex-col ">
                    <img src={cover2} className="rounded mb-2" alt="cover1" />
                    <p className="animate animate-pulse bg-gray-50 h-5 rounded mb-2"></p>
                    <p className="animate animate-pulse w-8/12 bg-gray-50 h-5 rounded mb-2"></p>

                </div>

                <div className="m-4 transform  border animate  -rotate-2  duration-100 bg-white p-4 shadow-sm w-1/3 rounded-lg flex flex-col ">
                    <img src={cover1} className="rounded border border-gray-100 mb-2" alt="cover-2" />
                    <p className="animate animate-pulse bg-gray-50 h-6 rounded mb-2"></p>
                    <p className="animate animate-pulse w-8/12 bg-gray-50 h-6 rounded mb-2"></p>

                </div>

                <div className="m-4 transform -translate-y-20 border animate  -rotate-6 duration-100 bg-white p-2 shadow-sm w-1/5 rounded-lg flex flex-col ">
                    <img src={cover3} className="rounded mb-2" alt="cover3" />
                    <p className="animate animate-pulse bg-gray-50 h-5 rounded mb-2"></p>
                    <p className="animate animate-pulse w-8/12 bg-gray-50 h-5 rounded mb-2"></p>

                </div>

            </div>

        </div>
    );
}

export default Home;