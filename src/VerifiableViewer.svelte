<script>
  
  import { 
    currentMDWxrd,
  } from './stores.js';

  import { Djehuti } from './myriad/Djehuti.js';

  const thothMagus = new Djehuti();

  import SvelteMarkdown from 'svelte-markdown';

  function initialize(){

    const text = `

View at either of these sources (should be the same video, REPORT HERE if any errors are encountered)

Source: https://tilvids.com/w/wm2tYLH84q5HxNXxxGPSxw
Source: https://www.youtube.com/watch?v=CB1KE5dbOZo

When you have finished viewing the video, POST A COMMENT HERE with your verifcation (this will be public)

    `;

    $currentMDWxrd = thothMagus.createMDWxrd(text);
    console.log($currentMDWxrd);
  }

</script>

<div class='main'>

  <SvelteMarkdown source={$currentMDWxrd} />
  
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