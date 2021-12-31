<script>

	import DjehutiController from '../myriad/DjehutiController.js';

	const djehuti = DjehutiController();
	export let currentWxrd = djehuti.createWxrd('not yet initialized').result;

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

	const getMemories = async () => {
	    const resp = await fetch('/api/wxrds-read-all')
	    const data = await resp.json()
	    wxrds = data;
	  }


</script>

<div>

	Hello {currentWxrd}

	<button on:click={createANewWxrd}>Test Create Wxrd</button>


  <div id="wxrds">
  	
  	{#foreach}

  	<div className="wxrd-card" key={i}>{wxrd.data.text}</div>


  	<!-- TODO: make this for each loop work, all the scaffolding is in place, copying from rising-myriad, cf. for details -->
  	{}

  </div>
</div>