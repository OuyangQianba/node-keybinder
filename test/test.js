const keybinder = require("../build/Release/keybinder.node");

keybinder.on("<Ctrl>B", () => {
  console.log("Ctrl+B")
})
keybinder.on("<Ctrl>D", () => {
  console.log("Ctrl+D")
})
keybinder.start();
keybinder.on("<Alt>B",()=>{
  console.log("Alt+B")
})
console.log("try Ctrl+B Ctrl+D or Alt+B")