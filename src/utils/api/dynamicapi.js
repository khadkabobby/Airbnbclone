import axios from "axios";
const BASE_URL2 = "https://booking-com.p.rapidapi.com/v1/hotels";
const headers = {
  "X-RapidAPI-Key": "7573b35c43msheea50636ac01d80p17ff2ajsn58afb6696ed9",
  "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
};

export const fetchDataFromDynamicApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL2 + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
