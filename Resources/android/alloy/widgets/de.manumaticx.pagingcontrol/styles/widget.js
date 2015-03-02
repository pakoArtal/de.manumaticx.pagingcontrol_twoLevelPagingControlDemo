function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "de.manumaticx.pagingcontrol/" + s : s.substring(0, index) + "/de.manumaticx.pagingcontrol/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "ScrollView",
    style: {
        scrollType: "horizontal",
        width: Ti.UI.FILL,
        contentWidth: "auto",
        contentHeight: Ti.UI.FILL,
        showHorizontalScrollIndicator: false,
        showVerticalScrollIndicator: false
    }
} ];