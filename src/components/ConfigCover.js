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
			<div className="flex ">
				<div className="bg-white  p-4 flex flex-col md:w-1/4">
					{/* <p className="tagline"><span role="img" aria-label="tool"> 🛠 </span> Creating cover images for your blogs is now super easy</p> */}


					<div className="m-2 flex flex-col">
						<span className="font-medium">Blog Title</span>
						<textarea
							type="text"
							value={this.state.title}
							placeholder="Enter title here"
							className="border text-gray-700 text-xl rounded  p-2 h-24"
							onChange={(e) => this.setState({ title: e.target.value })}
						/>
					</div>

					<div className="flex flex-col m-2 ">
						<span className="font-medium">Author</span>
						<input
							type="text"
							value={this.state.author}
							placeholder="Author"
							className="border text-gray-700 text-xl rounded bg-white p-2"
							onChange={(e) => this.setState({ author: e.target.value })}
						></input>
					</div>



					<div className="flex items-center">

						<div className="flex flex-col m-2 w-1/2">
							<span className="font-medium">Font</span>

							<select className=" text-gray-700 text-xl p-2 rounded border">
								<option>Serif</option>
								<option>Sans</option>
								<option>mono</option>
							</select>
						</div>
						<div className="flex flex-col m-2 ">
							<span className="font-medium">Color</span>
							<div className="border rounded flex items-center p-2">

								<span className="text-sm text-gray-700 font-semibold mx-2">{this.state.bgColor}</span>
								<input type="color" value={this.state.bgColor}
									onChange={(e) => this.setState({ bgColor: e.target.value })}
									className="h-8 w-8  rounded"
								/>
							</div>
						</div>

					</div>





					<div className="flex flex-col m-2 ">
						<span className="font-medium">Icon</span>
						<Select value={this.state.icon}
							onChange={(selectedOption) => this.setState({ icon: selectedOption })}
							options={this.state.devIconOptions}
							className="text-xl text-gray-700"
						/>
					</div>



					<div className="flex flex-col m-2">
						<span className="font-medium">Pattern</span>
						<select
							onChange={(e) => this.setState({ pattern: e.target.value })}
							className="border text-xl p-2 rounded"
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

					{/* <div className="flex flex-col m-2 ">
						<span className="font-medium">Theme</span>

						<select className="text-gray-700 text-xl p-2 rounded border">
							<option>Basic</option>
							<option>Theme 2</option>
							<option>Theme 3</option>
						</select>
					</div> */}





					{/* <div className="mx-4 my-1">
						<h6>Download As</h6>
						<select onChange={(e) => this.setState({ download: e.target.value })}
							className="form-control input"
							value={this.state.download}>
							<option>PNG</option>
							<option>JPEG</option>
						</select>
					</div> */}

					<button
						className="reset-btn mx-auto"
						onClick={this.handleReset}>
						Reset
					</button>
				</div>

				<div className="m-2 items-center justify-center flex">
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
