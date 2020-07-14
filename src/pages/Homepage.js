import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import ResultsTable from "../components/ResultsTable";
import API from "../utils/API";

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resultsAll: [],
            resultsFiltered: [],
            order: "ascending"
        };

        this.handleArrowClick = this.handleArrowClick.bind(this);
    };

    componentDidMount() {
        this.getEmployees();
    };

    getEmployees = () => {
        API.getEmployees()
            .then(res => {
                this.setState({ resultsAll: this.sortAsc(res.data.results, "email") });
                this.setState({ resultsFiltered: this.state.resultsAll });
            })
            .catch(err => console.log(err));
    };

    sortDesc(arr, property) {
        return arr.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
    };

    sortAsc(arr, property) {
        return arr.sort((a, b) => (a[property] > b[property]) ? -1 : 1);
    };

    handleArrowClick() {
        if (this.state.order === "ascending") {
            this.setState({
                resultsFiltered: this.sortDesc(this.state.resultsFiltered, "email"),
                order: "descending"
            });
        } else {
            this.setState({
                resultsFiltered: this.sortAsc(this.state.resultsFiltered, "email"),
                order: "ascending"
            });
        }
    };

    handleInputChange = (event) => {
        event.preventDefault();

        let filtered = this.state.resultsAll.filter(employee => {
            let name = `${employee.name.first} ${employee.name.last}`;
            return name.toLowerCase().includes(event.target.value);
        });

        this.setState({ resultsFiltered: filtered });
    };

    render() {
        return (
            <div>
                <Header />
                <div className="uk-container">
                    <SearchForm handleInputChange={this.handleInputChange} />
                    <ResultsTable
                        employees={this.state.resultsFiltered}
                        handleArrowClick={this.handleArrowClick}
                    />
                </div>
            </div>
        );
    }
}

export default Homepage;
