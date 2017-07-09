/*
 * @Author: swiftliang 
 * @Date: 2017-07-09 13:29:36 
 * @Last Modified by:   swiftliang 
 * @Last Modified time: 2017-07-09 13:29:36 
 */
'use strict'

export function lpad (str, len, pad = ' ') {
  str = str + ''
  while (str.length < len) {
    str = pad + str
  }
  return str
}