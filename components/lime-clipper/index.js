(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/lime-clipper/index" ], {
    104: function(t, i, e) {
        e.r(i);
        var n = e(105), o = e(109);
        for (var h in o) "default" !== h && function(t) {
            e.d(i, t, function() {
                return o[t];
            });
        }(h);
        e(112);
        var a = e(10), s = Object(a.default)(o.default, n.render, n.staticRenderFns, !1, null, "4b4aa6da", null, !1, n.components, void 0);
        s.options.__file = "components/lime-clipper/index.vue", i.default = s.exports;
    },
    105: function(t, i, e) {
        e.r(i);
        var n = e(106);
        e.d(i, "render", function() {
            return n.render;
        }), e.d(i, "staticRenderFns", function() {
            return n.staticRenderFns;
        }), e.d(i, "recyclableRender", function() {
            return n.recyclableRender;
        }), e.d(i, "components", function() {
            return n.components;
        });
    },
    106: function(t, i, e) {
        e.r(i), e.d(i, "render", function() {
            return n;
        }), e.d(i, "staticRenderFns", function() {
            return h;
        }), e.d(i, "recyclableRender", function() {
            return o;
        }), e.d(i, "components", function() {});
        var n = function() {
            var t = this.$createElement, i = (this._self._c, this.isShowPhotoBtn && !this.$slots.photo ? e(107) : null), n = this.isShowRotateBtn && !this.$slots.rotate ? e(108) : null;
            this.$mp.data = Object.assign({}, {
                $root: {
                    m0: i,
                    m1: n
                }
            });
        }, o = !1, h = [];
        n._withStripped = !0;
    },
    109: function(t, i, e) {
        e.r(i);
        var n = e(110), o = e.n(n);
        for (var h in n) "default" !== h && function(t) {
            e.d(i, t, function() {
                return n[t];
            });
        }(h);
        i.default = o.a;
    },
    110: function(t, i, e) {
        (function(t) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var n = e(111), o = {
                name: "l-clipper",
                props: {
                    zIndex: {
                        type: Number,
                        default: 99
                    },
                    imageUrl: {
                        type: String
                    },
                    quality: {
                        type: Number,
                        default: 1
                    },
                    width: {
                        type: Number,
                        default: 400
                    },
                    height: {
                        type: Number,
                        default: 400
                    },
                    w: {
                        type: Number,
                        default: 400
                    },
                    h: {
                        type: Number,
                        default: 400
                    },
                    minWidth: {
                        type: Number,
                        default: 200
                    },
                    maxWidth: {
                        type: Number,
                        default: 600
                    },
                    minHeight: {
                        type: Number,
                        default: 200
                    },
                    maxHeight: {
                        type: Number,
                        default: 600
                    },
                    isLockWidth: {
                        type: Boolean,
                        default: !1
                    },
                    isLockHeight: {
                        type: Boolean,
                        default: !1
                    },
                    isLockRatio: {
                        type: Boolean,
                        default: !0
                    },
                    scaleRatio: {
                        type: Number,
                        default: 1
                    },
                    minRatio: {
                        type: Number,
                        default: .5
                    },
                    maxRatio: {
                        type: Number,
                        default: 2
                    },
                    isDisableScale: {
                        type: Boolean,
                        default: !1
                    },
                    isDisableRotate: {
                        type: Boolean,
                        default: !1
                    },
                    isLimitMove: {
                        type: Boolean,
                        default: !1
                    },
                    isShowPhotoBtn: {
                        type: Boolean,
                        default: !0
                    },
                    isShowRotateBtn: {
                        type: Boolean,
                        default: !0
                    },
                    isShowConfirmBtn: {
                        type: Boolean,
                        default: !0
                    },
                    isShowCancelBtn: {
                        type: Boolean,
                        default: !0
                    },
                    rotateAngle: {
                        type: Number,
                        default: 90
                    }
                },
                data: function() {
                    return {
                        canvasWidth: 0,
                        canvasHeight: 0,
                        cutX: 0,
                        cutY: 0,
                        aWidth: this.width,
                        aHeight: this.height,
                        clipWidth: 0,
                        clipHeight: 0,
                        cutAnimation: !1,
                        imageWidth: 0,
                        imageHeight: 0,
                        imageTop: 0,
                        imageLeft: 0,
                        scale: 1,
                        angle: 0,
                        image: this.imageUrl,
                        sysinfo: {},
                        moveThrottleTimer: null,
                        moveThrottleFlag: !0,
                        timeCutcenter: null,
                        flagCutTouch: !1,
                        flagEndTouch: !1,
                        cutstart: {},
                        cutAnimationTime: null,
                        touchRelative: [ {
                            x: 0,
                            y: 0
                        } ],
                        hypotenuseLength: 0,
                        ctx: null
                    };
                },
                computed: {
                    clipStyle: function() {
                        var t = this.clipWidth, i = this.clipHeight, e = this.cutY, n = this.cutX, o = this.cutAnimation;
                        return "\n\t\t\twidth: ".concat(t, "px; \n\t\t\theight:").concat(i, "px; \n\t\t\ttransition-property: ").concat(o ? "" : "background", ";\n\t\t\tleft: ").concat(n, "px;\n\t\t\ttop: ").concat(e, "px\n\t\t\t");
                    },
                    imageStyle: function() {
                        var t = this.imageWidth, i = this.imageHeight, e = this.imageLeft, n = this.imageTop, o = this.cutAnimation, h = this.scale, a = this.angle;
                        return "\n\t\t\t\twidth:".concat(t ? t + "px" : "auto", "; height: ").concat(i ? i + "px" : "auto", "; \n\t\t\t\ttransform: translate3d(").concat(e - t / 2, "px, ").concat(n - i / 2, "px, 0) scale(").concat(h, ") rotate(").concat(a, "deg); \n\t\t\t\ttransition-duration: ").concat(o ? .35 : 0, "s\n\t\t\t");
                    },
                    clipSize: function() {
                        return {
                            clipWidth: this.clipWidth,
                            clipHeight: this.clipHeight
                        };
                    },
                    cutPoint: function() {
                        return {
                            cutY: this.cutY,
                            cutX: this.cutX
                        };
                    }
                },
                watch: {
                    image: {
                        handler: function(t) {
                            this.getImageInfo(t);
                        },
                        immediate: !0
                    },
                    clipSize: function(t) {
                        var i = t.widthVal, e = t.heightVal, n = this.minWidth, o = this.minHeight;
                        o /= 2, i < (n /= 2) && (this.clipWidth = n), e < o && (this.clipHeight = o), this.computeCutSize();
                    },
                    angle: function(t) {
                        this.cutAnimation = !0, this.moveStop(), this.isLimitMove && t % 90 && (this.angle = 90 * Math.round(t / 90)), 
                        this.imgMarginDetectionScale();
                    },
                    cutAnimation: function(t) {
                        var i = this;
                        if (clearTimeout(this.cutAnimationTime), t) {
                            var e = setTimeout(function() {
                                i.cutAnimation = !1;
                            }, 260);
                            this.cutAnimationTime = e;
                        }
                    },
                    isLimitMove: function(t) {
                        t && (this.angle % 90 && (this.angle = 90 * Math.round(this.angle / 90)), this.imgMarginDetectionScale());
                    },
                    cutPoint: function() {
                        this.cutDetectionPosition();
                    },
                    aWidth: function(t, i) {
                        t !== i && (this.clipWidth = t / 2);
                    },
                    aHeight: function(t, i) {
                        t !== i && (this.clipHeight = t / 2);
                    }
                },
                mounted: function() {
                    var i = t.getSystemInfoSync();
                    this.sysinfo = i, this.setCutInfo(), this.setCutCenter(), this.computeCutSize(), 
                    this.cutDetectionPosition();
                },
                methods: {
                    getImageInfo: function(i) {
                        var e = this;
                        i && (t.showLoading({
                            title: "请稍候...",
                            mask: !0
                        }), t.getImageInfo({
                            src: i,
                            success: function(t) {
                                e.imgComputeSize(t.width, t.height), e.isLimitMove && (e.imgMarginDetectionScale(), 
                                e.$emit("ready", t));
                            },
                            fail: function() {
                                e.imgComputeSize(), e.isLimitMove && e.imgMarginDetectionScale();
                            }
                        }));
                    },
                    setCutInfo: function() {
                        var i = this.aWidth, e = this.aHeight, n = this.sysinfo, o = i / 2, h = e / 2, a = (n.windowHeight - h) / 2 - 30, s = (n.windowWidth - o) / 2, c = n.windowWidth / 2, u = n.windowHeight / 2;
                        this.ctx = t.createCanvasContext("l-clipper", this), this.clipWidth = o, this.clipHeight = h, 
                        this.cutX = s, this.cutY = a, this.canvasHeight = h, this.canvasWidth = o, this.imageLeft = c, 
                        this.imageTop = u;
                    },
                    setCutCenter: function() {
                        var i = this.sysInfo, e = this.clipHeight, n = this.clipWidth, o = this.imageTop, h = this.imageLeft, a = i || t.getSystemInfoSync(), s = .5 * (a.windowHeight - e) - 30, c = .5 * (a.windowWidth - n);
                        this.imageTop = o - this.cutY + s, this.imageLeft = h - this.cutX + c, this.cutY = s, 
                        this.cutX = c;
                    },
                    computeCutSize: function() {
                        var t = this.clipHeight, i = this.clipWidth, e = this.sysinfo, n = this.cutX, o = this.cutY;
                        i > e.windowWidth ? this.clipWidth = e.windowWidth : i + n > e.windowWidth && (this.cutX = e.windowWidth - n), 
                        t > e.windowHeight ? this.clipHeight = e.windowHeight : t + o > e.windowHeight && (this.cutY = e.windowHeight - o);
                    },
                    cutDetectionPosition: function() {
                        var t = this, i = this.cutX, e = this.cutY, n = this.sysinfo, o = this.clipHeight, h = this.clipWidth, a = function() {
                            e < 0 && (t.cutY = 0), e > n.windowHeight - o && (t.cutY = n.windowHeight - o);
                        }, s = function() {
                            i < 0 && (t.cutX = 0), i > n.windowWidth - h && (t.cutX = n.windowWidth - h);
                        };
                        if (null === e && null === i) {
                            var c = .5 * (n.windowHeight - o), u = .5 * (n.windowWidth - h);
                            this.cutX = u, this.cutY = c;
                        } else null !== e && null !== i ? (a(), s()) : null !== e && null === i ? (a(), 
                        this.cutX = (n.windowWidth - h) / 2) : null === e && null !== i && (s(), this.cutY = (n.windowHeight - o) / 2 - 30);
                    },
                    imgComputeSize: function(t, i) {
                        var e = (0, n.calcImageSize)(t, i, this), o = e.imageWidth, h = e.imageHeight;
                        this.imageWidth = o, this.imageHeight = h;
                    },
                    imgMarginDetectionScale: function(t) {
                        if (this.isLimitMove) {
                            var i = (0, n.calcImageScale)(this, t);
                            this.imgMarginDetectionPosition(i);
                        }
                    },
                    imgMarginDetectionPosition: function(t) {
                        if (this.isLimitMove) {
                            var i = (0, n.calcImageOffset)(this, t), e = i.scale, o = i.left, h = i.top;
                            this.imageLeft = o, this.imageTop = h, this.scale = e;
                        }
                    },
                    moveThrottle: function() {
                        !0 !== this.moveThrottleFlag && (this.moveThrottleFlag = !0);
                    },
                    moveDuring: function() {
                        clearTimeout(this.timeCutcenter);
                    },
                    moveStop: function() {
                        var t = this;
                        clearTimeout(this.timeCutcenter);
                        var i = setTimeout(function() {
                            t.cutAnimation || (t.cutAnimation = !0), t.setCutCenter();
                        }, 800);
                        this.timeCutcenter = i;
                    },
                    clipTouchStart: function(i) {
                        if (this.image) {
                            var e = i.touches[0].clientX, o = i.touches[0].clientY, h = this.cutX, a = this.cutY, s = this.clipWidth, c = this.clipHeight, u = (0, 
                            n.determineDirection)(h, a, s, c, e, o);
                            this.moveDuring(), u && (this.cutstart = {
                                width: s,
                                height: c,
                                x: e,
                                y: o,
                                cutY: a,
                                cutX: h,
                                corner: u
                            }, this.flagCutTouch = !0, this.flagEndTouch = !0);
                        } else t.showToast({
                            title: "请选择图片",
                            icon: "none"
                        });
                    },
                    clipTouchMove: function(i) {
                        if (this.image) {
                            var e = this.flagCutTouch, o = this.moveThrottleFlag;
                            if (e && o) {
                                var h = this.isLockRatio, a = this.isLockHeight, s = this.isLockWidth;
                                if (h && (s || a)) return;
                                this.moveThrottleFlag = !1, !1 !== this.moveThrottleFlag && (this.moveThrottleFlag = !1), 
                                this.moveThrottle();
                                var c = (0, n.clipTouchMoveOfCalculate)(this, i), u = c.width, l = c.height, r = c.cutX, m = c.cutY;
                                s || a ? s ? a || (this.clipHeight = l, this.cutY = m) : (this.clipWidth = u, this.cutX = r) : (this.clipWidth = u, 
                                this.clipHeight = l, this.cutX = r, this.cutY = m), this.imgMarginDetectionScale();
                            }
                        } else t.showToast({
                            title: "请选择图片",
                            icon: "none"
                        });
                    },
                    clipTouchEnd: function() {
                        this.moveStop(), this.flagCutTouch = !1;
                    },
                    imageTouchStart: function(t) {
                        this.flagEndTouch = !1, this.cutAnimation = !1;
                        var i = this.imageLeft, e = this.imageTop, o = Math.round(t.touches[0].clientX), h = Math.round(t.touches[0].clientY), a = [];
                        if (1 === t.touches.length) a[0] = {
                            x: o - i,
                            y: h - e
                        }, this.touchRelative = a; else {
                            var s = Math.round(t.touches[1].clientX), c = Math.round(t.touches[1].clientY), u = Math.abs(o - s), l = Math.abs(h - c), r = (0, 
                            n.calcPythagoreanTheorem)(u, l);
                            a = [ {
                                x: o - i,
                                y: h - e
                            }, {
                                x: s - i,
                                y: c - e
                            } ], this.touchRelative = a, this.hypotenuseLength = r;
                        }
                    },
                    imageTouchMove: function(t) {
                        var i = this.flagEndTouch, e = this.moveThrottleFlag;
                        if (!i && e) {
                            var o = Math.round(t.touches[0].clientX), h = Math.round(t.touches[0].clientY);
                            if (this.moveThrottleFlag = !1, this.moveThrottle(), this.moveDuring(), 1 === t.touches.length) {
                                var a = (0, n.imageTouchMoveOfCalcOffset)(this, o, h), s = a.left, c = a.top;
                                this.imageLeft = s, this.imageTop = c, this.imgMarginDetectionPosition();
                            } else {
                                var u = Math.round(t.touches[1].clientX), l = Math.round(t.touches[1].clientY), r = Math.abs(o - u), m = Math.abs(h - l), g = (0, 
                                n.calcPythagoreanTheorem)(r, m), d = this.scale * (g / this.hypotenuseLength);
                                this.isDisableScale ? d = 1 : (d = (d = d <= this.minRatio ? this.minRatio : d) >= this.maxRatio ? this.maxRatio : d, 
                                this.$emit("change", {
                                    width: this.imageWidth * d,
                                    height: this.imageHeight * d
                                })), this.imgMarginDetectionScale(d), this.hypotenuseLength = Math.sqrt(Math.pow(r, 2) + Math.pow(m, 2)), 
                                this.scale = d;
                            }
                        }
                    },
                    imageTouchEnd: function() {
                        this.flagEndTouch = !0, this.moveStop();
                    },
                    uploadImage: function() {
                        var i = this;
                        t.chooseImage({
                            count: 1,
                            sizeType: [ "original", "compressed" ],
                            sourceType: [ "album", "camera" ],
                            success: function(t) {
                                var e = t.tempFilePaths;
                                i.image = e[0];
                            }
                        });
                    },
                    imageReset: function() {
                        var i = this.sysinfo || t.getSystemInfoSync();
                        this.scale = 1, this.angle = 0, this.imageTop = i.windowHeight / 2 - 30, this.imageLeft = i.windowWidth / 2;
                    },
                    imageLoad: function(i) {
                        this.imageReset(), t.hideLoading(), this.$emit("ready", i.detail);
                    },
                    rotate: function(i) {
                        if (!this.isDisableRotate) if (this.image) {
                            var e = this.rotateAngle, n = this.angle, o = i.currentTarget.dataset.type;
                            this.angle = "along" === o ? n + e : n - e, this.$emit("rotate", this.angle);
                        } else t.showToast({
                            title: "请选择图片",
                            icon: "none"
                        });
                    },
                    confirm: function() {
                        var i = this;
                        if (this.image) {
                            t.showLoading({
                                title: "加载中"
                            });
                            var e = this.clipHeight, n = this.clipWidth, o = this.ctx, h = this.scale, a = this.imageLeft, s = this.imageTop, c = this.cutX, u = this.cutY, l = this.w, r = this.h, m = this.angle, g = this.scaleRatio, d = this.image, f = this.quality, p = (this.type, 
                            this.canvasHeight), v = this.canvasWidth, w = function() {
                                var p = i.imageWidth * h * g, v = i.imageHeight * h * g, w = a - c, y = s - u;
                                o.translate(w * g, y * g), o.rotate(m * Math.PI / 180), o.drawImage(d, -p / 2, -v / 2, p, v), 
                                o.draw(!1, function() {
                                    var o = n * g, h = e * g, a = {
                                        x: 0,
                                        y: 0,
                                        width: o,
                                        height: h,
                                        destWidth: l,
                                        destHeight: r,
                                        canvasId: "l-clipper",
                                        fileType: "png",
                                        quality: f,
                                        success: function(e) {
                                            s.url = e.tempFilePath, t.hideLoading(), i.$emit("success", s);
                                        },
                                        fail: function(t) {
                                            console.error("error", t), i.$emit("fail", t);
                                        }
                                    }, s = {
                                        url: "",
                                        width: o,
                                        height: h
                                    };
                                    t.canvasToTempFilePath(a, i);
                                });
                            };
                            v !== n || p !== e ? (v = n, p = e, o.draw(), setTimeout(function() {
                                w();
                            }, 100)) : w();
                        } else t.showToast({
                            title: "请选择图片",
                            icon: "none"
                        });
                    },
                    cancel: function() {
                        this.$emit("cancel", !1);
                    }
                }
            };
            i.default = o;
        }).call(this, e(1).default);
    },
    112: function(t, i, e) {
        e.r(i);
        var n = e(113), o = e.n(n);
        for (var h in n) "default" !== h && function(t) {
            e.d(i, t, function() {
                return n[t];
            });
        }(h);
        i.default = o.a;
    },
    113: function(t, i, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/lime-clipper/index-create-component", {
    "components/lime-clipper/index-create-component": function(t, i, e) {
        e("1").createComponent(e(104));
    }
}, [ [ "components/lime-clipper/index-create-component" ] ] ]);