# ParkingSlot Demo

### Installation
This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/).
Before installing, [download and install Node.js](https://nodejs.org/en/download/). Node.js 8.x.x or higher is required.
Installation is done using the [npm install command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):
```
$ npm install
```

### Quick Start
Start the server:
```
$ cd parking_slot
$ pm2 start app.js --name API
```
View the website at: http://localhost:3000/parking/process?file=input.txt

Check Log
```
$ pm2 log
```

Restart App
```
$ pm2 restart API
```

### Test more input
Create input file and move to **docs** directory. 
Now you can test with **input.txt** and **input1.txt** file


