import { uuid } from 'uuidv4';

function userRegisterReducer (state = [], action){
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

export default userRegisterReducer;