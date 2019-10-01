const Frisbee = require('frisbee');

// create a new instance of Frisbee
const api = new Frisbee({
  baseURI: 'https://api.startup.com', // optional
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// this is a simple example using `.then` and `.catch`
api.get('/hello-world').then(console.log).catch(console.error);

export default Frisbee;