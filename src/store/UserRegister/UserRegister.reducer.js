import { uuid } from 'uuidv4';

export default function (state = [], action){
    switch(action.type){
        case 'registerUser': 
            return [
                {   
                    id: uuid(),
                    ...action.payload
                },
                ...state,
            ];

        default:
            return state
    }
}