import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Modal extends React.Component{
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (!this.props.show) {
            return null;
        }
        return(
            <div className="modal" id="modal">
                <h2>Modal Window</h2>
                <div className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.</div>
                <div className="actions">
                    <button className="toggle-button" onClick={this.onClose}>
                        OK
                    </button>
                </div>
            </div>
        );
    }
}