export default class GeolocationOSO {
    static geodata = {
      latitude: 1,
      longitude: 2,
      error: null
    };

    static refreshGeolocation() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.geodata = ({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {},
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      ).catch(e => console.log('RefreshGeodata-Error: ', e));
    }

    static getGeodata(geodata) {
      console.log(`latitude: ${this.geodata.latitude}`);
      console.log(`longitude: ${this.geodata.longitude}`);
      console.log(`error: ${this.geodata.error}`);
      return this.geodata;
    }
}
