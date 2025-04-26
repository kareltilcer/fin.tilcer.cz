export const getSessionStorage = (key: string, fallBackValue: string) => {
    return sessionStorage.getItem(key) ?? fallBackValue;
}

export const setSessionStorage = (key: string, value: string) => {
    sessionStorage.setItem(key, value);
}

export const removeSessionStorage = (key: string) => {
    sessionStorage.removeItem(key);
}