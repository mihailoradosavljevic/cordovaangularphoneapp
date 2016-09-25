var gowemyApp = angular.module('gowemyApp', [
  'ngRoute',
  'ngTouch',
  'ngAnimate',
  'angular-gestures',
  'angular-svg-round-progress',
  'LocalStorageModule',
  'gowemyAppAnimations',
  'gowemyAppControllers',
  'gowemyAppFilters',
  'gowemyAppServices',
  'gowemyAppConstants',
  'gowemyAppDirectives',
  
  
]).
  run(function() {
    FastClick.attach(document.body);
  });

//gowemyApp.
//  run(function() {
//    FastClick.attach(document.body);
//  });
  

gowemyApp.value('mainWemyUrl', { url: 'http://188.166.27.237/' });
gowemyApp.value('mainWemyUrl1');


gowemyApp.config(['$routeProvider',
  function ($routeProvider) {

      var indexSlike = 0;

      $routeProvider.
        when('/', {
            templateUrl: 'partials/splash-gowemy.html',
            controller: 'splashCtrl'
            
        }
        
        ).




        when('/partials/about-screen', {
            templateUrl: 'partials/about-screen.html',
            controller: 'aboutCtrl'
        }).

                  when('/partials/about2', {
                      templateUrl: 'partials/about2.html',
                      controller: 'swipeAbout'
                  }).

            when('/partials/get-opinion', {
            templateUrl: 'partials/get-opinion.html',
            controller: 'getOpinionCtrl'
            }).

            when('/partials/results', {
            templateUrl: 'partials/results.html',
            controller: 'resultsMainCtrl'
            }).

                      when('/partials/loginPage', {
                          templateUrl: 'partials/loginPage.html',
                          controller: 'loginController'
                      }).

                                when('/partials/signupPage', {
                                    templateUrl: 'partials/signupPage.html',
                                    controller: 'signupController'
                                }).
          when('/partials/signUp2', {
              templateUrl: 'partials/signUp2.html',
              controller: 'signUpController2'
          }).

                        when('/partials/streamresults', {
                            templateUrl: 'partials/streamresults.html',
                            controller: 'PostIndexCtrl'
                        }).
          when('/partials/punjenje', {
              templateUrl: 'partials/punjenje.html',
              controller: 'punjenjeCtrl'
          }).

                    when('/partials/60secresult', {
                        templateUrl: 'partials/60secresult.html',
              controller: '60secresultCtrl'
          }).

                              when('/partials/REFRESHER', {
                                  templateUrl: 'partials/REFRESHER.html',
                                  controller: 'refresherControl'
                              }).

           when('/partials/appsettings', {
               templateUrl: 'partials/appsettings.html',
               controller: 'appsettingsController'
           }).

           when('/partials/shareGowemy', {
               templateUrl: 'partials/shareGowemy.html',
               controller: 'shareGowemyController'
           }).
          
      when('/partials/userprofile', {
          templateUrl: 'partials/userprofile.html',
          controller: 'userprofileController'
      }).



        otherwise({
            redirectTo: '/'
        });



  }]);

//Add this to have access to a global variable
gowemyApp.run(function ($rootScope) {
    $rootScope.globalVariable = 'BETAUSER';//global variable
    $rootScope.globalVariable = 'BETAUSERID';//global variable$rootScope.BETAUSERREG
    $rootScope.globalVariable = 'BETAUSERREG';
    $rootScope.globalVariable = 'BETAUSERIDreg';
    $rootScope.globalVariable = 'CURRENTLOCATIONwemy'; 
    $rootScope.globalVariable = 'LOCATIONBEFOREwemy';
    $rootScope.globalVariable = 'IDSLIKEidwemy22';
    $rootScope.globalVariable = 'USERTOKEN';
    $rootScope.globalVariable = 'winwidth';
    $rootScope.globalVariable = 'winheight';
    $rootScope.globalVariable = 'KRUGPRECNIK';
    $rootScope.globalVariable = 'KRUGSTROKE';
    $rootScope.globalVariable = 'OCENJENASLIKA';
    $rootScope.globalVariable = 'FontUsernameHeader';
    $rootScope.globalVariable = 'FontGetOpinion';
    $rootScope.globalVariable = 'FontTakePicture';
    $rootScope.globalVariable = 'FontIspodFacebooka';
    $rootScope.globalVariable = 'FontLogout';
    $rootScope.globalVariable = 'FontSignupLoginTextBoxes';
    $rootScope.globalVariable = 'FontSignupLoginTextBoxes3';
    
    $rootScope.globalVariable = 'HeaderText';
    $rootScope.globalVariable = 'RefreshStream';
    $rootScope.globalVariable = 'RefreshStreamLUK';
    $rootScope.globalVariable = 'LUKrotacija'; 
    $rootScope.globalVariable = 'dataUploada';
    $rootScope.globalVariable = 'IDSLIKEgowemy_idUPLOAD';
    $rootScope.globalVariable = 'XX';
    $rootScope.globalVariable = 'YY';
    $rootScope.globalVariable = 'LUKprocenti'; 
    $rootScope.globalVariable = 'CRVENOZELENO'; 
    $rootScope.globalVariable = 'HASHTAG';
    $rootScope.globalVariable = 'HASHTAGtextsize'; 
    $rootScope.globalVariable = 'popunjenHASHTAG';
    $rootScope.globalVariable = 'BASTASLIKA';
    $rootScope.globalVariable = 'UserSlikaURLdobijen';
    $rootScope.globalVariable = 'dialogAbout';
    $rootScope.globalVariable = 'dialogBirthday';
    $rootScope.globalVariable = 'UserGender';
    $rootScope.globalVariable = 'dialogCountry';
    $rootScope.globalVariable = 'CountryCode';
    $rootScope.globalVariable = 'UserEmailtrue';
    $rootScope.globalVariable = 'ShortBio';
    $rootScope.globalVariable = 'VISINASLIKEmalimeni';
    $rootScope.globalVariable = 'VISINASLIKEuvelikomKrugu';
    $rootScope.globalVariable = 'FontUsernameHeader2';
    $rootScope.globalVariable = 'UMETNUTO'; 
    $rootScope.globalVariable = 'FontGetOpinionProcenti'; 
    $rootScope.globalVariable = 'BlurMeniSlikaY';
    $rootScope.globalVariable = 'BlurMeniSlikaX';
    $rootScope.globalVariable = 'UserMeniSlikaY';
    $rootScope.globalVariable = 'UserMeniSlikaX'; 
    $rootScope.globalVariable = 'ProfileMeniSlikaX';
    $rootScope.globalVariable = 'ProfileMeniSlikaY'; 

    //      hammerDefaultOptsProvider.set({
    //    recognizers: [[Hammer.Tap, {time: 250}]]
    //});



});