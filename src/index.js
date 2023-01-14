///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dependencies //////////////////////////////////////////////////////////////////////////////////////////////////////////
const { TimeStampBarBuilder } = require("./lib/TimeStampBarBuilder");
const { ProgressBarBuilder } = require("./lib/ProgressBarBuilder");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time stamp to progress bar ////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The class used to create progressBars from timestamps
 */
exports.TimestampToProgress = class {
   // Constructor
   constructor() {
      this.durTimeStamp = null
      this.posTimeStamp = null
      this.size = 40
      this.line = "▢"
      this.slider = "▣"
      this.hideInfo = false
      this.percentageInfo = false
   }
   // Set durTimeStamp of progressBar
   /**
    * Set's the end point of the progress bar
    * @param {String} durTimeStamp - Should be formatted like a timestamp e.g. 01:11
    * @returns {exports.TimestampToProgress}
    */
   setDuration(durTimeStamp) {
      this.durTimeStamp = durTimeStamp;
      return this;
   }
   // Set progressBar posTimeStamp
   /**
    * Set's your current posTimeStamp on the progress bar
    * @param {String} posTimeStamp - Should be formatted like a timestamp e.g. 01:11
    * @returns {exports.TimestampToProgress}
    */
   setPosition(posTimeStamp) {
      this.posTimeStamp = posTimeStamp;
      return this;
   }
   // Set bar size
   /**
    * Set's how long the progress bar is
    * @param {Number} size
    * @returns {exports.TimestampToProgress}
    */
   setSize(size) {
      this.size = size;
      return this;
   }
   // Set character used for the line
   /**
    * Sets the character used for the line
    * @param {String} line
    * @returns {exports.TimestampToProgress}
    */
   setLine(line) {
      this.line = line;
      return this;
   }
   // Set character used for the slider
   /**
    * Sets the character used for the slider
    * @param {String} slider
    * @returns {exports.TimestampToProgress}
    */
   setSlider(slider) {
      this.slider = slider;
      return this;
   }
   // Enable hide info
   /**
    * Enables hide info which hides the progress indicator and only shows the ba
    * @returns {exports.TimestampToProgress}
    */
   enableHideInfo() {
      this.hideInfo = true;
      return this;
   }
   // Enable percentage
   /**
    * Replaces the progress indicator with a percentage
    * @returns {exports.TimestampToProgress}
    */
   enablePercentageInfo() {
      this.percentageInfo = true;
      return this;
   }
   // Create progress bar
   /**
    * Creates the progress bar
    * @returns {TimeStampBarBuilder}
    */
   async build() {
      return await TimeStampBarBuilder(this);
   }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Progress bar //////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The class used to create progressBars from 2 numbers
 */
exports.ProgressBar = class {
   // Constructor
   constructor() {
      this.end = null
      this.position = null
      this.size = 40
      this.slider = "▣"
      this.line = "▢"
      this.hideInfo = false
      this.percentageInfo = false
   }
   // Set progress bar end
   /**
    * Sets when the progress bar ends
    * @param {Number} end
    * @returns {exports.ProgressBar}
    */
   setEnd(end) {
      this.end = end;
      return this;
   }
   // Set progress bar position
   /**
    * Set's your current position on the progress bar
    * @param {Number} position
    * @returns {exports.ProgressBar}
    */
   setPosition(position) {
      this.position = position;
      return this;
   }
   // Set progress bar size
   /**
    * Sets how many characters long the progress bar is
    * @param {Number} size
    * @returns {exports.ProgressBar}
    */
   setSize(size) {
      this.size = size;
      return this;
   }
   // Set character used for the line
   /**
    * Sets the character used for the line
    * @param {String} line
    * @returns {exports.ProgressBar}
    */
      setLine(line) {
      this.line = line;
      return this;
   }
   // Set character used for the slider
   /**
    * Sets the character used for the slider
    * @param {String} slider
    * @returns {exports.ProgressBar}
    */
   setSlider(slider) {
      this.slider = slider;
      return this;
   }
   // Enable hide info
   /**
    * Enables hide info which hides the progress indicator and only shows the ba
    * @returns {exports.ProgressBar}
    */
   enableHideInfo() {
      this.hideInfo = true;
      return this;
   }
   // Enable percentage
   /**
    * Replaces the progress indicator with a percentage
    * @returns {exports.ProgressBar}
    */
   enablePercentageInfo() {
      this.percentageInfo = true;
      return this;
   }
   // Create progress bar
   /**
    * Creates the progress bar
    * @returns {ProgressBarBuilder}
    */
   async build() {
      return await ProgressBarBuilder(this);
   }
}