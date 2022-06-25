import React from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./CoverImage.css";

class ComponentToImg extends React.Component {
	constructor(props) {
		super(props);
		this.componentRef = React.createRef();
	}

	render() {


		return (
			<React.Fragment>
				<div ref={this.componentRef}>{this.props.children}</div>
				<button
					className="border p-2 bg-gray-700 hover:bg-gray-800 text-white text-xl rounded m-4 px-4"
					onClick={() => exportComponentAsPNG(this.componentRef, 'cover')}>Download</button>
			</React.Fragment>
		);
	}
}

export default ComponentToImg;
