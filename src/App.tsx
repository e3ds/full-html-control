import React from 'react';
import './styles/App.css';
import './styles/player.css';

function App() {
    return <div id="playerUI" style={{display: 'block'}}>
        <div id="player" style={{display: 'block'}}>
            <video id="streamingVideo">
                <source src="" type="video/mp4" />
            </video>
        </div>
    </div>
}

export default App;
