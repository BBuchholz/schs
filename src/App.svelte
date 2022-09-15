<script>

  import Modal from 'svelte-simple-modal';
  import Notifications from 'svelte-notifications';

  import { 
    modal,
    passPhrase,
    headerQuote,
    devMode,
  } from './stores.js';

  
  const urlParams = 
    new URLSearchParams(window.location.search);
  
  if(urlParams.has('passPhrase')){

    $passPhrase = urlParams.get('passPhrase');
  }

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


  function initialize(){

    $devMode = false;

    if($devMode){

      $passPhrase = 'help';
    }
  }

  initialize();

</script>


<Notifications item={MyriadNotification}>

  <Modal show={$modal}>
    
    <main>

      <img 
        src="images/SCHS_logo.png" 
        alt="Socratic Circle Home School logo" 
        class="center" />

      {#if $passPhrase === 'myrki'}

        <MyrKiLayout />

      {:else}

        <MasonryLayout />
        
      {/if}

    </main>

  </Modal>

</Notifications>

<style>

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}


</style>