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

	firstLineIsADivider(multiLineInput) {

		let found = false;

		if(multiLineInput.trim().startsWith('---')){
			
			found = true;
		}

		return found;
	}

	parseMetaData(wxrd) {

		if(this.firstLineIsADivider(wxrd.markDown)){

			let inFrontMattter = true;

			const lines = this.splitToLines(wxrd.markDown);

			for (const line of lines){

				if(this.firstLineIsADivider(line)){

					// we found the closing divider
					inFrontMattter = false;
				}

				if(inFrontMattter){

					const metaKey = line.slice(0, line.indexOf(':'));
					const metaValue = line.slice(line.indexOf(':') + 1);
					wxrd.metaData[metaKey] = metaValue;					
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