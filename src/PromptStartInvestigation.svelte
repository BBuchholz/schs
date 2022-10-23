<script>
  
  import { getContext } from 'svelte';

  const { close } = getContext('simple-modal');

  import { getNotificationsContext } from 'svelte-notifications';
  const { addNotification } = getNotificationsContext();

  import { 
    passPhrase,
  } from './stores.js';

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

  // function turnMyrKi() {

  //   // let newBook = { title: 'Test ' + $currentBookCount };
  //   // $currentBook = newBook;
  //   // $currentBookCount = $currentBookCount + 1;

  //   let newBook = { title: currentTopic };
  //   // $currentBook = newBook;

  //   // notify('accessing door fitting key: ' + $currentBookTitle);
  // }

  // function navigateToTopic() {


    
  //   notify('current topic is: ' + currentTopic);
  // }  
  
  // function handleOpenClick(){

  //   if(!currentTopic){
  //     notify('topic cannnot be empty');
  //     return;
  //   }
    
  //   navigateToTopic();
  //   close();
  // }

  let currentTopic = '';

</script>

<div class='main'>


  <div class="section">
    <p>
      What are you interested in?
    </p>
  </div>  

  <div class="section">
    <input bind:value={currentTopic} placeholder="enter a topic" />  
  </div>

  {#if currentTopic}
  <div class="section">
    <a 
      href="?topic={currentTopic}"
    > 
      {currentTopic}
    </a>
  </div>
  {/if}


</div>

<style>

.main {
  border: solid;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}

.section {
  margin: 10px;
  padding: 10px;
  border: thin solid;
  border-radius: 10px;
}

</style>