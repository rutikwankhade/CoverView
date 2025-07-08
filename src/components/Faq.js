import React, { useState } from 'react';
import Header from './Header';
import { useLanguage } from '../utils/i18n';

const Faq = () => {
    const [showMsg, setShowMsg] = useState(false);
    const { t } = useLanguage();

    // 用于处理包含HTML标签的翻译文本
    const createMarkup = (html) => {
        return { __html: html };
    };

    return (
        <div>
            <Header />

            <div className=" md:w-10/12 mx-auto md:p-20 p-4">
                <h1 className="font-bold md:text-4xl  text-2xl font-Anek text-center">{t('faqTitle')}</h1>

                <div className="flex flex-wrap justify-center mt-20 font-Inter">
                    <div className="md:w-5/12 m-4 ">
                        <p className="text-xl font-bold py-2">{t('whatIsCoverview')}</p>
                        <p className="text-lg text-gray-700">{t('whatIsOverviewAnswer')}</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold py-2">{t('isItFree')}</p>
                        <p className="text-lg text-gray-700">{t('isItFreeAnswer')}</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl  font-bold py-2">{t('customLogo')}</p>
                        <p className="text-lg text-gray-700" dangerouslySetInnerHTML={createMarkup(t('customLogoAnswer'))}></p>
                        <p className="italic mt-2">{t('example')} <a href="https://twitter.com/WankhadeRutik/status/1518270774335111168?s=20&t=XMjbJpGAC7anadJ690_DUg" className="text-blue-400" target="_blank" rel="noreferrer">{t('example')}</a></p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">{t('nonTechnical')}</p>
                        <p className="text-lg text-gray-700">{t('nonTechnicalAnswer')}</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">{t('whyUse')}</p>
                        <p className="text-lg text-gray-700">{t('whyUseAnswer')}</p>
                    </div>

                    <div className="md:w-5/12 m-4">
                        <p className="text-xl font-bold my-2">{t('sponsor')}</p>
                        <p className="text-lg text-gray-700" dangerouslySetInnerHTML={createMarkup(t('sponsorAnswer').replace('<a>', '<a href="https://github.com/sponsors/rutikwankhade" target="_blank" rel="noreferrer" class="font-semibold hover:underline">').replace('</a> or <a>', '</a> or <a href="https://www.buymeacoffee.com/rutikwankhade" target="_blank" rel="noreferrer" class="hover:underline text-pink-400 font-semibold">'))}></p>
                    </div>
                </div>

                <div className="md:w-1/2 mx-auto text-center mt-20">
                    <button
                        onClick={() => setShowMsg(!showMsg)}
                        className="text-6xl text-center m-2">💡</button>
                    <p className="text-xl font-Anek font-semibold text-gray-800">{t('clickMe')}</p>
                </div>

                {
                    showMsg ?
                        <div>
                            <h2 className="md:w-7/12 text-4xl border text-center mx-auto my-10 p-10 rounded-xl shadow-sm font-Nunito">{t('blogTip')}</h2>
                        </div> :
                        <div></div>
                }
            </div>
        </div>
    );
}

export default Faq;