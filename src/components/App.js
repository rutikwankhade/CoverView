import React from 'react';
import ConfigCover from './ConfigCover';
import Navbar from './Navbar';
import Footer from './Footer';
class App extends React.Component {

    render() {
        return (
            <div className="outerContainer">
                <Navbar />
                <ConfigCover />
                <Footer />

            </div>
        );
    }
}


export default App;