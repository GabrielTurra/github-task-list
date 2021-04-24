import { useRef, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import getValidationErrors from '../../../utils/getValidationErrors';

import { editTask } from '../../../store/TaskList/TaskList.actions';

import Input from '../../Input';
import { Container } from '../styles';

const EditTaskModal = ({ isOpen, onRequestClose, actionForm }) => {  
    const session = useSelector(state => state.session);
    const dispatch = useDispatch();

    const tasks = useSelector(state => state.tasks);

    const myTask = tasks.find((task) => task.id === actionForm);

    const formRef = useRef(null);

    const [handleTitle, setHandleTitle] = useState(myTask?.title);
    const [handleDelivery, setHandleDelivery] = useState(myTask?.delivery);
    const [handleConclusion, setHandleConclusion] = useState(myTask?.conclusion);

    useEffect(() => {
        if(myTask){
            setHandleTitle(myTask.title);
            setHandleDelivery(myTask.delivery);
            setHandleConclusion(myTask.conclusion);
        }
    }, [actionForm]);

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

            data.id = actionForm;

            dispatch(editTask({...data, idUser: session[0].email}));

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
                <h2>Edit Task</h2>

                <label>Title *</label>
                <Input 
                    value={handleTitle}
                    onChange={(e) => setHandleTitle(e.target.value)}
                    name="title" 
                    placeholder="Title" 
                />

                <label>Delivery date *</label>
                <Input 
                    value={handleDelivery}
                    onChange={(e) => setHandleDelivery(e.target.value)}
                    type="date" 
                    name="delivery" 
                    placeholder="Delivery date" 
                />

                <label>Date of the conclusion</label>
                <Input 
                    value={handleConclusion}
                    onChange={(e) => setHandleConclusion(e.target.value)}
                    type="date" 
                    name="conclusion" 
                    placeholder="Conclusion date"  
                />

                <button type="submit">Edit Task</button>
            </Container>
        </Modal>
    )
}

export default EditTaskModal;