import React from 'react';
import './app.scss';

 const Header = () =>{  //functional component 
return ( //it will return jsx
    <header className = "counter-app">
        <h1>counter application using react component</h1>
        </header>

)
 } 

     
 const Footer = () => {
     return (
         <footer>my first app using React </footer>
     )
 }

 class counter extends React.Component {
     constructor (props){
         super(props)
             this.state = {
              count : 0 
             }
     
     counterDecrement = event => {
        event.preventDefault();
        this.setState({ count: this.state.count - 1 })
      }
    
      counterIncrement = event => {
        event.preventDefault();
        this.setState({ count: this.state.count + 1 })
      }

      render() {
        return (
          <div>
               Current count: {this.state.count}
            <button type="button" onclick={this.counterDecrement}>+</button>
            <button type="button" onclick={this.counterIncrement}>-</button>
          </div>
        );
      }
    }
 }

      class App extends React.Component {
        render() {
          return (
            <React.Fragment>
              <Header />
              <Counter />
              <Footer />
            </React.Fragment>
          )
        }
      }
      
      export default App;
    
 