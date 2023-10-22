import * as yup from 'yup';
import { useForm } from 'vee-validate';
import { axios } from '@/utils/axios';

const validationSchema = yup.object({
    login: yup.string().required(),
    password: yup.string().required(),
});

export const useLogin = () => {
    const { defineComponentBinds, handleSubmit } = useForm({
        validationSchema,
    });

    const login = defineComponentBinds('login');
    const password = defineComponentBinds('password');

    const submit = handleSubmit(async (values) => {
        await axios.post('/auth/login', {
            login: values.login,
            password: values.password,
        });
    });

    return {
        login,
        password,
        submit,
    };
};
