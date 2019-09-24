import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import './App.css';
const word = "Hello";
class App extends Component {
    render() {
        return ( 
            <div>{ <WordCard value="PACK"/>}
               
               
        
            </div>
        );
    }
}
export default App;