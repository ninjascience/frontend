(function(){"use strict";angular.module("frontendApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){return a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/who",{templateUrl:"views/who.html",controller:"WhoCtrl"}).when("/what",{templateUrl:"views/what.html",controller:"WhatCtrl"}).when("/when",{templateUrl:"views/when.html",controller:"WhenCtrl"}).when("/where",{templateUrl:"views/where.html",controller:"WhereCtrl"}).when("/mainviz",{templateUrl:"views/mainviz.html",controller:"MainvizCtrl"}).otherwise({redirectTo:"/"})}])}).call(this),function(){"use strict";angular.module("frontendApp").controller("MainCtrl",["$scope",function(){}])}.call(this),function(){"use strict";angular.module("frontendApp").controller("WhoCtrl",["$scope",function(){}])}.call(this),function(){"use strict";angular.module("frontendApp").controller("WhatCtrl",["$scope",function(){}])}.call(this),function(){"use strict";angular.module("frontendApp").controller("WhenCtrl",["$scope",function(){}])}.call(this),function(){"use strict";angular.module("frontendApp").controller("WhereCtrl",["$scope",function(){}])}.call(this),function(){}.call(this),function(){"use strict";angular.module("frontendApp").directive("whereDir",function(){return{restrict:"EA",scope:{},link:function(a,b){var c,e,f,h,i,j,k,l;j=function(a,b){var c;return c=k.append("g").attr("class","counties").selectAll("path").data(topojson.feature(b,b.objects.counties).features).enter().append("path").attr("style",function(a){return"opacity: "+6*h.get(a.id)+";"}).attr("d",e)},l=300,c=300,h=d3.map(),i=d3.map(),f=d3.scale.quantize().domain([0,.15]).range(d3.range(9).map(function(a){return"q"+a+"-9"})),e=d3.geo.path(),k=d3.select(b[0]).append("svg").attr("width",l).attr("height",c),queue().defer(d3.json,"/data/where-map.json").defer(d3.tsv,"/data/where-before.tsv",function(a){return h.set(a.id,+a.rate)}).defer(d3.tsv,"/data/where-after.tsv",function(a){return i.set(a.id,+a.rate)}).await(j),window.redraw=function(a){var b,c;g.attr("style",function(){}),b=6*h.get(d.id),c=6*i.get(d.id)}}}})}.call(this),function(){"use strict";angular.module("frontendApp").controller("MainvizCtrl",["$scope",function(){}])}.call(this),function(){"use strict";angular.module("frontendApp").directive("boilerPlate",function(){return{restrict:"EA",link:function(){var a,b,c,d,e,f,g,h,i,j,k;return g=d3.range(1e3).map(d3.random.bates(10)),c=d3.format(",.0f"),e={top:10,right:30,bottom:30,left:30},h=960-e.left-e.right,d=500-e.top-e.bottom,i=d3.scale.linear().domain([0,1]).range([0,h]),b=d3.layout.histogram().bins(i.ticks(20))(g),k=d3.scale.linear().domain([0,d3.max(b,function(a){return a.y})]).range([d,0]),j=d3.svg.axis().scale(i).orient("bottom"),f=d3.select("#main-viz").append("svg").attr("width",h+e.left+e.right).attr("height",d+e.top+e.bottom).append("g").attr("transform","translate("+e.left+","+e.top+")"),a=f.selectAll(".bar").data(b).enter().append("g").attr("class","bar").attr("transform",function(a){return"translate("+i(a.x)+","+k(a.y)+")"}),a.append("rect").attr("x",1).attr("width",i(b[0].dx)-1).attr("height",function(a){return d-k(a.y)}),a.append("text").attr("dy",".75em").attr("y",6).attr("x",i(b[0].dx)/2).attr("text-anchor","middle").text(function(a){return c(a.y)}),f.append("g").attr("class","x axis").attr("transform","translate(0,"+d+")").call(j)}}})}.call(this);