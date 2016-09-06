module.exports = function (source, map) {
    this.callback(null, source.replace(/require\(['"]react["']\)/g, 'require("fast-react-server")'), map);
};
