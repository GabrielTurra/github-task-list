export default function getValidationErrors(err){
    const validationErrors = {};

    if(err.value.personalError){
        err.path.forEach(path =>{
            validationErrors[path] = err.message;
        });
    }

    else{
        err.inner.forEach(error => {
            if(error.path) {
                validationErrors[error.path] = error.message;
            }
        });
    }
    
    return validationErrors;
}
