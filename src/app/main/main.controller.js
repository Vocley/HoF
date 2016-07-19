(function() {
    'use strict';

    angular
        .module('houseoffraser')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController() {
        var vm = this;

        vm.isBannerVisible = true;

        vm.hideBanner = function() {
            vm.isBannerVisible = false;
        }


    }
})();
