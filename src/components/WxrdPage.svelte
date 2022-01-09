<script>

  import { allLoadedWxrds } from '../stores.js';
  import { readAll } from '../api/wxrds-api.js';

  import WxrdCard from './WxrdCard.svelte';

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

  function processResponseObject(responseObj){

    const strRespObj = JSON.stringify(responseObj);

    console.log('processing response object...', strRespObj);

    let processed = {
      wxrd: null,
      ref: null
    };

    try{
      
      processed.wxrd = djehuti.importWxrdFromJson(strRespObj);
    
    }catch(err){

      console.log("error processing response object: " + err);

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

      const processed = processResponseObject(response.data);

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
          processResponseObject(responseObj.data);

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

  <button on:click={createANewWxrd}>Test Create Wxrd</button>
  <button on:click={loadWxrds}>Load Wxrds</button>



  <div class="wxrds">
    
    {#each $allLoadedWxrds as wxrdRef, i}

    <p>test</p>

    <WxrdCard wxrd={wxrdRef.wxrd} />

    <!-- TODO: make this card work, data isn't displaying properly but it is returning, need to play with console log and some different values to see what we can get working, soo close-->
    
    {/each}

  </div>

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