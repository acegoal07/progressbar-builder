/**
 * Creates a progressbar from timeStamp's
 * @param {String} posTimeStamp - Position timeStamp
 * @param {String} durTimeStamp - Duration timeStamp
 * @param {Number} size - The size of the progressBar ( default: 40 )
 * @param {String} line - The character used to display what's left of the time ( default: □)
 * @param {String} slider - The character used to display the progress ( default: ■)
 * @param {Boolean} hideInfo - Removes all info about the current position and only shows the progress bar
 * @return {String} Progress bar
 */
module.exports = TimeStampBar = ({posTimeStamp = null, durTimeStamp = null, size = 40, line = "▢", slider = "▣", hideInfo = false}) => {
   // Error messages
   if (!posTimeStamp) throw new Error("Please provide the position timeStamp");
   if (!durTimeStamp) throw new Error("Please provide the duration timeStamp");
   if (typeof(size) !== "number") throw new Error("The size needs to be an number");
   if (typeof(line) !== "string") throw new Error("Not a valid line icon");
   if (typeof(slider) !== "string") throw new Error("Not a valid slider icon");
   if (line.length > 1) throw new Error("The line icon can only be 1 character");
   if (slider.length > 1) throw new Error("The slider icon can only be 1 character");
   // Percentage maths
   if (durTimeStamp.length <= 5) {
     var position = posTimeStamp.replace(":", ".") / durTimeStamp.replace(":", ".");
   } else {    
     var position = ("00."+posTimeStamp).replace(":","") / durTimeStamp.replace(":", ".").replace(":","");
     posTimeStamp = "00:"+posTimeStamp;
   }
   // Progress maths
   const progress = Math.round((size * position));
   const emptyProgress = size - progress;
   // Progress text
   const progressText = slider.repeat(progress);
   const emptyProgressText = line.repeat(emptyProgress);
   // Bar output
   return hideInfo ? (posTimeStamp+' / '+durTimeStamp) : ""+`\r`+'['+progressText+emptyProgressText+']';
 };