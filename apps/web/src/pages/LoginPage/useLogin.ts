import * as yup from 'yup';
import { useForm } from 'vee-validate';
import { axios } from '@/utils/axios';
import { useMutation } from '@tanstack/vue-query';
import router from '@/router';

const schema = yup.object({
    login: yup.string().required(),
    password: yup.string().required(),
});

type LoginPayload = yup.InferType<typeof schema>;

const mutationFn = async (payload: LoginPayload) => {
    await axios.post('/auth/login', payload);
};

export const useLogin = () => {
    const { defineComponentBinds, handleSubmit } = useForm<LoginPayload>({
        validationSchema: schema,
    });

    const { mutate, isError, isSuccess, isPending, error } = useMutation({
        mutationFn,
        onSuccess: async () => {
            await router.push({ name: 'home' });
        },
    });

    const login = defineComponentBinds('login');
    const password = defineComponentBinds('password');

    const submit = handleSubmit((values) => mutate(values));

    return {
        login,
        password,
        submit,
        isError,
        isSuccess,
        isPending,
        error,
    };
};
