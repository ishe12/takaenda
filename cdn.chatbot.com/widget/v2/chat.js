! function(n) {
    var r = {};

    function o(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
    }
    o.m = n, o.c = r, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o(o.s = 57)
}([function(t, e, n) {
    t.exports = n(26)
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return t + e
    }
    n.d(e, "a", function() {
        return a
    }), n.d(e, "b", function() {
        return s
    }), n.d(e, "c", function() {
        return c
    }), n.d(e, "d", function() {
        return u
    }), n.d(e, "e", function() {
        return i
    }), n.d(e, "f", function() {
        return l
    }), n.d(e, "g", function() {
        return f
    }), n.d(e, "h", function() {
        return d
    }), n.d(e, "i", function() {
        return p
    }), n.d(e, "j", function() {
        return h
    }), n.d(e, "k", function() {
        return v
    }), n.d(e, "l", function() {
        return m
    });
    var o = {}.hasOwnProperty;

    function i(t, e) {
        return o.call(e, t)
    }
    Array.isArray;

    function a(t, e) {
        for (var n = 0; n < e.length; n++)
            if (t(e[n])) return n;
        return -1
    }

    function s(e, n) {
        return Object.keys(n).forEach(function(t) {
            e(n[t], t)
        })
    }

    function c(t) {
        return t.reduce(function(t, e) {
            var n = e[0],
                r = e[1];
            return t[n] = r, t
        }, {})
    }

    function u() {
        return Math.random().toString(36).substring(2)
    }

    function l(n, r) {
        return Object.keys(r).reduce(function(t, e) {
            return t[e] = n(r[e], e), t
        }, {})
    }

    function f() {}

    function d(t) {
        var e, n = !1;
        return function() {
            return n ? e : (n = !0, e = t.apply(void 0, arguments))
        }
    }

    function p(n, r) {
        return Object.keys(r).reduce(function(t, e) {
            return t[n(r[e]) ? 0 : 1][e] = r[e], t
        }, [{}, {}])
    }

    function h(t, n) {
        return t.reduce(function(t, e) {
            return t[e] = n[e], t
        }, {})
    }

    function v(t) {
        return t.reduce(r, 0)
    }
    var m = function(e) {
        return Object.keys(e).map(function(t) {
            return [t, e[t]]
        })
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return a
    }), n.d(e, "c", function() {
        return s
    }), n.d(e, "a", function() {
        return c
    });
    var r = n(12),
        o = "object" === ("undefined" == typeof console ? "undefined" : n.n(r)()(console)),
        i = function(t) {
            return "[chatbot.com] - %s ".replace("%s", t)
        },
        a = function(t) {
            var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            return o && console.error(e ? i(t) : t), !1
        },
        s = function(t) {
            return o && console.warn(i(t)), !1
        },
        c = function(t) {
            throw i(t)
        }
}, function(t, A, N) {
    "use strict";
    (function(t) {
        N.d(A, "b", function() {
            return w
        }), N.d(A, "c", function() {
            return b
        }), N.d(A, "d", function() {
            return _
        }), N.d(A, "e", function() {
            return h
        });
        var u = ("undefined" != typeof window ? window : void 0 !== t ? t : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__;

        function p(e, n) {
            if (void 0 === n && (n = []), null === e || "object" != typeof e) return e;
            var t, r = (t = function(t) {
                return t.original === e
            }, n.filter(t)[0]);
            if (r) return r.copy;
            var o = Array.isArray(e) ? [] : {};
            return n.push({
                original: e,
                copy: o
            }), Object.keys(e).forEach(function(t) {
                o[t] = p(e[t], n)
            }), o
        }

        function s(e, n) {
            Object.keys(e).forEach(function(t) {
                return n(e[t], t)
            })
        }

        function r(t) {
            return null !== t && "object" == typeof t
        }
        var i = function(t, e) {
                this.runtime = e, this._children = Object.create(null);
                var n = (this._rawModule = t).state;
                this.state = ("function" == typeof n ? n() : n) || {}
            },
            e = {
                namespaced: {
                    configurable: !0
                }
            };
        e.namespaced.get = function() {
            return !!this._rawModule.namespaced
        }, i.prototype.addChild = function(t, e) {
            this._children[t] = e
        }, i.prototype.removeChild = function(t) {
            delete this._children[t]
        }, i.prototype.getChild = function(t) {
            return this._children[t]
        }, i.prototype.hasChild = function(t) {
            return t in this._children
        }, i.prototype.update = function(t) {
            this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters)
        }, i.prototype.forEachChild = function(t) {
            s(this._children, t)
        }, i.prototype.forEachGetter = function(t) {
            this._rawModule.getters && s(this._rawModule.getters, t)
        }, i.prototype.forEachAction = function(t) {
            this._rawModule.actions && s(this._rawModule.actions, t)
        }, i.prototype.forEachMutation = function(t) {
            this._rawModule.mutations && s(this._rawModule.mutations, t)
        }, Object.defineProperties(i.prototype, e);
        var l = function(t) {
            this.register([], t, !1)
        };
        l.prototype.get = function(t) {
            return t.reduce(function(t, e) {
                return t.getChild(e)
            }, this.root)
        }, l.prototype.getNamespace = function(t) {
            var n = this.root;
            return t.reduce(function(t, e) {
                return t + ((n = n.getChild(e)).namespaced ? e + "/" : "")
            }, "")
        }, l.prototype.update = function(t) {
            ! function t(e, n, r) {
                0;
                n.update(r);
                if (r.modules)
                    for (var o in r.modules) {
                        if (!n.getChild(o)) return void 0;
                        t(e.concat(o), n.getChild(o), r.modules[o])
                    }
            }([], this.root, t)
        }, l.prototype.register = function(n, t, r) {
            var o = this;
            void 0 === r && (r = !0);
            var e = new i(t, r);
            0 === n.length ? this.root = e : this.get(n.slice(0, -1)).addChild(n[n.length - 1], e);
            t.modules && s(t.modules, function(t, e) {
                o.register(n.concat(e), t, r)
            })
        }, l.prototype.unregister = function(t) {
            var e = this.get(t.slice(0, -1)),
                n = t[t.length - 1],
                r = e.getChild(n);
            r && r.runtime && e.removeChild(n)
        }, l.prototype.isRegistered = function(t) {
            var e = this.get(t.slice(0, -1)),
                n = t[t.length - 1];
            return e.hasChild(n)
        };
        var v;
        var n = function(t) {
                var e = this;
                void 0 === t && (t = {}), !v && "undefined" != typeof window && window.Vue && d(window.Vue);
                var n = t.plugins;
                void 0 === n && (n = []);
                var r = t.strict;
                void 0 === r && (r = !1), this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new l(t), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new v, this._makeLocalGettersCache = Object.create(null);
                var o = this,
                    i = this.dispatch,
                    a = this.commit;
                this.dispatch = function(t, e) {
                    return i.call(o, t, e)
                }, this.commit = function(t, e, n) {
                    return a.call(o, t, e, n)
                }, this.strict = r;
                var s, c = this._modules.root.state;
                m(this, c, [], this._modules.root), f(this, c), n.forEach(function(t) {
                    return t(e)
                }), (void 0 !== t.devtools ? t.devtools : v.config.devtools) && (s = this, u && ((s._devtoolHook = u).emit("vuex:init", s), u.on("vuex:travel-to-state", function(t) {
                    s.replaceState(t)
                }), s.subscribe(function(t, e) {
                    u.emit("vuex:mutation", t, e)
                }, {
                    prepend: !0
                }), s.subscribeAction(function(t, e) {
                    u.emit("vuex:action", t, e)
                }, {
                    prepend: !0
                })))
            },
            o = {
                state: {
                    configurable: !0
                }
            };

        function a(e, n, t) {
            return n.indexOf(e) < 0 && (t && t.prepend ? n.unshift(e) : n.push(e)),
                function() {
                    var t = n.indexOf(e); - 1 < t && n.splice(t, 1)
                }
        }

        function c(t, e) {
            t._actions = Object.create(null), t._mutations = Object.create(null), t._wrappedGetters = Object.create(null), t._modulesNamespaceMap = Object.create(null);
            var n = t.state;
            m(t, n, [], t._modules.root, !0), f(t, n, e)
        }

        function f(o, t, e) {
            var n = o._vm;
            o.getters = {}, o._makeLocalGettersCache = Object.create(null);
            var r = o._wrappedGetters,
                i = {};
            s(r, function(t, e) {
                var n, r;
                i[e] = (n = t, r = o, function() {
                    return n(r)
                }), Object.defineProperty(o.getters, e, {
                    get: function() {
                        return o._vm[e]
                    },
                    enumerable: !0
                })
            });
            var a = v.config.silent;
            v.config.silent = !0, o._vm = new v({
                data: {
                    $$state: t
                },
                computed: i
            }), v.config.silent = a, o.strict && o._vm.$watch(function() {
                return this._data.$$state
            }, function() {}, {
                deep: !0,
                sync: !0
            }), n && (e && o._withCommit(function() {
                n._data.$$state = null
            }), v.nextTick(function() {
                return n.$destroy()
            }))
        }

        function m(c, n, r, t, o) {
            var e = !r.length,
                u = c._modules.getNamespace(r);
            if (t.namespaced && (c._modulesNamespaceMap[u], c._modulesNamespaceMap[u] = t), !e && !o) {
                var i = g(n, r.slice(0, -1)),
                    a = r[r.length - 1];
                c._withCommit(function() {
                    v.set(i, a, t.state)
                })
            }
            var s, l, f, d, p, h = t.context = (s = c, f = r, p = {
                dispatch: (d = "" === (l = u)) ? s.dispatch : function(t, e, n) {
                    var r = y(t, e, n),
                        o = r.payload,
                        i = r.options,
                        a = r.type;
                    return i && i.root || (a = l + a), s.dispatch(a, o)
                },
                commit: d ? s.commit : function(t, e, n) {
                    var r = y(t, e, n),
                        o = r.payload,
                        i = r.options,
                        a = r.type;
                    i && i.root || (a = l + a), s.commit(a, o, i)
                }
            }, Object.defineProperties(p, {
                getters: {
                    get: d ? function() {
                        return s.getters
                    } : function() {
                        return function(n, r) {
                            if (!n._makeLocalGettersCache[r]) {
                                var o = {},
                                    i = r.length;
                                Object.keys(n.getters).forEach(function(t) {
                                    if (t.slice(0, i) === r) {
                                        var e = t.slice(i);
                                        Object.defineProperty(o, e, {
                                            get: function() {
                                                return n.getters[t]
                                            },
                                            enumerable: !0
                                        })
                                    }
                                }), n._makeLocalGettersCache[r] = o
                            }
                            return n._makeLocalGettersCache[r]
                        }(s, l)
                    }
                },
                state: {
                    get: function() {
                        return g(s.state, f)
                    }
                }
            }), p);
            t.forEachMutation(function(t, e) {
                var n, r, o, i;
                r = u + e, o = t, i = h, ((n = c)._mutations[r] || (n._mutations[r] = [])).push(function(t) {
                    o.call(n, i.state, t)
                })
            }), t.forEachAction(function(t, e) {
                var r, n, o, i, a = t.root ? e : u + e,
                    s = t.handler || t;
                n = a, o = s, i = h, ((r = c)._actions[n] || (r._actions[n] = [])).push(function(t) {
                    var e, n = o.call(r, {
                        dispatch: i.dispatch,
                        commit: i.commit,
                        getters: i.getters,
                        state: i.state,
                        rootGetters: r.getters,
                        rootState: r.state
                    }, t);
                    return (e = n) && "function" == typeof e.then || (n = Promise.resolve(n)), r._devtoolHook ? n.catch(function(t) {
                        throw r._devtoolHook.emit("vuex:error", t), t
                    }) : n
                })
            }), t.forEachGetter(function(t, e) {
                ! function(t, e, n, r) {
                    if (t._wrappedGetters[e]) return;
                    t._wrappedGetters[e] = function(t) {
                        return n(r.state, r.getters, t.state, t.getters)
                    }
                }(c, u + e, t, h)
            }), t.forEachChild(function(t, e) {
                m(c, n, r.concat(e), t, o)
            })
        }

        function g(t, e) {
            return e.reduce(function(t, e) {
                return t[e]
            }, t)
        }

        function y(t, e, n) {
            return r(t) && t.type && (n = e, t = (e = t).type), {
                type: t,
                payload: e,
                options: n
            }
        }

        function d(t) {
            v && t === v || function(t) {
                if (2 <= Number(t.version.split(".")[0])) t.mixin({
                    beforeCreate: n
                });
                else {
                    var e = t.prototype._init;
                    t.prototype._init = function(t) {
                        void 0 === t && (t = {}), t.init = t.init ? [n].concat(t.init) : n, e.call(this, t)
                    }
                }

                function n() {
                    var t = this.$options;
                    t.store ? this.$store = "function" == typeof t.store ? t.store() : t.store : t.parent && t.parent.$store && (this.$store = t.parent.$store)
                }
            }(v = t)
        }
        o.state.get = function() {
            return this._vm._data.$$state
        }, o.state.set = function(t) {
            0
        }, n.prototype.commit = function(t, e, n) {
            var r = this,
                o = y(t, e, n),
                i = o.type,
                a = o.payload,
                s = (o.options, {
                    type: i,
                    payload: a
                }),
                c = this._mutations[i];
            c && (this._withCommit(function() {
                c.forEach(function(t) {
                    t(a)
                })
            }), this._subscribers.slice().forEach(function(t) {
                return t(s, r.state)
            }))
        }, n.prototype.dispatch = function(t, e) {
            var n = this,
                r = y(t, e),
                o = r.type,
                i = r.payload,
                a = {
                    type: o,
                    payload: i
                },
                s = this._actions[o];
            if (s) {
                try {
                    this._actionSubscribers.slice().filter(function(t) {
                        return t.before
                    }).forEach(function(t) {
                        return t.before(a, n.state)
                    })
                } catch (t) {
                    0
                }
                var c = 1 < s.length ? Promise.all(s.map(function(t) {
                    return t(i)
                })) : s[0](i);
                return new Promise(function(e, t) {
                    c.then(function(t) {
                        try {
                            n._actionSubscribers.filter(function(t) {
                                return t.after
                            }).forEach(function(t) {
                                return t.after(a, n.state)
                            })
                        } catch (t) {
                            0
                        }
                        e(t)
                    }, function(e) {
                        try {
                            n._actionSubscribers.filter(function(t) {
                                return t.error
                            }).forEach(function(t) {
                                return t.error(a, n.state, e)
                            })
                        } catch (t) {
                            0
                        }
                        t(e)
                    })
                })
            }
        }, n.prototype.subscribe = function(t, e) {
            return a(t, this._subscribers, e)
        }, n.prototype.subscribeAction = function(t, e) {
            return a("function" == typeof t ? {
                before: t
            } : t, this._actionSubscribers, e)
        }, n.prototype.watch = function(t, e, n) {
            var r = this;
            return this._watcherVM.$watch(function() {
                return t(r.state, r.getters)
            }, e, n)
        }, n.prototype.replaceState = function(t) {
            var e = this;
            this._withCommit(function() {
                e._vm._data.$$state = t
            })
        }, n.prototype.registerModule = function(t, e, n) {
            void 0 === n && (n = {}), "string" == typeof t && (t = [t]), this._modules.register(t, e), m(this, this.state, t, this._modules.get(t), n.preserveState), f(this, this.state)
        }, n.prototype.unregisterModule = function(e) {
            var n = this;
            "string" == typeof e && (e = [e]), this._modules.unregister(e), this._withCommit(function() {
                var t = g(n.state, e.slice(0, -1));
                v.delete(t, e[e.length - 1])
            }), c(this)
        }, n.prototype.hasModule = function(t) {
            return "string" == typeof t && (t = [t]), this._modules.isRegistered(t)
        }, n.prototype.hotUpdate = function(t) {
            this._modules.update(t), c(this, !0)
        }, n.prototype._withCommit = function(t) {
            var e = this._committing;
            this._committing = !0, t(), this._committing = e
        }, Object.defineProperties(n.prototype, o);
        var h = O(function(o, t) {
                var n = {};
                return x(t).forEach(function(t) {
                    var e = t.key,
                        r = t.val;
                    n[e] = function() {
                        var t = this.$store.state,
                            e = this.$store.getters;
                        if (o) {
                            var n = $(this.$store, "mapState", o);
                            if (!n) return;
                            t = n.context.state, e = n.context.getters
                        }
                        return "function" == typeof r ? r.call(this, t, e) : t[r]
                    }, n[e].vuex = !0
                }), n
            }),
            _ = O(function(i, t) {
                var n = {};
                return x(t).forEach(function(t) {
                    var e = t.key,
                        o = t.val;
                    n[e] = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = this.$store.commit;
                        if (i) {
                            var r = $(this.$store, "mapMutations", i);
                            if (!r) return;
                            n = r.context.commit
                        }
                        return "function" == typeof o ? o.apply(this, [n].concat(t)) : n.apply(this.$store, [o].concat(t))
                    }
                }), n
            }),
            b = O(function(r, t) {
                var o = {};
                return x(t).forEach(function(t) {
                    var e = t.key,
                        n = t.val;
                    n = r + n, o[e] = function() {
                        if (!r || $(this.$store, "mapGetters", r)) return this.$store.getters[n]
                    }, o[e].vuex = !0
                }), o
            }),
            w = O(function(i, t) {
                var n = {};
                return x(t).forEach(function(t) {
                    var e = t.key,
                        o = t.val;
                    n[e] = function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var n = this.$store.dispatch;
                        if (i) {
                            var r = $(this.$store, "mapActions", i);
                            if (!r) return;
                            n = r.context.dispatch
                        }
                        return "function" == typeof o ? o.apply(this, [n].concat(t)) : n.apply(this.$store, [o].concat(t))
                    }
                }), n
            });

        function x(e) {
            return t = e, Array.isArray(t) || r(t) ? Array.isArray(e) ? e.map(function(t) {
                return {
                    key: t,
                    val: t
                }
            }) : Object.keys(e).map(function(t) {
                return {
                    key: t,
                    val: e[t]
                }
            }) : [];
            var t
        }

        function O(n) {
            return function(t, e) {
                return "string" != typeof t ? (e = t, t = "") : "/" !== t.charAt(t.length - 1) && (t += "/"), n(t, e)
            }
        }

        function $(t, e, n) {
            return t._modulesNamespaceMap[n]
        }

        function k(e, n, t) {
            var r = t ? e.groupCollapsed : e.group;
            try {
                r.call(e, n)
            } catch (t) {
                e.log(n)
            }
        }

        function S(e) {
            try {
                e.groupEnd()
            } catch (t) {
                e.log("—— log end ——")
            }
        }

        function T() {
            var t = new Date;
            return " @ " + C(t.getHours(), 2) + ":" + C(t.getMinutes(), 2) + ":" + C(t.getSeconds(), 2) + "." + C(t.getMilliseconds(), 3)
        }

        function C(t, e) {
            return n = "0", r = e - t.toString().length, new Array(r + 1).join(n) + t;
            var n, r
        }
        var E = {
            Store: n,
            install: d,
            version: "3.5.1",
            mapState: h,
            mapMutations: _,
            mapGetters: b,
            mapActions: w,
            createNamespacedHelpers: function(t) {
                return {
                    mapState: h.bind(null, t),
                    mapGetters: b.bind(null, t),
                    mapMutations: _.bind(null, t),
                    mapActions: w.bind(null, t)
                }
            },
            createLogger: function(t) {
                void 0 === t && (t = {});
                var s = t.collapsed;
                void 0 === s && (s = !0);
                var c = t.filter;
                void 0 === c && (c = function(t, e, n) {
                    return !0
                });
                var u = t.transformer;
                void 0 === u && (u = function(t) {
                    return t
                });
                var l = t.mutationTransformer;
                void 0 === l && (l = function(t) {
                    return t
                });
                var i = t.actionFilter;
                void 0 === i && (i = function(t, e) {
                    return !0
                });
                var f = t.actionTransformer;
                void 0 === f && (f = function(t) {
                    return t
                });
                var e = t.logMutations;
                void 0 === e && (e = !0);
                var n = t.logActions;
                void 0 === n && (n = !0);
                var d = t.logger;
                return void 0 === d && (d = console),
                    function(t) {
                        var a = p(t.state);
                        void 0 !== d && (e && t.subscribe(function(t, e) {
                            var n = p(e);
                            if (c(t, a, n)) {
                                var r = T(),
                                    o = l(t),
                                    i = "mutation " + t.type + r;
                                k(d, i, s), d.log("%c prev state", "color: #9E9E9E; font-weight: bold", u(a)), d.log("%c mutation", "color: #03A9F4; font-weight: bold", o), d.log("%c next state", "color: #4CAF50; font-weight: bold", u(n)), S(d)
                            }
                            a = n
                        }), n && t.subscribeAction(function(t, e) {
                            if (i(t, e)) {
                                var n = T(),
                                    r = f(t),
                                    o = "action " + t.type + n;
                                k(d, o, s), d.log("%c action", "color: #03A9F4; font-weight: bold", r), S(d)
                            }
                        }))
                    }
            }
        };
        A.a = E
    }).call(this, N(22))
}, function(t, e) {
    function c(t, e, n, r, o, i, a) {
        try {
            var s = t[i](a),
                c = s.value
        } catch (t) {
            return void n(t)
        }
        s.done ? e(c) : Promise.resolve(c).then(r, o)
    }
    t.exports = function(s) {
        return function() {
            var t = this,
                a = arguments;
            return new Promise(function(e, n) {
                var r = s.apply(t, a);

                function o(t) {
                    c(r, e, n, o, i, "next", t)
                }

                function i(t) {
                    c(r, e, n, o, i, "throw", t)
                }
                o(void 0)
            })
        }
    }
}, function(t, e, n) {
    var o = n(2);
    t.exports = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), r.forEach(function(t) {
                o(e, t, n[t])
            })
        }
        return e
    }
}, function(t, Wo, e) {
    "use strict";
    (function(t, e) {
        var g = Object.freeze({});

        function I(t) {
            return null == t
        }

        function B(t) {
            return null != t
        }

        function C(t) {
            return !0 === t
        }

        function E(t) {
            return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t
        }

        function M(t) {
            return null !== t && "object" == typeof t
        }
        var n = Object.prototype.toString;

        function c(t) {
            return "[object Object]" === n.call(t)
        }

        function r(t) {
            return "[object RegExp]" === n.call(t)
        }

        function o(t) {
            var e = parseFloat(String(t));
            return 0 <= e && Math.floor(e) === e && isFinite(t)
        }

        function y(t) {
            return B(t) && "function" == typeof t.then && "function" == typeof t.catch
        }

        function i(t) {
            return null == t ? "" : Array.isArray(t) || c(t) && t.toString === n ? JSON.stringify(t, null, 2) : String(t)
        }

        function R(t) {
            var e = parseFloat(t);
            return isNaN(e) ? t : e
        }

        function a(t, e) {
            for (var n = Object.create(null), r = t.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
            return e ? function(t) {
                return n[t.toLowerCase()]
            } : function(t) {
                return n[t]
            }
        }
        a("slot,component", !0);
        var l = a("key,ref,slot,slot-scope,is");

        function _(t, e) {
            if (t.length) {
                var n = t.indexOf(e);
                if (-1 < n) return t.splice(n, 1)
            }
        }
        var s = Object.prototype.hasOwnProperty;

        function f(t, e) {
            return s.call(t, e)
        }

        function u(e) {
            var n = Object.create(null);
            return function(t) {
                return n[t] || (n[t] = e(t))
            }
        }
        var d = /-(\w)/g,
            p = u(function(t) {
                return t.replace(d, function(t, e) {
                    return e ? e.toUpperCase() : ""
                })
            }),
            h = u(function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }),
            v = /\B([A-Z])/g,
            b = u(function(t) {
                return t.replace(v, "-$1").toLowerCase()
            });
        var m = Function.prototype.bind ? function(t, e) {
            return t.bind(e)
        } : function(n, r) {
            function t(t) {
                var e = arguments.length;
                return e ? 1 < e ? n.apply(r, arguments) : n.call(r, t) : n.call(r)
            }
            return t._length = n.length, t
        };

        function w(t, e) {
            e = e || 0;
            for (var n = t.length - e, r = new Array(n); n--;) r[n] = t[n + e];
            return r
        }

        function x(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function O(t) {
            for (var e = {}, n = 0; n < t.length; n++) t[n] && x(e, t[n]);
            return e
        }

        function $(t, e, n) {}
        var k = function(t, e, n) {
                return !1
            },
            S = function(t) {
                return t
            };

        function T(e, n) {
            if (e === n) return !0;
            var t = M(e),
                r = M(n);
            if (!t || !r) return !t && !r && String(e) === String(n);
            try {
                var o = Array.isArray(e),
                    i = Array.isArray(n);
                if (o && i) return e.length === n.length && e.every(function(t, e) {
                    return T(t, n[e])
                });
                if (e instanceof Date && n instanceof Date) return e.getTime() === n.getTime();
                if (o || i) return !1;
                var a = Object.keys(e),
                    s = Object.keys(n);
                return a.length === s.length && a.every(function(t) {
                    return T(e[t], n[t])
                })
            } catch (t) {
                return !1
            }
        }

        function A(t, e) {
            for (var n = 0; n < t.length; n++)
                if (T(t[n], e)) return n;
            return -1
        }

        function U(t) {
            var e = !1;
            return function() {
                e || (e = !0, t.apply(this, arguments))
            }
        }
        var N = "data-server-rendered",
            j = ["component", "directive", "filter"],
            P = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
            L = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: k,
                isReservedAttr: k,
                isUnknownElement: k,
                getTagNamespace: $,
                parsePlatformTagName: S,
                mustUseProp: k,
                async: !0,
                _lifecycleHooks: P
            },
            D = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

        function q(t, e, n, r) {
            Object.defineProperty(t, e, {
                value: n,
                enumerable: !!r,
                writable: !0,
                configurable: !0
            })
        }
        var z = new RegExp("[^" + D.source + ".$_\\d]");
        var F, G = "__proto__" in {},
            H = "undefined" != typeof window,
            W = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
            V = W && WXEnvironment.platform.toLowerCase(),
            K = H && window.navigator.userAgent.toLowerCase(),
            Y = K && /msie|trident/.test(K),
            X = K && 0 < K.indexOf("msie 9.0"),
            Z = K && 0 < K.indexOf("edge/"),
            J = (K && K.indexOf("android"), K && /iphone|ipad|ipod|ios/.test(K) || "ios" === V),
            Q = (K && /chrome\/\d+/.test(K), K && /phantomjs/.test(K), K && K.match(/firefox\/(\d+)/)),
            tt = {}.watch,
            et = !1;
        if (H) try {
            var nt = {};
            Object.defineProperty(nt, "passive", {
                get: function() {
                    et = !0
                }
            }), window.addEventListener("test-passive", null, nt)
        } catch (t) {}
        var rt = function() {
                return void 0 === F && (F = !H && !W && void 0 !== t && (t.process && "server" === t.process.env.VUE_ENV)), F
            },
            ot = H && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

        function it(t) {
            return "function" == typeof t && /native code/.test(t.toString())
        }
        var at, st = "undefined" != typeof Symbol && it(Symbol) && "undefined" != typeof Reflect && it(Reflect.ownKeys);
        at = "undefined" != typeof Set && it(Set) ? Set : function() {
            function t() {
                this.set = Object.create(null)
            }
            return t.prototype.has = function(t) {
                return !0 === this.set[t]
            }, t.prototype.add = function(t) {
                this.set[t] = !0
            }, t.prototype.clear = function() {
                this.set = Object.create(null)
            }, t
        }();
        var ct = $,
            ut = 0,
            lt = function() {
                this.id = ut++, this.subs = []
            };
        lt.prototype.addSub = function(t) {
            this.subs.push(t)
        }, lt.prototype.removeSub = function(t) {
            _(this.subs, t)
        }, lt.prototype.depend = function() {
            lt.target && lt.target.addDep(this)
        }, lt.prototype.notify = function() {
            var t = this.subs.slice();
            for (var e = 0, n = t.length; e < n; e++) t[e].update()
        }, lt.target = null;
        var ft = [];

        function dt(t) {
            ft.push(t), lt.target = t
        }

        function pt() {
            ft.pop(), lt.target = ft[ft.length - 1]
        }
        var ht = function(t, e, n, r, o, i, a, s) {
                this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = o, this.ns = void 0, this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
            },
            vt = {
                child: {
                    configurable: !0
                }
            };
        vt.child.get = function() {
            return this.componentInstance
        }, Object.defineProperties(ht.prototype, vt);
        var mt = function(t) {
            void 0 === t && (t = "");
            var e = new ht;
            return e.text = t, e.isComment = !0, e
        };

        function gt(t) {
            return new ht(void 0, void 0, void 0, String(t))
        }

        function yt(t) {
            var e = new ht(t.tag, t.data, t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
            return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e
        }
        var _t = Array.prototype,
            bt = Object.create(_t);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(i) {
            var a = _t[i];
            q(bt, i, function() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n, r = a.apply(this, t),
                    o = this.__ob__;
                switch (i) {
                    case "push":
                    case "unshift":
                        n = t;
                        break;
                    case "splice":
                        n = t.slice(2)
                }
                return n && o.observeArray(n), o.dep.notify(), r
            })
        });
        var wt = Object.getOwnPropertyNames(bt),
            xt = !0;

        function Ot(t) {
            xt = t
        }
        var $t = function(t) {
            var e;
            this.value = t, this.dep = new lt, this.vmCount = 0, q(t, "__ob__", this), Array.isArray(t) ? (G ? (e = bt, t.__proto__ = e) : function(t, e, n) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    q(t, i, e[i])
                }
            }(t, bt, wt), this.observeArray(t)) : this.walk(t)
        };

        function kt(t, e) {
            var n;
            if (M(t) && !(t instanceof ht)) return f(t, "__ob__") && t.__ob__ instanceof $t ? n = t.__ob__ : xt && !rt() && (Array.isArray(t) || c(t)) && Object.isExtensible(t) && !t._isVue && (n = new $t(t)), e && n && n.vmCount++, n
        }

        function St(n, t, r, e, o) {
            var i = new lt,
                a = Object.getOwnPropertyDescriptor(n, t);
            if (!a || !1 !== a.configurable) {
                var s = a && a.get,
                    c = a && a.set;
                s && !c || 2 !== arguments.length || (r = n[t]);
                var u = !o && kt(r);
                Object.defineProperty(n, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var t = s ? s.call(n) : r;
                        return lt.target && (i.depend(), u && (u.dep.depend(), Array.isArray(t) && function t(e) {
                            for (var n = void 0, r = 0, o = e.length; r < o; r++)(n = e[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && t(n)
                        }(t))), t
                    },
                    set: function(t) {
                        var e = s ? s.call(n) : r;
                        t === e || t != t && e != e || s && !c || (c ? c.call(n, t) : r = t, u = !o && kt(t), i.notify())
                    }
                })
            }
        }

        function Tt(t, e, n) {
            if (Array.isArray(t) && o(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;
            if (e in t && !(e in Object.prototype)) return t[e] = n;
            var r = t.__ob__;
            return t._isVue || r && r.vmCount ? n : r ? (St(r.value, e, n), r.dep.notify(), n) : t[e] = n
        }

        function Ct(t, e) {
            if (Array.isArray(t) && o(e)) t.splice(e, 1);
            else {
                var n = t.__ob__;
                t._isVue || n && n.vmCount || f(t, e) && (delete t[e], n && n.dep.notify())
            }
        }
        $t.prototype.walk = function(t) {
            for (var e = Object.keys(t), n = 0; n < e.length; n++) St(t, e[n])
        }, $t.prototype.observeArray = function(t) {
            for (var e = 0, n = t.length; e < n; e++) kt(t[e])
        };
        var Et = L.optionMergeStrategies;

        function At(t, e) {
            if (!e) return t;
            for (var n, r, o, i = st ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < i.length; a++) "__ob__" !== (n = i[a]) && (r = t[n], o = e[n], f(t, n) ? r !== o && c(r) && c(o) && At(r, o) : Tt(t, n, o));
            return t
        }

        function Nt(n, r, o) {
            return o ? function() {
                var t = "function" == typeof r ? r.call(o, o) : r,
                    e = "function" == typeof n ? n.call(o, o) : n;
                return t ? At(t, e) : e
            } : r ? n ? function() {
                return At("function" == typeof r ? r.call(this, this) : r, "function" == typeof n ? n.call(this, this) : n)
            } : r : n
        }

        function jt(t, e) {
            var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
            return n ? function(t) {
                for (var e = [], n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]);
                return e
            }(n) : n
        }

        function Pt(t, e, n, r) {
            var o = Object.create(t || null);
            return e ? x(o, e) : o
        }
        Et.data = function(t, e, n) {
            return n ? Nt(t, e, n) : e && "function" != typeof e ? t : Nt(t, e)
        }, P.forEach(function(t) {
            Et[t] = jt
        }), j.forEach(function(t) {
            Et[t + "s"] = Pt
        }), Et.watch = function(t, e, n, r) {
            if (t === tt && (t = void 0), e === tt && (e = void 0), !e) return Object.create(t || null);
            if (!t) return e;
            var o = {};
            for (var i in x(o, t), e) {
                var a = o[i],
                    s = e[i];
                a && !Array.isArray(a) && (a = [a]), o[i] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
            }
            return o
        }, Et.props = Et.methods = Et.inject = Et.computed = function(t, e, n, r) {
            if (!t) return e;
            var o = Object.create(null);
            return x(o, t), e && x(o, e), o
        }, Et.provide = Nt;
        var Lt = function(t, e) {
            return void 0 === e ? t : e
        };

        function It(n, r, o) {
            if ("function" == typeof r && (r = r.options), function(t, e) {
                    var n = t.props;
                    if (n) {
                        var r, o, i = {};
                        if (Array.isArray(n))
                            for (r = n.length; r--;) "string" == typeof(o = n[r]) && (i[p(o)] = {
                                type: null
                            });
                        else if (c(n))
                            for (var a in n) o = n[a], i[p(a)] = c(o) ? o : {
                                type: o
                            };
                        t.props = i
                    }
                }(r), function(t, e) {
                    var n = t.inject;
                    if (n) {
                        var r = t.inject = {};
                        if (Array.isArray(n))
                            for (var o = 0; o < n.length; o++) r[n[o]] = {
                                from: n[o]
                            };
                        else if (c(n))
                            for (var i in n) {
                                var a = n[i];
                                r[i] = c(a) ? x({
                                    from: i
                                }, a) : {
                                    from: a
                                }
                            }
                    }
                }(r), function(t) {
                    var e = t.directives;
                    if (e)
                        for (var n in e) {
                            var r = e[n];
                            "function" == typeof r && (e[n] = {
                                bind: r,
                                update: r
                            })
                        }
                }(r), !r._base && (r.extends && (n = It(n, r.extends, o)), r.mixins))
                for (var t = 0, e = r.mixins.length; t < e; t++) n = It(n, r.mixins[t], o);
            var i, a = {};
            for (i in n) s(i);
            for (i in r) f(n, i) || s(i);

            function s(t) {
                var e = Et[t] || Lt;
                a[t] = e(n[t], r[t], o, t)
            }
            return a
        }

        function Bt(t, e, n, r) {
            if ("string" == typeof n) {
                var o = t[e];
                if (f(o, n)) return o[n];
                var i = p(n);
                if (f(o, i)) return o[i];
                var a = h(i);
                return f(o, a) ? o[a] : o[n] || o[i] || o[a]
            }
        }

        function Mt(t, e, n, r) {
            var o = e[t],
                i = !f(n, t),
                a = n[t],
                s = Dt(Boolean, o.type);
            if (-1 < s)
                if (i && !f(o, "default")) a = !1;
                else if ("" === a || a === b(t)) {
                var c = Dt(String, o.type);
                (c < 0 || s < c) && (a = !0)
            }
            if (void 0 === a) {
                a = function(t, e, n) {
                    if (!f(e, "default")) return;
                    var r = e.default;
                    0;
                    if (t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]) return t._props[n];
                    return "function" == typeof r && "Function" !== Rt(e.type) ? r.call(t) : r
                }(r, o, t);
                var u = xt;
                Ot(!0), kt(a), Ot(u)
            }
            return a
        }

        function Rt(t) {
            var e = t && t.toString().match(/^\s*function (\w+)/);
            return e ? e[1] : ""
        }

        function Ut(t, e) {
            return Rt(t) === Rt(e)
        }

        function Dt(t, e) {
            if (!Array.isArray(e)) return Ut(e, t) ? 0 : -1;
            for (var n = 0, r = e.length; n < r; n++)
                if (Ut(e[n], t)) return n;
            return -1
        }

        function qt(t, e, n) {
            dt();
            try {
                if (e)
                    for (var r = e; r = r.$parent;) {
                        var o = r.$options.errorCaptured;
                        if (o)
                            for (var i = 0; i < o.length; i++) try {
                                if (!1 === o[i].call(r, t, e, n)) return
                            } catch (t) {
                                Ft(t, r, "errorCaptured hook")
                            }
                    }
                Ft(t, e, n)
            } finally {
                pt()
            }
        }

        function zt(t, e, n, r, o) {
            var i;
            try {
                (i = n ? t.apply(e, n) : t.call(e)) && !i._isVue && y(i) && !i._handled && (i.catch(function(t) {
                    return qt(t, r, o + " (Promise/async)")
                }), i._handled = !0)
            } catch (t) {
                qt(t, r, o)
            }
            return i
        }

        function Ft(e, t, n) {
            if (L.errorHandler) try {
                return L.errorHandler.call(null, e, t, n)
            } catch (t) {
                t !== e && Gt(t, null, "config.errorHandler")
            }
            Gt(e, t, n)
        }

        function Gt(t, e, n) {
            if (!H && !W || "undefined" == typeof console) throw t;
            console.error(t)
        }
        var Ht, Wt = !1,
            Vt = [],
            Kt = !1;

        function Yt() {
            Kt = !1;
            for (var t = Vt.slice(0), e = Vt.length = 0; e < t.length; e++) t[e]()
        }
        if ("undefined" != typeof Promise && it(Promise)) {
            var Xt = Promise.resolve();
            Ht = function() {
                Xt.then(Yt), J && setTimeout($)
            }, Wt = !0
        } else if (Y || "undefined" == typeof MutationObserver || !it(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Ht = void 0 !== e && it(e) ? function() {
            e(Yt)
        } : function() {
            setTimeout(Yt, 0)
        };
        else {
            var Zt = 1,
                Jt = new MutationObserver(Yt),
                Qt = document.createTextNode(String(Zt));
            Jt.observe(Qt, {
                characterData: !0
            }), Ht = function() {
                Zt = (Zt + 1) % 2, Qt.data = String(Zt)
            }, Wt = !0
        }

        function te(t, e) {
            var n;
            if (Vt.push(function() {
                    if (t) try {
                        t.call(e)
                    } catch (t) {
                        qt(t, e, "nextTick")
                    } else n && n(e)
                }), Kt || (Kt = !0, Ht()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
                n = t
            })
        }
        var ee = new at;

        function ne(t) {
            ! function t(e, n) {
                var r, o;
                var i = Array.isArray(e);
                if (!i && !M(e) || Object.isFrozen(e) || e instanceof ht) return;
                if (e.__ob__) {
                    var a = e.__ob__.dep.id;
                    if (n.has(a)) return;
                    n.add(a)
                }
                if (i)
                    for (r = e.length; r--;) t(e[r], n);
                else
                    for (o = Object.keys(e), r = o.length; r--;) t(e[o[r]], n)
            }(t, ee), ee.clear()
        }
        var re = u(function(t) {
            var e = "&" === t.charAt(0),
                n = "~" === (t = e ? t.slice(1) : t).charAt(0),
                r = "!" === (t = n ? t.slice(1) : t).charAt(0);
            return {
                name: t = r ? t.slice(1) : t,
                once: n,
                capture: r,
                passive: e
            }
        });

        function oe(t, o) {
            function i() {
                var t = arguments,
                    e = i.fns;
                if (!Array.isArray(e)) return zt(e, null, arguments, o, "v-on handler");
                for (var n = e.slice(), r = 0; r < n.length; r++) zt(n[r], null, t, o, "v-on handler")
            }
            return i.fns = t, i
        }

        function ie(t, e, n, r, o, i) {
            var a, s, c, u;
            for (a in t) s = t[a], c = e[a], u = re(a), I(s) || (I(c) ? (I(s.fns) && (s = t[a] = oe(s, i)), C(u.once) && (s = t[a] = o(u.name, s, u.capture)), n(u.name, s, u.capture, u.passive, u.params)) : s !== c && (c.fns = s, t[a] = c));
            for (a in e) I(t[a]) && r((u = re(a)).name, e[a], u.capture)
        }

        function ae(t, e, n) {
            var r;
            t instanceof ht && (t = t.data.hook || (t.data.hook = {}));
            var o = t[e];

            function i() {
                n.apply(this, arguments), _(r.fns, i)
            }
            I(o) ? r = oe([i]) : B(o.fns) && C(o.merged) ? (r = o).fns.push(i) : r = oe([o, i]), r.merged = !0, t[e] = r
        }

        function se(t, e, n, r, o) {
            if (B(e)) {
                if (f(e, n)) return t[n] = e[n], o || delete e[n], !0;
                if (f(e, r)) return t[n] = e[r], o || delete e[r], !0
            }
            return !1
        }

        function ce(t) {
            return E(t) ? [gt(t)] : Array.isArray(t) ? function t(e, n) {
                var r = [];
                var o, i, a, s;
                for (o = 0; o < e.length; o++) I(i = e[o]) || "boolean" == typeof i || (a = r.length - 1, s = r[a], Array.isArray(i) ? 0 < i.length && (ue((i = t(i, (n || "") + "_" + o))[0]) && ue(s) && (r[a] = gt(s.text + i[0].text), i.shift()), r.push.apply(r, i)) : E(i) ? ue(s) ? r[a] = gt(s.text + i) : "" !== i && r.push(gt(i)) : ue(i) && ue(s) ? r[a] = gt(s.text + i.text) : (C(e._isVList) && B(i.tag) && I(i.key) && B(n) && (i.key = "__vlist" + n + "_" + o + "__"), r.push(i)));
                return r
            }(t) : void 0
        }

        function ue(t) {
            return B(t) && B(t.text) && !1 === t.isComment
        }

        function le(t, e) {
            if (t) {
                for (var n = Object.create(null), r = st ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < r.length; o++) {
                    var i = r[o];
                    if ("__ob__" !== i) {
                        for (var a = t[i].from, s = e; s;) {
                            if (s._provided && f(s._provided, a)) {
                                n[i] = s._provided[a];
                                break
                            }
                            s = s.$parent
                        }
                        if (!s)
                            if ("default" in t[i]) {
                                var c = t[i].default;
                                n[i] = "function" == typeof c ? c.call(e) : c
                            } else 0
                    }
                }
                return n
            }
        }

        function fe(t, e) {
            if (!t || !t.length) return {};
            for (var n = {}, r = 0, o = t.length; r < o; r++) {
                var i = t[r],
                    a = i.data;
                if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== e && i.fnContext !== e || !a || null == a.slot)(n.default || (n.default = [])).push(i);
                else {
                    var s = a.slot,
                        c = n[s] || (n[s] = []);
                    "template" === i.tag ? c.push.apply(c, i.children || []) : c.push(i)
                }
            }
            for (var u in n) n[u].every(de) && delete n[u];
            return n
        }

        function de(t) {
            return t.isComment && !t.asyncFactory || " " === t.text
        }

        function pe(t, e, n) {
            var r, o = 0 < Object.keys(e).length,
                i = t ? !!t.$stable : !o,
                a = t && t.$key;
            if (t) {
                if (t._normalized) return t._normalized;
                if (i && n && n !== g && a === n.$key && !o && !n.$hasNormal) return n;
                for (var s in r = {}, t) t[s] && "$" !== s[0] && (r[s] = he(e, s, t[s]))
            } else r = {};
            for (var c in e) c in r || (r[c] = ve(e, c));
            return t && Object.isExtensible(t) && (t._normalized = r), q(r, "$stable", i), q(r, "$key", a), q(r, "$hasNormal", o), r
        }

        function he(t, e, n) {
            var r = function() {
                var t = arguments.length ? n.apply(null, arguments) : n({});
                return (t = t && "object" == typeof t && !Array.isArray(t) ? [t] : ce(t)) && (0 === t.length || 1 === t.length && t[0].isComment) ? void 0 : t
            };
            return n.proxy && Object.defineProperty(t, e, {
                get: r,
                enumerable: !0,
                configurable: !0
            }), r
        }

        function ve(t, e) {
            return function() {
                return t[e]
            }
        }

        function me(t, e) {
            var n, r, o, i, a;
            if (Array.isArray(t) || "string" == typeof t)
                for (n = new Array(t.length), r = 0, o = t.length; r < o; r++) n[r] = e(t[r], r);
            else if ("number" == typeof t)
                for (n = new Array(t), r = 0; r < t; r++) n[r] = e(r + 1, r);
            else if (M(t))
                if (st && t[Symbol.iterator]) {
                    n = [];
                    for (var s = t[Symbol.iterator](), c = s.next(); !c.done;) n.push(e(c.value, n.length)), c = s.next()
                } else
                    for (i = Object.keys(t), n = new Array(i.length), r = 0, o = i.length; r < o; r++) a = i[r], n[r] = e(t[a], a, r);
            return B(n) || (n = []), n._isVList = !0, n
        }

        function ge(t, e, n, r) {
            var o, i = this.$scopedSlots[t];
            o = i ? (n = n || {}, r && (n = x(x({}, r), n)), i(n) || e) : this.$slots[t] || e;
            var a = n && n.slot;
            return a ? this.$createElement("template", {
                slot: a
            }, o) : o
        }

        function ye(t) {
            return Bt(this.$options, "filters", t) || S
        }

        function _e(t, e) {
            return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
        }

        function be(t, e, n, r, o) {
            var i = L.keyCodes[e] || n;
            return o && r && !L.keyCodes[e] ? _e(o, r) : i ? _e(i, t) : r ? b(r) !== e : void 0
        }

        function we(o, i, a, s, c) {
            if (a)
                if (M(a)) {
                    var u;
                    Array.isArray(a) && (a = O(a));
                    var t = function(e) {
                        if ("class" === e || "style" === e || l(e)) u = o;
                        else {
                            var t = o.attrs && o.attrs.type;
                            u = s || L.mustUseProp(i, t, e) ? o.domProps || (o.domProps = {}) : o.attrs || (o.attrs = {})
                        }
                        var n = p(e),
                            r = b(e);
                        n in u || r in u || (u[e] = a[e], c && ((o.on || (o.on = {}))["update:" + e] = function(t) {
                            a[e] = t
                        }))
                    };
                    for (var e in a) t(e)
                } else;
            return o
        }

        function xe(t, e) {
            var n = this._staticTrees || (this._staticTrees = []),
                r = n[t];
            return r && !e || $e(r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), "__static__" + t, !1), r
        }

        function Oe(t, e, n) {
            return $e(t, "__once__" + e + (n ? "_" + n : ""), !0), t
        }

        function $e(t, e, n) {
            if (Array.isArray(t))
                for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && ke(t[r], e + "_" + r, n);
            else ke(t, e, n)
        }

        function ke(t, e, n) {
            t.isStatic = !0, t.key = e, t.isOnce = n
        }

        function Se(t, e) {
            if (e)
                if (c(e)) {
                    var n = t.on = t.on ? x({}, t.on) : {};
                    for (var r in e) {
                        var o = n[r],
                            i = e[r];
                        n[r] = o ? [].concat(o, i) : i
                    }
                } else;
            return t
        }

        function Te(t, e, n, r) {
            e = e || {
                $stable: !n
            };
            for (var o = 0; o < t.length; o++) {
                var i = t[o];
                Array.isArray(i) ? Te(i, e, n) : i && (i.proxy && (i.fn.proxy = !0), e[i.key] = i.fn)
            }
            return r && (e.$key = r), e
        }

        function Ce(t, e) {
            for (var n = 0; n < e.length; n += 2) {
                var r = e[n];
                "string" == typeof r && r && (t[e[n]] = e[n + 1])
            }
            return t
        }

        function Ee(t, e) {
            return "string" == typeof t ? e + t : t
        }

        function Ae(t) {
            t._o = Oe, t._n = R, t._s = i, t._l = me, t._t = ge, t._q = T, t._i = A, t._m = xe, t._f = ye, t._k = be, t._b = we, t._v = gt, t._e = mt, t._u = Te, t._g = Se, t._d = Ce, t._p = Ee
        }

        function Ne(t, e, n, i, r) {
            var a, o = this,
                s = r.options;
            f(i, "_uid") ? (a = Object.create(i))._original = i : i = (a = i)._original;
            var c = C(s._compiled),
                u = !c;
            this.data = t, this.props = e, this.children = n, this.parent = i, this.listeners = t.on || g, this.injections = le(s.inject, i), this.slots = function() {
                return o.$slots || pe(t.scopedSlots, o.$slots = fe(n, i)), o.$slots
            }, Object.defineProperty(this, "scopedSlots", {
                enumerable: !0,
                get: function() {
                    return pe(t.scopedSlots, this.slots())
                }
            }), c && (this.$options = s, this.$slots = this.slots(), this.$scopedSlots = pe(t.scopedSlots, this.$slots)), s._scopeId ? this._c = function(t, e, n, r) {
                var o = De(a, t, e, n, r, u);
                return o && !Array.isArray(o) && (o.fnScopeId = s._scopeId, o.fnContext = i), o
            } : this._c = function(t, e, n, r) {
                return De(a, t, e, n, r, u)
            }
        }

        function je(t, e, n, r, o) {
            var i = yt(t);
            return i.fnContext = n, i.fnOptions = r, e.slot && ((i.data || (i.data = {})).slot = e.slot), i
        }

        function Pe(t, e) {
            for (var n in e) t[p(n)] = e[n]
        }
        Ae(Ne.prototype);
        var Le = {
                init: function(t, e) {
                    if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                        var n = t;
                        Le.prepatch(n, n)
                    } else {
                        (t.componentInstance = function(t, e) {
                            var n = {
                                    _isComponent: !0,
                                    _parentVnode: t,
                                    parent: e
                                },
                                r = t.data.inlineTemplate;
                            B(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns);
                            return new t.componentOptions.Ctor(n)
                        }(t, Xe)).$mount(e ? t.elm : void 0, e)
                    }
                },
                prepatch: function(t, e) {
                    var n = e.componentOptions;
                    ! function(t, e, n, r, o) {
                        0;
                        var i = r.data.scopedSlots,
                            a = t.$scopedSlots,
                            s = !!(i && !i.$stable || a !== g && !a.$stable || i && t.$scopedSlots.$key !== i.$key),
                            c = !!(o || t.$options._renderChildren || s);
                        t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r);
                        if (t.$options._renderChildren = o, t.$attrs = r.data.attrs || g, t.$listeners = n || g, e && t.$options.props) {
                            Ot(!1);
                            for (var u = t._props, l = t.$options._propKeys || [], f = 0; f < l.length; f++) {
                                var d = l[f],
                                    p = t.$options.props;
                                u[d] = Mt(d, p, e, t)
                            }
                            Ot(!0), t.$options.propsData = e
                        }
                        n = n || g;
                        var h = t.$options._parentListeners;
                        t.$options._parentListeners = n, Ye(t, n, h), c && (t.$slots = fe(o, r.context), t.$forceUpdate());
                        0
                    }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children)
                },
                insert: function(t) {
                    var e, n = t.context,
                        r = t.componentInstance;
                    r._isMounted || (r._isMounted = !0, tn(r, "mounted")), t.data.keepAlive && (n._isMounted ? ((e = r)._inactive = !1, nn.push(e)) : Qe(r, !0))
                },
                destroy: function(t) {
                    var e = t.componentInstance;
                    e._isDestroyed || (t.data.keepAlive ? function t(e, n) {
                        if (n && (e._directInactive = !0, Je(e))) return;
                        if (!e._inactive) {
                            e._inactive = !0;
                            for (var r = 0; r < e.$children.length; r++) t(e.$children[r]);
                            tn(e, "deactivated")
                        }
                    }(e, !0) : e.$destroy())
                }
            },
            Ie = Object.keys(Le);

        function Be(t, e, n, r, o) {
            if (!I(t)) {
                var i = n.$options._base;
                if (M(t) && (t = i.extend(t)), "function" == typeof t) {
                    var a, s, c, u, l, f, d;
                    if (I(t.cid) && void 0 === (t = function(e, n) {
                            if (C(e.error) && B(e.errorComp)) return e.errorComp;
                            if (B(e.resolved)) return e.resolved;
                            var t = ze;
                            t && B(e.owners) && -1 === e.owners.indexOf(t) && e.owners.push(t);
                            if (C(e.loading) && B(e.loadingComp)) return e.loadingComp;
                            if (t && !B(e.owners)) {
                                var r = e.owners = [t],
                                    o = !0,
                                    i = null,
                                    a = null;
                                t.$on("hook:destroyed", function() {
                                    return _(r, t)
                                });
                                var s = function(t) {
                                        for (var e = 0, n = r.length; e < n; e++) r[e].$forceUpdate();
                                        t && (r.length = 0, null !== i && (clearTimeout(i), i = null), null !== a && (clearTimeout(a), a = null))
                                    },
                                    c = U(function(t) {
                                        e.resolved = Fe(t, n), o ? r.length = 0 : s(!0)
                                    }),
                                    u = U(function(t) {
                                        B(e.errorComp) && (e.error = !0, s(!0))
                                    }),
                                    l = e(c, u);
                                return M(l) && (y(l) ? I(e.resolved) && l.then(c, u) : y(l.component) && (l.component.then(c, u), B(l.error) && (e.errorComp = Fe(l.error, n)), B(l.loading) && (e.loadingComp = Fe(l.loading, n), 0 === l.delay ? e.loading = !0 : i = setTimeout(function() {
                                    i = null, I(e.resolved) && I(e.error) && (e.loading = !0, s(!1))
                                }, l.delay || 200)), B(l.timeout) && (a = setTimeout(function() {
                                    a = null, I(e.resolved) && u(null)
                                }, l.timeout)))), o = !1, e.loading ? e.loadingComp : e.resolved
                            }
                        }(a = t, i))) return s = a, c = e, u = n, l = r, f = o, (d = mt()).asyncFactory = s, d.asyncMeta = {
                        data: c,
                        context: u,
                        children: l,
                        tag: f
                    }, d;
                    e = e || {}, An(t), B(e.model) && function(t, e) {
                        var n = t.model && t.model.prop || "value",
                            r = t.model && t.model.event || "input";
                        (e.attrs || (e.attrs = {}))[n] = e.model.value;
                        var o = e.on || (e.on = {}),
                            i = o[r],
                            a = e.model.callback;
                        B(i) ? (Array.isArray(i) ? -1 === i.indexOf(a) : i !== a) && (o[r] = [a].concat(i)) : o[r] = a
                    }(t.options, e);
                    var p = function(t, e, n) {
                        var r = e.options.props;
                        if (!I(r)) {
                            var o = {},
                                i = t.attrs,
                                a = t.props;
                            if (B(i) || B(a))
                                for (var s in r) {
                                    var c = b(s);
                                    se(o, a, s, c, !0) || se(o, i, s, c, !1)
                                }
                            return o
                        }
                    }(e, t);
                    if (C(t.options.functional)) return function(t, e, n, r, o) {
                        var i = t.options,
                            a = {},
                            s = i.props;
                        if (B(s))
                            for (var c in s) a[c] = Mt(c, s, e || g);
                        else B(n.attrs) && Pe(a, n.attrs), B(n.props) && Pe(a, n.props);
                        var u = new Ne(n, a, o, r, t),
                            l = i.render.call(null, u._c, u);
                        if (l instanceof ht) return je(l, n, u.parent, i);
                        if (Array.isArray(l)) {
                            for (var f = ce(l) || [], d = new Array(f.length), p = 0; p < f.length; p++) d[p] = je(f[p], n, u.parent, i);
                            return d
                        }
                    }(t, p, e, n, r);
                    var h = e.on;
                    if (e.on = e.nativeOn, C(t.options.abstract)) {
                        var v = e.slot;
                        e = {}, v && (e.slot = v)
                    }! function(t) {
                        for (var e = t.hook || (t.hook = {}), n = 0; n < Ie.length; n++) {
                            var r = Ie[n],
                                o = e[r],
                                i = Le[r];
                            o === i || o && o._merged || (e[r] = o ? Me(i, o) : i)
                        }
                    }(e);
                    var m = t.options.name || o;
                    return new ht("vue-component-" + t.cid + (m ? "-" + m : ""), e, void 0, void 0, void 0, n, {
                        Ctor: t,
                        propsData: p,
                        listeners: h,
                        tag: o,
                        children: r
                    }, a)
                }
            }
        }

        function Me(n, r) {
            var t = function(t, e) {
                n(t, e), r(t, e)
            };
            return t._merged = !0, t
        }
        var Re = 1,
            Ue = 2;

        function De(t, e, n, r, o, i) {
            return (Array.isArray(n) || E(n)) && (o = r, r = n, n = void 0), C(i) && (o = Ue),
                function(t, e, n, r, o) {
                    if (B(n) && B(n.__ob__)) return mt();
                    B(n) && B(n.is) && (e = n.is);
                    if (!e) return mt();
                    0;
                    Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
                        default: r[0]
                    }, r.length = 0);
                    o === Ue ? r = ce(r) : o === Re && (r = function(t) {
                        for (var e = 0; e < t.length; e++)
                            if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                        return t
                    }(r));
                    var i, a;
                    if ("string" == typeof e) {
                        var s;
                        a = t.$vnode && t.$vnode.ns || L.getTagNamespace(e), i = L.isReservedTag(e) ? new ht(L.parsePlatformTagName(e), n, r, void 0, void 0, t) : n && n.pre || !B(s = Bt(t.$options, "components", e)) ? new ht(e, n, r, void 0, void 0, t) : Be(s, n, t, r, e)
                    } else i = Be(e, n, t, r);
                    return Array.isArray(i) ? i : B(i) ? (B(a) && function t(e, n, r) {
                        e.ns = n;
                        "foreignObject" === e.tag && (r = !(n = void 0));
                        if (B(e.children))
                            for (var o = 0, i = e.children.length; o < i; o++) {
                                var a = e.children[o];
                                B(a.tag) && (I(a.ns) || C(r) && "svg" !== a.tag) && t(a, n, r)
                            }
                    }(i, a), B(n) && function(t) {
                        M(t.style) && ne(t.style);
                        M(t.class) && ne(t.class)
                    }(n), i) : mt()
                }(t, e, n, r, o)
        }
        var qe, ze = null;

        function Fe(t, e) {
            return (t.__esModule || st && "Module" === t[Symbol.toStringTag]) && (t = t.default), M(t) ? e.extend(t) : t
        }

        function Ge(t) {
            return t.isComment && t.asyncFactory
        }

        function He(t) {
            if (Array.isArray(t))
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (B(n) && (B(n.componentOptions) || Ge(n))) return n
                }
        }

        function We(t, e) {
            qe.$on(t, e)
        }

        function Ve(t, e) {
            qe.$off(t, e)
        }

        function Ke(e, n) {
            var r = qe;
            return function t() {
                null !== n.apply(null, arguments) && r.$off(e, t)
            }
        }

        function Ye(t, e, n) {
            ie(e, n || {}, We, Ve, Ke, qe = t), qe = void 0
        }
        var Xe = null;

        function Ze(t) {
            var e = Xe;
            return Xe = t,
                function() {
                    Xe = e
                }
        }

        function Je(t) {
            for (; t && (t = t.$parent);)
                if (t._inactive) return !0;
            return !1
        }

        function Qe(t, e) {
            if (e) {
                if (t._directInactive = !1, Je(t)) return
            } else if (t._directInactive) return;
            if (t._inactive || null === t._inactive) {
                t._inactive = !1;
                for (var n = 0; n < t.$children.length; n++) Qe(t.$children[n]);
                tn(t, "activated")
            }
        }

        function tn(t, e) {
            dt();
            var n = t.$options[e],
                r = e + " hook";
            if (n)
                for (var o = 0, i = n.length; o < i; o++) zt(n[o], t, null, t, r);
            t._hasHookEvent && t.$emit("hook:" + e), pt()
        }
        var en = [],
            nn = [],
            rn = {},
            on = !1,
            an = !1,
            sn = 0;
        var cn = 0,
            un = Date.now;
        if (H && !Y) {
            var ln = window.performance;
            ln && "function" == typeof ln.now && un() > document.createEvent("Event").timeStamp && (un = function() {
                return ln.now()
            })
        }

        function fn() {
            var t, e;
            for (cn = un(), an = !0, en.sort(function(t, e) {
                    return t.id - e.id
                }), sn = 0; sn < en.length; sn++)(t = en[sn]).before && t.before(), e = t.id, rn[e] = null, t.run();
            var n = nn.slice(),
                r = en.slice();
            sn = en.length = nn.length = 0, on = an = !(rn = {}),
                function(t) {
                    for (var e = 0; e < t.length; e++) t[e]._inactive = !0, Qe(t[e], !0)
                }(n),
                function(t) {
                    var e = t.length;
                    for (; e--;) {
                        var n = t[e],
                            r = n.vm;
                        r._watcher === n && r._isMounted && !r._isDestroyed && tn(r, "updated")
                    }
                }(r), ot && L.devtools && ot.emit("flush")
        }
        var dn = 0,
            pn = function(t, e, n, r, o) {
                this.vm = t, o && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++dn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new at, this.newDepIds = new at, this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = function(t) {
                    if (!z.test(t)) {
                        var n = t.split(".");
                        return function(t) {
                            for (var e = 0; e < n.length; e++) {
                                if (!t) return;
                                t = t[n[e]]
                            }
                            return t
                        }
                    }
                }(e), this.getter || (this.getter = $)), this.value = this.lazy ? void 0 : this.get()
            };
        pn.prototype.get = function() {
            var t;
            dt(this);
            var e = this.vm;
            try {
                t = this.getter.call(e, e)
            } catch (t) {
                if (!this.user) throw t;
                qt(t, e, 'getter for watcher "' + this.expression + '"')
            } finally {
                this.deep && ne(t), pt(), this.cleanupDeps()
            }
            return t
        }, pn.prototype.addDep = function(t) {
            var e = t.id;
            this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
        }, pn.prototype.cleanupDeps = function() {
            for (var t = this.deps.length; t--;) {
                var e = this.deps[t];
                this.newDepIds.has(e.id) || e.removeSub(this)
            }
            var n = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
        }, pn.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
                var e = t.id;
                if (null == rn[e]) {
                    if (rn[e] = !0, an) {
                        for (var n = en.length - 1; sn < n && en[n].id > t.id;) n--;
                        en.splice(n + 1, 0, t)
                    } else en.push(t);
                    on || (on = !0, te(fn))
                }
            }(this)
        }, pn.prototype.run = function() {
            if (this.active) {
                var t = this.get();
                if (t !== this.value || M(t) || this.deep) {
                    var e = this.value;
                    if (this.value = t, this.user) try {
                        this.cb.call(this.vm, t, e)
                    } catch (t) {
                        qt(t, this.vm, 'callback for watcher "' + this.expression + '"')
                    } else this.cb.call(this.vm, t, e)
                }
            }
        }, pn.prototype.evaluate = function() {
            this.value = this.get(), this.dirty = !1
        }, pn.prototype.depend = function() {
            for (var t = this.deps.length; t--;) this.deps[t].depend()
        }, pn.prototype.teardown = function() {
            if (this.active) {
                this.vm._isBeingDestroyed || _(this.vm._watchers, this);
                for (var t = this.deps.length; t--;) this.deps[t].removeSub(this);
                this.active = !1
            }
        };
        var hn = {
            enumerable: !0,
            configurable: !0,
            get: $,
            set: $
        };

        function vn(t, e, n) {
            hn.get = function() {
                return this[e][n]
            }, hn.set = function(t) {
                this[e][n] = t
            }, Object.defineProperty(t, n, hn)
        }

        function mn(t) {
            t._watchers = [];
            var e = t.$options;
            e.props && function(n, r) {
                var o = n.$options.propsData || {},
                    i = n._props = {},
                    a = n.$options._propKeys = [];
                n.$parent && Ot(!1);
                var t = function(t) {
                    a.push(t);
                    var e = Mt(t, r, o, n);
                    St(i, t, e), t in n || vn(n, "_props", t)
                };
                for (var e in r) t(e);
                Ot(!0)
            }(t, e.props), e.methods && function(t, e) {
                t.$options.props;
                for (var n in e) t[n] = "function" != typeof e[n] ? $ : m(e[n], t)
            }(t, e.methods), e.data ? function(t) {
                var e = t.$options.data;
                c(e = t._data = "function" == typeof e ? function(t, e) {
                    dt();
                    try {
                        return t.call(e, e)
                    } catch (t) {
                        return qt(t, e, "data()"), {}
                    } finally {
                        pt()
                    }
                }(e, t) : e || {}) || (e = {});
                var n = Object.keys(e),
                    r = t.$options.props,
                    o = (t.$options.methods, n.length);
                for (; o--;) {
                    var i = n[o];
                    0, r && f(r, i) || (void 0, 36 !== (a = (i + "").charCodeAt(0)) && 95 !== a && vn(t, "_data", i))
                }
                var a;
                kt(e, !0)
            }(t) : kt(t._data = {}, !0), e.computed && function(t, e) {
                var n = t._computedWatchers = Object.create(null),
                    r = rt();
                for (var o in e) {
                    var i = e[o],
                        a = "function" == typeof i ? i : i.get;
                    0, r || (n[o] = new pn(t, a || $, $, gn)), o in t || yn(t, o, i)
                }
            }(t, e.computed), e.watch && e.watch !== tt && function(t, e) {
                for (var n in e) {
                    var r = e[n];
                    if (Array.isArray(r))
                        for (var o = 0; o < r.length; o++) wn(t, n, r[o]);
                    else wn(t, n, r)
                }
            }(t, e.watch)
        }
        var gn = {
            lazy: !0
        };

        function yn(t, e, n) {
            var r = !rt();
            hn.set = "function" == typeof n ? (hn.get = r ? _n(e) : bn(n), $) : (hn.get = n.get ? r && !1 !== n.cache ? _n(e) : bn(n.get) : $, n.set || $), Object.defineProperty(t, e, hn)
        }

        function _n(e) {
            return function() {
                var t = this._computedWatchers && this._computedWatchers[e];
                if (t) return t.dirty && t.evaluate(), lt.target && t.depend(), t.value
            }
        }

        function bn(t) {
            return function() {
                return t.call(this, this)
            }
        }

        function wn(t, e, n, r) {
            return c(n) && (n = (r = n).handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r)
        }
        var xn, On, $n, kn, Sn, Tn, Cn, En = 0;

        function An(t) {
            var e = t.options;
            if (t.super) {
                var n = An(t.super);
                if (n !== t.superOptions) {
                    t.superOptions = n;
                    var r = function(t) {
                        var e, n = t.options,
                            r = t.sealedOptions;
                        for (var o in n) n[o] !== r[o] && (e || (e = {}), e[o] = n[o]);
                        return e
                    }(t);
                    r && x(t.extendOptions, r), (e = t.options = It(n, t.extendOptions)).name && (e.components[e.name] = t)
                }
            }
            return e
        }

        function Nn(t) {
            this._init(t)
        }

        function jn(t) {
            t.cid = 0;
            var a = 1;
            t.extend = function(t) {
                t = t || {};
                var e = this,
                    n = e.cid,
                    r = t._Ctor || (t._Ctor = {});
                if (r[n]) return r[n];
                var o = t.name || e.options.name;
                var i = function(t) {
                    this._init(t)
                };
                return ((i.prototype = Object.create(e.prototype)).constructor = i).cid = a++, i.options = It(e.options, t), i.super = e, i.options.props && function(t) {
                    var e = t.options.props;
                    for (var n in e) vn(t.prototype, "_props", n)
                }(i), i.options.computed && function(t) {
                    var e = t.options.computed;
                    for (var n in e) yn(t.prototype, n, e[n])
                }(i), i.extend = e.extend, i.mixin = e.mixin, i.use = e.use, j.forEach(function(t) {
                    i[t] = e[t]
                }), o && (i.options.components[o] = i), i.superOptions = e.options, i.extendOptions = t, i.sealedOptions = x({}, i.options), r[n] = i
            }
        }

        function Pn(t) {
            return t && (t.Ctor.options.name || t.tag)
        }

        function Ln(t, e) {
            return Array.isArray(t) ? -1 < t.indexOf(e) : "string" == typeof t ? -1 < t.split(",").indexOf(e) : !!r(t) && t.test(e)
        }

        function In(t, e) {
            var n = t.cache,
                r = t.keys,
                o = t._vnode;
            for (var i in n) {
                var a = n[i];
                if (a) {
                    var s = Pn(a.componentOptions);
                    s && !e(s) && Bn(n, i, r, o)
                }
            }
        }

        function Bn(t, e, n, r) {
            var o = t[e];
            !o || r && o.tag === r.tag || o.componentInstance.$destroy(), t[e] = null, _(n, e)
        }
        Nn.prototype._init = function(t) {
            var e, n, r, o, i = this;
            i._uid = En++, i._isVue = !0, t && t._isComponent ? function(t, e) {
                    var n = t.$options = Object.create(t.constructor.options),
                        r = e._parentVnode;
                    n.parent = e.parent;
                    var o = (n._parentVnode = r).componentOptions;
                    n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, n._componentTag = o.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns)
                }(i, t) : i.$options = It(An(i.constructor), t || {}, i),
                function(t) {
                    var e = t.$options,
                        n = e.parent;
                    if (n && !e.abstract) {
                        for (; n.$options.abstract && n.$parent;) n = n.$parent;
                        n.$children.push(t)
                    }
                    t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
                }((i._renderProxy = i)._self = i),
                function(t) {
                    t._events = Object.create(null), t._hasHookEvent = !1;
                    var e = t.$options._parentListeners;
                    e && Ye(t, e)
                }(i),
                function(o) {
                    o._vnode = null, o._staticTrees = null;
                    var t = o.$options,
                        e = o.$vnode = t._parentVnode,
                        n = e && e.context;
                    o.$slots = fe(t._renderChildren, n), o.$scopedSlots = g, o._c = function(t, e, n, r) {
                        return De(o, t, e, n, r, !1)
                    }, o.$createElement = function(t, e, n, r) {
                        return De(o, t, e, n, r, !0)
                    };
                    var r = e && e.data;
                    St(o, "$attrs", r && r.attrs || g, null, !0), St(o, "$listeners", t._parentListeners || g, null, !0)
                }(i), tn(i, "beforeCreate"), (n = le((e = i).$options.inject, e)) && (Ot(!1), Object.keys(n).forEach(function(t) {
                    St(e, t, n[t])
                }), Ot(!0)), mn(i), (o = (r = i).$options.provide) && (r._provided = "function" == typeof o ? o.call(r) : o), tn(i, "created"), i.$options.el && i.$mount(i.$options.el)
        }, xn = Nn, On = {
            get: function() {
                return this._data
            }
        }, $n = {
            get: function() {
                return this._props
            }
        }, Object.defineProperty(xn.prototype, "$data", On), Object.defineProperty(xn.prototype, "$props", $n), xn.prototype.$set = Tt, xn.prototype.$delete = Ct, xn.prototype.$watch = function(t, e, n) {
            var r = this;
            if (c(e)) return wn(r, t, e, n);
            (n = n || {}).user = !0;
            var o = new pn(r, t, e, n);
            if (n.immediate) try {
                e.call(r, o.value)
            } catch (t) {
                qt(t, r, 'callback for immediate watcher "' + o.expression + '"')
            }
            return function() {
                o.teardown()
            }
        }, Sn = /^hook:/, (kn = Nn).prototype.$on = function(t, e) {
            var n = this;
            if (Array.isArray(t))
                for (var r = 0, o = t.length; r < o; r++) n.$on(t[r], e);
            else(n._events[t] || (n._events[t] = [])).push(e), Sn.test(t) && (n._hasHookEvent = !0);
            return n
        }, kn.prototype.$once = function(t, e) {
            var n = this;

            function r() {
                n.$off(t, r), e.apply(n, arguments)
            }
            return r.fn = e, n.$on(t, r), n
        }, kn.prototype.$off = function(t, e) {
            var n = this;
            if (!arguments.length) return n._events = Object.create(null), n;
            if (Array.isArray(t)) {
                for (var r = 0, o = t.length; r < o; r++) n.$off(t[r], e);
                return n
            }
            var i, a = n._events[t];
            if (!a) return n;
            if (!e) return n._events[t] = null, n;
            for (var s = a.length; s--;)
                if ((i = a[s]) === e || i.fn === e) {
                    a.splice(s, 1);
                    break
                }
            return n
        }, kn.prototype.$emit = function(t) {
            var e = this._events[t];
            if (e) {
                e = 1 < e.length ? w(e) : e;
                for (var n = w(arguments, 1), r = 'event handler for "' + t + '"', o = 0, i = e.length; o < i; o++) zt(e[o], this, n, this, r)
            }
            return this
        }, (Tn = Nn).prototype._update = function(t, e) {
            var n = this,
                r = n.$el,
                o = n._vnode,
                i = Ze(n);
            n._vnode = t, n.$el = o ? n.__patch__(o, t) : n.__patch__(n.$el, t, e, !1), i(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
        }, Tn.prototype.$forceUpdate = function() {
            this._watcher && this._watcher.update()
        }, Tn.prototype.$destroy = function() {
            var t = this;
            if (!t._isBeingDestroyed) {
                tn(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                var e = t.$parent;
                !e || e._isBeingDestroyed || t.$options.abstract || _(e.$children, t), t._watcher && t._watcher.teardown();
                for (var n = t._watchers.length; n--;) t._watchers[n].teardown();
                t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), tn(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null)
            }
        }, Ae((Cn = Nn).prototype), Cn.prototype.$nextTick = function(t) {
            return te(t, this)
        }, Cn.prototype._render = function() {
            var e, n = this,
                t = n.$options,
                r = t.render,
                o = t._parentVnode;
            o && (n.$scopedSlots = pe(o.data.scopedSlots, n.$slots, n.$scopedSlots)), n.$vnode = o;
            try {
                ze = n, e = r.call(n._renderProxy, n.$createElement)
            } catch (t) {
                qt(t, n, "render"), e = n._vnode
            } finally {
                ze = null
            }
            return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof ht || (e = mt()), e.parent = o, e
        };
        var Mn, Rn, Un, Dn = [String, RegExp, Array],
            qn = {
                KeepAlive: {
                    name: "keep-alive",
                    abstract: !0,
                    props: {
                        include: Dn,
                        exclude: Dn,
                        max: [String, Number]
                    },
                    created: function() {
                        this.cache = Object.create(null), this.keys = []
                    },
                    destroyed: function() {
                        for (var t in this.cache) Bn(this.cache, t, this.keys)
                    },
                    mounted: function() {
                        var t = this;
                        this.$watch("include", function(e) {
                            In(t, function(t) {
                                return Ln(e, t)
                            })
                        }), this.$watch("exclude", function(e) {
                            In(t, function(t) {
                                return !Ln(e, t)
                            })
                        })
                    },
                    render: function() {
                        var t = this.$slots.default,
                            e = He(t),
                            n = e && e.componentOptions;
                        if (n) {
                            var r = Pn(n),
                                o = this.include,
                                i = this.exclude;
                            if (o && (!r || !Ln(o, r)) || i && r && Ln(i, r)) return e;
                            var a = this.cache,
                                s = this.keys,
                                c = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                            a[c] ? (e.componentInstance = a[c].componentInstance, _(s, c), s.push(c)) : (a[c] = e, s.push(c), this.max && s.length > parseInt(this.max) && Bn(a, s[0], s, this._vnode)), e.data.keepAlive = !0
                        }
                        return e || t && t[0]
                    }
                }
            };
        Mn = Nn, Un = {
            get: function() {
                return L
            }
        }, Object.defineProperty(Mn, "config", Un), Mn.util = {
            warn: ct,
            extend: x,
            mergeOptions: It,
            defineReactive: St
        }, Mn.set = Tt, Mn.delete = Ct, Mn.nextTick = te, Mn.observable = function(t) {
            return kt(t), t
        }, Mn.options = Object.create(null), j.forEach(function(t) {
            Mn.options[t + "s"] = Object.create(null)
        }), x((Mn.options._base = Mn).options.components, qn), Mn.use = function(t) {
            var e = this._installedPlugins || (this._installedPlugins = []);
            if (-1 < e.indexOf(t)) return this;
            var n = w(arguments, 1);
            return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), e.push(t), this
        }, Mn.mixin = function(t) {
            return this.options = It(this.options, t), this
        }, jn(Mn), Rn = Mn, j.forEach(function(n) {
            Rn[n] = function(t, e) {
                return e ? ("component" === n && c(e) && (e.name = e.name || t, e = this.options._base.extend(e)), "directive" === n && "function" == typeof e && (e = {
                    bind: e,
                    update: e
                }), this.options[n + "s"][t] = e) : this.options[n + "s"][t]
            }
        }), Object.defineProperty(Nn.prototype, "$isServer", {
            get: rt
        }), Object.defineProperty(Nn.prototype, "$ssrContext", {
            get: function() {
                return this.$vnode && this.$vnode.ssrContext
            }
        }), Object.defineProperty(Nn, "FunctionalRenderContext", {
            value: Ne
        }), Nn.version = "2.6.11";
        var zn = a("style,class"),
            Fn = a("input,textarea,option,select,progress"),
            Gn = a("contenteditable,draggable,spellcheck"),
            Hn = a("events,caret,typing,plaintext-only"),
            Wn = function(t, e) {
                return Zn(e) || "false" === e ? "false" : "contenteditable" === t && Hn(e) ? e : "true"
            },
            Vn = a("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            Kn = "http://www.w3.org/1999/xlink",
            Yn = function(t) {
                return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
            },
            Xn = function(t) {
                return Yn(t) ? t.slice(6, t.length) : ""
            },
            Zn = function(t) {
                return null == t || !1 === t
            };

        function Jn(t) {
            for (var e = t.data, n = t, r = t; B(r.componentInstance);)(r = r.componentInstance._vnode) && r.data && (e = Qn(r.data, e));
            for (; B(n = n.parent);) n && n.data && (e = Qn(e, n.data));
            return function(t, e) {
                if (B(t) || B(e)) return tr(t, er(e));
                return ""
            }(e.staticClass, e.class)
        }

        function Qn(t, e) {
            return {
                staticClass: tr(t.staticClass, e.staticClass),
                class: B(t.class) ? [t.class, e.class] : e.class
            }
        }

        function tr(t, e) {
            return t ? e ? t + " " + e : t : e || ""
        }

        function er(t) {
            return Array.isArray(t) ? function(t) {
                for (var e, n = "", r = 0, o = t.length; r < o; r++) B(e = er(t[r])) && "" !== e && (n && (n += " "), n += e);
                return n
            }(t) : M(t) ? function(t) {
                var e = "";
                for (var n in t) t[n] && (e && (e += " "), e += n);
                return e
            }(t) : "string" == typeof t ? t : ""
        }
        var nr = {
                svg: "http://www.w3.org/2000/svg",
                math: "http://www.w3.org/1998/Math/MathML"
            },
            rr = a("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
            or = a("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            ir = function(t) {
                return rr(t) || or(t)
            };
        var ar = Object.create(null);
        var sr = a("text,number,password,search,email,tel,url");
        var cr = Object.freeze({
                createElement: function(t, e) {
                    var n = document.createElement(t);
                    return "select" !== t || e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n
                },
                createElementNS: function(t, e) {
                    return document.createElementNS(nr[t], e)
                },
                createTextNode: function(t) {
                    return document.createTextNode(t)
                },
                createComment: function(t) {
                    return document.createComment(t)
                },
                insertBefore: function(t, e, n) {
                    t.insertBefore(e, n)
                },
                removeChild: function(t, e) {
                    t.removeChild(e)
                },
                appendChild: function(t, e) {
                    t.appendChild(e)
                },
                parentNode: function(t) {
                    return t.parentNode
                },
                nextSibling: function(t) {
                    return t.nextSibling
                },
                tagName: function(t) {
                    return t.tagName
                },
                setTextContent: function(t, e) {
                    t.textContent = e
                },
                setStyleScope: function(t, e) {
                    t.setAttribute(e, "")
                }
            }),
            ur = {
                create: function(t, e) {
                    lr(e)
                },
                update: function(t, e) {
                    t.data.ref !== e.data.ref && (lr(t, !0), lr(e))
                },
                destroy: function(t) {
                    lr(t, !0)
                }
            };

        function lr(t, e) {
            var n = t.data.ref;
            if (B(n)) {
                var r = t.context,
                    o = t.componentInstance || t.elm,
                    i = r.$refs;
                e ? Array.isArray(i[n]) ? _(i[n], o) : i[n] === o && (i[n] = void 0) : t.data.refInFor ? Array.isArray(i[n]) ? i[n].indexOf(o) < 0 && i[n].push(o) : i[n] = [o] : i[n] = o
            }
        }
        var fr = new ht("", {}, []),
            dr = ["create", "activate", "update", "remove", "destroy"];

        function pr(t, e) {
            return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && B(t.data) === B(e.data) && function(t, e) {
                if ("input" !== t.tag) return !0;
                var n, r = B(n = t.data) && B(n = n.attrs) && n.type,
                    o = B(n = e.data) && B(n = n.attrs) && n.type;
                return r === o || sr(r) && sr(o)
            }(t, e) || C(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && I(e.asyncFactory.error))
        }

        function hr(t, e, n) {
            var r, o, i = {};
            for (r = e; r <= n; ++r) B(o = t[r].key) && (i[o] = r);
            return i
        }
        var vr = {
            create: mr,
            update: mr,
            destroy: function(t) {
                mr(t, fr)
            }
        };

        function mr(t, e) {
            (t.data.directives || e.data.directives) && function(e, n) {
                var t, r, o, i = e === fr,
                    a = n === fr,
                    s = yr(e.data.directives, e.context),
                    c = yr(n.data.directives, n.context),
                    u = [],
                    l = [];
                for (t in c) r = s[t], o = c[t], r ? (o.oldValue = r.value, o.oldArg = r.arg, _r(o, "update", n, e), o.def && o.def.componentUpdated && l.push(o)) : (_r(o, "bind", n, e), o.def && o.def.inserted && u.push(o));
                if (u.length) {
                    var f = function() {
                        for (var t = 0; t < u.length; t++) _r(u[t], "inserted", n, e)
                    };
                    i ? ae(n, "insert", f) : f()
                }
                l.length && ae(n, "postpatch", function() {
                    for (var t = 0; t < l.length; t++) _r(l[t], "componentUpdated", n, e)
                });
                if (!i)
                    for (t in s) c[t] || _r(s[t], "unbind", e, e, a)
            }(t, e)
        }
        var gr = Object.create(null);

        function yr(t, e) {
            var n, r, o, i = Object.create(null);
            if (!t) return i;
            for (n = 0; n < t.length; n++)(r = t[n]).modifiers || (r.modifiers = gr), (i[(o = r, o.rawName || o.name + "." + Object.keys(o.modifiers || {}).join("."))] = r).def = Bt(e.$options, "directives", r.name);
            return i
        }

        function _r(e, n, r, t, o) {
            var i = e.def && e.def[n];
            if (i) try {
                i(r.elm, e, r, t, o)
            } catch (t) {
                qt(t, r.context, "directive " + e.name + " " + n + " hook")
            }
        }
        var br = [ur, vr];

        function wr(t, e) {
            var n = e.componentOptions;
            if (!(B(n) && !1 === n.Ctor.options.inheritAttrs || I(t.data.attrs) && I(e.data.attrs))) {
                var r, o, i = e.elm,
                    a = t.data.attrs || {},
                    s = e.data.attrs || {};
                for (r in B(s.__ob__) && (s = e.data.attrs = x({}, s)), s) o = s[r], a[r] !== o && xr(i, r, o);
                for (r in (Y || Z) && s.value !== a.value && xr(i, "value", s.value), a) I(s[r]) && (Yn(r) ? i.removeAttributeNS(Kn, Xn(r)) : Gn(r) || i.removeAttribute(r))
            }
        }

        function xr(t, e, n) {
            -1 < t.tagName.indexOf("-") ? Or(t, e, n) : Vn(e) ? Zn(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, t.setAttribute(e, n)) : Gn(e) ? t.setAttribute(e, Wn(e, n)) : Yn(e) ? Zn(n) ? t.removeAttributeNS(Kn, Xn(e)) : t.setAttributeNS(Kn, e, n) : Or(t, e, n)
        }

        function Or(e, t, n) {
            if (Zn(n)) e.removeAttribute(t);
            else {
                if (Y && !X && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
                    var r = function(t) {
                        t.stopImmediatePropagation(), e.removeEventListener("input", r)
                    };
                    e.addEventListener("input", r), e.__ieph = !0
                }
                e.setAttribute(t, n)
            }
        }
        var $r = {
            create: wr,
            update: wr
        };

        function kr(t, e) {
            var n = e.elm,
                r = e.data,
                o = t.data;
            if (!(I(r.staticClass) && I(r.class) && (I(o) || I(o.staticClass) && I(o.class)))) {
                var i = Jn(e),
                    a = n._transitionClasses;
                B(a) && (i = tr(i, er(a))), i !== n._prevClass && (n.setAttribute("class", i), n._prevClass = i)
            }
        }
        var Sr, Tr = {
                create: kr,
                update: kr
            },
            Cr = "__r",
            Er = "__c";

        function Ar(e, n, r) {
            var o = Sr;
            return function t() {
                null !== n.apply(null, arguments) && Pr(e, t, r, o)
            }
        }
        var Nr = Wt && !(Q && Number(Q[1]) <= 53);

        function jr(t, e, n, r) {
            if (Nr) {
                var o = cn,
                    i = e;
                e = i._wrapper = function(t) {
                    if (t.target === t.currentTarget || t.timeStamp >= o || t.timeStamp <= 0 || t.target.ownerDocument !== document) return i.apply(this, arguments)
                }
            }
            Sr.addEventListener(t, e, et ? {
                capture: n,
                passive: r
            } : n)
        }

        function Pr(t, e, n, r) {
            (r || Sr).removeEventListener(t, e._wrapper || e, n)
        }

        function Lr(t, e) {
            if (!I(t.data.on) || !I(e.data.on)) {
                var n = e.data.on || {},
                    r = t.data.on || {};
                Sr = e.elm,
                    function(t) {
                        if (B(t[Cr])) {
                            var e = Y ? "change" : "input";
                            t[e] = [].concat(t[Cr], t[e] || []), delete t[Cr]
                        }
                        B(t[Er]) && (t.change = [].concat(t[Er], t.change || []), delete t[Er])
                    }(n), ie(n, r, jr, Pr, Ar, e.context), Sr = void 0
            }
        }
        var Ir, Br = {
            create: Lr,
            update: Lr
        };

        function Mr(t, e) {
            if (!I(t.data.domProps) || !I(e.data.domProps)) {
                var n, r, o, i, a = e.elm,
                    s = t.data.domProps || {},
                    c = e.data.domProps || {};
                for (n in B(c.__ob__) && (c = e.data.domProps = x({}, c)), s) n in c || (a[n] = "");
                for (n in c) {
                    if (r = c[n], "textContent" === n || "innerHTML" === n) {
                        if (e.children && (e.children.length = 0), r === s[n]) continue;
                        1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                    }
                    if ("value" === n && "PROGRESS" !== a.tagName) {
                        var u = I(a._value = r) ? "" : String(r);
                        i = u, (o = a).composing || "OPTION" !== o.tagName && ! function(t, e) {
                            var n = !0;
                            try {
                                n = document.activeElement !== t
                            } catch (t) {}
                            return n && t.value !== e
                        }(o, i) && ! function(t, e) {
                            var n = t.value,
                                r = t._vModifiers;
                            if (B(r)) {
                                if (r.number) return R(n) !== R(e);
                                if (r.trim) return n.trim() !== e.trim()
                            }
                            return n !== e
                        }(o, i) || (a.value = u)
                    } else if ("innerHTML" === n && or(a.tagName) && I(a.innerHTML)) {
                        (Ir = Ir || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";
                        for (var l = Ir.firstChild; a.firstChild;) a.removeChild(a.firstChild);
                        for (; l.firstChild;) a.appendChild(l.firstChild)
                    } else if (r !== s[n]) try {
                        a[n] = r
                    } catch (t) {}
                }
            }
        }
        var Rr = {
                create: Mr,
                update: Mr
            },
            Ur = u(function(t) {
                var n = {},
                    r = /:(.+)/;
                return t.split(/;(?![^(]*\))/g).forEach(function(t) {
                    if (t) {
                        var e = t.split(r);
                        1 < e.length && (n[e[0].trim()] = e[1].trim())
                    }
                }), n
            });

        function Dr(t) {
            var e = qr(t.style);
            return t.staticStyle ? x(t.staticStyle, e) : e
        }

        function qr(t) {
            return Array.isArray(t) ? O(t) : "string" == typeof t ? Ur(t) : t
        }
        var zr, Fr = /^--/,
            Gr = /\s*!important$/,
            Hr = function(t, e, n) {
                if (Fr.test(e)) t.style.setProperty(e, n);
                else if (Gr.test(n)) t.style.setProperty(b(e), n.replace(Gr, ""), "important");
                else {
                    var r = Vr(e);
                    if (Array.isArray(n))
                        for (var o = 0, i = n.length; o < i; o++) t.style[r] = n[o];
                    else t.style[r] = n
                }
            },
            Wr = ["Webkit", "Moz", "ms"],
            Vr = u(function(t) {
                if (zr = zr || document.createElement("div").style, "filter" !== (t = p(t)) && t in zr) return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < Wr.length; n++) {
                    var r = Wr[n] + e;
                    if (r in zr) return r
                }
            });

        function Kr(t, e) {
            var n = e.data,
                r = t.data;
            if (!(I(n.staticStyle) && I(n.style) && I(r.staticStyle) && I(r.style))) {
                var o, i, a = e.elm,
                    s = r.staticStyle,
                    c = r.normalizedStyle || r.style || {},
                    u = s || c,
                    l = qr(e.data.style) || {};
                e.data.normalizedStyle = B(l.__ob__) ? x({}, l) : l;
                var f = function(t, e) {
                    var n, r = {};
                    if (e)
                        for (var o = t; o.componentInstance;)(o = o.componentInstance._vnode) && o.data && (n = Dr(o.data)) && x(r, n);
                    (n = Dr(t.data)) && x(r, n);
                    for (var i = t; i = i.parent;) i.data && (n = Dr(i.data)) && x(r, n);
                    return r
                }(e, !0);
                for (i in u) I(f[i]) && Hr(a, i, "");
                for (i in f)(o = f[i]) !== u[i] && Hr(a, i, null == o ? "" : o)
            }
        }
        var Yr = {
                create: Kr,
                update: Kr
            },
            Xr = /\s+/;

        function Zr(e, t) {
            if (t && (t = t.trim()))
                if (e.classList) - 1 < t.indexOf(" ") ? t.split(Xr).forEach(function(t) {
                    return e.classList.add(t)
                }) : e.classList.add(t);
                else {
                    var n = " " + (e.getAttribute("class") || "") + " ";
                    n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                }
        }

        function Jr(e, t) {
            if (t && (t = t.trim()))
                if (e.classList) - 1 < t.indexOf(" ") ? t.split(Xr).forEach(function(t) {
                    return e.classList.remove(t)
                }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
                else {
                    for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; 0 <= n.indexOf(r);) n = n.replace(r, " ");
                    (n = n.trim()) ? e.setAttribute("class", n): e.removeAttribute("class")
                }
        }

        function Qr(t) {
            if (t) {
                if ("object" != typeof t) return "string" == typeof t ? to(t) : void 0;
                var e = {};
                return !1 !== t.css && x(e, to(t.name || "v")), x(e, t), e
            }
        }
        var to = u(function(t) {
                return {
                    enterClass: t + "-enter",
                    enterToClass: t + "-enter-to",
                    enterActiveClass: t + "-enter-active",
                    leaveClass: t + "-leave",
                    leaveToClass: t + "-leave-to",
                    leaveActiveClass: t + "-leave-active"
                }
            }),
            eo = H && !X,
            no = "transition",
            ro = "animation",
            oo = "transition",
            io = "transitionend",
            ao = "animation",
            so = "animationend";
        eo && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (oo = "WebkitTransition", io = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (ao = "WebkitAnimation", so = "webkitAnimationEnd"));
        var co = H ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
            return t()
        };

        function uo(t) {
            co(function() {
                co(t)
            })
        }

        function lo(t, e) {
            var n = t._transitionClasses || (t._transitionClasses = []);
            n.indexOf(e) < 0 && (n.push(e), Zr(t, e))
        }

        function fo(t, e) {
            t._transitionClasses && _(t._transitionClasses, e), Jr(t, e)
        }

        function po(e, t, n) {
            var r = vo(e, t),
                o = r.type,
                i = r.timeout,
                a = r.propCount;
            if (!o) return n();
            var s = o === no ? io : so,
                c = 0,
                u = function() {
                    e.removeEventListener(s, l), n()
                },
                l = function(t) {
                    t.target === e && ++c >= a && u()
                };
            setTimeout(function() {
                c < a && u()
            }, i + 1), e.addEventListener(s, l)
        }
        var ho = /\b(transform|all)(,|$)/;

        function vo(t, e) {
            var n, r = window.getComputedStyle(t),
                o = (r[oo + "Delay"] || "").split(", "),
                i = (r[oo + "Duration"] || "").split(", "),
                a = mo(o, i),
                s = (r[ao + "Delay"] || "").split(", "),
                c = (r[ao + "Duration"] || "").split(", "),
                u = mo(s, c),
                l = 0,
                f = 0;
            return e === no ? 0 < a && (n = no, l = a, f = i.length) : e === ro ? 0 < u && (n = ro, l = u, f = c.length) : f = (n = 0 < (l = Math.max(a, u)) ? u < a ? no : ro : null) ? n === no ? i.length : c.length : 0, {
                type: n,
                timeout: l,
                propCount: f,
                hasTransform: n === no && ho.test(r[oo + "Property"])
            }
        }

        function mo(n, t) {
            for (; n.length < t.length;) n = n.concat(n);
            return Math.max.apply(null, t.map(function(t, e) {
                return go(t) + go(n[e])
            }))
        }

        function go(t) {
            return 1e3 * Number(t.slice(0, -1).replace(",", "."))
        }

        function yo(n, t) {
            var r = n.elm;
            B(r._leaveCb) && (r._leaveCb.cancelled = !0, r._leaveCb());
            var e = Qr(n.data.transition);
            if (!I(e) && !B(r._enterCb) && 1 === r.nodeType) {
                for (var o = e.css, i = e.type, a = e.enterClass, s = e.enterToClass, c = e.enterActiveClass, u = e.appearClass, l = e.appearToClass, f = e.appearActiveClass, d = e.beforeEnter, p = e.enter, h = e.afterEnter, v = e.enterCancelled, m = e.beforeAppear, g = e.appear, y = e.afterAppear, _ = e.appearCancelled, b = e.duration, w = Xe, x = Xe.$vnode; x && x.parent;) w = x.context, x = x.parent;
                var O = !w._isMounted || !n.isRootInsert;
                if (!O || g || "" === g) {
                    var $ = O && u ? u : a,
                        k = O && f ? f : c,
                        S = O && l ? l : s,
                        T = O && m || d,
                        C = O && "function" == typeof g ? g : p,
                        E = O && y || h,
                        A = O && _ || v,
                        N = R(M(b) ? b.enter : b);
                    0;
                    var j = !1 !== o && !X,
                        P = wo(C),
                        L = r._enterCb = U(function() {
                            j && (fo(r, S), fo(r, k)), L.cancelled ? (j && fo(r, $), A && A(r)) : E && E(r), r._enterCb = null
                        });
                    n.data.show || ae(n, "insert", function() {
                        var t = r.parentNode,
                            e = t && t._pending && t._pending[n.key];
                        e && e.tag === n.tag && e.elm._leaveCb && e.elm._leaveCb(), C && C(r, L)
                    }), T && T(r), j && (lo(r, $), lo(r, k), uo(function() {
                        fo(r, $), L.cancelled || (lo(r, S), P || (bo(N) ? setTimeout(L, N) : po(r, i, L)))
                    })), n.data.show && (t && t(), C && C(r, L)), j || P || L()
                }
            }
        }

        function _o(t, e) {
            var n = t.elm;
            B(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
            var r = Qr(t.data.transition);
            if (I(r) || 1 !== n.nodeType) return e();
            if (!B(n._leaveCb)) {
                var o = r.css,
                    i = r.type,
                    a = r.leaveClass,
                    s = r.leaveToClass,
                    c = r.leaveActiveClass,
                    u = r.beforeLeave,
                    l = r.leave,
                    f = r.afterLeave,
                    d = r.leaveCancelled,
                    p = r.delayLeave,
                    h = r.duration,
                    v = !1 !== o && !X,
                    m = wo(l),
                    g = R(M(h) ? h.leave : h);
                0;
                var y = n._leaveCb = U(function() {
                    n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null), v && (fo(n, s), fo(n, c)), y.cancelled ? (v && fo(n, a), d && d(n)) : (e(), f && f(n)), n._leaveCb = null
                });
                p ? p(_) : _()
            }

            function _() {
                y.cancelled || (!t.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t), u && u(n), v && (lo(n, a), lo(n, c), uo(function() {
                    fo(n, a), y.cancelled || (lo(n, s), m || (bo(g) ? setTimeout(y, g) : po(n, i, y)))
                })), l && l(n, y), v || m || y())
            }
        }

        function bo(t) {
            return "number" == typeof t && !isNaN(t)
        }

        function wo(t) {
            if (I(t)) return !1;
            var e = t.fns;
            return B(e) ? wo(Array.isArray(e) ? e[0] : e) : 1 < (t._length || t.length)
        }

        function xo(t, e) {
            !0 !== e.data.show && yo(e)
        }
        var Oo = function(t) {
            var r, e, m = {},
                n = t.modules,
                g = t.nodeOps;
            for (r = 0; r < dr.length; ++r)
                for (m[dr[r]] = [], e = 0; e < n.length; ++e) B(n[e][dr[r]]) && m[dr[r]].push(n[e][dr[r]]);

            function o(t) {
                var e = g.parentNode(t);
                B(e) && g.removeChild(e, t)
            }

            function y(t, e, n, r, o, i, a) {
                if (B(t.elm) && B(i) && (t = i[a] = yt(t)), t.isRootInsert = !o, ! function(t, e, n, r) {
                        var o = t.data;
                        if (B(o)) {
                            var i = B(t.componentInstance) && o.keepAlive;
                            if (B(o = o.hook) && B(o = o.init) && o(t, !1), B(t.componentInstance)) return p(t, e), l(n, t.elm, r), C(i) && function(t, e, n, r) {
                                for (var o, i = t; i.componentInstance;)
                                    if (i = i.componentInstance._vnode, B(o = i.data) && B(o = o.transition)) {
                                        for (o = 0; o < m.activate.length; ++o) m.activate[o](fr, i);
                                        e.push(i);
                                        break
                                    }
                                l(n, t.elm, r)
                            }(t, e, n, r), !0
                        }
                    }(t, e, n, r)) {
                    var s = t.data,
                        c = t.children,
                        u = t.tag;
                    B(u) ? (t.elm = t.ns ? g.createElementNS(t.ns, u) : g.createElement(u, t), f(t), h(t, c, e), B(s) && v(t, e)) : C(t.isComment) ? t.elm = g.createComment(t.text) : t.elm = g.createTextNode(t.text), l(n, t.elm, r)
                }
            }

            function p(t, e) {
                B(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), t.elm = t.componentInstance.$el, _(t) ? (v(t, e), f(t)) : (lr(t), e.push(t))
            }

            function l(t, e, n) {
                B(t) && (B(n) ? g.parentNode(n) === t && g.insertBefore(t, e, n) : g.appendChild(t, e))
            }

            function h(t, e, n) {
                if (Array.isArray(e))
                    for (var r = 0; r < e.length; ++r) y(e[r], n, t.elm, null, !0, e, r);
                else E(t.text) && g.appendChild(t.elm, g.createTextNode(String(t.text)))
            }

            function _(t) {
                for (; t.componentInstance;) t = t.componentInstance._vnode;
                return B(t.tag)
            }

            function v(t, e) {
                for (var n = 0; n < m.create.length; ++n) m.create[n](fr, t);
                B(r = t.data.hook) && (B(r.create) && r.create(fr, t), B(r.insert) && e.push(t))
            }

            function f(t) {
                var e;
                if (B(e = t.fnScopeId)) g.setStyleScope(t.elm, e);
                else
                    for (var n = t; n;) B(e = n.context) && B(e = e.$options._scopeId) && g.setStyleScope(t.elm, e), n = n.parent;
                B(e = Xe) && e !== t.context && e !== t.fnContext && B(e = e.$options._scopeId) && g.setStyleScope(t.elm, e)
            }

            function b(t, e, n, r, o, i) {
                for (; r <= o; ++r) y(n[r], i, t, e, !1, n, r)
            }

            function w(t) {
                var e, n, r = t.data;
                if (B(r))
                    for (B(e = r.hook) && B(e = e.destroy) && e(t), e = 0; e < m.destroy.length; ++e) m.destroy[e](t);
                if (B(e = t.children))
                    for (n = 0; n < t.children.length; ++n) w(t.children[n])
            }

            function x(t, e, n) {
                for (; e <= n; ++e) {
                    var r = t[e];
                    B(r) && (B(r.tag) ? (i(r), w(r)) : o(r.elm))
                }
            }

            function i(t, e) {
                if (B(e) || B(t.data)) {
                    var n, r = m.remove.length + 1;
                    for (B(e) ? e.listeners += r : e = function(t, e) {
                            function n() {
                                0 == --n.listeners && o(t)
                            }
                            return n.listeners = e, n
                        }(t.elm, r), B(n = t.componentInstance) && B(n = n._vnode) && B(n.data) && i(n, e), n = 0; n < m.remove.length; ++n) m.remove[n](t, e);
                    B(n = t.data.hook) && B(n = n.remove) ? n(t, e) : e()
                } else o(t.elm)
            }

            function O(t, e, n, r) {
                for (var o = n; o < r; o++) {
                    var i = e[o];
                    if (B(i) && pr(t, i)) return o
                }
            }

            function $(t, e, n, r, o, i) {
                if (t !== e) {
                    B(e.elm) && B(r) && (e = r[o] = yt(e));
                    var a = e.elm = t.elm;
                    if (C(t.isAsyncPlaceholder)) B(e.asyncFactory.resolved) ? T(t.elm, e, n) : e.isAsyncPlaceholder = !0;
                    else if (C(e.isStatic) && C(t.isStatic) && e.key === t.key && (C(e.isCloned) || C(e.isOnce))) e.componentInstance = t.componentInstance;
                    else {
                        var s, c = e.data;
                        B(c) && B(s = c.hook) && B(s = s.prepatch) && s(t, e);
                        var u = t.children,
                            l = e.children;
                        if (B(c) && _(e)) {
                            for (s = 0; s < m.update.length; ++s) m.update[s](t, e);
                            B(s = c.hook) && B(s = s.update) && s(t, e)
                        }
                        I(e.text) ? B(u) && B(l) ? u !== l && function(t, e, n, r, o) {
                            for (var i, a, s, c = 0, u = 0, l = e.length - 1, f = e[0], d = e[l], p = n.length - 1, h = n[0], v = n[p], m = !o; c <= l && u <= p;) I(f) ? f = e[++c] : I(d) ? d = e[--l] : pr(f, h) ? ($(f, h, r, n, u), f = e[++c], h = n[++u]) : pr(d, v) ? ($(d, v, r, n, p), d = e[--l], v = n[--p]) : pr(f, v) ? ($(f, v, r, n, p), m && g.insertBefore(t, f.elm, g.nextSibling(d.elm)), f = e[++c], v = n[--p]) : (pr(d, h) ? ($(d, h, r, n, u), m && g.insertBefore(t, d.elm, f.elm), d = e[--l]) : (I(i) && (i = hr(e, c, l)), I(a = B(h.key) ? i[h.key] : O(h, e, c, l)) ? y(h, r, t, f.elm, !1, n, u) : pr(s = e[a], h) ? ($(s, h, r, n, u), e[a] = void 0, m && g.insertBefore(t, s.elm, f.elm)) : y(h, r, t, f.elm, !1, n, u)), h = n[++u]);
                            l < c ? b(t, I(n[p + 1]) ? null : n[p + 1].elm, n, u, p, r) : p < u && x(e, c, l)
                        }(a, u, l, n, i) : B(l) ? (B(t.text) && g.setTextContent(a, ""), b(a, null, l, 0, l.length - 1, n)) : B(u) ? x(u, 0, u.length - 1) : B(t.text) && g.setTextContent(a, "") : t.text !== e.text && g.setTextContent(a, e.text), B(c) && B(s = c.hook) && B(s = s.postpatch) && s(t, e)
                    }
                }
            }

            function k(t, e, n) {
                if (C(n) && B(t.parent)) t.parent.data.pendingInsert = e;
                else
                    for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r])
            }
            var S = a("attrs,class,staticClass,staticStyle,key");

            function T(t, e, n, r) {
                var o, i = e.tag,
                    a = e.data,
                    s = e.children;
                if (r = r || a && a.pre, e.elm = t, C(e.isComment) && B(e.asyncFactory)) return e.isAsyncPlaceholder = !0;
                if (B(a) && (B(o = a.hook) && B(o = o.init) && o(e, !0), B(o = e.componentInstance))) return p(e, n), !0;
                if (B(i)) {
                    if (B(s))
                        if (t.hasChildNodes())
                            if (B(o = a) && B(o = o.domProps) && B(o = o.innerHTML)) {
                                if (o !== t.innerHTML) return !1
                            } else {
                                for (var c = !0, u = t.firstChild, l = 0; l < s.length; l++) {
                                    if (!u || !T(u, s[l], n, r)) {
                                        c = !1;
                                        break
                                    }
                                    u = u.nextSibling
                                }
                                if (!c || u) return !1
                            }
                    else h(e, s, n);
                    if (B(a)) {
                        var f = !1;
                        for (var d in a)
                            if (!S(d)) {
                                f = !0, v(e, n);
                                break
                            }!f && a.class && ne(a.class)
                    }
                } else t.data !== e.text && (t.data = e.text);
                return !0
            }
            return function(t, e, n, r) {
                if (!I(e)) {
                    var o, i = !1,
                        a = [];
                    if (I(t)) i = !0, y(e, a);
                    else {
                        var s = B(t.nodeType);
                        if (!s && pr(t, e)) $(t, e, a, null, null, r);
                        else {
                            if (s) {
                                if (1 === t.nodeType && t.hasAttribute(N) && (t.removeAttribute(N), n = !0), C(n) && T(t, e, a)) return k(e, a, !0), t;
                                o = t, t = new ht(g.tagName(o).toLowerCase(), {}, [], void 0, o)
                            }
                            var c = t.elm,
                                u = g.parentNode(c);
                            if (y(e, a, c._leaveCb ? null : u, g.nextSibling(c)), B(e.parent))
                                for (var l = e.parent, f = _(e); l;) {
                                    for (var d = 0; d < m.destroy.length; ++d) m.destroy[d](l);
                                    if (l.elm = e.elm, f) {
                                        for (var p = 0; p < m.create.length; ++p) m.create[p](fr, l);
                                        var h = l.data.hook.insert;
                                        if (h.merged)
                                            for (var v = 1; v < h.fns.length; v++) h.fns[v]()
                                    } else lr(l);
                                    l = l.parent
                                }
                            B(u) ? x([t], 0, 0) : B(t.tag) && w(t)
                        }
                    }
                    return k(e, a, i), e.elm
                }
                B(t) && w(t)
            }
        }({
            nodeOps: cr,
            modules: [$r, Tr, Br, Rr, Yr, H ? {
                create: xo,
                activate: xo,
                remove: function(t, e) {
                    !0 !== t.data.show ? _o(t, e) : e()
                }
            } : {}].concat(br)
        });
        X && document.addEventListener("selectionchange", function() {
            var t = document.activeElement;
            t && t.vmodel && No(t, "input")
        });
        var $o = {
            inserted: function(t, e, n, r) {
                "select" === n.tag ? (r.elm && !r.elm._vOptions ? ae(n, "postpatch", function() {
                    $o.componentUpdated(t, e, n)
                }) : ko(t, e, n.context), t._vOptions = [].map.call(t.options, Co)) : ("textarea" === n.tag || sr(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", Eo), t.addEventListener("compositionend", Ao), t.addEventListener("change", Ao), X && (t.vmodel = !0)))
            },
            componentUpdated: function(t, e, n) {
                if ("select" === n.tag) {
                    ko(t, e, n.context);
                    var r = t._vOptions,
                        o = t._vOptions = [].map.call(t.options, Co);
                    if (o.some(function(t, e) {
                            return !T(t, r[e])
                        }))(t.multiple ? e.value.some(function(t) {
                        return To(t, o)
                    }) : e.value !== e.oldValue && To(e.value, o)) && No(t, "change")
                }
            }
        };

        function ko(t, e, n) {
            So(t, e, n), (Y || Z) && setTimeout(function() {
                So(t, e, n)
            }, 0)
        }

        function So(t, e, n) {
            var r = e.value,
                o = t.multiple;
            if (!o || Array.isArray(r)) {
                for (var i, a, s = 0, c = t.options.length; s < c; s++)
                    if (a = t.options[s], o) i = -1 < A(r, Co(a)), a.selected !== i && (a.selected = i);
                    else if (T(Co(a), r)) return void(t.selectedIndex !== s && (t.selectedIndex = s));
                o || (t.selectedIndex = -1)
            }
        }

        function To(e, t) {
            return t.every(function(t) {
                return !T(t, e)
            })
        }

        function Co(t) {
            return "_value" in t ? t._value : t.value
        }

        function Eo(t) {
            t.target.composing = !0
        }

        function Ao(t) {
            t.target.composing && (t.target.composing = !1, No(t.target, "input"))
        }

        function No(t, e) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(e, !0, !0), t.dispatchEvent(n)
        }

        function jo(t) {
            return !t.componentInstance || t.data && t.data.transition ? t : jo(t.componentInstance._vnode)
        }
        var Po = {
                model: $o,
                show: {
                    bind: function(t, e, n) {
                        var r = e.value,
                            o = (n = jo(n)).data && n.data.transition,
                            i = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                        r && o ? (n.data.show = !0, yo(n, function() {
                            t.style.display = i
                        })) : t.style.display = r ? i : "none"
                    },
                    update: function(t, e, n) {
                        var r = e.value;
                        !r != !e.oldValue && ((n = jo(n)).data && n.data.transition ? (n.data.show = !0, r ? yo(n, function() {
                            t.style.display = t.__vOriginalDisplay
                        }) : _o(n, function() {
                            t.style.display = "none"
                        })) : t.style.display = r ? t.__vOriginalDisplay : "none")
                    },
                    unbind: function(t, e, n, r, o) {
                        o || (t.style.display = t.__vOriginalDisplay)
                    }
                }
            },
            Lo = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            };

        function Io(t) {
            var e = t && t.componentOptions;
            return e && e.Ctor.options.abstract ? Io(He(e.children)) : t
        }

        function Bo(t) {
            var e = {},
                n = t.$options;
            for (var r in n.propsData) e[r] = t[r];
            var o = n._parentListeners;
            for (var i in o) e[p(i)] = o[i];
            return e
        }

        function Mo(t, e) {
            if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
                props: e.componentOptions.propsData
            })
        }
        var Ro = function(t) {
                return t.tag || Ge(t)
            },
            Uo = function(t) {
                return "show" === t.name
            },
            Do = {
                name: "transition",
                props: Lo,
                abstract: !0,
                render: function(t) {
                    var e = this,
                        n = this.$slots.default;
                    if (n && (n = n.filter(Ro)).length) {
                        0;
                        var r = this.mode;
                        0;
                        var o = n[0];
                        if (function(t) {
                                for (; t = t.parent;)
                                    if (t.data.transition) return !0
                            }(this.$vnode)) return o;
                        var i = Io(o);
                        if (!i) return o;
                        if (this._leaving) return Mo(t, o);
                        var a = "__transition-" + this._uid + "-";
                        i.key = null == i.key ? i.isComment ? a + "comment" : a + i.tag : E(i.key) ? 0 === String(i.key).indexOf(a) ? i.key : a + i.key : i.key;
                        var s, c, u = (i.data || (i.data = {})).transition = Bo(this),
                            l = this._vnode,
                            f = Io(l);
                        if (i.data.directives && i.data.directives.some(Uo) && (i.data.show = !0), f && f.data && (s = i, (c = f).key !== s.key || c.tag !== s.tag) && !Ge(f) && (!f.componentInstance || !f.componentInstance._vnode.isComment)) {
                            var d = f.data.transition = x({}, u);
                            if ("out-in" === r) return this._leaving = !0, ae(d, "afterLeave", function() {
                                e._leaving = !1, e.$forceUpdate()
                            }), Mo(t, o);
                            if ("in-out" === r) {
                                if (Ge(i)) return l;
                                var p, h = function() {
                                    p()
                                };
                                ae(u, "afterEnter", h), ae(u, "enterCancelled", h), ae(d, "delayLeave", function(t) {
                                    p = t
                                })
                            }
                        }
                        return o
                    }
                }
            },
            qo = x({
                tag: String,
                moveClass: String
            }, Lo);

        function zo(t) {
            t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
        }

        function Fo(t) {
            t.data.newPos = t.elm.getBoundingClientRect()
        }

        function Go(t) {
            var e = t.data.pos,
                n = t.data.newPos,
                r = e.left - n.left,
                o = e.top - n.top;
            if (r || o) {
                t.data.moved = !0;
                var i = t.elm.style;
                i.transform = i.WebkitTransform = "translate(" + r + "px," + o + "px)", i.transitionDuration = "0s"
            }
        }
        delete qo.mode;
        var Ho = {
            Transition: Do,
            TransitionGroup: {
                props: qo,
                beforeMount: function() {
                    var r = this,
                        o = this._update;
                    this._update = function(t, e) {
                        var n = Ze(r);
                        r.__patch__(r._vnode, r.kept, !1, !0), r._vnode = r.kept, n(), o.call(r, t, e)
                    }
                },
                render: function(t) {
                    for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, o = this.$slots.default || [], i = this.children = [], a = Bo(this), s = 0; s < o.length; s++) {
                        var c = o[s];
                        if (c.tag)
                            if (null != c.key && 0 !== String(c.key).indexOf("__vlist")) i.push(c), ((n[c.key] = c).data || (c.data = {})).transition = a;
                            else;
                    }
                    if (r) {
                        for (var u = [], l = [], f = 0; f < r.length; f++) {
                            var d = r[f];
                            d.data.transition = a, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? u.push(d) : l.push(d)
                        }
                        this.kept = t(e, null, u), this.removed = l
                    }
                    return t(e, null, i)
                },
                updated: function() {
                    var t = this.prevChildren,
                        r = this.moveClass || (this.name || "v") + "-move";
                    t.length && this.hasMove(t[0].elm, r) && (t.forEach(zo), t.forEach(Fo), t.forEach(Go), this._reflow = document.body.offsetHeight, t.forEach(function(t) {
                        if (t.data.moved) {
                            var n = t.elm,
                                e = n.style;
                            lo(n, r), e.transform = e.WebkitTransform = e.transitionDuration = "", n.addEventListener(io, n._moveCb = function t(e) {
                                e && e.target !== n || e && !/transform$/.test(e.propertyName) || (n.removeEventListener(io, t), n._moveCb = null, fo(n, r))
                            })
                        }
                    }))
                },
                methods: {
                    hasMove: function(t, e) {
                        if (!eo) return !1;
                        if (this._hasMove) return this._hasMove;
                        var n = t.cloneNode();
                        t._transitionClasses && t._transitionClasses.forEach(function(t) {
                            Jr(n, t)
                        }), Zr(n, e), n.style.display = "none", this.$el.appendChild(n);
                        var r = vo(n);
                        return this.$el.removeChild(n), this._hasMove = r.hasTransform
                    }
                }
            }
        };
        Nn.config.mustUseProp = function(t, e, n) {
            return "value" === n && Fn(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
        }, Nn.config.isReservedTag = ir, Nn.config.isReservedAttr = zn, Nn.config.getTagNamespace = function(t) {
            return or(t) ? "svg" : "math" === t ? "math" : void 0
        }, Nn.config.isUnknownElement = function(t) {
            if (!H) return !0;
            if (ir(t)) return !1;
            if (t = t.toLowerCase(), null != ar[t]) return ar[t];
            var e = document.createElement(t);
            return -1 < t.indexOf("-") ? ar[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : ar[t] = /HTMLUnknownElement/.test(e.toString())
        }, x(Nn.options.directives, Po), x(Nn.options.components, Ho), Nn.prototype.__patch__ = H ? Oo : $, Nn.prototype.$mount = function(t, e) {
            return t = t && H ? function(t) {
                if ("string" != typeof t) return t;
                var e = document.querySelector(t);
                return e || document.createElement("div")
            }(t) : void 0, r = t, o = e, (n = this).$el = r, n.$options.render || (n.$options.render = mt), tn(n, "beforeMount"), new pn(n, function() {
                n._update(n._render(), o)
            }, $, {
                before: function() {
                    n._isMounted && !n._isDestroyed && tn(n, "beforeUpdate")
                }
            }, !0), o = !1, null == n.$vnode && (n._isMounted = !0, tn(n, "mounted")), n;
            var n, r, o
        }, H && setTimeout(function() {
            L.devtools && ot && ot.emit("init", Nn)
        }, 0), Wo.a = Nn
    }).call(this, e(22), e(42).setImmediate)
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = function() {}
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return r
    }), n.d(e, "a", function() {
        return o
    });
    var r = "URL_CHANGED",
        o = "CHAT_OPENED"
}, function(t, e, n) {
    "use strict";

    function r() {
        return (r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }).apply(this, arguments)
    }
    var o = function(r) {
        return r = r || Object.create(null), {
            on: function(t, e) {
                (r[t] || (r[t] = [])).push(e)
            },
            off: function(t, e) {
                r[t] && r[t].splice(r[t].indexOf(e) >>> 0, 1)
            },
            emit: function(e, n) {
                (r[e] || []).slice().map(function(t) {
                    t(n)
                }), (r["*"] || []).slice().map(function(t) {
                    t(e, n)
                })
            }
        }
    };
    e.a = function() {
        var n = Object.create(null),
            i = o(n);
        return r({}, i, {
            off: function(t, e) {
                t ? i.off(t, e) : Object.keys(n).forEach(function(t) {
                    delete n[t]
                })
            },
            once: function(r, o) {
                i.on(r, function t(e, n) {
                    i.off(r, t), o(e, n)
                })
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    n(1), "undefined" == typeof Element || Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    n.d(e, "a", function() {
        return r
    });
    document.documentElement.currentStyle;

    function r(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }
}, function(e, t) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(t) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = r = function(t) {
            return n(t)
        } : e.exports = r = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }, r(t)
    }
    e.exports = r
}, function(t) {
    t.exports = {
        polyfillUrl: "https://cdn.chatbot.com/widget/polyfill.js",
        apiUrl: "https://cdn.chatbot.com/widget/api",
        appUrl: "https://app.chatbot.com",
        cdnUrl: "https://cdn.chatbot.com/widget",
        linkPrefix: "https://url.chatbot.com"
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var r = n(12),
        o = n.n(r),
        i = function(t) {
            return null !== t && "object" === o()(t)
        }
}, function(t, e, n) {
    var r = n(39),
        o = n(40),
        i = n(41);
    t.exports = function(t) {
        return r(t) || o(t) || i()
    }
}, function(t, e, n) {
    "use strict";
    e.a = function(e) {
        return new Promise(function(t) {
            t(e())
        })
    }
}, function(t, e, n) {
    var a = n(28);
    t.exports = function(t, e) {
        if (null == t) return {};
        var n, r, o = a(t, e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (r = 0; r < i.length; r++) n = i[r], 0 <= e.indexOf(n) || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
        }
        return o
    }
}, function(t, e, n) {
    var r = n(29),
        o = n(30),
        i = n(31);
    t.exports = function(t, e) {
        return r(t) || o(t, e) || i()
    }
}, function(t, e) {
    t.exports = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function(t, e) {
    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    t.exports = function(t, e, n) {
        return e && r(t.prototype, e), n && r(t, n), t
    }
}, function(t, e, n) {
    "use strict";
    var c = n(1);

    function h() {
        return (h = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }).apply(this, arguments)
    }
    var u = n(16),
        w = n(10);

    function l(t, e) {
        if (null == t) return {};
        var n, r, o = {},
            i = Object.keys(t);
        for (r = 0; r < i.length; r++) n = i[r], 0 <= e.indexOf(n) || (o[n] = t[n]);
        return o
    }
    var f = n(11);
    n.d(e, "a", function() {
        return q
    }), n.d(e, "b", function() {
        return F
    });
    var d = function(r) {
        return function(e) {
            return function(t, n) {
                0 === t && e(0, function(t, e) {
                    n(t, 1 === t ? r(e) : e)
                })
            }
        }
    };
    var r = function(a) {
        return void 0 === a && (a = {}),
            function(t) {
                "function" == typeof a && (a = {
                    next: a
                });
                var n, e = a,
                    r = e.next,
                    o = e.error,
                    i = e.complete;
                t(0, function(t, e) {
                    0 === t && (n = e), 1 === t && r && r(e), 1 !== t && 0 !== t || n(1), 2 === t && !e && i && i(), 2 === t && e && o && o(e)
                });
                return function() {
                    n && n(2)
                }
            }
    };

    function v(n) {
        return new Promise(function(t, e) {
            var s;
            r({
                next: t,
                error: e,
                complete: function() {
                    var t = new Error("No elements in sequence.");
                    t.code = "NO_ELEMENTS", e(t)
                }
            })((s = n, function(t, n) {
                if (0 === t) {
                    var r, o, i = !1,
                        a = !1;
                    s(0, function(t, e) {
                        return 0 === t ? (r = e, void n(0, function(t, e) {
                            2 === t && (a = !0), r(t, e)
                        })) : 1 === t ? (i = !0, o = e, void r(1)) : void(2 === t && !e && i && (n(1, o), a) || n(t, e))
                    })
                }
            }))
        })
    }
    var x = function(o) {
            return function(e) {
                return function(t, n) {
                    var r;
                    0 === t && e(0, function(t, e) {
                        0 === t ? n(t, r = e) : 1 === t ? o(e) ? n(t, e) : r(1) : n(t, e)
                    })
                }
            }
        },
        O = function(r) {
            return function(t) {
                var n;
                t(0, function(t, e) {
                    0 === t && (n = e), 1 === t && r(e), 1 !== t && 0 !== t || n(1)
                })
            }
        };

    function $(n) {
        return void 0 === n && (n = -1),
            function(e) {
                return function(t, r) {
                    if (0 === t) {
                        var o, i = !1,
                            a = n,
                            s = function(t, e) {
                                o(t, e)
                            };
                        ! function n() {
                            e(0, function(t, e) {
                                return 0 === t ? (o = e, i ? void s(1) : (i = !0, void r(0, s))) : 2 === t && e && 0 !== a ? (a--, void n()) : void r(t, e)
                            })
                        }()
                    }
                }
            }
    }
    var k = function(e) {
            var c, u = [];
            return function(t, a) {
                if (0 === t) {
                    u.push(a);
                    var s = function(t, e) {
                        if (2 === t) {
                            var n = u.indexOf(a); - 1 < n && u.splice(n, 1), u.length || c(2)
                        } else c(t, e)
                    };
                    1 !== u.length ? a(0, s) : e(0, function(t, e) {
                        if (0 === t) c = e, a(0, s);
                        else {
                            var n = u.slice(0),
                                r = Array.isArray(n),
                                o = 0;
                            for (n = r ? n : n[Symbol.iterator]();;) {
                                var i;
                                if (r) {
                                    if (o >= n.length) break;
                                    i = n[o++]
                                } else {
                                    if ((o = n.next()).done) break;
                                    i = o.value
                                }
                                i(t, e)
                            }
                        }
                        2 === t && (u = [])
                    })
                }
            }
        },
        S = function(a) {
            return function(e) {
                return function(t, n) {
                    if (0 === t) {
                        var r, o = 0;
                        e(0, function(t, e) {
                            0 === t ? (r = e, n(0, i)) : 1 === t ? o < a && (o++, n(t, e), o === a && (n(2), r(2))) : n(t, e)
                        })
                    }

                    function i(t, e) {
                        o < a && r(t, e)
                    }
                }
            }
        },
        p = {},
        T = function(s) {
            return function(e) {
                return function(t, n) {
                    if (0 === t) {
                        var r, o, i = !1,
                            a = p;
                        e(0, function(t, e) {
                            if (0 === t) return r = e, s(0, function(t, e) {
                                if (0 !== t) return 1 === t ? (a = void 0, o(2), r(2), void(i && n(2))) : void(2 === t && (o = null, e && (a = e, r(2), i && n(t, e))));
                                (o = e)(1)
                            }), i = !0, n(0, function(t, e) {
                                a === p && (2 === t && o && o(2), r(t, e))
                            }), void(a !== p && n(2, a));
                            2 === t && o(2), n(t, e)
                        })
                    }
                }
            }
        };

    function C(s) {
        return function(e) {
            return function(t, n) {
                if (0 === t) {
                    var r, o, i = s instanceof Date;
                    e(0, function(t, e) {
                        if (0 === t) return r = e, a(i ? s - Date.now() : s), void n(0, function(t, e) {
                            2 === t && clearTimeout(o), r(t, e)
                        });
                        2 === t ? clearTimeout(o) : 1 !== t || i || (clearTimeout(o), a(s)), n(t, e)
                    })
                }

                function a(t) {
                    o = setTimeout(function() {
                        r(2);
                        var t = new Error("Timeout.");
                        t.code = "TIMEOUT", n(2, t)
                    }, t)
                }
            }
        }
    }
    var o = "@@livechat/postmessenger",
        E = "handshake",
        m = "response",
        i = function(e) {
            return function(t, r) {
                if (0 === t) {
                    var o, i, a = !1;
                    e(0, function(t, e) {
                        if (0 === t) o = e, r(0, s);
                        else if (1 === t) {
                            var n = e;
                            i && i(2), n(0, function(t, e) {
                                0 === t ? (i = e)(1) : 1 === t ? r(1, e) : 2 === t && e ? (o(2), r(2, e)) : 2 === t && (a ? r(2) : (i = void 0, o(1)))
                            })
                        } else 2 === t && e ? (i && i(2), r(2, e)) : 2 === t && (i ? a = !0 : r(2))
                    })
                }

                function s(t, e) {
                    1 === t && (i || o)(1, e), 2 === t && (i && i(2), o(2))
                }
            }
        };

    function a(r) {
        return function(t, e) {
            if (0 === t) {
                var n = !1;
                e(0, function(t) {
                    2 === t && (n = !0)
                }), n || e(2, r || new Error)
            }
        }
    }
    var g = function(o, i, a) {
            return function(t, e) {
                if (0 === t) {
                    var n = !1,
                        r = function(t) {
                            e(1, t)
                        };
                    e(0, function(t) {
                        2 === t && (n = !0, o.removeEventListener(i, r, a))
                    }), n || o.addEventListener(i, r, a)
                }
            }
        },
        s = function(t) {
            return !!t.data && t.data[o]
        },
        A = Object(c.h)(function() {
            return k(d(function(t) {
                return t.data.origin = t.origin, t.data
            })(x(s)(g(window, "message"))))
        });

    function N(e) {
        return function(t) {
            return i(d(e)(t))
        }
    }
    var y = 0,
        j = function(t, n, r) {
            return i((o = function() {
                var e = y++;
                return r.request = e, n(r), S(1)(N(function(t) {
                    if (!t.data.error) return r = function() {
                            return t.data.result
                        },
                        function(t, e) {
                            if (0 === t) {
                                var n = !1;
                                e(0, function(t) {
                                    2 === t && (n = !0)
                                }), e(1, r()), n || e(2)
                            }
                        };
                    var r, e = t.data.result,
                        n = e.real,
                        o = e.error;
                    if (!n) return a(o);
                    var i = new Error(o.message);
                    return Object(c.e)("code", o) && (i.code = o.code), a(i)
                })(x(function(t) {
                    return t.type === m && t.request === e
                })(t)))
            }, function(t, e) {
                if (0 === t) {
                    var n = !1;
                    e(0, function(t) {
                        2 === t && (n = !0)
                    }), e(1, o()), n || e(2)
                }
            }));
            var o
        },
        P = function(t, o, i, a, e) {
            return void 0 === e && (e = null), h({}, t, {
                call: function(t) {
                    for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return v(j(o, a, i("call", {
                        method: t,
                        args: n
                    })))
                },
                emit: function(t, e) {
                    a(i("emit", {
                        event: t,
                        arg: e
                    }))
                },
                data: e
            })
        };
    var _ = function() {
        var s = [];
        return function(t, e) {
            if (0 === t) {
                var n = e;
                s.push(n), n(0, function(t) {
                    if (2 === t) {
                        var e = s.indexOf(n); - 1 < e && s.splice(e, 1)
                    }
                })
            } else
                for (var r, o = s.slice(0), i = 0, a = o.length; i < a; i++) r = o[i], -1 < s.indexOf(r) && r(t, e)
        }
    };

    function L() {
        var e = _();
        return [e, function() {
            var t = new Error("Destroyed.");
            t.code = "DESTROYED", e(2, t)
        }]
    }
    var I = function(t, e, n, r) {
            var o;
            return (o = {
                "@@livechat/postmessenger": !0
            }).owner = t, o.instance = e, o.type = n, o.data = r, o
        },
        B = function(o, i, a, s) {
            return function(r) {
                switch (r.type) {
                    case "call":
                        return void Object(u.a)(function() {
                            var t = r.data,
                                e = t.method,
                                n = t.args;
                            return s[e].apply(o, n)
                        }).then(function(t) {
                            r.type = m, r.data = {
                                error: !1,
                                result: t
                            }, a(r)
                        }, function(t) {
                            var e;
                            r.type = m, t instanceof Error ? (e = {
                                real: !0,
                                error: {
                                    message: t.message
                                }
                            }, Object(c.e)("code", t) && (e.error.code = t.code)) : e = {
                                real: !1,
                                error: t
                            }, r.data = {
                                error: !0,
                                result: e
                            }, a(r)
                        });
                    case "emit":
                        var t = r.data,
                            e = t.event,
                            n = t.arg;
                        return void i(e, n);
                    default:
                        return
                }
            }
        },
        M = function(t) {
            return Object(c.i)(function(t) {
                return "function" == typeof t
            }, t)
        },
        R = Object(c.d)(),
        U = 0,
        D = function(t) {
            var e = document.createElement("a");
            return e.href = t, e.origin ? "null" === e.origin ? "*" : e.origin : (4 < e.protocol.length ? e.protocol : window.location.protocol) + "//" + (e.host.length ? "80" === e.port || "443" === e.port ? e.hostname : e.host : window.location.host)
        };

    function b(t, e) {
        var n = t.frame,
            r = t.strictOrigin,
            o = void 0 === r || r;
        void 0 === e && (e = {});
        var i = M(e),
            a = i[0],
            s = i[1],
            c = L(),
            u = c[0],
            l = c[1],
            f = U++,
            d = n.contentWindow,
            p = o ? D(n.src) : "*",
            h = Object(w.a)(),
            v = function(t, e) {
                return I(R, f, t, e)
            },
            m = function(t) {
                d.postMessage(t, p)
            },
            g = k(x(function(t) {
                return t.owner === R && t.instance === f
            })(T(u)(A()))),
            y = P(h, g, v, m),
            _ = k(S(1)($(5)(C(500)(T(u)(j(g, m, v(E, s))))))),
            b = B(y, h.emit, m, a);
        return O(b)(N(function() {
            return g
        })(_)), {
            api: y,
            destroy: l,
            handshake$: _
        }
    }

    function q(p) {
        void 0 === p && (p = {});
        var t = S(1)(C(3e3)(x(function(t) {
            return t.type === E
        })(A())));
        return {
            promise: v(d(function(t) {
                var n = t.instance,
                    r = t.owner,
                    e = t.origin,
                    o = M(p),
                    i = o[0],
                    a = o[1],
                    s = window.parent,
                    c = Object(w.a)(),
                    u = function(t) {
                        s.postMessage(t, e)
                    },
                    l = x(function(t) {
                        return t.owner === r
                    })(A()),
                    f = P(c, l, function(t, e) {
                        return I(r, n, t, e)
                    }, u, t.data),
                    d = B(f, c.emit, u, i);
                return O(d)(l), u(h({}, t, {
                    type: m,
                    data: {
                        error: !1,
                        result: a
                    }
                })), f
            })(t))
        }
    }
    var z = function(t, e) {
        var n = document.createElement("iframe");
        return t.appendChild(n), n.src = e, n
    };

    function F(t, e) {
        var n, r = t.container,
            o = t.url,
            i = l(t, ["container", "url"]),
            a = z(r, o),
            s = function() {
                Object(f.a)(a), n && n.destroy()
            };
        return {
            destroy: s,
            frame: a,
            promise: v(S(1)(d(function(t) {
                var e = n.api;
                return e.data = t, e.destroy = s, e.frame = a, e
            })(N(function() {
                return (n = b(h({}, i, {
                    frame: a
                }), e)).handshake$
            })(g(a, "load")))))
        }
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.inherits = function(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
            r = Object.create(t.prototype);
        for (var o in n) r[o] = n[o];
        return (r.constructor = e).prototype = r, e
    }
}, function(t, e, n) {
    t.exports = n.p + "images/avatar.jpg"
}, , function(t, e, n) {
    var r = function() {
            return this || "object" == typeof self && self
        }() || Function("return this")(),
        o = r.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime"),
        i = o && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0, t.exports = n(27), o) r.regeneratorRuntime = i;
    else try {
        delete r.regeneratorRuntime
    } catch (t) {
        r.regeneratorRuntime = void 0
    }
}, function(j, t) {
    ! function(t) {
        "use strict";
        var c, e = Object.prototype,
            u = e.hasOwnProperty,
            n = "function" == typeof Symbol ? Symbol : {},
            o = n.iterator || "@@iterator",
            r = n.asyncIterator || "@@asyncIterator",
            i = n.toStringTag || "@@toStringTag",
            a = "object" == typeof j,
            s = t.regeneratorRuntime;
        if (s) a && (j.exports = s);
        else {
            (s = t.regeneratorRuntime = a ? j.exports : {}).wrap = _;
            var f = "suspendedStart",
                d = "suspendedYield",
                p = "executing",
                h = "completed",
                v = {},
                l = {};
            l[o] = function() {
                return this
            };
            var m = Object.getPrototypeOf,
                g = m && m(m(A([])));
            g && g !== e && u.call(g, o) && (l = g);
            var y = O.prototype = w.prototype = Object.create(l);
            x.prototype = y.constructor = O, O.constructor = x, O[i] = x.displayName = "GeneratorFunction", s.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === x || "GeneratorFunction" === (e.displayName || e.name))
            }, s.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, O) : (t.__proto__ = O, i in t || (t[i] = "GeneratorFunction")), t.prototype = Object.create(y), t
            }, s.awrap = function(t) {
                return {
                    __await: t
                }
            }, $(k.prototype), k.prototype[r] = function() {
                return this
            }, s.AsyncIterator = k, s.async = function(t, e, n, r) {
                var o = new k(_(t, e, n, r));
                return s.isGeneratorFunction(e) ? o : o.next().then(function(t) {
                    return t.done ? t.value : o.next()
                })
            }, $(y), y[i] = "Generator", y[o] = function() {
                return this
            }, y.toString = function() {
                return "[object Generator]"
            }, s.keys = function(n) {
                var r = [];
                for (var t in n) r.push(t);
                return r.reverse(),
                    function t() {
                        for (; r.length;) {
                            var e = r.pop();
                            if (e in n) return t.value = e, t.done = !1, t
                        }
                        return t.done = !0, t
                    }
            }, s.values = A, E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(C), !t)
                        for (var e in this) "t" === e.charAt(0) && u.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = c)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(n) {
                    if (this.done) throw n;
                    var r = this;

                    function t(t, e) {
                        return i.type = "throw", i.arg = n, r.next = t, e && (r.method = "next", r.arg = c), !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var o = this.tryEntries[e],
                            i = o.completion;
                        if ("root" === o.tryLoc) return t("end");
                        if (o.tryLoc <= this.prev) {
                            var a = u.call(o, "catchLoc"),
                                s = u.call(o, "finallyLoc");
                            if (a && s) {
                                if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                            } else if (a) {
                                if (this.prev < o.catchLoc) return t(o.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && u.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var o = r;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), C(n), v
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                C(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: A(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = c), v
                }
            }
        }

        function _(t, e, n, r) {
            var i, a, s, c, o = e && e.prototype instanceof w ? e : w,
                u = Object.create(o.prototype),
                l = new E(r || []);
            return u._invoke = (i = t, a = n, s = l, c = f, function(t, e) {
                if (c === p) throw new Error("Generator is already running");
                if (c === h) {
                    if ("throw" === t) throw e;
                    return N()
                }
                for (s.method = t, s.arg = e;;) {
                    var n = s.delegate;
                    if (n) {
                        var r = S(n, s);
                        if (r) {
                            if (r === v) continue;
                            return r
                        }
                    }
                    if ("next" === s.method) s.sent = s._sent = s.arg;
                    else if ("throw" === s.method) {
                        if (c === f) throw c = h, s.arg;
                        s.dispatchException(s.arg)
                    } else "return" === s.method && s.abrupt("return", s.arg);
                    c = p;
                    var o = b(i, a, s);
                    if ("normal" === o.type) {
                        if (c = s.done ? h : d, o.arg === v) continue;
                        return {
                            value: o.arg,
                            done: s.done
                        }
                    }
                    "throw" === o.type && (c = h, s.method = "throw", s.arg = o.arg)
                }
            }), u
        }

        function b(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }

        function w() {}

        function x() {}

        function O() {}

        function $(t) {
            ["next", "throw", "return"].forEach(function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            })
        }

        function k(c) {
            var e;
            this._invoke = function(n, r) {
                function t() {
                    return new Promise(function(t, e) {
                        ! function e(t, n, r, o) {
                            var i = b(c[t], c, n);
                            if ("throw" !== i.type) {
                                var a = i.arg,
                                    s = a.value;
                                return s && "object" == typeof s && u.call(s, "__await") ? Promise.resolve(s.__await).then(function(t) {
                                    e("next", t, r, o)
                                }, function(t) {
                                    e("throw", t, r, o)
                                }) : Promise.resolve(s).then(function(t) {
                                    a.value = t, r(a)
                                }, function(t) {
                                    return e("throw", t, r, o)
                                })
                            }
                            o(i.arg)
                        }(n, r, t, e)
                    })
                }
                return e = e ? e.then(t, t) : t()
            }
        }

        function S(t, e) {
            var n = t.iterator[e.method];
            if (n === c) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = c, S(t, e), "throw" === e.method)) return v;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return v
            }
            var r = b(n, t.iterator, e.arg);
            if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, v;
            var o = r.arg;
            return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = c), e.delegate = null, v) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v)
        }

        function T(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function C(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function E(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(T, this), this.reset(!0)
        }

        function A(e) {
            if (e) {
                var t = e[o];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                        r = function t() {
                            for (; ++n < e.length;)
                                if (u.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = c, t.done = !0, t
                        };
                    return r.next = r
                }
            }
            return {
                next: N
            }
        }

        function N() {
            return {
                value: c,
                done: !0
            }
        }
    }(function() {
        return this || "object" == typeof self && self
    }() || Function("return this")())
}, function(t, e) {
    t.exports = function(t, e) {
        if (null == t) return {};
        var n, r, o = {},
            i = Object.keys(t);
        for (r = 0; r < i.length; r++) n = i[r], 0 <= e.indexOf(n) || (o[n] = t[n]);
        return o
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) return t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = [],
            r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
        } catch (t) {
            o = !0, i = t
        } finally {
            try {
                r || null == s.return || s.return()
            } finally {
                if (o) throw i
            }
        }
        return n
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.AMPERSAND = e.CLOSEPAREN = e.CLOSEANGLEBRACKET = e.CLOSEBRACKET = e.CLOSEBRACE = e.OPENPAREN = e.OPENANGLEBRACKET = e.OPENBRACKET = e.OPENBRACE = e.WS = e.TLD = e.SYM = e.UNDERSCORE = e.SLASH = e.MAILTO = e.PROTOCOL = e.QUERY = e.POUND = e.PLUS = e.NUM = e.NL = e.LOCALHOST = e.PUNCTUATION = e.DOT = e.COLON = e.AT = e.DOMAIN = e.Base = void 0;
    var r = n(35),
        o = n(23),
        i = (0, r.createTokenClass)();

    function a(t) {
        var e = t ? {
            v: t
        } : {};
        return (0, o.inherits)(i, (0, r.createTokenClass)(), e)
    }
    i.prototype = {
        toString: function() {
            return this.v + ""
        }
    };
    var s = a(),
        c = a("@"),
        u = a(":"),
        l = a("."),
        f = a(),
        d = a(),
        p = a("\n"),
        h = a(),
        v = a("+"),
        m = a("#"),
        g = a(),
        y = a("mailto:"),
        _ = a("?"),
        b = a("/"),
        w = a("_"),
        x = a(),
        O = a(),
        $ = a(),
        k = a("{"),
        S = a("["),
        T = a("<"),
        C = a("("),
        E = a("}"),
        A = a("]"),
        N = a(">"),
        j = a(")"),
        P = a("&");
    e.Base = i, e.DOMAIN = s, e.AT = c, e.COLON = u, e.DOT = l, e.PUNCTUATION = f, e.LOCALHOST = d, e.NL = p, e.NUM = h, e.PLUS = v, e.POUND = m, e.QUERY = _, e.PROTOCOL = g, e.MAILTO = y, e.SLASH = b, e.UNDERSCORE = w, e.SYM = x, e.TLD = O, e.WS = $, e.OPENBRACE = k, e.OPENBRACKET = S, e.OPENANGLEBRACKET = T, e.OPENPAREN = C, e.CLOSEBRACE = E, e.CLOSEBRACKET = A, e.CLOSEANGLEBRACKET = N, e.CLOSEPAREN = j, e.AMPERSAND = P
}, function(t) {
    t.exports = {
        en: {
            start_conversation_button: "Start chat",
            start_again: "Start the chat again",
            input_placeholder: "Type your message here",
            offline_information: "Your device seems to be offline",
            sending: "Sending",
            sending_error: "Sending error",
            you: "You"
        },
        pl: {
            start_conversation_button: "Rozpocznij rozmowę",
            start_again: "Rozpocznij czat ponownie",
            input_placeholder: "Twoja wiadomość",
            offline_information: "Wystąpił problem z połączeniem",
            sending: "Wysyłanie",
            sending_error: "Błąd wysyłania",
            you: "Ty"
        },
        fr: {
            start_conversation_button: "Démarrer la conversation",
            start_again: "Redémarrer le chat",
            input_placeholder: "Saisissez votre message ici",
            offline_information: "Votre appareil apparaît hors ligne",
            sending: "Envoi",
            sending_error: "Erreur d’envoi",
            you: "Vous"
        },
        fi: {
            start_conversation_button: "Aloita keskustelu",
            start_again: "Aloita keskustelu uudelleen",
            input_placeholder: "Kirjoita viestisi tähän",
            offline_information: "Laitteesi näyttää olevan offline-tilassa",
            sending: "lähettämällä",
            sending_error: "Lähetysvirhe",
            you: "Sinä"
        },
        es: {
            start_conversation_button: "Comenzar conversación",
            start_again: "Vuelve a iniciar el chat",
            input_placeholder: "Escribe tu mensaje aquí",
            offline_information: "Tu dispositivo parece estar desconectado",
            sending: "Enviando",
            sending_error: "Error de envío",
            you: "Tú"
        },
        de: {
            start_conversation_button: "Chat starten",
            start_again: "Chat neu starten",
            input_placeholder: "Deine Nachricht",
            offline_information: "Probleme mit der Verbindung",
            sending: "Senden",
            sending_error: "Sendefehler",
            you: "Du"
        },
        da: {
            start_conversation_button: "Start chatten",
            start_again: "Start chatten igen",
            input_placeholder: "Din besked",
            offline_information: "Der var et problem med din forbindelse",
            sending: "Sender",
            sending_error: "Sendefejl",
            you: "Du"
        },
        ru: {
            start_conversation_button: "Начать общение",
            start_again: "Начать сначала",
            input_placeholder: "Пишите сообщение сюда",
            offline_information: "Проблема с интернет-соединением",
            sending: "Отправка",
            sending_error: "Ошибка отправки",
            you: "Вы"
        },
        it: {
            start_conversation_button: "Inizia",
            start_again: "Ricomincia",
            input_placeholder: "Scrivi qui",
            offline_information: "Si è verificato un problema di connessione",
            sending: "Invio",
            sending_error: "Errore di invio",
            you: "Tu"
        },
        sv: {
            start_conversation_button: "Starta en konversation",
            start_again: "Starta chatten igen",
            input_placeholder: "Skriv ditt meddelande här",
            offline_information: "Din enhet verkar vara offline",
            sending: "Skickar",
            sending_error: "Fel när meddelande skulle skickas",
            you: "Du"
        },
        pt: {
            start_conversation_button: "Iniciar Conversa",
            start_again: "Iniciar o chat novamente",
            input_placeholder: "Digite sua mensagem aqui",
            offline_information: "Seu dispositivo parece estar offline",
            sending: "Enviando",
            sending_error: "Erro ao enviar",
            you: "Vocês"
        },
        nl: {
            start_conversation_button: "Begin een gesprek",
            start_again: "Begin de chat opnieuw",
            input_placeholder: "Schrijf hier een bericht",
            offline_information: "Apparaat lijkt offline te zijn",
            sending: "Verzenden",
            sending_error: "Verzendfout",
            you: "U"
        },
        sk: {
            start_conversation_button: "Začať konverzáciu",
            start_again: "Znova začať konverzáciu",
            input_placeholder: "Napíšte svoju správu sem",
            offline_information: "Vaše zariadenie je pravdepodobne offline",
            sending: "Posielam",
            sending_error: "Problém s odoslaním",
            you: "Vy"
        },
        fn: {
            start_conversation_button: "Aloita keskustelu",
            start_again: "Aloita keskustelu uudestaan",
            input_placeholder: "Kirjoita viestisi tähän",
            offline_information: "Laitteesi on offline tilassa",
            sending: "Lähettää",
            sending_error: "Lähetysvirhe",
            you: "Sinä"
        },
        zh: {
            start_conversation_button: "開始對話",
            start_again: "重新開始對話",
            input_placeholder: "輸入訊息",
            offline_information: "你在離線中",
            sending: "傳送中",
            sending_error: "傳送錯誤",
            you: "您"
        },
        hu: {
            start_conversation_button: "Beszélgetés Indítása",
            start_again: "Beszélgetés újraindítása",
            input_placeholder: "Írjon üzenetet...",
            offline_information: "Úgy tűnik, az eszköze offline állapotban van",
            sending: "Küldés",
            sending_error: "Küldési hiba",
            you: "Te"
        },
        cs: {
            start_conversation_button: "Začít konverzaci",
            start_again: "Začít znovu chatovat",
            input_placeholder: "Zde napište zprávu",
            offline_information: "Vypadá to, že jste offline",
            sending: "Odesílání",
            sending_error: "Chyba odesílání",
            you: "Vy"
        },
        ro: {
            start_conversation_button: "Incepe conversatia",
            start_again: "Începeți conversația din nou",
            input_placeholder: "Scrie-ti mesajul aici",
            offline_information: "Dispozitivul dvs. pare să fie offline",
            sending: "Trimiterea",
            sending_error: "Eroare de trimitere",
            you: "Tu"
        }
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.stateify = e.TokenState = e.CharacterState = void 0;
    var r = n(23);
    var o = function(t) {
        this.j = [], this.T = t || null
    };
    o.prototype = {
        defaultTransition: !1,
        on: function(t, e) {
            if (t instanceof Array) {
                for (var n = 0; n < t.length; n++) this.j.push([t[n], e]);
                return this
            }
            return this.j.push([t, e]), this
        },
        next: function(t) {
            for (var e = 0; e < this.j.length; e++) {
                var n = this.j[e],
                    r = n[0],
                    o = n[1];
                if (this.test(t, r)) return o
            }
            return this.defaultTransition
        },
        accepts: function() {
            return !!this.T
        },
        test: function(t, e) {
            return t === e
        },
        emit: function() {
            return this.T
        }
    };
    var u = (0, r.inherits)(o, function(t) {
            this.j = [], this.T = t || null
        }, {
            test: function(t, e) {
                return t === e || e instanceof RegExp && e.test(t)
            }
        }),
        i = (0, r.inherits)(o, function(t) {
            this.j = [], this.T = t || null
        }, {
            jump: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                    n = this.next(new t(""));
                return n === this.defaultTransition ? (n = new this.constructor(e), this.on(t, n)) : e && (n.T = e), n
            },
            test: function(t, e) {
                return t instanceof e
            }
        });
    e.CharacterState = u, e.TokenState = i, e.stateify = function(t, e, n, r) {
        for (var o = 0, i = t.length, a = e, s = [], c = void 0; o < i && (c = a.next(t[o]));) a = c, o++;
        if (i <= o) return [];
        for (; o < i - 1;) c = new u(r), s.push(c), a.on(t[o], c), a = c, o++;
        return c = new u(n), s.push(c), a.on(t[i - 1], c), s
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.createTokenClass = function() {
        return function(t) {
            t && (this.v = t)
        }
    }
}, function(t, e, n) {
    t.exports = n(51).default
}, , function(t, e, n) {}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function(t, o, i) {
    (function(t) {
        var e = void 0 !== t && t || "undefined" != typeof self && self || window,
            n = Function.prototype.apply;

        function r(t, e) {
            this._id = t, this._clearFn = e
        }
        o.setTimeout = function() {
            return new r(n.call(setTimeout, e, arguments), clearTimeout)
        }, o.setInterval = function() {
            return new r(n.call(setInterval, e, arguments), clearInterval)
        }, o.clearTimeout = o.clearInterval = function(t) {
            t && t.close()
        }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
            this._clearFn.call(e, this._id)
        }, o.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, o.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, o._unrefActive = o.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            0 <= e && (t._idleTimeoutId = setTimeout(function() {
                t._onTimeout && t._onTimeout()
            }, e))
        }, i(43), o.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, o.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
    }).call(this, i(22))
}, function(t, e, n) {
    (function(t, h) {
        ! function(n, r) {
            "use strict";
            if (!n.setImmediate) {
                var o, i, e, a, t, s = 1,
                    c = {},
                    u = !1,
                    l = n.document,
                    f = Object.getPrototypeOf && Object.getPrototypeOf(n);
                f = f && f.setTimeout ? f : n, o = "[object process]" === {}.toString.call(n.process) ? function(t) {
                    h.nextTick(function() {
                        p(t)
                    })
                } : function() {
                    if (n.postMessage && !n.importScripts) {
                        var t = !0,
                            e = n.onmessage;
                        return n.onmessage = function() {
                            t = !1
                        }, n.postMessage("", "*"), n.onmessage = e, t
                    }
                }() ? (a = "setImmediate$" + Math.random() + "$", t = function(t) {
                    t.source === n && "string" == typeof t.data && 0 === t.data.indexOf(a) && p(+t.data.slice(a.length))
                }, n.addEventListener ? n.addEventListener("message", t, !1) : n.attachEvent("onmessage", t), function(t) {
                    n.postMessage(a + t, "*")
                }) : n.MessageChannel ? ((e = new MessageChannel).port1.onmessage = function(t) {
                    p(t.data)
                }, function(t) {
                    e.port2.postMessage(t)
                }) : l && "onreadystatechange" in l.createElement("script") ? (i = l.documentElement, function(t) {
                    var e = l.createElement("script");
                    e.onreadystatechange = function() {
                        p(t), e.onreadystatechange = null, i.removeChild(e), e = null
                    }, i.appendChild(e)
                }) : function(t) {
                    setTimeout(p, 0, t)
                }, f.setImmediate = function(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                    var r = {
                        callback: t,
                        args: e
                    };
                    return c[s] = r, o(s), s++
                }, f.clearImmediate = d
            }

            function d(t) {
                delete c[t]
            }

            function p(t) {
                if (u) setTimeout(p, 0, t);
                else {
                    var e = c[t];
                    if (e) {
                        u = !0;
                        try {
                            ! function(t) {
                                var e = t.callback,
                                    n = t.args;
                                switch (n.length) {
                                    case 0:
                                        e();
                                        break;
                                    case 1:
                                        e(n[0]);
                                        break;
                                    case 2:
                                        e(n[0], n[1]);
                                        break;
                                    case 3:
                                        e(n[0], n[1], n[2]);
                                        break;
                                    default:
                                        e.apply(r, n)
                                }
                            }(e)
                        } finally {
                            d(t), u = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(this, n(22), n(44))
}, function(t, e) {
    var n, r, o = t.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            r = a
        }
    }();
    var c, u = [],
        l = !1,
        f = -1;

    function d() {
        l && c && (l = !1, c.length ? u = c.concat(u) : f = -1, u.length && p())
    }

    function p() {
        if (!l) {
            var t = s(d);
            l = !0;
            for (var e = u.length; e;) {
                for (c = u, u = []; ++f < e;) c && c[f].run();
                f = -1, e = u.length
            }
            c = null, l = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(t)
        }
    }

    function h(t, e) {
        this.fun = t, this.array = e
    }

    function v() {}
    o.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new h(t, e)), 1 !== u.length || l || s(p)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(t) {
        return []
    }, o.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {
    t.exports = n.p + "images/loading.gif"
}, function(t, e, n) {
    t.exports = n.p + "images/error.png"
}, function(t, e, n) {}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = function(t) {
        {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        }
    }(n(52));
    var h = r.tokenize,
        v = r.options.Options;

    function m(t) {
        return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function g(t) {
        return t.replace(/"/g, "&quot;")
    }

    function y(t) {
        if (!t) return "";
        var e = [];
        for (var n in t) {
            var r = t[n] + "";
            e.push(n + '="' + g(r) + '"')
        }
        return e.join(" ")
    }

    function o(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        e = new v(e);
        for (var n = h(t), r = [], o = 0; o < n.length; o++) {
            var i = n[o];
            if ("nl" === i.type && e.nl2br) r.push("<br>\n");
            else if (i.isLink && e.check(i)) {
                var a = e.resolve(i),
                    s = a.formatted,
                    c = a.formattedHref,
                    u = a.tagName,
                    l = a.className,
                    f = a.target,
                    d = a.attributes,
                    p = "<" + u + ' href="' + g(c) + '"';
                l && (p += ' class="' + g(l) + '"'), f && (p += ' target="' + g(f) + '"'), d && (p += " " + y(d)), p += ">" + m(s) + "</" + u + ">", r.push(p)
            } else r.push(m(i.toString()))
        }
        return r.join("")
    }
    if (!String.prototype.linkify) try {
        Object.defineProperty(String.prototype, "linkify", {
            set: function() {},
            get: function() {
                return function(t) {
                    return o(this, t)
                }
            }
        })
    } catch (t) {
        String.prototype.linkify || (String.prototype.linkify = function(t) {
            return o(this, t)
        })
    }
    e.default = o
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.tokenize = e.test = e.scanner = e.parser = e.options = e.inherits = e.find = void 0;
    var r = n(23),
        o = s(n(53)),
        i = s(n(54)),
        a = s(n(55));

    function s(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t, e
    }
    Array.isArray || (Array.isArray = function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    });
    var c = function(t) {
        return a.run(i.run(t))
    };
    e.find = function(t) {
        for (var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null, n = c(t), r = [], o = 0; o < n.length; o++) {
            var i = n[o];
            !i.isLink || e && i.type !== e || r.push(i.toObject())
        }
        return r
    }, e.inherits = r.inherits, e.options = o, e.parser = a, e.scanner = i, e.test = function(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
            n = c(t);
        return 1 === n.length && n[0].isLink && (!e || n[0].type === e)
    }, e.tokenize = c
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        a = {
            defaultProtocol: "http",
            events: null,
            format: o,
            formatHref: o,
            nl2br: !1,
            tagName: "a",
            target: function(t, e) {
                return "url" === e ? "_blank" : null
            },
            validate: !0,
            ignoreTags: [],
            attributes: null,
            className: "linkified"
        };

    function r(t) {
        t = t || {}, this.defaultProtocol = t.hasOwnProperty("defaultProtocol") ? t.defaultProtocol : a.defaultProtocol, this.events = t.hasOwnProperty("events") ? t.events : a.events, this.format = t.hasOwnProperty("format") ? t.format : a.format, this.formatHref = t.hasOwnProperty("formatHref") ? t.formatHref : a.formatHref, this.nl2br = t.hasOwnProperty("nl2br") ? t.nl2br : a.nl2br, this.tagName = t.hasOwnProperty("tagName") ? t.tagName : a.tagName, this.target = t.hasOwnProperty("target") ? t.target : a.target, this.validate = t.hasOwnProperty("validate") ? t.validate : a.validate, this.ignoreTags = [], this.attributes = t.attributes || t.linkAttributes || a.attributes, this.className = t.hasOwnProperty("className") ? t.className : t.linkClass || a.className;
        for (var e = t.hasOwnProperty("ignoreTags") ? t.ignoreTags : a.ignoreTags, n = 0; n < e.length; n++) this.ignoreTags.push(e[n].toUpperCase())
    }

    function o(t) {
        return t
    }
    e.defaults = a, e.Options = r, e.contains = function(t, e) {
        for (var n = 0; n < t.length; n++)
            if (t[n] === e) return !0;
        return !1
    }, r.prototype = {
        resolve: function(t) {
            var e = t.toHref(this.defaultProtocol);
            return {
                formatted: this.get("format", t.toString(), t),
                formattedHref: this.get("formatHref", e, t),
                tagName: this.get("tagName", e, t),
                className: this.get("className", e, t),
                target: this.get("target", e, t),
                events: this.getObject("events", e, t),
                attributes: this.getObject("attributes", e, t)
            }
        },
        check: function(t) {
            return this.get("validate", t.toString(), t)
        },
        get: function(t, e, n) {
            var r = void 0,
                o = this[t];
            if (!o) return o;
            switch (void 0 === o ? "undefined" : i(o)) {
                case "function":
                    return o(e, n.type);
                case "object":
                    return "function" == typeof(r = o.hasOwnProperty(n.type) ? o[n.type] : a[t]) ? r(e, n.type) : r
            }
            return o
        },
        getObject: function(t, e, n) {
            var r = this[t];
            return "function" == typeof r ? r(e, n.type) : r
        }
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.start = e.run = e.TOKENS = e.State = void 0;
    var r = n(34),
        o = n(32),
        i = function(t) {
            {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            }
        }(o);
    var a = "aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|aetna|af|afamilycompany|afl|africa|ag|agakhan|agency|ai|aig|aigo|airbus|airforce|airtel|akdn|al|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao|aol|apartments|app|apple|aq|aquarelle|ar|arab|aramco|archi|army|arpa|art|arte|as|asda|asia|associates|at|athleta|attorney|au|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw|aws|ax|axa|az|azure|ba|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb|bbc|bbt|bbva|bcg|bcn|bd|be|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|ci|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm|dnp|do|docs|doctor|dodge|dog|doha|domains|dot|download|drive|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dvr|dz|earth|eat|ec|eco|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epost|epson|equipment|er|ericsson|erni|es|esq|estate|esurance|et|etisalat|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|george|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glade|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt|gu|guardian|gucci|guge|guide|guitars|guru|gw|gy|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk|hkt|hm|hn|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr|hsbc|ht|htc|hu|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id|ie|ieee|ifm|ikano|il|im|imamat|imdb|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|intel|international|intuit|investments|io|ipiranga|iq|ir|irish|is|iselect|ismaili|ist|istanbul|it|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|je|jeep|jetzt|jewelry|jio|jlc|jll|jm|jmp|jnj|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kindle|kitchen|kiwi|km|kn|koeln|komatsu|kosher|kp|kpmg|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr|ls|lt|ltd|ltda|lu|lundbeck|lupin|luxe|luxury|lv|ly|ma|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc|mckinsey|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|merckmsd|metlife|mg|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk|ml|mlb|mls|mm|mma|mn|mo|mobi|mobile|mobily|moda|moe|moi|mom|monash|money|monster|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|mp|mq|mr|ms|msd|mt|mtn|mtr|mu|museum|mutual|mv|mw|mx|my|mz|na|nab|nadex|nagoya|name|nationwide|natura|navy|nba|nc|ne|nec|net|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nf|nfl|ng|ngo|nhk|ni|nico|nike|nikon|ninja|nissan|nissay|nl|no|nokia|northwesternmutual|norton|now|nowruz|nowtv|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|om|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa|page|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|pccw|pe|pet|pf|pfizer|pg|ph|pharmacy|phd|philips|phone|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pnc|pohl|poker|politie|porn|post|pr|pramerica|praxi|press|prime|pro|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|qvc|racing|radio|raid|re|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|ro|rocher|rocks|rodeo|rogers|room|rs|rsvp|ru|rugby|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sb|sbi|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|sd|se|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg|sh|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|shriram|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl|sling|sm|smart|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|srt|st|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiftcover|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|telecity|telefonica|temasek|tennis|teva|tf|tg|th|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj|tjmaxx|tjx|tk|tkmaxx|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubank|ubs|uconnect|ug|uk|unicom|university|uno|uol|ups|us|uy|uz|va|vacations|vana|vanguard|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vn|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--30rr7y|xn--3bst00m|xn--3ds443g|xn--3e0b707e|xn--3hcrj9c|xn--3oq18vl8pn36a|xn--3pxu8k|xn--42c2d9a|xn--45br5cyl|xn--45brj9c|xn--45q11c|xn--4gbrim|xn--54b7fta0cc|xn--55qw42g|xn--55qx5d|xn--5su34j936bgsg|xn--5tzm5g|xn--6frz82g|xn--6qq986b3xl|xn--80adxhks|xn--80ao21a|xn--80aqecdr1a|xn--80asehdb|xn--80aswg|xn--8y0a063a|xn--90a3ac|xn--90ae|xn--90ais|xn--9dbq2a|xn--9et52u|xn--9krt00a|xn--b4w605ferd|xn--bck1b9a5dre4c|xn--c1avg|xn--c2br7g|xn--cck2b3b|xn--cg4bki|xn--clchc0ea0b2g2a9gcd|xn--czr694b|xn--czrs0t|xn--czru2d|xn--d1acj3b|xn--d1alf|xn--e1a4c|xn--eckvdtc9d|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fhbei|xn--fiq228c5hs|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--fjq720a|xn--flw351e|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--fzys8d69uvgm|xn--g2xx48c|xn--gckr3f0f|xn--gecrj9c|xn--gk3at1e|xn--h2breg3eve|xn--h2brj9c|xn--h2brj9c8c|xn--hxt814e|xn--i1b6b1a6a2e|xn--imr513n|xn--io0a7i|xn--j1aef|xn--j1amh|xn--j6w193g|xn--jlq61u9w7b|xn--jvr189m|xn--kcrx77d1x4a|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--kput3i|xn--l1acc|xn--lgbbat1ad8j|xn--mgb9awbf|xn--mgba3a3ejt|xn--mgba3a4f16a|xn--mgba7c0bbn0a|xn--mgbaakc7dvf|xn--mgbaam7a8h|xn--mgbab2bd|xn--mgbai9azgqp6j|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a|xn--mgbbh1a71e|xn--mgbc0a9azcg|xn--mgbca7dzdo|xn--mgberp4a5d4ar|xn--mgbgu82a|xn--mgbi4ecexp|xn--mgbpl2fh|xn--mgbt3dhd|xn--mgbtx2b|xn--mgbx4cd0ab|xn--mix891f|xn--mk1bu44c|xn--mxtq1m|xn--ngbc5azd|xn--ngbe9e0a|xn--ngbrx|xn--node|xn--nqv7f|xn--nqv7fs00ema|xn--nyqy26a|xn--o3cw4h|xn--ogbpf8fl|xn--p1acf|xn--p1ai|xn--pbt977c|xn--pgbs0dh|xn--pssy2u|xn--q9jyb4c|xn--qcka1pmc|xn--qxam|xn--rhqv96g|xn--rovu88b|xn--rvc1e0am3e|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--tckwe|xn--tiq49xqyj|xn--unup4y|xn--vermgensberater-ctb|xn--vermgensberatung-pwb|xn--vhquv|xn--vuq861b|xn--w4r85el8fhu5dnra|xn--w4rs40l|xn--wgbh1c|xn--wgbl6a|xn--xhq521b|xn--xkc2al3hye2a|xn--xkc2dl3a5ee0h|xn--y9a3aq|xn--yfro4i67o|xn--ygbi2ammx|xn--zfr164b|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|you|youtube|yt|yun|za|zappos|zara|zero|zip|zippo|zm|zone|zuerich|zw".split("|"),
        s = "0123456789".split(""),
        c = "0123456789abcdefghijklmnopqrstuvwxyz".split(""),
        u = [" ", "\f", "\r", "\t", "\v", " ", " ", "᠎"],
        l = [],
        f = function(t) {
            return new r.CharacterState(t)
        },
        d = f(),
        p = f(o.NUM),
        h = f(o.DOMAIN),
        v = f(),
        m = f(o.WS);
    d.on("@", f(o.AT)).on(".", f(o.DOT)).on("+", f(o.PLUS)).on("#", f(o.POUND)).on("?", f(o.QUERY)).on("/", f(o.SLASH)).on("_", f(o.UNDERSCORE)).on(":", f(o.COLON)).on("{", f(o.OPENBRACE)).on("[", f(o.OPENBRACKET)).on("<", f(o.OPENANGLEBRACKET)).on("(", f(o.OPENPAREN)).on("}", f(o.CLOSEBRACE)).on("]", f(o.CLOSEBRACKET)).on(">", f(o.CLOSEANGLEBRACKET)).on(")", f(o.CLOSEPAREN)).on("&", f(o.AMPERSAND)).on([",", ";", "!", '"', "'"], f(o.PUNCTUATION)), d.on("\n", f(o.NL)).on(u, m), m.on(u, m);
    for (var g = 0; g < a.length; g++) {
        var y = (0, r.stateify)(a[g], d, o.TLD, o.DOMAIN);
        l.push.apply(l, y)
    }
    var _ = (0, r.stateify)("file", d, o.DOMAIN, o.DOMAIN),
        b = (0, r.stateify)("ftp", d, o.DOMAIN, o.DOMAIN),
        w = (0, r.stateify)("http", d, o.DOMAIN, o.DOMAIN),
        x = (0, r.stateify)("mailto", d, o.DOMAIN, o.DOMAIN);
    l.push.apply(l, _), l.push.apply(l, b), l.push.apply(l, w), l.push.apply(l, x);
    var O = _.pop(),
        $ = b.pop(),
        k = w.pop(),
        S = x.pop(),
        T = f(o.DOMAIN),
        C = f(o.PROTOCOL),
        E = f(o.MAILTO);
    $.on("s", T).on(":", C), k.on("s", T).on(":", C), l.push(T), O.on(":", C), T.on(":", C), S.on(":", E);
    var A = (0, r.stateify)("localhost", d, o.LOCALHOST, o.DOMAIN);
    l.push.apply(l, A), d.on(s, p), p.on("-", v).on(s, p).on(c, h), h.on("-", v).on(c, h);
    for (var N = 0; N < l.length; N++) l[N].on("-", v).on(c, h);
    v.on("-", v).on(s, h).on(c, h), d.defaultTransition = f(o.SYM);
    var j = d;
    e.State = r.CharacterState, e.TOKENS = i, e.run = function(t) {
        for (var e = t.replace(/[A-Z]/g, function(t) {
                return t.toLowerCase()
            }), n = t.length, r = [], o = 0; o < n;) {
            for (var i = d, a = null, s = 0, c = null, u = -1; o < n && (a = i.next(e[o]));)(i = a).accepts() ? (u = 0, c = i) : 0 <= u && u++, s++, o++;
            if (!(u < 0)) {
                o -= u, s -= u;
                var l = c.emit();
                r.push(new l(t.substr(o - s, s)))
            }
        }
        return r
    }, e.start = j
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.start = e.run = e.TOKENS = e.State = void 0;
    var r = n(34),
        p = n(56),
        o = function(t) {
            {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            }
        }(p),
        i = n(32);
    var a = function(t) {
            return new r.TokenState(t)
        },
        h = a(),
        s = a(),
        c = a(),
        u = a(),
        l = a(),
        f = a(),
        d = a(),
        v = a(p.URL),
        m = a(),
        g = a(p.URL),
        y = a(p.URL),
        _ = a(),
        b = a(),
        w = a(),
        x = a(),
        O = a(),
        $ = a(p.URL),
        k = a(p.URL),
        S = a(p.URL),
        T = a(p.URL),
        C = a(),
        E = a(),
        A = a(),
        N = a(),
        j = a(),
        P = a(),
        L = a(p.EMAIL),
        I = a(),
        B = a(p.EMAIL),
        M = a(p.MAILTOEMAIL),
        R = a(),
        U = a(),
        D = a(),
        q = a(),
        z = a(p.NL);
    h.on(i.NL, z).on(i.PROTOCOL, s).on(i.MAILTO, c).on(i.SLASH, u), s.on(i.SLASH, u), u.on(i.SLASH, l), h.on(i.TLD, f).on(i.DOMAIN, f).on(i.LOCALHOST, v).on(i.NUM, f), l.on(i.TLD, y).on(i.DOMAIN, y).on(i.NUM, y).on(i.LOCALHOST, y), f.on(i.DOT, d), j.on(i.DOT, P), d.on(i.TLD, v).on(i.DOMAIN, f).on(i.NUM, f).on(i.LOCALHOST, f), P.on(i.TLD, L).on(i.DOMAIN, j).on(i.NUM, j).on(i.LOCALHOST, j), v.on(i.DOT, d), L.on(i.DOT, P), v.on(i.COLON, m).on(i.SLASH, y), m.on(i.NUM, g), g.on(i.SLASH, y), L.on(i.COLON, I), I.on(i.NUM, B);
    var F = [i.DOMAIN, i.AT, i.LOCALHOST, i.NUM, i.PLUS, i.POUND, i.PROTOCOL, i.SLASH, i.TLD, i.UNDERSCORE, i.SYM, i.AMPERSAND],
        G = [i.COLON, i.DOT, i.QUERY, i.PUNCTUATION, i.CLOSEBRACE, i.CLOSEBRACKET, i.CLOSEANGLEBRACKET, i.CLOSEPAREN, i.OPENBRACE, i.OPENBRACKET, i.OPENANGLEBRACKET, i.OPENPAREN];
    y.on(i.OPENBRACE, b).on(i.OPENBRACKET, w).on(i.OPENANGLEBRACKET, x).on(i.OPENPAREN, O), _.on(i.OPENBRACE, b).on(i.OPENBRACKET, w).on(i.OPENANGLEBRACKET, x).on(i.OPENPAREN, O), b.on(i.CLOSEBRACE, y), w.on(i.CLOSEBRACKET, y), x.on(i.CLOSEANGLEBRACKET, y), O.on(i.CLOSEPAREN, y), $.on(i.CLOSEBRACE, y), k.on(i.CLOSEBRACKET, y), S.on(i.CLOSEANGLEBRACKET, y), T.on(i.CLOSEPAREN, y), C.on(i.CLOSEBRACE, y), E.on(i.CLOSEBRACKET, y), A.on(i.CLOSEANGLEBRACKET, y), N.on(i.CLOSEPAREN, y), b.on(F, $), w.on(F, k), x.on(F, S), O.on(F, T), b.on(G, C), w.on(G, E), x.on(G, A), O.on(G, N), $.on(F, $), k.on(F, k), S.on(F, S), T.on(F, T), $.on(G, $), k.on(G, k), S.on(G, S), T.on(G, T), C.on(F, $), E.on(F, k), A.on(F, S), N.on(F, T), C.on(G, C), E.on(G, E), A.on(G, A), N.on(G, N), y.on(F, y), _.on(F, y), y.on(G, _), _.on(G, _), c.on(i.TLD, M).on(i.DOMAIN, M).on(i.NUM, M).on(i.LOCALHOST, M), M.on(F, M).on(G, R), R.on(F, M).on(G, R);
    var H = [i.DOMAIN, i.NUM, i.PLUS, i.POUND, i.QUERY, i.UNDERSCORE, i.SYM, i.AMPERSAND, i.TLD];
    f.on(H, U).on(i.AT, D), v.on(H, U).on(i.AT, D), d.on(H, U), U.on(H, U).on(i.AT, D).on(i.DOT, q), q.on(H, U), D.on(i.TLD, j).on(i.DOMAIN, j).on(i.LOCALHOST, L);
    e.State = r.TokenState, e.TOKENS = o, e.run = function(t) {
        for (var e = t.length, n = 0, r = [], o = []; n < e;) {
            for (var i = h, a = null, s = null, c = 0, u = null, l = -1; n < e && !(a = i.next(t[n]));) o.push(t[n++]);
            for (; n < e && (s = a || i.next(t[n]));) a = null, (i = s).accepts() ? (l = 0, u = i) : 0 <= l && l++, n++, c++;
            if (l < 0)
                for (var f = n - c; f < n; f++) o.push(t[f]);
            else {
                0 < o.length && (r.push(new p.TEXT(o)), o = []), n -= l, c -= l;
                var d = u.emit();
                r.push(new d(t.slice(n - c, n)))
            }
        }
        return 0 < o.length && r.push(new p.TEXT(o)), r
    }, e.start = h
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0, e.URL = e.TEXT = e.NL = e.EMAIL = e.MAILTOEMAIL = e.Base = void 0;
    var r = n(35),
        o = n(23),
        s = n(32);
    var i = (0, r.createTokenClass)();
    i.prototype = {
        type: "token",
        isLink: !1,
        toString: function() {
            for (var t = [], e = 0; e < this.v.length; e++) t.push(this.v[e].toString());
            return t.join("")
        },
        toHref: function() {
            return this.toString()
        },
        toObject: function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "http";
            return {
                type: this.type,
                value: this.toString(),
                href: this.toHref(t)
            }
        }
    };
    var a = (0, o.inherits)(i, (0, r.createTokenClass)(), {
            type: "email",
            isLink: !0
        }),
        c = (0, o.inherits)(i, (0, r.createTokenClass)(), {
            type: "email",
            isLink: !0,
            toHref: function() {
                return "mailto:" + this.toString()
            }
        }),
        u = (0, o.inherits)(i, (0, r.createTokenClass)(), {
            type: "text"
        }),
        l = (0, o.inherits)(i, (0, r.createTokenClass)(), {
            type: "nl"
        }),
        f = (0, o.inherits)(i, (0, r.createTokenClass)(), {
            type: "url",
            isLink: !0,
            toHref: function() {
                for (var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "http", n = !1, r = !1, o = this.v, i = [], a = 0; o[a] instanceof s.PROTOCOL;) n = !0, i.push(o[a].toString().toLowerCase()), a++;
                for (; o[a] instanceof s.SLASH;) r = !0, i.push(o[a].toString()), a++;
                for (;
                    (t = o[a]) instanceof s.DOMAIN || t instanceof s.TLD;) i.push(o[a].toString().toLowerCase()), a++;
                for (; a < o.length; a++) i.push(o[a].toString());
                return i = i.join(""), n || r || (i = e + "://" + i), i
            },
            hasProtocol: function() {
                return this.v[0] instanceof s.PROTOCOL
            }
        });
    e.Base = i, e.MAILTOEMAIL = a, e.EMAIL = c, e.NL = l, e.TEXT = u, e.URL = f
}, function(t, e, r) {
    "use strict";
    r.r(e);
    var o = {};
    r.r(o), r.d(o, "is", function() {
        return St
    }), r.d(o, "isNot", function() {
        return Tt
    }), r.d(o, "empty", function() {
        return Ct
    }), r.d(o, "contains", function() {
        return Et
    }), r.d(o, "notContains", function() {
        return At
    }), r.d(o, "greater", function() {
        return Nt
    }), r.d(o, "less", function() {
        return jt
    }), r.d(o, "greaterOrEqual", function() {
        return Pt
    }), r.d(o, "lessOrEqual", function() {
        return Lt
    }), r.d(o, "longer", function() {
        return It
    }), r.d(o, "shorter", function() {
        return Bt
    });
    var m = {};
    r.r(m), r.d(m, "timeOnWebsite", function() {
        return Zt
    }), r.d(m, "timeOnCurrentPage", function() {
        return Jt
    }), r.d(m, "currentPageAddress", function() {
        return Qt
    }), r.d(m, "anyVisitedPageAddress", function() {
        return te
    }), r.d(m, "userVisitedAtLeast", function() {
        return ee
    }), r.d(m, "userIsAFirstTimeVisitor", function() {
        return ne
    }), r.d(m, "userReturnedToYourWebsite", function() {
        return re
    }), r.d(m, "customVariable", function() {
        return oe
    }), r.d(m, "referringWebsiteAddress", function() {
        return ie
    });
    var y = r(7),
        n = function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return this.initialized ? e("div", {
                attrs: {
                    id: "app",
                    "data-align": this.$_config.position.align
                }
            }, [e("div", {
                staticClass: "app-wrapper"
            }, [e("transition", {
                attrs: {
                    appear: "",
                    name: this.transition,
                    mode: "out-in"
                }
            }, [this.$_session.opened ? e("opened") : e("closed")], 1)], 1)]) : this._e()
        };
    n._withStripped = !0;
    var i = r(0),
        _ = r.n(i),
        a = r(5),
        s = r.n(a),
        c = (r(38), function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "test";
            try {
                return localStorage.setItem(t, t), localStorage.removeItem(t), !0
            } catch (t) {
                return !1
            }
        }()),
        u = function(t) {
            if (c) {
                var e = localStorage[t];
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }
        },
        l = function(t) {
            var e = "&".concat(location.search.substr(1)).split("&".concat(t, "="));
            return 2 === e.length ? decodeURIComponent(e.pop().split("&").shift()) : void 0
        },
        f = r(3);
    l("id") || Object(f.a)("Incorrect ID");
    var d = l("id"),
        p = "preview" === d,
        h = "cb.visitor.".concat(d),
        v = r(6),
        b = r.n(v),
        g = r(4),
        w = {
            computed: b()({}, Object(g.e)(["$_session", "$_initialized"]), Object(g.c)(["$_config"])),
            methods: Object(g.b)(["$_initialize"])
        },
        x = {
            computed: b()({}, Object(g.c)(["$_config", "$_colors"]))
        },
        O = {
            computed: Object(g.c)(["$_currentUrl", "$_colors"])
        },
        $ = {
            computed: Object(g.c)(["$_config"])
        },
        k = {
            computed: Object(g.c)(["$_config", "$_colors"]),
            methods: Object(g.b)(["$_openChat"])
        },
        S = {
            computed: Object(g.c)(["$_config", "$_colors"]),
            methods: Object(g.b)(["$_openChat"])
        },
        T = {
            computed: b()({}, Object(g.e)(["$_greeting", "$_session"]), Object(g.c)(["$_mobile", "$_config", "$_colors"])),
            methods: b()({}, Object(g.d)(["$_showGreeting", "$_hideGreetingUpdateSession"]), Object(g.b)(["$_openChat"]))
        },
        C = {
            computed: b()({}, Object(g.e)(["$_moment", "$_session"]), Object(g.c)(["$_mobile", "$_config"]))
        },
        E = {
            computed: b()({}, Object(g.c)(["$_config", "$_colors", "$_translations"]), Object(g.e)(["$_busy"])),
            methods: b()({}, Object(g.b)(["$_closeChat"]))
        },
        A = {
            computed: Object(g.c)(["$_config", "$_colors"]),
            methods: Object(g.b)(["$_closeChat"])
        },
        N = {
            computed: b()({}, Object(g.e)(["$_online", "$_session", "$_busy"]), Object(g.c)(["$_mobile", "$_colors", "$_translations"])),
            methods: b()({}, Object(g.d)(["$_setMessage"]))
        },
        j = {
            computed: Object(g.e)(["$_moment"]),
            methods: b()({}, Object(g.b)(["$_closeMoment", "$_onMomentLoad", "$_setSessionAttributes"]))
        },
        P = {
            computed: b()({}, Object(g.e)(["$_online"]), Object(g.c)(["$_translations"])),
            methods: Object(g.d)(["$_setOnline"])
        },
        L = {
            computed: Object(g.c)(["$_colors", "$_translations"]),
            methods: b()({}, Object(g.d)(["$_startChatAgain"]))
        },
        I = {
            computed: b()({}, Object(g.e)(["$_session", "$_preview"]), Object(g.c)(["$_mobile", "$_config", "$_translations"])),
            methods: b()({}, Object(g.d)(["$_addMessage", "$_setTempMessages", "$_setScroll", "$_setExecutedButtons", "$_setBusy", "$_setConversationStarted", "$_openUrl", "$_callNumber", "$_setSessionAttributesMutation", "$_setLastSentUrl", "$_extendSession", "$_endChat", "$_setUserAttributesMutation"]), Object(g.b)(["$_request", "$_openMoment", "$_setUserAttributes"]))
        },
        B = {
            computed: b()({}, Object(g.e)(["$_session"]), Object(g.c)(["$_mobile"]))
        },
        M = function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "closed",
                attrs: {
                    "data-align": this.$_config.position.align
                }
            }, [e("greeting"), this._v(" "), "bar" === this.$_config.chatButton.theme ? e("bar") : "bubble" === this.$_config.chatButton.theme ? e("bubble") : this._e()], 1)
        },
        R = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("transition", {
                attrs: {
                    name: "greeting",
                    appear: ""
                },
                on: {
                    enter: e.$updateFrameStyle,
                    "enter-cancelled": e.$updateFrameStyle,
                    "after-leave": e.$updateFrameStyle,
                    "leave-cancelled": e.$updateFrameStyle
                }
            }, [e.displayMessage ? n("div", {
                staticClass: "greeting-wrapper",
                attrs: {
                    "data-mobile": "" + e.$_mobile
                }
            }, [n("div", {
                staticClass: "greeting-close"
            }, [n("tpl-close", {
                attrs: {
                    size: "small",
                    color: e.$_colors.greetingCloseIcon,
                    background: e.$_colors.greetingCloseBackground
                },
                nativeOn: {
                    click: function(t) {
                        return e.$_hideGreetingUpdateSession()
                    }
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "greeting-content-wrapper",
                style: {
                    background: e.$_colors.greetingBackground,
                    color: e.$_colors.greetingText
                },
                domProps: {
                    textContent: e._s(e.displayMessage)
                },
                on: {
                    click: e.onGreetingClick
                }
            })]) : e._e()])
        };
    R._withStripped = M._withStripped = !0;
    var U, D = r(17),
        q = r.n(D),
        z = function(t, e) {
            return t.catch(function() {
                throw e
            })
        },
        F = function() {
            return +new Date
        },
        G = function(t) {
            return 1e3 * t
        },
        H = r(18),
        W = r.n(H),
        V = r(15),
        K = r.n(V),
        Y = r(13),
        X = r(8),
        Z = r(21),
        J = "SEND_WELCOME",
        Q = "SEND_MESSAGE",
        tt = "SEND_POSTBACK",
        et = function() {
            return va.$emit(J)
        },
        nt = function(t) {
            return va.$emit(Q, t)
        },
        rt = function(t, e) {
            return e ? va.$emit(tt, {
                text: t,
                postback: e
            }) : nt(t)
        },
        ot = {
            toggleChat: function(t) {
                Ot(t ? "$_openChat" : "$_closeChat")
            },
            showGreeting: function(t) {
                xt("$_showGreetingUpdateSession", t)
            },
            hideGreeting: function() {
                xt("$_hideGreetingUpdateSession")
            },
            openMoment: function(t, e) {
                Ot("$_openMoment", {
                    url: t,
                    height: e
                })
            },
            closeMoment: function() {
                Ot("$_closeMoment")
            },
            resetSession: function() {
                xt("$_resetSession")
            },
            endChat: function() {
                xt("$_endChat")
            },
            sendMessage: function(t, e) {
                rt(t, e)
            },
            triggerChat: function() {
                et()
            },
            setSessionAttributes: function(t) {
                return Ot("$_setSessionAttributes", t)
            },
            setUserAttributes: function(t) {
                return Ot("$_setUserAttributes", t)
            },
            getUserData: function() {
                return Ot("$_getUserData")
            }
        },
        it = {
            call: X.a,
            emit: X.a,
            off: X.a,
            on: X.a,
            once: X.a,
            data: {
                config: {
                    id: ""
                },
                documentReferrer: "",
                mobile: !1
            }
        },
        at = (U = s()(_.a.mark(function t() {
            return _.a.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.prev = 0, t.next = 3, Object(Z.a)(ot).promise;
                    case 3:
                        it = t.sent, t.next = 9;
                        break;
                    case 6:
                        return t.prev = 6, t.t0 = t.catch(0), t.abrupt("return", !1);
                    case 9:
                        return t.abrupt("return", !0);
                    case 10:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [0, 6]
            ])
        })), function() {
            return U.apply(this, arguments)
        }),
        st = r(14),
        ct = function(t) {
            var e = t.data,
                n = t.status,
                r = t.statusText,
                o = Object(st.a)(null == e ? void 0 : e.status) ? b()({}, e.status, {
                    data: e
                }) : {
                    code: n,
                    details: r,
                    data: e
                };
            return o.details || (o.details = 401 === o.code ? "Unauthorized" : "Internal server error"), o
        },
        ut = r(33),
        lt = r(9);
    y.a.use(g.a);
    var ft, dt, pt, ht, vt, mt = ["lastVisit", "visitedPages", "userId"],
        gt = function() {
            return {
                ended: !1,
                scroll: 0,
                conversationStarted: !1,
                lastUpdate: 0,
                messages: [],
                tempMessages: [],
                executedButtons: [],
                message: "",
                sessionAttributes: null,
                userAttributes: null,
                websiteTime: F(),
                pageTime: F(),
                visitedPages: [],
                lastVisit: null,
                opened: !1,
                lastSentUrl: null,
                greetingHidden: !1,
                userId: null,
                token: null,
                expiresAt: yt()
            }
        },
        yt = function() {
            return e = (t = {
                minutes: 30
            }).minutes, n = t.seconds, r = new Date, e && r.setMinutes(r.getMinutes() + e), n && r.setSeconds(r.getSeconds() + n), r.getTime();
            var t, e, n, r
        },
        _t = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                e = gt();
            if (p) return e;
            var n = u(h);
            if (Object(st.a)(n))
                for (var r = [].concat(mt, K()(t)), o = 0; o < r.length; o++) {
                    var i = r[o];
                    n.hasOwnProperty(i) && (e[i] = n[i])
                }
            return bt(e)
        },
        bt = function(t) {
            return p || (t.conversationStarted && (clearTimeout(ft), ft = setTimeout(function() {
                return xt("$_endChat")
            }, t.expiresAt - F())), e = h, n = t, c && localStorage.setItem(e, JSON.stringify(n))), t;
            var e, n
        },
        wt = new g.a.Store({
            strict: !1,
            state: {
                $_preview: p,
                $_previewConfig: null,
                $_session: function() {
                    var t = gt();
                    if (p) return t;
                    var e = u(h);
                    if (Object(st.a)(e)) {
                        if (e.ended || function(t) {
                                if (!p) return "number" != typeof t.expiresAt ? c : t.expiresAt - F() <= 0
                            }(e)) return _t();
                        for (var n = Object.keys(t), r = 0; r < n.length; r++) {
                            var o = n[r];
                            e.hasOwnProperty(o) && (t[o] = e[o])
                        }
                    }
                    return bt(t)
                }(),
                $_busy: !1,
                $_initialized: !1,
                $_online: !0,
                $_greeting: "",
                $_moment: {
                    url: null,
                    height: null
                }
            },
            mutations: {
                $_setInitialized: function(t) {
                    t.$_initialized = !0
                },
                $_setOnline: function(t, e) {
                    t.$_online = e
                },
                $_setMoment: function(t, e) {
                    t.$_moment = e
                },
                $_openUrl: function(t, e) {
                    it.call("openUrl", e)
                },
                $_callNumber: function(t, e) {
                    it.call("callNumber", e)
                },
                $_showGreeting: function(t, e) {
                    t.$_greeting = e
                },
                $_hideGreeting: function(t) {
                    t.$_greeting = ""
                },
                $_setBusy: function(t, e) {
                    t.$_busy = e
                },
                $_setPreviewConfig: function(t, e) {
                    t.$_previewConfig = e
                },
                $_updateSession: function(t, e) {
                    Object.assign(t.$_session, e)
                },
                $_setConversationStarted: function(t) {
                    t.$_session.conversationStarted || (t.$_session.conversationStarted = !0, it.call("onConversationStart"))
                },
                $_showGreetingUpdateSession: function(t, e) {
                    t.$_session.greetingHidden = !1, t.$_greeting = e
                },
                $_hideGreetingUpdateSession: function(t) {
                    t.$_session.greetingHidden = !0, t.$_greeting = ""
                },
                $_setLastSentUrl: function(t, e) {
                    t.$_session.lastSentUrl = e
                },
                $_resetSession: function(t) {
                    t.$_session = _t()
                },
                $_startChatAgain: function(t) {
                    t.$_session = _t(["opened", "conversationStarted"])
                },
                $_setMessage: function(t, e) {
                    t.$_session.message = e
                },
                $_setTempMessages: function(t, e) {
                    t.$_session.tempMessages = e, t.$_session.lastUpdate = F()
                },
                $_addMessage: function(t, e) {
                    t.$_session.messages.push(e)
                },
                $_setScroll: function(t, e) {
                    t.$_session.scroll = e
                },
                $_setExecutedButtons: function(t, e) {
                    t.$_session.executedButtons = e
                },
                $_setSessionAttributesMutation: function(t, e) {
                    t.$_session.sessionAttributes = e
                },
                $_setUserAttributesMutation: function(t, e) {
                    t.$_session.userAttributes = e
                },
                $_setOpened: function(t, e) {
                    t.$_session.opened = e
                },
                $_setLastVisit: function(t) {
                    t.$_session.lastVisit = F()
                },
                $_setVisitedPages: function(t, e) {
                    t.$_session.visitedPages.slice(-1)[0] !== e && (t.$_session.pageTime = F(), t.$_session.visitedPages = [].concat(K()(t.$_session.visitedPages.slice(-49)), [e]))
                },
                $_endChat: function(t) {
                    t.$_session.conversationStarted && !t.$_session.ended && (t.$_session.ended = !0, it.call("onConversationEnd"))
                },
                $_setUserId: function(t, e) {
                    t.$_session.userId = e
                },
                $_setToken: function(t, e) {
                    t.$_session.token = e
                },
                $_extendSession: function(t) {
                    t.$_session.expiresAt = yt()
                }
            },
            actions: {
                $_authorization: (vt = s()(_.a.mark(function t(e) {
                    var n, r, o, i, a, s;
                    return _.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = e.state, r = e.commit, n.$_session.token) return t.abrupt("return");
                                t.next = 3;
                                break;
                            case 3:
                                return t.prev = 3, t.next = 6, y.a.http({
                                    method: "post",
                                    url: "v2/chat/authorize",
                                    body: {
                                        userId: it.data.userId || n.$_session.userId || void 0,
                                        client_id: d
                                    }
                                });
                            case 6:
                                o = t.sent, t.next = 12;
                                break;
                            case 9:
                                t.prev = 9, t.t0 = t.catch(3), o = t.t0;
                            case 12:
                                if (i = ct(o), a = i.code, s = i.data, a < 200 || 302 < a) return t.abrupt("return");
                                t.next = 15;
                                break;
                            case 15:
                                r("$_setToken", s.access_token), r("$_setUserId", s.userId);
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }, t, this, [
                        [3, 9]
                    ])
                })), function(t) {
                    return vt.apply(this, arguments)
                }),
                $_request: (ht = s()(_.a.mark(function t(e, n) {
                    var r, o, i, a, s, c, u, l, f, d, p, h, v, m, g;
                    return _.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = e.state, o = e.dispatch, i = e.commit, a = n.method, s = n.url, c = n.body, u = void 0 === c ? {} : c, l = n.options, f = void 0 === l ? {} : l, t.next = 4, o("$_authorization");
                            case 4:
                                return /get|delete/i.test(a) ? f = u : f.body = u, f.headers = b()({
                                    "Cache-Control": "no-cache",
                                    Pragma: "no-cache",
                                    Expires: 0,
                                    Authorization: "Bearer ".concat(r.$_session.token)
                                }, f.headers || {}), t.prev = 6, t.next = 9, y.a.http(b()({
                                    method: a,
                                    url: s
                                }, f));
                            case 9:
                                d = t.sent, t.next = 15;
                                break;
                            case 12:
                                t.prev = 12, t.t0 = t.catch(6), d = t.t0;
                            case 15:
                                if (p = ct(d), h = p.code, v = p.details, m = p.path, g = p.data, 401 === h && i("$_setToken", null), h < 200 || 302 < h) return t.abrupt("return", Object.assign(new Error(v), {
                                    code: h,
                                    path: m
                                }));
                                t.next = 19;
                                break;
                            case 19:
                                return t.abrupt("return", g);
                            case 20:
                            case "end":
                                return t.stop()
                        }
                    }, t, this, [
                        [6, 12]
                    ])
                })), function(t, e) {
                    return ht.apply(this, arguments)
                }),
                $_initialize: (pt = s()(_.a.mark(function t(e) {
                    var n, r, o;
                    return _.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = e.state, r = e.dispatch, o = e.commit, n.$_preview) return t.abrupt("return", r("$_initializePreview"));
                                t.next = 3;
                                break;
                            case 3:
                                return t.next = 5, at();
                            case 5:
                                if (t.sent) {
                                    t.next = 7;
                                    break
                                }
                                return t.abrupt("return", Object(f.b)("Something went wrong [CODE V2-2]"));
                            case 7:
                                return t.next = 9, r("$_initializeSession");
                            case 9:
                                o("$_setInitialized");
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function(t) {
                    return pt.apply(this, arguments)
                }),
                $_initializePreview: (dt = s()(_.a.mark(function t() {
                    return _.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                xt("$_setInitialized"), window.addEventListener("message", function(t) {
                                    var e = t.data;
                                    if (t.origin === Y.appUrl && e && "chatbot" === e.source) switch (e.event) {
                                        case "configuration":
                                            return xt("$_setPreviewConfig", e.payload);
                                        case "session":
                                            return xt("$_updateSession", e.payload)
                                    }
                                });
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function() {
                    return dt.apply(this, arguments)
                }),
                $_onMomentLoad: function() {
                    it.call("onMomentLoad")
                },
                $_closeMoment: function(t) {
                    var e = t.commit;
                    it.call("onMomentClose"), e("$_setMoment", {
                        url: null,
                        height: null
                    })
                },
                $_openMoment: function(t, e) {
                    var n = t.commit,
                        r = t.state,
                        o = e.url,
                        i = e.height;
                    r.$_online && (it.call("onMomentOpen"), n("$_setMoment", {
                        url: o,
                        height: i = ["full", "tall", "compact"].includes(i) ? i : "full"
                    }))
                },
                $_setSessionAttributes: function(t, e) {
                    var n = t.state,
                        r = t.commit,
                        o = t.dispatch;
                    t.getters;
                    return !n.$_session.ended && (n.$_session.conversationStarted ? o("$_request", {
                        method: "put",
                        url: "v2/chat",
                        body: {
                            attributes: e
                        }
                    }) : (r("$_setSessionAttributesMutation", e), !0))
                },
                $_setUserAttributes: function(t, e) {
                    var n = t.dispatch;
                    return $t.$_session.conversationStarted ? n("$_request", {
                        method: "put",
                        url: "v2/chat/me",
                        body: {
                            attributes: e
                        }
                    }) : (xt("$_setUserAttributesMutation", e), !0)
                },
                $_getUserData: function(t) {
                    return (0, t.dispatch)("$_request", {
                        method: "get",
                        url: "v2/chat/me"
                    })
                },
                $_initializeSession: function(t) {
                    var e = t.state,
                        n = t.commit,
                        r = t.dispatch;
                    return window.addEventListener("beforeunload", function() {
                        return n("$_setLastVisit")
                    }), e.$_session.opened && (it.data.mobile ? n("$_setOpened", !1) : r("$_openChat", e.$_session.opened)), new Promise(function(e) {
                        return it.once(lt.b, function(t) {
                            n("$_setVisitedPages", t), it.on(lt.b, function(t) {
                                return n("$_setVisitedPages", t)
                            }), e()
                        })
                    })
                },
                $_openChat: function(t) {
                    var e = t.state,
                        n = t.commit;
                    e.$_preview || n("$_setOpened", !0)
                },
                $_closeChat: function(t) {
                    var e = t.state,
                        n = t.commit;
                    e.$_preview || n("$_setOpened", !1)
                }
            },
            getters: {
                $_mobile: function() {
                    return it.data.mobile
                },
                $_config: function(t) {
                    return t.$_preview ? t.$_previewConfig : it.data.config
                },
                $_colors: function(t) {
                    return t.$_preview ? t.$_previewConfig.colors : it.data.config.colors
                },
                $_language: function() {
                    var t = it.data.language;
                    if (!t) {
                        var e = /^(\w+)/g.exec(navigator.language) || [];
                        t = W()(e, 1)[0]
                    }
                    return ut[t] ? t : "en"
                },
                $_translations: function(t, e) {
                    return ut[e.$_language]
                },
                $_currentUrl: function(t) {
                    return t.$_session.visitedPages.slice(-1)[0]
                }
            }
        }),
        xt = wt.commit,
        Ot = wt.dispatch,
        $t = wt.state,
        kt = (wt.getters, function() {
            return $t.$_session
        });
    wt.watch(kt, bt, {
        deep: !0
    });
    var St = function(t, e) {
            return t === e
        },
        Tt = function(t, e) {
            return t !== e
        },
        Ct = function(t) {
            return !!t
        },
        Et = function(t, e) {
            return t.includes(e)
        },
        At = function(t, e) {
            return !t.includes(e)
        },
        Nt = function(t, e) {
            return e < t
        },
        jt = function(t, e) {
            return t < e
        },
        Pt = function(t, e) {
            return e <= t
        },
        Lt = function(t, e) {
            return t <= e
        },
        It = function(t, e) {
            return t.length > e
        },
        Bt = function(t, e) {
            return t.length < e
        },
        Mt = function() {
            var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            return new Promise(function(t) {
                return t(e)
            })
        },
        Rt = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            return new Promise(function(t) {
                return setTimeout(t, e, !0)
            })
        },
        Ut = function() {
            return Promise.reject()
        },
        Dt = function(t, e) {
            return t.includes(e) && (n = o, r = e, Object.prototype.hasOwnProperty.call(n, r));
            var n, r
        },
        qt = function(t, e, n) {
            return o[t](e, n)
        },
        zt = ["greater"],
        Ft = ["greater"],
        Gt = ["is", "isNot", "contains", "notContains"],
        Ht = ["is", "isNot", "contains", "notContains"],
        Wt = ["is"],
        Vt = ["is", "isNot"],
        Kt = ["is", "isNot"],
        Yt = ["is", "isNot", "contains", "notContains", "greater", "less", "greaterOrEqual", "lessOrEqual", "longer", "shorter"],
        Xt = ["is", "isNot", "contains", "notContains"],
        Zt = function(t, e) {
            if (!Dt(zt, e)) return Ut();
            var n = kt().websiteTime,
                r = F() - n,
                o = G(t);
            return qt(e, r, o) ? Mt() : Rt(o - r)
        },
        Jt = function(t, e) {
            if (!Dt(Ft, e)) return Ut();
            var n = kt().pageTime,
                r = F() - n,
                o = G(t);
            return qt(e, r, o) ? Mt() : Rt(o - r)
        },
        Qt = function(t, e) {
            if (!Dt(Gt, e)) return Ut();
            var n = kt().visitedPages.slice(-1)[0];
            return qt(e, n, t) ? Mt() : Ut()
        },
        te = function(e, n) {
            return Dt(Ht, n) && kt().visitedPages.some(function(t) {
                return qt(n, t, e)
            }) ? Mt() : Ut()
        },
        ee = function(t, e) {
            if (!Dt(Wt, e)) return Ut();
            var n = kt().visitedPages;
            return qt(e, n.length, t) ? Mt() : Ut()
        },
        ne = function(t, e) {
            if (!Dt(Vt, e)) return Ut();
            var n = kt().lastVisit;
            return qt(e, !n, t) ? Mt() : Ut()
        },
        re = function(t, e) {
            if (!Dt(Kt, e)) return Ut();
            var n = kt().lastVisit,
                r = F() - n >= G(60 * 2);
            return qt(e, r, t) ? Mt() : Ut()
        },
        oe = function(t, e, n) {
            var r = n.alias;
            if (!Dt(Yt, e)) return Ut();
            var o = kt().sessionAttributes,
                i = (null == o ? void 0 : o[r]) || "";
            return qt(e, i, t) ? Mt() : Ut()
        },
        ie = function(t, e) {
            return Dt(Xt, e) && qt(e, it.data.documentReferrer, t) ? Mt() : Ut()
        },
        ae = function(t) {
            var e, n, r, o, i, a = t.message,
                s = t.rules,
                c = [a],
                u = !0,
                l = !1,
                f = void 0;
            try {
                for (var d, p = s[Symbol.iterator](); !(u = (d = p.next()).done); u = !0) {
                    var h = d.value,
                        v = (void 0, n = (e = h).type, r = e.value, o = e.rule, i = q()(e, ["type", "value", "rule"]), "function" == typeof m[n] && m[n](r, o, i));
                    if (!v) {
                        c = [];
                        break
                    }
                    c.push(v)
                }
            } catch (t) {
                l = !0, f = t
            } finally {
                try {
                    u || null == p.return || p.return()
                } finally {
                    if (l) throw f
                }
            }
            return new Promise(function(t, e) {
                return Promise.all(c).then(function() {
                    return t(a)
                }).catch(e)
            })
        },
        se = function(t) {
            return n = function e(n) {
                if (n.length < 1) return Promise.reject();
                var t = n.map(z);
                return Promise.race(t).catch(function(t) {
                    return n.splice(t, 1), e(n)
                })
            }(function(t) {
                var e = [],
                    n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var s = i.value;
                        e.push(ae(s))
                    }
                } catch (t) {
                    r = !0, o = t
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return e
            }(t)), {
                promise: new Promise(function(t, e) {
                    r = e, Promise.resolve(n).then(t).catch(e)
                }),
                cancel: function() {
                    r({
                        canceled: !0
                    })
                }
            };
            var n, r
        };

    function ce(t, e, n, r, o, i, a, s) {
        var c, u = "function" == typeof t ? t.options : t;
        if (e && (u.render = e, u.staticRenderFns = n, u._compiled = !0), r && (u.functional = !0), i && (u._scopeId = "data-v-" + i), a ? (c = function(t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
            }, u._ssrRegister = c) : o && (c = s ? function() {
                o.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot)
            } : o), c)
            if (u.functional) {
                u._injectStyles = c;
                var l = u.render;
                u.render = function(t, e) {
                    return c.call(e), l(t, e)
                }
            } else {
                var f = u.beforeCreate;
                u.beforeCreate = f ? [].concat(f, c) : [c]
            }
        return {
            exports: t,
            options: u
        }
    }
    var ue = ce({
        mixins: [T],
        data: function() {
            return {
                cancel: X.a
            }
        },
        computed: {
            displayMessage: function() {
                return 190 <= this.$_greeting.length ? this.$_greeting.substr(0, 190) + "..." : this.$_greeting
            }
        },
        watch: {
            "$_session.visitedPages": function() {
                this.setPromise()
            },
            "$_session.sessionAttributes": function() {
                this.setPromise()
            }
        },
        methods: {
            displayGreeting: function(t) {
                this.$_greeting || this.$_showGreeting(t)
            },
            onGreetingClick: function() {
                this.$_openChat()
            },
            setPromise: function() {
                if (!(this.$_session.conversationStarted || this.$_greeting || this.$_session.greetingHidden)) {
                    this.cancelPromise();
                    var t = se(this.$_config.greetings),
                        e = t.promise,
                        n = t.cancel;
                    e.then(this.displayGreeting, X.a), this.cancel = n
                }
            },
            cancelPromise: function() {
                this.cancel(), this.cancel = X.a
            }
        },
        created: function() {
            this.setPromise()
        },
        updated: function() {
            this.$updateFrameStyle()
        },
        beforeDestroy: function() {
            this.cancelPromise()
        }
    }, R, [], !1, null, null, null);
    ue.options.__file = "src/v2/chat/views/closed/greeting/greeting.vue";
    var le = ue.exports,
        fe = function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "bar",
                style: {
                    background: this.$_colors.minimizedBackground
                },
                on: {
                    click: this.$_openChat
                }
            }, [e("div", {
                staticClass: "bar-status",
                style: {
                    background: this.$_colors.statusBackground
                }
            }), this._v(" "), e("div", {
                staticClass: "bar-text",
                style: {
                    color: this.$_colors.minimizedText
                },
                domProps: {
                    textContent: this._s(this.$_config.chatButton.text)
                }
            })])
        };
    fe._withStripped = !0;
    var de = ce({
        mixins: [k]
    }, fe, [], !1, null, null, null);
    de.options.__file = "src/v2/chat/views/closed/bar/bar.vue";
    var pe = de.exports,
        he = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "bubble",
                style: {
                    background: t.$_colors.minimizedBackground
                },
                on: {
                    click: t.$_openChat
                }
            }, ["send" === t.$_config.chatButton.image ? n("bubble-icon", {
                attrs: {
                    color: t.$_colors.minimizedIcon,
                    icon: "send"
                }
            }) : "chat" === t.$_config.chatButton.image ? n("bubble-icon", {
                attrs: {
                    color: t.$_colors.minimizedIcon,
                    icon: "chat"
                }
            }) : t.$_config.chatButton.image ? n("lazy-img", {
                attrs: {
                    src: t.$_config.chatButton.image,
                    cover: !0
                }
            }) : t._e()], 1)
        },
        ve = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return "chat" === t.icon ? n("svg", {
                attrs: {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 30 33",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [n("path", {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M21.333 26.324l6.449 6.376a.752.752 0 001.28-.535V21.44l-7.729 4.884z",
                    fill: t.color
                }
            }), t._v(" "), n("path", {
                attrs: {
                    d: "M3.946 0h22.109a3.008 3.008 0 013.008 3.008V21.44l-7.624 5.004H3.945a3.008 3.008 0 01-3.007-3.008V3.008A3.008 3.008 0 013.946 0z",
                    fill: t.color
                }
            }), t._v(" "), n("path", {
                attrs: {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M21.439 26.444L.937 4.981v21.463H21.44z",
                    fill: "url(#gradient)"
                }
            }), t._v(" "), n("defs", [n("linearGradient", {
                attrs: {
                    id: "gradient",
                    x1: "13.451",
                    y1: "12.325",
                    x2: "5.559",
                    y2: "22.297",
                    gradientUnits: "userSpaceOnUse"
                }
            }, [n("stop", {
                attrs: {
                    "stop-color": "#000000",
                    "stop-opacity": ".2"
                }
            }), t._v(" "), n("stop", {
                attrs: {
                    offset: "1",
                    "stop-color": "transparent",
                    "stop-opacity": "0"
                }
            })], 1)], 1)]) : "send" === t.icon ? n("svg", {
                attrs: {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 43 33",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [n("g", {
                attrs: {
                    "clip-path": "url(#clip0)"
                }
            }, [n("path", {
                attrs: {
                    d: "M15.3133 21.8617L14.6677 31.1229C15.5913 31.1229 15.9913 30.7183 16.471 30.2323L20.8013 26.0114L29.7741 32.7135C31.4197 33.6489 32.5792 33.1563 33.0231 31.1694L38.9128 3.02084C39.4364 0.538024 38.0347 -0.432215 36.4314 0.176465L1.81176 13.6951C-0.550958 14.6305 -0.515184 15.974 1.41012 16.5826L10.261 19.3905L30.8197 6.2699C31.7872 5.61644 32.667 5.978 31.9433 6.63146L15.3133 21.8617Z",
                    fill: t.color
                }
            })]), t._v(" "), n("defs", [n("clipPath", {
                attrs: {
                    id: "clip0"
                }
            }, [n("rect", {
                attrs: {
                    width: "43",
                    height: "33",
                    fill: "white"
                }
            })])])]) : t._e()
        };
    ve._withStripped = he._withStripped = !0;
    var me = ce({
        props: {
            icon: {
                type: String,
                validator: function(t) {
                    return ["chat", "send"].includes(t)
                }
            },
            color: {
                type: String,
                required: !0
            }
        }
    }, ve, [], !1, null, null, null);
    me.options.__file = "src/v2/chat/views/closed/bubble/bubble-icon/bubble-icon.vue";
    var ge = ce({
        components: {
            "bubble-icon": me.exports
        },
        mixins: [S]
    }, he, [], !1, null, null, null);
    ge.options.__file = "src/v2/chat/views/closed/bubble/bubble.vue";
    var ye = ce({
        components: {
            greeting: le,
            bar: pe,
            bubble: ge.exports
        },
        mixins: [$],
        updated: function() {
            this.$updateFrameStyle()
        },
        mounted: function() {
            it.call("onChatClose"), this.$updateFrameStyle()
        }
    }, M, [], !1, null, null, null);
    ye.options.__file = "src/v2/chat/views/closed/closed.vue";
    var _e = ye.exports,
        be = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "opened",
                attrs: {
                    "data-mobile": "" + t.$_mobile
                }
            }, [t.welcome ? n("welcome") : t._e(), t._v(" "), n("chat", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.welcome,
                    expression: "!welcome"
                }]
            }), t._v(" "), t.$_moment.url ? n("moment") : t._e()], 1)
        },
        we = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "welcome",
                style: {
                    background: e.$_colors.welcomeBackground
                }
            }, [n("div", {
                staticClass: "close",
                on: {
                    click: function(t) {
                        return e.$_closeChat()
                    }
                }
            }, [n("tpl-close", {
                attrs: {
                    color: e.$_colors.welcomeCloseIcon
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "background-wrapper"
            }, [e.$_config.company.background.enabled ? n("div", {
                staticClass: "background",
                style: {
                    background: e.$_colors.welcomeImageBackground
                }
            }, [e.$_config.company.background.url ? n("lazy-img", {
                attrs: {
                    src: e.$_config.company.background.url,
                    cover: !0
                }
            }) : e._e()], 1) : n("div", {
                staticClass: "no-background"
            }), e._v(" "), e.$_config.company.avatar.enabled ? n("div", {
                staticClass: "avatar"
            }, [n("tpl-avatar", {
                attrs: {
                    borderColor: e.$_colors.welcomeBackground
                }
            })], 1) : e._e()]), e._v(" "), e.$_config.company.name ? n("div", {
                staticClass: "header",
                style: {
                    color: e.$_colors.welcomeHeaderText
                }
            }, [e._v("\n        " + e._s(e.$_config.company.name) + "\n    ")]) : e._e(), e._v(" "), n("div", {
                staticClass: "status",
                style: {
                    color: e.$_colors.welcomeStatusText
                }
            }, [e._v("\n        Online\n    ")]), e._v(" "), n("div", {
                staticClass: "content",
                style: {
                    background: e.$_colors.welcomeBlockBackground
                }
            }, [e.$_config.company.description ? n("div", {
                staticClass: "description",
                style: {
                    color: e.$_colors.welcomeBlockText
                }
            }, [e._v("\n            " + e._s(e.$_config.company.description) + "\n        ")]) : e._e(), e._v(" "), n("div", {
                staticClass: "button",
                style: {
                    borderColor: e.$_colors.welcomeButtonBackground,
                    background: e.$_colors.welcomeButtonBackground,
                    color: e.$_colors.welcomeButtonText
                },
                attrs: {
                    "data-loading": e.$_busy
                },
                on: {
                    click: function(t) {
                        return e.emitSendWelcome()
                    }
                }
            }, [e._v("\n            " + e._s(e.$_translations.start_conversation_button) + "\n        ")]), e._v(" "), n("div", {
                staticClass: "icons"
            }, [n("social-icon", {
                attrs: {
                    url: e.$_config.company.social.facebook,
                    color: e.$_colors.welcomeBlockIcon,
                    icon: "facebook"
                }
            }), e._v(" "), n("social-icon", {
                attrs: {
                    url: e.$_config.company.social.linkedin,
                    color: e.$_colors.welcomeBlockIcon,
                    icon: "linkedin"
                }
            }), e._v(" "), n("social-icon", {
                attrs: {
                    url: e.$_config.company.social.twitter,
                    color: e.$_colors.welcomeBlockIcon,
                    icon: "twitter"
                }
            })], 1)]), e._v(" "), e.$_config.whiteLabel ? n("tpl-powered-by", {
                attrs: {
                    welcome: !0
                }
            }) : e._e()], 1)
        },
        xe = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return t.url ? n("a", {
                staticClass: "social-icon",
                attrs: {
                    target: "_blank",
                    href: t.url
                }
            }, ["facebook" === t.icon ? n("svg", {
                staticStyle: {
                    "enable-background": "new 0 0 90 90"
                },
                attrs: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 430.113 430.114",
                    "xml:space": "preserve",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [n("path", {
                attrs: {
                    fill: t.color,
                    d: "M158.081,83.3c0,10.839,0,59.218,0,59.218h-43.385v72.412h43.385v215.183h89.122V214.936h59.805   c0,0,5.601-34.721,8.316-72.685c-7.784,0-67.784,0-67.784,0s0-42.127,0-49.511c0-7.4,9.717-17.354,19.321-17.354   c9.586,0,29.818,0,48.557,0c0-9.859,0-43.924,0-75.385c-25.016,0-53.476,0-66.021,0C155.878-0.004,158.081,72.48,158.081,83.3z"
                }
            })]) : "linkedin" === t.icon ? n("svg", {
                staticStyle: {
                    "enable-background": "new 0 0 90 90"
                },
                attrs: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 430.117 430.117",
                    "xml:space": "preserve",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }
            }, [n("path", {
                attrs: {
                    fill: t.color,
                    d: "M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707   c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21   v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824   C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463   c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z    M5.477,420.56h92.184v-277.32H5.477V420.56z"
                }
            })]) : "twitter" === t.icon ? n("svg", {
                staticStyle: {
                    "enable-background": "new 0 0 90 90"
                },
                attrs: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 430.117 430.117",
                    "xml:space": "preserve",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }
            }, [n("path", {
                attrs: {
                    fill: t.color,
                    d: "M381.384,198.639c24.157-1.993,40.543-12.975,46.849-27.876   c-8.714,5.353-35.764,11.189-50.703,5.631c-0.732-3.51-1.55-6.844-2.353-9.854c-11.383-41.798-50.357-75.472-91.194-71.404   c3.304-1.334,6.655-2.576,9.996-3.691c4.495-1.61,30.868-5.901,26.715-15.21c-3.5-8.188-35.722,6.188-41.789,8.067   c8.009-3.012,21.254-8.193,22.673-17.396c-12.27,1.683-24.315,7.484-33.622,15.919c3.36-3.617,5.909-8.025,6.45-12.769   C241.68,90.963,222.563,133.113,207.092,174c-12.148-11.773-22.915-21.044-32.574-26.192   c-27.097-14.531-59.496-29.692-110.355-48.572c-1.561,16.827,8.322,39.201,36.8,54.08c-6.17-0.826-17.453,1.017-26.477,3.178   c3.675,19.277,15.677,35.159,48.169,42.839c-14.849,0.98-22.523,4.359-29.478,11.642c6.763,13.407,23.266,29.186,52.953,25.947   c-33.006,14.226-13.458,40.571,13.399,36.642C113.713,320.887,41.479,317.409,0,277.828   c108.299,147.572,343.716,87.274,378.799-54.866c26.285,0.224,41.737-9.105,51.318-19.39   C414.973,206.142,393.023,203.486,381.384,198.639z"
                }
            })]) : t._e()]) : t._e()
        };
    xe._withStripped = we._withStripped = be._withStripped = !0;
    var Oe = ce({
        props: {
            color: {
                type: String,
                required: !0
            },
            url: {
                type: String
            },
            icon: {
                type: String,
                required: !0,
                validator: function(t) {
                    return ["facebook", "linkedin", "twitter"].includes(t)
                }
            }
        }
    }, xe, [], !1, null, null, null);
    Oe.options.__file = "src/v2/chat/views/opened/welcome/social-icon/social-icon.vue";
    var $e = ce({
        components: {
            "social-icon": Oe.exports
        },
        mixins: [E],
        methods: {
            emitSendWelcome: et
        }
    }, we, [], !1, null, null, null);
    $e.options.__file = "src/v2/chat/views/opened/welcome/welcome.vue";
    var ke = $e.exports,
        Se = function() {
            var n = this,
                t = n.$createElement,
                e = n._self._c || t;
            return e("div", {
                staticClass: "chat"
            }, [e("top"), n._v(" "), e("conversation", n._b({
                on: {
                    scroll: function(t) {
                        return n.onScroll(t)
                    },
                    button: function(t) {
                        return n.onButton(t)
                    }
                },
                scopedSlots: n._u([n.$_mobile ? null : {
                    key: "date",
                    fn: function(t) {
                        var e = t.message;
                        return [n._v("\n            " + n._s(n.parseDate(e.JSON.date)) + "\n        ")]
                    }
                }, {
                    key: "sending-copy",
                    fn: function() {
                        return [n._v("\n            " + n._s(n.$_translations.sending) + "\n        ")]
                    },
                    proxy: !0
                }, {
                    key: "sending-error-copy",
                    fn: function() {
                        return [n._v("\n            " + n._s(n.$_translations.sending_error) + "\n        ")]
                    },
                    proxy: !0
                }], null, !0)
            }, "conversation", {
                debug: n.debug,
                avatar: n.avatar,
                colors: n.colors,
                scroll: n.scroll,
                botName: n.botName,
                userName: n.userName,
                executedButtons: n.executedButtons,
                formattedMessages: n.formattedMessages
            }, !1)), n._v(" "), n.$_session.ended ? e("start-again") : n.typing ? e("typing") : n._e(), n._v(" "), n.$_config.whiteLabel ? e("tpl-powered-by") : n._e()], 1)
        };
    Se._withStripped = !0;
    var Te = r(24),
        Ce = r.n(Te),
        Ee = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "top",
                style: {
                    background: e.$_colors.headerBackground
                },
                attrs: {
                    "data-shadow": e.$_colors.headerBackground !== e.$_colors.conversationBackground
                }
            }, [n("div", {
                staticClass: "close",
                on: {
                    click: function(t) {
                        return e.$_closeChat()
                    }
                }
            }, [n("tpl-close", {
                attrs: {
                    color: e.$_colors.headerCloseIcon
                }
            })], 1), e._v(" "), e.$_config.company.avatar.enabled ? n("div", {
                staticClass: "avatar"
            }, [n("tpl-avatar", {
                attrs: {
                    borderColor: e.$_colors.headerBackground
                }
            })], 1) : e._e(), e._v(" "), n("div", {
                staticClass: "company"
            }, [e.$_config.company.name ? n("div", {
                staticClass: "header",
                style: {
                    color: e.$_colors.headerText
                }
            }, [e._v("\n            " + e._s(e.$_config.company.name) + "\n        ")]) : e._e(), e._v(" "), n("div", {
                staticClass: "status",
                style: {
                    color: e.$_colors.headerStatusText
                }
            }, [e._v("\n            Online\n        ")])]), e._v(" "), n("offline")], 1)
        },
        Ae = function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("transition", {
                attrs: {
                    name: "fade"
                }
            }, [this.$_online ? this._e() : e("div", {
                staticClass: "offline"
            }, [this._v("\n        " + this._s(this.$_translations.offline_information) + "\n    ")])])
        };
    Ae._withStripped = Ee._withStripped = !0;
    var Ne = ce({
        mixins: [P],
        methods: {
            setStatus: function(t) {
                var e = t.type;
                this.$_setOnline("online" === e)
            }
        },
        created: function() {
            window.addEventListener("online", this.setStatus), window.addEventListener("offline", this.setStatus)
        },
        beforeDestroy: function() {
            window.removeEventListener("online", this.setStatus), window.removeEventListener("offline", this.setStatus)
        }
    }, Ae, [], !1, null, null, null);
    Ne.options.__file = "src/v2/chat/views/opened/chat/top/offline/offline.vue";
    var je = ce({
        components: {
            offline: Ne.exports
        },
        mixins: [A]
    }, Ee, [], !1, null, null, null);
    je.options.__file = "src/v2/chat/views/opened/chat/top/top.vue";
    var Pe = je.exports,
        Le = function() {
            var n = this,
                t = n.$createElement,
                r = n._self._c || t;
            return r("div", {
                staticClass: "conversation",
                style: {
                    background: n.colors.conversationBackground
                },
                on: {
                    "&scroll": function(t) {
                        return n.onScroll(t)
                    }
                }
            }, n._l(n.formattedMessages, function(t, e) {
                return n.$options.components[n.modelName(t.type)] ? r("div", {
                    key: e,
                    staticClass: "message",
                    attrs: {
                        "data-sending": t.SENDING,
                        "data-sending-error": t.SENDING_ERROR,
                        "data-type": t.type,
                        "data-bot": t.BOT,
                        "data-user": !t.BOT
                    }
                }, [r("component", n._b({
                    on: {
                        scrollDown: n.delayedScrollDown,
                        button: n.onButton,
                        phraseTrained: n.onPhraseTrained
                    }
                }, "component", {
                    is: n.modelName(t.type),
                    last: e === n.lastIndex,
                    message: t,
                    colors: n.colors,
                    botName: n.botName,
                    userName: n.userName,
                    avatar: n.avatar,
                    executedButtons: n.executedButtons,
                    stories: n.stories,
                    debug: n.debug,
                    limitedBlocksWidth: n.limitedBlocksWidth
                }, !1)), n._v(" "), t.SENDING || t.SENDING_ERROR ? r("div", {
                    staticClass: "sending-status",
                    style: {
                        color: n.colors.captionSendingText
                    }
                }, [t.SENDING ? [n._t("sending-copy", [n._v("Sending")])] : n._e(), n._v(" "), t.SENDING_ERROR ? [n._t("sending-error-copy", [n._v("Not delivered")])] : n._e()], 2) : n._e(), n._v(" "), n.$scopedSlots.date && t.JSON ? r("div", {
                    staticClass: "message-date-wrapper"
                }, [r("div", {
                    staticClass: "message-date"
                }, [n._t("date", null, {
                    message: t
                })], 2)]) : n._e()], 1) : n._e()
            }), 0)
        };
    Le._withStripped = !0;
    r(45);
    var Ie = r(2),
        Be = r.n(Ie),
        Me = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "bot-response button",
                style: {
                    borderColor: t.colors.richBorder,
                    background: t.colors.richBackground
                }
            }, [n("div", {
                staticClass: "button-content"
            }, [n("anchors", {
                staticClass: "button-description",
                style: {
                    color: t.colors.richText
                },
                attrs: {
                    text: t.message.title
                }
            })], 1), t._v(" "), n("buttons", {
                attrs: {
                    colors: t.colors,
                    executedButtons: t.executedButtons,
                    buttons: t.message.buttons
                },
                on: {
                    button: t.$listeners.button
                }
            })], 1)
        },
        Re = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "buttons"
            }, e._l(e.buttons, function(t) {
                return n("single-button", {
                    key: t.id,
                    attrs: {
                        button: t,
                        colors: e.colors,
                        executedButtons: e.executedButtons
                    },
                    on: {
                        button: e.$listeners.button
                    }
                })
            }), 1)
        },
        Ue = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "single-button",
                style: e.style.button,
                attrs: {
                    "data-conversation-button-tittle": e.button.title
                },
                on: {
                    click: function(t) {
                        return e.$emit("button", e.button)
                    }
                }
            }, [n("div", {
                staticClass: "single-button-text",
                style: e.style.text
            }, [e._v("\n        " + e._s(e.button.title) + "\n    ")])])
        };
    Ue._withStripped = Re._withStripped = Me._withStripped = !0;
    var De = ce({
        props: {
            button: {
                type: Object,
                required: !0
            },
            colors: {
                type: Object,
                required: !0
            },
            executedButtons: {
                type: Array,
                required: !0
            }
        },
        computed: {
            style: function() {
                return this.button.clicked || this.executedButtons.includes(this.button.id) ? {
                    button: {
                        background: this.colors.richButtonActiveBackground,
                        borderTopColor: this.colors.richButtonActiveBorder
                    },
                    text: {
                        color: this.colors.richButtonActiveText
                    }
                } : {
                    button: {
                        background: this.colors.richButtonBackground,
                        borderTopColor: this.colors.richButtonBorder
                    },
                    text: {
                        color: this.colors.richButtonText
                    }
                }
            }
        },
        methods: {
            onClick: function(t) {
                this.$emit("button", t)
            }
        }
    }, Ue, [], !1, null, null, null);
    De.options.__file = "src/v2/chat/components/conversation/blocks/helpers/buttons/single-button/single-button.vue";
    var qe = ce({
        components: {
            singleButton: De.exports
        },
        props: {
            buttons: {
                type: Array,
                required: !0
            },
            colors: {
                type: Object,
                required: !0
            },
            executedButtons: {
                type: Array,
                required: !0
            }
        }
    }, Re, [], !1, null, null, null);
    qe.options.__file = "src/v2/chat/components/conversation/blocks/helpers/buttons/buttons.vue";
    var ze = qe.exports,
        Fe = ce({
            inheritAttrs: !1,
            components: {
                buttons: ze
            },
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                },
                executedButtons: {
                    type: Array,
                    required: !0
                }
            }
        }, Me, [], !1, null, null, null);
    Fe.options.__file = "src/v2/chat/components/conversation/blocks/bot-response.button/bot-response.button.vue";
    var Ge = Fe.exports,
        He = function() {
            var n = this,
                t = n.$createElement,
                r = n._self._c || t;
            return r("div", {
                staticClass: "bot-response cards"
            }, [r("div", {
                ref: "scroll",
                staticClass: "cards-scroll"
            }, [r("div", {
                staticClass: "cards-scroll-spacer"
            }), n._v(" "), n._l(n.elements, function(t, e) {
                return r("card", n._b({
                    key: e,
                    ref: "item",
                    refInFor: !0,
                    attrs: {
                        colors: n.colors,
                        executedButtons: n.executedButtons,
                        active: !n.wrapperHasScroll || e === n.activeIndex
                    },
                    on: {
                        button: n.$listeners.button
                    },
                    nativeOn: {
                        click: function(t) {
                            return n.setActiveIndex(e)
                        }
                    }
                }, "card", t, !1))
            }), n._v(" "), r("div", {
                staticClass: "cards-scroll-spacer"
            })], 2), n._v(" "), r("div", {
                staticClass: "navigation"
            }, [r("transition", {
                attrs: {
                    name: "fade"
                }
            }, [n.left ? r("arrow", {
                attrs: {
                    direction: "prev",
                    colors: n.colors
                },
                nativeOn: {
                    click: function(t) {
                        return n.prev()
                    }
                }
            }) : n._e()], 1), n._v(" "), r("transition", {
                attrs: {
                    name: "fade"
                }
            }, [n.right ? r("arrow", {
                attrs: {
                    direction: "next",
                    colors: n.colors
                },
                nativeOn: {
                    click: function(t) {
                        return n.next()
                    }
                }
            }) : n._e()], 1)], 1)])
        },
        We = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "card-wrapper",
                class: {
                    active: t.active
                }
            }, [n("div", {
                staticClass: "card",
                style: {
                    borderColor: t.colors.richBorder,
                    background: t.colors.richBackground
                }
            }, [t.imageUrl ? n("div", {
                staticClass: "card-image"
            }, [n("lazy-img", {
                attrs: {
                    cover: !0,
                    src: t.imageUrl
                }
            })], 1) : t._e(), t._v(" "), n("div", {
                staticClass: "card-content"
            }, [n("anchors", {
                staticClass: "card-title",
                style: {
                    color: t.colors.richText
                },
                attrs: {
                    text: t.title
                }
            }), t._v(" "), n("anchors", {
                staticClass: "card-description",
                style: {
                    color: t.colors.richText
                },
                attrs: {
                    text: t.subtitle
                }
            })], 1), t._v(" "), n("buttons", {
                attrs: {
                    colors: t.colors,
                    executedButtons: t.executedButtons,
                    buttons: t.buttons
                },
                on: {
                    button: t.$listeners.button
                }
            })], 1)])
        },
        Ve = ce({
            inheritAttrs: !(We._withStripped = He._withStripped = !0),
            components: {
                buttons: ze
            },
            props: {
                colors: {
                    type: Object,
                    required: !0
                },
                executedButtons: {
                    type: Array,
                    required: !0
                },
                active: {
                    type: Boolean,
                    default: !0
                },
                title: {
                    type: String
                },
                subtitle: {
                    type: String
                },
                imageUrl: {
                    type: String
                },
                buttons: {
                    type: Array
                }
            }
        }, We, [], !1, null, null, null);
    Ve.options.__file = "src/v2/chat/components/conversation/blocks/bot-response.cards/card/card.vue";
    var Ke = Ve.exports,
        Ye = function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "arrow",
                style: {
                    background: this.colors.carouselButtonBackground
                },
                attrs: {
                    "data-direction": this.direction
                }
            }, [e("svg", {
                attrs: {
                    width: "8",
                    height: "12",
                    viewBox: "0 0 8 12",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, ["prev" === this.direction ? e("path", {
                attrs: {
                    fill: this.colors.carouselButtonIcon,
                    d: "M8 1.41L3.05533 6L8 10.59L6.47773 12L0 6L6.47773 0L8 1.41Z"
                }
            }) : "next" === this.direction ? e("path", {
                attrs: {
                    fill: this.colors.carouselButtonIcon,
                    d: "M0 10.59L4.94467 6L0 1.41L1.52227 0L8 6L1.52227 12L0 10.59Z"
                }
            }) : this._e()])])
        };
    Ye._withStripped = !0;
    var Xe = ce({
        props: {
            colors: {
                type: Object,
                required: !0
            },
            direction: {
                type: String,
                required: !0,
                validator: function(t) {
                    return ["prev", "next"].includes(t)
                }
            }
        }
    }, Ye, [], !1, null, null, null);
    Xe.options.__file = "src/v2/chat/components/conversation/blocks/bot-response.cards/arrow/arrow.vue";
    var Ze = Xe.exports,
        Je = function(i, t) {
            var a, e, n = t.duration,
                s = void 0 === n ? 400 : n,
                r = t.vertical,
                o = void 0 === r || r,
                c = t.to;
            cancelAnimationFrame(i._scrollRef), (e = o ? (a = "scrollTop", i.scrollHeight - i.clientHeight) : (a = "scrollLeft", i.scrollWidth - i.clientWidth)) < c ? c = e : c < 0 && (c = 0);
            var u = i[a],
                l = c - u,
                f = +new Date,
                d = !0,
                p = null,
                h = function() {
                    if (d) {
                        v();
                        var t, e, n, r = +new Date,
                            o = Math.floor((t = r - f, e = u, n = l, (t /= s / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e));
                        p ? p === i[a] ? (i[a] = o, p = i[a]) : d = !1 : (i[a] = o, p = i[a]), f + s < r && (i[a] = c, d = !1)
                    }
                },
                v = function() {
                    i._scrollRef = requestAnimationFrame(h)
                };
            0 === s ? i[a] = c : v()
        },
        Qe = function(t, e) {
            var n, r, o, i, a, s, c, u = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0;
            ! function(t, e) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0;
                Je(t, {
                    to: e,
                    duration: n,
                    vertical: !1
                })
            }(t, (r = e, c = ((n = t).clientWidth - r.clientWidth) / 2, i = r, a = (o = n).getBoundingClientRect().left, s = i.getBoundingClientRect().left, o.scrollLeft + s - a - c), u)
        },
        tn = function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0;
            Je(t, {
                to: t.scrollHeight - t.clientHeight,
                duration: e
            })
        },
        en = ce({
            inheritAttrs: !1,
            components: {
                arrow: Ze,
                card: Ke
            },
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                },
                executedButtons: {
                    type: Array,
                    required: !0
                }
            },
            data: function() {
                return {
                    activeIndex: 0,
                    wrapperHasScroll: !1,
                    destroySwipe: null
                }
            },
            computed: {
                elements: function() {
                    return this.message.elements
                },
                left: function() {
                    return this.wrapperHasScroll && 0 < this.activeIndex
                },
                right: function() {
                    return this.wrapperHasScroll && this.activeIndex < this.elements.length - 1
                }
            },
            methods: {
                next: function() {
                    this.setActiveIndex(this.activeIndex + 1)
                },
                prev: function() {
                    this.setActiveIndex(this.activeIndex - 1)
                },
                setActiveIndex: function(t) {
                    t < 0 || t > this.elements.length - 1 || (this.activeIndex = t, this.scroll())
                },
                setWrapperHasScroll: function() {
                    var t;
                    this.$refs.scroll && (this.wrapperHasScroll = (t = this.$refs.scroll).clientWidth < t.scrollWidth)
                },
                scroll: function() {
                    if (this.wrapperHasScroll) {
                        var t = this.$refs.item[this.activeIndex];
                        t && Qe(this.$refs.scroll, t.$el, 200)
                    }
                },
                onResize: function() {
                    this.setWrapperHasScroll(), this.delayedScroll()
                },
                resetDelayedScroll: function() {
                    clearTimeout(this.timeoutRef)
                },
                delayedScroll: function() {
                    this.resetDelayedScroll(), this.timeoutRef = setTimeout(this.scroll, 100)
                }
            },
            mounted: function() {
                var t, n, r, o, i, e, a, s, c = this;
                window.addEventListener("resize", this.onResize), this.destroySwipe = (t = this.$refs.scroll, r = 0, o = !(n = function(t) {
                    return "right" === t ? c.next() : c.prev()
                }), i = function(t) {
                    var e = 0,
                        n = null;
                    return t < r ? (e = r - t, n = "right") : r < t && (e = t - r, n = "left"), 20 < e && n
                }, e = function(t) {
                    r = t.changedTouches[0].screenX
                }, a = function(t) {
                    (o || i(t.changedTouches[0].screenX)) && (o = !0, t.stopPropagation())
                }, s = function(t) {
                    o = !1;
                    var e = i(t.changedTouches[0].screenX);
                    if (e) return n(e)
                }, t.addEventListener("touchmove", a, {
                    capture: !0,
                    passive: !0
                }), t.addEventListener("touchstart", e, {
                    passive: !0
                }), t.addEventListener("touchend", s, {
                    passive: !0
                }), function() {
                    t.removeEventListener("touchmove", a, {
                        capture: !0,
                        passive: !0
                    }), t.removeEventListener("touchstart", e, {
                        passive: !0
                    }), t.removeEventListener("touchend", s, {
                        passive: !0
                    })
                }), this.setWrapperHasScroll()
            },
            beforeDestroy: function() {
                window.removeEventListener("resize", this.onResize), this.resetDelayedScroll(), this.destroySwipe()
            }
        }, He, [], !1, null, null, null);
    en.options.__file = "src/v2/chat/components/conversation/blocks/bot-response.cards/bot-response.cards.vue";
    var nn = en.exports,
        rn = function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "bot-response image",
                attrs: {
                    "data-limited-blocks-width": this.limitedBlocksWidth,
                    "data-loaded": "" + this.loaded
                }
            }, [e("lazy-img", {
                attrs: {
                    src: this.message.imageUrl
                },
                on: {
                    loaded: this.setLoaded
                }
            })], 1)
        },
        on = ce({
            inheritAttrs: !(rn._withStripped = !0),
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                limitedBlocksWidth: {
                    type: Boolean,
                    required: !0
                }
            },
            data: function() {
                return {
                    loaded: !1
                }
            },
            methods: {
                setLoaded: function(t) {
                    this.loaded = t, this.$emit("scrollDown")
                }
            }
        }, rn, [], !1, null, null, null);
    on.options.__file = "src/v2/chat/components/conversation/blocks/bot-response.image/bot-response.image.vue";
    var an = on.exports,
        sn = function() {
            var n = this,
                t = n.$createElement,
                r = n._self._c || t;
            return r("div", {
                staticClass: "bot-response quick-replies"
            }, [r("anchors", {
                staticClass: "quick-replies-text",
                style: {
                    background: n.colors.botMessageBackground,
                    color: n.colors.botMessageText
                },
                attrs: {
                    "data-first": n.message.FIRST,
                    "data-middle": !n.message.FIRST && !n.message.LAST,
                    "data-last": !n.message.FIRST && n.message.LAST,
                    text: n.message.title
                }
            }), n._v(" "), n.debug || n.last ? r("div", {
                staticClass: "quick-replies-buttons"
            }, n._l(n.message.buttons, function(e) {
                return r("single-button", {
                    key: e.id,
                    attrs: {
                        button: e,
                        colors: n.colors,
                        executedButtons: n.executedButtons
                    },
                    nativeOn: {
                        click: function(t) {
                            return n.$emit("button", e)
                        }
                    }
                })
            }), 1) : n._e()], 1)
        },
        cn = function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "single-button",
                style: this.style,
                attrs: {
                    "data-conversation-quick-reply-title": this.button.title
                }
            }, [e("span", [this._v(this._s(this.button.title))])])
        };
    cn._withStripped = sn._withStripped = !0;
    var un = ce({
        inject: [],
        props: {
            button: {
                type: Object,
                required: !0
            },
            colors: {
                type: Object,
                required: !0
            },
            executedButtons: {
                type: Array,
                required: !0
            }
        },
        computed: {
            style: function() {
                return this.button.clicked || this.executedButtons.includes(this.button.id) ? {
                    borderColor: this.colors.richButtonActiveBorder,
                    color: this.colors.richButtonActiveText,
                    background: this.colors.richButtonActiveBackground
                } : {
                    borderColor: this.colors.quickRepliesBorder,
                    color: this.colors.quickRepliesText,
                    background: this.colors.quickRepliesBackground
                }
            }
        }
    }, cn, [], !1, null, null, null);
    un.options.__file = "src/v2/chat/components/conversation/blocks/bot-response.quick-replies/single-button/single-button.vue";
    var ln = un.exports,
        fn = ce({
            inheritAttrs: !1,
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                },
                executedButtons: {
                    type: Array,
                    required: !0
                },
                debug: {
                    type: Boolean,
                    required: !0
                },
                last: {
                    type: Boolean,
                    required: !0
                }
            },
            components: {
                singleButton: ln
            }
        }, sn, [], !1, null, null, null);
    fn.options.__file = "src/v2/chat/components/conversation/blocks/bot-response.quick-replies/bot-response.quick-replies.vue";
    var dn = fn.exports,
        pn = function() {
            var t = this,
                e = t.$createElement;
            return (t._self._c || e)("anchors", {
                staticClass: "bot-response text",
                style: {
                    background: t.colors.botMessageBackground,
                    color: t.colors.botMessageText
                },
                attrs: {
                    "data-first": t.message.FIRST,
                    "data-middle": !t.message.FIRST && !t.message.LAST,
                    "data-last": !t.message.FIRST && t.message.LAST,
                    text: t.message.message
                }
            })
        },
        hn = ce({
            inheritAttrs: !(pn._withStripped = !0),
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                }
            }
        }, pn, [], !1, null, null, null);
    hn.options.__file = "src/v2/chat/components/conversation/blocks/bot-response.text/bot-response.text.vue";
    var vn = hn.exports,
        mn = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "caption"
            }, [t.message.BOT ? [t.avatar ? n("div", {
                staticClass: "avatar"
            }, [n("lazy-img", {
                attrs: {
                    cover: !0,
                    src: t.avatar
                }
            })], 1) : t._e(), t._v(" "), n("span", {
                style: {
                    color: t.colors.captionBotText
                }
            }, [t._v("\n            " + t._s(t.botName) + "\n        ")])] : n("span", {
                style: {
                    color: t.colors.captionUserText
                }
            }, [t._v("\n        " + t._s(t.userName) + "\n    ")])], 2)
        },
        gn = ce({
            inheritAttrs: !(mn._withStripped = !0),
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                },
                avatar: {
                    type: [Boolean, String],
                    required: !0
                },
                botName: {
                    type: String,
                    required: !0
                },
                userName: {
                    type: String,
                    required: !0
                }
            }
        }, mn, [], !1, null, null, null);
    gn.options.__file = "src/v2/chat/components/conversation/blocks/caption/caption.vue";
    var yn = gn.exports,
        _n = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "indicator",
                style: {
                    background: e.colors.botMessageBackground
                },
                attrs: {
                    "data-first": e.message.FIRST,
                    "data-middle": !e.message.FIRST && !e.message.LAST,
                    "data-last": !e.message.FIRST && e.message.LAST
                }
            }, e._l(3, function(t) {
                return n("div", {
                    staticClass: "dot",
                    style: {
                        background: e.colors.botMessageIndicator
                    }
                })
            }), 0)
        },
        bn = ce({
            inheritAttrs: !(_n._withStripped = !0),
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                }
            }
        }, _n, [], !1, null, null, null);
    bn.options.__file = "src/v2/chat/components/conversation/blocks/indicator/indicator.vue";
    var wn, xn = bn.exports,
        On = function() {
            var t = this.$createElement;
            return (this._self._c || t)("debug-wrapper", {
                staticClass: "input-welcome",
                attrs: {
                    message: this.message,
                    colors: this.colors
                }
            })
        },
        $n = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "debug-wrapper",
                style: {
                    borderColor: t.colors.richBorder,
                    background: t.colors.richBackground
                },
                attrs: {
                    "data-error": t.message.error
                }
            }, [n("div", {
                directives: [{
                    name: "tippy",
                    rawName: "v-tippy",
                    value: {
                        allowHTML: !0,
                        content: t.message.error ? t.message.errorMessage : "This message is visible only in the debug mode.<br/>Users won't see it.",
                        hideOnClick: !1,
                        interactive: !0
                    },
                    expression: "{\n            allowHTML: true,\n            content: message.error\n                ? message.errorMessage\n                : 'This message is visible only in the debug mode.<br/>Users won\\'t see it.',\n            hideOnClick: false,\n            interactive: true\n        }"
                }],
                staticClass: "debug-badge",
                style: {
                    background: t.colors.richButtonBackground,
                    borderColor: t.colors.richButtonBorder,
                    color: t.colors.richButtonText
                }
            }, [t._v("\n        DEBUG MESSAGE\n    ")]), t._v(" "), t.header ? n("div", {
                staticClass: "debug-header"
            }, [n("i", {
                staticClass: "be-icons",
                attrs: {
                    "data-theme": t.message.type
                }
            }, [t._v("\n            " + t._s(t.header.icon) + "\n        ")]), t._v(" "), n("div", {
                staticClass: "debug-header-title"
            }, [t._v("\n            " + t._s(t.header.defaultName) + "\n        ")])]) : t._e(), t._v(" "), t.$slots.default ? n("div", {
                staticClass: "debug-content"
            }, [t._t("default")], 2) : t._e()])
        };
    $n._withStripped = On._withStripped = !0;
    var kn = {
            START_POINT: "START_POINT",
            GROUP: "GROUP",
            USER_INPUT: "USER_INPUT",
            FALLBACK: "FALLBACK",
            DEFAULT_FALLBACK: "DEFAULT_FALLBACK",
            GOTO: "GOTO",
            ADD_TO_SEGMENT: "ADD_TO_SEGMENT",
            REMOVE_FROM_SEGMENT: "REMOVE_FROM_SEGMENT",
            WEBHOOK: "WEBHOOK",
            SET_ATTRIBUTE: "SET_ATTRIBUTE",
            LC_TICKET: "LC_TICKET",
            LC_TRANSFER: "LC_TRANSFER",
            LC_GOAL: "LC_GOAL",
            LC_TAG: "LC_TAG",
            LC_TRANSCRIPT: "LC_TRANSCRIPT",
            CLOSE_CHAT: "CLOSE_CHAT",
            ZAPIER: "ZAPIER",
            FILTER: "FILTER",
            ASK_A_QUESTION: "ASK_A_QUESTION",
            AB_TEST: "AB_TEST",
            AB_VARIANT: "AB_VARIANT",
            SUCCESS: "SUCCESS",
            FAILURE: "FAILURE",
            FLOW: "FLOW",
            BOT_RESPONSE: "BOT_RESPONSE",
            INPUT_WELCOME: "INPUT_WELCOME",
            INPUT_MESSAGE: "INPUT_MESSAGE",
            INPUT_POSTBACK: "INPUT_POSTBACK",
            INPUT_GOTO: "INPUT_GOTO",
            INPUT_BUTTON_GOTO: "INPUT_BUTTON_GOTO",
            INPUT_BUTTON_POSTBACK: "INPUT_BUTTON_POSTBACK",
            CAPTION: "CAPTION",
            INDICATOR: "INDICATOR",
            BOT_RESPONSE_button: "BOT_RESPONSE_button",
            BOT_RESPONSE_text: "BOT_RESPONSE_text",
            BOT_RESPONSE_image: "BOT_RESPONSE_image",
            BOT_RESPONSE_cards: "BOT_RESPONSE_cards",
            BOT_RESPONSE_quickReplies: "BOT_RESPONSE_quickReplies"
        },
        Sn = "WELCOME",
        Tn = "MESSAGE",
        Cn = "POSTBACK",
        En = "GOTO",
        An = "BUTTON_GOTO",
        Nn = "BUTTON_POSTBACK",
        jn = (wn = {}, Be()(wn, kn.START_POINT, {
            defaultName: "Start point",
            icon: "home_2"
        }), Be()(wn, kn.GROUP, {
            defaultName: "Group",
            icon: "block_duplicate"
        }), Be()(wn, kn.USER_INPUT, {
            defaultName: "User input",
            icon: "block_user_input"
        }), Be()(wn, kn.BOT_RESPONSE, {
            defaultName: "Bot response",
            icon: "block_bot_response"
        }), Be()(wn, kn.FALLBACK, {
            defaultName: "Fallback",
            icon: "block_fallback"
        }), Be()(wn, kn.DEFAULT_FALLBACK, {
            defaultName: "Default fallback",
            icon: "block_fallback"
        }), Be()(wn, kn.GOTO, {
            defaultName: "Go to step",
            icon: "block_goto"
        }), Be()(wn, kn.ADD_TO_SEGMENT, {
            defaultName: "Add to segment",
            icon: "block_add_to_segment"
        }), Be()(wn, kn.REMOVE_FROM_SEGMENT, {
            defaultName: "Delete from segment",
            icon: "block_delete_from_segment"
        }), Be()(wn, kn.WEBHOOK, {
            defaultName: "Webhook",
            icon: "webhooks"
        }), Be()(wn, kn.SET_ATTRIBUTE, {
            defaultName: "Set attribute",
            icon: "block_set_attribute"
        }), Be()(wn, kn.LC_TICKET, {
            defaultName: "Create ticket",
            icon: "block_livechat"
        }), Be()(wn, kn.LC_TRANSFER, {
            defaultName: "Transfer chat",
            icon: "block_livechat"
        }), Be()(wn, kn.LC_GOAL, {
            defaultName: "Mark goal",
            icon: "block_livechat"
        }), Be()(wn, kn.LC_TAG, {
            defaultName: "Tag chat",
            icon: "block_livechat"
        }), Be()(wn, kn.CLOSE_CHAT, {
            defaultName: "Close chat",
            icon: "block_livechat"
        }), Be()(wn, kn.LC_TRANSCRIPT, {
            defaultName: "Send transcript",
            icon: "block_livechat"
        }), Be()(wn, kn.ZAPIER, {
            defaultName: "Zapier",
            icon: "block_zapier"
        }), Be()(wn, kn.FILTER, {
            defaultName: "Filter",
            icon: "plus"
        }), Be()(wn, kn.ASK_A_QUESTION, {
            defaultName: "Question",
            icon: "block_question"
        }), Be()(wn, kn.AB_TEST, {
            defaultName: "A/B Test",
            icon: "block_ab_testing"
        }), Be()(wn, kn.AB_VARIANT, {
            defaultName: "A/B Variant",
            icon: "block_ab_testing"
        }), Be()(wn, kn.SUCCESS, {
            defaultName: "Success",
            icon: "block_success"
        }), Be()(wn, kn.FAILURE, {
            defaultName: "Failure",
            icon: "block_failure"
        }), Be()(wn, kn.FLOW, {
            defaultName: "Flow",
            icon: "builder_tree"
        }), Be()(wn, kn.INPUT_WELCOME, {
            defaultName: "Start chat",
            icon: "home_2"
        }), Be()(wn, kn.INPUT_GOTO, {
            defaultName: "Input Go to",
            icon: "block_goto"
        }), wn),
        Pn = ce({
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                header: function() {
                    return t = this.message.type, jn[t];
                    var t
                }
            }
        }, $n, [], !1, null, null, null);
    Pn.options.__file = "src/v2/chat/components/conversation/blocks/helpers/debug-wrapper/debug-wrapper.vue";
    var Ln = Pn.exports,
        In = ce({
            inheritAttrs: !1,
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                debugWrapper: Ln
            }
        }, On, [], !1, null, null, null);
    In.options.__file = "src/v2/chat/components/conversation/blocks/input-welcome/input-welcome.vue";
    var Bn = In.exports,
        Mn = function() {
            var t = this.$createElement;
            return (this._self._c || t)("input-wrapper", this._b({
                on: {
                    phraseTrained: this.onPhraseTrained
                }
            }, "input-wrapper", {
                message: this.message,
                colors: this.colors,
                stories: this.stories,
                limitedBlocksWidth: this.limitedBlocksWidth
            }, !1))
        },
        Rn = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "input-wrapper",
                attrs: {
                    "data-limited-blocks-width": t.limitedBlocksWidth
                }
            }, [n("anchors", {
                staticClass: "input-wrapper-text",
                style: {
                    background: t.colors.userMessageBackground,
                    color: t.colors.userMessageText
                },
                attrs: {
                    "data-first": t.message.FIRST,
                    "data-middle": !t.message.FIRST && !t.message.LAST,
                    "data-last": !t.message.FIRST && t.message.LAST,
                    text: t.message.value
                }
            })], 1)
        };
    Rn._withStripped = Mn._withStripped = !0;
    var Un = ce({
        props: {
            message: {
                type: Object,
                required: !0
            },
            colors: {
                type: Object,
                required: !0
            },
            stories: {
                type: Array,
                required: !0
            },
            limitedBlocksWidth: {
                type: Boolean,
                required: !0
            }
        }
    }, Rn, [], !1, null, null, null);
    Un.options.__file = "src/v2/chat/components/conversation/blocks/helpers/input-wrapper/widget/input-wrapper.vue";
    var Dn = ce(Un.exports, void 0, void 0, !1, null, null, null);
    Dn.options.__file = "src/v2/chat/components/conversation/blocks/helpers/input-wrapper/input-wrapper.vue";
    var qn = Dn.exports,
        zn = ce({
            inheritAttrs: !1,
            components: {
                inputWrapper: qn
            },
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                },
                stories: {
                    type: Array,
                    required: !0
                },
                limitedBlocksWidth: {
                    type: Boolean,
                    required: !0
                }
            },
            methods: {
                onPhraseTrained: function() {
                    this.$emit("phraseTrained")
                }
            }
        }, Mn, [], !1, null, null, null);
    zn.options.__file = "src/v2/chat/components/conversation/blocks/input-message/input-message.vue";
    var Fn = zn.exports,
        Gn = function() {
            var t = this.$createElement;
            return (this._self._c || t)("input-wrapper", this._b({
                on: {
                    phraseTrained: this.onPhraseTrained
                }
            }, "input-wrapper", {
                message: this.message,
                colors: this.colors,
                stories: this.stories,
                limitedBlocksWidth: this.limitedBlocksWidth
            }, !1))
        },
        Hn = ce({
            inheritAttrs: !(Gn._withStripped = !0),
            components: {
                inputWrapper: qn
            },
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                },
                stories: {
                    type: Array,
                    required: !0
                },
                limitedBlocksWidth: {
                    type: Boolean,
                    required: !0
                }
            },
            methods: {
                onPhraseTrained: function() {
                    this.$emit("phraseTrained")
                }
            }
        }, Gn, [], !1, null, null, null);
    Hn.options.__file = "src/v2/chat/components/conversation/blocks/input-postback/input-postback.vue";
    var Wn = Hn.exports,
        Vn = function() {
            var t = this.$createElement;
            return (this._self._c || t)("debug-wrapper", {
                staticClass: "input-goto",
                attrs: {
                    colors: this.colors,
                    message: this.message
                }
            })
        },
        Kn = ce({
            inheritAttrs: !(Vn._withStripped = !0),
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                }
            },
            components: {
                debugWrapper: Ln
            }
        }, Vn, [], !1, null, null, null);
    Kn.options.__file = "src/v2/chat/components/conversation/blocks/input-goto/input-goto.vue";
    var Yn = Kn.exports,
        Xn = function() {
            var t = this.$createElement;
            return (this._self._c || t)("input-wrapper", this._b({
                staticClass: "input-button-goto",
                on: {
                    phraseTrained: this.onPhraseTrained
                }
            }, "input-wrapper", {
                message: this.message,
                colors: this.colors,
                stories: this.stories,
                limitedBlocksWidth: this.limitedBlocksWidth
            }, !1))
        },
        Zn = ce({
            inheritAttrs: !(Xn._withStripped = !0),
            components: {
                inputWrapper: qn
            },
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                },
                stories: {
                    type: Array,
                    required: !0
                },
                limitedBlocksWidth: {
                    type: Boolean,
                    required: !0
                }
            },
            methods: {
                onPhraseTrained: function() {
                    this.$emit("phraseTrained")
                }
            }
        }, Xn, [], !1, null, null, null);
    Zn.options.__file = "src/v2/chat/components/conversation/blocks/input-button-goto/input-button-goto.vue";
    var Jn = Zn.exports,
        Qn = function() {
            var t = this.$createElement;
            return (this._self._c || t)("input-wrapper", this._b({
                staticClass: "input-button-postback",
                on: {
                    phraseTrained: this.onPhraseTrained
                }
            }, "input-wrapper", {
                message: this.message,
                colors: this.colors,
                stories: this.stories,
                limitedBlocksWidth: this.limitedBlocksWidth
            }, !1))
        },
        tr = ce({
            inheritAttrs: !(Qn._withStripped = !0),
            components: {
                inputWrapper: qn
            },
            props: {
                message: {
                    type: Object,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                },
                stories: {
                    type: Array,
                    required: !0
                },
                limitedBlocksWidth: {
                    type: Boolean,
                    required: !0
                }
            },
            methods: {
                onPhraseTrained: function() {
                    this.$emit("phraseTrained")
                }
            }
        }, Qn, [], !1, null, null, null);
    tr.options.__file = "src/v2/chat/components/conversation/blocks/input-button-postback/input-button-postback.vue";
    var er, nr = tr.exports,
        rr = function(t) {
            return "MESSAGE-".concat(t)
        },
        or = ce({
            components: (er = {}, Be()(er, rr(kn.BOT_RESPONSE_button), Ge), Be()(er, rr(kn.BOT_RESPONSE_cards), nn), Be()(er, rr(kn.BOT_RESPONSE_image), an), Be()(er, rr(kn.BOT_RESPONSE_quickReplies), dn), Be()(er, rr(kn.BOT_RESPONSE_text), vn), Be()(er, rr(kn.CAPTION), yn), Be()(er, rr(kn.INDICATOR), xn), Be()(er, rr(kn.INPUT_WELCOME), Bn), Be()(er, rr(kn.INPUT_MESSAGE), Fn), Be()(er, rr(kn.INPUT_POSTBACK), Wn), Be()(er, rr(kn.INPUT_GOTO), Yn), Be()(er, rr(kn.INPUT_BUTTON_GOTO), Jn), Be()(er, rr(kn.INPUT_BUTTON_POSTBACK), nr), er),
            props: {
                formattedMessages: {
                    type: Array,
                    required: !0
                },
                colors: {
                    type: Object,
                    required: !0
                },
                avatar: {
                    type: [Boolean, String],
                    required: !0
                },
                botName: {
                    type: String,
                    default: "Bot"
                },
                userName: {
                    type: String,
                    default: "You"
                },
                debug: {
                    type: Boolean,
                    default: !0
                },
                executedButtons: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                stories: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                limitedBlocksWidth: {
                    type: Boolean,
                    default: !1
                },
                scroll: {
                    type: Number,
                    default: -1
                }
            },
            data: function() {
                return {
                    timeoutRef: null
                }
            },
            computed: {
                lastIndex: function() {
                    return this.formattedMessages.length - 1
                }
            },
            watch: {
                formattedMessages: function() {
                    this.delayedScrollDown()
                }
            },
            methods: {
                onScroll: function(t) {
                    this.$emit("scroll", t.target.scrollTop)
                },
                onButton: function(t) {
                    this.$emit("button", t)
                },
                onPhraseTrained: function() {
                    this.$emit("phraseTrained")
                },
                delayedScrollDown: function() {
                    var n = this;
                    this.resetDelayedScrollDown(), this.timeoutRef = setTimeout(function() {
                        var t, e;
                        tn(n.$el, (t = n.$el, e = t.scrollTop, 500 < t.scrollHeight - t.clientHeight - e ? 0 : 200))
                    }, 100)
                },
                resetDelayedScrollDown: function() {
                    clearTimeout(this.timeoutRef)
                },
                modelName: rr
            },
            mounted: function() {
                -1 === this.scroll ? tn(this.$el, 0) : Je(this.$el, {
                    duration: 0,
                    to: this.scroll
                })
            },
            beforeDestroy: function() {
                this.resetDelayedScrollDown()
            }
        }, Le, [], !1, null, null, null);
    or.options.__file = "src/v2/chat/components/conversation/conversation.vue";
    var ir = or.exports,
        ar = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "typing",
                style: {
                    background: e.$_colors.typingBackground,
                    borderTopColor: e.$_colors.typingBorder
                }
            }, [n("input", {
                ref: "input",
                style: {
                    color: e.$_session.message ? e.$_colors.typingText : e.$_colors.typingPlaceholderText
                },
                attrs: {
                    type: "text",
                    maxlength: "256",
                    placeholder: e.$_translations.input_placeholder
                },
                domProps: {
                    value: e.$_session.message
                },
                on: {
                    keyup: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.sendMessage(t)
                    },
                    input: function(t) {
                        return e.$_setMessage(t.target.value)
                    }
                }
            }), e._v(" "), n("send-icon", {
                attrs: {
                    color: e.active ? e.$_colors.typingActiveIcon : e.$_colors.typingInactiveIcon
                },
                nativeOn: {
                    click: function(t) {
                        return e.sendMessage(t)
                    }
                }
            })], 1)
        },
        sr = function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "send-icon"
            }, [e("svg", {
                staticStyle: {
                    "enable-background": "new 0 0 24 24"
                },
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "xml:space": "preserve"
                }
            }, [e("path", {
                attrs: {
                    fill: this.color,
                    d: "M22,11.7V12h-0.1c-0.1,1-17.7,9.5-18.8,9.1c-1.1-0.4,2.4-6.7,3-7.5C6.8,12.9,17.1,12,17.1,12H17c0,0,0-0.2,0-0.2c0,0,0,0,0,0c0-0.4-10.2-1-10.8-1.7c-0.6-0.7-4-7.1-3-7.5C4.3,2.1,22,10.5,22,11.7z"
                }
            })])])
        };
    sr._withStripped = ar._withStripped = !0;
    var cr = ce({
        props: {
            color: {
                type: String,
                required: !0
            }
        }
    }, sr, [], !1, null, null, null);
    cr.options.__file = "src/v2/chat/views/opened/chat/typing/send-icon/send-icon.vue";
    var ur = ce({
        mixins: [N],
        components: {
            "send-icon": cr.exports
        },
        computed: {
            active: function() {
                return this.$_session.message.trim() && !this.$_busy && this.$_online
            }
        },
        mounted: function() {
            this.$_mobile || this.$refs.input.focus({
                preventScroll: !0
            })
        },
        methods: {
            sendMessage: function() {
                this.active && (nt(this.$_session.message), this.$_setMessage(""))
            }
        }
    }, ar, [], !1, null, null, null);
    ur.options.__file = "src/v2/chat/views/opened/chat/typing/typing.vue";
    var lr = ur.exports,
        fr = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "start-again",
                style: {
                    background: e.$_colors.conversationBackground
                }
            }, [n("div", {
                staticClass: "button",
                style: {
                    background: e.$_colors.actionButtonBackground,
                    color: e.$_colors.actionButtonColor
                },
                on: {
                    click: function(t) {
                        return e.startChatAgain()
                    }
                }
            }, [e._v("\n        " + e._s(e.$_translations.start_again) + "\n    ")])])
        };
    fr._withStripped = !0;
    var dr = ce({
        mixins: [L],
        methods: {
            startChatAgain: function() {
                this.$_startChatAgain(), et()
            }
        }
    }, fr, [], !1, null, null, null);
    dr.options.__file = "src/v2/chat/views/opened/chat/start-again/start-again.vue";
    var pr, hr, vr, mr, gr, yr, _r, br, wr = dr.exports,
        xr = r(19),
        Or = r.n(xr),
        $r = r(20),
        kr = r.n($r),
        Sr = !(!window.Intl || !Intl.DateTimeFormat),
        Tr = function() {
            function t() {
                Or()(this, t)
            }
            return kr()(t, null, [{
                key: "getNowDate",
                value: function() {
                    return new Date
                }
            }, {
                key: "isCurrentYear",
                value: function(t, e) {
                    return t.getFullYear() === e.getFullYear()
                }
            }, {
                key: "compareDays",
                value: function(t, e) {
                    return t.toDateString() === e.toDateString()
                }
            }, {
                key: "getTime",
                value: function(t) {
                    if (Sr) return new Intl.DateTimeFormat(this.language, {
                        hour: "numeric",
                        minute: "numeric"
                    }).format(t);
                    var e, n = t.getHours() % 12 || 12,
                        r = (e = t.getMinutes()) < 10 ? "0" + e : e;
                    return "".concat(n, ":").concat(r, " ").concat(12 <= n ? "PM" : "AM")
                }
            }, {
                key: "getDate",
                value: function(t) {
                    var e = this.isCurrentYear(t, this.getNowDate());
                    if (Sr) return new Intl.DateTimeFormat(this.language, {
                        day: "numeric",
                        month: "short",
                        year: e ? void 0 : "numeric"
                    }).format(t);
                    var n = t.getDate(),
                        r = t.getMonth(),
                        o = e ? "" : " ".concat(t.getFullYear());
                    return "".concat(n, " ").concat(r).concat(o)
                }
            }, {
                key: "parse",
                value: function(t) {
                    t = new Date(t);
                    var e = this.getTime(t);
                    return this.compareDays(t, this.getNowDate()) ? "".concat(e) : "".concat(this.getDate(t), " ").concat(e)
                }
            }, {
                key: "language",
                get: function() {
                    return wt.getters.$_language
                }
            }]), t
        }(),
        Cr = [kn.INPUT_MESSAGE, kn.INPUT_POSTBACK, kn.INPUT_BUTTON_GOTO, kn.INPUT_BUTTON_POSTBACK],
        Er = [kn.BOT_RESPONSE_text, kn.BOT_RESPONSE_quickReplies, kn.INDICATOR],
        Ar = [kn.INPUT_WELCOME, kn.INPUT_MESSAGE, kn.INPUT_POSTBACK, kn.INPUT_GOTO, kn.INPUT_BUTTON_GOTO, kn.INPUT_BUTTON_POSTBACK],
        Nr = [kn.INPUT_MESSAGE, kn.INPUT_POSTBACK, kn.INPUT_BUTTON_GOTO, kn.INPUT_BUTTON_POSTBACK, kn.CAPTION, kn.INDICATOR, kn.BOT_RESPONSE_button, kn.BOT_RESPONSE_text, kn.BOT_RESPONSE_image, kn.BOT_RESPONSE_cards, kn.BOT_RESPONSE_quickReplies],
        jr = function(t, e) {
            var n, r = [],
                o = null === (n = t.responses) || void 0 === n ? void 0 : n.some(function(t) {
                    return t.type === kn.ASK_A_QUESTION && t.element
                }),
                i = Object.freeze(t),
                a = 0 === t.score,
                s = !0,
                c = !1,
                u = void 0;
            try {
                for (var l, f = t.responses[Symbol.iterator](); !(s = (l = f.next()).done); s = !0) {
                    var d = l.value;
                    if (kn.hasOwnProperty(d.type) && (r.push(b()({}, d, {
                            storyId: e,
                            JSON: i,
                            UNRECOGNIZED: a,
                            INCOMPLETE: o
                        })), d.type === kn.BOT_RESPONSE)) {
                        var p = !0,
                            h = !1,
                            v = void 0;
                        try {
                            for (var m, g = d.responses[Symbol.iterator](); !(p = (m = g.next()).done); p = !0) {
                                var y = m.value;
                                r.push(b()({}, y, {
                                    id: d.id,
                                    type: "".concat(d.type, "_").concat(y.type),
                                    storyId: e,
                                    JSON: i,
                                    UNRECOGNIZED: a,
                                    INCOMPLETE: o
                                }))
                            }
                        } catch (t) {
                            h = !0, v = t
                        } finally {
                            try {
                                p || null == g.return || g.return()
                            } finally {
                                if (h) throw v
                            }
                        }
                    }
                }
            } catch (t) {
                c = !0, u = t
            } finally {
                try {
                    s || null == f.return || f.return()
                } finally {
                    if (c) throw u
                }
            }
            return r
        },
        Pr = function(t) {
            var e = t.inputType,
                n = t.inputValue,
                r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? {
                    SENDING_ERROR: !0
                } : {
                    SENDING: !0
                };
            switch (e) {
                case Tn:
                    return b()({
                        type: kn.INPUT_MESSAGE,
                        value: n
                    }, r);
                case Cn:
                    return b()({
                        type: kn.INPUT_POSTBACK,
                        value: n,
                        postback: ""
                    }, r);
                case An:
                    return b()({
                        type: kn.INPUT_BUTTON_GOTO,
                        value: n
                    }, r);
                case Nn:
                    return b()({
                        type: kn.INPUT_BUTTON_POSTBACK,
                        value: n
                    }, r);
                case Sn:
                    return b()({
                        type: kn.INPUT_WELCOME
                    }, r);
                case En:
                    return b()({
                        type: kn.INPUT_GOTO
                    }, r)
            }
        },
        Lr = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            return new Promise(function(t) {
                return setTimeout(t, e)
            })
        },
        Ir = ce({
            mixins: [I],
            components: {
                startAgain: wr,
                top: Pe,
                conversation: ir,
                typing: lr
            },
            data: function() {
                return {
                    debug: !1,
                    tempMessage: null,
                    busy: !1
                }
            },
            computed: {
                typing: function() {
                    var t;
                    return !this.busy && (null === (t = this.formattedMessages.slice(-1)[0]) || void 0 === t ? void 0 : t.INCOMPLETE) || this.$_config.textField
                },
                avatar: function() {
                    var t = this.$_config.company.avatar;
                    return t.enabled && (t.url || Ce.a)
                },
                colors: function() {
                    return this.$_config.colors
                },
                botName: function() {
                    return this.$_config.company.name
                },
                userName: function() {
                    return this.$_translations.you
                },
                executedButtons: function() {
                    return this.$_session.executedButtons
                },
                scroll: function() {
                    return this.$_session.scroll
                },
                messages: function() {
                    return this.$_session.messages
                },
                formattedMessages: function() {
                    var t = K()(this.messages);
                    return this.tempMessage && t.push(this.tempMessage),
                        function(t) {
                            var e = [];
                            !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1] || (t = t.filter(function(t) {
                                var e = t.type;
                                return Nr.includes(e)
                            }));
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n],
                                    o = t[n - 1],
                                    i = t[n + 1],
                                    a = o && !Ar.includes(o.type),
                                    s = !Ar.includes(r.type),
                                    c = void 0,
                                    u = void 0;
                                o && a === s || e.push({
                                    BOT: s,
                                    type: kn.CAPTION
                                }), Cr.includes(r.type) ? (c = !o || !Cr.includes(o.type), u = !i || !Cr.includes(i.type)) : Er.includes(r.type) && (c = !o || !Er.includes(o.type), u = !i || !Er.includes(i.type)), e.push(b()({}, r, {
                                    BOT: s,
                                    FIRST: c,
                                    LAST: u
                                }))
                            }
                            return e
                        }(t, this.debug)
                }
            },
            methods: {
                chat: (br = s()(_.a.mark(function t(e) {
                    var n, r, o;
                    return _.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (this.$_preview || this.$_session.ended || this.busy) return t.abrupt("return");
                                t.next = 2;
                                break;
                            case 2:
                                if (this.$_setConversationStarted(), this.$_session.userAttributes) return t.next = 6, this.$_setUserAttributes(this.$_session.userAttributes);
                                t.next = 8;
                                break;
                            case 6:
                                t.sent instanceof Error || this.$_setUserAttributesMutation(null);
                            case 8:
                                return this.busy = !0, this.tempMessage = Pr(e), e.attributes = this.$_session.sessionAttributes || {}, e.attributes.default_url ? this.$_setLastSentUrl(e.attributes.default_url) : (n = this.$_session.lastSentUrl, r = this.$_session.visitedPages.slice(-1)[0], n !== r && (e.attributes.default_url = r, this.$_setLastSentUrl(r))), t.next = 14, this.$_request({
                                    method: "post",
                                    url: "v2/chat",
                                    body: e
                                });
                            case 14:
                                if ((o = t.sent) instanceof Error) return this.tempMessage = Pr(e, !0) || this.tempMessage, this.busy = !1, t.abrupt("return");
                                t.next = 19;
                                break;
                            case 19:
                                return it.call("onMessage", o), this.$_extendSession(), this.$_session.sessionAttributes && this.$_setSessionAttributesMutation(null), this.$_setTempMessages(jr(o)), t.next = 25, this.updateMessages(!1);
                            case 25:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function(t) {
                    return br.apply(this, arguments)
                }),
                updateMessages: (_r = s()(_.a.mark(function t(e) {
                    var n, r, o, i, a;
                    return _.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (this.$_session.tempMessages.length) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                this.busy = !0, n = e ? F() - this.$_session.lastUpdate : 0, r = K()(this.$_session.tempMessages);
                            case 5:
                                if (!r.length) {
                                    t.next = 24;
                                    break
                                }
                                if (o = r.shift(), i = o.delay, a = void 0 === i ? 0 : i, n = Math.max(0, n - a), a = Math.max(0, a - n)) return t.next = 13, Lr(300);
                                t.next = 16;
                                break;
                            case 13:
                                return this.tempMessage = {
                                    type: kn.INDICATOR
                                }, t.next = 16, Lr(a - 300);
                            case 16:
                                if (this.$_addMessage(o), this.$_setTempMessages(K()(r)), this.tempMessage = null, o.type === kn.CLOSE_CHAT || this.$_session.ended) return this.$_endChat(), t.abrupt("break", 24);
                                t.next = 22;
                                break;
                            case 22:
                                t.next = 5;
                                break;
                            case 24:
                                this.tempMessage = null, this.busy = !1;
                            case 26:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function(t) {
                    return _r.apply(this, arguments)
                }),
                sendWelcome: (yr = s()(_.a.mark(function t() {
                    return _.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, this.chat({
                                    inputType: Sn,
                                    inputValue: ""
                                });
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function() {
                    return yr.apply(this, arguments)
                }),
                sendMessage: (gr = s()(_.a.mark(function t(e) {
                    return _.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, this.chat({
                                    inputType: Tn,
                                    inputValue: e
                                });
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function(t) {
                    return gr.apply(this, arguments)
                }),
                sendPostback: (mr = s()(_.a.mark(function t(e) {
                    var n, r;
                    return _.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = e.text, r = e.postback, t.next = 3, this.chat({
                                    inputType: Cn,
                                    inputValue: n,
                                    postback: r
                                });
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function(t) {
                    return mr.apply(this, arguments)
                }),
                sendButtonGoto: (vr = s()(_.a.mark(function t(e, n, r) {
                    return _.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, this.chat({
                                    inputType: An,
                                    buttonId: e,
                                    inputValue: n,
                                    buttonValue: r
                                });
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function(t, e, n) {
                    return vr.apply(this, arguments)
                }),
                sendButtonPostback: (hr = s()(_.a.mark(function t(e, n, r) {
                    return _.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, this.chat({
                                    inputType: Nn,
                                    buttonId: e,
                                    inputValue: n,
                                    buttonValue: r
                                });
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function(t, e, n) {
                    return hr.apply(this, arguments)
                }),
                onButton: (pr = s()(_.a.mark(function t(e) {
                    return _.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!this.$_preview && !this.$_session.ended) {
                                    t.next = 9;
                                    break
                                }
                                t.t0 = e.type, t.next = "url" === t.t0 ? 4 : "phone" === t.t0 ? 6 : 8;
                                break;
                            case 4:
                                return this.executeButton(e.id), t.abrupt("return", this.$_openUrl(e.value));
                            case 6:
                                return this.executeButton(e.id), t.abrupt("return", this.$_callNumber(e.value));
                            case 8:
                                return t.abrupt("return");
                            case 9:
                                this.executeButton(e.id), t.t1 = e.type, t.next = "url" === t.t1 ? 13 : "phone" === t.t1 ? 15 : "webview" === t.t1 ? 16 : "goto" === t.t1 ? 17 : "postback" === t.t1 ? 20 : 23;
                                break;
                            case 13:
                                return this.$_extendSession(), t.abrupt("return", this.$_openUrl(e.value));
                            case 15:
                                return t.abrupt("return", this.$_callNumber(e.value));
                            case 16:
                                return t.abrupt("return", this.$_openMoment({
                                    url: e.value,
                                    height: e.height
                                }));
                            case 17:
                                return t.next = 19, this.sendButtonGoto(e.id, e.title, e.value);
                            case 19:
                                return t.abrupt("return", t.sent);
                            case 20:
                                return t.next = 22, this.sendButtonPostback(e.id, e.title, e.value);
                            case 22:
                                return t.abrupt("return", t.sent);
                            case 23:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function(t) {
                    return pr.apply(this, arguments)
                }),
                executeButton: function(t) {
                    this.$_setExecutedButtons([].concat(K()(this.$_session.executedButtons), [t]))
                },
                onScroll: function(t) {
                    this.$_setScroll(t)
                },
                parseDate: function() {
                    return Tr.parse.apply(Tr, arguments)
                }
            },
            mounted: function() {
                this.$root.$on(J, this.sendWelcome), this.$root.$on(Q, this.sendMessage), this.$root.$on(tt, this.sendPostback), this.updateMessages(!0)
            },
            beforeDestroy: function() {
                this.$root.$off(J, this.sendWelcome), this.$root.$off(Q, this.sendMessage), this.$root.$off(tt, this.sendPostback)
            }
        }, Se, [], !1, null, null, null);
    Ir.options.__file = "src/v2/chat/views/opened/chat/chat.vue";
    var Br = Ir.exports,
        Mr = function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("transition", {
                attrs: {
                    name: "moment",
                    appear: ""
                },
                on: {
                    "after-enter": function(t) {
                        e.isAnimating = !1
                    },
                    "after-leave": e.destroy
                }
            }, [n("div", {
                staticClass: "moment-wrapper"
            }, [n("div", {
                staticClass: "moment-background",
                on: {
                    click: e.close
                }
            }), e._v(" "), n("div", {
                staticClass: "moment",
                attrs: {
                    "data-height": e.$_moment.height
                }
            }, [e.isMomentLoading || e.isAnimating ? n("moment-loader") : e._e(), e._v(" "), n("div", {
                staticClass: "moment-header"
            }, [n("div", {
                staticClass: "moment-header-favicon"
            }, [e.data.icon ? n("lazy-img", {
                attrs: {
                    cover: !0,
                    src: e.data.icon
                }
            }) : e._e()], 1), e._v(" "), n("div", {
                staticClass: "moment-header-title",
                domProps: {
                    textContent: e._s(e.data.title)
                }
            }), e._v(" "), n("tpl-close", {
                attrs: {
                    color: "#000000"
                },
                nativeOn: {
                    click: function(t) {
                        return e.close(t)
                    }
                }
            })], 1), e._v(" "), n("div", {
                ref: "frameWrapper",
                staticClass: "moment-frame-wrapper",
                attrs: {
                    "data-ios": "" + e.iOSDevice
                }
            })], 1)])])
        };
    Mr._withStripped = !0;
    var Rr = r(1);

    function Ur() {
        return (Ur = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }).apply(this, arguments)
    }
    var Dr = r(16),
        qr = r(10);

    function zr(t, e) {
        if (null == t) return {};
        var n, r, o = {},
            i = Object.keys(t);
        for (r = 0; r < i.length; r++) n = i[r], 0 <= e.indexOf(n) || (o[n] = t[n]);
        return o
    }
    var Fr = r(11),
        Gr = function(r) {
            return function(e) {
                return function(t, n) {
                    0 === t && e(0, function(t, e) {
                        n(t, 1 === t ? r(e) : e)
                    })
                }
            }
        };
    var Hr = function(a) {
        return void 0 === a && (a = {}),
            function(t) {
                "function" == typeof a && (a = {
                    next: a
                });
                var n, e = a,
                    r = e.next,
                    o = e.error,
                    i = e.complete;
                t(0, function(t, e) {
                    0 === t && (n = e), 1 === t && r && r(e), 1 !== t && 0 !== t || n(1), 2 === t && !e && i && i(), 2 === t && e && o && o(e)
                });
                return function() {
                    n && n(2)
                }
            }
    };

    function Wr(n) {
        return new Promise(function(t, e) {
            var s;
            Hr({
                next: t,
                error: e,
                complete: function() {
                    var t = new Error("No elements in sequence.");
                    t.code = "NO_ELEMENTS", e(t)
                }
            })((s = n, function(t, n) {
                if (0 === t) {
                    var r, o, i = !1,
                        a = !1;
                    s(0, function(t, e) {
                        return 0 === t ? (r = e, void n(0, function(t, e) {
                            2 === t && (a = !0), r(t, e)
                        })) : 1 === t ? (i = !0, o = e, void r(1)) : void(2 === t && !e && i && (n(1, o), a) || n(t, e))
                    })
                }
            }))
        })
    }
    var Vr = function(o) {
            return function(e) {
                return function(t, n) {
                    var r;
                    0 === t && e(0, function(t, e) {
                        0 === t ? n(t, r = e) : 1 === t ? o(e) ? n(t, e) : r(1) : n(t, e)
                    })
                }
            }
        },
        Kr = function(r) {
            return function(t) {
                var n;
                t(0, function(t, e) {
                    0 === t && (n = e), 1 === t && r(e), 1 !== t && 0 !== t || n(1)
                })
            }
        },
        Yr = function(r) {
            return function(t, e) {
                if (0 === t) {
                    var n = !1;
                    e(0, function(t) {
                        2 === t && (n = !0)
                    }), e(1, r()), n || e(2)
                }
            }
        };

    function Xr(n) {
        return void 0 === n && (n = -1),
            function(e) {
                return function(t, r) {
                    if (0 === t) {
                        var o, i = !1,
                            a = n,
                            s = function(t, e) {
                                o(t, e)
                            };
                        ! function n() {
                            e(0, function(t, e) {
                                return 0 === t ? (o = e, i ? void s(1) : (i = !0, void r(0, s))) : 2 === t && e && 0 !== a ? (a--, void n()) : void r(t, e)
                            })
                        }()
                    }
                }
            }
    }
    var Zr = function(e) {
            var c, u = [];
            return function(t, a) {
                if (0 === t) {
                    u.push(a);
                    var s = function(t, e) {
                        if (2 === t) {
                            var n = u.indexOf(a); - 1 < n && u.splice(n, 1), u.length || c(2)
                        } else c(t, e)
                    };
                    1 !== u.length ? a(0, s) : e(0, function(t, e) {
                        if (0 === t) c = e, a(0, s);
                        else {
                            var n = u.slice(0),
                                r = Array.isArray(n),
                                o = 0;
                            for (n = r ? n : n[Symbol.iterator]();;) {
                                var i;
                                if (r) {
                                    if (o >= n.length) break;
                                    i = n[o++]
                                } else {
                                    if ((o = n.next()).done) break;
                                    i = o.value
                                }
                                i(t, e)
                            }
                        }
                        2 === t && (u = [])
                    })
                }
            }
        },
        Jr = function(a) {
            return function(e) {
                return function(t, n) {
                    if (0 === t) {
                        var r, o = 0;
                        e(0, function(t, e) {
                            0 === t ? (r = e, n(0, i)) : 1 === t ? o < a && (o++, n(t, e), o === a && (n(2), r(2))) : n(t, e)
                        })
                    }

                    function i(t, e) {
                        o < a && r(t, e)
                    }
                }
            }
        },
        Qr = {},
        to = function(s) {
            return function(e) {
                return function(t, n) {
                    if (0 === t) {
                        var r, o, i = !1,
                            a = Qr;
                        e(0, function(t, e) {
                            if (0 === t) return r = e, s(0, function(t, e) {
                                if (0 !== t) return 1 === t ? (a = void 0, o(2), r(2), void(i && n(2))) : void(2 === t && (o = null, e && (a = e, r(2), i && n(t, e))));
                                (o = e)(1)
                            }), i = !0, n(0, function(t, e) {
                                a === Qr && (2 === t && o && o(2), r(t, e))
                            }), void(a !== Qr && n(2, a));
                            2 === t && o(2), n(t, e)
                        })
                    }
                }
            }
        };

    function eo(s) {
        return function(e) {
            return function(t, n) {
                if (0 === t) {
                    var r, o, i = s instanceof Date;
                    e(0, function(t, e) {
                        if (0 === t) return r = e, a(i ? s - Date.now() : s), void n(0, function(t, e) {
                            2 === t && clearTimeout(o), r(t, e)
                        });
                        2 === t ? clearTimeout(o) : 1 !== t || i || (clearTimeout(o), a(s)), n(t, e)
                    })
                }

                function a(t) {
                    o = setTimeout(function() {
                        r(2);
                        var t = new Error("Timeout.");
                        t.code = "TIMEOUT", n(2, t)
                    }, t)
                }
            }
        }
    }
    var no = "@@livechat/postmessenger",
        ro = "@@livechat/4way",
        oo = "handshake",
        io = "handshake_echo",
        ao = "response",
        so = function(e) {
            return function(t, r) {
                if (0 === t) {
                    var o, i, a = !1;
                    e(0, function(t, e) {
                        if (0 === t) o = e, r(0, s);
                        else if (1 === t) {
                            var n = e;
                            i && i(2), n(0, function(t, e) {
                                0 === t ? (i = e)(1) : 1 === t ? r(1, e) : 2 === t && e ? (o(2), r(2, e)) : 2 === t && (a ? r(2) : (i = void 0, o(1)))
                            })
                        } else 2 === t && e ? (i && i(2), r(2, e)) : 2 === t && (i ? a = !0 : r(2))
                    })
                }

                function s(t, e) {
                    1 === t && (i || o)(1, e), 2 === t && (i && i(2), o(2))
                }
            }
        };

    function co(r) {
        return function(t, e) {
            if (0 === t) {
                var n = !1;
                e(0, function(t) {
                    2 === t && (n = !0)
                }), n || e(2, r || new Error)
            }
        }
    }
    var uo = function(o, i, a) {
        return function(t, e) {
            if (0 === t) {
                var n = !1,
                    r = function(t) {
                        e(1, t)
                    };
                e(0, function(t) {
                    2 === t && (n = !0, o.removeEventListener(i, r, a))
                }), n || o.addEventListener(i, r, a)
            }
        }
    };
    var lo = function(t) {
            return !!t.data && t.data[no]
        },
        fo = Object(Rr.h)(function() {
            return Zr(Gr(function(t) {
                return t.data.origin = t.origin, t.data
            })(Vr(lo)(uo(window, "message"))))
        });

    function po(e) {
        return function(t) {
            return so(Gr(e)(t))
        }
    }
    var ho = 0,
        vo = function(t, e, n, r) {
            return void 0 === r && (r = ho++), so((o = function() {
                return n.request = r, e(n), Jr(1)(po(function(t) {
                    if (!t.data.error) return Yr(function() {
                        return t.data.result
                    });
                    var e = t.data.result,
                        n = e.real,
                        r = e.error;
                    if (!n) return co(r);
                    var o = new Error(r.message);
                    return Object(Rr.e)("code", r) && (o.code = r.code), co(o)
                })(Vr(function(t) {
                    return t.type === ao && t.request === r
                })(t)))
            }, function(t, e) {
                if (0 === t) {
                    var n = !1;
                    e(0, function(t) {
                        2 === t && (n = !0)
                    }), e(1, o()), n || e(2)
                }
            }));
            var o
        },
        mo = function(t, o, i, a, e) {
            return void 0 === e && (e = null), Ur({}, t, {
                call: function(t) {
                    for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return Wr(vo(o, a, i("call", {
                        method: t,
                        args: n
                    })))
                },
                emit: function(t, e) {
                    a(i("emit", {
                        event: t,
                        arg: e
                    }))
                },
                data: e
            })
        };
    var go = function() {
        var s = [];
        return function(t, e) {
            if (0 === t) {
                var n = e;
                s.push(n), n(0, function(t) {
                    if (2 === t) {
                        var e = s.indexOf(n); - 1 < e && s.splice(e, 1)
                    }
                })
            } else
                for (var r, o = s.slice(0), i = 0, a = o.length; i < a; i++) r = o[i], -1 < s.indexOf(r) && r(t, e)
        }
    };

    function yo() {
        var e = go();
        return [e, function() {
            var t = new Error("Destroyed.");
            t.code = "DESTROYED", e(2, t)
        }]
    }
    var _o = function(t, e, n, r) {
            var o;
            return (o = {
                "@@livechat/postmessenger": !0
            }).owner = t, o.instance = e, o.type = n, o.data = r, o
        },
        bo = function(o, i, a, s) {
            return function(r) {
                switch (r.type) {
                    case "call":
                        return void Object(Dr.a)(function() {
                            var t = r.data,
                                e = t.method,
                                n = t.args;
                            return s[e].apply(o, n)
                        }).then(function(t) {
                            r.type = ao, r.data = {
                                error: !1,
                                result: t
                            }, a(r)
                        }, function(t) {
                            var e;
                            r.type = ao, t instanceof Error ? (e = {
                                real: !0,
                                error: {
                                    message: t.message
                                }
                            }, Object(Rr.e)("code", t) && (e.error.code = t.code)) : e = {
                                real: !1,
                                error: t
                            }, r.data = {
                                error: !0,
                                result: e
                            }, a(r)
                        });
                    case "emit":
                        var t = r.data,
                            e = t.event,
                            n = t.arg;
                        return void i(e, n);
                    default:
                        return
                }
            }
        },
        wo = function(t) {
            return Object(Rr.i)(function(t) {
                return "function" == typeof t
            }, t)
        },
        xo = Object(Rr.d)(),
        Oo = 0,
        $o = function(t) {
            var e = document.createElement("a");
            return e.href = t, e.origin ? "null" === e.origin ? "*" : e.origin : (4 < e.protocol.length ? e.protocol : window.location.protocol) + "//" + (e.host.length ? "80" === e.port || "443" === e.port ? e.hostname : e.host : window.location.host)
        };

    function ko(t, e) {
        var n = t.frame,
            r = t.targetOrigin,
            o = void 0 === r ? $o(n.src) : r,
            i = t.handshakeRetry,
            a = void 0 === i ? {} : i;
        void 0 === e && (e = {});
        var s = wo(e),
            c = s[0],
            u = s[1],
            l = yo(),
            f = l[0],
            d = l[1],
            p = Oo++,
            h = n.contentWindow,
            v = Object(qr.a)(),
            m = function(t, e) {
                return _o(xo, p, t, e)
            },
            g = function(t) {
                h.postMessage(t, o)
            },
            y = Zr(to(f)(Vr(function(t) {
                return t.owner === xo && t.instance === p
            })(fo()))),
            _ = mo(v, y, m, g),
            b = Zr(to(f)(po(function(t) {
                return ro in t ? Gr(function() {
                    return t.data
                })(vo(y, g, m(io))) : Yr(function() {
                    return t
                })
            })(Jr(1)(Xr(a.count || 5)(eo(a.interval || 500)(vo(y, g, m(oo, u), null))))))),
            w = bo(_, v.emit, g, c);
        return Kr(w)(po(function() {
            return y
        })(b)), {
            api: _,
            destroy: d,
            handshake$: b
        }
    }
    var So = function(t, e) {
        var n = document.createElement("iframe");
        return t.appendChild(n), n.src = e, n
    };
    var To = function(o) {
            return function(t, e) {
                if (0 === t) {
                    if ("function" != typeof o) return e(0, function() {}), void e(2);
                    var n, r = !1;
                    e(0, function(t) {
                        r || (r = 2 === t) && "function" == typeof n && n()
                    }), r || (n = o(function(t) {
                        r || e(1, t)
                    }, function(t) {
                        r || void 0 === t || (r = !0, e(2, t))
                    }, function() {
                        r || (r = !0, e(2))
                    }))
                }
            }
        },
        Co = function(t) {
            if (t.frame) return t.frame;
            var e = t.container,
                n = t.url;
            return So(e, n)
        };

    function Eo(t, c) {
        var u, e = t.onConnected,
            l = zr(t, ["onConnected"]),
            n = !l.frame,
            f = Co(l),
            r = yo(),
            o = r[0],
            i = r[1],
            a = function() {
                n && Object(Fr.a)(f), u ? u.destroy() : i()
            };
        return Kr(function(t) {
            t.destroy = a, t.frame = f, e(t)
        })(to(o)(Xr()(po(function() {
            return To(function(t, e) {
                var n, r, o, i, a, s = (n = Ur({}, l, {
                    frame: f
                }), r = ko(n, c), o = r.api, i = r.destroy, a = r.handshake$, {
                    destroy: i,
                    promise: Wr(Gr(function(t) {
                        return o.data = t, o.destroy = i, o
                    })(a))
                });
                return s.promise.then(t, e), (u = s).destroy
            })
        })(uo(f, "load"))))), {
            destroy: a,
            frame: f
        }
    }
    var Ao = function(t) {
            var e = t.split("&").map(function(t) {
                return t.split("=").map(function(t) {
                    return decodeURIComponent(t.replace("+", "%20"))
                })
            });
            return Object(Rr.c)(e)
        },
        No = /(?:[^:]+:\/\/)?([^/\s]+)/;
    var jo = /[^:]+:\/\/[^(/|?)\s]+/,
        Po = function(t) {
            var e = t.match(jo);
            return e && e[0]
        },
        Lo = /.*?\?([^#]+)/,
        Io = function(t) {
            var e = t.match(Lo);
            return e ? "?" + e[1] : ""
        },
        Bo = function(t) {
            return t.replace(/^\?/, "")
        },
        Mo = function(t) {
            var e = Bo(Io(t));
            return Ao(e || t)
        },
        Ro = function(t) {
            return t.replace(/\w/g, "$&[\\r\\n\\t]*")
        };
    new RegExp("^[\0-]*(" + Ro("javascript") + "|" + Ro("data") + "):", "i");

    function Uo() {
        return (Uo = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }).apply(this, arguments)
    }
    var Do = ["allow-forms", "allow-pointer-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "function" == typeof document.hasStorageAccess && "allow-storage-access-by-user-activation"].filter(Boolean).join(" "),
        qo = ["all", "agents"],
        zo = function(t) {
            return "number" != typeof t || Number.isNaN(t) ? t : "" + t
        },
        Fo = function(t, e, n) {
            if (!e.length || e.length > n) throw new Error(t + " can not be empty and can only be " + n + " characters long.")
        },
        Go = function(t) {
            if ("string" != typeof(t = zo(t))) throw new Error("`text` must be a string or a number.");
            t = t.trim(), Fo("`text`", t, 1024)
        },
        Ho = function(t, e) {
            return new Error('Attribute with key "' + t + '" is invalid. ' + e)
        },
        Wo = Rr.g,
        Vo = Object.freeze({
            sendMessage: function(t) {
                var e = t.text,
                    n = t.postback;
                if (Go(e), void 0 !== n) {
                    if ("string" != typeof n) throw new Error("`postback` must be a string.");
                    Fo("`postback`", n, 1024)
                }
            },
            sendSystemMessage: function(t) {
                var e = t.text,
                    n = t.recipients;
                if (Go(e), void 0 !== n && -1 === qo.indexOf(n)) throw new Error("`recipients` can only be one of: " + qo + ".")
            },
            setAttributes: function(n) {
                if (!n || "object" != typeof n) throw new Error("`attributes` must be a plain object (with shape such as `{ key: 'value' }`).");
                var t = Object.keys(n);
                if (99 < t.length) throw new Error("The maximum number of attributes is 99.");
                t.forEach(function(t) {
                    var e = zo(n[t]);
                    if (t = zo(t), !/^[\w-]{1,128}$/.test(t)) throw Ho(t, "Key must be between 1-128 characters long and can only contain alpha-numeric, underscore and dash characters.");
                    if ("string" != typeof e) throw Ho(t, "Value must be a string or a number.");
                    Fo("Value", e, 1024)
                })
            },
            setExternalLink: function(t) {
                if ("string" == typeof t) {
                    if (!/^https:\/\//.test(t)) throw new Error("`externalLink` has to be a HTTPS URL.")
                } else if (null !== t) throw new Error("`externalLink` has to be a string or null.")
            },
            setIsFragile: function(t) {
                if ("boolean" != typeof t) throw new Error("`setIsFragile` argument value can not be empty and must be a boolean.")
            },
            close: Wo
        }),
        Ko = function(t) {
            return n = "moment-title", Mo(t)[n] || (e = t.match(No)) && e[1];
            var e, n
        };
    var Yo = function(t, e) {
            var n = function(e) {
                    var t = Po(e);
                    if (!/chatbot\.com$/.test(t)) return e;
                    var n = Ao(Bo(Io(e)));
                    if (!n.p) return e;
                    try {
                        var r = JSON.parse(atob(n.p));
                        return r.url ? decodeURIComponent(r.url) : e
                    } catch (t) {
                        return e
                    }
                }(t.url),
                r = Object(Rr.i)(function(t) {
                    return "function" == typeof t
                }, e),
                o = r[0],
                i = r[1],
                a = Object(Rr.f)(function(t, e) {
                    return function() {
                        Vo[e].apply(Vo, arguments), t.apply(void 0, arguments)
                    }
                }, o),
                s = Eo(Uo({}, t, {
                    targetOrigin: "*"
                }), Uo({}, i, a, {
                    supportedMethods: Object.keys(a)
                })),
                c = s.destroy,
                u = s.frame;
            return u.sandbox = Do, {
                destroy: c,
                frame: u,
                title: Ko(n)
            }
        },
        Xo = function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "moment-loader"
            }, [e("div", {
                staticClass: "loader"
            }, this._l(3, function(t) {
                return e("div")
            }), 0)])
        };
    Xo._withStripped = !0;
    var Zo = ce({}, Xo, [], !1, null, null, null);
    Zo.options.__file = "src/v2/chat/views/opened/moment/moment-loader/moment-loader.vue";
    var Jo, Qo = ce({
        components: {
            "moment-loader": Zo.exports
        },
        mixins: [j],
        data: function() {
            return {
                iOSDevice: !!navigator.platform.match(/iPhone|iPad/),
                frameIntervalRef: null,
                frame: null,
                isMomentLoading: !0,
                isAnimating: !0,
                destroyMoment: null,
                data: {}
            }
        },
        methods: {
            initialization: (Jo = s()(_.a.mark(function t() {
                var e, n, r, o, i, a = this;
                return _.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            e = {
                                container: this.$refs.frameWrapper,
                                url: this.$_moment.url,
                                onConnected: function(t) {
                                    var e = t.data,
                                        n = t.destroy;
                                    e.title || (e.title = a.data.title), a.destroyMoment = n, a.data = e
                                }
                            }, n = Yo(e, {
                                sendMessage: function(t) {
                                    var e = t.text,
                                        n = t.postback;
                                    rt(e, n)
                                },
                                setAttributes: function(t) {
                                    return a.$_setSessionAttributes(t)
                                },
                                close: function() {
                                    return a.close()
                                }
                            }), r = n.destroy, o = n.title, i = n.frame, this.frame = i, this.destroyMoment = r, this.data = {
                                title: o
                            }, this.frame.addEventListener("load", function() {
                                a.isMomentLoading = !1, a.$_onMomentLoad(), a.setFrameInterval()
                            });
                        case 7:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            })), function() {
                return Jo.apply(this, arguments)
            }),
            close: function() {
                this.$_closeMoment()
            },
            destroy: function() {
                "function" === this.destroyMoment && this.destroyMoment()
            },
            setFrameInterval: function() {
                var t = this;
                if (this.iOSDevice) {
                    var e = function() {
                        t.frame.style.height = t.frame.offsetHeight + "px"
                    };
                    e(), this.clearFrameInterval(), this.frameIntervalRef = setInterval(e, 500)
                }
            },
            clearFrameInterval: function() {
                this.iOSDevice && clearInterval(this.frameIntervalRef)
            }
        },
        mounted: function() {
            this.initialization()
        },
        beforeDestroy: function() {
            this.clearFrameInterval()
        }
    }, Mr, [], !1, null, null, null);
    Qo.options.__file = "src/v2/chat/views/opened/moment/moment.vue";
    var ti, ei = ce({
        mixins: [C],
        components: {
            welcome: ke,
            chat: Br,
            moment: Qo.exports
        },
        computed: {
            welcome: function() {
                return this.$_config.welcomeScreen && !this.$_session.conversationStarted
            }
        },
        updated: function() {
            this.$updateFrameStyle()
        },
        mounted: (ti = s()(_.a.mark(function t() {
            return _.a.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        it.emit(lt.a), it.call("onChatOpen"), this.$updateFrameStyle(), this.$_config.welcomeScreen || this.$_session.conversationStarted || et();
                    case 4:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        })), function() {
            return ti.apply(this, arguments)
        })
    }, be, [], !1, null, null, null);
    ei.options.__file = "src/v2/chat/views/opened/opened.vue";
    var ni, ri = ce({
        mixins: [w],
        components: {
            closed: _e,
            opened: ei.exports
        },
        computed: {
            initialized: function() {
                return this.$_initialized && this.$_config
            }
        },
        data: function() {
            return {
                transition: p ? "" : "slide"
            }
        },
        created: (ni = s()(_.a.mark(function t() {
            return _.a.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, this.$_initialize();
                    case 2:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        })), function() {
            return ni.apply(this, arguments)
        })
    }, n, [], !1, null, null, null);
    ri.options.__file = "src/v2/chat/app.vue";
    var oi = ri.exports;
    r(46);

    function ii(t) {
        this.state = 2, this.value = void 0, this.deferred = [];
        var e = this;
        try {
            t(function(t) {
                e.resolve(t)
            }, function(t) {
                e.reject(t)
            })
        } catch (t) {
            e.reject(t)
        }
    }
    ii.reject = function(n) {
        return new ii(function(t, e) {
            e(n)
        })
    }, ii.resolve = function(n) {
        return new ii(function(t, e) {
            t(n)
        })
    }, ii.all = function(a) {
        return new ii(function(n, t) {
            var r = 0,
                o = [];

            function e(e) {
                return function(t) {
                    o[e] = t, (r += 1) === a.length && n(o)
                }
            }
            0 === a.length && n(o);
            for (var i = 0; i < a.length; i += 1) ii.resolve(a[i]).then(e(i), t)
        })
    }, ii.race = function(r) {
        return new ii(function(t, e) {
            for (var n = 0; n < r.length; n += 1) ii.resolve(r[n]).then(t, e)
        })
    };
    var ai = ii.prototype;

    function si(t, e) {
        t instanceof Promise ? this.promise = t : this.promise = new Promise(t.bind(e)), this.context = e
    }
    ai.resolve = function(t) {
        var e = this;
        if (2 === e.state) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            var n = !1;
            try {
                var r = t && t.then;
                if (null !== t && "object" == typeof t && "function" == typeof r) return void r.call(t, function(t) {
                    n || e.resolve(t), n = !0
                }, function(t) {
                    n || e.reject(t), n = !0
                })
            } catch (t) {
                return void(n || e.reject(t))
            }
            e.state = 0, e.value = t, e.notify()
        }
    }, ai.reject = function(t) {
        if (2 === this.state) {
            if (t === this) throw new TypeError("Promise settled with itself.");
            this.state = 1, this.value = t, this.notify()
        }
    }, ai.notify = function() {
        var t, i = this;
        ui(function() {
            if (2 !== i.state)
                for (; i.deferred.length;) {
                    var t = i.deferred.shift(),
                        e = t[0],
                        n = t[1],
                        r = t[2],
                        o = t[3];
                    try {
                        0 === i.state ? r("function" == typeof e ? e.call(void 0, i.value) : i.value) : 1 === i.state && ("function" == typeof n ? r(n.call(void 0, i.value)) : o(i.value))
                    } catch (t) {
                        o(t)
                    }
                }
        }, t)
    }, ai.then = function(n, r) {
        var o = this;
        return new ii(function(t, e) {
            o.deferred.push([n, r, t, e]), o.notify()
        })
    }, ai.catch = function(t) {
        return this.then(void 0, t)
    }, "undefined" == typeof Promise && (window.Promise = ii), si.all = function(t, e) {
        return new si(Promise.all(t), e)
    }, si.resolve = function(t, e) {
        return new si(Promise.resolve(t), e)
    }, si.reject = function(t, e) {
        return new si(Promise.reject(t), e)
    }, si.race = function(t, e) {
        return new si(Promise.race(t), e)
    };
    var ci = si.prototype;
    ci.bind = function(t) {
        return this.context = t, this
    }, ci.then = function(t, e) {
        return t && t.bind && this.context && (t = t.bind(this.context)), e && e.bind && this.context && (e = e.bind(this.context)), new si(this.promise.then(t, e), this.context)
    }, ci.catch = function(t) {
        return t && t.bind && this.context && (t = t.bind(this.context)), new si(this.promise.catch(t), this.context)
    }, ci.finally = function(e) {
        return this.then(function(t) {
            return e.call(this), t
        }, function(t) {
            return e.call(this), Promise.reject(t)
        })
    };
    var ui, li = {}.hasOwnProperty,
        fi = [].slice,
        di = !1,
        pi = "undefined" != typeof window;

    function hi(t) {
        return t ? t.replace(/^\s*|\s*$/g, "") : ""
    }

    function vi(t) {
        return t ? t.toLowerCase() : ""
    }
    var mi = Array.isArray;

    function gi(t) {
        return "string" == typeof t
    }

    function yi(t) {
        return "function" == typeof t
    }

    function _i(t) {
        return null !== t && "object" == typeof t
    }

    function bi(t) {
        return _i(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function wi(t, e, n) {
        var r = si.resolve(t);
        return arguments.length < 2 ? r : r.then(e, n)
    }

    function xi(t, e, n) {
        return yi(n = n || {}) && (n = n.call(e)), ki(t.bind({
            $vm: e,
            $options: n
        }), t, {
            $options: n
        })
    }

    function Oi(t, e) {
        var n, r;
        if (mi(t))
            for (n = 0; n < t.length; n++) e.call(t[n], t[n], n);
        else if (_i(t))
            for (r in t) li.call(t, r) && e.call(t[r], t[r], r);
        return t
    }
    var $i = Object.assign || function(e) {
        return fi.call(arguments, 1).forEach(function(t) {
            Si(e, t)
        }), e
    };

    function ki(e) {
        return fi.call(arguments, 1).forEach(function(t) {
            Si(e, t, !0)
        }), e
    }

    function Si(t, e, n) {
        for (var r in e) n && (bi(e[r]) || mi(e[r])) ? (bi(e[r]) && !bi(t[r]) && (t[r] = {}), mi(e[r]) && !mi(t[r]) && (t[r] = []), Si(t[r], e[r], n)) : void 0 !== e[r] && (t[r] = e[r])
    }

    function Ti(t, e, n) {
        var r, s, c, o = (r = t, s = ["+", "#", ".", "/", ";", "?", "&"], {
                vars: c = [],
                expand: function(a) {
                    return r.replace(/\{([^{}]+)\}|([^{}]+)/g, function(t, e, n) {
                        if (e) {
                            var r = null,
                                o = [];
                            if (-1 !== s.indexOf(e.charAt(0)) && (r = e.charAt(0), e = e.substr(1)), e.split(/,/g).forEach(function(t) {
                                    var e = /([^:*]*)(?::(\d+)|(\*))?/.exec(t);
                                    o.push.apply(o, function(t, e, n, r) {
                                        var o = t[n],
                                            i = [];
                                        if (Ci(o) && "" !== o)
                                            if ("string" == typeof o || "number" == typeof o || "boolean" == typeof o) o = o.toString(), r && "*" !== r && (o = o.substring(0, parseInt(r, 10))), i.push(Ai(e, o, Ei(e) ? n : null));
                                            else if ("*" === r) Array.isArray(o) ? o.filter(Ci).forEach(function(t) {
                                            i.push(Ai(e, t, Ei(e) ? n : null))
                                        }) : Object.keys(o).forEach(function(t) {
                                            Ci(o[t]) && i.push(Ai(e, o[t], t))
                                        });
                                        else {
                                            var a = [];
                                            Array.isArray(o) ? o.filter(Ci).forEach(function(t) {
                                                a.push(Ai(e, t))
                                            }) : Object.keys(o).forEach(function(t) {
                                                Ci(o[t]) && (a.push(encodeURIComponent(t)), a.push(Ai(e, o[t].toString())))
                                            }), Ei(e) ? i.push(encodeURIComponent(n) + "=" + a.join(",")) : 0 !== a.length && i.push(a.join(","))
                                        } else ";" === e ? i.push(encodeURIComponent(n)) : "" !== o || "&" !== e && "?" !== e ? "" === o && i.push("") : i.push(encodeURIComponent(n) + "=");
                                        return i
                                    }(a, r, e[1], e[2] || e[3])), c.push(e[1])
                                }), r && "+" !== r) {
                                var i = ",";
                                return "?" === r ? i = "&" : "#" !== r && (i = r), (0 !== o.length ? r : "") + o.join(i)
                            }
                            return o.join(",")
                        }
                        return Ni(n)
                    })
                }
            }),
            i = o.expand(e);
        return n && n.push.apply(n, o.vars), i
    }

    function Ci(t) {
        return null != t
    }

    function Ei(t) {
        return ";" === t || "&" === t || "?" === t
    }

    function Ai(t, e, n) {
        return e = "+" === t || "#" === t ? Ni(e) : encodeURIComponent(e), n ? encodeURIComponent(n) + "=" + e : e
    }

    function Ni(t) {
        return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t) {
            return /%[0-9A-Fa-f]/.test(t) || (t = encodeURI(t)), t
        }).join("")
    }

    function ji(t, e) {
        var o, i = this || {},
            n = t;
        return gi(t) && (n = {
            url: t,
            params: e
        }), n = ki({}, ji.options, i.$options, n), ji.transforms.forEach(function(t) {
            var e, n, r;
            gi(t) && (t = ji.transform[t]), yi(t) && (e = t, n = o, r = i.$vm, o = function(t) {
                return e.call(r, t, n)
            })
        }), o(n)
    }

    function Pi(i) {
        return new si(function(r) {
            var o = new XDomainRequest,
                t = function(t) {
                    var e = t.type,
                        n = 0;
                    "load" === e ? n = 200 : "error" === e && (n = 500), r(i.respondWith(o.responseText, {
                        status: n
                    }))
                };
            i.abort = function() {
                return o.abort()
            }, o.open(i.method, i.getUrl()), i.timeout && (o.timeout = i.timeout), o.onload = t, o.onabort = t, o.onerror = t, o.ontimeout = t, o.onprogress = function() {}, o.send(i.getBody())
        })
    }
    ji.options = {
        url: "",
        root: null,
        params: {}
    }, ji.transform = {
        template: function(e) {
            var t = [],
                n = Ti(e.url, e.params, t);
            return t.forEach(function(t) {
                delete e.params[t]
            }), n
        },
        query: function(t, e) {
            var n = Object.keys(ji.options.params),
                r = {},
                o = e(t);
            return Oi(t.params, function(t, e) {
                -1 === n.indexOf(e) && (r[e] = t)
            }), (r = ji.params(r)) && (o += (-1 == o.indexOf("?") ? "?" : "&") + r), o
        },
        root: function(t, e) {
            var n, r, o = e(t);
            return gi(t.root) && !/^(https?:)?\//.test(o) && (n = t.root, r = "/", o = (n && void 0 === r ? n.replace(/\s+$/, "") : n && r ? n.replace(new RegExp("[" + r + "]+$"), "") : n) + "/" + o), o
        }
    }, ji.transforms = ["template", "query", "root"], ji.params = function(t) {
        var e = [],
            n = encodeURIComponent;
        return e.add = function(t, e) {
                yi(e) && (e = e()), null === e && (e = ""), this.push(n(t) + "=" + n(e))
            },
            function n(r, t, o) {
                var i, a = mi(t),
                    s = bi(t);
                Oi(t, function(t, e) {
                    i = _i(t) || mi(t), o && (e = o + "[" + (s || i ? e : "") + "]"), !o && a ? r.add(t.name, t.value) : i ? n(r, t, e) : r.add(e, t)
                })
            }(e, t), e.join("&").replace(/%20/g, "+")
    }, ji.parse = function(t) {
        var e = document.createElement("a");
        return document.documentMode && (e.href = t, t = e.href), e.href = t, {
            href: e.href,
            protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
            port: e.port,
            host: e.host,
            hostname: e.hostname,
            pathname: "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname,
            search: e.search ? e.search.replace(/^\?/, "") : "",
            hash: e.hash ? e.hash.replace(/^#/, "") : ""
        }
    };
    var Li = pi && "withCredentials" in new XMLHttpRequest;

    function Ii(s) {
        return new si(function(r) {
            var t, o, e = s.jsonp || "callback",
                i = s.jsonpCallback || "_jsonp" + Math.random().toString(36).substr(2),
                a = null;
            t = function(t) {
                var e = t.type,
                    n = 0;
                "load" === e && null !== a ? n = 200 : "error" === e && (n = 500), n && window[i] && (delete window[i], document.body.removeChild(o)), r(s.respondWith(a, {
                    status: n
                }))
            }, window[i] = function(t) {
                a = JSON.stringify(t)
            }, s.abort = function() {
                t({
                    type: "abort"
                })
            }, s.params[e] = i, s.timeout && setTimeout(s.abort, s.timeout), (o = document.createElement("script")).src = s.getUrl(), o.type = "text/javascript", o.async = !0, o.onload = t, o.onerror = t, document.body.appendChild(o)
        })
    }

    function Bi(o) {
        return new si(function(n) {
            var r = new XMLHttpRequest,
                t = function(t) {
                    var e = o.respondWith("response" in r ? r.response : r.responseText, {
                        status: 1223 === r.status ? 204 : r.status,
                        statusText: 1223 === r.status ? "No Content" : hi(r.statusText)
                    });
                    Oi(hi(r.getAllResponseHeaders()).split("\n"), function(t) {
                        e.headers.append(t.slice(0, t.indexOf(":")), t.slice(t.indexOf(":") + 1))
                    }), n(e)
                };
            o.abort = function() {
                return r.abort()
            }, r.open(o.method, o.getUrl(), !0), o.timeout && (r.timeout = o.timeout), o.responseType && "responseType" in r && (r.responseType = o.responseType), (o.withCredentials || o.credentials) && (r.withCredentials = !0), o.crossOrigin || o.headers.set("X-Requested-With", "XMLHttpRequest"), yi(o.progress) && "GET" === o.method && r.addEventListener("progress", o.progress), yi(o.downloadProgress) && r.addEventListener("progress", o.downloadProgress), yi(o.progress) && /^(POST|PUT)$/i.test(o.method) && r.upload.addEventListener("progress", o.progress), yi(o.uploadProgress) && r.upload && r.upload.addEventListener("progress", o.uploadProgress), o.headers.forEach(function(t, e) {
                r.setRequestHeader(e, t)
            }), r.onload = t, r.onabort = t, r.onerror = t, r.ontimeout = t, r.send(o.getBody())
        })
    }

    function Mi(a) {
        var s = r(47);
        return new si(function(e) {
            var n, t = a.getUrl(),
                r = a.getBody(),
                o = a.method,
                i = {};
            a.headers.forEach(function(t, e) {
                i[e] = t
            }), s(t, {
                body: r,
                method: o,
                headers: i
            }).then(n = function(t) {
                var n = a.respondWith(t.body, {
                    status: t.statusCode,
                    statusText: hi(t.statusMessage)
                });
                Oi(t.headers, function(t, e) {
                    n.headers.set(e, t)
                }), e(n)
            }, function(t) {
                return n(t.response)
            })
        })
    }

    function Ri(t) {
        return (t.client || (pi ? Bi : Mi))(t)
    }
    var Ui = function(t) {
        var n = this;
        this.map = {}, Oi(t, function(t, e) {
            return n.append(e, t)
        })
    };

    function Di(t, n) {
        return Object.keys(t).reduce(function(t, e) {
            return vi(n) === vi(e) ? e : t
        }, null)
    }
    Ui.prototype.has = function(t) {
        return null !== Di(this.map, t)
    }, Ui.prototype.get = function(t) {
        var e = this.map[Di(this.map, t)];
        return e ? e.join() : null
    }, Ui.prototype.getAll = function(t) {
        return this.map[Di(this.map, t)] || []
    }, Ui.prototype.set = function(t, e) {
        this.map[function(t) {
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return hi(t)
        }(Di(this.map, t) || t)] = [hi(e)]
    }, Ui.prototype.append = function(t, e) {
        var n = this.map[Di(this.map, t)];
        n ? n.push(hi(e)) : this.set(t, e)
    }, Ui.prototype.delete = function(t) {
        delete this.map[Di(this.map, t)]
    }, Ui.prototype.deleteAll = function() {
        this.map = {}
    }, Ui.prototype.forEach = function(n, r) {
        var o = this;
        Oi(this.map, function(t, e) {
            Oi(t, function(t) {
                return n.call(r, t, e, o)
            })
        })
    };
    var qi = function(t, e) {
        var n, r, o, i = e.url,
            a = e.headers,
            s = e.status,
            c = e.statusText;
        this.url = i, this.ok = 200 <= s && s < 300, this.status = s || 0, this.statusText = c || "", this.headers = new Ui(a), gi(this.body = t) ? this.bodyText = t : (o = t, "undefined" != typeof Blob && o instanceof Blob && (this.bodyBlob = t, (0 === (r = t).type.indexOf("text") || -1 !== r.type.indexOf("json")) && (this.bodyText = (n = t, new si(function(t) {
            var e = new FileReader;
            e.readAsText(n), e.onload = function() {
                t(e.result)
            }
        })))))
    };
    qi.prototype.blob = function() {
        return wi(this.bodyBlob)
    }, qi.prototype.text = function() {
        return wi(this.bodyText)
    }, qi.prototype.json = function() {
        return wi(this.text(), function(t) {
            return JSON.parse(t)
        })
    }, Object.defineProperty(qi.prototype, "data", {
        get: function() {
            return this.body
        },
        set: function(t) {
            this.body = t
        }
    });
    var zi = function(t) {
        var e;
        this.body = null, this.params = {}, $i(this, t, {
            method: (e = t.method || "GET", e ? e.toUpperCase() : "")
        }), this.headers instanceof Ui || (this.headers = new Ui(this.headers))
    };
    zi.prototype.getUrl = function() {
        return ji(this)
    }, zi.prototype.getBody = function() {
        return this.body
    }, zi.prototype.respondWith = function(t, e) {
        return new qi(t, $i(e || {}, {
            url: this.getUrl()
        }))
    };
    var Fi = {
        "Content-Type": "application/json;charset=utf-8"
    };

    function Gi(t) {
        var e = this || {},
            n = function(i) {
                var a = [Ri],
                    s = [];

                function t(t) {
                    for (; a.length;) {
                        var e = a.pop();
                        if (yi(e)) {
                            var r = void 0,
                                n = void 0;
                            if (_i(r = e.call(i, t, function(t) {
                                    return n = t
                                }) || n)) return new si(function(t, n) {
                                s.forEach(function(e) {
                                    r = wi(r, function(t) {
                                        return e.call(i, t) || t
                                    }, n)
                                }), wi(r, t, n)
                            }, i);
                            yi(r) && s.unshift(r)
                        } else o = "Invalid interceptor of type " + typeof e + ", must be a function", "undefined" != typeof console && di && console.warn("[VueResource warn]: " + o)
                    }
                    var o
                }
                return _i(i) || (i = null), t.use = function(t) {
                    a.push(t)
                }, t
            }(e.$vm);
        return function(n) {
            fi.call(arguments, 1).forEach(function(t) {
                for (var e in t) void 0 === n[e] && (n[e] = t[e])
            })
        }(t || {}, e.$options, Gi.options), Gi.interceptors.forEach(function(t) {
            gi(t) && (t = Gi.interceptor[t]), yi(t) && n.use(t)
        }), n(new zi(t)).then(function(t) {
            return t.ok ? t : si.reject(t)
        }, function(t) {
            var e;
            return t instanceof Error && (e = t, "undefined" != typeof console && console.error(e)), si.reject(t)
        })
    }

    function Hi(n, r, t, o) {
        var i = this || {},
            a = {};
        return Oi(t = $i({}, Hi.actions, t), function(t, e) {
            t = ki({
                url: n,
                params: $i({}, r)
            }, o, t), a[e] = function() {
                return (i.$http || Gi)(function(t, e) {
                    var n, r = $i({}, t),
                        o = {};
                    switch (e.length) {
                        case 2:
                            o = e[0], n = e[1];
                            break;
                        case 1:
                            /^(POST|PUT|PATCH)$/i.test(r.method) ? n = e[0] : o = e[0];
                            break;
                        case 0:
                            break;
                        default:
                            throw "Expected up to 2 arguments [params, body], got " + e.length + " arguments"
                    }
                    return r.body = n, r.params = $i({}, r.params, o), r
                }(t, arguments))
            }
        }), a
    }

    function Wi(n) {
        var t, e, r;
        Wi.installed || (e = (t = n).config, r = t.nextTick, ui = r, di = e.debug || !e.silent, n.url = ji, n.http = Gi, n.resource = Hi, n.Promise = si, Object.defineProperties(n.prototype, {
            $url: {
                get: function() {
                    return xi(n.url, this, this.$options.url)
                }
            },
            $http: {
                get: function() {
                    return xi(n.http, this, this.$options.http)
                }
            },
            $resource: {
                get: function() {
                    return n.resource.bind(this)
                }
            },
            $promise: {
                get: function() {
                    var e = this;
                    return function(t) {
                        return new n.Promise(t, e)
                    }
                }
            }
        }))
    }
    Gi.options = {}, Gi.headers = {
        put: Fi,
        post: Fi,
        patch: Fi,
        delete: Fi,
        common: {
            Accept: "application/json, text/plain, */*"
        },
        custom: {}
    }, Gi.interceptor = {
        before: function(t) {
            yi(t.before) && t.before.call(this, t)
        },
        method: function(t) {
            t.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(t.method) && (t.headers.set("X-HTTP-Method-Override", t.method), t.method = "POST")
        },
        jsonp: function(t) {
            "JSONP" == t.method && (t.client = Ii)
        },
        json: function(t) {
            var e = t.headers.get("Content-Type") || "";
            return _i(t.body) && 0 === e.indexOf("application/json") && (t.body = JSON.stringify(t.body)),
                function(r) {
                    return r.bodyText ? wi(r.text(), function(t) {
                        var e, n;
                        if (0 === (r.headers.get("Content-Type") || "").indexOf("application/json") || (n = (e = t).match(/^\s*(\[|\{)/)) && {
                                "[": /]\s*$/,
                                "{": /}\s*$/
                            }[n[1]].test(e)) try {
                            r.body = JSON.parse(t)
                        } catch (t) {
                            r.body = null
                        } else r.body = t;
                        return r
                    }) : r
                }
        },
        form: function(t) {
            var e;
            e = t.body, "undefined" != typeof FormData && e instanceof FormData ? t.headers.delete("Content-Type") : _i(t.body) && t.emulateJSON && (t.body = ji.params(t.body), t.headers.set("Content-Type", "application/x-www-form-urlencoded"))
        },
        header: function(n) {
            Oi($i({}, Gi.headers.common, n.crossOrigin ? {} : Gi.headers.custom, Gi.headers[vi(n.method)]), function(t, e) {
                n.headers.has(e) || n.headers.set(e, t)
            })
        },
        cors: function(t) {
            if (pi) {
                var e = ji.parse(location.href),
                    n = ji.parse(t.getUrl());
                n.protocol === e.protocol && n.host === e.host || (t.crossOrigin = !0, t.emulateHTTP = !1, Li || (t.client = Pi))
            }
        }
    }, Gi.interceptors = ["before", "method", "jsonp", "json", "form", "header", "cors"], ["get", "delete", "head", "jsonp"].forEach(function(n) {
        Gi[n] = function(t, e) {
            return this($i(e || {}, {
                url: t,
                method: n
            }))
        }
    }), ["post", "put", "patch"].forEach(function(r) {
        Gi[r] = function(t, e, n) {
            return this($i(n || {}, {
                url: t,
                method: r,
                body: e
            }))
        }
    }), Hi.actions = {
        get: {
            method: "GET"
        },
        save: {
            method: "POST"
        },
        query: {
            method: "GET"
        },
        update: {
            method: "PUT"
        },
        remove: {
            method: "DELETE"
        },
        delete: {
            method: "DELETE"
        }
    }, "undefined" != typeof window && window.Vue && window.Vue.use(Wi);
    var Vi = Wi,
        Ki = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "lazy-img",
                attrs: {
                    "data-status": "" + t.status,
                    "data-cover": "" + t.cover
                }
            }, ["loaded" !== t.status ? n("div", {
                staticClass: "lazy-img-status"
            }, ["loading" === t.status ? n("img", {
                attrs: {
                    src: r(48)
                }
            }) : "error" === t.status ? n("img", {
                attrs: {
                    src: r(49)
                }
            }) : t._e()]) : t._e(), t._v(" "), n("img", {
                staticClass: "lazy-img-loaded",
                attrs: {
                    src: t.src,
                    alt: ""
                },
                on: {
                    load: t.onLoad,
                    error: t.onError
                }
            })])
        };
    Ki._withStripped = !0;
    var Yi = ce({
        data: function() {
            return {
                status: "loading"
            }
        },
        props: {
            src: {
                type: String,
                required: !0
            },
            cover: {
                type: Boolean,
                default: !1
            }
        },
        watch: {
            src: function() {
                this.status = "loading"
            },
            status: {
                handler: function() {
                    this.$emit("loaded", "loaded" === this.status)
                },
                immediate: !0
            }
        },
        methods: {
            onLoad: function() {
                this.status = "loaded"
            },
            onError: function() {
                this.status = "error"
            }
        }
    }, Ki, [], !1, null, null, null);
    Yi.options.__file = "src/v2/chat/components/lazy-img/lazy-img.vue";
    var Xi = Yi.exports,
        Zi = function() {
            var t = this.$createElement;
            return (this._self._c || t)("div", {
                staticClass: "anchors",
                domProps: {
                    innerHTML: this._s(this.parsed)
                }
            })
        };
    Zi._withStripped = !0;
    r(50);
    var Ji = r(36),
        Qi = r.n(Ji),
        ta = ce({
            props: {
                text: {
                    type: String,
                    required: !0
                }
            },
            computed: {
                parsed: function() {
                    return Qi()(this.text, {
                        className: ""
                    })
                }
            }
        }, Zi, [], !1, null, null, null);
    ta.options.__file = "src/v2/chat/components/anchors/anchors.vue";
    var ea = ta.exports,
        na = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "tpl-powered-by",
                style: {
                    borderTopColor: t.welcome ? t.$_colors.poweredByWelcomeBorder : t.$_colors.poweredByBorder,
                    background: t.welcome ? "transparent" : t.$_colors.poweredByBackground
                }
            }, [n("span", [n("span", {
                style: {
                    color: t.$_colors.poweredByText
                }
            }, [t._v("Powered by")]), t._v(" "), n("a", {
                style: {
                    color: t.$_colors.poweredByProductText
                },
                attrs: {
                    target: "_blank",
                    href: t.href
                }
            }, [t._v("ChatBot")])])])
        };
    na._withStripped = !0;
    var ra = ce({
        mixins: [O],
        props: {
            welcome: {
                type: Boolean,
                default: !1
            }
        },
        computed: {
            href: function() {
                var t = encodeURIComponent(this.$_currentUrl);
                return "https://www.chatbot.com/powered-by-chatbot?utm_source=".concat("chat_window", "&utm_campaign=").concat(t)
            }
        }
    }, na, [], !1, null, null, null);
    ra.options.__file = "src/v2/chat/templates/tpl-powered-by/tpl-powered-by.vue";
    var oa = ra.exports,
        ia = function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "tpl-close",
                style: {
                    background: this.background
                },
                attrs: {
                    "data-size": this.size
                }
            }, [e("svg", {
                attrs: {
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [e("path", {
                attrs: {
                    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                    fill: this.color
                }
            })])])
        };
    ia._withStripped = !0;
    var aa = ce({
        props: {
            color: {
                type: String,
                required: !0
            },
            background: {
                type: String
            },
            size: {
                type: String,
                default: "normal",
                validator: function(t) {
                    return ["small", "normal"].includes(t)
                }
            }
        }
    }, ia, [], !1, null, null, null);
    aa.options.__file = "src/v2/chat/templates/tpl-close/tpl-close.vue";
    var sa = aa.exports,
        ca = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return t.$_config.company.avatar.enabled ? n("div", {
                staticClass: "tpl-avatar"
            }, [t.borderColor ? n("div", {
                staticClass: "tpl-avatar-status",
                style: {
                    borderColor: t.borderColor,
                    background: t.$_colors.statusBackground
                }
            }) : t._e(), t._v(" "), n("div", {
                staticClass: "tpl-avatar-image"
            }, [n("lazy-img", {
                attrs: {
                    cover: !0,
                    src: t.$_config.company.avatar.url || t.imageFallback
                }
            })], 1)]) : t._e()
        };
    ca._withStripped = !0;
    var ua = ce({
        mixins: [x],
        props: {
            borderColor: {
                type: String
            }
        },
        data: function() {
            return {
                imageFallback: Ce.a
            }
        }
    }, ca, [], !1, null, null, null);
    ua.options.__file = "src/v2/chat/templates/tpl-avatar/tpl-avatar.vue";
    var la = ua.exports,
        fa = {
            width: "100%",
            height: "100%"
        },
        da = function(t, e) {
            t && it.call("updateFrame", t, e)
        },
        pa = function() {
            var t = document.querySelector(".app-wrapper");
            if (t) {
                t.classList.remove("app-responsive");
                var e = window.getComputedStyle(t),
                    n = e.width,
                    r = e.height;
                return t.classList.add("app-responsive"), {
                    width: n,
                    height: r
                }
            }
        },
        ha = {
            mixins: [B],
            methods: {
                $updateFrameStyle: function() {
                    if (!this.$_session.opened) return da(pa(), !1);
                    da(this.$_mobile ? fa : pa(), this.$_mobile)
                }
            }
        };
    r.d(e, "vm", function() {
        return va
    }), y.a.config.productionTip = !1, y.a.config.devtools = !1, y.a.use(Vi), y.a.http.options.root = Y.apiUrl, y.a.component("lazy-img", Xi), y.a.component("anchors", ea), y.a.component("tpl-powered-by", oa), y.a.component("tpl-close", sa), y.a.component("tpl-avatar", la), y.a.mixin(ha);
    var va = new y.a({
        el: "#app",
        store: wt,
        render: function(t) {
            return t(oi)
        }
    })
}]);