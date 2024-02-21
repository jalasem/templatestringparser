/*
 * TemplateString - Simple template strings
 * Copyright (c) Abdulsamii Ajala (jalasem)
 * https://github.com/jalasem/templateString/
 *
 * Released under the MIT license
 * https://github.com/jalasem/templateString/blob/master/LICENSE
 */

/**
 * Processes a template string by interpolating values based on a given configuration.
 * 
 * @param {string} template - Template string to be processed.
 * @param {object} values - Variables to be interpolated into the template.
 * @param {object} config - Configurations for template interpolation with defaults.
 * @returns {string} - The processed template string.
 */
const processTemplate = (template, values, config = getConfig()) => {
  const { openingBracket, closingBracket, trim } = config;
  const flattenedValues = flattenObj(values);

  if (typeof flattenedValues !== 'object' || Array.isArray(flattenedValues)) {
    return template;
  }

  return Object.entries(flattenedValues).reduce((acc, [key, value]) => {
    const pattern = trim ? `${escapeRegExp(openingBracket)}\\s*${key}\\s*${escapeRegExp(closingBracket)}` : `${escapeRegExp(openingBracket)}${key}${escapeRegExp(closingBracket)}`;
    const regex = new RegExp(pattern, "gm");
    return acc.replace(regex, value);
  }, template);
};

/**
 * Escapes special characters in a string for use in a regular expression.
 * 
 * @param {string} str - String to be escaped.
 * @returns {string} - Escaped string.
 */
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Flattens a nested object into a single-level object with dot-separated keys.
 * 
 * @param {object} obj - Object to be flattened.
 * @returns {object} - Flattened object.
 */
const flattenObj = (obj, base = '', result = {}) => {
  Object.entries(obj).forEach(([key, value]) => {
    const newKey = base ? `${base}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObj(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  });
  return result;
};

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

/**
 * 
 * @param {*object} config 
 * @returns default settings where config key is missing
 */

const getConfig = (config={}) => {
  const defaultConfig = settings();

  return {
    openingBracket: config.openingBracket || defaultConfig.openingBracket,
    closingBracket: config.closingBracket || defaultConfig.closingBracket,
    trim: (config.trim !== undefined && config.trim) ? config.trim : defaultConfig.trim
  };
}

module.exports = processTemplate
