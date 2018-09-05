export async function sendEmergency(latitude, longitude) {
    var data = {
        helpRequesterId: 1,
        coordinates: {
            latitude: latitude,
            longitude: longitude,
        },
        formattedAddress: "HelpRequester",
    };
    try {
     let response = await fetch(
      "http://51.38.113.244:8080/emergency/emit",
      {
        method: "POST",
        headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
        },
       body: JSON.stringify(data)
     }
    );
     if (response.status >= 200 && response.status < 300) {
        alert("emergency accepted!!!");
     }
   } catch (errors) {

     alert(errors);
    } 
}