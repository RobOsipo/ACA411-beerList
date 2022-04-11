import React from "react";
import axios from "axios";
import BeerCard from './BeerCard.js'
import FilteredBeer from './FilteredBeer.js'
import './BeerCard.css'



class App extends React.Component {

    state = {
        beer: [],
        searchTerm: ""
    }


    componentDidMount() {
       
        axios.get('https://api.punkapi.com/v2/beers')
            .then(response => {
                const beerList = response.data
                this.setState({ beer: beerList })
            })

       
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    filterSearch = (term) => {
        return (item) => {
            return (
                item.name.toLowerCase().includes(term.toLowerCase())
            )
        }
    }

   
    render() {
        console.log(this.state)
        return (
            <main>
            
            
                <form className="search-form">
                <label className="search-label">Search our beer list for a match (: </label>
                    <input
                        name="searchTerm"
                        type="text"
                        placeholder="Search a beer brahhh"
                        onChange={ (e) => this.handleChange(e) }
                        value={this.state.searchTerm}>
                    </input>

                  
                </form>

            <h1> Welcome to the Beer Search App</h1>

            {this.state.searchTerm ?

                <FilteredBeer beer={this.state.beer.filter(this.filterSearch(this.state.searchTerm))} name="beer" info="info" image="" />

                :
                
                this.state.beer.map((brew) => {
                    return <BeerCard beer="" key={brew.id} name={brew.name} info={brew.tagline} image={brew.image_url}/>
                })
            
            }

            </main>
        )
    }
}


export default App;