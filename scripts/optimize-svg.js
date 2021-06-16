#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const util = require('util');
const { execSync } = require('child_process');

const basePath = 'assets/icons/';
const inputFolder = path.resolve(__dirname, path.join('../', basePath));
const destinationFolder = path.resolve(__dirname, path.join('../dist/', basePath));

if (!fs.existsSync(destinationFolder)) {
  fs.mkdirSync(destinationFolder, { recursive: true });
}

const svgFilesList = fs.readdirSync(inputFolder);
const copyFilePromise = util.promisify(fs.copyFile);

for (const svgFile of svgFilesList) {
  fs.copyFileSync(path.join(inputFolder, svgFile), path.join(destinationFolder, svgFile));
}

execSync(`svgo -f ${destinationFolder}`);

return 0;
