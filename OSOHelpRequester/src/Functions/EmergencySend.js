export async function sendSignal(url, latitude, longitude, error = null) {
    console.log("url: ",url);
    console.log("latitude: ",latitude);
    console.log("longitude: ",longitude);
    
    var data = {
        helpRequesterId: 1,
        coordinates: {
            latitude: latitude,
            longitude: longitude,
        },
        formattedAddress: "HelpRequester",
    };
    try {
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
    );
     console.log("Response-Status: "+response.status);
     if (response.status >= 200 && response.status < 300) {
        alert("emergency accepted!!!");
     }
   } catch (errors) {
     console.log("Request Error")
     return errors;
    } 
}