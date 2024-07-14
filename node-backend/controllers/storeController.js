const { getStoredItems, storeItems } = require('../data/items');

const getItems = async (req, res) => {
  const storedItems = await getStoredItems();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 4000));
  res.json({ items: storedItems });
}

const getItemsById = async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
}

const postItems = async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: 'Stored new item.', item: newItem });
}

module.exports = {
  getItems,
  getItemsById,
  postItems,
};