import React from "react";
import "./style.css";
import EmployeeRow from "./EmployeeRow";

function ResultsTable(props) {
    return (
        <div className="uk-container table-container">
            <table className="uk-table uk-table-striped uk-table-responsive table">
                <thead className="table-head">
                    <tr>
                        <th>Image</th>
                        <th onClick={props.handleArrowClick}>
                            Name
                            <span className="icon" uk-icon="chevron-down" />
                        </th>
                        <th>
                            Phone
                            <span className="icon" uk-icon="chevron-down" />
                        </th>
                        <th>
                            Email
                            <span className="icon" uk-icon="chevron-down" />
                        </th>
                        <th>
                            DOB
                            <span className="icon" uk-icon="chevron-down" />
                        </th>
                    </tr>
                </thead>
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