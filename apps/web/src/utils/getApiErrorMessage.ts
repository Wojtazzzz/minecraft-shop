import * as Yup from 'yup';

const apiErrorSchema = Yup.object({
    response: Yup.object({
        data: Yup.object({
            error: Yup.string().required(),
        }),
    }),
});

export const getApiErrorMessage = (apiError: unknown) => {
    const hasErrorMessage = apiErrorSchema.isValidSync(apiError);

    if (hasErrorMessage) {
        return apiError.response.data.error;
    }

    return 'Coś poszło nie tak, proszę spróbować ponownie później.';
};
