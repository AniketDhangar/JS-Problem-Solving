// Find the lowest price product


function lowPrice(prod1, prod2, prod3) {
    if (prod1 < prod2 && prod1 < prod3) console.log("prod1 is low");
    else if (prod2 < prod1 && prod2 < prod3)
      console.log("prod2 is low");
    else console.log("prod3 is low");
  }
  lowPrice(1000, 12002, 135013);
  