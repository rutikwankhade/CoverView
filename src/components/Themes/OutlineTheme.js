import React from 'react';
const OutlineTheme = ({ config }) => {
    const { title, bgColor, author, icon, font, customIcon } = config;

    return (
        <div className="w-full h-full bg-white ">


            <div className={`overflow-y-hidden flex flex-col text-gray-800 px-10 h-full`}
                style={{ backgroundColor: bgColor }}
            >


                <div className={`${font} rounded-2xl py-6 flex flex-col  `}>
                    {
                        customIcon ?
                            <div className=" m-6">
                                <img src={customIcon} alt="img" className="rounded-full object-cover w-24 h-24 bg-white p-1 border-white" />
                            </div>
                            :
                            <div className="  mr-auto ml-2 items-center justify-center flex">
                                <i className={`devicon-${icon.value}-plain text-white p-4 dev-icon text-8xl`}></i>
                            </div>
                    }
                    <h1 className="text-3xl p-4 text-white md:text-5xl  font-bold ">{title}</h1>

                    <div className={`${font} w-full h-16  flex  mt-auto mb-0 p-2 px-6  items-center `}>

                        <h2 className="text-2xl text-white font-semibold">{author}</h2>

                    </div>
                </div>



            </div>


        </div>
    );
}

export default OutlineTheme;