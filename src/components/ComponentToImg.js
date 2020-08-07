import React from 'react';
import { exportComponentAsJPEG, exportComponentAsPNG } from "react-component-export-image";
// import CoverImage from './CoverImage'



class ComponentToImg extends React.Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    render() {
        return (
            <React.Fragment>

                <div ref={this.componentRef} style={{height:this.props.children.height}}>
                    {this.props.children}
                </div>

                <button onClick={() => exportComponentAsJPEG(this.componentRef)}>
                    Export As JPEG
            </button>

                <button onClick={() => exportComponentAsPNG(this.componentRef)}>
                    Export As PNG
            </button>
            </React.Fragment>);
    }

}

export default ComponentToImg;