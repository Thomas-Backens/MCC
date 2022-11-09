const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://mongomastercluster:Homeschool20035@cluster0.yp2ivel.mongodb.net/?retryWrites=true&w=majority";

const setLogs = async (hymnId, newLogs) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const setLog = await client
      .db("AllHymns")
      .collection("Hymns")
      .updateOne({ _id: hymnId }, { $set: { logs: newLogs } });

    console.log(setLog);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

// setLogs(17, [{ logged: "11/08/22", by: "Thomas Backens" }]).catch(
//   console.error
// );

const getAllHymns = async () => {
  const client = new MongoClient(uri);
  let result = {};

  try {
    await client.connect();

    const list = client
      .db("AllHymns")
      .collection("Hymns")
      .find({
        _id: { $gte: 0 },
      });

    result = await list.toArray();
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
  return result;
};

const addHymn = async (newHymn) => {
  const client = new MongoClient(uri);
  let result = {};

  try {
    await client.connect();

    const insertedHymn = client
      .db("AllHymns")
      .collection("Hymns")
      .insertOne(newHymn);

    result = await insertedHymn;
    if (result.insertedId) {
      result = [
        {
          number: newHymn._id,
          name: newHymn.name,
          logs: newHymn.logs,
        },
      ];
    }
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
  return result;
};

// addHymn({
//   _id: 489,
//   name: "Glory to His Name",
//   logs: [{ logged: "02/17/21", by: "Thomas Backens" }],
// }).catch(console.error);

const editHymn = async (hymnId, newId, newName) => {
  const client = new MongoClient(uri);
  let result = {};

  try {
    await client.connect();

    console.log(hymnId, newId, newName);

    const oldHymn = await client
      .db("AllHymns")
      .collection("Hymns")
      .findOne({ _id: hymnId });

    console.log(oldHymn);

    oldHymn._id = newId;
    oldHymn.name = newName;

    client.db("AllHymns").collection("Hymns").insertOne(oldHymn);

    await client.db("AllHymns").collection("Hymns").deleteOne({ _id: hymnId });

    const newHymns = getAllHymns().catch(console.error);
    result = await newHymns;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
  return result;
};

const addLog = async (hymnId, newLog) => {
  const client = new MongoClient(uri);
  let result = {};

  try {
    await client.connect();

    const hymn = await client
      .db("AllHymns")
      .collection("Hymns")
      .findOne({ _id: hymnId });

    let newLogs = await hymn.logs;

    for (let i = 0; i < newLogs.length; i++) {
      if (newLogs[i].logged === newLog.logs[0].logged) {
        return;
      }
    }

    newLogs.push(newLog.logs[0]);

    const insertedLog = await client
      .db("AllHymns")
      .collection("Hymns")
      .updateOne({ _id: hymnId }, { $set: { logs: newLogs } });

    result = insertedLog;
    if (result.modifiedCount >= 1) {
      const newHymns = getAllHymns().catch(console.error);
      result = await newHymns;
    }
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
  return result;
};

// addLog(17, { logs: [{ logged: "11/08/22", by: "kevin" }] }).catch(
//   console.error
// );

module.exports = {
  getAllHymns,
  addHymn,
  editHymn,
  addLog,
};
