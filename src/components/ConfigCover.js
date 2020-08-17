import React from 'react';
import './ConfigCover.css'
import CoverImage from './CoverImage';
import ComponentToImg from './ComponentToImg';
import '../assets/css/patterns.css'
class ConfigCover extends React.Component {

    state = {
        title: 'How I built my first project with react',
        bgcolor: '',
        border: '',
        pattern: ''

    };

    render() {
        return (
            <div className="main-container">

                <div className="inputData card">

                    <h1>CoverView</h1>
                    <p>🛠 Create awesome cover images for your blog posts quickly</p>
                    <input type="text" placeholder="Enter title here" className="inputTitle form-control"
                        onChange={e => this.setState({ title: e.target.value })}></input>


                    <div>
                        <label>Background</label>
                        <input type="color" defaultValue="#00ff99"
                            onChange={e => this.setState({ bgcolor: e.target.value })} />

                        <label>border</label>
                        <input type="color" defaultValue="#8c52ff"
                            onChange={e => this.setState({ border: e.target.value })} />
                    </div>

                    <label>Background Pattern</label>
                    <select onChange={e => this.setState({ pattern: e.target.value })}
                        className="form-control">
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

                    </select>

                </div>

                <div className="blog-cover">
                    <ComponentToImg>
                        <CoverImage

                            title={this.state.title}
                            bgcolor={this.state.bgcolor}
                            border={this.state.border}
                            pattern={this.state.pattern}

                        />
                    </ComponentToImg>

                </div>
            </div>
        );
    }
}

export default ConfigCover;