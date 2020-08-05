import React from 'react';
import './CoverImage.css';


class CoverImage extends React.Component {




    render() {
        return (
            <div className="cover container"
                style={{ backgroundColor: this.props.bgcolor, height: this.props.height, width: this.props.width }}>
                <div className="card"
                    style={{ boxShadow: `15px 15px ${this.props.bxshadow}` }}>
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}

export default CoverImage;