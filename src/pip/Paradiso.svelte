<script>
  
  import { getContext } from 'svelte';

  const { close } = getContext('simple-modal');

  import { getNotificationsContext } from 'svelte-notifications';
  const { addNotification } = getNotificationsContext();
 
  // import { 
  //   // currentBookTitle,
  // } from './stores.js';

  // import OpenBookOption from './OpenBookOption.svelte';

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

</script>

<div class='main'>

  <div class='citadel-shelf'>
    
      <div class="book open-book">
        
        <!-- {$currentBookTitle} --> copied 

      </div>
    
  </div>

  <div class='citadel-desk'>
    
      <!-- <OpenBookOption /> -->
      not implemented yet
    
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

.book {
  margin: 10px;
  padding: 10px;
  border: thin solid;
  border-radius: 10px;
}

</style>