<h1 align="center">progressbar-builder</h1>
<div align="center">
   <img alt="Repository size" src="https://img.shields.io/github/repo-size/acegoal07/progressbar-builder">
   <img alt="npm" src="https://img.shields.io/npm/v/@acegoal07/progressbar-builder/latest">
   <img alt="NPM" src="https://img.shields.io/npm/l/@acegoal07/progressbar-builder">
   <img alt="Libraries.io dependency status for latest release" src="https://img.shields.io/github/issues-raw/acegoal07/progressbar-builder">
   <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/acegoal07/progressbar-builder">
   <img alt="Monthly Downloads" src="https://img.shields.io/npm/dm/@acegoal07/progressbar-builder">
</div><br>
<p align="center">
   <a href="#about">About</a> &#xa0; | &#xa0;
   <a href="#examples">Examples</a> &#xa0; | &#xa0;
   <a href="https://www.npmjs.com/package/@acegoal07/progressbar-builder">NPM</a> &#xa0; | &#xa0;
   <a href="https://github.com/acegoal07" target="_blank">Author</a>
</p>

---

<h1 id="about">About</h1>

To install use:
```sh
npm i @acegoal07/progressbar-builder
```
yarn
```sh
yarn add @acegoal07/progressbar-builder
```

<h1 id="examples">Examples</h1>
<h3>Timestamp progressbar example</h3>

```js
const { TimestampToProgress } = require("@acegoal07/progressbar-builder");

const bar = new TimestampToProgress()
   .setDuration("01:58") // Required option - supports hour timestamps
   .setPosition("01:00") // Required option - supports hour timestamps
   .setSize(10) // Optional - Allows you to adjust how large the bar is
   .setLine("*") // Optional - Allows you to set a custom character for the line
   .setSlider("#") // Optional - Allows you to set a custom character for the slider
   .enableHideInfo() // Optional - Hide progress info and only shows the bar
   .enablePercentageInfo() // Optional - Replaces the progress info with a percentage of completion
   .build(); // Required to create bar

console.log(bar);
```
<h3>Progressbar example</h3>

```js
const { ProgressBar } = require("@acegoal07/progressbar-builder");

const bar = new ProgressBar()
   .setEnd(10) // Required option
   .setPosition(4) // Required option
   .setSize(10) // Optional Allows you to adjust how large the bar is
   .setLine("*") // Optional - Allows you to set a custom character for the line
   .setSlider("#") // Optional - Allows you to set a custom character for the slider
   .enableHideInfo() // Optional - Hide progress info and only shows the bar
   .enablePercentageInfo() // Optional - Replaces the progress info with a percentage of completion
   .build(); // Required to create bar

console.log(bar);
```