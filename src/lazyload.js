module.exports = {

  start() {

    if (typeof document === "undefined") return;

    document
      .querySelectorAll("img")
      .forEach(img => {

        img.loading = "lazy";
        img.decoding = "async";

      });

  }

};
