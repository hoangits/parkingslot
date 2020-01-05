/**
 * Parking controller
 * 
 * @author HoangLM
 */
var path = require('path');
var fs = require('fs');
var async = require('async');

//export action
var handler = module.exports = {};


handler.processParking = function(req, res, next) {
    const params = req.query;
    var num_slot = 0;
    const pathFile = rootPath + "/docs/" + params.file;
    var countSlotAllocated = 0;
    var arrSlot = [];
    var arrData = [];
    var arrOutput = [];

    try {
        if (fs.existsSync(pathFile)) {
        
            //readfile
            var arrDataInput = fs.readFileSync(pathFile).toString().split("\n");

            arrData = arrDataInput.slice(1, arrDataInput.length);
            
            // console.log("arrData:", arrData);

            const parseStrCreate = arrDataInput[0].split(" ");
            if(parseStrCreate[0] == "create_parking_lot") {
                num_slot = parseInt(parseStrCreate[1]);
            }
            // console.log("num_slot:", num_slot);

            for(let i=0; i < num_slot; i++) {
                arrSlot.push(0);
            }
            
            if(num_slot > 0) {
                for(let i=0; i < arrData.length; i++) {
                    let pickElemt = arrData[i].split(" ");
                    // if(pickElemt[0] == "park" && countSlotAllocated < num_slot) {
                    if(pickElemt[0] == "park") {
                        var flagAdd = false;
                        for(let j=0; j < num_slot; j++) {
                            // console.log("arrSlot", arrSlot[j], j);
                            if(arrSlot[j] == 0 && flagAdd == false) {
                                arrSlot[j] = pickElemt[1];
                                countSlotAllocated++;
                                flagAdd = true;
                                let strMsg = "Allocated slot number: " + (j+1);
                                console.log(strMsg);
                                arrOutput.push(strMsg);
                            }
                        }

                        if(flagAdd == false) {
                            let strMsg = "Sorry, parking lot is full";
                            console.log(strMsg);
                            arrOutput.push(strMsg);
                        }
                    }

                    var flagRemove = false;
                    if(pickElemt[0] == "leave") {
                        for(let j=0; j < num_slot; j++) {
                            if(arrSlot[j] == pickElemt[1]) {
                                arrSlot[j] = 0;
                                countSlotAllocated--;
                                flagRemove = true;
                                const hours = pickElemt[2];
                                var amount = 0;
                                if(hours > 2) {
                                    amount = 10 + (hours - 2) * 10;
                                }
                                else {
                                    amount = 10;
                                }
                                let leaveSlot="Registration number " + pickElemt[1] + " with Slot Number " + (j+1) + " is free with Charge " + amount;
                                console.log(leaveSlot);
                                arrOutput.push(leaveSlot);
                            }                
                        }
                        if(flagRemove == false) {
                            let notFindForLeaveSlot = "Registration number " + pickElemt[1] + " not found";
                            console.log(notFindForLeaveSlot);
                            arrOutput.push(notFindForLeaveSlot);
                        }
                    }

                    if(pickElemt == "status") {
                        let strMsg = "Slot No.  Registration No.";
                        console.log(strMsg);
                        arrOutput.push(strMsg);
                        for(let i=0; i < num_slot; i++) {
                            if(arrSlot[i] != 0) {
                                var str = i+1 + " " + arrSlot[i];
                                console.log(str);
                                arrOutput.push(str);
                            }
                        }
                    }

                }
            }

            //Output results
            var dataOutput = arrOutput.join("<BR/>");
            res.send(dataOutput);
        }
        else {
            //Output result
            res.send("File not found!");
        }
    } catch(err) {
        console.error(err);
        res.send(err);
    }
    // res.json(arrOutput);
    
    res.end();
}


/*****************************************************************************
 * 
 *      PRIVATE FUNC
 */
