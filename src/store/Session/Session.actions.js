export const createSession = (data) => {
    return {
        type: 'createSession',
        payload: data,
    }
}

export const destroySession = (data) => {
    return {
        type: 'destroySession',
        payload: {},
    }
}