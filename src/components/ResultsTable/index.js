import React from "react";
import "./style.css";
import EmployeeRow from "./EmployeeRow";
import TableHead from "./TableHead";

class ResultsTable extends React.Component {

    formatPhoneNumber(phoneNum) {
        // strips the string of all characeters that aren't a number
        var numStripped = ('' + phoneNum).replace(/\D/g, '')

        // retrieves the parts of the string that match the parts of a formatted phone number
        var match = numStripped.match(/^(\d{3})(\d{3})(\d{4})$/);

        // if matches exist return a formatted phone number
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        }

        // if number didn't match regularly formatted number, return original number
        return phoneNum;
    };

    // console.log(window.innerWidth);

    render() {
        return (
            <div className="uk-container table-container">
                <table className="uk-table uk-table-striped uk-table-responsive table">
                    <TableHead
                        handleArrowClick={this.props.handleArrowClick}
                        order={this.props.order}
                    />
                    <tbody>
                        {
                            this.props.employees.map(e => {
                                let date = new Date(e.dob.date);
                                let dateStr = date.toLocaleDateString();

                                return <EmployeeRow
                                    key={this.props.employees.indexOf(e)}
                                    img={e.picture.thumbnail}
                                    name={`${e.name.first} ${e.name.last}`}
                                    phone={this.formatPhoneNumber(e.phone)}
                                    email={e.email}
                                    dob={dateStr}
                                />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
};

export default ResultsTable;