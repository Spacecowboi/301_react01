import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import dataValues from './assets/data.json';
import SelectedBeast from './components/SelectedBeast';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: null
    };
  }

  handleBeastSelect = (beast) => {
    this.setState({
      selectedBeast: beast
    });
  }

handleCloseModal = () => {
  this.setState({
    selectedBeast: null,
  });
};

  render() {
    return (
      <>
        <Header />
        <Gallery dataValues={dataValues} onBeastSelect={this.handleBeastSelect} /> {/* Pass function to Gallery */}
        <SelectedBeast beast={this.state.selectedBeast} onClose={this.handleCloseModal} />
        <Footer />
      </>
    );
  }
}

export default App

// ChatGPT help with the handleBeastSelect function //