let student = {
    name : "John",
    age : 20,
    address : "Earth",

    speak : function(text) {
        return text + ' Writed.'
    },

    lecture : ['javascript', 'mongodb', 'redis', 'vuejs']
}

console.log(student.name);
console.log(student.speak('Hello'));
console.log(student.height);

// check if object is extensible
console.log("Student extensible :", Object.isExtensible(student));

// add property dynamically
student.height = 100;
console.log(student.height);
console.log(student);

// Prevent add or delete property
Object.seal(student);
student.weight = 40;
console.log(student.weight);
console.log("Student extensible :", Object.isExtensible(student));
console.log("Student isSealed :", Object.isSealed(student));
console.log("Student isFrozen :", Object.isFrozen(student));

// Prevent write property
Object.freeze(student);
student.height = 200;
console.log('Height is ', student.height);
console.log("Student isFrozen :", Object.isFrozen(student));


let sequence = [1, 2, 3];
sequence.push(4);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

console.log(student.lecture);
student.lecture.push('c#');
console.log(student.lecture);

const score = {
    visitors : 0,
    home : 0
};
score.visitors = 1;
console.log(score);

// this isn't allowed
// score = {
//     visitors : 1,
//     home : 1
// };
console.log(score);

let lecture = [];
let addLecture = function(lec) {
    if (typeof(lec)  == 'object') {
        lecture = lecture.concat(lec);
    }
    else {
        lecture.push(lec);
    }
};
addLecture(['c#', 'mssql', '.net core']);
console.log(lecture);
addLecture('ecma script');
console.log(lecture);
lecture = lecture.concat(['asp.net', 'python']);
console.log(lecture);


let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasana", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
console.log(journal);

// mutability
let object1 = { value : 10 };
let object2 = object1;
let object3 = { value : 10 };
console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

let events = [];
function journalEvents(journal) {
    for (let entry in journal) {
        for (let event in entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
        return events;
    }
}
//console.log(journalEvents(JOURNAL));
