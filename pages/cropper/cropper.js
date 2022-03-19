(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/cropper/cropper" ], {
    79: function(n, e, t) {
        (function(n) {
            t(4);
            e(t(2));
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(e(t(80)).default);
        }).call(this, t(1).createPage);
    },
    80: function(n, e, t) {
        t.r(e);
        var r = t(81), o = t(83);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        t(85), t(87);
        var u = t(10), i = Object(u.default)(o.default, r.render, r.staticRenderFns, !1, null, null, null, !1, r.components, void 0);
        i.options.__file = "pages/cropper/cropper.vue", e.default = i.exports;
    },
    81: function(n, e, t) {
        t.r(e);
        var r = t(82);
        t.d(e, "render", function() {
            return r.render;
        }), t.d(e, "staticRenderFns", function() {
            return r.staticRenderFns;
        }), t.d(e, "recyclableRender", function() {
            return r.recyclableRender;
        }), t.d(e, "components", function() {
            return r.components;
        });
    },
    82: function(n, e, t) {
        t.r(e), t.d(e, "render", function() {
            return r;
        }), t.d(e, "staticRenderFns", function() {
            return c;
        }), t.d(e, "recyclableRender", function() {
            return o;
        }), t.d(e, "components", function() {});
        var r = function() {
            var n = this.$createElement;
            this._self._c;
        }, o = !1, c = [];
        r._withStripped = !0;
    },
    83: function(n, e, t) {
        t.r(e);
        var r = t(84), o = t.n(r);
        for (var c in r) "default" !== c && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(c);
        e.default = o.a;
    },
    84: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = {
                components: {
                    lClipper: function() {
                        Promise.all([ t.e("common/vendor"), t.e("components/lime-clipper/index") ]).then(function() {
                            return resolve(t(104));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        show: !1,
                        canvasZoom: 1,
                        cutWidth: 0,
                        cutHeight: 0
                    };
                },
                onLoad: function(n) {
                    this.api.ad_cp_show();
                    var e = this;
                    n = n.h ? n : {
                        h: 800,
                        w: 800,
                        i: 0
                    }, e.h = parseInt(n.h), e.w = parseInt(n.w), e.i = n.i;
                },
                mounted: function() {
                    var e = this;
                    n.createSelectorQuery().selectAll(".container").boundingClientRect(function(t) {
                        var r = t[0].height - 50 - 100, o = (t[0].width - 40) / e.w;
                        e.h * o > r && (o = r / e.h), e.cutWidth = e.w * o / (n.upx2px(100) / 100), e.cutHeight = e.h * o / (n.upx2px(100) / 100), 
                        e.canvasZoom = e.w / (n.upx2px(100) / 100) / e.cutWidth, e.show = !0, console.log(e.canvasZoom);
                    }).exec();
                },
                methods: {
                    success: function(e) {
                        n.setStorageSync("cropper", '{"url":"' + e.url + '","i":"' + this.i + '"}'), this.cancel();
                    },
                    cancel: function(e) {
                        n.navigateBack({
                            delta: 1
                        });
                    }
                }
            };
            e.default = r;
        }).call(this, t(1).default);
    },
    85: function(n, e, t) {
        t.r(e);
        var r = t(86), o = t.n(r);
        for (var c in r) "default" !== c && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(c);
        e.default = o.a;
    },
    86: function(n, e, t) {},
    87: function(n, e, t) {
        t.r(e);
        var r = t(88), o = t.n(r);
        for (var c in r) "default" !== c && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(c);
        e.default = o.a;
    },
    88: function(n, e, t) {}
}, [ [ 79, "common/runtime", "common/vendor" ] ] ]);