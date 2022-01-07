import React from "react";
import "./ConfigCover.css";
import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";
import Select from 'react-select';
import RandomTheme from './RandomTheme';

const defaultSettings = {
	title: "How I built my first project with react",
	bgColor: "#00ff99",
	pattern: "",
	download: "PNG",
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
				<div className="config-container card ">
					<p className="tagline"><span role="img" aria-label="tool"> 🛠 </span> Creating cover images for your blogs is now super easy</p>
					<input
						type="text"
						placeholder="Enter title here"
						className="input form-control"
						onChange={(e) => this.setState({ title: e.target.value })}
					></input>

					<input
						type="text"
						placeholder="Author"
						className="input form-control"
						onChange={(e) => this.setState({ author: e.target.value })}
					></input>


					<div className="border rounded my-2 ml-2 p-1">

						<h6 className="">Background</h6>

						<div className="flex-card">
							<div className="mt-3 mx-2">
								<span>Color</span>
								<input type="color" value={this.state.bgColor}
									onChange={(e) => this.setState({ bgColor: e.target.value })}
									className="input-md form-control"
								/>
							</div>

							<div className="mx-2">
								<label>Pattern</label>
								<select
									onChange={(e) => this.setState({ pattern: e.target.value })}
									className="form-control input-md"
									value={this.state.pattern}>

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
							</div>

						</div>
					</div>


					<div className="mx-4 my-1">
						<h6>Dev Icon</h6>
						<Select value={this.state.icon}
							onChange={(selectedOption) => this.setState({ icon: selectedOption })}
							options={this.state.devIconOptions}
							className="input"
						/>
					</div>

					<div className="mx-4 my-1">
						<h6>Download As</h6>
						<select onChange={(e) => this.setState({ download: e.target.value })}
							className="form-control input"
							value={this.state.download}>
							<option>PNG</option>
							<option>JPEG</option>
						</select>
					</div>

					<button
						className="reset-btn mx-auto"
						onClick={this.handleReset}>
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
