import axios from 'axios';

/* 
params example
params = {foo: 'bar'}
*/

export const getData = () => {
    axios.get('https://localgost:3000/test/user');
}

/*
api 호출
const getTEST = async () => {
  try {
    return await getData;
  } catch (error) {
    console.error(error);
  }
};
*/

export const postData = (params) => {
    axios.post('https://localgost:3000/test/user', {params: params});
}

export const deleteData = () => {
    axios.delete('https://localgost:3000/test/user');
}


export const putData = (params) => {
    axios.put('https://localgost:3000/test/user', {params: params});
}