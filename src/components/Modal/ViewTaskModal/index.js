import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

import * as Yup from 'yup';

import { useSelector } from 'react-redux';

import Input from '../../Input';
import { Container } from '../styles';

const ViewTaskModal = ({ isOpen, onRequestClose, actionForm }) => {    
    const tasks = useSelector(state => state.tasks);

    console.log(tasks, 'id da task');

    const myTask = tasks.find((task) => task.id === actionForm);

    console.log(actionForm, 'actionForm')

    const formRef = useRef(null);

    const handleSubmit = async (data) => {
        onRequestClose();
    };

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >            
            <button 
                className="react-modal-close" 
                type="button" 
                onClick={onRequestClose}
            >
                <FiX />
            </button>

            <Container ref={formRef} onSubmit={handleSubmit}>
                <h2>View Task</h2>

                <label>Title *</label>
                <Input 
                    value={myTask?.title || ""}
                    name="title" 
                    placeholder="Title" 
                    disabled
                />

                <label>Delivery date *</label>
                <Input 
                    value={myTask?.delivery || ""}
                    type="date" 
                    name="delivery" 
                    placeholder="Delivery date" 
                    disabled
                />

                <label>Date of the conclusion</label>
                <Input 
                    value={myTask?.conclusion || ""}
                    type="date" 
                    name="conclusion" 
                    placeholder="Delivery date"  
                    disabled
                />

                <button type="submit">Close Task</button>
            </Container>
        </Modal>
    )
}

export default ViewTaskModal;