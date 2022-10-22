<script>
  
  import DoorStep from './DoorStep.svelte';

  import { 
    passPhrase,
    currentMDWxrd,
  } from './stores.js';

  import { getContext } from 'svelte';

  import PromptStartInvestigation from './PromptStartInvestigation.svelte';
  import PromptEnterPassPhrase from './PromptEnterPassPhrase.svelte';

  const { open } = getContext('simple-modal');

  const showPromptStartInvestigation = () => {
    open(PromptStartInvestigation);
  };

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
      Socratic Circle Home School
    </h1>
 
    <p class='tagline'>
      Welcome to the online center for the Socratic Circle Home School. We open these doors with the intention of establishing a <a href="https://youtube.com/clip/Ugkx9MkejdusERb7h2scBMdzu41f5ijTO1WO">Success 3.0</a> institution.
    </p>
  
  </div>

  <div class="pathFork">


    <div class="stepInStone">
      
      <p>Not sure where to begin? SCHS is a place where you can explore new learning in a sharing focused format. Any topic is a good topic if if interests you, start an investigation into something new...</p>

      <h2 
        class='stepInStone'
        on:click={showPromptStartInvestigation}
      >
        Start an Investigation
      </h2>

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