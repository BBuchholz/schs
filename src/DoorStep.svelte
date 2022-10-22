<script>
  
  import { getContext } from 'svelte';

  const { close } = getContext('simple-modal');

  import { Djehuti } from './myriad/Djehuti.js';

  const thothMagus = new Djehuti();

  import { createMDWxrd } from './api/mark-down-api.js';

  import { getNotificationsContext } from 'svelte-notifications';
  const { addNotification } = getNotificationsContext();

  import { 
    // currentBookTitle,
    passPhrase,
    devMode,
    currentMDWxrd,
  } from './stores.js';

  import TurnMyrKiOption from './TurnMyrKiOption.svelte';

  function notify(textValue){
    addNotification({
      position: 'top-right',
      text: textValue,
      type: 'error',
      description: 'lorem ipsum',
      removeAfter: 3000,
      disableButtons: true,
      disableDescription: true
    });
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
      wxrd: null,
      dataId: null
    };

    try{
      
      processed.dataId = getMarkDownId(responseObj);
    
    }catch(err){

      console.log("error processing response object for dataId: " + err);

    }

    try{
      
      processed.wxrd = thothMagus.importMDWxrdFromJson(strRespObjData);
    
    }catch(err){

      console.log("error processing response object for MarkDown: " + err);

    }

    return processed;
 
  }

  function turnMyrKi() {

    $passPhrase = currentMyrKi;

    console.log('passPhrase set to ' + $passPhrase);

    createMDWxrd(currentMyrKi).then((response) => {

      console.log('API response', response)

      const processed = processResponseObject(response);

      console.log('Processed Response Object', processed);

      $currentMDWxrd = processed.wxrd;

    }).catch((error) => {
      console.log('API error', error)
    });

    currentMyrKi = '';
  }
  
  function handleTurnMyrKiClick(){

    if(!currentMyrKi){
      notify('name cannnot be empty');
      return;
    }
    
    turnMyrKi();
  }

  function submit(event) {

    if (event.key === 'Enter') {
      handleTurnMyrKiClick();
    }
  }

  let currentMyrKi = '';

  function callFocus(input){
    input.focus();
  }

</script>

<div class='main'>

<!-- TODO: single point of entry, have to enter something to get something out, anything less than 100 wxrds should be looked up as a potential alias, increase limit? not found should return a list of things you can do -->

  <div class='citadel-shelf'>
    
    <input 
      bind:value={currentMyrKi} 
      use:callFocus
      placeholder="enter MyrKi (or 'help')"
      on:keydown={submit} />
    
  </div>

  <div class='citadel-desk'>
      
    <a 
      href="#openBook"
      on:click={handleTurnMyrKiClick}
    > 
      Go
    </a>
    
  </div>  

</div>

<style>

.citadel-shelf, .citadel-desk {
  border: solid;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.flavor-text {
  font-size: small;
}

.book {
  margin: 10px;
  padding: 10px;
  border: thin solid;
  border-radius: 10px;
}

</style>