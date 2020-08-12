import React from 'react';
import './CoverImage.css';

class CoverImage extends React.Component {



    render() {
        return (
            <div className={` cover ${this.props.pattern} `}
                style={{ backgroundColor:this.props.bgcolor }}>
                    <div className={`${this.props.pattern}`}>
                <div className="title-card"
                    style={{ borderTop: `15px solid ${this.props.border}`}}>
                    <p>{this.props.title}</p>
                </div>
                </div>
            </div>
            
            
        );
    }
}

export default CoverImage;