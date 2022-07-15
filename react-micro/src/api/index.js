import axios from "axios";

/* 
params example
params = {foo: 'bar'}
process.env.dev
*/

export const getData = async () => {
  try {
    const result = await axios.get(
      "http://192.168.8.20:8080/sampleproject/api/v1/account"
    );
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

export const postData = async (params) => {
  try {
    const result = await axios.post("https://localgost:3000/test/user", {
      params: params,
    });
    return result.data;
  } catch (err) {
    return err;
  }
};

export const deleteData = () => {
  axios.delete("https://localgost:3000/test/user");
};

export const putData = (params) => {
  axios.put("https://localgost:3000/test/user", { params: params });
};
