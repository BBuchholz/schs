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

  {dumpProps(wxrd, 'wxrd')}

  <div class="wxrd-value">
    {wxrd.getAlias()}
  </div>

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