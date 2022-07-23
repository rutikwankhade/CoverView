import React from 'react';
import logo from '../assets/icons/logo.png'
import { Link } from 'react-router-dom';
import cover1 from '../assets/images/cover1.webp'
import cover2 from '../assets/images/cover2.webp'
import cover3 from '../assets/images/cover3.webp'
import cover4 from '../assets/images/cover4.webp'



import step1 from '../assets/images/step1.png'
import step2 from '../assets/images/step2.png'

import hashnodeLogo from '../assets/images/hashnode-logo.png'
import devLogo from '../assets/images/dev-logo.png'

import WallOfLove from './walloflove';
const Home = () => {


    return (
        <div className="bg-gray-50">

            <div className="text-xl  flex border-b border-gray-100  p-2 md:w-10/12 mx-auto">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-8 h-8 mx-2" />
                    <h1 className="font-semibold font-Inter">Coverview</h1>
                </div>

                <Link to="/editor" className="hover:translate-x-2 duration-300 bg-gray-700 group rounded-xl px-6 text-white md:text-lg text-sm ml-auto mr-4 font-Inter font-semibold p-2">
                    <span className="">Go to editor &rarr;</span>
                </Link>
            </div>

            <div className="  mx-auto md:px-20 py-6   flex flex-col items-center">
                <h1 className="md:w-7/12 m-10 text-center md:text-5xl text-2xl font-extrabold text-gray-700 font-Anek">
                    Creating cover images for your blogs is now super easy
                </h1>
            </div>




            <div className=" temple flex flex-row items-center justify-center mx-auto md:w-10/12">

                <div className="m-4 transform -translate-y-20 border animate hover:scale-105 hover:-rotate-3  rotate-6 duration-100 bg-white p-2 shadow-sm w-1/5 rounded-lg flex flex-col ">
                    <img src={cover2} className="border border-gray-100 rounded mb-2" alt="cover1" />
                    <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded mb-2"></p>
                    <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-5 h-2 rounded mb-2"></p>

                </div>

                <div className="m-4 transform hover:scale-105 hover:rotate-3 -rotate-2  duration-300 bg-white p-4 shadow-sm w-1/3 rounded-lg flex flex-col ">
                    <img src={cover1} className="rounded border border-gray-100 mb-2" alt="cover-2" />
                    <p className="animate animate-pulse bg-gray-50 md:h-6 h-3 rounded mb-2"></p>
                    <p className="animate animate-pulse w-8/12 bg-gray-50 md:h-6 h-3 rounded mb-2"></p>

                </div>

                <div className="m-4 transform -translate-y-20 border animate hover:scale-105 hover:rotate-3 -rotate-6 duration-100 bg-white p-2 shadow-sm w-1/5 rounded-lg flex flex-col ">
                    <img src={cover3} className="rounded border border-gray-100 mb-2" alt="cover3" />
                    <p className="animate animate-pulse bg-gray-50 md:h-5 h-2 rounded mb-2"></p>
                    <p className="animate animate-pulse w-8/12 bg-gray-50 md:odd:h-5 h-2 rounded mb-2"></p>

                </div>

            </div>





            <div className="md:my-32  my-10 mx-auto">

                <div className="md:w-10/12 mx-auto flex flex-col ">
                    <div className="md:w-6/12 text-center mx-auto ">
                        <h2 className="text-4xl py-4 font-bold font-Anek text-gray-700">Why cover images are more important than you think?</h2>

                    </div>

                    <div className="flex md:flex-row flex-col my-10 mx-auto">

                        <div className="m-10 flex md:flex-row flex-col  md:w-1/2">
                            <div className="md:mx-4 mx-auto bg-purple-300 h-24 w-24 p-4 flex justify-center items-center rounded-full">
                                <svg className="text-white w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                            </div>
                            <p className="text-2xl md:text-left text-center text-gray-700">Around <span className="font-bold">7 million</span> blog posts are published daily. And with the rise of new-age blogging tools, it will only go up.</p>
                        </div>

                        <div className="m-10 flex md:flex-row flex-col  md:w-1/2">
                            <div className="md:mx-4 mx-auto bg-green-300 h-24 w-24 p-4 flex justify-center items-center rounded-full">
                                <svg className="text-white w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            </div>
                            <p className="text-2xl md:text-left text-center text-gray-700">A good cover image can lead to <span className="font-bold">higher conversion rate</span> than a random stock image.</p>
                        </div>

                    </div>



                </div>


                <h2 className="md:text-5xl text-3xl md:w-1/2 mx-auto mt-32 font-bold font-Anek text-center text-gray-700">With coverview, you can create cover images in seconds.</h2>
                <div className="md:w-8/12 my-20 flex md:flex-row flex-col mx-auto">

                    <div className="md:w-1/3 flex flex-col mx-10">

                        <div className="text-center">
                            <div className="text-xl mx-auto w-10 h-10 p-2 font-bold text-white bg-gray-700 rounded-full flex items-center justify-center">1</div>

                            <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">Add title and author of your blog post</p>
                        </div>
                        <img src={step1} alt="preview" className="mt-2 rounded-lg shadow-sm" />

                    </div>

                    <div className="flex items-center font-bold text-3xl text-center mx-auto">--------&rarr;</div>

                    <div className="flex flex-col md:w-1/3 mx-10">

                        <div className="text-center">
                            <div className="text-xl mx-auto w-10 h-10 p-2 font-bold text-white bg-gray-700 rounded-full flex items-center justify-center">2</div>

                            <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">Customize with colors, fonts, icons and patterns</p>
                        </div>
                        <img src={step2} alt="preview" className="mt-2 rounded-lg shadow-sm" />

                    </div>
                </div>



                <div className="md:w-8/12  flex md:flex-row flex-col justify-center items-center mx-auto">

                    <div className="text-center md:w-1/3 m-4">
                        <div className="text-xl mx-auto w-10 h-10 p-2 font-bold text-white bg-gray-700 rounded-full flex items-center justify-center">3</div>

                        <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">Choose from different themes</p>
                        <p className="text-xl">Unsplash integration, custom icon for personal branding and more.</p>
                    </div>

                    <div className="flex md:w-8/12 hideout p-6">
                        <div className="flex flex-col w-1/2 ">
                            <img src={cover1} alt="preview" className=" hover:scale-105 duration-300 m-2 rounded-lg shadow-sm" />
                            <img src={cover2} alt="preview" className="hover:scale-105 duration-300  m-2 rounded-lg shadow-sm" />

                        </div>


                        <div className="flex flex-col mt-4 w-1/2">
                            <img src={cover3} alt="preview" className="hover:scale-105 duration-300   m-2 rounded-lg shadow-sm" />
                            <img src={cover4} alt="preview" className="hover:scale-105 duration-300  m-2 rounded-lg shadow-sm" />

                        </div>

                    </div>

                </div>


                <div className="md:w-6/12 my-20 mx-auto">

                    <div className="text-center m-4">

                        <p className="text-2xl my-2 font-semibold font-Inter text-gray-600">Supports platforms like Hashnode or Dev.to</p>
                    </div>
                    <div className="flex mx-auto justify-center">
                        <img src={hashnodeLogo} className="w-20 m-2" alt="hashnode" />
                        <img src={devLogo} className="w-20 m-2" alt="dev" />
                    </div>
                </div>


                <WallOfLove />

                <div className="md:w-1/2 mx-auto pt-20 p-4">
                    <h2 className="text-5xl text-center font-Anek font-bold text-gray-700 mx-auto">Simple, quick, and easy to use</h2>
                    <p className="text-2xl text-center my-2">So you can focus on writing your blog and never worry about those cover images.</p>
                    <Link to="/editor" >
                        <button className="flex mx-auto my-4 hover:translate-x-2 duration-300 bg-gray-700  rounded-xl px-6 text-white text-xl font-Inter font-semibold p-2">It's Free! Try now &rarr;</button>
                    </Link>
                </div>

            </div>




            <footer className="bg-white p-10 flex md:flex-row flex-col font-Inter md:px-20 justify-center items-center">
                <div className="md:w-1/2 flex flex-col">
                    <span className="text-lg">Made with 💛 by <a href="https://twitter.com/WankhadeRutik" className="font-semibold" target="_blank" rel="noreferrer">Rutik Wankhade</a></span>
                    <span className="text-lg font-Nunito">checkout <a href="https://rutikwankhade.dev" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-pink-400">more cool stuff</a> I built</span>
                </div>

                <div className="md:text-lg text-sm flex flex-wrap  ">
                    <Link to="/faq" className="m-2 hover:font-semibold">📌 How to use</Link>
                    <a href="https://github.com/rutikwankhade/CoverView" target="_blank" rel="noreferrer" className="m-2 hover:font-semibold">⭐ Star on Github</a>
                    <a href="https://www.buymeacoffee.com/rutikwankhade" target="_blank" rel="noreferrer" className="m-2 hover:font-semibold">🥤 Buy me a coffee</a>
                </div>
            </footer>

        </div>
    );
}

export default Home;