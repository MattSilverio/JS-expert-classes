// ls | grep package | xargs cat | jq .name

// process.stdin.pipe(process.stdout)

//     .on('data', msg => console.log('data', msg.toString()))
//     .on('error', msg => console.log('error', msg.toString()))
//     .on('end', _ => console.log('end'))
//     .on('close', _ => console.log('close'))

// terminal 1
// node -e "require('net').createServer(socket => socket.pipe(process.stdout)).listen(1338)"

// terminal 2
//node -e "process.stdin.pipe(require('net').connect(1338))"

// node -e "process.stdout.write(crypto.randomBytes(1e9))" > big-file.txt

import http from "http";
import { createReadStream, readFileSync } from "fs";
http
  .createServer((req, res) => {
    // má pratica
    // const file = readFileSync('big-file.txt').toString()
    // res.write(file)
    // res.end()

    createReadStream("big-file.txt").pipe(res);
  })
  .listen(3333, () => console.log("running at 3333"));

// curl localhost:3333 -o output.txt
