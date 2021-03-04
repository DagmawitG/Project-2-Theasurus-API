function wordOfDay(e){
    var item = wordList[Math.floor(Math.random() * wordList.length)];
  
    
    console.log(item);
    title.innerHTML=item;
   
    const api_url = `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${item}?key=f4202a73-2937-4fd6-b68e-2954ef0d7f04`