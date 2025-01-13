// Find the expensive product

function expensive(prod1, prod2, prod3) {
  if (prod1 > prod2 && prod1 > prod3) console.log("prod1 is more expensive");
  else if (prod2 > prod1 && prod2 > prod3)
    console.log("prod2 is more expensive");
  else console.log("prod3 is more expensive");
}
expensive(1000, 12002, 135013);
