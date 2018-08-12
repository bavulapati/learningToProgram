var die = {
    size: 6,
    totalRolls: 0,
    roll: function(){
        this.totalRolls++;
        return Math.ceil(this.size * Math.random());
    }
};

die.name = "A name";
exports.game = die;