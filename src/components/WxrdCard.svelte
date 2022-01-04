<script>

  export let wxrd = null;
  
  function dumpProps(obj, obj_name) {
    let result = '';
    for (let i in obj) {
      result += obj_name + '.' + i + ' = ' + obj[i];
    }
    return result;
  }

</script>



<div class="wxrd-card">

{#if wxrd !== null}

  {dumpProps(wxrd.metaData, 'wxrd.metaData')}

  <div class="wxrd-value">

    {wxrd.getAlias()}
    
  </div>

{:else}

  Wxrd is null

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