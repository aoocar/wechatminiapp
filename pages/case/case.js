(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/case/case" ], {
    63: function(e, t, n) {
        (function(e) {
            n(4);
            t(n(2));
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t(n(64)).default);
        }).call(this, n(1).createPage);
    },
    64: function(e, t, n) {
        n.r(t);
        var a = n(65), i = n(67);
        for (var r in i) "default" !== r && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        n(69);
        var o = n(10), c = Object(o.default)(i.default, a.render, a.staticRenderFns, !1, null, null, null, !1, a.components, void 0);
        c.options.__file = "pages/case/case.vue", t.default = c.exports;
    },
    65: function(e, t, n) {
        n.r(t);
        var a = n(66);
        n.d(t, "render", function() {
            return a.render;
        }), n.d(t, "staticRenderFns", function() {
            return a.staticRenderFns;
        }), n.d(t, "recyclableRender", function() {
            return a.recyclableRender;
        }), n.d(t, "components", function() {
            return a.components;
        });
    },
    66: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return a;
        }), n.d(t, "staticRenderFns", function() {
            return r;
        }), n.d(t, "recyclableRender", function() {
            return i;
        }), n.d(t, "components", function() {});
        var a = function() {
            var e = this.$createElement;
            this._self._c;
        }, i = !1, r = [];
        a._withStripped = !0;
    },
    67: function(e, t, n) {
        n.r(t);
        var a = n(68), i = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = i.a;
    },
    68: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = "", i = "", r = {
                components: {
                    DateTimePicker: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/bory-dateTimePicker/bory-dateTimePicker") ]).then(function() {
                            return resolve(n(96));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        id: "",
                        formData: [],
                        title: "",
                        type: "",
                        dateString: "",
                        domain: this.api.domain
                    };
                },
                onLoad: function(t) {
                    var n = this;
                    n._isLoaded = !1, (a = e.createRewardedVideoAd({
                        adUnitId: "adunit-7d81a0a2b0e9107c"
                    })).onLoad(function() {
                        n._isLoaded = !0, console.log("onLoad event");
                    }), a.onError(function(e) {
                        console.log("onError event", e);
                    }), a.onClose(function(t) {
                        (t.isEnded || Date.parse(new Date()) / 1e3 - i >= 20) && e.setStorageSync("ad_jl_time", Date.parse(new Date()) / 1e3 + 1800), 
                        n.complete(), console.log("onClose event", t);
                    }), e.showShareMenu(), n.id = t.id ? t.id : 1, e.setStorageSync("cropper", null), 
                    n.init();
                },
                onShow: function() {
                    this.api.ad_cp_show();
                    var t = e.getStorageSync("cropper");
                    console.log(t), t && (t = JSON.parse(t), console.log(t.i), this.formData[t.i].value = t.url, 
                    e.setStorageSync("cropper", null));
                },
                onShareAppMessage: function() {
                    return {
                        title: this.title,
                        path: "/pages/index/index?id=" + this.id,
                        imageUrl: this.api.domain + "/resource/Zb/" + this.id + "/icon.jpg"
                    };
                },
                methods: {
                    init: function() {
                        var t = this;
                        e.showLoading({
                            title: "加载中..."
                        }), t.api.post(t.api.domain + "/api/Create/getinfo/id/" + t.id, {}, function(n) {
                            e.hideLoading(), t.formData = n.data.formData, t.title = n.data.title, e.setNavigationBarTitle({
                                title: n.data.title
                            });
                        });
                    },
                    picker: function(e) {
                        var t = this;
                        t.formData[e.currentTarget.dataset.i].value = t.formData[e.currentTarget.dataset.i].val[e.detail.value], 
                        t.formData[e.currentTarget.dataset.i].selected = e.detail.value;
                    },
                    input: function(e) {
                        this.formData[e.currentTarget.dataset.i].value = e.detail.value;
                    },
                    upload: function(t) {
                        e.navigateTo({
                            url: "../cropper/cropper?i=" + t.currentTarget.dataset.i + "&w=" + t.currentTarget.dataset.w + "&h=" + t.currentTarget.dataset.h
                        });
                    },
                    isEmpty: function() {
                        var e = this, t = [];
                        for (var n in e.formData) {
                            if ("" == e.formData[n].value) return !1;
                            t[e.formData[n].name] = e.formData[n].value;
                        }
                        return t;
                    },
                    selectDatePicker: function(e, t) {
                        this.type = e, this.index = t, this.dateString = this.formData[t].value, this.$refs["date-time"].show();
                    },
                    dateTimeChange: function(e) {
                        this.formData[this.index].value = e;
                    },
                    base64ToPath: function(t) {
                        var n = t.replace("data:image/png;base64,", ""), a = e.getFileSystemManager();
                        n = (n = n.replace(/\ +/g, "")).replace(/[\r\n]/g, "");
                        var i = e.base64ToArrayBuffer(n), r = wx.env.USER_DATA_PATH + "/share_img.png";
                        return a.writeFileSync(r, i, "binary"), r;
                    },
                    complete: function() {
                        var t = this, n = t.isEmpty();
                        n ? t._isLoaded && (!e.getStorageSync("ad_jl_time") || e.getStorageSync("ad_jl_time") < Date.parse(new Date()) / 1e3) ? e.showModal({
                            title: "提示",
                            content: "首次制作需要看完广告",
                            success: function(e) {
                                e.confirm ? (i = Date.parse(new Date()) / 1e3, a.show()) : e.cancel && console.log("用户点击取消");
                            }
                        }) : t._submit(n) : e.showToast({
                            title: "请将数据填写完整！",
                            mask: !0,
                            icon: "none"
                        });
                    },
                    _submit: function(t) {
                        var n = this;
                        e.showLoading({
                            title: "加载中..."
                        }), n.api.post(n.api.domain + "/api/Result/index/id/" + n.id, t, function(t) {
                            -1 != t.data.indexOf("base") ? (e.hideLoading(), e.setStorageSync("result_img", n.base64ToPath(t.data)), 
                            e.navigateTo({
                                url: "../result/result?id=" + n.id + "&title=" + n.title
                            })) : (e.hideLoading(), e.setStorageSync("result_img", t.data), e.navigateTo({
                                url: "../result/result?id=" + n.id + "&title=" + n.title
                            }));
                        });
                    }
                }
            };
            t.default = r;
        }).call(this, n(1).default);
    },
    69: function(e, t, n) {
        n.r(t);
        var a = n(70), i = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = i.a;
    },
    70: function(e, t, n) {}
}, [ [ 63, "common/runtime", "common/vendor" ] ] ]);