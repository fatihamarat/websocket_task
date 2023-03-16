
const WebSocket = require('ws');
const ws = new WebSocket('wss://cekirdektenyetisenler.kartaca.com/ws');

ws.on('error', console.error);

// ws.on('open', function open() {
//   ws.send('{\"type\":\"REGISTER\",\"name\":\"FATIH\",\"surname\":\"HAMARAT\",\"email\":\"fatihhamarat@hotmail.com\",\"registrationKey\":\"4u714534uu08z67358529yxwzx4v8094z506z46zzy8uvvwz4980uw346394x8wx\"}');
// });

const obj = {
  a:"z",
  b:"y",
  c:"b",
  d:"w",
  e:"v",
  f:"u",
  g:"t",
  h:"s",
  i:"r",
  j:"q",
  k:"p",
  l:"o",
  m:"n",
  z:"a",
  y:"b",
  x:"c",
  w:"d",
  v:"e",
  u:"f",
  t:"g",
  s:"h",
  r:"i",
  q:"j",
  p:"k",
  o:"l",
  n:"m",
  0:"0",
  1:"1",
  2:"2",
  3:"3",
  4:"4",
  5:"5",
  6:"6",
  7:"7",
  8:"8",
  9:"9"
}

ws.on('open', function open() {
  console.log('WebSocket connection established.');
});

ws.on('message', function incoming(data) {
  if(JSON.parse(data)?.type === "HELLO"){
    let key = "";
    for (let index = 0; index < JSON.parse(data).message.slice(-64).length; index++) {
      const element = JSON.parse(data).message.slice(-64)[index];
      // console.log(element,obj[element]);
      key = key+obj[element];
    }
    ws.send(`{\"type\":\"REGISTER\",\"name\":\"FATIH\",\"surname\":\"HAMARAT\",\"email\":\"fatihhamarat@hotmail.com\",\"registrationKey\":\"${key}\"}`);
  }
  console.log(JSON.parse(data).message);
});

ws.on('close', function close() {
 console.log('WebSocket connection closed.');
});
