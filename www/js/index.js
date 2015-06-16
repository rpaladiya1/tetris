//var app = {
//    // Application Constructor
//    initialize: function () {
//        console.log('initialize calll');
//        this.bindEvents();
//    },
//    // Bind Event Listeners
//    //
//    // Bind any events that are required on startup. Common events are:
//    // 'load', 'deviceready', 'offline', and 'online'.
//    bindEvents: function () {
//        console.log('I am bindEvents');
//        //document.addEventListener('deviceready', this.onDeviceReady, true);
//        //document.addEventListener("deviceready", this.onDeviceReady, true);
//        docss.addEventListener("deviceready", function () {
//            console.log('I am addEventListener');
//        }, true);
//        console.log('I am bindEvents end' );
//    },
//    // deviceready Event Handler
//    //
//    // The scope of 'this' is the event. In order to call the 'receivedEvent'
//    // function, we must explicitly call 'app.receivedEvent(...);'
//    onDeviceReady: function () {
//        alert('It works!');
//        app.receivedEvent('deviceready');
//    },
//    // Update DOM on a Received Event
//    receivedEvent: function (id) {
//        console.log('I am receivedEvent DOM');
//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');

//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');

//        console.log('Received Event: ' + id);
//    }
//};




var app = {
    // Application Constructor
    initialize: function () {
        console.log('initialize calll');
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        console.log('I am bindEvents');
        document.addEventListener('deviceready', this.onDeviceReady, false);
        console.log('I am addEventListener');
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        console.log('I am On Device nReady');
        alert('It works!');
        app.receivedEvent('deviceready');
        AppTracker.startSession("PiBRJHzWCYY89EOVy83aULDo8WYxWZLq");
        AppTracker.loadModuleToCache("inapp");
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        console.log('I am Received Event');
        console.log('Received Event: ' + id);

        var parentElement = document.getElementById(id);


        console.log('I am Received Event - PE =>' + parentElement);
        var listeningElement = parentElement.querySelector('.listening');
        console.log('I am Received Event - LE =>' + listeningElement);
        var receivedElement = parentElement.querySelector('.received');
        console.log('I am Received Event - RE =>' + receivedElement);

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event:End ');

    }
};


////var app = {
////    onDeviceReady: function () {
////        // Initialize Leadbolt SDK with your API Key
////        AppTracker.startSession("PiBRJHzWCYY89EOVy83aULDo8WYxWZLq");
////        console.log('I am on deviceReady from App')
////        // cache Leadbolt Ad without showing it
////        AppTracker.loadModuleToCache("inapp");
////    },
////};

//function gameOver() {
//    // call this when you want to display the Leadbolt Interstitial
//    AppTracker.loadModule("inapp");
//}

//canvas.addEventListener('onModuleLoaded', function (e) {
//    console.log('Ad loaded successfully - ' + e.placement);
//    // Add code here to pause game and/or all media including audio
//});
//canvas.addEventListener('onModuleFailed', function (e) {
//    if (e.cached) {
//        console.log('Ad failed to cache - ' + e.placement);
//    } else {
//        console.log('Ad failed to display - ' + e.placement);
//    }
//});
//canvas.addEventListener('onModuleClosed', function (e) {
//    console.log('Ad closed by user - ' + e.placement);
//    // Add code here to resume game and/or all media including audio
//});
//canvas.addEventListener('onModuleCached', function (e) {
//    console.log('Ad cached successfully - ' + e.placement);
//});
//canvas.addEventListener('onModuleClicked', function (e) {
//    console.log('Ad clicked by user - ' + e.placement);
//});
//canvas.addEventListener('onMediaFinished', function (e) {
//    if (e.viewCompleted) {
//        console.log('User finished watching rewarded video');
//    } else {
//        console.log('User skipped watching rewarded video');
//    }
//});