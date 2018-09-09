function isObjectEmpty(obj) {
    var isEmpty = Object.keys(obj).length === 0 && obj.constructor === Object;
    return isEmpty;
}

cashCoopan

/*
    * .run()
    * Handle common AJAX stuff
    */
.run(function (cfpLoadingBar, $cashCoopan, $rootScope) {

    ///* Show loading spinner whenever an AJAX API request starts. */
    //$(document).ajaxStart(function () {
    //    cfpLoadingBar.start();
    //});

    ///* Hide loading spinner whenever an AJAX API request is completed. */
    //$(document).ajaxComplete(function () {
    //    cfpLoadingBar.complete();
    //});

    /* Show loading spinner whenever a state change starts. */
    $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
            cfpLoadingBar.start();
        }
    );

    /* Hide loading spinner whenever a state change ends. */
    $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams) {
            cfpLoadingBar.complete();
            window.scrollTo(0, 0);
        }
    );

})

// Config provider
.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

     // Login
    .state('login', {
        url: '/login',
        templateUrl: 'Html/Pages/login.html',
        controller: 'loginController'
    })
    

   
    var defaultState = '/login';
    var loginCookie = window.localStorage.getItem('pm_info');
    if (loginCookie != null && loginCookie != "") {
        var loginCookieVal = JSON.parse(loginCookie);
        if (!isObjectEmpty(loginCookie) && loginCookie.tokenID != "") {
            defaultState = loginCookieVal ? '/adminPanel' : '/login'
            //: loginCookieVal.isCompanyAdmin
            //    ? '/profile/' + loginCookieVal.companyID
            //    : '/inquiries';
        }
    }

    $urlRouterProvider.otherwise(defaultState);

});