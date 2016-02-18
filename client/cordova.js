Meteor.startup(function(){
   navigator.geolocation.getCurrentPosition(function(position){
            var pos = {latitude:position.coords.latitude,longitude: position.coords.longitude};
            Session.set('location',pos);
            Meteor.call("fetchNearbyLocations", pos);
        });
});

