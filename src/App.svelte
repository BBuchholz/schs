<script>
	
	import WxrdPage from './components/WxrdPage.svelte';


    const urlParams = new URLSearchParams(window.location.search);
    const hasCardKey = urlParams.has('cardKey');
    const cardKey = urlParams.get('cardKey');


</script>

<main>
	
    
{#if hasCardKey}
    
    <p>card key {cardKey} found!</p>

{:else}
    
	<WxrdPage />

{/if}


</main>

<style>
	
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
