﻿var cashCoopan = angular.module('cashCoopan', ['ui.router',
                                                        'ui.bootstrap',
                                                        '720kb.datepicker',
                                                        'oitozero.ngSweetAlert',
                                                        'cfp.loadingBar',
                                                        'ngImgCrop',
                                                        'ngFileUpload',
                                                        'ngSanitize',
                                                        'btorfs.multiselect',
                                                        'toaster',
                                                        'ngTable'])

// Factory
.factory('$cashCoopan', mainFactory)

// Fiter for convert into INR
.filter('INR', function () {
    return function (input) {
        if (!isNaN(input)) {
            //var output = Number(input).toLocaleString('en-IN');   <-- This method is not working fine in all browsers!           
            var result = input.toString().split('.');

            var lastThree = result[0].substring(result[0].length - 3);
            var otherNumbers = result[0].substring(0, result[0].length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

            if (result.length > 1) {
                output += "." + result[1].substring(0, 2);
            } else {
               // output += ".00";
            }

            return output;
        }
    }
})

//.directive('timePickerInit', function () {
//    return {
//        scope: {},
//        link: function (scope, element, attrs) {
//            console.log(scope, element, attrs);
//            if (scope.$parent.$last) {
//                $('.time-init').timepicker();
//            }
//        }
//    };
//})
