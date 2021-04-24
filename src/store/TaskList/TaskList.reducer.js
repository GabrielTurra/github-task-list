import { uuid } from 'uuidv4';
import { format } from 'date-fns';

export default function (state = [], action){
    switch(action.type){
        case 'addTask': 
            return [
                {   
                    id: uuid(),
                    ...action.payload,
                    checked: false
                },
                ...state,
            ];

        case 'finishTask':
            const myTask = state.find((task) => task.id === action.payload)
            if(!myTask){
                return;
            }

            myTask.checked = true;
            myTask.conclusion = format(
                new Date(),
                "yyyy'-'MM'-'dd"
            );

            const newTasksFinished = state.map((task) => {
                if(task.id === action.payload) {
                    return myTask
                }
                else{
                    return task
                }
            });

            return newTasksFinished;

        case 'editTask':
                const newTasks = state.map((task) => {
                    if(task.id === action.payload.id) {
                        return { ...action.payload }
                    }
                    else{
                        return task
                    }
                });

                return newTasks;

        case 'deleteTask':
            return [
                ...state.filter((task) => task.id !== action.payload)
            ];

        default:
            return state;
    }
}