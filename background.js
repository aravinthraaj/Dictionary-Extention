console.log("Here we goooooooooooo background")



chrome.runtime.onMessage.addListener(receiver)

window.word = "test"

function receiver(request, sender, sendResponse){
  // console.log(request);
  word = request.text;
  
}















































// chrome.browserAction.onClicked.addListener(buttonClicked)

// function buttonClicked(tab) {
//   let message = {
//     txt: "hello"
//   }
//   chrome.tabs.sendMessage(tab.id,message)
// }
