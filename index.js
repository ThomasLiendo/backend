const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const loadDB = require("./src/loadDB.js");

// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  server.listen(3001, async () => {
    await loadDB();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
