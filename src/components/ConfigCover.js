import React from 'react';
import './ConfigCover.css'
import CoverImage from './CoverImage';
import ComponentToImg from './ComponentToImg';

class ConfigCover extends React.Component {

    state = {
        title: 'How I built my first project with react',
        bgcolor: '',
        bxshadow: '',
        height:null,
        width:null
    };

    render() {
        return (
            <div className="container">

                <div className="inputData">
                    <input type="text" placeholder="Enter title here" className="inputTitle"
                        onChange={e => this.setState({ title: e.target.value })}></input>

                    <div className="d-flex flex-row">
                        <label >width</label>
                        <input type="number"  className="input-sm"
                        onChange={e=>this.setState({width: e.target.value})}></input>
                        <label >height</label>
                        <input type="number"  className="input-sm"
                        onChange={e=>this.setState({height: e.target.value})}></input>
                    </div>


                    <label>Background</label>
                    <input type="color" defaultValue="#c5a8ff"
                        onChange={e => this.setState({ bgcolor: e.target.value })} />

                    <label>box-shadow</label>
                    <input type="color" defaultValue="#8c52ff"
                        onChange={e => this.setState({ bxshadow: e.target.value })} />


                </div>

<ComponentToImg>
<CoverImage

title={this.state.title}
bgcolor={this.state.bgcolor}
bxshadow={this.state.bxshadow}
height={this.state.height}
width={this.state.width}

    
/>
</ComponentToImg>



                



            </div>




        );
    }
}

export default ConfigCover;