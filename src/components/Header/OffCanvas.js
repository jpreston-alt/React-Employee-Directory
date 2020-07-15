import React from "react";
import "./style.css";

function OffCanvas() {
    return (
        <div id="offcanvas-slide" uk-offcanvas="mode: slide; overlay: true">
            <div class="uk-offcanvas-bar">

                <button class="uk-offcanvas-close" type="button" uk-close="true"></button>

                <h3>About</h3>

                <p className="about-section">This application was built with React and was a practice in breaking up an application's UI into components, managing component state, and responding to user events. It pulls 200 employees from the Random User API and allows the user to filter employees by name, or sort them by category.
                <br /><br />
                    In order to filter employees by name simply type in a name into the search bar. In order to sort the employee list by name, email, phone number, or DOB, click on that category. Click on the category again to switch the sorting order.
                </p>

            </div>
        </div>

    )
};

export default OffCanvas;