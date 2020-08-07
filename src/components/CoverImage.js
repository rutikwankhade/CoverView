import React from 'react';
import './CoverImage.css';

class CoverImage extends React.Component {



    render() {
        return (
           <div className="img-fluid">
            <div className="cover container "
                style={{ backgroundColor:this.props.bgcolor, height: this.props.height, width: this.props.width }}>
                <div className="card"
                    style={{ border: `15px ${this.props.bxshadow}` }}>
                    <h1>{this.props.title}</h1>
                </div>
            </div>
            </div>
            
        );
    }
}

export default CoverImage;