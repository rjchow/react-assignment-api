const movieResponse = require("./movies.json")
const middy = require('middy')
const { cors } = require('middy/middlewares')



const handler = async (event) => {
  const random = Math.random();
  if (random < 0.15) {
    // error
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error :)"
      })
    };
  } else if (random < 0.4) {
    // delay 2s
    await new Promise(r => setTimeout(r, 2000));
  }
  return {
    statusCode: 200,
    body: JSON.stringify(movieResponse,
      null,
      2
      )
    };
  };
  
  module.exports.hello = middy(handler).use(cors())