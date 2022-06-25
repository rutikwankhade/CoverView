import React from 'react';
const OutlineTheme = ({ config }) => {
    const { title, bgColor, pattern, author, icon, font, customIcon, platform } = config;

    return (
        <div className="p-4 bg-white border">


            <div className={`overflow-y-hidden rounded flex flex-col text-gray-800 items-center border-4 border-gray-800 ${pattern} ${platform} `}
                style={{ backgroundColor: bgColor }}
            >


                <div className={`${font} bg-white rounded-2xl md:w-10/12 m-auto flex flex-col p-12 `}>
                    <h1 className="text-3xl text-gray-800 md:text-5xl font-bold text-center">{title}</h1>
                </div>

                <div className={`${font} w-full h-16 border-gray-800 border-t-4 flex  mt-auto mb-0 p-2 px-6  items-center bg-white`}>
                    {
                        customIcon ?
                            <div className="w-12 h-12  ">
                                <img src={customIcon} alt="img" className="rounded-full bg-white p-1 border-white" />
                            </div>
                            :
                            <div className="  mr-auto ml-2 items-center justify-center flex">
                                <i className={`devicon-${icon.value}-plain  p-4 dev-icon text-5xl`}></i>
                            </div>
                    }
                    <h2 className="text-xl ml-auto mr-2 font-semibold">{author}</h2>

                </div>

            </div>


        </div>
    );
}

export default OutlineTheme;