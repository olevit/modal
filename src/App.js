import logo from './logo.svg';
import './App.css';
import React from "react";
import Modal from "./component/modal";
import PropTypes from "prop-types";


class App extends React.Component{
    state = {
        show: false
    };

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };

  render() {
      return (
          <div className="App">
              <button
                  className="toggle-button" id="centered-toggle-button"
                  onClick={e => {
                      this.showModal(e);
                  }}
                    >show Modal</button>
              <Modal onClose={this.showModal} show={this.state.show}>
                      Message in Modal
              </Modal>
          </div>
      );
  }
}

export default App;
