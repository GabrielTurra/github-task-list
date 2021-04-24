import { useRef } from 'react';

import Input from '../../components/Input';
import { GoMarkGithub } from 'react-icons/go';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createSession } from '../../store/Session/Session.actions';

import getValidationErrors from '../../utils/getValidationErrors';

import * as Yup from 'yup';

import { Container, Content, Form, NewUSerContent } from './styles';

const SignIn = () => {
    const formRef = useRef(null);
    const dispatch = useDispatch();

    const users = useSelector(state => state.users);

    const handleSubmit = async (data) => {
        try{
            formRef.current.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail required') .email('Invalid e-mail!'),
                password: Yup.string().required('Password required!'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            const myUser = users.find((user) => user.email === data.email && user.password === data.password);

            if(!myUser){
                throw new Yup.ValidationError.inner({
                    email: 'Check your credentials',
                });
            }

            console.log(myUser)

            dispatch(createSession(myUser));

        }catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                console.log(errors)
                formRef.current.setErrors(errors);
                console.log(errors)

                return;
            }
        }
    }

    return (
        <Container>
            <Content>
                <Link to="/">
                    <GoMarkGithub size={48} />
                </Link>
                <p>Sign in to GitHub</p>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <label>Email address</label>
                    <Input name="email" type="email" theme="dark" />

                    <label>Password</label>
                    <Input name="password" type="password" theme="dark" />

                    <button type="submit">Sign in</button>
                </Form>
                <NewUSerContent>
                    <p>New to GitHub? <Link to="/">Create an account.</Link></p>
                </NewUSerContent>
            </Content>
        </Container>
    );
}

export default SignIn;