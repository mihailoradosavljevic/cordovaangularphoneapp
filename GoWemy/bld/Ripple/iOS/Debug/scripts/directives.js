
//var gowemyAppDirectives = angular.module('gowemyAppDirectives', ['ngResource']);

//gowemyAppDirectives.directive('Camera', function () {
//    return {
//        restrict: 'A',
//        require: 'ngModel',
//        link: function (scope, elm, attrs, ctrl) {


//            elm.on('click', function () {
//                navigator.camera.getPicture(function (imageURI) {
//                    scope.$apply(function () {
//                        ctrl.$setViewValue(imageURI);
//                    });
//                }, function (err) {
//                    ctrl.$setValidity('error', false);
//                }, {
//                    quality: 50,
//                    destinationType: Camera.DestinationType.DATA_URL,
//                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
//                    allowEdit: true,
//                    encodingType: Camera.EncodingType.JPEG,
//                    targetWidth: 1000,
//                    targetHeight: 1000,
//                    popoverOptions: CameraPopoverOptions,
//                    saveToPhotoAlbum: false
//                })
//            });
//        }
//    };
//});

'use strict';


var gowemyAppDirectives = angular.module('gowemyAppDirectives', ['ngResource']);

var app = gowemyAppDirectives;

app.directive('camera', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            elm.on('click', function () {
                navigator.camera.getPicture(
                    function (imageData) {
                        scope.$apply(function () {
                            ctrl.$setViewValue(imageData);
                            //alert('u direktivi  '+imageData);
                        });
                    },
                    function (err) {
                        ctrl.$setValidity('error', false);
                    }, {
                        correctOrientation: true,
                        quality: 40,
                        targetWidth: 540,
                        targetHeight: 720,
                        destinationType: Camera.DestinationType.FILE_URI,
                        encodingType: Camera.EncodingType.JPEG,
                        //popoverOptions: CameraPopoverOptions,
                        //sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                        saveToPhotoAlbum: false
                        
                            //FILE_URI
                    });
            });
        }
    };
});

app.directive('album', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            elm.on('click', function () {
                navigator.camera.getPicture(
                    function (imageData) {
                        scope.$apply(function () {
                            ctrl.$setViewValue(imageData);
                            //alert('u direktivi  '+imageData);
                        });
                    },
                    function (err) {
                        ctrl.$setValidity('error', false);
                    }, {
                        correctOrientation: true,
                        quality: 40,
                        targetWidth: 540,
                        targetHeight: 720,
                        destinationType: Camera.DestinationType.FILE_URI,
                        encodingType: Camera.EncodingType.JPEG,
                        //popoverOptions: CameraPopoverOptions,
                        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                        saveToPhotoAlbum: false
                        
                            //FILE_URI
                    });
            });
        }
    };
});






app.directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
app.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target, content;
            
            attrs.expanded = false;
            
            element.bind('click', function() {
                if (!target) target = document.querySelector(attrs.slideToggle);
                if (!content) content = target.querySelector('.slideable_content');
                
                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
});


app.directive('twitter', [
    function () {
        return {
            link: function (scope, element, attr) {
                setTimeout(function () {
                    twttr.widgets.createShareButton(
                        attr.url,
                        element[0],
                        function (el) { }, {
                            count: 'none',
                            text: attr.text
                        }
                    );
                });
            }
        }
    }
]);


app.directive('orientable', function () {
    return {
        link: function (scope, element, attrs) {

            element.bind("load", function (e) {

                // success, "onload" catched
                // now we can do specific stuff:

                if (this.naturalHeight > this.naturalWidth) {
                    this.className = "vertical";
                }
            });
        }
    }
});