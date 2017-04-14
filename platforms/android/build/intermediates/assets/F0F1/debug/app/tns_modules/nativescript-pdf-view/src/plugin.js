"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pdfviewer = com.github.barteksc.pdfviewer;
var fs = require("file-system");
var http = require("http");
var common = require("./plugin.common");
var PDFView = (function (_super) {
    __extends(PDFView, _super);
    function PDFView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tempFolder = fs.knownFolders.temp().getFolder('PDFViewer.temp/');
        _this.onLoadHandler = (function () {
            var pdfViewRef = new WeakRef(_this);
            return new pdfviewer.listener.OnLoadCompleteListener({
                loadComplete: function (numPages) {
                    common.PDFView.notifyOfEvent(common.PDFView.loadEvent, pdfViewRef);
                },
            });
        })();
        return _this;
    }
    Object.defineProperty(PDFView.prototype, "android", {
        get: function () {
            return this._android;
        },
        set: function (value) {
            this._android = value;
        },
        enumerable: true,
        configurable: true
    });
    PDFView.prototype.loadPDF = function (src) {
        if (!src || !this.android) {
            return;
        }
        this.promise = void 0;
        if (src.indexOf('://') === -1) {
            src = 'file://' + src;
        }
        else if (src.indexOf('file://') !== 0) {
            return this.cacheThenLoad(src);
        }
        var uri = android.net.Uri.parse(src);
        this.android
            .fromUri(uri)
            .onLoad(this.onLoadHandler)
            .load();
    };
    PDFView.prototype.cacheThenLoad = function (url) {
        var _this = this;
        this.tempFolder.clear().then(function () {
            var promise = _this.promise = http
                .getFile(url, _this.tempFolder.path + "/" + Date.now() + ".pdf")
                .then(function (file) {
                if (_this.promise === promise) {
                    _this.loadPDF(file.path);
                }
            }).catch(function (error) {
                console.error(error);
            });
        });
    };
    PDFView.prototype._createUI = function () {
        this._android = new pdfviewer.PDFView(this._context, void 0);
        this.loadPDF(this.src);
    };
    return PDFView;
}(common.PDFView));
exports.PDFView = PDFView;
//# sourceMappingURL=plugin.js.map