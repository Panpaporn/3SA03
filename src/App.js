import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';
const word = ['Pack', 'Pla', 'Pop'];
const random = Math.floor(Math.random() * word.length)
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

            play: false,
            pause: true

        };

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
    getAnswer = (answer) => {
        document.getElementById('complete').innerHTML = `Answer : ${answer}`;
      }
      
    render() {
        return ( <div > { < WordCard value = { word.slice(random, random + 1).join().toUpperCase() }getAnswer={this.getAnswer}/>} 
        <button onClick = { this.play } > Play </button> 
        <button onClick = { this.pause } > Pause </button> 
        <h1 id="your-answer"></h1>
         <br></br>
         <button id="newgame" className="button" onClick={this.newgame}>New Game</button>
        </div>

            );
        }
    }
    export default App;