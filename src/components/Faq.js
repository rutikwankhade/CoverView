import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
const Faq = () => {
    const { t } = useTranslation();
    const [showMsg, setShowMsg] = useState(false)

    return (
        <div>
            <Header />

            <div className=" md:w-10/12 mx-auto md:p-20 p-4">
                <h1 className="font-bold md:text-4xl  text-2xl font-Anek text-center">{t('faq.title')}</h1>


                <div className="flex flex-wrap justify-center mt-20 font-Inter">

                    <div className="md:w-5/12 m-4 ">
                        <p className="text-xl font-bold py-2">{t('faq.whatIsCoverview')}</p>
                        <p className="text-lg text-gray-700">{t('faq.whatIsCoverviewDesc')}</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold py-2">{t('faq.isFree')}</p>
                        <p className="text-lg text-gray-700">{t('faq.isFreeDesc')}</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl  font-bold py-2">{t('faq.customLogo')}</p>
                        <p className="text-lg text-gray-700">{t('faq.customLogoDesc')}</p>
                        <p className="italic mt-2">{t('faq.seeExample')} <a href="https://twitter.com/WankhadeRutik/status/1518270774335111168?s=20&t=XMjbJpGAC7anadJ690_DUg" className="text-blue-400" target="_blank" rel="noreferrer">example</a></p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">{t('faq.nonTechnical')}</p>
                        <p className="text-lg text-gray-700">{t('faq.nonTechnicalDesc')}</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">{t('faq.whyUse')}</p>
                        <p className="text-lg text-gray-700">{t('faq.whyUseDesc')}</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">{t('faq.support')}</p>
                        <p className="text-lg text-gray-700">{t('faq.supportDesc')} <a href="https://github.com/sponsors/rutikwankhade" target="_blank" rel="noreferrer" className="font-semibold hover:underline">sponsor me on Github</a> or <a href="https://www.buymeacoffee.com/rutikwankhade" target="_blank" rel="noreferrer" className="hover:underline text-pink-400 font-semibold">buy me a coffee</a>.</p>
                    </div>

                </div>

                <div className="md:w-1/2 mx-auto text-center mt-20">
                    <button
                        onClick={() => setShowMsg(!showMsg)}
                        className="text-6xl text-center m-2">💡</button>
                    <p className="text-xl font-Anek font-semibold text-gray-800">{t('faq.secret')}</p>

                </div>

                {
                    showMsg ?
                        <div>
                            <h2 className="md:w-7/12 text-4xl border text-center mx-auto my-10 p-10 rounded-xl shadow-sm font-Nunito">{t('faq.secretTip')}</h2>
                        </div> :
                        <div></div>
                }

            </div>
        </div>
    );
}

export default Faq;