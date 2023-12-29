import * as yup from 'yup';
import { useForm } from 'vee-validate';

const schema = yup.object({
    login: yup.string().required('Login jest wymagany'),
    password: yup.string().required('Hasło jest wymagane'),
});

type LoginFormValues = yup.InferType<typeof schema>;
type LoginFunction = (payload: LoginFormValues) => void;

export const useLoginForm = () => {
    const { defineComponentBinds, handleSubmit, errors } = useForm<LoginFormValues>({
        validationSchema: schema,
    });

    const login = defineComponentBinds('login');
    const password = defineComponentBinds('password');

    const submit = (callback: LoginFunction) => handleSubmit(callback);

    return {
        login,
        password,
        errors,
        submit,
    };
};
