var notSelf = {
    id: "awesome",
    cool: function coolFn() {
        //var self = this;
        console.log(id);
    }
};

var id = "not awesome";
notSelf.cool();
setTimeout(notSelf.cool, 100);

// var obj = {
//     count: 0,
//     cool: function coolFn() {
//         var self = this;

//         if (self.count < 1) {
//             setTimeout(function timer() {
//                 self.count++;
//                 console.log("awesome?");
//             }, 100);
//         }
//     }
// };

// obj.cool();