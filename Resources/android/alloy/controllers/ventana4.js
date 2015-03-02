function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ventana4";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.ventana4 = Ti.UI.createWindow({
        title: "Tab 4",
        id: "ventana4"
    });
    $.__views.ventana4 && $.addTopLevelView($.__views.ventana4);
    $.__views.__alloyId28 = Ti.UI.createView({
        title: "Purple",
        backgroundColor: "yellow",
        id: "__alloyId28"
    });
    $.__views.ventana4.add($.__views.__alloyId28);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;