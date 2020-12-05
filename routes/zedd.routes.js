const path = require('path')

module.exports = function (app) {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname = 'client/build/index.html'));
    });
}

//to run locally switch build to client 