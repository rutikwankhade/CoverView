import React from "react";
import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";
import Select from 'react-select';
import RandomTheme from './RandomTheme';
import { ImgProvider } from '../utils/ImgContext'
import Header from "./Header";
import { Tab } from '@headlessui/react'

import theme1 from '../assets/images/theme1.webp'
import theme2 from '../assets/images/theme2.webp'
import theme3 from '../assets/images/theme3.webp'
import theme4 from '../assets/images/theme4.webp'
import theme5 from '../assets/images/theme5.webp'
import theme6 from '../assets/images/theme6.webp'
import theme7 from '../assets/images/theme7.webp'




const defaultIcon = { 'label': 'react', 'value': 'react' }

const defaultSettings = {
	title: "A begineers guide to frontend development",
	bgColor: "#949ee5",
	pattern: "",
	download: "PNG",
	author: 'Rutik Wankhade',
	icon: defaultIcon,
	devIconOptions: [defaultIcon],
	font: 'font-Anek',
	theme: 'background',
	customIcon: '',
	platform: 'hashnode'
};

const devIconsUrl = "https://raw.githubusercontent.com/devicons/devicon/master/devicon.json"

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
		this.setState({
			...defaultSettings,
			devIconOptions: this.state.devIconOptions,
		});
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
			<div className="max-w-[1400px] mx-auto">
				<Header />

				<ImgProvider>
					<div className="flex md:flex-row flex-col  ">

						<div className="bg-white flex flex-col h-100 md:w-3/12">

							<Tab.Group>
								<div className="flex md:flex-row flex-col">



									<div className="bg-white border-dashed border-r-2 border-gray-100 w-full p-4 ">
										<div>

											<div className="m-2 flex flex-col">
												<span className="font-medium pb-1">Blog Title</span>
												<textarea
													type="text"
													value={this.state.title}
													placeholder="Enter title here"
													className="focus:outline-none border text-gray-700 text-xl rounded p-2 h-24"
													onChange={(e) => this.setState({ title: e.target.value })}
												/>
											</div>

											<div className="flex flex-col m-2 ">
												<span className="font-medium pb-1">Author</span>
												<input
													type="text"
													value={this.state.author}
													placeholder="Author"
													className="focus:outline-none border text-gray-700 text-xl rounded bg-white p-2"
													onChange={(e) => this.setState({ author: e.target.value })}
												></input>
											</div>

											<div className="flex flex-col m-2 ">
												<span className="font-medium pb-1">Icon</span>
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
													<span className="font-medium pb-1">Font</span>

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
													</select>
												</div>
												<div className="flex flex-col m-2 w-1/2">
													<span className="font-medium pb-1">Color</span>
													<div className="border rounded flex items-center p-2">

														<span className="text-xl text-gray-700  mx-2">{this.state.bgColor}</span>
														<input type="color" value={this.state.bgColor}
															onChange={(e) => this.setState({ bgColor: e.target.value })}
															className="h-8 w-8 ml-auto mr-1 rounded"
														/>
													</div>
												</div>

											</div>


											<div className="flex items-center">
												{/* <div className="flex flex-col m-2 w-1/2">
													<span className="font-medium pb-1">Pattern</span>
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
												</div> */}

												<div className="flex flex-col m-2 w-full">
													<span className="font-medium pb-1">Platform</span>

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

										</div>



									</div>

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

						{/* cover image preview */}

						<div className=" flex m-2 flex-col items-center justify-center ">

							<ComponentToImg downloadAs={this.state.download}>
								<CoverImage {...this.state} />
							</ComponentToImg>
						</div>

						{/* themes section */}

						<div className="md:w-60 px-4 border-dashed border-l-2 border-gray-100 bg-white">
							<div className="h-99 w-full flex flex-col justify-center">

								<div className="flex items-center">
									<h2 className="text-lg pl-2 font-inter font-semibold">Themes</h2>
									<div className="ml-auto mr-1 p-2">
										<RandomTheme onThemeChange={this.getRandomTheme} />

									</div>
								</div>

								<div className="  flex gap-2 flex-wrap  overflow-y-scroll ">

									<img src={theme7} alt="basic theme"
										onClick={(e) => this.setState({ theme: "background" })}
										className=" cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-105 duration-300 "
									/>
									<img src={theme1} alt="basic theme"
										onClick={(e) => this.setState({ theme: "basic" })}
										className=" cursor-pointer border-gray-100 hover:scale-105 duration-300 hover:border-gray-200 border"
									/>
									<img src={theme2} alt="basic theme"
										onClick={(e) => this.setState({ theme: "modern" })}
										className="cursor-pointer border-gray-100 hover:scale-105 hover:border-gray-200 duration-300 border "
									/>
									<img src={theme3} alt="basic theme"
										onClick={(e) => this.setState({ theme: "stylish" })}
										className=" cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-105 duration-300"
									/>

									<img src={theme5} alt="basic theme"
										onClick={(e) => this.setState({ theme: "outline" })}
										className=" cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-105 duration-300"
									/>

									<img src={theme4} alt="basic theme"
										onClick={(e) => this.setState({ theme: "preview" })}
										className=" cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-105 duration-300"
									/>
									<img src={theme6} alt="basic theme"
										onClick={(e) => this.setState({ theme: "mobile" })}
										className=" cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-105 duration-300"
									/>
								</div>


							</div>
						</div>

					</div>
				</ImgProvider>
			</div>

		);
	}
}

export default Editor;
