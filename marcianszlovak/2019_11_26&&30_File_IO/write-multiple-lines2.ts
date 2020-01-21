import fs from "fs";

let writer = fs.createWriteStream("log2.txt", {
  flags: "a"
});

writer.write("valami \n", "valami2");

writer.on("finish", () => {
  console.log("wrote all data to the text file");
});

writer.end();
