if (window.alt1) {
  //tell alt1 about the app
  //this makes alt1 show the add app button when running insane the embedded browser
  //also updates app settings if they are changed
  alt1.identifyAppUrl("./appconfig.json");
}
var reader = new ChatBoxReader();
reader.readargs = {
  colors: [
    a1lib.mixcolor(0, 255, 255), //Common Mats
   ],
  backwards: true,
};
reader.find(); //Find the chat box.
reader.read(); //Get the initial read, to not report on initial load.

//Attempt to show a temporary rectangle around the chatbox.  skip if overlay is not enabled.
try {
  var p = reader.pos;
  alt1.overLayRect(
    a1lib.mixcolor(0, 255, 255),
    p.mainbox.rect.x,
    p.mainbox.rect.y,
    p.mainbox.rect.width,
    p.mainbox.rect.height,
    2000,
    1
  );
} catch {}

var count, mats, index;
var actions = 0;

function readChatbox() {
  var opts = reader.read() || [];
  var chat = "";

  for (a in opts) {
    if(opts[a].text.includes("The Seren spirit gifts you")){
      console.log(opts[a])
      //split at ] of time stamp
      //removes timestamp part of the array
      let item = opts[a].text.split("]")
      item.shift()
      
      //split at the : to isolate "amount x item"
      var removeSeren = item.join("")
      let amountItem = removeSeren.split(":")
      //removes "The Seren spirit gifts you" part
      amountItem.shift()
      
      //splits at amount letter x
       removeSeren = amountItem.join(" ").split("x")
      
      
      console.log(removeSeren)
      let amount = removeSeren[0]
      //removes item amount part from item array
      removeSeren.shift()
      //joins the array back to a string
     item = removeSeren.join(" ")
      console.log(item)
      console.log("Amount: " + amount + " | " + item)

    }
    //chat += opts[a].text + " ";
  }
 
 
  
}

function test(){
  let testtext = "[20:27:04] The Seren spirit gifts you : 1 x Tooth half of a key"
    if(testtext.includes("The Seren spirit gifts you")){
      console.log(testtext)
      //split at ] of time stamp
      //removes timestamp part of the array
      let item = testtext.split("]")
      item.shift()
      
      //split at the : to isolate "amount x item"
      var removeSeren = item.join("")
      let amountItem = removeSeren.split(":")
      //removes "The Seren spirit gifts you" part
      amountItem.shift()
      
      //splits at amount letter x
       removeSeren = amountItem.join(" ").split("x")
      
      
      console.log(removeSeren)
      let amount = removeSeren[0]
      //removes item amount part from item array
      removeSeren.shift()
      //joins the array back to a string
     item = removeSeren.join(" ")
      console.log(item)
      console.log("Amount: " + amount + " | " + item)
    }
    chat += opts[a].text + " ";
   
}