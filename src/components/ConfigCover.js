import React from "react";
import "./ConfigCover.css";
import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";

const defaultSettings = {
	title: "How I built my first project with react",
	bgColor: "#00ff99",
	borderColor: "#676683",
	borderSize: "18",
	borderType: "solid",
	pattern: "",
	download: "PNG",
	foregroundColor: "#ffffff",
	textColor: "#676683",
	opacity: 1,
};

class ConfigCover extends React.Component {
	state = defaultSettings;

	handleReset = () => {
		this.setState(defaultSettings);
	};

	render() {
		return (
			<div className="main-container">
				<div className="inputData card">
					<h1>CoverView</h1>
					<p className="tagline">🛠 Create awesome cover images for your blog posts quickly</p>
					<input
						type="text"
						placeholder="Enter title here"
						className="inputTitle form-control"
						onChange={(e) => this.setState({ title: e.target.value })}
					></input>

					<div>
						<label>Background</label>
						<input type="color" value={this.state.bgColor} onChange={(e) => this.setState({ bgColor: e.target.value })} />

						<label>Border</label>
						<input type="color" value={this.state.borderColor} onChange={(e) => this.setState({ borderColor: e.target.value })} />

					</div>

					<div>
						<label>Foreground</label>
						<input
							type="color"
							value={this.state.foregroundColor}
							onChange={(e) => this.setState({ foregroundColor: e.target.value })}
						/>
						<label>Text</label>
						<input type="color" value={this.state.textColor} onChange={(e) => this.setState({ textColor: e.target.value })} />
					</div>

					<label>Opacity</label>
					<input
						type="range"
						min="0"
						max="1"
						step="0.1"
						value={this.state.opacity}
						className="custom-range"
						onChange={(e) => this.setState({ opacity: e.target.value })}
					></input>

					<div className="d-flex flex-row">
						<label>Border size</label>
						<input type="number" value={this.state.borderSize} onChange={(e) => this.setState({ borderSize: e.target.value })} />

						<label>Type</label>
						<select
							onChange={(e) => this.setState({ borderType: e.target.value })}
							className="form-control input-sm"
							value={this.state.borderType}
						>
							<option>dotted</option>
							<option>dashed</option>
							<option>solid</option>
							<option>double</option>
							<option>groove</option>
							<option>ridge</option>
							<option>inset</option>
							<option>outset</option>
							<option>none</option>
						</select>
					</div>

					<label>Background Pattern</label>
					<select onChange={(e) => this.setState({ pattern: e.target.value })} className="form-control" value={this.state.pattern}>
						<option>None</option>
						<option>graph-paper</option>
						<option>jigsaw</option>
						<option>hideout</option>
						<option>dots</option>
						<option>falling-triangles</option>
						<option>circuit-board</option>
						<option>temple</option>
						<option>anchors</option>
						<option>brickwall</option>
						<option>overlapping-circles</option>
						<option>wiggle</option>
						<option>tic-tac-toe</option>
						<option>leaf</option>
						<option>bubbles</option>
						<option>squares</option>
						<option>explorer</option>
						<option>jupiter</option>
						<option>sun</option>
					</select>

					<div className="d-flex flex-row mt-2">
						<label>Dowload As</label>
						<select onChange={(e) => this.setState({ download: e.target.value })} className="form-control input-md" value={this.state.download}>
							<option>PNG</option>
							<option>JPEG</option>
						</select>
					</div>
					<button className="reset-btn" onClick={this.handleReset}>
						Reset
					</button>
				</div>
				<div className="blog-cover">
					<ComponentToImg downloadAs={this.state.download}>
						<CoverImage {...this.state} />
					</ComponentToImg>
				</div>
			</div>
		);
	}
}

export default ConfigCover;
