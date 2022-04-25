import React from 'react';
import Editor from './Editor';
import Info from './Info'
class App extends React.Component {

    render() {
        return (
            <div className="content ">
                <Editor />
                <Info/>
            </div>
        );
    }
}


export default App;