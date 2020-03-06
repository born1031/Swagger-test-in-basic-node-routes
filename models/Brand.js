function Brand(brandName){
    var self = this;
    self.Name = brandName;
};

Store.prototype.getName = function(){
    return this.Name;
};

Store.prototype.setName = function(brandName){
    var err = Error('The name of brand must not be null');

    if(brandName == null){
        return err();
    };
    this.Name = brandName;
};