var notSelf = {
    id: "awesome",
    cool: function coolFn() {
        //var self = this;
        console.log(this.id);
    }
};

var id = "not awesome";
notSelf.cool();
setTimeout(notSelf.cool, 1000);

var obj = {
    count: 0,
    cool: function coolFn() {
        if (this.count < 1) {
            setTimeout( function timer(){
                this.count++; // `this` is safe because of `bind(..)`
                console.log( "more awesome" );
            }.bind( this ), 100 ); // look, `bind()`!
        }
    }
};

obj.cool(); // more awesome’