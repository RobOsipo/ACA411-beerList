import React from "react";
import axios from "axios";
import Beer from './Beer'



class App extends React.Component {

    state = {
        beer: []
    }

    componentDidMount() {
       
        axios.get('https://api.punkapi.com/v2/beers')
            .then(response => {
                const beerList = response.data
                this.setState({ beer: beerList })
            })

       
    }

   
    render() {
        console.log(this.state)
        return (
            <main>
                {this.state.beer.map((brew) => {
                    return <Beer key={brew.id} name={brew.name} info={brew.tagline}/>
                })}
            </main>
        )
    }
}


export default App;