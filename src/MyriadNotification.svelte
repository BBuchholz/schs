<script>
  import { fade } from 'svelte/transition';
  import { 
    previousTurnInfo, 
  } from './stores.js';

  export let notification;
  export let withoutStyles = false;
  export let onRemove = null;


  import { getNotificationsContext } from 'svelte-notifications';
  const { addNotification } = getNotificationsContext();

  function notifyCopied(textToWrite){
    addNotification({
      position: 'bottom-right',
      text: 'copied to clipboard: ' + textToWrite,
      type: 'error',
      description: 'lorem ipsum',
      removeAfter: 4000,
      disableButtons: true,
      disableDescription: true
    });
  }
  
  function notifyCopyError(){
    addNotification({
      position: 'bottom-right',
      text: 'error copying to clipboard',
      type: 'error',
      description: 'lorem ipsum',
      removeAfter: 4000,
      disableButtons: true,
      disableDescription: true
    });
  }

  function copyState() {

    const textToWrite = $previousTurnInfo;

    navigator.clipboard.writeText(textToWrite).then(function() {
    
      /* clipboard successfully set */
      notifyCopied(textToWrite);

    }, function() {
    
      /* clipboard write failed */
      notifyCopyError();
      
    });


  };

</script>

<div
  class="notification"
  in:fade
  out:fade  
>
  <div class="notification-content">
    <slot>{notification.text}</slot>

    {#if !notification.disableDescription}

      <p>{notification.description || 'Custom description'}</p>

    {/if}

  </div>

  {#if !notification.disableButtons}

    <div class="notification-buttons">
      <button on:click={copyState}>
        Copy
      </button>
      <button on:click={onRemove}>
        Close
      </button>
    </div>
  
  {/if}

</div>


<style>
  .notification {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    margin: 12px;
    background: #fff;
    color: #000;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  }
  .notification-content {
    width: 210px;
    padding: 12px 6px 12px 12px;
    box-sizing: border-box;
    word-wrap:break-word;
  }
  .notification-content p {
    font-size: 14px;
    color: #a1a1a1;
    margin: 2px 0 0;
  }
  .notification-buttons {
    border-left: 1px solid #eee;
  }

  .notification-buttons button:first-child {
    border-bottom: 1px solid #eee;
  }
  button {
    display: block;
    width: 60px;
    height: 50%;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    font-size: 12px;
    color: #666;
    box-sizing: border-box;
  }
  button:hover {
    background: rgba(0, 0, 0, 0.01);
  }
</style>