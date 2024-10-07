import React, { useContext } from 'react';
import { ImgContext } from '../../utils/ImgContext';
import UnsplashSearch from '../UnsplashSearch';

const BackgroundTheme = ({ config }) => {
    const { title, author, font, icon, customIcon, bgColor } = config;
    const { unsplashImage, setUnsplashImage } = useContext(ImgContext);


    return (
        <div className=" bg-white ">


            <div className={` overflow-y-hidden flex flex-col`}
                style={{ backgroundColor: bgColor }}
            >

                <div className="flex flex-row  items-center bg-white  justify-center ">

                    <div className="w-full">

                        {unsplashImage ?
                            <div className='relative flex group'>

                                <div className="h-max w-full ">
                                    <img src={unsplashImage.url && unsplashImage.url} className=" object-cover h-full w-full  " alt="preview" />
                                </div>


                                <div className="h-full bg-gray-800/60 absolute top-0 right-0 left-0 ">
                                    <button
                                        onClick={() => setUnsplashImage('')}
                                        className="absolute  top-2 right-2 cursor-pointer">
                                        <svg className="group-hover:inline-block hidden w-8 h-8 text-gray-800 bg-white p-2 rounded-full z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>

                                    </button>

                                    <div className={`${font} px-10 pt-32  text-left rounded-xl h-full p-4 flex flex-col`}>
                                        <h1 className=" md:text-5xl text-center text-2xl font-bold text-white">{title}</h1>
                                        <div className="flex flex-col items-center py-10  ">

                                            <h2 className="text-xl  font-semibold text-left text-white ">{author}</h2>
                                            {
                                                customIcon ?
                                                    <div className=" ">
                                                        <img src={customIcon} alt="img" className="w-12 h-12 m-2 rounded-full bg-white border-2 border-white" />
                                                    </div>
                                                    :
                                                    <div className="mr-2 items-center justify-center flex">
                                                        <i className={`devicon-${icon.value}-plain text-white dev-icon text-3xl`}></i>
                                                    </div>
                                            }

                                        </div>
                                    </div>
                                </div>

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
                            <div className="flex flex-col p-2  bg-white items-center justify-center">

                                <UnsplashSearch largeImgPreview />

                            </div>

                        }

                    </div>
                </div>


            </div>

        </div>
    );
}

export default BackgroundTheme;