// // /////////////////////////////////
// // // TOP LEVEL STORES
// // /////////////////////////////////

import { writable, derived } from 'svelte/store';
// import KnechtController from './myriad/KnechtController.js';

// const magisterLudi = KnechtController();

export const modal = writable(null);
export const passPhrase = writable('daedalus');

export const devMode = writable(false);
export const previousTurnInfo = writable('');
export const currentBookCount = writable(0);

export const currentBook = writable('');
export const currentMDWxrd = writable(null);

export const schsRespectable = writable(true);

export const schsUnfolded = derived(
	[schsRespectable],
	([$schsRespectable]) => {

    if($schsRespectable) {
      return 'Socratic Citadel Hearth Society';
    }else{
      return 'Slacker Circle Home School';
    }

});	

export const schsTagline = derived(
  [schsRespectable],
  ([$schsRespectable]) => {

    if($schsRespectable) {
      return 'Welcome to the online center for the Socratic Citadel Hearth Society (currently under development)';
    }else{
      return 'Slacker Circle Home School';
    }

}); 

export const currentBookTitle = derived(
	[currentBook], 
	([$currentBook]) => {

	if($currentBook) {

    return $currentBook.title;
  }

  return '(no book currently open)';
  
});

export const headerQuote = derived(
	[passPhrase, ],
	([$passPhrase, ]) => {

		let quote = {};

		if($passPhrase === 'daedalus'){

			quote.content = 'The school is the servant of the ' + 
		 		'workshop and will one day be absorbed in it. ' + 
		 		'Therefore there will be no teachers or pupils ' + 
		 		'[...] but masters, journeymen, and apprentices.';

			quote.source = 'Walter Gropius';

		}

		if ($passPhrase === 'matriculate'){

			quote.content = 'This was Baphomet. This diced and divided thing.';

			quote.source = 'Clive Barker, Cabal';
		}

		if ($passPhrase === 'madness'){

			quote.content = `'It is absolutely necessary, for the peace and safety of mankind, that some of earth’s dark, dead corners and unplumbed depths be let alone; lest sleeping abnormalities wake to resurgent life, and blasphemously surviving nightmares squirm and splash out of their black lairs to newer and wider conquests.'`;

			quote.source = 'H.P. Lovecraft, At the Mountains of Madness';
		}

		if ($passPhrase === 'woander'){

			quote.content = `111. Mál er at þylja þular stóli á
Urðarbrunni at, sá ek ok þagðak,
sá ek ok hugðak,
hlýdda ek á manna mál;
of rúnar heyrða ek dæma,
né of ráðum þögðu
Háva höllu at, Háva höllu í,
heyrða ek segja svá:

111. It is time to chant | from the chanter's stool;
By the wells of Urth I was,
I saw and was silent, | I saw and thought,
And heard the speech of Hor.
(Of runes heard I words, | nor were counsels wanting,
At the hall of Hor,
In the hall of Hor;
Such was the speech I heard.)`;

			quote.source = '-- Havamal, verse 111, retrieved from http://voluspa.org/havamal111-115.htm on 2022-07-20';
		}

		if ($passPhrase === 'DO_NOT_TOUCH_THIS_TEMPLATE'){

			quote.content = 'CONTENT_HERE';

			quote.source = 'SOURCE_HERE';
		}

		if ($passPhrase === 'promulgate'){

			quote.content = `Now this is the Law of the Jungle — as old and as true as the sky;
And the Wolf that shall keep it may prosper, but the Wolf that shall break it must die. `;

			quote.source = 'Rudyard Kipling, The Law of the Jungle';
		}

		if ($passPhrase === 'praxis'){

			quote.content = 'Practise a thousand times, and it becomes difficult; a thousand thousand, and it becomes easy; a thousand thousand times a thousand thousand, and it is no longer Thou that doeth it, but It that doeth itself through thee.';

			quote.source = 'Aleister Crowley, The Book of Lies';
		}

		if ($passPhrase === 'daedalusLab') {

			quote.content = 'I would have a workshop attached to ' + 
		 		'every school, and one hour a day given up to ' + 
		 		'the teaching of simple decorative arts.';

			quote.source = 'Oscar Wilde';
		}

		if ($passPhrase === 'leMat') {

		}

		if ($passPhrase === 'animatus') { //TODO: change phrase

			quote.content = 'I have always imagined that Paradise ' + 
		 		'will be a kind of a Library.';

			quote.source = 'Jorge Luis Borges';
		}

		if ($passPhrase === 'alex') { //TODO: change phrase

			quote.content = 'The interior of our skulls contains a portal to infinity.';

			quote.source = 'Grant Morrison, Supergods';
		}

		if ($passPhrase === 'lament') {

			quote.content = 'And there was music too; ' + 
		 		'a simple tune emerged from the box, ' + 
		 		'played on a mechanism that she could ' + 
		 		'not yet see. Enchanted, she delved ' + 
		 		'further. Though one piece had been ' + 
		 		'removed, the rest did not come readily. ' + 
		 		'Each segment presented a fresh challenge ' + 
		 		'to fingers and mind, the victories ' + 
		 		'rewarded with a further filigree ' + 
		 		'added to the tune.';

		 quote.source = 'The Hellbound Heart, by Clive Barker';
		}

		if ($passPhrase === 'leMonde') {

		}

		if ($passPhrase === 'leNuit') {

		}

		if ($passPhrase === 'leCE') {

		}

		if ($passPhrase == 'Help') {

			quote.content = 
				"HINT: MyrKis are CaSe SeNsItIvE...";
			quote.source = 
				"THE MGMNT"			
		}

		if ($passPhrase == 'help') {

			quote.content = 
				"Still a bit murky? What's a MyrKi? While we " + 
				"certainly would never say such admonition as 'Look No Further' (being that we, as individuals and as a collective organization would always hope for further looking) sometimes the Mirror Key can become a bit Murky (they do require polish at regular intervals for proper functioning) and so we're mainting a collective little cheat sheet for the more common commands we like to use. (and we assure you, all the keys can be found, that's half of the fun of the game).";
			quote.source = 
				"THE MGMNT"			
		}

		if (!$passPhrase.trim()){

			quote.content = 
				"MyrKis Cannot Be Purely Whitespace";
			quote.source = 
				"THE MGMNT"
		}

		if(!quote.content){

			quote.content = 
				"No header quote set for pass phrase " + $passPhrase;
			quote.source = 
				"THE MGMNT"
		}

		return quote;
	}
);


export const allLoadedWxrds = writable([]);
export const displayMode = writable('Text');