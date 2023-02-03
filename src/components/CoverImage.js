import React from "react";
import "./CoverImage.css";
import "../assets/css/patterns.css";
import ModernTheme from "./Themes/ModernTheme";
import BasicTheme from "./Themes/BasicTheme";
import OutlineTheme from "./Themes/OutlineTheme";
import PreviewTheme from "./Themes/PreviewTheme";
import StylishTheme from "./Themes/StylishTheme";
import MobileMockupTheme from "./Themes/MobileMockupTheme";
import BackgroundTheme from "./Themes/BackgroundTheme";

const CoverImage = (props) => {
	// hexToRgbA(hex, opacity) {
	// 	var c;
	// 	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
	// 		c = hex.substring(1).split("");
	// 		if (c.length === 3) {
	// 			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
	// 		}
	// 		c = "0x" + c.join("");
	// 		return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + `,${opacity})`;
	// 	}
	// 	throw new Error("Bad Hex");
	// }

	const { theme } = props;

	const selectTheme = (theme) => {
		switch (theme) {
			case 'basic': return <BasicTheme config={props} />
			case 'modern': return <ModernTheme config={props} />
			case 'outline': return <OutlineTheme config={props} />
			case 'preview': return <PreviewTheme config={props} />
			case 'stylish': return <StylishTheme config={props} />
			case 'mobile': return <MobileMockupTheme config={props} />
			case 'background': return <BackgroundTheme config={props} />

			default: return <BasicTheme config={props} />
		}
	}


	return (
		<div className="md:w-full md:scale-100 scale-50">
			{selectTheme(theme)}		</div>
	);




}

export default CoverImage;
