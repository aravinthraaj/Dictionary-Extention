function setup(){
  noCanvas();

  let bgpage = chrome.extension.getBackgroundPage();
  let word = bgpage.word;
  

  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;


  // function play() {
  //   var audio = document.getElementById("audio");
  //   console.log(audio)
  //   // audio.load(); 
  //   audio.play();
  // }

  function getFromAPI(url,callback){

  console.log("i came here")

    var obj;
    fetch(url)
      .then(res => res.json())
      .then(data => obj = data)
      .then(() => callback(obj))
  }

  getFromAPI(url, gotData)

  function renderDefinition(Speech = "-", definition = "-", example = "-"){

    var Div = document.createElement("div")
    var partofSpeech = document.createElement("h4")
    var Definition = document.createElement("p")
    var Example = document.createElement("p")
    const container = document.getElementById("main_container")


    partofSpeech.innerHTML = Speech
    Definition.innerHTML = `<span>Definition :</span> ${definition}`
    Example.innerHTML = `<span>Example :</span> ${example}`

    Div.className = 'meaning';
    Example.className = 'example';
    Definition.className = 'definition';
    Div.appendChild(partofSpeech)
    Div.appendChild(Definition)
    Div.appendChild(Example)
    // console.log(Div)
    container.appendChild(Div)
    




  }
 
  
  function gotData(data) {
    console.log(data)
    const meanings = data[0].meanings
    const heading = document.getElementById("heading")
    const phonetic = document.getElementById("phonetic")
    const guide = document.getElementById('guide')
    guide.remove();
    // const audio = document.getElementById("audio")
    // const playButton = document.getElementById('play')
    // playButton.addEventListener("click", play)

    heading.innerHTML = word
    phonetic.innerHTML = data[0].phonetics[0].text
    // audio.src = data[0].phonetics[0].audio

    // console.log(audio)

    meanings.forEach((meaning)=>{
      renderDefinition(meaning.partOfSpeech, meaning.definitions[0].definition, meaning.definitions[0].example)
      // console.log(meaning.partOfSpeech)
      // console.log(meaning.definitions[0].definition)
      // console.log(meaning.definitions[0].example)
      // console.log("**********")

    })
    
    // const heading = document.getElementById("heading")
    // const nounDefinition = document.getElementById("noun__definition")
    // const verbDefinition = document.getElementById("verb__definition")
    // const nounExample = document.getElementById("noun__example")
    // const verbExample = document.getElementById("verb__example")



    // const meaning = document.getElementById("noun__definition")

    // console.log(word)
    // console.log(data[0].meanings.length);

    // heading.innerHTML = word;
    // nounDefinition.innerHTML = data[0].meanings[0].definitions[0].definition;
    // nounExample.innerHTML = data[0].meanings[0].definitions[0].example;
    
  }

}


































// fetch(url)
// .then(response => response.json())
// .then(data => createP(data[0].phonetic))
// .catch(err => console.error(err));

// createP(url)

// loadJSON(url,gotData);