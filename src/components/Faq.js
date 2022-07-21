import React from 'react';
import Header from './Header';
const Faq = () => {
    return (
        <div>
            <Header />

            <div className=" md:w-10/12 mx-auto p-20 ">
                <h1 className="font-bold text-4xl font-Anek text-center">Frequently asked questions</h1>


                <div className="flex flex-wrap justify-center mt-20 font-Inter">

                    <div className="w-5/12 m-4 ">
                        <p className="text-xl font-bold py-2">What is Coverview?</p>
                        <p className="text-lg text-gray-700">Coverview is a tool to create cover images for your blogs quickly and easily.</p>
                    </div>

                    <div className="w-5/12 m-4">
                        <p className="text-xl font-bold py-2">Is Coverview free?</p>
                        <p className="text-lg text-gray-700">Yes! Coverview is absolutely free to use.</p>
                    </div>

                    <div className="w-5/12 m-4">
                        <p className="text-xl  font-bold py-2">Can I upload my custom brand logo?</p>
                        <p className="text-lg text-gray-700">Yes.Just search and select <span className="font-semibold">custom</span> in icon section and you can upload your own logo to personalize your cover images.</p>
                        <p className="italic mt-2">See <a href="https://twitter.com/WankhadeRutik/status/1518270774335111168?s=20&t=XMjbJpGAC7anadJ690_DUg" className="text-blue-400" target="_blank" rel="noreferrer">example</a></p>
                    </div>

                    <div className="w-5/12 m-4">
                        <p className="text-xl font-bold my-2">Can I use coverview for non-technical/personal blogs?</p>
                        <p className="text-lg text-gray-700">Yes! Why not? Even though coverview was built with technical blogs in mind, you can still use it for your personal blogs. Check out the stylish theme for more.</p>
                    </div>

                    <div className="w-5/12 m-4">
                        <p className="text-xl font-bold my-2">Why use Coverview?</p>
                        <p className="text-lg text-gray-700">Because it's simple, quick and easy to use. Why spend hours designing when you can create cover images in seconds?</p>
                    </div>

                    <div className="w-5/12 m-4">
                        <p className="text-xl font-bold my-2">Want to support/sponsor the project?</p>
                        <p className="text-lg text-gray-700">If coverview adds value in your life and you wish to support this project, you can <a href="https://github.com/sponsors/rutikwankhade" target="_blank" rel="noreferrer" className="font-semibold hover:underline">sponsor me on Github</a> or <a href="https://www.buymeacoffee.com/rutikwankhade" target="_blank" rel="noreferrer" className="hover:underline text-pink-400 font-semibold">buy me a coffee</a>.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Faq;