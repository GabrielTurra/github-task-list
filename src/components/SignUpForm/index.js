import { useEffect, useState, useRef } from 'react';

import { parse, isValid, differenceInYears } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import * as Yup from 'yup';

import Input from '../../components/Input';

import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/UserRegister/UserRegister.actions';
import { createSession } from '../../store/Session/Session.actions';

import { Form } from './styles';

import JMask from '../../utils/jqueryMask';
import GetAddress from '../../utils/getAddress';
import getValidationErrors from '../../utils/getValidationErrors';
import getValidationCPF from '../../utils/getValidationCPF';

const SignUpForm = () => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.users);

    useEffect(() => {
        JMask();
    }, []);

    const formRef = useRef(null);

    const [address, setAddress] = useState({ 
        state: "",
        city: "",
        street: "", 
        district: "",
    });

    const handleChangeZipCode = async (zipValue) => {
        const myAddress = await GetAddress(zipValue);
        myAddress && setAddress(myAddress);
    }

    const handleSubmit = async (data) => {
        try {
            formRef.current.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Name required'),
                email: Yup.string()
                    .required('E-mail required')
                    .email('Invalid e-mail!')
                    .test(
                        'EmailDuplicateValidation',
                        'Email Already Exists',
                        function(email) {  
                            const emailExists = users.find(user => user.email === email)
                            if (emailExists) {
                                return false;
                            }
                            return true;
                        }
                    ),
                password: Yup.string().required('Password required!'),
                birthday: Yup.string().test(
                    'AgeValidation',
                    'You must be over 12 years old',
                    function(birthday) {
                        const parsedDate = parse(birthday, 'P', new Date(), { locale: ptBR });
                        const isValidDate = isValid(parsedDate);
                        const myAge = differenceInYears(Date.now(), parsedDate);

                        if (!isValidDate || myAge < 12) {
                            return false;
                        }
                        return true;
                    }
                ).required('Birth date required'),
            });
            
            await schema.validate(data, {
                abortEarly: false,
            });    
            
            if(data.cpf !== ""){
                const regexCPF = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;

                const schemaCPF = Yup.object().shape({
                    cpf: Yup.string().matches(regexCPF, 'CPF is invalid').test(
                        'CPFValidation',
                        'CPF is invalid',
                        function(cpf) {
                            const response = getValidationCPF(cpf);
                            return response;
                        }
                    ),
                });

                await schemaCPF.validate(data, {
                    abortEarly: false,
                }); 
            }

            if(data.zipCode !== ""){
                const regexZip = /^\d{5}(?:[-\s]\d{3})?$/;

                const schemaZip = Yup.object().shape({
                    zipCode: Yup.string().matches(regexZip, 'Zip code is invalid'),
                    street: Yup.string().required('Zip code is invalid'),
                    district: Yup.string().required('Zip code is invalid'),
                    city: Yup.string().required('Zip code is invalid'),
                    state: Yup.string().required('Zip code is invalid'),
                    number: Yup.number('Number is required').required().positive('Number is required').integer('Number is required'),
                });

                await schemaZip.validate(data, {
                    abortEarly: false,
                });         
            }

            if(data.phone !== ""){                  
                const schemaPhone = Yup.object().shape({
                    phone: Yup.string().min(12, 'Phone number is not valid'),
                });

                await schemaPhone.validate(data, {
                    abortEarly: false,
                });
            }

            dispatch(registerUser(data));
            dispatch(createSession(data));

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current.setErrors(errors);

                return;
            }
        }
    };

    return (
        <Form ref={formRef} className="col-12 col-lg-6 order-1" onSubmit={handleSubmit}>
            <div>
                <p>Where the world builds software</p>
            </div>
            <div className="row mx-0">
                <Input name="name" type="text" placeholder="Name" />
                <Input name="email" type="email" placeholder="E-mail" />
            </div>
            <div className="row mx-0">
                <Input 
                    name="birthday" 
                    type="text" 
                    placeholder="Birth Date" 
                    className="date-mask" 
                />
                <Input 
                    name="cpf" 
                    type="text" 
                    placeholder="CPF" 
                    className="cpf-mask" 
                />
            </div>
            <div className="row mx-0">
                <Input 
                    onChange={(event) => handleChangeZipCode(event.target.value)} 
                    name="zipCode" 
                    type="text" 
                    placeholder="Zip Code" 
                    className="zip-code-mask" 
                />
                <Input 
                    name="phone" 
                    type="text" 
                    placeholder="Phone" 
                    className="phone-mask" 
                />
            </div>
            <div className="row mx-0">
                <Input 
                    value={address.street} 
                    name="street" 
                    type="text" 
                    placeholder="Street" 
                    disabled 
                />
            </div>
            <div className="row mx-0">
                <Input name="number" type="number" placeholder="Number"  />
                <Input 
                    value={address.district} 
                    name="district" 
                    type="text" 
                    placeholder="District" 
                    disabled 
                />
                <Input 
                    value={address.city} 
                    name="city" 
                    type="text" 
                    placeholder="City" 
                    disabled 
                />
                <Input 
                    value={address.state} 
                    name="state" 
                    type="text" 
                    placeholder="State" 
                    disabled 
                />
            </div>
            <div className="row mx-0">
                <Input name="password" type="password" placeholder="Password" />
                <button type="submit">Sign up for GitHub</button>
            </div>
        </Form>
    );
}

export default SignUpForm;
