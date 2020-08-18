import React from "react";
import { exportComponentAsJPEG, exportComponentAsPNG } from "react-component-export-image";
import "./CoverImage.css";

class ComponentToImg extends React.Component {
	constructor(props) {
		super(props);
		this.componentRef = React.createRef();
	}

	render() {
		console.log(this.props.children);
		let downloadButton;
		switch (this.props.downloadAs) {
			case "PNG":
				downloadButton = <button onClick={() => exportComponentAsPNG(this.componentRef)}>Download</button>;
				break;
			case "JPEG":
				downloadButton = <button onClick={() => exportComponentAsJPEG(this.componentRef)}>Download</button>;
		}
		console.log(downloadButton);

		return (
			<React.Fragment>
				<div ref={this.componentRef}>{this.props.children}</div>
				{/* <button onClick={() => exportComponentAsPNG(this.componentRef)}>Download</button> */}
				{downloadButton}
			</React.Fragment>
		);
	}
}

export default ComponentToImg;
