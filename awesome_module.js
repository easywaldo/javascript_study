import hello from "foo_module";

var hungry = "hippo";

function awesome() {
    console.log(
        hello(hungry).toUpperCase()       
    );
}

export awesome;