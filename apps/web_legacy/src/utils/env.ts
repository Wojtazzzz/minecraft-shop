export const API_URL = checkEnvVariable('VITE_API_URL', import.meta.env.VITE_API_URL);
export const APP_NAME = checkEnvVariable('VITE_APP_NAME', import.meta.env.VITE_APP_NAME);

function checkEnvVariable(name: string, variable: unknown) {
    if (!variable) {
        throw new Error(`Env variable ${name} is not set`);
    }

    return String(variable);
}
