import React from 'react';
import './ConfigCover.css'
import CoverImage from './CoverImage';
import ComponentToImg from './ComponentToImg';

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
                    <p>Create awesome cover for your blogs</p>
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

                        <option>pattern-grid-md</option>
                        <option>pattern-grid-lg</option>
                        <option>pattern-grid-xl</option>
                        <option>pattern-cross-dots-xl</option>
                        <option>pattern-dots-lg</option>
                        <option>pattern-diagonal-lines-md</option>
                        <option>pattern-diagonal-lines-lg</option>
                        <option>pattern-diagonal-lines-xl</option>
                        <option>pattern-vertical-lines-md</option>
                        <option>pattern-vertical-lines-lg</option>
                        <option>pattern-vertical-lines-xl</option>
                        <option>pattern-horizontal-lines-md</option>
                        <option>pattern-horizontal-lines-lg</option>
                        <option>pattern-horizontal-lines-xl</option>


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