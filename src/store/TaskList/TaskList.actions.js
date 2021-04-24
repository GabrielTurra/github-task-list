export const addTask = (data) => {
    return {
        type: 'addTask',
        payload: data,
    }
}

export const editTask = (data) => {
    return {
        type: 'editTask',
        payload: data,
    }
}

export const finishTask = (id) => {
    return {
        type: 'finishTask',
        payload: id,
    }
}

export const deleteTask = (id) => {
    return {
        type: 'deleteTask',
        payload: id,
    }
}