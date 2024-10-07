import React, { useContext } from 'react';
import { ImgContext } from '../../utils/ImgContext';
import UnsplashSearch from '../UnsplashSearch';

const StylishTheme = ({ config }) => {
    const { title, author, font, icon, customIcon, bgColor } = config;
    const { unsplashImage, setUnsplashImage } = useContext(ImgContext);


    return (
        <div className=" bg-white w-full h-full">


            <div className={` overflow-y-hidden flex flex-col`}
                style={{ backgroundColor: bgColor }}
            >

                <div className="flex flex-row  items-center bg-white  justify-center">

                    <div className="h-full w-1/2  bg-white rounded-l-xl">
                        <div className={`${font} px-12 justify-center text-left rounded-xl h-full p-4 flex flex-col`}>
                            <h1 className=" text-4xl font-bold text-gray-800">{title}</h1>
                            <div className="flex items-center mt-10 text-left">
                                {
                                    customIcon ?
                                        <div className=" ">
                                            <img src={customIcon} alt="img" className="w-12 h-12 mr-2 rounded-full bg-white border border-white" />
                                        </div>
                                        :
                                        <div className="mr-2 items-center justify-center flex">
                                            <i className={`devicon-${icon.value}-plain  dev-icon text-3xl`}></i>
                                        </div>
                                }
                                <h2 className="text-xl  font-semibold text-left ">{author}</h2>


                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-full">


                        {unsplashImage ?
                            <div className='relative w-full h-max flex group'>

                                <img src={unsplashImage.url && unsplashImage.url} className=" object-cover w-full h-full  " alt="preview" />


                                <button
                                    onClick={() => setUnsplashImage('')}
                                    className="absolute  top-4 right-2 cursor-pointer">
                                    <svg className="group-hover:inline-block hidden w-6 h-6 text-gray-800 bg-white p-1 rounded-full z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>

                                </button>

                                <div className="absolute  bottom-4 right-4 opacity-80">
                                    <div className=" group-hover:flex hidden items-center">
                                        <span className="text-sm text-white mx-2">Photo by</span>
                                        <a href={unsplashImage.profile} target="_blank" rel="noreferrer" className="cursor-pointer flex items-center bg-gray-300 rounded-full text-sm">
                                            <img src={unsplashImage.avatar && unsplashImage.avatar} alt={unsplashImage.name} className="h-6 w-6 rounded-full mr-2" />

                                            <span className="pr-2">{unsplashImage.name}</span>
                                        </a>

                                        <a href="https://unsplash.com/?utm_source=https://coverview.vercel.app&utm_medium=referral" className="text-sm text-white mx-2">Unsplash</a>
                                    </div>

                                </div>
                            </div>
                            :
                            <div className="flex h-max w-full flex-col bg-white items-center justify-center">

                                <UnsplashSearch />
                            </div>

                        }

                    </div>
                </div>


            </div>

        </div>
    );
}

export default StylishTheme;