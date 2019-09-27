import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    console.log("chars : "+chars.join('').toString())
    return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false
    }
   }
export default class WordCard extends
Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        let guess = [...this.state.guess, c.toUpperCase()]
        this.setState({guess})

        // if(guess.length == 1){
        //     document.getElementById('your-answer').innerHTML = `Your Answer : ${this.state.chars.join("")}` 
        // }else
        //     document.getElementById('your-answer').innerHTML += c.toUpperCase();
        this.setState({guess})
        console.log(guess.join('').toString())
        if(guess.length == this.state.chars.length){
            console.log(`${guess.join('').toString()} ${this.state.chars.join('').toString()}`)
         if(guess.join('').toString() == this.state.chars.join('').toString()){
        this.setState({guess: [], completed: true})
        document.getElementById('result').innerHTML = `Congratulations! Or Succees`
        document.getElementById('your-answer').innerHTML = `Your Answer : ${this.state.chars.join("")}` 

        }else{
        this.setState({guess: [], attempt: this.state.attempt + 1})
        document.getElementById('result').innerHTML = `Attempt Or Try Again: ${this.state.attempt} `
        document.getElementById('your-answer').innerHTML = `Your Answer : ${this.state.chars.join("")}` 
        document.getElementById('result').innerHTML = `Attempt Or Try Again: ${this.state.attempt} `
        }
        if(this.state.attempt == 3){
            document.getElementById('result').innerHTML = `Game Over! So RestartGame`
            setTimeout(() => window.location.reload(false),3000)
        }
        }
       }
       
render() {
    
 return (
 <div>
{ Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i}activationHandler={this.activationHandler}/>) }
 </div>
 );
 }
}

   