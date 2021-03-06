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
        console.log("Ventana 2.selected tab ", e.tab);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ventana2";
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
    $.__views.ventana2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        title: "Tab 2",
        id: "ventana2"
    });
    $.__views.ventana2 && $.addTopLevelView($.__views.ventana2);
    $.__views.pagingSegundo2 = Alloy.createWidget("de.manumaticx.pagingcontrol", "widget", {
        top: 0,
        indicatorColor: "#09c",
        tabs: true,
        id: "pagingSegundo2",
        __parentSymbol: $.__views.ventana2
    });
    $.__views.pagingSegundo2.setParent($.__views.ventana2);
    tabHandler ? $.__views.pagingSegundo2.on("select", tabHandler) : __defers["$.__views.pagingSegundo2!select!tabHandler"] = true;
    var __alloyId21 = [];
    $.__views.__alloyId22 = Ti.UI.createView({
        title: "pink",
        backgroundColor: "pink",
        id: "__alloyId22"
    });
    __alloyId21.push($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        title: "red",
        backgroundColor: "red",
        id: "__alloyId23"
    });
    __alloyId21.push($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        title: "purple",
        backgroundColor: "purple",
        id: "__alloyId24"
    });
    __alloyId21.push($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        title: "brown",
        backgroundColor: "brown",
        id: "__alloyId25"
    });
    __alloyId21.push($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        title: "gray",
        backgroundColor: "gray",
        id: "__alloyId26"
    });
    __alloyId21.push($.__views.__alloyId26);
    $.__views.scrollableViewSegundo2 = Ti.UI.createScrollableView({
        views: __alloyId21,
        id: "scrollableViewSegundo2"
    });
    $.__views.ventana2.add($.__views.scrollableViewSegundo2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.pagingSegundo2.setScrollableView($.scrollableViewSegundo2);
    __defers["$.__views.pagingSegundo2!select!tabHandler"] && $.__views.pagingSegundo2.on("select", tabHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;