<script>

  import { deleteWxrd } from '../api/wxrds-api.js';

  export let wxrd = null;
  export let dataId = null;
  
  function deleteThisWxrd() {
    deleteWxrd(dataId).then(() => {
      console.log(`deleted wxrd id ${dataId}`)
    }).catch((e) => {
      console.log(`There was an error removing ${dataId}`, e)
    });
  }

</script>



<div class="wxrd-card">

{#if wxrd !== null && dataId !== null}

  <div class="wxrd-value" data-id={dataId}>

    Alias: {wxrd.getAlias()}
    DataId: {dataId}
    
  </div>

{:else if dataId !== null}

  <div class="wxrd-value" data-id={dataId}>

    [NO WXRD FOUND]
    DataId: {dataId}
    
  </div>

{:else}

  DataId is null

{/if}

{#if dataId !== null}

  <button on:click={deleteThisWxrd}>Delete This Wxrd</button>

{/if}

</div>

<style>

  .wxrd-card {
    margin: 5;
    padding: 10;
    background: teal;
    display:  inline-block;
    justify-content: space-around;
  }

</style>