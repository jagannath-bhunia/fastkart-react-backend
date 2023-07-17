export const URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_DEV_URL : process.env.REACT_APP_DEV_URL
export const HOMEURL = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : process.env.PUBLIC_URL

export const STATUSES = Object.freeze({
    IDEL:'idel',
    ERROR:'error',
    LOADING:'loading'
});
