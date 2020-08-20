import React from "react";
import "./CoverImage.css";
import "../assets/css/patterns.css";

class CoverImage extends React.Component {
	hexToRgbA(hex, opacity) {
		var c;
		if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
			c = hex.substring(1).split("");
			if (c.length === 3) {
				c = [c[0], c[0], c[1], c[1], c[2], c[2]];
			}
			c = "0x" + c.join("");
			return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + `,${opacity})`;
		}
		throw new Error("Bad Hex");
	}

	render() {
		const { title, bgColor, borderColor, borderSize, borderType, pattern, foregroundColor, textColor, opacity, author,icon } = this.props;
		const styleToApply = {
			borderTop: `${borderSize}px ${borderType} ${borderColor}`,
			backgroundColor: `${this.hexToRgbA(foregroundColor, opacity)}`,
			color: `${textColor}`,
		};
		return (
			<div>
				<div className={` cover ${pattern} `} style={{ backgroundColor: bgColor }}>
					<div className={`${pattern}`}>
						<div className="title-card" style={styleToApply}>
							<p>{title}</p>
						</div>

					</div>
				</div>
				<div className="meta" style={{ backgroundColor: borderColor }}>
					<i className={`devicon-${icon}-plain icon`}></i>
					<span className="author">A blog by  ⚡ {author}</span></div>
			</div>
		);
	}
}

export default CoverImage;
