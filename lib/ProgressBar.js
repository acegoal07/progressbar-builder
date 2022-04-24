/**
 * Crates a progress bar from an end and a position number
 * @param {Number} end - When the progressbar should end
 * @param {Number} position - The position you want on the progress bar
 * @param {Number} size - The size of the progressBar ( default: 40 )
 * @param {String} line - The character used to display what's left of the time ( default: □)
 * @param {String} slider - The character used to display the progress ( default: ■)
 * @return {String} Progress bar
 */
module.exports = ProgressBar = async({end = null, position = null, size = 40, line = "▢", slider = "▣"}) => {
   const percentage = position / end;
   // Progress Calculations
   const progress = Math.round((size * percentage));
   const progressText = slider.repeat(progress);
   // To go calculations
   const emptyProgress = size - progress;
   const emptyProgressText = line.repeat(emptyProgress);
   // Progress bar output
   return `[${progressText+emptyProgressText}] `+(percentage * 100);
}