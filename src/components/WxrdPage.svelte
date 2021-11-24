<script>

	import DjehutiController from '../myriad/DjehutiController.js';

	const djehuti = DjehutiController();
	export let currentWxrd = djehuti.createWxrd('not yet initialized').result;

</script>

<div>

	Hello {currentWxrd}

</div>