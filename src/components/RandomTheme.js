import React from 'react';
import './RandomTheme.css';
class RandomTheme extends React.Component {

    changeTheme = () => {
        const colorThemes = [
            {
                bgColor: '#d972ff',
                bdColor: '#581b98'
            },
            {
                bgColor: '#a7ff83',
                bdColor: '#17b978'

            },
            {
                bgColor: '#CB91FE',
                bdColor: '#5F01B2'

            },
            {
                bgColor: '#9D2EFE',
                bdColor: '#3D0C6A'

            },
            {
                bgColor: '#88EF69',
                bdColor: '#362E48'

            },
            {
                bgColor: '#ffa600',
                bdColor: '#44475a'
            },
            {
                bgColor: '#8078E7',
                bdColor: '#4B4681'
            },
            {
                bgColor: '#B1B3E4',
                bdColor: '#333794'
            },
            {
                bgColor: '#CA96DB',
                bdColor: '#7D3394'
            },
            {
                bgColor: '#F9A6A8',
                bdColor: '#55456F'
            },
            {
                bgColor: '#dcd6f7',
                bdColor: '#424874'
            },
            {
                bgColor: '#aba9e9',
                bdColor: '#64638f'
            },
            {
                bgColor: '#ffe9e3',
                bdColor: '#7c73e6'
            },
            {
                bgColor: '#efb1ff',
                bdColor: '#742dd2'
            },
            {
                bgColor: '#fee856',
                bdColor: '#1b0044'
            },
            {
                bgColor: '#fee856',
                bdColor: '#5c2a9d'
            },
            {
                bgColor: '#16db93',
                bdColor: '#2c699a'
            },
            {
                bgColor: '#ffc4d6',
                bdColor: '#ff5d8f'
            },
            {
                bgColor: '#80ed99',
                bdColor: '#22577a'
            },
            {
                bgColor: '#ffb2e6',
                bdColor: '#8447ff'
            },
            {
                bgColor: '',
                bdColor: ''
            }

        ];
        const patterns = ['graph-paper', 'gigsaw', '', 'hideout', 'dots', '', 'falling-triangles', 'circuit-board', '',
            'temple', 'anchors', '', 'brickwall', 'wiggle', 'overlapping-circles', '', 'tic-tac-toe', 'leaf', '', 'bubbles', 'squares', ''];
        const indexOfColors = Math.floor(Math.random() * colorThemes.length);
        const theme = colorThemes[indexOfColors];

        const indexOfPattern = Math.floor(Math.random() * patterns.length);
        const Pattern = patterns[indexOfPattern];

        this.props.onThemeChange(theme, Pattern);
    }

    render() {
        return (
            <div className="shuffle-btn border bg-white p-2 rounded cursor-pointer" onClick={this.changeTheme}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-shuffle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                </svg>
            </div>
        );
    }
}
export default RandomTheme;
