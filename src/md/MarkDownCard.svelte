<script>

  import { allLoadedMarkDown } from './stores.js';
  import { deleteWxrd } from '../api/wxrds-api.js';

  export let wxrdObj = null;
  let displayObject = false;
  let displayDataId = false;

  function filterOutCurrentDataId() {
    let filtered = [];

    for(const wxrdRef of $allLoadedMarkDown){
      if(wxrdRef.id != wxrdObj.dataId){
        // console.log(wxrdRef.id + ' is not ' + dataId + ', adding...');
        filtered.push(wxrdRef);
      }
    }

    return filtered;
  }
  
  function deleteThisWxrd() {
    deleteWxrd(wxrdObj.dataId).then(() => {
      console.log(`deleted wxrd id ${wxrdObj.dataId}`)

      let filtered = filterOutCurrentDataId();
      // console.log(filtered);
      $allLoadedMarkDown = filtered;

    }).catch((e) => {
      console.log(`There was an error removing ${wxrdObj.dataId}`, e)
    });
  }

  function toggleObject(){

    displayObject = !displayObject;
  }

  function toggleDataId(){
    
    displayDataId = !displayDataId;
  }

</script>



<div class="wxrd-card">

  {#if wxrdObj !== null && wxrdObj.dataId !== null}

    <div class="wxrd-value" data-id={wxrdObj.dataId}>

      {#if displayObject}

        <div class="wxrd-section wxrd-object">

          OBJ: {JSON.stringify(wxrdObj.wxrd)}

        </div>

      {/if}

      <div class="wxrd-section wxrd-mark-down">

        {wxrdObj.wxrd.markDown}

      </div>

      {#if displayDataId }

        <div class="wxrd-section wxrd-data-id">

          DataId: {wxrdObj.dataId}

        </div>

      {/if}

      
    </div>

  {:else if wxrdObj.dataId !== null}

    <div class="wxrd-value" data-id={wxrdObj.dataId}>

      [NO WXRD FOUND]
      DataId: {wxrdObj.dataId}
      
    </div>

  {:else}

    DataId is null

  {/if}

  {#if wxrdObj.dataId !== null}

    <button on:click={deleteThisWxrd}>Delete This Wxrd</button>

  {/if}


  <button on:click={toggleObject}>Toggle Object</button>
  <button on:click={toggleDataId}>Toggle DataId</button>


</div>

<style>

  .wxrd-card {
    margin: 5;
    padding: 10;
    background: teal;
    display:  inline-block;
    justify-content: space-around;
  }

  .wxrd-section {
    margin: 10px;
    padding: 10px;
  }

  .wxrd-mark-down {
    white-space: pre-line;
  }

</style>