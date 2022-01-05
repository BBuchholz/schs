/**
 * @file Djehuti is the main controller for the Basecamp operations
 * of Myriad.
 */

const { Djehuti } = require('./Djehuti');

const djehuti = new Djehuti(); 

it('should have at least one spec', () => {

  expect(true).toBe(true);

});

it('should create wxrd from multiline string input', () => {

  const multiLineInput = `Something I wrote down to remember... 
  alias: Test String
  tags: testing, test`;

  const createdWxrd = djehuti.createWxrd(multiLineInput);
  expect(createdWxrd.metaData.wxrdValue).toBe(multiLineInput);

});


it('should import a wxrd from a json string', () => {

  const multiLineInput = `Something I wrote down to remember... 
  alias: Test String
  tags: testing, test`;

  const createdWxrd = djehuti.createWxrd(multiLineInput);

  const stringifiedWxrd = JSON.stringify(createdWxrd);

  expect(createdWxrd).not.toBe(stringifiedWxrd);

  const importedWxrd = djehuti.importWxrdFromJson(stringifiedWxrd);

  expect(importedWxrd).toEqual(createdWxrd);

});


it('should throw an error if import string is not json', () => {

  expect(() => {
    djehuti.importWxrdFromJson('this is just a string')
  }).toThrow();

});