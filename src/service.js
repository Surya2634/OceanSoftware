import axios from "axios";

export const getStudentDetails = () => {
  return axios
    .get(`https://61ef7787732d93001778e3c3.mockapi.io/student`)
    .then((result) => {
      console.log({ result });
      if (result.status) return result.data;
    })
    .catch((err) => {
      console.log(err);
      return undefined;
    });
};

export const getCourseDetails = () => {
  return axios
    .get(`https://61ef7787732d93001778e3c3.mockapi.io/course`)
    .then((result) => {
      console.log({ result });
      if (result.status) return result.data;
    })
    .catch((err) => {
      console.log(err);
      return undefined;
    });
};

export const getStaffDetails = () => {
  return axios
    .get(`https://61ef7787732d93001778e3c3.mockapi.io/Staff`)
    .then((result) => {
      console.log({ result });
      if (result.status) return result.data;
    })
    .catch((err) => {
      console.log(err);
      return undefined;
    });
};

export const getRegisterDetails = () => {
  return axios
    .get(`https://61ef7787732d93001778e3c3.mockapi.io/register`)
    .then((result) => {
      console.log({ result });
      if (result.status) return result.data;
    })
    .catch((err) => {
      console.log(err);
      return undefined;
    });
};
