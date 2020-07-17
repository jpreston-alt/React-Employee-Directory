/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const style = {
    icon: {
        padding: "10px 3px 3px 3px"
    },

    footer: {
        backgroundColor: "#228ff1",
        color: "white",
        padding: "15px",
    },

    text: {
        fontWeight: "100",
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: .5
    }
};

class Footer extends React.Component {
    render() {
        return (
            <footer className="uk-text-center uk-text-middle footer" style={style.footer}>
                <span style={style.text}> © Joanna Preston</span> <br />
                <a uk-icon="icon: github" href="https://github.com/jpreston-alt" className="contact-icon contact-link-icon" target="_blank" style={style.icon}></a>
                <a uk-icon="icon: mail" className="contact-icon contact-link-icon" href="mailto:joannappreston@gmail.com" style={style.icon}></a>
                <a uk-icon="icon: linkedin" href="https://www.linkedin.com/in/joanna-preston/" target="_blank" className="contact-icon contact-link-icon" style={style.icon}></a>
            </footer>
        )
    }
};

export default Footer;