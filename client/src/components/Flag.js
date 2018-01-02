import React, { Component } from 'react'

class Flag extends Component {
    render() {
        const { flagContent } = this.props;

        let flag;
        if(flagContent.flag) {
            flag = <img src={flagContent.flag} className="rounded mx-auto d-block" alt={flagContent.name}/>
        } else {
            flag = <div className='justify-content-center'>Loading...</div>
        }

        return (
            <div className="col-12">
                {flag}
            </div>
        )
    }
}

export default Flag;