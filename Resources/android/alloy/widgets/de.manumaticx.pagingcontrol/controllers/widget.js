function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "de.manumaticx.pagingcontrol/" + s : s.substring(0, index) + "/de.manumaticx.pagingcontrol/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
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
    function postLayout(callback, oc) {
        !oc && $.pagingcontrol.size.width ? callback() : $.pagingcontrol.addEventListener("postlayout", function onPostLayout() {
            callback();
            $.pagingcontrol.removeEventListener("postlayout", onPostLayout);
        });
    }
    function init() {
        if (args.tabs) {
            $.tabsCtrl = Widget.createController("tabs", {
                tabs: args.tabs,
                titles: _.map($.scrollableView.getViews(), function(v) {
                    return v.title;
                })
            });
            $.pagingcontrol.add($.tabsCtrl.getView());
            $.pagingcontrol.add(Ti.UI.createView({
                width: Ti.UI.FILL,
                height: 2,
                bottom: 0,
                backgroundColor: "#ededed"
            }));
            $.tabsCtrl.on("select", function(e) {
                e.cancelBubble = true;
                $.trigger("select", {
                    tab: e.tab,
                    view: e.view
                });
                $.scrollableView.currentPage = e.tab;
                $.indicator.setLeft(e.tab * $.iWidth);
            });
        }
        $.indicator = Ti.UI.createView({
            backgroundColor: args.indicatorColor,
            height: args.indicatorHeight,
            width: Ti.UI.SIZE,
            bottom: 0,
            left: 0,
            zIndex: 2
        });
        adjustePositions();
        $.pagingcontrol.add($.indicator);
        $.scrollableView.addEventListener("scroll", onScroll);
        Ti.Gesture.addEventListener("orientationchange", onOrientationChange);
    }
    function onScroll(e) {
        e.cancelBubble = true;
        $.indicator.setLeft(e.currentPageAsFloat * $.iWidth);
        args.tabs && updateOffset(e.currentPageAsFloat);
    }
    function updateOffset(index) {
        var width = $.pagingcontrol.size.width, tabsWidth = $.tabsCtrl.getWidth(), maxOffset = tabsWidth - width, tabSpace = tabsWidth * index / $.scrollableView.views.length, measurement = require("alloy/measurement");
        if (tabsWidth > width) {
            var offset = tabSpace - args.scrollOffset, offsetDp = maxOffset > offset ? offset : maxOffset, newOffset = measurement.dpToPX(offsetDp);
            $.pagingcontrol.setContentOffset({
                x: newOffset,
                y: 0
            }, {
                animated: false
            });
        }
    }
    function onOrientationChange() {
        postLayout(adjustePositions, true);
    }
    function adjustePositions() {
        var totalWidth = args.tabs ? $.tabsCtrl.getWidth() : $.pagingcontrol.size.width;
        $.iWidth = Math.floor(totalWidth / $.scrollableView.views.length);
        $.indicator.setWidth($.iWidth);
        $.indicator.setLeft($.scrollableView.getCurrentPage() * $.iWidth);
    }
    var Widget = new (require("alloy/widget"))("de.manumaticx.pagingcontrol");
    this.__widgetId = "de.manumaticx.pagingcontrol";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.pagingcontrol = Ti.UI.createScrollView({
        scrollType: "horizontal",
        width: Ti.UI.FILL,
        contentWidth: "auto",
        contentHeight: Ti.UI.FILL,
        showHorizontalScrollIndicator: false,
        showVerticalScrollIndicator: false,
        id: "pagingcontrol"
    });
    $.__views.pagingcontrol && $.addTopLevelView($.__views.pagingcontrol);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    _.defaults(args, {
        indicatorColor: "#000",
        indicatorHeight: 5,
        tabs: false,
        scrollOffset: 40,
        height: args.tabs ? 48 : 5,
        width: Ti.UI.FILL
    });
    args.tabs && (args.tabs = {
        dividerColor: "#ccc",
        width: args.tabWidth
    });
    [ "backgroundColor", "backgroundImage", "backgroundLeftCap", "backgroundRepeat", "backgroundTopCap", "borderRadius", "borderWidth", "bottom", "height", "horizontalWrap", "left", "opacity", "right", "top", "visible", "width", "zIndex" ].forEach(function(prop) {
        _.has(args, prop) && ($.pagingcontrol[prop] = args[prop]);
    });
    args.__parentSymbol && args.__parentSymbol.children.length > 0 && ($.scrollableView = _.find(args.__parentSymbol.children, function(child) {
        return "Ti.UI.ScrollableView" === child.apiName;
    }));
    _.has(args, "scrollableView") && ($.scrollableView = args.scrollableView);
    $.scrollableView && postLayout(init);
    exports.setScrollableView = function(_sv) {
        $.scrollableView = _sv;
        postLayout(init);
    };
    exports.destroy = function() {
        Ti.Gesture.removeEventListener("orientationchange", onOrientationChange);
        args.tabs && $.tabsCtrl.off();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;