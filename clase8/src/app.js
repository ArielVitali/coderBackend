const app = require("./index");
const { port } = require("./config");

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
