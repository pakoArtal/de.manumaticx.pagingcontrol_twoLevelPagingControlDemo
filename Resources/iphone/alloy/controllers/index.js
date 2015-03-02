function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function tabHandler(e) {
        console.log("selected tab ", e.tab);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.paging = Alloy.createWidget("de.manumaticx.pagingcontrol", "widget", {
        top: 0,
        indicatorColor: "#09c",
        tabs: true,
        id: "paging",
        __parentSymbol: $.__views.index
    });
    $.__views.paging.setParent($.__views.index);
    tabHandler ? $.__views.paging.on("select", tabHandler) : __defers["$.__views.paging!select!tabHandler"] = true;
    var __alloyId0 = [];
    $.__views.ventana1 = Alloy.createController("ventana1", {
        id: "ventana1"
    });
    __alloyId0.push($.__views.ventana1.getViewEx({
        recurse: true
    }));
    $.__views.ventana2 = Alloy.createController("ventana2", {
        id: "ventana2"
    });
    __alloyId0.push($.__views.ventana2.getViewEx({
        recurse: true
    }));
    $.__views.ventana3 = Alloy.createController("ventana3", {
        id: "ventana3"
    });
    __alloyId0.push($.__views.ventana3.getViewEx({
        recurse: true
    }));
    $.__views.ventana4 = Alloy.createController("ventana4", {
        id: "ventana4"
    });
    __alloyId0.push($.__views.ventana4.getViewEx({
        recurse: true
    }));
    $.__views.ventana5 = Alloy.createController("ventana5", {
        id: "ventana5"
    });
    __alloyId0.push($.__views.ventana5.getViewEx({
        recurse: true
    }));
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId0,
        id: "scrollableView"
    });
    $.__views.index.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.paging.setScrollableView($.scrollableView);
    $.index.open();
    __defers["$.__views.paging!select!tabHandler"] && $.__views.paging.on("select", tabHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;