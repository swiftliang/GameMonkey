/*
 * @Author: swiftliang 
 * @Date: 2017-07-05 10:31:04 
 * @Last Modified by:   swiftliang 
 * @Last Modified time: 2017-07-05 10:31:04 
 */
'use strict'

export function resetProcessing () {
  return {
    type: 'reset_processing'
  }
}

export function processingTask (task) {
  return {
    type: 'processing_task',
    task
  }
}