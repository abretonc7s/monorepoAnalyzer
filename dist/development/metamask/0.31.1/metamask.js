function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
function _applyDecoratedDescriptor(i, e, r, n, l) {
  var a = {};
  return Object.keys(n).forEach(function (i) {
    a[i] = n[i];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) {
    return n(i, e, r) || r;
  }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a;
}
function _applyDecs2311(e, t, n, r, o, i) {
  var a,
    c,
    u,
    s,
    f,
    l,
    p,
    d = Symbol.metadata || Symbol.for("Symbol.metadata"),
    m = Object.defineProperty,
    h = Object.create,
    y = [h(null), h(null)],
    v = t.length;
  function g(t, n, r) {
    return function (o, i) {
      n && (i = o, o = e);
      for (var a = 0; a < t.length; a++) i = t[a].apply(o, r ? [i] : []);
      return r ? i : o;
    };
  }
  function b(e, t, n, r) {
    if ("function" != typeof e && (r || void 0 !== e)) throw new TypeError(t + " must " + (n || "be") + " a function" + (r ? "" : " or undefined"));
    return e;
  }
  function applyDec(e, t, n, r, o, i, u, s, f, l, p) {
    function d(e) {
      if (!p(e)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var h = [].concat(t[0]),
      v = t[3],
      w = !u,
      D = 1 === o,
      S = 3 === o,
      j = 4 === o,
      E = 2 === o;
    function I(t, n, r) {
      return function (o, i) {
        return n && (i = o, o = e), r && r(o), P[t].call(o, i);
      };
    }
    if (!w) {
      var P = {},
        k = [],
        F = S ? "get" : j || D ? "set" : "value";
      if (f ? (l || D ? P = {
        get: _setFunctionName(function () {
          return v(this);
        }, r, "get"),
        set: function (e) {
          t[4](this, e);
        }
      } : P[F] = v, l || _setFunctionName(P[F], r, E ? "" : F)) : l || (P = Object.getOwnPropertyDescriptor(e, r)), !l && !f) {
        if ((c = y[+s][r]) && 7 != (c ^ o)) throw Error("Decorating two elements with the same name (" + P[F].name + ") is not supported yet");
        y[+s][r] = o < 3 ? 1 : o;
      }
    }
    for (var N = e, O = h.length - 1; O >= 0; O -= n ? 2 : 1) {
      var T = b(h[O], "A decorator", "be", !0),
        z = n ? h[O - 1] : void 0,
        A = {},
        H = {
          kind: ["field", "accessor", "method", "getter", "setter", "class"][o],
          name: r,
          metadata: a,
          addInitializer: function (e, t) {
            if (e.v) throw new TypeError("attempted to call addInitializer after decoration was finished");
            b(t, "An initializer", "be", !0), i.push(t);
          }.bind(null, A)
        };
      if (w) c = T.call(z, N, H), A.v = 1, b(c, "class decorators", "return") && (N = c);else if (H.static = s, H.private = f, c = H.access = {
        has: f ? p.bind() : function (e) {
          return r in e;
        }
      }, j || (c.get = f ? E ? function (e) {
        return d(e), P.value;
      } : I("get", 0, d) : function (e) {
        return e[r];
      }), E || S || (c.set = f ? I("set", 0, d) : function (e, t) {
        e[r] = t;
      }), N = T.call(z, D ? {
        get: P.get,
        set: P.set
      } : P[F], H), A.v = 1, D) {
        if ("object" == typeof N && N) (c = b(N.get, "accessor.get")) && (P.get = c), (c = b(N.set, "accessor.set")) && (P.set = c), (c = b(N.init, "accessor.init")) && k.unshift(c);else if (void 0 !== N) throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined");
      } else b(N, (l ? "field" : "method") + " decorators", "return") && (l ? k.unshift(N) : P[F] = N);
    }
    return o < 2 && u.push(g(k, s, 1), g(i, s, 0)), l || w || (f ? D ? u.splice(-1, 0, I("get", s), I("set", s)) : u.push(E ? P[F] : b.call.bind(P[F])) : m(e, r, P)), N;
  }
  function w(e) {
    return m(e, d, {
      configurable: !0,
      enumerable: !0,
      value: a
    });
  }
  return void 0 !== i && (a = i[d]), a = h(null == a ? null : a), f = [], l = function (e) {
    e && f.push(g(e));
  }, p = function (t, r) {
    for (var i = 0; i < n.length; i++) {
      var a = n[i],
        c = a[1],
        l = 7 & c;
      if ((8 & c) == t && !l == r) {
        var p = a[2],
          d = !!a[3],
          m = 16 & c;
        applyDec(t ? e : e.prototype, a, m, d ? "#" + p : _toPropertyKey(p), l, l < 2 ? [] : t ? s = s || [] : u = u || [], f, !!t, d, r, t && d ? function (t) {
          return _checkInRHS(t) === e;
        } : o);
      }
    }
  }, p(8, 0), p(0, 0), p(8, 1), p(0, 1), l(u), l(s), c = f, v || w(e), {
    e: c,
    get c() {
      var n = [];
      return v && [w(e = applyDec(e, [t], r, e.name, 5, n)), g(n, 1)];
    }
  };
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _asyncGeneratorDelegate(t) {
  var e = {},
    n = !1;
  function pump(e, r) {
    return n = !0, r = new Promise(function (n) {
      n(t[e](r));
    }), {
      done: !1,
      value: new _OverloadYield(r, 1)
    };
  }
  return e["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function () {
    return this;
  }, e.next = function (t) {
    return n ? (n = !1, t) : pump("next", t);
  }, "function" == typeof t.throw && (e.throw = function (t) {
    if (n) throw n = !1, t;
    return pump("throw", t);
  }), "function" == typeof t.return && (e.return = function (t) {
    return n ? (n = !1, t) : pump("return", t);
  }), e;
}
function _asyncIterator(r) {
  var n,
    t,
    o,
    e = 2;
  for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) {
    if (t && null != (n = r[t])) return n.call(r);
    if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
    t = "@@asyncIterator", o = "@@iterator";
  }
  throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(r) {
  function AsyncFromSyncIteratorContinuation(r) {
    if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
    var n = r.done;
    return Promise.resolve(r.value).then(function (r) {
      return {
        value: r,
        done: n
      };
    });
  }
  return AsyncFromSyncIterator = function (r) {
    this.s = r, this.n = r.next;
  }, AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next: function () {
      return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
    },
    return: function (r) {
      var n = this.s.return;
      return void 0 === n ? Promise.resolve({
        value: r,
        done: !0
      }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
    },
    throw: function (r) {
      var n = this.s.return;
      return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
    }
  }, new AsyncFromSyncIterator(r);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _awaitAsyncGenerator(e) {
  return new _OverloadYield(e, 0);
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _checkInRHS(e) {
  if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? typeof e : "null"));
  return e;
}
function _checkPrivateRedeclaration(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _classNameTDZError(e) {
  throw new ReferenceError('Class "' + e + '" cannot be referenced in computed property keys.');
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldInitSpec(e, t, a) {
  _checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _classPrivateFieldLooseBase(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}
var id$1 = 0;
function _classPrivateFieldLooseKey(e) {
  return "__private_" + id$1++ + "_" + e;
}
function _classPrivateFieldSet2(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}
function _classPrivateGetter(s, r, a) {
  return a(_assertClassBrand(s, r));
}
function _classPrivateMethodInitSpec(e, a) {
  _checkPrivateRedeclaration(e, a), a.add(e);
}
function _classPrivateSetter(s, r, a, t) {
  return r(_assertClassBrand(s, a), t), t;
}
function _classStaticPrivateMethodGet(s, a, t) {
  return _assertClassBrand(a, s), t;
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function () {
      return o >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[o++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createSuper(t) {
  var r = _isNativeReflectConstruct();
  return function () {
    var e,
      o = _getPrototypeOf(t);
    if (r) {
      var s = _getPrototypeOf(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return _possibleConstructorReturn(this, e);
  };
}
function _decorate(e, r, t, i) {
  var o = _getDecoratorsApi();
  if (i) for (var n = 0; n < i.length; n++) o = i[n](o);
  var s = r(function (e) {
      o.initializeInstanceElements(e, a.elements);
    }, t),
    a = o.decorateClass(_coalesceClassElements(s.d.map(_createElementDescriptor)), e);
  return o.initializeClassElements(s.F, a.elements), o.runClassFinishers(s.F, a.finishers);
}
function _getDecoratorsApi() {
  _getDecoratorsApi = function () {
    return e;
  };
  var e = {
    elementsDefinitionOrder: [["method"], ["field"]],
    initializeInstanceElements: function (e, r) {
      ["method", "field"].forEach(function (t) {
        r.forEach(function (r) {
          r.kind === t && "own" === r.placement && this.defineClassElement(e, r);
        }, this);
      }, this);
    },
    initializeClassElements: function (e, r) {
      var t = e.prototype;
      ["method", "field"].forEach(function (i) {
        r.forEach(function (r) {
          var o = r.placement;
          if (r.kind === i && ("static" === o || "prototype" === o)) {
            var n = "static" === o ? e : t;
            this.defineClassElement(n, r);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, r) {
      var t = r.descriptor;
      if ("field" === r.kind) {
        var i = r.initializer;
        t = {
          enumerable: t.enumerable,
          writable: t.writable,
          configurable: t.configurable,
          value: void 0 === i ? void 0 : i.call(e)
        };
      }
      Object.defineProperty(e, r.key, t);
    },
    decorateClass: function (e, r) {
      var t = [],
        i = [],
        o = {
          static: [],
          prototype: [],
          own: []
        };
      if (e.forEach(function (e) {
        this.addElementPlacement(e, o);
      }, this), e.forEach(function (e) {
        if (!_hasDecorators(e)) return t.push(e);
        var r = this.decorateElement(e, o);
        t.push(r.element), t.push.apply(t, r.extras), i.push.apply(i, r.finishers);
      }, this), !r) return {
        elements: t,
        finishers: i
      };
      var n = this.decorateConstructor(t, r);
      return i.push.apply(i, n.finishers), n.finishers = i, n;
    },
    addElementPlacement: function (e, r, t) {
      var i = r[e.placement];
      if (!t && -1 !== i.indexOf(e.key)) throw new TypeError("Duplicated element (" + e.key + ")");
      i.push(e.key);
    },
    decorateElement: function (e, r) {
      for (var t = [], i = [], o = e.decorators, n = o.length - 1; n >= 0; n--) {
        var s = r[e.placement];
        s.splice(s.indexOf(e.key), 1);
        var a = this.fromElementDescriptor(e),
          l = this.toElementFinisherExtras((0, o[n])(a) || a);
        e = l.element, this.addElementPlacement(e, r), l.finisher && i.push(l.finisher);
        var c = l.extras;
        if (c) {
          for (var p = 0; p < c.length; p++) this.addElementPlacement(c[p], r);
          t.push.apply(t, c);
        }
      }
      return {
        element: e,
        finishers: i,
        extras: t
      };
    },
    decorateConstructor: function (e, r) {
      for (var t = [], i = r.length - 1; i >= 0; i--) {
        var o = this.fromClassDescriptor(e),
          n = this.toClassDescriptor((0, r[i])(o) || o);
        if (void 0 !== n.finisher && t.push(n.finisher), void 0 !== n.elements) {
          e = n.elements;
          for (var s = 0; s < e.length - 1; s++) for (var a = s + 1; a < e.length; a++) if (e[s].key === e[a].key && e[s].placement === e[a].placement) throw new TypeError("Duplicated element (" + e[s].key + ")");
        }
      }
      return {
        elements: e,
        finishers: t
      };
    },
    fromElementDescriptor: function (e) {
      var r = {
        kind: e.kind,
        key: e.key,
        placement: e.placement,
        descriptor: e.descriptor
      };
      return Object.defineProperty(r, Symbol.toStringTag, {
        value: "Descriptor",
        configurable: !0
      }), "field" === e.kind && (r.initializer = e.initializer), r;
    },
    toElementDescriptors: function (e) {
      if (void 0 !== e) return _toArray(e).map(function (e) {
        var r = this.toElementDescriptor(e);
        return this.disallowProperty(e, "finisher", "An element descriptor"), this.disallowProperty(e, "extras", "An element descriptor"), r;
      }, this);
    },
    toElementDescriptor: function (e) {
      var r = e.kind + "";
      if ("method" !== r && "field" !== r) throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' + r + '"');
      var t = _toPropertyKey(e.key),
        i = e.placement + "";
      if ("static" !== i && "prototype" !== i && "own" !== i) throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' + i + '"');
      var o = e.descriptor;
      this.disallowProperty(e, "elements", "An element descriptor");
      var n = {
        kind: r,
        key: t,
        placement: i,
        descriptor: Object.assign({}, o)
      };
      return "field" !== r ? this.disallowProperty(e, "initializer", "A method descriptor") : (this.disallowProperty(o, "get", "The property descriptor of a field descriptor"), this.disallowProperty(o, "set", "The property descriptor of a field descriptor"), this.disallowProperty(o, "value", "The property descriptor of a field descriptor"), n.initializer = e.initializer), n;
    },
    toElementFinisherExtras: function (e) {
      return {
        element: this.toElementDescriptor(e),
        finisher: _optionalCallableProperty(e, "finisher"),
        extras: this.toElementDescriptors(e.extras)
      };
    },
    fromClassDescriptor: function (e) {
      var r = {
        kind: "class",
        elements: e.map(this.fromElementDescriptor, this)
      };
      return Object.defineProperty(r, Symbol.toStringTag, {
        value: "Descriptor",
        configurable: !0
      }), r;
    },
    toClassDescriptor: function (e) {
      var r = e.kind + "";
      if ("class" !== r) throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' + r + '"');
      this.disallowProperty(e, "key", "A class descriptor"), this.disallowProperty(e, "placement", "A class descriptor"), this.disallowProperty(e, "descriptor", "A class descriptor"), this.disallowProperty(e, "initializer", "A class descriptor"), this.disallowProperty(e, "extras", "A class descriptor");
      var t = _optionalCallableProperty(e, "finisher");
      return {
        elements: this.toElementDescriptors(e.elements),
        finisher: t
      };
    },
    runClassFinishers: function (e, r) {
      for (var t = 0; t < r.length; t++) {
        var i = (0, r[t])(e);
        if (void 0 !== i) {
          if ("function" != typeof i) throw new TypeError("Finishers must return a constructor.");
          e = i;
        }
      }
      return e;
    },
    disallowProperty: function (e, r, t) {
      if (void 0 !== e[r]) throw new TypeError(t + " can't have a ." + r + " property.");
    }
  };
  return e;
}
function _createElementDescriptor(e) {
  var r,
    t = _toPropertyKey(e.key);
  "method" === e.kind ? r = {
    value: e.value,
    writable: !0,
    configurable: !0,
    enumerable: !1
  } : "get" === e.kind ? r = {
    get: e.value,
    configurable: !0,
    enumerable: !1
  } : "set" === e.kind ? r = {
    set: e.value,
    configurable: !0,
    enumerable: !1
  } : "field" === e.kind && (r = {
    configurable: !0,
    writable: !0,
    enumerable: !0
  });
  var i = {
    kind: "field" === e.kind ? "field" : "method",
    key: t,
    placement: e.static ? "static" : "field" === e.kind ? "own" : "prototype",
    descriptor: r
  };
  return e.decorators && (i.decorators = e.decorators), "field" === e.kind && (i.initializer = e.value), i;
}
function _coalesceGetterSetter(e, r) {
  void 0 !== e.descriptor.get ? r.descriptor.get = e.descriptor.get : r.descriptor.set = e.descriptor.set;
}
function _coalesceClassElements(e) {
  for (var r = [], isSameElement = function (e) {
      return "method" === e.kind && e.key === o.key && e.placement === o.placement;
    }, t = 0; t < e.length; t++) {
    var i,
      o = e[t];
    if ("method" === o.kind && (i = r.find(isSameElement))) {
      if (_isDataDescriptor(o.descriptor) || _isDataDescriptor(i.descriptor)) {
        if (_hasDecorators(o) || _hasDecorators(i)) throw new ReferenceError("Duplicated methods (" + o.key + ") can't be decorated.");
        i.descriptor = o.descriptor;
      } else {
        if (_hasDecorators(o)) {
          if (_hasDecorators(i)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + o.key + ").");
          i.decorators = o.decorators;
        }
        _coalesceGetterSetter(o, i);
      }
    } else r.push(o);
  }
  return r;
}
function _hasDecorators(e) {
  return e.decorators && e.decorators.length;
}
function _isDataDescriptor(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function _optionalCallableProperty(e, r) {
  var t = e[r];
  if (void 0 !== t && "function" != typeof t) throw new TypeError("Expected '" + r + "' to be a function");
  return t;
}
function _defaults(e, r) {
  for (var t = Object.getOwnPropertyNames(r), o = 0; o < t.length; o++) {
    var n = t[o],
      a = Object.getOwnPropertyDescriptor(r, n);
    a && a.configurable && void 0 === e[n] && Object.defineProperty(e, n, a);
  }
  return e;
}
function _defineAccessor(e, r, n, t) {
  var c = {
    configurable: !0,
    enumerable: !0
  };
  return c[e] = t, Object.defineProperty(r, n, c);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _identity(t) {
  return t;
}
function _importDeferProxy(e) {
  var t = null,
    constValue = function (e) {
      return function () {
        return e;
      };
    },
    proxy = function (r) {
      return function (n, o, f) {
        return null === t && (t = e()), r(t, o, f);
      };
    };
  return new Proxy({}, {
    defineProperty: constValue(!1),
    deleteProperty: constValue(!1),
    get: proxy(Reflect.get),
    getOwnPropertyDescriptor: proxy(Reflect.getOwnPropertyDescriptor),
    getPrototypeOf: constValue(null),
    isExtensible: constValue(!1),
    has: proxy(Reflect.has),
    ownKeys: proxy(Reflect.ownKeys),
    preventExtensions: constValue(!0),
    set: constValue(!1),
    setPrototypeOf: constValue(!1)
  });
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
function _initializerDefineProperty(e, i, r, l) {
  r && Object.defineProperty(e, i, {
    enumerable: r.enumerable,
    configurable: r.configurable,
    writable: r.writable,
    value: r.initializer ? r.initializer.call(l) : void 0
  });
}
function _initializerWarningHelper(r, e) {
  throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform.");
}
function _instanceof(n, e) {
  return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](n) : n instanceof e;
}
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function (e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || "object" != typeof e && "function" != typeof e) return {
    default: e
  };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = {
      __proto__: null
    },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
  }
  return n.default = e, t && t.set(e, n), n;
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) {
  REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
  var o = e && e.defaultProps,
    n = arguments.length - 3;
  if (r || 0 === n || (r = {
    children: void 0
  }), 1 === n) r.children = l;else if (n > 1) {
    for (var t = Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3];
    r.children = t;
  }
  if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {});
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: e,
    key: void 0 === E ? null : "" + E,
    ref: null,
    props: r,
    _owner: null
  };
}
function _maybeArrayLike(r, a, e) {
  if (a && !Array.isArray(a) && "number" == typeof a.length) {
    var y = a.length;
    return _arrayLikeToArray(a, void 0 !== e && e < y ? e : y);
  }
  return r(a, e);
}
function _newArrowCheck(n, r) {
  if (n !== r) throw new TypeError("Cannot instantiate an arrow function");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nullishReceiverError(r) {
  throw new TypeError("Cannot set property of null or undefined.");
}
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _readOnlyError(r) {
  throw new TypeError('"' + r + '" is read-only');
}
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function set(e, r, t, o) {
  return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) {
    var f,
      i = _superPropBase(e, r);
    if (i) {
      if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0;
      if (!f.writable) return !1;
    }
    if (f = Object.getOwnPropertyDescriptor(o, r)) {
      if (!f.writable) return !1;
      f.value = t, Object.defineProperty(o, r, f);
    } else _defineProperty(o, r, t);
    return !0;
  }, set(e, r, t, o);
}
function _set(e, r, t, o, f) {
  if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property");
  return t;
}
function _setFunctionName(e, t, n) {
  "symbol" == typeof t && (t = (t = t.description) ? "[" + t + "]" : "");
  try {
    Object.defineProperty(e, "name", {
      configurable: !0,
      value: n ? n + " " + t : t
    });
  } catch (e) {}
  return e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _skipFirstGeneratorNext(t) {
  return function () {
    var r = t.apply(this, arguments);
    return r.next(), r;
  };
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
function _superPropSet(t, e, o, r, p, f) {
  return _set(_getPrototypeOf(f ? t.prototype : t), e, o, r, p);
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _taggedTemplateLiteralLoose(e, t) {
  return t || (t = e.slice(0)), e.raw = t, e;
}
function _tdz(e) {
  throw new ReferenceError(e + " is not defined - temporal dead zone");
}
function _temporalRef(r, e) {
  return r === _temporalUndefined ? _tdz(e) : r;
}
function _temporalUndefined() {}
function _toArray(r) {
  return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toSetter(t, e, n) {
  e || (e = []);
  var r = e.length++;
  return Object.defineProperty({}, "_", {
    set: function (o) {
      e[r] = o, t.apply(n, e);
    }
  });
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _usingCtx() {
  var r = "function" == typeof SuppressedError ? SuppressedError : function (r, e) {
      var n = Error();
      return n.name = "SuppressedError", n.error = r, n.suppressed = e, n;
    },
    e = {},
    n = [];
  function using(r, e) {
    if (null != e) {
      if (Object(e) !== e) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
      if (r) var o = e[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
      if (void 0 === o && (o = e[Symbol.dispose || Symbol.for("Symbol.dispose")], r)) var t = o;
      if ("function" != typeof o) throw new TypeError("Object is not disposable.");
      t && (o = function () {
        try {
          t.call(e);
        } catch (r) {
          return Promise.reject(r);
        }
      }), n.push({
        v: e,
        d: o,
        a: r
      });
    } else r && n.push({
      d: e,
      a: r
    });
    return e;
  }
  return {
    e: e,
    u: using.bind(null, !1),
    a: using.bind(null, !0),
    d: function () {
      var o,
        t = this.e,
        s = 0;
      function next() {
        for (; o = n.pop();) try {
          if (!o.a && 1 === s) return s = 0, n.push(o), Promise.resolve().then(next);
          if (o.d) {
            var r = o.d.call(o.v);
            if (o.a) return s |= 2, Promise.resolve(r).then(next, err);
          } else s |= 1;
        } catch (r) {
          return err(r);
        }
        if (1 === s) return t !== e ? Promise.reject(t) : Promise.resolve();
        if (t !== e) throw t;
      }
      function err(n) {
        return t = t !== e ? new r(n, t) : n, next();
      }
      return next();
    }
  };
}
function _wrapAsyncGenerator(e) {
  return function () {
    return new AsyncGenerator(e.apply(this, arguments));
  };
}
function AsyncGenerator(e) {
  var r, t;
  function resume(r, t) {
    try {
      var n = e[r](t),
        o = n.value,
        u = o instanceof _OverloadYield;
      Promise.resolve(u ? o.v : o).then(function (t) {
        if (u) {
          var i = "return" === r ? "return" : "next";
          if (!o.k || t.done) return resume(i, t);
          t = e[i](t).value;
        }
        settle(n.done ? "return" : "normal", t);
      }, function (e) {
        resume("throw", e);
      });
    } catch (e) {
      settle("throw", e);
    }
  }
  function settle(e, n) {
    switch (e) {
      case "return":
        r.resolve({
          value: n,
          done: !0
        });
        break;
      case "throw":
        r.reject(n);
        break;
      default:
        r.resolve({
          value: n,
          done: !1
        });
    }
    (r = r.next) ? resume(r.key, r.arg) : t = null;
  }
  this._invoke = function (e, n) {
    return new Promise(function (o, u) {
      var i = {
        key: e,
        arg: n,
        resolve: o,
        reject: u,
        next: null
      };
      t ? t = t.next = i : (r = t = i, resume(e, n));
    });
  }, "function" != typeof e.return && (this.return = void 0);
}
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
}, AsyncGenerator.prototype.next = function (e) {
  return this._invoke("next", e);
}, AsyncGenerator.prototype.throw = function (e) {
  return this._invoke("throw", e);
}, AsyncGenerator.prototype.return = function (e) {
  return this._invoke("return", e);
};
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}
function _wrapRegExp() {
  _wrapRegExp = function (e, r) {
    return new BabelRegExp(e, void 0, r);
  };
  var e = RegExp.prototype,
    r = new WeakMap();
  function BabelRegExp(e, t, p) {
    var o = RegExp(e, t);
    return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
  }
  function buildGroups(e, t) {
    var p = r.get(t);
    return Object.keys(p).reduce(function (r, t) {
      var o = p[t];
      if ("number" == typeof o) r[t] = e[o];else {
        for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
        r[t] = e[o[i]];
      }
      return r;
    }, Object.create(null));
  }
  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
    var t = e.exec.call(this, r);
    if (t) {
      t.groups = buildGroups(t, this);
      var p = t.indices;
      p && (p.groups = buildGroups(p, this));
    }
    return t;
  }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
    if ("string" == typeof p) {
      var o = r.get(this);
      return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function (e, r) {
        var t = o[r];
        return "$" + (Array.isArray(t) ? t.join("$") : t);
      }));
    }
    if ("function" == typeof p) {
      var i = this;
      return e[Symbol.replace].call(this, t, function () {
        var e = arguments;
        return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
      });
    }
    return e[Symbol.replace].call(this, t, p);
  }, _wrapRegExp.apply(this, arguments);
}
function _writeOnlyError(r) {
  throw new TypeError('"' + r + '" is write-only');
}
function _AwaitValue(t) {
  this.wrapped = t;
}
function old_createMetadataMethodsForProperty(e, t, a, r) {
  return {
    getMetadata: function (o) {
      old_assertNotFinished(r, "getMetadata"), old_assertMetadataKey(o);
      var i = e[o];
      if (void 0 !== i) if (1 === t) {
        var n = i.public;
        if (void 0 !== n) return n[a];
      } else if (2 === t) {
        var l = i.private;
        if (void 0 !== l) return l.get(a);
      } else if (Object.hasOwnProperty.call(i, "constructor")) return i.constructor;
    },
    setMetadata: function (o, i) {
      old_assertNotFinished(r, "setMetadata"), old_assertMetadataKey(o);
      var n = e[o];
      if (void 0 === n && (n = e[o] = {}), 1 === t) {
        var l = n.public;
        void 0 === l && (l = n.public = {}), l[a] = i;
      } else if (2 === t) {
        var s = n.priv;
        void 0 === s && (s = n.private = new Map()), s.set(a, i);
      } else n.constructor = i;
    }
  };
}
function old_convertMetadataMapToFinal(e, t) {
  var a = e[Symbol.metadata || Symbol.for("Symbol.metadata")],
    r = Object.getOwnPropertySymbols(t);
  if (0 !== r.length) {
    for (var o = 0; o < r.length; o++) {
      var i = r[o],
        n = t[i],
        l = a ? a[i] : null,
        s = n.public,
        c = l ? l.public : null;
      s && c && Object.setPrototypeOf(s, c);
      var d = n.private;
      if (d) {
        var u = Array.from(d.values()),
          f = l ? l.private : null;
        f && (u = u.concat(f)), n.private = u;
      }
      l && Object.setPrototypeOf(n, l);
    }
    a && Object.setPrototypeOf(t, a), e[Symbol.metadata || Symbol.for("Symbol.metadata")] = t;
  }
}
function old_createAddInitializerMethod(e, t) {
  return function (a) {
    old_assertNotFinished(t, "addInitializer"), old_assertCallable(a, "An initializer"), e.push(a);
  };
}
function old_memberDec(e, t, a, r, o, i, n, l, s) {
  var c;
  switch (i) {
    case 1:
      c = "accessor";
      break;
    case 2:
      c = "method";
      break;
    case 3:
      c = "getter";
      break;
    case 4:
      c = "setter";
      break;
    default:
      c = "field";
  }
  var d,
    u,
    f = {
      kind: c,
      name: l ? "#" + t : _toPropertyKey(t),
      isStatic: n,
      isPrivate: l
    },
    p = {
      v: !1
    };
  if (0 !== i && (f.addInitializer = old_createAddInitializerMethod(o, p)), l) {
    d = 2, u = Symbol(t);
    var v = {};
    0 === i ? (v.get = a.get, v.set = a.set) : 2 === i ? v.get = function () {
      return a.value;
    } : (1 !== i && 3 !== i || (v.get = function () {
      return a.get.call(this);
    }), 1 !== i && 4 !== i || (v.set = function (e) {
      a.set.call(this, e);
    })), f.access = v;
  } else d = 1, u = t;
  try {
    return e(s, Object.assign(f, old_createMetadataMethodsForProperty(r, d, u, p)));
  } finally {
    p.v = !0;
  }
}
function old_assertNotFinished(e, t) {
  if (e.v) throw Error("attempted to call " + t + " after decoration was finished");
}
function old_assertMetadataKey(e) {
  if ("symbol" != typeof e) throw new TypeError("Metadata keys must be symbols, received: " + e);
}
function old_assertCallable(e, t) {
  if ("function" != typeof e) throw new TypeError(t + " must be a function");
}
function old_assertValidReturnValue(e, t) {
  var a = typeof t;
  if (1 === e) {
    if ("object" !== a || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
    void 0 !== t.get && old_assertCallable(t.get, "accessor.get"), void 0 !== t.set && old_assertCallable(t.set, "accessor.set"), void 0 !== t.init && old_assertCallable(t.init, "accessor.init"), void 0 !== t.initializer && old_assertCallable(t.initializer, "accessor.initializer");
  } else if ("function" !== a) throw new TypeError((0 === e ? "field" : 10 === e ? "class" : "method") + " decorators must return a function or void 0");
}
function old_getInit(e) {
  var t;
  return null == (t = e.init) && (t = e.initializer) && void 0 !== console && console.warn(".initializer has been renamed to .init as of March 2022"), t;
}
function old_applyMemberDec(e, t, a, r, o, i, n, l, s) {
  var c,
    d,
    u,
    f,
    p,
    v,
    y,
    h = a[0];
  if (n ? (0 === o || 1 === o ? (c = {
    get: a[3],
    set: a[4]
  }, u = "get") : 3 === o ? (c = {
    get: a[3]
  }, u = "get") : 4 === o ? (c = {
    set: a[3]
  }, u = "set") : c = {
    value: a[3]
  }, 0 !== o && (1 === o && _setFunctionName(a[4], "#" + r, "set"), _setFunctionName(a[3], "#" + r, u))) : 0 !== o && (c = Object.getOwnPropertyDescriptor(t, r)), 1 === o ? f = {
    get: c.get,
    set: c.set
  } : 2 === o ? f = c.value : 3 === o ? f = c.get : 4 === o && (f = c.set), "function" == typeof h) void 0 !== (p = old_memberDec(h, r, c, l, s, o, i, n, f)) && (old_assertValidReturnValue(o, p), 0 === o ? d = p : 1 === o ? (d = old_getInit(p), v = p.get || f.get, y = p.set || f.set, f = {
    get: v,
    set: y
  }) : f = p);else for (var m = h.length - 1; m >= 0; m--) {
    var b;
    void 0 !== (p = old_memberDec(h[m], r, c, l, s, o, i, n, f)) && (old_assertValidReturnValue(o, p), 0 === o ? b = p : 1 === o ? (b = old_getInit(p), v = p.get || f.get, y = p.set || f.set, f = {
      get: v,
      set: y
    }) : f = p, void 0 !== b && (void 0 === d ? d = b : "function" == typeof d ? d = [d, b] : d.push(b)));
  }
  if (0 === o || 1 === o) {
    if (void 0 === d) d = function (e, t) {
      return t;
    };else if ("function" != typeof d) {
      var g = d;
      d = function (e, t) {
        for (var a = t, r = 0; r < g.length; r++) a = g[r].call(e, a);
        return a;
      };
    } else {
      var _ = d;
      d = function (e, t) {
        return _.call(e, t);
      };
    }
    e.push(d);
  }
  0 !== o && (1 === o ? (c.get = f.get, c.set = f.set) : 2 === o ? c.value = f : 3 === o ? c.get = f : 4 === o && (c.set = f), n ? 1 === o ? (e.push(function (e, t) {
    return f.get.call(e, t);
  }), e.push(function (e, t) {
    return f.set.call(e, t);
  })) : 2 === o ? e.push(f) : e.push(function (e, t) {
    return f.call(e, t);
  }) : Object.defineProperty(t, r, c));
}
function old_applyMemberDecs(e, t, a, r, o) {
  for (var i, n, l = new Map(), s = new Map(), c = 0; c < o.length; c++) {
    var d = o[c];
    if (Array.isArray(d)) {
      var u,
        f,
        p,
        v = d[1],
        y = d[2],
        h = d.length > 3,
        m = v >= 5;
      if (m ? (u = t, f = r, 0 != (v -= 5) && (p = n = n || [])) : (u = t.prototype, f = a, 0 !== v && (p = i = i || [])), 0 !== v && !h) {
        var b = m ? s : l,
          g = b.get(y) || 0;
        if (!0 === g || 3 === g && 4 !== v || 4 === g && 3 !== v) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + y);
        !g && v > 2 ? b.set(y, v) : b.set(y, !0);
      }
      old_applyMemberDec(e, u, d, y, v, m, h, f, p);
    }
  }
  old_pushInitializers(e, i), old_pushInitializers(e, n);
}
function old_pushInitializers(e, t) {
  t && e.push(function (e) {
    for (var a = 0; a < t.length; a++) t[a].call(e);
    return e;
  });
}
function old_applyClassDecs(e, t, a, r) {
  if (r.length > 0) {
    for (var o = [], i = t, n = t.name, l = r.length - 1; l >= 0; l--) {
      var s = {
        v: !1
      };
      try {
        var c = Object.assign({
            kind: "class",
            name: n,
            addInitializer: old_createAddInitializerMethod(o, s)
          }, old_createMetadataMethodsForProperty(a, 0, n, s)),
          d = r[l](i, c);
      } finally {
        s.v = !0;
      }
      void 0 !== d && (old_assertValidReturnValue(10, d), i = d);
    }
    e.push(i, function () {
      for (var e = 0; e < o.length; e++) o[e].call(i);
    });
  }
}
function _applyDecs(e, t, a) {
  var r = [],
    o = {},
    i = {};
  return old_applyMemberDecs(r, e, i, o, t), old_convertMetadataMapToFinal(e.prototype, i), old_applyClassDecs(r, e, o, a), old_convertMetadataMapToFinal(e, o), r;
}
function applyDecs2203Factory() {
  function createAddInitializerMethod(e, t) {
    return function (r) {
      !function (e, t) {
        if (e.v) throw Error("attempted to call addInitializer after decoration was finished");
      }(t), assertCallable(r, "An initializer"), e.push(r);
    };
  }
  function memberDec(e, t, r, a, n, i, s, o) {
    var c;
    switch (n) {
      case 1:
        c = "accessor";
        break;
      case 2:
        c = "method";
        break;
      case 3:
        c = "getter";
        break;
      case 4:
        c = "setter";
        break;
      default:
        c = "field";
    }
    var l,
      u,
      f = {
        kind: c,
        name: s ? "#" + t : t,
        static: i,
        private: s
      },
      p = {
        v: !1
      };
    0 !== n && (f.addInitializer = createAddInitializerMethod(a, p)), 0 === n ? s ? (l = r.get, u = r.set) : (l = function () {
      return this[t];
    }, u = function (e) {
      this[t] = e;
    }) : 2 === n ? l = function () {
      return r.value;
    } : (1 !== n && 3 !== n || (l = function () {
      return r.get.call(this);
    }), 1 !== n && 4 !== n || (u = function (e) {
      r.set.call(this, e);
    })), f.access = l && u ? {
      get: l,
      set: u
    } : l ? {
      get: l
    } : {
      set: u
    };
    try {
      return e(o, f);
    } finally {
      p.v = !0;
    }
  }
  function assertCallable(e, t) {
    if ("function" != typeof e) throw new TypeError(t + " must be a function");
  }
  function assertValidReturnValue(e, t) {
    var r = typeof t;
    if (1 === e) {
      if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
    } else if ("function" !== r) throw new TypeError((0 === e ? "field" : 10 === e ? "class" : "method") + " decorators must return a function or void 0");
  }
  function applyMemberDec(e, t, r, a, n, i, s, o) {
    var c,
      l,
      u,
      f,
      p,
      d,
      h = r[0];
    if (s ? c = 0 === n || 1 === n ? {
      get: r[3],
      set: r[4]
    } : 3 === n ? {
      get: r[3]
    } : 4 === n ? {
      set: r[3]
    } : {
      value: r[3]
    } : 0 !== n && (c = Object.getOwnPropertyDescriptor(t, a)), 1 === n ? u = {
      get: c.get,
      set: c.set
    } : 2 === n ? u = c.value : 3 === n ? u = c.get : 4 === n && (u = c.set), "function" == typeof h) void 0 !== (f = memberDec(h, a, c, o, n, i, s, u)) && (assertValidReturnValue(n, f), 0 === n ? l = f : 1 === n ? (l = f.init, p = f.get || u.get, d = f.set || u.set, u = {
      get: p,
      set: d
    }) : u = f);else for (var v = h.length - 1; v >= 0; v--) {
      var g;
      void 0 !== (f = memberDec(h[v], a, c, o, n, i, s, u)) && (assertValidReturnValue(n, f), 0 === n ? g = f : 1 === n ? (g = f.init, p = f.get || u.get, d = f.set || u.set, u = {
        get: p,
        set: d
      }) : u = f, void 0 !== g && (void 0 === l ? l = g : "function" == typeof l ? l = [l, g] : l.push(g)));
    }
    if (0 === n || 1 === n) {
      if (void 0 === l) l = function (e, t) {
        return t;
      };else if ("function" != typeof l) {
        var y = l;
        l = function (e, t) {
          for (var r = t, a = 0; a < y.length; a++) r = y[a].call(e, r);
          return r;
        };
      } else {
        var m = l;
        l = function (e, t) {
          return m.call(e, t);
        };
      }
      e.push(l);
    }
    0 !== n && (1 === n ? (c.get = u.get, c.set = u.set) : 2 === n ? c.value = u : 3 === n ? c.get = u : 4 === n && (c.set = u), s ? 1 === n ? (e.push(function (e, t) {
      return u.get.call(e, t);
    }), e.push(function (e, t) {
      return u.set.call(e, t);
    })) : 2 === n ? e.push(u) : e.push(function (e, t) {
      return u.call(e, t);
    }) : Object.defineProperty(t, a, c));
  }
  function pushInitializers(e, t) {
    t && e.push(function (e) {
      for (var r = 0; r < t.length; r++) t[r].call(e);
      return e;
    });
  }
  return function (e, t, r) {
    var a = [];
    return function (e, t, r) {
      for (var a, n, i = new Map(), s = new Map(), o = 0; o < r.length; o++) {
        var c = r[o];
        if (Array.isArray(c)) {
          var l,
            u,
            f = c[1],
            p = c[2],
            d = c.length > 3,
            h = f >= 5;
          if (h ? (l = t, 0 != (f -= 5) && (u = n = n || [])) : (l = t.prototype, 0 !== f && (u = a = a || [])), 0 !== f && !d) {
            var v = h ? s : i,
              g = v.get(p) || 0;
            if (!0 === g || 3 === g && 4 !== f || 4 === g && 3 !== f) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + p);
            !g && f > 2 ? v.set(p, f) : v.set(p, !0);
          }
          applyMemberDec(e, l, c, p, f, h, d, u);
        }
      }
      pushInitializers(e, a), pushInitializers(e, n);
    }(a, e, t), function (e, t, r) {
      if (r.length > 0) {
        for (var a = [], n = t, i = t.name, s = r.length - 1; s >= 0; s--) {
          var o = {
            v: !1
          };
          try {
            var c = r[s](n, {
              kind: "class",
              name: i,
              addInitializer: createAddInitializerMethod(a, o)
            });
          } finally {
            o.v = !0;
          }
          void 0 !== c && (assertValidReturnValue(10, c), n = c);
        }
        e.push(n, function () {
          for (var e = 0; e < a.length; e++) a[e].call(n);
        });
      }
    }(a, e, r), a;
  };
}
var applyDecs2203Impl;
function _applyDecs2203(e, t, r) {
  return (applyDecs2203Impl = applyDecs2203Impl || applyDecs2203Factory())(e, t, r);
}
function applyDecs2203RFactory() {
  function createAddInitializerMethod(e, t) {
    return function (r) {
      !function (e, t) {
        if (e.v) throw Error("attempted to call addInitializer after decoration was finished");
      }(t), assertCallable(r, "An initializer"), e.push(r);
    };
  }
  function memberDec(e, t, r, n, a, i, o, s) {
    var c;
    switch (a) {
      case 1:
        c = "accessor";
        break;
      case 2:
        c = "method";
        break;
      case 3:
        c = "getter";
        break;
      case 4:
        c = "setter";
        break;
      default:
        c = "field";
    }
    var l,
      u,
      f = {
        kind: c,
        name: o ? "#" + t : _toPropertyKey(t),
        static: i,
        private: o
      },
      p = {
        v: !1
      };
    0 !== a && (f.addInitializer = createAddInitializerMethod(n, p)), 0 === a ? o ? (l = r.get, u = r.set) : (l = function () {
      return this[t];
    }, u = function (e) {
      this[t] = e;
    }) : 2 === a ? l = function () {
      return r.value;
    } : (1 !== a && 3 !== a || (l = function () {
      return r.get.call(this);
    }), 1 !== a && 4 !== a || (u = function (e) {
      r.set.call(this, e);
    })), f.access = l && u ? {
      get: l,
      set: u
    } : l ? {
      get: l
    } : {
      set: u
    };
    try {
      return e(s, f);
    } finally {
      p.v = !0;
    }
  }
  function assertCallable(e, t) {
    if ("function" != typeof e) throw new TypeError(t + " must be a function");
  }
  function assertValidReturnValue(e, t) {
    var r = typeof t;
    if (1 === e) {
      if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
    } else if ("function" !== r) throw new TypeError((0 === e ? "field" : 10 === e ? "class" : "method") + " decorators must return a function or void 0");
  }
  function applyMemberDec(e, t, r, n, a, i, o, s) {
    var c,
      l,
      u,
      f,
      p,
      d,
      h,
      v = r[0];
    if (o ? (0 === a || 1 === a ? (c = {
      get: r[3],
      set: r[4]
    }, u = "get") : 3 === a ? (c = {
      get: r[3]
    }, u = "get") : 4 === a ? (c = {
      set: r[3]
    }, u = "set") : c = {
      value: r[3]
    }, 0 !== a && (1 === a && _setFunctionName(r[4], "#" + n, "set"), _setFunctionName(r[3], "#" + n, u))) : 0 !== a && (c = Object.getOwnPropertyDescriptor(t, n)), 1 === a ? f = {
      get: c.get,
      set: c.set
    } : 2 === a ? f = c.value : 3 === a ? f = c.get : 4 === a && (f = c.set), "function" == typeof v) void 0 !== (p = memberDec(v, n, c, s, a, i, o, f)) && (assertValidReturnValue(a, p), 0 === a ? l = p : 1 === a ? (l = p.init, d = p.get || f.get, h = p.set || f.set, f = {
      get: d,
      set: h
    }) : f = p);else for (var g = v.length - 1; g >= 0; g--) {
      var y;
      void 0 !== (p = memberDec(v[g], n, c, s, a, i, o, f)) && (assertValidReturnValue(a, p), 0 === a ? y = p : 1 === a ? (y = p.init, d = p.get || f.get, h = p.set || f.set, f = {
        get: d,
        set: h
      }) : f = p, void 0 !== y && (void 0 === l ? l = y : "function" == typeof l ? l = [l, y] : l.push(y)));
    }
    if (0 === a || 1 === a) {
      if (void 0 === l) l = function (e, t) {
        return t;
      };else if ("function" != typeof l) {
        var m = l;
        l = function (e, t) {
          for (var r = t, n = 0; n < m.length; n++) r = m[n].call(e, r);
          return r;
        };
      } else {
        var b = l;
        l = function (e, t) {
          return b.call(e, t);
        };
      }
      e.push(l);
    }
    0 !== a && (1 === a ? (c.get = f.get, c.set = f.set) : 2 === a ? c.value = f : 3 === a ? c.get = f : 4 === a && (c.set = f), o ? 1 === a ? (e.push(function (e, t) {
      return f.get.call(e, t);
    }), e.push(function (e, t) {
      return f.set.call(e, t);
    })) : 2 === a ? e.push(f) : e.push(function (e, t) {
      return f.call(e, t);
    }) : Object.defineProperty(t, n, c));
  }
  function applyMemberDecs(e, t) {
    for (var r, n, a = [], i = new Map(), o = new Map(), s = 0; s < t.length; s++) {
      var c = t[s];
      if (Array.isArray(c)) {
        var l,
          u,
          f = c[1],
          p = c[2],
          d = c.length > 3,
          h = f >= 5;
        if (h ? (l = e, 0 != (f -= 5) && (u = n = n || [])) : (l = e.prototype, 0 !== f && (u = r = r || [])), 0 !== f && !d) {
          var v = h ? o : i,
            g = v.get(p) || 0;
          if (!0 === g || 3 === g && 4 !== f || 4 === g && 3 !== f) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + p);
          !g && f > 2 ? v.set(p, f) : v.set(p, !0);
        }
        applyMemberDec(a, l, c, p, f, h, d, u);
      }
    }
    return pushInitializers(a, r), pushInitializers(a, n), a;
  }
  function pushInitializers(e, t) {
    t && e.push(function (e) {
      for (var r = 0; r < t.length; r++) t[r].call(e);
      return e;
    });
  }
  return function (e, t, r) {
    return {
      e: applyMemberDecs(e, t),
      get c() {
        return function (e, t) {
          if (t.length > 0) {
            for (var r = [], n = e, a = e.name, i = t.length - 1; i >= 0; i--) {
              var o = {
                v: !1
              };
              try {
                var s = t[i](n, {
                  kind: "class",
                  name: a,
                  addInitializer: createAddInitializerMethod(r, o)
                });
              } finally {
                o.v = !0;
              }
              void 0 !== s && (assertValidReturnValue(10, s), n = s);
            }
            return [n, function () {
              for (var e = 0; e < r.length; e++) r[e].call(n);
            }];
          }
        }(e, r);
      }
    };
  };
}
function _applyDecs2203R(e, t, r) {
  return (_applyDecs2203R = applyDecs2203RFactory())(e, t, r);
}
function applyDecs2301Factory() {
  function createAddInitializerMethod(e, t) {
    return function (r) {
      !function (e, t) {
        if (e.v) throw Error("attempted to call addInitializer after decoration was finished");
      }(t), assertCallable(r, "An initializer"), e.push(r);
    };
  }
  function assertInstanceIfPrivate(e, t) {
    if (!e(t)) throw new TypeError("Attempted to access private element on non-instance");
  }
  function memberDec(e, t, r, n, a, i, s, o, c) {
    var u;
    switch (a) {
      case 1:
        u = "accessor";
        break;
      case 2:
        u = "method";
        break;
      case 3:
        u = "getter";
        break;
      case 4:
        u = "setter";
        break;
      default:
        u = "field";
    }
    var l,
      f,
      p = {
        kind: u,
        name: s ? "#" + t : _toPropertyKey(t),
        static: i,
        private: s
      },
      d = {
        v: !1
      };
    if (0 !== a && (p.addInitializer = createAddInitializerMethod(n, d)), s || 0 !== a && 2 !== a) {
      if (2 === a) l = function (e) {
        return assertInstanceIfPrivate(c, e), r.value;
      };else {
        var h = 0 === a || 1 === a;
        (h || 3 === a) && (l = s ? function (e) {
          return assertInstanceIfPrivate(c, e), r.get.call(e);
        } : function (e) {
          return r.get.call(e);
        }), (h || 4 === a) && (f = s ? function (e, t) {
          assertInstanceIfPrivate(c, e), r.set.call(e, t);
        } : function (e, t) {
          r.set.call(e, t);
        });
      }
    } else l = function (e) {
      return e[t];
    }, 0 === a && (f = function (e, r) {
      e[t] = r;
    });
    var v = s ? c.bind() : function (e) {
      return t in e;
    };
    p.access = l && f ? {
      get: l,
      set: f,
      has: v
    } : l ? {
      get: l,
      has: v
    } : {
      set: f,
      has: v
    };
    try {
      return e(o, p);
    } finally {
      d.v = !0;
    }
  }
  function assertCallable(e, t) {
    if ("function" != typeof e) throw new TypeError(t + " must be a function");
  }
  function assertValidReturnValue(e, t) {
    var r = typeof t;
    if (1 === e) {
      if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
      void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
    } else if ("function" !== r) throw new TypeError((0 === e ? "field" : 10 === e ? "class" : "method") + " decorators must return a function or void 0");
  }
  function curryThis2(e) {
    return function (t) {
      e(this, t);
    };
  }
  function applyMemberDec(e, t, r, n, a, i, s, o, c) {
    var u,
      l,
      f,
      p,
      d,
      h,
      v,
      y,
      g = r[0];
    if (s ? (0 === a || 1 === a ? (u = {
      get: (d = r[3], function () {
        return d(this);
      }),
      set: curryThis2(r[4])
    }, f = "get") : 3 === a ? (u = {
      get: r[3]
    }, f = "get") : 4 === a ? (u = {
      set: r[3]
    }, f = "set") : u = {
      value: r[3]
    }, 0 !== a && (1 === a && _setFunctionName(u.set, "#" + n, "set"), _setFunctionName(u[f || "value"], "#" + n, f))) : 0 !== a && (u = Object.getOwnPropertyDescriptor(t, n)), 1 === a ? p = {
      get: u.get,
      set: u.set
    } : 2 === a ? p = u.value : 3 === a ? p = u.get : 4 === a && (p = u.set), "function" == typeof g) void 0 !== (h = memberDec(g, n, u, o, a, i, s, p, c)) && (assertValidReturnValue(a, h), 0 === a ? l = h : 1 === a ? (l = h.init, v = h.get || p.get, y = h.set || p.set, p = {
      get: v,
      set: y
    }) : p = h);else for (var m = g.length - 1; m >= 0; m--) {
      var b;
      void 0 !== (h = memberDec(g[m], n, u, o, a, i, s, p, c)) && (assertValidReturnValue(a, h), 0 === a ? b = h : 1 === a ? (b = h.init, v = h.get || p.get, y = h.set || p.set, p = {
        get: v,
        set: y
      }) : p = h, void 0 !== b && (void 0 === l ? l = b : "function" == typeof l ? l = [l, b] : l.push(b)));
    }
    if (0 === a || 1 === a) {
      if (void 0 === l) l = function (e, t) {
        return t;
      };else if ("function" != typeof l) {
        var I = l;
        l = function (e, t) {
          for (var r = t, n = 0; n < I.length; n++) r = I[n].call(e, r);
          return r;
        };
      } else {
        var w = l;
        l = function (e, t) {
          return w.call(e, t);
        };
      }
      e.push(l);
    }
    0 !== a && (1 === a ? (u.get = p.get, u.set = p.set) : 2 === a ? u.value = p : 3 === a ? u.get = p : 4 === a && (u.set = p), s ? 1 === a ? (e.push(function (e, t) {
      return p.get.call(e, t);
    }), e.push(function (e, t) {
      return p.set.call(e, t);
    })) : 2 === a ? e.push(p) : e.push(function (e, t) {
      return p.call(e, t);
    }) : Object.defineProperty(t, n, u));
  }
  function applyMemberDecs(e, t, r) {
    for (var n, a, i, s = [], o = new Map(), c = new Map(), u = 0; u < t.length; u++) {
      var l = t[u];
      if (Array.isArray(l)) {
        var f,
          p,
          d = l[1],
          h = l[2],
          v = l.length > 3,
          y = d >= 5,
          g = r;
        if (y ? (f = e, 0 != (d -= 5) && (p = a = a || []), v && !i && (i = function (t) {
          return _checkInRHS(t) === e;
        }), g = i) : (f = e.prototype, 0 !== d && (p = n = n || [])), 0 !== d && !v) {
          var m = y ? c : o,
            b = m.get(h) || 0;
          if (!0 === b || 3 === b && 4 !== d || 4 === b && 3 !== d) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h);
          !b && d > 2 ? m.set(h, d) : m.set(h, !0);
        }
        applyMemberDec(s, f, l, h, d, y, v, p, g);
      }
    }
    return pushInitializers(s, n), pushInitializers(s, a), s;
  }
  function pushInitializers(e, t) {
    t && e.push(function (e) {
      for (var r = 0; r < t.length; r++) t[r].call(e);
      return e;
    });
  }
  return function (e, t, r, n) {
    return {
      e: applyMemberDecs(e, t, n),
      get c() {
        return function (e, t) {
          if (t.length > 0) {
            for (var r = [], n = e, a = e.name, i = t.length - 1; i >= 0; i--) {
              var s = {
                v: !1
              };
              try {
                var o = t[i](n, {
                  kind: "class",
                  name: a,
                  addInitializer: createAddInitializerMethod(r, s)
                });
              } finally {
                s.v = !0;
              }
              void 0 !== o && (assertValidReturnValue(10, o), n = o);
            }
            return [n, function () {
              for (var e = 0; e < r.length; e++) r[e].call(n);
            }];
          }
        }(e, r);
      }
    };
  };
}
function _applyDecs2301(e, t, r, n) {
  return (_applyDecs2301 = applyDecs2301Factory())(e, t, r, n);
}
function _applyDecs2305(e, t, r, n, o, a) {
  function i(e, t, r) {
    return function (n, o) {
      return r && r(n), e[t].call(n, o);
    };
  }
  function c(e, t) {
    for (var r = 0; r < e.length; r++) e[r].call(t);
    return t;
  }
  function s(e, t, r, n) {
    if ("function" != typeof e && (n || void 0 !== e)) throw new TypeError(t + " must " + (r || "be") + " a function" + (n ? "" : " or undefined"));
    return e;
  }
  function applyDec(e, t, r, n, o, a, c, u, l, f, p, d, h) {
    function m(e) {
      if (!h(e)) throw new TypeError("Attempted to access private element on non-instance");
    }
    var y,
      v = t[0],
      g = t[3],
      b = !u;
    if (!b) {
      r || Array.isArray(v) || (v = [v]);
      var w = {},
        S = [],
        A = 3 === o ? "get" : 4 === o || d ? "set" : "value";
      f ? (p || d ? w = {
        get: _setFunctionName(function () {
          return g(this);
        }, n, "get"),
        set: function (e) {
          t[4](this, e);
        }
      } : w[A] = g, p || _setFunctionName(w[A], n, 2 === o ? "" : A)) : p || (w = Object.getOwnPropertyDescriptor(e, n));
    }
    for (var P = e, j = v.length - 1; j >= 0; j -= r ? 2 : 1) {
      var D = v[j],
        E = r ? v[j - 1] : void 0,
        I = {},
        O = {
          kind: ["field", "accessor", "method", "getter", "setter", "class"][o],
          name: n,
          metadata: a,
          addInitializer: function (e, t) {
            if (e.v) throw Error("attempted to call addInitializer after decoration was finished");
            s(t, "An initializer", "be", !0), c.push(t);
          }.bind(null, I)
        };
      try {
        if (b) (y = s(D.call(E, P, O), "class decorators", "return")) && (P = y);else {
          var k, F;
          O.static = l, O.private = f, f ? 2 === o ? k = function (e) {
            return m(e), w.value;
          } : (o < 4 && (k = i(w, "get", m)), 3 !== o && (F = i(w, "set", m))) : (k = function (e) {
            return e[n];
          }, (o < 2 || 4 === o) && (F = function (e, t) {
            e[n] = t;
          }));
          var N = O.access = {
            has: f ? h.bind() : function (e) {
              return n in e;
            }
          };
          if (k && (N.get = k), F && (N.set = F), P = D.call(E, d ? {
            get: w.get,
            set: w.set
          } : w[A], O), d) {
            if ("object" == typeof P && P) (y = s(P.get, "accessor.get")) && (w.get = y), (y = s(P.set, "accessor.set")) && (w.set = y), (y = s(P.init, "accessor.init")) && S.push(y);else if (void 0 !== P) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
          } else s(P, (p ? "field" : "method") + " decorators", "return") && (p ? S.push(P) : w[A] = P);
        }
      } finally {
        I.v = !0;
      }
    }
    return (p || d) && u.push(function (e, t) {
      for (var r = S.length - 1; r >= 0; r--) t = S[r].call(e, t);
      return t;
    }), p || b || (f ? d ? u.push(i(w, "get"), i(w, "set")) : u.push(2 === o ? w[A] : i.call.bind(w[A])) : Object.defineProperty(e, n, w)), P;
  }
  function u(e, t) {
    return Object.defineProperty(e, Symbol.metadata || Symbol.for("Symbol.metadata"), {
      configurable: !0,
      enumerable: !0,
      value: t
    });
  }
  if (arguments.length >= 6) var l = a[Symbol.metadata || Symbol.for("Symbol.metadata")];
  var f = Object.create(null == l ? null : l),
    p = function (e, t, r, n) {
      var o,
        a,
        i = [],
        s = function (t) {
          return _checkInRHS(t) === e;
        },
        u = new Map();
      function l(e) {
        e && i.push(c.bind(null, e));
      }
      for (var f = 0; f < t.length; f++) {
        var p = t[f];
        if (Array.isArray(p)) {
          var d = p[1],
            h = p[2],
            m = p.length > 3,
            y = 16 & d,
            v = !!(8 & d),
            g = 0 == (d &= 7),
            b = h + "/" + v;
          if (!g && !m) {
            var w = u.get(b);
            if (!0 === w || 3 === w && 4 !== d || 4 === w && 3 !== d) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h);
            u.set(b, !(d > 2) || d);
          }
          applyDec(v ? e : e.prototype, p, y, m ? "#" + h : _toPropertyKey(h), d, n, v ? a = a || [] : o = o || [], i, v, m, g, 1 === d, v && m ? s : r);
        }
      }
      return l(o), l(a), i;
    }(e, t, o, f);
  return r.length || u(e, f), {
    e: p,
    get c() {
      var t = [];
      return r.length && [u(applyDec(e, [r], n, e.name, 5, f, t), f), c.bind(null, t, e)];
    }
  };
}
function _classApplyDescriptorDestructureSet(e, t) {
  if (t.set) return "__destrObj" in t || (t.__destrObj = {
    set value(r) {
      t.set.call(e, r);
    }
  }), t.__destrObj;
  if (!t.writable) throw new TypeError("attempted to set read only private field");
  return t;
}
function _classApplyDescriptorGet(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function _classApplyDescriptorSet(e, t, l) {
  if (t.set) t.set.call(e, l);else {
    if (!t.writable) throw new TypeError("attempted to set read only private field");
    t.value = l;
  }
}
function _classCheckPrivateStaticAccess(s, a, r) {
  return _assertClassBrand(a, s, r);
}
function _classCheckPrivateStaticFieldDescriptor(t, e) {
  if (void 0 === t) throw new TypeError("attempted to " + e + " private static field before its declaration");
}
function _classExtractFieldDescriptor(e, t) {
  return _classPrivateFieldGet2(t, e);
}
function _classPrivateFieldDestructureSet(e, t) {
  var r = _classPrivateFieldGet2(t, e);
  return _classApplyDescriptorDestructureSet(e, r);
}
function _classPrivateFieldGet(e, t) {
  var r = _classPrivateFieldGet2(t, e);
  return _classApplyDescriptorGet(e, r);
}
function _classPrivateFieldSet(e, t, r) {
  var s = _classPrivateFieldGet2(t, e);
  return _classApplyDescriptorSet(e, s, r), r;
}
function _classPrivateMethodGet(s, a, r) {
  return _assertClassBrand(a, s), r;
}
function _classPrivateMethodSet() {
  throw new TypeError("attempted to reassign private method");
}
function _classStaticPrivateFieldDestructureSet(t, r, s) {
  return _assertClassBrand(r, t), _classCheckPrivateStaticFieldDescriptor(s, "set"), _classApplyDescriptorDestructureSet(t, s);
}
function _classStaticPrivateFieldSpecGet(t, s, r) {
  return _assertClassBrand(s, t), _classCheckPrivateStaticFieldDescriptor(r, "get"), _classApplyDescriptorGet(t, r);
}
function _classStaticPrivateFieldSpecSet(s, t, r, e) {
  return _assertClassBrand(t, s), _classCheckPrivateStaticFieldDescriptor(r, "set"), _classApplyDescriptorSet(s, r, e), e;
}
function _classStaticPrivateMethodSet() {
  throw new TypeError("attempted to set read only static private field");
}
function _defineEnumerableProperties(e, r) {
  for (var t in r) {
    var n = r[t];
    n.configurable = n.enumerable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, t, n);
  }
  if (Object.getOwnPropertySymbols) for (var a = Object.getOwnPropertySymbols(r), b = 0; b < a.length; b++) {
    var i = a[b];
    (n = r[i]).configurable = n.enumerable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, i, n);
  }
  return e;
}
function dispose_SuppressedError(r, e) {
  return "undefined" != typeof SuppressedError ? dispose_SuppressedError = SuppressedError : (dispose_SuppressedError = function (r, e) {
    this.suppressed = e, this.error = r, this.stack = Error().stack;
  }, dispose_SuppressedError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: dispose_SuppressedError,
      writable: !0,
      configurable: !0
    }
  })), new dispose_SuppressedError(r, e);
}
function _dispose(r, e, s) {
  function next() {
    for (; r.length > 0;) try {
      var o = r.pop(),
        p = o.d.call(o.v);
      if (o.a) return Promise.resolve(p).then(next, err);
    } catch (r) {
      return err(r);
    }
    if (s) throw e;
  }
  function err(r) {
    return e = s ? new dispose_SuppressedError(e, r) : r, s = !0, next();
  }
  return next();
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? Object(arguments[r]) : {},
      o = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(t).filter(function (e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), o.forEach(function (r) {
      _defineProperty(e, r, t[r]);
    });
  }
  return e;
}
function _using(o, n, e) {
  if (null == n) return n;
  if (Object(n) !== n) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
  if (e) var r = n[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
  if (null == r && (r = n[Symbol.dispose || Symbol.for("Symbol.dispose")]), "function" != typeof r) throw new TypeError("Property [Symbol.dispose] is not a function.");
  return o.push({
    v: n,
    d: r,
    a: e
  }), n;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfPresent (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var browserPonyfill$1 = {exports: {}};

var browserPonyfill = browserPonyfill$1.exports;
(function (module, exports) {
  // Save global object in a variable
  var __global__ = typeof globalThis !== 'undefined' && globalThis || typeof self !== 'undefined' && self || typeof commonjsGlobal !== 'undefined' && commonjsGlobal;
  // Create an object that extends from __global__ without the fetch function
  var __globalThis__ = function () {
    function F() {
      this.fetch = false;
      this.DOMException = __global__.DOMException;
    }
    F.prototype = __global__; // Needed for feature detection on whatwg-fetch's code
    return new F();
  }();
  // Wraps whatwg-fetch with a function scope to hijack the global object
  // "globalThis" that's going to be patched
  (function (globalThis) {
    var irrelevant = function (exports) {
      var global = typeof globalThis !== 'undefined' && globalThis || typeof self !== 'undefined' && self || typeof global !== 'undefined' && global;
      var support = {
        searchParams: 'URLSearchParams' in global,
        iterable: 'Symbol' in global && 'iterator' in Symbol,
        blob: 'FileReader' in global && 'Blob' in global && function () {
          try {
            new Blob();
            return true;
          } catch (e) {
            return false;
          }
        }(),
        formData: 'FormData' in global,
        arrayBuffer: 'ArrayBuffer' in global
      };
      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }
      if (support.arrayBuffer) {
        var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];
        var isArrayBufferView = ArrayBuffer.isView || function (obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
      }
      function normalizeName(name) {
        if (typeof name !== 'string') {
          name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
          throw new TypeError('Invalid character in header field name: "' + name + '"');
        }
        return name.toLowerCase();
      }
      function normalizeValue(value) {
        if (typeof value !== 'string') {
          value = String(value);
        }
        return value;
      }

      // Build a destructive iterator for the value list
      function iteratorFor(items) {
        var iterator = {
          next: function next() {
            var value = items.shift();
            return {
              done: value === undefined,
              value: value
            };
          }
        };
        if (support.iterable) {
          iterator[Symbol.iterator] = function () {
            return iterator;
          };
        }
        return iterator;
      }
      function Headers(headers) {
        this.map = {};
        if (headers instanceof Headers) {
          headers.forEach(function (value, name) {
            this.append(name, value);
          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function (header) {
            this.append(header[0], header[1]);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function (name) {
            this.append(name, headers[name]);
          }, this);
        }
      }
      Headers.prototype.append = function (name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ', ' + value : value;
      };
      Headers.prototype['delete'] = function (name) {
        delete this.map[normalizeName(name)];
      };
      Headers.prototype.get = function (name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
      };
      Headers.prototype.has = function (name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };
      Headers.prototype.set = function (name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };
      Headers.prototype.forEach = function (callback, thisArg) {
        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
      };
      Headers.prototype.keys = function () {
        var items = [];
        this.forEach(function (value, name) {
          items.push(name);
        });
        return iteratorFor(items);
      };
      Headers.prototype.values = function () {
        var items = [];
        this.forEach(function (value) {
          items.push(value);
        });
        return iteratorFor(items);
      };
      Headers.prototype.entries = function () {
        var items = [];
        this.forEach(function (value, name) {
          items.push([name, value]);
        });
        return iteratorFor(items);
      };
      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      function consumed(body) {
        if (body.bodyUsed) {
          return Promise.reject(new TypeError('Already read'));
        }
        body.bodyUsed = true;
      }
      function fileReaderReady(reader) {
        return new Promise(function (resolve, reject) {
          reader.onload = function () {
            resolve(reader.result);
          };
          reader.onerror = function () {
            reject(reader.error);
          };
        });
      }
      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
      }
      function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
      }
      function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i = 0; i < view.length; i++) {
          chars[i] = String.fromCharCode(view[i]);
        }
        return chars.join('');
      }
      function bufferClone(buf) {
        if (buf.slice) {
          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
          return view.buffer;
        }
      }
      function Body() {
        this.bodyUsed = false;
        this._initBody = function (body) {
          /*
            fetch-mock wraps the Response object in an ES6 Proxy to
            provide useful test harness features such as flush. However, on
            ES5 browsers without fetch or Proxy support pollyfills must be used;
            the proxy-pollyfill is unable to proxy an attribute unless it exists
            on the object before the Proxy is created. This change ensures
            Response.bodyUsed exists on the instance, while maintaining the
            semantic of setting Request.bodyUsed in the constructor before
            _initBody is called.
          */
          this.bodyUsed = this.bodyUsed;
          this._bodyInit = body;
          if (!body) {
            this._bodyText = '';
          } else if (typeof body === 'string') {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            // IE 10-11 can't handle a DataView body.
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }
          if (!this.headers.get('content-type')) {
            if (typeof body === 'string') {
              this.headers.set('content-type', 'text/plain;charset=UTF-8');
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set('content-type', this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
          }
        };
        if (support.blob) {
          this.blob = function () {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
              throw new Error('could not read FormData body as blob');
            } else {
              return Promise.resolve(new Blob([this._bodyText]));
            }
          };
          this.arrayBuffer = function () {
            if (this._bodyArrayBuffer) {
              var isConsumed = consumed(this);
              if (isConsumed) {
                return isConsumed;
              }
              if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
              } else {
                return Promise.resolve(this._bodyArrayBuffer);
              }
            } else {
              return this.blob().then(readBlobAsArrayBuffer);
            }
          };
        }
        this.text = function () {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as text');
          } else {
            return Promise.resolve(this._bodyText);
          }
        };
        if (support.formData) {
          this.formData = function () {
            return this.text().then(decode);
          };
        }
        this.json = function () {
          return this.text().then(JSON.parse);
        };
        return this;
      }

      // HTTP methods whose capitalization should be normalized
      var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }
      function Request(input, options) {
        if (!(this instanceof Request)) {
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        }
        options = options || {};
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed) {
            throw new TypeError('Already read');
          }
          this.url = input.url;
          this.credentials = input.credentials;
          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }
          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;
          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }
        this.credentials = options.credentials || this.credentials || 'same-origin';
        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || 'GET');
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;
        if ((this.method === 'GET' || this.method === 'HEAD') && body) {
          throw new TypeError('Body not allowed for GET or HEAD requests');
        }
        this._initBody(body);
        if (this.method === 'GET' || this.method === 'HEAD') {
          if (options.cache === 'no-store' || options.cache === 'no-cache') {
            // Search for a '_' parameter in the query string
            var reParamSearch = /([?&])_=[^&]*/;
            if (reParamSearch.test(this.url)) {
              // If it already exists then set the value with the current time
              this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
            } else {
              // Otherwise add a new '_' parameter to the end with the current time
              var reQueryString = /\?/;
              this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
            }
          }
        }
      }
      Request.prototype.clone = function () {
        return new Request(this, {
          body: this._bodyInit
        });
      };
      function decode(body) {
        var form = new FormData();
        body.trim().split('&').forEach(function (bytes) {
          if (bytes) {
            var split = bytes.split('=');
            var name = split.shift().replace(/\+/g, ' ');
            var value = split.join('=').replace(/\+/g, ' ');
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
        return form;
      }
      function parseHeaders(rawHeaders) {
        var headers = new Headers();
        // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
        // https://tools.ietf.org/html/rfc7230#section-3.2
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
        // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
        // https://github.com/github/fetch/issues/748
        // https://github.com/zloirock/core-js/issues/751
        preProcessedHeaders.split('\r').map(function (header) {
          return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header;
        }).forEach(function (line) {
          var parts = line.split(':');
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(':').trim();
            headers.append(key, value);
          }
        });
        return headers;
      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
        if (!(this instanceof Response)) {
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        }
        if (!options) {
          options = {};
        }
        this.type = 'default';
        this.status = options.status === undefined ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
        this.headers = new Headers(options.headers);
        this.url = options.url || '';
        this._initBody(bodyInit);
      }
      Body.call(Response.prototype);
      Response.prototype.clone = function () {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };
      Response.error = function () {
        var response = new Response(null, {
          status: 0,
          statusText: ''
        });
        response.type = 'error';
        return response;
      };
      var redirectStatuses = [301, 302, 303, 307, 308];
      Response.redirect = function (url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
          throw new RangeError('Invalid status code');
        }
        return new Response(null, {
          status: status,
          headers: {
            location: url
          }
        });
      };
      exports.DOMException = global.DOMException;
      try {
        new exports.DOMException();
      } catch (err) {
        exports.DOMException = function (message, name) {
          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
        };
        exports.DOMException.prototype = Object.create(Error.prototype);
        exports.DOMException.prototype.constructor = exports.DOMException;
      }
      function fetch(input, init) {
        return new Promise(function (resolve, reject) {
          var request = new Request(input, init);
          if (request.signal && request.signal.aborted) {
            return reject(new exports.DOMException('Aborted', 'AbortError'));
          }
          var xhr = new XMLHttpRequest();
          function abortXhr() {
            xhr.abort();
          }
          xhr.onload = function () {
            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || '')
            };
            options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
            var body = 'response' in xhr ? xhr.response : xhr.responseText;
            setTimeout(function () {
              resolve(new Response(body, options));
            }, 0);
          };
          xhr.onerror = function () {
            setTimeout(function () {
              reject(new TypeError('Network request failed'));
            }, 0);
          };
          xhr.ontimeout = function () {
            setTimeout(function () {
              reject(new TypeError('Network request failed'));
            }, 0);
          };
          xhr.onabort = function () {
            setTimeout(function () {
              reject(new exports.DOMException('Aborted', 'AbortError'));
            }, 0);
          };
          function fixUrl(url) {
            try {
              return url === '' && global.location.href ? global.location.href : url;
            } catch (e) {
              return url;
            }
          }
          xhr.open(request.method, fixUrl(request.url), true);
          if (request.credentials === 'include') {
            xhr.withCredentials = true;
          } else if (request.credentials === 'omit') {
            xhr.withCredentials = false;
          }
          if ('responseType' in xhr) {
            if (support.blob) {
              xhr.responseType = 'blob';
            } else if (support.arrayBuffer && request.headers.get('Content-Type') && request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1) {
              xhr.responseType = 'arraybuffer';
            }
          }
          if (init && _typeof(init.headers) === 'object' && !(init.headers instanceof Headers)) {
            Object.getOwnPropertyNames(init.headers).forEach(function (name) {
              xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
            });
          } else {
            request.headers.forEach(function (value, name) {
              xhr.setRequestHeader(name, value);
            });
          }
          if (request.signal) {
            request.signal.addEventListener('abort', abortXhr);
            xhr.onreadystatechange = function () {
              // DONE (success or failure)
              if (xhr.readyState === 4) {
                request.signal.removeEventListener('abort', abortXhr);
              }
            };
          }
          xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
        });
      }
      fetch.polyfill = true;
      if (!global.fetch) {
        global.fetch = fetch;
        global.Headers = Headers;
        global.Request = Request;
        global.Response = Response;
      }
      exports.Headers = Headers;
      exports.Request = Request;
      exports.Response = Response;
      exports.fetch = fetch;
      return exports;
    }({});
  })(__globalThis__);
  // This is a ponyfill, so...
  __globalThis__.fetch.ponyfill = true;
  delete __globalThis__.fetch.polyfill;
  // Choose between native implementation (__global__) or custom implementation (__globalThis__)
  var ctx = __global__.fetch ? __global__ : __globalThis__;
  exports = ctx.fetch; // To enable: import fetch from 'cross-fetch'
  exports["default"] = ctx.fetch; // For TypeScript consumers without esModuleInterop.
  exports.fetch = ctx.fetch; // To enable: import {fetch} from 'cross-fetch'
  exports.Headers = ctx.Headers;
  exports.Request = ctx.Request;
  exports.Response = ctx.Response;
  module.exports = exports;
})(browserPonyfill$1, browserPonyfill$1.exports);
var browserPonyfillExports = browserPonyfill$1.exports;
var e = /*@__PURE__*/getDefaultExportFromCjs(browserPonyfillExports);

var browser$1 = {exports: {}};

var ms$1;
var hasRequiredMs;
function requireMs() {
  if (hasRequiredMs) return ms$1;
  hasRequiredMs = 1;
  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var w = d * 7;
  var y = d * 365.25;

  /**
   * Parse or format the given `val`.
   *
   * Options:
   *
   *  - `long` verbose formatting [false]
   *
   * @param {String|Number} val
   * @param {Object} [options]
   * @throws {Error} throw an error if val is not a non-empty string or a number
   * @return {String|Number}
   * @api public
   */

  ms$1 = function ms(val, options) {
    options = options || {};
    var type = _typeof(val);
    if (type === 'string' && val.length > 0) {
      return parse(val);
    } else if (type === 'number' && isFinite(val)) {
      return options["long"] ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
  };

  /**
   * Parse the given `str` and return milliseconds.
   *
   * @param {String} str
   * @return {Number}
   * @api private
   */

  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y;
      case 'weeks':
      case 'week':
      case 'w':
        return n * w;
      case 'days':
      case 'day':
      case 'd':
        return n * d;
      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h;
      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m;
      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s;
      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n;
      default:
        return undefined;
    }
  }

  /**
   * Short format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */

  function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
      return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
      return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
      return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
  }

  /**
   * Long format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */

  function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
      return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
      return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
      return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
  }

  /**
   * Pluralization helper.
   */

  function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
  }
  return ms$1;
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
  createDebug.debug = createDebug;
  createDebug["default"] = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = requireMs();
  createDebug.destroy = destroy;
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });

  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];

  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */
  createDebug.formatters = {};

  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */
  function selectColor(namespace) {
    var hash = 0;
    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }
  createDebug.selectColor = selectColor;

  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */
  function createDebug(namespace) {
    var prevTime;
    var enableOverride = null;
    var namespacesCache;
    var enabledCache;
    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      // Disabled?
      if (!debug.enabled) {
        return;
      }
      var self = debug;

      // Set `diff` timestamp
      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);
      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      }

      // Apply any `formatters` transformations
      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return '%';
        }
        index++;
        var formatter = createDebug.formatters[format];
        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val);

          // Now we need to remove `args[index]` since it's inlined in the `format`
          args.splice(index, 1);
          index--;
        }
        return match;
      });

      // Apply env-specific formatting (colors, etc.)
      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }
    debug.namespace = namespace;
    debug.useColors = createDebug.useColors();
    debug.color = createDebug.selectColor(namespace);
    debug.extend = extend;
    debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    Object.defineProperty(debug, 'enabled', {
      enumerable: true,
      configurable: false,
      get: function get() {
        if (enableOverride !== null) {
          return enableOverride;
        }
        if (namespacesCache !== createDebug.namespaces) {
          namespacesCache = createDebug.namespaces;
          enabledCache = createDebug.enabled(namespace);
        }
        return enabledCache;
      },
      set: function set(v) {
        enableOverride = v;
      }
    });

    // Env-specific initialization logic for debug instances
    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }
    return debug;
  }
  function extend(namespace, delimiter) {
    var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }

  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */
  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.namespaces = namespaces;
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;
    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }
      namespaces = split[i].replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }

  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */
  function disable() {
    var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
      return '-' + namespace;
    }))).join(',');
    createDebug.enable('');
    return namespaces;
  }

  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */
  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }
    var i;
    var len;
    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }

  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */
  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }

  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */
  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }
    return val;
  }

  /**
  * XXX DO NOT USE. This is a temporary stub function.
  * XXX It WILL be removed in the next major release.
  */
  function destroy() {
    console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
  }
  createDebug.enable(createDebug.load());
  return createDebug;
}
var common = setup;
var common$1 = /*@__PURE__*/getDefaultExportFromCjs(common);

/* eslint-env browser */
var browser = browser$1.exports;
(function (module, exports) {
  /**
   * This is the web browser implementation of `debug()`.
   */

  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = localstorage();
  exports.destroy = function () {
    var warned = false;
    return function () {
      if (!warned) {
        warned = true;
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
      }
    };
  }();

  /**
   * Colors.
   */

  exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];

  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */

  // eslint-disable-next-line complexity
  function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
      return true;
    }

    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    }
    var m;

    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
    // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
    // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 ||
    // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }

  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */

  function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
      return;
    }
    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');

    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function (match) {
      if (match === '%%') {
        return;
      }
      index++;
      if (match === '%c') {
        // We only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }

  /**
   * Invokes `console.debug()` when available.
   * No-op when `console.debug` is not a "function".
   * If `console.debug` is not available, falls back
   * to `console.log`.
   *
   * @api public
   */
  exports.log = console.debug || console.log || function () {};

  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */
  function save(namespaces) {
    try {
      if (namespaces) {
        exports.storage.setItem('debug', namespaces);
      } else {
        exports.storage.removeItem('debug');
      }
    } catch (error) {
      // Swallow
      // XXX (@Qix-) should we be logging these?
    }
  }

  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */
  function load() {
    var r;
    try {
      r = exports.storage.getItem('debug');
    } catch (error) {
      // Swallow
      // XXX (@Qix-) should we be logging these?
    }

    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
      r = process.env.DEBUG;
    }
    return r;
  }

  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */

  function localstorage() {
    try {
      // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
      // The Browser also has localStorage in the global context.
      return localStorage;
    } catch (error) {
      // Swallow
      // XXX (@Qix-) should we be logging these?
    }
  }
  module.exports = common(exports);
  var formatters = module.exports.formatters;

  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */

  formatters.j = function (v) {
    try {
      return JSON.stringify(v);
    } catch (error) {
      return '[UnexpectedJSONParseError]: ' + error.message;
    }
  };
})(browser$1, browser$1.exports);
var browserExports = browser$1.exports;
var t = /*@__PURE__*/getDefaultExportFromCjs(browserExports);

var eventemitter2$1 = {exports: {}};

var eventemitter2 = eventemitter2$1.exports;
(function (module, exports) {
  ;
  !function (undefined$1) {
    var hasOwnProperty = Object.hasOwnProperty;
    var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
      return Object.prototype.toString.call(obj) === "[object Array]";
    };
    var defaultMaxListeners = 10;
    var nextTickSupported = (typeof process === "undefined" ? "undefined" : _typeof(process)) == 'object' && typeof process.nextTick == 'function';
    var symbolsSupported = typeof Symbol === 'function';
    var reflectSupported = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object';
    var setImmediateSupported = typeof setImmediate === 'function';
    var _setImmediate = setImmediateSupported ? setImmediate : setTimeout;
    var ownKeys = symbolsSupported ? reflectSupported && typeof Reflect.ownKeys === 'function' ? Reflect.ownKeys : function (obj) {
      var arr = Object.getOwnPropertyNames(obj);
      arr.push.apply(arr, Object.getOwnPropertySymbols(obj));
      return arr;
    } : Object.keys;
    function init() {
      this._events = {};
      if (this._conf) {
        configure.call(this, this._conf);
      }
    }
    function configure(conf) {
      if (conf) {
        this._conf = conf;
        conf.delimiter && (this.delimiter = conf.delimiter);
        if (conf.maxListeners !== undefined$1) {
          this._maxListeners = conf.maxListeners;
        }
        conf.wildcard && (this.wildcard = conf.wildcard);
        conf.newListener && (this._newListener = conf.newListener);
        conf.removeListener && (this._removeListener = conf.removeListener);
        conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);
        conf.ignoreErrors && (this.ignoreErrors = conf.ignoreErrors);
        if (this.wildcard) {
          this.listenerTree = {};
        }
      }
    }
    function logPossibleMemoryLeak(count, eventName) {
      var errorMsg = '(node) warning: possible EventEmitter memory ' + 'leak detected. ' + count + ' listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.';
      if (this.verboseMemoryLeak) {
        errorMsg += ' Event name: ' + eventName + '.';
      }
      if (typeof process !== 'undefined' && process.emitWarning) {
        var e = new Error(errorMsg);
        e.name = 'MaxListenersExceededWarning';
        e.emitter = this;
        e.count = count;
        process.emitWarning(e);
      } else {
        console.error(errorMsg);
        if (console.trace) {
          console.trace();
        }
      }
    }
    var toArray = function toArray(a, b, c) {
      var n = arguments.length;
      switch (n) {
        case 0:
          return [];
        case 1:
          return [a];
        case 2:
          return [a, b];
        case 3:
          return [a, b, c];
        default:
          var arr = new Array(n);
          while (n--) {
            arr[n] = arguments[n];
          }
          return arr;
      }
    };
    function toObject(keys, values) {
      var obj = {};
      var key;
      var len = keys.length;
      var valuesCount = values ? values.length : 0;
      for (var i = 0; i < len; i++) {
        key = keys[i];
        obj[key] = i < valuesCount ? values[i] : undefined$1;
      }
      return obj;
    }
    function TargetObserver(emitter, target, options) {
      this._emitter = emitter;
      this._target = target;
      this._listeners = {};
      this._listenersCount = 0;
      var on, off;
      if (options.on || options.off) {
        on = options.on;
        off = options.off;
      }
      if (target.addEventListener) {
        on = target.addEventListener;
        off = target.removeEventListener;
      } else if (target.addListener) {
        on = target.addListener;
        off = target.removeListener;
      } else if (target.on) {
        on = target.on;
        off = target.off;
      }
      if (!on && !off) {
        throw Error('target does not implement any known event API');
      }
      if (typeof on !== 'function') {
        throw TypeError('on method must be a function');
      }
      if (typeof off !== 'function') {
        throw TypeError('off method must be a function');
      }
      this._on = on;
      this._off = off;
      var _observers = emitter._observers;
      if (_observers) {
        _observers.push(this);
      } else {
        emitter._observers = [this];
      }
    }
    Object.assign(TargetObserver.prototype, {
      subscribe: function subscribe(event, localEvent, reducer) {
        var observer = this;
        var target = this._target;
        var emitter = this._emitter;
        var listeners = this._listeners;
        var handler = function handler() {
          var args = toArray.apply(null, arguments);
          var eventObj = {
            data: args,
            name: localEvent,
            original: event
          };
          if (reducer) {
            var result = reducer.call(target, eventObj);
            if (result !== false) {
              emitter.emit.apply(emitter, [eventObj.name].concat(args));
            }
            return;
          }
          emitter.emit.apply(emitter, [localEvent].concat(args));
        };
        if (listeners[event]) {
          throw Error('Event \'' + event + '\' is already listening');
        }
        this._listenersCount++;
        if (emitter._newListener && emitter._removeListener && !observer._onNewListener) {
          this._onNewListener = function (_event) {
            if (_event === localEvent && listeners[event] === null) {
              listeners[event] = handler;
              observer._on.call(target, event, handler);
            }
          };
          emitter.on('newListener', this._onNewListener);
          this._onRemoveListener = function (_event) {
            if (_event === localEvent && !emitter.hasListeners(_event) && listeners[event]) {
              listeners[event] = null;
              observer._off.call(target, event, handler);
            }
          };
          listeners[event] = null;
          emitter.on('removeListener', this._onRemoveListener);
        } else {
          listeners[event] = handler;
          observer._on.call(target, event, handler);
        }
      },
      unsubscribe: function unsubscribe(event) {
        var observer = this;
        var listeners = this._listeners;
        var emitter = this._emitter;
        var handler;
        var events;
        var off = this._off;
        var target = this._target;
        var i;
        if (event && typeof event !== 'string') {
          throw TypeError('event must be a string');
        }
        function clearRefs() {
          if (observer._onNewListener) {
            emitter.off('newListener', observer._onNewListener);
            emitter.off('removeListener', observer._onRemoveListener);
            observer._onNewListener = null;
            observer._onRemoveListener = null;
          }
          var index = findTargetIndex.call(emitter, observer);
          emitter._observers.splice(index, 1);
        }
        if (event) {
          handler = listeners[event];
          if (!handler) return;
          off.call(target, event, handler);
          delete listeners[event];
          if (! --this._listenersCount) {
            clearRefs();
          }
        } else {
          events = ownKeys(listeners);
          i = events.length;
          while (i-- > 0) {
            event = events[i];
            off.call(target, event, listeners[event]);
          }
          this._listeners = {};
          this._listenersCount = 0;
          clearRefs();
        }
      }
    });
    function resolveOptions(options, schema, reducers, allowUnknown) {
      var computedOptions = Object.assign({}, schema);
      if (!options) return computedOptions;
      if (_typeof(options) !== 'object') {
        throw TypeError('options must be an object');
      }
      var keys = Object.keys(options);
      var length = keys.length;
      var option, value;
      var reducer;
      function reject(reason) {
        throw Error('Invalid "' + option + '" option value' + (reason ? '. Reason: ' + reason : ''));
      }
      for (var i = 0; i < length; i++) {
        option = keys[i];
        if (!allowUnknown && !hasOwnProperty.call(schema, option)) {
          throw Error('Unknown "' + option + '" option');
        }
        value = options[option];
        if (value !== undefined$1) {
          reducer = reducers[option];
          computedOptions[option] = reducer ? reducer(value, reject) : value;
        }
      }
      return computedOptions;
    }
    function constructorReducer(value, reject) {
      if (typeof value !== 'function' || !value.hasOwnProperty('prototype')) {
        reject('value must be a constructor');
      }
      return value;
    }
    function makeTypeReducer(types) {
      var message = 'value must be type of ' + types.join('|');
      var len = types.length;
      var firstType = types[0];
      var secondType = types[1];
      if (len === 1) {
        return function (v, reject) {
          if (_typeof(v) === firstType) {
            return v;
          }
          reject(message);
        };
      }
      if (len === 2) {
        return function (v, reject) {
          var kind = _typeof(v);
          if (kind === firstType || kind === secondType) return v;
          reject(message);
        };
      }
      return function (v, reject) {
        var kind = _typeof(v);
        var i = len;
        while (i-- > 0) {
          if (kind === types[i]) return v;
        }
        reject(message);
      };
    }
    var functionReducer = makeTypeReducer(['function']);
    var objectFunctionReducer = makeTypeReducer(['object', 'function']);
    function makeCancelablePromise(Promise, executor, options) {
      var isCancelable;
      var callbacks;
      var timer = 0;
      var subscriptionClosed;
      var promise = new Promise(function (resolve, reject, onCancel) {
        options = resolveOptions(options, {
          timeout: 0,
          overload: false
        }, {
          timeout: function timeout(value, reject) {
            value *= 1;
            if (typeof value !== 'number' || value < 0 || !Number.isFinite(value)) {
              reject('timeout must be a positive number');
            }
            return value;
          }
        });
        isCancelable = !options.overload && typeof Promise.prototype.cancel === 'function' && typeof onCancel === 'function';
        function cleanup() {
          if (callbacks) {
            callbacks = null;
          }
          if (timer) {
            clearTimeout(timer);
            timer = 0;
          }
        }
        var _resolve = function _resolve(value) {
          cleanup();
          resolve(value);
        };
        var _reject = function _reject(err) {
          cleanup();
          reject(err);
        };
        if (isCancelable) {
          executor(_resolve, _reject, onCancel);
        } else {
          callbacks = [function (reason) {
            _reject(reason || Error('canceled'));
          }];
          executor(_resolve, _reject, function (cb) {
            if (subscriptionClosed) {
              throw Error('Unable to subscribe on cancel event asynchronously');
            }
            if (typeof cb !== 'function') {
              throw TypeError('onCancel callback must be a function');
            }
            callbacks.push(cb);
          });
          subscriptionClosed = true;
        }
        if (options.timeout > 0) {
          timer = setTimeout(function () {
            var reason = Error('timeout');
            reason.code = 'ETIMEDOUT';
            timer = 0;
            promise.cancel(reason);
            reject(reason);
          }, options.timeout);
        }
      });
      if (!isCancelable) {
        promise.cancel = function (reason) {
          if (!callbacks) {
            return;
          }
          var length = callbacks.length;
          for (var i = 1; i < length; i++) {
            callbacks[i](reason);
          }
          // internal callback to reject the promise
          callbacks[0](reason);
          callbacks = null;
        };
      }
      return promise;
    }
    function findTargetIndex(observer) {
      var observers = this._observers;
      if (!observers) {
        return -1;
      }
      var len = observers.length;
      for (var i = 0; i < len; i++) {
        if (observers[i]._target === observer) return i;
      }
      return -1;
    }

    // Attention, function return type now is array, always !
    // It has zero elements if no any matches found and one or more
    // elements (leafs) if there are matches
    //
    function searchListenerTree(handlers, type, tree, i, typeLength) {
      if (!tree) {
        return null;
      }
      if (i === 0) {
        var kind = _typeof(type);
        if (kind === 'string') {
          var ns,
            n,
            l = 0,
            j = 0,
            delimiter = this.delimiter,
            dl = delimiter.length;
          if ((n = type.indexOf(delimiter)) !== -1) {
            ns = new Array(5);
            do {
              ns[l++] = type.slice(j, n);
              j = n + dl;
            } while ((n = type.indexOf(delimiter, j)) !== -1);
            ns[l++] = type.slice(j);
            type = ns;
            typeLength = l;
          } else {
            type = [type];
            typeLength = 1;
          }
        } else if (kind === 'object') {
          typeLength = type.length;
        } else {
          type = [type];
          typeLength = 1;
        }
      }
      var listeners = null,
        branch,
        xTree,
        xxTree,
        isolatedBranch,
        endReached,
        currentType = type[i],
        nextType = type[i + 1],
        branches,
        _listeners;
      if (i === typeLength) {
        //
        // If at the end of the event(s) list and the tree has listeners
        // invoke those listeners.
        //

        if (tree._listeners) {
          if (typeof tree._listeners === 'function') {
            handlers && handlers.push(tree._listeners);
            listeners = [tree];
          } else {
            handlers && handlers.push.apply(handlers, tree._listeners);
            listeners = [tree];
          }
        }
      } else {
        if (currentType === '*') {
          //
          // If the event emitted is '*' at this part
          // or there is a concrete match at this patch
          //
          branches = ownKeys(tree);
          n = branches.length;
          while (n-- > 0) {
            branch = branches[n];
            if (branch !== '_listeners') {
              _listeners = searchListenerTree(handlers, type, tree[branch], i + 1, typeLength);
              if (_listeners) {
                if (listeners) {
                  listeners.push.apply(listeners, _listeners);
                } else {
                  listeners = _listeners;
                }
              }
            }
          }
          return listeners;
        } else if (currentType === '**') {
          endReached = i + 1 === typeLength || i + 2 === typeLength && nextType === '*';
          if (endReached && tree._listeners) {
            // The next element has a _listeners, add it to the handlers.
            listeners = searchListenerTree(handlers, type, tree, typeLength, typeLength);
          }
          branches = ownKeys(tree);
          n = branches.length;
          while (n-- > 0) {
            branch = branches[n];
            if (branch !== '_listeners') {
              if (branch === '*' || branch === '**') {
                if (tree[branch]._listeners && !endReached) {
                  _listeners = searchListenerTree(handlers, type, tree[branch], typeLength, typeLength);
                  if (_listeners) {
                    if (listeners) {
                      listeners.push.apply(listeners, _listeners);
                    } else {
                      listeners = _listeners;
                    }
                  }
                }
                _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
              } else if (branch === nextType) {
                _listeners = searchListenerTree(handlers, type, tree[branch], i + 2, typeLength);
              } else {
                // No match on this one, shift into the tree but not in the type array.
                _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
              }
              if (_listeners) {
                if (listeners) {
                  listeners.push.apply(listeners, _listeners);
                } else {
                  listeners = _listeners;
                }
              }
            }
          }
          return listeners;
        } else if (tree[currentType]) {
          listeners = searchListenerTree(handlers, type, tree[currentType], i + 1, typeLength);
        }
      }
      xTree = tree['*'];
      if (xTree) {
        //
        // If the listener tree will allow any match for this part,
        // then recursively explore all branches of the tree
        //
        searchListenerTree(handlers, type, xTree, i + 1, typeLength);
      }
      xxTree = tree['**'];
      if (xxTree) {
        if (i < typeLength) {
          if (xxTree._listeners) {
            // If we have a listener on a '**', it will catch all, so add its handler.
            searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
          }

          // Build arrays of matching next branches and others.
          branches = ownKeys(xxTree);
          n = branches.length;
          while (n-- > 0) {
            branch = branches[n];
            if (branch !== '_listeners') {
              if (branch === nextType) {
                // We know the next element will match, so jump twice.
                searchListenerTree(handlers, type, xxTree[branch], i + 2, typeLength);
              } else if (branch === currentType) {
                // Current node matches, move into the tree.
                searchListenerTree(handlers, type, xxTree[branch], i + 1, typeLength);
              } else {
                isolatedBranch = {};
                isolatedBranch[branch] = xxTree[branch];
                searchListenerTree(handlers, type, {
                  '**': isolatedBranch
                }, i + 1, typeLength);
              }
            }
          }
        } else if (xxTree._listeners) {
          // We have reached the end and still on a '**'
          searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
        } else if (xxTree['*'] && xxTree['*']._listeners) {
          searchListenerTree(handlers, type, xxTree['*'], typeLength, typeLength);
        }
      }
      return listeners;
    }
    function growListenerTree(type, listener, prepend) {
      var len = 0,
        j = 0,
        i,
        delimiter = this.delimiter,
        dl = delimiter.length,
        ns;
      if (typeof type === 'string') {
        if ((i = type.indexOf(delimiter)) !== -1) {
          ns = new Array(5);
          do {
            ns[len++] = type.slice(j, i);
            j = i + dl;
          } while ((i = type.indexOf(delimiter, j)) !== -1);
          ns[len++] = type.slice(j);
        } else {
          ns = [type];
          len = 1;
        }
      } else {
        ns = type;
        len = type.length;
      }

      //
      // Looks for two consecutive '**', if so, don't add the event at all.
      //
      if (len > 1) {
        for (i = 0; i + 1 < len; i++) {
          if (ns[i] === '**' && ns[i + 1] === '**') {
            return;
          }
        }
      }
      var tree = this.listenerTree,
        name;
      for (i = 0; i < len; i++) {
        name = ns[i];
        tree = tree[name] || (tree[name] = {});
        if (i === len - 1) {
          if (!tree._listeners) {
            tree._listeners = listener;
          } else {
            if (typeof tree._listeners === 'function') {
              tree._listeners = [tree._listeners];
            }
            if (prepend) {
              tree._listeners.unshift(listener);
            } else {
              tree._listeners.push(listener);
            }
            if (!tree._listeners.warned && this._maxListeners > 0 && tree._listeners.length > this._maxListeners) {
              tree._listeners.warned = true;
              logPossibleMemoryLeak.call(this, tree._listeners.length, name);
            }
          }
          return true;
        }
      }
      return true;
    }
    function collectTreeEvents(tree, events, root, asArray) {
      var branches = ownKeys(tree);
      var i = branches.length;
      var branch, branchName, path;
      var hasListeners = tree['_listeners'];
      var isArrayPath;
      while (i-- > 0) {
        branchName = branches[i];
        branch = tree[branchName];
        if (branchName === '_listeners') {
          path = root;
        } else {
          path = root ? root.concat(branchName) : [branchName];
        }
        isArrayPath = asArray || _typeof(branchName) === 'symbol';
        hasListeners && events.push(isArrayPath ? path : path.join(this.delimiter));
        if (_typeof(branch) === 'object') {
          collectTreeEvents.call(this, branch, events, path, isArrayPath);
        }
      }
      return events;
    }
    function recursivelyGarbageCollect(root) {
      var keys = ownKeys(root);
      var i = keys.length;
      var obj, key, flag;
      while (i-- > 0) {
        key = keys[i];
        obj = root[key];
        if (obj) {
          flag = true;
          if (key !== '_listeners' && !recursivelyGarbageCollect(obj)) {
            delete root[key];
          }
        }
      }
      return flag;
    }
    function Listener(emitter, event, listener) {
      this.emitter = emitter;
      this.event = event;
      this.listener = listener;
    }
    Listener.prototype.off = function () {
      this.emitter.off(this.event, this.listener);
      return this;
    };
    function setupListener(event, listener, options) {
      if (options === true) {
        promisify = true;
      } else if (options === false) {
        async = true;
      } else {
        if (!options || _typeof(options) !== 'object') {
          throw TypeError('options should be an object or true');
        }
        var async = options.async;
        var promisify = options.promisify;
        var nextTick = options.nextTick;
        var objectify = options.objectify;
      }
      if (async || nextTick || promisify) {
        var _listener = listener;
        var _origin = listener._origin || listener;
        if (nextTick && !nextTickSupported) {
          throw Error('process.nextTick is not supported');
        }
        if (promisify === undefined$1) {
          promisify = listener.constructor.name === 'AsyncFunction';
        }
        listener = function listener() {
          var args = arguments;
          var context = this;
          var event = this.event;
          return promisify ? nextTick ? Promise.resolve() : new Promise(function (resolve) {
            _setImmediate(resolve);
          }).then(function () {
            context.event = event;
            return _listener.apply(context, args);
          }) : (nextTick ? process.nextTick : _setImmediate)(function () {
            context.event = event;
            _listener.apply(context, args);
          });
        };
        listener._async = true;
        listener._origin = _origin;
      }
      return [listener, objectify ? new Listener(this, event, listener) : this];
    }
    function EventEmitter(conf) {
      this._events = {};
      this._newListener = false;
      this._removeListener = false;
      this.verboseMemoryLeak = false;
      configure.call(this, conf);
    }
    EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property

    EventEmitter.prototype.listenTo = function (target, events, options) {
      if (_typeof(target) !== 'object') {
        throw TypeError('target musts be an object');
      }
      var emitter = this;
      options = resolveOptions(options, {
        on: undefined$1,
        off: undefined$1,
        reducers: undefined$1
      }, {
        on: functionReducer,
        off: functionReducer,
        reducers: objectFunctionReducer
      });
      function listen(events) {
        if (_typeof(events) !== 'object') {
          throw TypeError('events must be an object');
        }
        var reducers = options.reducers;
        var index = findTargetIndex.call(emitter, target);
        var observer;
        if (index === -1) {
          observer = new TargetObserver(emitter, target, options);
        } else {
          observer = emitter._observers[index];
        }
        var keys = ownKeys(events);
        var len = keys.length;
        var event;
        var isSingleReducer = typeof reducers === 'function';
        for (var i = 0; i < len; i++) {
          event = keys[i];
          observer.subscribe(event, events[event] || event, isSingleReducer ? reducers : reducers && reducers[event]);
        }
      }
      isArray(events) ? listen(toObject(events)) : typeof events === 'string' ? listen(toObject(events.split(/\s+/))) : listen(events);
      return this;
    };
    EventEmitter.prototype.stopListeningTo = function (target, event) {
      var observers = this._observers;
      if (!observers) {
        return false;
      }
      var i = observers.length;
      var observer;
      var matched = false;
      if (target && _typeof(target) !== 'object') {
        throw TypeError('target should be an object');
      }
      while (i-- > 0) {
        observer = observers[i];
        if (!target || observer._target === target) {
          observer.unsubscribe(event);
          matched = true;
        }
      }
      return matched;
    };

    // By default EventEmitters will print a warning if more than
    // 10 listeners are added to it. This is a useful default which
    // helps finding memory leaks.
    //
    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.

    EventEmitter.prototype.delimiter = '.';
    EventEmitter.prototype.setMaxListeners = function (n) {
      if (n !== undefined$1) {
        this._maxListeners = n;
        if (!this._conf) this._conf = {};
        this._conf.maxListeners = n;
      }
    };
    EventEmitter.prototype.getMaxListeners = function () {
      return this._maxListeners;
    };
    EventEmitter.prototype.event = '';
    EventEmitter.prototype.once = function (event, fn, options) {
      return this._once(event, fn, false, options);
    };
    EventEmitter.prototype.prependOnceListener = function (event, fn, options) {
      return this._once(event, fn, true, options);
    };
    EventEmitter.prototype._once = function (event, fn, prepend, options) {
      return this._many(event, 1, fn, prepend, options);
    };
    EventEmitter.prototype.many = function (event, ttl, fn, options) {
      return this._many(event, ttl, fn, false, options);
    };
    EventEmitter.prototype.prependMany = function (event, ttl, fn, options) {
      return this._many(event, ttl, fn, true, options);
    };
    EventEmitter.prototype._many = function (event, ttl, fn, prepend, options) {
      var self = this;
      if (typeof fn !== 'function') {
        throw new Error('many only accepts instances of Function');
      }
      function listener() {
        if (--ttl === 0) {
          self.off(event, listener);
        }
        return fn.apply(this, arguments);
      }
      listener._origin = fn;
      return this._on(event, listener, prepend, options);
    };
    EventEmitter.prototype.emit = function () {
      if (!this._events && !this._all) {
        return false;
      }
      this._events || init.call(this);
      var type = arguments[0],
        ns,
        wildcard = this.wildcard;
      var args, l, i, j, containsSymbol;
      if (type === 'newListener' && !this._newListener) {
        if (!this._events.newListener) {
          return false;
        }
      }
      if (wildcard) {
        ns = type;
        if (type !== 'newListener' && type !== 'removeListener') {
          if (_typeof(type) === 'object') {
            l = type.length;
            if (symbolsSupported) {
              for (i = 0; i < l; i++) {
                if (_typeof(type[i]) === 'symbol') {
                  containsSymbol = true;
                  break;
                }
              }
            }
            if (!containsSymbol) {
              type = type.join(this.delimiter);
            }
          }
        }
      }
      var al = arguments.length;
      var handler;
      if (this._all && this._all.length) {
        handler = this._all.slice();
        for (i = 0, l = handler.length; i < l; i++) {
          this.event = type;
          switch (al) {
            case 1:
              handler[i].call(this, type);
              break;
            case 2:
              handler[i].call(this, type, arguments[1]);
              break;
            case 3:
              handler[i].call(this, type, arguments[1], arguments[2]);
              break;
            default:
              handler[i].apply(this, arguments);
          }
        }
      }
      if (wildcard) {
        handler = [];
        searchListenerTree.call(this, handler, ns, this.listenerTree, 0, l);
      } else {
        handler = this._events[type];
        if (typeof handler === 'function') {
          this.event = type;
          switch (al) {
            case 1:
              handler.call(this);
              break;
            case 2:
              handler.call(this, arguments[1]);
              break;
            case 3:
              handler.call(this, arguments[1], arguments[2]);
              break;
            default:
              args = new Array(al - 1);
              for (j = 1; j < al; j++) args[j - 1] = arguments[j];
              handler.apply(this, args);
          }
          return true;
        } else if (handler) {
          // need to make copy of handlers because list can change in the middle
          // of emit call
          handler = handler.slice();
        }
      }
      if (handler && handler.length) {
        if (al > 3) {
          args = new Array(al - 1);
          for (j = 1; j < al; j++) args[j - 1] = arguments[j];
        }
        for (i = 0, l = handler.length; i < l; i++) {
          this.event = type;
          switch (al) {
            case 1:
              handler[i].call(this);
              break;
            case 2:
              handler[i].call(this, arguments[1]);
              break;
            case 3:
              handler[i].call(this, arguments[1], arguments[2]);
              break;
            default:
              handler[i].apply(this, args);
          }
        }
        return true;
      } else if (!this.ignoreErrors && !this._all && type === 'error') {
        if (arguments[1] instanceof Error) {
          throw arguments[1]; // Unhandled 'error' event
        } else {
          throw new Error("Uncaught, unspecified 'error' event.");
        }
      }
      return !!this._all;
    };
    EventEmitter.prototype.emitAsync = function () {
      if (!this._events && !this._all) {
        return false;
      }
      this._events || init.call(this);
      var type = arguments[0],
        wildcard = this.wildcard,
        ns,
        containsSymbol;
      var args, l, i, j;
      if (type === 'newListener' && !this._newListener) {
        if (!this._events.newListener) {
          return Promise.resolve([false]);
        }
      }
      if (wildcard) {
        ns = type;
        if (type !== 'newListener' && type !== 'removeListener') {
          if (_typeof(type) === 'object') {
            l = type.length;
            if (symbolsSupported) {
              for (i = 0; i < l; i++) {
                if (_typeof(type[i]) === 'symbol') {
                  containsSymbol = true;
                  break;
                }
              }
            }
            if (!containsSymbol) {
              type = type.join(this.delimiter);
            }
          }
        }
      }
      var promises = [];
      var al = arguments.length;
      var handler;
      if (this._all) {
        for (i = 0, l = this._all.length; i < l; i++) {
          this.event = type;
          switch (al) {
            case 1:
              promises.push(this._all[i].call(this, type));
              break;
            case 2:
              promises.push(this._all[i].call(this, type, arguments[1]));
              break;
            case 3:
              promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
              break;
            default:
              promises.push(this._all[i].apply(this, arguments));
          }
        }
      }
      if (wildcard) {
        handler = [];
        searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
      } else {
        handler = this._events[type];
      }
      if (typeof handler === 'function') {
        this.event = type;
        switch (al) {
          case 1:
            promises.push(handler.call(this));
            break;
          case 2:
            promises.push(handler.call(this, arguments[1]));
            break;
          case 3:
            promises.push(handler.call(this, arguments[1], arguments[2]));
            break;
          default:
            args = new Array(al - 1);
            for (j = 1; j < al; j++) args[j - 1] = arguments[j];
            promises.push(handler.apply(this, args));
        }
      } else if (handler && handler.length) {
        handler = handler.slice();
        if (al > 3) {
          args = new Array(al - 1);
          for (j = 1; j < al; j++) args[j - 1] = arguments[j];
        }
        for (i = 0, l = handler.length; i < l; i++) {
          this.event = type;
          switch (al) {
            case 1:
              promises.push(handler[i].call(this));
              break;
            case 2:
              promises.push(handler[i].call(this, arguments[1]));
              break;
            case 3:
              promises.push(handler[i].call(this, arguments[1], arguments[2]));
              break;
            default:
              promises.push(handler[i].apply(this, args));
          }
        }
      } else if (!this.ignoreErrors && !this._all && type === 'error') {
        if (arguments[1] instanceof Error) {
          return Promise.reject(arguments[1]); // Unhandled 'error' event
        } else {
          return Promise.reject("Uncaught, unspecified 'error' event.");
        }
      }
      return Promise.all(promises);
    };
    EventEmitter.prototype.on = function (type, listener, options) {
      return this._on(type, listener, false, options);
    };
    EventEmitter.prototype.prependListener = function (type, listener, options) {
      return this._on(type, listener, true, options);
    };
    EventEmitter.prototype.onAny = function (fn) {
      return this._onAny(fn, false);
    };
    EventEmitter.prototype.prependAny = function (fn) {
      return this._onAny(fn, true);
    };
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prototype._onAny = function (fn, prepend) {
      if (typeof fn !== 'function') {
        throw new Error('onAny only accepts instances of Function');
      }
      if (!this._all) {
        this._all = [];
      }

      // Add the function to the event listener collection.
      if (prepend) {
        this._all.unshift(fn);
      } else {
        this._all.push(fn);
      }
      return this;
    };
    EventEmitter.prototype._on = function (type, listener, prepend, options) {
      if (typeof type === 'function') {
        this._onAny(type, listener);
        return this;
      }
      if (typeof listener !== 'function') {
        throw new Error('on only accepts instances of Function');
      }
      this._events || init.call(this);
      var returnValue = this,
        temp;
      if (options !== undefined$1) {
        temp = setupListener.call(this, type, listener, options);
        listener = temp[0];
        returnValue = temp[1];
      }

      // To avoid recursion in the case that type == "newListeners"! Before
      // adding it to the listeners, first emit "newListeners".
      if (this._newListener) {
        this.emit('newListener', type, listener);
      }
      if (this.wildcard) {
        growListenerTree.call(this, type, listener, prepend);
        return returnValue;
      }
      if (!this._events[type]) {
        // Optimize the case of one listener. Don't need the extra array object.
        this._events[type] = listener;
      } else {
        if (typeof this._events[type] === 'function') {
          // Change to array.
          this._events[type] = [this._events[type]];
        }

        // If we've already got an array, just add
        if (prepend) {
          this._events[type].unshift(listener);
        } else {
          this._events[type].push(listener);
        }

        // Check for listener leak
        if (!this._events[type].warned && this._maxListeners > 0 && this._events[type].length > this._maxListeners) {
          this._events[type].warned = true;
          logPossibleMemoryLeak.call(this, this._events[type].length, type);
        }
      }
      return returnValue;
    };
    EventEmitter.prototype.off = function (type, listener) {
      if (typeof listener !== 'function') {
        throw new Error('removeListener only takes instances of Function');
      }
      var handlers,
        leafs = [];
      if (this.wildcard) {
        var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
        leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
        if (!leafs) return this;
      } else {
        // does not use listeners(), so no side effect of creating _events[type]
        if (!this._events[type]) return this;
        handlers = this._events[type];
        leafs.push({
          _listeners: handlers
        });
      }
      for (var iLeaf = 0; iLeaf < leafs.length; iLeaf++) {
        var leaf = leafs[iLeaf];
        handlers = leaf._listeners;
        if (isArray(handlers)) {
          var position = -1;
          for (var i = 0, length = handlers.length; i < length; i++) {
            if (handlers[i] === listener || handlers[i].listener && handlers[i].listener === listener || handlers[i]._origin && handlers[i]._origin === listener) {
              position = i;
              break;
            }
          }
          if (position < 0) {
            continue;
          }
          if (this.wildcard) {
            leaf._listeners.splice(position, 1);
          } else {
            this._events[type].splice(position, 1);
          }
          if (handlers.length === 0) {
            if (this.wildcard) {
              delete leaf._listeners;
            } else {
              delete this._events[type];
            }
          }
          if (this._removeListener) this.emit("removeListener", type, listener);
          return this;
        } else if (handlers === listener || handlers.listener && handlers.listener === listener || handlers._origin && handlers._origin === listener) {
          if (this.wildcard) {
            delete leaf._listeners;
          } else {
            delete this._events[type];
          }
          if (this._removeListener) this.emit("removeListener", type, listener);
        }
      }
      this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
      return this;
    };
    EventEmitter.prototype.offAny = function (fn) {
      var i = 0,
        l = 0,
        fns;
      if (fn && this._all && this._all.length > 0) {
        fns = this._all;
        for (i = 0, l = fns.length; i < l; i++) {
          if (fn === fns[i]) {
            fns.splice(i, 1);
            if (this._removeListener) this.emit("removeListenerAny", fn);
            return this;
          }
        }
      } else {
        fns = this._all;
        if (this._removeListener) {
          for (i = 0, l = fns.length; i < l; i++) this.emit("removeListenerAny", fns[i]);
        }
        this._all = [];
      }
      return this;
    };
    EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
    EventEmitter.prototype.removeAllListeners = function (type) {
      if (type === undefined$1) {
        !this._events || init.call(this);
        return this;
      }
      if (this.wildcard) {
        var leafs = searchListenerTree.call(this, null, type, this.listenerTree, 0),
          leaf,
          i;
        if (!leafs) return this;
        for (i = 0; i < leafs.length; i++) {
          leaf = leafs[i];
          leaf._listeners = null;
        }
        this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
      } else if (this._events) {
        this._events[type] = null;
      }
      return this;
    };
    EventEmitter.prototype.listeners = function (type) {
      var _events = this._events;
      var keys, listeners, allListeners;
      var i;
      var listenerTree;
      if (type === undefined$1) {
        if (this.wildcard) {
          throw Error('event name required for wildcard emitter');
        }
        if (!_events) {
          return [];
        }
        keys = ownKeys(_events);
        i = keys.length;
        allListeners = [];
        while (i-- > 0) {
          listeners = _events[keys[i]];
          if (typeof listeners === 'function') {
            allListeners.push(listeners);
          } else {
            allListeners.push.apply(allListeners, listeners);
          }
        }
        return allListeners;
      } else {
        if (this.wildcard) {
          listenerTree = this.listenerTree;
          if (!listenerTree) return [];
          var handlers = [];
          var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
          searchListenerTree.call(this, handlers, ns, listenerTree, 0);
          return handlers;
        }
        if (!_events) {
          return [];
        }
        listeners = _events[type];
        if (!listeners) {
          return [];
        }
        return typeof listeners === 'function' ? [listeners] : listeners;
      }
    };
    EventEmitter.prototype.eventNames = function (nsAsArray) {
      var _events = this._events;
      return this.wildcard ? collectTreeEvents.call(this, this.listenerTree, [], null, nsAsArray) : _events ? ownKeys(_events) : [];
    };
    EventEmitter.prototype.listenerCount = function (type) {
      return this.listeners(type).length;
    };
    EventEmitter.prototype.hasListeners = function (type) {
      if (this.wildcard) {
        var handlers = [];
        var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
        searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
        return handlers.length > 0;
      }
      var _events = this._events;
      var _all = this._all;
      return !!(_all && _all.length || _events && (type === undefined$1 ? ownKeys(_events).length : _events[type]));
    };
    EventEmitter.prototype.listenersAny = function () {
      if (this._all) {
        return this._all;
      } else {
        return [];
      }
    };
    EventEmitter.prototype.waitFor = function (event, options) {
      var self = this;
      var type = _typeof(options);
      if (type === 'number') {
        options = {
          timeout: options
        };
      } else if (type === 'function') {
        options = {
          filter: options
        };
      }
      options = resolveOptions(options, {
        timeout: 0,
        filter: undefined$1,
        handleError: false,
        Promise: Promise,
        overload: false
      }, {
        filter: functionReducer,
        Promise: constructorReducer
      });
      return makeCancelablePromise(options.Promise, function (resolve, reject, onCancel) {
        function listener() {
          var filter = options.filter;
          if (filter && !filter.apply(self, arguments)) {
            return;
          }
          self.off(event, listener);
          if (options.handleError) {
            var err = arguments[0];
            err ? reject(err) : resolve(toArray.apply(null, arguments).slice(1));
          } else {
            resolve(toArray.apply(null, arguments));
          }
        }
        onCancel(function () {
          self.off(event, listener);
        });
        self._on(event, listener, false);
      }, {
        timeout: options.timeout,
        overload: options.overload
      });
    };
    function once(emitter, name, options) {
      options = resolveOptions(options, {
        Promise: Promise,
        timeout: 0,
        overload: false
      }, {
        Promise: constructorReducer
      });
      var _Promise = options.Promise;
      return makeCancelablePromise(_Promise, function (resolve, reject, onCancel) {
        var handler;
        if (typeof emitter.addEventListener === 'function') {
          handler = function handler() {
            resolve(toArray.apply(null, arguments));
          };
          onCancel(function () {
            emitter.removeEventListener(name, handler);
          });
          emitter.addEventListener(name, handler, {
            once: true
          });
          return;
        }
        var eventListener = function eventListener() {
          errorListener && emitter.removeListener('error', errorListener);
          resolve(toArray.apply(null, arguments));
        };
        var errorListener;
        if (name !== 'error') {
          errorListener = function errorListener(err) {
            emitter.removeListener(name, eventListener);
            reject(err);
          };
          emitter.once('error', errorListener);
        }
        onCancel(function () {
          errorListener && emitter.removeListener('error', errorListener);
          emitter.removeListener(name, eventListener);
        });
        emitter.once(name, eventListener);
      }, {
        timeout: options.timeout,
        overload: options.overload
      });
    }
    var prototype = EventEmitter.prototype;
    Object.defineProperties(EventEmitter, {
      defaultMaxListeners: {
        get: function get() {
          return prototype._maxListeners;
        },
        set: function set(n) {
          if (typeof n !== 'number' || n < 0 || Number.isNaN(n)) {
            throw TypeError('n must be a non-negative number');
          }
          prototype._maxListeners = n;
        },
        enumerable: true
      },
      once: {
        value: once,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperties(prototype, {
      _maxListeners: {
        value: defaultMaxListeners,
        writable: true,
        configurable: true
      },
      _observers: {
        value: null,
        writable: true,
        configurable: true
      }
    });
    if (typeof undefined$1 === 'function' && undefined$1.amd) {
      // AMD. Register as an anonymous module.
      undefined$1(function () {
        return EventEmitter;
      });
    } else if ('object' === 'object') {
      // CommonJS
      module.exports = EventEmitter;
    } else {
      // global for any kind of environment.
      var _global = new Function('', 'return this')();
      _global.EventEmitter2 = EventEmitter;
    }
  }();
})(eventemitter2$1, eventemitter2$1.exports);
var eventemitter2Exports = eventemitter2$1.exports;
var n = /*@__PURE__*/getDefaultExportFromCjs(eventemitter2Exports);

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];
for (var i$1 = 0; i$1 < 256; ++i$1) {
  byteToHex.push((i$1 + 0x100).toString(16).substr(1));
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}

//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq; // Previous uuid creation time

var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || rng)();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.

  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval

  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested

  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }
  return buf || stringify(b);
}

function parse$1(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }
  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];
  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL$1 = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35 (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }
    if (typeof namespace === 'string') {
      namespace = parse$1(namespace);
    }
    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`

    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;
    if (buf) {
      offset = offset || 0;
      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return stringify(bytes);
  } // Function#name is not settable on some platforms (#270)

  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support

  generateUUID.DNS = DNS;
  generateUUID.URL = URL$1;
  return generateUUID;
}

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);
    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */

function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';
  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }
  return output;
}
/**
 * Calculate output length with padding and bit length
 */

function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */

function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */

function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));
  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }
  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */

function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */

function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */

function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var v3 = v35('v3', 0x30, md5);

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify(rnds);
}

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f$1(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
}
function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}
function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];
    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);
  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);
    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }
    M[_i] = arr;
  }
  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);
    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }
    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }
    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];
    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f$1(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }
  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var v5 = v35('v5', 0x50, sha1);

var nil = '00000000-0000-0000-0000-000000000000';

function version(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }
  return parseInt(uuid.substr(14, 1), 16);
}

var PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach(function (key) {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {
  type: "error",
  data: "parser error"
};

var withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
var isView$1 = function isView(obj) {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
  var type = _ref.type,
    data = _ref.data;
  if (withNativeBlob$1 && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  // plain string
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
  var fileReader = new FileReader();
  fileReader.onload = function () {
    var content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
function toArray(data) {
  if (data instanceof Uint8Array) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  } else {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
}
var TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (withNativeBlob$1 && packet.data instanceof Blob) {
    return packet.data.arrayBuffer().then(toArray).then(callback);
  } else if (withNativeArrayBuffer$2 && (packet.data instanceof ArrayBuffer || isView$1(packet.data))) {
    return callback(toArray(packet.data));
  }
  encodePacket(packet, false, function (encoded) {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder();
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}

// imported from https://github.com/socketio/base64-arraybuffer
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
  lookup$1[chars.charCodeAt(i)] = i;
}
var encode$1 = function encode(arraybuffer) {
  var bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = '';
  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + '=';
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + '==';
  }
  return base64;
};
var decode$1 = function decode(base64) {
  var bufferLength = base64.length * 0.75,
    len = base64.length,
    i,
    p = 0,
    encoded1,
    encoded2,
    encoded3,
    encoded4;
  if (base64[base64.length - 1] === '=') {
    bufferLength--;
    if (base64[base64.length - 2] === '=') {
      bufferLength--;
    }
  }
  var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup$1[base64.charCodeAt(i)];
    encoded2 = lookup$1[base64.charCodeAt(i + 1)];
    encoded3 = lookup$1[base64.charCodeAt(i + 2)];
    encoded4 = lookup$1[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

var withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
var decodePacket = function decodePacket(encodedPacket, binaryType) {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  var type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  var packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
  if (withNativeArrayBuffer$1) {
    var decoded = decode$1(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data: data
    }; // fallback for old browsers
  }
};
var mapBinary = function mapBinary(data, binaryType) {
  switch (binaryType) {
    case "blob":
      if (data instanceof Blob) {
        // from WebSocket + binaryType "blob"
        return data;
      } else {
        // from HTTP long-polling or WebTransport
        return new Blob([data]);
      }
    case "arraybuffer":
    default:
      if (data instanceof ArrayBuffer) {
        // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
        return data;
      } else {
        // from WebTransport (Uint8Array)
        return data.buffer;
      }
  }
};

var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
var encodePayload = function encodePayload(packets, callback) {
  // some packets may be added to the array while encoding, so the initial length must be saved
  var length = packets.length;
  var encodedPackets = new Array(length);
  var count = 0;
  packets.forEach(function (packet, i) {
    // force base64 encoding for binary packets
    encodePacket(packet, false, function (encodedPacket) {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = function decodePayload(encodedPayload, binaryType) {
  var encodedPackets = encodedPayload.split(SEPARATOR);
  var packets = [];
  for (var i = 0; i < encodedPackets.length; i++) {
    var decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
function createPacketEncoderStream() {
  return new TransformStream({
    transform: function transform(packet, controller) {
      encodePacketToBinary(packet, function (encodedPacket) {
        var payloadLength = encodedPacket.length;
        var header;
        // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
        if (payloadLength < 126) {
          header = new Uint8Array(1);
          new DataView(header.buffer).setUint8(0, payloadLength);
        } else if (payloadLength < 65536) {
          header = new Uint8Array(3);
          var view = new DataView(header.buffer);
          view.setUint8(0, 126);
          view.setUint16(1, payloadLength);
        } else {
          header = new Uint8Array(9);
          var _view = new DataView(header.buffer);
          _view.setUint8(0, 127);
          _view.setBigUint64(1, BigInt(payloadLength));
        }
        // first bit indicates whether the payload is plain text (0) or binary (1)
        if (packet.data && typeof packet.data !== "string") {
          header[0] |= 0x80;
        }
        controller.enqueue(header);
        controller.enqueue(encodedPacket);
      });
    }
  });
}
var TEXT_DECODER;
function totalLength(chunks) {
  return chunks.reduce(function (acc, chunk) {
    return acc + chunk.length;
  }, 0);
}
function concatChunks(chunks, size) {
  if (chunks[0].length === size) {
    return chunks.shift();
  }
  var buffer = new Uint8Array(size);
  var j = 0;
  for (var i = 0; i < size; i++) {
    buffer[i] = chunks[0][j++];
    if (j === chunks[0].length) {
      chunks.shift();
      j = 0;
    }
  }
  if (chunks.length && j < chunks[0].length) {
    chunks[0] = chunks[0].slice(j);
  }
  return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder();
  }
  var chunks = [];
  var state = 0 /* State.READ_HEADER */;
  var expectedLength = -1;
  var isBinary = false;
  return new TransformStream({
    transform: function transform(chunk, controller) {
      chunks.push(chunk);
      while (true) {
        if (state === 0 /* State.READ_HEADER */) {
          if (totalLength(chunks) < 1) {
            break;
          }
          var header = concatChunks(chunks, 1);
          isBinary = (header[0] & 0x80) === 0x80;
          expectedLength = header[0] & 0x7f;
          if (expectedLength < 126) {
            state = 3 /* State.READ_PAYLOAD */;
          } else if (expectedLength === 126) {
            state = 1 /* State.READ_EXTENDED_LENGTH_16 */;
          } else {
            state = 2 /* State.READ_EXTENDED_LENGTH_64 */;
          }
        } else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {
          if (totalLength(chunks) < 2) {
            break;
          }
          var headerArray = concatChunks(chunks, 2);
          expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
          state = 3 /* State.READ_PAYLOAD */;
        } else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {
          if (totalLength(chunks) < 8) {
            break;
          }
          var _headerArray = concatChunks(chunks, 8);
          var view = new DataView(_headerArray.buffer, _headerArray.byteOffset, _headerArray.length);
          var n = view.getUint32(0);
          if (n > Math.pow(2, 53 - 32) - 1) {
            // the maximum safe integer in JavaScript is 2^53 - 1
            controller.enqueue(ERROR_PACKET);
            break;
          }
          expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
          state = 3 /* State.READ_PAYLOAD */;
        } else {
          if (totalLength(chunks) < expectedLength) {
            break;
          }
          var data = concatChunks(chunks, expectedLength);
          controller.enqueue(decodePacket(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
          state = 0 /* State.READ_HEADER */;
        }
        if (expectedLength === 0 || expectedLength > maxPayload) {
          controller.enqueue(ERROR_PACKET);
          break;
        }
      }
    }
  });
}
var protocol$2 = 4;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }
  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
    callbacks = this._callbacks['$' + event];
  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }
  return this;
};

// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

var nextTick = function () {
  var isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return function (cb) {
      return Promise.resolve().then(cb);
    };
  } else {
    return function (cb, setTimeoutFn) {
      return setTimeoutFn(cb, 0);
    };
  }
}();
var globalThisShim = function () {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
}();
var defaultBinaryType = "arraybuffer";
function createCookieJar() {}

function pick(obj) {
  for (var _len = arguments.length, attr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    attr[_key - 1] = arguments[_key];
  }
  return attr.reduce(function (acc, k) {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
var BASE64_OVERHEAD = 1.33;
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  // arraybuffer or blob
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  var c = 0,
    length = 0;
  for (var i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i);
    if (c < 0x80) {
      length += 1;
    } else if (c < 0x800) {
      length += 2;
    } else if (c < 0xd800 || c >= 0xe000) {
      length += 3;
    } else {
      i++;
      length += 4;
    }
  }
  return length;
}
/**
 * Generates a random 8-characters string.
 */
function randomString() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}

// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
function encode(obj) {
  var str = '';
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }
  return str;
}
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */
function decode(qs) {
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

var TransportError = /*#__PURE__*/function (_Error) {
  function TransportError(reason, description, context) {
    var _this;
    _classCallCheck(this, TransportError);
    _this = _callSuper(this, TransportError, [reason]);
    _this.description = description;
    _this.context = context;
    _this.type = "TransportError";
    return _this;
  }
  _inherits(TransportError, _Error);
  return _createClass(TransportError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var Transport = /*#__PURE__*/function (_Emitter) {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  function Transport(opts) {
    var _this2;
    _classCallCheck(this, Transport);
    _this2 = _callSuper(this, Transport);
    _this2.writable = false;
    installTimerFunctions(_this2, opts);
    _this2.opts = opts;
    _this2.query = opts.query;
    _this2.socket = opts.socket;
    _this2.supportsBinary = !opts.forceBase64;
    return _this2;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  _inherits(Transport, _Emitter);
  return _createClass(Transport, [{
    key: "onError",
    value: function onError(reason, description, context) {
      _superPropGet(Transport, "emitReserved", this, 3)(["error", new TransportError(reason, description, context)]);
      return this;
    }
    /**
     * Opens the transport.
     */
  }, {
    key: "open",
    value: function open() {
      this.readyState = "opening";
      this.doOpen();
      return this;
    }
    /**
     * Closes the transport.
     */
  }, {
    key: "close",
    value: function close() {
      if (this.readyState === "opening" || this.readyState === "open") {
        this.doClose();
        this.onClose();
      }
      return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
  }, {
    key: "send",
    value: function send(packets) {
      if (this.readyState === "open") {
        this.write(packets);
      } else {
        // this might happen if the transport was silently closed in the beforeunload event handler
      }
    }
    /**
     * Called upon open
     *
     * @protected
     */
  }, {
    key: "onOpen",
    value: function onOpen() {
      this.readyState = "open";
      this.writable = true;
      _superPropGet(Transport, "emitReserved", this, 3)(["open"]);
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
  }, {
    key: "onData",
    value: function onData(data) {
      var packet = decodePacket(data, this.socket.binaryType);
      this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
  }, {
    key: "onPacket",
    value: function onPacket(packet) {
      _superPropGet(Transport, "emitReserved", this, 3)(["packet", packet]);
    }
    /**
     * Called upon close.
     *
     * @protected
     */
  }, {
    key: "onClose",
    value: function onClose(details) {
      this.readyState = "closed";
      _superPropGet(Transport, "emitReserved", this, 3)(["close", details]);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
  }, {
    key: "pause",
    value: function pause(onPause) {}
  }, {
    key: "createUri",
    value: function createUri(schema) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
    }
  }, {
    key: "_hostname",
    value: function _hostname() {
      var hostname = this.opts.hostname;
      return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
  }, {
    key: "_port",
    value: function _port() {
      if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
        return ":" + this.opts.port;
      } else {
        return "";
      }
    }
  }, {
    key: "_query",
    value: function _query(query) {
      var encodedQuery = encode(query);
      return encodedQuery.length ? "?" + encodedQuery : "";
    }
  }]);
}(Emitter);

var Polling = /*#__PURE__*/function (_Transport) {
  function Polling() {
    var _this;
    _classCallCheck(this, Polling);
    _this = _callSuper(this, Polling, arguments);
    _this._polling = false;
    return _this;
  }
  _inherits(Polling, _Transport);
  return _createClass(Polling, [{
    key: "name",
    get: function get() {
      return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
  }, {
    key: "doOpen",
    value: function doOpen() {
      this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
  }, {
    key: "pause",
    value: function pause(onPause) {
      var _this2 = this;
      this.readyState = "pausing";
      var pause = function pause() {
        _this2.readyState = "paused";
        onPause();
      };
      if (this._polling || !this.writable) {
        var total = 0;
        if (this._polling) {
          total++;
          this.once("pollComplete", function () {
            --total || pause();
          });
        }
        if (!this.writable) {
          total++;
          this.once("drain", function () {
            --total || pause();
          });
        }
      } else {
        pause();
      }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */
  }, {
    key: "_poll",
    value: function _poll() {
      this._polling = true;
      this.doPoll();
      this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
  }, {
    key: "onData",
    value: function onData(data) {
      var _this3 = this;
      var callback = function callback(packet) {
        // if its the first message we consider the transport open
        if ("opening" === _this3.readyState && packet.type === "open") {
          _this3.onOpen();
        }
        // if its a close packet, we close the ongoing requests
        if ("close" === packet.type) {
          _this3.onClose({
            description: "transport closed by the server"
          });
          return false;
        }
        // otherwise bypass onData and handle the message
        _this3.onPacket(packet);
      };
      // decode payload
      decodePayload(data, this.socket.binaryType).forEach(callback);
      // if an event did not trigger closing
      if ("closed" !== this.readyState) {
        // if we got data we're not polling
        this._polling = false;
        this.emitReserved("pollComplete");
        if ("open" === this.readyState) {
          this._poll();
        } else {}
      }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
  }, {
    key: "doClose",
    value: function doClose() {
      var _this4 = this;
      var close = function close() {
        _this4.write([{
          type: "close"
        }]);
      };
      if ("open" === this.readyState) {
        close();
      } else {
        // in case we're trying to close while
        // handshaking is in progress (GH-164)
        this.once("open", close);
      }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
  }, {
    key: "write",
    value: function write(packets) {
      var _this5 = this;
      this.writable = false;
      encodePayload(packets, function (data) {
        _this5.doWrite(data, function () {
          _this5.writable = true;
          _this5.emitReserved("drain");
        });
      });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
  }, {
    key: "uri",
    value: function uri() {
      var schema = this.opts.secure ? "https" : "http";
      var query = this.query || {};
      // cache busting is forced
      if (false !== this.opts.timestampRequests) {
        query[this.opts.timestampParam] = randomString();
      }
      if (!this.supportsBinary && !query.sid) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    }
  }]);
}(Transport);

// imported from https://github.com/component/has-cors
var value = false;
try {
  value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
}
var hasCORS = value;

function empty() {}
var BaseXHR = /*#__PURE__*/function (_Polling) {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  function BaseXHR(opts) {
    var _this;
    _classCallCheck(this, BaseXHR);
    _this = _callSuper(this, BaseXHR, [opts]);
    if (typeof location !== "undefined") {
      var isSSL = "https:" === location.protocol;
      var port = location.port;
      // some user agents have empty `location.port`
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      _this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
    return _this;
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  _inherits(BaseXHR, _Polling);
  return _createClass(BaseXHR, [{
    key: "doWrite",
    value: function doWrite(data, fn) {
      var _this2 = this;
      var req = this.request({
        method: "POST",
        data: data
      });
      req.on("success", fn);
      req.on("error", function (xhrStatus, context) {
        _this2.onError("xhr post error", xhrStatus, context);
      });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */
  }, {
    key: "doPoll",
    value: function doPoll() {
      var _this3 = this;
      var req = this.request();
      req.on("data", this.onData.bind(this));
      req.on("error", function (xhrStatus, context) {
        _this3.onError("xhr poll error", xhrStatus, context);
      });
      this.pollXhr = req;
    }
  }]);
}(Polling);
var Request = /*#__PURE__*/function (_Emitter) {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  function Request(createRequest, uri, opts) {
    var _this4;
    _classCallCheck(this, Request);
    _this4 = _callSuper(this, Request);
    _this4.createRequest = createRequest;
    installTimerFunctions(_this4, opts);
    _this4._opts = opts;
    _this4._method = opts.method || "GET";
    _this4._uri = uri;
    _this4._data = undefined !== opts.data ? opts.data : null;
    _this4._create();
    return _this4;
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _inherits(Request, _Emitter);
  return _createClass(Request, [{
    key: "_create",
    value: function _create() {
      var _this5 = this;
      var _a;
      var opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      opts.xdomain = !!this._opts.xd;
      var xhr = this._xhr = this.createRequest(opts);
      try {
        xhr.open(this._method, this._uri, true);
        try {
          if (this._opts.extraHeaders) {
            // @ts-ignore
            xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
            for (var i in this._opts.extraHeaders) {
              if (this._opts.extraHeaders.hasOwnProperty(i)) {
                xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
              }
            }
          }
        } catch (e) {}
        if ("POST" === this._method) {
          try {
            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e) {}
        }
        try {
          xhr.setRequestHeader("Accept", "*/*");
        } catch (e) {}
        (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
        // ie6 check
        if ("withCredentials" in xhr) {
          xhr.withCredentials = this._opts.withCredentials;
        }
        if (this._opts.requestTimeout) {
          xhr.timeout = this._opts.requestTimeout;
        }
        xhr.onreadystatechange = function () {
          var _a;
          if (xhr.readyState === 3) {
            (_a = _this5._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(
            // @ts-ignore
            xhr.getResponseHeader("set-cookie"));
          }
          if (4 !== xhr.readyState) return;
          if (200 === xhr.status || 1223 === xhr.status) {
            _this5._onLoad();
          } else {
            // make sure the `error` event handler that's user-set
            // does not throw in the same tick and gets caught here
            _this5.setTimeoutFn(function () {
              _this5._onError(typeof xhr.status === "number" ? xhr.status : 0);
            }, 0);
          }
        };
        xhr.send(this._data);
      } catch (e) {
        // Need to defer since .create() is called directly from the constructor
        // and thus the 'error' event can only be only bound *after* this exception
        // occurs.  Therefore, also, we cannot throw here at all.
        this.setTimeoutFn(function () {
          _this5._onError(e);
        }, 0);
        return;
      }
      if (typeof document !== "undefined") {
        this._index = Request.requestsCount++;
        Request.requests[this._index] = this;
      }
    }
    /**
     * Called upon error.
     *
     * @private
     */
  }, {
    key: "_onError",
    value: function _onError(err) {
      this.emitReserved("error", err, this._xhr);
      this._cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */
  }, {
    key: "_cleanup",
    value: function _cleanup(fromError) {
      if ("undefined" === typeof this._xhr || null === this._xhr) {
        return;
      }
      this._xhr.onreadystatechange = empty;
      if (fromError) {
        try {
          this._xhr.abort();
        } catch (e) {}
      }
      if (typeof document !== "undefined") {
        delete Request.requests[this._index];
      }
      this._xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */
  }, {
    key: "_onLoad",
    value: function _onLoad() {
      var data = this._xhr.responseText;
      if (data !== null) {
        this.emitReserved("data", data);
        this.emitReserved("success");
        this._cleanup();
      }
    }
    /**
     * Aborts the request.
     *
     * @package
     */
  }, {
    key: "abort",
    value: function abort() {
      this._cleanup();
    }
  }]);
}(Emitter);
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */
if (typeof document !== "undefined") {
  // @ts-ignore
  if (typeof attachEvent === "function") {
    // @ts-ignore
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    var terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}
var hasXHR2 = function () {
  var xhr = newRequest({
    xdomain: false
  });
  return xhr && xhr.responseType !== null;
}();
/**
 * HTTP long-polling based on the built-in `XMLHttpRequest` object.
 *
 * Usage: browser
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 */
var XHR = /*#__PURE__*/function (_BaseXHR) {
  function XHR(opts) {
    var _this6;
    _classCallCheck(this, XHR);
    _this6 = _callSuper(this, XHR, [opts]);
    var forceBase64 = opts && opts.forceBase64;
    _this6.supportsBinary = hasXHR2 && !forceBase64;
    return _this6;
  }
  _inherits(XHR, _BaseXHR);
  return _createClass(XHR, [{
    key: "request",
    value: function request() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.assign(opts, {
        xd: this.xd
      }, this.opts);
      return new Request(newRequest, this.uri(), opts);
    }
  }]);
}(BaseXHR);
function newRequest(opts) {
  var xdomain = opts.xdomain;
  // XMLHttpRequest can be disabled on IE
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}

// detect ReactNative environment
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var BaseWS = /*#__PURE__*/function (_Transport) {
  function BaseWS() {
    _classCallCheck(this, BaseWS);
    return _callSuper(this, BaseWS, arguments);
  }
  _inherits(BaseWS, _Transport);
  return _createClass(BaseWS, [{
    key: "name",
    get: function get() {
      return "websocket";
    }
  }, {
    key: "doOpen",
    value: function doOpen() {
      var uri = this.uri();
      var protocols = this.opts.protocols;
      // React Native only supports the 'headers' option, and will print a warning if anything else is passed
      var opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      if (this.opts.extraHeaders) {
        opts.headers = this.opts.extraHeaders;
      }
      try {
        this.ws = this.createSocket(uri, protocols, opts);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this.ws.binaryType = this.socket.binaryType;
      this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;
      this.ws.onopen = function () {
        if (_this.opts.autoUnref) {
          _this.ws._socket.unref();
        }
        _this.onOpen();
      };
      this.ws.onclose = function (closeEvent) {
        return _this.onClose({
          description: "websocket connection closed",
          context: closeEvent
        });
      };
      this.ws.onmessage = function (ev) {
        return _this.onData(ev.data);
      };
      this.ws.onerror = function (e) {
        return _this.onError("websocket error", e);
      };
    }
  }, {
    key: "write",
    value: function write(packets) {
      var _this2 = this;
      this.writable = false;
      // encodePacket efficient as it uses WS framing
      // no need for encodePayload
      var _loop = function _loop() {
        var packet = packets[i];
        var lastPacket = i === packets.length - 1;
        encodePacket(packet, _this2.supportsBinary, function (data) {
          // Sometimes the websocket has already been closed but the browser didn't
          // have a chance of informing us about it yet, in that case send will
          // throw an error
          try {
            _this2.doWrite(packet, data);
          } catch (e) {}
          if (lastPacket) {
            // fake drain
            // defer to next tick to allow Socket to clear writeBuffer
            nextTick(function () {
              _this2.writable = true;
              _this2.emitReserved("drain");
            }, _this2.setTimeoutFn);
          }
        });
      };
      for (var i = 0; i < packets.length; i++) {
        _loop();
      }
    }
  }, {
    key: "doClose",
    value: function doClose() {
      if (typeof this.ws !== "undefined") {
        this.ws.onerror = function () {};
        this.ws.close();
        this.ws = null;
      }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
  }, {
    key: "uri",
    value: function uri() {
      var schema = this.opts.secure ? "wss" : "ws";
      var query = this.query || {};
      // append timestamp to URI
      if (this.opts.timestampRequests) {
        query[this.opts.timestampParam] = randomString();
      }
      // communicate binary support capabilities
      if (!this.supportsBinary) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    }
  }]);
}(Transport);
var WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
/**
 * WebSocket transport based on the built-in `WebSocket` object.
 *
 * Usage: browser, Node.js (since v21), Deno, Bun
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 * @see https://caniuse.com/mdn-api_websocket
 * @see https://nodejs.org/api/globals.html#websocket
 */
var WS = /*#__PURE__*/function (_BaseWS) {
  function WS() {
    _classCallCheck(this, WS);
    return _callSuper(this, WS, arguments);
  }
  _inherits(WS, _BaseWS);
  return _createClass(WS, [{
    key: "createSocket",
    value: function createSocket(uri, protocols, opts) {
      return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
    }
  }, {
    key: "doWrite",
    value: function doWrite(_packet, data) {
      this.ws.send(data);
    }
  }]);
}(BaseWS);

/**
 * WebTransport transport based on the built-in `WebTransport` object.
 *
 * Usage: browser, Node.js (with the `@fails-components/webtransport` package)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
 * @see https://caniuse.com/webtransport
 */
var WT = /*#__PURE__*/function (_Transport) {
  function WT() {
    _classCallCheck(this, WT);
    return _callSuper(this, WT, arguments);
  }
  _inherits(WT, _Transport);
  return _createClass(WT, [{
    key: "name",
    get: function get() {
      return "webtransport";
    }
  }, {
    key: "doOpen",
    value: function doOpen() {
      var _this = this;
      try {
        // @ts-ignore
        this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this._transport.closed.then(function () {
        _this.onClose();
      })["catch"](function (err) {
        _this.onError("webtransport error", err);
      });
      // note: we could have used async/await, but that would require some additional polyfills
      this._transport.ready.then(function () {
        _this._transport.createBidirectionalStream().then(function (stream) {
          var decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, _this.socket.binaryType);
          var reader = stream.readable.pipeThrough(decoderStream).getReader();
          var encoderStream = createPacketEncoderStream();
          encoderStream.readable.pipeTo(stream.writable);
          _this._writer = encoderStream.writable.getWriter();
          var _read = function read() {
            reader.read().then(function (_ref) {
              var done = _ref.done,
                value = _ref.value;
              if (done) {
                return;
              }
              _this.onPacket(value);
              _read();
            })["catch"](function (err) {});
          };
          _read();
          var packet = {
            type: "open"
          };
          if (_this.query.sid) {
            packet.data = "{\"sid\":\"".concat(_this.query.sid, "\"}");
          }
          _this._writer.write(packet).then(function () {
            return _this.onOpen();
          });
        });
      });
    }
  }, {
    key: "write",
    value: function write(packets) {
      var _this2 = this;
      this.writable = false;
      var _loop = function _loop() {
        var packet = packets[i];
        var lastPacket = i === packets.length - 1;
        _this2._writer.write(packet).then(function () {
          if (lastPacket) {
            nextTick(function () {
              _this2.writable = true;
              _this2.emitReserved("drain");
            }, _this2.setTimeoutFn);
          }
        });
      };
      for (var i = 0; i < packets.length; i++) {
        _loop();
      }
    }
  }, {
    key: "doClose",
    value: function doClose() {
      var _a;
      (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
    }
  }]);
}(Transport);

var transports = {
  websocket: WS,
  webtransport: WT,
  polling: XHR
};

// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
var re$1 = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
function parse(str) {
  if (str.length > 8000) {
    throw "URI too long";
  }
  var src = str,
    b = str.indexOf('['),
    e = str.indexOf(']');
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }
  var m = re$1.exec(str || ''),
    uri = {},
    i = 14;
  while (i--) {
    uri[parts[i]] = m[i] || '';
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri['path']);
  uri.queryKey = queryKey(uri, uri['query']);
  return uri;
}
function pathNames(obj, path) {
  var regx = /\/{2,9}/g,
    names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == '/' || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == '/') {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  var data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
var OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
  // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
  // script, so we create one single event listener here which will forward the event to the socket instances
  addEventListener("offline", function () {
    OFFLINE_EVENT_LISTENERS.forEach(function (listener) {
      return listener();
    });
  }, false);
}
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes without upgrade mechanism, which means that it will keep the first low-level transport that
 * successfully establishes the connection.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithoutUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithoutUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithUpgrade
 * @see Socket
 */
var SocketWithoutUpgrade = /*#__PURE__*/function (_Emitter) {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  function SocketWithoutUpgrade(uri, opts) {
    var _this;
    _classCallCheck(this, SocketWithoutUpgrade);
    _this = _callSuper(this, SocketWithoutUpgrade);
    _this.binaryType = defaultBinaryType;
    _this.writeBuffer = [];
    _this._prevBufferLen = 0;
    _this._pingInterval = -1;
    _this._pingTimeout = -1;
    _this._maxPayload = -1;
    /**
     * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
     * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
     */
    _this._pingTimeoutTime = Infinity;
    if (uri && "object" === _typeof(uri)) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      var parsedUri = parse(uri);
      opts.hostname = parsedUri.host;
      opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
      opts.port = parsedUri.port;
      if (parsedUri.query) opts.query = parsedUri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(_this, opts);
    _this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      // if no port is specified manually, use the protocol default
      opts.port = _this.secure ? "443" : "80";
    }
    _this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    _this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? "443" : "80");
    _this.transports = [];
    _this._transportsByName = {};
    opts.transports.forEach(function (t) {
      var transportName = t.prototype.name;
      _this.transports.push(transportName);
      _this._transportsByName[transportName] = t;
    });
    _this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    _this.opts.path = _this.opts.path.replace(/\/$/, "") + (_this.opts.addTrailingSlash ? "/" : "");
    if (typeof _this.opts.query === "string") {
      _this.opts.query = decode(_this.opts.query);
    }
    if (withEventListeners) {
      if (_this.opts.closeOnBeforeunload) {
        // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
        // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
        // closed/reloaded)
        _this._beforeunloadEventListener = function () {
          if (_this.transport) {
            // silently close the transport
            _this.transport.removeAllListeners();
            _this.transport.close();
          }
        };
        addEventListener("beforeunload", _this._beforeunloadEventListener, false);
      }
      if (_this.hostname !== "localhost") {
        _this._offlineEventListener = function () {
          _this._onClose("transport close", {
            description: "network connection lost"
          });
        };
        OFFLINE_EVENT_LISTENERS.push(_this._offlineEventListener);
      }
    }
    if (_this.opts.withCredentials) {
      _this._cookieJar = createCookieJar();
    }
    _this._open();
    return _this;
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  _inherits(SocketWithoutUpgrade, _Emitter);
  return _createClass(SocketWithoutUpgrade, [{
    key: "createTransport",
    value: function createTransport(name) {
      var query = Object.assign({}, this.opts.query);
      // append engine.io protocol identifier
      query.EIO = protocol$2;
      // transport name
      query.transport = name;
      // session id if we already have one
      if (this.id) query.sid = this.id;
      var opts = Object.assign({}, this.opts, {
        query: query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      }, this.opts.transportOptions[name]);
      return new this._transportsByName[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
  }, {
    key: "_open",
    value: function _open() {
      var _this2 = this;
      if (this.transports.length === 0) {
        // Emit error on next tick so it can be listened to
        this.setTimeoutFn(function () {
          _this2.emitReserved("error", "No transports available");
        }, 0);
        return;
      }
      var transportName = this.opts.rememberUpgrade && SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
      this.readyState = "opening";
      var transport = this.createTransport(transportName);
      transport.open();
      this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
  }, {
    key: "setTransport",
    value: function setTransport(transport) {
      var _this3 = this;
      if (this.transport) {
        this.transport.removeAllListeners();
      }
      // set up transport
      this.transport = transport;
      // set up transport listeners
      transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", function (reason) {
        return _this3._onClose("transport close", reason);
      });
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
  }, {
    key: "onOpen",
    value: function onOpen() {
      this.readyState = "open";
      SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
      this.emitReserved("open");
      this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */
  }, {
    key: "_onPacket",
    value: function _onPacket(packet) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        this.emitReserved("packet", packet);
        // Socket is live - any packet counts
        this.emitReserved("heartbeat");
        switch (packet.type) {
          case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;
          case "ping":
            this._sendPacket("pong");
            this.emitReserved("ping");
            this.emitReserved("pong");
            this._resetPingTimeout();
            break;
          case "error":
            var err = new Error("server error");
            // @ts-ignore
            err.code = packet.data;
            this._onError(err);
            break;
          case "message":
            this.emitReserved("data", packet.data);
            this.emitReserved("message", packet.data);
            break;
        }
      } else {}
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
  }, {
    key: "onHandshake",
    value: function onHandshake(data) {
      this.emitReserved("handshake", data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this._pingInterval = data.pingInterval;
      this._pingTimeout = data.pingTimeout;
      this._maxPayload = data.maxPayload;
      this.onOpen();
      // In case open handler closes socket
      if ("closed" === this.readyState) return;
      this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
  }, {
    key: "_resetPingTimeout",
    value: function _resetPingTimeout() {
      var _this4 = this;
      this.clearTimeoutFn(this._pingTimeoutTimer);
      var delay = this._pingInterval + this._pingTimeout;
      this._pingTimeoutTime = Date.now() + delay;
      this._pingTimeoutTimer = this.setTimeoutFn(function () {
        _this4._onClose("ping timeout");
      }, delay);
      if (this.opts.autoUnref) {
        this._pingTimeoutTimer.unref();
      }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */
  }, {
    key: "_onDrain",
    value: function _onDrain() {
      this.writeBuffer.splice(0, this._prevBufferLen);
      // setting prevBufferLen = 0 is very important
      // for example, when upgrading, upgrade packet is sent over,
      // and a nonzero prevBufferLen could cause problems on `drain`
      this._prevBufferLen = 0;
      if (0 === this.writeBuffer.length) {
        this.emitReserved("drain");
      } else {
        this.flush();
      }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */
  }, {
    key: "flush",
    value: function flush() {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        var packets = this._getWritablePackets();
        this.transport.send(packets);
        // keep track of current length of writeBuffer
        // splice writeBuffer and callbackBuffer on `drain`
        this._prevBufferLen = packets.length;
        this.emitReserved("flush");
      }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
  }, {
    key: "_getWritablePackets",
    value: function _getWritablePackets() {
      var shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
      if (!shouldCheckPayloadSize) {
        return this.writeBuffer;
      }
      var payloadSize = 1; // first packet type
      for (var i = 0; i < this.writeBuffer.length; i++) {
        var data = this.writeBuffer[i].data;
        if (data) {
          payloadSize += byteLength(data);
        }
        if (i > 0 && payloadSize > this._maxPayload) {
          return this.writeBuffer.slice(0, i);
        }
        payloadSize += 2; // separator + packet type
      }
      return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */
    /* private */
  }, {
    key: "_hasPingExpired",
    value: function _hasPingExpired() {
      var _this5 = this;
      if (!this._pingTimeoutTime) return true;
      var hasExpired = Date.now() > this._pingTimeoutTime;
      if (hasExpired) {
        this._pingTimeoutTime = 0;
        nextTick(function () {
          _this5._onClose("ping timeout");
        }, this.setTimeoutFn);
      }
      return hasExpired;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
  }, {
    key: "write",
    value: function write(msg, options, fn) {
      this._sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
  }, {
    key: "send",
    value: function send(msg, options, fn) {
      this._sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
  }, {
    key: "_sendPacket",
    value: function _sendPacket(type, data, options, fn) {
      if ("function" === typeof data) {
        fn = data;
        data = undefined;
      }
      if ("function" === typeof options) {
        fn = options;
        options = null;
      }
      if ("closing" === this.readyState || "closed" === this.readyState) {
        return;
      }
      options = options || {};
      options.compress = false !== options.compress;
      var packet = {
        type: type,
        data: data,
        options: options
      };
      this.emitReserved("packetCreate", packet);
      this.writeBuffer.push(packet);
      if (fn) this.once("flush", fn);
      this.flush();
    }
    /**
     * Closes the connection.
     */
  }, {
    key: "close",
    value: function close() {
      var _this6 = this;
      var close = function close() {
        _this6._onClose("forced close");
        _this6.transport.close();
      };
      var _cleanupAndClose = function cleanupAndClose() {
        _this6.off("upgrade", _cleanupAndClose);
        _this6.off("upgradeError", _cleanupAndClose);
        close();
      };
      var waitForUpgrade = function waitForUpgrade() {
        // wait for upgrade to finish since we can't send packets while pausing a transport
        _this6.once("upgrade", _cleanupAndClose);
        _this6.once("upgradeError", _cleanupAndClose);
      };
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";
        if (this.writeBuffer.length) {
          this.once("drain", function () {
            if (_this6.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }
      return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */
  }, {
    key: "_onError",
    value: function _onError(err) {
      SocketWithoutUpgrade.priorWebsocketSuccess = false;
      if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
        this.transports.shift();
        return this._open();
      }
      this.emitReserved("error", err);
      this._onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */
  }, {
    key: "_onClose",
    value: function _onClose(reason, description) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        // clear timers
        this.clearTimeoutFn(this._pingTimeoutTimer);
        // stop event from firing again for transport
        this.transport.removeAllListeners("close");
        // ensure transport won't stay open
        this.transport.close();
        // ignore further transport communication
        this.transport.removeAllListeners();
        if (withEventListeners) {
          if (this._beforeunloadEventListener) {
            removeEventListener("beforeunload", this._beforeunloadEventListener, false);
          }
          if (this._offlineEventListener) {
            var i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
            if (i !== -1) {
              OFFLINE_EVENT_LISTENERS.splice(i, 1);
            }
          }
        }
        // set ready state
        this.readyState = "closed";
        // clear session id
        this.id = null;
        // emit close event
        this.emitReserved("close", reason, description);
        // clean buffers after, so users can still
        // grab the buffers on `close` event
        this.writeBuffer = [];
        this._prevBufferLen = 0;
      }
    }
  }]);
}(Emitter);
SocketWithoutUpgrade.protocol = protocol$2;
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * In order to allow tree-shaking, there are no transports included, that's why the `transports` option is mandatory.
 *
 * @example
 * import { SocketWithUpgrade, WebSocket } from "engine.io-client";
 *
 * const socket = new SocketWithUpgrade({
 *   transports: [WebSocket]
 * });
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see Socket
 */
var SocketWithUpgrade = /*#__PURE__*/function (_SocketWithoutUpgrade) {
  function SocketWithUpgrade() {
    var _this7;
    _classCallCheck(this, SocketWithUpgrade);
    _this7 = _callSuper(this, SocketWithUpgrade, arguments);
    _this7._upgrades = [];
    return _this7;
  }
  _inherits(SocketWithUpgrade, _SocketWithoutUpgrade);
  return _createClass(SocketWithUpgrade, [{
    key: "onOpen",
    value: function onOpen() {
      _superPropGet(SocketWithUpgrade, "onOpen", this, 3)([]);
      if ("open" === this.readyState && this.opts.upgrade) {
        for (var i = 0; i < this._upgrades.length; i++) {
          this._probe(this._upgrades[i]);
        }
      }
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
  }, {
    key: "_probe",
    value: function _probe(name) {
      var _this8 = this;
      var transport = this.createTransport(name);
      var failed = false;
      SocketWithoutUpgrade.priorWebsocketSuccess = false;
      var onTransportOpen = function onTransportOpen() {
        if (failed) return;
        transport.send([{
          type: "ping",
          data: "probe"
        }]);
        transport.once("packet", function (msg) {
          if (failed) return;
          if ("pong" === msg.type && "probe" === msg.data) {
            _this8.upgrading = true;
            _this8.emitReserved("upgrading", transport);
            if (!transport) return;
            SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
            _this8.transport.pause(function () {
              if (failed) return;
              if ("closed" === _this8.readyState) return;
              cleanup();
              _this8.setTransport(transport);
              transport.send([{
                type: "upgrade"
              }]);
              _this8.emitReserved("upgrade", transport);
              transport = null;
              _this8.upgrading = false;
              _this8.flush();
            });
          } else {
            var err = new Error("probe error");
            // @ts-ignore
            err.transport = transport.name;
            _this8.emitReserved("upgradeError", err);
          }
        });
      };
      function freezeTransport() {
        if (failed) return;
        // Any callback called by transport should be ignored since now
        failed = true;
        cleanup();
        transport.close();
        transport = null;
      }
      // Handle any error that happens while probing
      var onerror = function onerror(err) {
        var error = new Error("probe error: " + err);
        // @ts-ignore
        error.transport = transport.name;
        freezeTransport();
        _this8.emitReserved("upgradeError", error);
      };
      function onTransportClose() {
        onerror("transport closed");
      }
      // When the socket is closed while we're probing
      function onclose() {
        onerror("socket closed");
      }
      // When the socket is upgraded while we're probing
      function onupgrade(to) {
        if (transport && to.name !== transport.name) {
          freezeTransport();
        }
      }
      // Remove all listeners on the transport and on self
      var cleanup = function cleanup() {
        transport.removeListener("open", onTransportOpen);
        transport.removeListener("error", onerror);
        transport.removeListener("close", onTransportClose);
        _this8.off("close", onclose);
        _this8.off("upgrading", onupgrade);
      };
      transport.once("open", onTransportOpen);
      transport.once("error", onerror);
      transport.once("close", onTransportClose);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
        // favor WebTransport
        this.setTimeoutFn(function () {
          if (!failed) {
            transport.open();
          }
        }, 200);
      } else {
        transport.open();
      }
    }
  }, {
    key: "onHandshake",
    value: function onHandshake(data) {
      this._upgrades = this._filterUpgrades(data.upgrades);
      _superPropGet(SocketWithUpgrade, "onHandshake", this, 3)([data]);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
  }, {
    key: "_filterUpgrades",
    value: function _filterUpgrades(upgrades) {
      var filteredUpgrades = [];
      for (var i = 0; i < upgrades.length; i++) {
        if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
      }
      return filteredUpgrades;
    }
  }]);
}(SocketWithoutUpgrade);
/**
 * This class provides a WebSocket-like interface to connect to an Engine.IO server. The connection will be established
 * with one of the available low-level transports, like HTTP long-polling, WebSocket or WebTransport.
 *
 * This class comes with an upgrade mechanism, which means that once the connection is established with the first
 * low-level transport, it will try to upgrade to a better transport.
 *
 * @example
 * import { Socket } from "engine.io-client";
 *
 * const socket = new Socket();
 *
 * socket.on("open", () => {
 *   socket.send("hello");
 * });
 *
 * @see SocketWithoutUpgrade
 * @see SocketWithUpgrade
 */
var Socket$1 = /*#__PURE__*/function (_SocketWithUpgrade) {
  function Socket(uri) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Socket);
    var o = _typeof(uri) === "object" ? uri : opts;
    if (!o.transports || o.transports && typeof o.transports[0] === "string") {
      o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map(function (transportName) {
        return transports[transportName];
      }).filter(function (t) {
        return !!t;
      });
    }
    return _callSuper(this, Socket, [uri, o]);
  }
  _inherits(Socket, _SocketWithUpgrade);
  return _createClass(Socket);
}(SocketWithUpgrade);

/**
 * HTTP long-polling based on the built-in `fetch()` method.
 *
 * Usage: browser, Node.js (since v18), Deno, Bun
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * @see https://caniuse.com/fetch
 * @see https://nodejs.org/api/globals.html#fetch
 */
var Fetch = /*#__PURE__*/function (_Polling) {
  function Fetch() {
    _classCallCheck(this, Fetch);
    return _callSuper(this, Fetch, arguments);
  }
  _inherits(Fetch, _Polling);
  return _createClass(Fetch, [{
    key: "doPoll",
    value: function doPoll() {
      var _this = this;
      this._fetch().then(function (res) {
        if (!res.ok) {
          return _this.onError("fetch read error", res.status, res);
        }
        res.text().then(function (data) {
          return _this.onData(data);
        });
      })["catch"](function (err) {
        _this.onError("fetch read error", err);
      });
    }
  }, {
    key: "doWrite",
    value: function doWrite(data, callback) {
      var _this2 = this;
      this._fetch(data).then(function (res) {
        if (!res.ok) {
          return _this2.onError("fetch write error", res.status, res);
        }
        callback();
      })["catch"](function (err) {
        _this2.onError("fetch write error", err);
      });
    }
  }, {
    key: "_fetch",
    value: function _fetch(data) {
      var _this3 = this;
      var _a;
      var isPost = data !== undefined;
      var headers = new Headers(this.opts.extraHeaders);
      if (isPost) {
        headers.set("content-type", "text/plain;charset=UTF-8");
      }
      (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.appendCookies(headers);
      return fetch(this.uri(), {
        method: isPost ? "POST" : "GET",
        body: isPost ? data : null,
        headers: headers,
        credentials: this.opts.withCredentials ? "include" : "omit"
      }).then(function (res) {
        var _a;
        // @ts-ignore getSetCookie() was added in Node.js v19.7.0
        (_a = _this3.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(res.headers.getSetCookie());
        return res;
      });
    }
  }]);
}(Polling);

var protocol$1 = Socket$1.protocol;

/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var loc = arguments.length > 2 ? arguments[2] : undefined;
  var obj = uri;
  // default to window.location
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host;
  // relative path support
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    // parse
    obj = parse(uri);
  }
  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  var ipv6 = obj.host.indexOf(":") !== -1;
  var host = ipv6 ? "[" + obj.host + "]" : obj.host;
  // define unique id
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  // define href
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = function isView(obj) {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || _typeof(obj) !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {
    packet: pack,
    buffers: buffers
  };
}
function _deconstructPacket(data, buffers) {
  if (!data) return data;
  if (isBinary(data)) {
    var placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (_typeof(data) === "object" && !(data instanceof Date)) {
    var _newData = {};
    for (var key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        _newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return _newData;
  }
  return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments; // no longer useful
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data) return data;
  if (data && data._placeholder === true) {
    var isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num]; // appropriate buffer (should be natural order anyway)
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (_typeof(data) === "object") {
    for (var key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

/**
 * These strings must not be used as event names, as they have a special meaning.
 */
var RESERVED_EVENTS$1 = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener" // used by the Node.js EventEmitter
];
/**
 * Protocol version.
 *
 * @public
 */
var protocol = 5;
var PacketType;
(function (PacketType) {
  PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
  PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType[PacketType["EVENT"] = 2] = "EVENT";
  PacketType[PacketType["ACK"] = 3] = "ACK";
  PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
/**
 * A socket.io Encoder instance
 */
var Encoder = /*#__PURE__*/function () {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  function Encoder(replacer) {
    _classCallCheck(this, Encoder);
    this.replacer = replacer;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  return _createClass(Encoder, [{
    key: "encode",
    value: function encode(obj) {
      if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
        if (hasBinary(obj)) {
          return this.encodeAsBinary({
            type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
            nsp: obj.nsp,
            data: obj.data,
            id: obj.id
          });
        }
      }
      return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
  }, {
    key: "encodeAsString",
    value: function encodeAsString(obj) {
      // first is type
      var str = "" + obj.type;
      // attachments if we have them
      if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
        str += obj.attachments + "-";
      }
      // if we have a namespace other than `/`
      // we append it followed by a comma `,`
      if (obj.nsp && "/" !== obj.nsp) {
        str += obj.nsp + ",";
      }
      // immediately followed by the id
      if (null != obj.id) {
        str += obj.id;
      }
      // json data
      if (null != obj.data) {
        str += JSON.stringify(obj.data, this.replacer);
      }
      return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
  }, {
    key: "encodeAsBinary",
    value: function encodeAsBinary(obj) {
      var deconstruction = deconstructPacket(obj);
      var pack = this.encodeAsString(deconstruction.packet);
      var buffers = deconstruction.buffers;
      buffers.unshift(pack); // add packet info to beginning of data list
      return buffers; // write all the buffers
    }
  }]);
}();
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
var Decoder = /*#__PURE__*/function (_Emitter) {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  function Decoder(reviver) {
    var _this;
    _classCallCheck(this, Decoder);
    _this = _callSuper(this, Decoder);
    _this.reviver = reviver;
    return _this;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  _inherits(Decoder, _Emitter);
  return _createClass(Decoder, [{
    key: "add",
    value: function add(obj) {
      var packet;
      if (typeof obj === "string") {
        if (this.reconstructor) {
          throw new Error("got plaintext data when reconstructing a packet");
        }
        packet = this.decodeString(obj);
        var isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
        if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
          packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
          // binary packet's json
          this.reconstructor = new BinaryReconstructor(packet);
          // no attachments, labeled binary but no binary data to follow
          if (packet.attachments === 0) {
            _superPropGet(Decoder, "emitReserved", this, 3)(["decoded", packet]);
          }
        } else {
          // non-binary full packet
          _superPropGet(Decoder, "emitReserved", this, 3)(["decoded", packet]);
        }
      } else if (isBinary(obj) || obj.base64) {
        // raw binary data
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        } else {
          packet = this.reconstructor.takeBinaryData(obj);
          if (packet) {
            // received final buffer
            this.reconstructor = null;
            _superPropGet(Decoder, "emitReserved", this, 3)(["decoded", packet]);
          }
        }
      } else {
        throw new Error("Unknown type: " + obj);
      }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
  }, {
    key: "decodeString",
    value: function decodeString(str) {
      var i = 0;
      // look up type
      var p = {
        type: Number(str.charAt(0))
      };
      if (PacketType[p.type] === undefined) {
        throw new Error("unknown packet type " + p.type);
      }
      // look up attachments if type binary
      if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
        var start = i + 1;
        while (str.charAt(++i) !== "-" && i != str.length) {}
        var buf = str.substring(start, i);
        if (buf != Number(buf) || str.charAt(i) !== "-") {
          throw new Error("Illegal attachments");
        }
        p.attachments = Number(buf);
      }
      // look up namespace (if any)
      if ("/" === str.charAt(i + 1)) {
        var _start = i + 1;
        while (++i) {
          var c = str.charAt(i);
          if ("," === c) break;
          if (i === str.length) break;
        }
        p.nsp = str.substring(_start, i);
      } else {
        p.nsp = "/";
      }
      // look up id
      var next = str.charAt(i + 1);
      if ("" !== next && Number(next) == next) {
        var _start2 = i + 1;
        while (++i) {
          var _c = str.charAt(i);
          if (null == _c || Number(_c) != _c) {
            --i;
            break;
          }
          if (i === str.length) break;
        }
        p.id = Number(str.substring(_start2, i + 1));
      }
      // look up json data
      if (str.charAt(++i)) {
        var payload = this.tryParse(str.substr(i));
        if (Decoder.isPayloadValid(p.type, payload)) {
          p.data = payload;
        } else {
          throw new Error("invalid payload");
        }
      }
      return p;
    }
  }, {
    key: "tryParse",
    value: function tryParse(str) {
      try {
        return JSON.parse(str, this.reviver);
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "destroy",
    value:
    /**
     * Deallocates a parser's resources
     */
    function destroy() {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
        this.reconstructor = null;
      }
    }
  }], [{
    key: "isPayloadValid",
    value: function isPayloadValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return isObject(payload);
        case PacketType.DISCONNECT:
          return payload === undefined;
        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || isObject(payload);
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS$1.indexOf(payload[0]) === -1);
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          return Array.isArray(payload);
      }
    }
  }]);
}(Emitter);
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
var BinaryReconstructor = /*#__PURE__*/function () {
  function BinaryReconstructor(packet) {
    _classCallCheck(this, BinaryReconstructor);
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  return _createClass(BinaryReconstructor, [{
    key: "takeBinaryData",
    value: function takeBinaryData(binData) {
      this.buffers.push(binData);
      if (this.buffers.length === this.reconPack.attachments) {
        // done with buffer list
        var packet = reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }
      return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
  }, {
    key: "finishedReconstruction",
    value: function finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    }
  }]);
}();

var parser = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Decoder: Decoder,
  Encoder: Encoder,
  get PacketType () { return PacketType; },
  protocol: protocol
});

function on$1(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

/**
 * Internal events.
 * These events can't be emitted by the user.
 */
var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */
var Socket = /*#__PURE__*/function (_Emitter) {
  /**
   * `Socket` constructor.
   */
  function Socket(io, nsp, opts) {
    var _this;
    _classCallCheck(this, Socket);
    _this = _callSuper(this, Socket);
    /**
     * Whether the socket is currently connected to the server.
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.connected); // true
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.connected); // false
     * });
     */
    _this.connected = false;
    /**
     * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
     * be transmitted by the server.
     */
    _this.recovered = false;
    /**
     * Buffer for packets received before the CONNECT packet
     */
    _this.receiveBuffer = [];
    /**
     * Buffer for packets that will be sent once the socket is connected
     */
    _this.sendBuffer = [];
    /**
     * The queue of packets to be sent with retry in case of failure.
     *
     * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
     * @private
     */
    _this._queue = [];
    /**
     * A sequence to generate the ID of the {@link QueuedPacket}.
     * @private
     */
    _this._queueSeq = 0;
    _this.ids = 0;
    /**
     * A map containing acknowledgement handlers.
     *
     * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
     *
     * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
     * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
     * - `const value = await socket.emitWithAck("test")`
     *
     * From those that don't:
     *
     * - `socket.emit("test", (value) => { ... });`
     *
     * In the first case, the handlers will be called with an error when:
     *
     * - the timeout is reached
     * - the socket gets disconnected
     *
     * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
     * an acknowledgement from the server.
     *
     * @private
     */
    _this.acks = {};
    _this.flags = {};
    _this.io = io;
    _this.nsp = nsp;
    if (opts && opts.auth) {
      _this.auth = opts.auth;
    }
    _this._opts = Object.assign({}, opts);
    if (_this.io._autoConnect) _this.open();
    return _this;
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  _inherits(Socket, _Emitter);
  return _createClass(Socket, [{
    key: "disconnected",
    get: function get() {
      return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
  }, {
    key: "subEvents",
    value: function subEvents() {
      if (this.subs) return;
      var io = this.io;
      this.subs = [on$1(io, "open", this.onopen.bind(this)), on$1(io, "packet", this.onpacket.bind(this)), on$1(io, "error", this.onerror.bind(this)), on$1(io, "close", this.onclose.bind(this))];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */
  }, {
    key: "active",
    get: function get() {
      return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
  }, {
    key: "connect",
    value: function connect() {
      if (this.connected) return this;
      this.subEvents();
      if (!this.io["_reconnecting"]) this.io.open(); // ensure open
      if ("open" === this.io._readyState) this.onopen();
      return this;
    }
    /**
     * Alias for {@link connect()}.
     */
  }, {
    key: "open",
    value: function open() {
      return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
  }, {
    key: "send",
    value: function send() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      args.unshift("message");
      this.emit.apply(this, args);
      return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
  }, {
    key: "emit",
    value: function emit(ev) {
      var _a, _b, _c;
      if (RESERVED_EVENTS.hasOwnProperty(ev)) {
        throw new Error('"' + ev.toString() + '" is a reserved event name');
      }
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      args.unshift(ev);
      if (this._opts.retries && !this.flags.fromQueue && !this.flags["volatile"]) {
        this._addToQueue(args);
        return this;
      }
      var packet = {
        type: PacketType.EVENT,
        data: args
      };
      packet.options = {};
      packet.options.compress = this.flags.compress !== false;
      // event ack callback
      if ("function" === typeof args[args.length - 1]) {
        var id = this.ids++;
        var ack = args.pop();
        this._registerAckCallback(id, ack);
        packet.id = id;
      }
      var isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
      var isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
      var discardPacket = this.flags["volatile"] && !isTransportWritable;
      if (discardPacket) {} else if (isConnected) {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      } else {
        this.sendBuffer.push(packet);
      }
      this.flags = {};
      return this;
    }
    /**
     * @private
     */
  }, {
    key: "_registerAckCallback",
    value: function _registerAckCallback(id, ack) {
      var _this2 = this;
      var _a;
      var timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
      if (timeout === undefined) {
        this.acks[id] = ack;
        return;
      }
      // @ts-ignore
      var timer = this.io.setTimeoutFn(function () {
        delete _this2.acks[id];
        for (var i = 0; i < _this2.sendBuffer.length; i++) {
          if (_this2.sendBuffer[i].id === id) {
            _this2.sendBuffer.splice(i, 1);
          }
        }
        ack.call(_this2, new Error("operation has timed out"));
      }, timeout);
      var fn = function fn() {
        // @ts-ignore
        _this2.io.clearTimeoutFn(timer);
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        ack.apply(_this2, args);
      };
      fn.withError = true;
      this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */
  }, {
    key: "emitWithAck",
    value: function emitWithAck(ev) {
      var _this3 = this;
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      return new Promise(function (resolve, reject) {
        var fn = function fn(arg1, arg2) {
          return arg1 ? reject(arg1) : resolve(arg2);
        };
        fn.withError = true;
        args.push(fn);
        _this3.emit.apply(_this3, [ev].concat(args));
      });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */
  }, {
    key: "_addToQueue",
    value: function _addToQueue(args) {
      var _this4 = this;
      var ack;
      if (typeof args[args.length - 1] === "function") {
        ack = args.pop();
      }
      var packet = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: false,
        args: args,
        flags: Object.assign({
          fromQueue: true
        }, this.flags)
      };
      args.push(function (err) {
        if (packet !== _this4._queue[0]) {
          // the packet has already been acknowledged
          return;
        }
        var hasError = err !== null;
        if (hasError) {
          if (packet.tryCount > _this4._opts.retries) {
            _this4._queue.shift();
            if (ack) {
              ack(err);
            }
          }
        } else {
          _this4._queue.shift();
          if (ack) {
            for (var _len5 = arguments.length, responseArgs = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              responseArgs[_key5 - 1] = arguments[_key5];
            }
            ack.apply(void 0, [null].concat(responseArgs));
          }
        }
        packet.pending = false;
        return _this4._drainQueue();
      });
      this._queue.push(packet);
      this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */
  }, {
    key: "_drainQueue",
    value: function _drainQueue() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this.connected || this._queue.length === 0) {
        return;
      }
      var packet = this._queue[0];
      if (packet.pending && !force) {
        return;
      }
      packet.pending = true;
      packet.tryCount++;
      this.flags = packet.flags;
      this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
  }, {
    key: "packet",
    value: function packet(_packet) {
      _packet.nsp = this.nsp;
      this.io._packet(_packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
  }, {
    key: "onopen",
    value: function onopen() {
      var _this5 = this;
      if (typeof this.auth == "function") {
        this.auth(function (data) {
          _this5._sendConnectPacket(data);
        });
      } else {
        this._sendConnectPacket(this.auth);
      }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */
  }, {
    key: "_sendConnectPacket",
    value: function _sendConnectPacket(data) {
      this.packet({
        type: PacketType.CONNECT,
        data: this._pid ? Object.assign({
          pid: this._pid,
          offset: this._lastOffset
        }, data) : data
      });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
  }, {
    key: "onerror",
    value: function onerror(err) {
      if (!this.connected) {
        this.emitReserved("connect_error", err);
      }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
  }, {
    key: "onclose",
    value: function onclose(reason, description) {
      this.connected = false;
      delete this.id;
      this.emitReserved("disconnect", reason, description);
      this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */
  }, {
    key: "_clearAcks",
    value: function _clearAcks() {
      var _this6 = this;
      Object.keys(this.acks).forEach(function (id) {
        var isBuffered = _this6.sendBuffer.some(function (packet) {
          return String(packet.id) === id;
        });
        if (!isBuffered) {
          // note: handlers that do not accept an error as first argument are ignored here
          var ack = _this6.acks[id];
          delete _this6.acks[id];
          if (ack.withError) {
            ack.call(_this6, new Error("socket has been disconnected"));
          }
        }
      });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
  }, {
    key: "onpacket",
    value: function onpacket(packet) {
      var sameNamespace = packet.nsp === this.nsp;
      if (!sameNamespace) return;
      switch (packet.type) {
        case PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            this.onconnect(packet.data.sid, packet.data.pid);
          } else {
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }
          break;
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          this.onack(packet);
          break;
        case PacketType.DISCONNECT:
          this.ondisconnect();
          break;
        case PacketType.CONNECT_ERROR:
          this.destroy();
          var err = new Error(packet.data.message);
          // @ts-ignore
          err.data = packet.data.data;
          this.emitReserved("connect_error", err);
          break;
      }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
  }, {
    key: "onevent",
    value: function onevent(packet) {
      var args = packet.data || [];
      if (null != packet.id) {
        args.push(this.ack(packet.id));
      }
      if (this.connected) {
        this.emitEvent(args);
      } else {
        this.receiveBuffer.push(Object.freeze(args));
      }
    }
  }, {
    key: "emitEvent",
    value: function emitEvent(args) {
      if (this._anyListeners && this._anyListeners.length) {
        var listeners = this._anyListeners.slice();
        var _iterator = _createForOfIteratorHelper(listeners),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var listener = _step.value;
            listener.apply(this, args);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      _superPropGet(Socket, "emit", this, 1).apply(this, args);
      if (this._pid && args.length && typeof args[args.length - 1] === "string") {
        this._lastOffset = args[args.length - 1];
      }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
  }, {
    key: "ack",
    value: function ack(id) {
      var self = this;
      var sent = false;
      return function () {
        // prevent double callbacks
        if (sent) return;
        sent = true;
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }
        self.packet({
          type: PacketType.ACK,
          id: id,
          data: args
        });
      };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */
  }, {
    key: "onack",
    value: function onack(packet) {
      var ack = this.acks[packet.id];
      if (typeof ack !== "function") {
        return;
      }
      delete this.acks[packet.id];
      // @ts-ignore FIXME ack is incorrectly inferred as 'never'
      if (ack.withError) {
        packet.data.unshift(null);
      }
      // @ts-ignore
      ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
  }, {
    key: "onconnect",
    value: function onconnect(id, pid) {
      this.id = id;
      this.recovered = pid && this._pid === pid;
      this._pid = pid; // defined only if connection state recovery is enabled
      this.connected = true;
      this.emitBuffered();
      this.emitReserved("connect");
      this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
  }, {
    key: "emitBuffered",
    value: function emitBuffered() {
      var _this7 = this;
      this.receiveBuffer.forEach(function (args) {
        return _this7.emitEvent(args);
      });
      this.receiveBuffer = [];
      this.sendBuffer.forEach(function (packet) {
        _this7.notifyOutgoingListeners(packet);
        _this7.packet(packet);
      });
      this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
  }, {
    key: "ondisconnect",
    value: function ondisconnect() {
      this.destroy();
      this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.subs) {
        // clean subscriptions to avoid reconnections
        this.subs.forEach(function (subDestroy) {
          return subDestroy();
        });
        this.subs = undefined;
      }
      this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.connected) {
        this.packet({
          type: PacketType.DISCONNECT
        });
      }
      // remove socket from pool
      this.destroy();
      if (this.connected) {
        // fire events
        this.onclose("io client disconnect");
      }
      return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
  }, {
    key: "close",
    value: function close() {
      return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
  }, {
    key: "compress",
    value: function compress(_compress) {
      this.flags.compress = _compress;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
  }, {
    key: "volatile",
    get: function get() {
      this.flags["volatile"] = true;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
  }, {
    key: "timeout",
    value: function timeout(_timeout) {
      this.flags.timeout = _timeout;
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */
  }, {
    key: "onAny",
    value: function onAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */
  }, {
    key: "prependAny",
    value: function prependAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
  }, {
    key: "offAny",
    value: function offAny(listener) {
      if (!this._anyListeners) {
        return this;
      }
      if (listener) {
        var listeners = this._anyListeners;
        for (var i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
  }, {
    key: "listenersAny",
    value: function listenersAny() {
      return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
  }, {
    key: "onAnyOutgoing",
    value: function onAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
  }, {
    key: "prependAnyOutgoing",
    value: function prependAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
  }, {
    key: "offAnyOutgoing",
    value: function offAnyOutgoing(listener) {
      if (!this._anyOutgoingListeners) {
        return this;
      }
      if (listener) {
        var listeners = this._anyOutgoingListeners;
        for (var i = 0; i < listeners.length; i++) {
          if (listener === listeners[i]) {
            listeners.splice(i, 1);
            return this;
          }
        }
      } else {
        this._anyOutgoingListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
  }, {
    key: "listenersAnyOutgoing",
    value: function listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
  }, {
    key: "notifyOutgoingListeners",
    value: function notifyOutgoingListeners(packet) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        var listeners = this._anyOutgoingListeners.slice();
        var _iterator2 = _createForOfIteratorHelper(listeners),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var listener = _step2.value;
            listener.apply(this, packet.data);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }]);
}(Emitter);

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */
Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */
Backoff.prototype.reset = function () {
  this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */
Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */
Backoff.prototype.setMax = function (max) {
  this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */
Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

var Manager = /*#__PURE__*/function (_Emitter) {
  function Manager(uri, opts) {
    var _this;
    _classCallCheck(this, Manager);
    var _a;
    _this = _callSuper(this, Manager);
    _this.nsps = {};
    _this.subs = [];
    if (uri && "object" === _typeof(uri)) {
      opts = uri;
      uri = undefined;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    _this.opts = opts;
    installTimerFunctions(_this, opts);
    _this.reconnection(opts.reconnection !== false);
    _this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    _this.reconnectionDelay(opts.reconnectionDelay || 1000);
    _this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
    _this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    _this.backoff = new Backoff({
      min: _this.reconnectionDelay(),
      max: _this.reconnectionDelayMax(),
      jitter: _this.randomizationFactor()
    });
    _this.timeout(null == opts.timeout ? 20000 : opts.timeout);
    _this._readyState = "closed";
    _this.uri = uri;
    var _parser = opts.parser || parser;
    _this.encoder = new _parser.Encoder();
    _this.decoder = new _parser.Decoder();
    _this._autoConnect = opts.autoConnect !== false;
    if (_this._autoConnect) _this.open();
    return _this;
  }
  _inherits(Manager, _Emitter);
  return _createClass(Manager, [{
    key: "reconnection",
    value: function reconnection(v) {
      if (!arguments.length) return this._reconnection;
      this._reconnection = !!v;
      if (!v) {
        this.skipReconnect = true;
      }
      return this;
    }
  }, {
    key: "reconnectionAttempts",
    value: function reconnectionAttempts(v) {
      if (v === undefined) return this._reconnectionAttempts;
      this._reconnectionAttempts = v;
      return this;
    }
  }, {
    key: "reconnectionDelay",
    value: function reconnectionDelay(v) {
      var _a;
      if (v === undefined) return this._reconnectionDelay;
      this._reconnectionDelay = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
      return this;
    }
  }, {
    key: "randomizationFactor",
    value: function randomizationFactor(v) {
      var _a;
      if (v === undefined) return this._randomizationFactor;
      this._randomizationFactor = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
      return this;
    }
  }, {
    key: "reconnectionDelayMax",
    value: function reconnectionDelayMax(v) {
      var _a;
      if (v === undefined) return this._reconnectionDelayMax;
      this._reconnectionDelayMax = v;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
      return this;
    }
  }, {
    key: "timeout",
    value: function timeout(v) {
      if (!arguments.length) return this._timeout;
      this._timeout = v;
      return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
  }, {
    key: "maybeReconnectOnOpen",
    value: function maybeReconnectOnOpen() {
      // Only try to reconnect if it's the first time we're connecting
      if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
        // keeps reconnection from firing twice for the same reconnection loop
        this.reconnect();
      }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
  }, {
    key: "open",
    value: function open(fn) {
      var _this2 = this;
      if (~this._readyState.indexOf("open")) return this;
      this.engine = new Socket$1(this.uri, this.opts);
      var socket = this.engine;
      var self = this;
      this._readyState = "opening";
      this.skipReconnect = false;
      // emit `open`
      var openSubDestroy = on$1(socket, "open", function () {
        self.onopen();
        fn && fn();
      });
      var onError = function onError(err) {
        _this2.cleanup();
        _this2._readyState = "closed";
        _this2.emitReserved("error", err);
        if (fn) {
          fn(err);
        } else {
          // Only do this if there is no fn to handle the error
          _this2.maybeReconnectOnOpen();
        }
      };
      // emit `error`
      var errorSub = on$1(socket, "error", onError);
      if (false !== this._timeout) {
        var timeout = this._timeout;
        // set timer
        var timer = this.setTimeoutFn(function () {
          openSubDestroy();
          onError(new Error("timeout"));
          socket.close();
        }, timeout);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(function () {
          _this2.clearTimeoutFn(timer);
        });
      }
      this.subs.push(openSubDestroy);
      this.subs.push(errorSub);
      return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
  }, {
    key: "connect",
    value: function connect(fn) {
      return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
  }, {
    key: "onopen",
    value: function onopen() {
      // clear old subs
      this.cleanup();
      // mark as open
      this._readyState = "open";
      this.emitReserved("open");
      // add new subs
      var socket = this.engine;
      this.subs.push(on$1(socket, "ping", this.onping.bind(this)), on$1(socket, "data", this.ondata.bind(this)), on$1(socket, "error", this.onerror.bind(this)), on$1(socket, "close", this.onclose.bind(this)),
      // @ts-ignore
      on$1(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
  }, {
    key: "onping",
    value: function onping() {
      this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
  }, {
    key: "ondata",
    value: function ondata(data) {
      try {
        this.decoder.add(data);
      } catch (e) {
        this.onclose("parse error", e);
      }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
  }, {
    key: "ondecoded",
    value: function ondecoded(packet) {
      var _this3 = this;
      // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
      nextTick(function () {
        _this3.emitReserved("packet", packet);
      }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
  }, {
    key: "onerror",
    value: function onerror(err) {
      this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
  }, {
    key: "socket",
    value: function socket(nsp, opts) {
      var socket = this.nsps[nsp];
      if (!socket) {
        socket = new Socket(this, nsp, opts);
        this.nsps[nsp] = socket;
      } else if (this._autoConnect && !socket.active) {
        socket.connect();
      }
      return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
  }, {
    key: "_destroy",
    value: function _destroy(socket) {
      var nsps = Object.keys(this.nsps);
      for (var _i = 0, _nsps = nsps; _i < _nsps.length; _i++) {
        var nsp = _nsps[_i];
        var _socket = this.nsps[nsp];
        if (_socket.active) {
          return;
        }
      }
      this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
  }, {
    key: "_packet",
    value: function _packet(packet) {
      var encodedPackets = this.encoder.encode(packet);
      for (var i = 0; i < encodedPackets.length; i++) {
        this.engine.write(encodedPackets[i], packet.options);
      }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.subs.forEach(function (subDestroy) {
        return subDestroy();
      });
      this.subs.length = 0;
      this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
  }, {
    key: "_close",
    value: function _close() {
      this.skipReconnect = true;
      this._reconnecting = false;
      this.onclose("forced close");
    }
    /**
     * Alias for close()
     *
     * @private
     */
  }, {
    key: "disconnect",
    value: function disconnect() {
      return this._close();
    }
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */
  }, {
    key: "onclose",
    value: function onclose(reason, description) {
      var _a;
      this.cleanup();
      (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
      this.backoff.reset();
      this._readyState = "closed";
      this.emitReserved("close", reason, description);
      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
  }, {
    key: "reconnect",
    value: function reconnect() {
      var _this4 = this;
      if (this._reconnecting || this.skipReconnect) return this;
      var self = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) {
        this.backoff.reset();
        this.emitReserved("reconnect_failed");
        this._reconnecting = false;
      } else {
        var delay = this.backoff.duration();
        this._reconnecting = true;
        var timer = this.setTimeoutFn(function () {
          if (self.skipReconnect) return;
          _this4.emitReserved("reconnect_attempt", self.backoff.attempts);
          // check again for the case socket closed in above events
          if (self.skipReconnect) return;
          self.open(function (err) {
            if (err) {
              self._reconnecting = false;
              self.reconnect();
              _this4.emitReserved("reconnect_error", err);
            } else {
              self.onreconnect();
            }
          });
        }, delay);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(function () {
          _this4.clearTimeoutFn(timer);
        });
      }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
  }, {
    key: "onreconnect",
    value: function onreconnect() {
      var attempt = this.backoff.attempts;
      this._reconnecting = false;
      this.backoff.reset();
      this.emitReserved("reconnect", attempt);
    }
  }]);
}(Emitter);

/**
 * Managers cache.
 */
var cache = {};
function lookup(uri, opts) {
  if (_typeof(uri) === "object") {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};
  var parsed = url(uri, opts.path || "/socket.io");
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id]["nsps"];
  var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  var io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
  Manager: Manager,
  Socket: Socket,
  io: lookup,
  connect: lookup
});

var _Ku;var _excluded=["message","explanation"];var _marked=/*#__PURE__*/_regeneratorRuntime().mark(ms);function a(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{c(r.next(e));}catch(e){o(e);}}function a(e){try{c(r["throw"](e));}catch(e){o(e);}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t);})).then(s,a);}c((r=r.apply(e,t||[])).next());});}"function"==typeof SuppressedError&&SuppressedError;var c="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},l=[],d=[],u="undefined"!=typeof Uint8Array?Uint8Array:Array,h=!1;function f(){h=!0;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=0;t<64;++t)l[t]=e[t],d[e.charCodeAt(t)]=t;d["-".charCodeAt(0)]=62,d["_".charCodeAt(0)]=63;}function p(e,t,n){for(var r,i,o=[],s=t;s<n;s+=3)r=(e[s]<<16)+(e[s+1]<<8)+e[s+2],o.push(l[(i=r)>>18&63]+l[i>>12&63]+l[i>>6&63]+l[63&i]);return o.join("");}function g(e){var t;h||f();for(var n=e.length,r=n%3,i="",o=[],s=16383,a=0,c=n-r;a<c;a+=s)o.push(p(e,a,a+s>c?c:a+s));return 1===r?(t=e[n-1],i+=l[t>>2],i+=l[t<<4&63],i+="=="):2===r&&(t=(e[n-2]<<8)+e[n-1],i+=l[t>>10],i+=l[t>>4&63],i+=l[t<<2&63],i+="="),o.push(i),o.join("");}function m(e,t,n,r,i){var o,s,a=8*i-r-1,c=(1<<a)-1,l=c>>1,d=-7,u=n?i-1:0,h=n?-1:1,f=e[t+u];for(u+=h,o=f&(1<<-d)-1,f>>=-d,d+=a;d>0;o=256*o+e[t+u],u+=h,d-=8);for(s=o&(1<<-d)-1,o>>=-d,d+=r;d>0;s=256*s+e[t+u],u+=h,d-=8);if(0===o)o=1-l;else {if(o===c)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,r),o-=l;}return (f?-1:1)*s*Math.pow(2,o-r);}function y(e,t,n,r,i,o){var s,a,c,l=8*o-i-1,d=(1<<l)-1,u=d>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:o-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=d):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),(t+=s+u>=1?h/c:h*Math.pow(2,1-u))*c>=2&&(s++,c/=2),s+u>=d?(a=0,s=d):s+u>=1?(a=(t*c-1)*Math.pow(2,i),s+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,i),s=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(s=s<<i|a,l+=i;l>0;e[n+f]=255&s,f+=p,s/=256,l-=8);e[n+f-p]|=128*g;}var v={}.toString,b=Array.isArray||function(e){return "[object Array]"==v.call(e);};S.TYPED_ARRAY_SUPPORT=void 0===c.TYPED_ARRAY_SUPPORT||c.TYPED_ARRAY_SUPPORT;var w=E();function E(){return S.TYPED_ARRAY_SUPPORT?2147483647:1073741823;}function C(e,t){if(E()<t)throw new RangeError("Invalid typed array length");return S.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=S.prototype:(null===e&&(e=new S(t)),e.length=t),e;}function S(e,t,n){if(!(S.TYPED_ARRAY_SUPPORT||this instanceof S))return new S(e,t,n);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return x(this,e);}return _(this,e,t,n);}function _(e,t,n,r){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return "undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,n,r){if(t.byteLength,n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");t=void 0===n&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r);S.TYPED_ARRAY_SUPPORT?(e=t).__proto__=S.prototype:e=M(e,t);return e;}(e,t,n,r):"string"==typeof t?function(e,t,n){"string"==typeof n&&""!==n||(n="utf8");if(!S.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|R(t,n);e=C(e,r);var i=e.write(t,n);i!==r&&(e=e.slice(0,i));return e;}(e,t,n):function(e,t){if(I(t)){var n=0|A(t.length);return 0===(e=C(e,n)).length||t.copy(e,0,0,n),e;}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return "number"!=typeof t.length||(r=t.length)!=r?C(e,0):M(e,t);if("Buffer"===t.type&&b(t.data))return M(e,t.data);}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");}(e,t);}function k(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative');}function x(e,t){if(k(t),e=C(e,t<0?0:0|A(t)),!S.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)e[n]=0;return e;}function M(e,t){var n=t.length<0?0:0|A(t.length);e=C(e,n);for(var r=0;r<n;r+=1)e[r]=255&t[r];return e;}function A(e){if(e>=E())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+E().toString(16)+" bytes");return 0|e;}function I(e){return !(null==e||!e._isBuffer);}function R(e,t){if(I(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var r=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return re(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ie(e).length;default:if(r)return re(e).length;t=(""+t).toLowerCase(),r=!0;}}function L(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return "";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return "";if((n>>>=0)<=(t>>>=0))return "";for(e||(e="utf8");;)switch(e){case"hex":return V(this,t,n);case"utf8":case"utf-8":return H(this,t,n);case"ascii":return z(this,t,n);case"latin1":case"binary":return q(this,t,n);case"base64":return U(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return W(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0;}}function P(e,t,n){var r=e[t];e[t]=e[n],e[n]=r;}function O(e,t,n,r,i){if(0===e.length)return -1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return -1;n=e.length-1;}else if(n<0){if(!i)return -1;n=0;}if("string"==typeof t&&(t=S.from(t,r)),I(t))return 0===t.length?-1:T(e,t,n,r,i);if("number"==typeof t)return t&=255,S.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):T(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer");}function T(e,t,n,r,i){var o,s=1,a=e.length,c=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return -1;s=2,a/=2,c/=2,n/=2;}function l(e,t){return 1===s?e[t]:e.readUInt16BE(t*s);}if(i){var d=-1;for(o=n;o<a;o++)if(l(e,o)===l(t,-1===d?0:o-d)){if(-1===d&&(d=o),o-d+1===c)return d*s;}else -1!==d&&(o-=o-d),d=-1;}else for(n+c>a&&(n=a-c),o=n;o>=0;o--){for(var u=!0,h=0;h<c;h++)if(l(e,o+h)!==l(t,h)){u=!1;break;}if(u)return o;}return -1;}function N(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var o=t.length;if(o%2!=0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var s=0;s<r;++s){var a=parseInt(t.substr(2*s,2),16);if(isNaN(a))return s;e[n+s]=a;}return s;}function $(e,t,n,r){return oe(re(t,e.length-n),e,n,r);}function D(e,t,n,r){return oe(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t;}(t),e,n,r);}function B(e,t,n,r){return D(e,t,n,r);}function K(e,t,n,r){return oe(ie(t),e,n,r);}function j(e,t,n,r){return oe(function(e,t){for(var n,r,i,o=[],s=0;s<e.length&&!((t-=2)<0);++s)r=(n=e.charCodeAt(s))>>8,i=n%256,o.push(i),o.push(r);return o;}(t,e.length-n),e,n,r);}function U(e,t,n){return 0===t&&n===e.length?g(e):g(e.slice(t,n));}function H(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;i<n;){var o,s,a,c,l=e[i],d=null,u=l>239?4:l>223?3:l>191?2:1;if(i+u<=n)switch(u){case 1:l<128&&(d=l);break;case 2:128==(192&(o=e[i+1]))&&(c=(31&l)<<6|63&o)>127&&(d=c);break;case 3:o=e[i+1],s=e[i+2],128==(192&o)&&128==(192&s)&&(c=(15&l)<<12|(63&o)<<6|63&s)>2047&&(c<55296||c>57343)&&(d=c);break;case 4:o=e[i+1],s=e[i+2],a=e[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(c=(15&l)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&c<1114112&&(d=c);}null===d?(d=65533,u=1):d>65535&&(d-=65536,r.push(d>>>10&1023|55296),d=56320|1023&d),r.push(d),i+=u;}return function(e){var t=e.length;if(t<=F)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=F));return n;}(r);}S.poolSize=8192,S._augment=function(e){return e.__proto__=S.prototype,e;},S.from=function(e,t,n){return _(null,e,t,n);},S.TYPED_ARRAY_SUPPORT&&(S.prototype.__proto__=Uint8Array.prototype,S.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&S[Symbol.species]),S.alloc=function(e,t,n){return function(e,t,n,r){return k(t),t<=0?C(e,t):void 0!==n?"string"==typeof r?C(e,t).fill(n,r):C(e,t).fill(n):C(e,t);}(null,e,t,n);},S.allocUnsafe=function(e){return x(null,e);},S.allocUnsafeSlow=function(e){return x(null,e);},S.isBuffer=se,S.compare=function(e,t){if(!I(e)||!I(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break;}return n<r?-1:r<n?1:0;},S.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return !0;default:return !1;}},S.concat=function(e,t){if(!b(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return S.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=S.allocUnsafe(t),i=0;for(n=0;n<e.length;++n){var o=e[n];if(!I(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,i),i+=o.length;}return r;},S.byteLength=R,S.prototype._isBuffer=!0,S.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)P(this,t,t+1);return this;},S.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)P(this,t,t+3),P(this,t+1,t+2);return this;},S.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)P(this,t,t+7),P(this,t+1,t+6),P(this,t+2,t+5),P(this,t+3,t+4);return this;},S.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?H(this,0,e):L.apply(this,arguments);},S.prototype.equals=function(e){if(!I(e))throw new TypeError("Argument must be a Buffer");return this===e||0===S.compare(this,e);},S.prototype.inspect=function(){var e="";return this.length>0&&(e=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(e+=" ... ")),"<Buffer "+e+">";},S.prototype.compare=function(e,t,n,r,i){if(!I(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return -1;if(t>=n)return 1;if(this===e)return 0;for(var o=(i>>>=0)-(r>>>=0),s=(n>>>=0)-(t>>>=0),a=Math.min(o,s),c=this.slice(r,i),l=e.slice(t,n),d=0;d<a;++d)if(c[d]!==l[d]){o=c[d],s=l[d];break;}return o<s?-1:s<o?1:0;},S.prototype.includes=function(e,t,n){return -1!==this.indexOf(e,t,n);},S.prototype.indexOf=function(e,t,n){return O(this,e,t,n,!0);},S.prototype.lastIndexOf=function(e,t,n){return O(this,e,t,n,!1);},S.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else {if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0);}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return N(this,e,t,n);case"utf8":case"utf-8":return $(this,e,t,n);case"ascii":return D(this,e,t,n);case"latin1":case"binary":return B(this,e,t,n);case"base64":return K(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0;}},S.prototype.toJSON=function(){return {type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)};};var F=4096;function z(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r;}function q(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r;}function V(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=t;o<n;++o)i+=ne(e[o]);return i;}function W(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i;}function G(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length");}function Z(e,t,n,r,i,o){if(!I(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range");}function Y(e,t,n,r){t<0&&(t=65535+t+1);for(var i=0,o=Math.min(e.length-n,2);i<o;++i)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i);}function J(e,t,n,r){t<0&&(t=4294967295+t+1);for(var i=0,o=Math.min(e.length-n,4);i<o;++i)e[n+i]=t>>>8*(r?i:3-i)&255;}function X(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range");}function Q(e,t,n,r,i){return i||X(e,0,n,4),y(e,t,n,r,23,4),n+4;}function ee(e,t,n,r,i){return i||X(e,0,n,8),y(e,t,n,r,52,8),n+8;}S.prototype.slice=function(e,t){var n,r=this.length;if((e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e),S.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=S.prototype;else {var i=t-e;n=new S(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+e];}return n;},S.prototype.readUIntLE=function(e,t,n){e|=0,t|=0,n||G(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r;},S.prototype.readUIntBE=function(e,t,n){e|=0,t|=0,n||G(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r;},S.prototype.readUInt8=function(e,t){return t||G(e,1,this.length),this[e];},S.prototype.readUInt16LE=function(e,t){return t||G(e,2,this.length),this[e]|this[e+1]<<8;},S.prototype.readUInt16BE=function(e,t){return t||G(e,2,this.length),this[e]<<8|this[e+1];},S.prototype.readUInt32LE=function(e,t){return t||G(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3];},S.prototype.readUInt32BE=function(e,t){return t||G(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3]);},S.prototype.readIntLE=function(e,t,n){e|=0,t|=0,n||G(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*t)),r;},S.prototype.readIntBE=function(e,t,n){e|=0,t|=0,n||G(e,t,this.length);for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o;},S.prototype.readInt8=function(e,t){return t||G(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e];},S.prototype.readInt16LE=function(e,t){t||G(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n;},S.prototype.readInt16BE=function(e,t){t||G(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n;},S.prototype.readInt32LE=function(e,t){return t||G(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24;},S.prototype.readInt32BE=function(e,t){return t||G(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3];},S.prototype.readFloatLE=function(e,t){return t||G(e,4,this.length),m(this,e,!0,23,4);},S.prototype.readFloatBE=function(e,t){return t||G(e,4,this.length),m(this,e,!1,23,4);},S.prototype.readDoubleLE=function(e,t){return t||G(e,8,this.length),m(this,e,!0,52,8);},S.prototype.readDoubleBE=function(e,t){return t||G(e,8,this.length),m(this,e,!1,52,8);},S.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||Z(this,e,t,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[t]=255&e;++o<n&&(i*=256);)this[t+o]=e/i&255;return t+n;},S.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t|=0,n|=0,r)||Z(this,e,t,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+n;},S.prototype.writeUInt8=function(e,t,n){return e=+e,t|=0,n||Z(this,e,t,1,255,0),S.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1;},S.prototype.writeUInt16LE=function(e,t,n){return e=+e,t|=0,n||Z(this,e,t,2,65535,0),S.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):Y(this,e,t,!0),t+2;},S.prototype.writeUInt16BE=function(e,t,n){return e=+e,t|=0,n||Z(this,e,t,2,65535,0),S.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):Y(this,e,t,!1),t+2;},S.prototype.writeUInt32LE=function(e,t,n){return e=+e,t|=0,n||Z(this,e,t,4,4294967295,0),S.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):J(this,e,t,!0),t+4;},S.prototype.writeUInt32BE=function(e,t,n){return e=+e,t|=0,n||Z(this,e,t,4,4294967295,0),S.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):J(this,e,t,!1),t+4;},S.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1);Z(this,e,t,n,i-1,-i);}var o=0,s=1,a=0;for(this[t]=255&e;++o<n&&(s*=256);)e<0&&0===a&&0!==this[t+o-1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n;},S.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t|=0,!r){var i=Math.pow(2,8*n-1);Z(this,e,t,n,i-1,-i);}var o=n-1,s=1,a=0;for(this[t+o]=255&e;--o>=0&&(s*=256);)e<0&&0===a&&0!==this[t+o+1]&&(a=1),this[t+o]=(e/s>>0)-a&255;return t+n;},S.prototype.writeInt8=function(e,t,n){return e=+e,t|=0,n||Z(this,e,t,1,127,-128),S.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1;},S.prototype.writeInt16LE=function(e,t,n){return e=+e,t|=0,n||Z(this,e,t,2,32767,-32768),S.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):Y(this,e,t,!0),t+2;},S.prototype.writeInt16BE=function(e,t,n){return e=+e,t|=0,n||Z(this,e,t,2,32767,-32768),S.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):Y(this,e,t,!1),t+2;},S.prototype.writeInt32LE=function(e,t,n){return e=+e,t|=0,n||Z(this,e,t,4,2147483647,-2147483648),S.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):J(this,e,t,!0),t+4;},S.prototype.writeInt32BE=function(e,t,n){return e=+e,t|=0,n||Z(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),S.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):J(this,e,t,!1),t+4;},S.prototype.writeFloatLE=function(e,t,n){return Q(this,e,t,!0,n);},S.prototype.writeFloatBE=function(e,t,n){return Q(this,e,t,!1,n);},S.prototype.writeDoubleLE=function(e,t,n){return ee(this,e,t,!0,n);},S.prototype.writeDoubleBE=function(e,t,n){return ee(this,e,t,!1,n);},S.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i,o=r-n;if(this===e&&n<t&&t<r)for(i=o-1;i>=0;--i)e[i+t]=this[i+n];else if(o<1e3||!S.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)e[i+t]=this[i+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t);return o;},S.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i);}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!S.isEncoding(r))throw new TypeError("Unknown encoding: "+r);}else "number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else {var s=I(e)?e:re(new S(e,r).toString()),a=s.length;for(o=0;o<n-t;++o)this[o+t]=s[o%a];}return this;};var te=/[^+\/0-9A-Za-z-_]/g;function ne(e){return e<16?"0"+e.toString(16):e.toString(16);}function re(e,t){var n;t=t||1/0;for(var r=e.length,i=null,o=[],s=0;s<r;++s){if((n=e.charCodeAt(s))>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue;}if(s+1===r){(t-=3)>-1&&o.push(239,191,189);continue;}i=n;continue;}if(n<56320){(t-=3)>-1&&o.push(239,191,189),i=n;continue;}n=65536+(i-55296<<10|n-56320);}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;o.push(n);}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128);}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128);}else {if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128);}}return o;}function ie(e){return function(e){var t,n,r,i,o,s;h||f();var a=e.length;if(a%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o="="===e[a-2]?2:"="===e[a-1]?1:0,s=new u(3*a/4-o),r=o>0?a-4:a;var c=0;for(t=0,n=0;t<r;t+=4,n+=3)i=d[e.charCodeAt(t)]<<18|d[e.charCodeAt(t+1)]<<12|d[e.charCodeAt(t+2)]<<6|d[e.charCodeAt(t+3)],s[c++]=i>>16&255,s[c++]=i>>8&255,s[c++]=255&i;return 2===o?(i=d[e.charCodeAt(t)]<<2|d[e.charCodeAt(t+1)]>>4,s[c++]=255&i):1===o&&(i=d[e.charCodeAt(t)]<<10|d[e.charCodeAt(t+1)]<<4|d[e.charCodeAt(t+2)]>>2,s[c++]=i>>8&255,s[c++]=255&i),s;}(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"");}(e).replace(te,"")).length<2)return "";for(;e.length%4!=0;)e+="=";return e;}(e));}function oe(e,t,n,r){for(var i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i;}function se(e){return null!=e&&(!!e._isBuffer||ae(e)||function(e){return "function"==typeof e.readFloatLE&&"function"==typeof e.slice&&ae(e.slice(0,0));}(e));}function ae(e){return !!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e);}var ce=Object.freeze({__proto__:null,Buffer:S,INSPECT_MAX_BYTES:50,SlowBuffer:function SlowBuffer(e){return +e!=e&&(e=0),S.alloc(+e);},isBuffer:se,kMaxLength:w}),le="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function de(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e;}function ue(e){if(e.__esModule)return e;var t=e["default"];if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments);};n.prototype=t.prototype;}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function get(){return e[t];}});}),n;}var he={},fe={},pe={};function ge(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("positive integer expected, not ".concat(e));}function me(e){if("boolean"!=typeof e)throw new Error("boolean expected, not ".concat(e));}function ye(e){return e instanceof Uint8Array||null!=e&&"object"==_typeof(e)&&"Uint8Array"===e.constructor.name;}function ve(e){if(!ye(e))throw new Error("Uint8Array expected");for(var _len=arguments.length,t=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){t[_key-1]=arguments[_key];}if(t.length>0&&!t.includes(e.length))throw new Error("Uint8Array expected of length ".concat(t,", not of length=").concat(e.length));}function be(e){if("function"!=typeof e||"function"!=typeof e.create)throw new Error("hash must be wrapped by utils.wrapConstructor");ge(e.outputLen),ge(e.blockLen);}function we(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called");}function Ee(e,t){ve(e);var n=t.outputLen;if(e.length<n)throw new Error("digestInto() expects output buffer of length at least ".concat(n));}Object.defineProperty(pe,"__esModule",{value:!0}),pe.isBytes=ye,pe.number=ge,pe.bool=me,pe.bytes=ve,pe.hash=be,pe.exists=we,pe.output=Ee;var Ce={number:ge,bool:me,bytes:ve,hash:be,exists:we,output:Ee};pe["default"]=Ce,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.wrapCipher=e.Hash=e.nextTick=e.isLE=e.createView=e.u32=e.u16=e.u8=void 0,e.bytesToHex=r,e.hexToBytes=s,e.hexToNumber=a,e.bytesToNumberBE=function(e){return a(r(e));},e.numberToBytesBE=function(e,t){return s(e.toString(16).padStart(2*t,"0"));},e.asyncLoop=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(t,n,r){var i,_o2,_t2;return _regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:i=Date.now();_o2=0;case 2:if(!(_o2<t)){_context.next=13;break;}r(_o2);_t2=Date.now()-i;_context.t0=_t2>=0&&_t2<n;if(_context.t0){_context.next=10;break;}_context.next=9;return (0,e.nextTick)();case 9:i+=_t2;case 10:_o2++;_context.next=2;break;case 13:case"end":return _context.stop();}},_callee);}));return function(_x,_x2,_x3){return _ref.apply(this,arguments);};}(),e.utf8ToBytes=c,e.bytesToUtf8=function(e){return new TextDecoder().decode(e);},e.toBytes=function(e){if("string"==typeof e)e=c(e);else {if(!(0,t.isBytes)(e))throw new Error("Uint8Array expected, got "+_typeof(e));e=d(e);}return e;},e.concatBytes=function(){var n=0;for(var _r2=0;_r2<arguments.length;_r2++){var _i2=_r2<0||arguments.length<=_r2?undefined:arguments[_r2];(0,t.bytes)(_i2),n+=_i2.length;}var r=new Uint8Array(n);for(var _t3=0,_n2=0;_t3<arguments.length;_t3++){var _i3=_t3<0||arguments.length<=_t3?undefined:arguments[_t3];r.set(_i3,_n2),_n2+=_i3.length;}return r;},e.checkOpts=function(e,t){if(null==t||"object"!=_typeof(t))throw new Error("options must be defined");return Object.assign(e,t);},e.equalBytes=function(e,t){if(e.length!==t.length)return !1;var n=0;for(var _r3=0;_r3<e.length;_r3++)n|=e[_r3]^t[_r3];return 0===n;},e.setBigUint64=l,e.u64Lengths=function(t,n){var r=new Uint8Array(16),i=(0,e.createView)(r);return l(i,0,BigInt(n?n.length:0),!0),l(i,8,BigInt(t.length),!0),r;},e.isAligned32=function(e){return e.byteOffset%4==0;},e.copyBytes=d,e.clean=function(){for(var _len2=arguments.length,e=new Array(_len2),_key2=0;_key2<_len2;_key2++){e[_key2]=arguments[_key2];}for(var _t4=0;_t4<e.length;_t4++)e[_t4].fill(0);};var t=pe;e.u8=function(e){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);};e.u16=function(e){return new Uint16Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/2));};e.u32=function(e){return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4));};if(e.createView=function(e){return new DataView(e.buffer,e.byteOffset,e.byteLength);},e.isLE=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],!e.isLE)throw new Error("Non little-endian hardware is not supported");var n=Array.from({length:256},function(e,t){return t.toString(16).padStart(2,"0");});function r(e){(0,t.bytes)(e);var r="";for(var _t5=0;_t5<e.length;_t5++)r+=n[e[_t5]];return r;}var i={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function o(e){return e>=i._0&&e<=i._9?e-i._0:e>=i._A&&e<=i._F?e-(i._A-10):e>=i._a&&e<=i._f?e-(i._a-10):void 0;}function s(e){if("string"!=typeof e)throw new Error("hex string expected, got "+_typeof(e));var t=e.length,n=t/2;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);var r=new Uint8Array(n);for(var _t6=0,_i4=0;_t6<n;_t6++,_i4+=2){var _n3=o(e.charCodeAt(_i4)),_s2=o(e.charCodeAt(_i4+1));if(void 0===_n3||void 0===_s2){var _t7=e[_i4]+e[_i4+1];throw new Error('hex string expected, got non-hex character "'+_t7+'" at index '+_i4);}r[_t6]=16*_n3+_s2;}return r;}function a(e){if("string"!=typeof e)throw new Error("hex string expected, got "+_typeof(e));return BigInt(""===e?"0":"0x".concat(e));}function c(e){if("string"!=typeof e)throw new Error("string expected, got "+_typeof(e));return new Uint8Array(new TextEncoder().encode(e));}e.nextTick=/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(){return _regeneratorRuntime().wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:case"end":return _context2.stop();}},_callee2);}));e.Hash=/*#__PURE__*/_createClass(function _class(){_classCallCheck(this,_class);});function l(e,t,n,r){if("function"==typeof e.setBigUint64)return e.setBigUint64(t,n,r);var i=BigInt(32),o=BigInt(4294967295),s=Number(n>>i&o),a=Number(n&o),c=r?4:0,l=r?0:4;e.setUint32(t+c,s,r),e.setUint32(t+l,a,r);}function d(e){return Uint8Array.from(e);}e.wrapCipher=function(e,t){return Object.assign(t,e),t;};}(fe);var Se={},_e={};Object.defineProperty(_e,"__esModule",{value:!0}),_e.AEAD_TAG_LENGTH=_e.XCHACHA20_NONCE_LENGTH=_e.CURVE25519_PUBLIC_KEY_SIZE=_e.ETH_PUBLIC_KEY_SIZE=_e.UNCOMPRESSED_PUBLIC_KEY_SIZE=_e.COMPRESSED_PUBLIC_KEY_SIZE=_e.SECRET_KEY_LENGTH=void 0,_e.SECRET_KEY_LENGTH=32,_e.COMPRESSED_PUBLIC_KEY_SIZE=33,_e.UNCOMPRESSED_PUBLIC_KEY_SIZE=65,_e.ETH_PUBLIC_KEY_SIZE=64,_e.CURVE25519_PUBLIC_KEY_SIZE=32,_e.XCHACHA20_NONCE_LENGTH=24,_e.AEAD_TAG_LENGTH=16,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ephemeralKeySize=e.symmetricNonceLength=e.symmetricAlgorithm=e.isHkdfKeyCompressed=e.isEphemeralKeyCompressed=e.ellipticCurve=e.ECIES_CONFIG=void 0;var t=_e,n=function n(){this.ellipticCurve="secp256k1",this.isEphemeralKeyCompressed=!1,this.isHkdfKeyCompressed=!1,this.symmetricAlgorithm="aes-256-gcm",this.symmetricNonceLength=16;};e.ECIES_CONFIG=new n();e.ellipticCurve=function(){return e.ECIES_CONFIG.ellipticCurve;};e.isEphemeralKeyCompressed=function(){return e.ECIES_CONFIG.isEphemeralKeyCompressed;};e.isHkdfKeyCompressed=function(){return e.ECIES_CONFIG.isHkdfKeyCompressed;};e.symmetricAlgorithm=function(){return e.ECIES_CONFIG.symmetricAlgorithm;};e.symmetricNonceLength=function(){return e.ECIES_CONFIG.symmetricNonceLength;};e.ephemeralKeySize=function(){var n={secp256k1:e.ECIES_CONFIG.isEphemeralKeyCompressed?t.COMPRESSED_PUBLIC_KEY_SIZE:t.UNCOMPRESSED_PUBLIC_KEY_SIZE,x25519:t.CURVE25519_PUBLIC_KEY_SIZE,ed25519:t.CURVE25519_PUBLIC_KEY_SIZE};if(e.ECIES_CONFIG.ellipticCurve in n)return n[e.ECIES_CONFIG.ellipticCurve];throw new Error("Not implemented");};}(Se);var ke={},xe={},Me={},Ae={},Ie={},Re={};Object.defineProperty(Re,"__esModule",{value:!0}),Re.crypto=void 0,Re.crypto="object"==(typeof globalThis==="undefined"?"undefined":_typeof(globalThis))&&"crypto"in globalThis?globalThis.crypto:void 0,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.gcm=e.ctr=e.cbc=e.utils=void 0,e.randomBytes=i,e.getWebcryptoSubtle=o,e.managedNonce=function(e){return (0,n.number)(e.nonceLength),function(t){for(var _len3=arguments.length,n=new Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++){n[_key3-1]=arguments[_key3];}return {encrypt:function encrypt(o){var _e2;for(var _len4=arguments.length,s=new Array(_len4>1?_len4-1:0),_key4=1;_key4<_len4;_key4++){s[_key4-1]=arguments[_key4];}var a=e.nonceLength,c=i(a),l=(_e2=e.apply(void 0,[t,c].concat(n))).encrypt.apply(_e2,[o].concat(s)),d=(0,r.concatBytes)(c,l);return l.fill(0),d;},decrypt:function decrypt(r){var _e3;var o=e.nonceLength,s=r.subarray(0,o),a=r.subarray(o);for(var _len5=arguments.length,i=new Array(_len5>1?_len5-1:0),_key5=1;_key5<_len5;_key5++){i[_key5-1]=arguments[_key5];}return (_e3=e.apply(void 0,[t,s].concat(n))).decrypt.apply(_e3,[a].concat(i));}};};};var t=Re,n=pe,r=fe;function i(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:32;if(t.crypto&&"function"==typeof t.crypto.getRandomValues)return t.crypto.getRandomValues(new Uint8Array(e));if(t.crypto&&"function"==typeof t.crypto.randomBytes)return t.crypto.randomBytes(e);throw new Error("crypto.getRandomValues must be defined");}function o(){if(t.crypto&&"object"==_typeof(t.crypto.subtle)&&null!=t.crypto.subtle)return t.crypto.subtle;throw new Error("crypto.subtle must be defined");}e.utils={encrypt:function encrypt(e,t,n,r){return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(){var i,s,a;return _regeneratorRuntime().wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:i=o();_context3.next=3;return i.importKey("raw",e,t,!0,["encrypt"]);case 3:s=_context3.sent;_context3.next=6;return i.encrypt(n,s,r);case 6:a=_context3.sent;return _context3.abrupt("return",new Uint8Array(a));case 8:case"end":return _context3.stop();}},_callee3);}))();},decrypt:function decrypt(e,t,n,r){return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(){var i,s,a;return _regeneratorRuntime().wrap(function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:i=o();_context4.next=3;return i.importKey("raw",e,t,!0,["decrypt"]);case 3:s=_context4.sent;_context4.next=6;return i.decrypt(n,s,r);case 6:a=_context4.sent;return _context4.abrupt("return",new Uint8Array(a));case 8:case"end":return _context4.stop();}},_callee4);}))();}};var s={CBC:"AES-CBC",CTR:"AES-CTR",GCM:"AES-GCM"};function a(t){return function(r,i,o){(0,n.bytes)(r),(0,n.bytes)(i);var a={name:t,length:8*r.length},c=function(e,t,n){if(e===s.CBC)return {name:s.CBC,iv:t};if(e===s.CTR)return {name:s.CTR,counter:t,length:64};if(e===s.GCM)return n?{name:s.GCM,iv:t,additionalData:n}:{name:s.GCM,iv:t};throw new Error("unknown aes block mode");}(t,i,o);return {encrypt:function encrypt(t){return (0,n.bytes)(t),e.utils.encrypt(r,a,c,t);},decrypt:function decrypt(t){return (0,n.bytes)(t),e.utils.decrypt(r,a,c,t);}};};}e.cbc=a(s.CBC),e.ctr=a(s.CTR),e.gcm=a(s.GCM);}(Ie);var Le={},Pe={},Oe={},Te={};function Ne(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("positive integer expected, not ".concat(e));}function $e(e){if("boolean"!=typeof e)throw new Error("boolean expected, not ".concat(e));}function De(e){return e instanceof Uint8Array||null!=e&&"object"==_typeof(e)&&"Uint8Array"===e.constructor.name;}function Be(e){if(!De(e))throw new Error("Uint8Array expected");for(var _len6=arguments.length,t=new Array(_len6>1?_len6-1:0),_key6=1;_key6<_len6;_key6++){t[_key6-1]=arguments[_key6];}if(t.length>0&&!t.includes(e.length))throw new Error("Uint8Array expected of length ".concat(t,", not of length=").concat(e.length));}function Ke(e){if("function"!=typeof e||"function"!=typeof e.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");Ne(e.outputLen),Ne(e.blockLen);}function je(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called");}function Ue(e,t){Be(e);var n=t.outputLen;if(e.length<n)throw new Error("digestInto() expects output buffer of length at least ".concat(n));}Object.defineProperty(Te,"__esModule",{value:!0}),Te.isBytes=De,Te.number=Ne,Te.bool=$e,Te.bytes=Be,Te.hash=Ke,Te.exists=je,Te.output=Ue;var He={number:Ne,bool:$e,bytes:Be,hash:Ke,exists:je,output:Ue};Te["default"]=He;var Fe={},ze={};Object.defineProperty(ze,"__esModule",{value:!0}),ze.crypto=void 0,ze.crypto="object"==(typeof globalThis==="undefined"?"undefined":_typeof(globalThis))&&"crypto"in globalThis?globalThis.crypto:void 0,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Hash=e.nextTick=e.byteSwapIfBE=e.byteSwap=e.isLE=e.rotl=e.rotr=e.createView=e.u32=e.u8=void 0,e.isBytes=function(e){return e instanceof Uint8Array||null!=e&&"object"==_typeof(e)&&"Uint8Array"===e.constructor.name;},e.byteSwap32=function(t){for(var _n4=0;_n4<t.length;_n4++)t[_n4]=(0,e.byteSwap)(t[_n4]);},e.bytesToHex=function(e){(0,n.bytes)(e);var t="";for(var _n5=0;_n5<e.length;_n5++)t+=r[e[_n5]];return t;},e.hexToBytes=function(e){if("string"!=typeof e)throw new Error("hex string expected, got "+_typeof(e));var t=e.length,n=t/2;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);var r=new Uint8Array(n);for(var _t8=0,_i5=0;_t8<n;_t8++,_i5+=2){var _n6=o(e.charCodeAt(_i5)),_s3=o(e.charCodeAt(_i5+1));if(void 0===_n6||void 0===_s3){var _t9=e[_i5]+e[_i5+1];throw new Error('hex string expected, got non-hex character "'+_t9+'" at index '+_i5);}r[_t8]=16*_n6+_s3;}return r;},e.asyncLoop=/*#__PURE__*/function(){var _ref3=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(t,n,r){var i,_o3,_t10;return _regeneratorRuntime().wrap(function _callee5$(_context5){while(1)switch(_context5.prev=_context5.next){case 0:i=Date.now();_o3=0;case 2:if(!(_o3<t)){_context5.next=13;break;}r(_o3);_t10=Date.now()-i;_context5.t0=_t10>=0&&_t10<n;if(_context5.t0){_context5.next=10;break;}_context5.next=9;return (0,e.nextTick)();case 9:i+=_t10;case 10:_o3++;_context5.next=2;break;case 13:case"end":return _context5.stop();}},_callee5);}));return function(_x4,_x5,_x6){return _ref3.apply(this,arguments);};}(),e.utf8ToBytes=s,e.toBytes=a,e.concatBytes=function(){var t=0;for(var _r4=0;_r4<arguments.length;_r4++){var _i6=_r4<0||arguments.length<=_r4?undefined:arguments[_r4];(0,n.bytes)(_i6),t+=_i6.length;}var r=new Uint8Array(t);for(var _t11=0,_n7=0;_t11<arguments.length;_t11++){var _i7=_t11<0||arguments.length<=_t11?undefined:arguments[_t11];r.set(_i7,_n7),_n7+=_i7.length;}return r;},e.checkOpts=function(e,t){if(void 0!==t&&"[object Object]"!==c.call(t))throw new Error("Options should be object or undefined");return Object.assign(e,t);},e.wrapConstructor=function(e){var t=function t(_t12){return e().update(a(_t12)).digest();},n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=function(){return e();},t;},e.wrapConstructorWithOpts=function(e){var t=function t(_t13,n){return e(n).update(a(_t13)).digest();},n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=function(t){return e(t);},t;},e.wrapXOFConstructorWithOpts=function(e){var t=function t(_t14,n){return e(n).update(a(_t14)).digest();},n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=function(t){return e(t);},t;},e.randomBytes=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:32;if(t.crypto&&"function"==typeof t.crypto.getRandomValues)return t.crypto.getRandomValues(new Uint8Array(e));if(t.crypto&&"function"==typeof t.crypto.randomBytes)return t.crypto.randomBytes(e);throw new Error("crypto.getRandomValues must be defined");};var t=ze,n=Te;e.u8=function(e){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);};e.u32=function(e){return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4));};e.createView=function(e){return new DataView(e.buffer,e.byteOffset,e.byteLength);};e.rotr=function(e,t){return e<<32-t|e>>>t;};e.rotl=function(e,t){return e<<t|e>>>32-t>>>0;},e.isLE=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0];e.byteSwap=function(e){return e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255;},e.byteSwapIfBE=e.isLE?function(e){return e;}:function(t){return (0,e.byteSwap)(t);};var r=Array.from({length:256},function(e,t){return t.toString(16).padStart(2,"0");});var i={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function o(e){return e>=i._0&&e<=i._9?e-i._0:e>=i._A&&e<=i._F?e-(i._A-10):e>=i._a&&e<=i._f?e-(i._a-10):void 0;}function s(e){if("string"!=typeof e)throw new Error("utf8ToBytes expected string, got "+_typeof(e));return new Uint8Array(new TextEncoder().encode(e));}function a(e){return "string"==typeof e&&(e=s(e)),(0,n.bytes)(e),e;}e.nextTick=/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(){return _regeneratorRuntime().wrap(function _callee6$(_context6){while(1)switch(_context6.prev=_context6.next){case 0:case"end":return _context6.stop();}},_callee6);}));e.Hash=/*#__PURE__*/function(){function _class2(){_classCallCheck(this,_class2);}return _createClass(_class2,[{key:"clone",value:function clone(){return this._cloneInto();}}]);}();var c={}.toString;}(Fe),Object.defineProperty(Oe,"__esModule",{value:!0}),Oe.HashMD=Oe.Maj=Oe.Chi=void 0;var qe=Te,Ve=Fe;Oe.Chi=function(e,t,n){return e&t^~e&n;};Oe.Maj=function(e,t,n){return e&t^e&n^t&n;};Oe.HashMD=/*#__PURE__*/function(_Ve$Hash){function _class3(e,t,n,r){var _this;_classCallCheck(this,_class3);_this=_callSuper(this,_class3),_this.blockLen=e,_this.outputLen=t,_this.padOffset=n,_this.isLE=r,_this.finished=!1,_this.length=0,_this.pos=0,_this.destroyed=!1,_this.buffer=new Uint8Array(e),_this.view=(0,Ve.createView)(_this.buffer);return _this;}_inherits(_class3,_Ve$Hash);return _createClass(_class3,[{key:"update",value:function update(e){(0,qe.exists)(this);var t=this.view,n=this.buffer,r=this.blockLen,i=(e=(0,Ve.toBytes)(e)).length;for(var _o4=0;_o4<i;){var _s4=Math.min(r-this.pos,i-_o4);if(_s4!==r)n.set(e.subarray(_o4,_o4+_s4),this.pos),this.pos+=_s4,_o4+=_s4,this.pos===r&&(this.process(t,0),this.pos=0);else {var _t15=(0,Ve.createView)(e);for(;r<=i-_o4;_o4+=r)this.process(_t15,_o4);}}return this.length+=e.length,this.roundClean(),this;}},{key:"digestInto",value:function digestInto(e){(0,qe.exists)(this),(0,qe.output)(e,this),this.finished=!0;var t=this.buffer,n=this.view,r=this.blockLen,i=this.isLE;var o=this.pos;t[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>r-o&&(this.process(n,0),o=0);for(var _e4=o;_e4<r;_e4++)t[_e4]=0;!function(e,t,n,r){if("function"==typeof e.setBigUint64)return e.setBigUint64(t,n,r);var i=BigInt(32),o=BigInt(4294967295),s=Number(n>>i&o),a=Number(n&o),c=r?4:0,l=r?0:4;e.setUint32(t+c,s,r),e.setUint32(t+l,a,r);}(n,r-8,BigInt(8*this.length),i),this.process(n,0);var s=(0,Ve.createView)(e),a=this.outputLen;if(a%4)throw new Error("_sha2: outputLen should be aligned to 32bit");var c=a/4,l=this.get();if(c>l.length)throw new Error("_sha2: outputLen bigger than state");for(var _e5=0;_e5<c;_e5++)s.setUint32(4*_e5,l[_e5],i);}},{key:"digest",value:function digest(){var e=this.buffer,t=this.outputLen;this.digestInto(e);var n=e.slice(0,t);return this.destroy(),n;}},{key:"_cloneInto",value:function _cloneInto(e){var _e6;e||(e=new this.constructor()),(_e6=e).set.apply(_e6,_toConsumableArray(this.get()));var t=this.blockLen,n=this.buffer,r=this.length,i=this.finished,o=this.destroyed,s=this.pos;return e.length=r,e.pos=s,e.finished=i,e.destroyed=o,r%t&&e.buffer.set(n),e;}}]);}(Ve.Hash);var We={};Object.defineProperty(We,"__esModule",{value:!0}),We.add5L=We.add5H=We.add4H=We.add4L=We.add3H=We.add3L=We.rotlBL=We.rotlBH=We.rotlSL=We.rotlSH=We.rotr32L=We.rotr32H=We.rotrBL=We.rotrBH=We.rotrSL=We.rotrSH=We.shrSL=We.shrSH=We.toBig=void 0,We.fromBig=Ye,We.split=Je,We.add=ut;var Ge=BigInt(Math.pow(2,32)-1),Ze=BigInt(32);function Ye(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;return t?{h:Number(e&Ge),l:Number(e>>Ze&Ge)}:{h:0|Number(e>>Ze&Ge),l:0|Number(e&Ge)};}function Je(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;var n=new Uint32Array(e.length),r=new Uint32Array(e.length);for(var _i8=0;_i8<e.length;_i8++){var _Ye=Ye(e[_i8],t),_o5=_Ye.h,_s5=_Ye.l;var _ref5=[_o5,_s5];n[_i8]=_ref5[0];r[_i8]=_ref5[1];}return [n,r];}var Xe=function Xe(e,t){return BigInt(e>>>0)<<Ze|BigInt(t>>>0);};We.toBig=Xe;var Qe=function Qe(e,t,n){return e>>>n;};We.shrSH=Qe;var et=function et(e,t,n){return e<<32-n|t>>>n;};We.shrSL=et;var tt=function tt(e,t,n){return e>>>n|t<<32-n;};We.rotrSH=tt;var nt=function nt(e,t,n){return e<<32-n|t>>>n;};We.rotrSL=nt;var rt=function rt(e,t,n){return e<<64-n|t>>>n-32;};We.rotrBH=rt;var it=function it(e,t,n){return e>>>n-32|t<<64-n;};We.rotrBL=it;var ot=function ot(e,t){return t;};We.rotr32H=ot;var st=function st(e,t){return e;};We.rotr32L=st;var at=function at(e,t,n){return e<<n|t>>>32-n;};We.rotlSH=at;var ct=function ct(e,t,n){return t<<n|e>>>32-n;};We.rotlSL=ct;var lt=function lt(e,t,n){return t<<n-32|e>>>64-n;};We.rotlBH=lt;var dt=function dt(e,t,n){return e<<n-32|t>>>64-n;};function ut(e,t,n,r){var i=(t>>>0)+(r>>>0);return {h:e+n+(i/Math.pow(2,32)|0)|0,l:0|i};}We.rotlBL=dt;var ht=function ht(e,t,n){return (e>>>0)+(t>>>0)+(n>>>0);};We.add3L=ht;var ft=function ft(e,t,n,r){return t+n+r+(e/Math.pow(2,32)|0)|0;};We.add3H=ft;var pt=function pt(e,t,n,r){return (e>>>0)+(t>>>0)+(n>>>0)+(r>>>0);};We.add4L=pt;var gt=function gt(e,t,n,r,i){return t+n+r+i+(e/Math.pow(2,32)|0)|0;};We.add4H=gt;var mt=function mt(e,t,n,r,i){return (e>>>0)+(t>>>0)+(n>>>0)+(r>>>0)+(i>>>0);};We.add5L=mt;var yt=function yt(e,t,n,r,i,o){return t+n+r+i+o+(e/Math.pow(2,32)|0)|0;};We.add5H=yt;var vt={fromBig:Ye,split:Je,toBig:Xe,shrSH:Qe,shrSL:et,rotrSH:tt,rotrSL:nt,rotrBH:rt,rotrBL:it,rotr32H:ot,rotr32L:st,rotlSH:at,rotlSL:ct,rotlBH:lt,rotlBL:dt,add:ut,add3L:ht,add3H:ft,add4L:pt,add4H:gt,add5H:yt,add5L:mt};We["default"]=vt,Object.defineProperty(Pe,"__esModule",{value:!0}),Pe.sha384=Pe.sha512_256=Pe.sha512_224=Pe.sha512=Pe.SHA384=Pe.SHA512_256=Pe.SHA512_224=Pe.SHA512=void 0;var bt=Oe,wt=We,Et=Fe,_ref6=function(){return wt["default"].split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(function(e){return BigInt(e);}));}(),_ref7=_slicedToArray(_ref6,2),Ct=_ref7[0],St=_ref7[1],_t=new Uint32Array(80),kt=new Uint32Array(80);var xt=/*#__PURE__*/function(_bt$HashMD){function xt(){var _this2;_classCallCheck(this,xt);_this2=_callSuper(this,xt,[128,64,16,!1]),_this2.Ah=1779033703,_this2.Al=-205731576,_this2.Bh=-1150833019,_this2.Bl=-2067093701,_this2.Ch=1013904242,_this2.Cl=-23791573,_this2.Dh=-1521486534,_this2.Dl=1595750129,_this2.Eh=1359893119,_this2.El=-1377402159,_this2.Fh=-1694144372,_this2.Fl=725511199,_this2.Gh=528734635,_this2.Gl=-79577749,_this2.Hh=1541459225,_this2.Hl=327033209;return _this2;}_inherits(xt,_bt$HashMD);return _createClass(xt,[{key:"get",value:function get(){var e=this.Ah,t=this.Al,n=this.Bh,r=this.Bl,i=this.Ch,o=this.Cl,s=this.Dh,a=this.Dl,c=this.Eh,l=this.El,d=this.Fh,u=this.Fl,h=this.Gh,f=this.Gl,p=this.Hh,g=this.Hl;return [e,t,n,r,i,o,s,a,c,l,d,u,h,f,p,g];}},{key:"set",value:function set(e,t,n,r,i,o,s,a,c,l,d,u,h,f,p,g){this.Ah=0|e,this.Al=0|t,this.Bh=0|n,this.Bl=0|r,this.Ch=0|i,this.Cl=0|o,this.Dh=0|s,this.Dl=0|a,this.Eh=0|c,this.El=0|l,this.Fh=0|d,this.Fl=0|u,this.Gh=0|h,this.Gl=0|f,this.Hh=0|p,this.Hl=0|g;}},{key:"process",value:function process(e,t){var _wt$default$add2,_wt$default$add3,_wt$default$add4,_wt$default$add5,_wt$default$add6,_wt$default$add7,_wt$default$add8,_wt$default$add9;for(var _n8=0;_n8<16;_n8++,t+=4)_t[_n8]=e.getUint32(t),kt[_n8]=e.getUint32(t+=4);for(var _e7=16;_e7<80;_e7++){var _t16=0|_t[_e7-15],_n9=0|kt[_e7-15],_r5=wt["default"].rotrSH(_t16,_n9,1)^wt["default"].rotrSH(_t16,_n9,8)^wt["default"].shrSH(_t16,_n9,7),_i9=wt["default"].rotrSL(_t16,_n9,1)^wt["default"].rotrSL(_t16,_n9,8)^wt["default"].shrSL(_t16,_n9,7),_o6=0|_t[_e7-2],_s6=0|kt[_e7-2],_a2=wt["default"].rotrSH(_o6,_s6,19)^wt["default"].rotrBH(_o6,_s6,61)^wt["default"].shrSH(_o6,_s6,6),_c2=wt["default"].rotrSL(_o6,_s6,19)^wt["default"].rotrBL(_o6,_s6,61)^wt["default"].shrSL(_o6,_s6,6),_l2=wt["default"].add4L(_i9,_c2,kt[_e7-7],kt[_e7-16]),_d2=wt["default"].add4H(_l2,_r5,_a2,_t[_e7-7],_t[_e7-16]);_t[_e7]=0|_d2,kt[_e7]=0|_l2;}var n=this.Ah,r=this.Al,i=this.Bh,o=this.Bl,s=this.Ch,a=this.Cl,c=this.Dh,l=this.Dl,d=this.Eh,u=this.El,h=this.Fh,f=this.Fl,p=this.Gh,g=this.Gl,m=this.Hh,y=this.Hl;for(var _e8=0;_e8<80;_e8++){var _wt$default$add;var _t17=wt["default"].rotrSH(d,u,14)^wt["default"].rotrSH(d,u,18)^wt["default"].rotrBH(d,u,41),_v=wt["default"].rotrSL(d,u,14)^wt["default"].rotrSL(d,u,18)^wt["default"].rotrBL(d,u,41),_b=d&h^~d&p,_w=u&f^~u&g,_E=wt["default"].add5L(y,_v,_w,St[_e8],kt[_e8]),_C=wt["default"].add5H(_E,m,_t17,_b,Ct[_e8],_t[_e8]),_S=0|_E,_2=wt["default"].rotrSH(n,r,28)^wt["default"].rotrBH(n,r,34)^wt["default"].rotrBH(n,r,39),_k=wt["default"].rotrSL(n,r,28)^wt["default"].rotrBL(n,r,34)^wt["default"].rotrBL(n,r,39),_x7=n&i^n&s^i&s,_M=r&o^r&a^o&a;m=0|p,y=0|g,p=0|h,g=0|f,h=0|d,f=0|u,_wt$default$add=wt["default"].add(0|c,0|l,0|_C,0|_S),d=_wt$default$add.h,u=_wt$default$add.l,c=0|s,l=0|a,s=0|i,a=0|o,i=0|n,o=0|r;var _A=wt["default"].add3L(_S,_k,_M);n=wt["default"].add3H(_A,_C,_2,_x7),r=0|_A;}_wt$default$add2=wt["default"].add(0|this.Ah,0|this.Al,0|n,0|r),n=_wt$default$add2.h,r=_wt$default$add2.l,_wt$default$add3=wt["default"].add(0|this.Bh,0|this.Bl,0|i,0|o),i=_wt$default$add3.h,o=_wt$default$add3.l,_wt$default$add4=wt["default"].add(0|this.Ch,0|this.Cl,0|s,0|a),s=_wt$default$add4.h,a=_wt$default$add4.l,_wt$default$add5=wt["default"].add(0|this.Dh,0|this.Dl,0|c,0|l),c=_wt$default$add5.h,l=_wt$default$add5.l,_wt$default$add6=wt["default"].add(0|this.Eh,0|this.El,0|d,0|u),d=_wt$default$add6.h,u=_wt$default$add6.l,_wt$default$add7=wt["default"].add(0|this.Fh,0|this.Fl,0|h,0|f),h=_wt$default$add7.h,f=_wt$default$add7.l,_wt$default$add8=wt["default"].add(0|this.Gh,0|this.Gl,0|p,0|g),p=_wt$default$add8.h,g=_wt$default$add8.l,_wt$default$add9=wt["default"].add(0|this.Hh,0|this.Hl,0|m,0|y),m=_wt$default$add9.h,y=_wt$default$add9.l,this.set(n,r,i,o,s,a,c,l,d,u,h,f,p,g,m,y);}},{key:"roundClean",value:function roundClean(){_t.fill(0),kt.fill(0);}},{key:"destroy",value:function destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);}}]);}(bt.HashMD);Pe.SHA512=xt;var Mt=/*#__PURE__*/function(_xt){function Mt(){var _this3;_classCallCheck(this,Mt);_this3=_callSuper(this,Mt),_this3.Ah=-1942145080,_this3.Al=424955298,_this3.Bh=1944164710,_this3.Bl=-1982016298,_this3.Ch=502970286,_this3.Cl=855612546,_this3.Dh=1738396948,_this3.Dl=1479516111,_this3.Eh=258812777,_this3.El=2077511080,_this3.Fh=2011393907,_this3.Fl=79989058,_this3.Gh=1067287976,_this3.Gl=1780299464,_this3.Hh=286451373,_this3.Hl=-1848208735,_this3.outputLen=28;return _this3;}_inherits(Mt,_xt);return _createClass(Mt);}(xt);Pe.SHA512_224=Mt;var At=/*#__PURE__*/function(_xt2){function At(){var _this4;_classCallCheck(this,At);_this4=_callSuper(this,At),_this4.Ah=573645204,_this4.Al=-64227540,_this4.Bh=-1621794909,_this4.Bl=-934517566,_this4.Ch=596883563,_this4.Cl=1867755857,_this4.Dh=-1774684391,_this4.Dl=1497426621,_this4.Eh=-1775747358,_this4.El=-1467023389,_this4.Fh=-1101128155,_this4.Fl=1401305490,_this4.Gh=721525244,_this4.Gl=746961066,_this4.Hh=246885852,_this4.Hl=-2117784414,_this4.outputLen=32;return _this4;}_inherits(At,_xt2);return _createClass(At);}(xt);Pe.SHA512_256=At;var It=/*#__PURE__*/function(_xt3){function It(){var _this5;_classCallCheck(this,It);_this5=_callSuper(this,It),_this5.Ah=-876896931,_this5.Al=-1056596264,_this5.Bh=1654270250,_this5.Bl=914150663,_this5.Ch=-1856437926,_this5.Cl=812702999,_this5.Dh=355462360,_this5.Dl=-150054599,_this5.Eh=1731405415,_this5.El=-4191439,_this5.Fh=-1900787065,_this5.Fl=1750603025,_this5.Gh=-619958771,_this5.Gl=1694076839,_this5.Hh=1203062813,_this5.Hl=-1090891868,_this5.outputLen=48;return _this5;}_inherits(It,_xt3);return _createClass(It);}(xt);Pe.SHA384=It,Pe.sha512=(0,Et.wrapConstructor)(function(){return new xt();}),Pe.sha512_224=(0,Et.wrapConstructor)(function(){return new Mt();}),Pe.sha512_256=(0,Et.wrapConstructor)(function(){return new At();}),Pe.sha384=(0,Et.wrapConstructor)(function(){return new It();});var Rt={},Lt={},Pt={},Ot={};Object.defineProperty(Ot,"__esModule",{value:!0}),Ot.notImplemented=Ot.bitMask=void 0,Ot.isBytes=Dt,Ot.abytes=Bt,Ot.abool=function(e,t){if("boolean"!=typeof t)throw new Error("".concat(e," must be valid boolean, got \"").concat(t,"\"."));},Ot.bytesToHex=jt,Ot.numberToHexUnpadded=Ut,Ot.hexToNumber=Ht,Ot.hexToBytes=qt,Ot.bytesToNumberBE=function(e){return Ht(jt(e));},Ot.bytesToNumberLE=function(e){return Bt(e),Ht(jt(Uint8Array.from(e).reverse()));},Ot.numberToBytesBE=Vt,Ot.numberToBytesLE=function(e,t){return Vt(e,t).reverse();},Ot.numberToVarBytesBE=function(e){return qt(Ut(e));},Ot.ensureBytes=function(e,t,n){var r;if("string"==typeof t)try{r=qt(t);}catch(n){throw new Error("".concat(e," must be valid hex string, got \"").concat(t,"\". Cause: ").concat(n));}else {if(!Dt(t))throw new Error("".concat(e," must be hex string or Uint8Array"));r=Uint8Array.from(t);}var i=r.length;if("number"==typeof n&&i!==n)throw new Error("".concat(e," expected ").concat(n," bytes, got ").concat(i));return r;},Ot.concatBytes=Wt,Ot.equalBytes=function(e,t){if(e.length!==t.length)return !1;var n=0;for(var _r6=0;_r6<e.length;_r6++)n|=e[_r6]^t[_r6];return 0===n;},Ot.utf8ToBytes=function(e){if("string"!=typeof e)throw new Error("utf8ToBytes expected string, got "+_typeof(e));return new Uint8Array(new TextEncoder().encode(e));},Ot.inRange=Zt,Ot.aInRange=function(e,t,n,r){if(!Zt(t,n,r))throw new Error("expected valid ".concat(e,": ").concat(n," <= n < ").concat(r,", got ").concat(_typeof(t)," ").concat(t));},Ot.bitLen=function(e){var t;for(t=0;e>Tt;e>>=Nt,t+=1);return t;},Ot.bitGet=function(e,t){return e>>BigInt(t)&Nt;},Ot.bitSet=function(e,t,n){return e|(n?Nt:Tt)<<BigInt(t);},Ot.createHmacDrbg=function(e,t,n){if("number"!=typeof e||e<2)throw new Error("hashLen must be a number");if("number"!=typeof t||t<2)throw new Error("qByteLen must be a number");if("function"!=typeof n)throw new Error("hmacFn must be a function");var r=Yt(e),i=Yt(e),o=0;var s=function s(){r.fill(1),i.fill(0),o=0;},a=function a(){for(var _len7=arguments.length,e=new Array(_len7),_key7=0;_key7<_len7;_key7++){e[_key7]=arguments[_key7];}return n.apply(void 0,[i,r].concat(e));},c=function c(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:Yt();i=a(Jt([0]),e),r=a(),0!==e.length&&(i=a(Jt([1]),e),r=a());},l=function l(){if(o++>=1e3)throw new Error("drbg: tried 1000 values");var e=0;var n=[];for(;e<t;){r=a();var _t18=r.slice();n.push(_t18),e+=r.length;}return Wt.apply(void 0,n);};return function(e,t){var n;for(s(),c(e);!(n=t(l()));)c();return s(),n;};},Ot.validateObject=function(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var r=function r(t,n,_r7){var i=Xt[n];if("function"!=typeof i)throw new Error("Invalid validator \"".concat(n,"\", expected function"));var o=e[t];if(!(_r7&&void 0===o||i(o,e)))throw new Error("Invalid param ".concat(String(t),"=").concat(o," (").concat(_typeof(o),"), expected ").concat(n));};for(var _i10=0,_Object$entries=Object.entries(t);_i10<_Object$entries.length;_i10++){var _Object$entries$_i=_slicedToArray(_Object$entries[_i10],2),_e9=_Object$entries$_i[0],_n10=_Object$entries$_i[1];r(_e9,_n10,!1);}for(var _i11=0,_Object$entries2=Object.entries(n);_i11<_Object$entries2.length;_i11++){var _Object$entries2$_i=_slicedToArray(_Object$entries2[_i11],2),_e10=_Object$entries2$_i[0],_t19=_Object$entries2$_i[1];r(_e10,_t19,!0);}return e;},Ot.memoized=function(e){var t=new WeakMap();return function(n){var i=t.get(n);if(void 0!==i)return i;for(var _len8=arguments.length,r=new Array(_len8>1?_len8-1:0),_key8=1;_key8<_len8;_key8++){r[_key8-1]=arguments[_key8];}var o=e.apply(void 0,[n].concat(r));return t.set(n,o),o;};};var Tt=BigInt(0),Nt=BigInt(1),$t=BigInt(2);function Dt(e){return e instanceof Uint8Array||null!=e&&"object"==_typeof(e)&&"Uint8Array"===e.constructor.name;}function Bt(e){if(!Dt(e))throw new Error("Uint8Array expected");}var Kt=Array.from({length:256},function(e,t){return t.toString(16).padStart(2,"0");});function jt(e){Bt(e);var t="";for(var _n11=0;_n11<e.length;_n11++)t+=Kt[e[_n11]];return t;}function Ut(e){var t=e.toString(16);return 1&t.length?"0".concat(t):t;}function Ht(e){if("string"!=typeof e)throw new Error("hex string expected, got "+_typeof(e));return BigInt(""===e?"0":"0x".concat(e));}var Ft={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function zt(e){return e>=Ft._0&&e<=Ft._9?e-Ft._0:e>=Ft._A&&e<=Ft._F?e-(Ft._A-10):e>=Ft._a&&e<=Ft._f?e-(Ft._a-10):void 0;}function qt(e){if("string"!=typeof e)throw new Error("hex string expected, got "+_typeof(e));var t=e.length,n=t/2;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);var r=new Uint8Array(n);for(var _t20=0,_i12=0;_t20<n;_t20++,_i12+=2){var _n12=zt(e.charCodeAt(_i12)),_o7=zt(e.charCodeAt(_i12+1));if(void 0===_n12||void 0===_o7){var _t21=e[_i12]+e[_i12+1];throw new Error('hex string expected, got non-hex character "'+_t21+'" at index '+_i12);}r[_t20]=16*_n12+_o7;}return r;}function Vt(e,t){return qt(e.toString(16).padStart(2*t,"0"));}function Wt(){var t=0;for(var _n13=0;_n13<arguments.length;_n13++){var _r8=_n13<0||arguments.length<=_n13?undefined:arguments[_n13];Bt(_r8),t+=_r8.length;}var n=new Uint8Array(t);for(var _t22=0,_r9=0;_t22<arguments.length;_t22++){var _i13=_t22<0||arguments.length<=_t22?undefined:arguments[_t22];n.set(_i13,_r9),_r9+=_i13.length;}return n;}var Gt=function Gt(e){return "bigint"==typeof e&&Tt<=e;};function Zt(e,t,n){return Gt(e)&&Gt(t)&&Gt(n)&&t<=e&&e<n;}Ot.bitMask=function(e){return ($t<<BigInt(e-1))-Nt;};var Yt=function Yt(e){return new Uint8Array(e);},Jt=function Jt(e){return Uint8Array.from(e);};var Xt={bigint:function bigint(e){return "bigint"==typeof e;},"function":function _function(e){return "function"==typeof e;},"boolean":function boolean(e){return "boolean"==typeof e;},string:function string(e){return "string"==typeof e;},stringOrUint8Array:function stringOrUint8Array(e){return "string"==typeof e||Dt(e);},isSafeInteger:function isSafeInteger(e){return Number.isSafeInteger(e);},array:function array(e){return Array.isArray(e);},field:function field(e,t){return t.Fp.isValid(e);},hash:function hash(e){return "function"==typeof e&&Number.isSafeInteger(e.outputLen);}};Ot.notImplemented=function(){throw new Error("not implemented");},Object.defineProperty(Pt,"__esModule",{value:!0}),Pt.isNegativeLE=void 0,Pt.mod=cn,Pt.pow=ln,Pt.pow2=function(e,t,n){var r=e;for(;t-->en;)r*=r,r%=n;return r;},Pt.invert=dn,Pt.tonelliShanks=un,Pt.FpSqrt=hn,Pt.validateField=function(e){var t=fn.reduce(function(e,t){return e[t]="function",e;},{ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"});return (0,Qt.validateObject)(e,t);},Pt.FpPow=pn,Pt.FpInvertBatch=gn,Pt.FpDiv=function(e,t,n){return e.mul(t,"bigint"==typeof n?dn(n,e.ORDER):e.inv(n));},Pt.FpLegendre=mn,Pt.FpIsSquare=function(e){var t=mn(e.ORDER);return function(n){var r=t(e,n);return e.eql(r,e.ZERO)||e.eql(r,e.ONE);};},Pt.nLength=yn,Pt.Field=function(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};if(e<=en)throw new Error("Expected Field ORDER > 0, got ".concat(e));var _yn=yn(e,t),i=_yn.nBitLength,o=_yn.nByteLength;if(o>2048)throw new Error("Field lengths over 2048 bytes are not supported");var s=hn(e),a=Object.freeze({ORDER:e,BITS:i,BYTES:o,MASK:(0,Qt.bitMask)(i),ZERO:en,ONE:tn,create:function create(t){return cn(t,e);},isValid:function isValid(t){if("bigint"!=typeof t)throw new Error("Invalid field element: expected bigint, got "+_typeof(t));return en<=t&&t<e;},is0:function is0(e){return e===en;},isOdd:function isOdd(e){return (e&tn)===tn;},neg:function neg(t){return cn(-t,e);},eql:function eql(e,t){return e===t;},sqr:function sqr(t){return cn(t*t,e);},add:function add(t,n){return cn(t+n,e);},sub:function sub(t,n){return cn(t-n,e);},mul:function mul(t,n){return cn(t*n,e);},pow:function pow(e,t){return pn(a,e,t);},div:function div(t,n){return cn(t*dn(n,e),e);},sqrN:function sqrN(e){return e*e;},addN:function addN(e,t){return e+t;},subN:function subN(e,t){return e-t;},mulN:function mulN(e,t){return e*t;},inv:function inv(t){return dn(t,e);},sqrt:r.sqrt||function(e){return s(a,e);},invertBatch:function invertBatch(e){return gn(a,e);},cmov:function cmov(e,t,n){return n?t:e;},toBytes:function toBytes(e){return n?(0,Qt.numberToBytesLE)(e,o):(0,Qt.numberToBytesBE)(e,o);},fromBytes:function fromBytes(e){if(e.length!==o)throw new Error("Fp.fromBytes: expected ".concat(o,", got ").concat(e.length));return n?(0,Qt.bytesToNumberLE)(e):(0,Qt.bytesToNumberBE)(e);}});return Object.freeze(a);},Pt.FpSqrtOdd=function(e,t){if(!e.isOdd)throw new Error("Field doesn't have isOdd");var n=e.sqrt(t);return e.isOdd(n)?n:e.neg(n);},Pt.FpSqrtEven=function(e,t){if(!e.isOdd)throw new Error("Field doesn't have isOdd");var n=e.sqrt(t);return e.isOdd(n)?e.neg(n):n;},Pt.hashToPrivateScalar=function(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;e=(0,Qt.ensureBytes)("privateHash",e);var r=e.length,i=yn(t).nByteLength+8;if(i<24||r<i||r>1024)throw new Error("hashToPrivateScalar: expected ".concat(i,"-1024 bytes of input, got ").concat(r));var o=n?(0,Qt.bytesToNumberLE)(e):(0,Qt.bytesToNumberBE)(e);return cn(o,t-tn)+tn;},Pt.getFieldBytesLength=vn,Pt.getMinHashLength=bn,Pt.mapHashToField=function(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;var r=e.length,i=vn(t),o=bn(t);if(r<16||r<o||r>1024)throw new Error("expected ".concat(o,"-1024 bytes of input, got ").concat(r));var s=cn(n?(0,Qt.bytesToNumberBE)(e):(0,Qt.bytesToNumberLE)(e),t-tn)+tn;return n?(0,Qt.numberToBytesLE)(s,i):(0,Qt.numberToBytesBE)(s,i);};var Qt=Ot,en=BigInt(0),tn=BigInt(1),nn=BigInt(2),rn=BigInt(3),on=BigInt(4),sn=BigInt(5),an=BigInt(8);function cn(e,t){var n=e%t;return n>=en?n:t+n;}function ln(e,t,n){if(n<=en||t<en)throw new Error("Expected power/modulo > 0");if(n===tn)return en;var r=tn;for(;t>en;)t&tn&&(r=r*e%n),e=e*e%n,t>>=tn;return r;}function dn(e,t){if(e===en||t<=en)throw new Error("invert: expected positive integers, got n=".concat(e," mod=").concat(t));var n=cn(e,t),r=t,i=en,o=tn;for(;n!==en;){var _e11=r%n,_t23=i-o*(r/n);r=n,n=_e11,i=o,o=_t23;}if(r!==tn)throw new Error("invert: does not exist");return cn(i,t);}function un(e){var t=(e-tn)/nn;var n,r,i;for(n=e-tn,r=0;n%nn===en;n/=nn,r++);for(i=nn;i<e&&ln(i,t,e)!==e-tn;i++);if(1===r){var _t24=(e+tn)/on;return function(e,n){var r=e.pow(n,_t24);if(!e.eql(e.sqr(r),n))throw new Error("Cannot find square root");return r;};}var o=(n+tn)/nn;return function(e,s){if(e.pow(s,t)===e.neg(e.ONE))throw new Error("Cannot find square root");var a=r,c=e.pow(e.mul(e.ONE,i),n),l=e.pow(s,o),d=e.pow(s,n);for(;!e.eql(d,e.ONE);){if(e.eql(d,e.ZERO))return e.ZERO;var _t25=1;for(var _n14=e.sqr(d);_t25<a&&!e.eql(_n14,e.ONE);_t25++)_n14=e.sqr(_n14);var _n15=e.pow(c,tn<<BigInt(a-_t25-1));c=e.sqr(_n15),l=e.mul(l,_n15),d=e.mul(d,c),a=_t25;}return l;};}function hn(e){if(e%on===rn){var _t26=(e+tn)/on;return function(e,n){var r=e.pow(n,_t26);if(!e.eql(e.sqr(r),n))throw new Error("Cannot find square root");return r;};}if(e%an===sn){var _t27=(e-sn)/an;return function(e,n){var r=e.mul(n,nn),i=e.pow(r,_t27),o=e.mul(n,i),s=e.mul(e.mul(o,nn),i),a=e.mul(o,e.sub(s,e.ONE));if(!e.eql(e.sqr(a),n))throw new Error("Cannot find square root");return a;};}return un(e);}BigInt(9),BigInt(16);Pt.isNegativeLE=function(e,t){return (cn(e,t)&tn)===tn;};var fn=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function pn(e,t,n){if(n<en)throw new Error("Expected power > 0");if(n===en)return e.ONE;if(n===tn)return t;var r=e.ONE,i=t;for(;n>en;)n&tn&&(r=e.mul(r,i)),i=e.sqr(i),n>>=tn;return r;}function gn(e,t){var n=new Array(t.length),r=t.reduce(function(t,r,i){return e.is0(r)?t:(n[i]=t,e.mul(t,r));},e.ONE),i=e.inv(r);return t.reduceRight(function(t,r,i){return e.is0(r)?t:(n[i]=e.mul(t,n[i]),e.mul(t,r));},i),n;}function mn(e){var t=(e-tn)/nn;return function(e,n){return e.pow(n,t);};}function yn(e,t){var n=void 0!==t?t:e.toString(2).length;return {nBitLength:n,nByteLength:Math.ceil(n/8)};}function vn(e){if("bigint"!=typeof e)throw new Error("field order must be bigint");var t=e.toString(2).length;return Math.ceil(t/8);}function bn(e){var t=vn(e);return t+Math.ceil(t/2);}Object.defineProperty(Lt,"__esModule",{value:!0}),Lt.wNAF=function(e,t){var n=function n(e,t){var n=t.negate();return e?n:t;},r=function r(e){if(!Number.isSafeInteger(e)||e<=0||e>t)throw new Error("Wrong window size=".concat(e,", should be [1..").concat(t,"]"));},i=function i(e){r(e);return {windows:Math.ceil(t/e)+1,windowSize:Math.pow(2,e-1)};};return {constTimeNegate:n,unsafeLadder:function unsafeLadder(t,n){var r=e.ZERO,i=t;for(;n>Cn;)n&Sn&&(r=r.add(i)),i=i["double"](),n>>=Sn;return r;},precomputeWindow:function precomputeWindow(e,t){var _i14=i(t),n=_i14.windows,r=_i14.windowSize,o=[];var s=e,a=s;for(var _e12=0;_e12<n;_e12++){a=s,o.push(a);for(var _e13=1;_e13<r;_e13++)a=a.add(s),o.push(a);s=a["double"]();}return o;},wNAF:function wNAF(t,r,o){var _i15=i(t),s=_i15.windows,a=_i15.windowSize;var c=e.ZERO,l=e.BASE;var d=BigInt(Math.pow(2,t)-1),u=Math.pow(2,t),h=BigInt(t);for(var _e14=0;_e14<s;_e14++){var _t28=_e14*a;var _i16=Number(o&d);o>>=h,_i16>a&&(_i16-=u,o+=Sn);var _s7=_t28,_f2=_t28+Math.abs(_i16)-1,_p2=_e14%2!=0,_g=_i16<0;0===_i16?l=l.add(n(_p2,r[_s7])):c=c.add(n(_g,r[_f2]));}return {p:c,f:l};},wNAFCached:function wNAFCached(e,t,n){var r=kn.get(e)||1;var i=_n.get(e);return i||(i=this.precomputeWindow(e,r),1!==r&&_n.set(e,n(i))),this.wNAF(r,i,t);},setWindowSize:function setWindowSize(e,t){r(t),kn.set(e,t),_n["delete"](e);}};},Lt.pippenger=function(e,t,n,r){if(!Array.isArray(n)||!Array.isArray(r)||r.length!==n.length)throw new Error("arrays of points and scalars must have equal length");r.forEach(function(e,n){if(!t.isValid(e))throw new Error("wrong scalar at index ".concat(n));}),n.forEach(function(t,n){if(!(t instanceof e))throw new Error("wrong point at index ".concat(n));});var i=(0,En.bitLen)(BigInt(n.length)),o=i>12?i-3:i>4?i-2:i?2:1,s=(1<<o)-1,a=new Array(s+1).fill(e.ZERO),c=Math.floor((t.BITS-1)/o)*o;var l=e.ZERO;for(var _t29=c;_t29>=0;_t29-=o){a.fill(e.ZERO);for(var _e15=0;_e15<r.length;_e15++){var _i17=r[_e15],_o8=Number(_i17>>BigInt(_t29)&BigInt(s));a[_o8]=a[_o8].add(n[_e15]);}var _i18=e.ZERO;for(var _t30=a.length-1,_n16=e.ZERO;_t30>0;_t30--)_n16=_n16.add(a[_t30]),_i18=_i18.add(_n16);if(l=l.add(_i18),0!==_t29)for(var _e16=0;_e16<o;_e16++)l=l["double"]();}return l;},Lt.validateBasic=function(e){return (0,wn.validateField)(e.Fp),(0,En.validateObject)(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze(_objectSpread2(_objectSpread2(_objectSpread2({},(0,wn.nLength)(e.n,e.nBitLength)),e),{},{p:e.Fp.ORDER}));};var wn=Pt,En=Ot,Cn=BigInt(0),Sn=BigInt(1),_n=new WeakMap(),kn=new WeakMap();Object.defineProperty(Rt,"__esModule",{value:!0}),Rt.twistedEdwards=function(e){var t=function(e){var t=(0,xn.validateBasic)(e);return An.validateObject(e,{hash:"function",a:"bigint",d:"bigint",randomBytes:"function"},{adjustScalarBytes:"function",domain:"function",uvRatio:"function",mapToCurve:"function"}),Object.freeze(_objectSpread2({},t));}(e),n=t.Fp,r=t.n,i=t.prehash,o=t.hash,s=t.randomBytes,a=t.nByteLength,c=t.h,l=Pn<<BigInt(8*a)-Ln,d=n.create,u=(0,Mn.Field)(t.n,t.nBitLength),h=t.uvRatio||function(e,t){try{return {isValid:!0,value:n.sqrt(e*n.inv(t))};}catch(e){return {isValid:!1,value:Rn};}},f=t.adjustScalarBytes||function(e){return e;},p=t.domain||function(e,t,n){if((0,In.abool)("phflag",n),t.length||n)throw new Error("Contexts/pre-hash are not supported");return e;};function g(e,t){An.aInRange("coordinate "+e,t,Rn,l);}function m(e){if(!(e instanceof b))throw new Error("ExtendedPoint expected");}var y=(0,In.memoized)(function(e,t){var r=e.ex,i=e.ey,o=e.ez,s=e.is0();null==t&&(t=s?On:n.inv(o));var a=d(r*t),c=d(i*t),l=d(o*t);if(s)return {x:Rn,y:Ln};if(l!==Ln)throw new Error("invZ was invalid");return {x:a,y:c};}),v=(0,In.memoized)(function(e){var n=t.a,r=t.d;if(e.is0())throw new Error("bad point: ZERO");var i=e.ex,o=e.ey,s=e.ez,a=e.et,c=d(i*i),l=d(o*o),u=d(s*s),h=d(u*u),f=d(c*n);if(d(u*d(f+l))!==d(h+d(r*d(c*l))))throw new Error("bad point: equation left != right (1)");if(d(i*o)!==d(s*a))throw new Error("bad point: equation left != right (2)");return !0;});var b=/*#__PURE__*/function(){function b(e,t,n,r){_classCallCheck(this,b);this.ex=e,this.ey=t,this.ez=n,this.et=r,g("x",e),g("y",t),g("z",n),g("t",r),Object.freeze(this);}return _createClass(b,[{key:"x",get:function get(){return this.toAffine().x;}},{key:"y",get:function get(){return this.toAffine().y;}},{key:"_setWindowSize",value:function _setWindowSize(e){C.setWindowSize(this,e);}},{key:"assertValidity",value:function assertValidity(){v(this);}},{key:"equals",value:function equals(e){m(e);var t=this.ex,n=this.ey,r=this.ez,i=e.ex,o=e.ey,s=e.ez,a=d(t*s),c=d(i*r),l=d(n*s),u=d(o*r);return a===c&&l===u;}},{key:"is0",value:function is0(){return this.equals(b.ZERO);}},{key:"negate",value:function negate(){return new b(d(-this.ex),this.ey,this.ez,d(-this.et));}},{key:"double",value:function _double(){var e=t.a,n=this.ex,r=this.ey,i=this.ez,o=d(n*n),s=d(r*r),a=d(Pn*d(i*i)),c=d(e*o),l=n+r,u=d(d(l*l)-o-s),h=c+s,f=h-a,p=c-s,g=d(u*f),m=d(h*p),y=d(u*p),v=d(f*h);return new b(g,m,v,y);}},{key:"add",value:function add(e){m(e);var n=t.a,r=t.d,i=this.ex,o=this.ey,s=this.ez,a=this.et,c=e.ex,l=e.ey,u=e.ez,h=e.et;if(n===BigInt(-1)){var _e17=d((o-i)*(l+c)),_t31=d((o+i)*(l-c)),_n17=d(_t31-_e17);if(_n17===Rn)return this["double"]();var _r10=d(s*Pn*h),_f3=d(a*Pn*u),_p3=_f3+_r10,_g2=_t31+_e17,_m=_f3-_r10,_y=d(_p3*_n17),_v2=d(_g2*_m),_w2=d(_p3*_m),_E2=d(_n17*_g2);return new b(_y,_v2,_E2,_w2);}var f=d(i*c),p=d(o*l),g=d(a*r*h),y=d(s*u),v=d((i+o)*(c+l)-f-p),w=y-g,E=y+g,C=d(p-n*f),S=d(v*w),_=d(E*C),k=d(v*C),x=d(w*E);return new b(S,_,x,k);}},{key:"subtract",value:function subtract(e){return this.add(e.negate());}},{key:"wNAF",value:function wNAF(e){return C.wNAFCached(this,e,b.normalizeZ);}},{key:"multiply",value:function multiply(e){var t=e;An.aInRange("scalar",t,Ln,r);var _this$wNAF=this.wNAF(t),n=_this$wNAF.p,i=_this$wNAF.f;return b.normalizeZ([n,i])[0];}},{key:"multiplyUnsafe",value:function multiplyUnsafe(e){var t=e;return An.aInRange("scalar",t,Rn,r),t===Rn?E:this.equals(E)||t===Ln?this:this.equals(w)?this.wNAF(t).p:C.unsafeLadder(this,t);}},{key:"isSmallOrder",value:function isSmallOrder(){return this.multiplyUnsafe(c).is0();}},{key:"isTorsionFree",value:function isTorsionFree(){return C.unsafeLadder(this,r).is0();}},{key:"toAffine",value:function toAffine(e){return y(this,e);}},{key:"clearCofactor",value:function clearCofactor(){var e=t.h;return e===Ln?this:this.multiplyUnsafe(e);}},{key:"toRawBytes",value:function toRawBytes(){var _this$toAffine=this.toAffine(),e=_this$toAffine.x,t=_this$toAffine.y,r=An.numberToBytesLE(t,n.BYTES);return r[r.length-1]|=e&Ln?128:0,r;}},{key:"toHex",value:function toHex(){return An.bytesToHex(this.toRawBytes());}}],[{key:"fromAffine",value:function fromAffine(e){if(e instanceof b)throw new Error("extended point not allowed");var _ref2=e||{},t=_ref2.x,n=_ref2.y;return g("x",t),g("y",n),new b(t,n,Ln,d(t*n));}},{key:"normalizeZ",value:function normalizeZ(e){var t=n.invertBatch(e.map(function(e){return e.ez;}));return e.map(function(e,n){return e.toAffine(t[n]);}).map(b.fromAffine);}},{key:"msm",value:function msm(e,t){return (0,xn.pippenger)(b,u,e,t);}},{key:"fromHex",value:function fromHex(e){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;var i=t.d,o=t.a,s=n.BYTES;e=(0,In.ensureBytes)("pointHex",e,s),(0,In.abool)("zip215",r);var a=e.slice(),c=e[s-1];a[s-1]=-129&c;var u=An.bytesToNumberLE(a),f=r?l:n.ORDER;An.aInRange("pointHex.y",u,Rn,f);var p=d(u*u),g=d(p-Ln),m=d(i*p-o);var _h2=h(g,m),y=_h2.isValid,v=_h2.value;if(!y)throw new Error("Point.fromHex: invalid y coordinate");var w=(v&Ln)===Ln,E=0!=(128&c);if(!r&&v===Rn&&E)throw new Error("Point.fromHex: x=0 and x_0=1");return E!==w&&(v=d(-v)),b.fromAffine({x:v,y:u});}},{key:"fromPrivateKey",value:function fromPrivateKey(e){return k(e).point;}}]);}();b.BASE=new b(t.Gx,t.Gy,Ln,d(t.Gx*t.Gy)),b.ZERO=new b(Rn,Ln,Ln,Rn);var w=b.BASE,E=b.ZERO,C=(0,xn.wNAF)(b,8*a);function S(e){return (0,Mn.mod)(e,r);}function _(e){return S(An.bytesToNumberLE(e));}function k(e){var t=a;e=(0,In.ensureBytes)("private key",e,t);var n=(0,In.ensureBytes)("hashed private key",o(e),2*t),r=f(n.slice(0,t)),i=n.slice(t,2*t),s=_(r),c=w.multiply(s),l=c.toRawBytes();return {head:r,prefix:i,scalar:s,point:c,pointBytes:l};}function x(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:new Uint8Array();for(var _len9=arguments.length,t=new Array(_len9>1?_len9-1:0),_key9=1;_key9<_len9;_key9++){t[_key9-1]=arguments[_key9];}var n=An.concatBytes.apply(An,t);return _(o(p(n,(0,In.ensureBytes)("context",e),!!i)));}var M=Tn;w._setWindowSize(8);var A={getExtendedPublicKey:k,randomPrivateKey:function randomPrivateKey(){return s(n.BYTES);},precompute:function precompute(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:8;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:b.BASE;return t._setWindowSize(e),t.multiply(BigInt(3)),t;}};return {CURVE:t,getPublicKey:function getPublicKey(e){return k(e).pointBytes;},sign:function sign(e,t){var o=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};e=(0,In.ensureBytes)("message",e),i&&(e=i(e));var _k2=k(t),s=_k2.prefix,c=_k2.scalar,l=_k2.pointBytes,d=x(o.context,s,e),u=w.multiply(d).toRawBytes(),h=S(d+x(o.context,u,l,e)*c);An.aInRange("signature.s",h,Rn,r);var f=An.concatBytes(u,An.numberToBytesLE(h,n.BYTES));return (0,In.ensureBytes)("result",f,2*a);},verify:function verify(e,t,r){var o=arguments.length>3&&arguments[3]!==undefined?arguments[3]:M;var s=o.context,a=o.zip215,c=n.BYTES;e=(0,In.ensureBytes)("signature",e,2*c),t=(0,In.ensureBytes)("message",t),void 0!==a&&(0,In.abool)("zip215",a),i&&(t=i(t));var l=An.bytesToNumberLE(e.slice(c,2*c));var d,u,h;try{d=b.fromHex(r,a),u=b.fromHex(e.slice(0,c),a),h=w.multiplyUnsafe(l);}catch(e){return !1;}if(!a&&d.isSmallOrder())return !1;var f=x(s,u.toRawBytes(),d.toRawBytes(),t);return u.add(d.multiplyUnsafe(f)).subtract(h).clearCofactor().equals(b.ZERO);},ExtendedPoint:b,utils:A};};var xn=Lt,Mn=Pt,An=Ot,In=Ot,Rn=BigInt(0),Ln=BigInt(1),Pn=BigInt(2),On=BigInt(8),Tn={zip215:!0};var Nn={};Object.defineProperty(Nn,"__esModule",{value:!0}),Nn.expand_message_xmd=Hn,Nn.expand_message_xof=Fn,Nn.hash_to_field=zn,Nn.isogenyMap=function(e,t){var n=t.map(function(e){return Array.from(e).reverse();});return function(t,r){var _n$map=n.map(function(n){return n.reduce(function(n,r){return e.add(e.mul(n,t),r);});}),_n$map2=_slicedToArray(_n$map,4),i=_n$map2[0],o=_n$map2[1],s=_n$map2[2],a=_n$map2[3];return t=e.div(i,o),r=e.mul(r,e.div(s,a)),{x:t,y:r};};},Nn.createHasher=function(e,t,n){if("function"!=typeof t)throw new Error("mapToCurve() must be defined");return {hashToCurve:function hashToCurve(r,i){var o=zn(r,2,_objectSpread2(_objectSpread2({},n),{},{DST:n.DST},i)),s=e.fromAffine(t(o[0])),a=e.fromAffine(t(o[1])),c=s.add(a).clearCofactor();return c.assertValidity(),c;},encodeToCurve:function encodeToCurve(r,i){var o=zn(r,1,_objectSpread2(_objectSpread2({},n),{},{DST:n.encodeDST},i)),s=e.fromAffine(t(o[0])).clearCofactor();return s.assertValidity(),s;},mapToCurve:function mapToCurve(n){if(!Array.isArray(n))throw new Error("mapToCurve: expected array of bigints");var _iterator=_createForOfIteratorHelper(n),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _e18=_step.value;if("bigint"!=typeof _e18)throw new Error("mapToCurve: expected array of bigints, got ".concat(_e18," in array"));}}catch(err){_iterator.e(err);}finally{_iterator.f();}var r=e.fromAffine(t(n)).clearCofactor();return r.assertValidity(),r;}};};var $n=Pt,Dn=Ot,Bn=Dn.bytesToNumberBE;function Kn(e,t){if(Un(e),Un(t),e<0||e>=1<<8*t)throw new Error("bad I2OSP call: value=".concat(e," length=").concat(t));var n=Array.from({length:t}).fill(0);for(var _r11=t-1;_r11>=0;_r11--)n[_r11]=255&e,e>>>=8;return new Uint8Array(n);}function jn(e,t){var n=new Uint8Array(e.length);for(var _r12=0;_r12<e.length;_r12++)n[_r12]=e[_r12]^t[_r12];return n;}function Un(e){if(!Number.isSafeInteger(e))throw new Error("number expected");}function Hn(e,t,n,r){(0,Dn.abytes)(e),(0,Dn.abytes)(t),Un(n),t.length>255&&(t=r((0,Dn.concatBytes)((0,Dn.utf8ToBytes)("H2C-OVERSIZE-DST-"),t)));var i=r.outputLen,o=r.blockLen,s=Math.ceil(n/i);if(n>65535||s>255)throw new Error("expand_message_xmd: invalid lenInBytes");var a=(0,Dn.concatBytes)(t,Kn(t.length,1)),c=Kn(0,o),l=Kn(n,2),d=new Array(s),u=r((0,Dn.concatBytes)(c,e,l,Kn(0,1),a));d[0]=r((0,Dn.concatBytes)(u,Kn(1,1),a));for(var _e19=1;_e19<=s;_e19++){var _t32=[jn(u,d[_e19-1]),Kn(_e19+1,1),a];d[_e19]=r((0,Dn.concatBytes).apply(void 0,_t32));}return (0,Dn.concatBytes).apply(void 0,d).slice(0,n);}function Fn(e,t,n,r,i){if((0,Dn.abytes)(e),(0,Dn.abytes)(t),Un(n),t.length>255){var _e20=Math.ceil(2*r/8);t=i.create({dkLen:_e20}).update((0,Dn.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(t).digest();}if(n>65535||t.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return i.create({dkLen:n}).update(e).update(Kn(n,2)).update(t).update(Kn(t.length,1)).digest();}function zn(e,t,n){(0,Dn.validateObject)(n,{DST:"stringOrUint8Array",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});var r=n.p,i=n.k,o=n.m,s=n.hash,a=n.expand,c=n.DST;(0,Dn.abytes)(e),Un(t);var l="string"==typeof c?(0,Dn.utf8ToBytes)(c):c,d=r.toString(2).length,u=Math.ceil((d+i)/8),h=t*o*u;var f;if("xmd"===a)f=Hn(e,l,h,s);else if("xof"===a)f=Fn(e,l,h,i,s);else {if("_internal_pass"!==a)throw new Error('expand must be "xmd" or "xof"');f=e;}var p=new Array(t);for(var _e21=0;_e21<t;_e21++){var _t33=new Array(o);for(var _n18=0;_n18<o;_n18++){var _i19=u*(_n18+_e21*o),_s8=f.subarray(_i19,_i19+u);_t33[_n18]=(0,$n.mod)(Bn(_s8),r);}p[_e21]=_t33;}return p;}var qn={};Object.defineProperty(qn,"__esModule",{value:!0}),qn.montgomery=function(e){var t=function(e){return (0,Wn.validateObject)(e,{a:"bigint"},{montgomeryBits:"isSafeInteger",nByteLength:"isSafeInteger",adjustScalarBytes:"function",domain:"function",powPminus2:"function",Gu:"bigint"}),Object.freeze(_objectSpread2({},e));}(e),n=t.P,r=function r(e){return (0,Vn.mod)(e,n);},i=t.montgomeryBits,o=Math.ceil(i/8),s=t.nByteLength,a=t.adjustScalarBytes||function(e){return e;},c=t.powPminus2||function(e){return (0,Vn.pow)(e,n-BigInt(2),n);};function l(e,t,n){var i=r(e*(t-n));return [t=r(t-i),n=r(n+i)];}var d=(t.a-BigInt(2))/BigInt(4);function u(e){return (0,Wn.numberToBytesLE)(r(e),o);}function h(e,t){var h=function(e){var t=(0,Wn.ensureBytes)("u coordinate",e,o);return 32===s&&(t[31]&=127),(0,Wn.bytesToNumberLE)(t);}(t),f=function(e){var t=(0,Wn.ensureBytes)("scalar",e),n=t.length;if(n!==o&&n!==s)throw new Error("Expected ".concat(o," or ").concat(s," bytes, got ").concat(n));return (0,Wn.bytesToNumberLE)(a(t));}(e),p=function(e,t){(0,Wn.aInRange)("u",e,Gn,n),(0,Wn.aInRange)("scalar",t,Gn,n);var o=t,s=e;var a,u=Zn,h=Gn,f=e,p=Zn,g=Gn;for(var _e22=BigInt(i-1);_e22>=Gn;_e22--){var _t34=o>>_e22&Zn;g^=_t34,a=l(g,u,f),u=a[0],f=a[1],a=l(g,h,p),h=a[0],p=a[1],g=_t34;var _n19=u+h,_i20=r(_n19*_n19),_c3=u-h,_m2=r(_c3*_c3),_y2=_i20-_m2,_v3=f+p,_b2=r((f-p)*_n19),_w3=r(_v3*_c3),_E3=_b2+_w3,_C2=_b2-_w3;f=r(_E3*_E3),p=r(s*r(_C2*_C2)),u=r(_i20*_m2),h=r(_y2*(_i20+r(d*_y2)));}a=l(g,u,f),u=a[0],f=a[1],a=l(g,h,p),h=a[0],p=a[1];var m=c(h);return r(u*m);}(h,f);if(p===Gn)throw new Error("Invalid private or public key received");return u(p);}var f=u(t.Gu);function p(e){return h(e,f);}return {scalarMult:h,scalarMultBase:p,getSharedSecret:function getSharedSecret(e,t){return h(e,t);},getPublicKey:function getPublicKey(e){return p(e);},utils:{randomPrivateKey:function randomPrivateKey(){return t.randomBytes(t.nByteLength);}},GuBytes:f};};var Vn=Pt,Wn=Ot,Gn=BigInt(0),Zn=BigInt(1);!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hash_to_ristretto255=e.hashToRistretto255=e.RistrettoPoint=e.encodeToCurve=e.hashToCurve=e.edwardsToMontgomery=e.x25519=e.ed25519ph=e.ed25519ctx=e.ed25519=e.ED25519_TORSION_SUBGROUP=void 0,e.edwardsToMontgomeryPub=C,e.edwardsToMontgomeryPriv=function(e){var t=w.hash(e.subarray(0,32));return w.adjustScalarBytes(t).subarray(0,32);};var t=Pe,n=Fe,r=Rt,i=Nn,o=Pt,s=qn,a=Ot,c=BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),l=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752"),d=BigInt(0),u=BigInt(1),h=BigInt(2),f=BigInt(3),p=BigInt(5),g=BigInt(8);function m(e){var t=BigInt(10),n=BigInt(20),r=BigInt(40),i=BigInt(80),s=c,a=e*e%s*e%s,l=(0,o.pow2)(a,h,s)*a%s,d=(0,o.pow2)(l,u,s)*e%s,f=(0,o.pow2)(d,p,s)*d%s,g=(0,o.pow2)(f,t,s)*f%s,m=(0,o.pow2)(g,n,s)*g%s,y=(0,o.pow2)(m,r,s)*m%s,v=(0,o.pow2)(y,i,s)*y%s,b=(0,o.pow2)(v,i,s)*y%s,w=(0,o.pow2)(b,t,s)*f%s;return {pow_p_5_8:(0,o.pow2)(w,h,s)*e%s,b2:a};}function y(e){return e[0]&=248,e[31]&=127,e[31]|=64,e;}function v(e,t){var n=c,r=(0,o.mod)(t*t*t,n),i=m(e*(0,o.mod)(r*r*t,n)).pow_p_5_8;var s=(0,o.mod)(e*r*i,n);var a=(0,o.mod)(t*s*s,n),d=s,u=(0,o.mod)(s*l,n),h=a===e,f=a===(0,o.mod)(-e,n),p=a===(0,o.mod)(-e*l,n);return h&&(s=d),(f||p)&&(s=u),(0,o.isNegativeLE)(s,n)&&(s=(0,o.mod)(-s,n)),{isValid:h||f,value:s};}e.ED25519_TORSION_SUBGROUP=["0100000000000000000000000000000000000000000000000000000000000000","c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a","0000000000000000000000000000000000000000000000000000000000000080","26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05","ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f","26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85","0000000000000000000000000000000000000000000000000000000000000000","c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"];var b=function(){return (0,o.Field)(c,void 0,!0);}(),w=function(){return {a:BigInt(-1),d:BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),Fp:b,n:BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),h:g,Gx:BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),Gy:BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),hash:t.sha512,randomBytes:n.randomBytes,adjustScalarBytes:y,uvRatio:v};}();function E(e,t,r){if(t.length>255)throw new Error("Context is too big");return (0,n.concatBytes)((0,n.utf8ToBytes)("SigEd25519 no Ed25519 collisions"),new Uint8Array([r?1:0,t.length]),t,e);}function C(t){var _e$ed25519$ExtendedPo=e.ed25519.ExtendedPoint.fromHex(t),n=_e$ed25519$ExtendedPo.y,r=BigInt(1);return b.toBytes(b.create((r+n)*b.inv(r-n)));}e.ed25519=(0,r.twistedEdwards)(w),e.ed25519ctx=(0,r.twistedEdwards)(_objectSpread2(_objectSpread2({},w),{},{domain:E})),e.ed25519ph=(0,r.twistedEdwards)(Object.assign({},w,{domain:E,prehash:t.sha512})),e.x25519=(0,s.montgomery)({P:c,a:BigInt(486662),montgomeryBits:255,nByteLength:32,Gu:BigInt(9),powPminus2:function powPminus2(e){var t=c,_m3=m(e),n=_m3.pow_p_5_8,r=_m3.b2;return (0,o.mod)((0,o.pow2)(n,f,t)*r,t);},adjustScalarBytes:y,randomBytes:n.randomBytes}),e.edwardsToMontgomery=C;var S=function(){return (b.ORDER+f)/g;}(),_=function(){return b.pow(h,S);}(),k=function(){return b.sqrt(b.neg(b.ONE));}();var x=function(){return (0,o.FpSqrtEven)(b,b.neg(BigInt(486664)));}();function M(e){var _ref4=function(e){var t=(b.ORDER-p)/g,n=BigInt(486662);var r=b.sqr(e);r=b.mul(r,h);var i=b.add(r,b.ONE),o=b.neg(n),s=b.sqr(i),a=b.mul(s,i),c=b.mul(r,n);c=b.mul(c,o),c=b.add(c,s),c=b.mul(c,o);var l=b.sqr(a);s=b.sqr(l),l=b.mul(l,a),l=b.mul(l,c),s=b.mul(s,l);var d=b.pow(s,t);d=b.mul(d,l);var f=b.mul(d,k);s=b.sqr(d),s=b.mul(s,a);var m=b.eql(s,c),y=b.cmov(f,d,m),v=b.mul(o,r),w=b.mul(d,e);w=b.mul(w,_);var E=b.mul(w,k),C=b.mul(c,r);s=b.sqr(w),s=b.mul(s,a);var S=b.eql(s,C),x=b.cmov(E,w,S);s=b.sqr(y),s=b.mul(s,a);var M=b.eql(s,c),A=b.cmov(v,o,M),I=b.cmov(x,y,M),R=b.isOdd(I);return I=b.cmov(I,b.neg(I),M!==R),{xMn:A,xMd:i,yMn:I,yMd:u};}(e),t=_ref4.xMn,n=_ref4.xMd,r=_ref4.yMn,i=_ref4.yMd;var o=b.mul(t,i);o=b.mul(o,x);var s=b.mul(n,r),a=b.sub(t,n),c=b.add(t,n),l=b.mul(s,c),d=b.eql(l,b.ZERO);o=b.cmov(o,b.ZERO,d),s=b.cmov(s,b.ONE,d),a=b.cmov(a,b.ONE,d),c=b.cmov(c,b.ONE,d);var f=b.invertBatch([s,c]);return {x:b.mul(o,f[0]),y:b.mul(a,f[1])};}var A=function(){return (0,i.createHasher)(e.ed25519.ExtendedPoint,function(e){return M(e[0]);},{DST:"edwards25519_XMD:SHA-512_ELL2_RO_",encodeDST:"edwards25519_XMD:SHA-512_ELL2_NU_",p:b.ORDER,m:1,k:128,expand:"xmd",hash:t.sha512});}();function I(e){if(!(e instanceof K))throw new Error("RistrettoPoint expected");}e.hashToCurve=A.hashToCurve,e.encodeToCurve=A.encodeToCurve;var R=l,L=BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"),P=BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"),O=BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"),T=BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952"),N=function N(e){return v(u,e);},$=BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),D=function D(t){return e.ed25519.CURVE.Fp.create((0,a.bytesToNumberLE)(t)&$);};function B(t){var n=e.ed25519.CURVE.d,r=e.ed25519.CURVE.Fp.ORDER,i=e.ed25519.CURVE.Fp.create,s=i(R*t*t),a=i((s+u)*O);var c=BigInt(-1);var l=i((c-n*s)*i(s+n));var _v4=v(a,l),d=_v4.isValid,h=_v4.value,f=i(h*t);(0,o.isNegativeLE)(f,r)||(f=i(-f)),d||(h=f),d||(c=s);var p=i(c*(s-u)*T-l),g=h*h,m=i((h+h)*l),y=i(p*L),b=i(u-g),w=i(u+g);return new e.ed25519.ExtendedPoint(i(m*w),i(b*y),i(y*w),i(m*b));}var K=/*#__PURE__*/function(){function K(e){_classCallCheck(this,K);this.ep=e;}return _createClass(K,[{key:"toRawBytes",value:function toRawBytes(){var _this$ep=this.ep,t=_this$ep.ex,n=_this$ep.ey,r=_this$ep.ez,i=_this$ep.et;var s=e.ed25519.CURVE.Fp.ORDER,c=e.ed25519.CURVE.Fp.create,l=c(c(r+n)*c(r-n)),d=c(t*n),u=c(d*d),_N=N(c(l*u)),h=_N.value,f=c(h*l),p=c(h*d),g=c(f*p*i);var m;if((0,o.isNegativeLE)(i*g,s)){var _e23=c(n*R),_r13=c(t*R);t=_e23,n=_r13,m=c(f*P);}else m=p;(0,o.isNegativeLE)(t*g,s)&&(n=c(-n));var y=c((r-n)*m);return (0,o.isNegativeLE)(y,s)&&(y=c(-y)),(0,a.numberToBytesLE)(y,32);}},{key:"toHex",value:function toHex(){return (0,a.bytesToHex)(this.toRawBytes());}},{key:"toString",value:function toString(){return this.toHex();}},{key:"equals",value:function equals(t){I(t);var _this$ep2=this.ep,n=_this$ep2.ex,r=_this$ep2.ey,_t$ep=t.ep,i=_t$ep.ex,o=_t$ep.ey,s=e.ed25519.CURVE.Fp.create,a=s(n*o)===s(r*i),c=s(r*o)===s(n*i);return a||c;}},{key:"add",value:function add(e){return I(e),new K(this.ep.add(e.ep));}},{key:"subtract",value:function subtract(e){return I(e),new K(this.ep.subtract(e.ep));}},{key:"multiply",value:function multiply(e){return new K(this.ep.multiply(e));}},{key:"multiplyUnsafe",value:function multiplyUnsafe(e){return new K(this.ep.multiplyUnsafe(e));}},{key:"double",value:function _double2(){return new K(this.ep["double"]());}},{key:"negate",value:function negate(){return new K(this.ep.negate());}}],[{key:"fromAffine",value:function fromAffine(t){return new K(e.ed25519.ExtendedPoint.fromAffine(t));}},{key:"hashToCurve",value:function hashToCurve(e){e=(0,a.ensureBytes)("ristrettoHash",e,64);var t=B(D(e.slice(0,32))),n=B(D(e.slice(32,64)));return new K(t.add(n));}},{key:"fromHex",value:function fromHex(t){t=(0,a.ensureBytes)("ristrettoHex",t,32);var _e$ed25519$CURVE=e.ed25519.CURVE,n=_e$ed25519$CURVE.a,r=_e$ed25519$CURVE.d,i=e.ed25519.CURVE.Fp.ORDER,s=e.ed25519.CURVE.Fp.create,c="RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint",l=D(t);if(!(0,a.equalBytes)((0,a.numberToBytesLE)(l,32),t)||(0,o.isNegativeLE)(l,i))throw new Error(c);var h=s(l*l),f=s(u+n*h),p=s(u-n*h),g=s(f*f),m=s(p*p),y=s(n*r*g-m),_N2=N(s(y*m)),v=_N2.isValid,b=_N2.value,w=s(b*p),E=s(b*w*y);var C=s((l+l)*w);(0,o.isNegativeLE)(C,i)&&(C=s(-C));var S=s(f*E),_=s(C*S);if(!v||(0,o.isNegativeLE)(_,i)||S===d)throw new Error(c);return new K(new e.ed25519.ExtendedPoint(C,S,u,_));}}]);}();e.RistrettoPoint=(K.BASE||(K.BASE=new K(e.ed25519.ExtendedPoint.BASE)),K.ZERO||(K.ZERO=new K(e.ed25519.ExtendedPoint.ZERO)),K);e.hashToRistretto255=function(e,r){var o=r.DST,s="string"==typeof o?(0,n.utf8ToBytes)(o):o,a=(0,i.expand_message_xmd)(e,s,64,t.sha512);return K.hashToCurve(a);},e.hash_to_ristretto255=e.hashToRistretto255;}(Le);var Yn={},Jn={};Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.sha224=Jn.sha256=Jn.SHA256=void 0;var Xn=Oe,Qn=Fe,er=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),tr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),nr=new Uint32Array(64);var rr=/*#__PURE__*/function(_Xn$HashMD){function rr(){var _this6;_classCallCheck(this,rr);_this6=_callSuper(this,rr,[64,32,8,!1]),_this6.A=0|tr[0],_this6.B=0|tr[1],_this6.C=0|tr[2],_this6.D=0|tr[3],_this6.E=0|tr[4],_this6.F=0|tr[5],_this6.G=0|tr[6],_this6.H=0|tr[7];return _this6;}_inherits(rr,_Xn$HashMD);return _createClass(rr,[{key:"get",value:function get(){var e=this.A,t=this.B,n=this.C,r=this.D,i=this.E,o=this.F,s=this.G,a=this.H;return [e,t,n,r,i,o,s,a];}},{key:"set",value:function set(e,t,n,r,i,o,s,a){this.A=0|e,this.B=0|t,this.C=0|n,this.D=0|r,this.E=0|i,this.F=0|o,this.G=0|s,this.H=0|a;}},{key:"process",value:function process(e,t){for(var _n20=0;_n20<16;_n20++,t+=4)nr[_n20]=e.getUint32(t,!1);for(var _e24=16;_e24<64;_e24++){var _t35=nr[_e24-15],_n21=nr[_e24-2],_r14=(0,Qn.rotr)(_t35,7)^(0,Qn.rotr)(_t35,18)^_t35>>>3,_i21=(0,Qn.rotr)(_n21,17)^(0,Qn.rotr)(_n21,19)^_n21>>>10;nr[_e24]=_i21+nr[_e24-7]+_r14+nr[_e24-16]|0;}var n=this.A,r=this.B,i=this.C,o=this.D,s=this.E,a=this.F,c=this.G,l=this.H;for(var _e25=0;_e25<64;_e25++){var _t36=l+((0,Qn.rotr)(s,6)^(0,Qn.rotr)(s,11)^(0,Qn.rotr)(s,25))+(0,Xn.Chi)(s,a,c)+er[_e25]+nr[_e25]|0,_d3=((0,Qn.rotr)(n,2)^(0,Qn.rotr)(n,13)^(0,Qn.rotr)(n,22))+(0,Xn.Maj)(n,r,i)|0;l=c,c=a,a=s,s=o+_t36|0,o=i,i=r,r=n,n=_t36+_d3|0;}n=n+this.A|0,r=r+this.B|0,i=i+this.C|0,o=o+this.D|0,s=s+this.E|0,a=a+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(n,r,i,o,s,a,c,l);}},{key:"roundClean",value:function roundClean(){nr.fill(0);}},{key:"destroy",value:function destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0);}}]);}(Xn.HashMD);Jn.SHA256=rr;var ir=/*#__PURE__*/function(_rr){function ir(){var _this7;_classCallCheck(this,ir);_this7=_callSuper(this,ir),_this7.A=-1056596264,_this7.B=914150663,_this7.C=812702999,_this7.D=-150054599,_this7.E=-4191439,_this7.F=1750603025,_this7.G=1694076839,_this7.H=-1090891868,_this7.outputLen=28;return _this7;}_inherits(ir,_rr);return _createClass(ir);}(rr);Jn.sha256=(0,Qn.wrapConstructor)(function(){return new rr();}),Jn.sha224=(0,Qn.wrapConstructor)(function(){return new ir();});var or={},sr={};!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=e.HMAC=void 0;var t=Te,n=Fe;var r=/*#__PURE__*/function(_n$Hash){function r(e,_r15){var _this8;_classCallCheck(this,r);_this8=_callSuper(this,r),_this8.finished=!1,_this8.destroyed=!1,(0,t.hash)(e);var i=(0,n.toBytes)(_r15);if(_this8.iHash=e.create(),"function"!=typeof _this8.iHash.update)throw new Error("Expected instance of class which extends utils.Hash");_this8.blockLen=_this8.iHash.blockLen,_this8.outputLen=_this8.iHash.outputLen;var o=_this8.blockLen,s=new Uint8Array(o);s.set(i.length>o?e.create().update(i).digest():i);for(var _e26=0;_e26<s.length;_e26++)s[_e26]^=54;_this8.iHash.update(s),_this8.oHash=e.create();for(var _e27=0;_e27<s.length;_e27++)s[_e27]^=106;_this8.oHash.update(s),s.fill(0);return _this8;}_inherits(r,_n$Hash);return _createClass(r,[{key:"update",value:function update(e){return (0,t.exists)(this),this.iHash.update(e),this;}},{key:"digestInto",value:function digestInto(e){(0,t.exists)(this),(0,t.bytes)(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy();}},{key:"digest",value:function digest(){var e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e;}},{key:"_cloneInto",value:function _cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));var t=this.oHash,n=this.iHash,_r16=this.finished,i=this.destroyed,o=this.blockLen,s=this.outputLen;return e.finished=_r16,e.destroyed=i,e.blockLen=o,e.outputLen=s,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e;}},{key:"destroy",value:function destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy();}}]);}(n.Hash);e.HMAC=r;e.hmac=function(e,t,n){return new r(e,t).update(n).digest();},e.hmac.create=function(e,t){return new r(e,t);};}(sr);var ar={};!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DER=void 0,e.weierstrassPoints=f,e.weierstrass=function(s){var a=function(e){var n=(0,t.validateBasic)(e);return r.validateObject(n,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze(_objectSpread2({lowS:!0},n));}(s),d=a.Fp,u=a.n,h=d.BYTES+1,p=2*d.BYTES+1;function g(e){return n.mod(e,u);}function m(e){return n.invert(e,u);}var _f4=f(_objectSpread2(_objectSpread2({},a),{},{toBytes:function toBytes(e,t,n){var o=t.toAffine(),s=d.toBytes(o.x),a=r.concatBytes;return (0,i.abool)("isCompressed",n),n?a(Uint8Array.from([t.hasEvenY()?2:3]),s):a(Uint8Array.from([4]),s,d.toBytes(o.y));},fromBytes:function fromBytes(e){var t=e.length,n=e[0],i=e.subarray(1);if(t!==h||2!==n&&3!==n){if(t===p&&4===n){return {x:d.fromBytes(i.subarray(0,d.BYTES)),y:d.fromBytes(i.subarray(d.BYTES,2*d.BYTES))};}throw new Error("Point of length ".concat(t," was invalid. Expected ").concat(h," compressed bytes or ").concat(p," uncompressed bytes"));}{var _e28=r.bytesToNumberBE(i);if(!r.inRange(_e28,l,d.ORDER))throw new Error("Point is not on curve");var _t37=b(_e28);var _o9;try{_o9=d.sqrt(_t37);}catch(e){var _t38=e instanceof Error?": "+e.message:"";throw new Error("Point is not on curve"+_t38);}return 1==(1&n)!==((_o9&l)===l)&&(_o9=d.neg(_o9)),{x:_e28,y:_o9};}}})),y=_f4.ProjectivePoint,v=_f4.normPrivateKeyToScalar,b=_f4.weierstrassEquation,w=_f4.isWithinCurveOrder,E=function E(e){return r.bytesToHex(r.numberToBytesBE(e,a.nByteLength));};function C(e){return e>u>>l;}var S=function S(e,t,n){return r.bytesToNumberBE(e.slice(t,n));};var _=/*#__PURE__*/function(){function _(e,t,n){_classCallCheck(this,_);this.r=e,this.s=t,this.recovery=n,this.assertValidity();}return _createClass(_,[{key:"assertValidity",value:function assertValidity(){r.aInRange("r",this.r,l,u),r.aInRange("s",this.s,l,u);}},{key:"addRecoveryBit",value:function addRecoveryBit(e){return new _(this.r,this.s,e);}},{key:"recoverPublicKey",value:function recoverPublicKey(e){var t=this.r,n=this.s,r=this.recovery,o=A((0,i.ensureBytes)("msgHash",e));if(null==r||![0,1,2,3].includes(r))throw new Error("recovery id invalid");var s=2===r||3===r?t+a.n:t;if(s>=d.ORDER)throw new Error("recovery id 2 or 3 invalid");var c=0==(1&r)?"02":"03",l=y.fromHex(c+E(s)),u=m(s),h=g(-o*u),f=g(n*u),p=y.BASE.multiplyAndAddUnsafe(l,h,f);if(!p)throw new Error("point at infinify");return p.assertValidity(),p;}},{key:"hasHighS",value:function hasHighS(){return C(this.s);}},{key:"normalizeS",value:function normalizeS(){return this.hasHighS()?new _(this.r,g(-this.s),this.recovery):this;}},{key:"toDERRawBytes",value:function toDERRawBytes(){return r.hexToBytes(this.toDERHex());}},{key:"toDERHex",value:function toDERHex(){return e.DER.hexFromSig({r:this.r,s:this.s});}},{key:"toCompactRawBytes",value:function toCompactRawBytes(){return r.hexToBytes(this.toCompactHex());}},{key:"toCompactHex",value:function toCompactHex(){return E(this.r)+E(this.s);}}],[{key:"fromCompact",value:function fromCompact(e){var t=a.nByteLength;return e=(0,i.ensureBytes)("compactSignature",e,2*t),new _(S(e,0,t),S(e,t,2*t));}},{key:"fromDER",value:function fromDER(t){var _e$DER$toSig=e.DER.toSig((0,i.ensureBytes)("DER",t)),n=_e$DER$toSig.r,r=_e$DER$toSig.s;return new _(n,r);}}]);}();var k={isValidPrivateKey:function isValidPrivateKey(e){try{return v(e),!0;}catch(e){return !1;}},normPrivateKeyToScalar:v,randomPrivateKey:function randomPrivateKey(){var e=n.getMinHashLength(a.n);return n.mapHashToField(a.randomBytes(e),a.n);},precompute:function precompute(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:8;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:y.BASE;return t._setWindowSize(e),t.multiply(BigInt(3)),t;}};function x(e){var t=r.isBytes(e),n="string"==typeof e,i=(t||n)&&e.length;return t?i===h||i===p:n?i===2*h||i===2*p:e instanceof y;}var M=a.bits2int||function(e){var t=r.bytesToNumberBE(e),n=8*e.length-a.nBitLength;return n>0?t>>BigInt(n):t;},A=a.bits2int_modN||function(e){return g(M(e));},I=r.bitMask(a.nBitLength);function R(e){return r.aInRange("num < 2^".concat(a.nBitLength),e,c,I),r.numberToBytesBE(e,a.nByteLength);}function L(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:P;if(["recovered","canonical"].some(function(e){return e in n;}))throw new Error("sign() legacy options not supported");var s=a.hash,u=a.randomBytes;var h=n.lowS,f=n.prehash,p=n.extraEntropy;null==h&&(h=!0),e=(0,i.ensureBytes)("msgHash",e),o(n),f&&(e=(0,i.ensureBytes)("prehashed msgHash",s(e)));var b=A(e),E=v(t),S=[R(E),R(b)];if(null!=p&&!1!==p){var _e29=!0===p?u(d.BYTES):p;S.push((0,i.ensureBytes)("extraEntropy",_e29));}var k=r.concatBytes.apply(r,S),x=b;return {seed:k,k2sig:function k2sig(e){var t=M(e);if(!w(t))return;var n=m(t),r=y.BASE.multiply(t).toAffine(),i=g(r.x);if(i===c)return;var o=g(n*g(x+i*E));if(o===c)return;var s=(r.x===i?0:2)|Number(r.y&l),a=o;return h&&C(o)&&(a=function(e){return C(e)?g(-e):e;}(o),s^=1),new _(i,a,s);}};}var P={lowS:a.lowS,prehash:!1},O={lowS:a.lowS,prehash:!1};return y.BASE._setWindowSize(8),{CURVE:a,getPublicKey:function getPublicKey(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!0;return y.fromPrivateKey(e).toRawBytes(t);},getSharedSecret:function getSharedSecret(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!0;if(x(e))throw new Error("first arg must be private key");if(!x(t))throw new Error("second arg must be public key");var r=y.fromHex(t);return r.multiply(v(e)).toRawBytes(n);},sign:function sign(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:P;var _L=L(e,t,n),i=_L.seed,o=_L.k2sig,s=a,c=r.createHmacDrbg(s.hash.outputLen,s.nByteLength,s.hmac);return c(i,o);},verify:function verify(t,n,s){var _y$BASE$multiplyAndAd;var c=arguments.length>3&&arguments[3]!==undefined?arguments[3]:O;var l=t;if(n=(0,i.ensureBytes)("msgHash",n),s=(0,i.ensureBytes)("publicKey",s),"strict"in c)throw new Error("options.strict was renamed to lowS");o(c);var d=c.lowS,u=c.prehash;var h,f;try{if("string"==typeof l||r.isBytes(l))try{h=_.fromDER(l);}catch(t){if(!(t instanceof e.DER.Err))throw t;h=_.fromCompact(l);}else {if("object"!=_typeof(l)||"bigint"!=typeof l.r||"bigint"!=typeof l.s)throw new Error("PARSE");{var _e30=l.r,_t39=l.s;h=new _(_e30,_t39);}}f=y.fromHex(s);}catch(e){if("PARSE"===e.message)throw new Error("signature must be Signature instance, Uint8Array or hex string");return !1;}if(d&&h.hasHighS())return !1;u&&(n=a.hash(n));var _h3=h,p=_h3.r,v=_h3.s,b=A(n),w=m(v),E=g(b*w),C=g(p*w),S=(_y$BASE$multiplyAndAd=y.BASE.multiplyAndAddUnsafe(f,E,C))===null||_y$BASE$multiplyAndAd===void 0?void 0:_y$BASE$multiplyAndAd.toAffine();if(!S)return !1;var k=g(S.x);return k===p;},ProjectivePoint:y,Signature:_,utils:k};},e.SWUFpSqrtRatio=p,e.mapToCurveSimpleSWU=function(e,t){if(n.validateField(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");var r=p(e,t.Z);if(!e.isOdd)throw new Error("Fp.isOdd is not implemented!");return function(n){var i,o,s,a,c,l,d,u;i=e.sqr(n),i=e.mul(i,t.Z),o=e.sqr(i),o=e.add(o,i),s=e.add(o,e.ONE),s=e.mul(s,t.B),a=e.cmov(t.Z,e.neg(o),!e.eql(o,e.ZERO)),a=e.mul(a,t.A),o=e.sqr(s),l=e.sqr(a),c=e.mul(l,t.A),o=e.add(o,c),o=e.mul(o,s),l=e.mul(l,a),c=e.mul(l,t.B),o=e.add(o,c),d=e.mul(i,s);var _r17=r(o,l),h=_r17.isValid,f=_r17.value;u=e.mul(i,n),u=e.mul(u,f),d=e.cmov(d,s,h),u=e.cmov(u,f,h);var p=e.isOdd(n)===e.isOdd(u);return u=e.cmov(e.neg(u),u,p),d=e.div(d,a),{x:d,y:u};};};var t=Lt,n=Pt,r=Ot,i=Ot;function o(e){void 0!==e.lowS&&(0,i.abool)("lowS",e.lowS),void 0!==e.prehash&&(0,i.abool)("prehash",e.prehash);}var s=r.bytesToNumberBE,a=r.hexToBytes;e.DER={Err:/*#__PURE__*/function(_Error){function Err(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";_classCallCheck(this,Err);return _callSuper(this,Err,[e]);}_inherits(Err,_Error);return _createClass(Err);}(/*#__PURE__*/_wrapNativeSuper(Error)),_tlv:{encode:function encode(t,n){var i=e.DER.Err;if(t<0||t>256)throw new i("tlv.encode: wrong tag");if(1&n.length)throw new i("tlv.encode: unpadded data");var o=n.length/2,s=r.numberToHexUnpadded(o);if(s.length/2&128)throw new i("tlv.encode: long form length too big");var a=o>127?r.numberToHexUnpadded(s.length/2|128):"";return "".concat(r.numberToHexUnpadded(t)).concat(a).concat(s).concat(n);},decode:function decode(t,n){var r=e.DER.Err;var i=0;if(t<0||t>256)throw new r("tlv.encode: wrong tag");if(n.length<2||n[i++]!==t)throw new r("tlv.decode: wrong tlv");var o=n[i++];var s=0;if(!!(128&o)){var _e31=127&o;if(!_e31)throw new r("tlv.decode(long): indefinite length not supported");if(_e31>4)throw new r("tlv.decode(long): byte length is too big");var _t40=n.subarray(i,i+_e31);if(_t40.length!==_e31)throw new r("tlv.decode: length bytes not complete");if(0===_t40[0])throw new r("tlv.decode(long): zero leftmost byte");var _iterator2=_createForOfIteratorHelper(_t40),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _e32=_step2.value;s=s<<8|_e32;}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}if(i+=_e31,s<128)throw new r("tlv.decode(long): not minimal encoding");}else s=o;var a=n.subarray(i,i+s);if(a.length!==s)throw new r("tlv.decode: wrong value length");return {v:a,l:n.subarray(i+s)};}},_int:{encode:function encode(t){var n=e.DER.Err;if(t<c)throw new n("integer: negative integers are not allowed");var i=r.numberToHexUnpadded(t);if(8&Number.parseInt(i[0],16)&&(i="00"+i),1&i.length)throw new n("unexpected assertion");return i;},decode:function decode(t){var n=e.DER.Err;if(128&t[0])throw new n("Invalid signature integer: negative");if(0===t[0]&&!(128&t[1]))throw new n("Invalid signature integer: unnecessary leading zero");return s(t);}},toSig:function toSig(t){var _e$DER=e.DER,n=_e$DER.Err,i=_e$DER._int,o=_e$DER._tlv,s="string"==typeof t?a(t):t;r.abytes(s);var _o$decode=o.decode(48,s),c=_o$decode.v,l=_o$decode.l;if(l.length)throw new n("Invalid signature: left bytes after parsing");var _o$decode2=o.decode(2,c),d=_o$decode2.v,u=_o$decode2.l,_o$decode3=o.decode(2,u),h=_o$decode3.v,f=_o$decode3.l;if(f.length)throw new n("Invalid signature: left bytes after parsing");return {r:i.decode(d),s:i.decode(h)};},hexFromSig:function hexFromSig(t){var _e$DER2=e.DER,n=_e$DER2._tlv,r=_e$DER2._int,i="".concat(n.encode(2,r.encode(t.r))).concat(n.encode(2,r.encode(t.s)));return n.encode(48,i);}};var c=BigInt(0),l=BigInt(1),d=BigInt(2),u=BigInt(3),h=BigInt(4);function f(e){var o=function(e){var n=(0,t.validateBasic)(e);r.validateObject(n,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});var i=n.endo,o=n.Fp,s=n.a;if(i){if(!o.eql(s,o.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if("object"!=_typeof(i)||"bigint"!=typeof i.beta||"function"!=typeof i.splitScalar)throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");}return Object.freeze(_objectSpread2({},n));}(e),s=o.Fp,a=n.Field(o.n,o.nBitLength),d=o.toBytes||function(e,t,n){var i=t.toAffine();return r.concatBytes(Uint8Array.from([4]),s.toBytes(i.x),s.toBytes(i.y));},h=o.fromBytes||function(e){var t=e.subarray(1);return {x:s.fromBytes(t.subarray(0,s.BYTES)),y:s.fromBytes(t.subarray(s.BYTES,2*s.BYTES))};};function f(e){var t=o.a,n=o.b,r=s.sqr(e),i=s.mul(r,e);return s.add(s.add(i,s.mul(e,t)),n);}if(!s.eql(s.sqr(o.Gy),f(o.Gx)))throw new Error("bad generator point: equation left != right");function p(e){var t=o.allowedPrivateKeyLengths,s=o.nByteLength,a=o.wrapPrivateKey,c=o.n;if(t&&"bigint"!=typeof e){if(r.isBytes(e)&&(e=r.bytesToHex(e)),"string"!=typeof e||!t.includes(e.length))throw new Error("Invalid key");e=e.padStart(2*s,"0");}var d;try{d="bigint"==typeof e?e:r.bytesToNumberBE((0,i.ensureBytes)("private key",e,s));}catch(t){throw new Error("private key must be ".concat(s," bytes, hex or bigint, not ").concat(_typeof(e)));}return a&&(d=n.mod(d,c)),r.aInRange("private key",d,l,c),d;}function g(e){if(!(e instanceof v))throw new Error("ProjectivePoint expected");}var m=(0,i.memoized)(function(e,t){var n=e.px,r=e.py,i=e.pz;if(s.eql(i,s.ONE))return {x:n,y:r};var o=e.is0();null==t&&(t=o?s.ONE:s.inv(i));var a=s.mul(n,t),c=s.mul(r,t),l=s.mul(i,t);if(o)return {x:s.ZERO,y:s.ZERO};if(!s.eql(l,s.ONE))throw new Error("invZ was invalid");return {x:a,y:c};}),y=(0,i.memoized)(function(e){if(e.is0()){if(o.allowInfinityPoint&&!s.is0(e.py))return;throw new Error("bad point: ZERO");}var _e$toAffine=e.toAffine(),t=_e$toAffine.x,n=_e$toAffine.y;if(!s.isValid(t)||!s.isValid(n))throw new Error("bad point: x or y not FE");var r=s.sqr(n),i=f(t);if(!s.eql(r,i))throw new Error("bad point: equation left != right");if(!e.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return !0;});var v=/*#__PURE__*/function(){function v(e,t,n){_classCallCheck(this,v);if(this.px=e,this.py=t,this.pz=n,null==e||!s.isValid(e))throw new Error("x required");if(null==t||!s.isValid(t))throw new Error("y required");if(null==n||!s.isValid(n))throw new Error("z required");Object.freeze(this);}return _createClass(v,[{key:"x",get:function get(){return this.toAffine().x;}},{key:"y",get:function get(){return this.toAffine().y;}},{key:"_setWindowSize",value:function _setWindowSize(e){w.setWindowSize(this,e);}},{key:"assertValidity",value:function assertValidity(){y(this);}},{key:"hasEvenY",value:function hasEvenY(){var _this$toAffine2=this.toAffine(),e=_this$toAffine2.y;if(s.isOdd)return !s.isOdd(e);throw new Error("Field doesn't support isOdd");}},{key:"equals",value:function equals(e){g(e);var t=this.px,n=this.py,r=this.pz,i=e.px,o=e.py,a=e.pz,c=s.eql(s.mul(t,a),s.mul(i,r)),l=s.eql(s.mul(n,a),s.mul(o,r));return c&&l;}},{key:"negate",value:function negate(){return new v(this.px,s.neg(this.py),this.pz);}},{key:"double",value:function _double3(){var e=o.a,t=o.b,n=s.mul(t,u),r=this.px,i=this.py,a=this.pz;var c=s.ZERO,l=s.ZERO,d=s.ZERO,h=s.mul(r,r),f=s.mul(i,i),p=s.mul(a,a),g=s.mul(r,i);return g=s.add(g,g),d=s.mul(r,a),d=s.add(d,d),c=s.mul(e,d),l=s.mul(n,p),l=s.add(c,l),c=s.sub(f,l),l=s.add(f,l),l=s.mul(c,l),c=s.mul(g,c),d=s.mul(n,d),p=s.mul(e,p),g=s.sub(h,p),g=s.mul(e,g),g=s.add(g,d),d=s.add(h,h),h=s.add(d,h),h=s.add(h,p),h=s.mul(h,g),l=s.add(l,h),p=s.mul(i,a),p=s.add(p,p),h=s.mul(p,g),c=s.sub(c,h),d=s.mul(p,f),d=s.add(d,d),d=s.add(d,d),new v(c,l,d);}},{key:"add",value:function add(e){g(e);var t=this.px,n=this.py,r=this.pz,i=e.px,a=e.py,c=e.pz;var l=s.ZERO,d=s.ZERO,h=s.ZERO;var f=o.a,p=s.mul(o.b,u);var m=s.mul(t,i),y=s.mul(n,a),b=s.mul(r,c),w=s.add(t,n),E=s.add(i,a);w=s.mul(w,E),E=s.add(m,y),w=s.sub(w,E),E=s.add(t,r);var C=s.add(i,c);return E=s.mul(E,C),C=s.add(m,b),E=s.sub(E,C),C=s.add(n,r),l=s.add(a,c),C=s.mul(C,l),l=s.add(y,b),C=s.sub(C,l),h=s.mul(f,E),l=s.mul(p,b),h=s.add(l,h),l=s.sub(y,h),h=s.add(y,h),d=s.mul(l,h),y=s.add(m,m),y=s.add(y,m),b=s.mul(f,b),E=s.mul(p,E),y=s.add(y,b),b=s.sub(m,b),b=s.mul(f,b),E=s.add(E,b),m=s.mul(y,E),d=s.add(d,m),m=s.mul(C,E),l=s.mul(w,l),l=s.sub(l,m),m=s.mul(w,y),h=s.mul(C,h),h=s.add(h,m),new v(l,d,h);}},{key:"subtract",value:function subtract(e){return this.add(e.negate());}},{key:"is0",value:function is0(){return this.equals(v.ZERO);}},{key:"wNAF",value:function wNAF(e){return w.wNAFCached(this,e,v.normalizeZ);}},{key:"multiplyUnsafe",value:function multiplyUnsafe(e){r.aInRange("scalar",e,c,o.n);var t=v.ZERO;if(e===c)return t;if(e===l)return this;var n=o.endo;if(!n)return w.unsafeLadder(this,e);var _n$splitScalar=n.splitScalar(e),i=_n$splitScalar.k1neg,a=_n$splitScalar.k1,d=_n$splitScalar.k2neg,u=_n$splitScalar.k2,h=t,f=t,p=this;for(;a>c||u>c;)a&l&&(h=h.add(p)),u&l&&(f=f.add(p)),p=p["double"](),a>>=l,u>>=l;return i&&(h=h.negate()),d&&(f=f.negate()),f=new v(s.mul(f.px,n.beta),f.py,f.pz),h.add(f);}},{key:"multiply",value:function multiply(e){var t=o.endo,n=o.n;var i,a;if(r.aInRange("scalar",e,l,n),t){var _t$splitScalar=t.splitScalar(e),_n22=_t$splitScalar.k1neg,_r18=_t$splitScalar.k1,_o10=_t$splitScalar.k2neg,_c4=_t$splitScalar.k2;var _this$wNAF2=this.wNAF(_r18),_l3=_this$wNAF2.p,_d4=_this$wNAF2.f,_this$wNAF3=this.wNAF(_c4),_u2=_this$wNAF3.p,_h4=_this$wNAF3.f;_l3=w.constTimeNegate(_n22,_l3),_u2=w.constTimeNegate(_o10,_u2),_u2=new v(s.mul(_u2.px,t.beta),_u2.py,_u2.pz),i=_l3.add(_u2),a=_d4.add(_h4);}else {var _this$wNAF4=this.wNAF(e),_t41=_this$wNAF4.p,_n23=_this$wNAF4.f;i=_t41,a=_n23;}return v.normalizeZ([i,a])[0];}},{key:"multiplyAndAddUnsafe",value:function multiplyAndAddUnsafe(e,t,n){var r=v.BASE,i=function i(e,t){return t!==c&&t!==l&&e.equals(r)?e.multiply(t):e.multiplyUnsafe(t);},o=i(this,t).add(i(e,n));return o.is0()?void 0:o;}},{key:"toAffine",value:function toAffine(e){return m(this,e);}},{key:"isTorsionFree",value:function isTorsionFree(){var e=o.h,t=o.isTorsionFree;if(e===l)return !0;if(t)return t(v,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve");}},{key:"clearCofactor",value:function clearCofactor(){var e=o.h,t=o.clearCofactor;return e===l?this:t?t(v,this):this.multiplyUnsafe(o.h);}},{key:"toRawBytes",value:function toRawBytes(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!0;return (0,i.abool)("isCompressed",e),this.assertValidity(),d(v,this,e);}},{key:"toHex",value:function toHex(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!0;return (0,i.abool)("isCompressed",e),r.bytesToHex(this.toRawBytes(e));}}],[{key:"fromAffine",value:function fromAffine(e){var _ref8=e||{},t=_ref8.x,n=_ref8.y;if(!e||!s.isValid(t)||!s.isValid(n))throw new Error("invalid affine point");if(e instanceof v)throw new Error("projective point not allowed");var r=function r(e){return s.eql(e,s.ZERO);};return r(t)&&r(n)?v.ZERO:new v(t,n,s.ONE);}},{key:"normalizeZ",value:function normalizeZ(e){var t=s.invertBatch(e.map(function(e){return e.pz;}));return e.map(function(e,n){return e.toAffine(t[n]);}).map(v.fromAffine);}},{key:"fromHex",value:function fromHex(e){var t=v.fromAffine(h((0,i.ensureBytes)("pointHex",e)));return t.assertValidity(),t;}},{key:"fromPrivateKey",value:function fromPrivateKey(e){return v.BASE.multiply(p(e));}},{key:"msm",value:function msm(e,n){return (0,t.pippenger)(v,a,e,n);}}]);}();v.BASE=new v(o.Gx,o.Gy,s.ONE),v.ZERO=new v(s.ZERO,s.ONE,s.ZERO);var b=o.nBitLength,w=(0,t.wNAF)(v,o.endo?Math.ceil(b/2):b);return {CURVE:o,ProjectivePoint:v,normPrivateKeyToScalar:p,weierstrassEquation:f,isWithinCurveOrder:function isWithinCurveOrder(e){return r.inRange(e,l,o.n);}};}function p(e,t){var n=e.ORDER;var r=c;for(var _e33=n-l;_e33%d===c;_e33/=d)r+=l;var i=r,o=d<<i-l-l,s=o*d,a=(n-l)/s,f=(a-l)/d,p=s-l,g=o,m=e.pow(t,a),y=e.pow(t,(a+l)/d);var v=function v(t,n){var r=m,o=e.pow(n,p),s=e.sqr(o);s=e.mul(s,n);var a=e.mul(t,s);a=e.pow(a,f),a=e.mul(a,o),o=e.mul(a,n),s=e.mul(a,t);var c=e.mul(s,o);a=e.pow(c,g);var u=e.eql(a,e.ONE);o=e.mul(s,y),a=e.mul(c,r),s=e.cmov(o,s,u),c=e.cmov(a,c,u);for(var _t42=i;_t42>l;_t42--){var _n24=_t42-d;_n24=d<<_n24-l;var _i22=e.pow(c,_n24);var _a3=e.eql(_i22,e.ONE);o=e.mul(s,r),r=e.mul(r,r),_i22=e.mul(c,r),s=e.cmov(o,s,_a3),c=e.cmov(_i22,c,_a3);}return {isValid:u,value:s};};if(e.ORDER%h===u){var _n25=(e.ORDER-u)/h,_r19=e.sqrt(e.neg(t));v=function v(t,i){var o=e.sqr(i);var s=e.mul(t,i);o=e.mul(o,s);var a=e.pow(o,_n25);a=e.mul(a,s);var c=e.mul(a,_r19),l=e.mul(e.sqr(a),i),d=e.eql(l,t);return {isValid:d,value:e.cmov(c,a,d)};};}return v;}}(ar),Object.defineProperty(or,"__esModule",{value:!0}),or.getHash=ur,or.createCurve=function(e,t){var n=function n(t){return (0,dr.weierstrass)(_objectSpread2(_objectSpread2({},e),ur(t)));};return Object.freeze(_objectSpread2(_objectSpread2({},n(t)),{},{create:n}));};var cr=sr,lr=Fe,dr=ar;function ur(e){return {hash:e,hmac:function hmac(t){for(var _len10=arguments.length,n=new Array(_len10>1?_len10-1:0),_key10=1;_key10<_len10;_key10++){n[_key10-1]=arguments[_key10];}return (0,cr.hmac)(e,t,(0,lr.concatBytes).apply(void 0,n));},randomBytes:lr.randomBytes};}!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.encodeToCurve=e.hashToCurve=e.schnorr=e.secp256k1=void 0;var t=Jn,n=Fe,r=or,i=Nn,o=Pt,s=Ot,a=ar,c=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),l=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),d=BigInt(1),u=BigInt(2),h=function h(e,t){return (e+t/u)/t;};function f(e){var t=c,n=BigInt(3),r=BigInt(6),i=BigInt(11),s=BigInt(22),a=BigInt(23),l=BigInt(44),d=BigInt(88),h=e*e*e%t,f=h*h*e%t,g=(0,o.pow2)(f,n,t)*f%t,m=(0,o.pow2)(g,n,t)*f%t,y=(0,o.pow2)(m,u,t)*h%t,v=(0,o.pow2)(y,i,t)*y%t,b=(0,o.pow2)(v,s,t)*v%t,w=(0,o.pow2)(b,l,t)*b%t,E=(0,o.pow2)(w,d,t)*w%t,C=(0,o.pow2)(E,l,t)*b%t,S=(0,o.pow2)(C,n,t)*f%t,_=(0,o.pow2)(S,a,t)*v%t,k=(0,o.pow2)(_,r,t)*h%t,x=(0,o.pow2)(k,u,t);if(!p.eql(p.sqr(x),e))throw new Error("Cannot find square root");return x;}var p=(0,o.Field)(c,void 0,void 0,{sqrt:f});e.secp256k1=(0,r.createCurve)({a:BigInt(0),b:BigInt(7),Fp:p,n:l,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:function splitScalar(e){var t=l,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-d*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),i=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=n,a=BigInt("0x100000000000000000000000000000000"),c=h(s*e,t),u=h(-r*e,t);var f=(0,o.mod)(e-c*n-u*i,t),p=(0,o.mod)(-c*r-u*s,t);var g=f>a,m=p>a;if(g&&(f=t-f),m&&(p=t-p),f>a||p>a)throw new Error("splitScalar: Endomorphism failed, k="+e);return {k1neg:g,k1:f,k2neg:m,k2:p};}}},t.sha256);var g=BigInt(0),m={};function y(e){var r=m[e];if(void 0===r){var _n26=(0,t.sha256)(Uint8Array.from(e,function(e){return e.charCodeAt(0);}));r=(0,s.concatBytes)(_n26,_n26),m[e]=r;}for(var _len11=arguments.length,n=new Array(_len11>1?_len11-1:0),_key11=1;_key11<_len11;_key11++){n[_key11-1]=arguments[_key11];}return (0,t.sha256)((0,s.concatBytes).apply(void 0,[r].concat(n)));}var v=function v(e){return e.toRawBytes(!0).slice(1);},b=function b(e){return (0,s.numberToBytesBE)(e,32);},w=function w(e){return (0,o.mod)(e,c);},E=function E(e){return (0,o.mod)(e,l);},C=e.secp256k1.ProjectivePoint,S=function S(e,t,n){return C.BASE.multiplyAndAddUnsafe(e,t,n);};function _(t){var n=e.secp256k1.utils.normPrivateKeyToScalar(t),r=C.fromPrivateKey(n);return {scalar:r.hasEvenY()?n:E(-n),bytes:v(r)};}function k(e){(0,s.aInRange)("x",e,d,c);var t=w(e*e);var n=f(w(t*e+BigInt(7)));n%u!==g&&(n=w(-n));var r=new C(e,n,d);return r.assertValidity(),r;}var x=s.bytesToNumberBE;function M(){for(var _len12=arguments.length,e=new Array(_len12),_key12=0;_key12<_len12;_key12++){e[_key12]=arguments[_key12];}return E(x(y.apply(void 0,["BIP0340/challenge"].concat(e))));}function A(e){return _(e).bytes;}function I(e,t){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:(0,n.randomBytes)(32);var i=(0,s.ensureBytes)("message",e),_ref9=_(t),o=_ref9.bytes,a=_ref9.scalar,c=(0,s.ensureBytes)("auxRand",r,32),l=b(a^x(y("BIP0340/aux",c))),d=y("BIP0340/nonce",l,o,i),u=E(x(d));if(u===g)throw new Error("sign failed: k is zero");var _ref10=_(u),h=_ref10.bytes,f=_ref10.scalar,p=M(h,o,i),m=new Uint8Array(64);if(m.set(h,0),m.set(b(E(f+p*a)),32),!R(m,i,o))throw new Error("sign: Invalid signature produced");return m;}function R(e,t,n){var r=(0,s.ensureBytes)("signature",e,64),i=(0,s.ensureBytes)("message",t),o=(0,s.ensureBytes)("publicKey",n,32);try{var _e34=k(x(o)),_t43=x(r.subarray(0,32));if(!(0,s.inRange)(_t43,d,c))return !1;var _n27=x(r.subarray(32,64));if(!(0,s.inRange)(_n27,d,l))return !1;var _a4=M(b(_t43),v(_e34),i),_u3=S(_e34,_n27,E(-_a4));return !(!_u3||!_u3.hasEvenY()||_u3.toAffine().x!==_t43);}catch(e){return !1;}}e.schnorr={getPublicKey:A,sign:I,verify:R,utils:{randomPrivateKey:e.secp256k1.utils.randomPrivateKey,lift_x:k,pointToBytes:v,numberToBytesBE:s.numberToBytesBE,bytesToNumberBE:s.bytesToNumberBE,taggedHash:y,mod:o.mod}};var L=function(){return (0,i.isogenyMap)(p,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(function(e){return e.map(function(e){return BigInt(e);});}));}(),P=function(){return (0,a.mapToCurveSimpleSWU)(p,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:p.create(BigInt("-11"))});}(),O=function(){return (0,i.createHasher)(e.secp256k1.ProjectivePoint,function(e){var _P=P(p.create(e[0])),t=_P.x,n=_P.y;return L(t,n);},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:p.ORDER,m:1,k:128,expand:"xmd",hash:t.sha256});}();e.hashToCurve=O.hashToCurve,e.encodeToCurve=O.encodeToCurve;}(Yn);var hr={};!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.decodeHex=e.remove0x=void 0;var t=fe;e.remove0x=function(e){return e.startsWith("0x")||e.startsWith("0X")?e.slice(2):e;};e.decodeHex=function(n){return (0,t.hexToBytes)((0,e.remove0x)(n));};}(hr),function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hexToPublicKey=e.convertPublicKeyFormat=e.getSharedPoint=e.getPublicKey=e.isValidPrivateKey=e.getValidSecret=void 0;var t=Ie,n=Le,r=Yn,i=Se,o=_e,s=hr;e.getValidSecret=function(){var n;do{n=(0,t.randomBytes)(o.SECRET_KEY_LENGTH);}while(!(0,e.isValidPrivateKey)(n));return n;};e.isValidPrivateKey=function(e){return a((0,i.ellipticCurve)(),function(t){return t.utils.isValidPrivateKey(e);},function(){return !0;},function(){return !0;});};e.getPublicKey=function(e){return a((0,i.ellipticCurve)(),function(t){return t.getPublicKey(e);},function(t){return t.getPublicKey(e);},function(t){return t.getPublicKey(e);});};e.getSharedPoint=function(e,t,n){return a((0,i.ellipticCurve)(),function(r){return r.getSharedSecret(e,t,n);},function(n){return n.getSharedSecret(e,t);},function(n){return l(n,e,t);});};e.convertPublicKeyFormat=function(e,t){return a((0,i.ellipticCurve)(),function(n){return n.getSharedSecret(BigInt(1),e,t);},function(){return e;},function(){return e;});};function a(e,t,i,o){if("secp256k1"===e)return t(r.secp256k1);if("x25519"===e)return i(n.x25519);if("ed25519"===e)return o(n.ed25519);throw new Error("Not implemented");}e.hexToPublicKey=function(e){var t=(0,s.decodeHex)(e);return a((0,i.ellipticCurve)(),function(){return c(t);},function(){return t;},function(){return t;});};var c=function c(e){if(e.length===o.ETH_PUBLIC_KEY_SIZE){var t=new Uint8Array(1+e.length);return t.set([4]),t.set(e,1),t;}return e;},l=function l(e,t,n){var r=e.utils.getExtendedPublicKey(t).scalar;return e.ExtendedPoint.fromHex(n).multiply(r).toRawBytes();};}(Ae);var fr={},pr={};Object.defineProperty(pr,"__esModule",{value:!0}),pr.hkdf=void 0,pr.extract=vr,pr.expand=Er;var gr=Te,mr=Fe,yr=sr;function vr(e,t,n){return (0,gr.hash)(e),void 0===n&&(n=new Uint8Array(e.outputLen)),(0,yr.hmac)(e,(0,mr.toBytes)(n),(0,mr.toBytes)(t));}var br=new Uint8Array([0]),wr=new Uint8Array();function Er(e,t,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:32;if((0,gr.hash)(e),(0,gr.number)(r),r>255*e.outputLen)throw new Error("Length should be <= 255*HashLen");var i=Math.ceil(r/e.outputLen);void 0===n&&(n=wr);var o=new Uint8Array(i*e.outputLen),s=yr.hmac.create(e,t),a=s._cloneInto(),c=new Uint8Array(s.outputLen);for(var _t44=0;_t44<i;_t44++)br[0]=_t44+1,a.update(0===_t44?wr:c).update(n).update(br).digestInto(c),o.set(c,e.outputLen*_t44),s._cloneInto(a);return s.destroy(),a.destroy(),c.fill(0),br.fill(0),o.slice(0,r);}pr.hkdf=function(e,t,n,r,i){return Er(e,vr(e,t,n),r,i);},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getSharedKey=e.deriveKey=void 0;var t=fe,n=pr,r=Jn;e.deriveKey=function(e,t,i){return (0,n.hkdf)(r.sha256,e,t,i,32);};e.getSharedKey=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return (0,e.deriveKey)(t.concatBytes.apply(void 0,n));};}(fr);var Cr={},Sr={},_r={},kr={};Object.defineProperty(kr,"__esModule",{value:!0}),kr.polyval=kr.ghash=void 0,kr._toGHASHKey=Pr;var xr=pe,Mr=fe,Ar=16,Ir=new Uint8Array(16),Rr=(0,Mr.u32)(Ir),Lr=function Lr(e){return (e>>>0&255)<<24|(e>>>8&255)<<16|(e>>>16&255)<<8|e>>>24&255|0;};function Pr(e){e.reverse();var t=1&e[15];var n=0;for(var _t45=0;_t45<e.length;_t45++){var _r20=e[_t45];e[_t45]=_r20>>>1|n,n=(1&_r20)<<7;}return e[0]^=225&-t,e;}var Or=/*#__PURE__*/function(){function Or(e,t){_classCallCheck(this,Or);this.blockLen=Ar,this.outputLen=Ar,this.s0=0,this.s1=0,this.s2=0,this.s3=0,this.finished=!1,e=(0,Mr.toBytes)(e),(0,xr.bytes)(e,16);var n=(0,Mr.createView)(e);var r=n.getUint32(0,!1),i=n.getUint32(4,!1),o=n.getUint32(8,!1),s=n.getUint32(12,!1);var a=[];for(var _e35=0;_e35<128;_e35++){var _s3$s2$s1$s;a.push({s0:Lr(r),s1:Lr(i),s2:Lr(o),s3:Lr(s)}),_s3$s2$s1$s={s3:(d=o)<<31|(u=s)>>>1,s2:(l=i)<<31|d>>>1,s1:(c=r)<<31|l>>>1,s0:c>>>1^225<<24&-(1&u)},r=_s3$s2$s1$s.s0,i=_s3$s2$s1$s.s1,o=_s3$s2$s1$s.s2,s=_s3$s2$s1$s.s3;}var c,l,d,u;var h=function(e){return e>65536?8:e>1024?4:2;}(t||1024);if(![1,2,4,8].includes(h))throw new Error("ghash: wrong window size=".concat(h,", should be 2, 4 or 8"));this.W=h;var f=128/h,p=this.windowSize=Math.pow(2,h),g=[];for(var _e36=0;_e36<f;_e36++)for(var _t46=0;_t46<p;_t46++){var _n28=0,_r21=0,_i23=0,_o11=0;for(var _s9=0;_s9<h;_s9++){if(!(_t46>>>h-_s9-1&1))continue;var _a5=a[h*_e36+_s9],_c5=_a5.s0,_l4=_a5.s1,_d5=_a5.s2,_u4=_a5.s3;_n28^=_c5,_r21^=_l4,_i23^=_d5,_o11^=_u4;}g.push({s0:_n28,s1:_r21,s2:_i23,s3:_o11});}this.t=g;}return _createClass(Or,[{key:"_updateBlock",value:function _updateBlock(e,t,n,r){e^=this.s0,t^=this.s1,n^=this.s2,r^=this.s3;var i=this.W,o=this.t,s=this.windowSize;var a=0,c=0,l=0,d=0;var u=(1<<i)-1;var h=0;for(var _i24=0,_arr=[e,t,n,r];_i24<_arr.length;_i24++){var _f5=_arr[_i24];for(var _e37=0;_e37<4;_e37++){var _t47=_f5>>>8*_e37&255;for(var _e38=8/i-1;_e38>=0;_e38--){var _n29=_t47>>>i*_e38&u,_o12=o[h*s+_n29],_r22=_o12.s0,_f6=_o12.s1,_p4=_o12.s2,_g3=_o12.s3;a^=_r22,c^=_f6,l^=_p4,d^=_g3,h+=1;}}}this.s0=a,this.s1=c,this.s2=l,this.s3=d;}},{key:"update",value:function update(e){e=(0,Mr.toBytes)(e),(0,xr.exists)(this);var t=(0,Mr.u32)(e),n=Math.floor(e.length/Ar),r=e.length%Ar;for(var _e39=0;_e39<n;_e39++)this._updateBlock(t[4*_e39+0],t[4*_e39+1],t[4*_e39+2],t[4*_e39+3]);return r&&(Ir.set(e.subarray(n*Ar)),this._updateBlock(Rr[0],Rr[1],Rr[2],Rr[3]),(0,Mr.clean)(Rr)),this;}},{key:"destroy",value:function destroy(){var e=this.t;var _iterator3=_createForOfIteratorHelper(e),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var _t48=_step3.value;_t48.s0=0,_t48.s1=0,_t48.s2=0,_t48.s3=0;}}catch(err){_iterator3.e(err);}finally{_iterator3.f();}}},{key:"digestInto",value:function digestInto(e){(0,xr.exists)(this),(0,xr.output)(e,this),this.finished=!0;var t=this.s0,n=this.s1,r=this.s2,i=this.s3,o=(0,Mr.u32)(e);return o[0]=t,o[1]=n,o[2]=r,o[3]=i,e;}},{key:"digest",value:function digest(){var e=new Uint8Array(Ar);return this.digestInto(e),this.destroy(),e;}}]);}();var Tr=/*#__PURE__*/function(_Or){function Tr(e,t){var _this9;_classCallCheck(this,Tr);e=(0,Mr.toBytes)(e);var n=Pr((0,Mr.copyBytes)(e));_this9=_callSuper(this,Tr,[n,t]),(0,Mr.clean)(n);return _this9;}_inherits(Tr,_Or);return _createClass(Tr,[{key:"update",value:function update(e){e=(0,Mr.toBytes)(e),(0,xr.exists)(this);var t=(0,Mr.u32)(e),n=e.length%Ar,r=Math.floor(e.length/Ar);for(var _e40=0;_e40<r;_e40++)this._updateBlock(Lr(t[4*_e40+3]),Lr(t[4*_e40+2]),Lr(t[4*_e40+1]),Lr(t[4*_e40+0]));return n&&(Ir.set(e.subarray(r*Ar)),this._updateBlock(Lr(Rr[3]),Lr(Rr[2]),Lr(Rr[1]),Lr(Rr[0])),(0,Mr.clean)(Rr)),this;}},{key:"digestInto",value:function digestInto(e){(0,xr.exists)(this),(0,xr.output)(e,this),this.finished=!0;var t=this.s0,n=this.s1,r=this.s2,i=this.s3,o=(0,Mr.u32)(e);return o[0]=t,o[1]=n,o[2]=r,o[3]=i,e.reverse();}}]);}(Or);function Nr(e){var t=function t(_t49,n){return e(n,_t49.length).update((0,Mr.toBytes)(_t49)).digest();},n=e(new Uint8Array(16),0);return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=function(t,n){return e(t,n);},t;}kr.ghash=Nr(function(e,t){return new Or(e,t);}),kr.polyval=Nr(function(e,t){return new Tr(e,t);}),Object.defineProperty(_r,"__esModule",{value:!0}),_r.unsafe=_r.aeskwp=_r.aeskw=_r.siv=_r.gcm=_r.cfb=_r.cbc=_r.ecb=_r.ctr=void 0,_r.expandKeyLE=Qr,_r.expandKeyDecLE=ei;var $r=pe,Dr=kr,Br=fe,Kr=16,jr=new Uint8Array(Kr),Ur=283;function Hr(e){return e<<1^Ur&-(e>>7);}function Fr(e,t){var n=0;for(;t>0;t>>=1)n^=e&-(1&t),e=Hr(e);return n;}var zr=function(){var e=new Uint8Array(256);for(var _t50=0,_n30=1;_t50<256;_t50++,_n30^=Hr(_n30))e[_t50]=_n30;var t=new Uint8Array(256);t[0]=99;for(var _n31=0;_n31<255;_n31++){var _r23=e[255-_n31];_r23|=_r23<<8,t[e[_n31]]=255&(_r23^_r23>>4^_r23>>5^_r23>>6^_r23>>7^99);}return (0,Br.clean)(e),t;}(),qr=zr.map(function(e,t){return zr.indexOf(t);}),Vr=function Vr(e){return e<<24|e>>>8;},Wr=function Wr(e){return e<<8|e>>>24;},Gr=function Gr(e){return e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255;};function Zr(e,t){if(256!==e.length)throw new Error("Wrong sbox length");var n=new Uint32Array(256).map(function(n,r){return t(e[r]);}),r=n.map(Wr),i=r.map(Wr),o=i.map(Wr),s=new Uint32Array(65536),a=new Uint32Array(65536),c=new Uint16Array(65536);for(var _t51=0;_t51<256;_t51++)for(var _l5=0;_l5<256;_l5++){var _d6=256*_t51+_l5;s[_d6]=n[_t51]^r[_l5],a[_d6]=i[_t51]^o[_l5],c[_d6]=e[_t51]<<8|e[_l5];}return {sbox:e,sbox2:c,T0:n,T1:r,T2:i,T3:o,T01:s,T23:a};}var Yr=Zr(zr,function(e){return Fr(e,3)<<24|e<<16|e<<8|Fr(e,2);}),Jr=Zr(qr,function(e){return Fr(e,11)<<24|Fr(e,13)<<16|Fr(e,9)<<8|Fr(e,14);}),Xr=function(){var e=new Uint8Array(16);for(var _t52=0,_n32=1;_t52<16;_t52++,_n32=Hr(_n32))e[_t52]=_n32;return e;}();function Qr(e){(0,$r.bytes)(e);var t=e.length;if(![16,24,32].includes(t))throw new Error("aes: wrong key size: should be 16, 24 or 32, got: ".concat(t));var n=Yr.sbox2,r=[];(0,Br.isAligned32)(e)||r.push(e=(0,Br.copyBytes)(e));var i=(0,Br.u32)(e),o=i.length,s=function s(e){return ni(n,e,e,e,e);},a=new Uint32Array(t+28);a.set(i);for(var _e41=o;_e41<a.length;_e41++){var _t53=a[_e41-1];_e41%o==0?_t53=s(Vr(_t53))^Xr[_e41/o-1]:o>6&&_e41%o==4&&(_t53=s(_t53)),a[_e41]=a[_e41-o]^_t53;}return (0,Br.clean).apply(void 0,r),a;}function ei(e){var t=Qr(e),n=t.slice(),r=t.length,i=Yr.sbox2,o=Jr.T0,s=Jr.T1,a=Jr.T2,c=Jr.T3;for(var _e42=0;_e42<r;_e42+=4)for(var _i25=0;_i25<4;_i25++)n[_e42+_i25]=t[r-_e42-4+_i25];(0,Br.clean)(t);for(var _e43=4;_e43<r-4;_e43++){var _t54=n[_e43],_r24=ni(i,_t54,_t54,_t54,_t54);n[_e43]=o[255&_r24]^s[_r24>>>8&255]^a[_r24>>>16&255]^c[_r24>>>24];}return n;}function ti(e,t,n,r,i,o){return e[n<<8&65280|r>>>8&255]^t[i>>>8&65280|o>>>24&255];}function ni(e,t,n,r,i){return e[255&t|65280&n]|e[r>>>16&255|i>>>16&65280]<<16;}function ri(e,t,n,r,i){var o=Yr.sbox2,s=Yr.T01,a=Yr.T23;var c=0;t^=e[c++],n^=e[c++],r^=e[c++],i^=e[c++];var l=e.length/4-2;for(var _o13=0;_o13<l;_o13++){var _o14=e[c++]^ti(s,a,t,n,r,i),_l6=e[c++]^ti(s,a,n,r,i,t),_d7=e[c++]^ti(s,a,r,i,t,n),_u5=e[c++]^ti(s,a,i,t,n,r);t=_o14,n=_l6,r=_d7,i=_u5;}return {s0:e[c++]^ni(o,t,n,r,i),s1:e[c++]^ni(o,n,r,i,t),s2:e[c++]^ni(o,r,i,t,n),s3:e[c++]^ni(o,i,t,n,r)};}function ii(e,t,n,r,i){var o=Jr.sbox2,s=Jr.T01,a=Jr.T23;var c=0;t^=e[c++],n^=e[c++],r^=e[c++],i^=e[c++];var l=e.length/4-2;for(var _o15=0;_o15<l;_o15++){var _o16=e[c++]^ti(s,a,t,i,r,n),_l7=e[c++]^ti(s,a,n,t,i,r),_d8=e[c++]^ti(s,a,r,n,t,i),_u6=e[c++]^ti(s,a,i,r,n,t);t=_o16,n=_l7,r=_d8,i=_u6;}return {s0:e[c++]^ni(o,t,i,r,n),s1:e[c++]^ni(o,n,t,i,r),s2:e[c++]^ni(o,r,n,t,i),s3:e[c++]^ni(o,i,r,n,t)};}function oi(e,t){if(void 0===t)return new Uint8Array(e);if((0,$r.bytes)(t),t.length<e)throw new Error("aes: wrong destination length, expected at least ".concat(e,", got: ").concat(t.length));if(!(0,Br.isAligned32)(t))throw new Error("unaligned dst");return t;}function si(e,t,n,r){(0,$r.bytes)(t,Kr),(0,$r.bytes)(n);var i=n.length;r=oi(i,r);var o=t,s=(0,Br.u32)(o);var _ri=ri(e,s[0],s[1],s[2],s[3]),a=_ri.s0,c=_ri.s1,l=_ri.s2,d=_ri.s3;var u=(0,Br.u32)(n),h=(0,Br.u32)(r);for(var _t55=0;_t55+4<=u.length;_t55+=4){h[_t55+0]=u[_t55+0]^a,h[_t55+1]=u[_t55+1]^c,h[_t55+2]=u[_t55+2]^l,h[_t55+3]=u[_t55+3]^d;var _n33=1;for(var _e44=o.length-1;_e44>=0;_e44--)_n33=_n33+(255&o[_e44])|0,o[_e44]=255&_n33,_n33>>>=8;var _ri2=ri(e,s[0],s[1],s[2],s[3]);a=_ri2.s0;c=_ri2.s1;l=_ri2.s2;d=_ri2.s3;}var f=Kr*Math.floor(u.length/4);if(f<i){var _e45=new Uint32Array([a,c,l,d]),_t56=(0,Br.u8)(_e45);for(var _e46=f,_o17=0;_e46<i;_e46++,_o17++)r[_e46]=n[_e46]^_t56[_o17];(0,Br.clean)(_e45);}return r;}function ai(e,t,n,r,i){(0,$r.bytes)(n,Kr),(0,$r.bytes)(r),i=oi(r.length,i);var o=n,s=(0,Br.u32)(o),a=(0,Br.createView)(o),c=(0,Br.u32)(r),l=(0,Br.u32)(i),d=t?0:12,u=r.length;var h=a.getUint32(d,t),_ri3=ri(e,s[0],s[1],s[2],s[3]),f=_ri3.s0,p=_ri3.s1,g=_ri3.s2,m=_ri3.s3;for(var _n34=0;_n34+4<=c.length;_n34+=4){var _ri4;l[_n34+0]=c[_n34+0]^f,l[_n34+1]=c[_n34+1]^p,l[_n34+2]=c[_n34+2]^g,l[_n34+3]=c[_n34+3]^m,h=h+1>>>0,a.setUint32(d,h,t),_ri4=ri(e,s[0],s[1],s[2],s[3]),f=_ri4.s0,p=_ri4.s1,g=_ri4.s2,m=_ri4.s3;}var y=Kr*Math.floor(c.length/4);if(y<u){var _e47=new Uint32Array([f,p,g,m]),_t57=(0,Br.u8)(_e47);for(var _e48=y,_n35=0;_e48<u;_e48++,_n35++)i[_e48]=r[_e48]^_t57[_n35];(0,Br.clean)(_e47);}return i;}function ci(e){if((0,$r.bytes)(e),e.length%Kr!=0)throw new Error("aes/(cbc-ecb).decrypt ciphertext should consist of blocks with size 16");}function li(e,t,n){(0,$r.bytes)(e);var r=e.length;var i=r%Kr;if(!t&&0!==i)throw new Error("aec/(cbc-ecb): unpadded plaintext with disabled padding");(0,Br.isAligned32)(e)||(e=(0,Br.copyBytes)(e));var o=(0,Br.u32)(e);if(t){var _e49=Kr-i;_e49||(_e49=Kr),r+=_e49;}var s=oi(r,n);return {b:o,o:(0,Br.u32)(s),out:s};}function di(e,t){if(!t)return e;var n=e.length;if(!n)throw new Error("aes/pcks5: empty ciphertext not allowed");var r=e[n-1];if(r<=0||r>16)throw new Error("aes/pcks5: wrong padding");var i=e.subarray(0,-r);for(var _t58=0;_t58<r;_t58++)if(e[n-_t58-1]!==r)throw new Error("aes/pcks5: wrong padding");return i;}function ui(e){var t=new Uint8Array(16),n=(0,Br.u32)(t);t.set(e);var r=Kr-e.length;for(var _e50=Kr-r;_e50<Kr;_e50++)t[_e50]=r;return n;}function hi(e,t,n,r,i){var o=null==i?0:i.length,s=e.create(n,r.length+o);i&&s.update(i),s.update(r);var a=new Uint8Array(16),c=(0,Br.createView)(a);i&&(0,Br.setBigUint64)(c,0,BigInt(8*o),t),(0,Br.setBigUint64)(c,8,BigInt(8*r.length),t),s.update(a);var l=s.digest();return (0,Br.clean)(a),l;}_r.ctr=(0,Br.wrapCipher)({blockSize:16,nonceLength:16},function(e,t){function n(n,r){if((0,$r.bytes)(n),void 0!==r&&((0,$r.bytes)(r),!(0,Br.isAligned32)(r)))throw new Error("unaligned destination");var i=Qr(e),o=(0,Br.copyBytes)(t),s=[i,o];(0,Br.isAligned32)(n)||s.push(n=(0,Br.copyBytes)(n));var a=si(i,o,n,r);return (0,Br.clean).apply(void 0,s),a;}return (0,$r.bytes)(e),(0,$r.bytes)(t,Kr),{encrypt:function encrypt(e,t){return n(e,t);},decrypt:function decrypt(e,t){return n(e,t);}};}),_r.ecb=(0,Br.wrapCipher)({blockSize:16},function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};(0,$r.bytes)(e);var n=!t.disablePadding;return {encrypt:function encrypt(t,r){var _li=li(t,n,r),i=_li.b,o=_li.o,s=_li.out,a=Qr(e);var c=0;for(;c+4<=i.length;){var _ri5=ri(a,i[c+0],i[c+1],i[c+2],i[c+3]),_e51=_ri5.s0,_t59=_ri5.s1,_n36=_ri5.s2,_r25=_ri5.s3;o[c++]=_e51,o[c++]=_t59,o[c++]=_n36,o[c++]=_r25;}if(n){var _e52=ui(t.subarray(4*c)),_ri6=ri(a,_e52[0],_e52[1],_e52[2],_e52[3]),_n37=_ri6.s0,_r26=_ri6.s1,_i26=_ri6.s2,_s10=_ri6.s3;o[c++]=_n37,o[c++]=_r26,o[c++]=_i26,o[c++]=_s10;}return (0,Br.clean)(a),s;},decrypt:function decrypt(t,r){ci(t);var i=ei(e),o=oi(t.length,r),s=[i];(0,Br.isAligned32)(t)||s.push(t=(0,Br.copyBytes)(t));var a=(0,Br.u32)(t),c=(0,Br.u32)(o);for(var _e53=0;_e53+4<=a.length;){var _ii=ii(i,a[_e53+0],a[_e53+1],a[_e53+2],a[_e53+3]),_t60=_ii.s0,_n38=_ii.s1,_r27=_ii.s2,_o18=_ii.s3;c[_e53++]=_t60,c[_e53++]=_n38,c[_e53++]=_r27,c[_e53++]=_o18;}return (0,Br.clean).apply(void 0,s),di(o,n);}};}),_r.cbc=(0,Br.wrapCipher)({blockSize:16,nonceLength:16},function(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};(0,$r.bytes)(e),(0,$r.bytes)(t,16);var r=!n.disablePadding;return {encrypt:function encrypt(n,i){var o=Qr(e),_li2=li(n,r,i),s=_li2.b,a=_li2.o,c=_li2.out;var l=t;var d=[o];(0,Br.isAligned32)(l)||d.push(l=(0,Br.copyBytes)(l));var u=(0,Br.u32)(l);var h=u[0],f=u[1],p=u[2],g=u[3],m=0;for(;m+4<=s.length;){var _ri7;h^=s[m+0],f^=s[m+1],p^=s[m+2],g^=s[m+3],_ri7=ri(o,h,f,p,g),h=_ri7.s0,f=_ri7.s1,p=_ri7.s2,g=_ri7.s3,a[m++]=h,a[m++]=f,a[m++]=p,a[m++]=g;}if(r){var _ri8;var _e54=ui(n.subarray(4*m));h^=_e54[0],f^=_e54[1],p^=_e54[2],g^=_e54[3],_ri8=ri(o,h,f,p,g),h=_ri8.s0,f=_ri8.s1,p=_ri8.s2,g=_ri8.s3,a[m++]=h,a[m++]=f,a[m++]=p,a[m++]=g;}return (0,Br.clean).apply(void 0,d),c;},decrypt:function decrypt(n,i){ci(n);var o=ei(e);var s=t;var a=[o];(0,Br.isAligned32)(s)||a.push(s=(0,Br.copyBytes)(s));var c=(0,Br.u32)(s),l=oi(n.length,i);(0,Br.isAligned32)(n)||a.push(n=(0,Br.copyBytes)(n));var d=(0,Br.u32)(n),u=(0,Br.u32)(l);var h=c[0],f=c[1],p=c[2],g=c[3];for(var _e55=0;_e55+4<=d.length;){var _t61=h,_n39=f,_r28=p,_i27=g;h=d[_e55+0],f=d[_e55+1],p=d[_e55+2],g=d[_e55+3];var _ii2=ii(o,h,f,p,g),_s11=_ii2.s0,_a6=_ii2.s1,_c6=_ii2.s2,_l8=_ii2.s3;u[_e55++]=_s11^_t61,u[_e55++]=_a6^_n39,u[_e55++]=_c6^_r28,u[_e55++]=_l8^_i27;}return (0,Br.clean).apply(void 0,a),di(l,r);}};}),_r.cfb=(0,Br.wrapCipher)({blockSize:16,nonceLength:16},function(e,t){function n(n,r,i){(0,$r.bytes)(n);var o=n.length;i=oi(o,i);var s=Qr(e);var a=t;var c=[s];(0,Br.isAligned32)(a)||c.push(a=(0,Br.copyBytes)(a)),(0,Br.isAligned32)(n)||c.push(n=(0,Br.copyBytes)(n));var l=(0,Br.u32)(n),d=(0,Br.u32)(i),u=r?d:l,h=(0,Br.u32)(a);var f=h[0],p=h[1],g=h[2],m=h[3];for(var _e56=0;_e56+4<=l.length;){var _ri9=ri(s,f,p,g,m),_t62=_ri9.s0,_n40=_ri9.s1,_r29=_ri9.s2,_i28=_ri9.s3;d[_e56+0]=l[_e56+0]^_t62,d[_e56+1]=l[_e56+1]^_n40,d[_e56+2]=l[_e56+2]^_r29,d[_e56+3]=l[_e56+3]^_i28,f=u[_e56++],p=u[_e56++],g=u[_e56++],m=u[_e56++];}var y=Kr*Math.floor(l.length/4);if(y<o){var _ri10=ri(s,f,p,g,m);f=_ri10.s0;p=_ri10.s1;g=_ri10.s2;m=_ri10.s3;var _e57=(0,Br.u8)(new Uint32Array([f,p,g,m]));for(var _t63=y,_r30=0;_t63<o;_t63++,_r30++)i[_t63]=n[_t63]^_e57[_r30];(0,Br.clean)(_e57);}return (0,Br.clean).apply(void 0,c),i;}return (0,$r.bytes)(e),(0,$r.bytes)(t,16),{encrypt:function encrypt(e,t){return n(e,!0,t);},decrypt:function decrypt(e,t){return n(e,!1,t);}};}),_r.gcm=(0,Br.wrapCipher)({blockSize:16,nonceLength:12,tagLength:16},function(e,t,n){if((0,$r.bytes)(e),(0,$r.bytes)(t),void 0!==n&&(0,$r.bytes)(n),t.length<8)throw new Error("aes/gcm: invalid nonce length");var r=16;function i(e,t,r){var i=hi(Dr.ghash,!1,e,r,n);for(var _e58=0;_e58<t.length;_e58++)i[_e58]^=t[_e58];return i;}function o(){var n=Qr(e),r=jr.slice(),i=jr.slice();if(ai(n,!1,i,i,r),12===t.length)i.set(t);else {var _e59=jr.slice(),_n41=(0,Br.createView)(_e59);(0,Br.setBigUint64)(_n41,8,BigInt(8*t.length),!1);var _o19=Dr.ghash.create(r).update(t).update(_e59);_o19.digestInto(i),_o19.destroy();}return {xk:n,authKey:r,counter:i,tagMask:ai(n,!1,i,jr)};}return {encrypt:function encrypt(e){(0,$r.bytes)(e);var _o20=o(),t=_o20.xk,n=_o20.authKey,s=_o20.counter,a=_o20.tagMask,c=new Uint8Array(e.length+r),l=[t,n,s,a];(0,Br.isAligned32)(e)||l.push(e=(0,Br.copyBytes)(e)),ai(t,!1,s,e,c);var d=i(n,a,c.subarray(0,c.length-r));return l.push(d),c.set(d,e.length),(0,Br.clean).apply(void 0,l),c;},decrypt:function decrypt(e){if((0,$r.bytes)(e),e.length<r)throw new Error("aes/gcm: ciphertext less than tagLen (16)");var _o21=o(),t=_o21.xk,n=_o21.authKey,s=_o21.counter,a=_o21.tagMask,c=[t,n,a,s];(0,Br.isAligned32)(e)||c.push(e=(0,Br.copyBytes)(e));var l=e.subarray(0,-16),d=e.subarray(-16),u=i(n,a,l);if(c.push(u),!(0,Br.equalBytes)(u,d))throw new Error("aes/gcm: invalid ghash tag");var h=ai(t,!1,s,l);return (0,Br.clean).apply(void 0,c),h;}};});var fi=function fi(e,t,n){return function(r){if(!Number.isSafeInteger(r)||t>r||r>n)throw new Error("".concat(e,": invalid value=").concat(r,", must be [").concat(t,"..").concat(n,"]"));};};function pi(e){return null!=e&&"object"==_typeof(e)&&(e instanceof Uint32Array||"Uint32Array"===e.constructor.name);}function gi(e,t){if((0,$r.bytes)(t,16),!pi(e))throw new Error("_encryptBlock accepts result of expandKeyLE");var n=(0,Br.u32)(t);var _ri11=ri(e,n[0],n[1],n[2],n[3]),r=_ri11.s0,i=_ri11.s1,o=_ri11.s2,s=_ri11.s3;return n[0]=r,n[1]=i,n[2]=o,n[3]=s,t;}function mi(e,t){if((0,$r.bytes)(t,16),!pi(e))throw new Error("_decryptBlock accepts result of expandKeyLE");var n=(0,Br.u32)(t);var _ii3=ii(e,n[0],n[1],n[2],n[3]),r=_ii3.s0,i=_ii3.s1,o=_ii3.s2,s=_ii3.s3;return n[0]=r,n[1]=i,n[2]=o,n[3]=s,t;}_r.siv=(0,Br.wrapCipher)({blockSize:16,nonceLength:12,tagLength:16},function(e,t,n){var r=fi("AAD",0,Math.pow(2,36)),i=fi("plaintext",0,Math.pow(2,36)),o=fi("nonce",12,12),s=fi("ciphertext",16,Math.pow(2,36)+16);function a(){var n=Qr(e),r=new Uint8Array(e.length),i=new Uint8Array(16),o=[n,r];var s=t;(0,Br.isAligned32)(s)||o.push(s=(0,Br.copyBytes)(s));var a=(0,Br.u32)(s);var c=0,l=a[0],d=a[1],u=a[2],h=0;var _iterator4=_createForOfIteratorHelper([i,r].map(Br.u32)),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var _e60=_step4.value;var _t64=(0,Br.u32)(_e60);for(var _e61=0;_e61<_t64.length;_e61+=2){var _ri12=ri(n,c,l,d,u),_r31=_ri12.s0,_i29=_ri12.s1;_t64[_e61+0]=_r31,_t64[_e61+1]=_i29,c=++h;}}}catch(err){_iterator4.e(err);}finally{_iterator4.f();}var f={authKey:i,encKey:Qr(r)};return (0,Br.clean).apply(void 0,o),f;}function c(e,r,i){var _ri13;var o=hi(Dr.polyval,!0,r,i,n);for(var _e62=0;_e62<12;_e62++)o[_e62]^=t[_e62];o[15]&=127;var s=(0,Br.u32)(o);var a=s[0],c=s[1],l=s[2],d=s[3];return _ri13=ri(e,a,c,l,d),a=_ri13.s0,c=_ri13.s1,l=_ri13.s2,d=_ri13.s3,s[0]=a,s[1]=c,s[2]=l,s[3]=d,o;}function l(e,t,n){var r=(0,Br.copyBytes)(t);r[15]|=128;var i=ai(e,!0,r,n);return (0,Br.clean)(r),i;}return (0,$r.bytes)(e,16,24,32),(0,$r.bytes)(t),o(t.length),void 0!==n&&((0,$r.bytes)(n),r(n.length)),{encrypt:function encrypt(e){(0,$r.bytes)(e),i(e.length);var _a7=a(),t=_a7.encKey,n=_a7.authKey,r=c(t,n,e),o=[t,n,r];(0,Br.isAligned32)(e)||o.push(e=(0,Br.copyBytes)(e));var s=new Uint8Array(e.length+16);return s.set(r,e.length),s.set(l(t,r,e)),(0,Br.clean).apply(void 0,o),s;},decrypt:function decrypt(e){(0,$r.bytes)(e),s(e.length);var t=e.subarray(-16),_a8=a(),n=_a8.encKey,r=_a8.authKey,i=[n,r];(0,Br.isAligned32)(e)||i.push(e=(0,Br.copyBytes)(e));var o=l(n,t,e.subarray(0,-16)),d=c(n,r,o);if(i.push(d),!(0,Br.equalBytes)(t,d))throw (0,Br.clean).apply(void 0,i),new Error("invalid polyval tag");return (0,Br.clean).apply(void 0,i),o;}};});var yi={encrypt:function encrypt(e,t){if(t.length>=Math.pow(2,32))throw new Error("plaintext should be less than 4gb");var n=Qr(e);if(16===t.length)gi(n,t);else {var _e63=(0,Br.u32)(t);var _r32=_e63[0],_i30=_e63[1];for(var _t65=0,_o22=1;_t65<6;_t65++)for(var _t66=2;_t66<_e63.length;_t66+=2,_o22++){var _ri14=ri(n,_r32,_i30,_e63[_t66],_e63[_t66+1]),_s12=_ri14.s0,_a9=_ri14.s1,_c7=_ri14.s2,_l9=_ri14.s3;_r32=_s12,_i30=_a9^Gr(_o22),_e63[_t66]=_c7,_e63[_t66+1]=_l9;}_e63[0]=_r32,_e63[1]=_i30;}n.fill(0);},decrypt:function decrypt(e,t){if(t.length-8>=Math.pow(2,32))throw new Error("ciphertext should be less than 4gb");var n=ei(e),r=t.length/8-1;if(1===r)mi(n,t);else {var _e64=(0,Br.u32)(t);var _i31=_e64[0],_o23=_e64[1];for(var _t67=0,_s13=6*r;_t67<6;_t67++)for(var _t68=2*r;_t68>=1;_t68-=2,_s13--){_o23^=Gr(_s13);var _ii4=ii(n,_i31,_o23,_e64[_t68],_e64[_t68+1]),_r33=_ii4.s0,_a10=_ii4.s1,_c8=_ii4.s2,_l10=_ii4.s3;_i31=_r33,_o23=_a10,_e64[_t68]=_c8,_e64[_t68+1]=_l10;}_e64[0]=_i31,_e64[1]=_o23;}n.fill(0);}},vi=new Uint8Array(8).fill(166);_r.aeskw=(0,Br.wrapCipher)({blockSize:8},function(e){return {encrypt:function encrypt(t){if((0,$r.bytes)(t),!t.length||t.length%8!=0)throw new Error("invalid plaintext length");if(8===t.length)throw new Error("8-byte keys not allowed in AESKW, use AESKWP instead");var n=(0,Br.concatBytes)(vi,t);return yi.encrypt(e,n),n;},decrypt:function decrypt(t){if((0,$r.bytes)(t),t.length%8!=0||t.length<24)throw new Error("invalid ciphertext length");var n=(0,Br.copyBytes)(t);if(yi.decrypt(e,n),!(0,Br.equalBytes)(n.subarray(0,8),vi))throw new Error("integrity check failed");return n.subarray(0,8).fill(0),n.subarray(8);}};});var bi=2790873510;_r.aeskwp=(0,Br.wrapCipher)({blockSize:8},function(e){return {encrypt:function encrypt(t){if((0,$r.bytes)(t),!t.length)throw new Error("invalid plaintext length");var n=8*Math.ceil(t.length/8),r=new Uint8Array(8+n);r.set(t,8);var i=(0,Br.u32)(r);return i[0]=bi,i[1]=Gr(t.length),yi.encrypt(e,r),r;},decrypt:function decrypt(t){if((0,$r.bytes)(t),t.length<16)throw new Error("invalid ciphertext length");var n=(0,Br.copyBytes)(t),r=(0,Br.u32)(n);yi.decrypt(e,n);var i=Gr(r[1])>>>0,o=8*Math.ceil(i/8);if(r[0]!==bi||n.length-8!==o)throw new Error("integrity check failed");for(var _e65=i;_e65<o;_e65++)if(0!==n[8+_e65])throw new Error("integrity check failed");return n.subarray(0,8).fill(0),n.subarray(8,8+i);}};}),_r.unsafe={expandKeyLE:Qr,expandKeyDecLE:ei,encrypt:ri,decrypt:ii,encryptBlock:gi,decryptBlock:mi,ctrCounter:si,ctr32:ai},Object.defineProperty(Sr,"__esModule",{value:!0}),Sr.aes256cbc=Sr.aes256gcm=void 0;var wi=_r;Sr.aes256gcm=function(e,t,n){return (0,wi.gcm)(e,t,n);};Sr.aes256cbc=function(e,t,n){return (0,wi.cbc)(e,t);};var Ei={},Ci={},Si={};Object.defineProperty(Si,"__esModule",{value:!0}),Si.sigma=void 0,Si.rotl=function(e,t){return e<<t|e>>>32-t;},Si.createCipher=function(e,t){var _ref11=(0,ki.checkOpts)({allowShortKeys:!1,counterLength:8,counterRight:!1,rounds:20},t),n=_ref11.allowShortKeys,r=_ref11.extendNonceFn,i=_ref11.counterLength,o=_ref11.counterRight,s=_ref11.rounds;if("function"!=typeof e)throw new Error("core must be a function");return (0,_i.number)(i),(0,_i.number)(s),(0,_i.bool)(o),(0,_i.bool)(n),function(t,a,c,l){var d=arguments.length>4&&arguments[4]!==undefined?arguments[4]:0;(0,_i.bytes)(t),(0,_i.bytes)(a),(0,_i.bytes)(c);var u=c.length;if(void 0===l&&(l=new Uint8Array(u)),(0,_i.bytes)(l),(0,_i.number)(d),d<0||d>=Ti)throw new Error("arx: counter overflow");if(l.length<u)throw new Error("arx: output (".concat(l.length,") is shorter than data (").concat(u,")"));var h=[];var f,p,g=t.length;if(32===g)h.push(f=(0,ki.copyBytes)(t)),p=Ri;else {if(16!==g||!n)throw new Error("arx: invalid 32-byte key, got length=".concat(g));f=new Uint8Array(32),f.set(t),f.set(t,16),p=Ii,h.push(f);}Li(a)||h.push(a=(0,ki.copyBytes)(a));var m=(0,ki.u32)(f);if(r){if(24!==a.length)throw new Error("arx: extended nonce must be 24 bytes");r(p,m,(0,ki.u32)(a.subarray(0,16)),m),a=a.subarray(16);}var y=16-i;if(y!==a.length)throw new Error("arx: nonce must be ".concat(y," or 16 bytes"));if(12!==y){var _e66=new Uint8Array(12);_e66.set(a,o?0:12-a.length),a=_e66,h.push(a);}var v=(0,ki.u32)(a);return function(e,t,n,r,i,o,s,a){var c=i.length,l=new Uint8Array(Pi),d=(0,ki.u32)(l),u=Li(i)&&Li(o),h=u?(0,ki.u32)(i):Ni,f=u?(0,ki.u32)(o):Ni;for(var _p5=0;_p5<c;s++){if(e(t,n,r,d,s,a),s>=Ti)throw new Error("arx: counter overflow");var _g4=Math.min(Pi,c-_p5);if(u&&_g4===Pi){var _e67=_p5/4;if(_p5%4!=0)throw new Error("arx: invalid block position");for(var _t69,_n42=0;_n42<Oi;_n42++)_t69=_e67+_n42,f[_t69]=h[_t69]^d[_n42];_p5+=Pi;}else {for(var _e68,_t70=0;_t70<_g4;_t70++)_e68=_p5+_t70,o[_e68]=i[_e68]^l[_t70];_p5+=_g4;}}}(e,p,m,v,c,l,d,s),(0,ki.clean).apply(void 0,h),l;};};var _i=pe,ki=fe,xi=function xi(e){return Uint8Array.from(e.split("").map(function(e){return e.charCodeAt(0);}));},Mi=xi("expand 16-byte k"),Ai=xi("expand 32-byte k"),Ii=(0,ki.u32)(Mi),Ri=(0,ki.u32)(Ai);function Li(e){return e.byteOffset%4==0;}Si.sigma=Ri.slice();var Pi=64,Oi=16,Ti=Math.pow(2,32)-1,Ni=new Uint32Array();var $i={};Object.defineProperty($i,"__esModule",{value:!0}),$i.poly1305=void 0,$i.wrapConstructorWithKey=Ui;var Di=pe,Bi=fe,Ki=function Ki(e,t){return 255&e[t++]|(255&e[t++])<<8;};var ji=/*#__PURE__*/function(){function ji(e){_classCallCheck(this,ji);this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,e=(0,Bi.toBytes)(e),(0,Di.bytes)(e,32);var t=Ki(e,0),n=Ki(e,2),r=Ki(e,4),i=Ki(e,6),o=Ki(e,8),s=Ki(e,10),a=Ki(e,12),c=Ki(e,14);this.r[0]=8191&t,this.r[1]=8191&(t>>>13|n<<3),this.r[2]=7939&(n>>>10|r<<6),this.r[3]=8191&(r>>>7|i<<9),this.r[4]=255&(i>>>4|o<<12),this.r[5]=o>>>1&8190,this.r[6]=8191&(o>>>14|s<<2),this.r[7]=8065&(s>>>11|a<<5),this.r[8]=8191&(a>>>8|c<<8),this.r[9]=c>>>5&127;for(var _t71=0;_t71<8;_t71++)this.pad[_t71]=Ki(e,16+2*_t71);}return _createClass(ji,[{key:"process",value:function process(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;var r=n?0:2048,i=this.h,o=this.r,s=o[0],a=o[1],c=o[2],l=o[3],d=o[4],u=o[5],h=o[6],f=o[7],p=o[8],g=o[9],m=Ki(e,t+0),y=Ki(e,t+2),v=Ki(e,t+4),b=Ki(e,t+6),w=Ki(e,t+8),E=Ki(e,t+10),C=Ki(e,t+12),S=Ki(e,t+14);var _=i[0]+(8191&m),k=i[1]+(8191&(m>>>13|y<<3)),x=i[2]+(8191&(y>>>10|v<<6)),M=i[3]+(8191&(v>>>7|b<<9)),A=i[4]+(8191&(b>>>4|w<<12)),I=i[5]+(w>>>1&8191),R=i[6]+(8191&(w>>>14|E<<2)),L=i[7]+(8191&(E>>>11|C<<5)),P=i[8]+(8191&(C>>>8|S<<8)),O=i[9]+(S>>>5|r),T=0,N=T+_*s+k*(5*g)+x*(5*p)+M*(5*f)+A*(5*h);T=N>>>13,N&=8191,N+=I*(5*u)+R*(5*d)+L*(5*l)+P*(5*c)+O*(5*a),T+=N>>>13,N&=8191;var $=T+_*a+k*s+x*(5*g)+M*(5*p)+A*(5*f);T=$>>>13,$&=8191,$+=I*(5*h)+R*(5*u)+L*(5*d)+P*(5*l)+O*(5*c),T+=$>>>13,$&=8191;var D=T+_*c+k*a+x*s+M*(5*g)+A*(5*p);T=D>>>13,D&=8191,D+=I*(5*f)+R*(5*h)+L*(5*u)+P*(5*d)+O*(5*l),T+=D>>>13,D&=8191;var B=T+_*l+k*c+x*a+M*s+A*(5*g);T=B>>>13,B&=8191,B+=I*(5*p)+R*(5*f)+L*(5*h)+P*(5*u)+O*(5*d),T+=B>>>13,B&=8191;var K=T+_*d+k*l+x*c+M*a+A*s;T=K>>>13,K&=8191,K+=I*(5*g)+R*(5*p)+L*(5*f)+P*(5*h)+O*(5*u),T+=K>>>13,K&=8191;var j=T+_*u+k*d+x*l+M*c+A*a;T=j>>>13,j&=8191,j+=I*s+R*(5*g)+L*(5*p)+P*(5*f)+O*(5*h),T+=j>>>13,j&=8191;var U=T+_*h+k*u+x*d+M*l+A*c;T=U>>>13,U&=8191,U+=I*a+R*s+L*(5*g)+P*(5*p)+O*(5*f),T+=U>>>13,U&=8191;var H=T+_*f+k*h+x*u+M*d+A*l;T=H>>>13,H&=8191,H+=I*c+R*a+L*s+P*(5*g)+O*(5*p),T+=H>>>13,H&=8191;var F=T+_*p+k*f+x*h+M*u+A*d;T=F>>>13,F&=8191,F+=I*l+R*c+L*a+P*s+O*(5*g),T+=F>>>13,F&=8191;var z=T+_*g+k*p+x*f+M*h+A*u;T=z>>>13,z&=8191,z+=I*d+R*l+L*c+P*a+O*s,T+=z>>>13,z&=8191,T=(T<<2)+T|0,T=T+N|0,N=8191&T,T>>>=13,$+=T,i[0]=N,i[1]=$,i[2]=D,i[3]=B,i[4]=K,i[5]=j,i[6]=U,i[7]=H,i[8]=F,i[9]=z;}},{key:"finalize",value:function finalize(){var e=this.h,t=this.pad,n=new Uint16Array(10);var r=e[1]>>>13;e[1]&=8191;for(var _t72=2;_t72<10;_t72++)e[_t72]+=r,r=e[_t72]>>>13,e[_t72]&=8191;e[0]+=5*r,r=e[0]>>>13,e[0]&=8191,e[1]+=r,r=e[1]>>>13,e[1]&=8191,e[2]+=r,n[0]=e[0]+5,r=n[0]>>>13,n[0]&=8191;for(var _t73=1;_t73<10;_t73++)n[_t73]=e[_t73]+r,r=n[_t73]>>>13,n[_t73]&=8191;n[9]-=8192;var i=(1^r)-1;for(var _e69=0;_e69<10;_e69++)n[_e69]&=i;i=~i;for(var _t74=0;_t74<10;_t74++)e[_t74]=e[_t74]&i|n[_t74];e[0]=65535&(e[0]|e[1]<<13),e[1]=65535&(e[1]>>>3|e[2]<<10),e[2]=65535&(e[2]>>>6|e[3]<<7),e[3]=65535&(e[3]>>>9|e[4]<<4),e[4]=65535&(e[4]>>>12|e[5]<<1|e[6]<<14),e[5]=65535&(e[6]>>>2|e[7]<<11),e[6]=65535&(e[7]>>>5|e[8]<<8),e[7]=65535&(e[8]>>>8|e[9]<<5);var o=e[0]+t[0];e[0]=65535&o;for(var _n43=1;_n43<8;_n43++)o=(e[_n43]+t[_n43]|0)+(o>>>16)|0,e[_n43]=65535&o;(0,Bi.clean)(n);}},{key:"update",value:function update(e){(0,Di.exists)(this);var t=this.buffer,n=this.blockLen,r=(e=(0,Bi.toBytes)(e)).length;for(var _i32=0;_i32<r;){var _o24=Math.min(n-this.pos,r-_i32);if(_o24!==n)t.set(e.subarray(_i32,_i32+_o24),this.pos),this.pos+=_o24,_i32+=_o24,this.pos===n&&(this.process(t,0,!1),this.pos=0);else for(;n<=r-_i32;_i32+=n)this.process(e,_i32);}return this;}},{key:"destroy",value:function destroy(){(0,Bi.clean)(this.h,this.r,this.buffer,this.pad);}},{key:"digestInto",value:function digestInto(e){(0,Di.exists)(this),(0,Di.output)(e,this),this.finished=!0;var t=this.buffer,n=this.h;var r=this.pos;if(r){for(t[r++]=1;r<16;r++)t[r]=0;this.process(t,0,!0);}this.finalize();var i=0;for(var _t75=0;_t75<8;_t75++)e[i++]=n[_t75]>>>0,e[i++]=n[_t75]>>>8;return e;}},{key:"digest",value:function digest(){var e=this.buffer,t=this.outputLen;this.digestInto(e);var n=e.slice(0,t);return this.destroy(),n;}}]);}();function Ui(e){var t=function t(_t76,n){return e(n).update((0,Bi.toBytes)(_t76)).digest();},n=e(new Uint8Array(32));return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=function(t){return e(t);},t;}$i.poly1305=Ui(function(e){return new ji(e);}),function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.xchacha20poly1305=e.chacha20poly1305=e._poly1305_aead=e.chacha12=e.chacha8=e.xchacha20=e.chacha20=e.chacha20orig=void 0,e.hchacha=s;var t=Si,n=pe,r=$i,i=fe;function o(e,n,r,i,o){var s=arguments.length>5&&arguments[5]!==undefined?arguments[5]:20;var a=e[0],c=e[1],l=e[2],d=e[3],u=n[0],h=n[1],f=n[2],p=n[3],g=n[4],m=n[5],y=n[6],v=n[7],b=o,w=r[0],E=r[1],C=r[2],S=a,_=c,k=l,x=d,M=u,A=h,I=f,R=p,L=g,P=m,O=y,T=v,N=b,$=w,D=E,B=C;for(var _e70=0;_e70<s;_e70+=2)S=S+M|0,N=(0,t.rotl)(N^S,16),L=L+N|0,M=(0,t.rotl)(M^L,12),S=S+M|0,N=(0,t.rotl)(N^S,8),L=L+N|0,M=(0,t.rotl)(M^L,7),_=_+A|0,$=(0,t.rotl)($^_,16),P=P+$|0,A=(0,t.rotl)(A^P,12),_=_+A|0,$=(0,t.rotl)($^_,8),P=P+$|0,A=(0,t.rotl)(A^P,7),k=k+I|0,D=(0,t.rotl)(D^k,16),O=O+D|0,I=(0,t.rotl)(I^O,12),k=k+I|0,D=(0,t.rotl)(D^k,8),O=O+D|0,I=(0,t.rotl)(I^O,7),x=x+R|0,B=(0,t.rotl)(B^x,16),T=T+B|0,R=(0,t.rotl)(R^T,12),x=x+R|0,B=(0,t.rotl)(B^x,8),T=T+B|0,R=(0,t.rotl)(R^T,7),S=S+A|0,B=(0,t.rotl)(B^S,16),O=O+B|0,A=(0,t.rotl)(A^O,12),S=S+A|0,B=(0,t.rotl)(B^S,8),O=O+B|0,A=(0,t.rotl)(A^O,7),_=_+I|0,N=(0,t.rotl)(N^_,16),T=T+N|0,I=(0,t.rotl)(I^T,12),_=_+I|0,N=(0,t.rotl)(N^_,8),T=T+N|0,I=(0,t.rotl)(I^T,7),k=k+R|0,$=(0,t.rotl)($^k,16),L=L+$|0,R=(0,t.rotl)(R^L,12),k=k+R|0,$=(0,t.rotl)($^k,8),L=L+$|0,R=(0,t.rotl)(R^L,7),x=x+M|0,D=(0,t.rotl)(D^x,16),P=P+D|0,M=(0,t.rotl)(M^P,12),x=x+M|0,D=(0,t.rotl)(D^x,8),P=P+D|0,M=(0,t.rotl)(M^P,7);var K=0;i[K++]=a+S|0,i[K++]=c+_|0,i[K++]=l+k|0,i[K++]=d+x|0,i[K++]=u+M|0,i[K++]=h+A|0,i[K++]=f+I|0,i[K++]=p+R|0,i[K++]=g+L|0,i[K++]=m+P|0,i[K++]=y+O|0,i[K++]=v+T|0,i[K++]=b+N|0,i[K++]=w+$|0,i[K++]=E+D|0,i[K++]=C+B|0;}function s(e,n,r,i){var o=e[0],s=e[1],a=e[2],c=e[3],l=n[0],d=n[1],u=n[2],h=n[3],f=n[4],p=n[5],g=n[6],m=n[7],y=r[0],v=r[1],b=r[2],w=r[3];for(var _e71=0;_e71<20;_e71+=2)o=o+l|0,y=(0,t.rotl)(y^o,16),f=f+y|0,l=(0,t.rotl)(l^f,12),o=o+l|0,y=(0,t.rotl)(y^o,8),f=f+y|0,l=(0,t.rotl)(l^f,7),s=s+d|0,v=(0,t.rotl)(v^s,16),p=p+v|0,d=(0,t.rotl)(d^p,12),s=s+d|0,v=(0,t.rotl)(v^s,8),p=p+v|0,d=(0,t.rotl)(d^p,7),a=a+u|0,b=(0,t.rotl)(b^a,16),g=g+b|0,u=(0,t.rotl)(u^g,12),a=a+u|0,b=(0,t.rotl)(b^a,8),g=g+b|0,u=(0,t.rotl)(u^g,7),c=c+h|0,w=(0,t.rotl)(w^c,16),m=m+w|0,h=(0,t.rotl)(h^m,12),c=c+h|0,w=(0,t.rotl)(w^c,8),m=m+w|0,h=(0,t.rotl)(h^m,7),o=o+d|0,w=(0,t.rotl)(w^o,16),g=g+w|0,d=(0,t.rotl)(d^g,12),o=o+d|0,w=(0,t.rotl)(w^o,8),g=g+w|0,d=(0,t.rotl)(d^g,7),s=s+u|0,y=(0,t.rotl)(y^s,16),m=m+y|0,u=(0,t.rotl)(u^m,12),s=s+u|0,y=(0,t.rotl)(y^s,8),m=m+y|0,u=(0,t.rotl)(u^m,7),a=a+h|0,v=(0,t.rotl)(v^a,16),f=f+v|0,h=(0,t.rotl)(h^f,12),a=a+h|0,v=(0,t.rotl)(v^a,8),f=f+v|0,h=(0,t.rotl)(h^f,7),c=c+l|0,b=(0,t.rotl)(b^c,16),p=p+b|0,l=(0,t.rotl)(l^p,12),c=c+l|0,b=(0,t.rotl)(b^c,8),p=p+b|0,l=(0,t.rotl)(l^p,7);var E=0;i[E++]=o,i[E++]=s,i[E++]=a,i[E++]=c,i[E++]=y,i[E++]=v,i[E++]=b,i[E++]=w;}e.chacha20orig=(0,t.createCipher)(o,{counterRight:!1,counterLength:8,allowShortKeys:!0}),e.chacha20=(0,t.createCipher)(o,{counterRight:!1,counterLength:4,allowShortKeys:!1}),e.xchacha20=(0,t.createCipher)(o,{counterRight:!1,counterLength:8,extendNonceFn:s,allowShortKeys:!1}),e.chacha8=(0,t.createCipher)(o,{counterRight:!1,counterLength:4,rounds:8}),e.chacha12=(0,t.createCipher)(o,{counterRight:!1,counterLength:4,rounds:12});var a=new Uint8Array(16),c=function c(e,t){e.update(t);var n=t.length%16;n&&e.update(a.subarray(n));},l=new Uint8Array(32);function d(e,t,n,o,s){var a=e(t,n,l),d=r.poly1305.create(a);s&&c(d,s),c(d,o);var u=new Uint8Array(16),h=(0,i.createView)(u);(0,i.setBigUint64)(h,0,BigInt(s?s.length:0),!0),(0,i.setBigUint64)(h,8,BigInt(o.length),!0),d.update(u);var f=d.digest();return (0,i.clean)(a,u),f;}e._poly1305_aead=function(e){return function(t,r,o){var s=16;return (0,n.bytes)(t,32),(0,n.bytes)(r),{encrypt:function encrypt(a,c){var l=a.length,u=l+s;c?(0,n.bytes)(c,u):c=new Uint8Array(u),e(t,r,a,c,1);var h=d(e,t,r,c.subarray(0,-16),o);return c.set(h,l),(0,i.clean)(h),c;},decrypt:function decrypt(a,c){var l=a.length,u=l-s;if(l<s)throw new Error("encrypted data must be at least 16 bytes");c?(0,n.bytes)(c,u):c=new Uint8Array(u);var h=a.subarray(0,-16),f=a.subarray(-16),p=d(e,t,r,h,o);if(!(0,i.equalBytes)(f,p))throw new Error("invalid tag");return e(t,r,h,c,1),(0,i.clean)(p),c;}};};},e.chacha20poly1305=(0,i.wrapCipher)({blockSize:64,nonceLength:12,tagLength:16},(0,e._poly1305_aead)(e.chacha20)),e.xchacha20poly1305=(0,i.wrapCipher)({blockSize:64,nonceLength:24,tagLength:16},(0,e._poly1305_aead)(e.xchacha20));}(Ci),Object.defineProperty(Ei,"__esModule",{value:!0}),Ei.xchacha20=void 0;var Hi=Ci;Ei.xchacha20=function(e,t,n){return (0,Hi.xchacha20poly1305)(e,t,n);},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.aesDecrypt=e.aesEncrypt=e.symDecrypt=e.symEncrypt=void 0;var t=fe,n=Ie,r=Sr,i=Ei,o=Se,s=_e;e.symEncrypt=function(e,t,n){return a(c,e,t,n);};function a(e,t,n,a){var c=(0,o.symmetricAlgorithm)();if("aes-256-gcm"===c)return e(r.aes256gcm,t,n,(0,o.symmetricNonceLength)(),s.AEAD_TAG_LENGTH,a);if("xchacha20"===c)return e(i.xchacha20,t,n,s.XCHACHA20_NONCE_LENGTH,s.AEAD_TAG_LENGTH,a);if("aes-256-cbc"===c)return e(r.aes256cbc,t,n,16,0);throw new Error("Not implemented");}function c(e,r,i,o,s,a){var c=(0,n.randomBytes)(o),l=e(r,c,a).encrypt(i);if(0===s)return (0,t.concatBytes)(c,l);var d=l.length-s,u=l.subarray(0,d),h=l.subarray(d);return (0,t.concatBytes)(c,h,u);}function l(e,n,r,i,o,s){var a=r.subarray(0,i),c=e(n,Uint8Array.from(a),s),l=r.subarray(i);if(0===o)return c.decrypt(l);var d=l.subarray(0,o),u=l.subarray(o);return c.decrypt((0,t.concatBytes)(u,d));}e.symDecrypt=function(e,t,n){return a(l,e,t,n);},e.aesEncrypt=e.symEncrypt,e.aesDecrypt=e.symDecrypt;}(Cr),function(e){var t=le&&le.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function get(){return t[n];}}),Object.defineProperty(e,r,i);}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n];}),n=le&&le.__exportStar||function(e,n){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(n,r)||t(n,e,r);};Object.defineProperty(e,"__esModule",{value:!0}),n(Ae,e),n(fr,e),n(hr,e),n(Cr,e);}(Me);var Fi={};Object.defineProperty(Fi,"__esModule",{value:!0}),Fi.PublicKey=void 0;var zi=fe,qi=Me,Vi=function(){function e(e){this.data=(0,qi.convertPublicKeyFormat)(e,!0);}return e.fromHex=function(t){return new e((0,qi.hexToPublicKey)(t));},Object.defineProperty(e.prototype,"uncompressed",{get:function get(){return S.from((0,qi.convertPublicKeyFormat)(this.data,!1));},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"compressed",{get:function get(){return S.from(this.data);},enumerable:!1,configurable:!0}),e.prototype.toHex=function(e){return void 0===e&&(e=!0),(0,zi.bytesToHex)(e?this.data:this.uncompressed);},e.prototype.decapsulate=function(e,t){void 0===t&&(t=!1);var n=t?this.data:this.uncompressed,r=e.multiply(this,t);return (0,qi.getSharedKey)(n,r);},e.prototype.equals=function(e){return (0,zi.equalBytes)(this.data,e.data);},e;}();Fi.PublicKey=Vi,Object.defineProperty(xe,"__esModule",{value:!0}),xe.PrivateKey=void 0;var Wi=fe,Gi=Me,Zi=Fi,Yi=function(){function e(e){if(void 0===e)this.data=(0,Gi.getValidSecret)();else {if(!(0,Gi.isValidPrivateKey)(e))throw new Error("Invalid private key");this.data=e;}this.publicKey=new Zi.PublicKey((0,Gi.getPublicKey)(this.data));}return e.fromHex=function(t){return new e((0,Gi.decodeHex)(t));},Object.defineProperty(e.prototype,"secret",{get:function get(){return S.from(this.data);},enumerable:!1,configurable:!0}),e.prototype.toHex=function(){return (0,Wi.bytesToHex)(this.data);},e.prototype.encapsulate=function(e,t){void 0===t&&(t=!1);var n=t?this.publicKey.compressed:this.publicKey.uncompressed,r=this.multiply(e,t);return (0,Gi.getSharedKey)(n,r);},e.prototype.multiply=function(e,t){return void 0===t&&(t=!1),(0,Gi.getSharedPoint)(this.data,e.compressed,t);},e.prototype.equals=function(e){return (0,Wi.equalBytes)(this.data,e.data);},e;}();xe.PrivateKey=Yi,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.PublicKey=e.PrivateKey=void 0;var t=xe;Object.defineProperty(e,"PrivateKey",{enumerable:!0,get:function get(){return t.PrivateKey;}});var n=Fi;Object.defineProperty(e,"PublicKey",{enumerable:!0,get:function get(){return n.PublicKey;}});}(ke),function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.utils=e.PublicKey=e.PrivateKey=e.ECIES_CONFIG=void 0,e.encrypt=function(e,o){var s=new r.PrivateKey(),a=e instanceof Uint8Array?new r.PublicKey(e):r.PublicKey.fromHex(e),c=s.encapsulate(a,(0,n.isHkdfKeyCompressed)()),l=(0,n.isEphemeralKeyCompressed)()?s.publicKey.compressed:s.publicKey.uncompressed,d=(0,i.symEncrypt)(c,o);return S.from((0,t.concatBytes)(l,d));},e.decrypt=function(e,t){var o=e instanceof Uint8Array?new r.PrivateKey(e):r.PrivateKey.fromHex(e),s=(0,n.ephemeralKeySize)(),a=new r.PublicKey(t.subarray(0,s)),c=t.subarray(s),l=a.decapsulate(o,(0,n.isHkdfKeyCompressed)());return S.from((0,i.symDecrypt)(l,c));};var t=fe,n=Se,r=ke,i=Me;var o=Se;Object.defineProperty(e,"ECIES_CONFIG",{enumerable:!0,get:function get(){return o.ECIES_CONFIG;}});var s=ke;Object.defineProperty(e,"PrivateKey",{enumerable:!0,get:function get(){return s.PrivateKey;}}),Object.defineProperty(e,"PublicKey",{enumerable:!0,get:function get(){return s.PublicKey;}}),e.utils={aesEncrypt:i.aesEncrypt,aesDecrypt:i.aesDecrypt,symEncrypt:i.symEncrypt,symDecrypt:i.symDecrypt,decodeHex:i.decodeHex,getValidSecret:i.getValidSecret,remove0x:i.remove0x};}(he);var Ji=t("KeyExchange:Layer"),Xi=t("SocketService:Layer"),Qi=t("Ecies:Layer"),eo=t("RemoteCommunication:Layer");Ji.color="##95c44e",Xi.color="#f638d7",Qi.color="#465b9c",eo.color="#47a2be";var to={KeyExchange:Ji,SocketService:Xi,Ecies:Qi,RemoteCommunication:eo};var no,ro=[],io=[];var oo=function oo(t,n){return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(){return _regeneratorRuntime().wrap(function _callee8$(_context8){while(1)switch(_context8.prev=_context8.next){case 0:no=n,io.push(t),function(t){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(){var n,r,_i33,_Object$entries3,_Object$entries3$_i,_e72,_n44,i,_t77,_r34;return _regeneratorRuntime().wrap(function _callee7$(_context7){while(1)switch(_context7.prev=_context7.next){case 0:if(!(!no||!t)){_context7.next=2;break;}return _context7.abrupt("return");case 2:!function(){var e=io;io=ro,ro=e;}();n=no.endsWith("/")?"".concat(no,"evt"):"".concat(no,"/evt"),r=Object.assign({},t);if(delete r.params,t.params)for(_i33=0,_Object$entries3=Object.entries(t.params);_i33<_Object$entries3.length;_i33++){_Object$entries3$_i=_slicedToArray(_Object$entries3[_i33],2),_e72=_Object$entries3$_i[0],_n44=_Object$entries3$_i[1];r[_e72]=_n44;}i=JSON.stringify(r);to.RemoteCommunication("[sendBufferedEvents] Sending ".concat(ro.length," analytics events to ").concat(n));_context7.prev=7;_context7.next=10;return e(n,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:i});case 10:_t77=_context7.sent;_context7.next=13;return _t77.text();case 13:_r34=_context7.sent;to.RemoteCommunication("[sendBufferedEvents] Response: ".concat(_r34)),ro.length=0;_context7.next=19;break;case 17:_context7.prev=17;_context7.t0=_context7["catch"](7);case 19:case"end":return _context7.stop();}},_callee7,null,[[7,17]]);}));}(t)["catch"](function(){});case 1:case"end":return _context8.stop();}},_callee8);}));};var so=/*#__PURE__*/function(){function so(e){_classCallCheck(this,so);this.enabled=!0,(null==e?void 0:e.debug)&&t.enable("Ecies:Layer"),this.ecies=(null==e?void 0:e.privateKey)?he.PrivateKey.fromHex(e.privateKey):new he.PrivateKey(),to.Ecies("[ECIES constructor()] initialized secret: ",this.ecies.toHex()),to.Ecies("[ECIES constructor()] initialized public: ",this.ecies.publicKey.toHex()),to.Ecies("[ECIES constructor()] init with",this);}return _createClass(so,[{key:"generateECIES",value:function generateECIES(){this.ecies=new he.PrivateKey();}},{key:"getPublicKey",value:function getPublicKey(){return this.ecies.publicKey.toHex();}},{key:"encrypt",value:function encrypt(e,t){var n=e;if(this.enabled)try{to.Ecies("[ECIES: encrypt()] using otherPublicKey",t);var _r35=S.from(e),_i34=he.encrypt(t,_r35);n=S.from(_i34).toString("base64");}catch(n){throw to.Ecies("[ECIES: encrypt()] error encrypt:",n),to.Ecies("[ECIES: encrypt()] private: ",this.ecies.toHex()),to.Ecies("[ECIES: encrypt()] data: ",e),to.Ecies("[ECIES: encrypt()] otherkey: ",t),n;}return n;}},{key:"decrypt",value:function decrypt(e){var t=e;if(this.enabled)try{to.Ecies("[ECIES: decrypt()] using privateKey",this.ecies.toHex());var _n45=S.from(e.toString(),"base64");t=he.decrypt(this.ecies.toHex(),_n45).toString();}catch(t){throw to.Ecies("[ECIES: decrypt()] error decrypt",t),to.Ecies("[ECIES: decrypt()] private: ",this.ecies.toHex()),to.Ecies("[ECIES: decrypt()] encryptedData: ",e),t;}return t;}},{key:"getKeyInfo",value:function getKeyInfo(){return {"private":this.ecies.toHex(),"public":this.ecies.publicKey.toHex()};}},{key:"toString",value:function toString(){to.Ecies("[ECIES: toString()]",this.getKeyInfo());}}]);}();var ao={name:"@metamask/sdk-communication-layer",version:"0.31.0",description:"",homepage:"https://github.com/MetaMask/metamask-sdk#readme",bugs:{url:"https://github.com/MetaMask/metamask-sdk/issues"},repository:{type:"git",url:"https://github.com/MetaMask/metamask-sdk.git",directory:"packages/sdk-communication-layer"},main:"dist/node/cjs/metamask-sdk-communication-layer.js",unpkg:"dist/browser/umd/metamask-sdk-communication-layer.js",module:"dist/node/es/metamask-sdk-communication-layer.js",browser:"dist/browser/es/metamask-sdk-communication-layer.js","react-native":"dist/react-native/es/metamask-sdk-communication-layer.js",types:"dist/types/src/index.d.ts",files:["/dist"],scripts:{"build:types":"tsc --project tsconfig.build.json --emitDeclarationOnly --outDir dist/types","build:clean":"yarn clean && yarn build",build:"yarn build:types && rollup -c --bundleConfigAsCjs","build:dev":"yarn build:types && NODE_ENV=dev rollup -c --bundleConfigAsCjs","build:post-tsc":"echo 'N/A'","build:pre-tsc":"echo 'N/A'",size:"size-limit",clean:"rimraf ./dist",lint:"yarn lint:eslint && yarn lint:misc --check","lint:changelog":"../../scripts/validate-changelog.sh @metamask/sdk-communication-layer","lint:eslint":"eslint . --cache --ext js,ts","lint:fix":"yarn lint:eslint --fix && yarn lint:misc --write","lint:misc":"prettier '**/*.json' '**/*.md' '!CHANGELOG.md' --ignore-path ../../.gitignore","publish:preview":"yarn npm publish --tag preview",prepack:"../../scripts/prepack.sh",reset:"yarn clean && rimraf ./node_modules/",test:'jest --testPathIgnorePatterns "/e2e/"',"test:e2e":'jest --testPathPattern "/e2e/"',"test:coverage":"jest --coverage","test:ci":'jest --coverage --passWithNoTests --setupFilesAfterEnv ./jest-preload.js --testPathIgnorePatterns "/e2e/"',"test:dev":"jest",watch:"rollup -c --bundleConfigAsCjs -w"},dependencies:{bufferutil:"^4.0.8","date-fns":"^2.29.3",debug:"^4.3.4","utf-8-validate":"^5.0.2",uuid:"^8.3.2"},devDependencies:{"@jest/globals":"^29.3.1","@lavamoat/allow-scripts":"^2.3.1","@metamask/auto-changelog":"3.1.0","@metamask/eslint-config":"^6.0.0","@metamask/eslint-config-nodejs":"^6.0.0","@metamask/eslint-config-typescript":"^6.0.0","@rollup/plugin-commonjs":"^25.0.0","@rollup/plugin-json":"^6.0.0","@rollup/plugin-node-resolve":"^15.0.2","@rollup/plugin-replace":"^6.0.1","@rollup/plugin-terser":"^0.4.4","@size-limit/preset-big-lib":"^11.0.2","@types/jest":"^29.2.4","@types/node":"^20.1.3","@types/uuid":"^9.0.0","@typescript-eslint/eslint-plugin":"^4.26.0","@typescript-eslint/parser":"^4.26.0","cross-fetch":"^4.0.0",eciesjs:"^0.4.11",eslint:"^7.30.0","eslint-config-prettier":"^8.3.0","eslint-plugin-import":"^2.23.4","eslint-plugin-jest":"^24.4.0","eslint-plugin-jsdoc":"^36.1.0","eslint-plugin-node":"^11.1.0","eslint-plugin-prettier":"^3.4.0",eventemitter2:"^6.4.9",jest:"^29.3.1",prettier:"^2.3.0",rimraf:"^3.0.2",rollup:"^4.26.0","rollup-plugin-jscc":"^2.0.0","rollup-plugin-natives":"^0.7.5","rollup-plugin-node-builtins":"^2.1.2","rollup-plugin-node-globals":"^1.4.0","rollup-plugin-peer-deps-external":"^2.2.4","rollup-plugin-polyfill-node":"^0.13.0","rollup-plugin-sizes":"^1.0.6","rollup-plugin-typescript2":"^0.31.2","rollup-plugin-visualizer":"^5.12.0","size-limit":"^11.1.6","socket.io-client":"^4.5.1","stream-browserify":"^3.0.0","ts-jest":"^29.0.3","ts-node":"^10.9.1",typescript:"^5.6.3"},peerDependencies:{"cross-fetch":"^4.0.0",eciesjs:"*",eventemitter2:"^6.4.9","readable-stream":"^3.6.2","socket.io-client":"^4.5.1"},publishConfig:{access:"public",registry:"https://registry.npmjs.org/"},lavamoat:{allowScripts:{"@lavamoat/preinstall-always-fail":!1,canvas:!0,"eciesjs>secp256k1":!1,"socket.io-client>engine.io-client>ws>bufferutil":!1,"socket.io-client>engine.io-client>ws>utf-8-validate":!1,bufferutil:!1,"utf-8-validate":!1}}};var co="https://metamask-sdk.api.cx.metamask.io/",lo=["websocket"],uo=6048e5,ho=3e3,fo={METAMASK_GETPROVIDERSTATE:"metamask_getProviderState",ETH_REQUESTACCOUNTS:"eth_requestAccounts"};function po(e){var t=e.context;to.RemoteCommunication("[RemoteCommunication: clean()] context=".concat(t)),e.channelConfig=void 0,e.ready=!1,e.originatorConnectStarted=!1;}var go,mo,yo,vo,bo,wo,Eo;(Eo=go||(go={})).DISCONNECTED="disconnected",Eo.WAITING="waiting",Eo.TIMEOUT="timeout",Eo.LINKED="linked",Eo.PAUSED="paused",Eo.TERMINATED="terminated",function(e){e.KEY_INFO="key_info",e.SERVICE_STATUS="service_status",e.PROVIDER_UPDATE="provider_update",e.RPC_UPDATE="rpc_update",e.KEYS_EXCHANGED="keys_exchanged",e.JOIN_CHANNEL="join_channel",e.PUBLIC_KEY="public_key",e.CHANNEL_CREATED="channel_created",e.CLIENTS_CONNECTED="clients_connected",e.CLIENTS_DISCONNECTED="clients_disconnected",e.CLIENTS_WAITING="clients_waiting",e.CLIENTS_READY="clients_ready",e.REJECTED="rejected",e.WALLET_INIT="wallet_init",e.CHANNEL_PERSISTENCE="channel_persistence",e.CONFIG="config",e.MESSAGE_ACK="ack",e.SOCKET_DISCONNECTED="socket_disconnected",e.SOCKET_RECONNECT="socket_reconnect",e.OTP="otp",e.SDK_RPC_CALL="sdk_rpc_call",e.AUTHORIZED="authorized",e.CONNECTION_STATUS="connection_status",e.MESSAGE="message",e.TERMINATE="terminate";}(mo||(mo={})),(yo||(yo={})).KEY_EXCHANGE="key_exchange",function(e){e.KEY_HANDSHAKE_START="key_handshake_start",e.KEY_HANDSHAKE_CHECK="key_handshake_check",e.KEY_HANDSHAKE_SYN="key_handshake_SYN",e.KEY_HANDSHAKE_SYNACK="key_handshake_SYNACK",e.KEY_HANDSHAKE_ACK="key_handshake_ACK",e.KEY_HANDSHAKE_WALLET="key_handshake_wallet",e.KEY_HANDSHAKE_NONE="none";}(vo||(vo={}));var Co=/*#__PURE__*/function(_r36){function Co(_ref12){var _this10;var e=_ref12.communicationLayer,t=_ref12.otherPublicKey,n=_ref12.context,r=_ref12.ecies,i=_ref12.logging;_classCallCheck(this,Co);_this10=_callSuper(this,Co),_this10.keysExchanged=!1,_this10.step=vo.KEY_HANDSHAKE_NONE,_this10.debug=!1,_this10.context=n,_this10.communicationLayer=e,(null==r?void 0:r.privateKey)&&t&&(to.KeyExchange("[KeyExchange: constructor()] otherPubKey=".concat(t," set keysExchanged to true!"),r),_this10.keysExchanged=!0),_this10.myECIES=new so(Object.assign(Object.assign({},r),{debug:null==i?void 0:i.eciesLayer})),_this10.communicationLayer.state.eciesInstance=_this10.myECIES,_this10.myPublicKey=_this10.myECIES.getPublicKey(),_this10.debug=!0===(null==i?void 0:i.keyExchangeLayer),t&&_this10.setOtherPublicKey(t),_this10.communicationLayer.on(yo.KEY_EXCHANGE,_this10.onKeyExchangeMessage.bind(_assertThisInitialized(_this10)));return _this10;}_inherits(Co,_r36);return _createClass(Co,[{key:"onKeyExchangeMessage",value:function onKeyExchangeMessage(e){var t=this.communicationLayer.remote.state.relayPersistence;if(to.KeyExchange("[KeyExchange: onKeyExchangeMessage()] context=".concat(this.context," keysExchanged=").concat(this.keysExchanged," relayPersistence=").concat(t),e),t)return void to.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Ignoring key exchange message because relay persistence is activated");var n=e.message;this.keysExchanged&&to.KeyExchange("[KeyExchange: onKeyExchangeMessage()] context=".concat(this.context," received handshake while already exchanged. step=").concat(this.step," otherPubKey=").concat(this.otherPublicKey)),this.emit(mo.KEY_INFO,n.type),n.type===vo.KEY_HANDSHAKE_SYN?(this.checkStep([vo.KEY_HANDSHAKE_NONE,vo.KEY_HANDSHAKE_ACK]),to.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_SYN",n),n.pubkey&&this.setOtherPublicKey(n.pubkey),this.communicationLayer.sendMessage({type:vo.KEY_HANDSHAKE_SYNACK,pubkey:this.myPublicKey})["catch"](function(e){to.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Error sending KEY_HANDSHAKE_SYNACK",e);}),this.setStep(vo.KEY_HANDSHAKE_ACK)):n.type===vo.KEY_HANDSHAKE_SYNACK?(this.checkStep([vo.KEY_HANDSHAKE_SYNACK,vo.KEY_HANDSHAKE_ACK,vo.KEY_HANDSHAKE_NONE]),to.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_SYNACK"),n.pubkey&&this.setOtherPublicKey(n.pubkey),this.communicationLayer.sendMessage({type:vo.KEY_HANDSHAKE_ACK})["catch"](function(e){to.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Error sending KEY_HANDSHAKE_ACK",e);}),this.keysExchanged=!0,this.setStep(vo.KEY_HANDSHAKE_ACK),this.emit(mo.KEYS_EXCHANGED)):n.type===vo.KEY_HANDSHAKE_ACK&&(to.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_ACK set keysExchanged to true!"),this.checkStep([vo.KEY_HANDSHAKE_ACK,vo.KEY_HANDSHAKE_NONE]),this.keysExchanged=!0,this.setStep(vo.KEY_HANDSHAKE_ACK),this.emit(mo.KEYS_EXCHANGED));}},{key:"resetKeys",value:function resetKeys(e){this.clean(),this.myECIES=new so(e);}},{key:"clean",value:function clean(){to.KeyExchange("[KeyExchange: clean()] context=".concat(this.context," reset handshake state")),this.setStep(vo.KEY_HANDSHAKE_NONE),this.emit(mo.KEY_INFO,this.step),this.keysExchanged=!1;}},{key:"start",value:function start(_ref13){var e=_ref13.isOriginator,t=_ref13.force;var _this$communicationLa=this.communicationLayer.remote.state,n=_this$communicationLa.relayPersistence,r=_this$communicationLa.protocolVersion,i=r>=2;n?to.KeyExchange("[KeyExchange: start()] Ignoring key exchange message because relay persistence is activated"):(to.KeyExchange("[KeyExchange: start()] context=".concat(this.context," protocolVersion=").concat(r," isOriginator=").concat(e," step=").concat(this.step," force=").concat(t," relayPersistence=").concat(n," keysExchanged=").concat(this.keysExchanged)),e?!(this.keysExchanged||this.step!==vo.KEY_HANDSHAKE_NONE&&this.step!==vo.KEY_HANDSHAKE_SYNACK)||t?(to.KeyExchange("[KeyExchange: start()] context=".concat(this.context," -- start key exchange (force=").concat(t,") -- step=").concat(this.step),this.step),this.clean(),this.setStep(vo.KEY_HANDSHAKE_SYNACK),this.communicationLayer.sendMessage({type:vo.KEY_HANDSHAKE_SYN,pubkey:this.myPublicKey,v:2})["catch"](function(e){to.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_SYN",e);})):to.KeyExchange("[KeyExchange: start()] context=".concat(this.context," -- key exchange already ").concat(this.keysExchanged?"done":"in progress"," -- aborted."),this.step):this.keysExchanged&&!0!==t?to.KeyExchange("[KeyExchange: start()] don't send KEY_HANDSHAKE_START -- exchange already done."):i?this.communicationLayer.sendMessage({type:vo.KEY_HANDSHAKE_SYNACK,pubkey:this.myPublicKey,v:2})["catch"](function(e){to.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_SYNACK",e);}):(this.communicationLayer.sendMessage({type:vo.KEY_HANDSHAKE_START})["catch"](function(e){to.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_START",e);}),this.clean()));}},{key:"setStep",value:function setStep(e){this.step=e,this.emit(mo.KEY_INFO,e);}},{key:"checkStep",value:function checkStep(e){e.length>0&&e.indexOf(this.step.toString());}},{key:"setRelayPersistence",value:function setRelayPersistence(_ref14){var e=_ref14.localKey,t=_ref14.otherKey;this.otherPublicKey=t,this.myECIES=new so({privateKey:e,debug:this.debug}),this.keysExchanged=!0;}},{key:"setKeysExchanged",value:function setKeysExchanged(e){this.keysExchanged=e;}},{key:"areKeysExchanged",value:function areKeysExchanged(){return this.keysExchanged;}},{key:"getMyPublicKey",value:function getMyPublicKey(){return this.myPublicKey;}},{key:"getOtherPublicKey",value:function getOtherPublicKey(){return this.otherPublicKey;}},{key:"setOtherPublicKey",value:function setOtherPublicKey(e){to.KeyExchange("[KeyExchange: setOtherPubKey()]",e),this.otherPublicKey=e;}},{key:"encryptMessage",value:function encryptMessage(e){if(!this.otherPublicKey)throw new Error("encryptMessage: Keys not exchanged - missing otherPubKey");return this.myECIES.encrypt(e,this.otherPublicKey);}},{key:"decryptMessage",value:function decryptMessage(e){if(!this.otherPublicKey)throw new Error("decryptMessage: Keys not exchanged - missing otherPubKey");return this.myECIES.decrypt(e);}},{key:"getKeyInfo",value:function getKeyInfo(){return {ecies:Object.assign(Object.assign({},this.myECIES.getKeyInfo()),{otherPubKey:this.otherPublicKey}),step:this.step,keysExchanged:this.areKeysExchanged()};}},{key:"toString",value:function toString(){var e={keyInfo:this.getKeyInfo(),keysExchanged:this.keysExchanged,step:this.step};return JSON.stringify(e);}}]);}(eventemitter2Exports.EventEmitter2);!function(e){e.TERMINATE="terminate",e.ANSWER="answer",e.OFFER="offer",e.CANDIDATE="candidate",e.JSONRPC="jsonrpc",e.WALLET_INFO="wallet_info",e.WALLET_INIT="wallet_init",e.ORIGINATOR_INFO="originator_info",e.PAUSE="pause",e.OTP="otp",e.AUTHORIZED="authorized",e.PING="ping",e.READY="ready";}(bo||(bo={})),function(e){e.REQUEST="sdk_connect_request_started",e.REQUEST_MOBILE="sdk_connect_request_started_mobile",e.RECONNECT="sdk_reconnect_request_started",e.CONNECTED="sdk_connection_established",e.CONNECTED_MOBILE="sdk_connection_established_mobile",e.AUTHORIZED="sdk_connection_authorized",e.REJECTED="sdk_connection_rejected",e.TERMINATED="sdk_connection_terminated",e.DISCONNECTED="sdk_disconnected",e.SDK_USE_EXTENSION="sdk_use_extension",e.SDK_RPC_REQUEST="sdk_rpc_request",e.SDK_RPC_REQUEST_RECEIVED="sdk_rpc_request_received",e.SDK_RPC_REQUEST_DONE="sdk_rpc_request_done",e.SDK_EXTENSION_UTILIZED="sdk_extension_utilized",e.SDK_USE_INAPP_BROWSER="sdk_use_inapp_browser";}(wo||(wo={}));var So=function So(e,t,n){return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(){var r,i,o,s,a,c,l,d,u,h,f,p,g,_l$state,_t78,_n46,_r37;return _regeneratorRuntime().wrap(function _callee9$(_context9){while(1)switch(_context9.prev=_context9.next){case 0:l=e.remote,d=e.state,u=d.channelId,h=d.isOriginator;if(!("error_terminated"===t)){_context9.next=3;break;}return _context9.abrupt("return",(to.SocketService("handleJoinChannelResults: Channel ".concat(u," terminated")),void e.emit(mo.TERMINATE)));case 3:if(n){_context9.next=5;break;}return _context9.abrupt("return",void to.SocketService("handleJoinChannelResults: No result for channel ".concat(u)));case 5:f=n.persistence,p=n.walletKey,g=n.rejected;if(!(to.SocketService("handleJoinChannelResults: Channel ".concat(u," persistence=").concat(f," walletKey=").concat(p," rejected=").concat(g)),g)){_context9.next=12;break;}to.SocketService("handleJoinChannelResults: Channel ".concat(u," rejected"));_context9.next=10;return e.remote.disconnect({terminate:!0});case 10:e.remote.emit(mo.REJECTED,{channelId:u});return _context9.abrupt("return",void e.remote.emitServiceStatusEvent());case 12:if(!(p&&!(null===(r=l.state.channelConfig)||void 0===r?void 0:r.otherKey))){_context9.next=21;break;}e.getKeyExchange().setOtherPublicKey(p),null===(i=e.state.keyExchange)||void 0===i||i.setKeysExchanged(!0),l.state.ready=!0,l.state.authorized=!0,l.emit(mo.AUTHORIZED);_l$state=l.state,_t78=_l$state.communicationLayer,_n46=_l$state.storageManager,_r37=Object.assign(Object.assign({},l.state.channelConfig),{channelId:null!==(o=l.state.channelId)&&void 0!==o?o:"",validUntil:Date.now()+uo,localKey:null==_t78?void 0:_t78.getKeyInfo().ecies["private"],otherKey:p});e.sendMessage({type:vo.KEY_HANDSHAKE_ACK})["catch"](function(e){});null===(s=e.state.socket)||void 0===s||s.emit(bo.PING,{id:u,clientType:h?"dapp":"wallet",context:"on_channel_reconnect",message:""});_context9.next=19;return null==_n46?void 0:_n46.persistChannelConfig(_r37);case 19:l.emitServiceStatusEvent();l.setConnectionStatus(go.LINKED);case 21:f&&(e.emit(mo.CHANNEL_PERSISTENCE),null===(a=e.state.keyExchange)||void 0===a||a.setKeysExchanged(!0),l.state.ready=!0,l.state.authorized=!0,l.emit(mo.AUTHORIZED),oo(Object.assign(Object.assign({id:null!=u?u:"",event:h?wo.CONNECTED:wo.CONNECTED_MOBILE},e.remote.state.originatorInfo),{sdkVersion:e.remote.state.sdkVersion,commLayer:e.state.communicationLayerPreference,commLayerVersion:ao.version,walletVersion:null===(c=e.remote.state.walletInfo)||void 0===c?void 0:c.version}),d.communicationServerUrl)["catch"](function(e){}));case 22:case"end":return _context9.stop();}},_callee9);}));},_o=function _o(e){return new Promise(function(t){setTimeout(t,e);});},ko=function ko(e,t){for(var _len13=arguments.length,n=new Array(_len13>2?_len13-2:0),_key13=2;_key13<_len13;_key13++){n[_key13-2]=arguments[_key13];}return a(void 0,[e,t].concat(n),void 0,function(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:200;return/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(){var r,i,o;return _regeneratorRuntime().wrap(function _callee10$(_context10){while(1)switch(_context10.prev=_context10.next){case 0:i=Date.now();o=!1;case 2:if(o){_context10.next=9;break;}if(!(o=Date.now()-i>3e5,r=t[e],void 0!==r.elapsedTime)){_context10.next=5;break;}return _context10.abrupt("return",r);case 5:_context10.next=7;return _o(n);case 7:_context10.next=2;break;case 9:throw new Error("RPC ".concat(e," timed out"));case 10:case"end":return _context10.stop();}},_callee10);})();});},xo=function xo(e){return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(){var t,n,r,i,o,s,c;return _regeneratorRuntime().wrap(function _callee12$(_context12){while(1)switch(_context12.prev=_context12.next){case 0:t=e.state,n=t.socket,r=t.channelId,i=t.context,o=t.isOriginator,s=t.isReconnecting;if(!s){_context12.next=3;break;}return _context12.abrupt("return",(to.SocketService("[SocketService: reconnectSocket()] Reconnection already in progress, skipping",e),!1));case 3:if(n){_context12.next=5;break;}return _context12.abrupt("return",(to.SocketService("[SocketService: reconnectSocket()] socket is not defined",e),!1));case 5:if(r){_context12.next=7;break;}return _context12.abrupt("return",!1);case 7:c=n.connected;t.isReconnecting=!0,t.reconnectionAttempts=0,to.SocketService("[SocketService: reconnectSocket()] connected=".concat(c," trying to reconnect after socketio disconnection"),e);_context12.prev=9;case 10:if(!(3>t.reconnectionAttempts)){_context12.next=36;break;}to.SocketService("[SocketService: reconnectSocket()] Attempt ".concat(t.reconnectionAttempts+1," of 3"),e);_context12.next=14;return _o(200);case 14:if(!n.connected){_context12.next=16;break;}return _context12.abrupt("return",(to.SocketService("Socket already connected --- ping to retrieve messages"),n.emit(bo.PING,{id:r,clientType:o?"dapp":"wallet",context:"on_channel_config",message:""}),!0));case 16:t.resumed=!0,n.connect(),e.emit(mo.SOCKET_RECONNECT);_context12.prev=17;_context12.next=20;return new Promise(function(t,s){n.emit(mo.JOIN_CHANNEL,{channelId:r,context:"".concat(i,"connect_again"),clientType:o?"dapp":"wallet"},function(n,r){return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(){return _regeneratorRuntime().wrap(function _callee11$(_context11){while(1)switch(_context11.prev=_context11.next){case 0:_context11.prev=0;_context11.next=3;return So(e,n,r);case 3:t();_context11.next=9;break;case 6:_context11.prev=6;_context11.t0=_context11["catch"](0);s(_context11.t0);case 9:case"end":return _context11.stop();}},_callee11,null,[[0,6]]);}));});});case 20:_context12.next=22;return _o(100);case 22:if(!n.connected){_context12.next=24;break;}return _context12.abrupt("return",(to.SocketService("Reconnection successful on attempt ".concat(t.reconnectionAttempts+1)),!0));case 24:_context12.next=29;break;case 26:_context12.prev=26;_context12.t0=_context12["catch"](17);to.SocketService("Error during reconnection attempt ".concat(t.reconnectionAttempts+1,":"),_context12.t0);case 29:t.reconnectionAttempts+=1;_context12.t1=3>t.reconnectionAttempts;if(!_context12.t1){_context12.next=34;break;}_context12.next=34;return _o(200);case 34:_context12.next=10;break;case 36:return _context12.abrupt("return",(to.SocketService("Failed to reconnect after 3 attempts"),!1));case 37:_context12.prev=37;t.isReconnecting=!1,t.reconnectionAttempts=0;return _context12.finish(37);case 40:case"end":return _context12.stop();}},_callee12,null,[[9,,37,40],[17,26]]);}));};function Mo(e,t){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(){var n,r,i;return _regeneratorRuntime().wrap(function _callee13$(_context13){while(1)switch(_context13.prev=_context13.next){case 0:r=null===(n=e.state.keyExchange)||void 0===n?void 0:n.encryptMessage(JSON.stringify(t)),i={id:e.state.channelId,context:e.state.context,clientType:e.state.isOriginator?"dapp":"wallet",message:r,plaintext:e.state.hasPlaintext?JSON.stringify(t):void 0};return _context13.abrupt("return",(to.SocketService("[SocketService: encryptAndSendMessage()] context=".concat(e.state.context),i),t.type===bo.TERMINATE&&(e.state.manualDisconnect=!0),new Promise(function(t,n){var r;null===(r=e.state.socket)||void 0===r||r.emit(mo.MESSAGE,i,function(e,r){var i;e&&(to.SocketService("[SocketService: encryptAndSendMessage()] error=".concat(e)),n(e)),to.SocketService("[encryptAndSendMessage] response",r),t(null!==(i=null==r?void 0:r.success)&&void 0!==i&&i);});})));case 2:case"end":return _context13.stop();}},_callee13);}));}var Ao;!function(e){e.RPC_CHECK="rpcCheck",e.SKIPPED_RPC="skippedRpc";}(Ao||(Ao={}));var Io=["eth_sendTransaction","eth_signTypedData","eth_signTransaction","personal_sign","wallet_requestPermissions","wallet_switchEthereumChain","eth_signTypedData_v3","eth_signTypedData_v4","metamask_connectSign","metamask_connectWith","metamask_batch"].map(function(e){return e.toLowerCase();});var Ro=[{event:mo.CLIENTS_CONNECTED,handler:function handler(e,t){var _this11=this;return function(n){return a(_this11,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(){var n,r,i,o,s,a,c,l,d,u,h,f,_t79;return _regeneratorRuntime().wrap(function _callee14$(_context14){while(1)switch(_context14.prev=_context14.next){case 0:f=null!==(r=null===(n=e.remote.state.channelConfig)||void 0===n?void 0:n.relayPersistence)&&void 0!==r&&r;if(to.SocketService("[SocketService: handleClientsConnected()] context=".concat(e.state.context," on 'clients_connected-").concat(t,"' relayPersistence=").concat(f," resumed=").concat(e.state.resumed,"  clientsPaused=").concat(e.state.clientsPaused," keysExchanged=").concat(null===(i=e.state.keyExchange)||void 0===i?void 0:i.areKeysExchanged()," isOriginator=").concat(e.state.isOriginator)),e.emit(mo.CLIENTS_CONNECTED,{isOriginator:e.state.isOriginator,keysExchanged:null===(o=e.state.keyExchange)||void 0===o?void 0:o.areKeysExchanged(),context:e.state.context}),e.state.resumed)e.state.isOriginator||(to.SocketService("[SocketService: handleClientsConnected()] context=".concat(e.state.context," 'clients_connected' / keysExchanged=").concat(null===(s=e.state.keyExchange)||void 0===s?void 0:s.areKeysExchanged()," -- backward compatibility")),null===(a=e.state.keyExchange)||void 0===a||a.start({isOriginator:null!==(c=e.state.isOriginator)&&void 0!==c&&c})),e.state.resumed=!1;else if(e.state.clientsPaused)to.SocketService("[SocketService: handleClientsConnected()] 'clients_connected' skip sending originatorInfo on pause");else if(!e.state.isOriginator){_t79=!f;to.SocketService("[SocketService: handleClientsConnected()] context=".concat(e.state.context," on 'clients_connected' / keysExchanged=").concat(null===(l=e.state.keyExchange)||void 0===l?void 0:l.areKeysExchanged()," -- force=").concat(_t79," -- backward compatibility")),to.SocketService("[SocketService: handleClientsConnected()] context=".concat(e.state.context," on 'clients_connected' / keysExchanged=").concat(null===(d=e.state.keyExchange)||void 0===d?void 0:d.areKeysExchanged()," -- force=").concat(_t79," -- backward compatibility")),null===(u=e.state.keyExchange)||void 0===u||u.start({isOriginator:null!==(h=e.state.isOriginator)&&void 0!==h&&h,force:_t79});}e.state.clientsConnected=!0,e.state.clientsPaused=!1;case 3:case"end":return _context14.stop();}},_callee14);}));};}},{event:mo.CHANNEL_CREATED,handler:function handler(e,t){return function(n){to.SocketService("[SocketService: handleChannelCreated()] context=".concat(e.state.context," on 'channel_created-").concat(t,"'"),n),e.emit(mo.CHANNEL_CREATED,n);};}},{event:mo.CLIENTS_DISCONNECTED,handler:function handler(e,t){return function(){var n;e.state.clientsConnected=!1,to.SocketService("[SocketService: handlesClientsDisconnected()] context=".concat(e.state.context," on 'clients_disconnected-").concat(t,"'")),e.remote.state.relayPersistence?to.SocketService("[SocketService: handlesClientsDisconnected()] context=".concat(e.state.context," on 'clients_disconnected-").concat(t,"' - relayPersistence enabled, skipping key exchange cleanup.")):(e.state.isOriginator&&!e.state.clientsPaused&&(null===(n=e.state.keyExchange)||void 0===n||n.clean()),e.emit(mo.CLIENTS_DISCONNECTED,t));};}},{event:mo.CONFIG,handler:function handler(e,t){var _this12=this;return function(n){return a(_this12,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(){var r,i,o,s,a;return _regeneratorRuntime().wrap(function _callee15$(_context15){while(1)switch(_context15.prev=_context15.next){case 0:to.SocketService("[SocketService: handleChannelConfig()] update relayPersistence on 'config-".concat(t,"'"),n);s=n.persistence,a=n.walletKey;if(!(e.state.isOriginator&&e.remote.state.channelConfig)){_context15.next=28;break;}_context15.t0=n.walletKey&&!e.remote.state.channelConfig.otherKey;if(!_context15.t0){_context15.next=15;break;}to.SocketService("Setting wallet key ".concat(a));e.remote.state.channelConfig.otherKey=a;e.getKeyExchange().setOtherPublicKey(n.walletKey);null===(r=e.state.keyExchange)||void 0===r||r.setKeysExchanged(!0);_context15.next=11;return e.remote.sendMessage({type:vo.KEY_HANDSHAKE_ACK});case 11:_context15.next=13;return e.remote.sendMessage({type:bo.PING});case 13:_context15.next=15;return null===(i=e.remote.state.storageManager)||void 0===i?void 0:i.persistChannelConfig(e.remote.state.channelConfig);case 15:_context15.t1=!0!==s||e.remote.state.channelConfig.relayPersistence;if(_context15.t1){_context15.next=26;break;}to.SocketService("Setting relay persistence ".concat(s));e.remote.state.channelConfig.relayPersistence=s;e.remote.state.relayPersistence=!0;e.remote.emit(mo.CHANNEL_PERSISTENCE);e.remote.state.authorized=!0;e.remote.state.ready=!0;e.remote.emit(mo.AUTHORIZED);_context15.next=26;return null===(o=e.remote.state.storageManager)||void 0===o?void 0:o.persistChannelConfig(e.remote.state.channelConfig);case 26:_context15.next=29;break;case 28:e.state.isOriginator||n.persistence&&(e.remote.state.relayPersistence=!0,e.remote.emit(mo.CHANNEL_PERSISTENCE));case 29:case"end":return _context15.stop();}},_callee15);}));};}},{event:mo.MESSAGE,handler:function handler(e,t){return function(n){var r,i,o,s,a,c,l,d,u,h,f,p,g,m,y,v,b,w;var E=n.ackId,C=n.message,S=n.error,_=null!==(r=e.remote.state.relayPersistence)&&void 0!==r&&r;if(to.SocketService("[SocketService handleMessage()]  relayPersistence=".concat(_,"  context=").concat(e.state.context," on 'message' ").concat(t," keysExchanged=").concat(null===(i=e.state.keyExchange)||void 0===i?void 0:i.areKeysExchanged()),n),S)throw to.SocketService("\n      [SocketService handleMessage()] context=".concat(e.state.context,"::on 'message' error=").concat(S)),new Error(S);var k="string"==typeof C;if(!k&&(null==C?void 0:C.type)===vo.KEY_HANDSHAKE_START){if(_)return;return to.SocketService("[SocketService handleMessage()] context=".concat(e.state.context,"::on 'message' received HANDSHAKE_START isOriginator=").concat(e.state.isOriginator),C),void(null===(o=e.state.keyExchange)||void 0===o||o.start({isOriginator:null!==(s=e.state.isOriginator)&&void 0!==s&&s,force:!0}));}if(!k&&(null===(a=null==C?void 0:C.type)||void 0===a?void 0:a.startsWith("key_handshake"))){if(_)return;return to.SocketService("[SocketService handleMessage()] context=".concat(e.state.context,"::on 'message' emit KEY_EXCHANGE"),C),void e.emit(yo.KEY_EXCHANGE,{message:C,context:e.state.context});}if(k&&!(null===(c=e.state.keyExchange)||void 0===c?void 0:c.areKeysExchanged())){var _t80=!1;try{to.SocketService("[SocketService handleMessage()] context=".concat(e.state.context,"::on 'message' trying to decrypt message")),null===(l=e.state.keyExchange)||void 0===l||l.decryptMessage(C),_t80=!0;}catch(t){to.SocketService("[SocketService handleMessage()] context=".concat(e.state.context,"::on 'message' error"),t);}if(!_t80)return e.state.isOriginator?null===(u=e.state.keyExchange)||void 0===u||u.start({isOriginator:null!==(h=e.state.isOriginator)&&void 0!==h&&h}):e.sendMessage({type:vo.KEY_HANDSHAKE_START})["catch"](function(e){}),void to.SocketService("Message ignored because invalid key exchange status. step=".concat(null===(f=e.state.keyExchange)||void 0===f?void 0:f.getKeyInfo().step),null===(p=e.state.keyExchange)||void 0===p?void 0:p.getKeyInfo(),C);to.SocketService("Invalid key exchange status detected --- updating it."),null===(d=e.state.keyExchange)||void 0===d||d.setKeysExchanged(!0);}else if(!k&&(null==C?void 0:C.type))return void e.emit(mo.MESSAGE,C);if(!k)return void e.emit(mo.MESSAGE,C);var x=null===(g=e.state.keyExchange)||void 0===g?void 0:g.decryptMessage(C),M=JSON.parse(null!=x?x:"{}");if(E&&(null==E?void 0:E.length)>0&&(to.SocketService("[SocketService handleMessage()] context=".concat(e.state.context,"::on 'message' ackid=").concat(E," channelId=").concat(t)),null===(m=e.state.socket)||void 0===m||m.emit(mo.MESSAGE_ACK,{ackId:E,channelId:t,clientType:e.state.isOriginator?"dapp":"wallet"})),e.state.clientsPaused=(null==M?void 0:M.type)===bo.PAUSE,e.state.isOriginator&&M.data){var _t81=M.data,_n47=e.state.rpcMethodTracker[_t81.id];if(_n47){var _r38=Date.now()-_n47.timestamp;to.SocketService("[SocketService handleMessage()] context=".concat(e.state.context,"::on 'message' received answer for id=").concat(_t81.id," method=").concat(_n47.method," responseTime=").concat(_r38),M),e.remote.state.analytics&&Io.includes(_n47.method.toLowerCase())&&oo(Object.assign(Object.assign({id:null!==(y=e.remote.state.channelId)&&void 0!==y?y:"",event:wo.SDK_RPC_REQUEST_DONE,sdkVersion:e.remote.state.sdkVersion,commLayerVersion:ao.version},e.remote.state.originatorInfo),{walletVersion:null===(v=e.remote.state.walletInfo)||void 0===v?void 0:v.version,params:{method:_n47.method,from:"mobile"}}),e.remote.state.communicationServerUrl)["catch"](function(e){});var _i35=Object.assign(Object.assign({},_n47),{result:_t81.result,error:_t81.error?{code:null===(b=_t81.error)||void 0===b?void 0:b.code,message:null===(w=_t81.error)||void 0===w?void 0:w.message}:void 0,elapsedTime:_r38});e.state.rpcMethodTracker[_t81.id]=_i35,e.emit(mo.RPC_UPDATE,_i35);}}e.emit(mo.MESSAGE,{message:M});};}},{event:mo.REJECTED,handler:function handler(e,t){var _this13=this;return function(n){return a(_this13,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(){var n;return _regeneratorRuntime().wrap(function _callee16$(_context16){while(1)switch(_context16.prev=_context16.next){case 0:if(!(e.state.isOriginator&&!e.remote.state.ready)){_context16.next=9;break;}to.SocketService("[SocketService: handleChannelRejected()] context=".concat(e.state.context," channelId=").concat(t," isOriginator=").concat(e.state.isOriginator," ready=").concat(e.remote.state.ready),e.remote.state.originatorInfo);oo(Object.assign(Object.assign({id:t,event:wo.REJECTED},e.remote.state.originatorInfo),{sdkVersion:e.remote.state.sdkVersion,commLayer:e.state.communicationLayerPreference,commLayerVersion:ao.version,walletVersion:null===(n=e.remote.state.walletInfo)||void 0===n?void 0:n.version}),e.remote.state.communicationServerUrl)["catch"](function(e){});_context16.next=5;return e.remote.disconnect({terminate:!0});case 5:e.remote.emit(mo.REJECTED,{channelId:t});e.remote.setConnectionStatus(go.DISCONNECTED);_context16.next=10;break;case 9:to.SocketService("[SocketService: handleChannelRejected()] SKIP -- channelId=".concat(t," isOriginator=").concat(e.state.isOriginator," ready=").concat(e.remote.state.ready));case 10:case"end":return _context16.stop();}},_callee16);}));};}},{event:"clients_waiting_to_join",handler:function handler(e,t){return function(n){to.SocketService("[SocketService: handleClientsWaitingToJoin()] context=".concat(e.state.context," on 'clients_waiting_to_join-").concat(t,"'"),n),e.emit(mo.CLIENTS_WAITING,n);};}}],Lo=[{event:mo.KEY_INFO,handler:function handler(e){return function(t){to.SocketService("[SocketService: handleKeyInfo()] on 'KEY_INFO'",t),e.emit(mo.KEY_INFO,t);};}},{event:mo.KEYS_EXCHANGED,handler:function handler(e){return function(){var t,n,r;to.SocketService("[SocketService: handleKeysExchanged()] on 'keys_exchanged' keyschanged=".concat(null===(t=e.state.keyExchange)||void 0===t?void 0:t.areKeysExchanged()));var i=e.remote.state.channelConfig;if(i){var _t82=e.getKeyExchange().getKeyInfo().ecies;i.localKey=_t82["private"],i.otherKey=_t82.otherPubKey,e.remote.state.channelConfig=i,null===(n=e.remote.state.storageManager)||void 0===n||n.persistChannelConfig(i)["catch"](function(e){});}e.emit(mo.KEYS_EXCHANGED,{keysExchanged:null===(r=e.state.keyExchange)||void 0===r?void 0:r.areKeysExchanged(),isOriginator:e.state.isOriginator});var o={keyInfo:e.getKeyInfo()};e.emit(mo.SERVICE_STATUS,o);};}}];function Po(e,t){to.SocketService("[SocketService: setupChannelListener()] context=".concat(e.state.context," setting socket listeners for channel ").concat(t,"..."));var n=e.state.socket,r=e.state.keyExchange;n&&e.state.isOriginator&&(e.state.debug&&(null==n||n.io.on("error",function(t){to.SocketService("[SocketService: setupChannelListener()] context=".concat(e.state.context," socket event=error"),t);}),null==n||n.io.on("reconnect",function(t){to.SocketService("[SocketService: setupChannelListener()] context=".concat(e.state.context," socket event=reconnect"),t),xo(e)["catch"](function(e){});}),null==n||n.io.on("reconnect_error",function(t){to.SocketService("[SocketService: setupChannelListener()] context=".concat(e.state.context," socket event=reconnect_error"),t);}),null==n||n.io.on("reconnect_failed",function(){to.SocketService("[SocketService: setupChannelListener()] context=".concat(e.state.context," socket event=reconnect_failed"));})),null==n||n.on("disconnect",function(t){return to.SocketService("[SocketService: setupChannelListener()] on 'disconnect' -- MetaMaskSDK socket disconnected '".concat(t,"' begin recovery...")),function(e){return function(t){to.SocketService("[SocketService: handleDisconnect()] on 'disconnect' manualDisconnect=".concat(e.state.manualDisconnect),t),e.state.manualDisconnect||(e.emit(mo.SOCKET_DISCONNECTED),xo(e)["catch"](function(e){}));};}(e)(t);})),Ro.forEach(function(_ref15){var r=_ref15.event,i=_ref15.handler;null==n||n.on("".concat(r,"-").concat(t),i(e,t));}),Lo.forEach(function(_ref16){var t=_ref16.event,n=_ref16.handler;null==r||r.on(t,n(e));}),e.state.setupChannelListeners=!0;}var Oo=/*#__PURE__*/function(_r39){function Oo(e){var _this14;_classCallCheck(this,Oo);_this14=_callSuper(this,Oo),_this14.state={clientsConnected:!1,clientsPaused:!1,manualDisconnect:!1,lastRpcId:void 0,rpcMethodTracker:{},hasPlaintext:!1,communicationServerUrl:"",focusListenerAdded:!1,removeFocusListener:void 0,isReconnecting:!1,reconnectionAttempts:0},_this14.options=e;var n=e.reconnect,r=e.communicationLayerPreference,i=e.communicationServerUrl,o=e.context,s=e.remote,a=e.logging;_this14.state.resumed=n,_this14.state.context=o,_this14.state.isOriginator=s.state.isOriginator,_this14.state.communicationLayerPreference=r,_this14.state.debug=!0===(null==a?void 0:a.serviceLayer),_this14.remote=s,!0===(null==a?void 0:a.serviceLayer)&&t.enable("SocketService:Layer"),_this14.state.communicationServerUrl=i,_this14.state.hasPlaintext=_this14.state.communicationServerUrl!==co&&!0===(null==a?void 0:a.plaintext),to.SocketService("[SocketService: constructor()] Socket IO url: ".concat(_this14.state.communicationServerUrl)),_this14.initSocket();return _this14;}_inherits(Oo,_r39);return _createClass(Oo,[{key:"initSocket",value:function initSocket(){var e;var _this$options=this.options,t=_this$options.otherPublicKey,n=_this$options.ecies,r=_this$options.logging,i={autoConnect:!1,transports:lo,withCredentials:!0},o=this.state.communicationServerUrl;to.SocketService("[SocketService: initSocket()] Socket IO url: ".concat(o)),this.state.socket=lookup(o,i),function(e){if("undefined"!=typeof window&&"undefined"!=typeof document&&(to.SocketService("[SocketService: setupSocketFocusListener()] hasFocus=".concat(document.hasFocus()),e),!e.state.focusListenerAdded)){var _t83=function _t83(){to.SocketService("Document has focus --- reconnecting socket"),xo(e)["catch"](function(e){});};window.addEventListener("focus",_t83),e.state.focusListenerAdded=!0,e.state.removeFocusListener=function(){window.removeEventListener("focus",_t83),e.state.focusListenerAdded=!1;};}}(this);var a={communicationLayer:this,otherPublicKey:t,sendPublicKey:!1,context:null!==(e=this.state.context)&&void 0!==e?e:"",ecies:n,logging:r};this.state.keyExchange=new Co(a);}},{key:"resetKeys",value:function resetKeys(){return to.SocketService("[SocketService: resetKeys()] Resetting keys."),void(null===(e=this.state.keyExchange)||void 0===e||e.resetKeys());var e;}},{key:"createChannel",value:function createChannel(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(){return _regeneratorRuntime().wrap(function _callee19$(_context19){while(1)switch(_context19.prev=_context19.next){case 0:return _context19.abrupt("return",function(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(){var _this15=this;var t,n,r,i,s;return _regeneratorRuntime().wrap(function _callee18$(_context18){while(1)switch(_context18.prev=_context18.next){case 0:if(!(to.SocketService("[SocketService: createChannel()] context=".concat(e.state.context)),e.state.socket||e.initSocket(),null===(t=e.state.socket)||void 0===t?void 0:t.connected)){_context18.next=2;break;}throw new Error("socket already connected");case 2:null===(n=e.state.socket)||void 0===n||n.connect(),e.state.manualDisconnect=!1,e.state.isOriginator=!0;i=v4();e.state.channelId=i;Po(e,i);_context18.next=8;return new Promise(function(t,n){var r;null===(r=e.state.socket)||void 0===r||r.emit(mo.JOIN_CHANNEL,{channelId:i,context:"".concat(e.state.context,"createChannel"),clientType:"dapp"},function(r,i){return a(_this15,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(){return _regeneratorRuntime().wrap(function _callee17$(_context17){while(1)switch(_context17.prev=_context17.next){case 0:_context17.prev=0;_context17.next=3;return So(e,r,i);case 3:t();_context17.next=9;break;case 6:_context17.prev=6;_context17.t0=_context17["catch"](0);n(_context17.t0);case 9:case"end":return _context17.stop();}},_callee17,null,[[0,6]]);}));});});case 8:s=null===(r=e.state.keyExchange)||void 0===r?void 0:r.getKeyInfo();return _context18.abrupt("return",{channelId:i,pubKey:(null==s?void 0:s.ecies["public"])||"",privKey:(null==s?void 0:s.ecies["private"])||""});case 10:case"end":return _context18.stop();}},_callee18);}));}(this));case 1:case"end":return _context19.stop();}},_callee19,this);}));}},{key:"connectToChannel",value:function connectToChannel(_ref17){var e=_ref17.channelId,_ref17$withKeyExchang=_ref17.withKeyExchange,t=_ref17$withKeyExchang===void 0?!1:_ref17$withKeyExchang,n=_ref17.authorized;return function(e){return a(this,arguments,void 0,function(_ref18){var _this16=this;var e=_ref18.options,t=_ref18.instance;return/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(){var n,r,i,o,s,_o$isOriginator,c,l,d,u,_e73,_t84;return _regeneratorRuntime().wrap(function _callee21$(_context21){while(1)switch(_context21.prev=_context21.next){case 0:n=e.channelId,r=e.authorized,i=e.withKeyExchange,o=t.state,s=t.remote,_o$isOriginator=o.isOriginator,c=_o$isOriginator===void 0?!1:_o$isOriginator,l=o.socket,d=o.keyExchange,u=s.state.channelConfig;if(!(null==l?void 0:l.connected)){_context21.next=3;break;}throw new Error("socket already connected");case 3:if(c&&(null==u?void 0:u.relayPersistence)){_e73=u.localKey,_t84=u.otherKey;_e73&&_t84&&(null==d||d.setRelayPersistence({localKey:_e73,otherKey:_t84}));}return _context21.abrupt("return",(Object.assign(o,{manualDisconnect:!1,withKeyExchange:i,isOriginator:c,channelId:n}),null==l||l.connect(),Po(t,n),!c&&r&&(null==d||d.setKeysExchanged(!0),Object.assign(s.state,{ready:!0,authorized:!0})),new Promise(function(e){var i;var s=null===(i=null==d?void 0:d.getKeyInfo())||void 0===i?void 0:i.ecies["public"];null==l||l.emit(mo.JOIN_CHANNEL,{channelId:n,context:"".concat(o.context,"_connectToChannel"),clientType:c?"dapp":"wallet",publicKey:r&&!c?s:void 0},function(n,r){return a(_this16,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(){return _regeneratorRuntime().wrap(function _callee20$(_context20){while(1)switch(_context20.prev=_context20.next){case 0:_context20.next=2;return So(t,n,r);case 2:e();case 3:case"end":return _context20.stop();}},_callee20);}));});})));case 5:case"end":return _context21.stop();}},_callee21);})();});}({options:{channelId:e,withKeyExchange:t,authorized:n},instance:this});}},{key:"getKeyInfo",value:function getKeyInfo(){return this.state.keyExchange.getKeyInfo();}},{key:"keyCheck",value:function keyCheck(){var e,t;null===(t=(e=this).state.socket)||void 0===t||t.emit(mo.MESSAGE,{id:e.state.channelId,context:e.state.context,message:{type:vo.KEY_HANDSHAKE_CHECK,pubkey:e.getKeyInfo().ecies.otherPubKey}});}},{key:"getKeyExchange",value:function getKeyExchange(){return this.state.keyExchange;}},{key:"sendMessage",value:function sendMessage(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(){return _regeneratorRuntime().wrap(function _callee26$(_context26){while(1)switch(_context26.prev=_context26.next){case 0:return _context26.abrupt("return",function(e,t){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(){var n,r,i,o;return _regeneratorRuntime().wrap(function _callee25$(_context25){while(1)switch(_context25.prev=_context25.next){case 0:if(e.state.channelId){_context25.next=2;break;}throw to.SocketService("handleSendMessage: no channelId - Create a channel first"),new Error("Create a channel first");case 2:if(!(to.SocketService("[SocketService: handleSendMessage()] context=".concat(e.state.context," areKeysExchanged=").concat(null===(n=e.state.keyExchange)||void 0===n?void 0:n.areKeysExchanged()),t),null===(r=null==t?void 0:t.type)||void 0===r?void 0:r.startsWith("key_handshake"))){_context25.next=4;break;}return _context25.abrupt("return",(function(e,t){var n;to.SocketService("[SocketService: handleKeyHandshake()] context=".concat(e.state.context),t),null===(n=e.state.socket)||void 0===n||n.emit(mo.MESSAGE,{id:e.state.channelId,context:e.state.context,clientType:e.state.isOriginator?"dapp":"wallet",message:t});}(e,t),!0));case 4:!function(e,t){var n;if(!(null===(n=e.state.keyExchange)||void 0===n?void 0:n.areKeysExchanged())&&!e.remote.state.relayPersistence)throw to.SocketService("[SocketService: validateKeyExchange()] context=".concat(e.state.context," ERROR keys not exchanged"),t),new Error("Keys not exchanged BBB");}(e,t),function(e,t){var n;var r=null!==(n=null==t?void 0:t.method)&&void 0!==n?n:"",i=null==t?void 0:t.id;e.state.isOriginator&&i&&(e.state.rpcMethodTracker[i]={id:i,timestamp:Date.now(),method:r},e.emit(mo.RPC_UPDATE,e.state.rpcMethodTracker[i]));}(e,t);_context25.next=7;return Mo(e,t);case 7:o=_context25.sent;return _context25.abrupt("return",(e.remote.state.analytics&&e.remote.state.isOriginator&&t.method&&Io.includes(t.method.toLowerCase())&&oo({id:null!==(i=e.remote.state.channelId)&&void 0!==i?i:"",event:wo.SDK_RPC_REQUEST,params:{method:t.method,from:"mobile"}},e.remote.state.communicationServerUrl)["catch"](function(e){}),function(e,t){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(){var _this17=this;var n,r,i,_n48,_o25,_s14,_e74,_t85,_n49;return _regeneratorRuntime().wrap(function _callee24$(_context24){while(1)switch(_context24.prev=_context24.next){case 0:r=null==t?void 0:t.id,i=null!==(n=null==t?void 0:t.method)&&void 0!==n?n:"";if(!(e.state.isOriginator&&r)){_context24.next=24;break;}_context24.prev=2;_n48=ko(r,e.state.rpcMethodTracker,200).then(function(e){return {type:Ao.RPC_CHECK,result:e};});_o25=function(){return a(_this17,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(){var t,n;return _regeneratorRuntime().wrap(function _callee23$(_context23){while(1)switch(_context23.prev=_context23.next){case 0:_context23.next=2;return function(e){return a(void 0,[e],void 0,function(_ref19){var e=_ref19.rpcId,t=_ref19.instance;return/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(){return _regeneratorRuntime().wrap(function _callee22$(_context22){while(1)switch(_context22.prev=_context22.next){case 0:if(!(t.state.lastRpcId===e||void 0===t.state.lastRpcId)){_context22.next=5;break;}_context22.next=3;return _o(200);case 3:_context22.next=0;break;case 5:return _context22.abrupt("return",t.state.lastRpcId);case 6:case"end":return _context22.stop();}},_callee22);})();});}({instance:e,rpcId:r});case 2:t=_context23.sent;_context23.next=5;return ko(t,e.state.rpcMethodTracker,200);case 5:n=_context23.sent;return _context23.abrupt("return",{type:Ao.SKIPPED_RPC,result:n});case 7:case"end":return _context23.stop();}},_callee23);}));}();_context24.next=7;return Promise.race([_n48,_o25]);case 7:_s14=_context24.sent;if(!(_s14.type===Ao.RPC_CHECK)){_context24.next=13;break;}_e74=_s14.result;to.SocketService("[SocketService:handleRpcReplies()] id=".concat(t.id," ").concat(i," ( ").concat(_e74.elapsedTime," ms)"),_e74.result);_context24.next=19;break;case 13:if(!(_s14.type!==Ao.SKIPPED_RPC)){_context24.next=15;break;}throw new Error("Error handling RPC replies for ".concat(r));case 15:_t85=Object.assign(Object.assign({},e.state.rpcMethodTracker[r]),{error:new Error("SDK_CONNECTION_ISSUE")});e.emit(mo.RPC_UPDATE,_t85);_n49={data:Object.assign(Object.assign({},_t85),{jsonrpc:"2.0"}),name:"metamask-provider"};e.emit(mo.MESSAGE,{message:_n49});case 19:_context24.next=24;break;case 21:_context24.prev=21;_context24.t0=_context24["catch"](2);throw _context24.t0;case 24:case"end":return _context24.stop();}},_callee24,null,[[2,21]]);}));}(e,t)["catch"](function(e){}),o));case 9:case"end":return _context25.stop();}},_callee25);}));}(this,e));case 1:case"end":return _context26.stop();}},_callee26,this);}));}},{key:"ping",value:function ping(){return function(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(){var t,n;return _regeneratorRuntime().wrap(function _callee27$(_context27){while(1)switch(_context27.prev=_context27.next){case 0:to.SocketService("[SocketService: ping()] context=".concat(e.state.context," originator=").concat(e.state.isOriginator," keysExchanged=").concat(null===(t=e.state.keyExchange)||void 0===t?void 0:t.areKeysExchanged())),null===(n=e.state.socket)||void 0===n||n.emit(bo.PING,{id:e.state.channelId,context:"ping",clientType:e.remote.state.isOriginator?"dapp":"wallet",message:""});case 1:case"end":return _context27.stop();}},_callee27);}));}(this);}},{key:"pause",value:function pause(){return function(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(){var t,n;return _regeneratorRuntime().wrap(function _callee28$(_context28){while(1)switch(_context28.prev=_context28.next){case 0:to.SocketService("[SocketService: pause()] context=".concat(e.state.context));e.state.manualDisconnect=!0;_context28.t0=null===(t=e.state.keyExchange)||void 0===t?void 0:t.areKeysExchanged();if(!_context28.t0){_context28.next=6;break;}_context28.next=6;return e.sendMessage({type:bo.PAUSE});case 6:null===(n=e.state.socket)||void 0===n||n.disconnect();case 7:case"end":return _context28.stop();}},_callee28);}));}(this);}},{key:"isConnected",value:function isConnected(){var e;return null===(e=this.state.socket)||void 0===e?void 0:e.connected;}},{key:"resume",value:function resume(){return function(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(){var _this18=this;var t,n,r,i,o,s,c,l;return _regeneratorRuntime().wrap(function _callee30$(_context30){while(1)switch(_context30.prev=_context30.next){case 0:t=e.state,n=e.remote,r=t.socket,i=t.channelId,o=t.context,s=t.keyExchange,c=t.isOriginator,l=n.state.isOriginator;if(!(to.SocketService("[SocketService: resume()] channelId=".concat(i," context=").concat(o," connected=").concat(null==r?void 0:r.connected," manualDisconnect=").concat(t.manualDisconnect," resumed=").concat(t.resumed," keysExchanged=").concat(null==s?void 0:s.areKeysExchanged())),!i)){_context30.next=3;break;}throw to.SocketService("[SocketService: resume()] channelId is not defined"),new Error("ChannelId is not defined");case 3:if(!(null==r?void 0:r.connected)){_context30.next=16;break;}to.SocketService("[SocketService: resume()] already connected.");r.emit(bo.PING,{id:i,clientType:l?"dapp":"wallet",context:"on_channel_config",message:""});_context30.t0=n.hasRelayPersistence()||(null==s?void 0:s.areKeysExchanged());if(_context30.t0){_context30.next=14;break;}if(!c){_context30.next=13;break;}_context30.next=11;return e.sendMessage({type:bo.READY});case 11:_context30.next=14;break;case 13:null==s||s.start({isOriginator:!1});case 14:_context30.next=17;break;case 16:null==r||r.connect(),to.SocketService("[SocketService: resume()] after connecting socket --> connected=".concat(null==r?void 0:r.connected)),null==r||r.emit(mo.JOIN_CHANNEL,{channelId:i,context:"".concat(o,"_resume"),clientType:l?"dapp":"wallet"},function(t,n){return a(_this18,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(){return _regeneratorRuntime().wrap(function _callee29$(_context29){while(1)switch(_context29.prev=_context29.next){case 0:_context29.prev=0;_context29.next=3;return So(e,t,n);case 3:_context29.next=7;break;case 5:_context29.prev=5;_context29.t0=_context29["catch"](0);case 7:case"end":return _context29.stop();}},_callee29,null,[[0,5]]);}));});case 17:t.manualDisconnect=!1;t.resumed=!0;case 19:case"end":return _context30.stop();}},_callee30);}));}(this);}},{key:"getRPCMethodTracker",value:function getRPCMethodTracker(){return this.state.rpcMethodTracker;}},{key:"disconnect",value:function disconnect(e){return function(e,t){var n,r,i,o,s;to.SocketService("[SocketService: disconnect()] context=".concat(e.state.context),t),(null==t?void 0:t.terminate)&&(null===(r=(n=e.state).removeFocusListener)||void 0===r||r.call(n),e.state.channelId=t.channelId,null===(i=e.state.socket)||void 0===i||i.removeAllListeners(),null===(o=e.state.keyExchange)||void 0===o||o.clean(),e.remote.state.ready=!1,e.state.socket=void 0,e.state.rpcMethodTracker={}),e.state.manualDisconnect=!0,null===(s=e.state.socket)||void 0===s||s.disconnect();}(this,e);}}]);}(eventemitter2Exports.EventEmitter2);var To,No,$o;function Do(e){var _this19=this;return function(){return a(_this19,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(){var _this20=this;var t,n,r,i,o,s;return _regeneratorRuntime().wrap(function _callee32$(_context32){while(1)switch(_context32.prev=_context32.next){case 0:i=e.state;if(!i.authorized){_context32.next=3;break;}return _context32.abrupt("return");case 3:_context32.next=5;return function(){return a(_this20,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(){return _regeneratorRuntime().wrap(function _callee31$(_context31){while(1)switch(_context31.prev=_context31.next){case 0:if(i.walletInfo){_context31.next=5;break;}_context31.next=3;return _o(500);case 3:_context31.next=0;break;case 5:case"end":return _context31.stop();}},_callee31);}));}();case 5:o="7.3".localeCompare((null===(t=i.walletInfo)||void 0===t?void 0:t.version)||"");if(!(to.RemoteCommunication("[RemoteCommunication: handleAuthorizedEvent()] HACK 'authorized' version=".concat(null===(n=i.walletInfo)||void 0===n?void 0:n.version," compareValue=").concat(o)),1!==o)){_context32.next=8;break;}return _context32.abrupt("return");case 8:s=i.platformType===No.MobileWeb||i.platformType===No.ReactNative||i.platformType===No.MetaMaskMobileWebview;to.RemoteCommunication("[RemoteCommunication: handleAuthorizedEvent()] HACK 'authorized' platform=".concat(i.platformType," secure=").concat(s," channel=").concat(i.channelId," walletVersion=").concat(null===(r=i.walletInfo)||void 0===r?void 0:r.version)),s&&(i.authorized=!0,e.emit(mo.AUTHORIZED));case 10:case"end":return _context32.stop();}},_callee32);}));};}function Bo(e){return function(t){var n=e.state;to.RemoteCommunication("[RemoteCommunication: handleChannelCreatedEvent()] context=".concat(n.context," on 'channel_created' channelId=").concat(t)),e.emit(mo.CHANNEL_CREATED,t);};}function Ko(e,t){return function(){var n,r,i,o;var s=e.state;to.RemoteCommunication("[RemoteCommunication: handleClientsConnectedEvent()] on 'clients_connected' channel=".concat(s.channelId," keysExchanged=").concat(null===(r=null===(n=s.communicationLayer)||void 0===n?void 0:n.getKeyInfo())||void 0===r?void 0:r.keysExchanged)),s.analytics&&oo(Object.assign(Object.assign({id:null!==(i=s.channelId)&&void 0!==i?i:"",event:s.reconnection?wo.RECONNECT:s.isOriginator?wo.REQUEST:wo.REQUEST_MOBILE},s.originatorInfo),{commLayer:t,sdkVersion:s.sdkVersion,walletVersion:null===(o=s.walletInfo)||void 0===o?void 0:o.version,commLayerVersion:ao.version}),s.communicationServerUrl)["catch"](function(e){}),s.clientsConnected=!0,s.originatorInfoSent=!1,e.emit(mo.CLIENTS_CONNECTED);};}function jo(e){return function(t){var n=e.state;to.RemoteCommunication("[RemoteCommunication: handleClientsDisconnectedEvent()] context=".concat(n.context," on 'clients_disconnected' channelId=").concat(t)),n.relayPersistence||(n.clientsConnected=!1,n.ready=!1,n.authorized=!1),e.emit(mo.CLIENTS_DISCONNECTED,n.channelId),e.setConnectionStatus(go.DISCONNECTED);};}function Uo(e){return function(t){var n;var r=e.state;if(to.RemoteCommunication("[RemoteCommunication: handleClientsWaitingEvent()] context=".concat(r.context," on 'clients_waiting' numberUsers=").concat(t," ready=").concat(r.ready," autoStarted=").concat(r.originatorConnectStarted)),e.setConnectionStatus(go.WAITING),e.emit(mo.CLIENTS_WAITING,t),r.originatorConnectStarted){to.RemoteCommunication("[RemoteCommunication: handleClientsWaitingEvent()] on 'clients_waiting' watch autoStarted=".concat(r.originatorConnectStarted," timeout"),r.autoConnectOptions);var _t86=(null===(n=r.autoConnectOptions)||void 0===n?void 0:n.timeout)||3e3,i=setTimeout(function(){to.RemoteCommunication("[RemoteCommunication: handleClientsWaitingEvent()] setTimeout(".concat(_t86,") terminate channelConfig"),r.autoConnectOptions),r.originatorConnectStarted=!1,r.ready||e.setConnectionStatus(go.TIMEOUT),clearTimeout(i);},_t86);}};}function Ho(e,t){return function(n){var r,i,o,s,a,c,l,d;var u=e.state;if(to.RemoteCommunication("[RemoteCommunication: handleKeysExchangedEvent()] context=".concat(u.context," on commLayer.'keys_exchanged' channel=").concat(u.channelId),n),null===(i=null===(r=u.communicationLayer)||void 0===r?void 0:r.getKeyInfo())||void 0===i?void 0:i.keysExchanged){var _t87=Object.assign(Object.assign({},u.channelConfig),{channelId:null!==(o=u.channelId)&&void 0!==o?o:"",validUntil:(null===(s=u.channelConfig)||void 0===s?void 0:s.validUntil)||uo,localKey:u.communicationLayer.getKeyInfo().ecies["private"],otherKey:u.communicationLayer.getKeyInfo().ecies.otherPubKey});null===(a=u.storageManager)||void 0===a||a.persistChannelConfig(_t87)["catch"](function(e){}),e.setConnectionStatus(go.LINKED);}!function(e,t){var n,r,i,o,s,a,c,l;var d=e.state;to.RemoteCommunication("[RemoteCommunication: setLastActiveDate()] channel=".concat(d.channelId),t);var u=Object.assign(Object.assign({},d.channelConfig),{channelId:null!==(n=d.channelId)&&void 0!==n?n:"",validUntil:null!==(i=null===(r=d.channelConfig)||void 0===r?void 0:r.validUntil)&&void 0!==i?i:0,relayPersistence:d.relayPersistence,localKey:null===(s=null===(o=d.communicationLayer)||void 0===o?void 0:o.state.keyExchange)||void 0===s?void 0:s.getKeyInfo().ecies["private"],otherKey:null===(c=null===(a=d.communicationLayer)||void 0===a?void 0:a.state.keyExchange)||void 0===c?void 0:c.getKeyInfo().ecies.otherPubKey,lastActive:t.getTime()});null===(l=d.storageManager)||void 0===l||l.persistChannelConfig(u);}(e,new Date()),u.analytics&&u.channelId&&oo(Object.assign(Object.assign({id:u.channelId,event:n.isOriginator?wo.CONNECTED:wo.CONNECTED_MOBILE},u.originatorInfo),{sdkVersion:u.sdkVersion,commLayer:t,commLayerVersion:ao.version,walletVersion:null===(c=u.walletInfo)||void 0===c?void 0:c.version}),u.communicationServerUrl)["catch"](function(e){}),u.isOriginator=n.isOriginator,n.isOriginator||(null===(l=u.communicationLayer)||void 0===l||l.sendMessage({type:bo.READY}),u.ready=!0,u.paused=!1),n.isOriginator&&!u.originatorInfoSent&&(null===(d=u.communicationLayer)||void 0===d||d.sendMessage({type:bo.ORIGINATOR_INFO,originatorInfo:u.originatorInfo,originator:u.originatorInfo}),u.originatorInfoSent=!0);};}function Fo(e){return function(t){var n=t;t.message&&(n=n.message),function(e,t){var n=t.state;if(to.RemoteCommunication("[RemoteCommunication: onCommunicationLayerMessage()] context=".concat(n.context," on 'message' typeof=").concat(_typeof(e)),e),t.state.ready=!0,n.isOriginator||e.type!==bo.ORIGINATOR_INFO){if(n.isOriginator&&e.type===bo.WALLET_INFO)!function(e,t){var n=e.state;n.walletInfo=t.walletInfo,n.paused=!1;}(t,e);else {if(n.isOriginator&&e.type===bo.WALLET_INIT)(function(e,t){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(){var n,r,i,o,_o26,_t88,_s15,_a11,c,l,d;return _regeneratorRuntime().wrap(function _callee33$(_context33){while(1)switch(_context33.prev=_context33.next){case 0:o=e.state;if(!o.isOriginator){_context33.next=22;break;}_o26=t.data||{};if(!("object"==_typeof(_o26)&&"accounts"in _o26&&"chainId"in _o26&&"walletKey"in _o26)){_context33.next=22;break;}_context33.prev=4;_t88=e.state.channelConfig;if(!(to.RemoteCommunication("WALLET_INIT: channelConfig",JSON.stringify(_t88,null,2)),_t88)){_context33.next=17;break;}_s15=_o26.accounts,_a11=_o26.chainId,c=_o26.walletKey;d=!1;"deeplinkProtocol"in _o26&&(d=Boolean(_o26.deeplinkProtocol),e.state.deeplinkProtocolAvailable=d);"walletVersion"in _o26&&(l=_o26.walletVersion);_context33.next=13;return null===(n=e.state.storageManager)||void 0===n?void 0:n.persistChannelConfig(Object.assign(Object.assign({},_t88),{otherKey:c,walletVersion:l,deeplinkProtocolAvailable:d,relayPersistence:!0}));case 13:_context33.next=15;return null===(r=e.state.storageManager)||void 0===r?void 0:r.persistAccounts(_s15);case 15:_context33.next=17;return null===(i=e.state.storageManager)||void 0===i?void 0:i.persistChainId(_a11);case 17:e.emit(mo.WALLET_INIT,{accounts:_o26.accounts,chainId:_o26.chainId});_context33.next=22;break;case 20:_context33.prev=20;_context33.t0=_context33["catch"](4);case 22:case"end":return _context33.stop();}},_callee33,null,[[4,20]]);}));})(t,e)["catch"](function(e){to.RemoteCommunication("[RemoteCommunication: onCommunicationLayerMessage()] error=".concat(e));});else if(e.type===bo.TERMINATE)(function(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(){var t;return _regeneratorRuntime().wrap(function _callee34$(_context34){while(1)switch(_context34.prev=_context34.next){case 0:t=e.state;_context34.t0=t.isOriginator;if(!_context34.t0){_context34.next=6;break;}_context34.next=5;return Go({options:{terminate:!0,sendMessage:!1},instance:e});case 5:e.emit(mo.TERMINATE);case 6:case"end":return _context34.stop();}},_callee34);}));})(t)["catch"](function(e){to.RemoteCommunication("[RemoteCommunication: onCommunicationLayerMessage()] error=".concat(e));});else if(e.type===bo.PAUSE)!function(e){var t=e.state;t.paused=!0,e.setConnectionStatus(go.PAUSED);}(t);else if(e.type===bo.READY&&n.isOriginator)!function(e){var t=e.state;e.setConnectionStatus(go.LINKED);var n=t.paused;t.paused=!1,e.emit(mo.CLIENTS_READY,{isOriginator:t.isOriginator,walletInfo:t.walletInfo}),n&&(t.authorized=!0,e.emit(mo.AUTHORIZED));}(t);else {if(e.type===bo.OTP&&n.isOriginator)return void function(e,t){var n;var r=e.state;e.emit(mo.OTP,t.otpAnswer),1==="6.6".localeCompare((null===(n=r.walletInfo)||void 0===n?void 0:n.version)||"")&&e.emit(mo.SDK_RPC_CALL,{method:fo.ETH_REQUESTACCOUNTS,params:[]});}(t,e);e.type===bo.AUTHORIZED&&n.isOriginator&&function(e){var t=e.state;t.authorized=!0,e.emit(mo.AUTHORIZED);}(t);}t.emit(mo.MESSAGE,e);}}else !function(e,t){var n;var r=e.state;null===(n=r.communicationLayer)||void 0===n||n.sendMessage({type:bo.WALLET_INFO,walletInfo:r.walletInfo}),r.originatorInfo=t.originatorInfo||t.originator,e.emit(mo.CLIENTS_READY,{isOriginator:r.isOriginator,originatorInfo:r.originatorInfo}),r.paused=!1;}(t,e);}(n,e);};}function zo(e){return function(){var t=e.state;to.RemoteCommunication("[RemoteCommunication: handleSocketReconnectEvent()] on 'socket_reconnect' -- reset key exchange status / set ready to false"),t.ready=!1,t.authorized=!1,po(t),e.emitServiceStatusEvent({context:"socket_reconnect"});};}function qo(e){return function(){var t=e.state;to.RemoteCommunication("[RemoteCommunication: handleSocketDisconnectedEvent()] on 'socket_Disconnected' set ready to false"),t.ready=!1;};}function Vo(e){var _this21=this;return function(){return a(_this21,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(){var t,n,r,i,o,s,a,c;return _regeneratorRuntime().wrap(function _callee35$(_context35){while(1)switch(_context35.prev=_context35.next){case 0:c=e.state;to.RemoteCommunication("[RemoteCommunication: handleFullPersistenceEvent()] context=".concat(c.context)),e.state.ready=!0,e.state.clientsConnected=!0,e.state.authorized=!0,e.state.relayPersistence=!0,null===(t=e.state.communicationLayer)||void 0===t||t.getKeyExchange().setKeysExchanged(!0),e.emit(mo.KEYS_EXCHANGED,{keysExchanged:!0,isOriginator:!0}),e.emit(mo.AUTHORIZED),e.emit(mo.CLIENTS_READY),e.emit(mo.CHANNEL_PERSISTENCE);_context35.prev=2;c.channelConfig=Object.assign(Object.assign({},c.channelConfig),{localKey:null===(n=c.communicationLayer)||void 0===n?void 0:n.getKeyExchange().getKeyInfo().ecies["private"],otherKey:null===(r=c.communicationLayer)||void 0===r?void 0:r.getKeyExchange().getOtherPublicKey(),channelId:null!==(i=c.channelId)&&void 0!==i?i:"",validUntil:null!==(s=null===(o=c.channelConfig)||void 0===o?void 0:o.validUntil)&&void 0!==s?s:uo,relayPersistence:!0});_context35.next=6;return null===(a=c.storageManager)||void 0===a?void 0:a.persistChannelConfig(c.channelConfig);case 6:_context35.next=10;break;case 8:_context35.prev=8;_context35.t0=_context35["catch"](2);case 10:case"end":return _context35.stop();}},_callee35,null,[[2,8]]);}));};}function Wo(_ref20){var _S2;var e=_ref20.communicationLayerPreference,t=_ref20.otherPublicKey,n=_ref20.reconnect,r=_ref20.ecies,_ref20$communicationS=_ref20.communicationServerUrl,i=_ref20$communicationS===void 0?co:_ref20$communicationS,o=_ref20.instance;var s,a,c,l,d,u,h,f,p,g,m;var y=o.state;if(to.RemoteCommunication("[initCommunicationLayer()] ",JSON.stringify(y,null,2)),e!==To.SOCKET)throw new Error("Invalid communication protocol");y.communicationLayer=new Oo({communicationLayerPreference:e,otherPublicKey:t,reconnect:n,transports:y.transports,communicationServerUrl:i,context:y.context,ecies:r,logging:y.logging,remote:o});var v="undefined"!=typeof document&&document.URL||"",b="undefined"!=typeof document&&document.title||"";(null===(s=y.dappMetadata)||void 0===s?void 0:s.url)&&(v=y.dappMetadata.url),(null===(a=y.dappMetadata)||void 0===a?void 0:a.name)&&(b=y.dappMetadata.name);var w=null!==(u=null!==(l=null===(c=y.dappMetadata)||void 0===c?void 0:c.name)&&void 0!==l?l:null===(d=y.dappMetadata)||void 0===d?void 0:d.url)&&void 0!==u?u:"N/A",E="undefined"!=typeof window&&void 0!==window.location&&null!==(h=window.location.hostname)&&void 0!==h?h:w,C={url:v,title:b,source:null===(f=y.dappMetadata)||void 0===f?void 0:f.source,dappId:E,icon:(null===(p=y.dappMetadata)||void 0===p?void 0:p.iconUrl)||(null===(g=y.dappMetadata)||void 0===g?void 0:g.base64Icon),platform:y.platformType,apiVersion:ao.version,connector:null===(m=y.dappMetadata)||void 0===m?void 0:m.connector};y.originatorInfo=C;var S=(_S2={},_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_S2,mo.AUTHORIZED,Do(o)),mo.MESSAGE,Fo(o)),mo.CHANNEL_PERSISTENCE,Vo(o)),mo.CLIENTS_CONNECTED,Ko(o,e)),mo.KEYS_EXCHANGED,Ho(o,e)),mo.SOCKET_DISCONNECTED,qo(o)),mo.SOCKET_RECONNECT,zo(o)),mo.CLIENTS_DISCONNECTED,jo(o)),mo.KEY_INFO,function(){}),mo.CHANNEL_CREATED,Bo(o)),_defineProperty(_defineProperty(_S2,mo.CLIENTS_WAITING,Uo(o)),mo.RPC_UPDATE,function(e){o.emit(mo.RPC_UPDATE,e);}));for(var _i36=0,_Object$entries4=Object.entries(S);_i36<_Object$entries4.length;_i36++){var _Object$entries4$_i=_slicedToArray(_Object$entries4[_i36],2),_t89=_Object$entries4$_i[0],_n50=_Object$entries4$_i[1];try{y.communicationLayer.on(_t89,_n50);}catch(e){}}}function Go(e){return a(this,arguments,void 0,function(_ref21){var e=_ref21.options,t=_ref21.instance;return/*#__PURE__*/_regeneratorRuntime().mark(function _callee36(){var n;return _regeneratorRuntime().wrap(function _callee36$(_context36){while(1)switch(_context36.prev=_context36.next){case 0:n=t.state;return _context36.abrupt("return",(to.RemoteCommunication("[RemoteCommunication: disconnect()] channel=".concat(n.channelId),e),new Promise(function(r,i){var s,a,c,l,d,u;(null==e?void 0:e.terminate)?(t.state.ready&&oo({id:null!==(s=t.state.channelId)&&void 0!==s?s:"",event:wo.TERMINATED},t.state.communicationServerUrl)["catch"](function(e){}),n.ready=!1,n.paused=!1,null===(a=n.storageManager)||void 0===a||a.terminate(null!==(c=n.channelId)&&void 0!==c?c:""),t.state.terminated=!0,e.sendMessage?(null===(l=n.communicationLayer)||void 0===l?void 0:l.getKeyInfo().keysExchanged)&&t.state.communicationLayer&&Mo(t.state.communicationLayer,{type:bo.TERMINATE}).then(function(){r(!0);})["catch"](function(e){i(e);}):r(!0),n.authorized=!1,n.relayPersistence=!1,n.channelId=v4(),e.channelId=n.channelId,n.channelConfig=void 0,n.originatorConnectStarted=!1,null===(d=n.communicationLayer)||void 0===d||d.disconnect(e),t.setConnectionStatus(go.TERMINATED)):(null===(u=n.communicationLayer)||void 0===u||u.disconnect(e),t.setConnectionStatus(go.DISCONNECTED),r(!0));})));case 2:case"end":return _context36.stop();}},_callee36);})();});}(To||(To={})).SOCKET="socket",function(e){e.NonBrowser="nodejs",e.MetaMaskMobileWebview="in-app-browser",e.DesktopWeb="web-desktop",e.MobileWeb="web-mobile",e.ReactNative="react-native";}(No||(No={}));var Zo=/*#__PURE__*/function(_r40){function Zo(e){var _this22;_classCallCheck(this,Zo);_this22=_callSuper(this,Zo),_this22.state={ready:!1,authorized:!1,isOriginator:!1,terminated:!1,protocolVersion:1,paused:!1,deeplinkProtocolAvailable:!1,platformType:"metamask-mobile",analytics:!1,reconnection:!1,originatorInfoSent:!1,communicationServerUrl:co,context:"",persist:!1,clientsConnected:!1,sessionDuration:uo,originatorConnectStarted:!1,debug:!1,_connectionStatus:go.DISCONNECTED},_this22._options=e;var n=e.platformType,r=e.communicationLayerPreference,i=e.otherPublicKey,o=e.reconnect,s=e.walletInfo,a=e.dappMetadata,c=e.protocolVersion,l=e.transports,d=e.context,u=e.relayPersistence,h=e.ecies,_e$analytics=e.analytics,f=_e$analytics===void 0?!1:_e$analytics,p=e.storage,g=e.sdkVersion,_e$communicationServe=e.communicationServerUrl,m=_e$communicationServe===void 0?co:_e$communicationServe,y=e.logging,_e$autoConnect=e.autoConnect,v=_e$autoConnect===void 0?{timeout:ho}:_e$autoConnect;_this22.state.otherPublicKey=i,_this22.state.dappMetadata=a,_this22.state.walletInfo=s,_this22.state.transports=l,_this22.state.platformType=n,_this22.state.analytics=f,_this22.state.protocolVersion=null!=c?c:1,_this22.state.isOriginator=!i,_this22.state.relayPersistence=u,_this22.state.communicationServerUrl=m,_this22.state.context=d,_this22.state.terminated=!1,_this22.state.sdkVersion=g,_this22.setMaxListeners(50),_this22.setConnectionStatus(go.DISCONNECTED),(null==p?void 0:p.duration)&&(_this22.state.sessionDuration=uo),_this22.state.storageOptions=p,_this22.state.autoConnectOptions=v,_this22.state.debug=!0===(null==y?void 0:y.remoteLayer),!0===(null==y?void 0:y.remoteLayer)&&t.enable("RemoteCommunication:Layer"),!0===(null==y?void 0:y.serviceLayer)&&t.enable("SocketService:Layer"),!0===(null==y?void 0:y.eciesLayer)&&t.enable("ECIES:Layer"),!0===(null==y?void 0:y.keyExchangeLayer)&&t.enable("KeyExchange:Layer"),_this22.state.logging=y,(null==p?void 0:p.storageManager)&&(_this22.state.storageManager=p.storageManager),to.RemoteCommunication("[RemoteCommunication: constructor()] protocolVersion=".concat(c," relayPersistence=").concat(u," isOriginator=").concat(_this22.state.isOriginator," communicationLayerPreference=").concat(r," otherPublicKey=").concat(i," reconnect=").concat(o)),_this22.state.isOriginator||Wo({communicationLayerPreference:r,otherPublicKey:i,reconnect:o,ecies:h,communicationServerUrl:m,instance:_this22}),_this22.emitServiceStatusEvent({context:"constructor"});return _this22;}_inherits(Zo,_r40);return _createClass(Zo,[{key:"initFromDappStorage",value:function initFromDappStorage(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee37(){var e,_t90;return _regeneratorRuntime().wrap(function _callee37$(_context37){while(1)switch(_context37.prev=_context37.next){case 0:if(!this.state.storageManager){_context37.next=16;break;}_context37.next=3;return this.state.storageManager.getPersistedChannelConfig({});case 3:_t90=_context37.sent;_context37.t0=_t90;if(!_context37.t0){_context37.next=16;break;}this.state.channelConfig=_t90;this.state.channelId=_t90.channelId;this.state.deeplinkProtocolAvailable=null!==(e=_t90.deeplinkProtocolAvailable)&&void 0!==e&&e;_context37.t1=_t90.relayPersistence;if(!_context37.t1){_context37.next=16;break;}this.state.authorized=!0;this.state.ready=!0;this.setConnectionStatus(go.LINKED);_context37.next=16;return this.connectToChannel({channelId:_t90.channelId});case 16:Wo({communicationLayerPreference:To.SOCKET,otherPublicKey:this.state.otherPublicKey,reconnect:this._options.reconnect,ecies:this._options.ecies,communicationServerUrl:this.state.communicationServerUrl,instance:this});case 17:case"end":return _context37.stop();}},_callee37,this);}));}},{key:"originatorSessionConnect",value:function originatorSessionConnect(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee39(){return _regeneratorRuntime().wrap(function _callee39$(_context39){while(1)switch(_context39.prev=_context39.next){case 0:_context39.next=2;return function(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee38(){var t,n,r;return _regeneratorRuntime().wrap(function _callee38$(_context38){while(1)switch(_context38.prev=_context38.next){case 0:n=e.state;if(n.storageManager){_context38.next=3;break;}return _context38.abrupt("return",void to.RemoteCommunication("[RemoteCommunication: originatorSessionConnect()] no storage manager defined - skip"));case 3:_context38.next=5;return n.storageManager.getPersistedChannelConfig({});case 5:r=_context38.sent;if(!(to.RemoteCommunication("[RemoteCommunication: originatorSessionConnect()] autoStarted=".concat(n.originatorConnectStarted," channelConfig"),r),null===(t=n.communicationLayer)||void 0===t?void 0:t.isConnected())){_context38.next=8;break;}return _context38.abrupt("return",(to.RemoteCommunication("[RemoteCommunication: originatorSessionConnect()] socket already connected - skip"),r));case 8:if(!r){_context38.next=12;break;}if(!(r.validUntil>Date.now())){_context38.next=11;break;}return _context38.abrupt("return",(n.channelConfig=r,n.originatorConnectStarted=!0,n.channelId=null==r?void 0:r.channelId,n.reconnection=!0,r));case 11:to.RemoteCommunication("[RemoteCommunication: autoConnect()] Session has expired");case 12:n.originatorConnectStarted=!1;case 13:case"end":return _context38.stop();}},_callee38);}));}(this);case 2:return _context39.abrupt("return",_context39.sent);case 3:case"end":return _context39.stop();}},_callee39,this);}));}},{key:"generateChannelIdConnect",value:function generateChannelIdConnect(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee41(){return _regeneratorRuntime().wrap(function _callee41$(_context41){while(1)switch(_context41.prev=_context41.next){case 0:return _context41.abrupt("return",function(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee40(){var t,n,r,i,o,s,a,c;return _regeneratorRuntime().wrap(function _callee40$(_context40){while(1)switch(_context40.prev=_context40.next){case 0:if(e.communicationLayer){_context40.next=2;break;}throw new Error("communication layer not initialized");case 2:if(!e.ready){_context40.next=4;break;}throw new Error("Channel already connected");case 4:if(!(e.channelId&&(null===(t=e.communicationLayer)||void 0===t?void 0:t.isConnected()))){_context40.next=6;break;}return _context40.abrupt("return",(e.channelConfig=Object.assign(Object.assign({},e.channelConfig),{channelId:e.channelId,validUntil:Date.now()+e.sessionDuration}),null===(n=e.storageManager)||void 0===n||n.persistChannelConfig(e.channelConfig),{channelId:e.channelId,privKey:null===(i=null===(r=e.communicationLayer)||void 0===r?void 0:r.getKeyInfo())||void 0===i?void 0:i.ecies["private"],pubKey:null===(s=null===(o=e.communicationLayer)||void 0===o?void 0:o.getKeyInfo())||void 0===s?void 0:s.ecies["public"]}));case 6:to.RemoteCommunication("[RemoteCommunication: generateChannelId()]");_context40.next=9;return e.communicationLayer.createChannel();case 9:a=_context40.sent;to.RemoteCommunication("[RemoteCommunication: generateChannelId()] channel created",a);c=Object.assign(Object.assign({},e.channelConfig),{channelId:a.channelId,localKey:a.privKey,validUntil:Date.now()+e.sessionDuration});return _context40.abrupt("return",(e.channelId=a.channelId,e.channelConfig=c,{channelId:e.channelId,pubKey:a.pubKey,privKey:a.privKey}));case 13:case"end":return _context40.stop();}},_callee40);}));}(this.state));case 1:case"end":return _context41.stop();}},_callee41,this);}));}},{key:"clean",value:function clean(){return po(this.state);}},{key:"connectToChannel",value:function connectToChannel(_ref22){var e=_ref22.channelId,t=_ref22.withKeyExchange,n=_ref22.authorized;return function(e){return a(this,arguments,void 0,function(_ref23){var e=_ref23.channelId,t=_ref23.withKeyExchange,n=_ref23.authorized,r=_ref23.state;return/*#__PURE__*/_regeneratorRuntime().mark(function _callee42(){var o,s,a,c;return _regeneratorRuntime().wrap(function _callee42$(_context42){while(1)switch(_context42.prev=_context42.next){case 0:if(validate(e)){_context42.next=2;break;}throw to.RemoteCommunication("[RemoteCommunication: connectToChannel()] context=".concat(r.context," invalid channel channelId=").concat(e)),new Error("Invalid channel ".concat(e));case 2:if(!(to.RemoteCommunication("[RemoteCommunication: connectToChannel()] context=".concat(r.context," channelId=").concat(e," withKeyExchange=").concat(t)),null===(o=r.communicationLayer)||void 0===o?void 0:o.isConnected())){_context42.next=4;break;}return _context42.abrupt("return",void to.RemoteCommunication("[RemoteCommunication: connectToChannel()] context=".concat(r.context," already connected - interrupt connection.")));case 4:r.channelId=e;_context42.next=7;return null===(s=r.communicationLayer)||void 0===s?void 0:s.connectToChannel({channelId:e,authorized:n,withKeyExchange:t});case 7:c=Object.assign(Object.assign({},r.channelConfig),{channelId:e,validUntil:Date.now()+r.sessionDuration});r.channelConfig=c,null===(a=r.storageManager)||void 0===a||a.persistChannelConfig(c);case 9:case"end":return _context42.stop();}},_callee42);})();});}({channelId:e,authorized:n,withKeyExchange:t,state:this.state});}},{key:"sendMessage",value:function sendMessage(e){return function(e,t){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee44(){var n,r,i,_n51;return _regeneratorRuntime().wrap(function _callee44$(_context44){while(1)switch(_context44.prev=_context44.next){case 0:i=e.state;to.RemoteCommunication("[RemoteCommunication: sendMessage()] context=".concat(i.context," paused=").concat(i.paused," ready=").concat(i.ready," relayPersistence=").concat(i.relayPersistence," authorized=").concat(i.authorized," socket=").concat(null===(n=i.communicationLayer)||void 0===n?void 0:n.isConnected()," clientsConnected=").concat(i.clientsConnected," status=").concat(i._connectionStatus),t);_context44.t0=i.relayPersistence||i.ready&&(null===(r=i.communicationLayer)||void 0===r?void 0:r.isConnected())&&i.clientsConnected;if(_context44.t0){_context44.next=8;break;}to.RemoteCommunication("[RemoteCommunication: sendMessage()] context=".concat(i.context,"  SKIP message waiting for MM mobile readiness."));_context44.next=7;return new Promise(function(t){e.once(mo.CLIENTS_READY,t);});case 7:to.RemoteCommunication("[RemoteCommunication: sendMessage()] context=".concat(i.context,"  AFTER SKIP / READY -- sending pending message"));case 8:_context44.prev=8;_context44.next=11;return function(e,t){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee43(){return _regeneratorRuntime().wrap(function _callee43$(_context43){while(1)switch(_context43.prev=_context43.next){case 0:return _context43.abrupt("return",new Promise(function(n){var r;var i=e.state;to.RemoteCommunication("[RemoteCommunication: handleAuthorization()] context=".concat(i.context," ready=").concat(i.ready," authorized=").concat(i.authorized," method=").concat(t.method)),!i.isOriginator||i.authorized||i.relayPersistence?null===(r=i.communicationLayer)||void 0===r||r.sendMessage(t).then(function(e){n(e);})["catch"](function(e){n(!1);}):e.once(mo.AUTHORIZED,function(){var e;to.RemoteCommunication("[RemoteCommunication: handleAuthorization()] context=".concat(i.context,"  AFTER SKIP / AUTHORIZED -- sending pending message")),null===(e=i.communicationLayer)||void 0===e||e.sendMessage(t).then(function(e){n(e);})["catch"](function(e){n(!1);});});}));case 1:case"end":return _context43.stop();}},_callee43);}));}(e,t);case 11:_n51=_context44.sent;return _context44.abrupt("return",_n51);case 15:_context44.prev=15;_context44.t1=_context44["catch"](8);throw _context44.t1;case 18:case"end":return _context44.stop();}},_callee44,null,[[8,15]]);}));}(this,e);}},{key:"testStorage",value:function testStorage(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee46(){return _regeneratorRuntime().wrap(function _callee46$(_context46){while(1)switch(_context46.prev=_context46.next){case 0:return _context46.abrupt("return",function(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee45(){var t,n;return _regeneratorRuntime().wrap(function _callee45$(_context45){while(1)switch(_context45.prev=_context45.next){case 0:_context45.next=2;return null===(t=e.storageManager)||void 0===t?void 0:t.getPersistedChannelConfig();case 2:n=_context45.sent;to.RemoteCommunication("[RemoteCommunication: testStorage()] res",n);case 4:case"end":return _context45.stop();}},_callee45);}));}(this.state));case 1:case"end":return _context46.stop();}},_callee46,this);}));}},{key:"hasDeeplinkProtocol",value:function hasDeeplinkProtocol(){return this.state.deeplinkProtocolAvailable;}},{key:"getChannelConfig",value:function getChannelConfig(){return this.state.channelConfig;}},{key:"isReady",value:function isReady(){return this.state.ready;}},{key:"isConnected",value:function isConnected(){var e;return null===(e=this.state.communicationLayer)||void 0===e?void 0:e.isConnected();}},{key:"isAuthorized",value:function isAuthorized(){return this.state.authorized;}},{key:"isPaused",value:function isPaused(){return this.state.paused;}},{key:"getCommunicationLayer",value:function getCommunicationLayer(){return this.state.communicationLayer;}},{key:"ping",value:function ping(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee47(){var e;return _regeneratorRuntime().wrap(function _callee47$(_context47){while(1)switch(_context47.prev=_context47.next){case 0:to.RemoteCommunication("[RemoteCommunication: ping()] channel=".concat(this.state.channelId));_context47.next=3;return null===(e=this.state.communicationLayer)||void 0===e?void 0:e.ping();case 3:case"end":return _context47.stop();}},_callee47,this);}));}},{key:"testLogger",value:function testLogger(){to.RemoteCommunication("testLogger() channel=".concat(this.state.channelId)),to.SocketService("testLogger() channel=".concat(this.state.channelId)),to.Ecies("testLogger() channel=".concat(this.state.channelId)),to.KeyExchange("testLogger() channel=".concat(this.state.channelId));}},{key:"keyCheck",value:function keyCheck(){var e;to.RemoteCommunication("[RemoteCommunication: keyCheck()] channel=".concat(this.state.channelId)),null===(e=this.state.communicationLayer)||void 0===e||e.keyCheck();}},{key:"setConnectionStatus",value:function setConnectionStatus(e){this.state._connectionStatus!==e&&(this.state._connectionStatus=e,this.emit(mo.CONNECTION_STATUS,e),this.emitServiceStatusEvent({context:"setConnectionStatus"}));}},{key:"emitServiceStatusEvent",value:function emitServiceStatusEvent(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.emit(mo.SERVICE_STATUS,this.getServiceStatus());}},{key:"getConnectionStatus",value:function getConnectionStatus(){return this.state._connectionStatus;}},{key:"getServiceStatus",value:function getServiceStatus(){return {originatorInfo:this.state.originatorInfo,keyInfo:this.getKeyInfo(),connectionStatus:this.state._connectionStatus,channelConfig:this.state.channelConfig,channelId:this.state.channelId};}},{key:"getKeyInfo",value:function getKeyInfo(){var e;return null===(e=this.state.communicationLayer)||void 0===e?void 0:e.getKeyInfo();}},{key:"resetKeys",value:function resetKeys(){var e;null===(e=this.state.communicationLayer)||void 0===e||e.resetKeys();}},{key:"setOtherPublicKey",value:function setOtherPublicKey(e){var t;var n=null===(t=this.state.communicationLayer)||void 0===t?void 0:t.getKeyExchange();if(!n)throw new Error("KeyExchange is not initialized.");n.getOtherPublicKey()!==e&&n.setOtherPublicKey(e);}},{key:"pause",value:function pause(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee48(){var e;return _regeneratorRuntime().wrap(function _callee48$(_context48){while(1)switch(_context48.prev=_context48.next){case 0:to.RemoteCommunication("[RemoteCommunication: pause()] channel=".concat(this.state.channelId));_context48.next=3;return null===(e=this.state.communicationLayer)||void 0===e?void 0:e.pause();case 3:this.setConnectionStatus(go.PAUSED);case 4:case"end":return _context48.stop();}},_callee48,this);}));}},{key:"getVersion",value:function getVersion(){return ao.version;}},{key:"hasRelayPersistence",value:function hasRelayPersistence(){var e;return null!==(e=this.state.relayPersistence)&&void 0!==e&&e;}},{key:"resume",value:function resume(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee50(){return _regeneratorRuntime().wrap(function _callee50$(_context50){while(1)switch(_context50.prev=_context50.next){case 0:return _context50.abrupt("return",function(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee49(){var t,n;return _regeneratorRuntime().wrap(function _callee49$(_context49){while(1)switch(_context49.prev=_context49.next){case 0:n=e.state;to.RemoteCommunication("[RemoteCommunication: resume()] channel=".concat(n.channelId));_context49.next=4;return null===(t=n.communicationLayer)||void 0===t?void 0:t.resume();case 4:e.setConnectionStatus(go.LINKED);case 5:case"end":return _context49.stop();}},_callee49);}));}(this));case 1:case"end":return _context50.stop();}},_callee50,this);}));}},{key:"encrypt",value:function encrypt(e){var t,n,r;var i=null===(t=this.state.communicationLayer)||void 0===t?void 0:t.getKeyExchange(),o=null==i?void 0:i.getOtherPublicKey();if(!o)throw new Error("KeyExchange not completed");return null===(r=null===(n=this.state.communicationLayer)||void 0===n?void 0:n.state.eciesInstance)||void 0===r?void 0:r.encrypt(e,o);}},{key:"decrypt",value:function decrypt(e){var t,n,r;if(!(null===(t=this.state.communicationLayer)||void 0===t?void 0:t.state.eciesInstance))throw new Error("ECIES instance is not initialized");return null===(r=null===(n=this.state.communicationLayer)||void 0===n?void 0:n.state.eciesInstance)||void 0===r?void 0:r.decrypt(e);}},{key:"getChannelId",value:function getChannelId(){return this.state.channelId;}},{key:"getRPCMethodTracker",value:function getRPCMethodTracker(){var e;return null===(e=this.state.communicationLayer)||void 0===e?void 0:e.getRPCMethodTracker();}},{key:"reject",value:function reject(_ref24){var e=_ref24.channelId;return function(e){return a(this,arguments,void 0,function(_ref25){var e=_ref25.channelId,t=_ref25.state;return/*#__PURE__*/_regeneratorRuntime().mark(function _callee51(){var n,r,o,_ref26,s;return _regeneratorRuntime().wrap(function _callee51$(_context51){while(1)switch(_context51.prev=_context51.next){case 0:if(validate(e)){_context51.next=2;break;}throw to.RemoteCommunication("[RemoteCommunication: connectToChannel()] context=".concat(t.context," invalid channel channelId=").concat(e)),new Error("Invalid channel ".concat(e));case 2:if(!t.isOriginator){_context51.next=4;break;}return _context51.abrupt("return",void to.RemoteCommunication("[RemoteCommunication: reject()] context=".concat(t.context," isOriginator=").concat(t.isOriginator," channelId=").concat(e)));case 4:_ref26=null!==(r=null===(n=t.communicationLayer)||void 0===n?void 0:n.state)&&void 0!==r?r:{},s=_ref26.socket;(null==s?void 0:s.connected)||(to.RemoteCommunication("[RemoteCommunication: reject()] context=".concat(t.context," socket already connected")),null==s||s.connect());oo(Object.assign(Object.assign({id:e,event:wo.REJECTED},t.originatorInfo),{sdkVersion:t.sdkVersion,commLayerVersion:ao.version,walletVersion:null===(o=t.walletInfo)||void 0===o?void 0:o.version}),t.communicationServerUrl)["catch"](function(e){});_context51.next=9;return new Promise(function(n,r){null==s||s.emit(mo.REJECTED,{channelId:e},function(e,i){to.RemoteCommunication("[RemoteCommunication: reject()] context=".concat(t.context," socket=").concat(null==s?void 0:s.id),{error:e,response:i}),e?r(e):n(i);});});case 9:case"end":return _context51.stop();}},_callee51);})();});}({channelId:e,state:this.state});}},{key:"disconnect",value:function disconnect(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee52(){return _regeneratorRuntime().wrap(function _callee52$(_context52){while(1)switch(_context52.prev=_context52.next){case 0:return _context52.abrupt("return",Go({options:e,instance:this}));case 1:case"end":return _context52.stop();}},_callee52,this);}));}}]);}(eventemitter2Exports.EventEmitter2);!function(e){e.RENEW="renew",e.LINK="link";}($o||($o={}));var Yo="ERC721",Jo="ERC1155",Xo={errors:{disconnected:function disconnected(){return "MetaMask: Disconnected from chain. Attempting to connect.";},permanentlyDisconnected:function permanentlyDisconnected(){return "MetaMask: Disconnected from MetaMask background. Page reload required.";},sendSiteMetadata:function sendSiteMetadata(){return "MetaMask: Failed to send site metadata. This is an internal error, please report this bug.";},unsupportedSync:function unsupportedSync(e){return "MetaMask: The MetaMask Ethereum provider does not support synchronous methods like ".concat(e," without a callback parameter.");},invalidDuplexStream:function invalidDuplexStream(){return "Must provide a Node.js-style duplex stream.";},invalidNetworkParams:function invalidNetworkParams(){return "MetaMask: Received invalid network parameters. Please report this bug.";},invalidRequestArgs:function invalidRequestArgs(){return "Expected a single, non-array, object argument.";},invalidRequestMethod:function invalidRequestMethod(){return "'args.method' must be a non-empty string.";},invalidRequestParams:function invalidRequestParams(){return "'args.params' must be an object or array if provided.";},invalidLoggerObject:function invalidLoggerObject(){return "'args.logger' must be an object if provided.";},invalidLoggerMethod:function invalidLoggerMethod(e){return "'args.logger' must include required method '".concat(e,"'.");}},info:{connected:function connected(e){return "MetaMask: Connected to chain with ID \"".concat(e,"\".");}},warnings:{chainIdDeprecation:"MetaMask: 'ethereum.chainId' is deprecated and may be removed in the future. Please use the 'eth_chainId' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23",networkVersionDeprecation:"MetaMask: 'ethereum.networkVersion' is deprecated and may be removed in the future. Please use the 'net_version' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23",selectedAddressDeprecation:"MetaMask: 'ethereum.selectedAddress' is deprecated and may be removed in the future. Please use the 'eth_accounts' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23",enableDeprecation:"MetaMask: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102",sendDeprecation:"MetaMask: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193",events:{close:"MetaMask: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect",data:"MetaMask: The event 'data' is deprecated and will be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message",networkChanged:"MetaMask: The event 'networkChanged' is deprecated and may be removed in the future. Use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#chainchanged",notification:"MetaMask: The event 'notification' is deprecated and may be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message"},rpc:{ethDecryptDeprecation:"MetaMask: The RPC method 'eth_decrypt' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686",ethGetEncryptionPublicKeyDeprecation:"MetaMask: The RPC method 'eth_getEncryptionPublicKey' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686",walletWatchAssetNFTExperimental:"MetaMask: The RPC method 'wallet_watchAsset' is experimental for ERC721/ERC1155 assets and may change in the future.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-1.md and https://github.com/MetaMask/metamask-improvement-proposals/blob/main/PROCESS-GUIDE.md#proposal-lifecycle"},experimentalMethods:"MetaMask: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning."}};function Qo(e){var t={ethDecryptDeprecation:!1,ethGetEncryptionPublicKeyDeprecation:!1,walletWatchAssetNFTExperimental:!1};return function(n,r,i){var _n$params;t.ethDecryptDeprecation||"eth_decrypt"!==n.method?t.ethGetEncryptionPublicKeyDeprecation||"eth_getEncryptionPublicKey"!==n.method?!t.walletWatchAssetNFTExperimental&&"wallet_watchAsset"===n.method&&[Yo,Jo].includes(((_n$params=n.params)===null||_n$params===void 0?void 0:_n$params.type)||"")&&(e.warn(Xo.warnings.rpc.walletWatchAssetNFTExperimental),t.walletWatchAssetNFTExperimental=!0):(e.warn(Xo.warnings.rpc.ethGetEncryptionPublicKeyDeprecation),t.ethGetEncryptionPublicKeyDeprecation=!0):(e.warn(Xo.warnings.rpc.ethDecryptDeprecation),t.ethDecryptDeprecation=!0),i();};}var es=4294967295,ts=Math.floor(Math.random()*es);function ns(){return function(e,t,n,r){var i=e.id,o=ts=(ts+1)%es;e.id=o,t.id=o,n(function(n){e.id=i,t.id=i,n();});};}var rs=function rs(e,t,n){if(!t.has(e))throw TypeError("Cannot "+n);},is=function is(e,t,n){return rs(e,t,"read from private field"),n?n.call(e):t.get(e);},os=function os(e,t,n){if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n);},ss=function ss(e,t,n,r){return rs(e,t,"write to private field"),t.set(e,n),n;},as=function as(e,t,n){return rs(e,t,"access private method"),n;},cs={invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},ls={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}};function ds(e){return Boolean(e)&&"object"==_typeof(e)&&!Array.isArray(e);}var us=function us(e,t){return Object.hasOwnProperty.call(e,t);};var hs=/*#__PURE__*/function(_TypeError){function hs(e,t){var _this23;_classCallCheck(this,hs);var n;var r=e.message,i=e.explanation,o=_objectWithoutProperties(e,_excluded),s=e.path,a=0===s.length?r:"At path: ".concat(s.join(".")," -- ").concat(r);_this23=_callSuper(this,hs,[i!==null&&i!==void 0?i:a]),null!=i&&(_this23.cause=a),Object.assign(_assertThisInitialized(_this23),o),_this23.name=_this23.constructor.name,_this23.failures=function(){var _n52;return (_n52=n)!==null&&_n52!==void 0?_n52:n=[e].concat(_toConsumableArray(t()));};return _this23;}_inherits(hs,_TypeError);return _createClass(hs);}(/*#__PURE__*/_wrapNativeSuper(TypeError));function fs(e){return "object"==_typeof(e)&&null!=e;}function ps(e){return "symbol"==_typeof(e)?e.toString():"string"==typeof e?JSON.stringify(e):"".concat(e);}function gs(e,t,n,r){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});var i=t.path,o=t.branch,s=n.type,_e75=e,a=_e75.refinement,_e75$message=_e75.message,c=_e75$message===void 0?"Expected a value of type `".concat(s,"`").concat(a?" with refinement `".concat(a,"`"):"",", but received: `").concat(ps(r),"`"):_e75$message;return _objectSpread2(_objectSpread2({value:r,type:s,refinement:a,key:i[i.length-1],path:i,branch:o},e),{},{message:c});}function ms(e,t,n,r){var _iterator5,_step5,_i37,_e76;return _regeneratorRuntime().wrap(function ms$(_context53){while(1)switch(_context53.prev=_context53.next){case 0:(function(e){return fs(e)&&"function"==typeof e[Symbol.iterator];})(e)||(e=[e]);_iterator5=_createForOfIteratorHelper(e);_context53.prev=2;_iterator5.s();case 4:if((_step5=_iterator5.n()).done){_context53.next=13;break;}_i37=_step5.value;_e76=gs(_i37,t,n,r);_context53.t0=_e76;if(!_context53.t0){_context53.next=11;break;}_context53.next=11;return _e76;case 11:_context53.next=4;break;case 13:_context53.next=18;break;case 15:_context53.prev=15;_context53.t1=_context53["catch"](2);_iterator5.e(_context53.t1);case 18:_context53.prev=18;_iterator5.f();return _context53.finish(18);case 21:case"end":return _context53.stop();}},_marked,null,[[2,15,18,21]]);}function ys(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return/*#__PURE__*/_regeneratorRuntime().mark(function _callee53(){var _n$path,r,_n$branch,i,_n$coerce,o,_n$mask,s,a,_n53,c,_iterator6,_step6,_r42,_iterator7,_step7,_step7$value,l,d,u,_t91,_iterator9,_step9,_n54,_iterator8,_step8,_r41;return _regeneratorRuntime().wrap(function _callee53$(_context54){while(1)switch(_context54.prev=_context54.next){case 0:_n$path=n.path,r=_n$path===void 0?[]:_n$path,_n$branch=n.branch,i=_n$branch===void 0?[e]:_n$branch,_n$coerce=n.coerce,o=_n$coerce===void 0?!1:_n$coerce,_n$mask=n.mask,s=_n$mask===void 0?!1:_n$mask,a={path:r,branch:i};if(o&&(e=t.coercer(e,a),s&&"type"!==t.type&&fs(t.schema)&&fs(e)&&!Array.isArray(e)))for(_n53 in e)void 0===t.schema[_n53]&&delete e[_n53];c="valid";_iterator6=_createForOfIteratorHelper(t.validator(e,a));_context54.prev=4;_iterator6.s();case 6:if((_step6=_iterator6.n()).done){_context54.next=14;break;}_r42=_step6.value;_r42.explanation=n.message;c="not_valid";_context54.next=12;return [_r42,void 0];case 12:_context54.next=6;break;case 14:_context54.next=19;break;case 16:_context54.prev=16;_context54.t0=_context54["catch"](4);_iterator6.e(_context54.t0);case 19:_context54.prev=19;_iterator6.f();return _context54.finish(19);case 22:_iterator7=_createForOfIteratorHelper(t.entries(e,a));_context54.prev=23;_iterator7.s();case 25:if((_step7=_iterator7.n()).done){_context54.next=52;break;}_step7$value=_slicedToArray(_step7.value,3),l=_step7$value[0],d=_step7$value[1],u=_step7$value[2];_t91=ys(d,u,{path:void 0===l?r:[].concat(_toConsumableArray(r),[l]),branch:void 0===l?i:[].concat(_toConsumableArray(i),[d]),coerce:o,mask:s,message:n.message});_iterator9=_createForOfIteratorHelper(_t91);_context54.prev=29;_iterator9.s();case 31:if((_step9=_iterator9.n()).done){_context54.next=42;break;}_n54=_step9.value;if(!_n54[0]){_context54.next=39;break;}c=null!=_n54[0].refinement?"not_refined":"not_valid";_context54.next=37;return [_n54[0],void 0];case 37:_context54.next=40;break;case 39:o&&(d=_n54[1],void 0===l?e=d:e instanceof Map?e.set(l,d):e instanceof Set?e.add(d):fs(e)&&(void 0!==d||l in e)&&(e[l]=d));case 40:_context54.next=31;break;case 42:_context54.next=47;break;case 44:_context54.prev=44;_context54.t1=_context54["catch"](29);_iterator9.e(_context54.t1);case 47:_context54.prev=47;_iterator9.f();return _context54.finish(47);case 50:_context54.next=25;break;case 52:_context54.next=57;break;case 54:_context54.prev=54;_context54.t2=_context54["catch"](23);_iterator7.e(_context54.t2);case 57:_context54.prev=57;_iterator7.f();return _context54.finish(57);case 60:if(!("not_valid"!==c)){_context54.next=80;break;}_iterator8=_createForOfIteratorHelper(t.refiner(e,a));_context54.prev=62;_iterator8.s();case 64:if((_step8=_iterator8.n()).done){_context54.next=72;break;}_r41=_step8.value;_r41.explanation=n.message;c="not_refined";_context54.next=70;return [_r41,void 0];case 70:_context54.next=64;break;case 72:_context54.next=77;break;case 74:_context54.prev=74;_context54.t3=_context54["catch"](62);_iterator8.e(_context54.t3);case 77:_context54.prev=77;_iterator8.f();return _context54.finish(77);case 80:_context54.t4="valid"===c;if(!_context54.t4){_context54.next=84;break;}_context54.next=84;return [void 0,e];case 84:case"end":return _context54.stop();}},_callee53,null,[[4,16,19,22],[23,54,57,60],[29,44,47,50],[62,74,77,80]]);})();}var vs=/*#__PURE__*/function(){function vs(e){var _this24=this;_classCallCheck(this,vs);var t=e.type,n=e.schema,r=e.validator,i=e.refiner,_e$coercer=e.coercer,o=_e$coercer===void 0?function(e){return e;}:_e$coercer,_e$entries=e.entries,s=_e$entries===void 0?/*#__PURE__*/_regeneratorRuntime().mark(function _callee54(){return _regeneratorRuntime().wrap(function _callee54$(_context55){while(1)switch(_context55.prev=_context55.next){case 0:case"end":return _context55.stop();}},_callee54);}):_e$entries;this.type=t,this.schema=n,this.entries=s,this.coercer=o,this.validator=r?function(e,t){return ms(r(e,t),t,_this24,e);}:function(){return [];},this.refiner=i?function(e,t){return ms(i(e,t),t,_this24,e);}:function(){return [];};}return _createClass(vs,[{key:"assert",value:function assert(e,t){return bs(e,this,t);}},{key:"create",value:function create(e,t){return ws(e,this,t);}},{key:"is",value:function is(e){return Es(e,this);}},{key:"mask",value:function mask(e,t){return function(e,t,n){var r=Cs(e,t,{coerce:!0,mask:!0,message:n});if(r[0])throw r[0];return r[1];}(e,this,t);}},{key:"validate",value:function validate(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return Cs(e,this,t);}}]);}();function bs(e,t,n){var r=Cs(e,t,{message:n});if(r[0])throw r[0];}function ws(e,t,n){var r=Cs(e,t,{coerce:!0,message:n});if(r[0])throw r[0];return r[1];}function Es(e,t){return !Cs(e,t)[0];}function Cs(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var r=ys(e,t,n),i=function(e){var _e$next=e.next(),t=_e$next.done,n=_e$next.value;return t?void 0:n;}(r);if(i[0]){var _e77=new hs(i[0],/*#__PURE__*/_regeneratorRuntime().mark(function _callee55(){var _iterator10,_step10,_e78;return _regeneratorRuntime().wrap(function _callee55$(_context56){while(1)switch(_context56.prev=_context56.next){case 0:_iterator10=_createForOfIteratorHelper(r);_context56.prev=1;_iterator10.s();case 3:if((_step10=_iterator10.n()).done){_context56.next=11;break;}_e78=_step10.value;_context56.t0=_e78[0];if(!_context56.t0){_context56.next=9;break;}_context56.next=9;return _e78[0];case 9:_context56.next=3;break;case 11:_context56.next=16;break;case 13:_context56.prev=13;_context56.t1=_context56["catch"](1);_iterator10.e(_context56.t1);case 16:_context56.prev=16;_iterator10.f();return _context56.finish(16);case 19:case"end":return _context56.stop();}},_callee55,null,[[1,13,16,19]]);}));return [_e77,void 0];}return [void 0,i[1]];}function Ss(e,t){return new vs({type:e,schema:null,validator:t});}function _s(e){var t;return new vs({type:"lazy",schema:null,entries:/*#__PURE__*/_regeneratorRuntime().mark(function entries(n,r){var _t92;return _regeneratorRuntime().wrap(function entries$(_context57){while(1)switch(_context57.prev=_context57.next){case 0:(_t92=t)!==null&&_t92!==void 0?_t92:t=e();return _context57.delegateYield(t.entries(n,r),"t0",2);case 2:case"end":return _context57.stop();}},entries);}),validator:function validator(n,r){var _t93;return (_t93=t)!==null&&_t93!==void 0?_t93:t=e(),t.validator(n,r);},coercer:function coercer(n,r){var _t94;return (_t94=t)!==null&&_t94!==void 0?_t94:t=e(),t.coercer(n,r);},refiner:function refiner(n,r){var _t95;return (_t95=t)!==null&&_t95!==void 0?_t95:t=e(),t.refiner(n,r);}});}function ks(e){return new vs({type:"array",schema:e,entries:/*#__PURE__*/_regeneratorRuntime().mark(function entries(t){var _iterator11,_step11,_step11$value,n,_r43;return _regeneratorRuntime().wrap(function entries$(_context58){while(1)switch(_context58.prev=_context58.next){case 0:if(!(e&&Array.isArray(t))){_context58.next=18;break;}_iterator11=_createForOfIteratorHelper(t.entries());_context58.prev=2;_iterator11.s();case 4:if((_step11=_iterator11.n()).done){_context58.next=10;break;}_step11$value=_slicedToArray(_step11.value,2),n=_step11$value[0],_r43=_step11$value[1];_context58.next=8;return [n,_r43,e];case 8:_context58.next=4;break;case 10:_context58.next=15;break;case 12:_context58.prev=12;_context58.t0=_context58["catch"](2);_iterator11.e(_context58.t0);case 15:_context58.prev=15;_iterator11.f();return _context58.finish(15);case 18:case"end":return _context58.stop();}},entries,null,[[2,12,15,18]]);}),coercer:function coercer(e){return Array.isArray(e)?e.slice():e;},validator:function validator(e){return Array.isArray(e)||"Expected an array value, but received: ".concat(ps(e));}});}function xs(e){var t=ps(e),n=_typeof(e);return new vs({type:"literal",schema:"string"===n||"number"===n||"boolean"===n?e:null,validator:function validator(n){return n===e||"Expected the literal `".concat(t,"`, but received: ").concat(ps(n));}});}function Ms(){return Ss("number",function(e){return "number"==typeof e&&!isNaN(e)||"Expected a number, but received: ".concat(ps(e));});}function As(e){var t=e?Object.keys(e):[],n=Ss("never",function(){return !1;});return new vs({type:"object",schema:e||null,entries:/*#__PURE__*/_regeneratorRuntime().mark(function entries(r){var _i38,_iterator12,_step12,_n55,_iterator13,_step13,_e79;return _regeneratorRuntime().wrap(function entries$(_context59){while(1)switch(_context59.prev=_context59.next){case 0:if(!(e&&fs(r))){_context59.next=37;break;}_i38=new Set(Object.keys(r));_iterator12=_createForOfIteratorHelper(t);_context59.prev=3;_iterator12.s();case 5:if((_step12=_iterator12.n()).done){_context59.next=12;break;}_n55=_step12.value;_i38["delete"](_n55);_context59.next=10;return [_n55,r[_n55],e[_n55]];case 10:_context59.next=5;break;case 12:_context59.next=17;break;case 14:_context59.prev=14;_context59.t0=_context59["catch"](3);_iterator12.e(_context59.t0);case 17:_context59.prev=17;_iterator12.f();return _context59.finish(17);case 20:_iterator13=_createForOfIteratorHelper(_i38);_context59.prev=21;_iterator13.s();case 23:if((_step13=_iterator13.n()).done){_context59.next=29;break;}_e79=_step13.value;_context59.next=27;return [_e79,r[_e79],n];case 27:_context59.next=23;break;case 29:_context59.next=34;break;case 31:_context59.prev=31;_context59.t1=_context59["catch"](21);_iterator13.e(_context59.t1);case 34:_context59.prev=34;_iterator13.f();return _context59.finish(34);case 37:case"end":return _context59.stop();}},entries,null,[[3,14,17,20],[21,31,34,37]]);}),validator:function validator(e){return fs(e)||"Expected an object, but received: ".concat(ps(e));},coercer:function coercer(e){return fs(e)?_objectSpread2({},e):e;}});}function Is(e){return new vs(_objectSpread2(_objectSpread2({},e),{},{validator:function validator(t,n){return void 0===t||e.validator(t,n);},refiner:function refiner(t,n){return void 0===t||e.refiner(t,n);}}));}function Rs(e,t){return new vs({type:"record",schema:null,entries:/*#__PURE__*/_regeneratorRuntime().mark(function entries(n){var _r44,_i39;return _regeneratorRuntime().wrap(function entries$(_context60){while(1)switch(_context60.prev=_context60.next){case 0:if(!fs(n)){_context60.next=11;break;}_context60.t0=_regeneratorRuntime().keys(n);case 2:if((_context60.t1=_context60.t0()).done){_context60.next=11;break;}_r44=_context60.t1.value;_i39=n[_r44];_context60.next=7;return [_r44,_r44,e];case 7:_context60.next=9;return [_r44,_i39,t];case 9:_context60.next=2;break;case 11:case"end":return _context60.stop();}},entries);}),validator:function validator(e){return fs(e)||"Expected an object, but received: ".concat(ps(e));}});}function Ls(){return Ss("string",function(e){return "string"==typeof e||"Expected a string, but received: ".concat(ps(e));});}function Ps(e){var t=e.map(function(e){return e.type;}).join(" | ");return new vs({type:"union",schema:null,coercer:function coercer(t){var _iterator14=_createForOfIteratorHelper(e),_step14;try{for(_iterator14.s();!(_step14=_iterator14.n()).done;){var n=_step14.value;var _n$validate=n.validate(t,{coerce:!0}),_n$validate2=_slicedToArray(_n$validate,2),_e80=_n$validate2[0],_r45=_n$validate2[1];if(!_e80)return _r45;}}catch(err){_iterator14.e(err);}finally{_iterator14.f();}return t;},validator:function validator(n,r){var i=[];var _iterator15=_createForOfIteratorHelper(e),_step15;try{for(_iterator15.s();!(_step15=_iterator15.n()).done;){var _t96=_step15.value;var _ys=ys(n,_t96,r),_ys2=_toArray(_ys),_e82=_ys2.slice(0),_e81=_slicedToArray(_e82,1),_o27=_e81[0];if(!_o27[0])return [];var _iterator16=_createForOfIteratorHelper(_e82),_step16;try{for(_iterator16.s();!(_step16=_iterator16.n()).done;){var _step16$value=_slicedToArray(_step16.value,1),_t97=_step16$value[0];_t97&&i.push(_t97);}}catch(err){_iterator16.e(err);}finally{_iterator16.f();}}}catch(err){_iterator15.e(err);}finally{_iterator15.f();}return ["Expected the value to satisfy a union of `".concat(t,"`, but received: ").concat(ps(n))].concat(i);}});}function Os(e){return function(e){return function(e){return "object"==_typeof(e)&&null!==e&&"message"in e;}(e)&&"string"==typeof e.message?e.message:null==e?"":String(e);}(e).replace(/\.$/,"");}function Ts(e,t){var _n56;return n=e,Boolean("string"==typeof((_n56=n)===null||_n56===void 0||(_n56=_n56.prototype)===null||_n56===void 0||(_n56=_n56.constructor)===null||_n56===void 0?void 0:_n56.name))?new e({message:t}):e({message:t});var n;}var Ns=/*#__PURE__*/function(_Error2){function Ns(e){var _this25;_classCallCheck(this,Ns);_this25=_callSuper(this,Ns,[e.message]),_this25.code="ERR_ASSERTION";return _this25;}_inherits(Ns,_Error2);return _createClass(Ns);}(/*#__PURE__*/_wrapNativeSuper(Error));function $s(){throw new Error("setTimeout has not been defined");}function Ds(){throw new Error("clearTimeout has not been defined");}var Bs=$s,Ks=Ds;function js(e){if(Bs===setTimeout)return setTimeout(e,0);if((Bs===$s||!Bs)&&setTimeout)return Bs=setTimeout,setTimeout(e,0);try{return Bs(e,0);}catch(t){try{return Bs.call(null,e,0);}catch(t){return Bs.call(this,e,0);}}}"function"==typeof c.setTimeout&&(Bs=setTimeout),"function"==typeof c.clearTimeout&&(Ks=clearTimeout);var Us,Hs=[],Fs=!1,zs=-1;function qs(){Fs&&Us&&(Fs=!1,Us.length?Hs=Us.concat(Hs):zs=-1,Hs.length&&Vs());}function Vs(){if(!Fs){var e=js(qs);Fs=!0;for(var t=Hs.length;t;){for(Us=Hs,Hs=[];++zs<t;)Us&&Us[zs].run();zs=-1,t=Hs.length;}Us=null,Fs=!1,function(e){if(Ks===clearTimeout)return clearTimeout(e);if((Ks===Ds||!Ks)&&clearTimeout)return Ks=clearTimeout,clearTimeout(e);try{return Ks(e);}catch(t){try{return Ks.call(null,e);}catch(t){return Ks.call(this,e);}}}(e);}}function Ws(e,t){this.fun=e,this.array=t;}Ws.prototype.run=function(){this.fun.apply(null,this.array);};function Gs(){}var Zs=Gs,Ys=Gs,Js=Gs,Xs=Gs,Qs=Gs,ea=Gs,ta=Gs;var na=c.performance||{},ra=na.now||na.mozNow||na.msNow||na.oNow||na.webkitNow||function(){return new Date().getTime();};var ia=new Date();var oa={nextTick:function nextTick(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Hs.push(new Ws(e,t)),1!==Hs.length||Fs||js(Vs);},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:Zs,addListener:Ys,once:Js,off:Xs,removeListener:Qs,removeAllListeners:ea,emit:ta,binding:function binding(e){throw new Error("process.binding is not supported");},cwd:function cwd(){return "/";},chdir:function chdir(e){throw new Error("process.chdir is not supported");},umask:function umask(){return 0;},hrtime:function hrtime(e){var t=.001*ra.call(na),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r];},platform:"browser",release:{},config:{},uptime:function uptime(){return (new Date()-ia)/1e3;}},sa=function sa(e){return As(e);};function aa(_ref27){var e=_ref27.path,t=_ref27.branch;var n=e[e.length-1];return us(t[t.length-2],n);}function ca(e){return new vs(_objectSpread2(_objectSpread2({},e),{},{type:"optional ".concat(e.type),validator:function validator(t,n){return !aa(n)||e.validator(t,n);},refiner:function refiner(t,n){return !aa(n)||e.refiner(t,n);}}));}var la,da,ua,ha=Ps([xs(null),Ss("boolean",function(e){return "boolean"==typeof e;}),Ss("finite number",function(e){return Es(e,Ms())&&Number.isFinite(e);}),Ls(),ks(_s(function(){return ha;})),Rs(Ls(),_s(function(){return ha;}))]),fa=(la=ha,da=Ss("any",function(){return !0;}),ua=function ua(e){return function(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"Assertion failed";var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:Ns;try{bs(e,t);}catch(e){throw Ts(r,"".concat(n,": ").concat(Os(e),"."));}}(e,ha),JSON.parse(JSON.stringify(e,function(e,t){if("__proto__"!==e&&"constructor"!==e)return t;}));},new vs(_objectSpread2(_objectSpread2({},la),{},{coercer:function coercer(e,t){return Es(e,da)?la.coercer(ua(e,t),t):la.coercer(e,t);}})));function pa(e){try{return function(e){ws(e,fa);}(e),!0;}catch(_unused){return !1;}}var ga=xs("2.0"),ma=function(e){return new vs(_objectSpread2(_objectSpread2({},e),{},{validator:function validator(t,n){return null===t||e.validator(t,n);},refiner:function refiner(t,n){return null===t||e.refiner(t,n);}}));}(Ps([Ms(),Ls()])),ya=sa({code:Ss("integer",function(e){return "number"==typeof e&&!isNaN(e)&&Number.isInteger(e)||"Expected an integer, but received: ".concat(ps(e));}),message:Ls(),data:ca(fa),stack:ca(Ls())}),va=Ps([Rs(Ls(),fa),ks(fa)]),ba=sa({id:ma,jsonrpc:ga,method:Ls(),params:ca(va)}),wa=sa({jsonrpc:ga,method:Ls(),params:ca(va)});function Ea(e){return Es(e,ba);}function Ca(e){return Es(e,ya);}As({id:ma,jsonrpc:ga,result:Is(Ss("unknown",function(){return !0;})),error:Is(ya)}),Ps([sa({id:ma,jsonrpc:ga,result:fa}),sa({id:ma,jsonrpc:ga,error:ya})]);var Sa=cs.internal,_a="Unspecified error message. This is a bug, please report it.",ka={code:Sa,message:Ma(Sa)},xa="Unspecified server error.";function Ma(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:_a;if(function(e){return Number.isInteger(e);}(e)){var _t98=e.toString();if(us(ls,_t98))return ls[_t98].message;if(function(e){return e>=-32099&&e<=-32e3;}(e))return xa;}return t;}function Aa(e){var _ref28=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},_ref28$fallbackError=_ref28.fallbackError,t=_ref28$fallbackError===void 0?ka:_ref28$fallbackError,_ref28$shouldIncludeS=_ref28.shouldIncludeStack,n=_ref28$shouldIncludeS===void 0?!0:_ref28$shouldIncludeS;if(!Ca(t))throw new Error("Must provide fallback error with integer number code and string message.");var r=function(e,t){if(e&&"object"==_typeof(e)&&"serialize"in e&&"function"==typeof e.serialize)return e.serialize();if(Ca(e))return e;var n=Ia(e),r=_objectSpread2(_objectSpread2({},t),{},{data:{cause:n}});return r;}(e,t);return n||delete r.stack,r;}function Ia(e){return Array.isArray(e)?e.map(function(e){return pa(e)?e:ds(e)?Ra(e):null;}):ds(e)?Ra(e):pa(e)?e:null;}function Ra(e){return Object.getOwnPropertyNames(e).reduce(function(t,n){var r=e[n];return pa(r)&&(t[n]=r),t;},{});}var La=Da;Da["default"]=Da,Da.stable=Ua,Da.stableStringify=Ua;var Pa="[...]",Oa="[Circular]",Ta=[],Na=[];function $a(){return {depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER};}function Da(e,t,n,r){var i;void 0===r&&(r=$a()),Ka(e,"",0,[],void 0,0,r);try{i=0===Na.length?JSON.stringify(e,t,n):JSON.stringify(e,Fa(t),n);}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");}finally{for(;0!==Ta.length;){var o=Ta.pop();4===o.length?Object.defineProperty(o[0],o[1],o[3]):o[0][o[1]]=o[2];}}return i;}function Ba(e,t,n,r){var i=Object.getOwnPropertyDescriptor(r,n);void 0!==i.get?i.configurable?(Object.defineProperty(r,n,{value:e}),Ta.push([r,n,t,i])):Na.push([t,n,e]):(r[n]=e,Ta.push([r,n,t]));}function Ka(e,t,n,r,i,o,s){var a;if(o+=1,"object"==_typeof(e)&&null!==e){for(a=0;a<r.length;a++)if(r[a]===e)return void Ba(Oa,e,t,i);if(void 0!==s.depthLimit&&o>s.depthLimit)return void Ba(Pa,e,t,i);if(void 0!==s.edgesLimit&&n+1>s.edgesLimit)return void Ba(Pa,e,t,i);if(r.push(e),Array.isArray(e))for(a=0;a<e.length;a++)Ka(e[a],a,a,r,e,o,s);else {var c=Object.keys(e);for(a=0;a<c.length;a++){var l=c[a];Ka(e[l],l,a,r,e,o,s);}}r.pop();}}function ja(e,t){return e<t?-1:e>t?1:0;}function Ua(e,t,n,r){void 0===r&&(r=$a());var i,o=Ha(e,"",0,[],void 0,0,r)||e;try{i=0===Na.length?JSON.stringify(o,t,n):JSON.stringify(o,Fa(t),n);}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");}finally{for(;0!==Ta.length;){var s=Ta.pop();4===s.length?Object.defineProperty(s[0],s[1],s[3]):s[0][s[1]]=s[2];}}return i;}function Ha(e,t,n,r,i,o,s){var a;if(o+=1,"object"==_typeof(e)&&null!==e){for(a=0;a<r.length;a++)if(r[a]===e)return void Ba(Oa,e,t,i);try{if("function"==typeof e.toJSON)return;}catch(e){return;}if(void 0!==s.depthLimit&&o>s.depthLimit)return void Ba(Pa,e,t,i);if(void 0!==s.edgesLimit&&n+1>s.edgesLimit)return void Ba(Pa,e,t,i);if(r.push(e),Array.isArray(e))for(a=0;a<e.length;a++)Ha(e[a],a,a,r,e,o,s);else {var c={},l=Object.keys(e).sort(ja);for(a=0;a<l.length;a++){var d=l[a];Ha(e[d],d,a,r,e,o,s),c[d]=e[d];}if(void 0===i)return c;Ta.push([i,t,e]),i[t]=c;}r.pop();}}function Fa(e){return e=void 0!==e?e:function(e,t){return t;},function(t,n){if(Na.length>0)for(var r=0;r<Na.length;r++){var i=Na[r];if(i[1]===t&&i[0]===n){n=i[2],Na.splice(r,1);break;}}return e.call(this,t,n);};}var za=de(La),qa=/*#__PURE__*/function(_Error3){function qa(e,t,n){var _this26;_classCallCheck(this,qa);if(!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!t||"string"!=typeof t)throw new Error('"message" must be a non-empty string.');_this26=_callSuper(this,qa,[t]),_this26.code=e,void 0!==n&&(_this26.data=n);return _this26;}_inherits(qa,_Error3);return _createClass(qa,[{key:"serialize",value:function serialize(){var e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data,function(e){if("object"!=_typeof(e)||null===e)return !1;try{var _t99=e;for(;null!==Object.getPrototypeOf(_t99);)_t99=Object.getPrototypeOf(_t99);return Object.getPrototypeOf(e)===_t99;}catch(e){return !1;}}(this.data)&&(e.data.cause=Ia(this.data.cause))),this.stack&&(e.stack=this.stack),e;}},{key:"toString",value:function toString(){return za(this.serialize(),Va,2);}}]);}(/*#__PURE__*/_wrapNativeSuper(Error));function Va(e,t){if("[Circular]"!==t)return t;}var Wa=function Wa(e){return Ga(cs.invalidRequest,e);};function Ga(e,t){var _ref29=function(e){if(e){if("string"==typeof e)return [e];if("object"==_typeof(e)&&!Array.isArray(e)){var _t100=e.message,_n57=e.data;if(_t100&&"string"!=typeof _t100)throw new Error("Must specify string message.");return [_t100!==null&&_t100!==void 0?_t100:void 0,_n57];}}return [];}(t),_ref30=_slicedToArray(_ref29,2),n=_ref30[0],r=_ref30[1];return new qa(e,n!==null&&n!==void 0?n:Ma(e),r);}var Za={};function Ya(){}function Ja(){Ja.init.call(this);}function Xa(e){return void 0===e._maxListeners?Ja.defaultMaxListeners:e._maxListeners;}function Qa(e,t,n,r){var i,o,s;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((o=e._events)?(o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]):(o=e._events=new Ya(),e._eventsCount=0),s){if("function"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),!s.warned&&(i=Xa(e))&&i>0&&s.length>i){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,function(e){"function"==typeof console.warn?console.warn(e):console.log(e);}(a);}}else s=o[t]=n,++e._eventsCount;return e;}function ec(e,t,n){var r=!1;function i(){e.removeListener(t,i),r||(r=!0,n.apply(e,arguments));}return i.listener=n,i;}function tc(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length;}return 0;}function nc(e,t){for(var n=new Array(t);t--;)n[t]=e[t];return n;}Ya.prototype=Object.create(null),Ja.EventEmitter=Ja,Ja.usingDomains=!1,Ja.prototype.domain=void 0,Ja.prototype._events=void 0,Ja.prototype._maxListeners=void 0,Ja.defaultMaxListeners=10,Ja.init=function(){this.domain=null,Ja.usingDomains&&undefined.active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new Ya(),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0;},Ja.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this;},Ja.prototype.getMaxListeners=function(){return Xa(this);},Ja.prototype.emit=function(e){var t,n,r,i,o,s,a,c="error"===e;if(s=this._events)c=c&&null==s.error;else if(!c)return !1;if(a=this.domain,c){if(t=arguments[1],!a){if(t instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l;}return t||(t=new Error('Uncaught, unspecified "error" event')),t.domainEmitter=this,t.domain=a,t.domainThrown=!1,a.emit("error",t),!1;}if(!(n=s[e]))return !1;var d="function"==typeof n;switch(r=arguments.length){case 1:!function(e,t,n){if(t)e.call(n);else for(var r=e.length,i=nc(e,r),o=0;o<r;++o)i[o].call(n);}(n,d,this);break;case 2:!function(e,t,n,r){if(t)e.call(n,r);else for(var i=e.length,o=nc(e,i),s=0;s<i;++s)o[s].call(n,r);}(n,d,this,arguments[1]);break;case 3:!function(e,t,n,r,i){if(t)e.call(n,r,i);else for(var o=e.length,s=nc(e,o),a=0;a<o;++a)s[a].call(n,r,i);}(n,d,this,arguments[1],arguments[2]);break;case 4:!function(e,t,n,r,i,o){if(t)e.call(n,r,i,o);else for(var s=e.length,a=nc(e,s),c=0;c<s;++c)a[c].call(n,r,i,o);}(n,d,this,arguments[1],arguments[2],arguments[3]);break;default:for(i=new Array(r-1),o=1;o<r;o++)i[o-1]=arguments[o];!function(e,t,n,r){if(t)e.apply(n,r);else for(var i=e.length,o=nc(e,i),s=0;s<i;++s)o[s].apply(n,r);}(n,d,this,i);}return !0;},Ja.prototype.addListener=function(e,t){return Qa(this,e,t,!1);},Ja.prototype.on=Ja.prototype.addListener,Ja.prototype.prependListener=function(e,t){return Qa(this,e,t,!0);},Ja.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,ec(this,e,t)),this;},Ja.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,ec(this,e,t)),this;},Ja.prototype.removeListener=function(e,t){var n,r,i,o,s;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener&&n.listener===t)0==--this._eventsCount?this._events=new Ya():(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length;o-->0;)if(n[o]===t||n[o].listener&&n[o].listener===t){s=n[o].listener,i=o;break;}if(i<0)return this;if(1===n.length){if(n[0]=void 0,0==--this._eventsCount)return this._events=new Ya(),this;delete r[e];}else !function(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop();}(n,i);r.removeListener&&this.emit("removeListener",e,s||t);}return this;},Ja.prototype.off=function(e,t){return this.removeListener(e,t);},Ja.prototype.removeAllListeners=function(e){var t,n;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=new Ya(),this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=new Ya():delete n[e]),this;if(0===arguments.length){for(var r,i=Object.keys(n),o=0;o<i.length;++o)"removeListener"!==(r=i[o])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=new Ya(),this._eventsCount=0,this;}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)do{this.removeListener(e,t[t.length-1]);}while(t[0]);return this;},Ja.prototype.listeners=function(e){var t,n,r=this._events;return n=r&&(t=r[e])?"function"==typeof t?[t.listener||t]:function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t;}(t):[],n;},Ja.listenerCount=function(e,t){return "function"==typeof e.listenerCount?e.listenerCount(t):tc.call(e,t);},Ja.prototype.listenerCount=tc,Ja.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[];};var rc=ue(Object.freeze({__proto__:null,EventEmitter:Ja,"default":Ja}));Object.defineProperty(Za,"__esModule",{value:!0});var ic=rc;function oc(e,t,n){try{Reflect.apply(e,t,n);}catch(e){setTimeout(function(){throw e;});}}var sc=/*#__PURE__*/function(_ic$EventEmitter){function sc(){_classCallCheck(this,sc);return _callSuper(this,sc,arguments);}_inherits(sc,_ic$EventEmitter);return _createClass(sc,[{key:"emit",value:function emit(e){var n="error"===e;var r=this._events;if(void 0!==r)n=n&&void 0===r.error;else if(!n)return !1;for(var _len14=arguments.length,t=new Array(_len14>1?_len14-1:0),_key14=1;_key14<_len14;_key14++){t[_key14-1]=arguments[_key14];}if(n){var _t101,_t102;var _e83;if(t.length>0&&(_t101=t,_t102=_slicedToArray(_t101,1),_e83=_t102[0],_t101),_e83 instanceof Error)throw _e83;var _n58=new Error("Unhandled error."+(_e83?" (".concat(_e83.message,")"):""));throw _n58.context=_e83,_n58;}var i=r[e];if(void 0===i)return !1;if("function"==typeof i)oc(i,this,t);else {var _e84=i.length,_n59=function(e){var t=e.length,n=new Array(t);for(var _r46=0;_r46<t;_r46+=1)n[_r46]=e[_r46];return n;}(i);for(var _r47=0;_r47<_e84;_r47+=1)oc(_n59[_r47],this,t);}return !0;}}]);}(ic.EventEmitter);var ac,cc,lc,dc,uc,hc,fc,pc,gc,mc,yc,vc,bc,wc,Ec,Cc,Sc,_c,kc,xc=Za["default"]=sc,Mc=/*#__PURE__*/function(_xc){function e(){var _this27;var _ref31=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_e85=_ref31.notificationHandler;_classCallCheck(this,e);_this27=_callSuper(this,e),os(_assertThisInitialized(_this27),dc),os(_assertThisInitialized(_this27),hc),os(_assertThisInitialized(_this27),pc),os(_assertThisInitialized(_this27),ac,!1),os(_assertThisInitialized(_this27),cc,void 0),os(_assertThisInitialized(_this27),lc,void 0),ss(_assertThisInitialized(_this27),cc,[]),ss(_assertThisInitialized(_this27),lc,_e85);return _this27;}_inherits(e,_xc);return _createClass(e,[{key:"destroy",value:function destroy(){is(this,cc).forEach(function(_e86){"destroy"in _e86&&"function"==typeof _e86.destroy&&_e86.destroy();}),ss(this,cc,[]),ss(this,ac,!0);}},{key:"push",value:function push(_e87){as(this,dc,uc).call(this),is(this,cc).push(_e87);}},{key:"handle",value:function handle(_e88,t){if(as(this,dc,uc).call(this),t&&"function"!=typeof t)throw new Error('"callback" must be a function if provided.');return Array.isArray(_e88)?t?as(this,hc,fc).call(this,_e88,t):as(this,hc,fc).call(this,_e88):t?as(this,pc,gc).call(this,_e88,t):this._promiseHandle(_e88);}},{key:"asMiddleware",value:function asMiddleware(){var _this28=this;return as(this,dc,uc).call(this),(/*#__PURE__*/function(){var _ref32=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee57(t,n,r,i){var o,s,_yield$as$call,_yield$as$call2,_a12,c,l;return _regeneratorRuntime().wrap(function _callee57$(_context62){while(1)switch(_context62.prev=_context62.next){case 0:_context62.prev=0;_context62.next=3;return as(o=e,vc,bc).call(o,t,n,is(_this28,cc));case 3:_yield$as$call=_context62.sent;_yield$as$call2=_slicedToArray(_yield$as$call,3);_a12=_yield$as$call2[0];c=_yield$as$call2[1];l=_yield$as$call2[2];if(!c){_context62.next=14;break;}_context62.next=11;return as(s=e,Cc,Sc).call(s,l);case 11:_context62.t0=i(_a12);_context62.next=15;break;case 14:_context62.t0=r(/*#__PURE__*/function(){var _ref33=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee56(t){var n;return _regeneratorRuntime().wrap(function _callee56$(_context61){while(1)switch(_context61.prev=_context61.next){case 0:_context61.prev=0;_context61.next=3;return as(n=e,Cc,Sc).call(n,l);case 3:_context61.next=8;break;case 5:_context61.prev=5;_context61.t0=_context61["catch"](0);return _context61.abrupt("return",t(_context61.t0));case 8:return _context61.abrupt("return",t());case 9:case"end":return _context61.stop();}},_callee56,null,[[0,5]]);}));return function(_x12){return _ref33.apply(this,arguments);};}());case 15:return _context62.abrupt("return",_context62.t0);case 18:_context62.prev=18;_context62.t1=_context62["catch"](0);return _context62.abrupt("return",i(_context62.t1));case 21:case"end":return _context62.stop();}},_callee57,null,[[0,18]]);}));return function(_x8,_x9,_x10,_x11){return _ref32.apply(this,arguments);};}());}},{key:"_promiseHandle",value:function(){var _promiseHandle2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee58(_e91){var _this29=this;return _regeneratorRuntime().wrap(function _callee58$(_context63){while(1)switch(_context63.prev=_context63.next){case 0:return _context63.abrupt("return",new Promise(function(t,n){as(_this29,pc,gc).call(_this29,_e91,function(_e92,r){_e92&&void 0===r?n(_e92):t(r);})["catch"](n);}));case 1:case"end":return _context63.stop();}},_callee58);}));function _promiseHandle(_x13){return _promiseHandle2.apply(this,arguments);}return _promiseHandle;}()}]);}(xc);ac=new WeakMap(),cc=new WeakMap(),lc=new WeakMap(),dc=new WeakSet(),uc=function uc(){if(is(this,ac))throw new Error("This engine is destroyed and can no longer be used.");},hc=new WeakSet(),fc=/*#__PURE__*/function(){var _ref34=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee59(e,t){var _e93,n;return _regeneratorRuntime().wrap(function _callee59$(_context64){while(1)switch(_context64.prev=_context64.next){case 0:_context64.prev=0;if(!(0===e.length)){_context64.next=4;break;}_e93=[{id:null,jsonrpc:"2.0",error:new qa(cs.invalidRequest,"Request batch must contain plain objects. Received an empty array")}];return _context64.abrupt("return",t?t(null,_e93):_e93);case 4:_context64.next=6;return Promise.all(e.map(this._promiseHandle.bind(this)));case 6:n=_context64.sent.filter(function(e){return void 0!==e;});return _context64.abrupt("return",t?t(null,n):n);case 10:_context64.prev=10;_context64.t0=_context64["catch"](0);if(!t){_context64.next=14;break;}return _context64.abrupt("return",t(_context64.t0));case 14:throw _context64.t0;case 15:case"end":return _context64.stop();}},_callee59,this,[[0,10]]);}));return function fc(_x14,_x15){return _ref34.apply(this,arguments);};}(),pc=new WeakSet(),gc=/*#__PURE__*/function(){var _ref35=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee60(e,t){var n,_n60,_e$id,_n61,r,i,o;return _regeneratorRuntime().wrap(function _callee60$(_context65){while(1)switch(_context65.prev=_context65.next){case 0:if(!(!e||Array.isArray(e)||"object"!=_typeof(e))){_context65.next=3;break;}_n60=new qa(cs.invalidRequest,"Requests must be plain objects. Received: "+_typeof(e),{request:e});return _context65.abrupt("return",t(_n60,{id:null,jsonrpc:"2.0",error:_n60}));case 3:if(!("string"!=typeof e.method)){_context65.next=6;break;}_n61=new qa(cs.invalidRequest,"Must specify a string method. Received: "+_typeof(e.method),{request:e});return _context65.abrupt("return",is(this,lc)&&!Ea(e)?t(null):t(_n61,{id:(_e$id=e.id)!==null&&_e$id!==void 0?_e$id:null,jsonrpc:"2.0",error:_n61}));case 6:if(!(is(this,lc)&&Es(e,wa)&&!Ea(e))){_context65.next=16;break;}_context65.prev=7;_context65.next=10;return is(this,lc).call(this,e);case 10:_context65.next=15;break;case 12:_context65.prev=12;_context65.t0=_context65["catch"](7);return _context65.abrupt("return",t(_context65.t0));case 15:return _context65.abrupt("return",t(null));case 16:r=null;i=_objectSpread2({},e),o={id:i.id,jsonrpc:i.jsonrpc};_context65.prev=18;_context65.next=21;return as(n=Mc,mc,yc).call(n,i,o,is(this,cc));case 21:_context65.next=26;break;case 23:_context65.prev=23;_context65.t1=_context65["catch"](18);r=_context65.t1;case 26:return _context65.abrupt("return",(r&&(delete o.result,o.error||(o.error=Aa(r))),t(r,o)));case 27:case"end":return _context65.stop();}},_callee60,this,[[7,12],[18,23]]);}));return function gc(_x16,_x17){return _ref35.apply(this,arguments);};}(),mc=new WeakSet(),yc=/*#__PURE__*/function(){var _ref36=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee61(e,t,n){var r,i,o,_yield$as$call3,_yield$as$call4,s,a,c;return _regeneratorRuntime().wrap(function _callee61$(_context66){while(1)switch(_context66.prev=_context66.next){case 0:_context66.next=2;return as(r=Mc,vc,bc).call(r,e,t,n);case 2:_yield$as$call3=_context66.sent;_yield$as$call4=_slicedToArray(_yield$as$call3,3);s=_yield$as$call4[0];a=_yield$as$call4[1];c=_yield$as$call4[2];as(i=Mc,_c,kc).call(i,e,t,a);_context66.next=10;return as(o=Mc,Cc,Sc).call(o,c);case 10:if(!s){_context66.next=12;break;}throw s;case 12:case"end":return _context66.stop();}},_callee61);}));return function yc(_x18,_x19,_x20){return _ref36.apply(this,arguments);};}(),vc=new WeakSet(),bc=/*#__PURE__*/function(){var _ref37=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee62(e,t,n){var r,i,o,s,_iterator17,_step17,_yield$as$call5,_yield$as$call6,_a13;return _regeneratorRuntime().wrap(function _callee62$(_context67){while(1)switch(_context67.prev=_context67.next){case 0:i=[];o=null,s=!1;_iterator17=_createForOfIteratorHelper(n);_context67.prev=3;_iterator17.s();case 5:if((_step17=_iterator17.n()).done){_context67.next=17;break;}_a13=_step17.value;_context67.next=9;return as(r=Mc,wc,Ec).call(r,e,t,_a13,i);case 9:_yield$as$call5=_context67.sent;_yield$as$call6=_slicedToArray(_yield$as$call5,2);o=_yield$as$call6[0];s=_yield$as$call6[1];if(!s){_context67.next=15;break;}return _context67.abrupt("break",17);case 15:_context67.next=5;break;case 17:_context67.next=22;break;case 19:_context67.prev=19;_context67.t0=_context67["catch"](3);_iterator17.e(_context67.t0);case 22:_context67.prev=22;_iterator17.f();return _context67.finish(22);case 25:return _context67.abrupt("return",[o,s,i.reverse()]);case 26:case"end":return _context67.stop();}},_callee62,null,[[3,19,22,25]]);}));return function bc(_x21,_x22,_x23){return _ref37.apply(this,arguments);};}(),wc=new WeakSet(),Ec=/*#__PURE__*/function(){var _ref38=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee63(e,t,n,r){return _regeneratorRuntime().wrap(function _callee63$(_context68){while(1)switch(_context68.prev=_context68.next){case 0:return _context68.abrupt("return",new Promise(function(i){var o=function o(e){var n=e||t.error;n&&(t.error=Aa(n)),i([n,!0]);},s=function s(n){t.error?o(t.error):(n&&("function"!=typeof n&&o(new qa(cs.internal,"JsonRpcEngine: \"next\" return handlers must be functions. Received \"".concat(_typeof(n),"\" for request:\n").concat(Ic(e)),{request:e})),r.push(n)),i([null,!1]));};try{n(e,t,s,o);}catch(e){o(e);}}));case 1:case"end":return _context68.stop();}},_callee63);}));return function Ec(_x24,_x25,_x26,_x27){return _ref38.apply(this,arguments);};}(),Cc=new WeakSet(),Sc=/*#__PURE__*/function(){var _ref39=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee64(e){var _iterator18,_step18,_loop;return _regeneratorRuntime().wrap(function _callee64$(_context70){while(1)switch(_context70.prev=_context70.next){case 0:_iterator18=_createForOfIteratorHelper(e);_context70.prev=1;_loop=/*#__PURE__*/_regeneratorRuntime().mark(function _loop(){var t;return _regeneratorRuntime().wrap(function _loop$(_context69){while(1)switch(_context69.prev=_context69.next){case 0:t=_step18.value;_context69.next=3;return new Promise(function(e,n){t(function(t){return t?n(t):e();});});case 3:case"end":return _context69.stop();}},_loop);});_iterator18.s();case 4:if((_step18=_iterator18.n()).done){_context70.next=8;break;}return _context70.delegateYield(_loop(),"t0",6);case 6:_context70.next=4;break;case 8:_context70.next=13;break;case 10:_context70.prev=10;_context70.t1=_context70["catch"](1);_iterator18.e(_context70.t1);case 13:_context70.prev=13;_iterator18.f();return _context70.finish(13);case 16:case"end":return _context70.stop();}},_callee64,null,[[1,10,13,16]]);}));return function Sc(_x28){return _ref39.apply(this,arguments);};}(),_c=new WeakSet(),kc=function kc(e,t,n){if(!us(t,"result")&&!us(t,"error"))throw new qa(cs.internal,"JsonRpcEngine: Response has no error or result for request:\n".concat(Ic(e)),{request:e});if(!n)throw new qa(cs.internal,"JsonRpcEngine: Nothing ended request:\n".concat(Ic(e)),{request:e});},os(Mc,mc),os(Mc,vc),os(Mc,wc),os(Mc,Cc),os(Mc,_c);var Ac=Mc;function Ic(e){return JSON.stringify(e,null,2);}var Rc=Object.freeze(["eth_subscription"]),Lc=function Lc(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:console;return [ns(),Pc(e),Qo(e)];};function Pc(e){return function(t,n,r){"string"==typeof t.method&&t.method||(n.error=Wa({message:"The request 'method' must be a non-empty string.",data:t})),r(function(t){var r=n.error;return r?(e.error("MetaMask - RPC Error: ".concat(r.message),r),t()):t();});};}var Oc=function Oc(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!0;return function(r,i){r||i.error?t(r||i.error):!n||Array.isArray(i)?e(i):e(i.result);};},Tc=function Tc(e){return Boolean(e)&&"string"==typeof e&&e.startsWith("0x");},Nc=function Nc(){};function $c(_x29,_x30){return _$c.apply(this,arguments);}function _$c(){_$c=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee145(e,t){var _t163;return _regeneratorRuntime().wrap(function _callee145$(_context151){while(1)switch(_context151.prev=_context151.next){case 0:_context151.prev=0;_context151.next=3;return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee144(){return _regeneratorRuntime().wrap(function _callee144$(_context150){while(1)switch(_context150.prev=_context150.next){case 0:_context150.t0=Dc(window);_context150.next=3;return Bc(window);case 3:_context150.t1=_context150.sent;return _context150.abrupt("return",{name:_context150.t0,icon:_context150.t1});case 5:case"end":return _context150.stop();}},_callee144);}))();case 3:_t163=_context151.sent;e.handle({jsonrpc:"2.0",id:1,method:"metamask_sendDomainMetadata",params:_t163},Nc);_context151.next=10;break;case 7:_context151.prev=7;_context151.t0=_context151["catch"](0);t.error({message:Xo.errors.sendSiteMetadata(),originalError:_context151.t0});case 10:case"end":return _context151.stop();}},_callee145,null,[[0,7]]);}));return _$c.apply(this,arguments);}function Dc(e){var t=e.document,n=t.querySelector('head > meta[property="og:site_name"]');if(n)return n.content;var r=t.querySelector('head > meta[name="title"]');return r?r.content:t.title&&t.title.length>0?t.title:window.location.hostname;}function Bc(_x31){return _Bc.apply(this,arguments);}function _Bc(){_Bc=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee146(e){var t,n,_i61,_Array$from,_e172;return _regeneratorRuntime().wrap(function _callee146$(_context152){while(1)switch(_context152.prev=_context152.next){case 0:t=e.document,n=t.querySelectorAll('head > link[rel~="icon"]');_i61=0,_Array$from=Array.from(n);case 2:if(!(_i61<_Array$from.length)){_context152.next=14;break;}_e172=_Array$from[_i61];_context152.t0=_e172;if(!_context152.t0){_context152.next=9;break;}_context152.next=8;return Kc(_e172.href);case 8:_context152.t0=_context152.sent;case 9:if(!_context152.t0){_context152.next=11;break;}return _context152.abrupt("return",_e172.href);case 11:_i61++;_context152.next=2;break;case 14:return _context152.abrupt("return",null);case 15:case"end":return _context152.stop();}},_callee146);}));return _Bc.apply(this,arguments);}function Kc(_x32){return _Kc.apply(this,arguments);}function _Kc(){_Kc=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee147(e){return _regeneratorRuntime().wrap(function _callee147$(_context153){while(1)switch(_context153.prev=_context153.next){case 0:return _context153.abrupt("return",new Promise(function(t,n){try{var _n103=document.createElement("img");_n103.onload=function(){return t(!0);},_n103.onerror=function(){return t(!1);},_n103.src=e;}catch(e){n(e);}}));case 1:case"end":return _context153.stop();}},_callee147);}));return _Kc.apply(this,arguments);}var jc=function jc(e,t,n){if(!t.has(e))throw TypeError("Cannot "+n);},Uc=function Uc(e,t,n){return jc(e,t,"read from private field"),n?n.call(e):t.get(e);},Hc=function Hc(e,t,n){if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n);},Fc=function Fc(e,t,n,r){return jc(e,t,"write to private field"),t.set(e,n),n;};function zc(e,t,n){try{Reflect.apply(e,t,n);}catch(e){setTimeout(function(){throw e;});}}var qc=/*#__PURE__*/function(_Ja){function qc(){_classCallCheck(this,qc);return _callSuper(this,qc,arguments);}_inherits(qc,_Ja);return _createClass(qc,[{key:"emit",value:function emit(e){var n="error"===e;var r=this._events;if(void 0!==r)n=n&&void 0===r.error;else if(!n)return !1;for(var _len15=arguments.length,t=new Array(_len15>1?_len15-1:0),_key15=1;_key15<_len15;_key15++){t[_key15-1]=arguments[_key15];}if(n){var _t103,_t104;var _e94;if(t.length>0&&(_t103=t,_t104=_slicedToArray(_t103,1),_e94=_t104[0],_t103),_e94 instanceof Error)throw _e94;var _n62=new Error("Unhandled error."+(_e94?" (".concat(_e94.message,")"):""));throw _n62.context=_e94,_n62;}var i=r[e];if(void 0===i)return !1;if("function"==typeof i)zc(i,this,t);else {var _e95=i.length,_n63=function(e){var t=e.length,n=new Array(t);for(var _r48=0;_r48<t;_r48+=1)n[_r48]=e[_r48];return n;}(i);for(var _r49=0;_r49<_e95;_r49+=1)zc(_n63[_r49],this,t);}return !0;}}]);}(Ja);var Vc,Wc,Gc=function e(t,n){if(t===n)return !0;if(t&&n&&"object"==_typeof(t)&&"object"==_typeof(n)){if(t.constructor!==n.constructor)return !1;var r,i,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return !1;for(i=r;0!=i--;)if(!e(t[i],n[i]))return !1;return !0;}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return !1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return !1;for(i=r;0!=i--;){var s=o[i];if(!e(t[s],n[s]))return !1;}return !0;}return t!=t&&n!=n;},Zc=de(Gc),Yc=/*#__PURE__*/function(_qc){function e(){var _this30;var _ref40=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref40$logger=_ref40.logger,t=_ref40$logger===void 0?console:_ref40$logger,_ref40$maxEventListen=_ref40.maxEventListeners,n=_ref40$maxEventListen===void 0?100:_ref40$maxEventListen,_ref40$rpcMiddleware=_ref40.rpcMiddleware,r=_ref40$rpcMiddleware===void 0?[]:_ref40$rpcMiddleware;_classCallCheck(this,e);_this30=_callSuper(this,e),Hc(_assertThisInitialized(_this30),Vc,void 0),Hc(_assertThisInitialized(_this30),Wc,void 0),_this30._log=t,_this30.setMaxListeners(n),_this30._state=_objectSpread2({},e._defaultState),Fc(_assertThisInitialized(_this30),Wc,null),Fc(_assertThisInitialized(_this30),Vc,null),_this30._handleAccountsChanged=_this30._handleAccountsChanged.bind(_assertThisInitialized(_this30)),_this30._handleConnect=_this30._handleConnect.bind(_assertThisInitialized(_this30)),_this30._handleChainChanged=_this30._handleChainChanged.bind(_assertThisInitialized(_this30)),_this30._handleDisconnect=_this30._handleDisconnect.bind(_assertThisInitialized(_this30)),_this30._handleUnlockStateChanged=_this30._handleUnlockStateChanged.bind(_assertThisInitialized(_this30)),_this30._rpcRequest=_this30._rpcRequest.bind(_assertThisInitialized(_this30)),_this30.request=_this30.request.bind(_assertThisInitialized(_this30));var i=new Ac();r.forEach(function(_e96){return i.push(_e96);}),_this30._rpcEngine=i;return _this30;}_inherits(e,_qc);return _createClass(e,[{key:"chainId",get:function get(){return Uc(this,Vc);}},{key:"selectedAddress",get:function get(){return Uc(this,Wc);}},{key:"isConnected",value:function isConnected(){return this._state.isConnected;}},{key:"request",value:function(){var _request=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee65(_e97){var _this31=this;var t,n,r;return _regeneratorRuntime().wrap(function _callee65$(_context71){while(1)switch(_context71.prev=_context71.next){case 0:if(!(!_e97||"object"!=_typeof(_e97)||Array.isArray(_e97))){_context71.next=2;break;}throw Wa({message:Xo.errors.invalidRequestArgs(),data:_e97});case 2:t=_e97.method,n=_e97.params;if(!("string"!=typeof t||0===t.length)){_context71.next=5;break;}throw Wa({message:Xo.errors.invalidRequestMethod(),data:_e97});case 5:if(!(void 0!==n&&!Array.isArray(n)&&("object"!=_typeof(n)||null===n))){_context71.next=7;break;}throw Wa({message:Xo.errors.invalidRequestParams(),data:_e97});case 7:r=null==n?{method:t}:{method:t,params:n};return _context71.abrupt("return",new Promise(function(_e98,t){_this31._rpcRequest(r,Oc(_e98,t));}));case 9:case"end":return _context71.stop();}},_callee65);}));function request(_x33){return _request.apply(this,arguments);}return request;}()},{key:"_initializeState",value:function _initializeState(_e99){if(this._state.initialized)throw new Error("Provider already initialized.");if(_e99){var _t105=_e99.accounts,n=_e99.chainId,_r50=_e99.isUnlocked,_i40=_e99.networkVersion;this._handleConnect(n),this._handleChainChanged({chainId:n,networkVersion:_i40}),this._handleUnlockStateChanged({accounts:_t105,isUnlocked:_r50}),this._handleAccountsChanged(_t105);}this._state.initialized=!0,this.emit("_initialized");}},{key:"_rpcRequest",value:function _rpcRequest(_e100,t){var _this32=this;var n=t;return Array.isArray(_e100)||(_e100.jsonrpc||(_e100.jsonrpc="2.0"),"eth_accounts"!==_e100.method&&"eth_requestAccounts"!==_e100.method||(n=function n(_n64,r){var _r$result;_this32._handleAccountsChanged((_r$result=r.result)!==null&&_r$result!==void 0?_r$result:[],"eth_accounts"===_e100.method),t(_n64,r);})),this._rpcEngine.handle(_e100,n);}},{key:"_handleConnect",value:function _handleConnect(_e101){this._state.isConnected||(this._state.isConnected=!0,this.emit("connect",{chainId:_e101}),this._log.debug(Xo.info.connected(_e101)));}},{key:"_handleDisconnect",value:function _handleDisconnect(_e102,t){if(this._state.isConnected||!this._state.isPermanentlyDisconnected&&!_e102){var n;this._state.isConnected=!1,_e102?(n=new qa(1013,t!==null&&t!==void 0?t:Xo.errors.disconnected()),this._log.debug(n)):(n=new qa(1011,t!==null&&t!==void 0?t:Xo.errors.permanentlyDisconnected()),this._log.error(n),Fc(this,Vc,null),this._state.accounts=null,Fc(this,Wc,null),this._state.isUnlocked=!1,this._state.isPermanentlyDisconnected=!0),this.emit("disconnect",n);}}},{key:"_handleChainChanged",value:function _handleChainChanged(){var _ref41=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_e103=_ref41.chainId;Tc(_e103)?(this._handleConnect(_e103),_e103!==Uc(this,Vc)&&(Fc(this,Vc,_e103),this._state.initialized&&this.emit("chainChanged",Uc(this,Vc)))):this._log.error(Xo.errors.invalidNetworkParams(),{chainId:_e103});}},{key:"_handleAccountsChanged",value:function _handleAccountsChanged(_e104){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:!1;var n=_e104;Array.isArray(_e104)||(this._log.error("MetaMask: Received invalid accounts parameter. Please report this bug.",_e104),n=[]);var _iterator19=_createForOfIteratorHelper(_e104),_step19;try{for(_iterator19.s();!(_step19=_iterator19.n()).done;){var _t106=_step19.value;if("string"!=typeof _t106){this._log.error("MetaMask: Received non-string account. Please report this bug.",_e104),n=[];break;}}}catch(err){_iterator19.e(err);}finally{_iterator19.f();}if(!Zc(this._state.accounts,n)&&(t&&null!==this._state.accounts&&this._log.error("MetaMask: 'eth_accounts' unexpectedly updated accounts. Please report this bug.",n),this._state.accounts=n,Uc(this,Wc)!==n[0]&&Fc(this,Wc,n[0]||null),this._state.initialized)){var _e105=_toConsumableArray(n);this.emit("accountsChanged",_e105);}}},{key:"_handleUnlockStateChanged",value:function _handleUnlockStateChanged(){var _ref42=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_e106=_ref42.accounts,t=_ref42.isUnlocked;"boolean"==typeof t?t!==this._state.isUnlocked&&(this._state.isUnlocked=t,this._handleAccountsChanged(_e106!==null&&_e106!==void 0?_e106:[])):this._log.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.");}}]);}(qc);Vc=new WeakMap(),Wc=new WeakMap(),Yc._defaultState={accounts:null,isConnected:!1,isUnlocked:!1,initialized:!1,isPermanentlyDisconnected:!1};var Jc,Xc,Qc=Yc,el={exports:{}};function tl(){return Xc?Jc:(Xc=1,Jc=rc.EventEmitter);}var nl,rl=ue(ce);nl="function"==typeof Object.create?function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});}:function(e,t){e.super_=t;var n=function n(){};n.prototype=t.prototype,e.prototype=new n(),e.prototype.constructor=e;};var il=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n;},ol=/%[sdj%]/g;function sl(e){if(!Cl(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(ul(arguments[n]));return t.join(" ");}n=1;for(var r=arguments,i=r.length,o=String(e).replace(ol,function(e){if("%%"===e)return "%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++]);}catch(e){return "[Circular]";}default:return e;}}),s=r[n];n<i;s=r[++n])bl(s)||!xl(s)?o+=" "+s:o+=" "+ul(s);return o;}function al(e,t){if(_l(c.process))return function(){return al(e,t).apply(this,arguments);};if(!0===oa.noDeprecation)return e;var n=!1;return function(){if(!n){if(oa.throwDeprecation)throw new Error(t);oa.traceDeprecation?console.trace(t):console.error(t),n=!0;}return e.apply(this,arguments);};}var cl,ll={};function dl(e){if(_l(cl)&&(cl=oa.env.NODE_DEBUG||""),e=e.toUpperCase(),!ll[e])if(new RegExp("\\b"+e+"\\b","i").test(cl)){ll[e]=function(){var t=sl.apply(null,arguments);console.error("%s %d: %s",e,0,t);};}else ll[e]=function(){};return ll[e];}function ul(e,t){var n={seen:[],stylize:fl};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),vl(t)?n.showHidden=t:t&&$l(n,t),_l(n.showHidden)&&(n.showHidden=!1),_l(n.depth)&&(n.depth=2),_l(n.colors)&&(n.colors=!1),_l(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=hl),pl(n,e,n.depth);}function hl(e,t){var n=ul.styles[t];return n?"["+ul.colors[n][0]+"m"+e+"["+ul.colors[n][1]+"m":e;}function fl(e,t){return e;}function pl(e,t,n){if(e.customInspect&&t&&Il(t.inspect)&&t.inspect!==ul&&(!t.constructor||t.constructor.prototype!==t)){var r=t.inspect(n,e);return Cl(r)||(r=pl(e,r,n)),r;}var i=function(e,t){if(_l(t))return e.stylize("undefined","undefined");if(Cl(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string");}if(El(t))return e.stylize(""+t,"number");if(vl(t))return e.stylize(""+t,"boolean");if(bl(t))return e.stylize("null","null");}(e,t);if(i)return i;var o=Object.keys(t),s=function(e){var t={};return e.forEach(function(e,n){t[e]=!0;}),t;}(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(t)),Al(t)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return gl(t);if(0===o.length){if(Il(t)){var a=t.name?": "+t.name:"";return e.stylize("[Function"+a+"]","special");}if(kl(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(Ml(t))return e.stylize(Date.prototype.toString.call(t),"date");if(Al(t))return gl(t);}var c,l="",d=!1,u=["{","}"];(yl(t)&&(d=!0,u=["[","]"]),Il(t))&&(l=" [Function"+(t.name?": "+t.name:"")+"]");return kl(t)&&(l=" "+RegExp.prototype.toString.call(t)),Ml(t)&&(l=" "+Date.prototype.toUTCString.call(t)),Al(t)&&(l=" "+gl(t)),0!==o.length||d&&0!=t.length?n<0?kl(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),c=d?function(e,t,n,r,i){for(var o=[],s=0,a=t.length;s<a;++s)Dl(t,String(s))?o.push(ml(e,t,n,r,String(s),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(ml(e,t,n,r,i,!0));}),o;}(e,t,n,s,o):o.map(function(r){return ml(e,t,n,s,r,d);}),e.seen.pop(),function(e,t,n){var r=e.reduce(function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1;},0);if(r>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1];}(c,l,u)):u[0]+l+u[1];}function gl(e){return "["+Error.prototype.toString.call(e)+"]";}function ml(e,t,n,r,i,o){var s,a,c;if((c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?a=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(a=e.stylize("[Setter]","special")),Dl(r,i)||(s="["+i+"]"),a||(e.seen.indexOf(c.value)<0?(a=bl(n)?pl(e,c.value,null):pl(e,c.value,n-1)).indexOf("\n")>-1&&(a=o?a.split("\n").map(function(e){return "  "+e;}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return "   "+e;}).join("\n")):a=e.stylize("[Circular]","special")),_l(s)){if(o&&i.match(/^\d+$/))return a;(s=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"));}return s+": "+a;}function yl(e){return Array.isArray(e);}function vl(e){return "boolean"==typeof e;}function bl(e){return null===e;}function wl(e){return null==e;}function El(e){return "number"==typeof e;}function Cl(e){return "string"==typeof e;}function Sl(e){return "symbol"==_typeof(e);}function _l(e){return void 0===e;}function kl(e){return xl(e)&&"[object RegExp]"===Pl(e);}function xl(e){return "object"==_typeof(e)&&null!==e;}function Ml(e){return xl(e)&&"[object Date]"===Pl(e);}function Al(e){return xl(e)&&("[object Error]"===Pl(e)||e instanceof Error);}function Il(e){return "function"==typeof e;}function Rl(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==_typeof(e)||void 0===e;}function Ll(e){return S.isBuffer(e);}function Pl(e){return Object.prototype.toString.call(e);}function Ol(e){return e<10?"0"+e.toString(10):e.toString(10);}ul.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},ul.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"};var Tl=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Nl(){console.log("%s - %s",function(){var e=new Date(),t=[Ol(e.getHours()),Ol(e.getMinutes()),Ol(e.getSeconds())].join(":");return [e.getDate(),Tl[e.getMonth()],t].join(" ");}(),sl.apply(null,arguments));}function $l(e,t){if(!t||!xl(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e;}function Dl(e,t){return Object.prototype.hasOwnProperty.call(e,t);}var Bl="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function Kl(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(Bl&&e[Bl]){var t;if("function"!=typeof(t=e[Bl]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,Bl,{value:t,enumerable:!1,writable:!1,configurable:!0}),t;}function t(){for(var t,n,r=new Promise(function(e,r){t=e,n=r;}),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push(function(e,r){e?n(e):t(r);});try{e.apply(this,i);}catch(e){n(e);}return r;}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),Bl&&Object.defineProperty(t,Bl,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,il(e));}function jl(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n;}return t(e);}function Ul(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function t(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);var r=t.pop();if("function"!=typeof r)throw new TypeError("The last argument must be of type Function");var i=this,o=function o(){return r.apply(i,arguments);};e.apply(this,t).then(function(e){oa.nextTick(o.bind(null,null,e));},function(e){oa.nextTick(jl.bind(null,e,o));});}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),Object.defineProperties(t,il(e)),t;}Kl.custom=Bl;var Hl,Fl,zl,ql,Vl={inherits:nl,_extend:$l,log:Nl,isBuffer:Ll,isPrimitive:Rl,isFunction:Il,isError:Al,isDate:Ml,isObject:xl,isRegExp:kl,isUndefined:_l,isSymbol:Sl,isString:Cl,isNumber:El,isNullOrUndefined:wl,isNull:bl,isBoolean:vl,isArray:yl,inspect:ul,deprecate:al,format:sl,debuglog:dl,promisify:Kl,callbackify:Ul},Wl=ue(Object.freeze({__proto__:null,_extend:$l,callbackify:Ul,debuglog:dl,"default":Vl,deprecate:al,format:sl,inherits:nl,inspect:ul,isArray:yl,isBoolean:vl,isBuffer:Ll,isDate:Ml,isError:Al,isFunction:Il,isNull:bl,isNullOrUndefined:wl,isNumber:El,isObject:xl,isPrimitive:Rl,isRegExp:kl,isString:Cl,isSymbol:Sl,isUndefined:_l,log:Nl,promisify:Kl}));function Gl(){if(Fl)return Hl;function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable;})),n.push.apply(n,r);}return n;}function t(t){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?e(Object(i),!0).forEach(function(e){n(t,e,i[e]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e));});}return t;}function n(e,t,n){return (t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;}function r(e,t,n){return t&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i(r.key),r);}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;}function i(e){var t=function(e,t){if("object"!=_typeof(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string"===t?String:Number)(e);}(e,"string");return "symbol"==_typeof(t)?t:String(t);}Fl=1;var o=rl.Buffer,s=Wl.inspect,a=s&&s.custom||"inspect";return Hl=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}(this,e),this.head=null,this.tail=null,this.length=0;}return r(e,[{key:"push",value:function value(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length;}},{key:"unshift",value:function value(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length;}},{key:"shift",value:function value(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e;}}},{key:"clear",value:function value(){this.head=this.tail=null,this.length=0;}},{key:"join",value:function value(e){if(0===this.length)return "";for(var t=this.head,n=""+t.data;t=t.next;)n+=e+t.data;return n;}},{key:"concat",value:function value(e){if(0===this.length)return o.alloc(0);for(var t,n,r,i=o.allocUnsafe(e>>>0),s=this.head,a=0;s;)t=s.data,n=i,r=a,o.prototype.copy.call(t,n,r),a+=s.data.length,s=s.next;return i;}},{key:"consume",value:function value(e,t){var n;return e<this.head.data.length?(n=this.head.data.slice(0,e),this.head.data=this.head.data.slice(e)):n=e===this.head.data.length?this.shift():t?this._getString(e):this._getBuffer(e),n;}},{key:"first",value:function value(){return this.head.data;}},{key:"_getString",value:function value(e){var t=this.head,n=1,r=t.data;for(e-=r.length;t=t.next;){var i=t.data,o=e>i.length?i.length:e;if(o===i.length?r+=i:r+=i.slice(0,e),0===(e-=o)){o===i.length?(++n,t.next?this.head=t.next:this.head=this.tail=null):(this.head=t,t.data=i.slice(o));break;}++n;}return this.length-=n,r;}},{key:"_getBuffer",value:function value(e){var t=o.allocUnsafe(e),n=this.head,r=1;for(n.data.copy(t),e-=n.data.length;n=n.next;){var i=n.data,s=e>i.length?i.length:e;if(i.copy(t,t.length-e,0,s),0===(e-=s)){s===i.length?(++r,n.next?this.head=n.next:this.head=this.tail=null):(this.head=n,n.data=i.slice(s));break;}++r;}return this.length-=r,t;}},{key:a,value:function value(e,n){return s(this,t(t({},n),{},{depth:0,customInspect:!1}));}}]),e;}(),Hl;}function Zl(){if(ql)return zl;function e(e,r){n(e,r),t(e);}function t(e){e._writableState&&!e._writableState.emitClose||e._readableState&&!e._readableState.emitClose||e.emit("close");}function n(e,t){e.emit("error",t);}return ql=1,zl={destroy:function destroy(r,i){var o=this,s=this._readableState&&this._readableState.destroyed,a=this._writableState&&this._writableState.destroyed;return s||a?(i?i(r):r&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,oa.nextTick(n,this,r)):oa.nextTick(n,this,r)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(r||null,function(n){!i&&n?o._writableState?o._writableState.errorEmitted?oa.nextTick(t,o):(o._writableState.errorEmitted=!0,oa.nextTick(e,o,n)):oa.nextTick(e,o,n):i?(oa.nextTick(t,o),i(n)):oa.nextTick(t,o);}),this);},undestroy:function undestroy(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1);},errorOrDestroy:function errorOrDestroy(e,t){var n=e._readableState,r=e._writableState;n&&n.autoDestroy||r&&r.autoDestroy?e.destroy(t):e.emit("error",t);}},zl;}var Yl={};var Jl,Xl,Ql={};function ed(e,t,n){n||(n=Error);var r=function(e){var n,r;function i(n,r,i){return e.call(this,function(e,n,r){return "string"==typeof t?t:t(e,n,r);}(n,r,i))||this;}return r=e,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,i;}(n);r.prototype.name=n.name,r.prototype.code=e,Ql[e]=r;}function td(e,t){if(Array.isArray(e)){var n=e.length;return e=e.map(function(e){return String(e);}),n>2?"one of ".concat(t," ").concat(e.slice(0,n-1).join(", "),", or ")+e[n-1]:2===n?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0]);}return "of ".concat(t," ").concat(String(e));}function nd(){if(Xl)return Jl;Xl=1;var e=Yl.codes.ERR_INVALID_OPT_VALUE;return Jl={getHighWaterMark:function getHighWaterMark(t,n,r,i){var o=function(e,t,n){return null!=e.highWaterMark?e.highWaterMark:t?e[n]:null;}(n,i,r);if(null!=o){if(!isFinite(o)||Math.floor(o)!==o||o<0)throw new e(i?r:"highWaterMark",o);return Math.floor(o);}return t.objectMode?16:16384;}};}ed("ERR_INVALID_OPT_VALUE",function(e,t){return 'The value "'+t+'" is invalid for option "'+e+'"';},TypeError),ed("ERR_INVALID_ARG_TYPE",function(e,t,n){var r,i,o;if("string"==typeof t&&(i="not ",t.substr(0,i.length)===i)?(r="must not be",t=t.replace(/^not /,"")):r="must be",function(e,t,n){return (void 0===n||n>e.length)&&(n=e.length),e.substring(n-t.length,n)===t;}(e," argument"))o="The ".concat(e," ").concat(r," ").concat(td(t,"type"));else {var s=function(e,t,n){return "number"!=typeof n&&(n=0),!(n+t.length>e.length)&&-1!==e.indexOf(t,n);}(e,".")?"property":"argument";o='The "'.concat(e,'" ').concat(s," ").concat(r," ").concat(td(t,"type"));}return o+=". Received type ".concat(_typeof(n));},TypeError),ed("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),ed("ERR_METHOD_NOT_IMPLEMENTED",function(e){return "The "+e+" method is not implemented";}),ed("ERR_STREAM_PREMATURE_CLOSE","Premature close"),ed("ERR_STREAM_DESTROYED",function(e){return "Cannot call "+e+" after a stream was destroyed";}),ed("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),ed("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),ed("ERR_STREAM_WRITE_AFTER_END","write after end"),ed("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),ed("ERR_UNKNOWN_ENCODING",function(e){return "Unknown encoding: "+e;},TypeError),ed("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),Yl.codes=Ql;var rd,id,od,sd,ad,cd,ld="function"==typeof Object.create?function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});}:function(e,t){e.super_=t;var n=function n(){};n.prototype=t.prototype,e.prototype=new n(),e.prototype.constructor=e;},dd=ue(Object.freeze({__proto__:null,"default":ld}));function ud(){if(id)return rd;function e(e){try{if(!le.localStorage)return !1;}catch(e){return !1;}var t=le.localStorage[e];return null!=t&&"true"===String(t).toLowerCase();}return id=1,rd=function rd(t,n){if(e("noDeprecation"))return t;var r=!1;return function(){if(!r){if(e("throwDeprecation"))throw new Error(n);e("traceDeprecation")?console.trace(n):console.warn(n),r=!0;}return t.apply(this,arguments);};},rd;}function hd(){if(sd)return od;function e(e){var t=this;this.next=null,this.entry=null,this.finish=function(){!function(e,t,n){var r=e.entry;e.entry=null;for(;r;){var i=r.callback;t.pendingcb--,i(n),r=r.next;}t.corkedRequestsFree.next=e;}(t,e);};}var t;sd=1,od=E,E.WritableState=w;var n={deprecate:ud()},r=tl(),i=rl.Buffer,o=(void 0!==le?le:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){};var s,a=Zl(),c=nd().getHighWaterMark,l=Yl.codes,d=l.ERR_INVALID_ARG_TYPE,u=l.ERR_METHOD_NOT_IMPLEMENTED,h=l.ERR_MULTIPLE_CALLBACK,f=l.ERR_STREAM_CANNOT_PIPE,p=l.ERR_STREAM_DESTROYED,g=l.ERR_STREAM_NULL_VALUES,m=l.ERR_STREAM_WRITE_AFTER_END,y=l.ERR_UNKNOWN_ENCODING,v=a.errorOrDestroy;function b(){}function w(n,r,i){t=t||fd(),n=n||{},"boolean"!=typeof i&&(i=r instanceof t),this.objectMode=!!n.objectMode,i&&(this.objectMode=this.objectMode||!!n.writableObjectMode),this.highWaterMark=c(this,n,"writableHighWaterMark",i),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var o=!1===n.decodeStrings;this.decodeStrings=!o,this.defaultEncoding=n.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var n=e._writableState,r=n.sync,i=n.writecb;if("function"!=typeof i)throw new h();if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0;}(n),t)!function(e,t,n,r,i){--t.pendingcb,n?(oa.nextTick(i,r),oa.nextTick(M,e,t),e._writableState.errorEmitted=!0,v(e,r)):(i(r),e._writableState.errorEmitted=!0,v(e,r),M(e,t));}(e,n,r,t,i);else {var o=k(n)||e.destroyed;o||n.corked||n.bufferProcessing||!n.bufferedRequest||_(e,n),r?oa.nextTick(S,e,n,o,i):S(e,n,o,i);}}(r,e);},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==n.emitClose,this.autoDestroy=!!n.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new e(this);}function E(e){var n=this instanceof(t=t||fd());if(!n&&!s.call(E,this))return new E(e);this._writableState=new w(e,this,n),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e["final"]&&(this._final=e["final"])),r.call(this);}function C(e,t,n,r,i,o,s){t.writelen=r,t.writecb=s,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new p("write")):n?e._writev(i,t.onwrite):e._write(i,o,t.onwrite),t.sync=!1;}function S(e,t,n,r){n||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"));}(e,t),t.pendingcb--,r(),M(e,t);}function _(t,n){n.bufferProcessing=!0;var r=n.bufferedRequest;if(t._writev&&r&&r.next){var i=n.bufferedRequestCount,o=new Array(i),s=n.corkedRequestsFree;s.entry=r;for(var a=0,c=!0;r;)o[a]=r,r.isBuf||(c=!1),r=r.next,a+=1;o.allBuffers=c,C(t,n,!0,n.length,o,"",s.finish),n.pendingcb++,n.lastBufferedRequest=null,s.next?(n.corkedRequestsFree=s.next,s.next=null):n.corkedRequestsFree=new e(n),n.bufferedRequestCount=0;}else {for(;r;){var l=r.chunk,d=r.encoding,u=r.callback;if(C(t,n,!1,n.objectMode?1:l.length,l,d,u),r=r.next,n.bufferedRequestCount--,n.writing)break;}null===r&&(n.lastBufferedRequest=null);}n.bufferedRequest=r,n.bufferProcessing=!1;}function k(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing;}function x(e,t){e._final(function(n){t.pendingcb--,n&&v(e,n),t.prefinished=!0,e.emit("prefinish"),M(e,t);});}function M(e,t){var n=k(t);if(n&&(function(e,t){t.prefinished||t.finalCalled||("function"!=typeof e._final||t.destroyed?(t.prefinished=!0,e.emit("prefinish")):(t.pendingcb++,t.finalCalled=!0,oa.nextTick(x,e,t)));}(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"),t.autoDestroy))){var r=e._readableState;(!r||r.autoDestroy&&r.endEmitted)&&e.destroy();}return n;}return dd(E,r),w.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t;},function(){try{Object.defineProperty(w.prototype,"buffer",{get:n.deprecate(function(){return this.getBuffer();},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")});}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(s=Function.prototype[Symbol.hasInstance],Object.defineProperty(E,Symbol.hasInstance,{value:function value(e){return !!s.call(this,e)||this===E&&e&&e._writableState instanceof w;}})):s=function s(e){return e instanceof this;},E.prototype.pipe=function(){v(this,new f());},E.prototype.write=function(e,t,n){var r,s=this._writableState,a=!1,c=!s.objectMode&&(r=e,i.isBuffer(r)||r instanceof o);return c&&!i.isBuffer(e)&&(e=function(e){return i.from(e);}(e)),"function"==typeof t&&(n=t,t=null),c?t="buffer":t||(t=s.defaultEncoding),"function"!=typeof n&&(n=b),s.ending?function(e,t){var n=new m();v(e,n),oa.nextTick(t,n);}(this,n):(c||function(e,t,n,r){var i;return null===n?i=new g():"string"==typeof n||t.objectMode||(i=new d("chunk",["string","Buffer"],n)),!i||(v(e,i),oa.nextTick(r,i),!1);}(this,s,e,n))&&(s.pendingcb++,a=function(e,t,n,r,o,s){if(!n){var a=function(e,t,n){e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=i.from(t,n));return t;}(t,r,o);r!==a&&(n=!0,o="buffer",r=a);}var c=t.objectMode?1:r.length;t.length+=c;var l=t.length<t.highWaterMark;l||(t.needDrain=!0);if(t.writing||t.corked){var d=t.lastBufferedRequest;t.lastBufferedRequest={chunk:r,encoding:o,isBuf:n,callback:s,next:null},d?d.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1;}else C(e,t,!1,c,r,o,s);return l;}(this,s,c,e,t,n)),a;},E.prototype.cork=function(){this._writableState.corked++;},E.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.bufferProcessing||!e.bufferedRequest||_(this,e));},E.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new y(e);return this._writableState.defaultEncoding=e,this;},Object.defineProperty(E.prototype,"writableBuffer",{enumerable:!1,get:function get(){return this._writableState&&this._writableState.getBuffer();}}),Object.defineProperty(E.prototype,"writableHighWaterMark",{enumerable:!1,get:function get(){return this._writableState.highWaterMark;}}),E.prototype._write=function(e,t,n){n(new u("_write()"));},E.prototype._writev=null,E.prototype.end=function(e,t,n){var r=this._writableState;return "function"==typeof e?(n=e,e=null,t=null):"function"==typeof t&&(n=t,t=null),null!=e&&this.write(e,t),r.corked&&(r.corked=1,this.uncork()),r.ending||function(e,t,n){t.ending=!0,M(e,t),n&&(t.finished?oa.nextTick(n):e.once("finish",n));t.ended=!0,e.writable=!1;}(this,r,n),this;},Object.defineProperty(E.prototype,"writableLength",{enumerable:!1,get:function get(){return this._writableState.length;}}),Object.defineProperty(E.prototype,"destroyed",{enumerable:!1,get:function get(){return void 0!==this._writableState&&this._writableState.destroyed;},set:function set(e){this._writableState&&(this._writableState.destroyed=e);}}),E.prototype.destroy=a.destroy,E.prototype._undestroy=a.undestroy,E.prototype._destroy=function(e,t){t(e);},od;}function fd(){if(cd)return ad;cd=1;var e=Object.keys||function(e){var t=[];for(var n in e)t.push(n);return t;};ad=s;var t=Rd(),n=hd();dd(s,t);for(var r=e(n.prototype),i=0;i<r.length;i++){var o=r[i];s.prototype[o]||(s.prototype[o]=n.prototype[o]);}function s(e){if(!(this instanceof s))return new s(e);t.call(this,e),n.call(this,e),this.allowHalfOpen=!0,e&&(!1===e.readable&&(this.readable=!1),!1===e.writable&&(this.writable=!1),!1===e.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",a)));}function a(){this._writableState.ended||oa.nextTick(c,this);}function c(e){e.end();}return Object.defineProperty(s.prototype,"writableHighWaterMark",{enumerable:!1,get:function get(){return this._writableState.highWaterMark;}}),Object.defineProperty(s.prototype,"writableBuffer",{enumerable:!1,get:function get(){return this._writableState&&this._writableState.getBuffer();}}),Object.defineProperty(s.prototype,"writableLength",{enumerable:!1,get:function get(){return this._writableState.length;}}),Object.defineProperty(s.prototype,"destroyed",{enumerable:!1,get:function get(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed;},set:function set(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e);}}),ad;}var pd=S.isEncoding||function(e){switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return !0;default:return !1;}};function gd(e){switch(this.encoding=(e||"utf8").toLowerCase().replace(/[-_]/,""),function(e){if(e&&!pd(e))throw new Error("Unknown encoding: "+e);}(e),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=yd;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=vd;break;default:return void(this.write=md);}this.charBuffer=new S(6),this.charReceived=0,this.charLength=0;}function md(e){return e.toString(this.encoding);}function yd(e){this.charReceived=e.length%2,this.charLength=this.charReceived?2:0;}function vd(e){this.charReceived=e.length%3,this.charLength=this.charReceived?3:0;}gd.prototype.write=function(e){for(var t="";this.charLength;){var n=e.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:e.length;if(e.copy(this.charBuffer,this.charReceived,0,n),this.charReceived+=n,this.charReceived<this.charLength)return "";if(e=e.slice(n,e.length),!((i=(t=this.charBuffer.slice(0,this.charLength).toString(this.encoding)).charCodeAt(t.length-1))>=55296&&i<=56319)){if(this.charReceived=this.charLength=0,0===e.length)return t;break;}this.charLength+=this.surrogateSize,t="";}this.detectIncompleteChar(e);var r=e.length;this.charLength&&(e.copy(this.charBuffer,0,e.length-this.charReceived,r),r-=this.charReceived);var i;r=(t+=e.toString(this.encoding,0,r)).length-1;if((i=t.charCodeAt(r))>=55296&&i<=56319){var o=this.surrogateSize;return this.charLength+=o,this.charReceived+=o,this.charBuffer.copy(this.charBuffer,o,0,o),e.copy(this.charBuffer,0,0,o),t.substring(0,r);}return t;},gd.prototype.detectIncompleteChar=function(e){for(var t=e.length>=3?3:e.length;t>0;t--){var n=e[e.length-t];if(1==t&&n>>5==6){this.charLength=2;break;}if(t<=2&&n>>4==14){this.charLength=3;break;}if(t<=3&&n>>3==30){this.charLength=4;break;}}this.charReceived=t;},gd.prototype.end=function(e){var t="";if(e&&e.length&&(t=this.write(e)),this.charReceived){var n=this.charReceived,r=this.charBuffer,i=this.encoding;t+=r.slice(0,n).toString(i);}return t;};var bd=ue(Object.freeze({__proto__:null,StringDecoder:gd})),wd=Yl.codes.ERR_STREAM_PREMATURE_CLOSE;function Ed(){}var Cd,Sd,_d,kd,xd,Md,Ad=function e(t,n,r){if("function"==typeof n)return e(t,null,n);n||(n={}),r=function(e){var t=!1;return function(){if(!t){t=!0;for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.apply(this,r);}};}(r||Ed);var i=n.readable||!1!==n.readable&&t.readable,o=n.writable||!1!==n.writable&&t.writable,s=function s(){t.writable||c();},a=t._writableState&&t._writableState.finished,c=function c(){o=!1,a=!0,i||r.call(t);},l=t._readableState&&t._readableState.endEmitted,d=function d(){i=!1,l=!0,o||r.call(t);},u=function u(e){r.call(t,e);},h=function h(){var e;return i&&!l?(t._readableState&&t._readableState.ended||(e=new wd()),r.call(t,e)):o&&!a?(t._writableState&&t._writableState.ended||(e=new wd()),r.call(t,e)):void 0;},f=function f(){t.req.on("finish",c);};return !function(e){return e.setHeader&&"function"==typeof e.abort;}(t)?o&&!t._writableState&&(t.on("end",s),t.on("close",s)):(t.on("complete",c),t.on("abort",h),t.req?f():t.on("request",f)),t.on("end",d),t.on("finish",c),!1!==n.error&&t.on("error",u),t.on("close",h),function(){t.removeListener("complete",c),t.removeListener("abort",h),t.removeListener("request",f),t.req&&t.req.removeListener("finish",c),t.removeListener("end",s),t.removeListener("close",s),t.removeListener("finish",c),t.removeListener("end",d),t.removeListener("error",u),t.removeListener("close",h);};};function Id(){if(Sd)return Cd;var e;function t(e,t,n){return (t=function(e){var t=function(e,t){if("object"!=_typeof(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string"===t?String:Number)(e);}(e,"string");return "symbol"==_typeof(t)?t:String(t);}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;}Sd=1;var n=Ad,r=Symbol("lastResolve"),i=Symbol("lastReject"),o=Symbol("error"),s=Symbol("ended"),a=Symbol("lastPromise"),c=Symbol("handlePromise"),l=Symbol("stream");function d(e,t){return {value:e,done:t};}function u(e){var t=e[r];if(null!==t){var n=e[l].read();null!==n&&(e[a]=null,e[r]=null,e[i]=null,t(d(n,!1)));}}function h(e){oa.nextTick(u,e);}var f=Object.getPrototypeOf(function(){}),p=Object.setPrototypeOf((t(e={get stream(){return this[l];},next:function next(){var e=this,t=this[o];if(null!==t)return Promise.reject(t);if(this[s])return Promise.resolve(d(void 0,!0));if(this[l].destroyed)return new Promise(function(t,n){oa.nextTick(function(){e[o]?n(e[o]):t(d(void 0,!0));});});var n,r=this[a];if(r)n=new Promise(function(e,t){return function(n,r){e.then(function(){t[s]?n(d(void 0,!0)):t[c](n,r);},r);};}(r,this));else {var i=this[l].read();if(null!==i)return Promise.resolve(d(i,!1));n=new Promise(this[c]);}return this[a]=n,n;}},Symbol.asyncIterator,function(){return this;}),t(e,"return",function(){var e=this;return new Promise(function(t,n){e[l].destroy(null,function(e){e?n(e):t(d(void 0,!0));});});}),e),f);return Cd=function Cd(e){var u,f=Object.create(p,(t(u={},l,{value:e,writable:!0}),t(u,r,{value:null,writable:!0}),t(u,i,{value:null,writable:!0}),t(u,o,{value:null,writable:!0}),t(u,s,{value:e._readableState.endEmitted,writable:!0}),t(u,c,{value:function value(e,t){var n=f[l].read();n?(f[a]=null,f[r]=null,f[i]=null,e(d(n,!1))):(f[r]=e,f[i]=t);},writable:!0}),u));return f[a]=null,n(e,function(e){if(e&&"ERR_STREAM_PREMATURE_CLOSE"!==e.code){var t=f[i];return null!==t&&(f[a]=null,f[r]=null,f[i]=null,t(e)),void(f[o]=e);}var n=f[r];null!==n&&(f[a]=null,f[r]=null,f[i]=null,n(d(void 0,!0))),f[s]=!0;}),e.on("readable",h.bind(null,f)),f;},Cd;}function Rd(){if(Md)return xd;var e;Md=1,xd=E,E.ReadableState=w,rc.EventEmitter;var t=function(_t107){function t(_x34,_x35){return _t107.apply(this,arguments);}t.toString=function(){return _t107.toString();};return t;}(function(e,t){return e.listeners(t).length;}),n=tl(),r=rl.Buffer,i=(void 0!==le?le:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).Uint8Array||function(){};var o,s=Wl;o=s&&s.debuglog?s.debuglog("stream"):function(){};var a,c,l,d=Gl(),u=Zl(),h=nd().getHighWaterMark,f=Yl.codes,p=f.ERR_INVALID_ARG_TYPE,g=f.ERR_STREAM_PUSH_AFTER_EOF,m=f.ERR_METHOD_NOT_IMPLEMENTED,y=f.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;dd(E,n);var v=u.errorOrDestroy,b=["error","close","destroy","pause","resume"];function w(t,n,r){e=e||fd(),t=t||{},"boolean"!=typeof r&&(r=n instanceof e),this.objectMode=!!t.objectMode,r&&(this.objectMode=this.objectMode||!!t.readableObjectMode),this.highWaterMark=h(this,t,"readableHighWaterMark",r),this.buffer=new d(),this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.destroyed=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(a||(a=bd.StringDecoder),this.decoder=new a(t.encoding),this.encoding=t.encoding);}function E(t){if(e=e||fd(),!(this instanceof E))return new E(t);var r=this instanceof e;this._readableState=new w(t,this,r),this.readable=!0,t&&("function"==typeof t.read&&(this._read=t.read),"function"==typeof t.destroy&&(this._destroy=t.destroy)),n.call(this);}function C(e,t,n,s,a){o("readableAddChunk",t);var c,l=e._readableState;if(null===t)l.reading=!1,function(e,t){if(o("onEofChunk"),t.ended)return;if(t.decoder){var n=t.decoder.end();n&&n.length&&(t.buffer.push(n),t.length+=t.objectMode?1:n.length);}t.ended=!0,t.sync?x(e):(t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,M(e)));}(e,l);else if(a||(c=function(e,t){var n;o=t,r.isBuffer(o)||o instanceof i||"string"==typeof t||void 0===t||e.objectMode||(n=new p("chunk",["string","Buffer","Uint8Array"],t));var o;return n;}(l,t)),c)v(e,c);else if(l.objectMode||t&&t.length>0){if("string"==typeof t||l.objectMode||Object.getPrototypeOf(t)===r.prototype||(t=function(e){return r.from(e);}(t)),s)l.endEmitted?v(e,new y()):S(e,l,t,!0);else if(l.ended)v(e,new g());else {if(l.destroyed)return !1;l.reading=!1,l.decoder&&!n?(t=l.decoder.write(t),l.objectMode||0!==t.length?S(e,l,t,!1):A(e,l)):S(e,l,t,!1);}}else s||(l.reading=!1,A(e,l));return !l.ended&&(l.length<l.highWaterMark||0===l.length);}function S(e,t,n,r){t.flowing&&0===t.length&&!t.sync?(t.awaitDrain=0,e.emit("data",n)):(t.length+=t.objectMode?1:n.length,r?t.buffer.unshift(n):t.buffer.push(n),t.needReadable&&x(e)),A(e,t);}Object.defineProperty(E.prototype,"destroyed",{enumerable:!1,get:function get(){return void 0!==this._readableState&&this._readableState.destroyed;},set:function set(e){this._readableState&&(this._readableState.destroyed=e);}}),E.prototype.destroy=u.destroy,E.prototype._undestroy=u.undestroy,E.prototype._destroy=function(e,t){t(e);},E.prototype.push=function(e,t){var n,i=this._readableState;return i.objectMode?n=!0:"string"==typeof e&&((t=t||i.defaultEncoding)!==i.encoding&&(e=r.from(e,t),t=""),n=!0),C(this,e,t,!1,n);},E.prototype.unshift=function(e){return C(this,e,null,!0,!1);},E.prototype.isPaused=function(){return !1===this._readableState.flowing;},E.prototype.setEncoding=function(e){a||(a=bd.StringDecoder);var t=new a(e);this._readableState.decoder=t,this._readableState.encoding=this._readableState.decoder.encoding;for(var n=this._readableState.buffer.head,r="";null!==n;)r+=t.write(n.data),n=n.next;return this._readableState.buffer.clear(),""!==r&&this._readableState.buffer.push(r),this._readableState.length=r.length,this;};var _=1073741824;function k(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=_?e=_:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e;}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0));}function x(e){var t=e._readableState;o("emitReadable",t.needReadable,t.emittedReadable),t.needReadable=!1,t.emittedReadable||(o("emitReadable",t.flowing),t.emittedReadable=!0,oa.nextTick(M,e));}function M(e){var t=e._readableState;o("emitReadable_",t.destroyed,t.length,t.ended),t.destroyed||!t.length&&!t.ended||(e.emit("readable"),t.emittedReadable=!1),t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark,O(e);}function A(e,t){t.readingMore||(t.readingMore=!0,oa.nextTick(I,e,t));}function I(e,t){for(;!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&0===t.length);){var n=t.length;if(o("maybeReadMore read 0"),e.read(0),n===t.length)break;}t.readingMore=!1;}function R(e){var t=e._readableState;t.readableListening=e.listenerCount("readable")>0,t.resumeScheduled&&!t.paused?t.flowing=!0:e.listenerCount("data")>0&&e.resume();}function L(e){o("readable nexttick read 0"),e.read(0);}function P(e,t){o("resume",t.reading),t.reading||e.read(0),t.resumeScheduled=!1,e.emit("resume"),O(e),t.flowing&&!t.reading&&e.read(0);}function O(e){var t=e._readableState;for(o("flow",t.flowing);t.flowing&&null!==e.read(););}function T(e,t){return 0===t.length?null:(t.objectMode?n=t.buffer.shift():!e||e>=t.length?(n=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.first():t.buffer.concat(t.length),t.buffer.clear()):n=t.buffer.consume(e,t.decoder),n);var n;}function N(e){var t=e._readableState;o("endReadable",t.endEmitted),t.endEmitted||(t.ended=!0,oa.nextTick($,t,e));}function $(e,t){if(o("endReadableNT",e.endEmitted,e.length),!e.endEmitted&&0===e.length&&(e.endEmitted=!0,t.readable=!1,t.emit("end"),e.autoDestroy)){var n=t._writableState;(!n||n.autoDestroy&&n.finished)&&t.destroy();}}function D(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return -1;}return E.prototype.read=function(e){o("read",e),e=parseInt(e,10);var t=this._readableState,n=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&((0!==t.highWaterMark?t.length>=t.highWaterMark:t.length>0)||t.ended))return o("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?N(this):x(this),null;if(0===(e=k(e,t))&&t.ended)return 0===t.length&&N(this),null;var r,i=t.needReadable;return o("need readable",i),(0===t.length||t.length-e<t.highWaterMark)&&o("length less than watermark",i=!0),t.ended||t.reading?o("reading or ended",i=!1):i&&(o("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=k(n,t))),null===(r=e>0?T(e,t):null)?(t.needReadable=t.length<=t.highWaterMark,e=0):(t.length-=e,t.awaitDrain=0),0===t.length&&(t.ended||(t.needReadable=!0),n!==e&&t.ended&&N(this)),null!==r&&this.emit("data",r),r;},E.prototype._read=function(e){v(this,new m("_read()"));},E.prototype.pipe=function(e,n){var r=this,i=this._readableState;switch(i.pipesCount){case 0:i.pipes=e;break;case 1:i.pipes=[i.pipes,e];break;default:i.pipes.push(e);}i.pipesCount+=1,o("pipe count=%d opts=%j",i.pipesCount,n);var s=(!n||!1!==n.end)&&e!==oa.stdout&&e!==oa.stderr?c:g;function a(t,n){o("onunpipe"),t===r&&n&&!1===n.hasUnpiped&&(n.hasUnpiped=!0,o("cleanup"),e.removeListener("close",f),e.removeListener("finish",p),e.removeListener("drain",l),e.removeListener("error",h),e.removeListener("unpipe",a),r.removeListener("end",c),r.removeListener("end",g),r.removeListener("data",u),d=!0,!i.awaitDrain||e._writableState&&!e._writableState.needDrain||l());}function c(){o("onend"),e.end();}i.endEmitted?oa.nextTick(s):r.once("end",s),e.on("unpipe",a);var l=function(e){return function(){var n=e._readableState;o("pipeOnDrain",n.awaitDrain),n.awaitDrain&&n.awaitDrain--,0===n.awaitDrain&&t(e,"data")&&(n.flowing=!0,O(e));};}(r);e.on("drain",l);var d=!1;function u(t){o("ondata");var n=e.write(t);o("dest.write",n),!1===n&&((1===i.pipesCount&&i.pipes===e||i.pipesCount>1&&-1!==D(i.pipes,e))&&!d&&(o("false write response, pause",i.awaitDrain),i.awaitDrain++),r.pause());}function h(n){o("onerror",n),g(),e.removeListener("error",h),0===t(e,"error")&&v(e,n);}function f(){e.removeListener("finish",p),g();}function p(){o("onfinish"),e.removeListener("close",f),g();}function g(){o("unpipe"),r.unpipe(e);}return r.on("data",u),function(e,t,n){if("function"==typeof e.prependListener)return e.prependListener(t,n);e._events&&e._events[t]?Array.isArray(e._events[t])?e._events[t].unshift(n):e._events[t]=[n,e._events[t]]:e.on(t,n);}(e,"error",h),e.once("close",f),e.once("finish",p),e.emit("pipe",r),i.flowing||(o("pipe resume"),r.resume()),e;},E.prototype.unpipe=function(e){var t=this._readableState,n={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,n)),this;if(!e){var r=t.pipes,i=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var o=0;o<i;o++)r[o].emit("unpipe",this,{hasUnpiped:!1});return this;}var s=D(t.pipes,e);return -1===s||(t.pipes.splice(s,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,n)),this;},E.prototype.on=function(e,t){var r=n.prototype.on.call(this,e,t),i=this._readableState;return "data"===e?(i.readableListening=this.listenerCount("readable")>0,!1!==i.flowing&&this.resume()):"readable"===e&&(i.endEmitted||i.readableListening||(i.readableListening=i.needReadable=!0,i.flowing=!1,i.emittedReadable=!1,o("on readable",i.length,i.reading),i.length?x(this):i.reading||oa.nextTick(L,this))),r;},E.prototype.addListener=E.prototype.on,E.prototype.removeListener=function(e,t){var r=n.prototype.removeListener.call(this,e,t);return "readable"===e&&oa.nextTick(R,this),r;},E.prototype.removeAllListeners=function(e){var t=n.prototype.removeAllListeners.apply(this,arguments);return "readable"!==e&&void 0!==e||oa.nextTick(R,this),t;},E.prototype.resume=function(){var e=this._readableState;return e.flowing||(o("resume"),e.flowing=!e.readableListening,function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,oa.nextTick(P,e,t));}(this,e)),e.paused=!1,this;},E.prototype.pause=function(){return o("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(o("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this;},E.prototype.wrap=function(e){var t=this,n=this._readableState,r=!1;for(var i in e.on("end",function(){if(o("wrapped end"),n.decoder&&!n.ended){var e=n.decoder.end();e&&e.length&&t.push(e);}t.push(null);}),e.on("data",function(i){(o("wrapped data"),n.decoder&&(i=n.decoder.write(i)),n.objectMode&&null==i)||(n.objectMode||i&&i.length)&&(t.push(i)||(r=!0,e.pause()));}),e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments);};}(i));for(var s=0;s<b.length;s++)e.on(b[s],this.emit.bind(this,b[s]));return this._read=function(t){o("wrapped _read",t),r&&(r=!1,e.resume());},this;},"function"==typeof Symbol&&(E.prototype[Symbol.asyncIterator]=function(){return void 0===c&&(c=Id()),c(this);}),Object.defineProperty(E.prototype,"readableHighWaterMark",{enumerable:!1,get:function get(){return this._readableState.highWaterMark;}}),Object.defineProperty(E.prototype,"readableBuffer",{enumerable:!1,get:function get(){return this._readableState&&this._readableState.buffer;}}),Object.defineProperty(E.prototype,"readableFlowing",{enumerable:!1,get:function get(){return this._readableState.flowing;},set:function set(e){this._readableState&&(this._readableState.flowing=e);}}),E._fromList=T,Object.defineProperty(E.prototype,"readableLength",{enumerable:!1,get:function get(){return this._readableState.length;}}),"function"==typeof Symbol&&(E.from=function(e,t){return void 0===l&&(l=kd?_d:(kd=1,_d=function _d(){throw new Error("Readable.from is not available in the browser");})),l(E,e,t);}),xd;}var Ld=Kd,Pd=Yl.codes,Od=Pd.ERR_METHOD_NOT_IMPLEMENTED,Td=Pd.ERR_MULTIPLE_CALLBACK,Nd=Pd.ERR_TRANSFORM_ALREADY_TRANSFORMING,$d=Pd.ERR_TRANSFORM_WITH_LENGTH_0,Dd=fd();function Bd(e,t){var n=this._transformState;n.transforming=!1;var r=n.writecb;if(null===r)return this.emit("error",new Td());n.writechunk=null,n.writecb=null,null!=t&&this.push(t),r(e);var i=this._readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark);}function Kd(e){if(!(this instanceof Kd))return new Kd(e);Dd.call(this,e),this._transformState={afterTransform:Bd.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.on("prefinish",jd);}function jd(){var e=this;"function"!=typeof this._flush||this._readableState.destroyed?Ud(this,null,null):this._flush(function(t,n){Ud(e,t,n);});}function Ud(e,t,n){if(t)return e.emit("error",t);if(null!=n&&e.push(n),e._writableState.length)throw new $d();if(e._transformState.transforming)throw new Nd();return e.push(null);}dd(Kd,Dd),Kd.prototype.push=function(e,t){return this._transformState.needTransform=!1,Dd.prototype.push.call(this,e,t);},Kd.prototype._transform=function(e,t,n){n(new Od("_transform()"));},Kd.prototype._write=function(e,t,n){var r=this._transformState;if(r.writecb=n,r.writechunk=e,r.writeencoding=t,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark);}},Kd.prototype._read=function(e){var t=this._transformState;null===t.writechunk||t.transforming?t.needTransform=!0:(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform));},Kd.prototype._destroy=function(e,t){Dd.prototype._destroy.call(this,e,function(e){t(e);});};var Hd,Fd=qd,zd=Ld;function qd(e){if(!(this instanceof qd))return new qd(e);zd.call(this,e);}dd(qd,zd),qd.prototype._transform=function(e,t,n){n(null,e);};var Vd=Yl.codes,Wd=Vd.ERR_MISSING_ARGS,Gd=Vd.ERR_STREAM_DESTROYED;function Zd(e){if(e)throw e;}function Yd(e){e();}function Jd(e,t){return e.pipe(t);}var Xd=function Xd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,i=function(e){return e.length?"function"!=typeof e[e.length-1]?Zd:e.pop():Zd;}(t);if(Array.isArray(t[0])&&(t=t[0]),t.length<2)throw new Wd("streams");var o=t.map(function(e,n){var s=n<t.length-1;return function(e,t,n,r){r=function(e){var t=!1;return function(){t||(t=!0,e.apply(void 0,arguments));};}(r);var i=!1;e.on("close",function(){i=!0;}),void 0===Hd&&(Hd=Ad),Hd(e,{readable:t,writable:n},function(e){if(e)return r(e);i=!0,r();});var o=!1;return function(t){if(!i&&!o)return o=!0,function(e){return e.setHeader&&"function"==typeof e.abort;}(e)?e.abort():"function"==typeof e.destroy?e.destroy():void r(t||new Gd("pipe"));};}(e,s,n>0,function(e){r||(r=e),e&&o.forEach(Yd),s||(o.forEach(Yd),i(r));});});return t.reduce(Jd);};!function(e,t){(t=el.exports=Rd()).Stream=t,t.Readable=t,t.Writable=hd(),t.Duplex=fd(),t.Transform=Ld,t.PassThrough=Fd,t.finished=Ad,t.pipeline=Xd;}(0,el.exports);var Qd=el.exports;function eu(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var t={},n=new Qd.Duplex({objectMode:!0,read:function read(){},write:function write(n,o,s){var a=null;try{!n.id?function(n){(e===null||e===void 0?void 0:e.retryOnMessage)&&n.method===e.retryOnMessage&&Object.values(t).forEach(function(_ref43){var e=_ref43.req,_ref43$retryCount=_ref43.retryCount,n=_ref43$retryCount===void 0?0:_ref43$retryCount;if(!e.id)return;if(n>=3)throw new Error("StreamMiddleware - Retry limit exceeded for request id \"".concat(e.id,"\""));var r=t[e.id];r&&(r.retryCount=n+1),i(e);});r.emit("notification",n);}(n):function(e){var n=e.id;if(null===n)return;var r=t[n];if(!r)return void console.warn("StreamMiddleware - Unknown response id \"".concat(n,"\""));delete t[n],Object.assign(r.res,e),setTimeout(r.end);}(n);}catch(e){a=e;}s(a);}}),r=new xc();return {events:r,middleware:function middleware(e,n,r,o){t[e.id]={req:e,res:n,next:r,end:o},i(e);},stream:n};function i(e){n.push(e);}}var tu={},nu={exports:{}},ru=function e(t,n){if(t&&n)return e(t)(n);if("function"!=typeof t)throw new TypeError("need wrapper function");return Object.keys(t).forEach(function(e){r[e]=t[e];}),r;function r(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];var r=t.apply(this,e),i=e[e.length-1];return "function"==typeof r&&r!==i&&Object.keys(i).forEach(function(e){r[e]=i[e];}),r;}};var iu=ru;function ou(e){var t=function(_t108){function t(){return _t108.apply(this,arguments);}t.toString=function(){return _t108.toString();};return t;}(function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments));});return t.called=!1,t;}function su(e){var t=function(_t109){function t(){return _t109.apply(this,arguments);}t.toString=function(){return _t109.toString();};return t;}(function(){if(t.called)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments);}),n=e.name||"Function wrapped with `once`";return t.onceError=n+" shouldn't be called more than once",t.called=!1,t;}nu.exports=iu(ou),nu.exports.strict=iu(su),ou.proto=ou(function(){Object.defineProperty(Function.prototype,"once",{value:function value(){return ou(this);},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function value(){return su(this);},configurable:!0});});var au=nu.exports,cu={};Object.defineProperty(cu,"__esModule",{value:!0}),cu.Substream=void 0;var lu=Qd;var du=/*#__PURE__*/function(_lu$Duplex){function du(_ref44){var _this33;var e=_ref44.parent,t=_ref44.name;_classCallCheck(this,du);_this33=_callSuper(this,du,[{objectMode:!0}]),_this33._parent=e,_this33._name=t;return _this33;}_inherits(du,_lu$Duplex);return _createClass(du,[{key:"_read",value:function _read(){}},{key:"_write",value:function _write(e,t,n){this._parent.push({name:this._name,data:e}),n();}}]);}(lu.Duplex);cu.Substream=du;var uu=le&&le.__importDefault||function(e){return e&&e.__esModule?e:{"default":e};};Object.defineProperty(tu,"__esModule",{value:!0}),tu.ObjectMultiplex=void 0;var hu=Qd,fu=uu(au),pu=cu,gu=Symbol("IGNORE_SUBSTREAM");var mu=/*#__PURE__*/function(_hu$Duplex){function mu(){var _this34;var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,mu);_this34=_callSuper(this,mu,[Object.assign(Object.assign({},e),{objectMode:!0})]),_this34._substreams={};return _this34;}_inherits(mu,_hu$Duplex);return _createClass(mu,[{key:"createStream",value:function createStream(e){if(this.destroyed)throw new Error("ObjectMultiplex - parent stream for name \"".concat(e,"\" already destroyed"));if(this._readableState.ended||this._writableState.ended)throw new Error("ObjectMultiplex - parent stream for name \"".concat(e,"\" already ended"));if(!e)throw new Error("ObjectMultiplex - name must not be empty");if(this._substreams[e])throw new Error("ObjectMultiplex - Substream for name \"".concat(e,"\" already exists"));var t=new pu.Substream({parent:this,name:e});return this._substreams[e]=t,function(e,t){var n=(0,fu["default"])(t);(0,hu.finished)(e,{readable:!1},n),(0,hu.finished)(e,{writable:!1},n);}(this,function(e){return t.destroy(e||void 0);}),t;}},{key:"ignoreStream",value:function ignoreStream(e){if(!e)throw new Error("ObjectMultiplex - name must not be empty");if(this._substreams[e])throw new Error("ObjectMultiplex - Substream for name \"".concat(e,"\" already exists"));this._substreams[e]=gu;}},{key:"_read",value:function _read(){}},{key:"_write",value:function _write(e,t,n){var r=e.name,i=e.data;if(!r)return console.warn("ObjectMultiplex - malformed chunk without name \"".concat(e,"\"")),n();var o=this._substreams[r];return o?(o!==gu&&o.push(i),n()):(console.warn("ObjectMultiplex - orphaned data for stream \"".concat(r,"\"")),n());}}]);}(hu.Duplex);tu.ObjectMultiplex=mu;var yu=de(tu.ObjectMultiplex);var vu=function vu(e){return null!==e&&"object"==_typeof(e)&&"function"==typeof e.pipe;};vu.writable=function(e){return vu(e)&&!1!==e.writable&&"function"==typeof e._write&&"object"==_typeof(e._writableState);},vu.readable=function(e){return vu(e)&&!1!==e.readable&&"function"==typeof e._read&&"object"==_typeof(e._readableState);},vu.duplex=function(e){return vu.writable(e)&&vu.readable(e);},vu.transform=function(e){return vu.duplex(e)&&"function"==typeof e._transform;};var bu,wu=vu,Eu=/*#__PURE__*/function(_Qc){function Eu(e,_ref45){var _this35;var t=_ref45.jsonRpcStreamName,_ref45$logger=_ref45.logger,n=_ref45$logger===void 0?console:_ref45$logger,_ref45$maxEventListen=_ref45.maxEventListeners,r=_ref45$maxEventListen===void 0?100:_ref45$maxEventListen,_ref45$rpcMiddleware=_ref45.rpcMiddleware,i=_ref45$rpcMiddleware===void 0?[]:_ref45$rpcMiddleware;_classCallCheck(this,Eu);if(_this35=_callSuper(this,Eu,[{logger:n,maxEventListeners:r,rpcMiddleware:i}]),!wu.duplex(e))throw new Error(Xo.errors.invalidDuplexStream());_this35._handleStreamDisconnect=_this35._handleStreamDisconnect.bind(_this35);var o=new yu();Qd.pipeline(e,o,e,_this35._handleStreamDisconnect.bind(_this35,"MetaMask")),_this35._jsonRpcConnection=eu({retryOnMessage:"METAMASK_EXTENSION_CONNECT_CAN_RETRY"}),Qd.pipeline(_this35._jsonRpcConnection.stream,o.createStream(t),_this35._jsonRpcConnection.stream,_this35._handleStreamDisconnect.bind(_this35,"MetaMask RpcProvider")),_this35._rpcEngine.push(_this35._jsonRpcConnection.middleware),_this35._jsonRpcConnection.events.on("notification",function(t){var n=t.method,r=t.params;"metamask_accountsChanged"===n?_this35._handleAccountsChanged(r):"metamask_unlockStateChanged"===n?_this35._handleUnlockStateChanged(r):"metamask_chainChanged"===n?_this35._handleChainChanged(r):Rc.includes(n)?_this35.emit("message",{type:n,data:r}):"METAMASK_STREAM_FAILURE"===n&&e.destroy(new Error(Xo.errors.permanentlyDisconnected()));});return _this35;}_inherits(Eu,_Qc);return _createClass(Eu,[{key:"_initializeStateAsync",value:function(){var _initializeStateAsync2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee66(){var e;return _regeneratorRuntime().wrap(function _callee66$(_context72){while(1)switch(_context72.prev=_context72.next){case 0:_context72.prev=0;_context72.next=3;return this.request({method:"metamask_getProviderState"});case 3:e=_context72.sent;_context72.next=9;break;case 6:_context72.prev=6;_context72.t0=_context72["catch"](0);this._log.error("MetaMask: Failed to get initial state. Please report this bug.",_context72.t0);case 9:this._initializeState(e);case 10:case"end":return _context72.stop();}},_callee66,this,[[0,6]]);}));function _initializeStateAsync(){return _initializeStateAsync2.apply(this,arguments);}return _initializeStateAsync;}()},{key:"_handleStreamDisconnect",value:function _handleStreamDisconnect(e,t){var n="MetaMask: Lost connection to \"".concat(e,"\".");t!==null&&t!==void 0&&t.stack&&(n+="\n".concat(t.stack)),this._log.warn(n),this.listenerCount("error")>0&&this.emit("error",n),this._handleDisconnect(!1,t?t.message:void 0);}},{key:"_handleChainChanged",value:function _handleChainChanged(){var _ref46=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},e=_ref46.chainId,t=_ref46.networkVersion;Tc(e)&&function(e){return Boolean(e)&&"string"==typeof e;}(t)?"loading"===t?this._handleDisconnect(!0):_superPropGet(Eu,"_handleChainChanged",this,3)([{chainId:e}]):this._log.error(Xo.errors.invalidNetworkParams(),{chainId:e,networkVersion:t});}}]);}(Qc),Cu=/*#__PURE__*/function(_Eu){function Cu(e){var _this36;var _ref47=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},_ref47$jsonRpcStreamN=_ref47.jsonRpcStreamName,t=_ref47$jsonRpcStreamN===void 0?"metamask-provider":_ref47$jsonRpcStreamN,_ref47$logger=_ref47.logger,n=_ref47$logger===void 0?console:_ref47$logger,_ref47$maxEventListen=_ref47.maxEventListeners,r=_ref47$maxEventListen===void 0?100:_ref47$maxEventListen,i=_ref47.shouldSendMetadata;_classCallCheck(this,Cu);if(_this36=_callSuper(this,Cu,[e,{jsonRpcStreamName:t,logger:n,maxEventListeners:r,rpcMiddleware:Lc(n)}]),_this36._sentWarnings={chainId:!1,networkVersion:!1,selectedAddress:!1,enable:!1,experimentalMethods:!1,send:!1,events:{close:!1,data:!1,networkChanged:!1,notification:!1}},Hc(_assertThisInitialized(_this36),bu,void 0),_this36._initializeStateAsync(),Fc(_assertThisInitialized(_this36),bu,null),_this36.isMetaMask=!0,_this36._sendSync=_this36._sendSync.bind(_assertThisInitialized(_this36)),_this36.enable=_this36.enable.bind(_assertThisInitialized(_this36)),_this36.send=_this36.send.bind(_assertThisInitialized(_this36)),_this36.sendAsync=_this36.sendAsync.bind(_assertThisInitialized(_this36)),_this36._warnOfDeprecation=_this36._warnOfDeprecation.bind(_assertThisInitialized(_this36)),_this36._metamask=_this36._getExperimentalApi(),_this36._jsonRpcConnection.events.on("notification",function(e){var t=e.method;Rc.includes(t)&&(_this36.emit("data",e),_this36.emit("notification",e.params.result));}),i)if("complete"===document.readyState)$c(_this36._rpcEngine,_this36._log);else {var _e108=function _e107(){$c(_this36._rpcEngine,_this36._log),window.removeEventListener("DOMContentLoaded",_e108);};window.addEventListener("DOMContentLoaded",_e108);}return _this36;}_inherits(Cu,_Eu);return _createClass(Cu,[{key:"chainId",get:function get(){return this._sentWarnings.chainId||(this._log.warn(Xo.warnings.chainIdDeprecation),this._sentWarnings.chainId=!0),_superPropGet(Cu,"chainId",this,1);}},{key:"networkVersion",get:function get(){return this._sentWarnings.networkVersion||(this._log.warn(Xo.warnings.networkVersionDeprecation),this._sentWarnings.networkVersion=!0),Uc(this,bu);}},{key:"selectedAddress",get:function get(){return this._sentWarnings.selectedAddress||(this._log.warn(Xo.warnings.selectedAddressDeprecation),this._sentWarnings.selectedAddress=!0),_superPropGet(Cu,"selectedAddress",this,1);}},{key:"sendAsync",value:function sendAsync(e,t){this._rpcRequest(e,t);}},{key:"addListener",value:function addListener(e,t){return this._warnOfDeprecation(e),_superPropGet(Cu,"addListener",this,3)([e,t]);}},{key:"on",value:function on(e,t){return this._warnOfDeprecation(e),_superPropGet(Cu,"on",this,3)([e,t]);}},{key:"once",value:function once(e,t){return this._warnOfDeprecation(e),_superPropGet(Cu,"once",this,3)([e,t]);}},{key:"prependListener",value:function prependListener(e,t){return this._warnOfDeprecation(e),_superPropGet(Cu,"prependListener",this,3)([e,t]);}},{key:"prependOnceListener",value:function prependOnceListener(e,t){return this._warnOfDeprecation(e),_superPropGet(Cu,"prependOnceListener",this,3)([e,t]);}},{key:"_handleDisconnect",value:function _handleDisconnect(e,t){_superPropGet(Cu,"_handleDisconnect",this,3)([e,t]),Uc(this,bu)&&!e&&Fc(this,bu,null);}},{key:"_warnOfDeprecation",value:function _warnOfDeprecation(e){var _this$_sentWarnings;!1===((_this$_sentWarnings=this._sentWarnings)===null||_this$_sentWarnings===void 0?void 0:_this$_sentWarnings.events[e])&&(this._log.warn(Xo.warnings.events[e]),this._sentWarnings.events[e]=!0);}},{key:"enable",value:function(){var _enable=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee67(){var _this37=this;return _regeneratorRuntime().wrap(function _callee67$(_context73){while(1)switch(_context73.prev=_context73.next){case 0:return _context73.abrupt("return",(this._sentWarnings.enable||(this._log.warn(Xo.warnings.enableDeprecation),this._sentWarnings.enable=!0),new Promise(function(e,t){try{_this37._rpcRequest({method:"eth_requestAccounts",params:[]},Oc(e,t));}catch(e){t(e);}})));case 1:case"end":return _context73.stop();}},_callee67,this);}));function enable(){return _enable.apply(this,arguments);}return enable;}()},{key:"send",value:function send(e,t){var _this38=this;return this._sentWarnings.send||(this._log.warn(Xo.warnings.sendDeprecation),this._sentWarnings.send=!0),"string"!=typeof e||t&&!Array.isArray(t)?e&&"object"==_typeof(e)&&"function"==typeof t?this._rpcRequest(e,t):this._sendSync(e):new Promise(function(n,r){try{_this38._rpcRequest({method:e,params:t},Oc(n,r,!1));}catch(e){r(e);}});}},{key:"_sendSync",value:function _sendSync(e){var _this$selectedAddress,_Uc;var t;switch(e.method){case"eth_accounts":t=this.selectedAddress?[this.selectedAddress]:[];break;case"eth_coinbase":t=(_this$selectedAddress=this.selectedAddress)!==null&&_this$selectedAddress!==void 0?_this$selectedAddress:null;break;case"eth_uninstallFilter":this._rpcRequest(e,Nc),t=!0;break;case"net_version":t=(_Uc=Uc(this,bu))!==null&&_Uc!==void 0?_Uc:null;break;default:throw new Error(Xo.errors.unsupportedSync(e.method));}return {id:e.id,jsonrpc:e.jsonrpc,result:t};}},{key:"_getExperimentalApi",value:function _getExperimentalApi(){var _this39=this;return new Proxy({isUnlocked:function(){var _isUnlocked=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee68(){return _regeneratorRuntime().wrap(function _callee68$(_context74){while(1)switch(_context74.prev=_context74.next){case 0:_context74.t0=_this39._state.initialized;if(_context74.t0){_context74.next=4;break;}_context74.next=4;return new Promise(function(e){_this39.on("_initialized",function(){return e();});});case 4:return _context74.abrupt("return",_this39._state.isUnlocked);case 5:case"end":return _context74.stop();}},_callee68);}));function isUnlocked(){return _isUnlocked.apply(this,arguments);}return isUnlocked;}(),requestBatch:function(){var _requestBatch=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee69(e){return _regeneratorRuntime().wrap(function _callee69$(_context75){while(1)switch(_context75.prev=_context75.next){case 0:if(Array.isArray(e)){_context75.next=2;break;}throw Wa({message:"Batch requests must be made with an array of request objects.",data:e});case 2:return _context75.abrupt("return",new Promise(function(t,n){_this39._rpcRequest(e,Oc(t,n));}));case 3:case"end":return _context75.stop();}},_callee69);}));function requestBatch(_x36){return _requestBatch.apply(this,arguments);}return requestBatch;}()},{get:function get(e,t){for(var _len16=arguments.length,n=new Array(_len16>2?_len16-2:0),_key16=2;_key16<_len16;_key16++){n[_key16-2]=arguments[_key16];}return _this39._sentWarnings.experimentalMethods||(_this39._log.warn(Xo.warnings.experimentalMethods),_this39._sentWarnings.experimentalMethods=!0),Reflect.get.apply(Reflect,[e,t].concat(n));}});}},{key:"_handleChainChanged",value:function _handleChainChanged(){var _ref48=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},e=_ref48.chainId,t=_ref48.networkVersion;_superPropGet(Cu,"_handleChainChanged",this,3)([{chainId:e,networkVersion:t}]),this._state.isConnected&&t!==Uc(this,bu)&&(Fc(this,bu,t),this._state.initialized&&this.emit("networkChanged",Uc(this,bu)));}}]);}(Eu);bu=new WeakMap();var Su=t("MM_SDK");Su.color="#FFAC1C";var _u={},ku={};Object.defineProperty(ku,"__esModule",{value:!0}),ku.EthereumProviderError=ku.EthereumRpcError=void 0;var xu=La;var Mu=/*#__PURE__*/function(_Error4){function Mu(e,t,n){var _this40;_classCallCheck(this,Mu);if(!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!t||"string"!=typeof t)throw new Error('"message" must be a nonempty string.');_this40=_callSuper(this,Mu,[t]),_this40.code=e,void 0!==n&&(_this40.data=n);return _this40;}_inherits(Mu,_Error4);return _createClass(Mu,[{key:"serialize",value:function serialize(){var e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data),this.stack&&(e.stack=this.stack),e;}},{key:"toString",value:function toString(){return xu["default"](this.serialize(),Au,2);}}]);}(/*#__PURE__*/_wrapNativeSuper(Error));ku.EthereumRpcError=Mu;function Au(e,t){if("[Circular]"!==t)return t;}ku.EthereumProviderError=/*#__PURE__*/function(_Mu){function _class4(e,t,n){_classCallCheck(this,_class4);if(!function(e){return Number.isInteger(e)&&e>=1e3&&e<=4999;}(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');return _callSuper(this,_class4,[e,t,n]);}_inherits(_class4,_Mu);return _createClass(_class4);}(Mu);var Iu={},Ru={};Object.defineProperty(Ru,"__esModule",{value:!0}),Ru.errorValues=Ru.errorCodes=void 0,Ru.errorCodes={rpc:{invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},provider:{userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901}},Ru.errorValues={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.serializeError=e.isValidCode=e.getMessageFromCode=e.JSON_RPC_SERVER_ERROR_MESSAGE=void 0;var t=Ru,n=ku,r=t.errorCodes.rpc.internal,i="Unspecified error message. This is a bug, please report it.",o={code:r,message:s(r)};function s(n){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:i;if(Number.isInteger(n)){var _r51=n.toString();if(d(t.errorValues,_r51))return t.errorValues[_r51].message;if(c(n))return e.JSON_RPC_SERVER_ERROR_MESSAGE;}return r;}function a(e){if(!Number.isInteger(e))return !1;var n=e.toString();return !!t.errorValues[n]||!!c(e);}function c(e){return e>=-32099&&e<=-32e3;}function l(e){return e&&"object"==_typeof(e)&&!Array.isArray(e)?Object.assign({},e):e;}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t);}e.JSON_RPC_SERVER_ERROR_MESSAGE="Unspecified server error.",e.getMessageFromCode=s,e.isValidCode=a,e.serializeError=function(e){var _ref49=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},_ref49$fallbackError=_ref49.fallbackError,t=_ref49$fallbackError===void 0?o:_ref49$fallbackError,_ref49$shouldIncludeS=_ref49.shouldIncludeStack,r=_ref49$shouldIncludeS===void 0?!1:_ref49$shouldIncludeS;var i,c;if(!t||!Number.isInteger(t.code)||"string"!=typeof t.message)throw new Error("Must provide fallback error with integer number code and string message.");if(e instanceof n.EthereumRpcError)return e.serialize();var u={};if(e&&"object"==_typeof(e)&&!Array.isArray(e)&&d(e,"code")&&a(e.code)){var _t110=e;u.code=_t110.code,_t110.message&&"string"==typeof _t110.message?(u.message=_t110.message,d(_t110,"data")&&(u.data=_t110.data)):(u.message=s(u.code),u.data={originalError:l(e)});}else {u.code=t.code;var _n65=null===(i=e)||void 0===i?void 0:i.message;u.message=_n65&&"string"==typeof _n65?_n65:t.message,u.data={originalError:l(e)};}var h=null===(c=e)||void 0===c?void 0:c.stack;return r&&e&&h&&"string"==typeof h&&(u.stack=h),u;};}(Iu);var Lu={};Object.defineProperty(Lu,"__esModule",{value:!0}),Lu.ethErrors=void 0;var Pu=ku,Ou=Iu,Tu=Ru;function Nu(e,t){var _Du=Du(t),_Du2=_slicedToArray(_Du,2),n=_Du2[0],r=_Du2[1];return new Pu.EthereumRpcError(e,n||Ou.getMessageFromCode(e),r);}function $u(e,t){var _Du3=Du(t),_Du4=_slicedToArray(_Du3,2),n=_Du4[0],r=_Du4[1];return new Pu.EthereumProviderError(e,n||Ou.getMessageFromCode(e),r);}function Du(e){if(e){if("string"==typeof e)return [e];if("object"==_typeof(e)&&!Array.isArray(e)){var _t111=e.message,n=e.data;if(_t111&&"string"!=typeof _t111)throw new Error("Must specify string message.");return [_t111||void 0,n];}}return [];}Lu.ethErrors={rpc:{parse:function parse(e){return Nu(Tu.errorCodes.rpc.parse,e);},invalidRequest:function invalidRequest(e){return Nu(Tu.errorCodes.rpc.invalidRequest,e);},invalidParams:function invalidParams(e){return Nu(Tu.errorCodes.rpc.invalidParams,e);},methodNotFound:function methodNotFound(e){return Nu(Tu.errorCodes.rpc.methodNotFound,e);},internal:function internal(e){return Nu(Tu.errorCodes.rpc.internal,e);},server:function server(e){if(!e||"object"!=_typeof(e)||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");var t=e.code;if(!Number.isInteger(t)||t>-32005||t<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return Nu(t,e);},invalidInput:function invalidInput(e){return Nu(Tu.errorCodes.rpc.invalidInput,e);},resourceNotFound:function resourceNotFound(e){return Nu(Tu.errorCodes.rpc.resourceNotFound,e);},resourceUnavailable:function resourceUnavailable(e){return Nu(Tu.errorCodes.rpc.resourceUnavailable,e);},transactionRejected:function transactionRejected(e){return Nu(Tu.errorCodes.rpc.transactionRejected,e);},methodNotSupported:function methodNotSupported(e){return Nu(Tu.errorCodes.rpc.methodNotSupported,e);},limitExceeded:function limitExceeded(e){return Nu(Tu.errorCodes.rpc.limitExceeded,e);}},provider:{userRejectedRequest:function userRejectedRequest(e){return $u(Tu.errorCodes.provider.userRejectedRequest,e);},unauthorized:function unauthorized(e){return $u(Tu.errorCodes.provider.unauthorized,e);},unsupportedMethod:function unsupportedMethod(e){return $u(Tu.errorCodes.provider.unsupportedMethod,e);},disconnected:function disconnected(e){return $u(Tu.errorCodes.provider.disconnected,e);},chainDisconnected:function chainDisconnected(e){return $u(Tu.errorCodes.provider.chainDisconnected,e);},custom:function custom(e){if(!e||"object"!=_typeof(e)||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");var t=e.code,n=e.message,r=e.data;if(!n||"string"!=typeof n)throw new Error('"message" must be a nonempty string');return new Pu.EthereumProviderError(t,n,r);}}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getMessageFromCode=e.serializeError=e.EthereumProviderError=e.EthereumRpcError=e.ethErrors=e.errorCodes=void 0;var t=ku;Object.defineProperty(e,"EthereumRpcError",{enumerable:!0,get:function get(){return t.EthereumRpcError;}}),Object.defineProperty(e,"EthereumProviderError",{enumerable:!0,get:function get(){return t.EthereumProviderError;}});var n=Iu;Object.defineProperty(e,"serializeError",{enumerable:!0,get:function get(){return n.serializeError;}}),Object.defineProperty(e,"getMessageFromCode",{enumerable:!0,get:function get(){return n.getMessageFromCode;}});var r=Lu;Object.defineProperty(e,"ethErrors",{enumerable:!0,get:function get(){return r.ethErrors;}});var i=Ru;Object.defineProperty(e,"errorCodes",{enumerable:!0,get:function get(){return i.errorCodes;}});}(_u);var Bu={METAMASK_GETPROVIDERSTATE:"metamask_getProviderState",METAMASK_CONNECTSIGN:"metamask_connectSign",METAMASK_CONNECTWITH:"metamask_connectWith",METAMASK_OPEN:"metamask_open",METAMASK_BATCH:"metamask_batch",PERSONAL_SIGN:"personal_sign",WALLET_REQUESTPERMISSIONS:"wallet_requestPermissions",WALLET_REVOKEPERMISSIONS:"wallet_revokePermissions",WALLET_GETPERMISSIONS:"wallet_getPermissions",WALLET_WATCHASSET:"wallet_watchAsset",WALLET_ADDETHEREUMCHAIN:"wallet_addEthereumChain",WALLET_SWITCHETHETHEREUMCHAIN:"wallet_switchEthereumChain",ETH_REQUESTACCOUNTS:"eth_requestAccounts",ETH_ACCOUNTS:"eth_accounts",ETH_CHAINID:"eth_chainId",ETH_SENDTRANSACTION:"eth_sendTransaction",ETH_SIGNTYPEDDATA:"eth_signTypedData",ETH_SIGNTYPEDDATA_V3:"eth_signTypedData_v3",ETH_SIGNTYPEDDATA_V4:"eth_signTypedData_v4",ETH_SIGNTRANSACTION:"eth_signTransaction",ETH_SIGN:"eth_sign",PERSONAL_EC_RECOVER:"personal_ecRecover"},Ku=(_Ku={},_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Ku,Bu.ETH_REQUESTACCOUNTS,!0),Bu.ETH_SENDTRANSACTION,!0),Bu.ETH_SIGNTRANSACTION,!0),Bu.ETH_SIGN,!0),Bu.PERSONAL_SIGN,!0),Bu.ETH_ACCOUNTS,!1),Bu.ETH_CHAINID,!1),Bu.PERSONAL_SIGN,!0),Bu.ETH_SIGNTYPEDDATA,!0),Bu.ETH_SIGNTYPEDDATA_V3,!0),_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Ku,Bu.ETH_SIGNTYPEDDATA_V4,!0),Bu.WALLET_REQUESTPERMISSIONS,!0),Bu.WALLET_GETPERMISSIONS,!0),Bu.WALLET_WATCHASSET,!0),Bu.WALLET_ADDETHEREUMCHAIN,!0),Bu.WALLET_SWITCHETHETHEREUMCHAIN,!0),Bu.METAMASK_CONNECTSIGN,!0),Bu.METAMASK_CONNECTWITH,!0),Bu.PERSONAL_EC_RECOVER,!0),Bu.METAMASK_BATCH,!0),_defineProperty(_Ku,Bu.METAMASK_OPEN,!0)),ju=Object.keys(Ku).map(function(e){return e.toLowerCase();}),Uu=["eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sign"].map(function(e){return e.toLowerCase();}),Hu=".sdk-comm",Fu="providerType",zu=".MMSDK_cached_address",qu=".MMSDK_cached_chainId",Vu={CHAIN_CHANGED:"chainChanged",ACCOUNTS_CHANGED:"accountsChanged",DISCONNECT:"disconnect",CONNECT:"connect",CONNECTED:"connected"};var Wu=/*#__PURE__*/function(){function Wu(){var _ref50=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{enabled:!1},e=_ref50.enabled;_classCallCheck(this,Wu);this.enabled=!1,this.enabled=e;}return _createClass(Wu,[{key:"persistChannelConfig",value:function persistChannelConfig(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee70(){var t;return _regeneratorRuntime().wrap(function _callee70$(_context76){while(1)switch(_context76.prev=_context76.next){case 0:t=JSON.stringify(e);Su("[StorageManagerWeb: persistChannelConfig()] enabled=".concat(this.enabled),e),localStorage.setItem(Hu,t);case 2:case"end":return _context76.stop();}},_callee70,this);}));}},{key:"getPersistedChannelConfig",value:function getPersistedChannelConfig(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee71(){var e,_t112;return _regeneratorRuntime().wrap(function _callee71$(_context77){while(1)switch(_context77.prev=_context77.next){case 0:_context77.prev=0;if(!(Su("[StorageManagerWeb: getPersistedChannelConfig()] enabled=".concat(this.enabled)),e=localStorage.getItem(Hu),Su("[StorageManagerWeb: getPersistedChannelConfig()]",e),!e)){_context77.next=3;break;}return _context77.abrupt("return");case 3:_t112=JSON.parse(e);return _context77.abrupt("return",(Su("[StorageManagerWeb: getPersistedChannelConfig()] channelConfig",_t112),_t112));case 7:_context77.prev=7;_context77.t0=_context77["catch"](0);return _context77.abrupt("return",void console.error("[StorageManagerWeb: getPersistedChannelConfig()] Can't find existing channel config",_context77.t0));case 10:case"end":return _context77.stop();}},_callee71,this,[[0,7]]);}));}},{key:"persistAccounts",value:function persistAccounts(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee72(){var t;return _regeneratorRuntime().wrap(function _callee72$(_context78){while(1)switch(_context78.prev=_context78.next){case 0:Su("[StorageManagerWeb: persistAccounts()] enabled=".concat(this.enabled),e);t=JSON.stringify(e);localStorage.setItem(zu,t);case 3:case"end":return _context78.stop();}},_callee72,this);}));}},{key:"getCachedAccounts",value:function getCachedAccounts(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee73(){var e;return _regeneratorRuntime().wrap(function _callee73$(_context79){while(1)switch(_context79.prev=_context79.next){case 0:_context79.prev=0;e=localStorage.getItem(zu);return _context79.abrupt("return",e?JSON.parse(e):[]);case 5:_context79.prev=5;_context79.t0=_context79["catch"](0);throw console.error("[StorageManagerWeb: getCachedAccounts()] Error reading cached accounts",_context79.t0),_context79.t0;case 8:case"end":return _context79.stop();}},_callee73,null,[[0,5]]);}));}},{key:"persistChainId",value:function persistChainId(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee74(){return _regeneratorRuntime().wrap(function _callee74$(_context80){while(1)switch(_context80.prev=_context80.next){case 0:Su("[StorageManagerWeb: persistChainId()] enabled=".concat(this.enabled),e),localStorage.setItem(qu,e);case 1:case"end":return _context80.stop();}},_callee74,this);}));}},{key:"getCachedChainId",value:function getCachedChainId(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee75(){var e;return _regeneratorRuntime().wrap(function _callee75$(_context81){while(1)switch(_context81.prev=_context81.next){case 0:_context81.prev=0;e=localStorage.getItem(qu);return _context81.abrupt("return",null!=e?e:void 0);case 5:_context81.prev=5;_context81.t0=_context81["catch"](0);throw console.error("[StorageManagerWeb: getCachedChainId()] Error reading cached chainId",_context81.t0),_context81.t0;case 8:case"end":return _context81.stop();}},_callee75,null,[[0,5]]);}));}},{key:"terminate",value:function terminate(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee76(){return _regeneratorRuntime().wrap(function _callee76$(_context82){while(1)switch(_context82.prev=_context82.next){case 0:Su("[StorageManagerWeb: terminate()] enabled=".concat(this.enabled)),localStorage.removeItem(Hu);case 1:case"end":return _context82.stop();}},_callee76,this);}));}}]);}();var Gu=function Gu(e){return new Wu(e);};var Zu=/*#__PURE__*/function(_Cu){function Zu(_ref51){var _this41;var e=_ref51.connectionStream,t=_ref51.shouldSendMetadata,_ref51$autoRequestAcc=_ref51.autoRequestAccounts,n=_ref51$autoRequestAcc===void 0?!1:_ref51$autoRequestAcc;_classCallCheck(this,Zu);_this41=_callSuper(this,Zu,[e,{logger:console,maxEventListeners:100,shouldSendMetadata:t}]),_this41.state={accounts:null,autoRequestAccounts:!1,providerStateRequested:!1,chainId:"",networkVersion:""},Su("[SDKProvider: constructor()] autoRequestAccounts=".concat(n)),_this41.state.autoRequestAccounts=n;return _this41;}_inherits(Zu,_Cu);return _createClass(Zu,[{key:"forceInitializeState",value:function forceInitializeState(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee77(){return _regeneratorRuntime().wrap(function _callee77$(_context83){while(1)switch(_context83.prev=_context83.next){case 0:return _context83.abrupt("return",(Su("[SDKProvider: forceInitializeState()] autoRequestAccounts=".concat(this.state.autoRequestAccounts)),this._initializeStateAsync()));case 1:case"end":return _context83.stop();}},_callee77,this);}));}},{key:"_setConnected",value:function _setConnected(){Su("[SDKProvider: _setConnected()] Setting connected state"),this._state.isConnected=!0;}},{key:"getState",value:function getState(){return this._state;}},{key:"getSDKProviderState",value:function getSDKProviderState(){return this.state;}},{key:"getSelectedAddress",value:function getSelectedAddress(){var e;var t=this._state.accounts;return t&&0!==t.length?(null===(e=t[0])||void 0===e?void 0:e.toLowerCase())||"":(Su("[SDKProvider: getSelectedAddress] No accounts found"),null);}},{key:"getChainId",value:function getChainId(){return this.state.chainId;}},{key:"getNetworkVersion",value:function getNetworkVersion(){return this.state.networkVersion;}},{key:"setSDKProviderState",value:function setSDKProviderState(e){this.state=Object.assign(Object.assign({},this.state),e);}},{key:"handleAccountsChanged",value:function handleAccountsChanged(e,t){return this._handleAccountsChanged(e,t);}},{key:"handleDisconnect",value:function handleDisconnect(_ref52){var _ref52$terminate=_ref52.terminate,e=_ref52$terminate===void 0?!1:_ref52$terminate;!function(_ref53){var _ref53$terminate=_ref53.terminate,e=_ref53$terminate===void 0?!1:_ref53$terminate,t=_ref53.instance;var n=t.state;Su("[SDKProvider: handleDisconnect()] cleaning up provider state terminate=".concat(e),t),e&&(t._state.accounts=null,t._state.isUnlocked=!1,t._state.isPermanentlyDisconnected=!0,t._state.initialized=!1),t._handleAccountsChanged([]),t._state.isConnected=!1,t.emit("disconnect",_u.ethErrors.provider.disconnected()),n.providerStateRequested=!1;}({terminate:e,instance:this});}},{key:"_initializeStateAsync",value:function _initializeStateAsync(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee79(){return _regeneratorRuntime().wrap(function _callee79$(_context85){while(1)switch(_context85.prev=_context85.next){case 0:return _context85.abrupt("return",function(e){var t,n;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee78(){var r,i,_o28,_s16,_a14,c,l,_e109,_n66,_t113;return _regeneratorRuntime().wrap(function _callee78$(_context84){while(1)switch(_context84.prev=_context84.next){case 0:void 0===e.state&&(e.state={accounts:null,autoRequestAccounts:!1,providerStateRequested:!1,chainId:""});r=e.state;if(!r.providerStateRequested){_context84.next=6;break;}Su("[SDKProvider: initializeStateAsync()] initialization already in progress");_context84.next=46;break;case 6:r.providerStateRequested=!0;_s16=null,_a14=!1,c=!1;l=Gu({enabled:!0});if(!l){_context84.next=21;break;}_context84.next=12;return l.getPersistedChannelConfig({});case 12:_e109=_context84.sent;_a14=null!==(t=null==_e109?void 0:_e109.relayPersistence)&&void 0!==t&&t;_context84.next=16;return l.getCachedChainId();case 16:_o28=_context84.sent;_context84.next=19;return l.getCachedAccounts();case 19:_n66=_context84.sent;_n66.length>0&&(_s16=_n66[0]);case 21:if(!(Su("[SDKProvider: initializeStateAsync()] relayPersistence=".concat(_a14),{relayPersistence:_a14,cachedChainId:_o28,cachedSelectedAddress:_s16}),_a14)){_context84.next=35;break;}if(!(_o28&&_s16)){_context84.next=26;break;}i={accounts:[_s16],chainId:_o28,isUnlocked:!1},c=!0;_context84.next=35;break;case 26:_context84.prev=26;_context84.next=29;return e.request({method:"metamask_getProviderState"});case 29:i=_context84.sent;_context84.next=35;break;case 32:_context84.prev=32;_context84.t0=_context84["catch"](26);return _context84.abrupt("return",(e._log.error("MetaMask: Failed to get initial state. Please report this bug.",_context84.t0),void(r.providerStateRequested=!1)));case 35:if(!(0===(null===(n=null==i?void 0:i.accounts)||void 0===n?void 0:n.length))){_context84.next=45;break;}if(!e.getSelectedAddress()){_context84.next=40;break;}i.accounts=[e.getSelectedAddress()];_context84.next=45;break;case 40:Su("[SDKProvider: initializeStateAsync()] Fetch accounts remotely.");_context84.next=43;return e.request({method:"eth_requestAccounts",params:[]});case 43:_t113=_context84.sent;i.accounts=_t113;case 45:e._initializeState(i),r.providerStateRequested=!1,c&&(e._state.isConnected=!0,e.emit("connect",{chainId:null==i?void 0:i.chainId}));case 46:case"end":return _context84.stop();}},_callee78,null,[[26,32]]);}));}(this));case 1:case"end":return _context85.stop();}},_callee79,this);}));}},{key:"_initializeState",value:function _initializeState(e){return Su("[SDKProvider: _initializeState()]",e),function(e,t,n){return Su("[SDKProvider: initializeState()] set state._initialized to false"),e._state.initialized=!1,t(n);}(this,_superPropGet(Zu,"_initializeState",this,1).bind(this),e);}},{key:"_handleChainChanged",value:function _handleChainChanged(){var _ref54=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},e=_ref54.chainId,t=_ref54.networkVersion;this.state.chainId=e,this.state.networkVersion=t,function(_ref55){var e=_ref55.instance,t=_ref55.chainId,n=_ref55.networkVersion,r=_ref55.superHandleChainChanged;Su("[SDKProvider: handleChainChanged()] chainId=".concat(t," networkVersion=").concat(n));var i=n;n||(Su("[SDKProvider: handleChainChanged()] forced network version to prevent provider error"),i="1"),e._state.isConnected=!0,e.emit("connect",{chainId:t}),r({chainId:t,networkVersion:i});}({instance:this,chainId:e,networkVersion:t,superHandleChainChanged:_superPropGet(Zu,"_handleChainChanged",this,1).bind(this)});}}]);}(Cu);var Yu,Ju={name:"@metamask/sdk",version:"0.31.1",description:"",homepage:"https://github.com/MetaMask/metamask-sdk#readme",bugs:{url:"https://github.com/MetaMask/metamask-sdk/issues"},repository:{type:"git",url:"https://github.com/MetaMask/metamask-sdk",directory:"packages/sdk"},exports:{".":{node:{types:"./dist/types/src/index.d.ts","import":"./dist/node/es/metamask-sdk.js",require:"./dist/node/cjs/metamask-sdk.js"},browser:{types:"./dist/types/src/index.d.ts","import":"./dist/browser/es/metamask-sdk.js"},"react-native":{types:"./dist/types/src/index.d.ts","import":"./dist/react-native/es/metamask-sdk.js"},"default":{types:"./dist/types/src/index.d.ts","import":"./dist/browser/es/metamask-sdk.js"}}},main:"dist/node/cjs/metamask-sdk.js",module:"dist/browser/es/metamask-sdk.js",browser:"dist/browser/es/metamask-sdk.js",unpkg:"dist/browser/umd/metamask-sdk.js","react-native":"dist/react-native/es/metamask-sdk.js",types:"dist/types/src/index.d.ts",sideEffects:!1,files:["/dist"],scripts:{"build:types":"tsc --project tsconfig.build.json --emitDeclarationOnly --outDir dist/types",build:"yarn build:types && rollup -c --bundleConfigAsCjs","build:clean":"yarn clean && yarn build","build:dev":"yarn build:types && NODE_ENV=dev rollup -c --bundleConfigAsCjs","build:post-tsc":"echo 'N/A'","build:pre-tsc":"echo 'N/A'",typecheck:"tsc --noEmit",clean:"rimraf ./dist",size:"node bundle-size && size-limit",lint:"yarn lint:eslint && yarn lint:misc --check","lint:changelog":"../../scripts/validate-changelog.sh @metamask/sdk","lint:eslint":"eslint . --cache --ext js,ts","lint:fix":"yarn lint:eslint --fix && yarn lint:misc --write","lint:misc":"prettier '**/*.json' '**/*.md' '!CHANGELOG.md' --ignore-path ../../.gitignore",prepack:"../../scripts/prepack.sh","publish:preview":"yarn npm publish --tag preview",reset:"yarn clean && rimraf ./node_modules/",test:'jest --testPathIgnorePatterns "/e2e/"',"test:coverage":'jest --coverage --testPathIgnorePatterns "/e2e/"',"test:e2e":'jest --testPathPattern "/e2e/"',"test:ci":'jest --coverage --passWithNoTests --setupFilesAfterEnv ./jest-preload.js --testPathIgnorePatterns "/e2e/"',"test:dev":'jest -c ./jest.config.ts --detectOpenHandles  --testPathIgnorePatterns "/e2e/"',watch:"rollup -c -w"},dependencies:{"@babel/runtime":"^7.26.0","@metamask/onboarding":"^1.0.1","@metamask/providers":"16.1.0","@metamask/sdk-communication-layer":"workspace:*","@metamask/sdk-install-modal-web":"workspace:*","@paulmillr/qr":"^0.2.1",bowser:"^2.9.0","cross-fetch":"^4.0.0",debug:"^4.3.4",eciesjs:"^0.4.11","eth-rpc-errors":"^4.0.3",eventemitter2:"^6.4.9","obj-multiplex":"^1.0.0",pump:"^3.0.0","readable-stream":"^3.6.2","socket.io-client":"^4.5.1",tslib:"^2.6.0",util:"^0.12.4",uuid:"^8.3.2"},devDependencies:{"@jest/globals":"^29.3.1","@lavamoat/allow-scripts":"^2.3.1","@metamask/auto-changelog":"3.1.0","@metamask/eslint-config":"^6.0.0","@metamask/eslint-config-nodejs":"^6.0.0","@metamask/eslint-config-typescript":"^6.0.0","@react-native-async-storage/async-storage":"^1.19.6","@rollup/plugin-alias":"^5.1.1","@rollup/plugin-commonjs":"^25.0.7","@rollup/plugin-json":"^6.0.0","@rollup/plugin-node-resolve":"^15.0.2","@rollup/plugin-replace":"^6.0.1","@rollup/plugin-terser":"^0.4.1","@size-limit/preset-big-lib":"^11.0.2","@types/dom-screen-wake-lock":"^1.0.2","@types/node":"^20.1.3","@types/pump":"^1.1.1","@types/qrcode-terminal":"^0.12.0","@types/uuid":"^10.0.0","@typescript-eslint/eslint-plugin":"^4.26.0","@typescript-eslint/parser":"^4.26.0","browserify-zlib":"^0.2.0",buffer:"^6.0.3","crypto-browserify":"^3.12.0",eslint:"^7.30.0","eslint-config-prettier":"^8.3.0","eslint-plugin-import":"^2.23.4","eslint-plugin-jest":"^24.4.0","eslint-plugin-jsdoc":"^36.1.0","eslint-plugin-node":"^11.1.0","eslint-plugin-prettier":"^3.4.0","https-browserify":"^1.0.0",jest:"^29.3.1","jest-environment-jsdom":"^29.3.1",prettier:"^2.3.0",process:"^0.11.10",rimraf:"^4.4.0",rollup:"^4.26.0","rollup-plugin-analyzer":"^4.0.0","rollup-plugin-jscc":"^2.0.0","rollup-plugin-natives":"^0.7.5","rollup-plugin-node-builtins":"^2.1.2","rollup-plugin-polyfill-node":"^0.13.0","rollup-plugin-sizes":"^1.0.6","rollup-plugin-typescript2":"^0.31.2","rollup-plugin-visualizer":"^5.12.0","size-limit":"^11.0.2","stream-browserify":"^3.0.0","stream-http":"^3.2.0","ts-jest":"^29.0.3","ts-node":"^10.9.1",typescript:"^4.3.2",url:"^0.11.0",webpack:"^5.0.0"},publishConfig:{access:"public",registry:"https://registry.npmjs.org/"},lavamoat:{allowScripts:{"eciesjs>secp256k1":!1,"socket.io-client>engine.io-client>ws>bufferutil":!1,"socket.io-client>engine.io-client>ws>utf-8-validate":!1,"@metamask/sdk-communication-layer>bufferutil":!1,"@metamask/sdk-communication-layer>eciesjs>secp256k1":!1,"@metamask/sdk-communication-layer>utf-8-validate":!1}}};!function(e){e.INPAGE="metamask-inpage",e.CONTENT_SCRIPT="metamask-contentscript",e.PROVIDER="metamask-provider";}(Yu||(Yu={}));var Xu="direct",Qu="https://metamask.app.link/connect",eh="metamask://connect",th={NAME:"MetaMask",RDNS:"io.metamask"},nh=/(?:^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/;var rh={Initialized:"initialized",DisplayURI:"display_uri",ProviderUpdate:"provider_update",ConnectWithResponse:"connectWithResponse",ConnectionStatus:"connection_status",ServiceStatus:"service_status"};var ih;!function(e){e.TERMINATE="terminate",e.EXTENSION="extension",e.INITIALIZED="initialized";}(ih||(ih={}));var oh="undefined"!=typeof window&&window.localStorage;function sh(_ref56){var e=_ref56.instance,t=_ref56.msg;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee80(){var n;return _regeneratorRuntime().wrap(function _callee80$(_context86){while(1)switch(_context86.prev=_context86.next){case 0:_context86.t0=e._initialized;if(_context86.t0){_context86.next=5;break;}Su("[MetaMaskSDK: connectAndSign()] provider not ready -- wait for init()");_context86.next=5;return e.init();case 5:Su("[MetaMaskSDK: connectAndSign()] activeProvider=".concat(e.activeProvider));if(e.activeProvider){_context86.next=8;break;}throw new Error("SDK state invalid -- undefined provider");case 8:n=/^0x([0-9A-Fa-f]{2})*$/.test(t)?t:function(e){var t;if(void 0!==S)t=S.from(e,"utf8").toString("hex");else if("undefined"!=typeof TextEncoder){var _n67=new TextEncoder().encode(e);t=Array.from(_n67).map(function(e){return e.toString(16).padStart(2,"0");}).join("");}else {if("object"!=(typeof c==="undefined"?"undefined":_typeof(c))||!("Buffer"in c))throw new Error("Unable to convert string to hex: No available method.");t=c.Buffer.from(e,"utf8").toString("hex");}return "0x".concat(t);}(t);return _context86.abrupt("return",e.activeProvider.request({method:Bu.METAMASK_CONNECTWITH,params:[{method:Bu.PERSONAL_SIGN,params:[n]}]}));case 10:case"end":return _context86.stop();}},_callee80);}));}function ah(e){var t,n;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee81(){var _e110;return _regeneratorRuntime().wrap(function _callee81$(_context87){while(1)switch(_context87.prev=_context87.next){case 0:Su("[MetaMaskSDK: connectWithExtensionProvider()] ",e),e.sdkProvider=e.activeProvider,e.activeProvider=window.extension,window.ethereum=window.extension;_context87.prev=1;_context87.next=4;return null===(t=window.extension)||void 0===t?void 0:t.request({method:"eth_requestAccounts"});case 4:_e110=_context87.sent;Su("[MetaMaskSDK: connectWithExtensionProvider()] accounts=".concat(_e110));_context87.next=11;break;case 8:_context87.prev=8;_context87.t0=_context87["catch"](1);return _context87.abrupt("return",void console.warn("[MetaMaskSDK: connectWithExtensionProvider()] can't request accounts error",_context87.t0));case 11:localStorage.setItem(Fu,"extension"),e.extensionActive=!0,e.emit(rh.ProviderUpdate,ih.EXTENSION),e.options.enableAnalytics&&(null===(n=e.analytics)||void 0===n||n.send({event:wo.SDK_USE_EXTENSION}));case 12:case"end":return _context87.stop();}},_callee81,null,[[1,8]]);}));}function ch(e){var t;if(void 0!==S)t=S.from(e,"utf8").toString("base64");else if("function"==typeof btoa)t=btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,t){return String.fromCharCode(parseInt(t,16));}));else {if("object"!=(typeof c==="undefined"?"undefined":_typeof(c))||!("Buffer"in c))throw new Error("Unable to base64 encode: No available method.");t=c.Buffer.from(e,"utf8").toString("base64");}return t;}var lh=/*#__PURE__*/function(){function lh(_ref57){var _this42=this;var e=_ref57.shouldSetOnWindow,t=_ref57.connectionStream,_ref57$shouldSendMeta=_ref57.shouldSendMetadata,n=_ref57$shouldSendMeta===void 0?!1:_ref57$shouldSendMeta,r=_ref57.shouldShimWeb3,i=_ref57.sdkInstance;_classCallCheck(this,lh);var o=new Zu({connectionStream:t,shouldSendMetadata:n,shouldSetOnWindow:e,shouldShimWeb3:r,autoRequestAccounts:!1}),s=new Proxy(o,{deleteProperty:function deleteProperty(){return !0;}});if(this.provider=s,this.sdkInstance=i,e&&"undefined"!=typeof window)try{a=o,window.ethereum=a,window.dispatchEvent(new Event("ethereum#initialized"));}catch(e){Su("[Ethereum] Unable to set global provider - window.ethereum may be read-only",e);}var a;if(r&&"undefined"!=typeof window)try{!function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:console;var n=!1,r=!1;if(!window.web3){var _i41="__isMetaMaskShim__";var _o29={currentProvider:e};Object.defineProperty(_o29,_i41,{value:!0,enumerable:!0,configurable:!1,writable:!1}),_o29=new Proxy(_o29,{get:function get(o,s){for(var _len17=arguments.length,a=new Array(_len17>2?_len17-2:0),_key17=2;_key17<_len17;_key17++){a[_key17-2]=arguments[_key17];}return "currentProvider"!==s||n?"currentProvider"===s||s===_i41||r||(r=!0,t.error("MetaMask no longer injects web3. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"),e.request({method:"metamask_logWeb3ShimUsage"})["catch"](function(e){t.debug("MetaMask: Failed to log web3 shim usage.",e);})):(n=!0,t.warn("You are accessing the MetaMask window.web3.currentProvider shim. This property is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3")),Reflect.get.apply(Reflect,[o,s].concat(a));},set:function set(){return t.warn("You are accessing the MetaMask window.web3 shim. This object is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"),Reflect.set.apply(Reflect,arguments);}}),Object.defineProperty(window,"web3",{value:_o29,enumerable:!1,configurable:!0,writable:!0});}}(this.provider);}catch(e){Su("[Ethereum] Unable to shim web3 - window.web3 may be read-only",e);}this.provider.on("display_uri",function(e){_this42.sdkInstance.emit(rh.DisplayURI,e);}),this.provider.on("_initialized",function(){var e={chainId:_this42.provider.getChainId(),isConnected:_this42.provider.isConnected(),isMetaMask:_this42.provider.isMetaMask,selectedAddress:_this42.provider.getSelectedAddress(),networkVersion:_this42.provider.getNetworkVersion()};_this42.sdkInstance.emit(rh.Initialized,e),Su("[Ethereum: constructor()] provider initialized",e);});}return _createClass(lh,null,[{key:"init",value:function init(e){var t;return Su("[Ethereum: init()] Initializing Ethereum service"),this.instance=new lh(e),null===(t=this.instance)||void 0===t?void 0:t.provider;}},{key:"destroy",value:function destroy(){}},{key:"getInstance",value:function getInstance(){var e;if(!(null===(e=this.instance)||void 0===e?void 0:e.provider))throw new Error("Ethereum instance not intiialized - call Ethereum.factory first.");return this.instance;}},{key:"getProvider",value:function getProvider(){var e;if(!(null===(e=this.instance)||void 0===e?void 0:e.provider))throw new Error("Ethereum instance not intiialized - call Ethereum.factory first.");return this.instance.provider;}}]);}();function dh(e,t,n,r){var i,o,s,c,l,d,u,h,f,p,g,m,y,v,b,w,E,C,_,k;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee82(){var n,a,x,M,A,I,R,_ref58,L,P,O,T,N,$,_t114,_n68,_t115,_i42;return _regeneratorRuntime().wrap(function _callee82$(_context88){while(1)switch(_context88.prev=_context88.next){case 0:n=null===(i=e.state.remote)||void 0===i?void 0:i.isReady(),a=null===(o=e.state.remote)||void 0===o?void 0:o.isConnected(),x=null===(s=e.state.remote)||void 0===s?void 0:s.isPaused(),M=lh.getProvider(),A=null===(c=e.state.remote)||void 0===c?void 0:c.getChannelId(),I=null===(l=e.state.remote)||void 0===l?void 0:l.isAuthorized(),R=e.state.deeplinkProtocol,_ref58=function(e){var t,n,r,i;var o;S.isBuffer(e)?(o=e.toJSON(),o._isBuffer=!0):o=e;var s=null===(t=null==o?void 0:o.data)||void 0===t?void 0:t.method;var a=!1;return "object"==_typeof(null===(n=null==o?void 0:o.data)||void 0===n?void 0:n.params)&&!0===(null===(i=null===(r=null==o?void 0:o.data)||void 0===r?void 0:r.params)||void 0===i?void 0:i.__triggeredInstaller)&&(a=!0,o.data.params=o.data.params.wrappedParams),{method:s,data:o,triggeredInstaller:a};}(t),L=_ref58.method,P=_ref58.data,O=_ref58.triggeredInstaller;if(!(Su("[RCPMS: write()] method='".concat(L,"' isRemoteReady=").concat(n," channelId=").concat(A," isSocketConnected=").concat(a," isRemotePaused=").concat(x," providerConnected=").concat(M.isConnected()),t),!A)){_context88.next=3;break;}return _context88.abrupt("return",(L!==Bu.METAMASK_GETPROVIDERSTATE&&Su("[RCPMS: write()] ".concat(L," --> channelId is undefined")),r(new Error("disconnected"))));case 3:Su("[RCPMS: write()] remote.isPaused()=".concat(null===(d=e.state.remote)||void 0===d?void 0:d.isPaused()," authorized=").concat(I," ready=").concat(n," socketConnected=").concat(a),t);T=null===(u=e.state.platformManager)||void 0===u?void 0:u.isSecure(),N=null!==(f=null===(h=e.state.platformManager)||void 0===h?void 0:h.isMobileWeb())&&void 0!==f&&f,$=null!==(g=null===(p=e.state.remote)||void 0===p?void 0:p.hasDeeplinkProtocol())&&void 0!==g&&g&&N&&I;_context88.prev=5;if(!($&&!O||null===(m=e.state.remote)||void 0===m||m.sendMessage(null==P?void 0:P.data).then(function(){Su("[RCPMS: _write()] ".concat(L," sent successfully"));})["catch"](function(e){Su("[RCPMS: _write()] error sending message",e);}),!T)){_context88.next=8;break;}return _context88.abrupt("return",(Su("[RCPMS: _write()] unsecure platform for method ".concat(L," -- return callback")),r()));case 8:if(!O){_context88.next=10;break;}return _context88.abrupt("return",(Su("[RCPMS: _write()] prevent deeplink -- installation completed separately."),r()));case 10:_t114=null!==(b=null===(v=null===(y=e.state.remote)||void 0===y?void 0:y.getKeyInfo())||void 0===v?void 0:v.ecies["public"])&&void 0!==b?b:"";_n68=encodeURI("channelId=".concat(A,"&pubkey=").concat(_t114,"&comm=socket&t=d&v=2"));if(!$){_context88.next=17;break;}_t115=JSON.stringify(null==P?void 0:P.data),_i42=null===(w=e.state.remote)||void 0===w?void 0:w.encrypt(_t115);if(_i42){_context88.next=16;break;}return _context88.abrupt("return",(Su("[RCPMS: _write()] error encrypting message"),r(new Error("RemoteCommunicationPostMessageStream - disconnected"))));case 16:_n68+="&scheme=".concat(R,"&rpc=").concat(ch(_i42));case 17:if(null===(E=e.state.platformManager)||void 0===E?void 0:E.isMetaMaskInstalled()){_context88.next=19;break;}return _context88.abrupt("return",(Su("[RCPMS: _write()] prevent deeplink until installation is completed."),r()));case 19:Ku[L]?(Su("[RCPMS: _write()] redirect link for '".concat(L,"' socketConnected=").concat(a," connect?").concat(_n68)),null===(C=e.state.platformManager)||void 0===C||C.openDeeplink("".concat(Qu,"?").concat(_n68),"".concat(eh,"?").concat(_n68),"_self")):(null===(_=e.state.remote)||void 0===_?void 0:_.isPaused())?(Su("[RCPMS: _write()] MM is PAUSED! deeplink with connect! targetMethod=".concat(L)),null===(k=e.state.platformManager)||void 0===k||k.openDeeplink("".concat(Qu,"?redirect=true&").concat(_n68),"".concat(eh,"?redirect=true&").concat(_n68),"_self")):Su("[RCPMS: _write()] method ".concat(L," doesn't need redirect."));_context88.next=25;break;case 22:_context88.prev=22;_context88.t0=_context88["catch"](5);return _context88.abrupt("return",(Su("[RCPMS: _write()] error sending message",_context88.t0),r(new Error("RemoteCommunicationPostMessageStream - disconnected"))));case 25:return _context88.abrupt("return",r());case 26:case"end":return _context88.stop();}},_callee82,null,[[5,22]]);}));}var uh=/*#__PURE__*/function(_Qd$Duplex){function uh(_ref59){var _this43;var e=_ref59.name,t=_ref59.remote,n=_ref59.deeplinkProtocol,r=_ref59.platformManager;_classCallCheck(this,uh);_this43=_callSuper(this,uh,[{objectMode:!0}]),_this43.state={_name:null,remote:null,deeplinkProtocol:!1,platformManager:null},_this43.state._name=e,_this43.state.remote=t,_this43.state.deeplinkProtocol=n,_this43.state.platformManager=r,_this43._onMessage=_this43._onMessage.bind(_assertThisInitialized(_this43)),_this43.state.remote.on(mo.MESSAGE,_this43._onMessage);return _this43;}_inherits(uh,_Qd$Duplex);return _createClass(uh,[{key:"_write",value:function _write(e,t,n){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee83(){return _regeneratorRuntime().wrap(function _callee83$(_context89){while(1)switch(_context89.prev=_context89.next){case 0:return _context89.abrupt("return",dh(this,e,0,n));case 1:case"end":return _context89.stop();}},_callee83,this);}));}},{key:"_read",value:function _read(){}},{key:"_onMessage",value:function _onMessage(e){return function(e,t){try{if(Su("[RCPMS: onMessage()] message",t),!t||"object"!=_typeof(t))return;if("object"!=_typeof(null==t?void 0:t.data))return;if(!(null==t?void 0:t.name))return void Su("[RCPMS: onMessage()] ignore message without name",t);if((null==t?void 0:t.name)!==Yu.PROVIDER)return void Su("[RCPMS: onMessage()] ignore message with wrong name message=".concat(t));if(S.isBuffer(t)){var n=S.from(t);e.push(n);}else e.push(t);}catch(e){Su("[RCPMS: onMessage()] ignore message error err=".concat(e));}}(this,e);}},{key:"start",value:function start(){}}]);}(Qd.Duplex);var hh=1;var fh=function fh(e){return new Promise(function(t){setTimeout(function(){t(!0);},e);});},ph=function ph(_ref60){var _ref60$checkInstallat=_ref60.checkInstallationOnAllCalls,t=_ref60$checkInstallat===void 0?!1:_ref60$checkInstallat,n=_ref60.communicationLayerPreference,r=_ref60.injectProvider,i=_ref60.shouldShimWeb3,o=_ref60.platformManager,s=_ref60.installer,c=_ref60.sdk,l=_ref60.remoteConnection,d=_ref60.debug;return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee89(){var u,h,f,p,g,m,y,v,b,_e111,_e112,w,E,C,S,_,k,x,M;return _regeneratorRuntime().wrap(function _callee89$(_context95){while(1)switch(_context95.prev=_context95.next){case 0:f=function(_ref61){var e=_ref61.name,t=_ref61.remoteConnection;if(!t||!(null==t?void 0:t.getConnector()))throw new Error("Missing remote connection parameter");return new uh({name:e,remote:null==t?void 0:t.getConnector(),deeplinkProtocol:null==t?void 0:t.state.deeplinkProtocol,platformManager:null==t?void 0:t.getPlatformManager()});}({name:Yu.INPAGE,target:Yu.CONTENT_SCRIPT,platformManager:o,communicationLayerPreference:n,remoteConnection:l}),p=o.getPlatformType(),g=c.options.dappMetadata,m="Sdk/Javascript SdkVersion/".concat(Ju.version," Platform/").concat(p," dApp/").concat(null!==(u=g.url)&&void 0!==u?u:g.name," dAppTitle/").concat(g.name);y=null,v=null;b=null===(h=c.options.storage)||void 0===h?void 0:h.storageManager;if(!b){_context95.next=24;break;}_context95.prev=4;_context95.next=7;return b.getCachedAccounts();case 7:_e111=_context95.sent;_e111.length>0&&(y=_e111[0]);_context95.next=14;break;case 11:_context95.prev=11;_context95.t0=_context95["catch"](4);console.error("[initializeMobileProvider] failed to get cached addresses: ".concat(_context95.t0));case 14:_context95.prev=14;_context95.next=17;return b.getCachedChainId();case 17:_e112=_context95.sent;_e112&&(v=_e112);_context95.next=24;break;case 21:_context95.prev=21;_context95.t1=_context95["catch"](14);console.error("[initializeMobileProvider] failed to parse cached chainId: ".concat(_context95.t1));case 24:Su("[initializeMobileProvider] cachedAccountAddress: ".concat(y,", cachedChainId: ").concat(v));w=!(!r||p===No.NonBrowser||p===No.ReactNative),E=lh.init({shouldSetOnWindow:w,connectionStream:f,shouldShimWeb3:i,sdkInstance:c});C=!1;S=function S(e){C=e;},_=function _(){return C;},k=function k(n,r,i,d){return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee86(){var u,h,f,p,g,w,E,k,x,M,_e113,_t116,_n69,A,I,R,L,P,O,T,N,_t117,_i43,_e114,_t118,_o30,_t119,_n70,_e115,_t120,_n71,_e116,_t121,_n72,_r54,_i44,_s17,_e117,_t122;return _regeneratorRuntime().wrap(function _callee86$(_context92){while(1)switch(_context92.prev=_context92.next){case 0:M=lh.getProvider();if(!C){_context92.next=13;break;}M.emit("display_uri",(null==l?void 0:l.state.qrcodeLink)||""),null==l||l.showActiveModal();_e113=_();case 4:if(!_e113){_context92.next=12;break;}_t116=_(),_n69=null==l?void 0:l.isAuthorized();_e113=_t116&&!_n69;Su("[initializeMobileProvider: sendRequest()] waiting for initialization to complete - initializing: ".concat(_t116," authorized: ").concat(_n69));_context92.next=10;return fh(1e3);case 10:_context92.next=4;break;case 12:return _context92.abrupt("return",(Su("[initializeMobileProvider: sendRequest()] initial method completed -- prevent installation and call provider"),i.apply(void 0,_toConsumableArray(r))));case 13:A=o.isMetaMaskInstalled(),I=null==l?void 0:l.isConnected();R=null,L=null,P=null;if(!(R=null!==(u=M.getSelectedAddress())&&void 0!==u?u:y,P=M.getChainId()||v,R&&b&&R!==y&&b.persistAccounts([R])["catch"](function(e){console.error("[initializeMobileProvider] failed to persist account: ".concat(e));}),P&&(v=P,b&&b.persistChainId(P)["catch"](function(e){console.error("[initializeMobileProvider] failed to persist chainId: ".concat(e));})),Su("[initializeMobileProvider: sendRequest()]",{selectedAddress:R,chainId:P}),d&&Su("[initializeMobileProvider: sendRequest()] method=".concat(n," ongoing=").concat(C," selectedAddress=").concat(R," isInstalled=").concat(A," checkInstallationOnAllCalls=").concat(t," socketConnected=").concat(I)),R&&n.toLowerCase()===Bu.ETH_ACCOUNTS.toLowerCase())){_context92.next=17;break;}return _context92.abrupt("return",[R]);case 17:if(!(P&&n.toLowerCase()===Bu.ETH_CHAINID.toLowerCase())){_context92.next=19;break;}return _context92.abrupt("return",P);case 19:O=[Bu.ETH_REQUESTACCOUNTS,Bu.WALLET_REQUESTPERMISSIONS,Bu.METAMASK_CONNECTSIGN,Bu.METAMASK_CONNECTWITH],T=!Ku[n],N=null===(h=c.options.readonlyRPCMap)||void 0===h?void 0:h[P];if(!(N&&T)){_context92.next=32;break;}_context92.prev=21;_t117=null===(f=null==r?void 0:r[0])||void 0===f?void 0:f.params;_context92.next=25;return function(_ref62){var t=_ref62.rpcEndpoint,n=_ref62.method,r=_ref62.sdkInfo,i=_ref62.params;return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee84(){var o,s,a;return _regeneratorRuntime().wrap(function _callee84$(_context90){while(1)switch(_context90.prev=_context90.next){case 0:o=JSON.stringify({jsonrpc:"2.0",method:n,params:i,id:(hh+=1,hh)}),s={Accept:"application/json","Content-Type":"application/json"};t.includes("infura")&&(s["Metamask-Sdk-Info"]=r);_context90.prev=2;_context90.next=5;return e(t,{method:"POST",headers:s,body:o});case 5:a=_context90.sent;_context90.next=11;break;case 8:_context90.prev=8;_context90.t0=_context90["catch"](2);throw _context90.t0 instanceof Error?new Error("Failed to fetch from RPC: ".concat(_context90.t0.message)):new Error("Failed to fetch from RPC: ".concat(_context90.t0));case 11:if(a.ok){_context90.next=13;break;}throw new Error("Server responded with a status of ".concat(a.status));case 13:_context90.next=15;return a.json();case 15:return _context90.abrupt("return",_context90.sent.result);case 16:case"end":return _context90.stop();}},_callee84,null,[[2,8]]);}));}({rpcEndpoint:N,sdkInfo:m,method:n,params:_t117||[]});case 25:_i43=_context92.sent;return _context92.abrupt("return",(d&&Su("initializeProvider::ReadOnlyRPCResponse ".concat(_i43)),_i43));case 29:_context92.prev=29;_context92.t0=_context92["catch"](21);console.warn("[initializeMobileProvider: sendRequest()] method=".concat(n," readOnlyRPCRequest failed:"),_context92.t0);case 32:if(!((!A||A&&!I)&&n!==Bu.METAMASK_GETPROVIDERSTATE)){_context92.next=103;break;}_e114=(null===(p=null==r?void 0:r[0])||void 0===p?void 0:p.params)||[];if(!(-1!==O.indexOf(n)||t)){_context92.next=95;break;}S(!0);_t118=n===Bu.METAMASK_CONNECTWITH,_o30="".concat(Date.now());_context92.prev=37;_context92.next=40;return s.start({wait:!1,connectWith:_t118?{method:n,id:_o30,params:_e114}:void 0});case 40:_context92.next=42;return new Promise(function(e,t){(null==l?void 0:l.isAuthorized())&&(Su("[initializeMobileProvider: sendRequest()] already authorized"),e(!0)),null==l||l.getConnector().once(mo.AUTHORIZED,function(){e(!0);}),c.once(mo.PROVIDER_UPDATE,function(e){Su("[initializeMobileProvider: sendRequest()] PROVIDER_UPDATE --- remote provider request interupted type=".concat(e)),e===ih.EXTENSION?t(mo.PROVIDER_UPDATE):t(new Error("Connection Terminated"));});});case 42:_context92.next=71;break;case 44:_context92.prev=44;_context92.t1=_context92["catch"](37);if(!(ih.EXTENSION===_context92.t1)){_context92.next=68;break;}if(!(Su("[initializeMobileProvider: sendRequest()] extension provider detect: re-create ".concat(n," on the active provider")),n.toLowerCase()===Bu.METAMASK_CONNECTSIGN.toLowerCase())){_context92.next=57;break;}_context92.next=50;return null===(g=c.getProvider())||void 0===g?void 0:g.request({method:Bu.ETH_REQUESTACCOUNTS,params:[]});case 50:_t119=_context92.sent;if(_t119.length){_context92.next=53;break;}throw new Error("SDK state invalid -- undefined accounts");case 53:_context92.next=55;return null===(w=c.getProvider())||void 0===w?void 0:w.request({method:Bu.PERSONAL_SIGN,params:[_e114[0],_t119[0]]});case 55:_n70=_context92.sent;return _context92.abrupt("return",(c.emit(rh.ConnectWithResponse,_n70),_n70));case 57:if(!(n.toLowerCase()===Bu.METAMASK_CONNECTWITH.toLowerCase())){_context92.next=64;break;}_e115=_slicedToArray(_e114,1);_t120=_e115[0];_context92.next=62;return function(_ref63){var e=_ref63.method,t=_ref63.sdk,n=_ref63.params;return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee85(){var r,i,o,s,a,_r52,_r53;return _regeneratorRuntime().wrap(function _callee85$(_context91){while(1)switch(_context91.prev=_context91.next){case 0:if(t.isExtensionActive()){_context91.next=2;break;}throw new Error("SDK state invalid -- extension is not active");case 2:Su("[MetaMaskProvider: extensionConnectWithOverwrite()] Overwriting request method",e,n);_context91.next=5;return null===(r=t.getProvider())||void 0===r?void 0:r.request({method:Bu.ETH_REQUESTACCOUNTS,params:[]});case 5:a=_context91.sent;if(a.length){_context91.next=8;break;}throw new Error("SDK state invalid -- undefined accounts");case 8:if(!((null==e?void 0:e.toLowerCase())===Bu.PERSONAL_SIGN.toLowerCase())){_context91.next=13;break;}_r52={method:e,params:[n[0],a[0]]};_context91.next=12;return null===(i=t.getProvider())||void 0===i?void 0:i.request(_r52);case 12:return _context91.abrupt("return",_context91.sent);case 13:if(!((null==e?void 0:e.toLowerCase())===Bu.ETH_SENDTRANSACTION.toLowerCase())){_context91.next=18;break;}_r53={method:e,params:[Object.assign(Object.assign({},n[0]),{from:a[0]})]};_context91.next=17;return null===(o=t.getProvider())||void 0===o?void 0:o.request(_r53);case 17:return _context91.abrupt("return",_context91.sent);case 18:if(!Uu.includes(e.toLowerCase())){_context91.next=22;break;}_context91.t0=(console.warn("MetaMaskSDK connectWith method=".concat(e," -- not handled by the extension -- call separately")),a);_context91.next=25;break;case 22:_context91.next=24;return null===(s=t.getProvider())||void 0===s?void 0:s.request({method:e,params:n});case 24:_context91.t0=_context91.sent;case 25:return _context91.abrupt("return",_context91.t0);case 26:case"end":return _context91.stop();}},_callee85);}));}({method:_t120.method,sdk:c,params:_t120.params});case 62:_n71=_context92.sent;return _context92.abrupt("return",(c.emit(rh.ConnectWithResponse,_n71),_n71));case 64:Su("[initializeMobileProvider: sendRequest()] sending '".concat(n,"' on active provider"),_e114);_context92.next=67;return null===(E=c.getProvider())||void 0===E?void 0:E.request({method:n,params:_e114});case 67:return _context92.abrupt("return",_context92.sent);case 68:if(!(_context92.t1===mo.REJECTED)){_context92.next=70;break;}throw null==l||l.closeModal(),null===(k=c.getProvider())||void 0===k||k.handleDisconnect({terminate:!1}),Object.assign(new Error("User rejected connection"),{code:4001});case 70:throw Su("[initializeMobileProvider: sendRequest()] failed to start installer: ".concat(_context92.t1)),_context92.t1;case 71:_context92.prev=71;S(!1);return _context92.finish(71);case 74:if(!(n===Bu.ETH_REQUESTACCOUNTS)){_context92.next=80;break;}_context92.next=77;return new Promise(function(e){var t=setInterval(function(){var _M$getState=M.getState(),n=_M$getState.accounts;n&&(clearInterval(t),e(n));},100);});case 77:L=_context92.sent;Su("[initializeMobileProvider: sendRequest()] selectedAddress: ".concat(R," --- SKIP rpc call"));return _context92.abrupt("return",L);case 80:if(!(n===Bu.METAMASK_CONNECTWITH)){_context92.next=93;break;}_context92.prev=81;_e116=0;_t121=5,_n72=function _n72(_ref64){var n=_ref64.resolve,r=_ref64.reject;_e116+=1;var i=null==l?void 0:l.getConnector().getRPCMethodTracker(),s=null==i?void 0:i[_o30];return Su("TRACKER: update method ".concat(_o30),s),(null==s?void 0:s.result)?(Su("[initializeMobileProvider: sendRequest()] found result",s.result),c.emit(rh.ConnectWithResponse,s.result),void n(s.result)):(null==s?void 0:s.error)?(Su("[initializeMobileProvider: sendRequest()] found error",s.error),void r(s.error)):_e116>=_t121?(Su("[initializeMobileProvider: sendRequest()] max message count reached without result"),void r(new Error("Max message count reached without result"))):void Su("[initializeMobileProvider: sendRequest()] not found yet, need to wait for next update");};_context92.next=86;return new Promise(function(e,t){var s=null==l?void 0:l.getConnector().getRPCMethodTracker();Su("TRACKER: method ".concat(_o30),s),(null==s?void 0:s[_o30].result)?(Su("[initializeMobileProvider: sendRequest()] found result",null==s?void 0:s[_o30].result),e(null==s?void 0:s[_o30].result)):(null==s?void 0:s[_o30].error)&&(Su("[initializeMobileProvider: sendRequest()] found error",null==s?void 0:s[_o30].error),t(null==s?void 0:s[_o30].error)),_i44=function _i44(){return _n72({resolve:e,reject:t});},_r54=null==l?void 0:l.getConnector().on(mo.RPC_UPDATE,_i44);});case 86:_s17=_context92.sent;return _context92.abrupt("return",(_i44&&(null==_r54||_r54.off(mo.RPC_UPDATE,_i44)),Su("TRACKER: result",_s17),_s17));case 90:_context92.prev=90;_context92.t2=_context92["catch"](81);throw Su("[initializeMobileProvider: sendRequest()] error:",_context92.t2),_context92.t2;case 93:r[0]&&"object"==_typeof(r[0])&&(r[0].params={__triggeredInstaller:!0,wrappedParams:r[0].params});return _context92.abrupt("return",i.apply(void 0,_toConsumableArray(r)));case 95:if(!(o.isSecure()&&Ku[n])){_context92.next=97;break;}return _context92.abrupt("return",i.apply(void 0,_toConsumableArray(r)));case 97:if(!c.isExtensionActive()){_context92.next=102;break;}Su("[initializeMobileProvider: sendRequest()] EXTENSION active - redirect request '".concat(n,"' to it"),r,_e114);_context92.next=101;return null===(x=c.getProvider())||void 0===x?void 0:x.request({method:n,params:_e114});case 101:return _context92.abrupt("return",_context92.sent);case 102:throw Su("[initializeMobileProvider: sendRequest()] method=".concat(n," --- skip --- not connected/installed")),new Error("MetaMask is not connected/installed, please call eth_requestAccounts to connect first.");case 103:_context92.prev=103;_context92.next=106;return i.apply(void 0,_toConsumableArray(r));case 106:_e117=_context92.sent;if(Su("[initializeMobileProvider: sendRequest()] method=".concat(n," rpcResponse"),_e117),n===Bu.WALLET_REQUESTPERMISSIONS){_t122=_e117.reduce(function(e,t){var n;if("eth_accounts"===t.parentCapability){var _r55=null===(n=t.caveats.find(function(e){return "restrictReturnedAccounts"===e.type;}))||void 0===n?void 0:n.value;_r55&&e.push.apply(e,_toConsumableArray(_r55));}return e;},[]);Su("[initializeMobileProvider: sendRequest()] accountsToPersist:",_t122),_t122.length>0&&(M.handleAccountsChanged(_t122,!1),null==b||b.persistAccounts(_t122));}return _context92.abrupt("return",_e117);case 111:_context92.prev=111;_context92.t3=_context92["catch"](103);throw console.error("[initializeMobileProvider: sendRequest()] error:",_context92.t3),_context92.t3;case 114:case"end":return _context92.stop();}},_callee86,null,[[21,29],[37,44,71,74],[81,90],[103,111]]);}));},x=E.request;E.request=function(){for(var _len18=arguments.length,e=new Array(_len18),_key18=0;_key18<_len18;_key18++){e[_key18]=arguments[_key18];}return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee87(){return _regeneratorRuntime().wrap(function _callee87$(_context93){while(1)switch(_context93.prev=_context93.next){case 0:return _context93.abrupt("return",k(null==e?void 0:e[0].method,e,x,d));case 1:case"end":return _context93.stop();}},_callee87);}));};M=E.send;return _context95.abrupt("return",(E.send=function(){for(var _len19=arguments.length,e=new Array(_len19),_key19=0;_key19<_len19;_key19++){e[_key19]=arguments[_key19];}return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee88(){return _regeneratorRuntime().wrap(function _callee88$(_context94){while(1)switch(_context94.prev=_context94.next){case 0:return _context94.abrupt("return",k(null==e?void 0:e[0],e,M,d));case 1:case"end":return _context94.stop();}},_callee88);}));},Su("[initializeMobileProvider: sendRequest()] metamaskStream.start()"),f.start(),E));case 31:case"end":return _context95.stop();}},_callee89,null,[[4,11],[14,21]]);}));};function gh(e){var t,n,r,i;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee90(){var o,s,a;return _regeneratorRuntime().wrap(function _callee90$(_context96){while(1)switch(_context96.prev=_context96.next){case 0:o=e.options;s={communicationLayerPreference:null!==(t=o.communicationLayerPreference)&&void 0!==t?t:To.SOCKET,platformManager:e.platformManager,sdk:e,checkInstallationOnAllCalls:o.checkInstallationOnAllCalls,injectProvider:null===(n=o.injectProvider)||void 0===n||n,shouldShimWeb3:null===(r=o.shouldShimWeb3)||void 0===r||r,extensionOnly:null===(i=o.extensionOnly)||void 0===i||i,installer:e.installer,remoteConnection:e.remoteConnection,debug:e.debug};_context96.next=4;return ph(s);case 4:a=_context96.sent;e.activeProvider=a,function(e){var t,n,r,i;null===(n=null===(t=e.remoteConnection)||void 0===t?void 0:t.getConnector())||void 0===n||n.on(rh.ConnectionStatus,function(t){e.emit(rh.ConnectionStatus,t);}),null===(i=null===(r=e.remoteConnection)||void 0===r?void 0:r.getConnector())||void 0===i||i.on(rh.ServiceStatus,function(t){e.emit(rh.ServiceStatus,t);});}(e);case 6:case"end":return _context96.stop();}},_callee90);}));}var mh="sdk";var yh=/*#__PURE__*/function(){function yh(_ref65){var e=_ref65.serverUrl,t=_ref65.enabled,n=_ref65.originatorInfo;_classCallCheck(this,yh);this.serverURL=co,this.serverURL=e,this.originatorInfo=n,this.enabled=null==t||t;}return _createClass(yh,[{key:"send",value:function send(_ref66){var e=_ref66.event,t=_ref66.params;if(!this.enabled)return;var n=Object.assign(Object.assign({id:mh,event:e,sdkVersion:Ju.version},this.originatorInfo),{params:t});Su("[Analytics: send()] event: ".concat(e),n),oo(n,this.serverURL)["catch"](function(e){Su("[Analytics: send()] error: ".concat(e));});}}]);}();var vh=function vh(){if("undefined"==typeof document)return;var e;var t=document.getElementsByTagName("link");for(var n=0;n<t.length;n++)"icon"!==t[n].getAttribute("rel")&&"shortcut icon"!==t[n].getAttribute("rel")||(e=t[n].getAttribute("href"));return e;},bh=163400;function wh(e){var t,n,r;var i=e.dappMetadata,s=function(_ref67){var e=_ref67.url,t=_ref67.name;var n;var r=e+t,i=ch(r);if(!localStorage)return "";var s=null!==(n=localStorage.getItem(i))&&void 0!==n?n:"";if(!s){s=v4();try{localStorage.setItem(i,s);}catch(e){return "";}}return s;}({url:null!==(t=null==i?void 0:i.url)&&void 0!==t?t:"no_url",name:null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"no_name"}),a=null===(r=e.platformManager)||void 0===r?void 0:r.getPlatformType(),c=a===No.DesktopWeb,l=a===No.MetaMaskMobileWebview;var d="N/A";return c?d="extension":l&&(d="mobile"),{id:s,from:d};}var Eh=function Eh(_ref68){var e=_ref68.provider,t=_ref68.sdkInstance;if("state"in e)throw new Error("INVALID EXTENSION PROVIDER");return new Proxy(e,{get:function get(n,r){return "request"===r?function(e){var r,i;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee94(){var o,s,c,_wh,l,d,u;return _regeneratorRuntime().wrap(function _callee94$(_context100){while(1)switch(_context100.prev=_context100.next){case 0:Su("[wrapExtensionProvider()] Overwriting request method",e);o=e.method,s=e.params,c=ju.includes(o.toLowerCase()),_wh=wh(t),l=_wh.id,d=_wh.from;if(!(c&&(null===(r=t.analytics)||void 0===r||r.send({event:wo.SDK_RPC_REQUEST,params:{method:o,from:d,id:l}})),o===Bu.METAMASK_BATCH&&Array.isArray(s))){_context100.next=4;break;}return _context100.abrupt("return",function(_ref69){var e=_ref69.target,t=_ref69.args,n=_ref69.trackEvent,r=_ref69.sdkInstance;return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee91(){var i,o,s,a,_iterator20,_step20,_t123,_n73,_wh2,c,l;return _regeneratorRuntime().wrap(function _callee91$(_context97){while(1)switch(_context97.prev=_context97.next){case 0:if(!("metamask_batch"!==t.method)){_context97.next=2;break;}throw new Error("Invalid usage");case 2:s=[],a=null!==(i=null==t?void 0:t.params)&&void 0!==i?i:[];_iterator20=_createForOfIteratorHelper(a);_context97.prev=4;_iterator20.s();case 6:if((_step20=_iterator20.n()).done){_context97.next=14;break;}_t123=_step20.value;_context97.next=10;return null==e?void 0:e.request({method:_t123.method,params:_t123.params});case 10:_n73=_context97.sent;s.push(_n73);case 12:_context97.next=6;break;case 14:_context97.next=19;break;case 16:_context97.prev=16;_context97.t0=_context97["catch"](4);_iterator20.e(_context97.t0);case 19:_context97.prev=19;_iterator20.f();return _context97.finish(19);case 22:_wh2=wh(r),c=_wh2.id,l=_wh2.from;return _context97.abrupt("return",(n&&(null===(o=r.analytics)||void 0===o||o.send({event:wo.SDK_RPC_REQUEST_DONE,params:{method:t.method,from:l,id:c}})),s));case 24:case"end":return _context97.stop();}},_callee91,null,[[4,16,19,22]]);}));}({target:n,args:e,trackEvent:c,sdkInstance:t}));case 4:if(!(o.toLowerCase()===Bu.METAMASK_CONNECTSIGN.toLowerCase()&&Array.isArray(s))){_context100.next=6;break;}return _context100.abrupt("return",function(_ref70){var e=_ref70.target,t=_ref70.params;return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee92(){var n;return _regeneratorRuntime().wrap(function _callee92$(_context98){while(1)switch(_context98.prev=_context98.next){case 0:_context98.next=2;return e.request({method:Bu.ETH_REQUESTACCOUNTS,params:[]});case 2:n=_context98.sent;if(n.length){_context98.next=5;break;}throw new Error("SDK state invalid -- undefined accounts");case 5:_context98.next=7;return e.request({method:Bu.PERSONAL_SIGN,params:[t[0],n[0]]});case 7:return _context98.abrupt("return",_context98.sent);case 8:case"end":return _context98.stop();}},_callee92);}));}({target:n,params:s}));case 6:if(!(o.toLowerCase()===Bu.METAMASK_CONNECTWITH.toLowerCase()&&Array.isArray(s))){_context100.next=8;break;}return _context100.abrupt("return",function(_ref71){var e=_ref71.target,t=_ref71.params;return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee93(){var _t124,n,r,i,o;return _regeneratorRuntime().wrap(function _callee93$(_context99){while(1)switch(_context99.prev=_context99.next){case 0:_t124=_slicedToArray(t,1);n=_t124[0];r=n.method;i=n.params;_context99.next=6;return e.request({method:Bu.ETH_REQUESTACCOUNTS,params:[]});case 6:o=_context99.sent;if(o.length){_context99.next=9;break;}throw new Error("SDK state invalid -- undefined accounts");case 9:if(!((null==r?void 0:r.toLowerCase())===Bu.PERSONAL_SIGN.toLowerCase())){_context99.next=15;break;}_context99.next=12;return e.request({method:r,params:[i[0],o[0]]});case 12:_context99.t0=_context99.sent;_context99.next=30;break;case 15:if(!((null==r?void 0:r.toLowerCase())===Bu.ETH_SENDTRANSACTION.toLowerCase())){_context99.next=21;break;}_context99.next=18;return e.request({method:r,params:[Object.assign(Object.assign({},i[0]),{from:o[0]})]});case 18:_context99.t1=_context99.sent;_context99.next=29;break;case 21:if(!Uu.includes(r.toLowerCase())){_context99.next=25;break;}_context99.t2=(console.warn("MetaMaskSDK connectWith method=".concat(r," -- not handled by the extension -- call separately")),o);_context99.next=28;break;case 25:_context99.next=27;return e.request({method:r,params:i});case 27:_context99.t2=_context99.sent;case 28:_context99.t1=_context99.t2;case 29:_context99.t0=_context99.t1;case 30:return _context99.abrupt("return",_context99.t0);case 31:case"end":return _context99.stop();}},_callee93);}));}({target:n,params:s}));case 8:_context100.prev=8;_context100.next=11;return n.request(e);case 11:u=_context100.sent;return _context100.abrupt("return",u);case 13:_context100.prev=13;c&&(null===(i=t.analytics)||void 0===i||i.send({event:wo.SDK_RPC_REQUEST_DONE,params:{method:o,from:d,id:l}}));return _context100.finish(13);case 16:case"end":return _context100.stop();}},_callee94,null,[[8,,13,16]]);}));}:"getChainId"===r?function(){return e.chainId;}:"getNetworkVersion"===r?function(){return e.networkVersion;}:"getSelectedAddress"===r?function(){return e.selectedAddress;}:"isConnected"===r?function(){return e._state.isConnected;}:n[r];}});};var Ch;function Sh(_ref72){var e=_ref72.mustBeMetaMask,t=_ref72.sdkInstance;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee95(){var _e118;return _regeneratorRuntime().wrap(function _callee95$(_context101){while(1)switch(_context101.prev=_context101.next){case 0:if(!("undefined"==typeof window)){_context101.next=2;break;}throw new Error("window not available");case 2:_context101.prev=2;_context101.next=5;return new Promise(function(e,t){var n=setTimeout(function(){t(new Error("eip6963RequestProvider timed out"));},500);window.addEventListener(Ch.Announce,function(t){var r=t,_r$detail=r.detail,_r$detail2=_r$detail===void 0?{}:_r$detail,i=_r$detail2.info,o=_r$detail2.provider,_ref73=null!=i?i:{},s=_ref73.name,a=_ref73.rdns,c=_ref73.uuid;nh.test(c)&&s.startsWith(th.NAME)&&a===th.RDNS&&(clearTimeout(n),e(o));}),window.dispatchEvent(new Event(Ch.Request));});case 5:_e118=_context101.sent;return _context101.abrupt("return",Eh({provider:_e118,sdkInstance:t}));case 9:_context101.prev=9;_context101.t0=_context101["catch"](2);if(!(!e&&window.ethereum)){_context101.next=13;break;}return _context101.abrupt("return",Eh({provider:window.ethereum,sdkInstance:t}));case 13:throw new Error("Provider not found");case 14:case"end":return _context101.stop();}},_callee95,null,[[2,9]]);}));}!function(e){e.Announce="eip6963:announceProvider",e.Request="eip6963:requestProvider";}(Ch||(Ch={}));var _h=function _h(e){return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee96(){var t,n,r;return _regeneratorRuntime().wrap(function _callee96$(_context102){while(1)switch(_context102.prev=_context102.next){case 0:t=e.options,n=t.infuraAPIKey;if(n){_context102.next=3;break;}return _context102.abrupt("return");case 3:r={"0x1":"https://mainnet.infura.io/v3/".concat(n),"0x5":"https://goerli.infura.io/v3/".concat(n),"0xaa36a7":"https://sepolia.infura.io/v3/".concat(n),"0xe708":"https://linea-mainnet.infura.io/v3/".concat(n),"0xe704":"https://linea-goerli.infura.io/v3/".concat(n),"0x89":"https://polygon-mainnet.infura.io/v3/".concat(n),"0x13881":"https://polygon-mumbai.infura.io/v3/".concat(n),"0x45":"https://optimism-mainnet.infura.io/v3/".concat(n),"0x1a4":"https://optimism-goerli.infura.io/v3/".concat(n),"0xa4b1":"https://arbitrum-mainnet.infura.io/v3/".concat(n),"0x66eed":"https://arbitrum-goerli.infura.io/v3/".concat(n),"0x2a15c308d":"https://palm-mainnet.infura.io/v3/".concat(n),"0x2a15c3083":"https://palm-testnet.infura.io/v3/".concat(n),"0xa86a":"https://avalanche-mainnet.infura.io/v3/".concat(n),"0xa869":"https://avalanche-fuji.infura.io/v3/".concat(n),"0x4e454152":"https://aurora-mainnet.infura.io/v3/".concat(n),"0x4e454153":"https://aurora-testnet.infura.io/v3/".concat(n),"0x534e5f4d41494e":"https://starknet-mainnet.infura.io/v3/".concat(n),"0x534e5f474f45524c49":"https://starknet-goerli.infura.io/v3/".concat(n),"0x534e5f474f45524c4932":"https://starknet-goerli2.infura.io/v3/".concat(n),"0xa4ec":"https://celo-mainnet.infura.io/v3/".concat(n),"0xaef3":"https://celo-alfajores.infura.io/v3/".concat(n)};e.options.readonlyRPCMap?e.options.readonlyRPCMap=Object.assign(Object.assign({},e.options.readonlyRPCMap),r):e.options.readonlyRPCMap=r;case 5:case"end":return _context102.stop();}},_callee96);}));};var kh={exports:{}};kh.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports;}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==_typeof(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t];}.bind(null,i));return r;},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"];}:function(){return e;};return n.d(t,"a",t),t;},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t);},n.p="",n(n.s=90);}({17:function _(e,t,n){t.__esModule=!0,t["default"]=void 0;var r=n(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var n=t.match(e);return n&&n.length>0&&n[1]||"";},e.getSecondMatch=function(e,t){var n=t.match(e);return n&&n.length>1&&n[2]||"";},e.matchAndReturnConst=function(e,t,n){if(e.test(t))return n;},e.getWindowsVersionName=function(e){switch(e){case"NT":return "NT";case"XP":case"NT 5.1":return "XP";case"NT 5.0":return "2000";case"NT 5.2":return "2003";case"NT 6.0":return "Vista";case"NT 6.1":return "7";case"NT 6.2":return "8";case"NT 6.3":return "8.1";case"NT 10.0":return "10";default:return;}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map(function(e){return parseInt(e,10)||0;});if(t.push(0),10===t[0])switch(t[1]){case 5:return "Leopard";case 6:return "Snow Leopard";case 7:return "Lion";case 8:return "Mountain Lion";case 9:return "Mavericks";case 10:return "Yosemite";case 11:return "El Capitan";case 12:return "Sierra";case 13:return "High Sierra";case 14:return "Mojave";case 15:return "Catalina";default:return;}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map(function(e){return parseInt(e,10)||0;});if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0;},e.getVersionPrecision=function(e){return e.split(".").length;},e.compareVersions=function(t,n,r){void 0===r&&(r=!1);var i=e.getVersionPrecision(t),o=e.getVersionPrecision(n),s=Math.max(i,o),a=0,c=e.map([t,n],function(t){var n=s-e.getVersionPrecision(t),r=t+new Array(n+1).join(".0");return e.map(r.split("."),function(e){return new Array(20-e.length).join("0")+e;}).reverse();});for(r&&(a=s-Math.min(i,o)),s-=1;s>=a;){if(c[0][s]>c[1][s])return 1;if(c[0][s]===c[1][s]){if(s===a)return 0;s-=1;}else if(c[0][s]<c[1][s])return -1;}},e.map=function(e,t){var n,r=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(n=0;n<e.length;n+=1)r.push(t(e[n]));return r;},e.find=function(e,t){var n,r;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(n=0,r=e.length;n<r;n+=1){var i=e[n];if(t(i,n))return i;}},e.assign=function(e){for(var t,n,r=e,i=arguments.length,o=new Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];if(Object.assign)return Object.assign.apply(Object,[e].concat(o));var a=function a(){var e=o[t];"object"==_typeof(e)&&null!==e&&Object.keys(e).forEach(function(t){r[t]=e[t];});};for(t=0,n=o.length;t<n;t+=1)a();return e;},e.getBrowserAlias=function(e){return r.BROWSER_ALIASES_MAP[e];},e.getBrowserTypeByAlias=function(e){return r.BROWSER_MAP[e]||"";},e;}();t["default"]=i,e.exports=t["default"];},18:function _(e,t,n){t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0,t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};},90:function _(e,t,n){t.__esModule=!0,t["default"]=void 0;var r,i=(r=n(91))&&r.__esModule?r:{"default":r},o=n(18);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}var a=function(){function e(){}var t,n,r;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i["default"](e,t);},e.parse=function(e){return new i["default"](e).getResult();},t=e,r=[{key:"BROWSER_MAP",get:function get(){return o.BROWSER_MAP;}},{key:"ENGINE_MAP",get:function get(){return o.ENGINE_MAP;}},{key:"OS_MAP",get:function get(){return o.OS_MAP;}},{key:"PLATFORMS_MAP",get:function get(){return o.PLATFORMS_MAP;}}],(n=null)&&s(t.prototype,n),r&&s(t,r),e;}();t["default"]=a,e.exports=t["default"];},91:function _(e,t,n){t.__esModule=!0,t["default"]=void 0;var r=c(n(92)),i=c(n(93)),o=c(n(94)),s=c(n(95)),a=c(n(17));function c(e){return e&&e.__esModule?e:{"default":e};}var l=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse();}var t=e.prototype;return t.getUA=function(){return this._ua;},t.test=function(e){return e.test(this._ua);},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=a["default"].find(r["default"],function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t);});throw new Error("Browser's test function is not valid");});return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser;},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser();},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||"";},t.getBrowserVersion=function(){return this.getBrowser().version;},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS();},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=a["default"].find(i["default"],function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t);});throw new Error("Browser's test function is not valid");});return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os;},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||"";},t.getOSVersion=function(){return this.getOS().version;},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform();},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||"";},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=a["default"].find(o["default"],function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t);});throw new Error("Browser's test function is not valid");});return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform;},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine();},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||"";},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=a["default"].find(s["default"],function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some(function(t){return e.test(t);});throw new Error("Browser's test function is not valid");});return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine;},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this;},t.getResult=function(){return a["default"].assign({},this.parsedResult);},t.satisfies=function(e){var t=this,n={},r=0,i={},o=0;if(Object.keys(e).forEach(function(t){var s=e[t];"string"==typeof s?(i[t]=s,o+=1):"object"==_typeof(s)&&(n[t]=s,r+=1);}),r>0){var s=Object.keys(n),c=a["default"].find(s,function(e){return t.isOS(e);});if(c){var l=this.satisfies(n[c]);if(void 0!==l)return l;}var d=a["default"].find(s,function(e){return t.isPlatform(e);});if(d){var u=this.satisfies(n[d]);if(void 0!==u)return u;}}if(o>0){var h=Object.keys(i),f=a["default"].find(h,function(e){return t.isBrowser(e,!0);});if(void 0!==f)return this.compareVersion(i[f]);}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var n=this.getBrowserName().toLowerCase(),r=e.toLowerCase(),i=a["default"].getBrowserTypeByAlias(r);return t&&i&&(r=i.toLowerCase()),r===n;},t.compareVersion=function(e){var t=[0],n=e,r=!1,i=this.getBrowserVersion();if("string"==typeof i)return ">"===e[0]||"<"===e[0]?(n=e.substr(1),"="===e[1]?(r=!0,n=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?n=e.substr(1):"~"===e[0]&&(r=!0,n=e.substr(1)),t.indexOf(a["default"].compareVersions(i,n,r))>-1;},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase();},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase();},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase();},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e);},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some(function(e){return t.is(e);});},e;}();t["default"]=l,e.exports=t["default"];},92:function _(e,t,n){t.__esModule=!0,t["default"]=void 0;var r,i=(r=n(17))&&r.__esModule?r:{"default":r},o=/version\/(\d+(\.?_?\d+)+)/i,s=[{test:[/googlebot/i],describe:function describe(e){var t={name:"Googlebot"},n=i["default"].getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/opera/i],describe:function describe(e){var t={name:"Opera"},n=i["default"].getFirstMatch(o,e)||i["default"].getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/opr\/|opios/i],describe:function describe(e){var t={name:"Opera"},n=i["default"].getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/SamsungBrowser/i],describe:function describe(e){var t={name:"Samsung Internet for Android"},n=i["default"].getFirstMatch(o,e)||i["default"].getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/Whale/i],describe:function describe(e){var t={name:"NAVER Whale Browser"},n=i["default"].getFirstMatch(o,e)||i["default"].getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/MZBrowser/i],describe:function describe(e){var t={name:"MZ Browser"},n=i["default"].getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/focus/i],describe:function describe(e){var t={name:"Focus"},n=i["default"].getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/swing/i],describe:function describe(e){var t={name:"Swing"},n=i["default"].getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/coast/i],describe:function describe(e){var t={name:"Opera Coast"},n=i["default"].getFirstMatch(o,e)||i["default"].getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function describe(e){var t={name:"Opera Touch"},n=i["default"].getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/yabrowser/i],describe:function describe(e){var t={name:"Yandex Browser"},n=i["default"].getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/ucbrowser/i],describe:function describe(e){var t={name:"UC Browser"},n=i["default"].getFirstMatch(o,e)||i["default"].getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/Maxthon|mxios/i],describe:function describe(e){var t={name:"Maxthon"},n=i["default"].getFirstMatch(o,e)||i["default"].getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/epiphany/i],describe:function describe(e){var t={name:"Epiphany"},n=i["default"].getFirstMatch(o,e)||i["default"].getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/puffin/i],describe:function describe(e){var t={name:"Puffin"},n=i["default"].getFirstMatch(o,e)||i["default"].getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/sleipnir/i],describe:function describe(e){var t={name:"Sleipnir"},n=i["default"].getFirstMatch(o,e)||i["default"].getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/k-meleon/i],describe:function describe(e){var t={name:"K-Meleon"},n=i["default"].getFirstMatch(o,e)||i["default"].getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/micromessenger/i],describe:function describe(e){var t={name:"WeChat"},n=i["default"].getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/qqbrowser/i],describe:function describe(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},n=i["default"].getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/msie|trident/i],describe:function describe(e){var t={name:"Internet Explorer"},n=i["default"].getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/\sedg\//i],describe:function describe(e){var t={name:"Microsoft Edge"},n=i["default"].getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/edg([ea]|ios)/i],describe:function describe(e){var t={name:"Microsoft Edge"},n=i["default"].getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/vivaldi/i],describe:function describe(e){var t={name:"Vivaldi"},n=i["default"].getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/seamonkey/i],describe:function describe(e){var t={name:"SeaMonkey"},n=i["default"].getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/sailfish/i],describe:function describe(e){var t={name:"Sailfish"},n=i["default"].getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return n&&(t.version=n),t;}},{test:[/silk/i],describe:function describe(e){var t={name:"Amazon Silk"},n=i["default"].getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/phantom/i],describe:function describe(e){var t={name:"PhantomJS"},n=i["default"].getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/slimerjs/i],describe:function describe(e){var t={name:"SlimerJS"},n=i["default"].getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function describe(e){var t={name:"BlackBerry"},n=i["default"].getFirstMatch(o,e)||i["default"].getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/(web|hpw)[o0]s/i],describe:function describe(e){var t={name:"WebOS Browser"},n=i["default"].getFirstMatch(o,e)||i["default"].getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/bada/i],describe:function describe(e){var t={name:"Bada"},n=i["default"].getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/tizen/i],describe:function describe(e){var t={name:"Tizen"},n=i["default"].getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/qupzilla/i],describe:function describe(e){var t={name:"QupZilla"},n=i["default"].getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/firefox|iceweasel|fxios/i],describe:function describe(e){var t={name:"Firefox"},n=i["default"].getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/electron/i],describe:function describe(e){var t={name:"Electron"},n=i["default"].getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/MiuiBrowser/i],describe:function describe(e){var t={name:"Miui"},n=i["default"].getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/chromium/i],describe:function describe(e){var t={name:"Chromium"},n=i["default"].getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/chrome|crios|crmo/i],describe:function describe(e){var t={name:"Chrome"},n=i["default"].getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/GSA/i],describe:function describe(e){var t={name:"Google Search"},n=i["default"].getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:function test(e){var t=!e.test(/like android/i),n=e.test(/android/i);return t&&n;},describe:function describe(e){var t={name:"Android Browser"},n=i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/playstation 4/i],describe:function describe(e){var t={name:"PlayStation 4"},n=i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/safari|applewebkit/i],describe:function describe(e){var t={name:"Safari"},n=i["default"].getFirstMatch(o,e);return n&&(t.version=n),t;}},{test:[/.*/i],describe:function describe(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return {name:i["default"].getFirstMatch(t,e),version:i["default"].getSecondMatch(t,e)};}}];t["default"]=s,e.exports=t["default"];},93:function _(e,t,n){t.__esModule=!0,t["default"]=void 0;var r,i=(r=n(17))&&r.__esModule?r:{"default":r},o=n(18),s=[{test:[/Roku\/DVP/],describe:function describe(e){var t=i["default"].getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return {name:o.OS_MAP.Roku,version:t};}},{test:[/windows phone/i],describe:function describe(e){var t=i["default"].getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return {name:o.OS_MAP.WindowsPhone,version:t};}},{test:[/windows /i],describe:function describe(e){var t=i["default"].getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),n=i["default"].getWindowsVersionName(t);return {name:o.OS_MAP.Windows,version:t,versionName:n};}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function describe(e){var t={name:o.OS_MAP.iOS},n=i["default"].getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return n&&(t.version=n),t;}},{test:[/macintosh/i],describe:function describe(e){var t=i["default"].getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),n=i["default"].getMacOSVersionName(t),r={name:o.OS_MAP.MacOS,version:t};return n&&(r.versionName=n),r;}},{test:[/(ipod|iphone|ipad)/i],describe:function describe(e){var t=i["default"].getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return {name:o.OS_MAP.iOS,version:t};}},{test:function test(e){var t=!e.test(/like android/i),n=e.test(/android/i);return t&&n;},describe:function describe(e){var t=i["default"].getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),n=i["default"].getAndroidVersionName(t),r={name:o.OS_MAP.Android,version:t};return n&&(r.versionName=n),r;}},{test:[/(web|hpw)[o0]s/i],describe:function describe(e){var t=i["default"].getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),n={name:o.OS_MAP.WebOS};return t&&t.length&&(n.version=t),n;}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function describe(e){var t=i["default"].getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i["default"].getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i["default"].getFirstMatch(/\bbb(\d+)/i,e);return {name:o.OS_MAP.BlackBerry,version:t};}},{test:[/bada/i],describe:function describe(e){var t=i["default"].getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return {name:o.OS_MAP.Bada,version:t};}},{test:[/tizen/i],describe:function describe(e){var t=i["default"].getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return {name:o.OS_MAP.Tizen,version:t};}},{test:[/linux/i],describe:function describe(){return {name:o.OS_MAP.Linux};}},{test:[/CrOS/],describe:function describe(){return {name:o.OS_MAP.ChromeOS};}},{test:[/PlayStation 4/],describe:function describe(e){var t=i["default"].getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return {name:o.OS_MAP.PlayStation4,version:t};}}];t["default"]=s,e.exports=t["default"];},94:function _(e,t,n){t.__esModule=!0,t["default"]=void 0;var r,i=(r=n(17))&&r.__esModule?r:{"default":r},o=n(18),s=[{test:[/googlebot/i],describe:function describe(){return {type:"bot",vendor:"Google"};}},{test:[/huawei/i],describe:function describe(e){var t=i["default"].getFirstMatch(/(can-l01)/i,e)&&"Nova",n={type:o.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(n.model=t),n;}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function describe(){return {type:o.PLATFORMS_MAP.tablet,vendor:"Nexus"};}},{test:[/ipad/i],describe:function describe(){return {type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"};}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function describe(){return {type:o.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"};}},{test:[/kftt build/i],describe:function describe(){return {type:o.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"};}},{test:[/silk/i],describe:function describe(){return {type:o.PLATFORMS_MAP.tablet,vendor:"Amazon"};}},{test:[/tablet(?! pc)/i],describe:function describe(){return {type:o.PLATFORMS_MAP.tablet};}},{test:function test(e){var t=e.test(/ipod|iphone/i),n=e.test(/like (ipod|iphone)/i);return t&&!n;},describe:function describe(e){var t=i["default"].getFirstMatch(/(ipod|iphone)/i,e);return {type:o.PLATFORMS_MAP.mobile,vendor:"Apple",model:t};}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function describe(){return {type:o.PLATFORMS_MAP.mobile,vendor:"Nexus"};}},{test:[/[^-]mobi/i],describe:function describe(){return {type:o.PLATFORMS_MAP.mobile};}},{test:function test(e){return "blackberry"===e.getBrowserName(!0);},describe:function describe(){return {type:o.PLATFORMS_MAP.mobile,vendor:"BlackBerry"};}},{test:function test(e){return "bada"===e.getBrowserName(!0);},describe:function describe(){return {type:o.PLATFORMS_MAP.mobile};}},{test:function test(e){return "windows phone"===e.getBrowserName();},describe:function describe(){return {type:o.PLATFORMS_MAP.mobile,vendor:"Microsoft"};}},{test:function test(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return "android"===e.getOSName(!0)&&t>=3;},describe:function describe(){return {type:o.PLATFORMS_MAP.tablet};}},{test:function test(e){return "android"===e.getOSName(!0);},describe:function describe(){return {type:o.PLATFORMS_MAP.mobile};}},{test:function test(e){return "macos"===e.getOSName(!0);},describe:function describe(){return {type:o.PLATFORMS_MAP.desktop,vendor:"Apple"};}},{test:function test(e){return "windows"===e.getOSName(!0);},describe:function describe(){return {type:o.PLATFORMS_MAP.desktop};}},{test:function test(e){return "linux"===e.getOSName(!0);},describe:function describe(){return {type:o.PLATFORMS_MAP.desktop};}},{test:function test(e){return "playstation 4"===e.getOSName(!0);},describe:function describe(){return {type:o.PLATFORMS_MAP.tv};}},{test:function test(e){return "roku"===e.getOSName(!0);},describe:function describe(){return {type:o.PLATFORMS_MAP.tv};}}];t["default"]=s,e.exports=t["default"];},95:function _(e,t,n){t.__esModule=!0,t["default"]=void 0;var r,i=(r=n(17))&&r.__esModule?r:{"default":r},o=n(18),s=[{test:function test(e){return "microsoft edge"===e.getBrowserName(!0);},describe:function describe(e){if(/\sedg\//i.test(e))return {name:o.ENGINE_MAP.Blink};var t=i["default"].getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return {name:o.ENGINE_MAP.EdgeHTML,version:t};}},{test:[/trident/i],describe:function describe(e){var t={name:o.ENGINE_MAP.Trident},n=i["default"].getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:function test(e){return e.test(/presto/i);},describe:function describe(e){var t={name:o.ENGINE_MAP.Presto},n=i["default"].getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:function test(e){var t=e.test(/gecko/i),n=e.test(/like gecko/i);return t&&!n;},describe:function describe(e){var t={name:o.ENGINE_MAP.Gecko},n=i["default"].getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}},{test:[/(apple)?webkit\/537\.36/i],describe:function describe(){return {name:o.ENGINE_MAP.Blink};}},{test:[/(apple)?webkit/i],describe:function describe(e){var t={name:o.ENGINE_MAP.WebKit},n=i["default"].getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return n&&(t.version=n),t;}}];t["default"]=s,e.exports=t["default"];}});var xh=de(kh.exports);var Mh=/*#__PURE__*/function(){function Mh(_ref74){var e=_ref74.useDeepLink,t=_ref74.preferredOpenLink,_ref74$debug=_ref74.debug,n=_ref74$debug===void 0?!1:_ref74$debug;_classCallCheck(this,Mh);this.state={platformType:void 0,useDeeplink:!1,preferredOpenLink:void 0,debug:!1},this.state.platformType=this.getPlatformType(),this.state.useDeeplink=e,this.state.preferredOpenLink=t,this.state.debug=n;}return _createClass(Mh,[{key:"openDeeplink",value:function openDeeplink(e,t,n){return function(e,t,n,r){var i=e.state;Su("[PlatfformManager: openDeeplink()] universalLink --> ".concat(t)),Su("[PlatfformManager: openDeeplink()] deepLink --> ".concat(n));try{if(i.preferredOpenLink)return void i.preferredOpenLink(i.useDeeplink?n:t,r);if(Su("[PlatfformManager: openDeeplink()] open link now useDeepLink=".concat(i.useDeeplink," link=").concat(i.useDeeplink?n:t)),i.useDeeplink)"undefined"!=typeof window&&(window.location.href=n);else if("undefined"!=typeof document){var _e119=document.createElement("a");_e119.href=t,_e119.target="_self",_e119.rel="noreferrer noopener",_e119.click();}}catch(e){console.log("[PlatfformManager: openDeeplink()] can't open link",e);}}(this,e,t,n);}},{key:"isReactNative",value:function isReactNative(){var e;return this.isNotBrowser()&&"undefined"!=typeof window&&(null===window||void 0===window?void 0:window.navigator)&&"ReactNative"===(null===(e=window.navigator)||void 0===e?void 0:e.product);}},{key:"isMetaMaskInstalled",value:function isMetaMaskInstalled(){return function(){var e=lh.getProvider()||(null===window||void 0===window?void 0:window.ethereum);return Su("[PlatfformManager: isMetaMaskInstalled()] isMetaMask=".concat(null==e?void 0:e.isMetaMask," isConnected=").concat(null==e?void 0:e.isConnected())),(null==e?void 0:e.isMetaMask)&&(null==e?void 0:e.isConnected());}();}},{key:"isDesktopWeb",value:function isDesktopWeb(){return this.isBrowser()&&!this.isMobileWeb();}},{key:"isMobile",value:function isMobile(){var e,t;var n=xh.parse(window.navigator.userAgent);return "mobile"===(null===(e=null==n?void 0:n.platform)||void 0===e?void 0:e.type)||"tablet"===(null===(t=null==n?void 0:n.platform)||void 0===t?void 0:t.type);}},{key:"isSecure",value:function isSecure(){return this.isReactNative()||this.isMobileWeb();}},{key:"isMetaMaskMobileWebView",value:function isMetaMaskMobileWebView(){return "undefined"!=typeof window&&Boolean(window.ReactNativeWebView)&&Boolean(navigator.userAgent.endsWith("MetaMaskMobile"));}},{key:"isMobileWeb",value:function isMobileWeb(){return this.state.platformType===No.MobileWeb;}},{key:"isNotBrowser",value:function isNotBrowser(){var e;return "undefined"==typeof window||!(null===window||void 0===window?void 0:window.navigator)||void 0!==c&&"ReactNative"===(null===(e=null==c?void 0:c.navigator)||void 0===e?void 0:e.product)||"ReactNative"===(null===navigator||void 0===navigator?void 0:navigator.product);}},{key:"isNodeJS",value:function isNodeJS(){return this.isNotBrowser()&&!this.isReactNative();}},{key:"isBrowser",value:function isBrowser(){return !this.isNotBrowser();}},{key:"isUseDeepLink",value:function isUseDeepLink(){return this.state.useDeeplink;}},{key:"getPlatformType",value:function getPlatformType(){return function(e){var t=e.state;return t.platformType?t.platformType:e.isReactNative()?No.ReactNative:e.isNotBrowser()?No.NonBrowser:e.isMetaMaskMobileWebView()?No.MetaMaskMobileWebview:e.isMobile()?No.MobileWeb:No.DesktopWeb;}(this);}}]);}();var Ah=function Ah(e){return a(void 0,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee97(){var t,n;return _regeneratorRuntime().wrap(function _callee97$(_context103){while(1)switch(_context103.prev=_context103.next){case 0:t=e.options,n=t.readonlyRPCMap;if(!n){_context103.next=9;break;}_context103.prev=2;Su("[MetaMaskSDK: setupReadOnlyRPCProviders()] Setting up Readonly RPC Providers",n),e.setReadOnlyRPCCalls(!0);_context103.next=9;break;case 6:_context103.prev=6;_context103.t0=_context103["catch"](2);throw new Error("Invalid Infura Settings");case 9:case"end":return _context103.stop();}},_callee97,null,[[2,6]]);}));};function Ih(e,t,n,r){return new(n||(n=Promise))(function(t,i){function o(e){try{a(r.next(e));}catch(e){i(e);}}function s(e){try{a(r["throw"](e));}catch(e){i(e);}}function a(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n(function(e){e(r);})).then(o,s);}a((r=r.apply(e,[])).next());});}function Rh(e,t){var n,r,i,o,s={label:0,sent:function sent(){if(1&i[0])throw i[1];return i[1];},trys:[],ops:[]};return o={next:a(0),"throw":a(1),"return":a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this;}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue;}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break;}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break;}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break;}i[2]&&s.ops.pop(),s.trys.pop();continue;}o=t.call(e,s);}catch(e){o=[6,e],r=0;}finally{n=i=0;}if(5&o[0])throw o[1];return {value:o[0]?o[1]:void 0,done:!0};}([o,a]);};}}var Lh="INSTALLED",Ph="NOT_INSTALLED",Oh="REGISTERED",Th="REGISTERING",Nh="RELOADING",$h={CHROME:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",FIREFOX:"https://addons.mozilla.org/firefox/addon/ether-metamask/",DEFAULT:"https://metamask.io"},Dh="REGISTRATION_IN_PROGRESS",Bh="FORWARDER_ID",Kh=function(){function e(t){var n=void 0===t?{}:t,r=n.forwarderOrigin,i=void 0===r?"https://fwd.metamask.io":r,o=n.forwarderMode,s=void 0===o?e.FORWARDER_MODE.INJECT:o;this.forwarderOrigin=i,this.forwarderMode=s,this.state=e.isMetaMaskInstalled()?Lh:Ph;var a=e._detectBrowser();this.downloadUrl=a?$h[a]:$h.DEFAULT,this._onMessage=this._onMessage.bind(this),this._onMessageFromForwarder=this._onMessageFromForwarder.bind(this),this._openForwarder=this._openForwarder.bind(this),this._openDownloadPage=this._openDownloadPage.bind(this),this.startOnboarding=this.startOnboarding.bind(this),this.stopOnboarding=this.stopOnboarding.bind(this),window.addEventListener("message",this._onMessage),s===e.FORWARDER_MODE.INJECT&&"true"===sessionStorage.getItem(Dh)&&e._injectForwarder(this.forwarderOrigin);}return e.prototype._onMessage=function(e){if(e.origin===this.forwarderOrigin)return "metamask:reload"===e.data.type?this._onMessageFromForwarder(e):void console.debug("Unknown message from '"+e.origin+"' with data "+JSON.stringify(e.data));},e.prototype._onMessageUnknownStateError=function(e){throw new Error("Unknown state: '"+e+"'");},e.prototype._onMessageFromForwarder=function(t){return Ih(this,0,void 0,function(){return Rh(this,function(n){switch(n.label){case 0:switch(this.state){case Nh:return [3,1];case Ph:return [3,2];case Lh:return [3,3];case Th:return [3,5];case Oh:return [3,6];}return [3,7];case 1:return console.debug("Ignoring message while reloading"),[3,8];case 2:return console.debug("Reloading now to register with MetaMask"),this.state=Nh,location.reload(),[3,8];case 3:return console.debug("Registering with MetaMask"),this.state=Th,[4,e._register()];case 4:return n.sent(),this.state=Oh,t.source.postMessage({type:"metamask:registrationCompleted"},t.origin),this.stopOnboarding(),[3,8];case 5:return console.debug("Already registering - ignoring reload message"),[3,8];case 6:return console.debug("Already registered - ignoring reload message"),[3,8];case 7:this._onMessageUnknownStateError(this.state),n.label=8;case 8:return [2];}});});},e.prototype.startOnboarding=function(){sessionStorage.setItem(Dh,"true"),this._openDownloadPage(),this._openForwarder();},e.prototype.stopOnboarding=function(){"true"===sessionStorage.getItem(Dh)&&(this.forwarderMode===e.FORWARDER_MODE.INJECT&&(console.debug("Removing forwarder"),e._removeForwarder()),sessionStorage.setItem(Dh,"false"));},e.prototype._openForwarder=function(){this.forwarderMode===e.FORWARDER_MODE.OPEN_TAB?window.open(this.forwarderOrigin,"_blank"):e._injectForwarder(this.forwarderOrigin);},e.prototype._openDownloadPage=function(){window.open(this.downloadUrl,"_blank");},e.isMetaMaskInstalled=function(){return Boolean(window.ethereum&&window.ethereum.isMetaMask);},e._register=function(){return window.ethereum.request({method:"wallet_registerOnboarding"});},e._injectForwarder=function(e){var t=document.body,n=document.createElement("iframe");n.setAttribute("height","0"),n.setAttribute("width","0"),n.setAttribute("style","display: none;"),n.setAttribute("src",e),n.setAttribute("id",Bh),t.insertBefore(n,t.children[0]);},e._removeForwarder=function(){var e;null===(e=document.getElementById(Bh))||void 0===e||e.remove();},e._detectBrowser=function(){var e=xh.parse(window.navigator.userAgent);return "Firefox"===e.browser.name?"FIREFOX":["Chrome","Chromium"].includes(e.browser.name||"")?"CHROME":null;},e.FORWARDER_MODE={INJECT:"INJECT",OPEN_TAB:"OPEN_TAB"},e;}();function jh(e,_ref75){var _ref75$wait=_ref75.wait,t=_ref75$wait===void 0?!1:_ref75$wait;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee98(){return _regeneratorRuntime().wrap(function _callee98$(_context104){while(1)switch(_context104.prev=_context104.next){case 0:Su("[MetamaskInstaller: startInstaller()] wait=".concat(t));_context104.t0=t;if(!_context104.t0){_context104.next=5;break;}_context104.next=5;return fh(1e3);case 5:_context104.next=7;return e.checkInstallation();case 7:return _context104.abrupt("return",_context104.sent);case 8:case"end":return _context104.stop();}},_callee98);}));}var Uh=/*#__PURE__*/function(){function Uh(_ref76){var e=_ref76.remote,t=_ref76.preferDesktop,n=_ref76.platformManager,_ref76$debug=_ref76.debug,r=_ref76$debug===void 0?!1:_ref76$debug;_classCallCheck(this,Uh);this.state={isInstalling:!1,hasInstalled:!1,resendRequest:null,preferDesktop:!1,platformManager:null,remote:null,debug:!1,connectWith:void 0},this.state.remote=e,this.state.preferDesktop=t,this.state.platformManager=n,this.state.debug=r;}return _createClass(Uh,[{key:"startDesktopOnboarding",value:function startDesktopOnboarding(){return function(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee99(){return _regeneratorRuntime().wrap(function _callee99$(_context105){while(1)switch(_context105.prev=_context105.next){case 0:Su("[MetamaskInstaller: startDesktopOnboarding() starting desktop onboarding"),delete window.ethereum,new Kh().startOnboarding();case 1:case"end":return _context105.stop();}},_callee99);}));}();}},{key:"redirectToProperInstall",value:function redirectToProperInstall(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee101(){return _regeneratorRuntime().wrap(function _callee101$(_context107){while(1)switch(_context107.prev=_context107.next){case 0:return _context107.abrupt("return",function(e){var t,n;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee100(){var r,i;return _regeneratorRuntime().wrap(function _callee100$(_context106){while(1)switch(_context106.prev=_context106.next){case 0:r=e.state,i=null===(t=r.platformManager)||void 0===t?void 0:t.getPlatformType();if(!(Su("[MetamaskInstaller: redirectToProperInstall()] platform=".concat(i)),i===No.MetaMaskMobileWebview)){_context106.next=3;break;}return _context106.abrupt("return",!1);case 3:r.isInstalling=!0;_context106.prev=4;_context106.next=7;return null===(n=r.remote)||void 0===n?void 0:n.startConnection({connectWith:r.connectWith});case 7:r.isInstalling=!1;r.hasInstalled=!0;_context106.next=14;break;case 11:_context106.prev=11;_context106.t0=_context106["catch"](4);throw r.isInstalling=!1,_context106.t0;case 14:return _context106.abrupt("return",!0);case 15:case"end":return _context106.stop();}},_callee100,null,[[4,11]]);}));}(this));case 1:case"end":return _context107.stop();}},_callee101,this);}));}},{key:"checkInstallation",value:function checkInstallation(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee103(){return _regeneratorRuntime().wrap(function _callee103$(_context109){while(1)switch(_context109.prev=_context109.next){case 0:return _context109.abrupt("return",function(e){var t;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee102(){var n,r;return _regeneratorRuntime().wrap(function _callee102$(_context108){while(1)switch(_context108.prev=_context108.next){case 0:n=e.state,r=null===(t=n.platformManager)||void 0===t?void 0:t.isMetaMaskInstalled();Su("[MetamaskInstaller: checkInstallation()] isInstalled=".concat(r));_context108.t0=!!r;if(_context108.t0){_context108.next=7;break;}_context108.next=6;return e.redirectToProperInstall();case 6:_context108.t0=_context108.sent;case 7:return _context108.abrupt("return",_context108.t0);case 8:case"end":return _context108.stop();}},_callee102);}));}(this));case 1:case"end":return _context109.stop();}},_callee103,this);}));}},{key:"start",value:function start(_ref77){var _ref77$wait=_ref77.wait,e=_ref77$wait===void 0?!1:_ref77$wait,t=_ref77.connectWith;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee104(){return _regeneratorRuntime().wrap(function _callee104$(_context110){while(1)switch(_context110.prev=_context110.next){case 0:this.state.connectWith=t;Su("[MetaMaskInstaller: start()] wait=".concat(e),t);_context110.next=4;return jh(this,{wait:e});case 4:case"end":return _context110.stop();}},_callee104,this);}));}}]);}();var Hh=/*#__PURE__*/function(){function Hh(_ref78){var e=_ref78.debug,t=_ref78.sdkVersion;_classCallCheck(this,Hh);this.containers={install:void 0,pending:void 0,select:void 0},this.defined={install:!1,pending:!1,select:!1},this.debug=null!=e&&e,this.sdkVersion=t;}return _createClass(Hh,[{key:"loadComponent",value:function loadComponent(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee105(){var _e120;return _regeneratorRuntime().wrap(function _callee105$(_context111){while(1)switch(_context111.prev=_context111.next){case 0:if(this.defined[e]){_context111.next=12;break;}this.defined[e]=!0;_context111.prev=2;_context111.next=5;return Promise.resolve().then(function(){return xp;});case 5:_e120=_context111.sent;console.log("loader",_e120),_e120.defineCustomElements();_context111.next=12;break;case 9:_context111.prev=9;_context111.t0=_context111["catch"](2);console.error("Failed to load ".concat(e," modal:"),_context111.t0);case 12:case"end":return _context111.stop();}},_callee105,this,[[2,9]]);}));}},{key:"renderInstallModal",value:function renderInstallModal(e){var t;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee106(){var n;return _regeneratorRuntime().wrap(function _callee106$(_context112){while(1)switch(_context112.prev=_context112.next){case 0:this.debug&&console.debug("ModalLoader: renderInstallModal",e);this.containers.install=e.parentElement;_context112.next=4;return this.loadComponent("install");case 4:n=document.createElement("mm-install-modal");n.link=e.link,n.preferDesktop=e.preferDesktop,n.sdkVersion=null!==(t=e.sdkVersion)&&void 0!==t?t:this.sdkVersion,n.addEventListener("close",e.onClose),n.addEventListener("startDesktopOnboarding",e.metaMaskInstaller.startDesktopOnboarding),e.parentElement.appendChild(n);case 6:case"end":return _context112.stop();}},_callee106,this);}));}},{key:"renderSelectModal",value:function renderSelectModal(e){var t;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee107(){var _this44=this;var n;return _regeneratorRuntime().wrap(function _callee107$(_context113){while(1)switch(_context113.prev=_context113.next){case 0:this.containers.select=e.parentElement;_context113.next=3;return this.loadComponent("select");case 3:n=document.createElement("mm-select-modal");n.link=e.link,n.sdkVersion=null!==(t=e.sdkVersion)&&void 0!==t?t:this.sdkVersion,n.addEventListener("close",function(_ref79){var t=_ref79.detail.shouldTerminate;return e.onClose(t);}),n.addEventListener("connectWithExtension",e.connectWithExtension),e.parentElement.appendChild(n),setTimeout(function(){return _this44.updateQRCode(e.link);},100);case 5:case"end":return _context113.stop();}},_callee107,this);}));}},{key:"renderPendingModal",value:function renderPendingModal(e){var t;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee108(){var n;return _regeneratorRuntime().wrap(function _callee108$(_context114){while(1)switch(_context114.prev=_context114.next){case 0:this.containers.pending=e.parentElement;_context114.next=3;return this.loadComponent("pending");case 3:n=document.createElement("mm-pending-modal");n.sdkVersion=null!==(t=e.sdkVersion)&&void 0!==t?t:this.sdkVersion,n.displayOTP=e.displayOTP,n.addEventListener("close",e.onClose),n.addEventListener("updateOTPValue",function(_ref80){var t=_ref80.detail.otpValue;return e.updateOTPValue(t);}),e.onDisconnect&&n.addEventListener("disconnect",e.onDisconnect),e.parentElement.appendChild(n);case 5:case"end":return _context114.stop();}},_callee108,this);}));}},{key:"updateOTPValue",value:function updateOTPValue(e){var _this45=this;var t=function t(){var t;var n=null===(t=_this45.containers.pending)||void 0===t?void 0:t.querySelector("mm-pending-modal");return !!n&&(n.otpCode=e,!0);};setTimeout(function(){t();},800);}},{key:"updateQRCode",value:function updateQRCode(e){var t,n;var r=null===(t=this.containers.install)||void 0===t?void 0:t.querySelector("mm-install-modal");if(r)r.link=e;else {var _t125=null===(n=this.containers.select)||void 0===n?void 0:n.querySelector("mm-select-modal");_t125&&(_t125.link=e);}}},{key:"unmount",value:function unmount(){var _this46=this;Object.entries(this.containers).forEach(function(_ref81){var _ref82=_slicedToArray(_ref81,2),e=_ref82[0],t=_ref82[1];var n;null===(n=null==t?void 0:t.parentNode)||void 0===n||n.removeChild(t),_this46.containers[e]=void 0;});}}]);}();var Fh=function Fh(_ref83){var e=_ref83.link,t=_ref83.debug,n=_ref83.installer,r=_ref83.terminate,i=_ref83.connectWithExtension,o=_ref83.preferDesktop;var s=null,a=null;Su("[UI: InstallModal-web: sdkWebInstallModal()] ################## Installing Modal #################"),Su("[UI: InstallModal-web: sdkWebInstallModal()] link=".concat(e)),Su("[UI: InstallModal-web: sdkWebInstallModal()] npx uri-scheme open \"".concat(e,"\" --ios")),Su("[UI: InstallModal-web: sdkWebInstallModal()] npx uri-scheme open \"".concat(e,"\" --android")),Su("[UI: InstallModal-web: sdkWebInstallModal()] adb shell am start -a android.intent.action.VIEW -d \"".concat(e,"\""));var c=function c(e){var t;Su("[UI: InstallModal-web: sdkWebInstallModal()] installModal-web unmounting install modal -- shouldTerminate:",e,a),(null==a?void 0:a.parentNode)&&(null===(t=a.parentNode)||void 0===t||t.removeChild(a)),a=null,s=null,!0===e&&(null==r||r());};return {mount:function mount(r){if(Su("[UI: InstallModal-web: sdkWebInstallModal()] installModal-web mounting install modal",a),a)return a.style.display="block",void(null==s||s.updateQRCode(r));s=new Hh({debug:t,sdkVersion:Ju.version}),a=document.createElement("div"),document.body.appendChild(a),window.extension?s.renderSelectModal({parentElement:a,connectWithExtension:function connectWithExtension(){c(),null==i||i();},onClose:c,link:e})["catch"](function(e){console.error(e);}):s.renderInstallModal({parentElement:a,preferDesktop:null!=o&&o,link:e,metaMaskInstaller:n,onClose:c})["catch"](function(e){console.error("[UI: InstallModal-web: sdkWebInstallModal()]",e);});},unmount:c};},zh=function zh(_ref84){var e=_ref84.onDisconnect,t=_ref84.debug;var n=null,r=null;var i=function i(){Su("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web unmount",n),(null==n?void 0:n.parentNode)&&n.parentNode.removeChild(n),n=null,r=null;},o=function o(e){Su("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web updateOTPValue",e),r&&r.updateOTPValue(e);},s=function s(){var _ref85=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{displayOTP:!0},s=_ref85.displayOTP;Su("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web mount",n),n?n.style.display="block":(r=new Hh({debug:t,sdkVersion:Ju.version}),n=document.createElement("div"),document.body.appendChild(n),r.renderPendingModal({parentElement:n,onClose:i,onDisconnect:e,updateOTPValue:o,displayOTP:s})["catch"](function(e){console.error("[UI: pendingModal-web: sdkWebPendingModal()]",e);}));};return s(),{mount:s,unmount:i,updateOTPValue:o};};function qh(e,t){var n,r,i,o;e.connector||(Su("[RemoteConnection: initializeConnector()] initialize connector"),e.connector=new Zo({platformType:t.platformManager.getPlatformType(),communicationLayerPreference:t.communicationLayerPreference,transports:t.transports,dappMetadata:Object.assign(Object.assign({},t.dappMetadata),{source:t._source}),analytics:t.enableAnalytics,communicationServerUrl:t.communicationServerUrl,sdkVersion:Ju.version,context:"dapp",ecies:t.ecies,storage:t.storage,logging:t.logging}),t.timer&&(Su("[RemoteConnection: initializeConnector()] reset background timer",t.timer),null===(r=null===(n=t.timer)||void 0===n?void 0:n.stopBackgroundTimer)||void 0===r||r.call(n),null===(o=null===(i=t.timer)||void 0===i?void 0:i.runBackgroundTimer)||void 0===o||o.call(i,function(){return !1;},1e4)));}function Vh(e){e.listeners.forEach(function(_ref86){var t=_ref86.event,n=_ref86.handler;var r;null===(r=e.connector)||void 0===r||r.off(t,n);}),e.listeners=[];}function Wh(e,t,n){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee111(){var _this47=this;return _regeneratorRuntime().wrap(function _callee111$(_context117){while(1)switch(_context117.prev=_context117.next){case 0:return _context117.abrupt("return",new Promise(function(r,i){if(!e.connector)return void i(new Error("No connector available"));Su("[RemoteConnection: connectWithModalInstaller()]",{state:e,options:t,linkParams:n});var o="".concat(e.useDeeplink?eh:Qu,"?").concat(n);!function(e,t,n){var r,i,o,s;e.installModal=null===(i=(r=t.modals).install)||void 0===i?void 0:i.call(r,{link:n,preferDesktop:e.preferDesktop,installer:t.getMetaMaskInstaller(),terminate:function terminate(){Su("[RemoteConnection: showInstallModal() => terminate()] terminate connection"),t.sdk.terminate()["catch"](function(e){console.warn("[MMSDK] failed to terminate connection",e);});},debug:e.developerMode,connectWithExtension:function connectWithExtension(){var e;return null===(e=t.connectWithExtensionProvider)||void 0===e||e.call(t),!1;}}),null===(s=null===(o=e.installModal)||void 0===o?void 0:o.mount)||void 0===s||s.call(o,n);}(e,t,o),t.sdk.once(mo.PROVIDER_UPDATE,function(e){return a(_this47,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee109(){return _regeneratorRuntime().wrap(function _callee109$(_context115){while(1)switch(_context115.prev=_context115.next){case 0:if(Su("[RemoteConnection: connectWithModalInstaller()] once provider_update -- resolving startConnection promise"),e!==ih.TERMINATE)i(e);else {i({code:4001,message:"User rejected the request."});}case 1:case"end":return _context115.stop();}},_callee109);}));}),e.connector.once(mo.AUTHORIZED,function(){r();}),e.connector.once(mo.REJECTED,function(){i(mo.REJECTED);}),e.connector.once(mo.CLIENTS_READY,function(){return a(_this47,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee110(){return _regeneratorRuntime().wrap(function _callee110$(_context116){while(1)switch(_context116.prev=_context116.next){case 0:Su("[RemoteConnection: connectWithModalInstaller()] once clients_ready -- resolving startConnection promise"),r();case 1:case"end":return _context116.stop();}},_callee110);}));});}));case 1:case"end":return _context117.stop();}},_callee111);}));}function Gh(e,t){var _this48=this;function n(t,n){var r;null===(r=e.connector)||void 0===r||r.on(t,n),e.listeners.push({event:t,handler:n});}e.connector&&(Vh(e),n(mo.WALLET_INIT,function(_ref87){var e=_ref87.accounts,t=_ref87.chainId;return a(_this48,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee112(){var n,r;return _regeneratorRuntime().wrap(function _callee112$(_context118){while(1)switch(_context118.prev=_context118.next){case 0:Su("[RemoteConnection: setupListeners() => EventType.WALLET_INIT] 'wallet_init' accounts=".concat(e," chainId=").concat(t));n=lh.getProvider();n._setConnected();r={accounts:e,chainId:t,isUnlocked:!1};n._initializeState(r),n.emit("chainChanged",t),n.emit("accountsChanged",e);case 5:case"end":return _context118.stop();}},_callee112);}));}),n(mo.AUTHORIZED,function(){return a(_this48,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee113(){var t,n,r,i,_o31;return _regeneratorRuntime().wrap(function _callee113$(_context119){while(1)switch(_context119.prev=_context119.next){case 0:_context119.prev=0;Su("[RemoteConnection: setupListeners() => EventType.AUTHORIZED] 'authorized' closing modals",e.pendingModal,e.installModal);_o31=lh.getProvider();_o31._setConnected();null===(n=null===(t=e.pendingModal)||void 0===t?void 0:t.unmount)||void 0===n||n.call(t);null===(i=null===(r=e.installModal)||void 0===r?void 0:r.unmount)||void 0===i||i.call(r,!1);e.otpAnswer=void 0;e.authorized=!0;Su("[RemoteConnection: setupListeners() => EventType.AUTHORIZED] 'authorized' provider.state",_o31.getState());_context119.next=11;return _o31.forceInitializeState();case 11:_context119.next=15;break;case 13:_context119.prev=13;_context119.t0=_context119["catch"](0);case 15:case"end":return _context119.stop();}},_callee113,null,[[0,13]]);}));}),n(mo.TERMINATE,function(){var t,n,r,i,o;null===(n=null===(t=e.pendingModal)||void 0===t?void 0:t.unmount)||void 0===n||n.call(t),null===(i=null===(r=e.installModal)||void 0===r?void 0:r.unmount)||void 0===i||i.call(r,!0),e.pendingModal=void 0,e.installModal=void 0,e.otpAnswer=void 0,null===(o=e.connector)||void 0===o||o.disconnect({terminate:!0}),e.authorized=!1;lh.getProvider().handleDisconnect({terminate:!0}),Vh(e),Su("[RemoteConnection: setupListeners()] All listeners cleaned up");}));}function Zh(e,t){var _ref88=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},n=_ref88.initialCheck,r=_ref88.connectWith;var i,o,s,c,l,d,u,h,f,p,g,m,y,v,b,w,E,C,S;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee115(){var _3,_k3,_x37,_M2,_A2,_t126,_n74,_I,_R,_ref89,_L2,_P2,_O,_T,_N3,_$,_D,_B,_K,_t127,_j,_U;return _regeneratorRuntime().wrap(function _callee115$(_context121){while(1)switch(_context121.prev=_context121.next){case 0:_context121.prev=0;if(!(qh(e,t),!e.connector)){_context121.next=3;break;}throw new Error("no connector defined");case 3:Gh(e);_3=lh.getProvider();e.authorized=!1,_3.emit("connecting");_context121.next=8;return null===(i=e.connector)||void 0===i?void 0:i.originatorSessionConnect();case 8:_k3=_context121.sent;Su("[RemoteConnection: startConnection()] after originatorSessionConnect initialCheck=".concat(n),_k3);_x37=null!==(o=null==_k3?void 0:_k3.channelId)&&void 0!==o?o:"",_M2=null!==(c=null===(s=e.connector.getKeyInfo())||void 0===s?void 0:s.ecies["public"])&&void 0!==c?c:"",_A2=null!==(d=null===(l=e.connector.getKeyInfo())||void 0===l?void 0:l.ecies["private"])&&void 0!==d?d:"";if(!(n&&!_k3)){_context121.next=13;break;}return _context121.abrupt("return",Promise.resolve());case 13:if(!(!_k3&&!n)){_context121.next=20;break;}_context121.next=16;return e.connector.generateChannelIdConnect();case 16:_t126=_context121.sent;_x37=null!==(u=_t126.channelId)&&void 0!==u?u:"",_M2=null!==(h=_t126.pubKey)&&void 0!==h?h:"",_A2=null!==(f=_t126.privKey)&&void 0!==f?f:"";_n74=Date.now();null===(p=e.connector.state.storageManager)||void 0===p||p.persistChannelConfig({channelId:_x37,localKey:_A2,lastActive:_n74,validUntil:_n74+uo});case 20:if(!(n&&(null==_k3?void 0:_k3.channelId))){_context121.next=27;break;}_context121.t0=null===(g=e.connector)||void 0===g?void 0:g.isConnected();if(_context121.t0){_context121.next=26;break;}Su("[RemoteConnection: startConnection()] reconnecting to channel initialCheck=".concat(n),_k3);_context121.next=26;return null===(m=e.connector)||void 0===m?void 0:m.connectToChannel({channelId:_x37});case 26:return _context121.abrupt("return",Promise.resolve());case 27:_context121.t1=_k3&&!(null===(y=e.connector)||void 0===y?void 0:y.isConnected());if(!_context121.t1){_context121.next=32;break;}Su("[RemoteConnection: startConnection()] reconnecting to channel",_k3);_context121.next=32;return null===(v=e.connector)||void 0===v?void 0:v.connectToChannel({channelId:_x37});case 32:_I=(null===(b=e.platformManager)||void 0===b?void 0:b.isSecure())?"":"&t=q",_R=Ju.version,_ref89=t.dappMetadata||{},_L2=_ref89.iconUrl,_P2=_ref89.name,_O=_ref89.url,_T=_ref89.scheme,_N3=null===(w=e.platformManager)||void 0===w?void 0:w.getPlatformType();_$="N/A";"undefined"!=typeof window&&window.location&&window.location.hostname?_$=window.location.hostname:void 0!==_P2?_$=_P2:void 0!==_O&&(_$=_O);_D={url:null!=_O?_O:"",title:null!=_P2?_P2:"",icon:_L2,scheme:null!=_T?_T:"",apiVersion:_R,dappId:_$||_O||"N/A",platform:null!=_N3?_N3:"",source:null!==(E=t._source)&&void 0!==E?E:""},_B=ch(JSON.stringify(_D));_K="channelId=".concat(_x37,"&v=2&comm=").concat(null!==(C=e.communicationLayerPreference)&&void 0!==C?C:"","&pubkey=").concat(_M2).concat(_I,"&originatorInfo=").concat(_B);if(r){_K+="&rpc=".concat(ch(JSON.stringify(r)));_t127=e.connector.getRPCMethodTracker();_t127&&(_t127["".concat(r.id)]=Object.assign(Object.assign({},r),{id:"".concat(r.id),timestamp:Date.now()}));}_j=encodeURI(_K),_U="".concat(e.useDeeplink?eh:Qu,"?").concat(_K);e.qrcodeLink=_U;e.developerMode&&Su("[RemoteConnection: startConnection()] qrcodeLink=".concat(_j));_3.emit("display_uri",_U);if(!(null===(S=e.platformManager)||void 0===S?void 0:S.isSecure())){_context121.next=48;break;}_context121.next=45;return function(e,t){var n,r;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee114(){var i,o;return _regeneratorRuntime().wrap(function _callee114$(_context120){while(1)switch(_context120.prev=_context120.next){case 0:i="".concat(Qu,"?").concat(t),o="".concat(eh,"?").concat(t);null===(r=null===(n=e.platformManager)||void 0===n?void 0:n.openDeeplink)||void 0===r||r.call(n,i,o,"_self");case 2:case"end":return _context120.stop();}},_callee114);}));}(e,_j);case 45:_context121.t2=new Promise(function(t,n){var r,i,o;(null===(r=e.connector)||void 0===r?void 0:r.isAuthorized())?t():(null===(i=e.connector)||void 0===i||i.once(mo.AUTHORIZED,function(){t();}),null===(o=e.connector)||void 0===o||o.once(mo.REJECTED,function(){n(mo.REJECTED);}));});_context121.next=49;break;case 48:_context121.t2=Wh(e,t,_j);case 49:return _context121.abrupt("return",_context121.t2);case 52:_context121.prev=52;_context121.t3=_context121["catch"](0);throw console.error("[startConnection] error",_context121.t3),_context121.t3;case 55:case"end":return _context121.stop();}},_callee115,null,[[0,52]]);}));}var Yh=/*#__PURE__*/function(){function Yh(e){_classCallCheck(this,Yh);var t,n,r;this.state={connector:void 0,qrcodeLink:void 0,analytics:void 0,developerMode:!1,authorized:!1,reconnection:!1,preferDesktop:!1,deeplinkProtocol:!1,listeners:[],communicationLayerPreference:void 0,platformManager:void 0,pendingModal:void 0,installModal:void 0,otpAnswer:void 0},this.options=e;var i=!0===(null===(t=e.logging)||void 0===t?void 0:t.developerMode)||!0===(null===(n=e.logging)||void 0===n?void 0:n.sdk);this.state.developerMode=i,this.state.analytics=e.analytics,this.state.preferDesktop=null!==(r=e.preferDesktop)&&void 0!==r&&r,this.state.useDeeplink=e.sdk.options.useDeeplink,this.state.communicationLayerPreference=e.communicationLayerPreference,this.state.platformManager=e.platformManager,e.modals.install||(e.modals.install=Fh),e.modals.otp||(e.modals.otp=zh);}return _createClass(Yh,[{key:"startConnection",value:function startConnection(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee116(){return _regeneratorRuntime().wrap(function _callee116$(_context122){while(1)switch(_context122.prev=_context122.next){case 0:return _context122.abrupt("return",Zh(this.state,this.options,e));case 1:case"end":return _context122.stop();}},_callee116,this);}));}},{key:"initRemoteCommunication",value:function initRemoteCommunication(_ref90){var e=_ref90.sdkInstance;var t,n,r;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee117(){var i,_e121;return _regeneratorRuntime().wrap(function _callee117$(_context123){while(1)switch(_context123.prev=_context123.next){case 0:_context123.next=2;return null===(n=null===(t=e.options.storage)||void 0===t?void 0:t.storageManager)||void 0===n?void 0:n.getPersistedChannelConfig();case 2:i=_context123.sent;if(!this.options.ecies){_e121={privateKey:null==i?void 0:i.localKey};this.options.ecies=_e121;}qh(this.state,this.options);_context123.next=7;return null===(r=this.getConnector())||void 0===r?void 0:r.initFromDappStorage();case 7:Gh(this.state,this.options);case 8:case"end":return _context123.stop();}},_callee117,this);}));}},{key:"showActiveModal",value:function showActiveModal(){return function(e){var t,n,r,i;e.authorized?Su("[RemoteConnection: showActiveModal()] already authorized"):e.pendingModal?null===(n=(t=e.pendingModal).mount)||void 0===n||n.call(t):e.installModal&&(null===(i=(r=e.installModal).mount)||void 0===i||i.call(r,e.qrcodeLink||""));}(this.state);}},{key:"closeModal",value:function closeModal(){var e,t,n,r;null===(t=null===(e=this.state.pendingModal)||void 0===e?void 0:e.unmount)||void 0===t||t.call(e),null===(r=null===(n=this.state.installModal)||void 0===n?void 0:n.unmount)||void 0===r||r.call(n,!1);}},{key:"getUniversalLink",value:function getUniversalLink(){if(!this.state.qrcodeLink)throw new Error("connection not started. run startConnection() first.");return this.state.qrcodeLink;}},{key:"getChannelConfig",value:function getChannelConfig(){var e;return null===(e=this.state.connector)||void 0===e?void 0:e.getChannelConfig();}},{key:"getKeyInfo",value:function getKeyInfo(){var e;return null===(e=this.state.connector)||void 0===e?void 0:e.getKeyInfo();}},{key:"getConnector",value:function getConnector(){if(!this.state.connector)throw new Error("invalid remote connector");return this.state.connector;}},{key:"getPlatformManager",value:function getPlatformManager(){if(!this.state.platformManager)throw new Error("PlatformManager not available");return this.state.platformManager;}},{key:"isConnected",value:function isConnected(){var e;return (null===(e=this.state.connector)||void 0===e?void 0:e.isReady())||!1;}},{key:"isAuthorized",value:function isAuthorized(){var e;return (null===(e=this.state.connector)||void 0===e?void 0:e.isAuthorized())||!1;}},{key:"isPaused",value:function isPaused(){var e;return null===(e=this.state.connector)||void 0===e?void 0:e.isPaused();}},{key:"disconnect",value:function disconnect(e){var t,n,r;Su("[RemoteConnection: disconnect()]",e),(null==e?void 0:e.terminate)&&(lh.getProvider().handleDisconnect({terminate:!0}),null===(n=null===(t=this.state.pendingModal)||void 0===t?void 0:t.unmount)||void 0===n||n.call(t),this.state.otpAnswer=void 0),null===(r=this.state.connector)||void 0===r||r.disconnect(e),function(e){Su("[RemoteConnection: cleanupConnector()] cleaning up connector"),e.connector&&(Vh(e),e.connector.disconnect({terminate:!0})["catch"](function(e){Su("[RemoteConnection: cleanupConnector()] error disconnecting connector",e);}));}(this.state);}}]);}();function Jh(e){var n,r,i,o,s,c,l,d,u,h,f;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee125(){var p,_e122,_n75,_r56,g,m,_yield,y,v,b;return _regeneratorRuntime().wrap(function _callee125$(_context131){while(1)switch(_context131.prev=_context131.next){case 0:p=e.options;if(p.logging=null!==(n=p.logging)&&void 0!==n?n:{},p.communicationLayerPreference=null!==(r=p.communicationLayerPreference)&&void 0!==r?r:To.SOCKET,void 0!==p.enableDebug&&(t.enable("MM_SDK"),console.warn("enableDebug is removed. Please use enableAnalytics instead.")),p.enableAnalytics=null===(i=p.enableAnalytics)||void 0===i||i,p.injectProvider=null===(o=p.injectProvider)||void 0===o||o,p.shouldShimWeb3=null===(s=p.shouldShimWeb3)||void 0===s||s,p.extensionOnly=null===(c=p.extensionOnly)||void 0===c||c,p.useDeeplink=null===(l=p.useDeeplink)||void 0===l||l,p.storage=null!==(d=p.storage)&&void 0!==d?d:{enabled:!0},p.headless){t("[MetaMaskSDK: performSDKInitialization()] headless mode enabled");_e122=function _e122(){},_n75={install:function install(){return {mount:_e122,unmount:_e122};}},_r56={installer:_e122};p.modals=_n75,p.ui=_r56;}g=!0===(null===(u=p.logging)||void 0===u?void 0:u.developerMode);e.debug=(null===(h=p.logging)||void 0===h?void 0:h.sdk)||g,Su("[MetaMaskSDK: performSDKInitialization()] options",e.options);m=Object.assign({},p.logging);g&&(m.sdk=!0,m.eciesLayer=!0,m.keyExchangeLayer=!0,m.remoteLayer=!0,m.serviceLayer=!0,m.plaintext=!0);_context131.next=8;return function(e){var t;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee118(){var n;return _regeneratorRuntime().wrap(function _callee118$(_context124){while(1)switch(_context124.prev=_context124.next){case 0:n=e.options;e.platformManager=new Mh({useDeepLink:null!==(t=n.useDeeplink)&&void 0!==t&&t,preferredOpenLink:n.openDeeplink,debug:e.debug});case 2:case"end":return _context124.stop();}},_callee118);}));}(e);case 8:_context131.next=10;return function(e){var t,n,r,i,o,s,c,l,d;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee119(){var a,u;return _regeneratorRuntime().wrap(function _callee119$(_context125){while(1)switch(_context125.prev=_context125.next){case 0:a=e.options,u=null===(t=e.platformManager)||void 0===t?void 0:t.getPlatformType();e.analytics=new yh({serverUrl:null!==(n=a.communicationServerUrl)&&void 0!==n?n:co,enabled:a.enableAnalytics,originatorInfo:{url:null!==(r=a.dappMetadata.url)&&void 0!==r?r:"",title:null!==(i=a.dappMetadata.name)&&void 0!==i?i:"",dappId:"undefined"==typeof window||void 0===window.location?null!==(l=null!==(s=null===(o=a.dappMetadata)||void 0===o?void 0:o.name)&&void 0!==s?s:null===(c=a.dappMetadata)||void 0===c?void 0:c.url)&&void 0!==l?l:"N/A":window.location.hostname,platform:null!=u?u:"",source:null!==(d=a._source)&&void 0!==d?d:""}});case 2:case"end":return _context125.stop();}},_callee119);}));}(e);case 10:_context131.next=12;return function(e){var t;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee120(){var n;return _regeneratorRuntime().wrap(function _callee120$(_context126){while(1)switch(_context126.prev=_context126.next){case 0:n=e.options;!0!==(null===(t=n.storage)||void 0===t?void 0:t.enabled)||n.storage.storageManager||(n.storage.storageManager=Gu(n.storage));case 2:case"end":return _context126.stop();}},_callee120);}));}(e);case 12:_context131.next=14;return function(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee121(){var t,n,_e123,_n76;return _regeneratorRuntime().wrap(function _callee121$(_context127){while(1)switch(_context127.prev=_context127.next){case 0:t=e.options,n=/^(http|https):\/\/[^\s]*$/;if(t.dappMetadata){t.dappMetadata.iconUrl&&!n.test(t.dappMetadata.iconUrl)&&(console.warn("Invalid dappMetadata.iconUrl: URL must start with http:// or https://"),t.dappMetadata.iconUrl=void 0),t.dappMetadata.base64Icon&&t.dappMetadata.base64Icon.length>bh&&(console.warn("Invalid dappMetadata.base64Icon: Base64-encoded icon string length must be less than 163400 characters"),t.dappMetadata.base64Icon=void 0),t.dappMetadata.url&&!n.test(t.dappMetadata.url)&&console.warn("Invalid dappMetadata.url: URL must start with http:// or https://");_e123=vh();if(_e123&&!t.dappMetadata.iconUrl&&!t.dappMetadata.base64Icon){_n76="".concat(window.location.protocol,"//").concat(window.location.host).concat(_e123);t.dappMetadata.iconUrl=_n76;}}e.dappMetadata=t.dappMetadata;case 3:case"end":return _context127.stop();}},_callee121);}));}(e);case 14:_context131.next=16;return _h(e);case 16:_context131.next=18;return Ah(e);case 18:_context131.next=20;return function(e){var t,n,r,i;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee122(){var o,s,a,c;return _regeneratorRuntime().wrap(function _callee122$(_context128){while(1)switch(_context128.prev=_context128.next){case 0:o=e.options;a=!1,c=!1;if(!("undefined"!=typeof window&&window.ethereum&&!(null===(t=e.platformManager)||void 0===t?void 0:t.isMetaMaskMobileWebView()))){_context128.next=21;break;}a="extension"===localStorage.getItem(Fu);_context128.prev=4;_context128.next=7;return Sh({mustBeMetaMask:!0,sdkInstance:e});case 7:s=_context128.sent;window.extension=s;s.on(Vu.CHAIN_CHANGED,function(t){Su("[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE chainChanged chainId=".concat(t)),Boolean(e.sdkProvider)&&e.getMobileProvider().emit(Vu.CHAIN_CHANGED,t);});s.on(Vu.ACCOUNTS_CHANGED,function(t){Su("[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE accountsChanged accounts=".concat(t));var n=Boolean(e.sdkProvider),r=Boolean(e.extensionActive);n&&e.getMobileProvider().emit(Vu.ACCOUNTS_CHANGED,t),r&&0===(null==t?void 0:t.length)&&Su("[MetaMaskSDK: setupExtensionPreferences()] permissions were revoked on extension or extension was locked");});s.on(Vu.DISCONNECT,function(t){Su("[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE disconnect error=".concat(t)),Boolean(e.sdkProvider)&&e.getMobileProvider().emit(Vu.DISCONNECT,t);});s.on(Vu.CONNECT,function(t){Su("[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE connect args=".concat(t)),Boolean(e.sdkProvider)&&e.getMobileProvider().emit(Vu.CONNECT,t);});s.on(Vu.CONNECTED,function(t){Su("[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE connected",t),Boolean(e.sdkProvider)&&e.getMobileProvider().emit(Vu.CONNECTED,t);});_context128.next=19;break;case 16:_context128.prev=16;_context128.t0=_context128["catch"](4);window.extension=void 0;case 19:_context128.next=22;break;case 21:(null===(n=e.platformManager)||void 0===n?void 0:n.isMetaMaskMobileWebView())&&(null===(r=e.analytics)||void 0===r||r.send({event:wo.SDK_USE_INAPP_BROWSER}),e.activeProvider=Eh({provider:window.ethereum,sdkInstance:e}),e._initialized=!0,c=!0);case 22:return _context128.abrupt("return",(s&&o.extensionOnly&&(Su("[MetaMaskSDK: setupExtensionPreferences()] EXTENSION ONLY --- prevent sdk initialization"),null===(i=e.analytics)||void 0===i||i.send({event:wo.SDK_USE_EXTENSION}),e.activeProvider=s,e.extensionActive=!0,e.extension=s,e._initialized=!0,c=!0),{preferExtension:a,shouldReturn:c,metamaskBrowserExtension:s}));case 23:case"end":return _context128.stop();}},_callee122,null,[[4,16]]);}));}(e);case 20:_yield=_context131.sent;y=_yield.metamaskBrowserExtension;v=_yield.preferExtension;b=_yield.shouldReturn;if(!b){_context131.next=28;break;}Su("[MetaMaskSDK: performSDKInitialization()] shouldReturn=true --- prevent sdk initialization");_context131.next=43;break;case 28:_context131.next=30;return function(e,t){var n,r,i,o,s;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee123(){var a,c;return _regeneratorRuntime().wrap(function _callee123$(_context129){while(1)switch(_context129.prev=_context129.next){case 0:a=e.options,c=Object.assign({},a.logging);e.remoteConnection=new Yh({preferDesktop:null!==(n=a.preferDesktop)&&void 0!==n&&n,communicationLayerPreference:null!==(r=a.communicationLayerPreference)&&void 0!==r?r:To.SOCKET,analytics:e.analytics,dappMetadata:a.dappMetadata,_source:a._source,enableAnalytics:null===(i=a.enableAnalytics)||void 0===i||i,timer:a.timer,sdk:e,platformManager:e.platformManager,transports:a.transports,communicationServerUrl:a.communicationServerUrl,storage:null!==(o=a.storage)&&void 0!==o?o:{enabled:!0},getMetaMaskInstaller:function getMetaMaskInstaller(){if(!e.installer)throw new Error("Invalid SDK status -- installer not initialized");return e.installer;},logging:c,connectWithExtensionProvider:void 0===t?void 0:function(){return ah(e);},modals:Object.assign(Object.assign({},a.modals),{onPendingModalDisconnect:e.terminate.bind(e)})});_context129.next=4;return e.remoteConnection.initRemoteCommunication({sdkInstance:e});case 4:e.installer=new Uh({remote:e.remoteConnection,preferDesktop:null!==(s=a.preferDesktop)&&void 0!==s&&s,platformManager:e.platformManager,debug:e.debug});case 5:case"end":return _context129.stop();}},_callee123);}));}(e,y);case 30:_context131.next=32;return gh(e);case 32:_context131.next=34;return function(e,t){var n,r;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee124(){var i;return _regeneratorRuntime().wrap(function _callee124$(_context130){while(1)switch(_context130.prev=_context130.next){case 0:i=e.options;t?(Su("[MetaMaskSDK: handleAutoAndExtensionConnections()] preferExtension is detected -- connect with it."),null===(n=e.analytics)||void 0===n||n.send({event:wo.SDK_EXTENSION_UTILIZED}),ah(e)["catch"](function(e){console.warn("Can't connect with MetaMask extension...",e),localStorage.removeItem(Fu);})):i.checkInstallationImmediately&&((null===(r=e.platformManager)||void 0===r?void 0:r.isDesktopWeb())?(Su("[MetaMaskSDK: handleAutoAndExtensionConnections()] checkInstallationImmediately"),e.connect()["catch"](function(e){Su("[MetaMaskSDK: handleAutoAndExtensionConnections()] checkInstallationImmediately --- IGNORED --- error on autoconnect _err=".concat(e));})):console.warn("[handleAutoAndExtensionConnections()] checkInstallationImmediately --- IGNORED --- only for web desktop")),e._initialized=!0;case 2:case"end":return _context130.stop();}},_callee124);}));}(e,v);case 34:_context131.prev=34;_context131.next=37;return null===(f=e.remoteConnection)||void 0===f?void 0:f.startConnection({initialCheck:!0});case 37:_context131.next=42;break;case 39:_context131.prev=39;_context131.t0=_context131["catch"](34);console.error("[MetaMaskSDK: setupRemoteConnectionAndInstaller()] Error while checking installation",_context131.t0);case 42:e.emit(rh.ProviderUpdate,ih.INITIALIZED);case 43:case"end":return _context131.stop();}},_callee125,null,[[34,39]]);}));}var Xh=/*#__PURE__*/function(_n77){function Xh(){var _this49;var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{storage:{enabled:!0},injectProvider:!0,forceInjectProvider:!1,enableAnalytics:!0,shouldShimWeb3:!0,useDeeplink:!0,extensionOnly:!0,headless:!1,dappMetadata:{name:"",url:"",iconUrl:""},_source:Xu,i18nOptions:{enabled:!1}};_classCallCheck(this,Xh);var n,r,i;_this49=_callSuper(this,Xh),_this49.extensionActive=!1,_this49._initialized=!1,_this49.sdkInitPromise=void 0,_this49.debug=!1,_this49.readonlyRPCCalls=!1,_this49.availableLanguages=["en"],t.disable();var o=!0===(null===(n=e.logging)||void 0===n?void 0:n.developerMode);if(((null===(r=e.logging)||void 0===r?void 0:r.sdk)||o)&&t.enable("MM_SDK"),Su("[MetaMaskSDK: constructor()]: begin."),_this49.setMaxListeners(50),!(null===(i=e.dappMetadata)||void 0===i?void 0:i.url)){if("undefined"==typeof window||"undefined"==typeof document)throw new Error("You must provide dAppMetadata url");e.dappMetadata=Object.assign(Object.assign({},e.dappMetadata),{url:"".concat(window.location.protocol,"//").concat(window.location.host)});}_this49.options=e,_this49.options._source||(e._source=Xu),_this49.init().then(function(){Su("[MetaMaskSDK: constructor()]: initialized successfully."),"undefined"!=typeof window&&(window.mmsdk=_this49);})["catch"](function(e){console.error("[MetaMaskSDK: constructor()] error during initialization",e);});return _this49;}_inherits(Xh,_n77);return _createClass(Xh,[{key:"init",value:function init(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee127(){return _regeneratorRuntime().wrap(function _callee127$(_context133){while(1)switch(_context133.prev=_context133.next){case 0:return _context133.abrupt("return",function(e){var t;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee126(){return _regeneratorRuntime().wrap(function _callee126$(_context132){while(1)switch(_context132.prev=_context132.next){case 0:if(!("undefined"!=typeof window&&(null===(t=window.mmsdk)||void 0===t?void 0:t.isInitialized()))){_context132.next=2;break;}return _context132.abrupt("return",(Su("[MetaMaskSDK: initializeMetaMaskSDK()] already initialized"),Promise.resolve(window.mmsdk)));case 2:if(!e._initialized){_context132.next=4;break;}return _context132.abrupt("return",(Su("[MetaMaskSDK: initializeMetaMaskSDK()] already initialized"),e.sdkInitPromise));case 4:if(!e.sdkInitPromise){_context132.next=6;break;}return _context132.abrupt("return",(Su("[MetaMaskSDK: initializeMetaMaskSDK()] already initializing"),e.sdkInitPromise));case 6:_context132.prev=6;e.sdkInitPromise=Jh(e);_context132.next=10;return e.sdkInitPromise;case 10:_context132.next=15;break;case 12:_context132.prev=12;_context132.t0=_context132["catch"](6);throw console.error(_context132.t0),_context132.t0;case 15:return _context132.abrupt("return",e.sdkInitPromise);case 16:case"end":return _context132.stop();}},_callee126,null,[[6,12]]);}));}(this));case 1:case"end":return _context133.stop();}},_callee127,this);}));}},{key:"isExtensionActive",value:function isExtensionActive(){return this.extensionActive;}},{key:"checkExtensionAvailability",value:function checkExtensionAvailability(){var e;return "undefined"!=typeof window&&Boolean(null===(e=window.ethereum)||void 0===e?void 0:e.isMetaMask);}},{key:"connect",value:function connect(){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee129(){return _regeneratorRuntime().wrap(function _callee129$(_context135){while(1)switch(_context135.prev=_context135.next){case 0:return _context135.abrupt("return",function(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee128(){var t;return _regeneratorRuntime().wrap(function _callee128$(_context134){while(1)switch(_context134.prev=_context134.next){case 0:_context134.t0=e._initialized;if(_context134.t0){_context134.next=5;break;}Su("[MetaMaskSDK: connect()] provider not ready -- wait for init()");_context134.next=5;return e.init();case 5:Su("[MetaMaskSDK: connect()] isExtensionActive=".concat(e.isExtensionActive()," activeProvider"),e.activeProvider);if(e.activeProvider){_context134.next=8;break;}throw new Error("SDK state invalid -- undefined provider");case 8:t=e.activeProvider.getSelectedAddress();return _context134.abrupt("return",t?[t]:e.activeProvider.request({method:Bu.ETH_REQUESTACCOUNTS,params:[]}));case 10:case"end":return _context134.stop();}},_callee128);}));}(this));case 1:case"end":return _context135.stop();}},_callee129,this);}));}},{key:"connectAndSign",value:function connectAndSign(_ref91){var e=_ref91.msg;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee130(){return _regeneratorRuntime().wrap(function _callee130$(_context136){while(1)switch(_context136.prev=_context136.next){case 0:return _context136.abrupt("return",sh({instance:this,msg:e}));case 1:case"end":return _context136.stop();}},_callee130,this);}));}},{key:"connectWith",value:function connectWith(e){return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee132(){return _regeneratorRuntime().wrap(function _callee132$(_context138){while(1)switch(_context138.prev=_context138.next){case 0:return _context138.abrupt("return",function(_ref92){var e=_ref92.instance,t=_ref92.rpc;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee131(){return _regeneratorRuntime().wrap(function _callee131$(_context137){while(1)switch(_context137.prev=_context137.next){case 0:_context137.t0=e._initialized;if(_context137.t0){_context137.next=5;break;}Su("[MetaMaskSDK: connectWith()] provider not ready -- wait for init()");_context137.next=5;return e.init();case 5:Su("[MetaMaskSDK: connectWith()] method: ".concat(t.method," rpc=").concat(t));if(e.activeProvider){_context137.next=8;break;}throw new Error("SDK state invalid -- undefined provider");case 8:return _context137.abrupt("return",e.activeProvider.request({method:Bu.METAMASK_CONNECTWITH,params:[t]}));case 9:case"end":return _context137.stop();}},_callee131);}));}({instance:this,rpc:e}));case 1:case"end":return _context138.stop();}},_callee132,this);}));}},{key:"resume",value:function resume(){return function(e){var t,n,r;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee133(){return _regeneratorRuntime().wrap(function _callee133$(_context139){while(1)switch(_context139.prev=_context139.next){case 0:if(null===(n=null===(t=e.remoteConnection)||void 0===t?void 0:t.getConnector())||void 0===n?void 0:n.isReady()){_context139.next=2;break;}return _context139.abrupt("return",(Su("[MetaMaskSDK: resume()] channel is not ready -- starting connection"),void(null===(r=e.remoteConnection)||void 0===r||r.startConnection())));case 2:Su("[MetaMaskSDK: resume()] channel is ready");case 3:case"end":return _context139.stop();}},_callee133);}));}(this);}},{key:"disconnect",value:function disconnect(){return console.warn("MetaMaskSDK.disconnect() is deprecated, use terminate()"),this.terminate();}},{key:"isAuthorized",value:function isAuthorized(){var e;null===(e=this.remoteConnection)||void 0===e||e.isAuthorized();}},{key:"terminate",value:function terminate(){return function(e){var t,n,r;return a(this,void 0,void 0,/*#__PURE__*/_regeneratorRuntime().mark(function _callee134(){return _regeneratorRuntime().wrap(function _callee134$(_context140){while(1)switch(_context140.prev=_context140.next){case 0:if(null===(t=e.platformManager)||void 0===t?void 0:t.isMetaMaskMobileWebView()){_context140.next=12;break;}if(!(oh&&(window.localStorage.removeItem(Fu),window.localStorage.removeItem(qu),window.localStorage.removeItem(zu)),e.extensionActive)){_context140.next=11;break;}_context140.prev=2;_context140.next=5;return null===(n=e.activeProvider)||void 0===n?void 0:n.request({method:Bu.WALLET_REVOKEPERMISSIONS,params:[{eth_accounts:{}}]});case 5:_context140.next=10;break;case 7:_context140.prev=7;_context140.t0=_context140["catch"](2);Su("[MetaMaskSDK: terminate()] error revoking permissions",_context140.t0);case 10:return _context140.abrupt("return",e.options.extensionOnly?void Su("[MetaMaskSDK: terminate()] extensionOnly --- prevent switching providers"):(e.activeProvider=e.sdkProvider,window.ethereum=e.activeProvider,e.extensionActive=!1,void e.emit(rh.ProviderUpdate,ih.TERMINATE)));case 11:e.emit(rh.ProviderUpdate,ih.TERMINATE),Su("[MetaMaskSDK: terminate()] remoteConnection=".concat(e.remoteConnection)),null===(r=e.remoteConnection)||void 0===r||r.disconnect({terminate:!0,sendMessage:!0});case 12:case"end":return _context140.stop();}},_callee134,null,[[2,7]]);}));}(this);}},{key:"isInitialized",value:function isInitialized(){return this._initialized;}},{key:"setReadOnlyRPCCalls",value:function setReadOnlyRPCCalls(e){this.readonlyRPCCalls=e;}},{key:"hasReadOnlyRPCCalls",value:function hasReadOnlyRPCCalls(){return this.readonlyRPCCalls;}},{key:"getProvider",value:function getProvider(){if(this.activeProvider)return this.activeProvider;console.warn("MetaMaskSDK: No active provider found");}},{key:"getMobileProvider",value:function getMobileProvider(){if(!this.sdkProvider)throw new Error("SDK state invalid -- undefined mobile provider");return this.sdkProvider;}},{key:"getUniversalLink",value:function getUniversalLink(){var e;var t=null===(e=this.remoteConnection)||void 0===e?void 0:e.getUniversalLink();if(!t)throw new Error("No Universal Link available, please call eth_requestAccounts first.");return t;}},{key:"getChannelId",value:function getChannelId(){var e,t;return null===(t=null===(e=this.remoteConnection)||void 0===e?void 0:e.getChannelConfig())||void 0===t?void 0:t.channelId;}},{key:"getRPCHistory",value:function getRPCHistory(){var e,t;return null===(t=null===(e=this.remoteConnection)||void 0===e?void 0:e.getConnector())||void 0===t?void 0:t.getRPCMethodTracker();}},{key:"getVersion",value:function getVersion(){return Ju.version;}},{key:"getWalletStatus",value:function getWalletStatus(){var e,t;return null===(t=null===(e=this.remoteConnection)||void 0===e?void 0:e.getConnector())||void 0===t?void 0:t.getConnectionStatus();}},{key:"_getChannelConfig",value:function _getChannelConfig(){var e;return null===(e=this.remoteConnection)||void 0===e?void 0:e.getChannelConfig();}},{key:"_ping",value:function _ping(){var e,t;null===(t=null===(e=this.remoteConnection)||void 0===e?void 0:e.getConnector())||void 0===t||t.ping();}},{key:"_keyCheck",value:function _keyCheck(){var e,t;null===(t=null===(e=this.remoteConnection)||void 0===e?void 0:e.getConnector())||void 0===t||t.keyCheck();}},{key:"_getServiceStatus",value:function _getServiceStatus(){var e,t;return null===(t=null===(e=this.remoteConnection)||void 0===e?void 0:e.getConnector())||void 0===t?void 0:t.getServiceStatus();}},{key:"_getRemoteConnection",value:function _getRemoteConnection(){return this.remoteConnection;}},{key:"_getDappMetadata",value:function _getDappMetadata(){return this.dappMetadata;}},{key:"_getKeyInfo",value:function _getKeyInfo(){var e;return null===(e=this.remoteConnection)||void 0===e?void 0:e.getKeyInfo();}},{key:"_resetKeys",value:function _resetKeys(){var e,t;null===(t=null===(e=this.remoteConnection)||void 0===e?void 0:e.getConnector())||void 0===t||t.resetKeys();}},{key:"_getConnection",value:function _getConnection(){return this.remoteConnection;}},{key:"emit",value:function emit(e,t){return _superPropGet(Xh,"emit",this,3)([e,t]);}},{key:"on",value:function on(e,t){return _superPropGet(Xh,"on",this,3)([e,t]);}}]);}(n);var Qh="hydrated",ef=!1,tf=!1,nf=!0;var rf=Object.defineProperty,of=new WeakMap(),sf=function sf(e){return of.get(e);},af=function af(e,t){return of.set(t.$lazyInstance$=e,t);},cf=function cf(e,t){return t in e;},lf=function lf(e,t){return (0,console.error)(e,t);},df=new Map(),uf=new Map(),hf="slot-fb{display:contents}slot-fb[hidden]{display:none}",ff="undefined"!=typeof window?window:{},pf=ff.document||{head:{}},gf={$flags$:0,$resourcesUrl$:"",jmp:function jmp(e){return e();},raf:function raf(e){return requestAnimationFrame(e);},ael:function ael(e,t,n,r){return e.addEventListener(t,n,r);},rel:function rel(e,t,n,r){return e.removeEventListener(t,n,r);},ce:function ce(e,t){return new CustomEvent(e,t);}},mf=function(){try{return new CSSStyleSheet(),"function"==typeof new CSSStyleSheet().replaceSync;}catch(e){}return !1;}(),yf=!1,vf=[],bf=[],wf=function wf(e,t){return function(t){e.push(t),yf||(yf=!0,4&gf.$flags$?Sf(_Cf):gf.raf(_Cf));};},Ef=function Ef(e){for(var _t128=0;_t128<e.length;_t128++)try{e[_t128](performance.now());}catch(e){lf(e);}e.length=0;},_Cf=function Cf(){Ef(vf),Ef(bf),(yf=vf.length>0)&&gf.raf(_Cf);},Sf=function Sf(e){return function(e){return Promise.resolve(e);}().then(e);},_f=wf(bf),kf={},xf=function xf(e){return "object"===(e=_typeof(e))||"function"===e;};function Mf(e){var t,n,r;return null!=(r=null==(n=null==(t=e.head)?void 0:t.querySelector('meta[name="csp-nonce"]'))?void 0:n.getAttribute("content"))?r:void 0;}(function(e,t){for(var n in t)rf(e,n,{get:t[n],enumerable:!0});})({},{err:function err(){return If;},map:function map(){return Rf;},ok:function ok(){return Af;},unwrap:function unwrap(){return Of;},unwrapErr:function unwrapErr(){return Tf;}});var Af=function Af(e){return {isOk:!0,isErr:!1,value:e};},If=function If(e){return {isOk:!1,isErr:!0,value:e};};function Rf(e,t){if(e.isOk){var _n78=t(e.value);return _n78 instanceof Promise?_n78.then(function(e){return Af(e);}):Af(_n78);}if(e.isErr){var _t129=e.value;return If(_t129);}throw "should never get here";}var Lf,Pf,Of=function Of(e){if(e.isOk)return e.value;throw e.value;},Tf=function Tf(e){if(e.isErr)return e.value;throw e.value;},Nf=function Nf(e,t){var r=null,i=!1,o=!1;var s=[],a=function(_a15){function a(_x38){return _a15.apply(this,arguments);}a.toString=function(){return _a15.toString();};return a;}(function(t){for(var _n79=0;_n79<t.length;_n79++)r=t[_n79],Array.isArray(r)?a(r):null!=r&&"boolean"!=typeof r&&((i="function"!=typeof e&&!xf(r))&&(r=String(r)),i&&o?s[s.length-1].$text$+=r:s.push(i?$f(null,r):r),o=i);});for(var _len20=arguments.length,n=new Array(_len20>2?_len20-2:0),_key20=2;_key20<_len20;_key20++){n[_key20-2]=arguments[_key20];}if(a(n),t){var _e124=t.className||t["class"];_e124&&(t["class"]="object"!=_typeof(_e124)?_e124:Object.keys(_e124).filter(function(t){return _e124[t];}).join(" "));}if("function"==typeof e)return e(null===t?{}:t,s,Bf);var c=$f(e,null);return c.$attrs$=t,s.length>0&&(c.$children$=s),c;},$f=function $f(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null};return n;},Df={},Bf={forEach:function forEach(e,t){return e.map(Kf).forEach(t);},map:function map(e,t){return e.map(Kf).map(t).map(jf);}},Kf=function Kf(e){return {vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$};},jf=function jf(e){if("function"==typeof e.vtag){var _t130=_objectSpread2({},e.vattrs);return e.vkey&&(_t130.key=e.vkey),e.vname&&(_t130.name=e.vname),Nf.apply(void 0,[e.vtag,_t130].concat(_toConsumableArray(e.vchildren||[])));}var t=$f(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t;},Uf=function Uf(e){return sf(e).$hostElement$;},Hf=function Hf(e,t,n){var r=Uf(e);return {emit:function emit(e){return Ff(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e});}};},Ff=function Ff(e,t,n){var r=gf.ce(t,n);return e.dispatchEvent(r),r;},zf=new WeakMap(),qf=function qf(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,i=(t.$tagName$,function(){}),o=function(e,t,n){var r;var i=Vf(t),o=uf.get(i);if(e=11===e.nodeType?e:pf,o)if("string"==typeof o){e=e.head||e;var _n80,_s18=zf.get(e);if(_s18||zf.set(e,_s18=new Set()),!_s18.has(i)){{_n80=pf.createElement("style"),_n80.innerHTML=o;var _i45=null!=(r=gf.$nonce$)?r:Mf(pf);if(null!=_i45&&_n80.setAttribute("nonce",_i45),!(1&t.$flags$))if("HEAD"===e.nodeName){var _t131=e.querySelectorAll("link[rel=preconnect]"),_r57=_t131.length>0?_t131[_t131.length-1].nextSibling:e.querySelector("style");e.insertBefore(_n80,_r57);}else if("host"in e){if(mf){var _t132=new CSSStyleSheet();_t132.replaceSync(o),e.adoptedStyleSheets=[_t132].concat(_toConsumableArray(e.adoptedStyleSheets));}else {var _t133=e.querySelector("style");_t133?_t133.innerHTML=o+_t133.innerHTML:e.prepend(_n80);}}else e.append(_n80);1&t.$flags$&&"HEAD"!==e.nodeName&&e.insertBefore(_n80,null);}4&t.$flags$&&(_n80.innerHTML+=hf),_s18&&_s18.add(i);}}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[].concat(_toConsumableArray(e.adoptedStyleSheets),[o]));return i;}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&2&r&&(n["s-sc"]=o,n.classList.add(o+"-h")),i();},Vf=function Vf(e,t){return "sc-"+e.$tagName$;},Wf=function Wf(e,t,n,r,i,o){if(n!==r){var _s19=cf(e,t),_a16=t.toLowerCase();if("class"===t){var _t134=e.classList,_i46=Zf(n),_o32=Zf(r);_t134.remove.apply(_t134,_toConsumableArray(_i46.filter(function(e){return e&&!_o32.includes(e);}))),_t134.add.apply(_t134,_toConsumableArray(_o32.filter(function(e){return e&&!_i46.includes(e);})));}else if("style"===t){for(var _t135 in n)r&&null!=r[_t135]||(_t135.includes("-")?e.style.removeProperty(_t135):e.style[_t135]="");for(var _t136 in r)n&&r[_t136]===n[_t136]||(_t136.includes("-")?e.style.setProperty(_t136,r[_t136]):e.style[_t136]=r[_t136]);}else if(_s19||"o"!==t[0]||"n"!==t[1]){var _a17=xf(r);if((_s19||_a17&&null!==r)&&!i)try{if(e.tagName.includes("-"))e[t]=r;else {var _i47=null==r?"":r;"list"===t?_s19=!1:null!=n&&e[t]==_i47||("function"==typeof e.__lookupSetter__(t)?e[t]=_i47:e.setAttribute(t,_i47));}}catch(e){}null==r||!1===r?!1===r&&""!==e.getAttribute(t)||e.removeAttribute(t):(!_s19||4&o||i)&&!_a17&&(r=!0===r?"":r,e.setAttribute(t,r));}else if(t="-"===t[2]?t.slice(3):cf(ff,_a16)?_a16.slice(2):_a16[2]+t.slice(3),n||r){var _i48=t.endsWith(Yf);t=t.replace(Jf,""),n&&gf.rel(e,t,n,_i48),r&&gf.ael(e,t,r,_i48);}}},Gf=/\s/,Zf=function Zf(e){return e?e.split(Gf):[];},Yf="Capture",Jf=new RegExp(Yf+"$"),Xf=function Xf(e,t,n){var r=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||kf,o=t.$attrs$||kf;var _iterator21=_createForOfIteratorHelper(Qf(Object.keys(i))),_step21;try{for(_iterator21.s();!(_step21=_iterator21.n()).done;){var _e125=_step21.value;_e125 in o||Wf(r,_e125,i[_e125],void 0,n,t.$flags$);}}catch(err){_iterator21.e(err);}finally{_iterator21.f();}var _iterator22=_createForOfIteratorHelper(Qf(Object.keys(o))),_step22;try{for(_iterator22.s();!(_step22=_iterator22.n()).done;){var _e126=_step22.value;Wf(r,_e126,i[_e126],o[_e126],n,t.$flags$);}}catch(err){_iterator22.e(err);}finally{_iterator22.f();}};function Qf(e){return e.includes("ref")?[].concat(_toConsumableArray(e.filter(function(e){return "ref"!==e;})),["ref"]):e;}var ep=!1,tp=!1,_np=function np(e,t,n,r){var i=t.$children$[n];var o,s,a=0;if(null!==i.$text$)o=i.$elm$=pf.createTextNode(i.$text$);else {tp||(tp="svg"===i.$tag$),o=i.$elm$=pf.createElementNS(tp?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",!ep&&tf&&2&i.$flags$?"slot-fb":i.$tag$),tp&&"foreignObject"===i.$tag$&&(tp=!1),Xf(null,i,tp);if(!!o.getRootNode().querySelector("body")&&ef&&function(e){return null!=e;}(Lf)&&o["s-si"]!==Lf&&o.classList.add(o["s-si"]=Lf),i.$children$)for(a=0;a<i.$children$.length;++a)s=_np(e,i,a),s&&o.appendChild(s);"svg"===i.$tag$?tp=!1:"foreignObject"===o.tagName&&(tp=!0);}return o["s-hn"]=Pf,o;},rp=function rp(e,t,n,r,i,o){var s,a=e;for(a.shadowRoot&&a.tagName===Pf&&(a=a.shadowRoot);i<=o;++i)r[i]&&(s=_np(null,n,i),s&&(r[i].$elm$=s,ap(a,s,t)));},ip=function ip(e,t,n){for(var _r58=t;_r58<=n;++_r58){var _t137=e[_r58];if(_t137){var _e127=_t137.$elm$;_e127&&_e127.remove();}}},op=function op(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;return e.$tag$===t.$tag$;},_sp=function sp(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;var r=t.$elm$=e.$elm$,i=e.$children$,o=t.$children$,s=t.$tag$,a=t.$text$;null===a?(Xf(e,t,tp="svg"===s||"foreignObject"!==s&&tp),null!==i&&null!==o?function(e,t,n,r){var i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:!1;var o,s=0,a=0,c=t.length-1,l=t[0],d=t[c],u=r.length-1,h=r[0],f=r[u];for(;s<=c&&a<=u;)null==l?l=t[++s]:null==d?d=t[--c]:null==h?h=r[++a]:null==f?f=r[--u]:op(l,h,i)?(_sp(l,h,i),l=t[++s],h=r[++a]):op(d,f,i)?(_sp(d,f,i),d=t[--c],f=r[--u]):op(l,f,i)?(_sp(l,f,i),ap(e,l.$elm$,d.$elm$.nextSibling),l=t[++s],f=r[--u]):op(d,h,i)?(_sp(d,h,i),ap(e,d.$elm$,l.$elm$),d=t[--c],h=r[++a]):(o=_np(t&&t[a],n,a),h=r[++a],o&&ap(l.$elm$.parentNode,o,l.$elm$));s>c?rp(e,null==r[u+1]?null:r[u+1].$elm$,n,r,a,u):a>u&&ip(t,s,c);}(r,i,t,o,n):null!==o?(null!==e.$text$&&(r.textContent=""),rp(r,null,t,o,0,o.length-1)):!n&&nf&&null!==i&&ip(i,0,i.length-1),tp&&"svg"===s&&(tp=!1)):e.$text$!==a&&(r.data=a);},ap=function ap(e,t,n){return null==e?void 0:e.insertBefore(t,n);},cp=function cp(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!1;var r=e.$hostElement$,i=e.$cmpMeta$,o=e.$vnode$||$f(null,null),s=(a=t)&&a.$tag$===Df?t:Nf(null,null,t);var a;if(Pf=r.tagName,n&&s.$attrs$)for(var _i49=0,_Object$keys=Object.keys(s.$attrs$);_i49<_Object$keys.length;_i49++){var _e128=_Object$keys[_i49];r.hasAttribute(_e128)&&!["key","ref","style","class"].includes(_e128)&&(s.$attrs$[_e128]=r[_e128]);}s.$tag$=null,s.$flags$|=4,e.$vnode$=s,s.$elm$=o.$elm$=r.shadowRoot||r,Lf=r["s-sc"],ep=0!=(1&i.$flags$),_sp(o,s,n);},lp=function lp(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(function(t){return e.$onRenderResolve$=t;}));},dp=function dp(e,t){if(e.$flags$|=16,4&e.$flags$)return void(e.$flags$|=512);lp(e,e.$ancestorComponent$);return _f(function(){return up(e,t);});},up=function up(e,t){var n=e.$hostElement$,r=(e.$cmpMeta$.$tagName$,function(){}),i=e.$lazyInstance$;if(!i)throw new Error("Can't render component <".concat(n.tagName.toLowerCase()," /> with invalid Stencil runtime! Make sure this imported component is compiled with a `externalRuntime: true` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime"));return r(),hp(undefined,function(){return pp(e,i,t);});},hp=function hp(e,t){return fp(e)?e.then(t)["catch"](function(e){console.error(e),t();}):t();},fp=function fp(e){return e instanceof Promise||e&&e.then&&"function"==typeof e.then;},pp=/*#__PURE__*/function(){var _ref93=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee135(e,t,n){var r,i,o,s,a,_t138,_n81;return _regeneratorRuntime().wrap(function _callee135$(_context141){while(1)switch(_context141.prev=_context141.next){case 0:i=e.$hostElement$,o=(e.$cmpMeta$.$tagName$,function(){}),s=i["s-rc"];n&&qf(e);a=(e.$cmpMeta$.$tagName$,function(){});gp(e,t,i,n),s&&(s.map(function(e){return e();}),i["s-rc"]=void 0),a(),o();_t138=null!=(r=i["s-p"])?r:[],_n81=function _n81(){return mp(e);};0===_t138.length?_n81():(Promise.all(_t138).then(_n81),e.$flags$|=4,_t138.length=0);case 6:case"end":return _context141.stop();}},_callee135);}));return function pp(_x39,_x40,_x41){return _ref93.apply(this,arguments);};}(),gp=function gp(e,t,n,r){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,cp(e,t,r);}catch(t){lf(t,e.$hostElement$);}return null;},mp=function mp(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function n(){},r=e.$lazyInstance$,i=e.$ancestorComponent$;64&e.$flags$?n():(e.$flags$|=64,bp(t),vp(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),i||yp()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Sf(function(){return dp(e,!1);}),e.$flags$&=-517;},yp=function yp(e){bp(pf.documentElement),Sf(function(){return Ff(ff,"appload",{detail:{namespace:"sdk-install-modal-web"}});});},vp=function vp(e,t,n){if(e&&e[t])try{return e[t](n);}catch(e){lf(e);}},bp=function bp(e){var t;return e.classList.add(null!=(t=Qh)?t:"hydrated");},wp=function wp(e,t,n,r){var i=sf(e);if(!i)throw new Error("Couldn't find host element for \"".concat(r.$tagName$,"\" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457)."));var o=i.$hostElement$,s=i.$instanceValues$.get(t),a=i.$flags$,c=i.$lazyInstance$;var l,d;l=n,d=r.$members$[t][0],n=null==l||xf(l)?l:4&d?"false"!==l&&(""===l||!!l):1&d?String(l):l;var u=Number.isNaN(s)&&Number.isNaN(n);if((!(8&a)||void 0===s)&&n!==s&&!u&&(i.$instanceValues$.set(t,n),c)){if(r.$watchers$&&128&a){var _e129=r.$watchers$[t];_e129&&_e129.map(function(e){try{c[e](n,s,t);}catch(e){lf(e,o);}});}2==(18&a)&&dp(i,!1);}},Ep=function Ep(e,t,n){var r,i;var o=e.prototype;if(t.$members$||t.$watchers$||e.watchers){e.watchers&&!t.$watchers$&&(t.$watchers$=e.watchers);var _s20=Object.entries(null!=(r=t.$members$)?r:{});if(_s20.map(function(_ref94){var _ref95=_slicedToArray(_ref94,2),e=_ref95[0],_ref95$=_slicedToArray(_ref95[1],1),r=_ref95$[0];(31&r||2&n&&32&r)&&Object.defineProperty(o,e,{get:function get(){return t=e,sf(this).$instanceValues$.get(t);var t;},set:function set(n){wp(this,e,n,t);},configurable:!0,enumerable:!0});}),1&n){var _n82=new Map();o.attributeChangedCallback=function(e,r,i){var _this50=this;gf.jmp(function(){var s;var a=_n82.get(e);if(_this50.hasOwnProperty(a))i=_this50[a],delete _this50[a];else {if(o.hasOwnProperty(a)&&"number"==typeof _this50[a]&&_this50[a]==i)return;if(null==a){var _n83=sf(_this50),_o33=null==_n83?void 0:_n83.$flags$;if(_o33&&!(8&_o33)&&128&_o33&&i!==r){var _o34=_n83.$lazyInstance$,_a18=null==(s=t.$watchers$)?void 0:s[e];null==_a18||_a18.forEach(function(t){null!=_o34[t]&&_o34[t].call(_o34,i,r,e);});}return;}}_this50[a]=(null!==i||"boolean"!=typeof _this50[a])&&i;});},e.observedAttributes=Array.from(new Set([].concat(_toConsumableArray(Object.keys(null!=(i=t.$watchers$)?i:{})),_toConsumableArray(_s20.filter(function(_ref96){var _ref97=_slicedToArray(_ref96,2),e=_ref97[0],t=_ref97[1];return 15&t[0];}).map(function(_ref98){var _ref99=_slicedToArray(_ref98,2),e=_ref99[0],t=_ref99[1];var r=t[1]||e;return _n82.set(r,e),r;})))));}}return e;},Cp=/*#__PURE__*/function(){var _ref100=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee136(e,t,n,r){var i,_e130,_t139,_r59,_n84,_e132,_t140,_r60,o,s;return _regeneratorRuntime().wrap(function _callee136$(_context142){while(1)switch(_context142.prev=_context142.next){case 0:if(!(0==(32&t.$flags$))){_context142.next=26;break;}t.$flags$|=32;if(!n.$lazyBundleId$){_context142.next=22;break;}_e130=function(e,t,n){var r=e.$tagName$.replace(/-/g,"_"),i=e.$lazyBundleId$;if(!i)return;var o=df.get(i);if(o)return o[r];{var _e131=function _e131(e){return df.set(i,e),e[r];};switch(i){case"mm-install-modal":return Promise.resolve().then(function(){return sg;}).then(_e131,lf);case"mm-pending-modal":return Promise.resolve().then(function(){return cg;}).then(_e131,lf);case"mm-select-modal":return Promise.resolve().then(function(){return hg;}).then(_e131,lf);}}return import(/* webpackIgnore: true *//* @vite-ignore *//* webpackInclude: /\.entry\.js$/ *//* webpackExclude: /\.system\.entry\.js$/ *//* webpackMode: "lazy" */"./".concat(i,".entry.js")).then(function(e){return df.set(i,e),e[r];},lf);}(n);if(!(_e130&&"then"in _e130)){_context142.next=12;break;}_t139=function _t139(){};_context142.next=8;return _e130;case 8:i=_context142.sent;_t139();_context142.next=13;break;case 12:i=_e130;case 13:if(i){_context142.next=15;break;}throw new Error("Constructor for \"".concat(n.$tagName$,"#").concat(t.$modeName$,"\" was not found"));case 15:i.isProxied||(n.$watchers$=i.watchers,Ep(i,n,2),i.isProxied=!0);_r59=(n.$tagName$,function(){});t.$flags$|=8;try{new i(t);}catch(e){lf(e);}t.$flags$&=-9,t.$flags$|=128,_r59(),Sp(t.$lazyInstance$);_context142.next=25;break;case 22:i=e.constructor;_n84=e.localName;customElements.whenDefined(_n84).then(function(){return t.$flags$|=128;});case 25:if(i&&i.style){"string"==typeof i.style&&(_e132=i.style);_t140=Vf(n);if(!uf.has(_t140)){_r60=(n.$tagName$,function(){});((function(e,t,n){var r=uf.get(e);mf&&n?(r=r||new CSSStyleSheet(),"string"==typeof r?r=t:r.replaceSync(t)):r=t,uf.set(e,r);}))(_t140,_e132,!!(1&n.$flags$)),_r60();}}case 26:o=t.$ancestorComponent$,s=function s(){return dp(t,!0);};o&&o["s-rc"]?o["s-rc"].push(s):s();case 28:case"end":return _context142.stop();}},_callee136);}));return function Cp(_x42,_x43,_x44,_x45){return _ref100.apply(this,arguments);};}(),Sp=function Sp(e){vp(e,"connectedCallback");},_p=function _p(e){vp(e,"disconnectedCallback");},kp=function kp(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var n;var r=function r(){},i=[],o=t.exclude||[],s=ff.customElements,a=pf.head,c=a.querySelector("meta[charset]"),l=pf.createElement("style"),d=[];var u,h=!0;Object.assign(gf,t),gf.$resourcesUrl$=new URL(t.resourcesUrl||"./",pf.baseURI).href;var f=!1;if(e.map(function(e){e[1].map(function(t){var n;var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};4&r.$flags$&&(f=!0),r.$members$=t[2],r.$watchers$=null!=(n=t[4])?n:{};var a=r.$tagName$,c=/*#__PURE__*/function(_HTMLElement){function c(e){var _this51;_classCallCheck(this,c);if(_this51=_callSuper(this,c,[e]),_this51.hasRegisteredEventListeners=!1,function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map()};n.$onReadyPromise$=new Promise(function(e){return n.$onReadyResolve$=e;}),e["s-p"]=[],e["s-rc"]=[],of.set(e,n);}(e=_assertThisInitialized(_this51),r),1&r.$flags$)if(e.shadowRoot){if("open"!==e.shadowRoot.mode)throw new Error("Unable to re-use existing shadow root for ".concat(r.$tagName$,"! Mode is set to ").concat(e.shadowRoot.mode," but Stencil only supports open shadow roots."));}else e.attachShadow({mode:"open"});return _this51;}_inherits(c,_HTMLElement);return _createClass(c,[{key:"connectedCallback",value:function connectedCallback(){var _this52=this;sf(this),this.hasRegisteredEventListeners||(this.hasRegisteredEventListeners=!0),u&&(clearTimeout(u),u=null),h?d.push(this):gf.jmp(function(){return function(e){if(0==(1&gf.$flags$)){var _t141=sf(e),_n85=_t141.$cmpMeta$,_r61=(_n85.$tagName$,function(){});if(1&_t141.$flags$)(null==_t141?void 0:_t141.$lazyInstance$)?Sp(_t141.$lazyInstance$):(null==_t141?void 0:_t141.$onReadyPromise$)&&_t141.$onReadyPromise$.then(function(){return Sp(_t141.$lazyInstance$);});else {_t141.$flags$|=1;{var _n86=e;for(;_n86=_n86.parentNode||_n86.host;)if(_n86["s-p"]){lp(_t141,_t141.$ancestorComponent$=_n86);break;}}_n85.$members$&&Object.entries(_n85.$members$).map(function(_ref101){var _ref102=_slicedToArray(_ref101,2),t=_ref102[0],_ref102$=_slicedToArray(_ref102[1],1),n=_ref102$[0];if(31&n&&e.hasOwnProperty(t)){var _n87=e[t];delete e[t],e[t]=_n87;}}),Cp(e,_t141,_n85);}_r61();}}(_this52);});}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this53=this;gf.jmp(function(){return function(){var _ref103=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee137(e){var _t142;return _regeneratorRuntime().wrap(function _callee137$(_context143){while(1)switch(_context143.prev=_context143.next){case 0:if(0==(1&gf.$flags$)){_t142=sf(e);(null==_t142?void 0:_t142.$lazyInstance$)?_p(_t142.$lazyInstance$):(null==_t142?void 0:_t142.$onReadyPromise$)&&_t142.$onReadyPromise$.then(function(){return _p(_t142.$lazyInstance$);});}case 1:case"end":return _context143.stop();}},_callee137);}));return function(_x46){return _ref103.apply(this,arguments);};}()(_this53);});}},{key:"componentOnReady",value:function componentOnReady(){return sf(this).$onReadyPromise$;}}]);}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));r.$lazyBundleId$=e[0],o.includes(a)||s.get(a)||(i.push(a),s.define(a,Ep(c,r,1)));});}),i.length>0&&(f&&(l.textContent+=hf),l.textContent+=i.sort()+"{visibility:hidden}.hydrated{visibility:inherit}",l.innerHTML.length)){l.setAttribute("data-styles","");var _e133=null!=(n=gf.$nonce$)?n:Mf(pf);null!=_e133&&l.setAttribute("nonce",_e133),a.insertBefore(l,c?c.nextSibling:a.firstChild);}h=!1,d.length?d.map(function(e){return e.connectedCallback();}):gf.jmp(function(){return u=setTimeout(yp,30);}),r();};!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor);},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e);}}();var xp=Object.freeze({__proto__:null,defineCustomElements:function(){var _defineCustomElements=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee138(e,t){return _regeneratorRuntime().wrap(function _callee138$(_context144){while(1)switch(_context144.prev=_context144.next){case 0:if(!("undefined"!=typeof window)){_context144.next=4;break;}_context144.next=3;return void 0;case 3:return _context144.abrupt("return",kp([["mm-install-modal",[[1,"mm-install-modal",{link:[1],sdkVersion:[1,"sdk-version"],preferDesktop:[4,"prefer-desktop"],tab:[32],translationsLoaded:[32]},null,{preferDesktop:["updatePreferDesktop"],link:["updateLink"],translationsLoaded:["onTranslationsLoaded"],tab:["onTabChange"]}]]],["mm-pending-modal",[[1,"mm-pending-modal",{displayOTP:[4,"display-o-t-p"],sdkVersion:[1,"sdk-version"],otpCode:[1,"otp-code"],translationsLoaded:[32]}]]],["mm-select-modal",[[1,"mm-select-modal",{link:[1],sdkVersion:[1,"sdk-version"],tab:[32],translationsLoaded:[32]},null,{link:["updateLink"]}]]]],t));case 4:case"end":return _context144.stop();}},_callee138);}));function defineCustomElements(_x47,_x48){return _defineCustomElements.apply(this,arguments);}return defineCustomElements;}(),setNonce:function setNonce(e){return gf.$nonce$=e;}});var Mp={fontFamily:"Roboto, sans-serif"},Ap=function Ap(_ref104,t){var e=_ref104.className;return Nf("div",{style:Mp,"class":e},t);};function Ip(_ref105){var e=_ref105.version;return Nf("div",{style:{textAlign:"center",color:"#BBC0C5",fontSize:"12"}},"SDK Version ",e?"v".concat(e):"unknown");}var Rp=function Rp(){return Nf("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Nf("rect",{width:"16",height:"16",fill:"white"}),Nf("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.40554 2.40554C2.94627 1.86482 3.82296 1.86482 4.36369 2.40554L8 6.04186L11.6363 2.40554C12.177 1.86482 13.0537 1.86482 13.5945 2.40554C14.1352 2.94627 14.1352 3.82296 13.5945 4.36369L9.95814 8L13.5945 11.6363C14.1352 12.177 14.1352 13.0537 13.5945 13.5945C13.0537 14.1352 12.177 14.1352 11.6363 13.5945L8 9.95814L4.36369 13.5945C3.82296 14.1352 2.94627 14.1352 2.40554 13.5945C1.86482 13.0537 1.86482 12.177 2.40554 11.6363L6.04186 8L2.40554 4.36369C1.86482 3.82296 1.86482 2.94627 2.40554 2.40554Z",fill:"#BBC0C5"}));},Lp=function Lp(){return Nf("svg",{width:"273",height:"51",viewBox:"0 0 273 51",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Nf("path",{d:"M240.882 25.9263C239.472 24.997 237.916 24.3361 236.443 23.5101C235.489 22.9731 234.473 22.4982 233.643 21.8167C232.233 20.6602 232.524 18.3885 233.996 17.3973C236.112 15.993 239.617 16.7777 239.99 19.6483C239.99 19.7102 240.052 19.7515 240.114 19.7515H243.308C243.391 19.7515 243.454 19.6896 243.433 19.607C243.267 17.6244 242.5 15.9723 241.089 14.9191C239.741 13.9072 238.206 13.3702 236.568 13.3702C228.127 13.3702 227.359 22.271 231.901 25.0796C232.42 25.41 236.879 27.6404 238.455 28.611C240.032 29.5816 240.529 31.3576 239.845 32.7619C239.223 34.0423 237.605 34.9303 235.987 34.8271C234.224 34.7238 232.855 33.7738 232.378 32.2869C232.295 32.0185 232.254 31.5022 232.254 31.275C232.254 31.2131 232.192 31.1511 232.129 31.1511H228.666C228.604 31.1511 228.541 31.2131 228.541 31.275C228.541 33.7738 229.164 35.1575 230.864 36.4172C232.461 37.615 234.203 38.1106 236.008 38.1106C240.737 38.1106 243.184 35.4466 243.682 32.6793C244.117 29.974 243.308 27.5371 240.882 25.9263Z",fill:"#24292E"}),Nf("path",{d:"M90.4943 13.8246H88.9595H87.2795C87.2173 13.8246 87.1758 13.8659 87.1551 13.9072L84.3137 23.2416C84.2722 23.3655 84.1063 23.3655 84.0648 23.2416L81.2234 13.9072C81.2026 13.8452 81.1612 13.8246 81.0989 13.8246H79.419H77.8842H75.8102C75.748 13.8246 75.6857 13.8865 75.6857 13.9485V37.7802C75.6857 37.8422 75.748 37.9041 75.8102 37.9041H79.2738C79.336 37.9041 79.3982 37.8422 79.3982 37.7802V19.6689C79.3982 19.5244 79.6056 19.5037 79.6471 19.6276L82.5093 29.024L82.7167 29.6849C82.7374 29.7468 82.7789 29.7675 82.8411 29.7675H85.4959C85.5581 29.7675 85.5996 29.7262 85.6203 29.6849L85.8277 29.024L88.6899 19.6276C88.7313 19.4831 88.9387 19.5244 88.9387 19.6689V37.7802C88.9387 37.8422 89.001 37.9041 89.0632 37.9041H92.5268C92.589 37.9041 92.6513 37.8422 92.6513 37.7802V13.9485C92.6513 13.8865 92.589 13.8246 92.5268 13.8246H90.4943Z",fill:"#24292E"}),Nf("path",{d:"M187.849 13.8246C187.787 13.8246 187.745 13.8659 187.725 13.9072L184.883 23.2416C184.842 23.3655 184.676 23.3655 184.634 23.2416L181.793 13.9072C181.772 13.8452 181.731 13.8246 181.668 13.8246H176.4C176.338 13.8246 176.276 13.8865 176.276 13.9485V37.7802C176.276 37.8422 176.338 37.9041 176.4 37.9041H179.864C179.926 37.9041 179.988 37.8422 179.988 37.7802V19.6689C179.988 19.5244 180.196 19.5037 180.237 19.6276L183.099 29.024L183.307 29.6849C183.328 29.7468 183.369 29.7675 183.431 29.7675H186.086C186.148 29.7675 186.19 29.7262 186.211 29.6849L186.418 29.024L189.28 19.6276C189.322 19.4831 189.529 19.5244 189.529 19.6689V37.7802C189.529 37.8422 189.591 37.9041 189.653 37.9041H193.117C193.179 37.9041 193.241 37.8422 193.241 37.7802V13.9485C193.241 13.8865 193.179 13.8246 193.117 13.8246H187.849Z",fill:"#24292E"}),Nf("path",{d:"M143.174 13.8246H136.724H133.261H126.81C126.748 13.8246 126.686 13.8865 126.686 13.9485V16.9223C126.686 16.9843 126.748 17.0462 126.81 17.0462H133.136V37.7802C133.136 37.8422 133.198 37.9041 133.261 37.9041H136.724C136.786 37.9041 136.849 37.8422 136.849 37.7802V17.0462H143.174C143.237 17.0462 143.299 16.9843 143.299 16.9223V13.9485C143.299 13.8865 143.257 13.8246 143.174 13.8246Z",fill:"#24292E"}),Nf("path",{d:"M163.604 37.9041H166.756C166.839 37.9041 166.901 37.8215 166.881 37.7389L160.368 13.8245C160.347 13.7626 160.306 13.7419 160.244 13.7419H159.041H156.925H155.722C155.66 13.7419 155.619 13.7832 155.598 13.8245L149.085 37.7389C149.065 37.8215 149.127 37.9041 149.21 37.9041H152.362C152.425 37.9041 152.466 37.8628 152.487 37.8215L154.374 30.862C154.395 30.8 154.436 30.7794 154.499 30.7794H161.467C161.53 30.7794 161.571 30.8207 161.592 30.862L163.479 37.8215C163.5 37.8628 163.562 37.9041 163.604 37.9041ZM155.328 27.3719L157.859 18.0581C157.9 17.9342 158.066 17.9342 158.107 18.0581L160.638 27.3719C160.659 27.4545 160.596 27.5371 160.513 27.5371H155.453C155.37 27.5371 155.308 27.4545 155.328 27.3719Z",fill:"#24292E"}),Nf("path",{d:"M217.362 37.9041H220.515C220.598 37.9041 220.66 37.8215 220.639 37.7389L214.127 13.8245C214.106 13.7626 214.065 13.7419 214.002 13.7419H212.8H210.684H209.481C209.419 13.7419 209.377 13.7832 209.357 13.8245L202.844 37.7389C202.823 37.8215 202.886 37.9041 202.969 37.9041H206.121C206.183 37.9041 206.225 37.8628 206.246 37.8215L208.133 30.862C208.154 30.8 208.195 30.7794 208.257 30.7794H215.226C215.288 30.7794 215.33 30.8207 215.351 30.862L217.238 37.8215C217.259 37.8628 217.3 37.9041 217.362 37.9041ZM209.087 27.3719L211.617 18.0581C211.659 17.9342 211.825 17.9342 211.866 18.0581L214.397 27.3719C214.417 27.4545 214.355 27.5371 214.272 27.5371H209.211C209.129 27.5371 209.066 27.4545 209.087 27.3719Z",fill:"#24292E"}),Nf("path",{d:"M106.713 34.3727V26.9795C106.713 26.9176 106.775 26.8556 106.837 26.8556H116.067C116.129 26.8556 116.191 26.7936 116.191 26.7317V23.7579C116.191 23.6959 116.129 23.634 116.067 23.634H106.837C106.775 23.634 106.713 23.572 106.713 23.5101V17.1907C106.713 17.1288 106.775 17.0668 106.837 17.0668H117.332C117.394 17.0668 117.457 17.0049 117.457 16.9429V13.9691C117.457 13.9072 117.394 13.8452 117.332 13.8452H106.713H103.125C103.063 13.8452 103.001 13.9072 103.001 13.9691V17.0668V23.6546V26.8763V34.5173V37.7802C103.001 37.8422 103.063 37.9041 103.125 37.9041H106.713H117.768C117.83 37.9041 117.892 37.8422 117.892 37.7802V34.6412C117.892 34.5792 117.83 34.5173 117.768 34.5173H106.817C106.755 34.4966 106.713 34.4553 106.713 34.3727Z",fill:"#24292E"}),Nf("path",{d:"M272.532 37.6976L260.544 25.3687C260.502 25.3274 260.502 25.2448 260.544 25.2035L271.329 14.0517C271.412 13.9691 271.349 13.8452 271.246 13.8452H266.828C266.787 13.8452 266.766 13.8659 266.745 13.8865L257.599 23.3449C257.516 23.4275 257.391 23.3655 257.391 23.2623V13.9691C257.391 13.9072 257.329 13.8452 257.267 13.8452H253.803C253.741 13.8452 253.679 13.9072 253.679 13.9691V37.8009C253.679 37.8628 253.741 37.9248 253.803 37.9248H257.267C257.329 37.9248 257.391 37.8628 257.391 37.8009V27.3099C257.391 27.2067 257.536 27.1447 257.599 27.2273L267.969 37.8835C267.989 37.9041 268.031 37.9248 268.052 37.9248H272.469C272.552 37.9041 272.615 37.7596 272.532 37.6976Z",fill:"#24292E"}),Nf("path",{d:"M52.021 1L31.0526 16.4886L34.9517 7.36063L52.021 1Z",fill:"#E17726",stroke:"#E17726","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M3.65491 1L24.4366 16.6331L20.7241 7.36063L3.65491 1Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M44.4716 36.9127L38.8925 45.4211L50.8389 48.7047L54.261 37.0986L44.4716 36.9127Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M1.43555 37.0986L4.83695 48.7047L16.7626 45.4211L11.2042 36.9127L1.43555 37.0986Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M16.1197 22.5395L12.8013 27.5371L24.6232 28.074L24.2292 15.3734L16.1197 22.5395Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M39.5561 22.5394L31.3222 15.2288L31.0526 28.0739L42.8746 27.537L39.5561 22.5394Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M16.7626 45.4212L23.918 41.9724L17.7582 37.1813L16.7626 45.4212Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M31.7578 41.9724L38.8925 45.4212L37.9177 37.1813L31.7578 41.9724Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M38.8923 45.4212L31.7577 41.9724L32.3384 46.5983L32.2762 48.5602L38.8923 45.4212Z",fill:"#D5BFB2",stroke:"#D5BFB2","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M16.7625 45.4212L23.3994 48.5602L23.3579 46.5983L23.9179 41.9724L16.7625 45.4212Z",fill:"#D5BFB2",stroke:"#D5BFB2","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M23.5239 34.1249L17.5922 32.3902L21.7818 30.4696L23.5239 34.1249Z",fill:"#233447",stroke:"#233447","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M32.1517 34.1249L33.8939 30.4696L38.1042 32.3902L32.1517 34.1249Z",fill:"#233447",stroke:"#233447","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M16.7626 45.4212L17.7996 36.9128L11.2042 37.0987L16.7626 45.4212Z",fill:"#CC6228",stroke:"#CC6228","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M37.8761 36.9128L38.8924 45.4212L44.4715 37.0987L37.8761 36.9128Z",fill:"#CC6228",stroke:"#CC6228","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M42.8745 27.5371L31.0526 28.074L32.1518 34.1249L33.894 30.4696L38.1042 32.3902L42.8745 27.5371Z",fill:"#CC6228",stroke:"#CC6228","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M17.5922 32.3902L21.7817 30.4696L23.5239 34.1249L24.6232 28.074L12.8012 27.5371L17.5922 32.3902Z",fill:"#CC6228",stroke:"#CC6228","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M12.8013 27.5371L17.7582 37.1813L17.5923 32.3902L12.8013 27.5371Z",fill:"#E27525",stroke:"#E27525","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M38.1044 32.3902L37.9177 37.1813L42.8746 27.5371L38.1044 32.3902Z",fill:"#E27525",stroke:"#E27525","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M24.6232 28.0741L23.524 34.125L24.9136 41.2703L25.2247 31.8533L24.6232 28.0741Z",fill:"#E27525",stroke:"#E27525","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M31.0526 28.0741L30.4719 31.8327L30.7623 41.2703L32.1519 34.125L31.0526 28.0741Z",fill:"#E27525",stroke:"#E27525","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M32.1519 34.1249L30.7623 41.2702L31.7578 41.9724L37.9177 37.1813L38.1043 32.3901L32.1519 34.1249Z",fill:"#F5841F",stroke:"#F5841F","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M17.5922 32.3901L17.7581 37.1813L23.918 41.9724L24.9135 41.2702L23.5239 34.1249L17.5922 32.3901Z",fill:"#F5841F",stroke:"#F5841F","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M32.2763 48.5602L32.3385 46.5983L31.7993 46.1439H23.8765L23.358 46.5983L23.3995 48.5602L16.7626 45.4211L19.0855 47.3211L23.7935 50.5633H31.8615L36.5903 47.3211L38.8924 45.4211L32.2763 48.5602Z",fill:"#C0AC9D",stroke:"#C0AC9D","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M31.7578 41.9724L30.7622 41.2703H24.9135L23.918 41.9724L23.358 46.5983L23.8765 46.144H31.7993L32.3385 46.5983L31.7578 41.9724Z",fill:"#24292E",stroke:"#24292E","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M52.9128 17.5005L54.6757 8.95079L52.021 1L31.7578 15.9723L39.5561 22.5394L50.5692 25.7404L52.9958 22.9111L51.938 22.147L53.618 20.6188L52.3321 19.6276L54.0121 18.3472L52.9128 17.5005Z",fill:"#763E1A",stroke:"#763E1A","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M1 8.95079L2.78366 17.5005L1.64295 18.3472L3.34365 19.6276L2.05775 20.6188L3.73771 22.147L2.67996 22.9111L5.10657 25.7404L16.1196 22.5394L23.918 15.9723L3.65475 1L1 8.95079Z",fill:"#763E1A",stroke:"#763E1A","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M50.5692 25.7404L39.5561 22.5394L42.8746 27.5371L37.9177 37.1813L44.4716 37.0987H54.261L50.5692 25.7404Z",fill:"#F5841F",stroke:"#F5841F","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M16.1196 22.5394L5.10651 25.7404L1.43549 37.0987H11.2041L17.7581 37.1813L12.8011 27.5371L16.1196 22.5394Z",fill:"#F5841F",stroke:"#F5841F","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M31.0526 28.0741L31.7578 15.9724L34.9518 7.36072H20.7239L23.9179 15.9724L24.6231 28.0741L24.8927 31.8739L24.9135 41.2703H30.7622L30.783 31.8739L31.0526 28.0741Z",fill:"#F5841F",stroke:"#F5841F","stroke-width":"0.5","stroke-linecap":"round","stroke-linejoin":"round"}));},Pp={DESKTOP:"Desktop",MOBILE:"Mobile",META_MASK_MOBILE_APP:"MetaMask mobile app",SCAN_TO_CONNECT:"Scan to connect and sign with",CONNECT_WITH_EXTENSION:"Connect With MetaMask Extension",INSTALL_MODAL:{TRUSTED_BY_USERS:"Trusted by over 30 million users to buy, store, send and swap crypto securely",LEADING_CRYPTO_WALLET:"The leading crypto wallet & gateway to blockchain apps built on Ethereum Mainnet, Polygon, Optimism, and many other networks",CONTROL_DIGITAL_INTERACTIONS:"Puts you in control of your digital interactions by making power of cryptography more accessible",INSTALL_META_MASK_EXTENSION:"Install MetaMask Extension"},PENDING_MODAL:{OPEN_META_MASK_SELECT_CODE:"Please open the MetaMask wallet app and select the code on the screen OR disconnect",OPEN_META_MASK_CONTINUE:"Open the MetaMask app to continue with your session.",NUMBER_AFTER_OPEN_NOTICE:"If a number doesn't appear after opening MetaMask, please click disconnect and re-scan the QRCode.",DISCONNECT:"Disconnect"},SELECT_MODAL:{CRYPTO_TAKE_CONTROL_TEXT:"Take control of your crypto and explore the blockchain with the wallet trusted by over 30 million people worldwide"},META_MASK_MODAL:{ADDRESS_COPIED:"Address copied to clipboard!",DISCONNECT:"Disconnect",ACTIVE_NETWORK:"Active Network"}};var Op=/*#__PURE__*/function(){function Op(e){_classCallCheck(this,Op);var t;this.translations=Pp,this.supportedLocales=["es","fr","he","it","pt","tr"],this.baseUrl=null!==(t=null==e?void 0:e.baseUrl)&&void 0!==t?t:"https://raw.githubusercontent.com/MetaMask/metamask-sdk/refs/heads/gh-pages/locales";}return _createClass(Op,[{key:"getBrowserLanguage",value:function getBrowserLanguage(){if((navigator.languages||[navigator.language]).some(function(e){return e.toLowerCase().startsWith("en");}))return "en";var e=navigator.language.toLowerCase().split("-")[0];return this.supportedLocales.includes(e)?e:"en";}},{key:"init",value:function(){var _init=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee139(e){var t;return _regeneratorRuntime().wrap(function _callee139$(_context145){while(1)switch(_context145.prev=_context145.next){case 0:t=this.getBrowserLanguage()||e.fallbackLng;_context145.next=3;return this.loadTranslations(t);case 3:case"end":return _context145.stop();}},_callee139,this);}));function init(_x49){return _init.apply(this,arguments);}return init;}()},{key:"loadTranslations",value:function(){var _loadTranslations=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee140(e){var t,_e134,_n88;return _regeneratorRuntime().wrap(function _callee140$(_context146){while(1)switch(_context146.prev=_context146.next){case 0:t=e.split("-")[0];if(!("en"!==t&&this.supportedLocales.includes(t))){_context146.next=19;break;}_context146.prev=2;_e134="".concat(this.baseUrl,"/").concat(t,".json");_context146.next=6;return fetch(_e134);case 6:_n88=_context146.sent;if(_n88.ok){_context146.next=9;break;}throw new Error("HTTP error! status: ".concat(_n88.status));case 9:_context146.next=11;return _n88.json();case 11:this.translations=_context146.sent;_context146.next=17;break;case 14:_context146.prev=14;_context146.t0=_context146["catch"](2);console.warn("\u274C Failed to load ".concat(t," translations, falling back to English:"),_context146.t0),this.translations=Pp;case 17:_context146.next=20;break;case 19:this.translations=Pp;case 20:case"end":return _context146.stop();}},_callee140,this,[[2,14]]);}));function loadTranslations(_x50){return _loadTranslations.apply(this,arguments);}return loadTranslations;}()},{key:"t",value:function t(e){return this.getNestedTranslation(e,this.translations)||e;}},{key:"getNestedTranslation",value:function getNestedTranslation(e,t){var n=e.split(".");var r=t;var _iterator23=_createForOfIteratorHelper(n),_step23;try{for(_iterator23.s();!(_step23=_iterator23.n()).done;){var _e135=_step23.value;if("object"!=_typeof(r))return "";r=r[_e135];}}catch(err){_iterator23.e(err);}finally{_iterator23.f();}return "string"==typeof r?r:"";}}]);}();function Tp(e,t){return e.toString(2).padStart(t,"0");}function Np(e,t){var n=e%t;return n>=0?n:t+n;}function $p(e,t){return new Array(e).fill(t);}function Dp(){var t=0;for(var _len21=arguments.length,e=new Array(_len21),_key21=0;_key21<_len21;_key21++){e[_key21]=arguments[_key21];}for(var _i50=0,_e136=e;_i50<_e136.length;_i50++){var _n89=_e136[_i50];t=Math.max(t,_n89.length);}var n=[];for(var _r62=0;_r62<t;_r62++){var _iterator24=_createForOfIteratorHelper(e),_step24;try{for(_iterator24.s();!(_step24=_iterator24.n()).done;){var _t143=_step24.value;_r62>=_t143.length||n.push(_t143[_r62]);}}catch(err){_iterator24.e(err);}finally{_iterator24.f();}}return new Uint8Array(n);}function Bp(e,t,n){if(n<0||n+t.length>e.length)return !1;for(var _r63=0;_r63<t.length;_r63++)if(t[_r63]!==e[n+_r63])return !1;return !0;}function Kp(e){return {has:function has(t){return e.includes(t);},decode:function decode(t){if(!Array.isArray(t)||t.length&&"string"!=typeof t[0])throw new Error("alphabet.decode input should be array of strings");return t.map(function(t){if("string"!=typeof t)throw new Error("alphabet.decode: not string element=".concat(t));var n=e.indexOf(t);if(-1===n)throw new Error("Unknown letter: \"".concat(t,"\". Allowed: ").concat(e));return n;});},encode:function encode(t){if(!Array.isArray(t)||t.length&&"number"!=typeof t[0])throw new Error("alphabet.encode input should be an array of numbers");return t.map(function(t){if(function(e){if(!Number.isSafeInteger(e))throw new Error("Wrong integer: ".concat(e));}(t),t<0||t>=e.length)throw new Error("Digit index outside alphabet: ".concat(t," (alphabet: ").concat(e.length,")"));return e[t];});}};}var jp=/*#__PURE__*/function(){function jp(e,t){_classCallCheck(this,jp);var _jp$size=jp.size(e),n=_jp$size.height,r=_jp$size.width;this.data=t||Array.from({length:n},function(){return $p(r,void 0);}),this.height=n,this.width=r;}return _createClass(jp,[{key:"point",value:function point(e){return this.data[e.y][e.x];}},{key:"isInside",value:function isInside(e){return 0<=e.x&&e.x<this.width&&0<=e.y&&e.y<this.height;}},{key:"size",value:function size(e){if(!e)return {height:this.height,width:this.width};var _this$xy=this.xy(e),t=_this$xy.x,n=_this$xy.y;return {height:this.height-n,width:this.width-t};}},{key:"xy",value:function xy(e){if("number"==typeof e&&(e={x:e,y:e}),!Number.isSafeInteger(e.x))throw new Error("Bitmap: wrong x=".concat(e.x));if(!Number.isSafeInteger(e.y))throw new Error("Bitmap: wrong y=".concat(e.y));return e.x=Np(e.x,this.width),e.y=Np(e.y,this.height),e;}},{key:"rect",value:function rect(e,t,n){var _this$xy2=this.xy(e),r=_this$xy2.x,i=_this$xy2.y,_jp$size2=jp.size(t,this.size({x:r,y:i})),o=_jp$size2.height,s=_jp$size2.width;for(var _e137=0;_e137<o;_e137++)for(var _t144=0;_t144<s;_t144++)this.data[i+_e137][r+_t144]="function"==typeof n?n({x:_t144,y:_e137},this.data[i+_e137][r+_t144]):n;return this;}},{key:"rectRead",value:function rectRead(e,t,n){return this.rect(e,t,function(e,t){return n(e,t),t;});}},{key:"hLine",value:function hLine(e,t,n){return this.rect(e,{width:t,height:1},n);}},{key:"vLine",value:function vLine(e,t,n){return this.rect(e,{width:1,height:t},n);}},{key:"border",value:function border(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:2;var t=arguments.length>1?arguments[1]:undefined;var n=this.height+2*e,r=this.width+2*e,i=$p(e,t),o=Array.from({length:e},function(){return $p(r,t);});return new jp({height:n,width:r},[].concat(o,_toConsumableArray(this.data.map(function(e){return [].concat(_toConsumableArray(i),_toConsumableArray(e),_toConsumableArray(i));})),o));}},{key:"embed",value:function embed(e,t){return this.rect(e,t.size(),function(_ref106){var e=_ref106.x,n=_ref106.y;return t.data[n][e];});}},{key:"rectSlice",value:function rectSlice(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.size();var n=new jp(jp.size(t,this.size(this.xy(e))));return this.rect(e,t,function(_ref107,r){var e=_ref107.x,t=_ref107.y;return n.data[t][e]=r;}),n;}},{key:"inverse",value:function inverse(){var _this54=this;var e=this.height,t=this.width;return new jp({height:t,width:e}).rect({x:0,y:0},1/0,function(_ref108){var e=_ref108.x,t=_ref108.y;return _this54.data[e][t];});}},{key:"scale",value:function scale(e){var _this55=this;if(!Number.isSafeInteger(e)||e>1024)throw new Error("Wrong scale factor: ".concat(e));var t=this.height,n=this.width;return new jp({height:e*t,width:e*n}).rect({x:0,y:0},1/0,function(_ref109){var t=_ref109.x,n=_ref109.y;return _this55.data[Math.floor(n/e)][Math.floor(t/e)];});}},{key:"clone",value:function clone(){var _this56=this;return new jp(this.size()).rect({x:0,y:0},this.size(),function(_ref110){var e=_ref110.x,t=_ref110.y;return _this56.data[t][e];});}},{key:"assertDrawn",value:function assertDrawn(){this.rectRead(0,1/0,function(e,t){if("boolean"!=typeof t)throw new Error("Invalid color type="+_typeof(t));});}},{key:"toString",value:function toString(){return this.data.map(function(e){return e.map(function(e){return void 0===e?"?":e?"X":" ";}).join("");}).join("\n");}},{key:"toASCII",value:function toASCII(){var e=this.height,t=this.width,n=this.data;var r="";for(var _i51=0;_i51<e;_i51+=2){for(var _o35=0;_o35<t;_o35++){var _t145=n[_i51][_o35],_s21=_i51+1>=e||n[_i51+1][_o35];_t145||_s21?!_t145&&_s21?r+="▀":_t145&&!_s21?r+="▄":_t145&&_s21&&(r+=" "):r+="█";}r+="\n";}return r;}},{key:"toTerm",value:function toTerm(){var e="[0m",t="\x1B[1;47m  ".concat(e),n="\x1B[40m  ".concat(e);return this.data.map(function(e){return e.map(function(e){return e?n:t;}).join("");}).join("\n");}},{key:"toSVG",value:function toSVG(){var e="<svg xmlns:svg=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 ".concat(this.width," ").concat(this.height,"\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">");return this.rectRead(0,1/0,function(_ref111,r){var t=_ref111.x,n=_ref111.y;r&&(e+="<rect x=\"".concat(t,"\" y=\"").concat(n,"\" width=\"1\" height=\"1\" />"));}),e+="</svg>",e;}},{key:"toGIF",value:function toGIF(){var e=function(_e138){function e(_x51){return _e138.apply(this,arguments);}e.toString=function(){return _e138.toString();};return e;}(function(e){return [255&e,e>>>8&255];}),t=[].concat(_toConsumableArray(e(this.width)),_toConsumableArray(e(this.height))),n=[];this.rectRead(0,1/0,function(e,t){return n.push(+(!0===t));});var r=126,i=[71,73,70,56,55,97].concat(_toConsumableArray(t),[246,0,0,255,255,255],_toConsumableArray($p(381,0)),[44,0,0,0,0],_toConsumableArray(t),[0,7]),o=Math.floor(n.length/r);for(var _e139=0;_e139<o;_e139++)i.push.apply(i,[127,128].concat(_toConsumableArray(n.slice(r*_e139,r*(_e139+1)).map(function(e){return +e;}))));return i.push.apply(i,[n.length%r+1,128].concat(_toConsumableArray(n.slice(o*r).map(function(e){return +e;})))),i.push(1,129,0,59),new Uint8Array(i);}},{key:"toImage",value:function toImage(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!1;var _this$size=this.size(),t=_this$size.height,n=_this$size.width,r=new Uint8Array(t*n*(e?3:4));var i=0;for(var _o36=0;_o36<t;_o36++)for(var _t146=0;_t146<n;_t146++){var _n90=this.data[_o36][_t146]?0:255;r[i++]=_n90,r[i++]=_n90,r[i++]=_n90,e||(r[i++]=255);}return {height:t,width:n,data:r};}}],[{key:"size",value:function size(e,t){if("number"==typeof e&&(e={height:e,width:e}),!Number.isSafeInteger(e.height)&&e.height!==1/0)throw new Error("Bitmap: wrong height=".concat(e.height," (").concat(_typeof(e.height),")"));if(!Number.isSafeInteger(e.width)&&e.width!==1/0)throw new Error("Bitmap: wrong width=".concat(e.width," (").concat(_typeof(e.width),")"));return void 0!==t&&(e={width:Math.min(e.width,t.width),height:Math.min(e.height,t.height)}),e;}},{key:"fromString",value:function fromString(e){var t=(e=e.replace(/^\n+/g,"").replace(/\n+$/g,"")).split("\n"),n=t.length,r=new Array(n);var i;var _iterator25=_createForOfIteratorHelper(t),_step25;try{for(_iterator25.s();!(_step25=_iterator25.n()).done;){var _e140=_step25.value;var _t147=_e140.split("").map(function(e){if("X"===e)return !0;if(" "===e)return !1;if("?"!==e)throw new Error("Bitmap.fromString: unknown symbol=".concat(e));});if(i&&_t147.length!==i)throw new Error("Bitmap.fromString different row sizes: width=".concat(i," cur=").concat(_t147.length));i=_t147.length,r.push(_t147);}}catch(err){_iterator25.e(err);}finally{_iterator25.f();}return i||(i=0),new jp({height:n,width:i},r);}}]);}();var Up=["low","medium","quartile","high"],Hp=["numeric","alphanumeric","byte","kanji","eci"],Fp=[26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],zp={low:[7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],medium:[10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],quartile:[13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],high:[17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]},qp={low:[1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],medium:[1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],quartile:[1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],high:[1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]},Vp={size:{encode:function encode(e){return 21+4*(e-1);},decode:function decode(e){return (e-17)/4;}},sizeType:function sizeType(e){return Math.floor((e+7)/17);},alignmentPatterns:function alignmentPatterns(e){if(1===e)return [];var t=Vp.size.encode(e)-6-1,n=t-6,r=Math.ceil(n/28);var i=Math.floor(n/r);i%2?i+=1:n%r*2>=r&&(i+=2);var o=[6];for(var _e141=1;_e141<r;_e141++)o.push(t-(r-_e141)*i);return o.push(t),o;},ECCode:{low:1,medium:0,quartile:3,high:2},formatMask:21522,formatBits:function formatBits(e,t){var n=Vp.ECCode[e]<<3|t;var r=n;for(var _e142=0;_e142<10;_e142++)r=r<<1^1335*(r>>9);return (n<<10|r)^Vp.formatMask;},versionBits:function versionBits(e){var t=e;for(var _e143=0;_e143<12;_e143++)t=t<<1^7973*(t>>11);return e<<12|t;},alphabet:{numeric:Kp("0123456789"),alphanumerc:Kp("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:")},lengthBits:function lengthBits(e,t){return {numeric:[10,12,14],alphanumeric:[9,11,13],"byte":[8,16,16],kanji:[8,10,12],eci:[0,0,0]}[t][Vp.sizeType(e)];},modeBits:{numeric:"0001",alphanumeric:"0010","byte":"0100",kanji:"1000",eci:"0111"},capacity:function capacity(e,t){var n=Fp[e-1],r=zp[t][e-1],i=qp[t][e-1],o=Math.floor(n/i)-r,s=i-n%i;return {words:r,numBlocks:i,shortBlocks:s,blockLen:o,capacity:8*(n-r*i),total:(r+o)*i+i-s};}},Wp=[function(e,t){return (e+t)%2==0;},function(e,t){return t%2==0;},function(e,t){return e%3==0;},function(e,t){return (e+t)%3==0;},function(e,t){return (Math.floor(t/2)+Math.floor(e/3))%2==0;},function(e,t){return e*t%2+e*t%3==0;},function(e,t){return (e*t%2+e*t%3)%2==0;},function(e,t){return ((e+t)%2+e*t%3)%2==0;}],Gp={tables:function(e){var t=$p(256,0),n=$p(256,0);for(var _e144=0,_r64=1;_e144<256;_e144++)t[_e144]=_r64,n[_r64]=_e144,_r64<<=1,256&_r64&&(_r64^=285);return {exp:t,log:n};}(),exp:function exp(e){return Gp.tables.exp[e];},log:function log(e){if(0===e)throw new Error("GF.log: wrong arg=".concat(e));return Gp.tables.log[e]%255;},mul:function mul(e,t){return 0===e||0===t?0:Gp.tables.exp[(Gp.tables.log[e]+Gp.tables.log[t])%255];},add:function add(e,t){return e^t;},pow:function pow(e,t){return Gp.tables.exp[Gp.tables.log[e]*t%255];},inv:function inv(e){if(0===e)throw new Error("GF.inverse: wrong arg=".concat(e));return Gp.tables.exp[255-Gp.tables.log[e]];},polynomial:function polynomial(e){if(0==e.length)throw new Error("GF.polymomial: wrong length");if(0!==e[0])return e;var t=0;for(;t<e.length-1&&0==e[t];t++);return e.slice(t);},monomial:function monomial(e,t){if(e<0)throw new Error("GF.monomial: wrong degree=".concat(e));if(0==t)return [0];var n=$p(e+1,0);return n[0]=t,Gp.polynomial(n);},degree:function degree(e){return e.length-1;},coefficient:function coefficient(e,t){return e[Gp.degree(e)-t];},mulPoly:function mulPoly(e,t){if(0===e[0]||0===t[0])return [0];var n=$p(e.length+t.length-1,0);for(var _r65=0;_r65<e.length;_r65++)for(var _i52=0;_i52<t.length;_i52++)n[_r65+_i52]=Gp.add(n[_r65+_i52],Gp.mul(e[_r65],t[_i52]));return Gp.polynomial(n);},mulPolyScalar:function mulPolyScalar(e,t){if(0==t)return [0];if(1==t)return e;var n=$p(e.length,0);for(var _r66=0;_r66<e.length;_r66++)n[_r66]=Gp.mul(e[_r66],t);return Gp.polynomial(n);},mulPolyMonomial:function mulPolyMonomial(e,t,n){if(t<0)throw new Error("GF.mulPolyMonomial: wrong degree");if(0==n)return [0];var r=$p(e.length+t,0);for(var _t148=0;_t148<e.length;_t148++)r[_t148]=Gp.mul(e[_t148],n);return Gp.polynomial(r);},addPoly:function addPoly(e,t){var _ref112;if(0===e[0])return t;if(0===t[0])return e;var n=e,r=t;n.length>r.length&&(_ref112=[r,n],n=_ref112[0],r=_ref112[1],_ref112);var i=$p(r.length,0),o=r.length-n.length,s=r.slice(0,o);for(var _e145=0;_e145<s.length;_e145++)i[_e145]=s[_e145];for(var _e146=o;_e146<r.length;_e146++)i[_e146]=Gp.add(n[_e146-o],r[_e146]);return Gp.polynomial(i);},remainderPoly:function remainderPoly(e,t){var n=Array.from(e);for(var _r67=0;_r67<e.length-t.length+1;_r67++){var _e147=n[_r67];if(0!==_e147)for(var _i53=1;_i53<t.length;_i53++)0!==t[_i53]&&(n[_r67+_i53]=Gp.add(n[_r67+_i53],Gp.mul(t[_i53],_e147)));}return n.slice(e.length-t.length+1,n.length);},divisorPoly:function divisorPoly(e){var t=[1];for(var _n91=0;_n91<e;_n91++)t=Gp.mulPoly(t,[1,Gp.pow(2,_n91)]);return t;},evalPoly:function evalPoly(e,t){if(0==t)return Gp.coefficient(e,0);var n=e[0];for(var _r68=1;_r68<e.length;_r68++)n=Gp.add(Gp.mul(t,n),e[_r68]);return n;},euclidian:function euclidian(e,t,n){var _ref113;Gp.degree(e)<Gp.degree(t)&&(_ref113=[t,e],e=_ref113[0],t=_ref113[1],_ref113);var r=e,i=t,o=[0],s=[1];for(;2*Gp.degree(i)>=n;){var _e148=r,_t149=o;if(r=i,o=s,0===r[0])throw new Error("rLast[0] === 0");i=_e148;var _n92=[0];var _a19=Gp.inv(r[0]);for(;Gp.degree(i)>=Gp.degree(r)&&0!==i[0];){var _e149=Gp.degree(i)-Gp.degree(r),_t150=Gp.mul(i[0],_a19);_n92=Gp.addPoly(_n92,Gp.monomial(_e149,_t150)),i=Gp.addPoly(i,Gp.mulPolyMonomial(r,_e149,_t150));}if(_n92=Gp.mulPoly(_n92,o),s=Gp.addPoly(_n92,_t149),Gp.degree(i)>=Gp.degree(r))throw new Error("Division failed r: ".concat(i,", rLast: ").concat(r));}var a=Gp.coefficient(s,0);if(0==a)throw new Error("sigmaTilde(0) was zero");var c=Gp.inv(a);return [Gp.mulPolyScalar(s,c),Gp.mulPolyScalar(i,c)];}};function Zp(e,t){var _Vp$capacity=Vp.capacity(e,t),n=_Vp$capacity.words,r=_Vp$capacity.shortBlocks,i=_Vp$capacity.numBlocks,o=_Vp$capacity.blockLen,s=_Vp$capacity.total,a=(c=n,{encode:function encode(e){var t=Gp.divisorPoly(c),n=Array.from(e);return n.push.apply(n,_toConsumableArray(t.slice(0,-1).fill(0))),Uint8Array.from(Gp.remainderPoly(n,t));},decode:function decode(e){var t=e.slice(),n=Gp.polynomial(Array.from(e));var r=$p(c,0),i=!1;for(var _e150=0;_e150<c;_e150++){var _t151=Gp.evalPoly(n,Gp.exp(_e150));r[r.length-1-_e150]=_t151,0!==_t151&&(i=!0);}if(!i)return t;r=Gp.polynomial(r);var o=Gp.monomial(c,1),_Gp$euclidian=Gp.euclidian(o,r,c),_Gp$euclidian2=_slicedToArray(_Gp$euclidian,2),s=_Gp$euclidian2[0],a=_Gp$euclidian2[1],l=$p(Gp.degree(s),0);var d=0;for(var _e151=1;_e151<256&&d<l.length;_e151++)0===Gp.evalPoly(s,_e151)&&(l[d++]=Gp.inv(_e151));if(d!==l.length)throw new Error("RS.decode: wrong errors number");for(var _e152=0;_e152<l.length;_e152++){var _n93=t.length-1-Gp.log(l[_e152]);if(_n93<0)throw new Error("RS.decode: wrong error location");var _r69=Gp.inv(l[_e152]);var _i54=1;for(var _t152=0;_t152<l.length;_t152++)_e152!==_t152&&(_i54=Gp.mul(_i54,Gp.add(1,Gp.mul(l[_t152],_r69))));t[_n93]=Gp.add(t[_n93],Gp.mul(Gp.evalPoly(a,_r69),Gp.inv(_i54)));}return t;}});var c;return {encode:function encode(e){var t=[],n=[];for(var _s22=0;_s22<i;_s22++){var _i55=o+(_s22<r?0:1);t.push(e.subarray(0,_i55)),n.push(a.encode(e.subarray(0,_i55))),e=e.subarray(_i55);}var s=Dp.apply(void 0,t),c=Dp.apply(void 0,n),l=new Uint8Array(s.length+c.length);return l.set(s),l.set(c,s.length),l;},decode:function decode(e){if(e.length!==s)throw new Error("interleave.decode: len(data)=".concat(e.length,", total=").concat(s));var t=[];for(var _e153=0;_e153<i;_e153++){var _i56=_e153<r;t.push(new Uint8Array(n+o+(_i56?0:1)));}var c=0;for(var _n94=0;_n94<o;_n94++)for(var _r70=0;_r70<i;_r70++)t[_r70][_n94]=e[c++];for(var _n95=r;_n95<i;_n95++)t[_n95][o]=e[c++];for(var _s23=o;_s23<o+n;_s23++)for(var _n96=0;_n96<i;_n96++){var _i57=_n96<r;t[_n96][_s23+(_i57?0:1)]=e[c++];}var l=[];for(var _i58=0,_t153=t;_i58<_t153.length;_i58++){var _e154=_t153[_i58];l.push.apply(l,_toConsumableArray(Array.from(a.decode(_e154)).slice(0,-n)));}return Uint8Array.from(l);}};}function Yp(e,t,n,r){var i="",o=n.length;if("numeric"===r){var _e155=Vp.alphabet.numeric.decode(n.split("")),_t154=_e155.length;for(var _n97=0;_n97<_t154-2;_n97+=3)i+=Tp(100*_e155[_n97]+10*_e155[_n97+1]+_e155[_n97+2],10);_t154%3==1?i+=Tp(_e155[_t154-1],4):_t154%3==2&&(i+=Tp(10*_e155[_t154-2]+_e155[_t154-1],7));}else if("alphanumeric"===r){var _e156=Vp.alphabet.alphanumerc.decode(n.split("")),_t155=_e156.length;for(var _n98=0;_n98<_t155-1;_n98+=2)i+=Tp(45*_e156[_n98]+_e156[_n98+1],11);_t155%2==1&&(i+=Tp(_e156[_t155-1],6));}else {if("byte"!==r)throw new Error("encode: unsupported type");{var _e157=function(e){if("string"!=typeof e)throw new Error("utf8ToBytes expected string, got "+_typeof(e));return new Uint8Array(new TextEncoder().encode(e));}(n);o=_e157.length,i=Array.from(_e157).map(function(e){return Tp(e,8);}).join("");}}var _Vp$capacity2=Vp.capacity(e,t),s=_Vp$capacity2.capacity,a=Tp(o,Vp.lengthBits(e,r));var c=Vp.modeBits[r]+a+i;if(c.length>s)throw new Error("Capacity overflow");c+="0".repeat(Math.min(4,Math.max(0,s-c.length))),c.length%8&&(c+="0".repeat(8-c.length%8));var l="1110110000010001";for(var _e158=0;c.length!==s;_e158++)c+=l[_e158%16];var d=Uint8Array.from(c.match(/(.{8})/g).map(function(e){return Number("0b".concat(e));}));return Zp(e,t).encode(d);}function Jp(e,t,n,r){var i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:!1;var o=function(e,t,n){var r=arguments.length>3&&arguments[3]!==undefined?arguments[3]:!1;var i=Vp.size.encode(e);var o=new jp(i+2);var s=new jp(3).rect(0,3,!0).border(1,!1).border(1,!0).border(1,!1);o=o.embed(0,s).embed({x:-s.width,y:0},s).embed({x:0,y:-s.height},s),o=o.rectSlice(1,i);var a=new jp(1).rect(0,1,!0).border(1,!1).border(1,!0),c=Vp.alignmentPatterns(e);var _iterator26=_createForOfIteratorHelper(c),_step26;try{for(_iterator26.s();!(_step26=_iterator26.n()).done;){var _e167=_step26.value;var _iterator27=_createForOfIteratorHelper(c),_step27;try{for(_iterator27.s();!(_step27=_iterator27.n()).done;){var _t157=_step27.value;void 0===o.data[_e167][_t157]&&o.embed({x:_t157-2,y:_e167-2},a);}}catch(err){_iterator27.e(err);}finally{_iterator27.f();}}}catch(err){_iterator26.e(err);}finally{_iterator26.f();}o=o.hLine({x:0,y:6},1/0,function(_ref114,t){var e=_ref114.x;return void 0===t?e%2==0:t;}).vLine({x:6,y:0},1/0,function(_ref115,t){var e=_ref115.y;return void 0===t?e%2==0:t;});{var _e159=Vp.formatBits(t,n),_s24=function _s24(t){return !r&&1==(_e159>>t&1);};for(var _e160=0;_e160<6;_e160++)o.data[_e160][8]=_s24(_e160);for(var _e161=6;_e161<8;_e161++)o.data[_e161+1][8]=_s24(_e161);for(var _e162=8;_e162<15;_e162++)o.data[i-15+_e162][8]=_s24(_e162);for(var _e163=0;_e163<8;_e163++)o.data[8][i-_e163-1]=_s24(_e163);for(var _e164=8;_e164<9;_e164++)o.data[8][15-_e164-1+1]=_s24(_e164);for(var _e165=9;_e165<15;_e165++)o.data[8][15-_e165-1]=_s24(_e165);o.data[i-8][8]=!r;}if(e>=7){var _t156=Vp.versionBits(e);for(var _e166=0;_e166<18;_e166+=1){var _n99=!r&&1==(_t156>>_e166&1),_s25=Math.floor(_e166/3),_a20=_e166%3+i-8-3;o.data[_s25][_a20]=_n99,o.data[_a20][_s25]=_n99;}}return o;}(e,t,r,i);var s=0;var a=8*n.length;if(function(e,t,n){var r=e.height,i=Wp[t];var o=-1,s=r-1;for(var _t158=r-1;_t158>0;_t158-=2){for(6==_t158&&(_t158=5);;s+=o){for(var _r71=0;_r71<2;_r71+=1){var _o37=_t158-_r71;void 0===e.data[s][_o37]&&n(_o37,s,i(_o37,s));}if(s+o<0||s+o>=r)break;}o=-o;}}(o,r,function(e,t,r){var i=!1;s<a&&(i=0!=(n[s>>>3]>>(7-s&7)&1),s++),o.data[t][e]=i!==r;}),s!==a)throw new Error("QR: bytes left after draw");return o;}function Xp(e){var t=e.inverse(),n=function n(e){var t=0;for(var _n100,_r72=0,_i59=1;_r72<e.length;_r72++)_n100===e[_r72]&&(_i59++,_r72!==e.length-1)||(_i59>=5&&(t+=_i59-5+3),_n100=e[_r72],_i59=1);return t;};var r=0;e.data.forEach(function(e){return r+=n(e);}),t.data.forEach(function(e){return r+=n(e);});var i=0,o=e.data;var s=e.width-1,a=e.height-1;for(var _e168=0;_e168<s;_e168++)for(var _t159=0;_t159<a;_t159++){var _n101=_e168+1,_r73=_t159+1;o[_e168][_t159]===o[_n101][_t159]&&o[_n101][_t159]===o[_e168][_r73]&&o[_n101][_t159]===o[_n101][_r73]&&(i+=3);}var c=function c(e){var t=[!0,!1,!0,!0,!0,!1,!0],n=[!1,!1,!1,!1],r=[].concat(t,n),i=[].concat(n,t);var o=0;for(var _t160=0;_t160<e.length;_t160++)Bp(e,r,_t160)&&(o+=40),Bp(e,i,_t160)&&(o+=40);return o;};var l=0;var _iterator28=_createForOfIteratorHelper(e.data),_step28;try{for(_iterator28.s();!(_step28=_iterator28.n()).done;){var _t161=_step28.value;l+=c(_t161);}}catch(err){_iterator28.e(err);}finally{_iterator28.f();}var _iterator29=_createForOfIteratorHelper(t.data),_step29;try{for(_iterator29.s();!(_step29=_iterator29.n()).done;){var _e169=_step29.value;l+=c(_e169);}}catch(err){_iterator29.e(err);}finally{_iterator29.f();}var d=0;e.rectRead(0,1/0,function(e,t){return d+=t?1:0;});var u=d/(e.height*e.width)*100,h=10*Math.floor(Math.abs(u-50)/5);return r+i+l+h;}function Qp(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"raw";var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var r=void 0!==n.ecc?n.ecc:"medium";!function(e){if(!Up.includes(e))throw new Error("Invalid error correction mode=".concat(e,". Expected: ").concat(Up));}(r);var i=void 0!==n.encoding?n.encoding:function(e){var t="numeric";var _iterator30=_createForOfIteratorHelper(e),_step30;try{for(_iterator30.s();!(_step30=_iterator30.n()).done;){var _n102=_step30.value;if(!Vp.alphabet.numeric.has(_n102)&&(t="alphanumeric",!Vp.alphabet.alphanumerc.has(_n102)))return "byte";}}catch(err){_iterator30.e(err);}finally{_iterator30.f();}return t;}(e);!function(e){if(!Hp.includes(e))throw new Error("Encoding: invalid mode=".concat(e,". Expected: ").concat(Hp));if("kanji"===e||"eci"===e)throw new Error("Encoding: ".concat(e," is not supported (yet?)."));}(i),void 0!==n.mask&&function(e){if(![0,1,2,3,4,5,6,7].includes(e)||!Wp[e])throw new Error("Invalid mask=".concat(e,". Expected number [0..7]"));}(n.mask);var o,s=n.version,a=new Error("Unknown error");if(void 0!==s)!function(e){if(!Number.isSafeInteger(e)||e<1||e>40)throw new Error("Invalid version=".concat(e,". Expected number [1..40]"));}(s),o=Yp(s,r,e,i);else for(var _t162=1;_t162<=40;_t162++)try{o=Yp(_t162,r,e,i),s=_t162;break;}catch(e){a=e;}if(!s||!o)throw a;var c=function(e,t,n,r){if(void 0===r){var _i60=function(){var e,t=1/0;return {add:function add(n,r){n>=t||(e=r,t=n);},get:function get(){return e;},score:function score(){return t;}};}();for(var _r74=0;_r74<Wp.length;_r74++)_i60.add(Xp(Jp(e,t,n,_r74,!0)),_r74);r=_i60.get();}if(void 0===r)throw new Error("Cannot find mask");return Jp(e,t,n,r);}(s,r,o,n.mask);c.assertDrawn();var l=void 0===n.border?2:n.border;if(!Number.isSafeInteger(l))throw new Error("Wrong border type="+_typeof(l));if(c=c.border(l,!1),void 0!==n.scale&&(c=c.scale(n.scale)),"raw"===t)return c.data;if("ascii"===t)return c.toASCII();if("svg"===t)return c.toSVG();if("gif"===t)return c.toGIF();if("term"===t)return c.toTerm();throw new Error("Unknown output: ".concat(t));}var eg=function eg(_ref116){var e=_ref116.Icon,t=_ref116.text;return Nf("div",{"class":"flexContainer",style:{padding:"6",flexDirection:"row"}},Nf("div",{"class":"flexItem1"},Nf(e,null)),Nf("div",{"class":"flexItem11"},Nf("span",{style:{lineHeight:"2",color:"black"}},t)));},tg=function tg(){return Nf("svg",{width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Nf("path",{d:"M20.0002 7.9702V10.0302C20.0002 10.5802 19.5602 11.0302 19.0002 11.0502H17.0402C15.9602 11.0502 14.9702 10.2602 14.8802 9.1802C14.8202 8.5502 15.0602 7.9602 15.4802 7.5502C15.8502 7.1702 16.3602 6.9502 16.9202 6.9502H19.0002C19.5602 6.9702 20.0002 7.4202 20.0002 7.9702Z",fill:"#037DD6"}),Nf("path",{d:"M18.47 12.55H17.04C15.14 12.55 13.54 11.12 13.38 9.3C13.29 8.26 13.67 7.22 14.43 6.48C15.07 5.82 15.96 5.45 16.92 5.45H18.47C18.76 5.45 19 5.21 18.97 4.92C18.75 2.49 17.14 0.83 14.75 0.55C14.51 0.51 14.26 0.5 14 0.5H5C4.72 0.5 4.45 0.52 4.19 0.56C1.64 0.88 0 2.78 0 5.5V12.5C0 15.26 2.24 17.5 5 17.5H14C16.8 17.5 18.73 15.75 18.97 13.08C19 12.79 18.76 12.55 18.47 12.55ZM11 6.75H5C4.59 6.75 4.25 6.41 4.25 6C4.25 5.59 4.59 5.25 5 5.25H11C11.41 5.25 11.75 5.59 11.75 6C11.75 6.41 11.41 6.75 11 6.75Z",fill:"#037DD6"}));},ng=function ng(){return Nf("svg",{width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Nf("path",{d:"M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z",fill:"#037DD6"}));},rg=function rg(){return Nf("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Nf("path",{d:"M16.28 7.53V6.28C16.28 3.58 15.63 0 10 0C4.37 0 3.72 3.58 3.72 6.28V7.53C0.92 7.88 0 9.3 0 12.79V14.65C0 18.75 1.25 20 5.35 20H14.65C18.75 20 20 18.75 20 14.65V12.79C20 9.3 19.08 7.88 16.28 7.53ZM10 16.74C8.33 16.74 6.98 15.38 6.98 13.72C6.98 12.05 8.34 10.7 10 10.7C11.66 10.7 13.02 12.06 13.02 13.72C13.02 15.39 11.67 16.74 10 16.74ZM5.35 7.44C5.27 7.44 5.2 7.44 5.12 7.44V6.28C5.12 3.35 5.95 1.4 10 1.4C14.05 1.4 14.88 3.35 14.88 6.28V7.45C14.8 7.45 14.73 7.45 14.65 7.45H5.35V7.44Z",fill:"#037DD6"}));},ig=function ig(){return Nf("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Nf("path",{d:"M16.4405 8.8999C20.0405 9.2099 21.5105 11.0599 21.5105 15.1099V15.2399C21.5105 19.7099 19.7205 21.4999 15.2505 21.4999H8.74047C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.2399 7.47047 8.9099",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M12 2V14.88",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M15.3504 12.6499L12.0004 15.9999L8.65039 12.6499",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}));},og=/*#__PURE__*/function(){function og(e){_classCallCheck(this,og);af(this,e),this.close=Hf(this,"close",7),this.startDesktopOnboarding=Hf(this,"startDesktopOnboarding",7),this.link=void 0,this.sdkVersion=void 0,this.preferDesktop=void 0,this.tab=1,this.translationsLoaded=!1,this.onClose=this.onClose.bind(this),this.onStartDesktopOnboardingHandler=this.onStartDesktopOnboardingHandler.bind(this),this.setTab=this.setTab.bind(this),this.render=this.render.bind(this),this.setTab(2),this.i18nInstance=new Op();}return _createClass(og,[{key:"connectedCallback",value:function(){var _connectedCallback=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee141(){return _regeneratorRuntime().wrap(function _callee141$(_context147){while(1)switch(_context147.prev=_context147.next){case 0:_context147.next=2;return this.i18nInstance.init({fallbackLng:"en"});case 2:this.translationsLoaded=!0;case 3:case"end":return _context147.stop();}},_callee141,this);}));function connectedCallback(){return _connectedCallback.apply(this,arguments);}return connectedCallback;}()},{key:"updatePreferDesktop",value:function updatePreferDesktop(e){e?this.setTab(1):this.setTab(2);}},{key:"updateLink",value:function updateLink(e){if(!this.translationsLoaded||2!==this.tab)return;var t=Qp(e,"svg",{ecc:"medium",scale:2});if(!this.el.shadowRoot)return void console.warn("Shadow root not found");var n=this.el.shadowRoot.querySelector("#sdk-mm-qrcode");n?n.innerHTML=t:console.warn("QR code div not found");}},{key:"onTranslationsLoaded",value:function onTranslationsLoaded(e){e&&2===this.tab&&this.updateLink(this.link);}},{key:"onTabChange",value:function onTabChange(e){2===e&&this.translationsLoaded&&this.updateLink(this.link);}},{key:"onClose",value:function onClose(){this.close.emit();}},{key:"onStartDesktopOnboardingHandler",value:function onStartDesktopOnboardingHandler(){this.startDesktopOnboarding.emit();}},{key:"setTab",value:function setTab(e){this.tab=e;}},{key:"componentDidLoad",value:function componentDidLoad(){this.updateLink(this.link);}},{key:"render",value:function render(){var _this57=this;if(!this.translationsLoaded)return null;var e=function(_e170){function e(_x52){return _e170.apply(this,arguments);}e.toString=function(){return _e170.toString();};return e;}(function(e){return _this57.i18nInstance.t(e);});return Nf(Ap,{className:"install-model"},Nf("div",{"class":"backdrop",onClick:this.onClose}),Nf("div",{"class":"modal"},Nf("div",{"class":"closeButtonContainer"},Nf("div",{"class":"right"},Nf("span",{"class":"closeButton",onClick:this.onClose},Nf(Rp,null)))),Nf("div",{"class":"logoContainer"},Nf(Lp,null)),Nf("div",null,Nf("div",{"class":"tabcontainer"},Nf("div",{"class":"flexContainer"},Nf("div",{onClick:function onClick(){return _this57.setTab(1);},"class":"tab flexItem "+(1===this.tab?"tabactive":"")},e("DESKTOP")),Nf("div",{onClick:function onClick(){return _this57.setTab(2);},"class":"tab flexItem "+(2===this.tab?"tabactive":"")},e("MOBILE")))),Nf("div",{style:{display:1===this.tab?"none":"block"}},Nf("div",{"class":"flexContainer"},Nf("div",{"class":"flexItem",style:{textAlign:"center",marginTop:"4"}},Nf("div",{id:"sdk-mm-qrcode","class":"center"}),Nf("div",{"class":"connectMobileText"},e("SCAN_TO_CONNECT")," ",Nf("br",null),Nf("span",{"class":"blue"},Nf("b",null,e("META_MASK_MOBILE_APP"))))))),Nf("div",{style:{display:2===this.tab?"none":"block"}},Nf("div",{"class":"item"},Nf(eg,{Icon:ng,text:e("INSTALL_MODAL.TRUSTED_BY_USERS")})),Nf("div",{"class":"item"},Nf(eg,{Icon:tg,text:e("INSTALL_MODAL.LEADING_CRYPTO_WALLET")})),Nf("div",{"class":"item"},Nf(eg,{Icon:rg,text:e("INSTALL_MODAL.CONTROL_DIGITAL_INTERACTIONS")})),Nf("button",{"class":"button",onClick:this.onStartDesktopOnboardingHandler},Nf(ig,null),Nf("span",{"class":"installExtensionText"},e("INSTALL_MODAL.INSTALL_META_MASK_EXTENSION"))))),Nf(Ip,{version:this.sdkVersion})));}},{key:"el",get:function get(){return Uf(this);}}],[{key:"watchers",get:function get(){return {preferDesktop:["updatePreferDesktop"],link:["updateLink"],translationsLoaded:["onTranslationsLoaded"],tab:["onTabChange"]};}}]);}();og.style=".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";var sg=Object.freeze({__proto__:null,mm_install_modal:og});var ag=/*#__PURE__*/function(){function ag(e){_classCallCheck(this,ag);af(this,e),this.close=Hf(this,"close",7),this.disconnect=Hf(this,"disconnect",7),this.updateOTPValue=Hf(this,"updateOTPValue",7),this.displayOTP=void 0,this.sdkVersion=void 0,this.otpCode=void 0,this.translationsLoaded=!1,this.i18nInstance=new Op();}return _createClass(ag,[{key:"connectedCallback",value:function(){var _connectedCallback2=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee142(){return _regeneratorRuntime().wrap(function _callee142$(_context148){while(1)switch(_context148.prev=_context148.next){case 0:_context148.next=2;return this.i18nInstance.init({fallbackLng:"en"});case 2:this.translationsLoaded=!0;case 3:case"end":return _context148.stop();}},_callee142,this);}));function connectedCallback(){return _connectedCallback2.apply(this,arguments);}return connectedCallback;}()},{key:"onClose",value:function onClose(){this.close.emit();}},{key:"onDisconnect",value:function onDisconnect(){this.disconnect.emit();}},{key:"onUpdateOTPValueHandler",value:function onUpdateOTPValueHandler(e){this.updateOTPValue.emit({otpValue:e});}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.onClose();}},{key:"render",value:function render(){var _this58=this;var e;if(!this.translationsLoaded)return null;var t=null===(e=this.displayOTP)||void 0===e||e,n=this.sdkVersion,r=function r(e){return _this58.i18nInstance.t(e);};return Nf(Ap,{className:"pending-modal"},Nf("div",{"class":"backdrop",onClick:function onClick(){return _this58.onClose();}}),Nf("div",{"class":"modal"},Nf("div",{"class":"closeButtonContainer"},Nf("div",{"class":"right"},Nf("span",{"class":"closeButton",onClick:function onClick(){return _this58.onClose();}},Nf(Rp,null)))),Nf("div",{"class":"logoContainer"},Nf(Lp,null)),Nf("div",null,Nf("div",{"class":"flexContainer",style:{flexDirection:"column",color:"black"}},Nf("div",{"class":"flexItem",style:{textAlign:"center",marginTop:"30px",marginBottom:"30px",fontSize:"16px"}},r(t?"PENDING_MODAL.OPEN_META_MASK_SELECT_CODE":"PENDING_MODAL.OPEN_META_MASK_CONTINUE")),Nf("div",{id:"sdk-mm-otp-value",style:{padding:"10px",fontSize:"32px",display:this.otpCode?"block":"none"}},this.otpCode),t&&Nf("div",{"class":"notice"},"* ",r("PENDING_MODAL.NUMBER_AFTER_OPEN_NOTICE"))),Nf("div",{style:{marginTop:"20px"}},Nf("button",{"class":"button blue",style:{marginTop:"5px",color:"#0376C9",borderColor:"#0376C9",borderWidth:"1px",borderStyle:"solid",backgroundColor:"white"},onClick:function onClick(){return _this58.onDisconnect();}},r("PENDING_MODAL.DISCONNECT")))),Nf(Ip,{version:n})));}},{key:"el",get:function get(){return Uf(this);}}]);}();ag.style=".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";var cg=Object.freeze({__proto__:null,mm_pending_modal:ag});var lg=function lg(){return Nf("svg",{width:"21",height:"15",viewBox:"0 0 21 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Nf("path",{d:"M14.1364 14.9851C13.5909 14.9851 13.2273 14.5851 13.2273 13.9851C13.2273 13.3851 13.5909 12.9851 14.1364 12.9851C16.6818 12.9851 18.6818 10.7851 18.6818 7.98508C18.6818 5.18508 16.6818 2.98508 14.1364 2.98508C11.5909 2.98508 9.59091 5.18508 9.59091 7.98508C9.59091 8.58508 9.22727 8.98508 8.68182 8.98508C8.13636 8.98508 7.77273 8.58508 7.77273 7.98508C7.77273 4.08508 10.5909 0.985077 14.1364 0.985077C17.6818 0.985077 20.5 4.08508 20.5 7.98508C20.5 11.8851 17.6818 14.9851 14.1364 14.9851ZM6.68182 14.7851C3.22727 14.7851 0.5 11.6851 0.5 7.98508C0.5 4.28508 3.22727 1.18508 6.68182 1.18508C7.22727 1.18508 7.59091 1.58508 7.59091 2.18508C7.59091 2.78508 7.22727 3.18508 6.68182 3.18508C4.22727 3.18508 2.31818 5.38508 2.31818 7.98508C2.31818 10.5851 4.22727 12.7851 6.68182 12.7851C9.13636 12.7851 11.0455 10.6851 11.0455 7.98508C11.0455 7.38508 11.4091 6.98508 11.9545 6.98508C12.5 6.98508 12.8636 7.38508 12.8636 7.98508C12.7727 11.6851 10.0455 14.7851 6.68182 14.7851Z",fill:"white"}));},dg=function dg(){return Nf("svg",{width:"400",height:"300",viewBox:"0 0 467 300",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Nf("path",{d:"M312.387 280.629C312.549 280.583 312.247 280.735 312.387 280.629L339.678 260.425C340.088 260.118 340.132 259.156 340.07 258.647C340.008 258.138 339.573 258.257 339.106 258.084L311.712 247.455C311.292 247.301 311.308 247.402 310.939 247.673C310.569 247.944 310.356 248.21 310.356 248.672L310.459 279.504C310.461 280.025 311.163 280.619 311.614 280.847C311.913 280.996 312.072 280.718 312.387 280.629ZM336.204 259.736L312.979 276.292L313.439 251.139L336.204 259.736Z",fill:"url(#paint0_linear_1356_14057)"}),Nf("path",{d:"M324.639 260.342C324.358 259.547 323.485 258.91 322.707 259.215C319.6 260.432 318.17 262.313 317.287 264.066C316.482 265.665 316.197 267.482 314.188 268.269C312.178 269.055 310.763 268.663 309.162 268.007C307.406 267.287 305.504 266.182 302.397 267.399C299.289 268.616 297.859 270.497 296.976 272.25C296.171 273.849 295.697 274.886 293.685 275.673C291.675 276.459 290.261 276.067 288.659 275.411C286.903 274.691 284.999 273.587 281.894 274.803C278.789 276.019 277.549 278.681 276.666 280.434C275.861 282.034 275.386 283.07 273.374 283.857C272.596 284.161 271.931 285.055 272.211 285.849C272.492 286.644 273.365 287.281 274.143 286.977C277.25 285.76 278.68 283.879 279.563 282.125C280.368 280.526 280.65 278.71 282.662 277.923C284.672 277.136 286.087 277.528 287.688 278.184C289.444 278.904 291.348 280.009 294.453 278.793C297.561 277.576 298.991 275.695 299.874 273.941C300.679 272.342 301.153 271.306 303.165 270.519C305.175 269.732 306.589 270.124 308.191 270.78C309.947 271.5 311.849 272.605 314.956 271.388C318.063 270.172 319.301 267.511 320.184 265.757C320.989 264.158 321.466 263.121 323.476 262.335C324.254 262.032 324.919 261.137 324.639 260.342Z",fill:"url(#paint1_linear_1356_14057)"}),Nf("path",{d:"M389.034 111.124C388.968 112.406 387.342 113.113 386.324 113.549C384.297 114.419 382.089 114.493 379.942 114.5C376.607 114.509 373.215 114.163 369.89 113.976C366.712 113.798 363.156 113.311 360.03 114.232C357.705 114.919 355.667 116.762 353.452 117.739C351.129 118.765 348.957 119.198 346.489 119.687C335.569 121.85 323.587 120.825 312.656 119.977C311.92 119.92 312.539 118.997 313.237 118.981C313.207 118.815 313.001 118.394 313.045 118.201C313.086 118.029 312.781 117.586 312.853 117.421C312.67 117.198 313.316 117.427 313.626 117.204C315.912 115.557 318.721 114.79 321.363 115.041C324.677 115.355 327.293 116.04 330.641 115.781C334.392 115.491 338.125 114.787 341.857 114.312C345.142 113.892 349.09 113.941 352.106 112.28C352.916 111.834 353.137 111.262 353.269 110.287C353.331 109.828 353.672 108.969 353.658 108.511C353.629 107.529 354.191 107.886 355.013 107.298C356.857 105.981 358.274 105.516 360.428 105.784C362.841 106.083 365.264 107.273 367.578 107.953C370.761 108.888 374.328 108.646 377.631 108.477C380.517 108.329 383.141 107.901 385.944 108.653C387.013 108.941 389.104 109.745 389.034 111.124Z",fill:"url(#paint2_linear_1356_14057)"}),Nf("path",{d:"M278.118 85.4414C280.313 83.8186 283.302 83.9 285.853 83.2728C290.501 82.127 295.644 78.4476 300.549 79.1524C301.299 79.2595 300.904 81.0355 300.159 80.9295C300.131 80.9256 300.187 80.9333 300.159 80.9295C300.089 81.0185 299.516 81.1051 299.385 81.1463C294.999 82.515 292.895 87.5083 289.126 89.8598C287.799 90.688 286.771 90.8351 285.258 90.9441C283.515 91.0691 280.964 90.5775 279.269 90.1219C277.15 89.5532 275.965 87.034 278.118 85.4414Z",fill:"url(#paint3_linear_1356_14057)"}),Nf("path",{d:"M122.567 166.093C113.597 172.832 104.535 179.836 99.517 190.092C98.5342 192.099 97.519 195.019 97.9533 197.204C98.9699 202.316 105.76 203.049 110.691 201.96C113.468 201.347 116.325 199.231 115.921 196.319C115.576 193.81 113.158 192.986 112.072 190.73C110.779 188.04 112.35 184.97 114.218 182.62C128.134 165.099 150.074 157.394 171.093 151.607C175.385 150.425 180.897 147.69 180.581 143.099C180.372 140.072 177.118 137.683 174.221 137.383C171.324 137.082 168.481 138.773 165.715 139.776C158.416 142.419 151.17 143.799 143.489 143.526C136.865 143.29 130.976 143.316 129.562 150.781C128.138 158.276 129.53 160.863 122.567 166.093Z",fill:"url(#paint4_linear_1356_14057)"}),Nf("path",{d:"M79.1056 153.531C60.3932 164.378 43.7478 178.354 32.8214 197.415C30.3313 201.76 27.9216 206.554 27.1821 211.512C26.4448 216.47 27.7591 222.525 30.8133 226.337C34.908 231.446 41.6938 232.915 48.1811 233.125C50.7248 233.208 53.0035 233.066 55.3316 231.947C57.6602 230.83 59.7548 228.359 59.5978 225.742C59.3303 221.315 54.5491 219.665 50.9271 217.34C42.6566 212.037 40.4958 199.493 44.2381 190.032C47.9803 180.57 55.8228 173.173 63.2316 166.338C67.229 162.651 71.5194 158.372 76.777 157.522C79.9167 157.015 83.4706 157.589 86.6295 157.252C93.9004 156.479 99.64 151.404 105.588 146.912C115.048 139.765 126.045 134.283 137.501 132.093C141.913 131.248 146.293 130.493 149.682 127.831C151.37 126.507 150.803 123.567 148.726 123.93C138.542 125.713 128.652 131.135 119.142 134.758C105.627 139.914 91.7133 146.223 79.1056 153.531Z",fill:"url(#paint5_linear_1356_14057)"}),Nf("path",{d:"M96.3677 117.321C96.0315 116.64 95.2914 116.612 94.6293 116.975C91.9858 118.417 91.5452 120.509 90.9466 122.178C90.4004 123.702 89.3647 124.67 87.6542 125.604C85.9437 126.538 85.0983 126.316 83.5956 125.91C81.9481 125.465 79.8603 125.424 77.2168 126.866C74.5734 128.309 74.1348 130.401 73.5341 132.07C72.9879 133.593 71.9522 134.562 70.2417 135.496C68.5313 136.43 67.6859 136.208 66.1832 135.801C64.5357 135.357 62.2569 134.538 59.6128 135.978C56.9694 137.42 56.5308 139.512 55.9301 141.181C55.3839 142.705 54.5398 144.454 52.8293 145.388C52.1667 145.748 52.1006 146.485 52.439 147.165C52.7752 147.845 53.5153 147.874 54.1773 147.511C56.8208 146.069 57.2594 143.977 57.86 142.307C58.4062 140.784 59.4419 139.815 61.1524 138.881C62.8629 137.948 63.7083 138.17 65.211 138.576C66.8585 139.021 68.9458 139.059 71.5898 137.619C74.2333 136.177 74.6718 134.085 75.2725 132.416C75.8187 130.892 76.8544 129.924 78.5649 128.99C80.2754 128.056 81.1207 128.278 82.6235 128.684C84.2709 129.129 86.5503 129.95 89.1938 128.507C91.8373 127.065 92.2779 124.973 92.8765 123.304C93.4227 121.78 94.2663 120.03 95.9773 119.098C96.6378 118.738 96.7039 118.001 96.3677 117.321Z",fill:"#FBC49D"}),Nf("path",{d:"M391.827 164.699C392.04 164.639 392.39 164.573 392.6 164.481C393.87 163.921 395.363 162.429 395.893 161.051C396.421 159.673 396.237 158.321 395.712 156.931C394.629 154.061 391.777 152.62 389.155 153.775C386.531 154.931 384.962 158.455 386.042 161.325C387.038 163.963 389.369 165.392 391.827 164.699ZM394.166 157.367C394.529 158.332 394.52 159.751 394.156 160.706C393.792 161.662 393.1 162.534 392.218 162.921C390.398 163.723 388.338 162.878 387.589 160.889C387.226 159.925 387.234 158.506 387.599 157.55C387.963 156.594 388.654 155.723 389.536 155.336C391.356 154.534 393.416 155.376 394.166 157.367Z",fill:"#86E29B"}),Nf("path",{d:"M62.7198 108.691C64.4912 108.191 66.6152 106.609 67.5596 104.824C68.4273 103.187 68.465 101.455 67.9609 99.7066C67.4547 97.9586 66.0792 96.5141 64.4963 95.6786C62.9135 94.843 61.2077 94.8578 59.4756 95.4255C57.7435 95.9933 56.2768 97.4364 55.409 99.074C53.6185 102.456 55.2032 106.494 58.4723 108.22C60.0142 109.035 61.1315 109.138 62.7198 108.691ZM60.6304 96.7682C61.819 96.4332 63.0232 96.8871 64.1048 97.4571C65.2463 98.0603 66.0495 98.8796 66.4145 100.142C66.7791 101.403 66.4488 103.299 65.8224 104.48C64.5299 106.919 61.2212 107.686 58.8638 106.441C56.5063 105.197 55.8538 101.858 57.1462 99.4185C57.7726 98.2375 58.6059 97.3957 59.8573 96.9862C59.9214 96.9635 60.5631 96.7872 60.6304 96.7682Z",fill:"#FFB0EB"}),Nf("path",{d:"M77.0217 242.979C75.9542 243.28 75.1664 242.151 74.9029 241.074C74.6394 239.996 75 239.378 76.0676 239.077C77.1351 238.776 78.5053 238.907 78.7688 239.984C79.0323 241.061 78.0893 242.678 77.0217 242.979Z",fill:"url(#paint6_linear_1356_14057)"}),Nf("path",{d:"M380.506 184.577C379.439 184.878 378.651 183.749 378.387 182.672C378.124 181.594 378.484 180.976 379.552 180.675C380.619 180.374 381.99 180.505 382.253 181.582C382.517 182.659 381.574 184.276 380.506 184.577Z",fill:"url(#paint7_linear_1356_14057)"}),Nf("path",{d:"M348.82 246.969C347.752 247.27 346.382 247.14 346.119 246.063C345.855 244.985 346.798 243.369 347.866 243.068C348.933 242.767 349.721 243.896 349.985 244.973C350.248 246.05 349.888 246.669 348.82 246.969Z",fill:"url(#paint8_linear_1356_14057)"}),Nf("path",{d:"M140.419 282.412C139.351 282.713 138.754 282.365 138.491 281.288C138.227 280.21 138.397 278.812 139.464 278.511C140.532 278.21 142.093 279.121 142.357 280.198C142.62 281.275 141.486 282.111 140.419 282.412Z",fill:"url(#paint9_linear_1356_14057)"}),Nf("path",{d:"M121.462 101.679C120.395 101.979 119.798 101.631 119.534 100.554C119.271 99.4764 119.44 98.0779 120.508 97.777C121.575 97.4761 123.136 98.3868 123.4 99.4642C123.663 100.542 122.53 101.378 121.462 101.679Z",fill:"url(#paint10_linear_1356_14057)"}),Nf("path",{d:"M370.749 159.005C369.682 159.306 368.311 159.175 368.048 158.098C367.784 157.021 368.727 155.404 369.795 155.103C370.863 154.802 371.65 155.931 371.914 157.008C372.177 158.086 371.817 158.704 370.749 159.005Z",fill:"url(#paint11_linear_1356_14057)"}),Nf("path",{d:"M384.211 245.345C383.143 245.646 381.773 245.515 381.51 244.438C381.246 243.361 382.189 241.744 383.257 241.443C384.324 241.142 385.112 242.271 385.376 243.348C385.639 244.426 385.278 245.044 384.211 245.345Z",fill:"url(#paint12_linear_1356_14057)"}),Nf("path",{d:"M364.771 41.3873C363.063 41.8687 361.337 40.8616 360.915 39.1378C360.493 37.414 361.536 35.6263 363.244 35.1449C364.953 34.6634 366.679 35.6706 367.101 37.3944C367.522 39.1182 366.479 40.9059 364.771 41.3873Z",fill:"url(#paint13_linear_1356_14057)"}),Nf("path",{d:"M404.311 77.905C404.602 77.8231 404.875 77.9236 405.084 77.6871C405.437 77.2908 404.814 76.6385 404.703 76.1265L401.277 58.7418C401.149 58.163 400.687 57.5371 400.123 57.3991C399.558 57.2611 398.969 57.3812 398.576 57.835L385.784 73.1179C385.395 73.564 385.199 74.3453 385.393 74.8964C385.585 75.4481 385.978 76.1646 386.548 76.2391L403.538 78.123C403.744 78.1479 404.114 77.9607 404.311 77.905ZM398.948 62.7348L401.811 74.4394L389.841 72.8085L398.948 62.7348Z",fill:"#FFB0EB"}),Nf("path",{d:"M97.5393 295.311C97.7108 295.263 97.4284 295.461 97.5393 295.311L108.785 280.464C108.975 280.211 108.718 279.972 108.594 279.684C108.47 279.396 108.124 279.917 107.821 279.902L88.5106 278.672C88.2101 278.659 87.895 278.62 87.7374 278.89C87.5798 279.159 87.7755 279.402 87.9283 279.67L96.5753 294.749C96.7102 294.99 97.2696 295.297 97.5393 295.311C97.6283 295.319 97.4556 295.335 97.5393 295.311ZM106.465 281.118L96.9667 292.97L90.6295 280.577L106.465 281.118Z",fill:"#86E29B"}),Nf("path",{d:"M393.699 108.848C389.518 104.446 414.629 114.366 413.945 120.659C413.259 126.952 401.355 129.102 403.894 123.491C406.042 118.747 400.376 115.876 393.699 108.848Z",fill:"#FBC49D"}),Nf("path",{d:"M139.414 115.959C139.434 115.953 139.392 115.965 139.414 115.959C141.963 115.2 143.436 111.976 142.717 109.189C142.37 107.839 141.526 107.199 140.408 106.504C139.289 105.808 138.171 105.449 136.933 105.815C135.698 106.182 134.85 107.033 134.222 108.247C133.595 109.461 133.282 111.234 133.63 112.585C133.978 113.935 134.821 114.574 135.94 115.27C137.04 115.952 138.199 116.301 139.414 115.959ZM137.315 107.375C138.222 107.12 139.005 106.994 139.825 107.502C140.661 108.02 140.912 108.618 141.171 109.625C141.708 111.704 140.935 113.834 139.032 114.398C138.11 114.675 137.356 114.791 136.522 114.272C135.686 113.753 135.436 113.155 135.176 112.149C134.917 111.142 134.718 109.714 135.186 108.81C135.654 107.905 136.394 107.649 137.315 107.375C137.329 107.371 137.299 107.38 137.315 107.375Z",fill:"#75C4FD"}),Nf("path",{d:"M308.981 78.7519C310.052 78.4043 311.158 78.7096 312.265 78.6613C313.655 78.6006 314.936 78.517 316.323 78.3531C319.497 77.9795 322.798 77.4906 325.984 77.3012C329.309 77.1025 332.514 76.8551 335.836 77.0295C338.809 77.1842 342.163 77.3405 345.105 77.7558C352.129 78.7468 359.331 79.0578 366.347 80.1158C372.252 81.008 377.93 82.1319 383.722 83.5644C385.925 84.0054 388.267 85.0754 389.126 85.3792C389.421 85.4833 389.37 85.8347 389.317 86.1595C389.306 86.2271 389.353 86.1146 389.317 86.1595C388.269 87.414 386.564 86.8124 385.259 86.4677C384.406 86.241 381.488 85.9494 381.011 85.9957C380.14 86.0815 379.277 86.014 379.656 87.2114C380.122 88.6824 382.391 89.7375 383.704 90.2419C385.883 91.0803 388.771 91.2561 390.845 92.4015C392.968 92.821 395.425 93.5002 397.022 93.9986C402.83 95.8103 407.806 98.8678 413.033 102.002C415.503 103.482 417.829 104.764 419.973 106.72C421.647 108.248 423.771 109.882 424.595 112.091C425.113 113.482 424.451 115.471 422.848 115.085C420.353 114.488 419.638 111.665 418.227 109.714C415.003 105.251 410.067 102.067 405.118 100.06C402.64 99.0556 399.803 98.729 397.204 98.1176C394.411 97.4613 391.597 97.0442 388.707 97.1736C385.646 97.3097 382.846 97.5534 379.819 98.0078C377.027 98.4264 374.252 98.4441 371.514 97.8441C368.766 97.2421 366.276 96.7553 363.6 95.9021C361.662 95.2848 359.013 94.5583 357.232 93.5247C355.699 92.6339 355.631 91.2381 357.241 90.186C359.87 88.4656 362.778 89.8021 365.546 90.3497C365.561 90.3527 365.532 90.3468 365.546 90.3497C367.858 90.804 369.649 90.098 371.923 89.3884C372.489 89.2128 373.255 89.0482 373.47 88.953C374.383 88.5432 375.895 87.8227 375.407 86.7394C374.868 85.5457 372.659 84.8846 371.55 84.4891C369.74 83.8428 368.053 82.9215 366.147 82.6743C365.654 82.6095 365.109 83.1606 364.6 83.1097C363.36 83.1121 361.769 83.348 360.543 83.418C357.43 83.5916 354.583 83.6228 351.464 83.4719C348.714 83.3377 346.432 82.8542 343.741 82.3102C340.773 81.7101 337.52 81.5879 334.471 81.5839C331.393 81.5811 328.6 81.7214 325.583 82.4181C322.758 83.0702 319.757 83.6198 316.887 84.0326C314.698 84.3481 312.467 84.6054 310.319 84.2137C309.079 83.9871 306.994 83.3394 306.461 81.9635C305.846 80.3659 307.736 79.1556 308.981 78.7519Z",fill:"url(#paint14_linear_1356_14057)"}),Nf("path",{d:"M242.269 242.95C242.295 242.947 242.244 242.955 242.269 242.95C244.934 242.606 247.53 241.858 250.2 241.574C253.133 241.264 256.006 240.56 258.906 239.982C263.26 239.117 268.026 238.52 272.254 237.097C274.429 236.365 276.067 235.298 278.251 234.592C280.361 233.909 283.058 233.12 285.216 232.652C289.317 231.764 293.049 231.66 297.016 230.198C301.109 228.69 305.088 226.673 308.819 224.409C312.645 222.086 316.282 219.769 320.622 218.62C322.381 218.154 323.919 218.219 325.65 218.886C327.016 219.413 327.739 220.337 327.196 221.79C326.557 223.504 324.659 224.7 323.131 225.423C320.854 226.5 319.53 227.184 317.134 227.927C314.619 228.707 311.888 229.24 309.395 230.083C308.226 230.947 307.17 232.522 306.105 233.501C303.996 235.441 301.666 237.03 298.945 237.996C292.934 240.129 286.354 238.602 280.183 239.056C279.661 239.095 279.162 239.442 278.635 239.487C275.592 240.135 272.2 240.63 269.156 241.294C264.546 242.299 260.456 243.409 255.808 244.179C251.971 244.814 243.815 245.854 243.815 245.854L242.074 245.505C240.575 245.281 240.751 243.152 242.269 242.95Z",fill:"url(#paint15_linear_1356_14057)"}),Nf("path",{d:"M432.985 171.626C438.212 165.465 445.109 153.64 442.906 144.649C442.162 137.999 433.671 132.912 424.963 135.518C420.16 136.957 416.435 142.146 419.724 144.498C420.656 145.164 422.187 145.591 423.391 145.969C434.204 149.375 434.925 162.538 425.069 169.683C421.087 172.569 416.347 174.292 411.914 176.719C400.151 183.162 399.887 196.847 387.7 202.712C382.326 205.298 375.761 206.838 370.297 209.275C359.98 213.88 352.555 221.733 342.241 226.341C337.225 228.584 330.266 231.632 323.483 234.12C321.475 234.855 321.999 237.058 324.056 236.46C324.098 236.449 324.017 236.474 324.056 236.46C329.079 234.971 334.437 233.161 339.331 231.33C352.278 226.48 365.28 220.971 377.43 214.775C401.78 202.367 416.881 190.609 432.985 171.626Z",fill:"url(#paint16_linear_1356_14057)"}),Nf("path",{d:"M343.644 241.104C348.002 234.144 357.126 232.455 364.343 231.134C368.176 230.431 372.406 229.878 376.137 228.662C380.691 227.175 384.558 224.095 388.327 221.077C389.452 220.177 391.204 218.466 392.393 217.436C393.185 216.748 393.644 216.026 394.33 215.225C396 213.275 399.599 209.812 401.687 208.16C403.263 206.914 407.779 204.758 408.259 207.986C408.611 210.359 406.379 213.087 404.961 214.747C402.224 217.953 398.998 221.079 395.475 223.243C391.749 225.531 387.701 227.439 383.674 229.051C381.672 229.853 379.519 230.073 377.486 230.785C376.001 231.307 374.486 232.236 373.037 232.866C371.034 233.738 368.99 234.28 367.041 235.38C364.436 236.849 361.782 238.783 359.108 240.105C356.331 241.477 353.823 242.691 350.791 243.27C348.6 243.687 345.501 243.641 343.836 241.884C343.526 241.554 343.389 241.51 343.644 241.104Z",fill:"url(#paint17_linear_1356_14057)"}),Nf("path",{d:"M190.163 273.219C222.905 268.849 232.64 262.943 213.962 259.057C195.285 255.172 187.5 262.08 188.434 266.2C189.366 270.32 180.381 271.326 169.286 272.39C158.193 273.454 157.141 276.354 190.163 273.219Z",fill:"url(#paint18_linear_1356_14057)"}),Nf("path",{d:"M295.952 95.4242L241.395 135.226L251.54 111.77L295.952 95.4242Z",fill:"#E17726",stroke:"#E17726","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M170.111 95.4242L224.181 135.598L214.522 111.77L170.111 95.4242Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M276.309 187.712L261.793 209.576L292.876 218.014L301.78 188.189L276.309 187.712Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M164.336 188.189L173.186 218.014L204.215 209.576L189.753 187.712L164.336 188.189Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M202.542 150.776L193.908 163.618L224.667 164.998L223.642 132.36L202.542 150.776Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M263.52 150.775L242.097 131.989L241.395 164.998L272.154 163.618L263.52 150.775Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M204.215 209.576L222.832 200.714L206.805 188.402L204.215 209.576Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M243.23 200.714L261.793 209.576L259.257 188.402L243.23 200.714Z",fill:"#E27625",stroke:"#E27625","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M261.793 209.576L243.23 200.714L244.741 212.601L244.579 217.643L261.793 209.576Z",fill:"#D5BFB2",stroke:"#D5BFB2","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M204.215 209.576L221.483 217.643L221.375 212.601L222.832 200.714L204.215 209.576Z",fill:"#D5BFB2",stroke:"#D5BFB2","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M221.807 180.547L206.373 176.09L217.274 171.154L221.807 180.547Z",fill:"#233447",stroke:"#233447","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M244.255 180.547L248.788 171.154L259.742 176.09L244.255 180.547Z",fill:"#233447",stroke:"#233447","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M204.215 209.576L206.913 187.712L189.753 188.189L204.215 209.576Z",fill:"#CC6228",stroke:"#CC6228","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M259.149 187.712L261.793 209.576L276.309 188.189L259.149 187.712Z",fill:"#CC6228",stroke:"#CC6228","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M272.154 163.618L241.395 164.998L244.255 180.547L248.788 171.154L259.742 176.09L272.154 163.618Z",fill:"#CC6228",stroke:"#CC6228","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M206.373 176.09L217.274 171.154L221.807 180.547L224.667 164.998L193.908 163.618L206.373 176.09Z",fill:"#CC6228",stroke:"#CC6228","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M193.908 163.618L206.805 188.402L206.373 176.09L193.908 163.618Z",fill:"#E27525",stroke:"#E27525","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M259.743 176.09L259.257 188.402L272.154 163.618L259.743 176.09Z",fill:"#E27525",stroke:"#E27525","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M224.667 164.998L221.807 180.548L225.422 198.909L226.232 174.71L224.667 164.998Z",fill:"#E27525",stroke:"#E27525","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M241.395 164.998L239.884 174.657L240.64 198.909L244.255 180.548L241.395 164.998Z",fill:"#E27525",stroke:"#E27525","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M244.255 180.547L240.64 198.909L243.23 200.714L259.257 188.402L259.743 176.09L244.255 180.547Z",fill:"#F5841F",stroke:"#F5841F","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M206.373 176.09L206.805 188.402L222.832 200.714L225.422 198.909L221.807 180.547L206.373 176.09Z",fill:"#F5841F",stroke:"#F5841F","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M244.579 217.643L244.741 212.601L243.338 211.434H222.724L221.375 212.601L221.483 217.643L204.215 209.576L210.259 214.459L222.508 222.791H243.5L255.803 214.459L261.793 209.576L244.579 217.643Z",fill:"#C0AC9D",stroke:"#C0AC9D","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M243.23 200.714L240.64 198.909H225.422L222.832 200.714L221.375 212.601L222.724 211.434H243.338L244.741 212.601L243.23 200.714Z",fill:"#161616",stroke:"#161616","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M298.272 137.827L302.859 115.856L295.952 95.4242L243.23 133.899L263.52 150.775L292.174 159.001L298.488 151.731L295.736 149.767L300.107 145.84L296.761 143.293L301.132 140.002L298.272 137.827Z",fill:"#763E1A",stroke:"#763E1A","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M163.203 115.856L167.844 137.827L164.876 140.002L169.301 143.293L165.955 145.84L170.326 149.767L167.574 151.731L173.888 159.001L202.542 150.775L222.832 133.899L170.11 95.4242L163.203 115.856Z",fill:"#763E1A",stroke:"#763E1A","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M292.175 159.001L263.52 150.775L272.154 163.618L259.257 188.402L276.309 188.189H301.78L292.175 159.001Z",fill:"#F5841F",stroke:"#F5841F","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M202.542 150.775L173.888 159.001L164.336 188.189H189.753L206.805 188.402L193.908 163.618L202.542 150.775Z",fill:"#F5841F",stroke:"#F5841F","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("path",{d:"M241.395 164.998L243.23 133.9L251.54 111.77H214.522L222.832 133.9L224.667 164.998L225.368 174.763L225.422 198.909H240.64L240.694 174.763L241.395 164.998Z",fill:"#F5841F",stroke:"#F5841F","stroke-width":"0.94513","stroke-linecap":"round","stroke-linejoin":"round"}),Nf("defs",null,Nf("linearGradient",{id:"paint0_linear_1356_14057",x1:"335.991",y1:"250.487",x2:"303.873",y2:"266.801",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#FFE466"}),Nf("stop",{offset:"1","stop-color":"#FFAFEA"})),Nf("linearGradient",{id:"paint1_linear_1356_14057",x1:"276.993",y1:"303.722",x2:"205.254",y2:"401.574",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#75C3FC"}),Nf("stop",{offset:"0.0929","stop-color":"#81C2F6"}),Nf("stop",{offset:"1","stop-color":"#F0B8BD"})),Nf("linearGradient",{id:"paint2_linear_1356_14057",x1:"271.074",y1:"119.924",x2:"553.077",y2:"104.53",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#FFE466"}),Nf("stop",{offset:"1","stop-color":"#FFAFEA"})),Nf("linearGradient",{id:"paint3_linear_1356_14057",x1:"264.209",y1:"91.0943",x2:"357.834",y2:"72.8792",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#FFE466"}),Nf("stop",{offset:"1","stop-color":"#FFAFEA"})),Nf("linearGradient",{id:"paint4_linear_1356_14057",x1:"212.46",y1:"121.997",x2:"92.6119",y2:"183.406",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#FFE466"}),Nf("stop",{offset:"1","stop-color":"#FFAFEA"})),Nf("linearGradient",{id:"paint5_linear_1356_14057",x1:"23.0498",y1:"204.411",x2:"161.86",y2:"163.003",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#75C3FC"}),Nf("stop",{offset:"0.0929","stop-color":"#81C2F6"}),Nf("stop",{offset:"1","stop-color":"#F0B8BD"})),Nf("linearGradient",{id:"paint6_linear_1356_14057",x1:"78.8647",y1:"240.375",x2:"74.9655",y2:"241.328",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#75C3FC"}),Nf("stop",{offset:"1","stop-color":"#75C3FC"})),Nf("linearGradient",{id:"paint7_linear_1356_14057",x1:"382.349",y1:"181.971",x2:"378.45",y2:"182.925",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#75C3FC"}),Nf("stop",{offset:"1","stop-color":"#75C3FC"})),Nf("linearGradient",{id:"paint8_linear_1356_14057",x1:"349.889",y1:"244.583",x2:"345.99",y2:"245.537",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#75C3FC"}),Nf("stop",{offset:"1","stop-color":"#75C3FC"})),Nf("linearGradient",{id:"paint9_linear_1356_14057",x1:"142.262",y1:"279.808",x2:"138.362",y2:"280.762",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#75C3FC"}),Nf("stop",{offset:"1","stop-color":"#75C3FC"})),Nf("linearGradient",{id:"paint10_linear_1356_14057",x1:"123.305",y1:"99.0746",x2:"119.406",y2:"100.028",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#75C3FC"}),Nf("stop",{offset:"1","stop-color":"#75C3FC"})),Nf("linearGradient",{id:"paint11_linear_1356_14057",x1:"371.818",y1:"156.617",x2:"367.919",y2:"157.571",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#75C3FC"}),Nf("stop",{offset:"1","stop-color":"#75C3FC"})),Nf("linearGradient",{id:"paint12_linear_1356_14057",x1:"385.281",y1:"242.958",x2:"381.382",y2:"243.911",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#75C3FC"}),Nf("stop",{offset:"1","stop-color":"#75C3FC"})),Nf("linearGradient",{id:"paint13_linear_1356_14057",x1:"367.125",y1:"37.5052",x2:"360.843",y2:"38.8076",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#75C3FC"}),Nf("stop",{offset:"1","stop-color":"#75C3FC"})),Nf("linearGradient",{id:"paint14_linear_1356_14057",x1:"300.182",y1:"91.321",x2:"479.464",y2:"104.041",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#FFE466"}),Nf("stop",{offset:"1","stop-color":"#FFAFEA"})),Nf("linearGradient",{id:"paint15_linear_1356_14057",x1:"363.434",y1:"201.232",x2:"102.977",y2:"302.269",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#FFE466"}),Nf("stop",{offset:"1","stop-color":"#FFAFEA"})),Nf("linearGradient",{id:"paint16_linear_1356_14057",x1:"447.962",y1:"165.159",x2:"313.049",y2:"197.95",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#75C3FC"}),Nf("stop",{offset:"0.0929","stop-color":"#81C2F6"}),Nf("stop",{offset:"1","stop-color":"#F0B8BD"})),Nf("linearGradient",{id:"paint17_linear_1356_14057",x1:"410.211",y1:"215.859",x2:"341.378",y2:"232.788",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#75C3FC"}),Nf("stop",{offset:"0.0929","stop-color":"#81C2F6"}),Nf("stop",{offset:"1","stop-color":"#F0B8BD"})),Nf("linearGradient",{id:"paint18_linear_1356_14057",x1:"222.282",y1:"258.986",x2:"162.257",y2:"273.774",gradientUnits:"userSpaceOnUse"},Nf("stop",{"stop-color":"#FFE466"}),Nf("stop",{offset:"1","stop-color":"#FFAFEA"}))));},ug=/*#__PURE__*/function(){function ug(e){_classCallCheck(this,ug);af(this,e),this.close=Hf(this,"close",7),this.connectWithExtension=Hf(this,"connectWithExtension",7),this.link=void 0,this.sdkVersion=void 0,this.tab=1,this.translationsLoaded=!1,this.i18nInstance=new Op();}return _createClass(ug,[{key:"connectedCallback",value:function(){var _connectedCallback3=_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee143(){return _regeneratorRuntime().wrap(function _callee143$(_context149){while(1)switch(_context149.prev=_context149.next){case 0:_context149.next=2;return this.i18nInstance.init({fallbackLng:"en"});case 2:this.translationsLoaded=!0;case 3:case"end":return _context149.stop();}},_callee143,this);}));function connectedCallback(){return _connectedCallback3.apply(this,arguments);}return connectedCallback;}()},{key:"onClose",value:function onClose(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:!1;this.close.emit({shouldTerminate:e});}},{key:"connectWithExtensionHandler",value:function connectWithExtensionHandler(){this.connectWithExtension.emit();}},{key:"setTab",value:function setTab(e){this.tab=e;}},{key:"updateLink",value:function updateLink(e){var t=Qp(e,"svg",{ecc:"medium",scale:2});if(!this.el.shadowRoot)return;var n=this.el.shadowRoot.querySelector("#sdk-mm-qrcode");n&&(n.innerHTML=t);}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.onClose();}},{key:"render",value:function render(){var _this59=this;if(!this.translationsLoaded)return null;var e=function(_e171){function e(_x53){return _e171.apply(this,arguments);}e.toString=function(){return _e171.toString();};return e;}(function(e){return _this59.i18nInstance.t(e);}),t=this.sdkVersion;return Nf(Ap,{className:"select-modal"},Nf("div",{"class":"backdrop",onClick:function onClick(){return _this59.onClose(!0);}}),Nf("div",{"class":"modal"},Nf("div",{"class":"closeButtonContainer"},Nf("div",{"class":"right"},Nf("span",{"class":"closeButton",onClick:function onClick(){return _this59.onClose(!0);}},Nf(Rp,null)))),Nf("div",{"class":"logoContainer"},Nf(Lp,null)),Nf("div",null,Nf("div",{"class":"tabcontainer"},Nf("div",{"class":"flexContainer"},Nf("div",{onClick:function onClick(){return _this59.setTab(1);},"class":"tab flexItem "+(1===this.tab?"tabactive":"")},e("DESKTOP")),Nf("div",{onClick:function onClick(){return _this59.setTab(2);},"class":"tab flexItem "+(2===this.tab?"tabactive":"")},e("MOBILE")))),Nf("div",{style:{display:1===this.tab?"none":"block"}},Nf("div",{"class":"flexContainer"},Nf("div",{"class":"flexItem",style:{textAlign:"center",marginTop:"4"}},Nf("div",{"class":"center",id:"sdk-mm-qrcode"}),Nf("div",{"class":"connectMobileText"},e("SCAN_TO_CONNECT"),Nf("br",null),Nf("span",{"class":"blue"},Nf("b",null,e("META_MASK_MOBILE_APP"))))))),Nf("div",{style:{display:2===this.tab?"none":"block"}},Nf("div",{style:{display:"flex",justifyContent:"center",height:"300",marginTop:"-20"}},Nf(dg,null)),Nf("div",{"class":"extensionLabel"},e("SELECT_MODAL.CRYPTO_TAKE_CONTROL_TEXT")),Nf("button",{"class":"button",onClick:this.connectWithExtensionHandler},Nf(lg,null),Nf("span",{"class":"installExtensionText"},e("CONNECT_WITH_EXTENSION"))))),Nf(Ip,{version:t})));}},{key:"el",get:function get(){return Uf(this);}}],[{key:"watchers",get:function get(){return {link:["updateLink"]};}}]);}();ug.style=".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";var hg=Object.freeze({__proto__:null,mm_select_modal:ug});

export { To as CommunicationLayerPreference, go as ConnectionStatus, co as DEFAULT_SERVER_URL, mo as EventType, bo as MessageType, Xh as MetaMaskSDK, rh as MetaMaskSDKEvent, ih as PROVIDER_UPDATE_TYPE, No as PlatformType, Zu as SDKProvider, Xh as default };
//# sourceMappingURL=metamask.js.map
