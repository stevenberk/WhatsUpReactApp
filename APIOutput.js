import React from 'react';
import CreateForm from './FormComponent';



export default class APIOutput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myArray : [
                {
                    "content": "this is my whatsup",
                    "userId": 1,
                },
                {
                    "content": "this is my second whatsup",
                    "userId" :2 
                },
                {
                    "content": "so many whatsups!",
                    "userId": 3
                }
            ]
        }
    let getContent = () =>{
        // API to an array
      return fetch('http://0.tcp.ngrok.io:17762/wassups.json')
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
    let DeleteButton = () => (
        console.log("test")
      )
   return<div> {this.state.myArray.map(post =>
            <div>
                <h3>{post.content}</h3>
                <button onClick={DeleteButton}>Delete</button>
            </div>)}
        </div>
    }
};
        
