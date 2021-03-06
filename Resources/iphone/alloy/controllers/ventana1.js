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
        console.log("Ventana 1.selected tab ", e.tab);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ventana1";
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
    $.__views.ventana1 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        title: "Tab 1",
        id: "ventana1"
    });
    $.__views.ventana1 && $.addTopLevelView($.__views.ventana1);
    $.__views.pagingSegundo1 = Alloy.createWidget("de.manumaticx.pagingcontrol", "widget", {
        top: 0,
        indicatorColor: "#09c",
        tabs: true,
        id: "pagingSegundo1",
        __parentSymbol: $.__views.ventana1
    });
    $.__views.pagingSegundo1.setParent($.__views.ventana1);
    tabHandler ? $.__views.pagingSegundo1.on("select", tabHandler) : __defers["$.__views.pagingSegundo1!select!tabHandler"] = true;
    var __alloyId1 = [];
    $.__views.__alloyId2 = Ti.UI.createView({
        backgroundColor: "green",
        title: "green",
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        backgroundColor: "black",
        title: "black",
        id: "__alloyId3"
    });
    __alloyId1.push($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        backgroundColor: "blue",
        title: "blue",
        id: "__alloyId4"
    });
    __alloyId1.push($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        backgroundColor: "#cfa",
        title: "#cfa",
        id: "__alloyId5"
    });
    __alloyId1.push($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        backgroundColor: "#afc",
        title: "#afc",
        id: "__alloyId6"
    });
    __alloyId1.push($.__views.__alloyId6);
    $.__views.scrollableViewSegundo1 = Ti.UI.createScrollableView({
        views: __alloyId1,
        id: "scrollableViewSegundo1"
    });
    $.__views.ventana1.add($.__views.scrollableViewSegundo1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.pagingSegundo1.setScrollableView($.scrollableViewSegundo1);
    __defers["$.__views.pagingSegundo1!select!tabHandler"] && $.__views.pagingSegundo1.on("select", tabHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;