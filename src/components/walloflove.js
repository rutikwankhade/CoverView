import React, { useEffect } from 'react';

const WallOfLove = () => {


    useEffect(() => {
        let script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', 'https://widget.senja.io/js/iframeResizer.min.js');

        // window.iFrameResize(
        //     { log: false, checkOrigin: false },
        //     '#senja-frame-902012ea');

        let frame = document.getElementById('senja-frame-902012ea');
        frame.setAttribute('src', "https://widget.senja.io/widget/902012ea-9b49-433a-96df-5cb43fd9a648");
        document.body.appendChild(script);

    })


    return (
        <div>
            <iframe id="senja-frame-902012ea"
                title="wall of love"
                src=""
                data-src="https://widget.senja.io/widget/902012ea-9b49-433a-96df-5cb43fd9a648"
                frameBorder="0"
                scrolling="no"
                width="100%"
                height="100%"
                className="w-9/12 h-screen  mx-auto"
            >
            </iframe>

        </div>
    );
}

export default WallOfLove;