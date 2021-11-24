import { Cookies } from "react-cookie";

const cookies = new Cookies();

/*Cookie Start*/
export const setCookie = (name: string, value: string, option?: any) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};
/*Cookie End*/

/*LocalStorage Start*/
export const setLocalStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocalStorage = (key: string) => {
  return localStorage.removeItem(key);
};

export const emptyLocalStorage = () => {
  return localStorage.clear();
};
/*LocalStorage End*/

/*SessionStorage Start*/
export const setSessionStorage = (key: string, value: string) => {
  return sessionStorage.setItem(key, value);
};

export const getSessionStorage = (key: string) => {
  return sessionStorage.getItem(key);
};

export const removeSessionStorage = (key: string) => {
  return sessionStorage.removeItem(key);
};

export const emptySessionStorage = () => {
  return sessionStorage.clear();
};
/*SessionStorage End*/
