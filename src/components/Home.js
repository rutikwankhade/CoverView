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
        <div className="">


            <div className="">

                <div className="text-xl  flex   p-2 md:w-10/12 mx-auto">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="w-8 h-8 mx-2" />
                        <h1 className="font-semibold md:text-xl text-lg font-Inter">Coverview</h1>
                    </div>

                    <a href="https://github.com/rutikwankhade/CoverView" target="_blank" rel="noreferrer" className="hover:translate-x-2 duration-300 bg-gray-700 group rounded-xl md:px-4 text-white md:text-sm text-xs ml-auto mr-4 font-Inter font-semibold p-2">
                        <span className="text-sm">⭐ Star on Github</span>
                    </a>
                </div>

                <div className="  mx-auto md:px-20 py-6   flex flex-col items-center">
                    <h1 className="md:w-7/12 m-10 text-center md:text-5xl text-4xl font-extrabold text-gray-700 font-Nunito">
                        Creating cover images for your blogs is now super easy
                    </h1>
                    <Link to="/editor" className="hover:translate-x-2 duration-300 bg-gray-700 hover:bg-gray-800 group rounded-full px-4 md:px-8 text-white md:text-2xl text-lg mx-auto font-Nunito font-semibold md:p-4 p-2">
                        <span className="md:text-2xl font-bold text-lg">Create Now &rarr;</span>
                    </Link>
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


            </div>




            <div className="md:mt-32  my-t0 mx-auto">

                <div className=" mx-auto flex flex-col md:w-10/12">
                    <div className="md:w-7/12 text-center mx-auto ">
                        <h2 className="md:text-5xl text-3xl p-4 font-bold font-Nunito text-gray-700">Why cover images are more important than you think?</h2>

                    </div>

                    <div className="flex md:flex-row flex-col justify-center  mx-auto">

                        <div className="m-10 p-10  rounded-xl  shadow-gray-100 flex flex-col  md:w-4/12 ">
                            <div className=" my-2 md:mx-0 mx-auto bg-purple-300 h-24 w-24 p-4 flex justify-center items-center rounded-full">
                                <svg className="text-white w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                            </div>
                            <p className="text-2xl md:text-left text-center font-Nunito ">Around <span className="font-bold">7 million</span> blog posts are published daily. And with the rise of new-age blogging tools, it will only go up.</p>
                        </div>

                        <div className="m-10 p-10  rounded-xl  shadow-gray-100 flex  flex-col  md:w-4/12 ">
                            <div className="md:mx-0 mx-auto my-2 bg-green-300 h-24 w-24 p-4 flex justify-center items-center rounded-full">
                                <svg className="text-white w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            </div>
                            <p className="text-2xl md:text-left text-center font-Nunito ">A good cover image can lead to <span className="font-bold">higher conversion rate</span> than a random stock image.</p>
                        </div>

                    </div>



                </div>


                <h2 className="md:text-5xl text-3xl md:w-7/12 md:mx-auto md:mt-32 mx-10 font-bold font-Nunito text-center text-gray-700">With coverview, you can create cover images in <span className="text-indigo-400">seconds</span></h2>


                <div className="md:w-8/12 my-16 p-4 flex md:flex-row flex-col gap-4 mx-auto">

                    <div className="md:w-1/2 bg-gray-50 rounded-xl px-4 pt-6 flex flex-col mx-10">

                        <div className="text-center">
                            <div className="text-xl w-max mx-auto text-white py-1 px-4 font-Nunito font-semibold bg-indigo-400  rounded-full ">Step 1</div>

                            <p className="text-3xl p-4 text-center mx-auto my-2 font-semibold font-Nunito text-gray-700">Add your blog title and author name</p>
                        </div>
                        <img src={step1} alt="preview" className="mt-2 w-10/12 mx-auto rounded-t-xl shadow-sm" />

                    </div>

                    <div className="md:w-1/2 bg-gray-50 rounded-xl px-4 pt-6 flex flex-col mx-10">

                        <div className="text-center">
                            <div className="text-xl w-max mx-auto text-white py-1 px-4 font-Nunito font-semibold bg-indigo-400  rounded-full ">Step 2</div>

                            <p className="text-3xl p-4  text-center mx-auto my-2 font-semibold font-Nunito text-gray-700">Customize with colors, fonts and icons</p>
                        </div>
                        <img src={step2} alt="preview" className="mt-auto mb-0 w-10/12 mx-auto rounded-t-xl shadow-sm" />

                    </div>


                </div>



                <div className="md:w-7/12 p-6 md:mx-auto mx-10  rounded-xl bg-gray-50  flex md:flex-row flex-col justify-center items-center ">

                    <div className="text-center md:w-1/2 m-4">
                        <div className="text-xl w-max mx-auto text-white py-1 px-4 font-Nunito font-semibold bg-indigo-400  rounded-full ">Step 3</div>
                        <p className="text-3xl pb-2  text-center mx-auto my-2 font-semibold font-Nunito text-gray-700">Choose your style from different themes</p>

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

                    <div className="text-center m-6 px-6">

                        <p className="text-2xl my-2 font-semibold font-Nunito text-gray-600">Supports platforms like Hashnode or Dev.to</p>
                    </div>
                    <div className="flex mx-auto justify-center">
                        <img src={hashnodeLogo} className="w-20 m-2" alt="hashnode" />
                        <img src={devLogo} className="w-20 m-2" alt="dev" />
                    </div>
                </div>


                <WallOfLove />

                <div className="bg-indigo-400  text-white p-2">
                    <div className="md:w-8/12 mx-auto pt-32 p-6">
                        <h2 className="md:text-6xl text-5xl text-center font-Nunito font-bold  mx-auto">Simple, quick, and easy to use</h2>
                        <p className="md:text-2xl text-xl font-Nunito text-center py-4 md:w-8/12 mx-auto">So you can focus on writing your blog and never worry about those cover images.</p>
                        <Link to="/editor" >
                            <button className="flex mx-auto my-4 hover:translate-x-2 duration-300 bg-gray-700  rounded-full  text-white text-xl font-Nunito font-semibold p-4 px-8">It's completely Free! Try Now &rarr;</button>
                        </Link>
                    </div>

                    <footer className=" p-10 flex md:flex-row flex-col-reverse font-Inter md:px-20 justify-center items-center">
                        <div className="md:w-1/2 flex flex-col">
                            <span className="text-lg">Made with 💛 by <a href="https://rutik.dev" className="font-semibold underline decoration-wavy underline-offset-4" target="_blank" rel="noreferrer">Rutik Wankhade</a></span>
                        </div>

                        <div className="md:text-lg text-sm flex flex-wrap  ">
                            <Link to="/faq" className="m-2 hover:font-semibold">How to use</Link>
                            <a href="https://github.com/rutikwankhade/CoverView" target="_blank" rel="noreferrer" className="m-2 hover:font-semibold">Star on Github</a>
                            <a href="https://www.buymeacoffee.com/rutikwankhade" target="_blank" rel="noreferrer" className="m-2 hover:font-semibold">Buy me a coffee</a>
                        </div>
                    </footer>

                </div>



            </div>






        </div>
    );
}

export default Home;