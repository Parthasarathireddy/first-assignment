import React from 'react';

class userOutput extends React.Component {
    render(){
        return (
            <div>
                <p>add paragraph text here! name = {this.props.userName}</p>
            </div>
        )
    }
}
export default userOutput;