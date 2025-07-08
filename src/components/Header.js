import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.png'
import { useLanguage } from '../utils/i18n';

const Header = () => {
	const { language, toggleLanguage, t } = useLanguage();
	const tweetText = encodeURIComponent(`type your thoughts here, Try https://coverview.vercel.app by @rutikdotdev`)

	return (
		<div className="bg-white text-xl md:px-2 flex border-dashed border-b-2 border-gray-100 p-2">
			<Link to="/" className="flex items-center">
				<img src={logo} alt="logo" className="w-8 h-8 mx-4" />
				<h1 className="font-semibold">Coverview</h1>
			</Link>

			<div className="ml-auto md:mr-4 flex items-center">
				{/* <Link to="/faq" className="text-gray-700 hover:text-gray-800 text-base font-Nunito mx-4"><span className="hidden md:inline-block">How to use</span></Link> */}
				<a href="https://github.com/rutikwankhade/CoverView" target="_blank" rel="noreferrer" className="bg-gray-700 hover:bg-gray-800 px-4 rounded-full p-1 text-white md:text-sm md:flex hidden items-center text-xs mx-2 font-Nunito">{t('starOnGithub')}</a>
				<a href={`https://x.com/intent/tweet?text=${tweetText}`} className="mx-2 bg-blue-400 hover:bg-blue-500 md:text-sm text-xs rounded-full px-4 font-semibold text-white p-1">{t('shareOnTwitter')}</a>
				<button 
					onClick={toggleLanguage} 
					className="bg-indigo-500 hover:bg-indigo-600 px-4 rounded-full p-1 text-white md:text-sm text-xs mx-2 font-Nunito"
				>
					{language === 'en' ? '中文' : 'English'}
				</button>
			</div>
		</div>
	);
}

export default Header;