import React from 'react';
import CreateForm from './FormComponent';



export default class APIOutput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myArray : [
              
            ]
        }
    let getContent = () =>{
        // API to an array
      return fetch('http://0.tcp.ngrok.io:11140/wassups.json')
      .then(res => res.json())
      .then(wassups => {
          this.setState({
              myArray: wassups
          })
      }
      )
    }
    getContent();
}
render(){
   return this.state.myArray.map(post =>
      <h3>{post.content}</h3>)
       
       
    }
};
        
