const accountId = 123
let accountEmail = "dhruvpalgoogle.com"
var accountPassword = " 12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 not allowed bcoz of const

accountEmail = "dpal@google.com"
accountPassword = "12312"
accountCity = "delhi"

/*
dont use var as it does not understand scope  block scope and functional scope
never directly declare a variable


*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);