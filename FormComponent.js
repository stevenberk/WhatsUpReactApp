import React from 'react';
import APIOutput from './APIOutput';

export default class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        myArray: [
                {
                  "userId": 5,
                  "id": 4,
                  "user": "",
                  "content": "🦆 🐰 🦆 🐰 🦆 🐰 😵"
                },
                
              ]   
        }
    }
render(){
    return <form onSubmit={(event) => {
        event.preventDefault();
        event.target.value;
     
        }}>
        <input type="text" 
        value={this.state.myArray}
        
        />
        </form> 
    }
}