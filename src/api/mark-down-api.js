// NB: /api/ prefix used below is mapped in netlify.toml (cf.)

// TODO: this was copied verbatim from wxrds-api.js,
// needs to be modified for markdown

// TODO: all markdown methods should be in Djehuti, instead of
//       D.Controller (we are deprecating D.Controller entity)
// MIMIC: pandaemonium.studio implementation for this mod

  import { Djehuti } from '../myriad/Djehuti.js';

  const thothMagus = new Djehuti();

export const createMDWxrd = (text) => {

  const ensuredWithUuid = thothMagus.ensureUuid(text);
  const newWxrd = thothMagus.createMDWxrd(ensuredWithUuid);

  console.log('new wxrd created: ' + newWxrd);

  return fetch('/api/wxrds-create', {
    body: JSON.stringify(newWxrd),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

export const readAll = () => {
  return fetch('/api/wxrds-read-all').then((response) => {
    return response.json()
  })
}

export const readForPreferredAlias = (preferredAlias) => {
  return fetch('/api/wxrds-read-alias', {
    body: JSON.stringify(preferredAlias),
    method: 'POST'
  }).then((response) => {
    return response.json()
  })
}

export const update = (wxrdId, data) => {
  return fetch(`/api/wxrds-update/${wxrdId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

export const deleteWxrd = (wxrdId) => {
  return fetch(`/api/wxrds-delete/${wxrdId}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}

export const batchDeleteWxrd = (wxrdIds) => {
  return fetch(`/api/wxrds-delete-batch`, {
    body: JSON.stringify({
      ids: wxrdIds
    }),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
