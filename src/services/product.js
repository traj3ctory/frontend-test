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

// const getProductByTag = async (filter, pageLimit = 5) => {
const getProductByTag = async (filter) => {
  try {
    // const resp = await axios.get(`${url}?tag=${filter}`);
    const tagArray = [];
    const resp = await axios.get(url);
    if (resp.data) {
      resp.data.forEach((el) => {
        el.tags.forEach((element) => {
          if (element.toUpperCase() === filter.toUpperCase()) {
            tagArray.push(el);
          }
        });
      });
      return tagArray;
    }
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

// const getProductByPrice = async (filter, pageLimit = 1) => {
const getProductByPrice = async (filter) => {
  try {
    const resp = await axios.get(`${url}?price=${filter}`);
    if (resp.data) {
      return resp.data;
    }
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

// const getProductBySub = async (filter, pageLimit = 4) => {
const getProductBySub = async (filter) => {
  try {
    const resp = await axios.get(`${url}?subscription=${filter}`);
    if (resp.data) {
      return resp.data;
    }
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};

export { getProducts, getProductByTag, getProductByPrice, getProductBySub };
