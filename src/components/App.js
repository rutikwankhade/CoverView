import React from 'react';
import Editor from './Editor';
import Info from './Info'
import { ImgProvider } from '../utils/ImgContext'

const App = () => {

    return (
        <ImgProvider>
            <div>
                <Editor />
                <Info />
            </div>
        </ImgProvider>
    );

}

export default App;