import React, { useState } from 'react';
import Header from './Header';
const Faq = () => {

    const [showMsg, setShowMsg] = useState(false)

    return (
        <div>
            <Header />

            <div className=" md:w-10/12 mx-auto md:p-20 p-4">
                <h1 className="font-bold md:text-4xl  text-2xl font-Anek text-center">Frequently asked questions</h1>


                <div className="flex flex-wrap justify-center mt-20 font-Inter">

                    <div className="md:w-5/12 m-4 ">
                        <p className="text-xl font-bold py-2">What is Coverview?</p>
                        <p className="text-lg text-gray-700">Coverview is a tool to create cover images for your blogs quickly and easily.</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold py-2">Is Coverview free?</p>
                        <p className="text-lg text-gray-700">Yes! Coverview is absolutely free to use.</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl  font-bold py-2">Can I upload my custom brand logo?</p>
                        <p className="text-lg text-gray-700">Yes.Just search and select <span className="font-semibold">custom</span> in icon section and you can upload your own logo to personalize your cover images.</p>
                        <p className="italic mt-2">See <a href="https://twitter.com/WankhadeRutik/status/1518270774335111168?s=20&t=XMjbJpGAC7anadJ690_DUg" className="text-blue-400" target="_blank" rel="noreferrer">example</a></p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">Can I use coverview for non-technical/personal blogs?</p>
                        <p className="text-lg text-gray-700">Yes! Why not? Even though coverview was built with technical blogs in mind, you can still use it for your personal blogs. Check out the stylish theme for more.</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">Why use Coverview?</p>
                        <p className="text-lg text-gray-700">Because it's simple, quick and easy to use. Why spend hours designing when you can create cover images in seconds?</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">Want to support/sponsor the project?</p>
                        <p className="text-lg text-gray-700">If coverview adds value in your life and you wish to support this project, you can <a href="https://github.com/sponsors/rutikwankhade" target="_blank" rel="noreferrer" className="font-semibold hover:underline">sponsor me on Github</a> or <a href="https://www.buymeacoffee.com/rutikwankhade" target="_blank" rel="noreferrer" className="hover:underline text-pink-400 font-semibold">buy me a coffee</a>.</p>
                    </div>

                </div>

                <div className="md:w-1/2 mx-auto text-center mt-20">
                    <button
                        onClick={() => setShowMsg(!showMsg)}
                        className="text-6xl text-center m-2">💡</button>
                    <p className="text-xl font-Anek font-semibold text-gray-800">Want to know a secret? Click me</p>

                </div>

                {
                    showMsg ?
                        <div>
                            <h2 className="md:w-7/12 text-4xl border text-center mx-auto my-10 p-10 rounded-xl shadow-sm font-Nunito">Blog titles with a minimum of 8 words have 21% better click-through</h2>
                        </div> :
                        <div></div>
                }

            </div>
        </div>
    );
}

export default Faq;