const fetchBreedDescription = function(breedName, callback) {
  const request = require('request');
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!error) {
      callback(error, body);
    }
  });
};
module.exports = { fetchBreedDescription };