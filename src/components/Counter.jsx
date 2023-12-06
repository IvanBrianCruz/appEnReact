import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 1,
            products: []
        }
    } 

    aumentarValor(){
        this.setState({
            count: this.state.count + 1,          
        })
    }

    disminuirValor(){
        this.setState({
            count: this.state.count - 1
        })
    }

    componentDidMount(){
      
        console.log('Se monta el componente')
        this.getProducts('http://localhost:3031/api/movies/1')
    }

    componentDidUpdate(){
        console.log('Se actualiza el componente')
        
    }

    getProducts(url){
        fetch(url)
        .then((resp) => resp.json())
        .then(({ data }) => {
            this.setState({
                products: data
            })
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    render() { 
        return ( 
            <>
                <h3>{this.state.count}</h3>
                <div>
                    <button onClick={() => this.aumentarValor()}>Aumentar</button>
                    <button onClick={() => this.disminuirValor()}>Disminuir</button>
                </div>
            </>
        );
    }
}

export default Counter;
