var mysqlQuery = require("../../config/db");

module.exports = function(app)
{
  app.post('/notes', (req, res) =>
  {
    mysqlQuery('SELECT * FROM ACCOUNTS', function(err, rows)   {
        console.log(rows);
    });
    res.send('Hello')
  });
};
