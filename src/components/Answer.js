import React from 'react';

const Answer = ({ correctAnswer, guessedAnswer }) => {
    if(correctAnswer === guessedAnswer) {
        return (
            <div className=''>You've answered correctly</div>
        )
    }

    return (
        <div className=''>
            {`Wrong, ${correctAnswer} was the right answer.`}
        </div>
    )
}

export default Answer;