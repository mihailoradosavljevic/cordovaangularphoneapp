//var phonecatApp = angular.module('phonecatApp', []);

//phonecatApp.controller('PhoneListCtrl', function ($scope) {
//    $scope.phones = [
//      {
//          'name': 'Nexus S',
//          'snippet': 'Fast just got faster with Nexus S.',
//          'age':'1'
//      },
//      {
//          'name': 'Motorola XOOM™ with Wi-Fi',
//          'snippet': 'The Next, Next Generation tablet.',
//          'age': '2'
//      },
//      {
//          'name': 'MOTOROLA XOOM™',
//          'snippet': 'The Next, Next Generation tablet.',
//          'age': '3'
//      }
//    ];

//    $scope.orderProp = 'age';

//    $scope.name = "World";
//});


//var phonecatApp = angular.module('phonecatApp', []);

//phonecatApp.controller('PhoneListCtrl',['$scope', '$http', function ($scope, $http) {
//    $http.get('phones.json').success(function (data) {
//        $scope.phones = data;
//    });

//    $scope.orderProp = 'age';
//}]);


var gowemyAppControllers = angular.module('gowemyAppControllers', []);

gowemyAppControllers.controller('splashCtrl', ['$scope', '$http', '$rootScope', '$routeParams', '$window', '$timeout',
  function ($scope, $http, $rootScope, $routeParams, $window, $timeout) {
      $http.get('datoteka/splashscr.json').success(function (data) {
          $scope.splashscreen = data;
      });

      //$rootScope.RefreshStream = false;

      $rootScope.UserSlikaURLdobijen = '';
      
      $rootScope.winwidth = $(window).width();
      $rootScope.winheight = $(window).height();

      $rootScope.UMETNUTO = false;

      $rootScope.HASHTAG = '';

      $rootScope.VISINASLIKEmalimeni = ($rootScope.winheight / 6).toString() + 'px';
      $rootScope.VISINASLIKEuvelikomKrugu = ($rootScope.winheight / 2).toString() + 'px';
      //alert($rootScope.winwidth + 'x' + $rootScope.winheight);

      var FontIspodFacebooka1 = Math.round($rootScope.winwidth / 43);
      $rootScope.FontIspodFacebooka = FontIspodFacebooka1.toString() + 'px';

      var sizeProcentiVeliki = Math.round($rootScope.winwidth / 5);


      $rootScope.FontGetOpinionProcenti = sizeProcentiVeliki.toString()+'px';

      $rootScope.CURRENTLOCATIONwemy = '/partials/splash-gowemy';
      $scope.SplashTimer1 = false;
      $scope.SplashTimer2 = false;
      $scope.SplashTimer3 = false;
      $scope.SplashTimer4 = false;

          $timeout(function () { $scope.PustiSplashAnimaciju(); }, 500);


          $scope.PustiSplashAnimaciju = function () {

              $scope.SplashTimer1 = true;

                    }
          $timeout(function () { $scope.PustiSplashAnimaciju2(); }, 1000);


          $scope.PustiSplashAnimaciju2 = function () {

              $scope.SplashTimer2 = true;

          }

          $timeout(function () { $scope.PustiSplashAnimaciju3(); }, 1500);


          $scope.PustiSplashAnimaciju3 = function () {
              $scope.SplashTimer2 = false;
              $scope.SplashTimer3 = true;

          }

          //$timeout(function () { $scope.PustiSplashAnimaciju4(); }, 6000);


          //$scope.PustiSplashAnimaciju4 = function () {
              
          //    $scope.SplashTimer4 = false;

          //}
      




  }]);



gowemyAppControllers.controller('userprofileController', ['$scope', '$http', '$rootScope', '$routeParams', '$window', '$timeout','$location',
function ($scope, $http, $rootScope, $routeParams, $window, $timeout,$location) {

    $scope.UserPICTURElinkPOTVRDA = true;

    $http({
        method: 'GET',
        url: 'http://dev.api.gowemy.com/user/info',

        headers: { 'GW-Token': $rootScope.USERTOKEN }
        //application/x-www-form-urlencoded'

    }).success(function (responsedatainfo) {
        //alert(angular.toJson(responsedatainfo.data));

        $scope.UserNAMEinfo = responsedatainfo.data.username;
        $scope.UserEMAILinfo = responsedatainfo.data.email;
        $scope.UserGENDERIDinfo = responsedatainfo.data.gender_id;
        $scope.UserCOUNTRYIDinfo = responsedatainfo.data.country_id;
        $scope.UserABOUTinfo = responsedatainfo.data.short_info;
        $scope.UserCOUNTRYinfo = $rootScope.dialogCountry;
        $scope.UserPICTURElink = responsedatainfo.data.profile_photo_url;


        if ($scope.UserPICTURElink==null) {

            $scope.UserPICTURElinkPOTVRDA = false;

        }

        if ($scope.UserABOUTinfo=='undefined') {
            $scope.UserABOUTinfo='NO BIO.'

        }
        //else {

        //    $scope.UserABOUTinfo = 'NO BIO.'

        //}


        if ($scope.UserGENDERIDinfo='1') {

            $scope.UserGENDERTXTinfo = 'female';


        } else {

            $scope.UserGENDERTXTinfo = 'male';


        }



    }).error(function (errdatainfo) {
        alert(angular.toJson(errdatainfo));


    });





    $scope.goBackPageAppsettings = function () {

        $rootScope.LOCATIONBEFOREwemy = $rootScope.CURRENTLOCATIONwemy;

        //alert($rootScope.LOCATIONBEFOREwemy);
        $rootScope.CURRENTLOCATIONwemy = '/partials/userprofile';
        $location.url($rootScope.LOCATIONBEFOREwemy);

    };
 





  }]);








gowemyAppControllers.controller('appsettingsController', ['$scope', '$http', '$rootScope', '$routeParams', '$window', '$timeout','$location',
function ($scope, $http, $rootScope, $routeParams, $window, $timeout,$location) {
      //$http.get('datoteka/splashscr.json').success(function (data) {
      //    $scope.splashscreen = data;
      //});

      //$rootScope.RefreshStream = false;

      //$rootScope.UserSlikaURLdobijen = '';

      //$rootScope.winwidth = $(window).width();
      //$rootScope.winheight = $(window).height();

    $scope.ShowPrivacyPolicy = false;
    $scope.ShowTermsOfService = false;
    $scope.NODELETEBETAACCOUNT = false;

    $scope.goBackPageAppsettings = function () {

        $rootScope.LOCATIONBEFOREwemy = $rootScope.CURRENTLOCATIONwemy;

        //alert($rootScope.LOCATIONBEFOREwemy);
        $rootScope.CURRENTLOCATIONwemy = '/partials/appsettings';
        $location.url($rootScope.LOCATIONBEFOREwemy);

    };
      //$rootScope.VISINASLIKEmalimeni = ($rootScope.winheight / 6).toString() + 'px';
      //$rootScope.VISINASLIKEuvelikomKrugu = ($rootScope.winheight / 2).toString() + 'px';
      //alert($rootScope.winwidth + 'x' + $rootScope.winheight);

      //var FontIspodFacebooka1 = Math.round($rootScope.winwidth / 43);
      //$rootScope.FontIspodFacebooka = FontIspodFacebooka1.toString() + 'px';

      //$rootScope.CURRENTLOCATIONwemy = '/partials/splash-gowemy';
      //$scope.SplashTimer1 = false;
      //$scope.SplashTimer2 = false;
      //$scope.SplashTimer3 = false;
      //$scope.SplashTimer4 = false;

      //$timeout(function () { $scope.PustiSplashAnimaciju(); }, 1000);


      //$scope.PustiSplashAnimaciju = function () {

      //    $scope.SplashTimer1 = true;

      //}
      //$timeout(function () { $scope.PustiSplashAnimaciju2(); }, 1500);


      //$scope.PustiSplashAnimaciju2 = function () {

      //    $scope.SplashTimer2 = true;

      //}

      //$timeout(function () { $scope.PustiSplashAnimaciju3(); }, 4500);


      //$scope.PustiSplashAnimaciju3 = function () {
      //    $scope.SplashTimer2 = false;
      //    $scope.SplashTimer3 = true;

      //}

      //$timeout(function () { $scope.PustiSplashAnimaciju4(); }, 6000);


      //$scope.PustiSplashAnimaciju4 = function () {

      //    $scope.SplashTimer4 = false;

      //}





  }]);


gowemyAppControllers.controller('shareGowemyController', ['$scope', '$http', '$rootScope', '$routeParams', '$window', '$timeout', '$location',
function ($scope, $http, $rootScope, $routeParams, $window, $timeout, $location) {
    //$http.get('datoteka/splashscr.json').success(function (data) {
    //    $scope.splashscreen = data;
    //});

    //$rootScope.RefreshStream = false;

    //$rootScope.UserSlikaURLdobijen = '';

    //$rootScope.winwidth = $(window).width();
    //$rootScope.winheight = $(window).height();

    //$scope.ShowPrivacyPolicy = false;
    //$scope.ShowTermsOfService = false;
    //$scope.NODELETEBETAACCOUNT = false;

    $scope.goBackPageShareGoWemy = function () {

        $rootScope.LOCATIONBEFOREwemy = $rootScope.CURRENTLOCATIONwemy;

        //alert($rootScope.LOCATIONBEFOREwemy);
        $rootScope.CURRENTLOCATIONwemy = '/partials/shareGowemy';
        $location.url($rootScope.LOCATIONBEFOREwemy);

    };
    //$rootScope.VISINASLIKEmalimeni = ($rootScope.winheight / 6).toString() + 'px';
    //$rootScope.VISINASLIKEuvelikomKrugu = ($rootScope.winheight / 2).toString() + 'px';
    //alert($rootScope.winwidth + 'x' + $rootScope.winheight);

    //var FontIspodFacebooka1 = Math.round($rootScope.winwidth / 43);
    //$rootScope.FontIspodFacebooka = FontIspodFacebooka1.toString() + 'px';

    //$rootScope.CURRENTLOCATIONwemy = '/partials/splash-gowemy';
    //$scope.SplashTimer1 = false;
    //$scope.SplashTimer2 = false;
    //$scope.SplashTimer3 = false;
    //$scope.SplashTimer4 = false;

    //$timeout(function () { $scope.PustiSplashAnimaciju(); }, 1000);


    //$scope.PustiSplashAnimaciju = function () {

    //    $scope.SplashTimer1 = true;

    //}
    //$timeout(function () { $scope.PustiSplashAnimaciju2(); }, 1500);


    //$scope.PustiSplashAnimaciju2 = function () {

    //    $scope.SplashTimer2 = true;

    //}

    //$timeout(function () { $scope.PustiSplashAnimaciju3(); }, 4500);


    //$scope.PustiSplashAnimaciju3 = function () {
    //    $scope.SplashTimer2 = false;
    //    $scope.SplashTimer3 = true;

    //}

    //$timeout(function () { $scope.PustiSplashAnimaciju4(); }, 6000);


    //$scope.PustiSplashAnimaciju4 = function () {

    //    $scope.SplashTimer4 = false;

    //}





}]);




gowemyAppControllers.controller('punjenjeCtrl', ['$scope', '$http', '$rootScope', '$routeParams', '$location', '$timeout',
  function ($scope, $http, $rootScope, $routeParams, $location, $timeout) {
      //$http.get('datoteka/get-opinion.json').success(function (data) {
      //    $scope.aboutscreen = data;
      //});

      var countDowner, countDown = 0;
      countDowner = function () {
          if (countDown > 60) {
              $("#warning").fadeOut(2000);
              countDown = 60;
              $rootScope.CURRENTLOCATIONwemy = '/partials/punjenje';
              $location.url('/partials/60secresult');
              return; // quit
          } else {
              $scope.countDown_text = countDown; // update scope
              countDown++; // +1
              $timeout(countDowner, 1000); // loop it again
          }
      };

      $scope.countDown_text = countDown;
      countDowner();



      //SKAKANJE NAZAD ************************************
      //$rootScope.LOCATIONBEFOREwemy = $rootScope.CURRENTLOCATIONwemy;

      //alert($rootScope.LOCATIONBEFOREwemy + '  ' + $rootScope.CURRENTLOCATIONwemy);

      $scope.goToPage2 = function (url) {
          //alert($rootScope.LOCATIONBEFOREwemy);

          $rootScope.LOCATIONBEFOREwemy = $rootScope.CURRENTLOCATIONwemy;
          $rootScope.CURRENTLOCATIONwemy = '/partials/punjenje';
          $location.url(url);

      }
      //********** KRAJ SKAKANJA NAZAD ***************



  }]);


gowemyAppControllers.controller('60secresultCtrl', ['$scope', '$http', '$rootScope', '$routeParams', '$location', '$timeout',
  function ($scope, $http, $rootScope, $routeParams, $location, $timeout) {
      //$http.get('datoteka/splashscr.json').success(function (data) {
      //    $scope.aboutscreen = data;
      //});
      $scope.TRUEARCSHOW = false;
      $rootScope.LUKprocenti = 10;
      $timeout(function () { $scope.PROVERIOCENU(); }, 1000);
      //var bvbv = (Math.round(85.8358 * 100) / 100);
      //alert(bvbv);

      //var countDowner, countDown = 0;
      //countDowner = function () {
      //    if (countDown > 60) {
      //        $("#warning").fadeOut(2000);
      //        countDown = 60;
      //        return; // quit
      //    } else {
      //        $scope.countDown_text = countDown; // update scope
      //        countDown++; // +1
      //        $timeout(countDowner, 1000); // loop it again
      //    }
      //};

      //$scope.countDown_text = countDown;
      //countDowner();
      $scope.PROVERIOCENU = function () {

          //$rootScope.CRVENOZELENO = false;
          

          $scope.IDocenjeno = $rootScope.IDSLIKEgowemy_idUPLOAD;
          //alert($scope.IDtrenutno);
          var RESULTUrl = 'http://dev.api.gowemy.com/gowemy?gowemy_id=' + $scope.IDocenjeno;

          


          //*********************************************************************
          //   FORMIRANJE OBJEKTA ZA POST FUNKCIJA OPSTA results
          //********************************************************************



          Object.toparamsOcenjeno = function ObjecttoParams(obj) {
              var p = [];
              for (var key in obj) {
                  p.push(key + '=' + encodeURIComponent(obj[key]));
              }
              return p.join('&');
          };



          var myobjectOcenjeno = { 'gowemy_id': $scope.IDocenjeno };


          var payloadOCENJENO = Object.toparamsOcenjeno(myobjectOcenjeno);
          $scope.PAYLOADOCENJENO = payloadOCENJENO;

          //alert(angular.toJson($scope.PAYLOADMINUS));

          $http({
              method: 'GET',
              url: RESULTUrl,

              headers: { 'GW-Token': $rootScope.USERTOKEN }


          }).success(function (responseOCENJENO) {

              $scope.ODGOVOROCENJENO = responseOCENJENO;

              //alert(angular.toJson($scope.ODGOVOROCENJENO) + '  za broj slike  ' + $scope.IDocenjeno);

              $scope.TRUEARCSHOW=true;

              $scope.PLUSMINUSODGOVOR = responseOCENJENO.data;

              var minOcenaMinus = parseInt(responseOCENJENO.data.minus, 10);

              var pluOcenaPlus = parseInt(responseOCENJENO.data.plus, 10);




              var procentiOCENE = pluOcenaPlus - minOcenaMinus;

              var procentiUKUPNO = pluOcenaPlus + minOcenaMinus;

              //var procentiOCENE = 10;

              //var procentiUKUPNO = 17;

              $scope.ZbirPluMinus = procentiUKUPNO;

              $scope.PercentMessage = 'Good - Not so good';

              $rootScope.LUKprocenti = Math.round((((pluOcenaPlus * 100) / procentiUKUPNO) * 100) / 100);

              if (procentiOCENE>0) {

                  var OCENAPROCENTI = Math.round((((pluOcenaPlus * 100) / procentiUKUPNO) * 100) / 100);

                  $rootScope.LUKprocenti = OCENAPROCENTI;

                  $scope.OcenaProcentiPlus = OCENAPROCENTI + ' %';

                  $scope.PercentMessage = 'Congratulations this looks good on You';

                  $scope.USERMARKOcena = $scope.OcenaProcentiPlus;

                  $rootScope.CRVENOZELENO = false;
                  //alert('This looks good on You +' + OCENAPROCENTI + '%');

              } else {

                  var OCENAPROCENTI = Math.round((((pluOcenaPlus * 100) / procentiUKUPNO) * 100) / 100);

                  $scope.OcenaProcentiMinus = OCENAPROCENTI + ' %';

                  $scope.PercentMessage = 'Sorry this does not look so good on You';

                  $scope.USERMARKOcena = $scope.OcenaProcentiMinus;

                  $rootScope.CRVENOZELENO = true;

                  //alert('This does not look good on You -' + OCENAPROCENTI + '%');

              }

              if (procentiOCENE == 0) {

                  $scope.OcenaProcentiMinus = '0 %';

                  $scope.PercentMessage = 'Sorry noone voted';

                  $scope.USERMARKOcena = $scope.OcenaProcentiMinus;

                  $rootScope.CRVENOZELENO = true;

              }





          }).error(function (dataOcenjeno) {
              $scope.GRESKAocenjeno = dataOcenjeno;
              //alert('SOMETHING WRONG PLEASE VOTE AGAIN ' + angular.toJson($scope.GRESKAminus));
              $scope.TRUEARCSHOW = true;
              

          });


      }


      //SKAKANJE NAZAD ************************************
      

      //alert($rootScope.LOCATIONBEFOREwemy + '  ' + $rootScope.CURRENTLOCATIONwemy);

      $scope.goToPage4 = function (url) {
          //alert($rootScope.LOCATIONBEFOREwemy);

          $rootScope.LOCATIONBEFOREwemy = $rootScope.CURRENTLOCATIONwemy;
          $rootScope.CURRENTLOCATIONwemy = '/partials/60secresult';
          $location.url(url);

      }
      //********** KRAJ SKAKANJA NAZAD ***************



  }]);








gowemyAppControllers.controller('aboutCtrl', ['$scope', '$http', '$rootScope', '$routeParams', '$location',
  function ($scope, $http, $rootScope, $routeParams, $location) {
      $http.get('datoteka/splashscr.json').success(function (data) {
          $scope.aboutscreen = data;
      });


      //SKAKANJE NAZAD ************************************
      

      //alert($rootScope.LOCATIONBEFOREwemy + '  ' + $rootScope.CURRENTLOCATIONwemy);

      $scope.goBackPage1 = function () {
          //alert($rootScope.LOCATIONBEFOREwemy);

          $rootScope.LOCATIONBEFOREwemy = $rootScope.CURRENTLOCATIONwemy;
          $rootScope.CURRENTLOCATIONwemy = '/partials/about-screen';
          $location.url($rootScope.LOCATIONBEFOREwemy);

      }
      //********** KRAJ SKAKANJA NAZAD ***************



  }]);


gowemyAppControllers.controller('swipeAbout', ['$scope', '$http', '$window', '$rootScope', '$routeParams', '$location', '$window',
  function ($scope, $http, $window, $rootScope, $routeParams, $location, $window) {
      $http.get('datoteka/splashscr.json').success(function (data) {
          $scope.aboutscreen2 = data;
      });

      $scope.winwidthabout = $(window).width();
      $scope.winheightabout = $(window).height();
      var elSWIPE = document.getElementById("LoginTextHeader");


      elSWIPE.style.fontSize = Math.round($scope.winwidthabout / 18) + 'px';
      //alert($scope.winwidthabout + ' ' + elSWIPE.style.fontSize);

      $scope.TrenutnaSlika = 64;
      $scope.StilLevoDesno = 'bounceInLines';
      $scope.pozadinaSlikaAbout = 1;

      //SKAKANJE NAZAD ************************************
      $rootScope.LOCATIONBEFOREwemy = $rootScope.CURRENTLOCATIONwemy;

      //alert($rootScope.LOCATIONBEFOREwemy + '  ' + $rootScope.CURRENTLOCATIONwemy);

      $scope.goBackPage = function () {
          //alert($rootScope.LOCATIONBEFOREwemy);
          $rootScope.CURRENTLOCATIONwemy = '/partials/about2';
          $location.url($rootScope.LOCATIONBEFOREwemy);

      }
      //********** KRAJ SKAKANJA NAZAD ***************

      //$scope.pageClass = 'page-about';

      $scope.showActions = false;






      $scope.slikaLevo = function () {
          //alert('Swipe levo');
          $scope.pozadinaSlikaAbout = -1;
          $scope.StilLevoDesno = 'bounceInSlide';
          $scope.TrenutnaSlika++;
          //$scope.StilLevoDesno = 'bounceInLinesOUT';

          if ($scope.TrenutnaSlika >= 67) {
              $scope.TrenutnaSlika = 67;
              //$scope.StilLevoDesno = 'bounceInLinesOUT';
              $scope.showActions = !$scope.showActions;

          }



          $scope.showActions = false;
      };

      $scope.slikaDesno = function () {
          $scope.pozadinaSlikaAbout = 1;
          $scope.StilLevoDesno = 'bounceInLines';
          $scope.TrenutnaSlika--;
          //$scope.StilLevoDesno = 'bounceInLinesOUT';

          if ($scope.TrenutnaSlika <= 64) {
              $scope.TrenutnaSlika = 64;
              //$scope.StilLevoDesno = 'bounceInSlide';

          }

          $scope.showActions = true;

          //alert('Swipe desno');

      };

      //$scope.changeDirection = function () {

      //    $scope.StilLevoDesno = 'bounceOutSlide';


      //};




  }]);






gowemyAppControllers.controller('getOpinionCtrl', ['$scope', '$http', '$rootScope', '$routeParams', '$location', 'localStorageService', '$window', '$timeout',
  function ($scope, $http, $rootScope, $routeParams, $location, localStorageService, $window, $timeout) {
      $http.get('datoteka/splashscr.json').success(function (data) {
          $scope.getopinion = data;
          //alert('ovo');
          //$rootScope.RefreshStreamLUK = false;

          $scope.currentColor = 'url(#gradient)';

          


          // ******* Saznajemo sirinu ekrana i visinu *********
          $rootScope.winwidth = $(window).width();
          $rootScope.winheight = $(window).height();
          $rootScope.KRUGPRECNIK = Math.round(($rootScope.winwidth / 4) + (($rootScope.winwidth / 100) * 5));
          $rootScope.KRUGSTROKE = Math.round($rootScope.KRUGPRECNIK / 5.34);
          $scope.rotation='rotate(-29.3deg)';
          $rootScope.LUKrotacija = 'rotate(-29.2deg)';
          $rootScope.XX = Math.round(($rootScope.winwidth / 2) - ($rootScope.KRUGPRECNIK * 1.33));
          $rootScope.YY = Math.round(($rootScope.winheight / 2) - ($rootScope.KRUGPRECNIK * 0.43));
          $rootScope.BlurMeniSlikaX = Math.round($rootScope.winwidth / 1.11);
          $rootScope.BlurMeniSlikaY = Math.round($rootScope.winheight / 6.09);




          var FontUsernameHeader1 = Math.round($rootScope.winwidth / 18);

          var FontUsernameHeader2 = Math.round($rootScope.winwidth / 15);

          var FontGetOpinion1 = Math.round($rootScope.winwidth / 13);
          var FontTakePicture1 = Math.round($rootScope.winwidth / 18);

          var FontLogout1 = Math.round($rootScope.winwidth / 25);


          $rootScope.FontLogout = FontLogout1.toString() + 'px';




          $rootScope.FontTakePicture = FontTakePicture1.toString() + 'px';
          $rootScope.FontGetOpinion = FontGetOpinion1.toString() + 'px';
          $rootScope.FontUsernameHeader = FontUsernameHeader1.toString() + 'px';
          $rootScope.FontUsernameHeader2 = FontUsernameHeader2.toString() + 'px';




          //************************************
          //if(window.innerHeight < window.innerWidth){
          // alert("Please use Landscape!");
          //         }
          //$scope.getWindowOrientation = function () {
          //    return $window.orientation;
          //};

          //$scope.$watch($scope.getWindowOrientation, function (newValue, oldValue) {
          //    $scope.degrees = newValue;
          //    alert($scope.degrees);

          //}, true);



          //if ($scope.degrees==90) {
          //    alert('Okrenuo si');

          //}

          //var el = document.getElementById("ARCpunjenje"); // or other selector like querySelector()
          // var rect = el.getBoundingClientRect(); // get the bounding rectangle 






          $scope.x = Math.round(($rootScope.winwidth / 2) - ($rootScope.KRUGPRECNIK*1.33));
          $scope.y = Math.round(($rootScope.winheight / 2) - ($rootScope.KRUGPRECNIK * 0.43));



          //alert($scope.x + ' ' + $scope.y);
          $scope.SVGTOP = Math.round(($rootScope.winheight / 2) - ($rootScope.KRUGPRECNIK));
          $scope.SVGLEFT = Math.round(($rootScope.winwidth / 2) - ($rootScope.KRUGPRECNIK));

          //alert($scope.SVGTOP);
          //alert($scope.SVGLEFT);

          //document.getElementById('ARCpunjenje').style.top = Math.round(($rootScope.winheight / 2) - ($rootScope.KRUGPRECNIK));
          //document.getElementById('ARCpunjenje').style.left = Math.round(($rootScope.winwidth / 2) - ($rootScope.KRUGPRECNIK));

          //alert('sirina ' + $rootScope.winwidth + ' visina ' + $rootScope.winheight + ' precnik ' + $rootScope.KRUGPRECNIK + ' top  ' + $scope.SVGTOP + ' left' + $scope.SVGLEFT);


          $scope.GETLOCALpicUrl();



      });


      $scope.GETLOCALpicUrl = function () {


          //submitREGISTER2('UserSlikaLink', $rootScope.UserSlikaURLdobijen);

          var lsUrlLocPic = localStorageService.get('UserSlikaLink');
          $rootScope.UserSlikaURLdobijen = lsUrlLocPic;
          //alert($rootScope.UserSlikaURLdobijen + ' u getopinion');

          if ($rootScope.UserSlikaURLdobijen!=null) {
          
          $rootScope.UMETNUTO = true;
          
          }
          
          
      };



      $scope.getColor = function () {


          return $scope.gradient ? 'url(#gradient)' : $scope.currentColor;

      };


      var elMenuPozadina = document.getElementById("menuPozadina1");
      $scope.toggleVar = true;
      $scope.styletrue = false;
      $scope.styletrueGRUPA = false;

      //*******ZATVARANJE MENIJA

      $scope.ZatvaranjeMenija = function () {


          $timeout(function () { $scope.OBRNIMENI(); }, 300);

          




      }


      $scope.OBRNIMENI = function () {

          $scope.styletrueGRUPA = !$scope.styletrueGRUPA;

      }

      //*******ZATVARANJE MENIJA ENDE*********************************************




      $scope.styletoggle = function () {

          $scope.styletrue = !$scope.styletrue;


          //if ($scope.styletrue == true) {


          //    elMenuPozadina.style.className = "menuPozadina1";
          //    //elMenuPozadina.style.animation = "mynewmove 4s 2";
          //}

          //if ($scope.styletrue == false) {
          //    elMenuPozadina.style.WebkitAnimation = "menuPozadina1OUT";

          //}

      };


      $scope.toggle = function () {


          $scope.toggleVar = !$scope.toggleVar;

      };
      $scope.nesto = gowemyApp.value;



      $scope.goToPage1 = function (pathUrl1) {
          $rootScope.CURRENTLOCATIONwemy = '/partials/get-opinion';
          $location.url(pathUrl1);



      }

      $scope.logout = function () {



          var lsUSERNAMEvecupisangoodbye = localStorageService.get('USERNAME');

          function submitRESETLOGOUT(key, val) {
              return localStorageService.set(key, val);
              //alert('upisao ID u LOCAL STORAGE ' + key);
          }

          submitRESETLOGOUT('ID', '');
          submitRESETLOGOUT('USERNAME', '');

          submitRESETLOGOUT('token', '');

          var lsTOKENreset = localStorageService.get('token');
          var lsIDreset = localStorageService.get('ID');
          var lsUSERNAMEreset = localStorageService.get('USERNAME');

          $rootScope.USERTOKEN = lsTOKENreset;
          $rootScope.BETAUSER = lsUSERNAMEreset;
          $rootScope.BETAUSERID = lsIDreset;

          alert('goodbye ' + lsUSERNAMEvecupisangoodbye);

          $location.url('/partials/splash-gowemy');
      }


      if ($rootScope.RefreshStream == true) {

          //$rootScope.RefreshStream = false;
          $rootScope.RefreshStreamLUK = true;

          $location.url('partials/streamresults');

      }


      //$rootScope.RefreshStreamLUK = false;
      //var newUrl = 'partials/streamresults';
      //var oldUrl = 'partials/get-opinion';
      //$scope.$on('$locationChangeStart', function (event,oldUrl, newUrl) {
      
      //    if (oldUrl == 'partials/streamresults' && newUrl == 'partials/get-opinion') {
      //        $rootScope.RefreshStream = false;
      //        alert('ODLAZAK');
      //    }

         
      
      //});



  }]);


gowemyAppControllers.controller('loginController', ['$scope', '$http', '$rootScope', '$routeParams', '$location', 'localStorageService', '$window',
  function ($scope, $http, $rootScope, $routeParams, $location, localStorageService, $window) {
      $http.get('datoteka/splashscr.json').success(function (data) {
          $scope.loginData = data;


          $rootScope.winwidth = $(window).width();
          var FontSignupLoginTextBoxes1 = Math.round($rootScope.winwidth / 20);
          $rootScope.FontSignupLoginTextBoxes = FontSignupLoginTextBoxes1.toString() + 'px';
          var HeaderText1 = Math.round($rootScope.winwidth / 18);
          $rootScope.HeaderText = HeaderText1.toString() + 'px';
          var HASHTAGtextsize1 = Math.round($rootScope.winwidth / 15);
          $rootScope.HASHTAGtextsize = HASHTAGtextsize1;

          var lsTOKENprovera = localStorageService.get('token');
          if (lsTOKENprovera && lsTOKENprovera != null) {

              //$rootScope.USERTOKEN = lsTOKENprovera;
              var lsIDvecupisan = localStorageService.get('ID');
              var lsUSERNAMEvecupisan = localStorageService.get('USERNAME');

              $rootScope.USERTOKEN = lsTOKENprovera;
              $rootScope.BETAUSER = lsUSERNAMEvecupisan;
              $rootScope.BETAUSERID = lsIDvecupisan;



              //alert('WELCOME BACK ' + $rootScope.BETAUSER);
              $location.url('/partials/get-opinion');

          }

      });


      //*********************************************************************
      //   LOGIN
      //********************************************************************
      $scope.checkLogin = function () {



          //*********************************************************************
          //   FORMIRANJE OBJEKTA ZA POST FUNKCIJA OPSTA
          //********************************************************************



          Object.toparams = function ObjecttoParams(obj) {
              var p = [];
              for (var key in obj) {
                  p.push(key + '=' + encodeURIComponent(obj[key]));
              }
              return p.join('&');
          };



          //var myobjectLogin = { 'email': 'mikimikiveliki@mikimikiveliki.com', 'password': 'mikimikiveliki1' };

          //alert($scope.userEmail + '   ' + $scope.userPassword);

          var myobjectLogin = { 'username': $scope.userEmail, 'password': $scope.userPassword };


          var payload = Object.toparams(myobjectLogin);
          $scope.PAYLOAD = payload;

          //var byteString = encodeURI($scope.DATAIMAGE.split(':')[1]);

          //alert($scope.DATAIMAGE +'    ' +byteString);

          $http({
              method: 'POST',
              url: 'http://dev.api.gowemy.com/user/login',
              data: payload,
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
              //application/x-www-form-urlencoded'
              , transformRequest: angular.identity
          }).success(function (response) {



              //********** OVO JE TU SAMO ZBOG TESTOVA *******************
              //if ($scope.userEmail == 'Email') {
              //    $rootScope.BETAUSER = 'BETAuser';
              //    $rootScope.BETAUSERID = '91';
              //    $location.url('/partials/get-opinion');
              //}
              //********** ****************************** *******************

              $scope.ODGOVOR = response.data;

              //alert(angular.toJson($scope.ODGOVOR.token));


              //$http.put('datoteka/USERS.json', { "token": $scope.ODGOVOR.token }).success(function (dataUSERSput) {
              //    $scope.dataUSERSput = dataUSERSput;
              //    alert('OK upisao');

              //});

              //var storageType = localStorageService.getStorageType();
              //alert(storageType);

              function submitToken(key, val) {
                  return localStorageService.set(key, val);
                  //alert('OK upisao TOKEN u LOCAL STORAGE');
              }


              function submitID(key, val) {
                  return localStorageService.set(key, val);
                  //alert('upisao ID u LOCAL STORAGE ' + key);
              }

              $http({
                  method: 'GET',
                  url: 'http://dev.api.gowemy.com/user/info',

                  headers: { 'GW-Token': $scope.ODGOVOR.token }
                  //application/x-www-form-urlencoded'

              }).success(function (responsedatainfo) {
                  //alert(angular.toJson(responsedatainfo.data.id) + '  ' + angular.toJson(responsedatainfo.data.username));

                  if (localStorageService.isSupported) {

                      submitID('ID', responsedatainfo.data.id);
                      submitID('USERNAME', responsedatainfo.data.username);
                      //alert('UPISAN ID i username ');
                      submitID('token', $scope.ODGOVOR.token);

                      var lsTOKEN = localStorageService.get('token');
                      var lsID = localStorageService.get('ID');
                      var lsUSERNAME = localStorageService.get('USERNAME');

                      $rootScope.USERTOKEN = lsTOKEN;
                      $rootScope.BETAUSER = lsUSERNAME;
                      $rootScope.BETAUSERID = lsID;

                      // alert('SUPPORTED localstoragetype SVE UPISANO');
                      //alert('Iz locak storagea ' + lsTOKEN + lsUSERNAME + lsID);

                      if ($rootScope.USERTOKEN) {
                          //alert('GOWEMY HELLO ' + angular.toJson(response.user[0].username));
                          //alert('GOWEMY HELLO ' + $rootScope.BETAUSER);

                          //$scope.ODGOVOR = response;

                          //alert(angular.toJson($scope.ODGOVOR.token));

                          //****************
                          //$scope.ODGOVOR1 = response.user[0];

                          //alert($scope.ODGOVOR.token);

                          //$rootScope.BETAUSERID = $scope.ODGOVOR1.userid;
                          $rootScope.mainWemyUrl1 = '46464646464';
                          $location.url('/partials/get-opinion');
                          //alert($scope.ODGOVOR.user.userid);
                      } else { alert('SOMETHING WRONG PLEASE TYPE AGAIN --------'); }




                  }


              }).error(function (errdatainfo) {
                  alert(angular.toJson(errdatainfo));


              });












              //$http.get('datoteka/USERS.json').success(function (dataUSERS) {
              //    $scope.dataUSERS = dataUSERS;
              //    alert('OK ucitao');

              //});



          }).error(function (data) {
              $scope.GRESKA = data;
              alert(angular.toJson(data));

          });

      }
      //****** END FUNCTION CHECH LOGIN *************

      $scope.GOTOSPLASH1 = function () {

          $location.url('/partials/splash-gowemy');
          

      };


  }]);


gowemyAppControllers.controller('signupController', ['$scope', '$http', '$rootScope', '$routeParams', '$location', 'localStorageService', '$window',
  function ($scope, $http, $rootScope, $routeParams, $location, localStorageService, $window) {
      $http.get('datoteka/splashscr.json').success(function (data) {
          $scope.signupData = data;


          $rootScope.winwidth = $(window).width();
          var FontSignupLoginTextBoxes1 = Math.round($rootScope.winwidth / 20);
          $rootScope.FontSignupLoginTextBoxes = FontSignupLoginTextBoxes1.toString() + 'px';

          var HeaderText1 = Math.round($rootScope.winwidth / 18);
          $rootScope.HeaderText = HeaderText1.toString() + 'px';
          $scope.PrikaziDialogGeneral = false;

      });


      $scope.SKOKnaLOGIN = function () {

          $location.url('/partials/signUp2');


      };




      $scope.SIGNUP = function () {

          //********** OVO JE TU SAMO ZBOG TESTOVA *******************
          //if ($scope.USEREMAIL == 'Email') {
          //    $rootScope.BETAUSER = 'BETAuser';
          //    $rootScope.BETAUSERID = '91';
          //    $location.url('/partials/signUp2');  
          //}
          //********** ****************************** *******************


          if ($scope.USERPASSWORD == $scope.CONFIRMUSERPASSWORD) {
              // alert('Usermail  ' + $scope.USEREMAIL + ' Username:  ' + $scope.USERNAME + '  Password  ' + $scope.USERPASSWORD + ' Confirmationpassword: ' + $scope.CONFIRMUSERPASSWORD);

              //*********************************************************************
              //   FORMIRANJE OBJEKTA ZA POST FUNKCIJA OPSTA
              //********************************************************************

              var myobjectRegister = { 'username': $scope.USERNAME, 'password': $scope.USERPASSWORD, 'email': $scope.USEREMAIL };

              Object.toparamsReg = function ObjecttoParams(obj) {
                  var p = [];
                  for (var key in obj) {
                      p.push(key + '=' + encodeURIComponent(obj[key]));
                  }
                  return p.join('&');
              };



              //var myobjectLogin = { 'email': 'mikimikiveliki@mikimikiveliki.com', 'password': 'mikimikiveliki1' };

              //alert($scope.userEmail + '   ' + $scope.userPassword);




              var payload1 = Object.toparamsReg(myobjectRegister);
              //$scope.PAYLOAD1 = payload1;



              $http({
                  method: 'POST',
                  url: 'http://dev.api.gowemy.com/user/register',
                  data: payload1,
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  transformRequest: angular.identity
              }).success(function (responsereg) {

                  //alert(angular.toJson(responsereg));

                  function submitREGISTER(key, val) {
                      return localStorageService.set(key, val);
                      //alert('resetovao podatke' + key);
                  }

                  submitREGISTER('ID', '');
                  submitREGISTER('USERNAME', '');
                  
                  submitREGISTER('token', '');
                  submitREGISTER('email', $scope.USEREMAIL);

                  var lsTOKENresetRegister = localStorageService.get('token');
                  var lsIDresetRegister = localStorageService.get('ID');
                  var lsUSERNAMEresetRegister = localStorageService.get('USERNAME');

                  var lsEMAILresetRegister = localStorageService.get('email');

                  $rootScope.USERTOKEN = lsTOKENresetRegister;
                  $rootScope.BETAUSER = lsUSERNAMEresetRegister;
                  $rootScope.BETAUSERID = lsIDresetRegister;
                  $rootScope.UserEmailtrue = lsEMAILresetRegister;



                  //alert('Registration success. Username: ' + $scope.USERNAME + '  Password: ' + $scope.USERPASSWORD + '   Please Login to confirm registration.');

                  //$scope.PrikaziDialogGeneral=true;


                  $scope.checkLoginAfterRegistration();




                  //$rootScope.BETAUSER = $scope.USERNAME;
                  
              }).error(function (data1) {

                  //alert('SOMETHING WRONG PLEASE TYPE AGAIN');
                  alert(angular.toJson(data1));

              });

          }


          //****** END FUNCTION CHECH REGISTER *************

      };


      //*********************************************************************
      //   LOGIN
      //********************************************************************
      $scope.checkLoginAfterRegistration = function () {



          //*********************************************************************
          //   FORMIRANJE OBJEKTA ZA POST FUNKCIJA OPSTA
          //********************************************************************



          Object.toparams = function ObjecttoParams(obj) {
              var p = [];
              for (var key in obj) {
                  p.push(key + '=' + encodeURIComponent(obj[key]));
              }
              return p.join('&');
          };



          //var myobjectLogin = { 'email': 'mikimikiveliki@mikimikiveliki.com', 'password': 'mikimikiveliki1' };

          //alert($scope.userEmail + '   ' + $scope.userPassword);

          var myobjectLogin = { 'username': $scope.USERNAME, 'password': $scope.USERPASSWORD };


          var payload = Object.toparams(myobjectLogin);
          $scope.PAYLOAD = payload;

          //var byteString = encodeURI($scope.DATAIMAGE.split(':')[1]);

          //alert($scope.DATAIMAGE +'    ' +byteString);

          $http({
              method: 'POST',
              url: 'http://dev.api.gowemy.com/user/login',
              data: payload,
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
              //application/x-www-form-urlencoded'
              , transformRequest: angular.identity
          }).success(function (response) {



              //********** OVO JE TU SAMO ZBOG TESTOVA *******************
              //if ($scope.userEmail == 'Email') {
              //    $rootScope.BETAUSER = 'BETAuser';
              //    $rootScope.BETAUSERID = '91';
              //    $location.url('/partials/get-opinion');
              //}
              //********** ****************************** *******************

              $scope.ODGOVOR = response.data;

              //alert(angular.toJson($scope.ODGOVOR.token));


              //$http.put('datoteka/USERS.json', { "token": $scope.ODGOVOR.token }).success(function (dataUSERSput) {
              //    $scope.dataUSERSput = dataUSERSput;
              //    alert('OK upisao');

              //});

              //var storageType = localStorageService.getStorageType();
              //alert(storageType);

              function submitToken(key, val) {
                  return localStorageService.set(key, val);
                  //alert('OK upisao TOKEN u LOCAL STORAGE');
              }


              function submitID(key, val) {
                  return localStorageService.set(key, val);
                  //alert('upisao ID u LOCAL STORAGE ' + key);
              }

              $http({
                  method: 'GET',
                  url: 'http://dev.api.gowemy.com/user/info',

                  headers: { 'GW-Token': $scope.ODGOVOR.token }
                  //application/x-www-form-urlencoded'

              }).success(function (responsedatainfo) {
                  //alert(angular.toJson(responsedatainfo.data.id) + '  ' + angular.toJson(responsedatainfo.data.username));

                  if (localStorageService.isSupported) {

                      submitID('ID', responsedatainfo.data.id);
                      submitID('USERNAME', responsedatainfo.data.username);
                      //alert('UPISAN ID i username ');
                      submitID('token', $scope.ODGOVOR.token);

                      var lsTOKEN = localStorageService.get('token');
                      var lsID = localStorageService.get('ID');
                      var lsUSERNAME = localStorageService.get('USERNAME');

                      $rootScope.USERTOKEN = lsTOKEN;
                      $rootScope.BETAUSER = lsUSERNAME;
                      $rootScope.BETAUSERID = lsID;

                      // alert('SUPPORTED localstoragetype SVE UPISANO');
                      //alert('Iz locak storagea ' + lsTOKEN + lsUSERNAME + lsID);

                      if ($rootScope.USERTOKEN) {
                          //alert('GOWEMY HELLO ' + angular.toJson(response.user[0].username));
                          //alert('GOWEMY HELLO ' + $rootScope.BETAUSER);

                          //$scope.ODGOVOR = response;

                          //alert(angular.toJson($scope.ODGOVOR.token));

                          //****************
                          //$scope.ODGOVOR1 = response.user[0];

                          //alert($scope.ODGOVOR.token);

                          //$rootScope.BETAUSERID = $scope.ODGOVOR1.userid;
                          $rootScope.mainWemyUrl1 = '46464646464';
                          $location.url('/partials/signUp2');
                          //alert($scope.ODGOVOR.user.userid);
                      } else { alert('SOMETHING WRONG PLEASE TYPE AGAIN --------'); }




                  }


              }).error(function (errdatainfo) {
                  alert(angular.toJson(errdatainfo));


              });












              //$http.get('datoteka/USERS.json').success(function (dataUSERS) {
              //    $scope.dataUSERS = dataUSERS;
              //    alert('OK ucitao');

              //});



          }).error(function (data) {
              $scope.GRESKA = data;
              alert(angular.toJson(data));

          });

      }
      //****** END FUNCTION CHECH LOGIN *************


      $scope.goBackPageSignup1 = function () {
          //alert($rootScope.LOCATIONBEFOREwemy);

          $rootScope.LOCATIONBEFOREwemy = $rootScope.CURRENTLOCATIONwemy;
          $rootScope.CURRENTLOCATIONwemy = '/partials/about-screen';
          $location.url($rootScope.LOCATIONBEFOREwemy);

      }






  }]);


gowemyAppControllers.controller('signUpController2', ['$scope', '$http', '$rootScope', '$routeParams', '$location','$window','localStorageService',
  function ($scope, $http, $rootScope, $routeParams, $location, $window,localStorageService) {


      $http.get('datoteka/splashscr.json').success(function (data) {

          $scope.signupData2 = data;

          //$rootScope.winwidth/;

          var ztempMaska = ($rootScope.winheight/10).toString() + 'px'

          $scope.yMaskaPosition = ztempMaska;

          $scope.VISINASLIKEsgnup2 = ($rootScope.winheight / 4.2).toString() + 'px';


          

          //$rootScope.winwidth = $(window).width();

          //alert('REGISTRACIJA USPELA');


      });

      


          


      $rootScope.UserGender = '1';

      $scope.BrojacSkoka = 0;

      $scope.USERSLIKAPOTVRDA = true;

      $rootScope.BASTASLIKA = '';

      $scope.myPicturesUser = [];
      $scope.$watch('myPicture', function (value) {
          if (value) {
              $scope.myPicturesUser.push(value);
              //alert('Upload u toku sacekaj...' + value);
              //$rootScope.OCENJENASLIKA = $scope.myPicturesUser[0];
              
              $scope.ovaSlikaUser = value;
              $scope.ovaSlikaOBJ = $scope.myPicturesUser[0];
              $scope.imgUserphoto = document.getElementById('stream1');

              var width = $scope.imgUserphoto.clientWidth;
              var height = $scope.imgUserphoto.clientHeight;
              //alert(width + ' ' + height)
              //var width = $scope.imgUserphoto.naturalWidth;
              //var height = $scope.imgUserphoto.naturalHeight;

              //$scope.VISINASLIKEsgnup2= ($rootScope.winheight/7).toString() + 'px';



              if (height < width) {
                  //var LEVOX = Math.round((width / 4)) * (-1);
                  //alert(LEVOX.toString());
                  $scope.RotateImage('stream1', 45);
                  //$scope.MoveImage('stream1', LEVOX);
                  $scope.RotateImage('USERPICTURESLOT', 45);

                  //$('#' + 'USERPICTURESLOT').css(
                  //    'top', '70%'
                  //    //'-webkit-transform': 'rotate(' + deg + 'deg)',  //Safari 3.1+, Chrome  
                  //    //'-moz-transform': 'rotate(' + deg + 'deg)',     //Firefox 3.5-15  
                  //    //'-ms-transform': 'rotate(' + deg + 'deg)',      //IE9+  
                  //    //'-o-transform': 'rotate(' + deg + 'deg)',       //Opera 10.5-12.00  
                  //    //'transform': 'rotate(' + deg + 'deg)'          //Firefox 16+, Opera 12.50+  

                  //);
                  

              } 

          }
      }, true);

      $scope.myPicturesAlbumUser = [];

      $scope.$watch('myPictureAlbum', function (value) {
          if (value) {
              $scope.myPicturesAlbumUser.push(value);
              //alert('Upload u toku sacekaj...' + value);
              //$rootScope.OCENJENASLIKA = $scope.myPicturesAlbumUser[0];

              //$scope.TopSlike = '67%';

              $scope.ovaSlikaUser = value;
              $scope.ovaSlikaOBJ = $scope.myPicturesAlbumUser[0];
              $scope.imgUserphoto = document.getElementById('stream1');

              var width = $scope.imgUserphoto.clientWidth;
              var height = $scope.imgUserphoto.clientHeight;
              //alert(width + ' ' + height);
              //$scope.VISINASLIKEsgnup2 = ($rootScope.winheight / 7).toString() + 'px';


              if (height < width) {

                  //var LEVOX = Math.round((width / 4))* (-1);
                  //alert(LEVOX.toString());
                  $scope.RotateImage('stream1', 45);
                  //$scope.MoveImage('stream1', LEVOX);
                  $scope.RotateImage('USERPICTURESLOT', 45);

          //        angular.element('#USERPICTURESLOT').css(
          //            'top','75%'
          //    //'-webkit-transform': 'rotate(' + deg + 'deg)',  //Safari 3.1+, Chrome  
          //    //'-moz-transform': 'rotate(' + deg + 'deg)',     //Firefox 3.5-15  
          //    //'-ms-transform': 'rotate(' + deg + 'deg)',      //IE9+  
          //    //'-o-transform': 'rotate(' + deg + 'deg)',       //Opera 10.5-12.00  
          //    //'transform': 'rotate(' + deg + 'deg)'          //Firefox 16+, Opera 12.50+  

          //);
                  

              } 


          }
      }, true);






      //$scope.cropUserImage = function () {

      //    var canvas = document.getElementById('myCanvas');
      //    var context = canvas.getContext('2d');
      //    var imageObj = new Image();

      //    imageObj.onload = function () {
      //        // draw cropped image
      //        var sourceX = 150;
      //        var sourceY = 0;
      //        var sourceWidth = 150;
      //        var sourceHeight = 150;
      //        var destWidth = sourceWidth;
      //        var destHeight = sourceHeight;
      //        var destX = canvas.width / 2 - destWidth / 2;
      //        var destY = canvas.height / 2 - destHeight / 2;

      //        context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
      //    };
      //    imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';

      //};







      //$scope.ShootUserPhoto = function () {








      //};


      //$scope.GalleryUserPhoto = function () {








      //};


      function readFileAsBinaryString(file) {
          var reader = new FileReader();
          reader.onloadend = function (evt) {
              var imgData = evt.target.result;
              return imgData;
          };
          reader.onerror = function (evt) {
              alert('OOOOPS ERROR READING FILE');
              // error handlinghttps://community.idolondemand.com/t5/tkb/articleeditorpage/tkb-id/tkb_idol/message-uid/200
          };
          reader.readAsBinaryString(file);
      }



      function dataUriToBlobKKK(dataURI) {
          // serialize the base64/URLEncoded data
          var byteString;
          if (dataURI.split(',')[0].indexOf('base64') >= 0) {
              byteString = atob(dataURI.split(',')[1]);
          }
          else {
              byteString = unescape(dataURI.split(',')[1]);
          }

          // parse the mime type
          var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

          // construct a Blob of the image data
          var array = [];
          for (var i = 0; i < byteString.length; i++) {
              array.push(byteString.charCodeAt(i));
          }
          return new Blob(
              [new Uint8Array(array)],
              { type: mimeString }
          );
      }



      function createObjectURL(file) {
          if (window.webkitURL) {
              return window.webkitURL.createObjectURL(file);
          } else if (window.URL && window.URL.createObjectURL) {
              return window.URL.createObjectURL(file);
          } else {
              return null;
          }
      }


      $scope.ChangeGender = function () {


          if ($rootScope.UserGender == '1') {

              $rootScope.UserGender = '2';

          } else {

              $rootScope.UserGender = '1';

          }



      };


      $scope.RotateImage = function (id, deg) {
          var deg = 90 * deg;
          $('#' + id).css({
              '-webkit-transform': 'rotate(' + deg + 'deg)',  //Safari 3.1+, Chrome  
              '-moz-transform': 'rotate(' + deg + 'deg)',     //Firefox 3.5-15  
              '-ms-transform': 'rotate(' + deg + 'deg)',      //IE9+  
              '-o-transform': 'rotate(' + deg + 'deg)',       //Opera 10.5-12.00  
              'transform': 'rotate(' + deg + 'deg)'          //Firefox 16+, Opera 12.50+  

          });
      };

      $scope.MoveImage = function (id, leftPixels) {
          //var deg = 90 * deg;
          $('#' + id).css({
              '-webkit-transform': 'translate(' + leftPixels + 'px,0px)',  //Safari 3.1+, Chrome  
              '-moz-transform': 'translate(' + leftPixels + 'px,0px)',     //Firefox 3.5-15  
              '-ms-transform': 'translate(' + leftPixels + 'px,0px)',      //IE9+  
              '-o-transform': 'translate(' + leftPixels + 'px,0px)',       //Opera 10.5-12.00  
              'transform': 'translate(' + leftPixels + 'px,0px)'          //Firefox 16+, Opera 12.50+  

          });
      };

      $scope.UploadRegister2Podatke = function () {




          function submitREGISTER2(key, val) {
              return localStorageService.set(key, val);
              //alert('resetovao podatke' + key);
          }

          $rootScope.CountryCode = '1';
          //$rootScope.dialogBirthday = 1901;
          //$rootScope.CountryCode = 1;
          //$rootScope.UserGender = 1;UserEmailtrue

          var pretvaranjedatuma = "'" + $rootScope.dialogBirthday + "'";
          //alert(pretvaranjedatuma.toString());
          //var AABB = $rootScope.dialogBirthday;
          //var AABB1 = $rootScope.CountryCode;
          //var AABB2 = $rootScope.UserGender;
          
          //var AABB3 = $rootScope.UserEmailtrue;
          //var AABB4 = $rootScope.ShortBio;

          var AABB = $scope.dialogBirthday1;
          $rootScope.dialogBirthday = $scope.dialogBirthday1;
          var AABB1 = $rootScope.CountryCode;
          var AABB2 = $rootScope.UserGender;
          if (!$scope.UserEmailtrue) { $scope.UserEmailtrue = 'blabla@gmail.com'; }
          var AABB3 = $scope.UserEmailtrue;
          var AABB4 = $scope.ShortBio1;
          $rootScope.ShortBio = $scope.ShortBio1;


          var AABB5 = $scope.dialogCountry1;

          $rootScope.dialogCountry = AABB5;

          //alert(AABB + AABB1 + AABB2 + AABB3 + AABB4 + AABB5);


          //*********************************************************************
          //   FORMIRANJE OBJEKTA ZA POST FUNKCIJA OPSTA
          //********************************************************************

          var myobjectRegister2 = { 'year_of_birth': AABB, 'country_id': AABB1, 'gender_id': AABB2, 'email': AABB3, 'short_info': AABB4 };

          Object.toparamsReg2 = function ObjecttoParams(obj) {
              var p = [];
              for (var key in obj) {
                  p.push(key + '=' + encodeURIComponent(obj[key]));
              }
              return p.join('&');
          };



          //var myobjectLogin = { 'email': 'mikimikiveliki@mikimikiveliki.com', 'password': 'mikimikiveliki1' };

          //alert($scope.userEmail + '   ' + $scope.userPassword);




          var payload2 = Object.toparamsReg2(myobjectRegister2);
          //$scope.PAYLOAD1 = payload1;

          submitREGISTER2('About', $rootScope.ShortBio);
          submitREGISTER2('Birthday', $rootScope.dialogBirthday);
          submitREGISTER2('Gender', $rootScope.UserGender);
          submitREGISTER2('Country', $rootScope.dialogCountry);
          submitREGISTER2('CountryCode', $rootScope.CountryCode);




          $http({
              method: 'PUT',
              url: 'http://dev.api.gowemy.com/user/',
              data: payload2,
              headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'GW-Token': $rootScope.USERTOKEN },
              transformRequest: angular.identity
          }).success(function (responsereg2) {

              //alert(angular.toJson(responsereg2));


              

              //function submitREGISTER2(key, val) {
              //    return localStorageService.set(key, val);
              //    //alert('resetovao podatke' + key);
              //}

              //submitREGISTER2('About', $rootScope.ShortBio);
              //submitREGISTER2('Birthday', $rootScope.dialogBirthday);
              //submitREGISTER2('Gender', $rootScope.UserGender);
              //submitREGISTER2('Country', $rootScope.dialogCountry);
              //submitREGISTER2('CountryCode', $rootScope.CountryCode);

              //var lsTOKENresetRegister = localStorageService.get('token');
              //var lsIDresetRegister = localStorageService.get('ID');
              //var lsUSERNAMEresetRegister = localStorageService.get('USERNAME');

              //$rootScope.USERTOKEN = lsTOKENresetRegister;
              //$rootScope.BETAUSER = lsUSERNAMEresetRegister;
              //$rootScope.BETAUSERID = lsIDresetRegister;


              $scope.UploadUSERPICTUREend();

              //alert('Registration success. Username: ' + $scope.USERNAME + '  Password: ' + $scope.USERPASSWORD + '   Please Login to confirm registration.');

              //$scope.PrikaziDialogGeneral = true;


              //$rootScope.BETAUSER = $scope.USERNAME;

          }).error(function (data1,error_code) {

              //alert('SOMETHING WRONG PLEASE TYPE AGAIN');
              //alert(angular.toJson(data1) +'   ---   ' +  error_code);
              //alert($rootScope.USERTOKEN);




              //function submitREGISTER2(key, val) {
              //    return localStorageService.set(key, val);
              //    //alert('resetovao podatke' + key);
              //}

              //submitREGISTER2('About', $rootScope.ShortBio);
              //submitREGISTER2('Birthday', $rootScope.dialogBirthday);
              //submitREGISTER2('Gender', $rootScope.UserGender);
              //submitREGISTER2('Country', $rootScope.dialogCountry);
              //submitREGISTER2('CountryCode', $rootScope.CountryCode);

              //var lsTOKENresetRegister = localStorageService.get('token');
              //var lsIDresetRegister = localStorageService.get('ID');
              //var lsUSERNAMEresetRegister = localStorageService.get('USERNAME');

              //$rootScope.USERTOKEN = lsTOKENresetRegister;
              //$rootScope.BETAUSER = lsUSERNAMEresetRegister;
              //$rootScope.BETAUSERID = lsIDresetRegister;
             

              $http({
                  method: 'GET',
                  url: 'http://dev.api.gowemy.com/user/info',

                  headers: { 'GW-Token': $rootScope.USERTOKEN }


              }).success(function (responseUSERINFO) {

                  $scope.ODGOVORUSERINFO = responseUSERINFO;

                  //alert(angular.toJson($scope.ODGOVOROCENJENO) + '  za broj slike  ' + $scope.IDocenjeno);
                  alert(angular.toJson($scope.ODGOVORUSERINFO));
                  

                  //$scope.ODGOVORUSERINFOinfo = responseUSERINFO.data;
                  //alert(angular.toJson($scope.ODGOVORUSERINFOinfo));


                 

                 





                  $scope.UploadUSERPICTUREend();
                  $location.url('/partials/get-opinion');

              }).error(function (dataGreskaUserinfo) {
                  $scope.GRESKAUserinfo = dataGreskaUserinfo;
                  alert('SOMETHING WRONG GO BACK TO REGISTER ' + angular.toJson($scope.GRESKAUserinfo));
                  //$scope.TRUEARCSHOW = true;


              });









          });









          



      };





      $scope.UploadUSERPICTUREend = function() {

          

          ////alert('/*/*/*/*/*//*/*/*/*//*/*/' + TRUEBLOODBLOB);


          ////*******************************************
          ////alert('UPLOAD FILE TRANSFER');
          ////*******************************************

          ////var win =
          function win(r) {
              //alert(r.data);

              $scope.response = r.response;
              //alert(angular.toJson($scope.response) + '====' + angular.toJson($scope.response.data));



              //$rootScope.UserSlikaURLdobijen = $scope.response.data.url;
              //alert($rootScope.UserSlikaURLdobijen);

              var experimentM = r.response;

              var experimentMM = experimentM.split('http:\\/\\/')[1];
              var experimentMMM = experimentMM.split('\"}')[0];

              var experimentMMMMprvi = experimentMMM.split('\\')[0];
              var experimentMMMMdrugi = experimentMMM.split('\\')[1];

              //alert(experimentMMMMprvi + experimentMMMMdrugi);

              var MMMMukupno = "http://" + experimentMMMMprvi + experimentMMMMdrugi;

              alert(MMMMukupno); 
              //$rootScope.IDSLIKEgowemy_idUPLOAD = experimentMMMM;

              $rootScope.UserSlikaURLdobijen = MMMMukupno;

              


              //alert(r.data.status + '  r.data.status ');
              //alert(r.data.data + '  r.data.data ');
              //alert(r.data.data.url + '  data.data.url ');

              //alert(r.data[0].status + '  r.data[0].status ');
              //alert(r.data[0].data + '  r.data[0].data ');
              //alert(r.data[0].data.url + '  r.data[0].data.url ');

              //alert(r.data.status + '  r.data.status ');
              //alert(r.data.data[0] + '  r.data.data[0] ');
              //alert(r.data.data[0].url + '  r.data.data[0].url ');

              //alert(r.data[0].status + '  r.data[0].status ');
              //alert(r.data[0].data[0] + '  r.data[0].data[0] ');
              //alert(r.data[0].data[0].url + '  r.data[0].data[0].url ');


              //alert(angular.toJson(r.response.data.data) + '  link ');
              //alert(angular.toJson(r.response.data.data.url) + '  link ');


              function submitREGISTER2(key, val) {
                  return localStorageService.set(key, val);
                  //alert('resetovao podatke' + key);
              }

              submitREGISTER2('UserSlikaLink', $rootScope.UserSlikaURLdobijen);

              alert($rootScope.UserSlikaURLdobijen + ' ovo je setovano');

              console.log("Sent = " + r.bytesSent);

              $location.url('/partials/get-opinion');


          }


          function fail(error) {
              alert("An error has occurred: Code = " + angular.toJson(error));
              console.log("upload error source " + error.source);
              console.log("upload error target " + error.target);

          }


          //*******************************************

          //var xXX = $scope.ovaSlika.pathname;
          //alert('xXX '+xXX);

          var formURL = 'http://dev.api.gowemy.com/user/profilephoto';
          var encodedURI = encodeURI(formURL);

           var userTokennow = $rootScope.USERTOKEN;

          var file = $scope.TRUEBLOODBLOBUSERpravi;

          

          var fileURI = $scope.ovaSlikaUser;

          //alert(encodedURI + '         ' + file + '         ' + fileURI);

          var imgData = readFileAsBinaryString($scope.TRUEBLOODBLOBUSERpravi);

          //var HASH = $scope.HASHTAG1;
          ////alert(HASH);
          var options = new FileUploadOptions();
          options.fileKey = "file";
          options.fileName = (fileURI.substr(fileURI.lastIndexOf('/') + 1)) + '.jpg';

          options.fileName = 'filename.jpg';
          ////Node at the server side.
          options.mimeType = "image/jpg";
          //options.chunkedMode = false;
          options.chunkedMode = true;
          var headers = { 'GW-Token': userTokennow };

          options.headers = headers;

          options.params = { 'file': imgData };

          ////hashtags[]
          //options.params = { 'file_name': (fileURI.substr(fileURI.lastIndexOf('/') + 1)) + '.jpg', 'file_mime_type': "image/jpeg", 'file1': imgData,'hashtags[]': HASH };

          ////, 'file': imgData
          var ft = new FileTransfer();
          ft.upload(fileURI, encodedURI, win, fail, options);

          ////*******************************************************************************
          ////alert('UPLOAD FILE TRANSFER GOTOVO!!!');
          ////$rootScope.IDSLIKEidwemy22 = '154';

          ////*******************************************************************************




      };


      $scope.UploadUserPhotoUSER = function () {
          $scope.USERSLIKAPOTVRDA = true;
          

          if ($scope.BrojacSkoka>2) {

              $scope.BrojacSkoka = 0;
              $scope.USERSLIKAPOTVRDA = false;
          }

          $scope.BrojacSkoka = $scope.BrojacSkoka + 1;


          //var meinepictureOBJEKAT = document.getElementById('meinepicture');

          //*************************************************************

          $scope.imgUserphoto = document.getElementById('stream1');
          
          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");

          var img = new Image();
          
          var img2 = new Image();
          
          var image44 = new Image();
          

          

          img2.onload = function () {

                     img.onload = function(){


                         
              
              //alert('u KANVASU1');
              canvas.width = img.width;
              canvas.height = img.height;

              var sourceX = 0;
              var sourceY = 0;
              var sourceWidth = canvas.width/1.5;
              var sourceHeight = canvas.height/1.5;
              var destWidth = sourceWidth;
              var destHeight = sourceHeight;
              var destX = canvas.width / 2 - destWidth/2;
              var destY = canvas.height / 2 - destHeight/1.8;
              
              //context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);

              //ctx.beginPath();
              //ctx.fillStyle = "red";
              //ctx.arc(50, 20, 30, 0, 2 * Math.PI);

              

              //ctx.drawImage(img2, sourceWidth / 2.8, sourceWidth / 3.9, destWidth / 1.4, destWidth / 1.4);



              //    ctx.globalCompositeOperation = "source-in";
              //    ctx.drawImage(img, sourceX + (sourceWidth / 4), sourceY + (sourceHeight / 4), sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);



                  //document.getElementById('NEKIKANVAS').appendChild(canvas);
                  
                  ctx.drawImage(img, 0, 0);
                  //ctx.drawImage(img2, 0,0);
                  //iscrtavanje i dodavanje u DOM
                  //ctx.id = 'MOJKANVAS';
                  //alert('u KANVASU2');
                  
              //canvas.setAttribute('style', 'position: fixed; top: 72%; left: 34%; width: 47%; height: auto; opacity: 0.9;');

              
              //document.getElementById('MOJKANVAS').style.top='100px';
              //document.getElementById('MOJKANVAS').style.left = '50px';

                  
                  image44.onload = function () {
                      
              
                      //$scope.response = {
                      //    "status": "OK",
                      //    "error_code": 0,
                      //    "error_message": "",
                      //    "data": {
                      //        "url": "http://duva3aft82tr3.cloudfront.net/aef250f3cb53b496f95467a0af983904.jpg"
                      //    }
                      //};

                      //alert($scope.response.data.url);
                      
                  //image44.id = "pic";

                  //canvas.setAttribute('style', 'position: fixed; top: 60%; left: 35%; z-index: 0; width: 60%; height: auto;');
                  //document.getElementById('NEKIKANVAS').appendChild(image44);
                  
                      var TRUEBLOODBLOBUSER = dataUriToBlobKKK(img.src);

                      $scope.TRUEBLOODBLOBUSERpravi = TRUEBLOODBLOBUSER;

                      var urllll = window.webkitURL.createObjectURL(TRUEBLOODBLOBUSER);
                      

                      var urlUserPhoto = createObjectURL(TRUEBLOODBLOBUSER);
                      $scope.urlUserPhotopravi = urllll;

                      //img55.srcccc = fileEntry.toURL();






                      $rootScope.BASTASLIKA = $scope.ovaSlikaUser;

                      
                      //or however you get a handle to the IMG
                      

                      $rootScope.UserSlikaURLdobijen = '';


                      //alert(urllll + '     ' + urlUserPhoto);
                      //alert($rootScope.BASTASLIKA+ '  OVO                         '+ $scope.ovaSlikaUser);
                      //alert('u KANVASU3');

                      var dataCNVS = img.src;
                      ////alert(dataCNVS);
                      $scope.DATACNVS = dataCNVS;

                      //var TRUEBLOODBLOB1 = dataUriToBlobKKK(dataCNVS);
                      
                      
                      //var agagaga = document.getElementById('USERPICTURESLOT').src;
     
                      //alert(urllll + '     ' + agagaga);
                  };



                  image44.src = canvas.toDataURL("image/jpg", 0.3);


              //function cameraSuccess() {

              //    //alert('POCISCENO');

              //}

              //function cameraError() {

              //    //alert('NIJE POCISCENO');

              //}

              //navigator.camera.cleanup(cameraSuccess, cameraError);


                  };
                     img.src = $scope.ovaSlikaUser;
                        
                     };
                     
          img2.src = $scope.signupData2[58].imageUrl;
          

          //Environment.getExternalStorageState();

          //**************************************************************




          //var onSuccess12 = function (fileEntry) {
          //    $scope.NOVIovaSlika = fileEntry.name;
          //    //alert('OVO JE PRAVA PUTANJA FILEA ' + fileEntry.name);

          //}

          //var onError12 = function (evt) {
          //    alert(evt.target.error.code);
          //}


          //resolveLocalFileSystemURL($scope.ovaSlikaUser, onSuccess12, onError12);



      };






  }]);

//gowemyAppControllers.controller('streamresultsController', ['$scope', '$http', 
//  function ($scope, $http) {
//      $http.get('datoteka/splashscr.json').success(function (data) {
//          $scope.signupData2 = data;


//      });


//  }]);





gowemyAppControllers.controller('resultsMainCtrl', ['$scope', '$http', 'ENDPOINT_URI', 'brojFotke', 'indexSlike',
  function GETSlike($scope, $http, ENDPOINT_URI, brojFotke, indexSlike) {



      $http.get(ENDPOINT_URI + 'results/' + brojFotke[indexSlike]).success(function (data) {

          $scope.wemy = data;
          $scope.wemy.wemy.image = ENDPOINT_URI + 'photo/';

          //$scope.$watch('indexSlike', function (newValue, oldValue) {
          //    brojFotke = $scope.brojFotke;
          //    return indexSlike; + brojFotke[indexSlike])

          //});


      })







      //.error(alert('greska u citanju servera'));
  }


]);

gowemyAppControllers.controller('refresherControl', ['$scope', '$http', '$rootScope', '$routeParams', '$location', function ($scope, $http, $rootScope, $routeParams, $location) {


    
        
        $location.url($rootScope.CURRENTLOCATIONwemy);

    


}]);



gowemyAppControllers.controller('MyCtrl1', ['$scope', '$http', '$rootScope', '$routeParams', '$location', function ($scope, $http, $rootScope, $routeParams, $location) {

    $rootScope.popunjenHASHTAG = false;
    $scope.myPictures = [];
    $scope.$watch('myPicture', function (value) {
        if (value) {
            $scope.myPictures.push(value);
            //alert('Upload u toku sacekaj...' + value);
            $rootScope.OCENJENASLIKA = $scope.myPictures[0];

            $scope.ovaSlika = value;
            $scope.ovaSlikaOBJ = $scope.myPictures[0];

            //alert($rootScope.OCENJENASLIKA+' '+ $scope.ovaSlikaOBJ);
            $scope.DOSLAKSLIKA = true;
            $scope.selectedFile = [];
            $rootScope.popunjenHASHTAG = false;
            $scope.sakriSLIKU = true;
        }
    }, true);

    $scope.myPicturesAlbum = [];

        $scope.$watch('myPictureAlbum', function (value) {
        if (value) {
            $scope.myPicturesAlbum.push(value);
            //alert('Upload u toku sacekaj...' + value);
            $rootScope.OCENJENASLIKA = $scope.myPicturesAlbum[0];

            $scope.ovaSlika = value;
            $scope.ovaSlikaOBJ = $scope.myPicturesAlbum[0];

            //alert($rootScope.OCENJENASLIKA+' '+ $scope.ovaSlikaOBJ);
            $scope.DOSLAKSLIKA = true;
            $scope.selectedFile = [];
            $rootScope.popunjenHASHTAG = false;
            $scope.sakriSLIKU = true;
        }
    }, true);





        $scope.goToPageresults = function (pathUrl) {
            $rootScope.LOCATIONBEFOREwemy = $rootScope.CURRENTLOCATIONwemy;
        $rootScope.CURRENTLOCATIONwemy = '/partials/results';
        $location.url(pathUrl);



    }

    $scope.REFRESHresults = function () {

        //alert($rootScope.HASHTAG);
        //$location.url('/partials/streamresults');
        $rootScope.popunjenHASHTAG = false;
        $scope.DOSLAKSLIKA = false;

        $rootScope.CURRENTLOCATIONwemy = '/partials/results';
        $location.url('/partials/REFRESHER');

    };

    $scope.HashGotovOtkriGETOPINION = function () {

        //alert($rootScope.HASHTAG);
        //$location.url('/partials/streamresults');
        $rootScope.popunjenHASHTAG = true;

    };



    //$scope.uploadFile = function (files) {
    //    //$http.post("https://api.parse.com/1/files/image.jpg", files[0], {
    //    //    withCredentials: false,
    //    //    headers: {
    //    //        'X-Parse-Application-Id': PARSE_KEYS.APP_ID,
    //    //        'X-Parse-REST-API-Key': PARSE_KEYS.REST_API,
    //    //        'Content-Type': 'image/jpeg'
    //    //    },
    //    //    transformRequest: angular.identity
    //    //}).then(function (data) {

    //    //});



    //    //alert($scope.logoFile);
    //};


    //$scope.uploadLogo = function (logoFile) {
    //    API.uploadLogo(logoFile).success(function (uploadResponse) {
    //        // Handle response from server
    //        //alert(uploadResponse);
    //    }).error(function (error) {
    //        // Handle error from server
    //        //alert(error);
    //    });
    //};



    //function dataURItoBlob(dataURI) {
    //    var binary = dataURI;
    //    var array = [];
    //    for (var i = 0; i < binary.length; i++) {
    //        array.push(binary.charCodeAt(i));
    //    }
    //    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    //}


    //function dataURLtoBlob1(dataurl) {
    //    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    //        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    //    while (n--) {
    //        u8arr[n] = bstr.charCodeAt(n);
    //    }
    //    return new Blob([u8arr], { type: mime });
    //}


    //function dataURItoBlob2(dataURI, mime) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs

    //var byteString = window.atob(dataURI);

    // separate out the mime component


    // write the bytes of the string to an ArrayBuffer
    //var ab = new ArrayBuffer(byteString.length);
    //var ia = new Uint8Array(byteString.length);
    //for (var i = 0; i < byteString.length; i++) {
    //    ia[i] = byteString.charCodeAt(i);
    //}

    // write the ArrayBuffer to a blob, and you're done
    //    var blob = new Blob([ia], { type: mime });

    //    return blob;
    //}





    //function testalert(a) {


    //    var beee = a + 'test';
    //    return beee;
    //}


    //$scope.onFileSelect = function ($files) {

    //    $scope.selectedFile = $files;
    //};


    function readFileAsBinaryString(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            var imgData = evt.target.result;
            return imgData;
        };
        reader.onerror = function (evt) {
            alert('OOOOPS ERROR READING FILE');
            // error handlinghttps://community.idolondemand.com/t5/tkb/articleeditorpage/tkb-id/tkb_idol/message-uid/200
        };
        reader.readAsBinaryString(file);
    }



    function dataUriToBlobKKK(dataURI) {
        // serialize the base64/URLEncoded data
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = unescape(dataURI.split(',')[1]);
        }

        // parse the mime type
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

        // construct a Blob of the image data
        var array = [];
        for (var i = 0; i < byteString.length; i++) {
            array.push(byteString.charCodeAt(i));
        }
        return new Blob(
            [new Uint8Array(array)],
            { type: mimeString }
        );
    }





    $scope.UPLOADPICTURE = function () {

        

        $('input[id$=inputUserId]').val('40');




        //var meinepictureOBJEKAT = document.getElementById('meinepicture');

        //*************************************************************



        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            var dataCNVS = canvas.toDataURL("image/jpeg", 0.9);
            //alert(dataCNVS);
            $scope.DATACNVS = dataCNVS;
            var TRUEBLOODBLOB = dataUriToBlobKKK(dataCNVS);
            $scope.TrueBlood = TRUEBLOODBLOB;
            //alert('/*/*/*/*/*//*/*/*/*//*/*/' + TRUEBLOODBLOB);


            //*******************************************
            //alert('UPLOAD FILE TRANSFER');
            //*******************************************

            //var win =
            function win(r) {
                $rootScope.dataUploada = angular.toJson(r.response);

                //var experimentM = '/*/*/*/*/gowemy_id":\"2\"}}"';

                //var experimentMM = experimentM.split('gowemy_id')[1];
                //var experimentMMM = experimentMM.split('":\"')[1];
                //var experimentMMMM = experimentMMM.split('\"}}"')[0];
                //alert(experimentMMMM);


                var experimentM = r.response;

                var experimentMM = experimentM.split('gowemy_id')[1];
                var experimentMMM = experimentMM.split('":\"')[1];
                var experimentMMMM = experimentMMM.split('\"}')[0];
                //alert(experimentMMMM);

                
                $rootScope.IDSLIKEgowemy_idUPLOAD = experimentMMMM;


                
                //alert(angular.toJson(r.response) + 'ID ');


                //alert("Response1 = " + angular.toJson(r[0].idwemy));
                //alert("Response2 = " + angular.toJson(r.wemy[0].idwemy));
                //alert("Response3 = " + angular.toJson(r.response[0].idwemy));
                //alert("Response4 = " + angular.toJson(r.response.wemy[0].idwemy));
                console.log("Sent = " + r.bytesSent);
                //$rootScope.IDSLIKEidwemy22 = r.wemy[0].idwemy;
            }

            //var fail =
            function fail(error) {
                alert("An error has occurred: Code = " + angular.toJson(error));
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
                //$rootScope.IDSLIKEidwemy22 = '154';
            }


            //*******************************************

            //var xXX = $scope.ovaSlika.pathname;
            //alert('xXX '+xXX);

            var formURL = 'http://dev.api.gowemy.com/user/uploadgowemy';
            var encodedURI = encodeURI(formURL);
            var file = $scope.TrueBlood;
            var fileURI = $scope.ovaSlika;
            var imgData = readFileAsBinaryString(TRUEBLOODBLOB);
            
            var HASH = $scope.HASHTAG1;
            //alert(fileURI);
            $rootScope.HASHTAG = HASH;
            var options = new FileUploadOptions();
            options.fileKey = "file1";
            options.fileName = (fileURI.substr(fileURI.lastIndexOf('/') + 1)) + '.jpg';

            //options.fileName = 'filename.jpg';
            //Node at the server side.
            options.mimeType = "image/jpeg";
            //options.chunkedMode = false;
            options.chunkedMode = true;
            var headers = { 'GW-Token': $rootScope.USERTOKEN };

            options.headers = headers;

            options.params = { 'file_name': (fileURI.substr(fileURI.lastIndexOf('/') + 1)) + '.jpg', 'file_mime_type': "image/jpeg", 'file1': imgData,'hashtags[]': HASH };

            //hashtags[]


            //, 'file': imgData
            var ft = new FileTransfer();
            ft.upload(fileURI, encodedURI, win, fail, options);

            //*******************************************************************************
            //alert('UPLOAD FILE TRANSFER GOTOVO!!!');
            //$rootScope.IDSLIKEidwemy22 = '154';

            //*******************************************************************************




            function cameraSuccess() {

                //alert('POCISCENO');

            }

            function cameraError() {

                //alert('NIJE POCISCENO');

            }

            navigator.camera.cleanup(cameraSuccess, cameraError);



        };
        img.src = $scope.ovaSlika;


        //**************************************************************






        //var blobB2 = new Blob([meinepictureOBJEKAT], { 'type': "image/jpeg" });
        //alert('BLOB JE  ' + meinepictureOBJEKAT.toString());

        //var btoaID = window.btoa('41');
        //var blobID = new Blob([btoaID], { 'type': 'text/plain' });

        //alert($scope.ovaSlika + '---' + splitter + '--- ' + imageDataMoj2 + ' ---od 41--- ' + btoaID + '  btoa-- ' + btoaFILE + ' atob file-- ' + atobFile);



        //reader.readAsArrayBuffer(blobB2);

        //alert('arraybuffer je  ' + $scope.csvFile.toString());


        // ArrayBuffer -> Blob
        //var uint8Array = new Uint8Array(meinepictureOBJEKAT);
        //var arrayBuffer = uint8Array.buffer;
        //var blobBLOB = new Blob([arrayBuffer], { 'type': "image/jpeg" });

        //alert('uint8Array ' + uint8Array + ' arrayBuffer  ' + arrayBuffer + ' blobBLOB  ' + blobBLOB);
        //$scope.uint8Array = uint8Array;
        //$scope.arrayBuffer = arrayBuffer;
        //$scope.blobBLOB = blobBLOB;


        //var NOVIBLOB1 = dataURItoBlob(btoaFILE);
        //$scope.blobBLOB2 = NOVIBLOB1;

        //var fileStream = new FileReader().readAsArrayBuffer($scope.ovaSlika);
        //var fileBlob = new Blob([fileStream]);

        //var postObject = new FormData();
        //postObject.append('userid', JSON.stringify('41'));

        //postObject.append('userid', blobID);
        //postObject.append('userPhoto', NOVIBLOB1);

        //, 'image.jpg'





        //$http({
        //    url: 'http://188.166.27.237/gowemy/',
        //enctype:'multipart/form-data',
        //method: 'POST',
        //data: postObject,


        //$.param(requestData),


        //headers: {
        //    'Content-Type': 'multipart/form-data, boundary=='
        //},
        //application/x-www-form-urlencoded
        //undefined
        //transformRequest: function (data, headersGetterFunction) {
        //    return data;
        //}
        // do nothing! FormData is very good!

        //    transformRequest: angular.identity



        //}).success(function (response) {

        //    $scope.response = response;
        //    alert('USPELO' + $scope.response);
        //}).error(function (error) {
        //    $scope.error = error;
        //    alert('NIJE USPELO ' + $scope.error);
        //});






        var onSuccess12 = function (fileEntry) {
            $scope.NOVIovaSlika = fileEntry.name;
            //alert('OVO JE PRAVA PUTANJA FILEA ' + fileEntry.name);

        }

        var onError12 = function (evt) {
            alert(evt.target.error.code);
        }


        resolveLocalFileSystemURL($scope.ovaSlika, onSuccess12, onError12);

        //var fileURLLLL = $scope.ovaSlika.toURL;
        //alert('******************  ' + $scope.NOVIovaSlika);










        //$.ajax({
        //    url: 'http://188.166.27.237/gowemy/',
        //    data: postObject,
        //    cache: false,
        //    contentType: false,
        //    processData: false,
        //    type: 'POST',
        //    success: function (response) {
        //        deferred.resolve(response);
        //        $rootScope.requestInProgress = false;
        //        alert(response);
        //    },
        //    error: function (error) {
        //        deferred.reject(error);
        //        $rootScope.requestInProgress = false;
        //        alert(error);
        //    }
        //});




        //var xhr = new XMLHttpRequest();
        //var SLANJE = sendForm();
        //alert(SLANJE);

        //function sendForm() {
        //    var formData = new FormData();
        //    formData.append('userid', '40');
        //    formData.append('userPhoto', imageToPost);

        //    var xhr = new XMLHttpRequest();
        //    xhr.open('POST', 'http://188.166.27.237/gowemy/', true);
        //    xhr.onload = function (e) {
        //        if (this.status == 200) {
        //            alert('ODGOVOR '+ this.response);
        //        }
        //    };

        //    xhr.send(formData);
        //};


        //var xhrForm = new XMLHttpRequest();

        //xhrForm.open("POST", "http://188.166.27.237/gowemy/");

        //xhrForm.send(postObject);

        //$rootscope.IDSLIKEidwemy = '154';
        $location.url('/partials/punjenje');

    };
    //$scope.$watch('upLoadPicture', function (value) {
    //    alert($scope.myPictures.push(value));
    //}, true);
}]);






gowemyAppControllers.controller("HttpController", ['$scope', '$resource', 'ENDPOINT_URI',
		function ($scope, $resource, ENDPOINT_URI) {
		    //
		    // GET Action Method
		    //
		    var User = $resource(ENDPOINT_URI + 'results/:userId', { userId: '@userId' });
		    User.get({ userId: 50 }, function (user) {
		        $scope.profile = user;
		    })
		    //
		    // Query Action Method
		    //
		    //var Stream = $resource(ENDPOINT_URI+'stream');
		    //Stream.query(function (stream) {
		    //    $scope.stream = stream;
		    //    alert(ENDPOINT_URI + 'stream');
		    //});
		}]);

gowemyAppControllers.controller("PostIndexCtrl", function ($scope, $http, Post, $window, $rootScope, $routeParams, $location, $timeout) {
    Post.query(function (data) {
        $scope.stream = data;
        //$scope.stream.stream.image = $scope.stream.public_url;
        //$rootScope.RefreshStreamLUK = false;
        //alert('koji ti je');
        //alert(angular.toJson($scope.stream));
        $scope.styleNE = false;
        $scope.styleDa = false;
        $scope.PORUKAUSERUnemastrema = true;
        $scope.GOTOVAANIMACIJASLIKE = true;

        //$scope.currentColor1 = 'url(#gradient)';
        //$scope.getColor1 = function () {
        //    return $scope.gradient ? 'url(#gradient)' : $scope.currentColor1;
        //};

        //$scope.x = Math.round(($rootScope.winwidth / 2) - ($rootScope.KRUGPRECNIK));
        //$scope.y = Math.round(($rootScope.winheight / 2) - ($rootScope.KRUGPRECNIK));

        var cnttxte = 0;
        var countDownerStream, countDownStream = 0;
        countDownerStream = function () {
            if (countDownStream > 2) {
                $("#warning").fadeOut(2000);
                countDownStream = 2;
                $rootScope.RefreshStreamLUK = false;
                $rootScope.RefreshStream = false;
                //$rootScope.CURRENTLOCATIONwemy = '/partials/punjenje';
                //$location.url('/partials/60secresult');
                return; // quit
            } else {
                //$scope.countDown_text = countDownStream; // update scope
                $scope.countDownStream_text = cnttxte + '%';
                countDownStream++; // +1
                cnttxte = cnttxte + 50;
                
                $timeout(countDownerStream, 300); // loop it again
            }
        };

        
        
        //$scope.countDownStream_text = cnttxte.toString() + ' %';
        countDownerStream();








        
        var brElemenata = 0;
        //$rootScope.USERTOKEN
        for (elStr in $scope.stream.data) {
            //alert(brElemenata);
            brElemenata++;

        }


        $scope.brojacStreama = brElemenata;

        if ($scope.brojacStreama == 0) {
            $scope.PORUKAUSERUnemastrema = true;

        } else {
            $scope.PORUKAUSERUnemastrema = false;
        }
        
    //    var elementff = document.getElementById('maskaDiamond');
    //    var hammertime = Hammer(elementff).on("dragright", function (event) {
    //    alert('hello!');
    //});





        
        $scope.streamSlikaTrenutna = 0;

        $scope.StilLevoDesno = 'bounceInLines';



        //$scope.pageClass = 'page-about';

        $scope.showActions = false;



    });



    $scope.goToPage = function (pathUrl) {
        $rootScope.CURRENTLOCATIONwemy = '/partials/streamresults';
        $location.url(pathUrl);



    }





    $scope.StreamslikaLevo = function () {


        $scope.streamSlikaTrenutna++;
        $scope.StilLevoDesno = 'bounceInLines';

        $scope.styleNE = false;
            $scope.styleDa = false;

        if ($scope.streamSlikaTrenutna >= ($scope.brojacStreama - 1)) {
            $scope.streamSlikaTrenutna = ($scope.brojacStreama - 1);
            //$scope.StilLevoDesno = 'bounceOutSlide';
            $scope.showActions = !$scope.showActions;
            
        }



        $scope.showActions = false;




    };

    $scope.StreamslikaDesno = function () {



        $scope.streamSlikaTrenutna--;
        $scope.StilLevoDesno = 'bounceInLines';
        
        $scope.styleNE = false;
        $scope.styleDa = false;

        if ($scope.streamSlikaTrenutna <= 0) {
            $scope.streamSlikaTrenutna = 0;
            //$scope.StilLevoDesno = 'bounceInSlide';

        }

        $scope.showActions = true;




    };


    $scope.ocenaNe = function () {


        $scope.IDtrenutno = $scope.stream.data[$scope.streamSlikaTrenutna].gowemy_id;
        //alert($scope.IDtrenutno);
        var NEocenaUrl = 'http://dev.api.gowemy.com/vote/minus';




        //*********************************************************************
        //   FORMIRANJE OBJEKTA ZA POST FUNKCIJA OPSTA MINUS
        //********************************************************************



        Object.toparamsMinus = function ObjecttoParams(obj) {
            var p = [];
            for (var key in obj) {
                p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
        };



        var myobjectMinus = { 'gowemy_id': $scope.IDtrenutno };


        var payloadMINUS = Object.toparamsMinus(myobjectMinus);
        $scope.PAYLOADMINUS = payloadMINUS;

        //alert(angular.toJson($scope.PAYLOADMINUS));

        $http({
            method: 'POST',
            url: NEocenaUrl,
            data: payloadMINUS,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'GW-Token': $rootScope.USERTOKEN }
            //application/x-www-form-urlencoded'
            , transformRequest: angular.identity
        }).success(function (responseminus) {

            $scope.ODGOVORminus = responseminus;

            //$scope.$apply(function () {
            //    $scope.styleNE = true;

            //});

            $scope.styleNE = true;

            $scope.SAKRIDONJU = false;
            //alert(angular.toJson($scope.ODGOVORminus) + '  za broj slike  ' + $scope.IDtrenutno);

            $scope.streamSlikaTrenutna = $scope.streamSlikaTrenutna + 1;
            //$scope.$apply(function () {
            //    $scope.styleNE = false;
            //    $scope.styleDa = false;

            //});
            

            //$scope.styleNE = false;
            //        $scope.styleDa = false;


            if ($scope.streamSlikaTrenutna > ($scope.brojacStreama-2)) {

                //$scope.SAKRIDONJU = true;
                


            }

            

            if ($scope.streamSlikaTrenutna > ($scope.brojacStreama - 1)) {


                                $scope.styleNE = false;
                    $scope.styleDa = false;

                    $rootScope.RefreshStream = true;
                    $location.url('partials/get-opinion');

                //Post.query(function (data) {
                //    $scope.stream = data;

                    
                //    $scope.styleNE = false;
                //    $scope.styleDa = false;
                    


                //    //var brElemenata = 0;

                //    //for (elStr in $scope.stream.data) {

                //    //    brElemenata++;

                //    //}
                //    //$scope.brojacStreama = brElemenata;
                //    //$scope.streamSlikaTrenutna = 0;
                //    //$rootScope.RefreshStreamLUK = false;
                //    $rootScope.RefreshStream = true;
                //    $location.url('partials/get-opinion');
                    

                //});

            }


            //$scope.styleNE = false;
            //$scope.styleDa = false;
            //angular.element('follow1').controller('PostIndexCtrl').$render();
            

        }).error(function (dataminus) {
            $scope.GRESKAminus = dataminus;
            alert('SOMETHING WRONG PLEASE VOTE AGAIN ' + angular.toJson($scope.GRESKAminus));

        });
        
        //$scope.styleNE = false;
        //$scope.styleDa = false;
    }

    $scope.ocenaDa = function () {


        $scope.IDtrenutno = $scope.stream.data[$scope.streamSlikaTrenutna].gowemy_id;
        //alert($scope.IDtrenutno);
        var DAocenaUrl = 'http://dev.api.gowemy.com/vote/plus';


        //*********************************************************************
        //   FORMIRANJE OBJEKTA ZA POST FUNKCIJA OPSTA MINUS
        //********************************************************************



        Object.toparamsPlus = function ObjecttoParams(obj) {
            var p = [];
            for (var key in obj) {
                p.push(key + '=' + encodeURIComponent(obj[key]));
            }
            return p.join('&');
        };



        var myobjectPlus = { 'gowemy_id': $scope.IDtrenutno };


        var payloadPLUS = Object.toparamsPlus(myobjectPlus);
        $scope.PAYLOADPLUS = payloadPLUS;

        //alert(angular.toJson($scope.PAYLOADMINUS));

        $http({
            method: 'POST',
            url: DAocenaUrl,
            data: payloadPLUS,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'GW-Token': $rootScope.USERTOKEN }
            //application/x-www-form-urlencoded'
            , transformRequest: angular.identity
        }).success(function (responseplus) {

            $scope.ODGOVORplus = responseplus;


            //$scope.$apply(function () {
            //    $scope.styleDa = true;

            //});
            $scope.SAKRIDONJU = false;
            $scope.styleDa = true;

            //alert(angular.toJson($scope.ODGOVORplus) + '  za broj slike  ' + $scope.IDtrenutno);

            $scope.streamSlikaTrenutna = $scope.streamSlikaTrenutna + 1;

            //$scope.$apply(function () {
            //    $scope.styleNE = false;
            //    $scope.styleDa = false;

            //});
            
            

            if ($scope.streamSlikaTrenutna > ($scope.brojacStreama-2)) {

                //$scope.SAKRIDONJU = true;

            }

            if ($scope.streamSlikaTrenutna > ($scope.brojacStreama - 1)) {

                $scope.styleNE = false;
                $scope.styleDa = false;
                $rootScope.RefreshStream = true;
                $location.url('partials/get-opinion');


                //Post.query(function (data) {
                //    $scope.stream = data;

                //    $scope.styleNE = false;
                //    $scope.styleDa = false;


                //    //var brElemenata = 0;

                //    //for (elStr in $scope.stream.data) {

                //    //    brElemenata++;

                //    //}
                //    //$scope.brojacStreama = brElemenata;
                //    //$scope.streamSlikaTrenutna = 0;
                //    //$rootScope.RefreshStreamLUK = false;
                //    $rootScope.RefreshStream = true;
                //    $location.url('partials/get-opinion');


                //});

            }
            

            //$scope.styleNE = false;
            //$scope.styleDa = false;
            //angular.element('follow1').controller('PostIndexCtrl').$render();

        }).error(function (dataplus) {
            $scope.GRESKAplus = dataplus;
            alert('SOMETHING WRONG PLEASE VOTE AGAIN ' + angular.toJson($scope.GRESKAplus));

        });

        //$scope.styleNE = false;
        //$scope.styleDa = false;

    }

    

});





//gowemyAppControllers.controller('getOpinionCtrl', ['$scope', '$http', 'Camera',
//function picturePageCtrl($scope, Camera) {
//    $scope.takepic = function() {
//        // I'd like to push this into an array of "pics" here.
//        // but it is hard to push() with promises.

//        $scope.myPictures = [];
//        $scope.$watch('myPicture', function (value) {
//            if (value) {
//                myPictures.push(value);
//            }
//        }, true);


//        Camera.getPic();
//    }

//  }]);

//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
//  function ($scope, $routeParams, $http) {
//      $http.get('phoness/' + $routeParams.phoneId + '.json').success(function (data) {
//          $scope.phone = data;
//          $scope.mainImageUrl = data.images[0];
//      });
//      $scope.setImage = function (imageUrl) {
//          $scope.mainImageUrl = imageUrl;
//      };

//  }]);



//phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function ($scope, Phone) {
//    $scope.phones = Phone.query();
//    $scope.orderProp = 'age';
//}]);

//phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function ($scope, $routeParams, Phone) {
//    $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
//        $scope.mainImageUrl = phone.images[0];
//    });

//    $scope.setImage = function (imageUrl) {
//        $scope.mainImageUrl = imageUrl;
//    }
//}]);