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
	'image' : './shared/images/colorGame.png',
	'content' : 'Challenge yourself to know the right combination',
	'url' : ''
}, {
	'name' : 'To-Do List',
	'image' : './shared/images/to-do.png',
	'content' : 'Handy app to plan your activities.',
	'url' : ''
}, {
	'name' : 'StarTrak',
	'image' : './shared/images/Patatap.png',
	'content' : 'Tracking of starters made easy with new features.',
	'url' : ''
}, {
	'name' : 'YelpCamp Clone',
	'image' : './shared/images/yelpcamp.png',
	'content' : 'If you are planning to go for camping, this is the best place to find out the places to choose from!',
	'url' : ''
}];


var projectListHTML = '';
projects.forEach(function(project) {
	projectListHTML += '<div class="cardContainer col-md-4 col-sm-6 col-xs-6"><div class="card"><img class="card-img-top" src="' + project.image + '">';
	projectListHTML += '<div class="card-body"><h5 class="card-title">' + project.name + '</h5></div></div><div class="overlay">';
	projectListHTML += '<div class="text"><div class="cardSubHeading">' + project.name + '</div><div class="cardSubBody"><span>' + project.content + '</span>';
	projectListHTML += '<hr><button class="btn btn-danger">Check This Out!</button></div></div></div></div>';
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

var map;
var infowindow;

function initMap() {
  var pyrmont = {lat: 20.593, lng:  78.962};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 500,
    type: ['store']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
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
					$(this)
						.data("origWidth", $(this).width())
						.width(0)
						.animate({
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