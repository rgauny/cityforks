Places = new Meteor.Collection("places");

Meteor.methods({
   "fetchNearbyLocations": function(location){
       console.log("location");
       console.log(location);
       if(Meteor.isServer){
           results = HTTP.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + location.latitude + "," +location.longitude + "&radius=5000&types=food&key=AIzaSyAsy66OzWlSnq-FQiIfuoddJxSha3WC8aU");
           console.log(results);
           _(results.data.results).each(function(loc){
               _.extend(loc, {loc: {type: "Point", coordinates: [loc.geometry.location.lng, loc.geometry.location.lat]}});
               Places.upsert({id: loc.id},{$set: loc});
           });
       }
   }
});