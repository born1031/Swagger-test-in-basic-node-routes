function Biker(firstname, lastname, age, gender, bike){
    var self = this;
    self.firstName = firstname || "";
    self.lastName = lastname || "";
    self.Age = age || "";
    self.Gender = gender || "";
    self.Bike = bike || "This biker has no bike.";
};

Biker.prototype.getName = function(){
    var stringName = this.firstName + ', ' + this.lastName;
    return stringName;
};

module.exports = Biker;