import { useState, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header';
import AddTaskModal from '../../components/Modal/AddTaskModal';
import EditTaskModal from '../../components/Modal/EditTaskModal';
import ViewTaskModal from '../../components/Modal/ViewTaskModal';

import { FiPlus, FiEdit3, FiCheckSquare, FiTrash2, FiEye } from 'react-icons/fi';
import { Container, Content, ListContent } from './styles';

import { finishTask } from '../../store/TaskList/TaskList.actions';
import { deleteTask } from '../../store/TaskList/TaskList.actions';

const TaskList = () => {
    const session = useSelector(state => state.session);
    const tasks = useSelector(state => state.tasks);
    const userTasks = tasks.filter((task) => task.idUser === session[0].email);

    const dispatch = useDispatch();

    // Add Task Modal
    const [ isModalAddOpen, setIsModalAddOpen] = useState(false);
    
    function handleOpenAddModal(){
        setIsModalAddOpen(true);
    }

    function handleCloseAddModal(){
        setIsModalAddOpen(false);
    }

    // Edit Task Modal
    const [ isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [ actionEditForm, setActionEditForm] = useState('');

    function handleOpenEditModal(action){
        setActionEditForm(action);

        setIsModalEditOpen(true);
    }

    function handleCloseEditModal(){
        setIsModalEditOpen(false);
    }

    // View Task Modal
    const [ isModalViewOpen, setIsModalViewOpen] = useState(false);
    const [ actionViewForm, setActionViewForm] = useState('');


    function handleOpenViewModal(action){
        setActionViewForm(action);

        setIsModalViewOpen(true);
    }

    function handleCloseViewModal(){
        setIsModalViewOpen(false);
    }

    const handleFinishTask = useCallback((id) => {
        const confirm = window.confirm('You want to complete this task?');
        if(!confirm) return;
    
        return dispatch(finishTask(id));
    }, []);

    const handleDeleteTask = useCallback((id) => {
        const confirm = window.confirm('You want to delete this task?');
        if(!confirm) return;
    
        return dispatch(deleteTask(id));
    }, []);
    return (
        <>
            <AddTaskModal 
                isOpen={isModalAddOpen} 
                onRequestClose={handleCloseAddModal} 
            />
            <EditTaskModal 
                isOpen={isModalEditOpen} 
                onRequestClose={handleCloseEditModal} 
                actionForm={actionEditForm}
            />
            <ViewTaskModal 
                isOpen={isModalViewOpen} 
                onRequestClose={handleCloseViewModal} 
                actionForm={actionViewForm}
            />
            <Header />
            <Container className="justify-content-center align-items-end row">
                <Content className="col-12">
                    <p className="col-6">Task list</p>
                    <button onClick={() => handleOpenAddModal()}>
                        Create new 
                        <FiPlus />
                    </button>
                    <ListContent>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Delivery date</th>
                                    <th>Date of conclusion</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userTasks.map((task) => (
                                    <tr key={task.id} className={task.checked && 'checked'}>
                                        <td>{task.title}</td>
                                        <td>{task.delivery}</td>
                                        <td>{task.conclusion ||  '--/--/--'}</td>
                                        <td>
                                            <FiEye onClick={() => handleOpenViewModal(task.id)} color={task.checked ? "black" : "purple"} />
                                            {!task.checked && <FiEdit3 onClick={() => handleOpenEditModal(task.id)} color="orange" />}
                                            {!task.checked && <FiCheckSquare color="green" onClick={() => handleFinishTask(task.id)} />}
                                            <FiTrash2 onClick={() => handleDeleteTask(task.id)} color={task.checked ? "black" : "red"} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </ListContent>
                </Content>
            </Container>
        </>
    )
}

export default TaskList;