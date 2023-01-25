import React from "react";
import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";
import Select from 'react-select';
import RandomTheme from './RandomTheme';
import resetIcon from '../assets/icons/reset.svg'
import { ImgProvider } from '../utils/ImgContext'
import Header from "./Header";
import { Tab } from '@headlessui/react'

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

						<div className="bg-white flex flex-col h-100 border w-4/12">

							<Tab.Group>
								<div className="flex">


									<Tab.List className=" bg-white p-2 flex flex-col">
										<Tab className="flex  items-center font-semibold  ">
											<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-gray-800 w-12 my-2 h-12 p-2 rounded border" width="24" height="24" viewBox="0 0 24 24" ><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg>
										</Tab>

										<Tab className="flex items-center   font-semibold    text-lg">
											<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" text-gray-800 w-12 h-12 p-2 my-2 rounded border" width="24" height="24" viewBox="0 0 24 24" ><path d="M11.024 11.536 10 10l-2 3h9l-3.5-5z"></path><circle cx="9.503" cy="7.497" r="1.503"></circle><path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"></path></svg>
										</Tab>
									</Tab.List>


									<Tab.Panels className="bg-white border-l w-full p-4 ">
										<Tab.Panel>

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


											<div className="flex items-center">
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

											</div>

											<button
												className="flex items-center bg-gray-700 text-white rounded-lg mt-6 text-lg font-semibold p-1 px-4 mx-auto border"
												onClick={this.handleReset}>
												<span>Reset All</span>
											</button>



										</Tab.Panel>




										<Tab.Panel className=" w-full flex flex-col justify-center">

											<div>
												<RandomTheme onThemeChange={this.getRandomTheme} />
											</div>




											<div className="flex flex-col m-2 w-1/2">

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
										</Tab.Panel>
									</Tab.Panels>

								</div>
							</Tab.Group>


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

						{/* <div className="m-2 items-center justify-center flex flex-col">
							<RandomTheme onThemeChange={this.getRandomTheme} />
							<button
						className="flex items-center mx-auto border"
						onClick={this.handleReset}>
						<img src={resetIcon} className="shuffle-btn border bg-white p-2 rounded cursor-pointer"/>
					</button>
						</div> */}

						<div className="flex m-6 flex-col items-center justify-center ">

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
