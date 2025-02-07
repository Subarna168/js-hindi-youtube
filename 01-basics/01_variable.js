const accountId = 12345
let accountEmail = "neha@gmail.com"
var accountPassword = "22222"
accountCity = "jaipur" 
let accountState;
// accountId = 2 // not allowed

accountEmail = "subarna@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountCity,accountState])
/*
prefer not to ude var
because of issue in block scope and finanlcial scope
*/