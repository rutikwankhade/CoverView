import React, { useContext, useState } from "react";
// import { exportComponentAsPNG } from "react-component-export-image";
import "./CoverImage.css";
import { ImgContext } from "../utils/ImgContext";
import unsplash from "../utils/unsplashConfig";
import html2canvas from 'html2canvas'
import * as clipboard from "clipboard-polyfill";


const ComponentToImg = (props) => {

	const [loading, setLoading] = useState(false)
	const [copying, setCopying] = useState(false)

	const { unsplashImage } = useContext(ImgContext);
	const componentRef = React.createRef();




	async function saveImage(data) {
		var a = document.createElement("A");
		a.href = data;
		a.download = `cover.png`;
		document.body.appendChild(a);
		setLoading(false)

		a.click();
		document.body.removeChild(a);
	}

	async function getData(element) {
		return await html2canvas(element, {
			useCORS: true,
			scale: 2,
			backgroundColor: null,
			allowTaint: true,
			height: element.offsetHeight,
			width: element.offsetWidth,
		})
			.then(canvas => {
				return canvas.toDataURL('image/png');
			});
	}

	const downloadImage = async () => {
		// exportComponentAsPNG(componentRef, 'cover')
		setLoading(true)

		const element = componentRef.current;

		// console.log(element)
		// console.log(element.offsetHeight)

		let data = await getData(element);

		// console.log(data)
		await saveImage(data);


		if (unsplashImage) {
			unsplash.photos.trackDownload({ downloadLocation: unsplashImage.downloadLink, });
		}
	}

	const copyToClipboard = async () => {
		let base64Img = getData(componentRef.current);
		const data = await fetch(await base64Img);
		const blob = await data.blob();
		await clipboard.write([
			new clipboard.ClipboardItem({
				[blob.type]: blob,
			}),
		]);
		setCopying(true);
		setTimeout(() => {setCopying(false)}, 1000);
	}

	return (
		<React.Fragment>
			<div ref={componentRef}>{props.children}</div>
			<button
				className="border p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white text-xl rounded-lg m-4 px-4"
				onClick={() => downloadImage()}>


				<span>
					{
						loading ?
							<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white animate animate-spin" fill="currentColor" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
							:
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
					}
				</span>

				<span className="mx-2">Download</span>
			</button>
			<button
				className="border p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white text-xl rounded-lg m-4 px-4"
				onClick={() => copyToClipboard()}>


				<span>
					{
						copying ?
							// <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white animate animate-spin" fill="currentColor" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
							<svg  className="w-6 h-6"  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
							</svg>
							:
							<svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
					}

				</span>

				<span className="mx-2">Cope</span>
			</button>
		</React.Fragment>
	);

}

export default ComponentToImg;
