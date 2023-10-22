import * as Yup from 'yup';

export const apiErrorSchema = Yup.object({
    response: Yup.object({
        data: Yup.object({
            error: Yup.string().required(),
        }),
    }),
});
