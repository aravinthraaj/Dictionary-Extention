

window.addEventListener('mouseup', wordSelected);

function wordSelected(){
  let selectedText = window.getSelection().toString().trim();
  // console.log(selectedText);
  if(selectedText.length > 0){
    let message = {
      text: selectedText
    };
    chrome.runtime.sendMessage(message)
  }
}









































// let paragraphs = document.getElementsByTagName('p');

// for (element of paragraphs){
//   element.style['background-color'] = '#FFf'
// }

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse){
//   console.log(message.txt)
// }