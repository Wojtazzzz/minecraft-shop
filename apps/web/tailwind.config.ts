import { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                accent: '#37D993',
            },
        },
    },
    plugins: [],
} satisfies Config;
