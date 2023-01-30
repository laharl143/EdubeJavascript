function getPromiseArray(arr) {
    return arr.map(element => {
      if (Number.isInteger(element) && element > 0) {
        return new Promise((resolve) => {
          setTimeout(() => resolve(element), element);
        });
      } else {
        return Promise.reject(new Error(`${element} is not a positive integer`));
      }
    });
  }
  
  //Test Script:
  let promises1 = getPromiseArray([10, 30, 5, 20, 'a']);
  Promise.all(promises1).then(a => console.log(`all: ${a}`))
  .catch(e => console.log(`all: ${e.message}`)); // -> any: 10 
  Promise.any(promises1).then(a => console.log(`any: ${a}`)).
  catch(e => console.log(`any: ${e.message}`)); // -> all: a is not a positive integer
  
  
  //to fix the error. Try to replace the “any” in Promise.any to “race” in the test Script
  
  