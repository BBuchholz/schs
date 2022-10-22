<script>

  import Modal from 'svelte-simple-modal';
  import Notifications from 'svelte-notifications';   

  import SvelteMarkdown from 'svelte-markdown';

  import { 
    modal, 
    passPhrase,
    headerQuote,
    devMode,
    currentMDWxrd,
  } from './stores.js';


  let currentTopic = '';
  
  const urlParams = 
    new URLSearchParams(window.location.search);
  
  if(urlParams.has('passPhrase')){

    $passPhrase = urlParams.get('passPhrase');
    console.log('passPhrase set to: ' + $passPhrase);

    //TODO: this should fetch from a function by uuid
    // start with a mockup that just takes any value and returns
    // a hardcoded one, but then replace with a lookup and error handling

    $currentMDWxrd = `

View at either of these sources (should be the same video, REPORT HERE if any errors are encountered)

Source: https://tilvids.com/w/wm2tYLH84q5HxNXxxGPSxw
Source: https://www.youtube.com/watch?v=CB1KE5dbOZo

When you have finished viewing the video, POST A COMMENT HERE with your verifcation (this will be public)

    `;
    

    console.log('currentMDWxrd is: ' + $currentMDWxrd);
  }

  if(urlParams.has('topic')){
    $passPhrase = 'Topics';
    currentTopic = urlParams.get('topic');
  }

  import MyriadNotification from './MyriadNotification.svelte';

  import Paradiso from './pip/Paradiso.svelte';
  import Alexandria from './Alexandria.svelte';
  import DoorStep from './DoorStep.svelte';
  import MasonryLayout from './MasonryLayout.svelte';
  import KiplingLayout from './KiplingLayout.svelte';
  import MyrKiLayout from './MyrKiLayout.svelte';
  import VerifiableViewer from './VerifiableViewer.svelte';
  import TopicBrowser from './TopicBrowser.svelte';
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
        alt="Socratic Citadel Hearth Society logo" 
        class="center" />

      {#if $passPhrase === 'SFS'}

        <KiplingLayout />

      {:else if $passPhrase === 'Topics'}

        <TopicBrowser {currentTopic} />

      {:else if $passPhrase === 'verifyView' && $currentMDWxrd}

        <VerifiableViewer />

      {:else if $currentMDWxrd}

        <SvelteMarkdown source={$currentMDWxrd.markDown} />

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