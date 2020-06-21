import React, { PureComponent } from 'react'
import { get } from '../data/nasa-api';
import Result from './Result';

class Search extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            searchCriteria: '',
            searchResults: [],
        }
    }

    componentDidMount = () => {
        document.addEventListener('keydown', this.handleKeyDown, true);
    }

    componentWillUnmount = () => {
        document.removeEventListener('keydown', this.handleKeyDown, true);
    }

    handleKeyDown = (evt) => {

        if (evt.keyCode !== 13) {
            return;
        }

        let { searchCriteria } = this.state;

        if (searchCriteria === '') {
            return;
        }

        get(searchCriteria)
          .then( response => {
            this.setState({ searchResults : response.data.collection.items });
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }

    handleOnChange = (evt) => {
        this.setState({ searchCriteria : evt.target.value });
    }

    render() {

        let { searchResults } = this.state;

        return (
            <>
                <p>search <input type="text" onChange={this.handleOnChange} value={this.state.searchCriteria}></input></p>
                <div>
                    {
                        searchResults.map( (result, index) => {
                            return (
                                <Result key={index} result={result} />
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default Search