var tlMain = [];

window.onload = function() {
  if(tlMain[0] && window.innerWidth>700) 
    tlMain[0].restart();
  // killAllScene();

  $('.loader').fadeOut(500);
  
  
    contactsLoad();
    sponsorsLoad();
    hashOpen();
    get_schedule();
    dashboard();
  setTimeout(function() {
    $('.loader').remove()
  },500)
};


function killAllScene() {
  $.each(tlMain,function (_,ele) {
    ele.stop();
  });
}


function animateLanding(i) {

  killAllScene();
  
  tlMain[parseInt(i)-1].restart(true);
  if(parseInt(i)==3)
    initScene3();
}

// landing - 1


  
  tlMain[0] = null;
  tlMain[0] = new TimelineMax({
      paused: true,
      repeat:-1
    });

  var cars1 = $('#landing-1 #cars-1');
  var cars2 = $('#landing-1 #cars-2');
  var cars3 = $('#landing-1 #cars-3');
  var moon = $('#landing-1 #moon');
  var planet1 = $('#landing-1 #planet-1');
  var astronaut = $('#landing-1 #astronaut');


  var spaceStationSmall_2 = $('#landing-1 #space-station-small-2');

  // tlMain[0].set(shuttleRotate, {css:{rotation:180, transformOrigin:"0 50%"}});


  tlMain[0].add(TweenMax.to(cars1, 30, {
    x: window.innerWidth,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[0].add(TweenMax.to(cars2, 15, {
    x: window.innerWidth,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[0].add(TweenMax.to(cars3, 25, {
    x: window.innerWidth,
    ease: Linear.easeNone,
    repeat: -1
  }),0);

  tlMain[0].add(TweenMax.to(astronaut, 5, {
    x: 20,
    ease: Linear.easeNone,
    yoyo: true,
    repeat: -1
  }),0);


  shuttlePath = MorphSVGPlugin.pathDataToBezier('#shuttle-path', {
    align: "#space-station"
  });
  tlMain[0].add(TweenMax.set("#landing-1 #space-station", {
    xPercent: -50,
    yPercent: -50
  }),0);
  tlMain[0].add(TweenMax.to("#landing-1 #space-station", 50, {
    bezier: {
      values: shuttlePath,
      type: "cubic"
    },
    ease: Linear.easeNone
  }),0);


  shuttleMainPath = MorphSVGPlugin.pathDataToBezier('#shuttle-main-path', {
    align: "#landing-1 #shuttle-main"
  });
  shuttleMainTween = TweenMax.to("#landing-1 #shuttle-main", 30, {
    bezier: {
      values: shuttleMainPath,
      type: "cubic",
      autoRotate: true
    },
    ease: Linear.easeNone,
    repeat: -1
  });
  shuttleMainTween.progress(0.5);

  tlMain[0].add(shuttleMainTween,0);

  shuttleMoonPath = MorphSVGPlugin.pathDataToBezier('#shuttle-moon-path', {
    align: "#landing-1 #shuttle-moon"
  });
  shuttleMoonTween = TweenMax.from("#landing-1 #shuttle-moon", 30, {
    bezier: {
      values: shuttleMoonPath,
      type: "cubic",
      autoRotate: true
    },
    ease: Linear.easeNone,
    repeat: -1
  });

  tlMain[0].add(shuttleMoonTween,0);
  // shuttleMoonTween.re;

  spaceStationSmall_2_Path = MorphSVGPlugin.pathDataToBezier('#space-station-small-2-path', {
    align: "#landing-1 #space-station-small-2"
  });
  tlMain[0].add(TweenMax.set("#landing-1 #space-station-small-2", {
    xPercent: -25,
    yPercent: -25
  }),0);
  spaceStationSmall_2_Tween = TweenMax.from("#landing-1 #space-station-small-2", 30, {
    bezier: {
      values: spaceStationSmall_2_Path,
      type: "cubic",
      autoRotate: true
    },
    ease: Linear.easeNone,
    repeat: -1
  });
  spaceStationSmall_2_Tween.progress(0.1);

  tlMain[0].add(spaceStationSmall_2_Tween,0);

  spaceStationSmallPath = MorphSVGPlugin.pathDataToBezier('#space-station-small-path', {
    align: "#landing-1 #space-station-small"
  });
  tlMain[0].add(TweenMax.set("#landing-1 #space-station-small", {
    xPercent: -25,
    yPercent: -25
  }),0);
  spaceStationSmallTween = TweenMax.to("#landing-1 #space-station-small", 30, {
    bezier: {
      values: spaceStationSmallPath,
      type: "cubic",
      autoRotate: true
    },
    ease: Linear.easeNone,
    repeat: -1
  });
  spaceStationSmallTween.progress(0.1);

  tlMain[0].add(spaceStationSmallTween,0);

  // spaceStationSmallPath = MorphSVGPlugin.pathDataToBezier('#space-station-small-path', {align:"#landing-1 #space-station-small"});
  // TweenMax.set("#landing-1 #space-station-small", {xPercent:-25, yPercent:-25});
  // spaceStationSmallTween = TweenMax.to("#landing-1 #space-station-small", 30, {bezier:{values:spaceStationSmallPath, type:"cubic",autoRotate:true},ease:Linear.easeNone,repeat:-1});
  // spaceStationSmallTween.progress(0.1);


  ufoPath = MorphSVGPlugin.pathDataToBezier('#ufo-path', {
    align: "#landing-1 #ufo"
  });
  // TweenMax.set("#landing-1 #ufo", {xPercent:-25, yPercent:-25});
  ufoTween = TweenMax.to("#landing-1 #ufo", 8, {
    bezier: {
      values: ufoPath,
      type: "cubic",
      autoRotate: true
    },
    yoyo: true,
    ease: Cubic.easeInOut,
    repeat: -1
  });
  ufoTween.progress(0.1);

  tlMain[0].add(ufoTween,0);

  meteorsPath = MorphSVGPlugin.pathDataToBezier('#landing-1 #meteors-path', {
    align: "#landing-1 #meteors"
  });
  // TweenMax.set("#landing-1 #ufo", {xPercent:-25, yPercent:-25});
  meteorsTween = TweenMax.from("#landing-1 #meteors", 50, {
    bezier: {
      values: meteorsPath,
      type: "cubic",
      autoRotate: true
    },
    yoyo: true,
    ease: Linear.easeNone,
    repeat: -1
  });
  meteorsTween.progress(0.1);

  tlMain[0].add(meteorsTween,0);

  tlMain[0].add(TweenMax.to(planet1, 50, {
    css: {
      rotation: -360,
      transformOrigin: "center center"
    },
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[0].add(TweenMax.to(moon, 50, {
    css: {
      rotation: -360,
      transformOrigin: "center center"
    },
    ease: Linear.easeNone,
    repeat: -1
  }),0);

  // tlMain[0].stop();



// landing - 2

  
   tlMain[1] = null;
 tlMain[1] = new TimelineMax({
      paused: true,
      repeat:-1
    });



  var ratio2 = window.innerWidth / 1920;
  var airship = $('#landing-2 #airship');
  var cars = $('#landing-2 .cars');
  var carsBack = $('#landing-2 .cars-back');

  var water = $('#landing-2 #water');

  var boat1 = $('#landing-2 #boat-1')
  var boat2 = $('#landing-2 #boat-2')
  var boat3 = $('#landing-2 #boat-3')
  var elevator = $('#landing-2 #elevator')
  var train = $('#landing-2 #train')
  var backBuildings1 = $('#landing-2 #back-buildings-1')
  var backBuildings2 = $('#landing-2 #back-buildings-2')
  tlMain[1].add(TweenMax.set([train, boat1, boat2, boat3], 0, {
    transformOrigin: "0 0",
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[1].add(TweenMax.to(airship, 30, {
    x: 1920,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[1].add(TweenMax.to(cars, 30, {
    x: 1920,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[1].add(TweenMax.to(carsBack, 30, {
    x: -1920,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  try {
    tlMain[1].add(TweenMax.to(boat1, 35, {
      x: 1920 + boat1[0].getBBox().width,
      ease: Linear.easeNone,
      repeat: -1
    }),0);
    tlMain[1].add(TweenMax.to(boat2, 12, {
      x: -1920 - boat2[0].getBBox().width,
      ease: Linear.easeNone,
      repeat: -1
    }),0);
    tlMain[1].add(TweenMax.to(boat3, 30, {
      x: -1920 - boat3[0].getBBox().width,
      ease: Linear.easeNone,
      repeat: -1
    }),0);
    tlMain[1].add(TweenMax.to(backBuildings1, 100, {
      x: 1920,
      ease: Linear.easeNone,
      repeat: -1
    }),0);
    tlMain[1].add(TweenMax.to(backBuildings2, 100, {
      x: 1920,
      ease: Linear.easeNone,
      repeat: -1
    }),0);
    tlMain[1].add(TweenMax.to(train, 15, {
      x: 1920 + train[0].getBBox().width,
      ease: Linear.easeNone,
      repeat: -1
    }),0);
  } catch (err) {
  }

  tlMain[1].add(TweenMax.to(water, 5, {
    y: -10,
    ease: Linear.easeNone,
    yoyo: true,
    repeat: -1
  }),0);
  tlMain[1].add(TweenMax.to(elevator, 15, {
    y: -window.innerHeight - 100,
    ease: Linear.easeNone,
    repeat: -1
  }),0);

  // tlMain[1].stop();






// landing 3




  tlMain[2] = null;
    tlMain[2] = new TimelineMax({
      paused: true,
      repeat:-1
    });


    function initScene3() {
         $('[class^=car] [class^=tyre],#arm-tyre').hide();
         $('[class^=sml-robot] [class^=tyre]').show();
         
        var changeBeltVar = true;
        var belt = 1;
    }

    var gears = $('[id^=gear]');
    var armRotate = $('#arm-rotate');
    var beltItem = $('.belt-item');
    var smlRobot1 = $('#sml-robot-gp-1');
    var smlRobot2 = $('#sml-robot-gp-2');
    var smlRobot3 = $('#sml-robot-gp-3');
    var layer1 = $('.layer-1');
    var layer2 = $('.layer-2');
    var mainBelt1 = $('#main-belt-1');
    var mainBelt2 = $('#main-belt-2');
    var conveyor = $('.conveyor');

    var tl2 = new TimelineMax({
        paused: true,
        repeat: -1
    });

    
    tlMain[2].to(gears, 10, {
        css: {
            rotation: 360,
            transformOrigin: "center center"
        },
        ease: Linear.easeNone,
        repeat: -1
    });

    var tl3 = TweenMax.to(smlRobot1, 5.8, {
        x: -3520 - smlRobot1[0].getBBox().width,
        ease: Linear.easeNone,
        repeat: -1,
        onUpdate: showProg,
        onUpdateParams: ['1'],
        onRepeat: changeBelt
    }).repeatDelay(5.7);
    var tl4 = TweenMax.to(smlRobot2, 5.8, {
        x: -3520 - smlRobot2[0].getBBox().width,
        ease: Linear.easeNone,
        repeat: -1,
        onUpdate: showProg,
        onUpdateParams: ['2'],
        onRepeat: changeBelt
    }).repeatDelay(5.7);
    // tlMain[2].to(smlRobot3, 5.8, {x:-2020-smlRobot2[0].getBBox().width,ease:Linear.easeNone,repeat:-1}).delay(6).repeatDelay(1);
    // 5,2,4,1

    tlMain[2].add(tl3,0);
    tlMain[2].add(tl4,5.8);
    // tl2.resume();
    // tlMain[2].to(beltItem,20,{  x: 4712+1920 ,repeat:-1})
    tlMain[2].add(TweenMax.to(layer1, 30, {
        x: -1920,
        repeat: -1
    }),0);
    tlMain[2].add(TweenMax.to(layer2, 40, {
        x: 1920,
        repeat: -1
    }),0);
    tlMain[2].add(TweenMax.to(conveyor, 30, {
        x: 1920,
        repeat: -1
    }),0);
    tlMain[2].add(TweenMax.to(mainBelt1, 20, {
        x: 4420 + mainBelt1[0].getBBox().width,
        ease: Linear.easeNone,
        repeat: -1,
        onRepeat: hideTyre,
        onRepeatParams: ['1']
    }).repeatDelay(3.4),0.5);
    tlMain[2].add(TweenMax.to(mainBelt2, 20, {
        x: 4420 + mainBelt2[0].getBBox().width,
        ease: Linear.easeNone,
        repeat: -1,
        onRepeat: hideTyre,
        onRepeatParams: ['2']
    }).repeatDelay(3.4),12.1);
    // 10,6,2,2


    // tl.add(tlMain[2].set(armRotate, {css:{rotation:50, transformOrigin:"left bottom"}}));
    var tl = new TimelineMax({
        delay: 1.88,
        repeatDelay: 2.3,
        repeat: -1,
        yoyo: true
    });
    tl.to(armRotate, 0.88, {
        css: {
            rotation: 50,
            transformOrigin: "left bottom"
        },
        yoyo: true,
        ease: Linear.easeNone,
        repeat: 3
    });
    // tl.to(armRotate, 0.5, {css:{rotation:50, transformOrigin:"left bottom"},yoyo:true,ease:Linear.easeNone,repeat:4});

    // tl.resume();
    tlMain[2].add(tl,0);



    var changeBeltVar = true;
    var belt = 1;

    function hideTyre(t) {
        changeBeltVar = true;
        changeBelt();
        $('#main-belt-' + t + ' [class^=tyre]').hide();
    }



    function changeBelt() {

        if (changeBeltVar) {
            if (belt == 1) {
                belt = 2;
            } else {
                belt = 1;
            }
            changeBeltVar = false;
        }
        $('#sml-robot-gp-2 .tyre-2,#sml-robot-gp-2 .tyre-1').show();
    }


    function showProg(t) {
        if (t == 1) {
            var prog = tl3.progress();
            if (prog > 0.46 && prog < 0.47) {
                $('#sml-robot-gp-1 .sml-robot-1 .tyre-1').hide();
                $('#arm-tyre').show();
                setTimeout(function() {
                    $('#main-belt-' + belt + ' .car2 .tyre-2').show();
                    $('#arm-tyre').hide();
                }, 800);
            } else if (prog > 0.79 && prog < 0.8) {
                $('#sml-robot-gp-1 .sml-robot-2 .tyre-2').hide();
                $('#arm-tyre').show();
                setTimeout(function() {
                    $('#main-belt-' + belt + ' .car2 .tyre-1').show();
                    $('#arm-tyre').hide();
                }, 800);

            } else if (prog > 0.99) {
                $('#sml-robot-gp-1 .tyre-2,#sml-robot-gp-1 .tyre-1').show();
            }
        } else if (t == 2) {
            var prog = tl4.progress();
            if (prog > 0.46 && prog < 0.47) {
                $('#sml-robot-gp-2 .sml-robot-1 .tyre-1').hide();
                $('#arm-tyre').show();
                setTimeout(function() {
                    $('#main-belt-' + belt + ' .car1 .tyre-2').show();
                    $('#arm-tyre').hide();
                }, 800);
            } else if (prog > 0.79 && prog < 0.8) {
                $('#sml-robot-gp-2 .sml-robot-2 .tyre-2').hide();
                $('#arm-tyre').show();
                setTimeout(function() {
                    $('#main-belt-' + belt + ' .car1 .tyre-1').show();
                    $('#arm-tyre').hide();
                }, 800);
            }


        }

    }

    $('[class^=car] [class^=tyre],#arm-tyre').hide();
    // tlMain[2].stop();






// landing - 4



 

   tlMain[3] = null;
 tlMain[3] = new TimelineMax({
      paused: true,
      repeat:-1
    });


  var shuttle = $("#landing-4 #shuttle");
  shuttleMainPathL3 = MorphSVGPlugin.pathDataToBezier('#landing-4 #shuttle-path', {
    align: "#landing-4 #shuttle"
  });
  tlMain[3].add(TweenMax.set("#landing-4 #shuttle #rotate-shuttle", {
    css: {
      rotation: 60
    },
    transformOrigin: "center center"
  }),0);

  tlMain[3].add(TweenMax.to(shuttle, 30, {
    bezier: {
      values: shuttleMainPathL3,
      type: "cubic",
      autoRotate: true
    },
    ease: Linear.easeNone,
    repeat: -1
  }),0);

  var balloon = $("#landing-4 #airballoon");
  balloonMainPathL3 = MorphSVGPlugin.pathDataToBezier('#landing-4 #balloon-path', {
    align: "#landing-4 #airballoon"
  });
  tlMain[3].add(TweenMax.set(balloon, {
    xPercent: -50,
    yPercent: -50
  }),0);

  tlMain[3].add(TweenMax.from(balloon, 70, {
    bezier: {
      values: balloonMainPathL3,
      type: "cubic"
    },
    ease: Linear.easeNone,
    repeat: -1
  }),0);

  var scoobydoo = $("#landing-4 #scoobydoo");
  scoobydooMainPathL3 = MorphSVGPlugin.pathDataToBezier('#landing-4 #scoobydoo-path', {
    align: "#landing-4 #scoobydoo"
  });
  tlMain[3].add(TweenMax.set(scoobydoo, {
    xPercent: -50,
    yPercent: -66
  }),0);

  tlMain[3].add(TweenMax.to(scoobydoo, 40, {
    bezier: {
      values: scoobydooMainPathL3,
      type: "cubic"
    },
    ease: Linear.easeNone,
    repeat: -1
  }),0);


  tlMain[3].add(TweenMax.to($('#landing-4 #ufo-1'), 35, {
    x: 1920,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[3].add(TweenMax.to($('#landing-4 #ufo-2'), 25, {
    x: 1920,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[3].add(TweenMax.to($('#landing-4 #ufo-3'), 29, {
    x: 1920,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[3].add(TweenMax.to($('#landing-4 #cloud-2'), 30, {
    x: 1920,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[3].add(TweenMax.to($('#landing-4 #cloud-3'), 34, {
    x: 1920,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[3].add(TweenMax.to($('#landing-4 #cloud-4'), 28, {
    x: 1920,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[3].add(TweenMax.to($('#landing-4 #cloud-4-2'), 28, {
    x: 1920,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[3].add(TweenMax.to($('#landing-4 #cloud-xs'), 50, {
    x: 1920,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[3].add(TweenMax.to($('#landing-4 #cloud-1'), 41, {
    x: 1920,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  tlMain[3].add(TweenMax.to($('#landing-4 #cloud-big'), 20, {
    x: 1920,
    ease: Linear.easeNone,
    repeat: -1
  }),0);
  // TweenMax.to($('#scoobydoo'), 30, {x:-1920,ease:Linear.easeNone,repeat:-1});

  // tlMain[3].stop();


