import React, { Component } from 'react'

class Flag extends Component {
    render() {
        const { flagContent } = this.props;

        let flag;
        if(flagContent.flag) {
            flag = <img src={flagContent.flag} className="flag-img" alt={flagContent.name}/>
        } else {
            flag = <div className=''>Loading...</div>
        }

        return (
            <div className="flag-container">
                {flag}
            </div>
        )
    }
}

export default Flag;