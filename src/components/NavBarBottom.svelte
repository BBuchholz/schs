<script>
  
  import { displayMode } from '../stores.js';
  
</script>

<ul>
  <li><a class:active={$displayMode == 'Text'} href="#text" on:click={() => $displayMode = 'Text'}>Text</a></li>
  <li><a class:active={$displayMode == 'Piano'} href="#piano" on:click={() => $displayMode = 'Piano'}>Piano</a></li>
  <li><a class:active={$displayMode == 'Drum Map'} href="#drum-map" on:click={() => $displayMode = 'Drum Map'}>Drum Map</a></li>
  <li><a class:active={$displayMode == 'About'} href="#about" on:click={() => $displayMode = 'About'}>About</a></li>
</ul>

<style>
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }

  .active {
    background-color: #04AA6D;
  }
</style>