var util = require("./util");

util.loadSpecification(process.argv[2])
    .then(function(w) {
        [].forEach.call(w.document.querySelectorAll("pre.idl,pre.webidl"),
                        function(pre) {
                            console.log(pre.textContent);
                        });
    });
