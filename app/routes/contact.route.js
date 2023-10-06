const express = require("express");
const contact = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
  .get(contacts.findAll)
  .post(contacts.create)
  .delete(contacts.deleteAll);

router.route("/favourite")
  .get(contacts.findAllFavourite);

  router.route("/:id")
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.delete);

module.exports = router;