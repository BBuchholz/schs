<script>

  export let wxrd = null;
  

</script>



<div class="wxrd-card">

{#if wxrd !== null}

  <div class="wxrd-value">

    Alias: {wxrd.getAlias()}
    
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