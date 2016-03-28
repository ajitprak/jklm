module.exports = {
  reporter: function (res) {
    var len = res.length;
    var str = "";

    res.forEach(function (r) {
      var file = r.file;
      var err = r.error;

      str += "<tr style='border:1px solid black;'><td style='border:1px solid black;'>" + file + 
              "</td><td style='border:1px solid black;'> line " + err.line + "</td><td style='border:1px solid black;'> col " 
              + err.character + "</td><td style='border:1px solid black;'> " + err.reason + "</td></tr>";
    });

    if (str) {
      process.stdout.write("<table style='border:1px solid black;border-collapse:collapse'>" + str + "</table>\n" + len + " error" +
        ((len === 1) ? "" : "s") + "\n");
    }
  }
};


