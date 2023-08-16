import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    const { beast } = this.props;

    return (
      <Modal show={beast !== null} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{beast ? beast.title : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {beast ? (
            <div>
              <img src={beast.image_url} alt={beast.title} style={{maxWidth: '100%'}} />
              <p>{beast.description}</p>
            </div>
          ) : ''}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
// ChatGPT help with Modal functionality. (specifcally lines 9-24)