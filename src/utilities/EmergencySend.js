export default async function sendSignal(url, latitude, longitude) {
  console.log('url: ', url);
  console.log('latitude: ', latitude);
  console.log('longitude: ', longitude);

  return new Promise((resolve, reject) => {
    const data = {
      helpRequesterId: 1,
      coordinates: {
        latitude,
        longitude,
      },
      formattedAddress: 'HelpRequester',
    };

    console.log('Start emergency request');
    const response = fetch(url,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    ).then(response => response.json())
      .then(response => resolve(response))
      .catch(e => reject(e));
  });
}
