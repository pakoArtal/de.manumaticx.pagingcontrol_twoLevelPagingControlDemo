function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "de.manumaticx.pagingcontrol/" + s : s.substring(0, index) + "/de.manumaticx.pagingcontrol/" + s.substring(index + 1);
    return path;
}

module.exports = [];