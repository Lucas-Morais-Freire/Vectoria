//Vectoria
if (true) {
  vw = 1280;
  vh = 720;
  var lastPX = vw + 1;
  var lastPY = 0;
  var lastRX = vw + 1;
  var lastRY = 0;

  var frame = 0;
  var bonkPosX = 0;

  var HORIZ = 0;
  var VERT = 1;

  var flag = [false, false, false, false, false, false, false, false, false, false, false];
  //var flag = [true, true, true, true, true, true, true, true, true, true];
  var scr = 0;
  var lvl = -1;
  var stg = 0;
  var inst = 0;

  var OBS = 0;
  var CONS = 1;
  var SHOW = 2;
  var DEC = 3;
  var ANIM = 4;
  var MOV = 5;

  var r = 0;
  var l = 0;
  var u = 0;
  var d = 0;
  var vet = [];
  var dirs = [];
  
  var glow = 0;
  var slope = true;

  var vectors = [];
  var currW = 0;
  var startX = 0;
  var startY = 0;
  var addMode = 1;
  var add = 1;
  var sub = 0;

  var posX;
  var posY;
  var directions;
  var newStartX;
  var newStartY;
  var finishX;
  var finishY;

  var counter;
  var sum;
  var required;
  var vreq;

  var s1;
  var s1PosX;
  var S1PosY;
  var s2;
  var s2PosX;
  var s2PosY;
  var s3;
  var s3PosX;
  var s3PosY;
  var s4;
  var s4PosX;
  var s4PosY;
  var s5;
  var s5PosX;
  var s5PosY;
  var s6;
  var s6PosX;
  var s6PosY;
  var s7;
  var s7PosX;
  var s7PosY;
  var s8;
  var s8PosX;
  var s8PosY;
  
  var isOverBut = false;
  
  var Played = false;
  var mouseOverPlayed = false;
  var lvlCompletePlayed = false;
}

function mousePressed() {
  lastPX = mouseX;
  lastPY = mouseY;
}

function mouseReleased() {
  lastRX = mouseX;
  lastRY = mouseY;
}

function preload() {
  PlayFont = loadFont('Play-Regular.ttf');
  againIcon = loadImage(`again_icon_resized.png`);
  antvec = loadImage(`ant.png`);
  atvec = loadImage(`at.png`);
  at_ant = loadImage(`at-ant.png`);
  Excaminhocorr = loadImage(`Xexcaminhocorr.png`);
  excaminhoinc1 = loadImage(`Xexcaminhoinc1.png`)
  excaminhoinc2 = loadImage(`Xexcaminhoinc2.png`);
  exconst1 = loadImage(`Xexconst1.png`);
  exconst2 = loadImage(`Xexconst2.png`);
  exconst3 = loadImage(`Xexconst3.png`);
  exeditor1 = loadImage(`Xexeditor1.png`);
  exeditor2 = loadImage(`Xexeditor2.png`);
  exeditor3 = loadImage(`Xexeditor3.png`);
  exeditor4 = loadImage(`Xexeditor4.png`);
  exguias = loadImage(`Xexguias.png`);
  exnum = loadImage(`Xexnum.png`);
  exsalcorr = loadImage(`Xexsalcorr.png`);
  exsalinc1 = loadImage(`Xexsalinc1.png`);
  exsalinc2 = loadImage(`Xexsalinc2.png`);
  exsub3 = loadImage(`Xexsub3.png`);
  exsub4 = loadImage(`Xexsub4.png`);
  exsum1 = loadImage(`Xexsum1.png`);
  exsum2 = loadImage(`Xexsum2.png`);
  exsum3 = loadImage(`Xexsum3.png`);
  exsum4 = loadImage(`Xexsum4.png`);
  exsum5 = loadImage(`Xexsum5.png`);
  exvrcorr = loadImage(`Xexvrcorr.png`);
  exvrinc1 = loadImage(`Xexvrinc1.png`);
  exvrinc2 = loadImage(`Cexvrinc2.png`);
  icon = loadImage(`Xicon.png`);
  iconesub = loadImage(`iconesub.png`);
  iconesum = loadImage(`iconesum.png`);
  aluno = loadImage(`aluno.png`);
  bonkf1 = loadImage(`bonk_with_wheels1.png`);
  bonkf2 = loadImage(`bonk_with_wheels2.png`);
  bonk = loadImage(`bonk_top.png`);
  sPoff = loadImage(`switchOFFpurple.png`);
  sPon = loadImage(`switchONpurple.png`);
  sOoff = loadImage(`switchOFForange.png`);
  sOon = loadImage(`switchONorange.png`);
  sCoff = loadImage(`switchOFFcyan.png`);
  sCon = loadImage(`switchONcyan.png`);
  Finish = loadImage(`Finish.png`);
  
  movLoop = loadSound(`movLoop.mp3`);
  movLoop.playMode( `restart`);
  movLoop.setVolume(0.5);
  
  movBeg = loadSound(`movBeg.mp3`);
  movBeg.playMode(`restart`);
  movBeg.setVolume(0.5);
  
  mouseOver = loadSound(`mouseHover.mp3`);
  mouseOver.playMode(`sustain`);
  mouseOver.setVolume(0.2)
  
  buttonClick = loadSound(`ButtonClick.mp3`);
  buttonClick.playMode(`sustain`);
  buttonClick.setVolume(0.2);
  
  lvlComplete = loadSound(`lvlComplete.mp3`);
  lvlComplete.playMode(`restart`);
  lvlComplete.setVolume(0.3)
  
  denied = loadSound(`denied.mp3`);
  denied.playMode(`sustain`);
  
  openConst = loadSound(`OpenConst.mp3`);
  openConst.playMode(`sustain`);
  
  closeConst = loadSound(`CloseConst.mp3`);
  closeConst.playMode(`sustain`);
  
  moveConst = loadSound(`moveConst.mp3`);
  moveConst.playMode(`sustain`);
  
  deleteConst = loadSound(`deleteConst.mp3`);
  deleteConst.playMode(`sustain`);
  
  eraseConst = loadSound(`eraseConst.mp3`);
  eraseConst.playMode(`sustain`);
  
  confirmConst = loadSound(`confirmConst.mp3`);
  confirmConst.playMode(`sustain`);
  
  changeMode = loadSound(`changeMode.mp3`);
  changeMode.playMode(`sustain`);
  
  crash = loadSound(`crash.mp3`);
  crash.playMode(`sustain`);
  
  switchClick = loadSound(`switch.mp3`);
  switchClick.playMode(`sustain`);
}

function drawBonk(x, y) {
  if (frame < 3 && frame >= 0) {
    image(bonkf1, x, y);
    frame++;
  } else if (frame === 3){
    image(bonkf2, x, y);
    frame = -2;
  }
  if (frame >= -2 && frame < 0) {
    image(bonkf2, x, y);
    frame++;
  }
}

function mBonk(x, y, ox, oy) {
  push();
  translate(x, y);
  let v = createVector(ox, oy);
  let vx = createVector(0, -1);
  rotate(-v.angleBetween(vx));
  image(bonk,- 36,- 18);
  pop();
}

function setGradient(x, y, w, h, c1, c2, axis) {
  push();
  noFill();
  strokeWeight(1);
  if (axis === `y`) {
    for (i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(color(c1), color(c2), inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === `x`) {
    for (i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(color(c1), color(c2), inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
  pop();
}

function selectVar(v, n) {
  if (v == 'scr') {
    scr = n;
  } else if (v == 'lvl') {
    lvl = n;
  } else if (v == `stg`) {
    stg = n;
  } else if (v == `posX`) {
    posX = n;
  } else if (v == `posY`) {
    posY = n;
  } else if (v == `inst`) {
    inst = n;
  } else if (v == `s1`) {
    s1 = n;
  } else if (v == `s2`) {
    s2 = n;
  } else if (v == `s3`) {
    s3 = n;
  } else if (v == `s4`) {
    s4 = n;
  } else if (v == `s5`) {
    s5 = n;
  } else if (v == `s6`) {
    s6 = n;
  } else if (v == `s7`) {
    s7 = n;
  } else if (v == `s8`) {
    s8 = n;
  }
}

function button(x, y, w, h, t, v1, n1, v2, n2, v3, n3, v4, n4, v5, n5) {
  if (mouseX < x + w / 2 && mouseX > x - w / 2 && mouseY < y + h / 2 && mouseY > y - h / 2) {
    isOverBut = true;
    if (!mouseOverPlayed) {
      mouseOver.play();
      mouseOverPlayed = true;
    }
    noStroke();
    fill('#dede4e');
    rect(x, y, w, h);
    fill(0);
    textAlign(CENTER);
    textFont(PlayFont);
    textSize(3 / 5 * h);
    text(t, x, y + 3 / 25 * h, w, h);
    if ((lastPX < x + w / 2 && lastPX > x - w / 2 && lastPY < y + h / 2 && lastPY > y - h / 2) && (lastRX < x + w / 2 && lastRX > x - w / 2 && lastRY < y + h / 2 && lastRY > y - h / 2) && (mouseIsPressed == false)) {
      buttonClick.play();
      selectVar(v1, n1);
      selectVar(v2, n2);
      selectVar(v3, n3);
      selectVar(v4, n4);
      selectVar(v5, n5);
      lastPX = vw + 1;
      lastPY = 0;
      lastRX = vw + 1;
      lastRY = 0;
    }
  } else {
    noStroke();
    fill('#ffff57');
    rect(x, y, w, h);
    fill('#ffffc7');
    quad(x - w / 2, y - h / 2, x + w / 2, y - h / 2, x + w / 2 - w / 25, y - h / 2 + w / 25, x - w / 2 + w / 25, y - h / 2 + w / 25);
    fill('#ffff96');
    quad(x + w / 2, y - h / 2, x + w / 2, y + h / 2, x + w / 2 - w / 25, y + h / 2 - w / 25, x + w / 2 - w / 25, y - h / 2 + w / 25);
    fill('#dede4e');
    quad(x - w / 2 + w / 25, y + h / 2 - w / 25, x + w / 2 - w / 25, y + h / 2 - w / 25, x + w / 2, y + h / 2, x - w / 2, y + h / 2);
    fill('#f5f553');
    quad(x - w / 2, y - h / 2, x - w / 2 + w / 25, y - h / 2 + w / 25, x - w / 2 + w / 25, y + h / 2 - w / 25, x - w / 2, y + h / 2);
    fill(0);
    textAlign(CENTER);
    textFont(PlayFont);
    textSize(3 / 5 * h);
    text(t, x, y + 3 / 25 * h, w, h);
  }
}

function offButton(x, y, w, h, t) {
  if (mouseX < x + w / 2 && mouseX > x - w / 2 && mouseY < y + h / 2 && mouseY > y - h / 2) {
    if ((lastPX < x + w / 2 && lastPX > x - w / 2 && lastPY < y + h / 2 && lastPY > y - h / 2) && (lastRX < x + w / 2 && lastRX > x - w / 2 && lastRY < y + h / 2 && lastRY > y - h / 2) && (mouseIsPressed == false)) {
      denied.play();
      lastPX = vw + 1;
      lastPY = 0;
      lastRX = vw + 1;
      lastRY = 0;
    }
  }
  noStroke();
  fill('#ffff5788');
  rect(x, y, w, h);
  fill('#ffffc788');
  quad(x - w / 2, y - h / 2, x + w / 2, y - h / 2, x + w / 2 - w / 25, y - h / 2 + w / 25, x - w / 2 + w / 25, y - h / 2 + w / 25);
  fill('#ffff9688');
  quad(x + w / 2, y - h / 2, x + w / 2, y + h / 2, x + w / 2 - w / 25, y + h / 2 - w / 25, x + w / 2 - w / 25, y - h / 2 + w / 25);
  fill('#dede4e88');
  quad(x - w / 2 + w / 25, y + h / 2 - w / 25, x + w / 2 - w / 25, y + h / 2 - w / 25, x + w / 2, y + h / 2, x - w / 2, y + h / 2);
  fill('#f5f55388');
  quad(x - w / 2, y - h / 2, x - w / 2 + w / 25, y - h / 2 + w / 25, x - w / 2 + w / 25, y + h / 2 - w / 25, x - w / 2, y + h / 2);
  fill(0);
  textAlign(CENTER);
  textFont(PlayFont);
  textSize(3 / 5 * h)
  text(t, x, y + 3 / 25 * h, w, h);
}

function grid(x, y, w, nv, nh) {
  push();
  stroke(`#99999988`);
  strokeWeight(3);
  translate(vw / 2, vh / 2);
  for (i = 1; i < nv; i++) {
    line(x + i * w, y, x + i * w, y - w * nh);
  }
  for (i = 1; i < nh; i++) {
    line(x, y - i * w, x + w * nv, y - i * w);
  }
  pop();
}

function wall(x, y, o, l, c) {
  push();
  translate(vw / 2, vh / 2);
  rectMode(CENTER);
  noStroke();
  if (c != null) {
    fill(c);
  } else {
    fill(150);
  }
  if (o === HORIZ) {
    rect(x, y, l, 10);
    if (posX <= x + l / 2 && posX >= x - l / 2 && posY <= y + 5 && posY >= y - 5) {
      stg = OBS;
      posX = startX;
      posY = startY;
      crash.play();
    }
  } else if (o === VERT) {
    rect(x, y, 10, l);
    if (posX <= x + 5 && posX >= x - 5 && posY <= y + l / 2 && posY >= y - l / 2) {
      stg = OBS;
      posX = startX;
      posY = startY;
      crash.play();
    }
  }
  pop();
}

function wallSwitch1(x, y, o, l, c) {
  if (dist(posX, posY, s1PosX, s1PosY) <= 5) {
    if (s1) {
      switchClick.play();
    }
    selectVar(`s1`, false);
  }
  if (s1) {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOoff, s1PosX - 15.5, s1PosY - 17.5);
    } else if (c == `#a600ff`) {
      image(sPoff, s1PosX - 15.5, s1PosY - 17.5);
    } else if (c == `#00ff9d`) {
      image(sCoff, s1PosX - 15.5, s1PosY - 17.5);
    }
    pop();
    wall(x, y, o, l, c);
  } else {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOon, s1PosX - 15.5, s1PosY - 17);
    } else if (c == `#a600ff`) {
      image(sPon, s1PosX - 15.5, s1PosY - 17);
    } else if (c == `#00ff9d`) {
      image(sCon, s1PosX - 15.5, s1PosY - 17);
    }
    pop();
  }
}

function wallSwitch2(x, y, o, l, c) {
  if (dist(posX, posY, s2PosX, s2PosY) <= 5) {
    if (s2) {
      switchClick.play();
    }
    selectVar(`s2`, false);
  }
  if (s2) {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOoff, s2PosX - 15.5, s2PosY - 17.5);
    } else if (c == `#a600ff`) {
      image(sPoff, s2PosX - 15.5, s2PosY - 17.5);
    } else if (c == `#00ff9d`) {
      image(sCoff, s2PosX - 15.5, s2PosY - 17.5);
    }
    pop();
    wall(x, y, o, l, c);
  } else {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOon, s2PosX - 15.5, s2PosY - 17);
    } else if (c == `#a600ff`) {
      image(sPon, s2PosX - 15.5, s2PosY - 17);
    } else if (c == `#00ff9d`) {
      image(sCon, s2PosX - 15.5, s2PosY - 17);
    }
    pop();
  }
}

function wallSwitch3(x, y, o, l, c) {
  if (dist(posX, posY, s3PosX, s3PosY) <= 5) {
    if (s3) {
      switchClick.play();
    }
    selectVar(`s3`, false);
  }
  if (s3) {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOoff, s3PosX - 15.5, s3PosY - 17.5);
    } else if (c == `#a600ff`) {
      image(sPoff, s3PosX - 15.5, s3PosY - 17.5);
    } else if (c == `#00ff9d`) {
      image(sCoff, s3PosX - 15.5, s3PosY - 17.5);
    }
    pop();
    wall(x, y, o, l, c);
  } else {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOon, s3PosX - 15.5, s3PosY - 17);
    } else if (c == `#a600ff`) {
      image(sPon, s3PosX - 15.5, s3PosY - 17);
    } else if (c == `#00ff9d`) {
      image(sCon, s3PosX - 15.5, s3PosY - 17);
    }
    pop();
  }
}

function wallSwitch4(x, y, o, l, c) {
  if (dist(posX, posY, s4PosX, s4PosY) <= 5) {
    if (s4) {
      switchClick.play();
    }
    selectVar(`s4`, false);
  }
  if (s4) {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOoff, s4PosX - 15.5, s4PosY - 17.5);
    } else if (c == `#a600ff`) {
      image(sPoff, s4PosX - 15.5, s4PosY - 17.5);
    } else if (c == `#00ff9d`) {
      image(sCoff, s4PosX - 15.5, s4PosY - 17.5);
    }
    pop();
    wall(x, y, o, l, c);
  } else {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOon, s4PosX - 15.5, s4PosY - 17);
    } else if (c == `#a600ff`) {
      image(sPon, s4PosX - 15.5, s4PosY - 17);
    } else if (c == `#00ff9d`) {
      image(sCon, s4PosX - 15.5, s4PosY - 17);
    }
    pop();
  }
}

function wallSwitch5(x, y, o, l, c) {
  if (dist(posX, posY, s5PosX, s5PosY) <= 5) {
    if (s5) {
      switchClick.play();
    }
    selectVar(`s5`, false);
  }
  if (s5) {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOoff, s5PosX - 15.5, s5PosY - 17.5);
    } else if (c == `#a600ff`) {
      image(sPoff, s5PosX - 15.5, s5PosY - 17.5);
    } else if (c == `#00ff9d`) {
      image(sCoff, s5PosX - 15.5, s5PosY - 17.5);
    }
    pop();
    wall(x, y, o, l, c);
  } else {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOon, s5PosX - 15.5, s5PosY - 17);
    } else if (c == `#a600ff`) {
      image(sPon, s5PosX - 15.5, s5PosY - 17);
    } else if (c == `#00ff9d`) {
      image(sCon, s5PosX - 15.5, s5PosY - 17);
    }
    pop();
  }
}

function wallSwitch6(x, y, o, l, c) {
  if (dist(posX, posY, s6PosX, s6PosY) <= 5) {
    if (s6) {
      switchClick.play();
    }
    selectVar(`s6`, false);
  }
  if (s6) {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOoff, s6PosX - 15.5, s6PosY - 17.5);
    } else if (c == `#a600ff`) {
      image(sPoff, s6PosX - 15.5, s6PosY - 17.5);
    } else if (c == `#00ff9d`) {
      image(sCoff, s6PosX - 15.5, s6PosY - 17.5);
    }
    pop();
    wall(x, y, o, l, c);
  } else {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOon, s6PosX - 15.5, s6PosY - 17);
    } else if (c == `#a600ff`) {
      image(sPon, s6PosX - 15.5, s6PosY - 17);
    } else if (c == `#00ff9d`) {
      image(sCon, s6PosX - 15.5, s6PosY - 17);
    }
    pop();
  }
}

function wallSwitch7(x, y, o, l, c) {
  if (dist(posX, posY, s7PosX, s7PosY) <= 5) {
    if (s7) {
      switchClick.play();
    }
    selectVar(`s7`, false);
  }
  if (s7) {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOoff, s7PosX - 15.5, s7PosY - 17.5);
    } else if (c == `#a600ff`) {
      image(sPoff, s7PosX - 15.5, s7PosY - 17.5);
    } else if (c == `#00ff9d`) {
      image(sCoff, s7PosX - 15.5, s7PosY - 17.5);
    }
    pop();
    wall(x, y, o, l, c);
  } else {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOon, s7PosX - 15.5, s7PosY - 17);
    } else if (c == `#a600ff`) {
      image(sPon, s7PosX - 15.5, s7PosY - 17);
    } else if (c == `#00ff9d`) {
      image(sCon, s7PosX - 15.5, s7PosY - 17);
    }
    pop();
  }
}

function wallSwitch8(x, y, o, l, c) {
  if (dist(posX, posY, s8PosX, s8PosY) <= 5) {
    if (s8) {
      switchClick.play();
    }
    selectVar(`s8`, false);
  }
  if (s8) {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOoff, s8PosX - 15.5, s8PosY - 17.5);
    } else if (c == `#a600ff`) {
      image(sPoff, s8PosX - 15.5, s8PosY - 17.5);
    } else if (c == `#00ff9d`) {
      image(sCoff, s8PosX - 15.5, s8PosY - 17.5);
    }
    pop();
    wall(x, y, o, l, c);
  } else {
    push();
    translate(vw / 2, vh / 2);
    if (c == `#ffae00`) {
      image(sOon, s8PosX - 15.5, s8PosY - 17);
    } else if (c == `#a600ff`) {
      image(sPon, s8PosX - 15.5, s8PosY - 17);
    } else if (c == `#00ff9d`) {
      image(sCon, s8PosX - 15.5, s8PosY - 17);
    }
    pop();
  }
}

function drawVec(xi, yi, xf, yf, c, g) {
  push();
  let pc = color(c);
  let sc = lerpColor(pc, color(0), 0.33);
  if (g != null) {
    if (glow >= 0 && glow <= 1) {
      if (slope) {
        glow += 0.025;
      } else {
        glow -= 0.025;
      }
    } else if (glow < 0) {
      glow += 0.025;
      slope = true;
    } else if (glow > 1) {
      glow -= 0.025;
      slope = false;
    }
    pc = lerpColor(pc, color(255), glow);
    sc = lerpColor(sc, color(255), glow);
  }
  stroke(sc);
  strokeWeight(1);
  let v = createVector(xf - xi, yf - yi);
  line(xi, yi, xf, yf); //main line
  let v1 = p5.Vector.fromAngle(radians(140) + v.heading(), 25);
  let v2 = p5.Vector.fromAngle(-radians(140) + v.heading(), 25);
  let v3 = p5.Vector.fromAngle(radians(140) + v1.heading(), 9);
  let v4 = p5.Vector.fromAngle(-radians(140) + v2.heading(), 9);
  line(xf, yf, xf + v1.x, yf + v1.y); //arrowhead 1
  line(xf, yf, xf + v2.x, yf + v2.y); //arrowhead 2
  line(xf + v1.x, yf + v1.y, xf + v1.x + v3.x, yf + v1.y + v3.y); //backarrowhead 1
  line(xf + v2.x, yf + v2.y, xf + v2.x + v4.x, yf + v2.y + v4.y); //backarrowhead 2
  line(xi, yi, xf + v1.x + v3.x, yf + v1.y + v3.y); //sideline 1
  line(xi, yi, xf + v2.x + v4.x, yf + v2.y + v4.y); //sideline 2
  v.setMag(8);
  line(xf + v1.x, yf + v1.y, xf - v.x, yf - v.y);
  line(xf + v2.x, yf + v2.y, xf - v.x, yf - v.y);
  fill(pc);
  noStroke()
  quad(xi, yi, xf + v1.x + v3.x, yf + v1.y + v3.y, xf + v1.x, yf + v1.y, xf - v.x, yf - v.y);
  triangle(xf - v.x, yf - v.y, xf, yf, xf + v2.x, yf + v2.y);
  fill(sc);
  quad(xi, yi, xf + v2.x + v4.x, yf + v2.y + v4.y, xf + v2.x, yf + v2.y, xf - v.x, yf - v.y);
  triangle(xf - v.x, yf - v.y, xf, yf, xf + v1.x, yf + v1.y);
  pop();
}

function keyPressed() {
  if (scr == 1 && lvl != -1 && stg == OBS) {
    if (keyCode == 32) {
      stg = CONS;
      keyCode = null;
      openConst.play();
    }
    else if (key == `v` || key == `x` || key == `c`) {
      denied.play();
    }
  }
  else if (scr == 1 && lvl != -1 && stg == CONS) {
    if (keyCode == RIGHT_ARROW) {
      if (r - l < 5 && r - l >= -5) {
        if (dirs[dirs.length - 1] == `l`) {
          vet.pop();
          vet.pop();
          dirs.pop();
          l--;
          deleteConst.play();
        } else {
          moveConst.play();
          r++;
          vet.push(1, 0);
          dirs.push(`r`);
        }
      } else {
        denied.play();
      }
    }
    else if (keyCode == LEFT_ARROW) {
      if (r - l <= 5 && r - l > -5) {
        if (dirs[dirs.length - 1] == `r`) {
          vet.pop();
          vet.pop();
          dirs.pop();
          r--;
          deleteConst.play();
        } else {
          moveConst.play();
          l++;
          vet.push(-1, 0);
          dirs.push(`l`);
        }
      } else {
        denied.play();
      }
    }
    else if (keyCode == UP_ARROW) {
      if (u - d < 5 && u - d >= -5) {
        if (dirs[dirs.length - 1] == `d`) {
          vet.pop();
          vet.pop();
          dirs.pop();
          d--;
          deleteConst.play();
        } else {
          moveConst.play();
          u++;
          vet.push(0, -1);
          dirs.push(`u`);
        }
      } else {
        denied.play();
      }
    }
    else if (keyCode == DOWN_ARROW) {
      if ((u - d <= 5 && u - d > -5)) {
        if (dirs[dirs.length - 1] == `u`) {
          vet.pop();
          vet.pop();
          dirs.pop();
          u--;
          deleteConst.play();
        } else {
          moveConst.play();
          d++;
          vet.push(0, 1);
          dirs.push(`d`);
        }
      } else {
        denied.play();
      }
    }
    else if (key == `c`) {
      if (dirs[0] == null) {
        closeConst.play();
        if (vectors[0] == null) {
          stg = OBS;
          keyCode = null;
        } else {
          stg = DEC;
          keyCode = null;
        }
      } else {
        r = 0;
        l = 0;
        u = 0;
        d = 0;
        vet = [];
        dirs = [];
        eraseConst.play();
      }
    }
    else if (keyCode == 32 && ((r - l) != 0 || (d - u) != 0)) {
      stg = SHOW;
      keyCode = null;
      confirmConst.play();
    }
    else if ((keyCode == 32 && ((r - l) === 0 && (d - u) === 0)) || key == `v` || key == `x`){
      denied.play();
    }
  }
  else if (scr == 1 && lvl != -1 && stg == SHOW) {
    if (keyCode == 32) {
      stg = DEC;
      closeConst.play();
      if (vectors[0] == null) {
        vectors.push(r - l, d - u);
        counter.push(1);
      } else {
        if (addMode == add) {
          vectors.push(r - l, d - u);
          counter.push(1);
        } else {
          vectors.push((r - l) - vectors[vectors.length - 2], (d - u) - vectors[vectors.length - 1]);
          counter.push(-1);
        }
      }
    } else if (key == `c`) {
      stg = CONS;
      r = 0;
      l = 0;
      u = 0;
      d = 0;
      vet = [];
      dirs = [];
      eraseConst.play();
    }
  }
  else if (scr == 1 && lvl != -1 && stg == DEC) {
    if (keyCode == 32) {
      stg = CONS;
      r = 0;
      l = 0;
      u = 0;
      d = 0;
      vet = [];
      dirs = [];
      openConst.play();
    }
    else if (key == `c`) {
      if (vectors[2] == null) {
        stg = OBS;
        deleteConst.play();
      } else {
        vectors.pop();
        vectors.pop();
        counter.pop();
        deleteConst.play();
      }
    }
    else if (keyCode == 8) {
      stg = 0;
      eraseConst.play();
    }
    else if (key == `v`) {
      changeMode.play();
      if (addMode == add) {
        addMode = sub;
      } else {
        addMode = add;
      }
    } else if (key == `x`) {
      stg = MOV;
      newStartX = startX;
      newStartY = startY;
      directions = Array.from(vectors);
    }
  }
}

function obs() {
  vet = [];
  dirs = [];
  r = 0;
  l = 0;
  u = 0;
  d = 0;
  vectors = [];
  directions = [];
  addMode = add;
  counter = [];
  s1 = true;
  s2 = true;
  s3 = true;
  s4 = true;
  s5 = true;
  s6 = true;
  s7 = true;
  s8 = true;
  movLoop.stop();
  movBeg.stop();
  Played = false;
  lvlCompletePlayed = false;
}

function cons() {
  push();
  translate(vw / 2, vh / 2);
  for (i = 0, prev = [startX, startY]; i < vectors.length; i += 2) {
    if (counter[i / 2] == 1) {
      drawVec(prev[0], prev[1], prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1], `#ff0000`);
    } else {
      drawVec(prev[0], prev[1], prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1], `#00ee00`);
    }
    prev = [prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1]];
  }
  pop();
  push();
  stroke(0);
  strokeWeight(2);
  fill(`#ffffffdd`);
  square(vw / 2, vh / 2, 21 / 25 * vh);
  noStroke();
  fill(255, 0, 0);
  circle(vw / 2, vh / 2, 10);
  pop();
  for (i = 0, prev = [vw / 2, vh / 2]; i < 2 * (r + l + u + d); i += 2) {
    if (i == 2 * (r + l + u + d) - 2) {
    drawVec(prev[0], prev[1], prev[0] + 57 * vet[i], prev[1] + 57 * vet[i + 1], 0, true);
    } else {
      drawVec(prev[0], prev[1], prev[0] + 57 * vet[i], prev[1] + 57 * vet[i + 1], 0);
    }
    prev = [prev[0] + 57 * vet[i], prev[1] + 57 * vet[i + 1], 0];
  }
}

function show() {
  push();
  translate(vw / 2, vh / 2);
  for (i = 0, prev = [startX, startY]; i < vectors.length; i += 2) {
    if (counter[i / 2] == 1) {
      drawVec(prev[0], prev[1], prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1], `#ff0000`);
    } else {
      drawVec(prev[0], prev[1], prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1], `#00ee00`);
    }
    prev = [prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1]];
  }
  pop();
  push();
  stroke(0);
  strokeWeight(2);
  fill(`#ffffffdd`);
  square(vw / 2, vh / 2, 1.05 * 4 / 5 * vh);
  noStroke();
  fill(255, 0, 0);
  circle(vw / 2, vh / 2, 10);
  pop();
  for (i = 0, prev = [vw / 2, vh / 2]; i < 2 * (r + l + u + d); i += 2) {
    drawVec(prev[0], prev[1], prev[0] + 57 * vet[i], prev[1] + 57 * vet[i + 1], 0);
    prev = [prev[0] + 57 * vet[i], prev[1] + 57 * vet[i + 1]];
  }
  drawVec(vw / 2, vh / 2, vw / 2 + 57 * (r - l), vh / 2 + 57 * (d - u), `#FF0000`);
}

function decide() {
  push();
  translate(vw / 2, vh / 2);
  for (i = 0, prev = [startX, startY]; i < vectors.length; i += 2) {
    if (i == vectors.length - 2) {
      if (counter[i / 2] == 1) {
        drawVec(prev[0], prev[1], prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1], `#ff0000`, true);
      } else {
        drawVec(prev[0], prev[1], prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1], `#00ee00`, true);
      }
    } else {
      if (counter[i / 2] == 1) {
        drawVec(prev[0], prev[1], prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1], `#ff0000`);
      } else {
        drawVec(prev[0], prev[1], prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1], `#00ee00`);
      }
    }
    prev = [prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1]];
  }
  pop();
}

function move() {
  push();
  translate(vw / 2, vh / 2);
  for (i = 0, prev = [startX, startY]; i < vectors.length; i += 2) {
    if (counter[i / 2] == 1) {
      drawVec(prev[0], prev[1], prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1], `#ff0000`);
    } else {
      drawVec(prev[0], prev[1], prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1], `#00ee00`);
    }
    prev = [prev[0] + currW * vectors[i], prev[1] + currW * vectors[i + 1]];
  }
  pop();
  push();
  translate(vw / 2, vh / 2);
  if (directions[0] == null) {
    mBonk(posX, posY, vectors[vectors.length - 2], vectors[vectors.length - 1]);
    if (dist(posX, posY, finishX, finishY) > 0.1) {
      stg = OBS;
      posX = startX;
      posY = startY;
    }
  } else if (dist(posX, posY, newStartX + currW * directions[0], newStartY + currW * directions[1]) > 5) {
    if (!movLoop.isLooping() && !movBeg.isPlaying() && Played) {
      movLoop.loop();
    }
    if (!movBeg.isPlaying() && !Played) {
      movBeg.play();
      Played = true;
    }
    let v1 = createVector(posX, posY);
    let v2 = createVector(currW * directions[0], currW * directions[1]);
    v2.mult(10 / (v2.mag()));
    v1.add(v2);
    posX = v1.x;
    posY = v1.y;
    mBonk(posX, posY, directions[0], directions[1]);
  } else if (dist(posX, posY, newStartX + currW * directions[0], newStartY + currW * directions[1]) <= 5) {
    posX = newStartX + currW * directions[0];
    posY = newStartY + currW * directions[1];
    mBonk(posX, posY, directions[0], directions[1]);
    newStartX = newStartX + currW * directions[0];
    newStartY = newStartY + currW * directions[1];
    directions.shift();
    directions.shift();
  }
  pop();
}

function routine() {
  push();
  translate(vw / 2, vh / 2);
  stroke(0);
  strokeWeight(1);
  fill(0, 255, 0);
  image(Finish, finishX - 15, finishY - 15);
  pop();
  if (stg != MOV) { 
    push();
    translate(vw/2, vh/2);
    mBonk(startX, startY, 0, -1);
    pop();
  }
  if (stg == OBS) {
    obs();
  } else if (stg == CONS) {
    cons();
  } else if (stg == SHOW) {
    show();
  } else if (stg == DEC) {
    decide();
  } else if (stg == MOV) {
    move();
  }
  if (addMode == add) {
    push();
    fill(255, 0, 0);
    circle(vw - 30, 78, 40);
    rectMode(CENTER);
    fill(255);
    rect(vw - 30, 78, 25, 10);
    rect(vw - 30, 78, 10, 25);
    pop();
  } else {
    push();
    fill(0, 255, 0);
    circle(vw - 30, 78, 40);
    rectMode(CENTER);
    fill(255);
    rect(vw - 30, 78, 25, 10);
    pop();
  }
  for (i = 0; i < counter.length; i++) {
    sum += counter[i];
  }
  push();
  translate(0,0);
  rectMode(CENTER);
  textFont(PlayFont);
  textSize(30);
  textAlign(RIGHT, CENTER);
  text(`sr: ${required}  sa: ${sum}  vr: ${vreq}  va: ${vectors.length/2}`, vw/2, 28.75, vw, 57.5);
  pop();
  if (dist(posX, posY, finishX, finishY) <= 0.1 && directions[0] == null) {
    if (sum == required && vectors.length / 2 == vreq) {
      push();
      stroke(0);
      strokeWeight(2);
      fill(`#ffffffdd`);
      rect(vw / 2, vh / 2, 450, 300);
      button(vw / 2 - 100, vh / 2, 150, 75, `Voltar`, `lvl`, -1);
      button(vw / 2 + 100, vh / 2, 150, 75, ``, `stg`, 0, `posX`, startX, `posY`, startY);
      imageMode(CENTER);
      againIcon.resize(50, 50);
      image(againIcon, vw / 2 + 100, vh / 2);
      rectMode(CENTER);
      textAlign(CENTER)
      textSize(45);
      text(`Muito bem!`, vw / 2, vh / 2 - 71.25);
      movLoop.stop();
      movBeg.stop();
      Played = false;
      if (!lvlComplete.isPlaying() && !lvlCompletePlayed) {
        lvlComplete.play();
        lvlCompletePlayed = true;
      }
      pop();
      flag[lvl] = true;
    } else {
      stg = OBS;
      posX = startX;
      posY = startY;
    }
  }
}

function setup() {
  createCanvas(vw, vh);
  frameRate(30);
}

function draw() {
  if (scr === 0) {
    rectMode(CENTER);
    background('#e3e3e3');
    grid(-vw/2, vh/2, 128, 10, 16);
    setGradient(0, 555, vw, 165, `#999999`, `#000000`, `y`);
    push();
    stroke(`#999999`);
    strokeWeight(10);
    line(0, 555, vw, 555);
    pop();
    if (bonkPosX <= vw) {
      drawBonk(bonkPosX, 300);
      bonkPosX += 10;
    } else {
      bonkPosX = -168;
    }
    button(vw / 2, vh / 2 - 1.25 * 75, 250, 75, 'Jogar', 'scr', 1);
    button(vw / 2, vh / 2, 250, 75, 'Instruções', 'scr', 2, `inst`, 0);
    button(vw / 2, vh / 2 + 1.25 * 75, 250, 75, 'Créditos', 'scr', 3);
    push();
    textFont(PlayFont);
    textSize(100);
    strokeWeight(0);
    fill(0);
    text(`Vectoria`, vw / 2, 150);
    pop();
  }
  else if (scr == 1) {
    if (lvl == -1) {
      movLoop.stop();
      movBeg.stop();
      Played = false;
      rectMode(CENTER);
      background('#e3e3e3');
      grid(-vw/2, vh/2, 128, 10, 16);
      strokeWeight(0);
      textSize(45)
      textFont(PlayFont);
      fill(0);
      text('Seleção de fases', vw / 2, 40);
      button(50, 25, 100, 50, '', 'scr', 0);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      button(vw / 2, vh / 2 - 1.25 * 100, 300, 100, ` Tutorial`, `lvl`, 0, `stg`, 0, `posX`, -121, `posY`, 181.5);
      if (flag[0]) {
        button(vw / 2 - 2 * 1.25 * 100, vh / 2, 100, 100, ` 01`, `lvl`, 1, `stg`, 0, `posX`, -121, `posY`, 181.5);
      } else {
        offButton(vw / 2 - 2 * 1.25 * 100, vh / 2, 100, 100, ` 01`);
      }
      if (flag[1]) {
        button(vw / 2 - 1.25 * 100, vh / 2, 100, 100, ` 02`, `lvl`, 2, `stg`, 0, `posX`, 151.25, `posY`, -151.25);
      } else {
        offButton(vw / 2 - 1.25 * 100, vh / 2, 100, 100, ` 02`);
      }
      if (flag[2]) {
        button(vw / 2, vh / 2, 100, 100, ` 03`, `lvl`, 3, `stg`, 0, `posX`, -60.5, `posY`, 181.5);
      } else {
        offButton(vw / 2, vh / 2, 100, 100, ` 03`);
      }
      if (flag[3]) {
        button(vw / 2 + 1.25 * 100, vh / 2, 100, 100, ` 04`, `lvl`, 4, `stg`, 0, `posX`, 0, `posY`, -101);
      } else {
        offButton(vw / 2 + 1.25 * 100, vh / 2, 100, 100, ` 04`);
      }
      if (flag[4]) {
        button(vw / 2 + 2 * 1.25 * 100, vh / 2, 100, 100, ` 05`, `lvl`, 5, `stg`, 0, `posX`, -453.75, `posY`, 151.25);
      } else {
        offButton(vw / 2 + 2 * 1.25 * 100, vh / 2, 100, 100, ` 05`);
      }
      if (flag[5]) {
        button(vw / 2 - 2 * 1.25 * 100, vh / 2 + 1.25 * 100, 100, 100, ` 06`, `lvl`, 6, `stg`, 0, `posX`, 0, `posY`, 0);
      } else {
        offButton(vw / 2 - 2 * 1.25 * 100, vh / 2 + 1.25 * 100, 100, 100, ` 06`);
      }
      if (flag[6]) {
        button(vw / 2 - 1.25 * 100, vh / 2 + 1.25 * 100, 100, 100, ` 07`, `lvl`, 7, `stg`, 0, `posX`, -121, `posY`, 0);
      } else {
        offButton(vw / 2 - 1.25 * 100, vh / 2 + 1.25 * 100, 100, 100, ` 07`);
      }
      if (flag[7]) {
        button(vw / 2, vh / 2 + 1.25 * 100, 100, 100, ` 08`, `lvl`, 8, `stg`, 0, `posX`, -423.5, `posY`, -181.5);
      } else {
        offButton(vw / 2, vh / 2 + 1.25 * 100, 100, 100, ` 08`);
      }
      if (flag[8]) {
        button(vw / 2 + 1.25 * 100, vh / 2 + 1.25 * 100, 100, 100, ` 09`, `lvl`, 9, `stg`, 0, `posX`, -605/12, `posY`, 605/3);
      } else {
        offButton(vw / 2 + 1.25 * 100, vh / 2 + 1.25 * 100, 100, 100, ` 09`);
      }
      if (flag[9]) {
        button(vw / 2 + 2 * 1.25 * 100, vh / 2 + 1.25 * 100, 100, 100, `10`, `lvl`, 10, `stg`, 0, `posX`, 605/3, `posY`, -605/6);
      } else {
        offButton(vw / 2 + 2 * 1.25 * 100, vh / 2 + 1.25 * 100, 100, 100, `10`)
      }
    }
    else if (lvl == 0) {
      //<specific lvl data>
      currW = 121;
      startX = -121;
      startY = 181.5;
      finishX = 121;
      finishY = 181.5;
      required = 0;
      vreq = 2;
      sum = 0;
      rectMode(CENTER);
      background('#eaeaea');
      strokeWeight(0);
      textSize(45);
      textFont(PlayFont);
      fill(0);
      text(`Tutorial`, vw / 2, 40);
      button(50, 25, 100, 50, '', 'lvl', -1);
      button(50, 25, 100, 50, '', 'stg', OBS);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      wall(0, 302.5, HORIZ, 484);
      wall(0, -302.5, HORIZ, 484);
      wall(242, 0, VERT, 615);
      wall(-242, 0, VERT, 615);
      wall(0, 151.25, VERT, 312.5);
      grid(-242, 302.5, currW, 4, 5);
      //</specific lvl data>
      //<common lvl data>
      routine();
      //</common lvl data>
    }
    else if (lvl == 1) {
      //<specific lvl data>
      currW = 121;
      startX = -121;
      startY = 181.5;
      finishX = 121;
      finishY = 181.5;
      required = -1;
      vreq = 5;
      sum = 0;
      rectMode(CENTER);
      background('#e3e3e3');
      strokeWeight(0);
      textSize(45)
      textFont(PlayFont);
      fill(0)
      text(`Nível ${lvl}`, vw / 2, 40);
      button(50, 25, 100, 50, '', 'lvl', -1);
      button(50, 25, 100, 50, '', 'stg', OBS);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      wall(0, 302.5, HORIZ, 484);
      wall(0, -302.5, HORIZ, 484);
      wall(242, 0, VERT, 615);
      wall(-242, 0, VERT, 615);
      wall(0, 151.25, VERT, 312.5);
      grid(-242, 302.5, currW, 4, 5);
      //</specific lvl data>
      //<common lvl data>
      routine();
      //</common lvl data>
    }
    else if (lvl == 2) {
      currW = 151.25;
      startX = 151.25;
      startY = -151.25;
      finishX = 0;
      finishY = 0;
      required = 0;
      vreq = 4;
      sum = 0;
      rectMode(CENTER);
      background('#e3e3e3');
      strokeWeight(0);
      textSize(45)
      textFont(PlayFont);
      fill(0)
      text(`Nível ${lvl}`, vw / 2, 40);
      button(50, 25, 100, 50, '', 'lvl', -1);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      wall(0, -2 * currW, HORIZ, 4 * currW);
      wall(0, 2 * currW, HORIZ, 4 * currW);
      wall(-2 * currW, 0, VERT, 4 * currW + 10);
      wall(2 * currW, 0, VERT, 4 * currW + 10);
      wall(0.75 * currW, -0.5 * currW, HORIZ, 2.5 * currW);
      wall(-0.5 * currW, 0, VERT, currW + 10);
      wall(-1 / 8 * currW, 0.5 * currW, HORIZ, 3 / 4 * currW);
      grid(-302.5, 302.5, currW, 4, 4);
      routine();
    }
    else if (lvl == 3) {
      currW = 121;
      startX = -60.5;
      startY = 181.5;
      finishX = 60.5;
      finishY = 181.5;
      required = -2;
      vreq = 4;
      sum = 0;
      rectMode(CENTER);
      background('#e3e3e3');
      strokeWeight(0);
      textSize(45)
      textFont(PlayFont);
      fill(0)
      text(`Nível ${lvl}`, vw / 2, 40);
      button(50, 25, 100, 50, '', 'lvl', -1);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      wall(0, 2.5 * currW, HORIZ, 5 * currW);
      wall(0, -2.5 * currW, HORIZ, 5 * currW);
      wall(2.5 * currW, 0, VERT, 5 * currW + 10);
      wall(-2.5 * currW, 0, VERT, 5 * currW + 10);
      wall(0, currW, VERT, 3 * currW + 10);
      wall(0, 0.5 * currW, HORIZ, 2 * currW);
      grid(-2.5 * currW, 2.5 * currW, currW, 5, 5);
      routine();
    }
    else if (lvl == 4) {
      currW = 202;
      startX = 0;
      startY = -0.5 * currW;
      finishX = currW;
      finishY = -0.5 * currW;
      required = 1;
      vreq = 13;
      sum = 0;
      rectMode(CENTER);
      background('#e3e3e3');
      strokeWeight(0);
      textSize(45)
      textFont(PlayFont);
      fill(0)
      text(`Nível ${lvl}`, vw / 2, 40);
      button(50, 25, 100, 50, '', 'lvl', -1);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      wall(0, 1.5 * currW, HORIZ, 4 * currW);
      wall(0, -1.5 * currW, HORIZ, 4 * currW);
      wall(-2 * currW, 0, VERT, 3 * currW + 10);
      wall(2 * currW, 0, VERT, 3 * currW + 10);
      wall(0.875 * currW, 0.25 * currW, HORIZ, 2.25 * currW);
      wall(-0.25 * currW, 0.875 * currW, VERT, 1.25 * currW + 10);
      push();
      translate(vw / 2, vh / 2);
      rectMode(CORNER);
      noStroke();
      fill(150);
      rect(-0.25 * currW, 0.25 * currW, 2.25 * currW, 1.25 * currW);
      pop();
      grid(-2 * currW, 1.5 * currW, currW, 4, 3);
      routine();
    }
    else if (lvl == 5) {
      currW = 151.25;
      startX = -3 * currW;
      startY = currW;
      finishX = 3 * currW;
      finishY = currW;
      required = 0;
      vreq = 4;
      sum = 0;
      s1PosX = currW;
      s1PosY = -1 * currW;
      rectMode(CENTER);
      background('#e3e3e3');
      strokeWeight(0);
      textSize(45)
      textFont(PlayFont);
      fill(0)
      text(`Nível ${lvl}`, vw / 2, 40);
      button(50, 25, 100, 50, '', 'lvl', -1);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      grid(-4 * currW, 2 * currW, currW, 8, 2);
      grid(0, 0, currW, 2, 2);
      push();
      translate(vw / 2, vh / 2);
      stroke(`#99999988`);
      strokeWeight(3);
      line(0, 0, 2 * currW, 0);
      pop();
      wall(0, 2 * currW, HORIZ, 8 * currW);
      wall(-2 * currW, 0, HORIZ, 4 * currW);
      wall(3 * currW, 0, HORIZ, 2 * currW);
      wall(-4 * currW, currW, VERT, 2 * currW + 10);
      wall(4 * currW, currW, VERT, 2 * currW + 10);
      wall(0, -1 * currW, VERT, 2 * currW + 10);
      wall(2 * currW, -1 * currW, VERT, 2 * currW + 10);
      wall(currW, -2 * currW, HORIZ, 2 * currW);
      wallSwitch1(2 * currW, currW, VERT, 2 * currW - 10, `#ffae00`);
      routine();
    }
    else if (lvl == 6) {
      currW = 605 / 6;
      startX = 0;
      startY = 0;
      finishX = 0;
      finishY = -2 * currW;
      required = 0;
      vreq = 6;
      sum = 0;
      s1PosX = 0;
      s1PosY = 2 * currW;
      s2PosX = -2 * currW;
      s2PosY = 0;
      s3PosX = 2 * currW;
      s3PosY = 0;
      rectMode(CENTER);
      background('#e3e3e3');
      strokeWeight(0);
      textSize(45)
      textFont(PlayFont);
      fill(0)
      text(`Nível ${lvl}`, vw / 2, 40);
      button(50, 25, 100, 50, '', 'lvl', -1);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      grid(-3 * currW, currW, currW, 6, 2);
      grid(-currW, 3 * currW, currW, 2, 2);
      grid(-currW, -currW, currW, 2, 2);
      push();
      translate(vw / 2, vh / 2);
      stroke(`#99999988`);
      strokeWeight(3);
      line(-currW, currW, currW, currW);
      line(-currW, -currW, currW, -currW);
      pop();
      wall(0, 3 * currW, HORIZ, 2 * currW);
      wall(0, -3 * currW, HORIZ, 2 * currW);
      wall(3 * currW, 0, VERT, 2 * currW + 10);
      wall(-3 * currW, 0, VERT, 2 * currW + 10);
      wall(-1 * currW, 2 * currW, VERT, 2 * currW + 10);
      wall(currW, 2 * currW, VERT, 2 * currW + 10);
      wall(currW, -2 * currW, VERT, 2 * currW + 10);
      wall(-1 * currW, -2 * currW, VERT, 2 * currW + 10);
      wall(-2 * currW, currW, HORIZ, 2 * currW);
      wall(2 * currW, currW, HORIZ, 2 * currW);
      wall(-2 * currW, -1 * currW, HORIZ, 2 * currW);
      wall(2 * currW, -1 * currW, HORIZ, 2 * currW);
      wallSwitch1(-currW, 0, VERT, 2 * currW - 10, `#ffae00`);
      wallSwitch2(currW, 0, VERT, 2 * currW - 10, `#a600ff`);
      wallSwitch3(0, -currW, HORIZ, 2 * currW - 10, `#00ff9d`);
      routine();
    }
    else if (lvl == 7) {
      currW = 121;
      startX = -currW;
      startY = 0;
      finishX = 3 * currW;
      finishY = 0;
      required = 0;
      vreq = 4;
      sum = 0;
      s1PosX = -3 * currW;
      s1PosY = currW;
      s2PosX = -2 * currW;
      s2PosY = 0;
      s3PosX = -currW;
      s3PosY = -currW;
      rectMode(CENTER);
      background('#e3e3e3');
      strokeWeight(0);
      textSize(45)
      textFont(PlayFont);
      fill(0)
      text(`Nível ${lvl}`, vw / 2, 40);
      button(50, 25, 100, 50, '', 'lvl', -1);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      grid(-4 * currW, 2 * currW, currW, 4, 4);
      grid(0, currW, currW, 4, 2);
      push();
      translate(vw / 2, vh / 2);
      stroke(`#99999988`);
      strokeWeight(3);
      line(0, -currW, 0, currW);
      pop();
      wall(-2 * currW, 2 * currW, HORIZ, 4 * currW);
      wall(-2 * currW, -2 * currW, HORIZ, 4 * currW);
      wall(-4 * currW, 0, VERT, 4 * currW + 10);
      wall(0, -1.5 * currW, VERT, currW + 10);
      wall(0, 1.5 * currW, VERT, currW + 10);
      wall(2 * currW, -currW, HORIZ, 4 * currW);
      wall(2 * currW, currW, HORIZ, 4 * currW);
      wall(4 * currW, 0, VERT, 2 * currW + 10);
      wallSwitch1(0, 0, VERT, 2 * currW - 10, `#ffae00`);
      wallSwitch2(currW, 0, VERT, 2 * currW - 10, `#a600ff`);
      wallSwitch3(2 * currW, 0, VERT, 2 * currW - 10, `#00ff9d`);
      routine();
    }
    else if (lvl == 8) {
      currW = 121;
      startX = -3.5*currW;
      startY = -1.5*currW;
      finishX = 3.5*currW;
      finishY = 0.5*currW;
      required = -1;
      vreq = 5;
      sum = 0;
      s1PosX = -2.5*currW;
      s1PosY = -0.5*currW;
      s2PosX = -3.5*currW;
      s2PosY = 1.5*currW;
      s3PosX = -0.5*currW;
      s3PosY = -0.5*currW;
      rectMode(CENTER);
      background('#e3e3e3');
      strokeWeight(0);
      textSize(45)
      textFont(PlayFont);
      fill(0)
      text(`Nível ${lvl}`, vw / 2, 40);
      button(50, 25, 100, 50, '', 'lvl', -1);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      grid(-4.5*currW, 2.5*currW, currW, 5, 5);
      grid(0.5*currW, 1.5*currW, currW, 4, 2);
      push();
      translate(vw / 2, vh / 2);
      stroke(`#99999988`);
      strokeWeight(3);
      line(0.5*currW, -0.5*currW, 0.5*currW, 1.5*currW);
      pop();
      wall(-2*currW, 2.5*currW, HORIZ, 5*currW);
      wall(-2*currW, -2.5*currW, HORIZ, 5*currW);
      wall(-4.5*currW, 0, VERT, 5*currW + 10);
      wall(0.5*currW, -1.5*currW, VERT, 2*currW + 10);
      wall(0.5*currW, 2*currW, VERT, currW + 10);
      wall(2.5*currW, -0.5*currW, HORIZ, 4*currW);
      wall(2.5*currW, 1.5*currW, HORIZ, 4*currW);
      wall(4.5*currW, 0.5*currW, VERT, 2*currW + 10);
      wall(-2*currW, 0.75*currW, VERT, 3.5*currW + 10);
      wall(-3.875*currW, 0, HORIZ, 1.25*currW + 10);
      wallSwitch1(0.5*currW, 0.5*currW, VERT, 2*currW - 10, `#ffae00`);
      wallSwitch2(1.5*currW, 0.5*currW, VERT, 2*currW - 10, `#a600ff`);
      wallSwitch3(2.5*currW, 0.5*currW, VERT, 2*currW - 10, `#00ff9d`);
      routine();
    }
    else if (lvl == 9) {
      currW = 605/6;
      startX = -0.5*currW;
      startY = 2*currW;
      finishX = 0.5*currW;
      finishY = 2*currW;
      required = -10;
      vreq = 12;
      sum = 0;
      s1PosX = 1.5*currW;
      s1PosY = -currW;
      s2PosX = -1.5*currW;
      s2PosY = -2*currW;
      s3PosX = 1.5*currW;
      s3PosY = -2*currW;
      rectMode(CENTER);
      background('#e3e3e3');
      strokeWeight(0);
      textSize(45)
      textFont(PlayFont);
      fill(0)
      text(`Nível ${lvl}`, vw / 2, 40);
      button(50, 25, 100, 50, '', 'lvl', -1);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      grid(-2.5*currW, 3*currW, currW, 5, 6);
      wall(0, 3*currW, HORIZ, 5*currW);
      wall(0, -3*currW, HORIZ, 5*currW);
      wall(-2.5*currW, 0, VERT, 6*currW + 10);
      wall(2.5*currW, 0, VERT, 6*currW + 10);
      wall(0, 0.875*currW, VERT, 4.25*currW + 10);
      wall(0, 1.5*currW, HORIZ, 1.5*currW + 10);
      wall(0, -0.5*currW, HORIZ, 1.5*currW + 10);
      wall(-1.875*currW, 0.5*currW, HORIZ, 1.25*currW +10);
      wall(-1.875*currW, -1.5*currW, HORIZ, 1.25*currW +10);
      wall(1.875*currW, -1.5*currW, HORIZ, 1.25*currW +10);
      wall(1.875*currW, 0.5*currW, HORIZ, 1.25*currW +10);
      wallSwitch1(-1.25*currW, -2.25*currW, VERT, 1.5*currW - 10, `#ffae00`);
      wallSwitch2(1.25*currW, -2.25*currW, VERT, 1.5*currW - 10, `#a600ff`);
      wallSwitch3(1.625*currW, -0.5*currW, HORIZ, 1.75*currW - 10, `#00ff9d`);
      routine();
    }
    else if (lvl == 10) {
      currW = 605/6;
      startX = 2*currW;
      startY = -currW;
      finishX = -2*currW;
      finishY = currW;
      required = 0;
      vreq = 4;
      sum = 0;
      s1PosX = 0;
      s1PosY = -currW;
      s2PosX = currW;
      s2PosY = -currW;
      s3PosX = 0;
      s3PosY = 0;
      s4PosX = currW;
      s4PosY = 0;
      s5PosX = 2*currW;
      s5PosY = 0;
      s6PosX = 0;
      s6PosY = currW;
      s7PosX = currW;
      s7PosY = currW;
      s8PosX = 2*currW;
      s8PosY = currW;
      rectMode(CENTER);
      background('#e3e3e3');
      strokeWeight(0);
      textSize(45)
      textFont(PlayFont);
      fill(0);
      text(`Nível ${lvl}`, vw / 2, 40);
      button(50, 25, 100, 50, '', 'lvl', -1);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      grid(-currW, 3*currW, currW, 5, 6);
      grid(-3*currW, 2*currW, currW, 2, 2);
      push();
      translate(vw / 2, vh / 2);
      stroke(`#99999988`);
      strokeWeight(3);
      line(-currW, 0, -currW, 2*currW);
      pop();
      wall(1.5*currW, 3*currW, HORIZ, 5*currW);
      wall(1.5*currW, -3*currW, HORIZ, 5*currW);
      wall(4*currW, 0, VERT, 6*currW + 10);
      wall(-currW, -1.5*currW, VERT, 3*currW + 10);
      wall(-currW, 2.5*currW, VERT, currW + 10);
      wall(-3*currW, currW, VERT, 2*currW + 10);
      wall(-2*currW, 0, HORIZ, 2*currW);
      wall(-2*currW, 2*currW, HORIZ, 2*currW);
      wallSwitch1(-currW, currW, VERT, 2*currW - 10, `#ffae00`);
      wallSwitch2(-currW, currW, VERT, 2*currW - 10, `#ffae00`);
      wallSwitch3(-currW, currW, VERT, 2*currW - 10, `#ffae00`);
      wallSwitch4(-currW, currW, VERT, 2*currW - 10, `#ffae00`);
      wallSwitch5(-currW, currW, VERT, 2*currW - 10, `#ffae00`);
      wallSwitch6(-currW, currW, VERT, 2*currW - 10, `#ffae00`);
      wallSwitch7(-currW, currW, VERT, 2*currW - 10, `#ffae00`);
      wallSwitch8(-currW, currW, VERT, 2*currW - 10, `#ffae00`);
      routine();
    }
  }
  else if (scr == 2) {
    if (inst === 0) {
      push();
      rectMode(CENTER);
      background('#e3e3e3');
      button(50, 25, 100, 50, '', 'scr', 0);
      button(vw - 50, vh - 25, 100, 50, `Prox.`, 'inst', 1);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      strokeWeight(0);
      textSize(45);
      textFont(PlayFont);
      text('Instruções', vw / 2, 40);
      textAlign(CENTER, TOP)
      textSize(25)
      textLeading(35);
      text(`Este jogo é baseado no objetivo MTMT1MOA002 da BNCC, onde o aluno deve aprender a\noperar com soma de vetores.`, vw / 2, 1 / 5 * vh, 0.8 * vw, 95);
      text(`Este jogo consiste em levar o robô até a chegada (quadrado verde)\npor meio da construção de vetores que guiarão o caminho do robô,\nsem bater nas paredes.`, vw / 2, 1 / 5 * vh + 125, 0.8 * vw, 155)
      image(excaminhoinc2, 0.1 * vw, 1 / 5 * vh + 165, 308, 383, 4, 4, 369, 459);
      image(excaminhoinc1, 0.1 * vw + 358, 1 / 5 * vh + 165, 308, 383, 4, 5, 369, 459);
      image(Excaminhocorr, 0.1 * vw + 716, 1 / 5 * vh + 165, 308, 383, 1, 4, 340, 459)
      pop();
    }
    else if (inst == 1) {
      push();
      rectMode(CENTER);
      //stroke(0)
      //strokeWeight(2)
      background('#e3e3e3');
      //line(0, 475, vw, 475)
      button(50, 25, 100, 50, '', 'scr', 0);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      button(vw - 50, vh - 25, 100, 50, `Prox.`, 'inst', 2);
      button(50, vh - 25, 100, 50, `Ant`, 'inst', 0);
      strokeWeight(0);
      textSize(45);
      textFont(PlayFont);
      text('Instruções', vw / 2, 40);
      textAlign(CENTER, TOP)
      textSize(25)
      textLeading(35);
      text(`Aperte ESPAÇO para abrir o editor de vetores, aqui você pode usar as setas direcionais do\nteclado para construir um "vetor-guia".`, vw / 2, 1 / 5 * vh, 0.8 * vw, 95);
      image(exeditor1, 0.1 * vw, 175, 237, 237, 4, 5, 460, 461);
      image(exeditor2, 0.1 * vw + 262, 175, 237, 237, 8, 4, 461, 461);
      image(exeditor3, 0.1 * vw + 524, 175, 237, 237, 7, 0, 461, 461);
      image(exeditor4, 0.1 * vw + 786, 175, 237, 237, 4, 3, 461, 461);
      text(`cada um desses é um vetor-guia.`, vw / 2, 445, 0.8 * vw, 45);
      image(exguias, vw / 2 - 0.5 * 191, 470, 191, 237, 4, 5, 369, 459);
      pop();
    }
    else if (inst == 2) {
      push();
      rectMode(CENTER);
      //stroke(0)
      //strokeWeight(2)
      background('#e3e3e3');
      //line(0, 475, vw, 475)
      button(50, 25, 100, 50, '', 'scr', 0);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      button(vw - 50, vh - 25, 100, 50, `Prox.`, 'inst', 3);
      button(50, vh - 25, 100, 50, `Ant`, 'inst', 1);
      strokeWeight(0);
      textSize(45);
      textFont(PlayFont);
      text('Instruções', vw / 2, 40);
      textAlign(CENTER, TOP)
      textSize(25)
      textLeading(35);
      text(`Aperte ESPAÇO para confirmar a construção, o vetor construído será o resultante da soma de todos os vetores-construtores (em preto), segundo a operação de SOMA VETORIAL.`, vw / 2, 1 / 5 * vh, 0.8 * vw, 95);
      image(exconst1, 260, 175, 237, 237, 5, 4, 461, 461);
      image(exconst2, 522, 175, 237, 237, 6, 5, 461, 461);
      image(exconst3, 784, 175, 237, 237, 6, 3, 461, 461);
      text(`aperte 'C' para apagar tudo. Observe os números no canto da tela:`, vw / 2, 445, 0.8 * vw, 45);
      pop();
      image(exnum, 430.5, 470, 419, 237, 0, 1, 957, 542)
    }
    else if (inst == 3) {
      push();
      rectMode(CENTER);
      //stroke(0)
      //strokeWeight(2)
      background('#e3e3e3');
      //line(0, 96.5, vw, 96.5)
      button(50, 25, 100, 50, '', 'scr', 0);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      button(vw - 50, vh - 25, 100, 50, `Prox.`, 'inst', 4);
      button(50, vh - 25, 100, 50, `Ant`, 'inst', 2);
      strokeWeight(0);
      textSize(45);
      textFont(PlayFont);
      text('Instruções', vw / 2, 40);
      textAlign(CENTER, TOP)
      textSize(25)
      textLeading(35);
      text(`vr (vetores requeridos) é o número de vetores que você deve usar em cada fase, sem menos nem mais! Os vetores-guia já construidos são contados por va (vetores atuais).
`, vw / 2, 1 / 5 * vh, 0.8 * vw, 95);
      image(exvrinc1, 329, 175, 191, 237, 4, 6, 369, 459);
      image(exvrinc2, 545, 175, 191, 237, 3, 4, 369, 459);
      image(exvrcorr, 761, 175, 191, 237, 3, 6, 369, 459);
      text(`vr: 5, va: 4`, 424.5, 445, 0.8 * vw, 45);
      text(`vr: 5, va: 6`, 640.5, 445, 0.8 * vw, 45);
      text(`vr: 5, va: 5`, 856.5, 445, 0.8 * vw, 45);
      text(`sr é o seu saldo requerido, observe que alguns vetores são vermelhos, e outros, verdes. o\nseu saldo é calculado como Nverm - Nverd, ou seja o número de vetores vermelhos menos\nos verdes, e ao comandar o robô a andar, seu saldo atual (sa) deve corresponder ao\nrequerido na fase.`, vw / 2, 560, 0.8 * vw, 205);
      text(`Vamos esclarecer a difereça entre vetores verdes e vermelhos, há dois modos de construir\nvetores-guia: o modo NORMAL e o modo SUBTRAÇÃO.`, vw / 2, 650, 0.8 * vw, 85)
      pop();
    }
    else if (inst == 4) {
      push();
      rectMode(CENTER);
      //stroke(0)
      //strokeWeight(2)
      background('#e3e3e3');
      //line(vw/2, 0, vw/2, vh)
      //line(0, 144 + 47.5, vw, 144 + 47.5)
      button(50, 25, 100, 50, '', 'scr', 0);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      button(vw - 50, vh - 25, 100, 50, `Prox.`, 'inst', 5);
      button(50, vh - 25, 100, 50, `Ant`, 'inst', 3);
      strokeWeight(0);
      textSize(45);
      textFont(PlayFont);
      text('Instruções', vw / 2, 40);
      textAlign(CENTER, TOP)
      textSize(25)
      textLeading(35);
      image(icon, vw / 2 - 336, 96.5, 336, 237, 0, 0, 593, 418);
      textAlign(LEFT, TOP)
      text(`NORMAL   SUBTRAÇÃO`, 3 / 4 * vw + 25, 237.5, vw / 2, 25);
      image(iconesum, vw / 2 + 55, 190);
      image(iconesub, vw / 2 + 195, 190);
      textAlign(CENTER, TOP)
      text(`No modo normal de construção, o vetor construído no editor aparecerá como está na tela\nda fase, cada vetor construído assim será VERMELHO e sua origem partirá da ponta do\nvetor anterior (ou da origem, no caso de nenhum vetor previamente construído).`, vw / 2, 381, 0.8 * vw, 95);
      image(exsum1, 128, 453.5, 176, 237, 3, 0, 369, 498);
      image(exsum2, 340, 453.5, 176, 237, 1, 2, 369, 498);
      image(exsum3, 552, 453.5, 176, 237, 7, 0, 369, 498);
      image(exsum4, 764, 453.5, 176, 237, 4, 0, 369, 498);
      image(exsum5, 976, 453.5, 176, 237, 3, 3, 369, 498);
      pop();
    }
    else if (inst == 5) {
      push();
      rectMode(CENTER);
      stroke(0)
      strokeWeight(2)
      background('#e3e3e3');
      //line(vw/2, 0, vw/2, vh)
      //line(0, 261.5, vw, 261.5)
      button(50, 25, 100, 50, '', 'scr', 0);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      button(vw - 50, vh - 25, 100, 50, `Prox.`, 'inst', 6);
      button(50, vh - 25, 100, 50, `Ant`, 'inst', 4);
      strokeWeight(0);
      textSize(45);
      textFont(PlayFont);
      text('Instruções', vw / 2, 40);
      textAlign(CENTER, TOP)
      textSize(25)
      textLeading(35);
      text(`No modo subtração de construção, o vetor construído no editor será SUBTRAÍDO do que foi construído anteriormente seguindo a operação de subtração de vetores, ou seja V2 - V1,\nonde V1 é o vetor anterior a esse, e V2 é o vetor atual. Cada vetor construído assim será\nVERDE. uma consequência disso é que é impossível construir um vetor verde primeiro, já\nque não há um vetor antes dele para realizar a operação de subtração.`, vw / 2, 184, 0.8 * vw, 175);
      image(exsum1, 128, 287, 176, 237, 3, 0, 369, 498);
      image(exsum2, 340, 287, 176, 237, 54, 2, 369, 498);
      image(exsum3, 552, 287, 176, 237, 7, 0, 369, 498);
      image(exsub3, 764, 287, 176, 237, 3, 0, 369, 498);
      image(exsub4, 976, 287, 176, 237, 5, 0, 369, 498);
      image(antvec, 136, 549, 160, 160, 4, 3, 461, 461);
      image(atvec, vw / 2 - 80, 549, 160, 160, 9, 8, 461, 461);
      image(at_ant, 984, 549, 160, 160, 4, 3, 461, 461);
      textAlign(LEFT, TOP);
      text(`vetor anterior`, 428, 629, 250, 25);
      text(`vetor atual`, 852, 629, 250, 25);
      text(`V2 - V1`, 1276, 629, 250, 25);
      pop();
    }
    else if (inst == 6) {
      push();
      rectMode(CENTER);
      //stroke(0)
      //strokeWeight(2)
      background('#e3e3e3');
      //line(vw/2, 0, vw/2, vh)
      //line(0, 144 + 47.5, vw, 144 + 47.5)
      button(50, 25, 100, 50, '', 'scr', 0);
      rect(50, 25, 40, 10);
      quad(30, 25, 45, 40, 35, 40, 20, 25);
      quad(30, 25, 20, 25, 35, 10, 45, 10);
      button(50, vh - 25, 100, 50, `Ant`, 'inst', 5);
      strokeWeight(0);
      textSize(45);
      textFont(PlayFont);
      text('Instruções', vw / 2, 40);
      textAlign(CENTER, TOP)
      textSize(25)
      textLeading(35);
      text(`Troque entre os modos de construção pressionando a tecla 'V' enquanto observa a fase;\nApague o último vetor-guia pressionando a tecla 'C';\nApague todos os vetores-guia pressionando a tecla 'BACKSPACE';\nComande o robô a a seguir o caminho traçado pressionando a tecla 'X'.`, vw / 2, 184, 0.8 * vw, 175);
      text(`O desafio do jogo é chegar no final de cada fase com o número correto de vetores e\ntambém com o saldo correto, ou seja, o seu va = vr e o seu sa = sr.`, vw / 2, vh / 2, 0.8 * vw, 70)
      pop();
    }
  }
  else if (scr == 3) {
    rectMode(CENTER);
    background('#e3e3e3');
    grid(-vw/2, vh/2, 128, 10, 16);
    strokeWeight(0);
    textSize(45);
    textFont(PlayFont);
    text('Créditos', vw / 2, 40);
    button(50, 25, 100, 50, '', 'scr', 0);
    rect(50, 25, 40, 10);
    quad(30, 25, 45, 40, 35, 40, 20, 25);
    quad(30, 25, 20, 25, 35, 10, 45, 10);
    image(aluno, vw / 2 - 93, 1 / 5 * vh)
    text(`Lucas Morais Freire\nBacharelado em Ciência e Tecnologia pela UFRN - Campus Natal`, vw / 2, 585)
  }
  if (!isOverBut) {
    mouseOverPlayed = false;
  }
  isOverBut = false;
}