import React, { Component } from 'react';

class Inputs extends Component {
    render() {
        const { countries, onGuessChange } = this.props;

        const countryInputs = countries.map(country => {
            return (
                <div
                    key={country.name}
                    className='form-check form-check-inline'
                >
                    <label className='form-check-label'>
                        <input
                            className='form-check-input'
                            type='radio'
                            value={country.name}
                            name='countryGuess'
                            onChange={onGuessChange}
                        />
                        {country.name}                    
                    </label>
                </div>
            )
        })

        return (
            <div>
                {countryInputs}
            </div>
        )
    }
}

export default Inputs;