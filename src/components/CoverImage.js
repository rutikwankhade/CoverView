import React from "react";
import "./CoverImage.css";
import "../assets/css/patterns.css";
import ModernTheme from "./Themes/ModernTheme";
import BasicTheme from "./Themes/BasicTheme";

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


	return (
		<div>
			{theme === 'basic' ? <BasicTheme config={props} /> : <ModernTheme config={props} />}
		</div>
	);




}

export default CoverImage;
