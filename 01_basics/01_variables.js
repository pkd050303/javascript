const accountId = 12345
let accountEmail="priyamkrishnadhawan@gmail.com"
var accountPassword="829960"
accountCity="prayagraj"
let accountState;
// accountId=2

/*
prefer not to use var because of issue in block scope and function scope
*/
accountEmail="pojjio@gmail.com"
accountPassword="777867687"
accountCity="kanpur"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
