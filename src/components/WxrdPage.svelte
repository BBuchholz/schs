<script>

	import { allLoadedWxrds } from '../stores.js';
	import { readAll } from '../api/wxrds-api.js';
	
	import DjehutiController from '../myriad/DjehutiController.js';

	const djehuti = DjehutiController();
	export let currentWxrd = djehuti.createWxrd('not yet initialized').payload;

	const wxrds = [];

	// Function using fetch to POST to our API endpoint
	function createThisWxrd(data) {
	  return fetch('/api/wxrds-create', {
	    body: JSON.stringify(data),
	    method: 'POST'
	  }).then(response => {
	    return response.json()
	  })
	}

	function createANewWxrd(){

		const timestamp = Date.now();

		// Todo data
		const myWxrd = {
		  title: "test " + timestamp,
		  completed: false,
		}

		// create it!
		createThisWxrd(myWxrd).then((response) => {
		  console.log('API response', response)
		  // set app state
		}).catch((error) => {
		  console.log('API error', error)
		})

	}

	function dumpProps(obj, obj_name) {
	  let result = '';
	  for (let i in obj) {
	    result += obj_name + '.' + i + ' = ' + obj[i];
	  }
	  return result;
	}

	const getMemories = async () => {
	    const resp = await fetch('/api/wxrds-read-all')
	    const data = await resp.json()
	    wxrds = data;
	  }

	function loadWxrds() {

		const allWxrds = readAll();

		readAll().then((response) => {
		  console.log('API response', response)
		  // set app state



			$allLoadedWxrds = [...response];
		}).catch((error) => {
		  console.log('API error', error)
		});

	}


</script>

<div>

	Hello {currentWxrd}

	<button on:click={createANewWxrd}>Test Create Wxrd</button>
	<button on:click={loadWxrds}>Load Wxrds</button>



  <div class="wxrds">
  	
  	{#each $allLoadedWxrds as wxrd, i}
<p>test</p>
  		<div class="wxrd-card" key={i}>
	  		{dumpProps(wxrd, 'wxrd')}
	  	</div>

  	<!-- TODO: make this card work, data isn't displaying properly but it is returning, need to play with console log and some different values to see what we can get working, soo close-->
  	
  	{/each}

  </div>

</div>

<style>
	.wxrds {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		background: blue;
	}

	.wxrd-card {
		margin: 5;
		padding: 10;
		background: black;
		display:  inline-block;
		justify-content: space-around;
	}
</style>