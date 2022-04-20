import React from "react";
import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";
import Select from 'react-select';
import RandomTheme from './RandomTheme';
// import resetIcon from '../assets/icons/reset.svg'


const defaultSettings = {
	title: "How I built my first project with react",
	bgColor: "#00ff99",
	pattern: "",
	download: "PNG",
	author: 'Rutik Wankhade',
	icon: { 'label': 'react', 'value': 'react' },
	devIconOptions: {},
	font: 'font-sans',
	theme: 'basic'

};

const devIconsUrl = "https://raw.githubusercontent.com/devicons/devicon/master/devicon.json"
// const devIconOptions = [
// 	{ value: 'None', label: 'None' },
// 	{ value: 'javascript', label: 'Javascript' },
// 	{ value: 'python', label: 'Python' },

class Editor extends React.Component {

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
			<div className="flex md:flex-row flex-col bg-gray-50 ">
				<div className="bg-white shadow-sm p-4 flex flex-col md:w-1/4">
					{/* <p className="tagline"><span role="img" aria-label="tool"> 🛠 </span> Creating cover images for your blogs is now super easy</p> */}

					<div className="flex items-center mb-4 ">
						<h1 className=" text-gray-800 text-xl font-bold ">Coverview</h1>
						<a href="https://github.com/rutikwankhade/CoverView"
							target="_blank" rel="noopener  noreferrer"
							className="ml-auto mr-2 cursor-pointer">
							<i className=" devicon-github-plain dev-icon text-xl"></i>

						</a>

					</div>
					<div className="m-2 flex flex-col">
						<span className="font-medium">Blog Title</span>
						<textarea
							type="text"
							value={this.state.title}
							placeholder="Enter title here"
							className="border text-gray-700 text-xl rounded  p-2 h-20"
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

							<select
								value={this.state.font}

								onChange={(e) => this.setState({ font: e.target.value })}

								className=" text-gray-700 text-xl p-2 rounded border">
								<option>font-serif</option>
								<option>font-sans</option>
								<option>font-mono</option>
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

					<div className="flex">


						<div className="flex flex-col m-2 w-1/2">
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

						<div className="flex flex-col m-2 w-1/2">
							<span className="font-medium">Theme</span>

							<select
								onChange={(e) => this.setState({ theme: e.target.value })}
								value={this.state.theme}

								className="text-gray-700 text-xl p-2 rounded border">
								<option>basic</option>
								<option>modern</option>
							</select>
						</div>

					</div>


					<span className="text-sm mt-4  text-center text-gray-400">Made with 💖 by <a href="https://rutikwankhade.dev"
						target="_blank" rel="noopener  noreferrer" className="underline hover:text-green-500">Rutik Wankhade</a></span>




					{/* <div className="mx-4 my-1">
						<h6>Download As</h6>
						<select onChange={(e) => this.setState({ download: e.target.value })}
							className="form-control input"
							value={this.state.download}>
							<option>PNG</option>
							<option>JPEG</option>
						</select>
					</div> */}

					{/* 
					<button
						className="flex items-center mx-auto border p-2 bg-green-400"
						onClick={this.handleReset}>
						<img src={resetIcon} />
						<span>Reset</span>
					</button> */}
				</div>

				<div className="m-2 items-center justify-center flex">
					<RandomTheme onThemeChange={this.getRandomTheme} />
				</div>

				<div className="flex flex-col items-center justify-center m-14">
					<ComponentToImg downloadAs={this.state.download}>
						<CoverImage {...this.state} />
					</ComponentToImg>
				</div>

			</div>
		);
	}
}

export default Editor;
