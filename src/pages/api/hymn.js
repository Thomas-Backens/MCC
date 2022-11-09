/* eslint-disable import/no-anonymous-default-export */
const mongoQuery = require("../../Utils/mongodb");

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const hymns = await mongoQuery.getAllHymns();
        res.status(200).json({ hymns });
        break;
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    case "POST":
      try {
        const { name, number, log } = await req.body;
        if (name && number) {
          if (log.by) {
            const result = await mongoQuery.addHymn({
              _id: number,
              name: name,
              logs: [{ logged: log.logged, by: log.by }],
            });
            console.log(result);
            return res.json(result[0]);
          } else {
            const result = await mongoQuery.addHymn({
              _id: number,
              name: name,
              logs: [{ logged: log.logged, by: "Anonymous" }],
            });
            return res.json(result[0]);
          }
        }
        throw new Error("number required");
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    case "PUT":
      try {
        const { _id, logged, by } = await req.body;
        if (_id && logged) {
          if (by) {
            const result = await mongoQuery.addLog(_id, {
              logs: [{ logged: logged, by: by }],
            });

            if (result === undefined) {
              return res.json([]);
            }
            return res.json(result);
          } else {
            const result = await mongoQuery.addLog(_id, {
              logs: [{ logged: logged, by: "Anonymous" }],
            });

            if (result === undefined) {
              return res.json([]);
            }
            return res.json(result);
          }
        }
        throw new Error("log required");
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    case "PATCH":
      try {
        const { _id, newId, newName } = await req.body;
        if (_id) {
          const result = await mongoQuery.editHymn(_id, newId, newName);
          return res.json(result);
        }
        throw new Error("Id required");
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }

    default:
      return res.status(405).send("Method Not Allowed");
  }
};
