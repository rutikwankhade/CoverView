import React, { useState, useEffect, useContext } from 'react';
import unsplash from "../../utils/unsplashConfig";
import { ImgContext } from '../../utils/ImgContext';

const StylishTheme = ({ config }) => {
    const { title, author, font, icon, customIcon, platform,bgColor } = config;

    // const [image, setImage] = useState({})

    const [imageList, setImageList] = useState([]);
    const [searchText, setSearchText] = useState('dev');

    const { unsplashImage, setUnsplashImage } = useContext(ImgContext);

    const searchImages = () => {

        unsplash.search
            .getPhotos({
                query: searchText,
                page: 1,
                per_page: 30,
                // orientation:'portrait'


            })
            .then(response => {
                // console.log(response.response.results);
                setImageList(response.response.results)
            });
    }

    useEffect(() => {

        unsplash.search
            .getPhotos({
                query: 'setup',
                page: 1,
                per_page: 25

            })
            .then(response => {
                // console.log(response.response.results);
                setImageList(response.response.results)
            });
    }, [])

    const selectImage = (image) => {
        setUnsplashImage({
            url: image.urls.regular,
            name: image.user.name,
            avatar: image.user.profile_image.small,
            profile: `${image.user.links.html}?utm_source=https://coverview.vercel.app&utm_medium=referral`,
            downloadLink: image.links.download_location

        })


    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        searchImages(searchText);

    }


    return (
        <div className=" bg-white rounded">


            <div className={` overflow-y-hidden flex flex-col rounded ${platform}`}
            style={{ backgroundColor: bgColor }}
            >

                <div className="flex flex-row  items-center bg-white  justify-center m-4 ">

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
                    <div className="w-1/2">


                        {unsplashImage ?
                            <div className='relative flex group'>

                                <div className="h-96 w-96 ">
                                    
                              
                                    <img src={unsplashImage.url && unsplashImage.url} className=" object-cover h-96 w-96  " alt="preview" />
 </div>
                               
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
                            <div className="flex flex-col p-2  bg-white items-center justify-center">

                                <form onSubmit={(e) => handleSearchSubmit(e)} className="flex bg-gray-50 rounded-full border mb-2">
                                    <input type="text"
                                        value={searchText}
                                        placeholder="Search image"
                                        className="focus:outline-none w-max text-lg bg-gray-50  p-1 px-4  rounded-full border border-gray-50"
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />

                                    <button type="submit" onClick={() => searchImages(searchText)}>
                                        <svg className="w-9 h-9 p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </button>
                                </form>


                                <div className="overflow-y-scroll overflow-x-hidden h-80">
                                    {
                                        imageList.map(image => {
                                            return <img src={image.urls.regular}
                                                key={image.id}
                                                alt={image.alt_description}
                                                className="rounded m-2 cursor-pointer"
                                                onClick={() => selectImage(image)
                                                }
                                            />
                                        })
                                    }
                                </div>
                            </div>

                        }

                    </div>
                </div>


            </div>

        </div>
    );
}

export default StylishTheme;