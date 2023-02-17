const multer = require("multer");

const storage = multer.diskStorage({
  //definimos un storage, es decir es la config del lugar donde se almacenan los files que suban
  destination: (req, file, cb) => {
    //paramentro 1 es la ruta donde se guarda
    cb(null, __dirname + "/public/img");
  },
  filename: (req, file, cb) => {
    // parametro 2 es el nombre del archivo
    cb(null, file.originalname);
  },
});

const uploader = multer({ storage });

module.exports = uploader;
