/**
 * Creates a progressBar from timeStamp's
 * @param {{
 *    posTimeStamp: Number,
 *    durTimeStamp: Number,
 *    size: Number,
 *    line: String,
 *    slider: String,
 *    hideInfo: Boolean,
 *    percentageInfo: Boolean
 * }} settings
 * @return {Promise.<String>} Progress bar
 */
exports.TimeStampBarBuilder = async(settings = {posTimeStamp: null, durTimeStamp: null, size: 40, line: "▢", slider: "▣", hideInfo: false, percentageInfo: false}) => {
   // Error messages
   if (!settings.posTimeStamp) {throw new Error("Please provide the position timeStamp");}
   if (!settings.durTimeStamp) {throw new Error("Please provide the duration timeStamp");}
   if (typeof(settings.size) !== "number") {throw new Error("The size needs to be an number");}
   if (typeof(settings.line) !== "string") {throw new Error("Not a valid line icon");}
   if (typeof(settings.slider) !== "string") {throw new Error("Not a valid slider icon");}
   if (settings.line.length > 1) {throw new Error("The line icon can only be 1 character");}
   if (settings.slider.length > 1) {throw new Error("The slider icon can only be 1 character");}
   // Percentage maths
   let position;
   if (settings.durTimeStamp.length <= 5) {
      position = settings.posTimeStamp.replaceAll(":", ".") / settings.durTimeStamp.replaceAll(":", ".");
   } else {
      position = (parseInt("00."+settings.posTimeStamp, 10).replace(":","")) / (settings.durTimeStamp.replace(":", ".").replaceAll(":",""));
      settings.posTimeStamp = "00:"+settings.posTimeStamp;
   }
   // Progress maths
   const progress = Math.round((settings.size * position));
   const emptyProgress = settings.size - progress;
   // Progress text
   const progressText = settings.slider.repeat(progress);
   const emptyProgressText = settings.line.repeat(emptyProgress);
   // Bar output
   const barInfo = !settings.percentageInfo ? (`${settings.posTimeStamp} / ${settings.durTimeStamp}`) : `${position * 100}%`;
   return Promise.resolve(`${!settings.hideInfo ? barInfo : ''}`+`\r`+`[${progressText}${emptyProgressText}]`);
};