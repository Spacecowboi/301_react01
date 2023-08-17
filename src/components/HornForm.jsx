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
              <option value="all">Find YOUR beast with the horns YOU want!</option>
              <option value="1"> 1 Horn! Wow how boring! </option>
              <option value="2"> 2 Horns! OPTIMAL DAMAGE </option>
              <option value="3"> 3 Horns!! ARE YOU KIDDING ME!? WHY DO WE NEED 3 OF THESE?! </option>
            </Form.Control>
          </Form.Group>
        </Form>
      );
    }
  }
  
  export default HornForm;

  // ChatGPT help with lines 4-7 //