// initialize unsplash API client

import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

const getUrlForCoffeeStore = (latLong, limit, query) =>
  `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;

const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: "coffee",
    perPage: 40,
  });
  const unsplashResults = photos.response.results;
  return unsplashResults.map((result) => result.urls["small"]);
};

export const fetchCoffeeStores = async (
  latlong = "43.652627326999575%2C-79.39545615725015",
  limit = 6
) => {
  const photos = await getListOfCoffeeStorePhotos();

  const url = getUrlForCoffeeStore(latlong, limit, "coffee");
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
    },
  };
  return await fetch(url, options)
    .then((res) => res.json())
    .then((json) => json.results)
    .then((results) =>
      results.map((result, idx) => ({
        id: result.fsq_id,
        address: result.location.address || "",
        name: result.name,
        neighbourhood:
          result.location.neighborhood?.join(" ") ||
          result.location.crossStreet ||
          "",
        imgUrl: photos[idx],
      }))
    )
    .catch((err) => console.error("error:" + err));
};
