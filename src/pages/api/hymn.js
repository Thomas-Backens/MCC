/* eslint-disable import/no-anonymous-default-export */
const sqlQuery = require("../../db/procs");

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const hymns = await sqlQuery.getAllHymns();
        res.status(200).json({ hymns });
        break;
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    case "POST":
      try {
        const { bywho, name, number, logged } = await req.body;
        if (name && number && logged) {
          if (bywho) {
            const result = await sqlQuery.addHymn(bywho, name, number, logged);
            return res.json(result[0]);
          } else {
            const result = await sqlQuery.addHymn(
              "Anonymous",
              name,
              number,
              logged
            );
            return res.json(result[0]);
          }
        }
        throw new Error("number required");
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    case "PATCH":
      try {
        const { number, newNumber, newName } = await req.body;
        if (number) {
          const result = await sqlQuery.editHymn(number, newNumber, newName);
          return res.json(result[0]);
        }
        throw new Error("number required");
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }

    default:
      return res.status(405).send("Method Not Allowed");
  }
};
