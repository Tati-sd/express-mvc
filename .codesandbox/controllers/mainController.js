exports.home = (req, res) => {
  res.json({ message: "Welcome to the Home Route!" });
};
exports.about = (req, res) => {
  res.json({ message: "This is the About Route" });
};
exports.contact = (req, res) => {
  res.json({ message: "Contact us at contact@example.com" });
};
exports.time = (req, res) => {
  res.json({ currentTime: new Date().toLocaleString() });
};
exports.echo = (req, res) => {
  const input = req.body;
  res.json({ youSent: input });
};
