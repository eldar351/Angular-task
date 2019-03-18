var Family = require('../models/family.model');
var familymembers= require('../models/family.model');
var familyModule = { 
    save: (objToSave) => {
   
        var newTab = new Family(objToSave);
        return newTab.save();
    },
    update: (id, objToUpdate) => {
        if (id) {
            return Family.findByIdAndUpdate(id, objToUpdate)
        } else {
            return {
                msg: "no id specified"
            }
        }
    },
    delete: (id) => {
        if (id) {
            return Family.remove({
                _id: id
            });
        } else {
            return {
                msg: "no id specified"
            };
        }
    },
    get: (id) => {
        if (id)
            return Family.find({
                _id: id
            });
        else
            return Family.find();
    }
}


module.exports = familyModule;

var allfamilyModule={ get: (id) => {
    if (id)
        return familymembers.find({
            _id: id
        });
    else
        return familymembers.find();
}
}

