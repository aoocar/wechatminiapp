(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/result/result" ], {
    71: function(n, e, t) {
        (function(n) {
            t(4);
            e(t(2));
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(e(t(72)).default);
        }).call(this, t(1).createPage);
    },
    72: function(n, e, t) {
        t.r(e);
        var r = t(73), i = t(75);
        for (var o in i) "default" !== o && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(o);
        t(77);
        var u = t(10), a = Object(u.default)(i.default, r.render, r.staticRenderFns, !1, null, null, null, !1, r.components, void 0);
        a.options.__file = "pages/result/result.vue", e.default = a.exports;
    },
    73: function(n, e, t) {
        t.r(e);
        var r = t(74);
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
    74: function(n, e, t) {
        t.r(e), t.d(e, "render", function() {
            return r;
        }), t.d(e, "staticRenderFns", function() {
            return o;
        }), t.d(e, "recyclableRender", function() {
            return i;
        }), t.d(e, "components", function() {});
        var r = function() {
            var n = this.$createElement;
            this._self._c;
        }, i = !1, o = [];
        r._withStripped = !0;
    },
    75: function(n, e, t) {
        t.r(e);
        var r = t(76), i = t.n(r);
        for (var o in r) "default" !== o && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(o);
        e.default = i.a;
    },
    76: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t = {
                data: function() {
                    return {
                        img: "",
                        id: "",
                        title: "",
                        platform: ""
                    };
                },
                onLoad: function(e) {
                    this.api.ad_cp_show();
                    var t = this;
                    n.showShareMenu(), t.id = e.id, t.title = e.title, t.img = n.getStorageSync("result_img"), 
                    n.setStorageSync("result_img", "");
                },
                onShareAppMessage: function(n) {
                    return {
                        title: this.title,
                        path: "/pages/index/index?id=" + this.id,
                        imageUrl: this.api.domain + "/resource/Zb/" + this.id + "/icon.jpg"
                    };
                },
                methods: {
                    save: function() {
                        var e = this;
                        n.saveImageToPhotosAlbum({
                            filePath: e.img,
                            success: function(e) {
                                n.showToast({
                                    title: "图片保存成功！",
                                    mask: !0,
                                    icon: "none"
                                });
                            },
                            fail: function(t) {
                                console.log(t), n.previewImage({
                                    urls: e.img
                                });
                            }
                        });
                    }
                }
            };
            e.default = t;
        }).call(this, t(1).default);
    },
    77: function(n, e, t) {
        t.r(e);
        var r = t(78), i = t.n(r);
        for (var o in r) "default" !== o && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(o);
        e.default = i.a;
    },
    78: function(n, e, t) {}
}, [ [ 71, "common/runtime", "common/vendor" ] ] ]);