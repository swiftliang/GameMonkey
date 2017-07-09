/*
 * @Author: swiftliang 
 * @Date: 2017-07-09 13:28:56 
 * @Last Modified by:   swiftliang 
 * @Last Modified time: 2017-07-09 13:28:56 
 */
'use strict'

export function sleep (time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

export function waitingFor ({condition, cbOk, cbFail, cbFinish,
  maxTimes = 10}) {
  let times = 0
  let timer = setInterval(() => {
    if (++times > maxTimes * 10) {
      clearInterval(timer)
      if (cbFail) {
        cbFail()
      }
      if (cbFinish) {
        cbFinish()
      }
      return
    }

    if (condition()) {
      clearInterval(timer)
      if (cbOk) {
        cbOk()
      }
      if (cbFinish) {
        cbFinish()
      }
    }
  }, 100)
}