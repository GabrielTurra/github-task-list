function sessionReducer  (state = [], action){
    switch(action.type){
        case 'createSession': 
            return [
                {   
                    ...action.payload
                },
            ];

        case 'destroySession': 
            return [];

        default:
            return state
    }
}

export default sessionReducer