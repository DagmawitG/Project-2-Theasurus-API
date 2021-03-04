function wordOfDay(e){
    var item = wordList[Math.floor(Math.random() * wordList.length)];
  
    
    console.log(item);
    title.innerHTML=item;
   
    const api_url = `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${item}?key=f4202a73-2937-4fd6-b68e-2954ef0d7f04`
    async function getapi(url){
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("HTTP status " + response.status);
    }

    else{
    var data = await response.json();
    console.log(data);
    var getKeys1 = Object.keys(data['0'] )['0'];
    var getVal3 = data['1'][getKeys1].syns[0];
   // let getKeys = Object.keys(data['1'])['2'];
    let getVal = data[0].shortdef; 
    console.log(getVal) ;
    console.log(getVal3);
    card_text.innerHTML=getVal3;
    mine.innerHTML=getVal;
    console.log("why")
    }    
    }
    
}