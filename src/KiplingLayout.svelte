<script>
  
  import DoorStep from './DoorStep.svelte';

  import { 
    passPhrase,
    currentMDWxrd,
    schsUnfolded,
    schsTagline,
    schsRespectable,
  } from './stores.js';

  import { getContext } from 'svelte';

  import PromptEnterPassPhrase from './PromptEnterPassPhrase.svelte';

  const { open } = getContext('simple-modal');

  function handleTitleClick(){

    $schsRespectable = !$schsRespectable;
  }

  const showPromptEnterPassPhrase = () => {
    open(PromptEnterPassPhrase);
  };

  function initialize(){
    $schsRespectable = false;
  }

  initialize();

</script>

<div class='main'>

  <div class='header'>

    <h1 
      class='title'
      on:click={showPromptEnterPassPhrase}
    >
      {$schsUnfolded}
    </h1>

    <p class='tagline'>
      {$schsTagline}
    </p>
  
  </div>

  <div class="pathFork">

    {#if !$schsRespectable}

      <div class="stepInStone">
        
        <div class="lab-item">
          <a href="?passPhrase=verifyView"> 
            Press Me
          </a>
        </div>

        <p>Ready to begin exploring? Find others walking similar paths and find a commonality of practice to discuss and further. (Follow another's footsteps with a tutorial)(TURN THESE INTO BUTTONS THAT PREFILL THE BOX)</p>

      </div>

    {:else}


      <div class="stepInStone">
        
        <p>Not sure where to begin? What are you interested in? (Start an Investigation) (TURN THESE INTO BUTTONS THAT PREFILL THE BOX)</p>

      </div>

      <div class="stepInStone">
        
        <p>Unsatisfied with the paths before you? (Write your own and become a trailblazer!)(TURN THESE INTO BUTTONS THAT PREFILL THE BOX)</p>

      </div>

      <div class="stepInStone">
        
        <p>Struggling with some challenge before you? (Ask a question to seek help from others)(TURN THESE INTO BUTTONS THAT PREFILL THE BOX)</p>

      </div>

      <div class="stepInStone">
        
        <p>Interesting in sharing your accumulated experiences? (Post up as a knowledge source for various areas you are familiar with)(TURN THESE INTO BUTTONS THAT PREFILL THE BOX)</p>

      </div>

      <div class="stepInStone">
        
        <p>Don't see what you're looking for? Suggest a new Step In Stone Here(TURN THESE INTO BUTTONS THAT PREFILL THE BOX)</p>

      </div>
    
    {/if}

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