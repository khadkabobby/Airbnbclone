import axios from "axios";
const BASE_URL2 = "https://booking-com.p.rapidapi.com/v1/hotels";
const headers = {
  'X-RapidAPI-Key': 'b19db24c7amsh0837e9ef521501dp1c4ebfjsn488fca8b3478',
  'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
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
