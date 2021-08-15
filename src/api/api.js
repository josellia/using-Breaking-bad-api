export const getBreaking = () => {
  return fetch("https://www.breakingbadapi.com/api/quote/random", {
    method: "GET",
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => console.log(err));
};
