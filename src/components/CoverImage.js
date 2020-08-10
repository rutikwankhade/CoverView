import React from 'react';
import './CoverImage.css';

class CoverImage extends React.Component {



    render() {
        return (
            <div className="cover"
                style={{ backgroundColor:this.props.bgcolor }}>
                <div className="card"
                    style={{ borderTop: `15px solid ${this.props.border}`}}>
                    <h1>{this.props.title}</h1>
                </div>
            </div>
            
            
        );
    }
}

export default CoverImage;