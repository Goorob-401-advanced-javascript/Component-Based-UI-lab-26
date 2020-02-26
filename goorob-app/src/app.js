
import React from 'react';
import './app.scss';
import Header from "./header";
import Footer from "./footer";

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
    }
        counterDecrement = e => {
            e.preventDefault();
            this.setState({ count: this.state.count - 1 });
            console.log('__STATE__' ,this.state.count )

        };

        counterIncrement = e => {
            e.preventDefault();
            this.setState({ count: this.state.count + 1 });
            console.log('__STATE__' ,this.state.count )
        };

        render() {
            return (
                <div>
                   <section> counter : {this.state.count}</section> 
                    <button type="button" onClick={this.counterIncrement}><span>+</span></button>
                    <button type="button" onClick={this.counterDecrement}><span>-</span></button>
                    
                </div>
            );
        }
   
};

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

