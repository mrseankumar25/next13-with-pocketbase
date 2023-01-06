migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqngmvesk0g4uk6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xszjwdrn",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqngmvesk0g4uk6")

  // remove
  collection.schema.removeField("xszjwdrn")

  return dao.saveCollection(collection)
})
