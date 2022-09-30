<script>
  
  import { getContext } from 'svelte';

  const { close } = getContext('simple-modal');

  import { getNotificationsContext } from 'svelte-notifications';
  const { addNotification } = getNotificationsContext();

  import { 
    currentBook,
    currentBookTitle,
    currentBookCount,
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

  function turnMyrKi() {

    // let newBook = { title: 'Test ' + $currentBookCount };
    // $currentBook = newBook;
    // $currentBookCount = $currentBookCount + 1;

    let newBook = { title: currentMyrKi };
    $currentBook = newBook;

    notify('accessing door fitting key: ' + $currentBookTitle);
  }

  function enterPassPhrase() {

    $passPhrase = currentMyrKi;
    notify('passPhrase set to: ' + $passPhrase);
  }  
  
  function handleOpenClick(){

    if(!currentMyrKi){
      notify('name cannnot be empty');
      return;
    }
    
    enterPassPhrase();
    close();
  }

  let currentMyrKi = '';

</script>

<div class='daedalus-lab'>
  
  <input bind:value={currentMyrKi} placeholder="enter MyrKi" />  

  <div class="lab-item">
    <a 
      href="#turnMyrKi"
      on:click={handleOpenClick}
    > 
      Enter
    </a>
  </div>

  <div class="hint">
    Need a hint? SCHS is for hands on EXPLORERS, check <a href="https://github.com/BBuchholz/codified-heart-song/blob/main/src/App.svelte" target="blank">the public code repo on github for passPhrase clues</a>
  </div>

</div>

<style>

.daedalus-lab {
  border: solid;
  border-radius: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.lab-item {
  margin: 10px;
  padding: 10px;
  border: thin solid;
  border-radius: 10px;
}

</style>