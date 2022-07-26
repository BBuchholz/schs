<script>
  
  import { getContext } from 'svelte';

  const { close } = getContext('simple-modal');

  import { getNotificationsContext } from 'svelte-notifications';
  const { addNotification } = getNotificationsContext();

  import { 
    currentBook,
    currentBookTitle,
    currentBookCount,
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

  function openBook() {

    // let newBook = { title: 'Test ' + $currentBookCount };
    // $currentBook = newBook;
    // $currentBookCount = $currentBookCount + 1;

    let newBook = { title: bookName };
    $currentBook = newBook;

    notify('opened book: ' + $currentBookTitle);
  }
  
  function handleOpenClick(){

    if(!bookName){
      notify('name cannnot be empty');
      return;
    }
    
    openBook();
    close();
  }

  let bookName = '';

</script>

<div class='daedalus-lab'>
  
  <input bind:value={bookName} placeholder="enter book name" />  

  <div class="lab-item">
    <a 
      href="#OpenBook"
      on:click={handleOpenClick}
    > 
      Open
    </a>
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