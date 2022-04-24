///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dependencies //////////////////////////////////////////////////////////////////////////////////////////////////////////
const TimeStampBarBuilder = require("./lib/TimeStampBar");
const ProgressBarBuilder = require("./lib/ProgressBar");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Wrapper ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports =
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time stamp to progress bar ////////////////////////////////////////////////////////////////////////////////////////////
   class TimestampToProgress {
      // Constructor
      constructor() {
         this.duration,
         this.position,
         this.size,
         this.line,
         this.slider,
         this.progressbar
      }
      // Set duration of progressbar
      /**
       * Set's the end point of the progress bar
       * @param {String} duration - Should be formatted like a timestamp e.g. 01:11
       * @returns {TimestampToProgress}
       */
      setDuration(duration) {
         this.duration = duration;
         return this;
      }
      // Set progressbar position
      /**
       * Set's your current position on the progress bar
       * @param {String} position - Should be formatted like a timestamp e.g. 01:11
       * @returns {TimestampToProgress}
       */
      setPosition(position) {
         this.position = position;
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
      run() {
         this.progressbar = await TimeStampBarBuilder(this);
         return this;
      }
   },
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Progress bar //////////////////////////////////////////////////////////////////////////////////////////////////////////
   class ProgressBar {
      // Constructor
      constructor() {
         this.end,
         this.position,
         this.size,
         this.slider,
         this.line,
         this.progressbar
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
      // Set progress bar position
      /**
       * Set's your current position on the progress bar
       * @param {Number} position 
       * @returns {ProgressBar}
       */
      setPosition(position) {
         this.position = position;
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
      run() {
         this.progressbar = await ProgressBarBuilder(this);
         return this;
      }
   }