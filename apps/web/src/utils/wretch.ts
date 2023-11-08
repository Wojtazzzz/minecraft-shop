import { API_URL } from '@/utils/env';
import Wretch from 'wretch';

export const wretch = Wretch(API_URL, {
    credentials: 'include',
    mode: 'cors',
}).headers({
    'X-Requested-With': 'XMLHttpRequest',
});
