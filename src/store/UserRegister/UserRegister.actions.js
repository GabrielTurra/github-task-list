export const registerUser = (data) => {
    return {
        type: 'registerUser',
        payload: data,
    }
}