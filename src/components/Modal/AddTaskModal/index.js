import { useRef } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import getValidationErrors from '../../../utils/getValidationErrors';

import { addTask } from '../../../store/TaskList/TaskList.actions';

import Input from '../../Input';
import { Container } from '../styles';

const AddTaskModal = ({ isOpen, onRequestClose }) => {    
    const session = useSelector(state => state.session);
    const dispatch = useDispatch();

    const formRef = useRef(null);

    const handleSubmit = async (data) => {
        try {
            formRef.current.setErrors({});

            const schema = Yup.object().shape({
                title: Yup.string().required('Title required'),
                delivery: Yup.string().required('Delivery date required'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            dispatch(addTask({...data, idUser: session[0].email}))
            onRequestClose();

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current.setErrors(errors);

                return;
            }
        }
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
                <h2>Add New Task</h2>

                <label>Title *</label>
                <Input 
                    name="title" 
                    placeholder="Title" 
                />

                <label>Delivery date *</label>
                <Input 
                    type="date" 
                    name="delivery" 
                    placeholder="Delivery date" 
                />

                <label>Date of the conclusion</label>
                <Input 
                    type="date" 
                    name="conclusion" 
                    placeholder="Delivery date"  
                />

                <button type="submit">Add New Task</button>
            </Container>
        </Modal>
    )
}

export default AddTaskModal;