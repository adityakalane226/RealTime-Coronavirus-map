function updateMap() {
    //using fetch API to take the data from file
    //use of fetch API to take data from file
    fetch("/data.json")
    .then(response =>response.json())
    .then(rsp =>{
        console.log(rsp.records)
        //making here forEach loop to get elements from data.json files like latitudes and longitudes
        rsp.records.forEach(element => {
            cases = element.cases; //here harry takes latitudes
            deaths = element.deaths; //here harry takes longitude
            if(cases<1){
                color="rgb(255,0,0)"
            }
            else{
                color=`rgb${cases},0,0`
            }

//Marking the longitude and latitude on the map
 new mapboxgl.Marker({
    draggable: false,
    color:color
    })
            .setLngLat([cases,deaths])
    .addTo(map);
        });
    });
}
updateMap();