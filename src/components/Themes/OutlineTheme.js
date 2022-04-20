import React from 'react';
const OutlineTheme = ({ config }) => {
    const { title, bgColor, pattern, author, icon, font } = config;

    return (
        <div className="p-4 bg-white border">


            <div className={`cover rounded flex flex-col text-gray-800 items-center border-4 border-gray-800 ${pattern} `}
                style={{ backgroundColor: bgColor }}
            >


                <div className={`${font} bg-white rounded md:w-10/12 border-4 border-gray-800 m-auto flex flex-col py-12 px-6 `}>
                    <div className="px-12">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-center">{title}</h1>
                        </div>
                    </div>


                </div>

                <div className="w-full border-gray-800 border-t-4 flex  mt-10 p-2 px-6  items-center bg-white">
                    <i className={`devicon-${icon.value}-plain dev-icon text-4xl`}></i>
                    <h2 className="text-xl ml-auto mr-2 font-semibold"> - {author}</h2>

                </div>

            </div>


        </div>
    );
}

export default OutlineTheme;