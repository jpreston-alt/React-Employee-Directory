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
            order: {
                direction: "ascending",
                category: "name"
            }
        };

        this.handleArrowClick = this.handleArrowClick.bind(this);
    };

    componentDidMount() {
        this.getEmployees();
    };

    getEmployees = () => {
        API.getEmployees()
            .then(res => {
                this.setState({ resultsAll: this.sortAsc(res.data.results, "name", "first") });
                this.setState({ resultsFiltered: this.state.resultsAll });
            })
            .catch(err => console.log(err));
    };

    sortAsc(arr, prop1, prop2 = 0) {
        return arr.sort((a, b) => (a[prop1][prop2] > b[prop1][prop2]) ? 1 : -1);
    };

    sortDesc(arr, prop1, prop2 = 0) {
        return arr.sort((a, b) => (a[prop1][prop2] > b[prop1][prop2]) ? -1 : 1);
    };

    handleArrowClick(cat, subcat = 0) {
        if (this.state.order.direction === "ascending") {
            this.setState({
                resultsFiltered: this.sortDesc(this.state.resultsFiltered, cat, subcat),
                order: { direction: "descending", category: cat }
            });
        } else {
            this.setState({
                resultsFiltered: this.sortAsc(this.state.resultsFiltered, cat, subcat),
                order: { direction: "ascending", category: cat }
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
                        order={this.state.order}
                    />
                </div>
            </div>
        );
    }
}

export default Homepage;
