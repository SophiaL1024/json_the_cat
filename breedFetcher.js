const request = require('request');
const args = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    return console.log('error:',error);    
  }
   if(body==='[]'){
    return console.log('breeds not found');
  }
  console.log(JSON.parse(body)[0].description);
})