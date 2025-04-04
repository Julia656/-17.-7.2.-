function name(a) {
    return function(b) {
      return a * b;
    };
  }

  


  const result = name(5)(2); 
