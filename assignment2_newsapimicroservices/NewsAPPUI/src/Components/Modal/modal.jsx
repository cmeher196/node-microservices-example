import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router';
import FilterService from '../filterservice/Filter';
import SelectionView from '../selectionData/selectionview';

const ModalView = (props) => {
    const [show, setShow] = useState(false);
    const history = useHistory()


    const handleSave = (filterData) => {
        setShow(false);
        let service = new FilterService();
        let filteredAPI = service.getFilteredApi(filterData);
        console.log('filterAPI', filteredAPI)
        history.push({
            pathname: '/dashboard',
            filteredAPI
        })
    }

    const handleShow = () => setShow(true) 

    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="dark" className="modal-btn" style={{ margin: '10px' }} onClick={handleShow}>
                Filter
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter News</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SelectionView filterDashboardData={handleSave} />
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default ModalView