
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
  
  
  // ### Challenging
  // - Console the value of `email`
  // - Console the value of `address`
  // - Console the value of `city`
  // - Console the value of `lat`
  // - Console the value of `company name`
  
  console.log(user.email)
  console.table(user.address)
  console.log(user.address.city)
  console.log(user.address.geo.lat)
  console.log(user.company.name)
  