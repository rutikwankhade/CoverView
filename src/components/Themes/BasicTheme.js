import React from 'react';


const BasicTheme = ({ config }) => {
    const { title, bgColor, pattern, author, icon, font, customIcon } = config;

    return (
        <div className=" bg-white w-full h-full ">
            <div className={`overflow-y-hidden flex  text-gray-800 items-center h-full ${pattern} `}
                style={{ backgroundColor: bgColor }}
            >

                <div className={`${font} bg-white md:w-10/12  m-auto flex flex-col pt-12 rounded-xl`}>
                    <div className="px-12">
                        <div>
                            <h1 className="text-3xl md:text-5xl text-gray-800 font-bold text-center">{title}</h1>
                        </div>
                    </div>

                    <div className=" flex mx-4  p-4 rounded-xl items-center bg-white">
                        {
                            customIcon ?
                                <div className="w-12 h-12  ">
                                    <img src={customIcon} alt="img" className="rounded-full bg-white p-1 border-white" />
                                </div>
                                :
                                <div className="mr-auto ml-2 items-center justify-center flex">
                                    <i className={`devicon-${icon.value}-plain  p-4 dev-icon text-5xl`}></i>
                                </div>
                        }


                        <h2 className="text-xl ml-auto mr-2 font-semibold">{author}</h2>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default BasicTheme;