const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ss = require('socket.io-stream');

const PORT = process.env.PORT || 4444;
const INTERVAL = 1000;

console.log("Registering socker events");
io.on("connection", socket => {
  const pCubeId = socket.handshake.query.pCubeId || 0;

  console.log(`Getting data for ${pCubeId}`);

  // send back a file stream (for historical / larger than 6mb implementation)
  ss(socket).on('historical', (stream, data) => {
    stream.pipe(fs.createWriteStream("../mockData.json"));
  });

  // emit data every n seconds to the frontend
  setInterval(() => {
    // get chunk data for pCubeId
    // ...
    console.log("Emitting chunk data ...");
    // emit chunk
    socket.emit("liveData", {
      "time_stamp": new Date(),
      "pc_1_avg_kwhr": 0.00012816666666613701,
      "pc_3_avg_varhr": 0.1966522222222221,
      "c_70_min_w": 7.056,
      "c_70_max_w": 10.027,
      "c_70_avg_w": 7.680766666666668,
      "c_88_min_var": 10.721,
      "c_88_max_var": 14.675,
      "c_88_avg_var": 11.799133333333325,
      "c_106_min_va": 12.867,
      "c_106_max_va": 17.728,
      "c_106_avg_va": 14.079933333333328
    });
  }, INTERVAL);
});

console.log("Setting up HTTP Listener ...");
http.listen(PORT);
console.log(`Listening on port ${PORT}`);