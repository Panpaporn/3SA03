import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';
const word = ['Pack', 'Platon', 'Poppystr'];
const random = Math.floor(Math.random() * word.length)
class App extends Component {
    constructor() {
        super();
        this.state = {
            requestHint: false,
            play: false,
            pause: true

        }

        this.url = "http://streaming11.tdiradio.com:8000/tdiradiokragujevac.mp3";
        this.audio = new Audio(this.url);

    }

    play = () => {
        this.setState({
            play: true,
            pause: false
        });
        console.log(this.audio);
        this.audio.play();
    }

    pause = () => {
        this.setState({ play: false, pause: true });
        this.audio.pause();
    }
    newgame = () => {
        window.location.reload(false);
    }
    requestHint = () => {
        this.setState({ requestHint: true });
    }
    getHint = (chars) => {
        document.getElementById('hints').innerHTML = `Hint : ${chars}`;
    }

    render() {
        return (
            <div className="App">
                <h1>RANDOM GAME</h1>
                < WordCard value={word.slice(random, random + 1).join().toUpperCase()}
                    getHint={this.getHint} requestHint={this.state.requestHint} />
                <h1 id="result"></h1>
                <button onClick={this.play} > Play </button>
                <button onClick={this.pause} > Pause </button>
                <h1 id="your-answer"></h1>
                <br></br>
                <button id="newgame" className="button" onClick={this.newgame}>New Game</button>
                <br></br><br></br>
                <button id="hint" className="button" onClick={this.requestHint}>Hint</button>
                <br></br>
                <p id="hints"></p>
            </div>

        );
    }
}
export default App;