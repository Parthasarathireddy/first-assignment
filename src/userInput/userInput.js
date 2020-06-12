import React from 'react';

class userInput extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <input type = "text" onChange = {this.props.changed} value = {this.props.value}/>
            </div>
        )
    }
}
export default userInput;