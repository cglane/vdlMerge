
(function(){
"use strict";

angular
  .module('main')
  .controller('CarouselController',function($interval,$scope,$state,$stateParams,$routeParams,$timeout,CarouselService,$http){


  //..

    $scope.state = $state.current;
    $scope.params = $state;
    //---------------- carousel--------//
    $scope.albums= ['StackpoleResidence','Meeting42','BaileyIsland','HagoodResidence','Walterboro'];
    // $('<img src= ../../albums/HagoodResidence/IMG_3304.jpg>').error(function(){
    //   console.log('error')
    // });
    $scope.albumObject = CarouselService.getAlbums();
    $scope.album = $state.params.album; //getting fooVal
    $scope.startLocation = $state.params.startLocation;
    //populating pics
    $scope.carouselPics = CarouselService.getCarouselPics($scope.albumObject,$scope.album,$scope.startLocation);
    var carouselInt = $scope.carouselPics.length *600;
    var carouselWidth = carouselInt + 'px';
    console.log('carouselWidth',carouselWidth )
    $('#carousel-short').css('width',carouselWidth);
      $scope.carouselMargin = {
        left:'400px'
      }
      var left = 400;
      var myIncrement = 600;
      $('body').keypress(function(e){
        $scope.$apply($scope.moveLeft());
        console.log(e.keyCode)
        // if(e.keyCode == 39){
        //   right
        //   console.log('hello 39')
        // }else if(event.which == 13){
        //   console.log('return')
        // }else if(e.keyCode == 34){
        //   console.log('right')
        // }
      })
      $scope.moveLeft = function(){
        if((-1 *left) <= carouselInt){
          left -= myIncrement;
        }else{
          left = 400;
        }
        $scope.carouselMargin = {
          left: left+'px',
        }
        console.log(carouselWidth,'carouselWidth')
        console.log(left,'moveLeft')

      }
      $scope.moveRight = function(){
        if(left > 400){
          left = 400;
        }else{
          left += myIncrement;
        }
        console.log(carouselWidth,'carouselWidth')
        console.log(left,'moveRight')
        $scope.carouselMargin = {
          left: left+'px',
        }

      }





  });
})();
