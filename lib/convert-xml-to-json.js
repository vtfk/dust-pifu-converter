const { readFile } = require('fs').promises
const parser = require('fast-xml-parser')
const { logger } = require('@vtfk/logger')

module.exports = async (PIFU_FILE) => {
  logger('info', ['lib', 'convert-xml-to-json', PIFU_FILE, 'reading file'])
  const xmlFile = await readFile(PIFU_FILE)
  const xml = xmlFile.toString()

  logger('info', ['lib', 'convert-xml-to-json', PIFU_FILE, 'converting'])
  const parseOptions = {
    ignoreAttributes: false,
    parseTrueNumberOnly: true,
    attributeNamePrefix: '',
    textNodeName: 'text'
  }
  const json = parser.parse(xml, parseOptions)

  logger('info', ['lib', 'convert-xml-to-json', PIFU_FILE, 'converted'])
  return json
}
