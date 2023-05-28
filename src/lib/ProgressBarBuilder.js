/**
 * Creates a progress bar from an end and a position number
 * @param {{
 *    end: Number,
 *    position: Number,
 *    size: Number,
 *    line: String,
 *    slider: String,
 *    hideInfo: Boolean,
 *    percentageInfo: Boolean
 * }} settings
 * @return {Promise.<String>} Progress bar
 */
exports.ProgressBarBuilder = (settings = {end: null, position: null, size: 40, line: "▢", slider: "▣", hideInfo: false, percentageInfo: false}) => {
   // Error messages
   if (!settings.end) {throw new Error("There was no end provided");}
   if (!settings.position) {throw new Error("There was no position provided");}
   if (typeof(settings.size) !== "number") {throw new Error("The size needs to be an number");}
   if (typeof(settings.line) !== "string") {throw new Error("Not a valid line icon");}
   if (typeof(settings.slider) !== "string") {throw new Error("Not a valid slider icon");}
   if (settings.line.length > 1) {throw new Error("The line icon can only be 1 character");}
   if (settings.slider.length > 1) {throw new Error("The slider icon can only be 1 character");}
   // Calculate percentage
   const percentage = settings.position / settings.end;
   // Progress Calculations
   const progress = Math.round((settings.size * percentage));
   const progressText = settings.slider.repeat(progress);
   // To go calculations
   const emptyProgress = settings.size - progress;
   const emptyProgressText = settings.line.repeat(emptyProgress);
   // Progress bar output
   const barInfo = !settings.percentageInfo ? (`${settings.position} / ${settings.end}`) : `${percentage * 100}%`;
   return Promise.resolve(`[${progressText+emptyProgressText}] `+`${settings.hideInfo ? barInfo : ""}`);
}