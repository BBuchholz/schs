<script>

  import { allLoadedMarkDown, displayMode } from './stores.js';
  import { readAll } from '../api/mark-down-api.js';

  import MarkDownCard from './MarkDownCard.svelte';
  // import NavBarBottom from './NavBarBottom.svelte';

  import { Djehuti } from '../myriad/Djehuti.js';

  const djehuti = new Djehuti();

  let newMarkDownValue = `


initializedAt: ` + 
    new Date().toISOString() + `
tags: `;


  // Function using fetch to POST to our API endpoint
  function createThisMarkDown() {

    const newMarkDown = djehuti.createMarkDown(newMarkDownValue);
    console.log('mark down created', newMarkDown);

    return fetch('/api/mark-down-create', {
      body: JSON.stringify(newMarkDown),
      method: 'POST'
    }).then(response => {
      return response.json()
    })
  }

  function getMarkDownId(responseObj){

    // console.log('getting mark down id from response obj', responseObj);
    if(!responseObj.ref){
      return null;
    }
    return responseObj.ref['@ref'].id;
  }

  function processResponseObject(responseObj){

    const strRespObjData = JSON.stringify(responseObj.data);

    // console.log('processing response object data...', strRespObjData);

    let processed = {
      markdown: null,
      id: null
    };

    try{
      
      processed.id = getMarkDownId(responseObj);
    
    }catch(err){

      console.log("error processing response object for id: " + err);

    }

    try{
      
      processed.markdown = djehuti.importMarkDownFromJson(strRespObjData);
    
    }catch(err){

      console.log("error processing response object for MarkDown: " + err);

    }

    return processed;
 
  }

  function createANewMarkDown(){

    const timestamp = Date.now();

    // Todo data
    const myMarkDownInput = "testing string input " + timestamp;


    // create it!
    createThisMarkDown(myMarkDownInput).then((response) => {

      console.log('API response', response)

      const processed = processResponseObject(response);

      $allLoadedMarkDown = [processed, ...$allLoadedMarkDown];

      // set app state
    }).catch((error) => {
      console.log('API error', error)
    })

  }

  function loadMarkDown() {

    const allMarkDown = readAll();

    readAll().then((response) => {
      console.log('API response', response)
      // set app state

      const collected = [];

      for(const responseObj of response){

        const processed = 
          processResponseObject(responseObj);

          if(processed != null){

            collected.push(processed);

          }
      }


      $allLoadedMarkDown = [...collected];    

    }).catch((error) => {
      console.log('API error', error)
    });

  }


</script>

<div class="main">

  <h1>
  
    MDMDM
  
  </h1>
  
  <p>
  
    (MyriaD MarkDown Matrix)
  
  </p>

  <p>
  
    <textarea 
      bind:value={newMarkDownValue}
      rows="5"></textarea>
    
  </p>

  <button on:click={createANewMarkDown}>Test Create MarkDown</button>
  <button on:click={loadMarkDown}>Load MarkDown</button>

  <div class="MarkDown">
    
    {#each $allLoadedMarkDown as MarkDownRef, i}

    <p>test</p>

    <MarkDownCard MarkDown={MarkDownRef.MarkDown} dataId={MarkDownRef.id}/>

    <!-- TODO: make this card work, data isn't displaying properly but it is returning, need to play with console log and some different values to see what we can get working, soo close-->
    
    {/each}

  </div>

  <!-- <NavBarBottom /> -->

</div>

<style>

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .MarkDown {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 20px;
    align-items: center;
    justify-content: space-around;
    background-color: #282c34;
  }

  textarea {
    width: 80vw;
    box-sizing: border-box;
    margin: 10px;
  }

</style>