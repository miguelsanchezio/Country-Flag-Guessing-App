import React from 'react';

const Answer = ({ correctAnswer, guessedAnswer }) => {
    if(correctAnswer === guessedAnswer) {
        return (
            <div className='form-check form-check-inline'>You've answered correctly</div>
        )
    }

    return (
        <div className='form-check form-check-inline'>
            {`Wrong, ${correctAnswer} was the right answer.`}
        </div>
    )
}

export default Answer;