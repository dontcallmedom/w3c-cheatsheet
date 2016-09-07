const jsdom = require('jsdom');
const baseFetch = require('node-fetch');

exports.loadSpecification = function (url) {
    return baseFetch(url).then(response => response.text())
        .then(html => new Promise((resolve, reject) => {
            jsdom.env({
                html: html,
                done: (err, window) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(window);
                }
                ,virtualConsole: jsdom.createVirtualConsole().sendTo({log:console.error.bind(console), error:console.error.bind(console)})
            })
        })
             );
}
