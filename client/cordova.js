Meteor.startup(function(){
   navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
            Session.set('location', position);
            var test = Session.get('location');
            console.log(test);
        });
});

