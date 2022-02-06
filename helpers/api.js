import { returnServerHash } from './hash';
import useSWR from 'swr';

export const fetchApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const fetcher = url => fetch(url).then((res) => res.json());

export const swrFetch = url => useSWR(url, fetcher);

export const ipToHash = ip => returnServerHash(ip);

export const isIpAddress = str => {
    if (/^([a-z0-9\-]+\.)+[a-z0-9]+\:[1-9][0-9]+$/.test(str)) {  
        return true;
    }  
    return false;
}