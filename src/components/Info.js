import React from 'react';
import logo from '../assets/icons/logo.png'

const Info = () => {


    const fbMeta = `     <meta property="og:image" content="url of your image">`
    const twitterMeta = `<meta property="twitter:image" content="url of your image">
`

    return (
        <div className="md:p-20 bg-gray-100">



            <div className="flex md:flex-row flex-col justify-center">
                <div className="m-4 bg-white p-10 rounded-xl shadow-sm">
                    <h2 className="text-2xl my-2 font-semibold">How to use it with meta tags?</h2>
                    <p>Add this code in the head tag of your site.</p>

                    <div className="bg-purple-100 border-2 border-gray-700 my-4 p-6 rounded text-gray-700 ">
                        <p>{fbMeta}</p>
                        <p>{twitterMeta}</p>
                    </div>

                    <span className="text-sm italic">Don't forget to replace content with your image url</span>

                </div>




                <div className=" md:w-1/3 m-4 bg-white p-10 rounded-xl shadow-sm">
                    <h2 className="text-2xl my-2 font-semibold">Can I upload a custom icon or my own Image?</h2>
                    <p className="">Yes. Search <span className="text-purple-400 font-semibold ">custom</span> in the icon option and select it. Now you can upload a custom logo or your own image.</p>
                    <p className="text-sm my-2 italic">Make sure to upload an icon/image with 1:1 ratio</p>
                </div>




            </div>


            <div className=" p-20 ">
                <div className="flex flex-col items-center">
                    <img src={logo} className="" alt="logo" />
                    <h1 className="text-2xl text-purple-400 ">coverview</h1>
                </div>

                <h1 className="text-center md:text-6xl text-3xl font-extrabold text-gray-700 ">Creating cover images for your blogs is now super easy</h1>
                <a href="https://github.com/rutikwankhade/CoverView" target="_blank" rel="noreferrer" className="bg-gray-700 text-white p-2 px-6 rounded text-xl flex my-10 hover:bg-gray-800 mx-auto w-max">⭐ Star on Github</a>
            </div>

        </div>
    );
}

export default Info;