// primitive

 // 7 types : string, number,Boolean,null,undefined,symbol,BIgInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id == anotherId);


 // Reference (Non primitive)

 // Array,0bjects,Functions
 //+++++++++++++++++++++++
 // stack (primitive), heap(non primitive)
 let myYoutubename = "suarnasahadotcom"

 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename);
 console.log(anothername);

 let user = {
    email:"user@google.com"
    upi:"user@ybl"
 }
 let userTwo = userOne

 userTwo.email = "neha@google.com"

 console.log("userOne.email");
 console.log(userTwo.email)
 )
 

