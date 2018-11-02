// import * as fs from "fs-extra";
const fs = require("fs-extra");
const recursive = require("recursive-readdir");

recursive("queries/").then(async (queryNames) => {
    let testFile = {};
    let count = 0;
    for (let queryName of queryNames) {
        let file = await fs.readFile(queryName);
        let fileContents = JSON.parse(file);
        let content = fileContents.query;
        testFile["query" + count] = content;
        count++;
    }
    testFile = JSON.stringify(testFile);
    await fs.writeFile("queries.json", testFile);
    console.log("Done");
}).catch((e) => {
    console.log(e);
});