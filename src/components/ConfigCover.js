import React from "react";
import "./ConfigCover.css";
import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";
import ChevronDown from './ChevronDown';
import Select from 'react-select';
import RandomTheme from './RandomTheme';

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
	author: 'Rutik Wankhade',
	icon: { 'label': 'react', 'value': 'react' },
	devIconOptions: {},
};
const devIconsUrl = "https://raw.githubusercontent.com/devicons/devicon/master/devicon.json"
// const devIconOptions = [
// 	{ value: 'None', label: 'None' },
// 	{ value: 'javascript', label: 'Javascript' },
// 	{ value: 'python', label: 'Python' },
class ConfigCover extends React.Component {
	state = defaultSettings;
	componentDidMount() {
		console.log("Mount")
		fetch(devIconsUrl).then(r => r.json()).then(data => {
			this.setState({ devIconOptions: data.map(item => ({ 'value': item.name, 'label': item.name })) })
		})
	}
	handleReset = () => {
		this.setState(defaultSettings);
	};

	getRandomTheme = (theme, Pattern) => {
		this.setState({ bgColor: theme.bgColor, borderColor: theme.bdColor, pattern: Pattern });
	}

	render() {
		return (
			<div className="main-container">
				<div className="inputData card">
					<h1>CoverView</h1>
					<p className="tagline">🛠 Creating cover images for your blogs is now super easy</p>
					<input
						type="text"
						placeholder="Enter title here"
						className="inputTitle form-control"
						onChange={(e) => this.setState({ title: e.target.value })}
					></input>

					<input
						type="text"
						placeholder="Author"
						className="inputTitle form-control"
						onChange={(e) => this.setState({ author: e.target.value })}
					></input>

					<details>
						<summary>
							<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-droplet-half icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
								<path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
							</svg>

							<label>Colors</label>
							<ChevronDown />
						</summary>
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
								className="mr-4"
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

					</details>

					<details>
						<summary>
							<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-border-width icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
							</svg>
							<label>Border</label>
							<ChevronDown />
						</summary>

						<div className="d-flex flex-row">
							<div className="input-sm">
								<label>Size</label>
								<input type="number" className="form-control " value={this.state.borderSize} onChange={(e) => this.setState({ borderSize: e.target.value })} />
							</div>

							<div className="input-sm">
								<label>Type</label>
								<select
									onChange={(e) => this.setState({ borderType: e.target.value })}
									className="form-control mt-1"
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
						</div>
					</details>

					<details>
						<summary>
							<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-back icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
							</svg>
							<label>Background Pattern</label>
							<ChevronDown />
						</summary>

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
					</details>

					<details>
						<summary>
							<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-code-square icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
								<path fillRule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
							</svg>
							<label>Dev Icon</label>
							<ChevronDown />
						</summary>
						<Select value={this.state.icon} onChange={(selectedOption) => this.setState({ icon: selectedOption })} options={this.state.devIconOptions} />
						{/* <select onChange={(e) => this.setState({ icon: e.target.value })} className="form-control" value={this.state.icon}>
							<option>None</option>
							<option>javascript</option>
							<option>react</option>
							<option>angularjs</option>
							<option>vuejs</option>
							<option>typescript</option>
							<option>nodejs</option>
							<option>mongodb</option>
							<option>docker</option>
							<option>html5</option>
							<option>css3</option>
							<option>sass</option>
							<option>git</option>
							<option>github</option>
							<option>visualstudio</option>
							<option>cplusplus</option>
							<option>java</option>
							<option>android</option>
						</select> */}
					</details>


					<div className="d-flex flex-row mt-2">
						<label>Download As</label>
						<select onChange={(e) => this.setState({ download: e.target.value })} className="form-control input-md ml-2" value={this.state.download}>
							<option>PNG</option>
							<option>JPEG</option>
						</select>
					</div>
					<button className="reset-btn" onClick={this.handleReset}>
						Reset
					</button>
				</div>

				<div className="d-flex flex-column">
					<RandomTheme onThemeChange={this.getRandomTheme} />
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
