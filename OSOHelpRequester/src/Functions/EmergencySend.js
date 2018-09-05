export async function sendEmergency(latitude, longitude) {
    var data = {
        latitude: latitude,
        longitude: longitude,
    };
    try {
     let response = await fetch(
      "51.38.113.244",
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