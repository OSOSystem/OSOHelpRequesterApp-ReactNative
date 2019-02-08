export default async function sendSignal(url, latitude, longitude) {
  console.log('url: ', url);
  console.log('latitude: ', latitude);
  console.log('longitude: ', longitude);


  const data = {
    helprequester: '1',
    emergencyType: 'HIGH',
    coordinates: {
      latitude,
      longitude,
    }
  };

  console.log('Start emergency request');
  fetch(url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => () => {
      console.log('Response: ', response);
    })
    .catch(e => console.log('Request-Error: ', e));
}
