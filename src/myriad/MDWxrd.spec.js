/**
 * @file `MDWxrd` is the main controller for the Basecamp operations
 * of Myriad.
 */

// TODO: change all instances of MDWxrd to MDWxrd
const { MDWxrd } = require('./MDWxrd');

const wxrd = new MDWxrd('test'); 

it('should have at least one spec', () => {

  expect(true).toBe(true);

});

it('should create a basic MDWrd if no metaData is found', () => {

  const inputData = "Some random test data without any metadata";
  const createdWxrd = new MDWxrd(inputData);

  expect(createdWxrd.markDown).toBe(inputData);

});

it('should only create a basic MDWrd if metaData is found', () => {

  const inputData = `

---

testMetaDataField: test metadata value

anotherTestMetaDataField: another test metadata value

---

Here is some text without any data in it, as if it was already parsed

`;

  //WE WANT TO HAVE PARSING BE A FUNCTION OF DJEHUTI AND 
  //FOR IT TO GENERATE A NEW WXRD WITH A NEW UUID SO EACH
  //PARSED WXRD UUID IS UNIQUE TO THAT PARSING EVEN IN EVENT
  //OF ERRORS
  const createdWxrd = new MDWxrd(inputData);

  expect(createdWxrd.markDown).toBe(inputData);

});

