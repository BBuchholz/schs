/**
 * @file Defines a Wxrd.
 */
// const withUniversalId = require('./withUniversalId');
// const withTyping = require('./withTyping');
// const withAliasing = require('./withAliasing');
// const canLog = require('./canLog');
// const withTransport = require('./withTransport');
// const withMembers = require('./withMembers');

import { v4 as uuidv4 } from 'uuid';

const WxrdOldFormKeepForPorting = (initializationData) => {

  const self = {
    metaData: new Map(),
  };

  const newSelf = Object.assign(
    self,
    withUniversalId(self),
    withTyping(self),
    withAliasing(self),
    withTransport(self),
    canLog(self),
    withMembers(self),
  );

  newSelf.initializeWxrdType('Wxrd');
  newSelf.initializeAliases();
  newSelf.initializeMembers();

  if (initializationData instanceof Map) {

    newSelf.metaData = Object.assign(
      initializationData,
      newSelf.metaData,
    );

  } else if (
    typeof initializationData === 'string'
    || initializationData instanceof String) {

    if (initializationData.startsWith('[[')
          && initializationData.endsWith(']]')) {

      newSelf.metaData = Object.assign(
        new Map(JSON.parse(initializationData)),
        newSelf.metaData,
      );

    } else {

      newSelf.initializeUuid();
      newSelf.initializeCreatedAt();
      newSelf.setAlias(newSelf.getUuid(), initializationData);
      newSelf.metaData.set('wxrdValue', initializationData);

    }

  } else if ("metaData" in initializationData) {

    return Object.assign(newSelf, initializationData);

  } else {

    throw new Error('unrecognized initialization data!');

  }

  return newSelf;

};

export class Wxrd {

  metaData = {
    wxrdValue: '',
    wxrdType: 'Wxrd',
  };

  aliases = {};
  members = {};

  constructor(initializationData){

    if (typeof initializationData === 'string'
        || initializationData instanceof String) {

      this.initializeUuid();
      this.initializeCreatedAt();
      this.setAlias(this.getUuid(), initializationData);
      this.metaData.wxrdValue = initializationData;
      

    } else if ('metaData' in initializationData) {

      this.metaData = initializationData.metaData;

    } else {

      throw 'unrecognized initialization data!';

    }

  }

  initializeUuid() {

    if(!'uuid' in this.metaData){
      this.metaData.uuid = uuidv4();
    }
  }

  getUuid() {

    if(!'uuid' in this.metaData){

      throw 'uuid not initialized!';
    }

    return this.metaData.uuid;
  }

  initializeCreatedAt() {

    if(!'createdAt' in this.metaData){

      const currentTime = new Date();
      this.metaData.createdAt = currentTime.toISOString();
    }
  }

  setAlias(uuidKey, aliasValue) {

    this.aliases[uuidKey] = aliasValue;
  }

  getAlias(uuidToGet) {

    if(!uuidToGet){

      uuidToGet = this.getUuid();

    }

    if(!uuidToGet in this.aliases){

      return '[ALIAS NOT FOUND FOR <' + uuidToGet + '>]';
    }

    return this.aliases[uuidToGet];
  }
}
