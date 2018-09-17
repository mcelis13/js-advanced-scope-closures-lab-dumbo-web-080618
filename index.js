function produceDrivingRange(num){
  return function(begStr, endStr){
    let begStr1 = begStr.slice(0, 2);
    console.log(begStr1);
    let begNum = parseInt(begStr1);
    let endStr1 = endStr.slice(0, 2);
    let endNum = parseInt(endStr1);

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
