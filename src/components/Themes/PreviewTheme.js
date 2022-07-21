import React, { useState } from 'react';

const PreviewTheme = ({ config }) => {
    const {bgColor, platform } = config;

    const [image, setImage] = useState()

    return (
        <div className="p-4 bg-white border">


            <div className={`overflow-y-hidden flex flex-col rounded px-4 pt-4 ${platform}`}
                style={{ backgroundColor: bgColor }}
            >

                <div className="w-10/12 mx-auto mt-auto mb-0 shadow-lg rounded-t-xl border-white">
                    <div className="bg-gray-800 w-full p-2 flex rounded-t-xl">
                        <div className="bg-red-400 h-3 w-3 rounded-full mx-2"></div>
                        <div className="bg-yellow-400 h-3 w-3 rounded-full mx-2"></div>
                        <div className="bg-green-400 h-3 w-3 rounded-full mx-2"></div>

                    </div>
                    {image ?
                        <div>
                            <img src={image && image} className="object-cover " alt="preview" />
                        </div>
                        :
                        <div className="flex flex-col p-20 py-28 bg-white items-center justify-center">
                            <input type="file"
                                className="text-xl cursor-pointer mb-2 bg-white rounded border"
                                onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                            />
                            <span className=" text-center italic">click to upload a screenshot</span>
                        </div>

                    }
                </div>





            </div>


        </div>
    );
}

export default PreviewTheme;