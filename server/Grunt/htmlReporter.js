module.exports = {
  reporter: function (res) {
    var len = res.length;
    var str = "";
    var css = "<style>"+
              "table {"+
                "border-collapse: collapse;"+
                "width: 100%;}"+
              "th, td {"+
                "text-align: left;"+
                "padding: 8px;}"+
              "th {background-color: #52D017;color: white;}" +
              "tr:nth-child(even) {background-color: #F0FFFF}"+
              "tr:hover {background-color: #f5f5f5}" +
              "</style>";
    var tableHeader = "<th>File Name</th>"+
                      "<th>Line Number</th>"+
                      "<th>Column</th>"+
                      "<th>Reason</th>"+
                      "<th>Evidence</th>";

    res.forEach(function (r) {
      var file = r.file;
      var err = r.error;

      str += "<tr><td>" + file +
              "</td><td> line " + err.line + "</td><td> col "
              + err.character + "</td><td> " + err.reason + "</td><td>"+ err.evidence +"</td></tr>";
    });

    if (str) {
      process.stdout.write(css + "<table>" + tableHeader + str + "</table>\n" + len + " error" +
        ((len === 1) ? "" : "s") + "\n");
    }
  }
};


