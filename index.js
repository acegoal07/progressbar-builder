///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dependencies //////////////////////////////////////////////////////////////////////////////////////////////////////////
const TimeStampBarBuilder = require("./lib/TimeStampBar");
const ProgressBarBuilder = require("./lib/ProgressBar");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time stamp to progress bar ////////////////////////////////////////////////////////////////////////////////////////////
   class TimestampToProgress {
      // Constructor
      constructor() {
         this.durTimeStamp,
         this.posTimeStamp,
         this.size,
         this.line,
         this.slider
      }
      // Set durTimeStamp of progressbar
      /**
       * Set's the end point of the progress bar
       * @param {String} durTimeStamp - Should be formatted like a timestamp e.g. 01:11
       * @returns {TimestampToProgress}
       */
      setDuration(durTimeStamp) {
         this.durTimeStamp = durTimeStamp;
         return this;
      }
      // Set progressbar posTimeStamp
      /**
       * Set's your current posTimeStamp on the progress bar
       * @param {String} posTimeStamp - Should be formatted like a timestamp e.g. 01:11
       * @returns {TimestampToProgress}
       */
      setPosition(posTimeStamp) {
         this.posTimeStamp = posTimeStamp;
         return this;
      }
      // Set bar size
      /**
       * Set's how long the progress bar is
       * @param {Number} size
       * @returns {TimestampToProgress}
       */
      setSize(size) {
         this.size = size;
         return this;
      }
      // Set character used for the line
      /**
       * Sets the character used for the line
       * @param {String} line 
       * @returns {TimestampToProgress}
       */
      setLine(line) {
         this.line = line;
         return this;
      }
      // Set character used for the slider
      /**
       * Sets the character used for the slider
       * @param {String} slider 
       * @returns {TimestampToProgress}
       */
      setSlider(slider) {
         this.slider = slider;
         return this;
      }
      // Create progress bar
      /**
       * Creates the progress bar
       * @returns {TimestampToProgress}
       */
      async build() {
         return await TimeStampBarBuilder(this);
      }
   }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Progress bar //////////////////////////////////////////////////////////////////////////////////////////////////////////
   class ProgressBar {
      // Constructor
      constructor() {
         this.end,
         this.posTimeStamp,
         this.size,
         this.slider,
         this.line
      }
      // Set progress bar end
      /**
       * Sets when the progress bar ends
       * @param {Number} end 
       * @returns {ProgressBar}
       */
      setEnd(end) {
         this.end = end;
         return this;
      }
      // Set progress bar posTimeStamp
      /**
       * Set's your current posTimeStamp on the progress bar
       * @param {Number} posTimeStamp 
       * @returns {ProgressBar}
       */
      setPosition(posTimeStamp) {
         this.posTimeStamp = posTimeStamp;
         return this;
      }
      // Set progress bar size
      /**
       * Sets how many characters long the progress bar is
       * @param {Number} size 
       * @returns {ProgressBar}
       */
      setSize(size) {
         this.size = size;
         return this;
      }
      // Set character used for the line
      /**
       * Sets the character used for the line
       * @param {String} line 
       * @returns {TimestampToProgress}
       */
       setLine(line) {
         this.line = line;
         return this;
      }
      // Set character used for the slider
      /**
       * Sets the character used for the slider
       * @param {String} slider 
       * @returns {TimestampToProgress}
       */
      setSlider(slider) {
         this.slider = slider;
         return this;
      }
      // Create progress bar
      /**
       * Creates the progress bar
       * @returns {ProgressBar}
       */
      async build() {
         return await ProgressBarBuilder(this);
      }
   }

   
   module.exports = { TimestampToProgress, ProgressBar };