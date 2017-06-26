// API explorer: https://sandbox.dev.clover.com/api_docs/
// API docs: https://docs.clover.com/build/web-api/

/* NOTE: in order to make 'Ajax' requests, you must send the access_token (apiToken) as a
 *       query param
 *
 *       e.g. 'https://sandbox.dev.clover.com/v3/merchants/EMS1MT84N46C2?access_token=' + accessToken
 *
 *       DO NOT attach the access_token as an Authorization header.
 */

let accessToken = window.location.hash.slice(window.location.hash.indexOf('=') + 1);

let url = window.location.href;
let start = url.indexOf('merchant_id=') + 12;
let merchantId = url.slice(start, start + 13);
let infoDiv = document.getElementById('info');

if (accessToken && merchantId) {
  infoDiv.innerHTML = 'Merchant ID: ' + merchantId + '\nAccess Token: ' + accessToken;
} else {
  infoDiv.innerHTML = 'Launch this page through the Clover merchant home\ndashboard to get an ID and access token.';
}
