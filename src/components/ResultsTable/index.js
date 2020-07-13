import React from "react";
import "./style.css";
import EmployeeRow from "./EmployeeRow";

function ResultsTable() {
    return (
        <div className="uk-container table-container">
            <table className="uk-table uk-table-striped uk-table-responsive table">
                <thead className="table-head">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeRow />
                    <EmployeeRow />
                    <EmployeeRow />
                    <EmployeeRow />
                    <EmployeeRow />
                </tbody>
            </table>
        </div>
    )
};

export default ResultsTable;