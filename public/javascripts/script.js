angular.module('app', []).controller('homeController', function($scope) {
    $scope.videoControl = function() {
        var video = angular.element('#video-playback').get(0);

        if (video.paused) {
            video.play();
            btn.innerHTML = 'Pause';
        } else {
            video.pause();
            btn.innerHTML = 'Play';
        }
    };
});