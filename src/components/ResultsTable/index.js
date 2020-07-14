import React from "react";
import "./style.css";
import EmployeeRow from "./EmployeeRow";
import TableHead from "./TableHead";

function ResultsTable(props) {
    function formatPhoneNumber(phoneNumberString) {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        }
        return phoneNumberString;
    };

    return (
        <div className="uk-container table-container">
            <table className="uk-table uk-table-striped uk-table-responsive table">
                <TableHead
                    handleArrowClick={props.handleArrowClick}
                    order={props.order}
                />
                <tbody>
                    {
                        props.employees.map(e => {
                            let date = new Date(e.dob.date);
                            let dateStr = date.toLocaleDateString();

                            return <EmployeeRow
                                key={props.employees.indexOf(e)}
                                img={e.picture.thumbnail}
                                name={`${e.name.first} ${e.name.last}`}
                                phone={formatPhoneNumber(e.phone)}
                                email={e.email}
                                dob={dateStr}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};

export default ResultsTable;