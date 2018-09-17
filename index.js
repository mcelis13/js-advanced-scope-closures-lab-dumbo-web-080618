function produceDrivingRange(num){
  return function(begStr, endStr){
    let begNum = parseInt(begStr.slice(0, 2));
    let endNum = parseInt(endStr.slice(0, 2));

    let blocks = Math.abs(endNum - begNum);
    if(blocks > num){
      let outOfRangeNum = Math.abs(blocks - num);
      return `${outOfRangeNum} blocks out of range`;
    }
    let inRange = Math.abs(num - blocks);
    return `within range by ${inRange}`;
  };
};

function produceTipCalculator(num){
  return function(num2){
    return num2 * num;
  };
};

function createDriver(){
  let id = 0;
  return function Driver(name) {
    this.name = name;
    this.id = ++id;
  };
};
