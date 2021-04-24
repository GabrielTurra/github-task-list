import React, {
    useEffect,
    useRef,
} from 'react';
import { useField } from '@unform/core';

import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

const Input = ({ name, theme, onChange, disabled, icon: Icon, ...rest }) => {
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const inputRef = useRef(null);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container theme={theme} disabled={disabled} error={error}>  
            {Icon && <Icon size={20} />}
            <input
                onChange={onChange}
                autoComplete="off"
                defaultValue={defaultValue}
                ref={inputRef}
                disabled={disabled}
                {...rest}
            />
            {error && (
                <Error title={error}>
                    <FiAlertCircle color="#c53030" size={20} />
                </Error>
            )}
        </Container>
    );
}

export default Input;