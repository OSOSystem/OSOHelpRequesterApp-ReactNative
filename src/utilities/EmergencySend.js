export default async function sendSignal(url, latitude, longitude) {
  console.log('url: ', url);
  console.log('latitude: ', latitude);
  console.log('longitude: ', longitude);

  const data = {
    helpRequesterId: 1,
    coordinates: {
      latitude,
      longitude,
    },
    formattedAddress: 'HelpRequester',
  };

  const params = {
    method: 'GET',
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'application/json'
    }// ,
    // body: data
  };
  console.log('Start emergency request');

  return new Promise((resolve, reject) => {
    fetch(url, params)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}
