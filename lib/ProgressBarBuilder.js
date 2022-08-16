/**
 * Creates a progress bar from an end and a position number
 * @return {String} Progress bar
 */
module.exports = ProgressBar = ({end = null, position = null, size = 40, line = "▢", slider = "▣", hideInfo = false, percentageInfo = false}) => {
   // Error messages
   if (!end) throw new Error("There was no end provided");
   if (!position) throw new Error("There was no position provided");
   if (typeof(size) !== "number") throw new Error("The size needs to be an number");
   if (typeof(line) !== "string") throw new Error("Not a valid line icon");
   if (typeof(slider) !== "string") throw new Error("Not a valid slider icon");
   if (line.length > 1) throw new Error("The line icon can only be 1 character");
   if (slider.length > 1) throw new Error("The slider icon can only be 1 character");
   // Calculate percentage
   const percentage = position / end;
   // Progress Calculations
   const progress = Math.round((size * percentage));
   const progressText = slider.repeat(progress);
   // To go calculations
   const emptyProgress = size - progress;
   const emptyProgressText = line.repeat(emptyProgress);
   // Progress bar output
   const barInfo = !percentageInfo ? (position+' / '+end) : `${percentage * 100}%`;
   return Promise.resolve(`[${progressText+emptyProgressText}] `+`${hideInfo ? barInfo : ""}`);
}