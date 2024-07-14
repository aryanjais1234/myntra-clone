const express = require("express");
const router = express.Router();

const { 
  getItems, 
  getItemsById, 
  postItems 
} = require("../controllers/storeController");

router.get("/items", getItems);
router.get("/items/:id", getItemsById);
router.post("/items", postItems);

module.exports = router;