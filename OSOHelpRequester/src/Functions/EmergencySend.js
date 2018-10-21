export async function sendSignal(url, latitude, longitude, error = null) {
    console.log("url: ",url);
    console.log("latitude: ",latitude);
    console.log("longitude: ",longitude);
    
    return new Promise((resolve, reject) => {
        var data = {
            helpRequesterId: 1,
            coordinates: {
                latitude: latitude,
                longitude: longitude,
            },
            formattedAddress: "HelpRequester",
        };

        console.log("Start emergency request");
        let response = await fetch(url,
        {
            method: "POST",
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
        body: JSON.stringify(data)
        }
        ).then((response) => response.json())
        .then(response => resolve(response))
        .catch(e => reject(e))
    });


}