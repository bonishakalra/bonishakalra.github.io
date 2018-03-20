// Smooth Scroll on clicking nav items
$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 1000);
  return false;
});

// back to top
$('#toTop a').click(function () {
  $('body').animate({
    scrollTop: 0
  }, 1000);
  return false;
});

// Parallaxing + add class active on scroll
$(document).scroll(function () {
  
  // parallaxing
  var $movebg = $(window).scrollTop() * -0.3;
  $('.portion').css('background-positionY', ($movebg) + 'px');

  // add class active to nav a on scroll
  var scrollPos = $(document).scrollTop() + 100;
  $('nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('nav a').removeClass("active");
      currLink.addClass("active");
    }
  });
  
  // changing padding of nav a on scroll
    if (scrollPos > 250) {
      $('nav a').addClass('small');
      $('nav img').addClass('move');
      $('nav span').removeClass('movetext');
    } else {
      $('nav a').removeClass('small');
      $('nav img').removeClass('move');
      $('nav span').addClass('movetext');
    }
  
});


var projects = [{
	'name' : 'Patatap Clone',
	'image' : './shared/images/Patatap.png',
	'content' : 'Patatap is an animation and sound kit. With the touch of a finger create melodies charged with moving shapes.',
	'url' : ''
}, {
	'name' : 'Mobile Compare',
	'image' : './shared/images/Patatap.png',
	'content' : 'Find the mobile you need by comparing it with others.',
	'url' : ''
}, {
	'name' : 'Color Game',
	'image' : './shared/images/colorGame.PNG',
	'content' : 'Challenge yourself to know the right combination',
	'url' : ''
}, {
	'name' : 'To-Do List',
	'image' : './shared/images/todo.PNG',
	'content' : 'Handy app to plan your activities.',
	'url' : ''
}, {
	'name' : 'StarTrak',
	'image' : './shared/images/Patatap.png',
	'content' : 'Tracking of starters made easy with new features.',
	'url' : ''
}, {
	'name' : 'YelpCamp Clone',
	'image' : './shared/images/yelpcamp.PNG',
	'content' : 'If you are planning to go for camping, this is the best place to find out the places to choose from!',
	'url' : ''
}];


var projectListHTML = '';
projects.forEach(function(project) {
	projectListHTML += '<div class="cardContainer col-md-4 col-sm-6 col-xs-6"><div class="card"><img class="card-img-top" src="' + $.trim(project.image) + '">';
	projectListHTML += '<div class="card-body"><h5 class="card-title">' + project.name + '</h5></div></div><div class="overlay">';
	projectListHTML += '<div class="text row"><div class="cardSubHeading col-xs-12 col-md-12">' + project.name + '</div><div class="cardSubBody text-left col-xs-12 col-md-12"><span>' + project.content + '</span>';
	projectListHTML += '<hr><div class="text-center col-xs-12 col-md-12"><button class="btn btn-warning text-white font-weight-bold">Check This Out!</button></div></div></div></div></div>';
});

$('#projectSection').append(projectListHTML);

/* Show the tooltip text when you mouse over the tooltip container */
/*$('.tooltipSpan').click(function(){
	$('.tooltipSpan .tooltiptext').css('visibility', 'visible');
});*/

var skillSet = [
				{'skill': 'HTML5',
				'progress': '90%'},
				{'skill': 'CSS3',
				'progress': '80%'},
				{'skill': 'JQuery',
				'progress': '70%'},
				{'skill': 'AngularJS',
				'progress': '75%'}   
				]

var skillAppendHTML = '';

skillSet.forEach(function(data){
	skillAppendHTML += '<div class="skill">';
	skillAppendHTML += '<span>'+ data.skill +'</span>';
	skillAppendHTML += '<div class="progress">';
	skillAppendHTML += '<div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="' + data.progress + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + data.progress + '"></div>'
	skillAppendHTML += '</div>';
	skillAppendHTML += '</div>';
});

$('#skill-set').append(skillAppendHTML);


/************************************************* START: Google Map API Integeration *****************************************************/

/*var locations = [
      ['Hinjewadi, Pune', 18.516726, 73.856255],
      ['Noida, UttarPradesh', 28.535517,	77.391029]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: new google.maps.LatLng( 18.516726, 73.856255),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }		*/


/*function initMap() {
	
	var broadway = {
		info: '<strong>Chipotle on Broadway</strong><br>\
					5224 N Broadway St<br> Chicago, IL 60640<br>\
					<a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
		lat: 41.976816,
		long: -87.659916
	};

	var belmont = {
		info: '<strong>Chipotle on Belmont</strong><br>\
					1025 W Belmont Ave<br> Chicago, IL 60657<br>\
					<a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
		lat: 41.939670,
		long: -87.655167
	};

	var sheridan = {
		info: '<strong>Chipotle on Sheridan</strong><br>\r\
					6600 N Sheridan Rd<br> Chicago, IL 60626<br>\
					<a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
		lat: 42.002707,
		long: -87.661236
	};

	var locations = [
      [broadway.info, broadway.lat, broadway.long, 0],
      [belmont.info, belmont.lat, belmont.long, 1],
      [sheridan.info, sheridan.lat, sheridan.long, 2],
    ];

    var locations = [
      ['Hinjewadi, Pune', 18.516726, 73.856255],
      ['Noida, UttarPradesh', 28.535517,	77.391029]];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: new google.maps.LatLng(18.516726, 73.856255),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}*/

    function loadScript(src,callback){
  
    var script = document.createElement("script");
    script.type = "text/javascript";
    if(callback)script.onload=callback;
    document.getElementsByTagName("head")[0].appendChild(script);
    script.src = src;
  }
  var locations = [
      ['Hinjewadi, Pune', 18.516726, 73.856255],
      ['Noida, UttarPradesh', 28.535517,	77.391029]];
  

  
  loadScript('https://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=initialize',
              function(){log('google-loader has been loaded, but not the maps-API ');});


function initialize() {
    
    log('maps-API has been loaded, ready to use');
    var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(18.516726, 73.856255),
          mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

    var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
  }

function log(str){
  document.getElementsByTagName('pre')[0].appendChild(document.createTextNode('['+new Date().getTime()+']\n'+str+'\n\n'));
}


/**************************************** Progressive Progress Bar************************************************/

  $(window).scroll(function() {
    var wintop = $(window).scrollTop();
    var docheight = $('article').height();
    var winheight = $(window).height();
    var totalScroll = (wintop/(docheight-winheight))*100;
    $(".KW_progressBar").css("width",totalScroll+"%");
  });


 $(function() {
    
    var $meters = $(".progress .progress-bar");
    var $section = $('#portion2');
    var $queue = $({});
    
    function loadDaBars() {
				$(".progress .progress-bar").each(function() {
					$(this).data("origWidth", $(this).width()).width(0).animate({
							width: $(this).data("origWidth")
						}, 1200);
				});
    }
    
    /*$(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });*/
    
});


/**************************************** Main Heading Styling Sheetr************************************************/

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

/**************************************** Main Page Animations Styling Sheet************************************************/

$('#dot').click( function(){
	$('#menubar').toggle("slow");
	$('.fa-th').toggleClass('black');
	$('#dot').toggleClass('rotateDiv');
	$('#dot').toggleClass('widthChange');
	/*$('#first').toggleClass('firstwidthChange');*/
});

/**************************************** Scroll to particular div Styling Sheet************************************************/
$('.menusub a').click(function(){
	
   	var $href = $(this).attr('href');
    $('html,body').animate({
     	scrollTop: $($href).offset().top},
        'slow');
});



/****************************************************** Menu Bar ****************************************************************/

$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.parent2').on('mousedown touchstart', function() {
    
    if (!active1) $(this).find('.test1').css({'transform': 'translate(0px,125px)'});
    else $(this).find('.test1').css({'transform': 'none'}); 
     if (!active2) $(this).find('.test2').css({ 'transform': 'translate(60px,105px)'});
    else $(this).find('.test2').css({ 'transform': 'none'});
      if (!active3) $(this).find('.test3').css({ 'transform': 'translate(105px,60px)'});
    else $(this).find('.test3').css({ 'transform': 'none'});
      if (!active4) $(this).find('.test4').css({ 'transform': 'translate(125px,0px)'});
    else $(this).find('.test4').css({ 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });
});

// fix menu at the top

var header = $(".parent2");

var topHeight =  header.offset().top;

$(document).scroll(function() {

	/*console.log("topHeight = " + topHeight);*/
    var y = $(document).scrollTop(); //get page y value 
    /*console.log("y = " + y);*/
	if(y >= topHeight)  {
        header.css({ position: "fixed" , marginLeft: 0, marginTop:0});
        $('.mask2').css({ position: "fixed"});
    } else {
        header.css({ position: "relative" ,marginLeft: "-240px", marginTop: "-80px" });
        $('.mask2').css({position: "absolute" });
    }
});