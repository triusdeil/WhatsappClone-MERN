import Messages from "../schemas/dbMessages";

export const getMessages = (req, res) => {
  res.send("hello world");
};

export const getMessage = (req, res) => {
  res.send("hello world");
};

export const sendMessage = (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};
