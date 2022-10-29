<script>
  
  import DoorStep from './DoorStep.svelte';

  import { 
    passPhrase,
    currentMDWxrd,
  } from './stores.js';

  import { getContext } from 'svelte';

  import PromptEnterPassPhrase from './PromptEnterPassPhrase.svelte';

  const { open } = getContext('simple-modal');

  const showPromptEnterPassPhrase = () => {
    open(PromptEnterPassPhrase);
  };


</script>

<div class='main'>

  <div class='header'>

    <h1 
      class='title'
      on:click={showPromptEnterPassPhrase}
    >
      School For Scoundrels
    </h1>

    <p class='tagline'>
      "Stop Complainin'... Start Obtainin'..." -- @SCSib1232
    </p>
    <p>
      Welcome to the Clubhouse...
    </p>
  
  </div>

  <div class="pathFork">

      <div class="stepInStone">
        
        <div class="lab-item">
          <a href="?passPhrase=verifyView"> 
            Press Me
          </a>
        </div>

        <p>Video Assignment: The Creativity Delusion</p>

      </div>


      <div class="stepInStone">
        
        <div class="lab-item">
          <a href="https://youtu.be/MZ2GuvUWaP8"> 
            Watch Me
          </a>
        </div>

        <p>Video Assignment: Everything Is A Remix</p>

      </div>


      <div class="stepInStone">
        
        <div class="lab-item">
          <a href="https://www.scribd.com/document/241241556/steal-like-an-artist"> 
            Read Me
          </a>
        </div>

        <p>Reading Assignment: Steal Like An Artist</p>

      </div>



      <div class="stepInStone">
        
        <div class="lab-item">
          COMING SOON
        </div>

        <p>Arkhives</p>

      </div>

  </div> 

</div>

<style>

  *, *:before, *:after {box-sizing:  border-box !important;}


  .pathFork {
    column-width: 13em;
    column-gap: 0.5em;
  }

  .stepInStone {
    display: inline-block;
    margin:  0.25rem;
    padding:  1rem;
    width:  100%; 
    border: 0.1em solid black;
    border-radius: 0.73rem;
  }




  /*  styles for background color, etc; not necessary for this thing to work  */




  .header {

    text-align: center;
  }

  .title {
    font-size:  3rem;
    font-weight:  800;
    padding-bottom: 0px;
    margin: 0px;
  }

  .tagline {
    font-size: 1rem;
    font-weight: 200;
    padding-bottom: 20px;
    padding-top: 10px;
    margin: 0px;
  }









</style>