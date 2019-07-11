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
 */
const processMail = (template, values) => {
  var processed = template

  if (Array.isArray(values) || typeof values !== 'object') return processed

  Object.keys(values).forEach(value => {
    var re = new RegExp('{' + value + '}', "gm")
    processed = processed.replace(re, values[value])
  })

  return processed
}

module.exports = processMail
