import axios from "axios";

const url = process.env.REACT_APP_LOCAL_URL_API;

const getProducts = async () => {
  try {
    const resp = await axios.get(url);
    if (resp.data) {
      return resp.data;
    }
  } catch (error) {
    // throw new Error("Something went wrong!");
    console.log(error);
  }
};

const getProduct = async (filter, pageLimit = 8) => {
  try {
    const resp = await axios.get(url);
    if (resp.data) {
      return resp.data;
    }
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

export { getProducts, getProduct };
