// import axios from "axios";
// const BASE_URL = "https://airbnb-search.p.rapidapi.com";
// const AIRBNB_TOKEN = import.meta.env.VITE_APP_AIRBNB_TOKEN;

// const options = {
//   method: 'GET',
//   url: 'https://airbnb-search.p.rapidapi.com/property/detail',
//   params: {
//     id: '792450878965585726',
//     locale: 'en-US',
//     currency: 'USD'
//   },
//   const headers: {
//     // Authoraization: "bearer " + AIRBNB_TOKEN,
//     "X-RapidAPI-Key": "5c9619eb4amsh80a56b19256e104p1a89b4jsn4b8323597a94",
//     "X-RapidAPI-Host": "airbnb-search.p.rapidapi.com",
//   }
// };

// const options = {
//   method: "GET",
//   url: "https://airbnb-search.p.rapidapi.com/property/detail",
//   params: {
//     id: "792450878965585726",
//     locale: "en-US",
//     currency: "USD",
//   },
//   headers: {
//     "X-RapidAPI-Key": "5c9619eb4amsh80a56b19256e104p1a89b4jsn4b8323597a94",
//     "X-RapidAPI-Host": "airbnb-search.p.rapidapi.com",
//   },
// };

// const options = {
//   method: "GET",
//   url: "https://airbnb-listings-data.p.rapidapi.com/getListingsData",
//   params: {
//     nwLat: "29.792697441798765",
//     nwLng: "-98.73911255534364",
//     seLat: "29.360943802211537",
//     seLng: "-98.20696228678895",
//   },
//   headers: {
//     "X-RapidAPI-Key": "5c9619eb4amsh80a56b19256e104p1a89b4jsn4b8323597a94",
//     "X-RapidAPI-Host": "airbnb-listings-data.p.rapidapi.com",
//   },
// };
// const options = {
//   method: "GET",
//   url: "https://hotels4.p.rapidapi.com/properties/get-hotel-photos",
//   params: { id: "1178275040" },
//   headers: {
//     "X-RapidAPI-Key": "5c9619eb4amsh80a56b19256e104p1a89b4jsn4b8323597a94",
//     "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
//   },
// };

// const options = {
//   method: "POST",
//   url: "https://hotels4.p.rapidapi.com/properties/v2/list",
//   headers: {
//     "content-type": "application/json",
//     "X-RapidAPI-Key": "5c9619eb4amsh80a56b19256e104p1a89b4jsn4b8323597a94",
//     "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
//   },
//   data: {
//     currency: "USD",
//     eapid: 1,
//     locale: "en_US",
//     siteId: 300000001,
//     destination: {
//       regionId: "6054439",
//     },
//     checkInDate: {
//       day: 10,
//       month: 10,
//       year: 2022,
//     },
//     checkOutDate: {
//       day: 15,
//       month: 10,
//       year: 2022,
//     },
//     rooms: [
//       {
//         adults: 2,
//         children: [{ age: 5 }, { age: 7 }],
//       },
//     ],
//     resultsStartingIndex: 0,
//     resultsSize: 200,
//     sort: "PRICE_LOW_TO_HIGH",
//     filters: {
//       price: { max: 150, min: 100 },
//     },
//   },
// };
// const options = {
//   method: "GET",
//   url: `https://royalapi.lancemeup.com/${url}`,
//   params: {},
//   headers: {},
// };

// export const fetchListingDataFromApi = async (url, params) => {
//   try {
//     // const { data } = await axios.get(BASE_URL + url, {
//     //   headers,
//     //   params,
//     // });
//     const { data } = await axios.request(options);
//     return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
import axios from "axios";
const BASE_URL = "https://royalapi.lancemeup.com/";

const headers = {};
const params = {};
export const fetchListingDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
