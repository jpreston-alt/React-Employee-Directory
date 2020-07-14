import React from "react";
import "./style.css";

function TableHead(props) {
    let icon, nameIcon, phoneIcon, emailIcon, dobIcon;

    if (props.order.direction === "ascending") {
        icon = "chevron-down"
    } else {
        icon = "chevron-up"
    };

    switch (props.order.category) {
        case "name":
            nameIcon = icon
            break;
        case "email":
            emailIcon = icon
            break;
        case "phone":
            phoneIcon = icon
            break;
        case "dob":
            dobIcon = icon
            break;
        default:
            nameIcon = icon
    };

    return (
        <thead className="table-head">
            <tr>
                <th>Image</th>
                <th onClick={() => props.handleArrowClick("name", "first")}>
                    Name
                    <span className="icon" uk-icon={nameIcon} />
                </th>
                <th onClick={() => props.handleArrowClick("phone")}>
                    Phone
                    <span className="icon" uk-icon={phoneIcon} />
                </th>
                <th onClick={() => props.handleArrowClick("email")}>
                    Email
                    <span className="icon" uk-icon={emailIcon} />
                </th>
                <th onClick={() => props.handleArrowClick("dob", "date")}>
                    DOB
                    <span className="icon" uk-icon={dobIcon} />
                </th>
            </tr>
        </thead>
    )
};

export default TableHead;