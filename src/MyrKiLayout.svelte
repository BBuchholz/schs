<script>
  

  import { 
    modal,
    passPhrase,
    headerQuote,
    devMode,
  } from './stores.js';

  import MyriadNotification from './MyriadNotification.svelte';

  import Paradiso from './pip/Paradiso.svelte';
  import Alexandria from './Alexandria.svelte';
  import DoorStep from './DoorStep.svelte';
  import MasonryLayout from './MasonryLayout.svelte';
  import MyrKiLayout from './MyrKiLayout.svelte';
  import HelpDesk from './HelpDesk.svelte';
  import WxrdPage from './components/WxrdPage.svelte';
  import LeMarchand from './LeMarchand.svelte';
  import MDMDM from './md/MDMDM.svelte';
  import WellOfWxrds from './md/WellOfWxrds.svelte';
  import MountainsOfMadness from './md/MountainsOfMadness.svelte';
  
  function handleLeMarchandClick(){

    $passPhrase = 'lament';
  } 
  
</script>

<div class='main'>

  <div class='header'>
    
    <p>
    
    {$headerQuote.content}
    
    </p>
    
    <p>

    - {$headerQuote.source}

    </p>
  
  </div>


  {#if $passPhrase === 'promulgate'}

    <Paradiso />

  {:else if $passPhrase === 'animatus'}

    <Alexandria />

  {:else if $passPhrase === 'lament'}

    <LeMarchand />

  {:else if $passPhrase === 'woander'}

    <WellOfWxrds />

  {:else if $passPhrase === 'matriculate' || 
            $passPhrase === 'madness'}

    <MountainsOfMadness />

  {:else if $passPhrase === 'LeMarchand'}

    <LeMarchand />

  {:else if $passPhrase === 'help'}

    <HelpDesk />

  {:else}

    <DoorStep />

  {/if}

  <div class='footer'>
    <a 
    href="#lament"
    on:click={handleLeMarchandClick}
    > 
      a Temple Cathedral Tomb production
    </a>
  </div>

</div>

<style>

@import url('https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@300&display=swap');

.header, .footer {
  width: 80%;
  position: relative;
  height: auto;
  padding: 20px;
  margin: 20px;
}

.header {
  font-family: 'Averia Serif Libre', cursive;
  font-size: 18px;
  font-style: italic;
  line-height: 17px;

}

.footer {
  font-family: 'Averia Serif Libre', cursive;
  font-size: 18px;
  font-style: italic;
  line-height: 17px;
}

main {
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

</style>