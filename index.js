/*
 * TemplateString - Simple template strings
 * Copyright (c) Abdulsamii Ajala (jalasem)
 * https://github.com/jalasem/templateString/
 *
 * Released under the MIT license
 * https://github.com/jalasem/templateString/blob/master/LICENSE
 */

/**
 *
 * @param {string} template template string to be matched
 * @param {object} values variables to be parsed
 * @param {object} [config=settings()] configurations for the template string interpolation
 * @returns {string} interpolated or processed template string
 */
const processMail = (template, values, config = settings()) => {
  const {openingbracket, closingbracket} = config

  var processed = template

  if (Array.isArray(values) || typeof values !== 'object') return processed

  Object.keys(values).forEach(value => {
    var re = new RegExp('\\' + openingbracket + value + '\\' + closingbracket, "gm")
    processed = processed.replace(re, values[value])
  })

  return processed
}

const settings = () => {
  return {
    openingbracket: '{',
    closingbracket: '}'
  }
}

module.exports = processMail
