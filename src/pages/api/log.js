/* eslint-disable import/no-anonymous-default-export */
const sqlQuery = require("../../db/procs");

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const logs = await sqlQuery.getAllLogs();
        res.status(200).json({ logs });
        break;
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    case "POST":
      try {
        const { id, bywho, logged } = await req.body;
        if (id && bywho && logged) {
          const result = await sqlQuery.addLog(id, bywho, logged);
          return res.json(result[0]);
        }
        throw new Error("id required");
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }

    default:
      return res.status(405).send("Method Not Allowed");
  }
};
