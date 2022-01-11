<script>

  import { allLoadedWxrds, displayMode } from '../stores.js';
  import { readAll } from '../api/wxrds-api.js';

  import WxrdCard from './WxrdCard.svelte';
  import NavBarBottom from './NavBarBottom.svelte';

  import { Djehuti } from '../myriad/Djehuti.js';

  const djehuti = new Djehuti();

  const wxrds = [];

  // Function using fetch to POST to our API endpoint
  function createThisWxrd(multiLineInput) {

    const newWxrd = djehuti.createWxrd(multiLineInput);
    console.log('wxrd created', newWxrd);

    return fetch('/api/wxrds-create', {
      body: JSON.stringify(newWxrd),
      method: 'POST'
    }).then(response => {
      return response.json()
    })
  }

  function getWxrdId(responseObj){

    // console.log('getting wxrd id from response obj', responseObj);
    if(!responseObj.ref){
      return null;
    }
    return responseObj.ref['@ref'].id;
  }

  function processResponseObject(responseObj){

    const strRespObjData = JSON.stringify(responseObj.data);

    // console.log('processing response object data...', strRespObjData);

    let processed = {
      wxrd: null,
      id: null
    };

    try{
      
      processed.id = getWxrdId(responseObj);
    
    }catch(err){

      console.log("error processing response object for id: " + err);

    }

    try{
      
      processed.wxrd = djehuti.importWxrdFromJson(strRespObjData);
    
    }catch(err){

      console.log("error processing response object for wxrd: " + err);

    }

    return processed;
 
  }

  function createANewWxrd(){

    const timestamp = Date.now();

    // Todo data
    const myWxrdInput = "testing string input " + timestamp;


    // create it!
    createThisWxrd(myWxrdInput).then((response) => {

      console.log('API response', response)

      const processed = processResponseObject(response);

      $allLoadedWxrds = [processed, ...$allLoadedWxrds];

      // set app state
    }).catch((error) => {
      console.log('API error', error)
    })

  }

  // function dumpProps(obj, obj_name) {
  //   let result = '';
  //   for (let i in obj) {
  //     result += obj_name + '.' + i + ' = ' + obj[i];
  //   }
  //   return result;
  // }

  // // const getMemories = async () => {
  // //     const resp = await fetch('/api/wxrds-read-all')
  // //     const data = await resp.json()
  // //     wxrds = data;
  // //   }

  function loadWxrds() {

    const allWxrds = readAll();

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


      $allLoadedWxrds = [...collected];    

    }).catch((error) => {
      console.log('API error', error)
    });

  }


</script>

<div>

  <p>
  
    Display Mode: {$displayMode}
  
  </p>
  
  <button on:click={createANewWxrd}>Test Create Wxrd</button>
  <button on:click={loadWxrds}>Load Wxrds</button>



  <div class="wxrds">
    
    {#each $allLoadedWxrds as wxrdRef, i}

    <p>test</p>

    <WxrdCard wxrd={wxrdRef.wxrd} dataId={wxrdRef.id}/>

    <!-- TODO: make this card work, data isn't displaying properly but it is returning, need to play with console log and some different values to see what we can get working, soo close-->
    
    {/each}

  </div>

  <NavBarBottom />

</div>

<style>

  .wxrds {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: #0000ff;
  }

</style>