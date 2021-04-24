export default function (state = [], action){
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