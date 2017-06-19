/*
 * @Author: swiftliang 
 * @Date: 2017-06-17 16:50:13 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-18 16:06:50
 */
'use strict'

import {DEBUG} from './constant/config';

export class Logger {
  constructor(level) {
    if (level === undefined) {
      level = DEBUG ? 'debug' : 'info';
    }
    this.level = level;
  }

  debug(...args) {
    if (this.level == 'debug') {
      console.debug(this.time(), ...args);
    }
  }

  info(...args) {
    if (this.level == 'debug' || this.level == 'info') {
      console.info(this.time(), ...args);
    }
  }

  warn(...args) {
    if (this.level == 'debug' || this.level == 'info' || this.level == 'warn') {
      console.warn(this.time(), ...args);
    }
  }
  
  error(...args) {
    console.error(this.time(), ...args);
  }

  time() {
    let d = new Date();
    return d.toTimeString().substring(0, 8) + '.' + d.getMilliseconds();
  }
};

export default new Logger();
