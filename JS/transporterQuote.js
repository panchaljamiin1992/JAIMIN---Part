﻿transporterQuote

// #region "Main"

.controller("mainController", function ($scope, $state, $uibModal, $transporterQuote, toaster) {

    // #region "Variables"

    // Password variables
    $scope.password = {
        newPassword: "",
        confirmPassword: "",
        oldPassword: ""
    }

    $scope.pm_personInfo = {
        userID: 0,
        tokenID: ""
    };

    //$scope.companyName = '';
    //$scope.configValues = [];
    $scope.isClick = false;

    //$scope.currentUserRights = {};

    $scope.pm = {
        showHeader: true,
        pageHeader: "",
        productName: "Transporter Quote",
        isMobileBrowser: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        fromInside: true
    }

    $scope.$watch(function () {
        return $transporterQuote.pm_personInfo;
    }, function (newVal, oldVal) {
        $scope.pm_personInfo = newVal;
    });

    // Check if cookie exists.  If yes, get info from token.
    var goToLogin = true;
    var loginCookie = window.localStorage.getItem('pm_info');
    if (loginCookie != null && loginCookie != "") {
        var loginCookieVal = JSON.parse(loginCookie);
        if (!isObjectEmpty(loginCookie) && loginCookie.tokenID != "") {
            $transporterQuote.getLoginInformation();
            $scope.pm_personInfo = $transporterQuote.pm_personInfo;
            goToLogin = false;
        }
    }

    // #endregion

    // #region "Functions"

    // #region "Change password"

    // closeChangePasswordPop - Close change password popup.
    $scope.closeChangePasswordPop = function () {
        $scope.password.newPassword = "";
        $scope.password.confirmPassword = "";
        $scope.password.oldPassword = "";
        modalChangePassword.close();
    }
    // #endregion

    // Go to login 
    // $state.go("login");

    // openMenu() - Open menu
    $scope.openMenu = function () {
        $scope.showMenu = !$scope.showMenu;
        if ($scope.showMenu && (document.getElementById('menuDD').style.display == 'none' || document.getElementById('menuDD').style.display == "")) {
            document.getElementById('menuDD').style.display = 'block';
            $scope.isClick = false;
        }
        else {
            document.getElementById('menuDD').style.display = 'none';
        }
    }

    // On click hide menu
    $(window).click(function () {
        //Hide the menus if visible
        if ($scope.isClick) {
            if (document.getElementById('menuDD').style.display == 'block') {
                document.getElementById('menuDD').style.display = 'none';
            }
        } else {
            $scope.isClick = true;
            $scope.showMenu = false;
        }
    });

    // actionLogout() - Logout from system
    $scope.actionLogout = function () {

        var myParams = {
            userID: $scope.pm_personInfo.userID
        }

        $transporterQuote.callAPI5(
            '/api/login/logout',
            myParams,
            function (apiResponse) {
                $("#loader").hide();
                $transporterQuote.bye();
            },
            function (apiError) {
                $("#loader").hide();
                console.log(apiError.message);
            },
            function (apiFailure) {
                toaster.warning(apiFailure);
            }
        );
    }

    // getConfigValue() - Get config value
    var getConfigValue = function () {
        var myParams = {}

        $transporterQuote.callAPI5(
            '/api/gen/config/get',
            myParams,
            function (apiResponse) {
                $scope.configValues = apiResponse.data;
                console.log($scope.configValues);

                angular.forEach($scope.configValues, function (item, key) {
                    if (String(item.Field).toLowerCase() == String("CompanyName").toLowerCase()) {
                        $scope.companyName = item.Value;
                    }
                })
                return;
                console.log($scope.companyName);
            },
            function (apiError) {
                console.log(apiError.message);
            },
            function (apiFailure) {
                toaster.warning(apiFailure);
            }
        );
    }


})

// #endregion

// #region "Login"
.controller("loginController", function ($scope, $state, $transporterQuote, toaster) {

    // #region "Variables"
    var infoCookie = window.localStorage.getItem('pm_info');
    if (infoCookie != null) {
        $transporterQuote.bye();
    }
    $scope.userName = '';
    $scope.password = '';

    // #endregion

    // #region "Functions"

    // actionLogin() - Verify user and access into system
    $scope.actionLogin = function () {
        if ($scope.userName == "" || $scope.password == "") {
            toaster.error("Please enter valid credentials.");
            return;
        }

        var myParams = {
            userName: $scope.userName,
            password: $scope.password
        }
        $transporterQuote.callAPI5(
            '/api/login/login',
            myParams,
            function (apiResponse) {

                if (apiResponse.data.isSuperAdmin) {
                    $state.go('adminPanel');
                }
                else {
                    $state.go('reqForQuote');
                }
                var personInfo = apiResponse.data;
                //console.log("PERSONINFO: " + personInfo.toString());
                window.localStorage.setItem('pm_info', JSON.stringify(personInfo));

                $transporterQuote.getLoginInformation();
                $scope.pm_personInfo = $transporterQuote.pm_personInfo;
                $scope.pm_personInfo.userID = $transporterQuote.pm_personInfo.userID;


            },
            function (apiError) {
                toaster.error("Please enter valid credentials.");
                console.log(apiError.message);
            },
            function (apiFailure) {
                toaster.warning(errorStr + "1");
            }
        );
    }

    // forgotPassword() - Reset password 
    $scope.forgotPassword = function () {
        if ($scope.userName == null || $scope.userName == "") {
            toaster.info("Please enter email address.");
            return;
        }

        var myParams = {
            email: $scope.userName
        }

        $transporterQuote.callAPI5('/api/login/password/forgot',
            myParams,
            function (apiResponse) {
                // console.log(apiResponse.data);
                toaster.success(apiResponse.message);
            }, function (apiError) {
                toaster.error(apiError.message);
                console.log(apiError.message);
            },
            function (apiFailure) {
                toaster.warning(errorStr + "2");
            })
    }

    // #endregion

})
// #endregion



