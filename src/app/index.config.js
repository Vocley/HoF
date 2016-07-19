(function() {
    'use strict';

    angular
        .module('houseoffraser')
        .config(config);

    /** @ngInject */
    function config($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

    }

})();
