function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "de.manumaticx.pagingcontrol/" + s : s.substring(0, index) + "/de.manumaticx.pagingcontrol/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function getTabWidth() {
        var displayWidth = Ti.Platform.displayCaps.platformWidth, orientation = Ti.Gesture.orientation;
        false;
        return Math.floor(orientation == Ti.UI.LANDSCAPE_LEFT || orientation == Ti.UI.LANDSCAPE_RIGHT ? displayWidth / 7 : displayWidth / 4);
    }
    function init(args) {
        _.defaults(opts, args);
        $.tabWidth = args.tabs.width || getTabWidth();
        if (_.isString($.tabWidth) && $.tabWidth.indexOf("%")) {
            var newWidth = parseInt($.tabWidth.slice(0, $.tabWidth.indexOf("%"))) / 100;
            false;
            $.tabWidth = newWidth * Ti.Platform.displayCaps.platformWidth;
        }
        $.tabs.applyProperties({
            left: 0,
            width: getWidth(),
            height: Ti.UI.FILL
        });
        for (i = 0; i < args.titles.length; i++) {
            var t = Ti.UI.createView({
                width: $.tabWidth,
                height: Ti.UI.FILL
            });
            t.add(Ti.UI.createLabel({
                color: "#000",
                text: args.titles[i]
            }));
            !function(index) {
                t.addEventListener("click", function(e) {
                    e.cancelBubble = true;
                    var view = this;
                    $.trigger("select", {
                        tab: index,
                        view: view
                    });
                });
            }(i);
            $.tabs.add(t);
            i < args.titles.length - 1 && $.tabs.add(Ti.UI.createView({
                backgroundColor: args.tabs.dividerColor,
                height: 32,
                width: 1
            }));
        }
    }
    function getWidth() {
        return $.tabWidth * opts.titles.length + opts.titles.length;
    }
    new (require("alloy/widget"))("de.manumaticx.pagingcontrol");
    this.__widgetId = "de.manumaticx.pagingcontrol";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabs";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.tabs = Ti.UI.createView({
        layout: "horizontal",
        id: "tabs"
    });
    $.__views.tabs && $.addTopLevelView($.__views.tabs);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var opts = {};
    init(arguments[0] || {});
    exports.getWidth = getWidth;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;