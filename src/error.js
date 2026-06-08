module.exports = (app) => {
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
      creator: "Xyraa Official",
      status: false,
      data: {
        message: err.message
      }
    });
  });
};
