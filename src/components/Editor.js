import React from "react";
import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";
import Select from 'react-select';
import RandomTheme from './RandomTheme';
// import resetIcon from '../assets/icons/reset.svg'
import { ImgProvider } from '../utils/ImgContext'
import Header from "./Header";

const defaultSettings = {
	title: "How I built my first project with react",
	bgColor: "#ffe9e3",
	pattern: "",
	download: "PNG",
	author: 'Rutik Wankhade',
	icon: { 'label': 'react', 'value': 'react' },
	devIconOptions: {},
	font: 'font-Anek',
	theme: 'stylish',
	customIcon: '',
	platform: 'hashnode'

};

const devIconsUrl = "https://raw.githubusercontent.com/devicons/devicon/master/devicon.json"
// const devIconOptions = [
// 	{ value: 'None', label: 'None' },
// 	{ value: 'javascript', label: 'Javascript' },
// 	{ value: 'python', label: 'Python' },
// ]


class Editor extends React.Component {



	state = defaultSettings;
	componentDidMount() {
		console.log("Mount")
		fetch(devIconsUrl).then(r => r.json()).then(data => {
			data.push({ name: 'custom' })
			this.setState({ devIconOptions: data.map(item => ({ 'value': item.name, 'label': item.name })) })
		})
	}
	handleReset = () => {
		this.setState(defaultSettings);
	};

	getRandomTheme = (theme, Pattern) => {
		this.setState({ bgColor: theme.bgColor, borderColor: theme.bdColor, pattern: Pattern });
	}

	formatOptionLabel = ({ value, label }) => (
		<div className="flex">
			<span className="mr-2">{label}</span>
			<div className="ml-auto mr-2">
				<i className={`devicon-${value}-plain dev-icon text-2xl`}></i>
			</div>
		</div>
	);



	render() {
		return (
			<div>
				<Header />

				<ImgProvider>


					<div className="flex md:flex-row flex-col bg-gray-50 ">

						<div className="bg-white shadow-sm p-4 flex flex-col md:w-1/4">


							<div className="m-2 flex flex-col">
								<span className="font-medium">Blog Title</span>
								<textarea
									type="text"
									value={this.state.title}
									placeholder="Enter title here"
									className="focus:outline-none border text-gray-700 text-xl rounded p-2 h-24"
									onChange={(e) => this.setState({ title: e.target.value })}
								/>
							</div>

							<div className="flex flex-col m-2 ">
								<span className="font-medium">Author</span>
								<input
									type="text"
									value={this.state.author}
									placeholder="Author"
									className="focus:outline-none border text-gray-700 text-xl rounded bg-white p-2"
									onChange={(e) => this.setState({ author: e.target.value })}
								></input>
							</div>



							<div className="flex items-center">

								<div className="flex flex-col m-2 w-1/2">
									<span className="font-medium">Font</span>

									<select
										value={this.state.font}

										onChange={(e) => this.setState({ font: e.target.value })}

										className="focus:outline-none text-gray-700 text-xl p-2 rounded border">
										<option>font-serif</option>
										<option>font-sans</option>
										<option>font-mono</option>
										<option>font-Inter</option>
										<option>font-Poppins</option>
										<option>font-Anek</option>
										<option>font-Nunito</option>


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
									formatOptionLabel={this.formatOptionLabel}
									className="outline-none focus:outline-none text-xl text-gray-700"
								/>
							</div>

							{this.state.icon.label === 'custom' ?
								<div className="flex items-center justify-center m-2">
									<input type="file"
										className="focus:outline-none text-lg cursor-pointer bg-white rounded border"
										onChange={(e) => this.setState({ 'customIcon': URL.createObjectURL(e.target.files[0]) })}
									/>
								</div>
								:
								<div></div>
							}

							<div className="flex">


								<div className="flex flex-col m-2 w-1/2">
									<span className="font-medium">Pattern</span>
									<select
										onChange={(e) => this.setState({ pattern: e.target.value })}
										className="focus:outline-none border text-xl p-2 rounded"
										value={this.state.pattern}>

										<option>none</option>
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

										className="focus:outline-none text-gray-700 text-xl p-2 rounded border">
										<option>stylish</option>
										<option>modern</option>
										<option>basic</option>
										<option>preview</option>
										<option>outline</option>



									</select>
								</div>

							</div>


							<div className="flex flex-col m-2">
								<span className="font-medium">Platform</span>

								<select
									onChange={(e) => this.setState({ platform: e.target.value })}
									value={this.state.platform}

									className="focus:outline-none text-gray-700 text-xl p-2 rounded border">
									<option>hashnode</option>
									<option>dev</option>


								</select>
							</div>







							{/* <div className="mx-4 my-1">
						<h6>Download As</h6>
						<select onChange={(e) => this.setState({ download: e.target.value })}
							className="form-control input"
							value={this.state.download}>
							<option>PNG</option>
							<option>JPEG</option>
						</select>
					</div> */}



						</div>

						<div className="m-2 items-center justify-center flex flex-col">
							<RandomTheme onThemeChange={this.getRandomTheme} />
							{/* <button
						className="flex items-center mx-auto border"
						onClick={this.handleReset}>
						<img src={resetIcon} className="shuffle-btn border bg-white p-2 rounded cursor-pointer"/>
					</button> */}
						</div>

						<div className="flex flex-col items-center justify-center ">


			
							<ComponentToImg downloadAs={this.state.download}>
								<CoverImage {...this.state} />
							</ComponentToImg>
						</div>

					</div>
				</ImgProvider>
			</div>

		);
	}
}

export default Editor;
