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

  console.log('Start emergency request');
  fetch(url,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => () => {
      console.log('Response: ', response);
    })
    .catch(e => console.log('Request-Error: ', e));
}
