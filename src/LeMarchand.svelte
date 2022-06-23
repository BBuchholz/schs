<script>
  
  // TODO: I want this for passphrase prospero, which
  // will bring to the same place as lament, but will
  // display this quote in stead... 
  const prosperosEpilogue = `
           Now my charms are all o'erthrown,
           And what strength I have's mine own,
           Which is most faint: now, 'tis true,
           I must be here confined by you,
           Or sent to Naples. Let me not,
           Since I have my dukedom got
           And pardon'd the deceiver, dwell
           In this bare island by your spell;
           But release me from my bands
           With the help of your good hands:
           Gentle breath of yours my sails
           Must fill, or else my project fails,
           Which was to please. Now I want
           Spirits to enforce, art to enchant,
           And my ending is despair,
           Unless I be relieved by prayer,
           Which pierces so that it assaults
           Mercy itself and frees all faults.
           As you from crimes would pardon'd be,
           Let your indulgence set me free.`;

  import { getContext } from 'svelte';

  import { getNotificationsContext } from 'svelte-notifications';
  const { addNotification } = getNotificationsContext();

  import {  
    passPhrase,
    devMode, 
  } from './stores.js';

  function notifyWithoutExpire(textValue){
    addNotification({
      position: 'bottom-right',
      text: textValue,
      type: 'error',
      description: 'lorem ipsum',
      disableButtons: false,
      disableDescription: true
    });
  }

  function handleParadisoClick(){

    $passPhrase = 'promulgate';
  } 

  function handleAewonicAlexandrianClick(){

    $passPhrase = 'animatus';
  } 

  function handleWxrdsWellClick(){

    $passPhrase = 'woander';

  }
 
  function handleMyriadsMatrixClick(){

    $passPhrase = 'matriculate';
  } 

</script>

<div class='puzzle-box'>
    
    <div class="facet-face">
      <a 
        href="#promulgate"
        on:click={handleParadisoClick}
      > 
        P
      </a>
      <span class="tooltip">Paradiso</span>
    </div>
    <div class="facet-face">
      <a 
        href="#animatus"
        on:click={handleAewonicAlexandrianClick}
      > 
        A
      </a>
      <span class="tooltip">Aewonic Alexandrian</span>
    </div>
    <div class="facet-face">
      <a 
        href="#woander"
        on:click={handleWxrdsWellClick}
      > 
        W
      </a>
      <span class="tooltip">Wxrd's Well</span>
    </div>
    <div class="facet-face">
      <a 
        href="#matriculate"
        on:click={handleMyriadsMatrixClick}
      > 
        M
      </a>
      <span class="tooltip">Myriad's Matrix</span>
    </div>
  
</div>

<style>

.puzzle-box {
  border: solid;
  border-radius: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.facet-face {
  margin: 10px;
  padding: 10px;
  font-size: 40px;
  border: thin solid;
  border-radius: 10px;
}

.facet-face:hover .tooltip {
  display:block;
}

.tooltip {
  display: none;
    background-color: #282c34;
    padding: 20px;
    font-size: 20px;
    margin-left: -60px; /* moves the tooltip over */
    margin-top: 20px; /* moves it down */
    position: absolute;
    z-index: 1000;
}

</style>