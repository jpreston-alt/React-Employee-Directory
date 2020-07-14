import React from "react";
import "./style.css";
import EmployeeRow from "./EmployeeRow";
import TableHead from "./TableHead";

function ResultsTable(props) {
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
                            return <EmployeeRow
                                key={props.employees.indexOf(e)}
                                img={e.picture.thumbnail}
                                name={`${e.name.first} ${e.name.last}`}
                                phone={e.phone}
                                email={e.email}
                                dob={e.dob.date}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};

export default ResultsTable;