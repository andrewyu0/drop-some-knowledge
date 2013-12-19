function a(p1, p2) {
  console.log(p1+":"+p2);
}

// not set to anything..
a.bind(null, "rover"); 

//.. which is why 'a' executes as normal (undefined bc theres no second param)
a("ball")   // "ball : undefined"

// now set to b
var b = a.bind(null, "rover"); 

b("ball");  // "rover : ball"

