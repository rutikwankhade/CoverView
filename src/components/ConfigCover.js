import React from 'react';
import './ConfigCover.css'
import CoverImage from './CoverImage';
class ConfigCover extends React.Component {

    state = {
        title: 'How I built my first project with react',
        height: 420,
        width: 800,
        bgcolor: '',
        bxshadow: ''
    };

    render() {
        return (
            <div className="container">

                
                    <input type="text" placeholder="Enter title here" 
                    onChange={e=>this.setState({title:e.target.value})}></input>

                    <div className="d-flex flex-row">
                        <label >width</label>
                        <input type="number" name="width" className="input-sm"
                        onChange={e=>this.setState({width:e.target.value})}></input>
                        <label >height</label>
                        <input type="number" name="height" className="input-sm"
                        onChange={e=>this.setState({height:e.target.value})}></input>
                    </div>


                    <label>Background</label>
                    <input type="color" defaultValue="#c5a8ff" 
                    onChange={e=>this.setState({bgcolor:e.target.value})}/>

                    <label>box-shadow</label>
                    <input type="color" defaultValue="#8c52ff"
                    onChange={e=>this.setState({bxshadow:e.target.value})} />



                

                <CoverImage 
                title={this.state.title} 
                bgcolor={this.state.bgcolor}
                bxshadow={this.state.bxshadow}
                height={this.state.height}
                width={this.state.width}
                />



            </div>




        );
    }
}

export default ConfigCover;