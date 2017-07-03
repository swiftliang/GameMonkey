/*
 * @Author: swiftliang 
 * @Date: 2017-06-29 16:30:29 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-29 16:38:59
 */
'use strict'

import {RES_USER_AVATARS, RES_USER_BACKGROUNDS} from '../constant/const'

export function imageUri (uri, size = 'small') {
  if (uri) {
    return uri.startsWith('http')
      ? (uri + '?x-oss-process=style/' + size)
      : uri
  } else {
    return ''
  }
}

export function imageSource (uri, size = 'small') {
  return {uri: imageUri(uri, size)}
}

export function fileImageSource (file, size = 'small') {
  let uri = ''
  if (file) {
    if (file.path) {
      uri = file.path
    } else if (file.mime.startsWith('image/')) {
      uri = file.url
    }
  }
  return imageSource(uri, size)
}

export function userAvatarSource ({avatarType, avatarName, avatarImage,
  avatarFile}, size = 'small') {
  if (avatarType === 'builtin') {
    return RES_USER_AVATARS.get(avatarName)
  } else if (avatarType === 'custom') {
    if (avatarImage) {
      return imageSource(avatarImage.path, size)
    } else if (avatarFile) {
      return imageSource(avatarFile.url, size)
    } else {
      return null
    }
  } else {
    return null
  }
}

export function userBackgroundSource ({backgroundType, backgroundName,
  backgroundImage, backgroundFile}, size = 'small') {
  if (backgroundType === 'builtin') {
    return RES_USER_BACKGROUNDS.get(backgroundName)
  } else if (backgroundType === 'custom') {
    if (backgroundImage) {
      return imageSource(backgroundImage.path, size)
    } else if (backgroundFile) {
      return imageSource(backgroundFile.url, size)
    } else {
      return null
    }
  } else {
    return null
  }
}
