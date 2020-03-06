function Motobike(motoName, motoType, cc, brand){
    var self = this;
    self.Name = motoName;
    self.Type = motoType;
    self.cc = cc;
    self.Brand = brand;
};

Motobike.prototype.getName = function(){
    return this.Name;
};

Motobike.prototype.setName = function(name){
    this.Name = name;
};