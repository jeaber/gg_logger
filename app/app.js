// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
$(function () {

    var log = [];
    // Using YQL and JSONP
    setInterval(function () {
        $.ajax({
            url: "http://query.yahooapis.com/v1/public/yql",

            // The name of the callback parameter, as specified by the YQL service
            jsonp: "callback",

            // Tell jQuery we're expecting JSONP
            dataType: "jsonp",

            // Tell YQL what we want and that we want JSON
            data: {
                q: "SELECT * FROM html WHERE url=\x22http://.../gigi\x22 and compat=\x22html5\x22 and xpath='//dl[1]/dd'",
                format: "json"
            },
            // Work with the response
            success: function (response) {
                var status = response.query.results.dd; // server response

                if (typeof status === "string"){
                    log.push(new Date());
                }
                console.log(log);
            }
        });
    }, 60000);
});
