var fn1 = () => {
  console.log("fn1");
  return Promise.resolve(1);
};

var fn2 = () =>
  new Promise(resolve => {
    console.log("fn2");
    setTimeout(() => resolve(2), 1000);
  });

function promiseReduce(asyncFunctions, reduce, initialValue) {
  if (
    !asyncFunctions ||
    typeof asyncFunctions[Symbol.iterator] !== "function"
  ) {
    throw TypeError("First argument should be an array of functions");
  }
  if (typeof reduce !== "function") {
    throw TypeError("Second argument should be a function");
  }
  if (typeof initialValue !== "number") {
    throw TypeError("Third argument should be a number");
  }

  return new Promise(resolve => {
    let index = 0,
      memo = null;

    reducer(index, reduce, initialValue);

    function reducer(index, reduce, initialValue) {
      if (index < asyncFunctions.length) {
        asyncFunctions[index]().then(result => {
          memo = reduce(initialValue, result);
          index++;
          reducer(index, reduce, memo);
        });
      } else {
        resolve(memo);
      }
    }
  });
}
promiseReduce(
  [fn1, fn2],
  function(memo, value) {
    console.log("reduce");
    return memo * value;
  },
  1
).then(console.log);
