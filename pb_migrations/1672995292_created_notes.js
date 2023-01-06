migrate((db) => {
  const collection = new Collection({
    "id": "wqngmvesk0g4uk6",
    "created": "2023-01-06 08:54:52.030Z",
    "updated": "2023-01-06 08:54:52.030Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dejx18lu",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wqngmvesk0g4uk6");

  return dao.deleteCollection(collection);
})
