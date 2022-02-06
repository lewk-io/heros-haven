import get from 'lodash/get';

export const CFTOOLS_SERVER = 'https://data.cftools.cloud/v1/gameserver/';
const DOMAIN = `${typeof window !== 'undefined' && get(window, 'location.origin')}/`;
export const LOCAL_API_SERVER = `${DOMAIN}api/server/`;

export const STEAM_WORKSHOP_URL = '//steamcommunity.com/sharedfiles/filedetails/?id=';