/*
 * @Author: swiftliang 
 * @Date: 2017-07-05 10:31:43 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-07-05 10:32:04
 */
'use strict'

const initialState = {
  task: ''
}

export default (state = initialState, action) => {
  if (action.type === 'processing_task') {
    let {task} = action
    return {
      ...state,
      task
    }
  } else if (action.type === 'reset' || action.type === 'reset_processing') {
    return initialState
  } else {
    return state
  }
}