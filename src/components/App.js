import React from 'react';
import ConfigCover from './ConfigCover';
import Navbar from './Navbar';

class App extends React.Component {


    render() {
        return (
            <div>
                <Navbar />

                <ConfigCover />
            </div>



        );

    }
}


export default App;