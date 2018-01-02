import React, { Component } from 'react'
import Flag from './Flag';
import Inputs from './Inputs';

class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			countries: [],
			correctAnswer: {},
			guess: '',
			gameOver: false
		}
		
		this.getRandomCountries = this.getRandomCountries.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleGuess = this.handleGuess.bind(this);
		this.handleNext = this.handleNext.bind(this);

	}

	// componentDidMount() {
	// 	fetch('https://restcountries.eu/rest/v2/all')
	// 		.then(data => data.json())
	// 		.then(countries => this.getRandomCountries(countries));
	// }

	componentDidMount() {
		this.fetchCountries();
	}

	// Grabs data from the restcountries api
	fetchCountries() {
		fetch('https://restcountries.eu/rest/v2/all')
		.then(data => data.json())
		.then(countries => this.getRandomCountries(countries));
	}

	// Generates an array of 4 random countries, also randomly picks an item from the array and sets it at the answer, then sets the state of countries, and correct answer
	getRandomCountries(countries) {
		const randomCountries = [];
		for(let i = 0; i < 4; i++) {
			const randomCountry = countries[Math.floor(Math.random()*countries.length)];
			randomCountries.push(randomCountry)
		}
		const correctAnswer = randomCountries[Math.floor(Math.random()*randomCountries.length)];
		this.setState({ countries: randomCountries, correctAnswer });
	}

	// Sets the state of guess
	handleChange(e) {
		this.setState({ guess: e.target.value });
	}

	// Sets the state of gameOver to true
	handleGuess(e) {
		e.preventDefault();
		this.setState({ gameOver: true });
	}

	// Generates a new array of countries and a new answer, sets the state of gameOver to false
	handleNext(e) {
		e.preventDefault();
		this.fetchCountries();
		this.setState({ gameOver: false })
	}

	// Renders a guess button or next button depending on the state of gameOver
	renderButton() {
		const guessButton = <button type='submit' className='btn btn-primary' onClick={this.handleGuess}>Guess</button>

		const nextButton = <button type='submit' className='btn btn-primary' onClick={this.handleNext}>Next</button>

		if(this.state.gameOver) {
			return nextButton;
		} else {
			return guessButton;
		}
	}

	// Returns a different div based on the guess of the user
	renderAnswer() {
		if(this.state.correctAnswer.name === this.state.guess) {
			return <div className='form-check form-check-inline'>You've answered correctly</div>
		}

		return <div className='form-check form-check-inline'>{`Wrong, ${this.state.correctAnswer.name} was the right answer.`}</div>
	}

	render() {

		return (
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12'>
						<form className='form-inline justify-content-center'>
							<Inputs
                                countries={this.state.countries}
                                onGuessChange={this.handleChange}
                            />
							{this.renderButton()}
						</form>
					</div>
                    <Flag flagContent={this.state.correctAnswer}/>
				</div>
			</div>
		)
	}
}

export default Content;