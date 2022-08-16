<script>
  
  import { getContext } from 'svelte';

  import { passPhrase } from '../stores.js';

  const { close } = getContext('simple-modal');

  import { getNotificationsContext } from 'svelte-notifications';
  const { addNotification } = getNotificationsContext();

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

  <h1>
  
    Playground of Praxis
  
  </h1>

  <div class='flavor-text'>
    
    Here you may log your endeavors as a testament to your credentials, whilst leaving behind an analysis point for your future strivings...

  </div>

  <div class='citadel-shelf'>
    
      <div class="book open-book">
        
        {$passPhrase}

      </div>
    
  </div>

  <div class='citadel-desk'>
    
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