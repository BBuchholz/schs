// ADAPTING (IN PROGRESS) FROM: https://github.com/netlify/netlify-faunadb-example/blob/17a9ba47a8b1b2408b68e793fba4c5fd17bf85da/functions/todos-read.js


const faunadb = require('faunadb'); /* Import faunaDB sdk */
const { getId } = require('./utils.js');

/* configure faunaDB Client with our secret */
const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

/* export our lambda function as named "handler" export */
exports.handler = (event, context, callback) => {
  
  const id = getId(event.path);
  console.log(`Function 'wxrds-read' invoked. Read id: ${id}`);
  
  return client.query(q.Get(q.Ref(`classes/wxrds/${id}`)))
    .then((response) => {
      console.log("success", response)
      /* Success! return the response with statusCode 200 */
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      })
    }).catch((error) => {
      console.log("error", error)
      /* Error! return the error with statusCode 400 */
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })
    });
}
