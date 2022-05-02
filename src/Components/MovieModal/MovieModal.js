import React from 'react';
import {Button, Modal} from 'react-bootstrap';

const MovieModal = (props) => {

    const {show, handleClose} = props;

    return (
        <div>
            <Modal fullscreen={true} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MovieModal;