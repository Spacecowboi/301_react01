import React from "react";
import { Form } from 'react-bootstrap';

class HornForm extends React.Component {
    handleFilterChange = (event) => {
      const selectedFilter = event.target.value;
      this.props.onFilterChange(selectedFilter); 
    };
  
    render() {
      return (
        <Form>
          <Form.Group controlId="filterByHorns">
            <Form.Label>Filter by Number of Horns:</Form.Label>
            <Form.Control as="select" onChange={this.handleFilterChange}>
              <option value="Find YOUR beast with the horns YOU want!">All</option>
              <option value="1"> 1 Horn </option>
              <option value="2"> 2 Horns </option>
              <option value="3"> 3 Horns </option>
            </Form.Control>
          </Form.Group>
        </Form>
      );
    }
  }
  
  export default HornForm;

  // ChatGPT help with lines 4-7 //