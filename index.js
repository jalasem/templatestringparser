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
  // destructuring configurations
  const {openingbracket, closingbracket, trim} = config

  // setting default settings where config key is missing
  var obk = (openingbracket) ? openingbracket : settings().openingbracket
  var cbk = (closingbracket) ? closingbracket : settings().closingbracket
  var trm = (trim) ? trim : settings().trim

  var processed = template

  if (Array.isArray(values) || typeof values !== 'object') return processed

  Object.keys(values).forEach(value => {
    var re = (trm)
      ? new RegExp(escapeRegExp(obk) + '\\s*' + value + '\\s*' + escapeRegExp(cbk), "gm")
      : new RegExp(escapeRegExp(obk) + '\\s{0,1}' + value + '\\s{0,1}' + escapeRegExp(cbk), "gm")
    processed = processed.replace(re, values[value])
  })

  return processed
}

/**
 *
 * @param {string} regexp
 * @returns {string} regexp with all special characters escaped
 */
const escapeRegExp = (regexp) => {
  return regexp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 *
 * @returns {object} default configurations or settings
 */
const settings = () => {
  return {
    openingbracket: '{',
    closingbracket: '}',
    trim: true // auto trim excess white spaces between key value and brackets
  }
}

module.exports = processMail
