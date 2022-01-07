import React from "react";
import "./CoverImage.css";
import "../assets/css/patterns.css";

class CoverImage extends React.Component {
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

	render() {
		const { title, bgColor, pattern, author, icon } = this.props;
	
		return (
			<div>
				<div className={` cover ${pattern} `} style={{ backgroundColor: bgColor }}>
					<div className={`${pattern}`}>

						<div className="title-card">
							<div className="flex-row">
								<i className={`devicon-${icon.value}-plain dev-icon `}></i>
								<div>
									<h1 className="title">{title}</h1>
									<h2 className="author-text"> {author}</h2>
								</div>
							</div>
						</div>

					</div>
				</div>
				
			</div>
		);
	}
}

export default CoverImage;
