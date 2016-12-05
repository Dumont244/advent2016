var md5 = require('md5');

//solveP1('ojvtpuvg');
solveP2('ojvtpuvg');

function solveP1(puzzleInput) {
  var index = 0, pass = '';
  while (pass.length < 8) {
    var hash = md5(puzzleInput + index);
    if (hash.startsWith('00000')) pass += hash.charAt(5);
    index ++;
  }
  console.log('Final result for P1:\n'+pass);
};

function solveP2(puzzleInput) {
  var index = 0;
  var pass = new Array(8);
  while (!isArrayFull(pass)) {
    var hash = md5(puzzleInput + index);
    if (hash.startsWith('00000')) {
      var pos = parseInt(hash.charAt(5));
      var value = hash.charAt(6);
      if ((pos != NaN && pos >= 0 && pos < 8) && pass[pos]==undefined) {
          pass[pos] = value;
          printArray(pass);
      }
    }
    index ++;
  }
  console.log('Final result for P2:');
  printArray(pass);
};

function isArrayFull(arr) {
   return arr.length === arr.filter(function(o) {
     return typeof o !== 'undefined' ||  o !== null;
   }).length;
}

function printArray(arr) {
  var str = '';
  for (var i=0;i<arr.length; i++) {
    if (arr[i]==undefined) {
      str += '_';
    } else {
      str += arr[i];
    }
  }
  console.log(str);
}
