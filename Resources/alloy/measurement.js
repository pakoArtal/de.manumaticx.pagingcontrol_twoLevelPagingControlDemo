var dpi = Ti.Platform.displayCaps.dpi, density = Ti.Platform.displayCaps.density;

exports.dpToPX = function(val) {
    return val * ("high" === density ? 2 : 1);
};

exports.pxToDP = function(val) {
    return val / ("high" === density ? 2 : 1);
};

exports.pointPXToDP = function(pt) {
    return {
        x: exports.pxToDP(pt.x),
        y: exports.pxToDP(pt.y)
    };
};