import * as Yup from 'yup';

export const meResponseSchema = Yup.object({
    login: Yup.string().required(),
    email: Yup.string().required(),
}).required();
