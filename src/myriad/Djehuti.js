import { Wxrd } from './Wxrd';
import { MDWxrd } from './MDWxrd';

export class Djehuti {

	constructor(){

	}

	createWxrd(multiLineInput) {
 
		return new Wxrd(multiLineInput);
	}

	createMDWxrd(multiLineInput) {
 
 		let newWxrd = new MDWxrd(multiLineInput);

 		this.parseMetaData(newWxrd);

		return newWxrd;
	}

	startsWithADivider(multiLineInput) {

		let found = false;

		if(multiLineInput.trim().startsWith('---')){
			
			found = true;
		}

		return found;
	}

	parseMetaData(wxrd) {

		if(this.startsWithADivider(wxrd.markDown)){

			// console.log('found opening divider');

			// set to false here, will flip to true on first
			// line in for loop below, then back to false
			// when it finds the next divider
			let inFrontMattter = false; 

			const lines = this.splitToLines(wxrd.markDown);

			// console.log('lines found: ' + lines.length);

			for (const line of lines){

				if(this.startsWithADivider(line)){

					// console.log('closing divider found');

					// we found a divider, toggle status
					// which was initialized to false above
					// if its the first we'll become true
					// if its the second it'll become false
					inFrontMattter = !inFrontMattter;
				}

				if(inFrontMattter){

					// ignore divider lines and empty lines

					const trimmedLine = line.replace(/-/g, '').trim();

					if(trimmedLine){

						// console.log('processing line: ' + trimmedLine);

						const metaKey = trimmedLine.slice(0, trimmedLine.indexOf(':')).trim();
						const metaValue = trimmedLine.slice(trimmedLine.indexOf(':') + 1).trim();

						wxrd.metaData[metaKey] = metaValue;											
					}

				}

			}

		}
	}

	splitToLines(multiLineInput) {

		return multiLineInput.split('\n');
	}


	// TODO: Mimic createWxrd to implement createMarkDown

	importWxrdFromJson(jsonString) {

		if(!this.hasJsonStructure(jsonString)){

			throw "can't import json from non-json string";
		}

		const parsed = JSON.parse(jsonString);

		return new Wxrd(parsed);
	}

	importMDWxrdFromJson(jsonString) {

		if(!this.hasJsonStructure(jsonString)){

			throw "can't import json from non-json string";
		}

		const parsed = JSON.parse(jsonString);

		return new MDWxrd(parsed);
	}

	hasJsonStructure(str) {
	
		// adapted from: https://stackoverflow.com/a/52799327/670768
		if (typeof str !== 'string') {
			return false;
		}

	    try {
	    
	        const result = JSON.parse(str);
	        const type = Object.prototype.toString.call(result);
	        return type === '[object Object]' 
	            || type === '[object Array]';
	    
	    } catch (err) {
	    
	        return false;
	    }
	}
}