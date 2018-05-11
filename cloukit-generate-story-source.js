#!/bin/env node

/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 * version 2018-05-10 1845
 */
const fs = require('fs');
const path = require('path');
const pathToStories = './src/app/demo/stories/';
const targetJson = './src/assets/demo-stories-source.json';
if (fs.existsSync(pathToStories)) {
  console.log('>> parsing demo story source files into json');
  const files = fs.readdirSync(pathToStories);
  if (files !== undefined && files !== null && files.length > 0) {
    const storySource = {};
    for (let i = 0; i < files.length; i++) {
      const storyFile = files[i];
      let storyFileContent = fs.readFileSync((`${pathToStories}${storyFile}`), 'utf-8');
      storySource[storyFile] = storyFileContent;
    }
    fs.writeFileSync(targetJson, JSON.stringify(storySource, null, 2));
  }
} else {
  console.log('>> SKIPPING > parsing demo story source files into json');
}
