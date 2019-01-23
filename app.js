// Rover Object Goes Here
// ======================
var rover = 
{
  direction : "N",
  x : 0,
  y : 0,
  travelLog: [],
  position: " "
};

// ======================
function place(rover)
{
  rover.position = rover.x + "," + rover.y;
  return rover.travelLog.push(rover.position);
}

function turnLeft(rover)
{
  switch(rover.direction)
  {
    case "N":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "N";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log("turnLeft was called!");
  return place(rover);
  //console.log(rover);
  //rover.travelLog.push(rover.x,rover.y);
  //console.log(rover.travelLog);
}

function turnRight(rover)
{
  switch(rover.direction)
  {
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W"
      break;
    case "E":
      rover.direction = "S";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called!");
  return place(rover);
  //console.log(rover);
  //rover.travelLog.push(rover.x,rover.y);
  //console.log(rover.travelLog);
}

function moveForward(rover)
{
  switch(rover.direction)
  {
    case "N":
      rover.y-= 1;
      break;
    case "S":
      rover.y+= 1;
      break;
    case "E":
      rover.x+= 1;
      break;
    case "W":
      rover.x-= 1;
      break;
  }
  console.log("moveForward was called");
  return place(rover);
  //console.log(rover);
  //rover.travelLog.push(rover.x,rover.y);
  //console.log(rover.travelLog);
}

function commands(string)
{
  for(var i = 0; i < string.length; i++)
  {
    if(string.charAt(i) == "f")
    {
      moveForward(rover);
    }
    else if(string.charAt(i) == "r")
    {
      turnRight(rover);
    }
    else if(string.charAt(i) == "l")
    {
      turnLeft(rover);
    }
  }
  console.log(rover.travelLog);
}

