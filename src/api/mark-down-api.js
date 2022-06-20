// NB: /api/ prefix used below is mapped in netlify.toml (cf.)

// TODO: this was copied verbatim from wxrds-api.js,
// needs to be modified for markdown

// TODO: all markdown methods should be in Djehuti, instead of
//       D.Controller (we are deprecating D.Controller entity)
// MIMIC: pandaemonium.studio implementation for this mod

  import DjehutiController from '../myriad/DjehutiController.js';

  const djehuti = DjehutiController();

export const create = (text) => {

  const newWxrd = djehuti.createWxrd(text).result;

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
