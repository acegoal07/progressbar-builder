module.exports =
   class TimestampToProgress {
      constructor() {
         this.duration,
         this.position,
         this.size,
         this.progressbar
      }
      /**
       * 
       * @param {String} duration 
       * @returns {TimestampToProgress}
       */
      setDuration(duration) {
         this.duration = duration;
         return this;
      }
      /**
       * 
       * @param {String} position 
       * @returns {TimestampToProgress}
       */
      setPosition(position) {
         this.position = position;
         return this;
      }
      /**
       * 
       * @param {Number} size 
       * @returns {TimestampToProgress}
       */
      setSize(size) {
         this.size = size;
         return this;
      }
   }