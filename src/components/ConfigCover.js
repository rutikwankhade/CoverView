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
            <div className="container">

                <div className="inputData">
                    <input type="text" placeholder="Enter title here" className="inputTitle form-control"
                        onChange={e => this.setState({ title: e.target.value })}></input>

                    {/* <div className="d-flex flex-row">
                        <label >width</label>
                        <input type="number"  className="input-sm"
                        onChange={e=>this.setState({width: e.target.value})}></input>
                        <label >height</label>
                        <input type="number"  className="input-sm"
                        onChange={e=>this.setState({height: e.target.value})}></input>
                    </div> */}


                    <label>Background</label>
                    <input type="color" defaultValue="#c5a8ff"
                        onChange={e => this.setState({ bgcolor: e.target.value })} />

                    <label>border</label>
                    <input type="color" defaultValue="#8c52ff"
                        onChange={e => this.setState({ border: e.target.value })} />

                    <label>Background Pattern</label>
                    <select onChange={e => this.setState({ pattern: e.target.value })}
                        className="form-control">
                        <option>none</option>

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

                <ComponentToImg>
                    <CoverImage

                        title={this.state.title}
                        bgcolor={this.state.bgcolor}
                        border={this.state.border}
                        pattern={this.state.pattern}



                    />
                </ComponentToImg>







            </div>




        );
    }
}

export default ConfigCover;