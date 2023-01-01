export class TimestampToProgress {
    durTimeStamp: string;
    posTimeStamp: string;
    size: number;
    line: string;
    slider: string;
    hideInfo: boolean;
    percentageInfo: boolean;
    /**
     * Set's the end point of the progress bar
     * @param {String} durTimeStamp - Should be formatted like a timestamp e.g. 01:11
     * @returns {exports.TimestampToProgress}
     */
    setDuration(durTimeStamp: string): TimestampToProgress;
    /**
     * Set's your current posTimeStamp on the progress bar
     * @param {String} posTimeStamp - Should be formatted like a timestamp e.g. 01:11
     * @returns {exports.TimestampToProgress}
     */
    setPosition(posTimeStamp: string): TimestampToProgress;
    /**
     * Set's how long the progress bar is
     * @param {Number} size
     * @returns {exports.TimestampToProgress}
     */
    setSize(size: number): TimestampToProgress;
    /**
     * Sets the character used for the line
     * @param {String} line
     * @returns {exports.TimestampToProgress}
     */
    setLine(line: string): TimestampToProgress;
    /**
     * Sets the character used for the slider
     * @param {String} slider
     * @returns {exports.TimestampToProgress}
     */
    setSlider(slider: string): TimestampToProgress;
    /**
     * Enables hide info which hides the progress indicator and only shows the ba
     * @returns {exports.TimestampToProgress}
     */
    enableHideInfo(): TimestampToProgress;
    /**
     * Replaces the progress indicator with a percentage
     * @returns {exports.TimestampToProgress}
     */
    enablePercentageInfo(): TimestampToProgress;
    /**
     * Creates the progress bar
     * @returns {TimeStampBarBuilder}
     */
    build(): (settings?: {
        posTimeStamp: number;
        durTimeStamp: number;
        size: number;
        line: string;
        slider: string;
        hideInfo: boolean;
        percentageInfo: boolean;
    }) => Promise<string>;
}
export class ProgressBar {
    end: number;
    position: number;
    size: number;
    slider: string;
    line: string;
    hideInfo: boolean;
    percentageInfo: boolean;
    /**
     * Sets when the progress bar ends
     * @param {Number} end
     * @returns {exports.ProgressBar}
     */
    setEnd(end: number): ProgressBar;
    /**
     * Set's your current position on the progress bar
     * @param {Number} position
     * @returns {exports.ProgressBar}
     */
    setPosition(position: number): ProgressBar;
    /**
     * Sets how many characters long the progress bar is
     * @param {Number} size
     * @returns {exports.ProgressBar}
     */
    setSize(size: number): ProgressBar;
    /**
     * Sets the character used for the line
     * @param {String} line
     * @returns {exports.ProgressBar}
     */
    setLine(line: string): ProgressBar;
    /**
     * Sets the character used for the slider
     * @param {String} slider
     * @returns {exports.ProgressBar}
     */
    setSlider(slider: string): ProgressBar;
    /**
     * Enables hide info which hides the progress indicator and only shows the ba
     * @returns {exports.ProgressBar}
     */
    enableHideInfo(): ProgressBar;
    /**
     * Replaces the progress indicator with a percentage
     * @returns {exports.ProgressBar}
     */
    enablePercentageInfo(): ProgressBar;
    /**
     * Creates the progress bar
     * @returns {ProgressBarBuilder}
     */
    build(): (settings?: {
        end: number;
        position: number;
        size: number;
        line: string;
        slider: string;
        hideInfo: boolean;
        percentageInfo: boolean;
    }) => Promise<string>;
}
