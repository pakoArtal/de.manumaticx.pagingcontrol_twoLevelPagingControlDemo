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
    $.__views.__alloyId1 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        title: "Tab 1",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.pagingSegundo1 = Alloy.createWidget("de.manumaticx.pagingcontrol", "widget", {
        top: 50,
        indicatorColor: "#09c",
        tabs: true,
        id: "pagingSegundo1",
        __parentSymbol: $.__views.__alloyId1
    });
    $.__views.pagingSegundo1.setParent($.__views.__alloyId1);
    tabHandler ? $.__views.pagingSegundo1.on("select", tabHandler) : __defers["$.__views.pagingSegundo1!select!tabHandler"] = true;
    var __alloyId2 = [];
    $.__views.__alloyId3 = Ti.UI.createView({
        backgroundColor: "green",
        title: "green",
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        backgroundColor: "black",
        title: "black",
        id: "__alloyId4"
    });
    __alloyId2.push($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        backgroundColor: "blue",
        title: "blue",
        id: "__alloyId5"
    });
    __alloyId2.push($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        backgroundColor: "#cfa",
        title: "#cfa",
        id: "__alloyId6"
    });
    __alloyId2.push($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        backgroundColor: "#afc",
        title: "#afc",
        id: "__alloyId7"
    });
    __alloyId2.push($.__views.__alloyId7);
    $.__views.scrollableViewSegundo1 = Ti.UI.createScrollableView({
        views: __alloyId2,
        id: "scrollableViewSegundo1"
    });
    $.__views.__alloyId1.add($.__views.scrollableViewSegundo1);
    $.__views.__alloyId8 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        title: "Tab 2",
        id: "__alloyId8"
    });
    __alloyId0.push($.__views.__alloyId8);
    $.__views.pagingSegundo2 = Alloy.createWidget("de.manumaticx.pagingcontrol", "widget", {
        id: "pagingSegundo2",
        __parentSymbol: $.__views.__alloyId8
    });
    $.__views.pagingSegundo2.setParent($.__views.__alloyId8);
    tabHandler ? $.__views.pagingSegundo2.on("select", tabHandler) : __defers["$.__views.pagingSegundo2!select!tabHandler"] = true;
    var __alloyId9 = [];
    $.__views.__alloyId10 = Ti.UI.createView({
        title: "pink",
        backgroundColor: "pink",
        id: "__alloyId10"
    });
    __alloyId9.push($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        title: "red",
        backgroundColor: "red",
        id: "__alloyId11"
    });
    __alloyId9.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        title: "purple",
        backgroundColor: "purple",
        id: "__alloyId12"
    });
    __alloyId9.push($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        title: "brown",
        backgroundColor: "brown",
        id: "__alloyId13"
    });
    __alloyId9.push($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        title: "gray",
        backgroundColor: "gray",
        id: "__alloyId14"
    });
    __alloyId9.push($.__views.__alloyId14);
    $.__views.scrollableViewSegundo2 = Ti.UI.createScrollableView({
        views: __alloyId9,
        id: "scrollableViewSegundo2"
    });
    $.__views.__alloyId8.add($.__views.scrollableViewSegundo2);
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
    __defers["$.__views.pagingSegundo1!select!tabHandler"] && $.__views.pagingSegundo1.on("select", tabHandler);
    __defers["$.__views.pagingSegundo2!select!tabHandler"] && $.__views.pagingSegundo2.on("select", tabHandler);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;