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
    a1lib.mixcolor(255, 255, 255),
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
    chat += opts[a].text + " ";
  }

  var loot = chat.match(
    /The seren spirit gifts you/g
  );
 console.log(loot)
  if (loot != null && loot.length > -1) actions++;
  for (var x in loot) {
    count = Number(loot[x].match(/\d+/)); //1
    if (lootList[mats]) {
      lootList[mats].qty += count; //add count to index of second list.
      tidyTable(mats);
    } else {
      console.warn("Invalid component.  Ignoring.");
      continue;
    }
  }
}

