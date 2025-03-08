if (!Array.prototype.myforEach) {
    Array.prototype.myforEach = function(callback) {
        for (let i = 0; i < this.length; i++) {
            callback( this[i], i);
        }
    };
}

let arr = [1, 2, 3];

arr.myforEach((value, index) =>{
    console.log(` At Index: ${index} :  Value: ${value}`);
});
