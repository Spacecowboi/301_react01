import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import dataValues from './assets/data.json';
import SelectedBeast from './components/SelectedBeast';
import HornForm from './components/HornForm';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: null,
      selectedFilter: 'all',
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

handleFilterChange = (selectedFilter) => {
  this.setState({
    selectedFilter,
  });
};

  render() {
    const filteredData = this.state.selectedFilter === 'all'
    ? dataValues
    : dataValues.filter(beast => beast.horns === parseInt(this.state.selectedFilter));

    return (
      <>
        <Header />
        <HornForm onFilterChange={this.handleFilterChange} />
        <Gallery dataValues={filteredData} onBeastSelect={this.handleBeastSelect} />
        <SelectedBeast beast={this.state.selectedBeast} onClose={this.handleCloseModal} />
        <Footer />
      </>
    );
  }
}

export default App
// ChatGPT help with applying turnary to liens 43 & 44. Along with specifying data types on lines 50 //
// ChatGPT help with the filteredData variable to filter our data based on the selected horn filter //
// ChatGPT help with the handleBeastSelect function //