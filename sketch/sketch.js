function setup(){
  noCanvas();

  let bgpage = chrome.extension.getBackgroundPage();
  let word = bgpage.word;
  

  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  console.log(url)

  function getFromAPI(url,callback){
    var obj;
    fetch(url)
      .then(res => res.json())
      .then(data => obj = data)
      .then(() => callback(obj))
  }

  getFromAPI(url, gotData)
 
  
  function gotData(data) {
    
    const heading = document.getElementById("heading")
    heading.innerHTML = word;
    createP(data[0].meanings[0].definitions[0].definition);
  }

}


































// fetch(url)
// .then(response => response.json())
// .then(data => createP(data[0].phonetic))
// .catch(err => console.error(err));

// createP(url)

// loadJSON(url,gotData);