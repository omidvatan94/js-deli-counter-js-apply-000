var katzDeliLine = [];
function takeANumber(katzDeliLine, x) {
  katzDeliLine.push(x)
  return "Welcome, You are number " + katzDeliLine.length + " in line."
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var x = "The line is currently: "
    for(var i=0; i<katzDeliLine.length; i++) {
      x += (i+1) + ". " + katzDeliLine[i];
      if(i !== katzDeliLine.length-1) {
        x += ", "
      }
    }
    return x
  }
}