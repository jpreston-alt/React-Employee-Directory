import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import ResultsTable from "../components/ResultsTable";
import API from "../utils/API";

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        };
    };

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.getEmployees()
            .then(res => {
                console.log(res.data.results);
                this.setState({ results: res.data.results });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Header />
                <div className="uk-container">
                    <SearchForm />
                    <ResultsTable employees={this.state.results} />
                </div>
            </div>
        );
    }
}

export default Homepage;
