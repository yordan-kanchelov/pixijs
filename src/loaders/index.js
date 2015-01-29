/**
 * @file        Main export of the PIXI loaders library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/GoodBoyDigital/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI
 */
module.exports = {
    Loader:     require('resource-loader'),
    loader:     require('./loader'),

    // parsers
    bitmapFontParser:   require('./bitmapFontParser'),
    spineAtlasParser:   require('./spineAtlasParser'),
    spritesheetParser:  require('./spritesheetParser'),
    textureParser:      require('./textureParser')
};
