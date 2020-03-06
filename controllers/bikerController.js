const uuidv4 = require('uuid/v4');
var Biker = require('../models/Biker');

// Examples of bikers.
var biker0 = new Biker('Jimmy', 'Hsu', 31, 'male', 'Hornet 250');
var biker1 = new Biker('Monica', 'Chen', 31, 'female');

var arrayBikers = new Map();
arrayBikers[uuidv4().toString()] = biker0;
arrayBikers[uuidv4()] = biker1;

// Display for bikers list.
exports.biker_list = function(req, res, next){
    res.json({ arrayBikers });
};

// Create a new biker.
exports.biker_create = function(req, res, next){

    try{
        let newUUID = uuidv4();
        let tempBiker = new Biker();
        Object.assign(tempBiker, req.body);
        
        let theBiker = arrayBikers[newUUID] = tempBiker;
        res.json({ theBiker });
    }catch(err){
        res.status(400).send('Error: problem with posted data');
    };
};

// Read detail for a specific biker.
exports.biker_detail = function(req, res, next){
    let bikerId = req.params.id;
    if(arrayBikers[bikerId]){
        let theBiker = arrayBikers[bikerId];
        res.json({ theBiker });
    }else{
        res.status(404).send('Error: Biker not found.');
    };
};

// Update
exports.biker_update = function(req, res, next){

    try{
        if(arrayBikers[req.params.id]){
            let tempBiker = new Biker();
            Object.assign(tempBiker, req.body);
            let theBiker = arrayBikers[req.params.id] = tempBiker;
            res.json({ theBiker });
        }else{
            res.status(404).sned('Biker not found');
        };
    }catch(err){
        res.status(400).send('Error: problem with update data');
    };
};

// Delete
exports.biker_delete = function(req, res, next){
    
    let deleteId = req.params.id;

    if(arrayBikers[deleteId]){
        
        delete arrayBikers[deleteId];
        res.send(deleteId + 'has been deleted.');
    }else{
        res.status(404).send('Error: Biker not found.');
    };
};