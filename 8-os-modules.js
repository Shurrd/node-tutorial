const os = require("os");

//info about user
const user = os.userInfo();
console.log(user);

// returns system uptime

console.log(`The system uptime is : ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeeMem: os.freemem(),
};

console.log(currentOs);
