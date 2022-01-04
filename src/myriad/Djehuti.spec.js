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
  expect(createdWxrd.wxrdValue).toBe(multiLineInput);

});