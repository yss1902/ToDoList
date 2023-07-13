import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface MyModalProps {
    buttonLabel: string;
}

function MyModal({ buttonLabel }: MyModalProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="link" onClick={handleShow} style={{ color: 'inherit', textDecoration: 'none' }}>
                {buttonLabel}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thanks to</Modal.Title>
                </Modal.Header>
                <Modal.Body>이것은 Modal 입니다. 구름 풀스택 1기: 전민종</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        so what?
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyModal;