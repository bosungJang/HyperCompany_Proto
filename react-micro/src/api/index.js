import axios from "axios";

/* 
params example
params = {foo: 'bar'}
process.env.dev
*/

export const getData = async () => {
  try {
    const result = await axios.get("https://reqres.in/api/unknown/2");
    return result.data;
  } catch (err) {
    return err;
  }
};

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
  axios
    .post("https://localgost:3000/test/user", { params: params })
    .then((Response) => {
      return Response;
    })
    .catch((Error) => {
      return Error;
    });
};

export const deleteData = () => {
  axios.delete("https://localgost:3000/test/user");
};

export const putData = (params) => {
  axios.put("https://localgost:3000/test/user", { params: params });
};
