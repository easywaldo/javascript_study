let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('foo');
    }, 300);
  });
  
  promise1.then(function(value) {
    console.log(value);
    // expected output: "foo"
  });
  
  console.log(promise1);
  // expected output: [object Promise]
  
  


  let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject('bar');
    }, 1300);
  });
  

  
  promise2.catch((reason) => {
    console.log(reason);
  });
  console.log(promise1);

  console.log('---- all ----');
  let iter = [promise1, promise2];
  Promise.all(iter).then((value) => {
    console.log(value);
  }, (reason) => {
      console.log(reason);
  });

  console.log('---- race -----')
  Promise.race(iter).then((value) => {
      console.log(value);
  }, (reason) => {
    console.log(reason);
  });


  let promise3 = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('baz');
    }, 2300);
  });

  promise3.then((value) => {
    console.log(value);
  }).catch((reason) => {
    console.log(reason);
  }).finally(() => {
    console.log('end');
  });