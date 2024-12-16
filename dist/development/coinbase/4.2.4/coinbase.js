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
var id = 0;
function _classPrivateFieldLooseKey(e) {
  return "__private_" + id++ + "_" + e;
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

var walletLogo = function walletLogo(type, width) {
  var height;
  switch (type) {
    case 'standard':
      height = width;
      return "data:image/svg+xml,%3Csvg width='".concat(width, "' height='").concat(height, "' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E ");
    case 'circle':
      height = width;
      return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='".concat(width, "' height='").concat(height, "' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E");
    case 'text':
      height = (0.1 * width).toFixed(2);
      return "data:image/svg+xml,%3Csvg width='".concat(width, "' height='").concat(height, "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E");
    case 'textWithLogo':
      height = (0.25 * width).toFixed(2);
      return "data:image/svg+xml,%3Csvg width='".concat(width, "' height='").concat(height, "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E");
    case 'textLight':
      height = (0.1 * width).toFixed(2);
      return "data:image/svg+xml,%3Csvg width='".concat(width, "' height='").concat(height, "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E");
    case 'textWithLogoLight':
      height = (0.25 * width).toFixed(2);
      return "data:image/svg+xml,%3Csvg width='".concat(width, "' height='").concat(height, "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E");
    default:
      height = width;
      return "data:image/svg+xml,%3Csvg width='".concat(width, "' height='").concat(height, "' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E ");
  }
};

// Copyright (c) 2018-2024 Coinbase, Inc. <https://www.coinbase.com/>
// TODO: clean up, or possibly deprecate Storage class
var ScopedLocalStorage = /*#__PURE__*/function () {
  function ScopedLocalStorage(scope, module) {
    _classCallCheck(this, ScopedLocalStorage);
    this.scope = scope;
    this.module = module;
  }
  return _createClass(ScopedLocalStorage, [{
    key: "storeObject",
    value: function storeObject(key, item) {
      this.setItem(key, JSON.stringify(item));
    }
  }, {
    key: "loadObject",
    value: function loadObject(key) {
      var item = this.getItem(key);
      return item ? JSON.parse(item) : undefined;
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      localStorage.setItem(this.scopedKey(key), value);
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return localStorage.getItem(this.scopedKey(key));
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      localStorage.removeItem(this.scopedKey(key));
    }
  }, {
    key: "clear",
    value: function clear() {
      var prefix = this.scopedKey('');
      var keysToRemove = [];
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (typeof key === 'string' && key.startsWith(prefix)) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(function (key) {
        return localStorage.removeItem(key);
      });
    }
  }, {
    key: "scopedKey",
    value: function scopedKey(key) {
      return "-".concat(this.scope).concat(this.module ? ":".concat(this.module) : '', ":").concat(key);
    }
  }], [{
    key: "clearAll",
    value: function clearAll() {
      new ScopedLocalStorage('CBWSDK').clear();
      new ScopedLocalStorage('walletlink').clear();
    }
  }]);
}();

var standardErrorCodes = {
  rpc: {
    invalidInput: -32000,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
    unsupportedChain: 4902
  }
};
var errorValues = {
  '-32700': {
    standard: 'JSON RPC 2.0',
    message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
  },
  '-32600': {
    standard: 'JSON RPC 2.0',
    message: 'The JSON sent is not a valid Request object.'
  },
  '-32601': {
    standard: 'JSON RPC 2.0',
    message: 'The method does not exist / is not available.'
  },
  '-32602': {
    standard: 'JSON RPC 2.0',
    message: 'Invalid method parameter(s).'
  },
  '-32603': {
    standard: 'JSON RPC 2.0',
    message: 'Internal JSON-RPC error.'
  },
  '-32000': {
    standard: 'EIP-1474',
    message: 'Invalid input.'
  },
  '-32001': {
    standard: 'EIP-1474',
    message: 'Resource not found.'
  },
  '-32002': {
    standard: 'EIP-1474',
    message: 'Resource unavailable.'
  },
  '-32003': {
    standard: 'EIP-1474',
    message: 'Transaction rejected.'
  },
  '-32004': {
    standard: 'EIP-1474',
    message: 'Method not supported.'
  },
  '-32005': {
    standard: 'EIP-1474',
    message: 'Request limit exceeded.'
  },
  '4001': {
    standard: 'EIP-1193',
    message: 'User rejected the request.'
  },
  '4100': {
    standard: 'EIP-1193',
    message: 'The requested account and/or method has not been authorized by the user.'
  },
  '4200': {
    standard: 'EIP-1193',
    message: 'The requested method is not supported by this Ethereum provider.'
  },
  '4900': {
    standard: 'EIP-1193',
    message: 'The provider is disconnected from all chains.'
  },
  '4901': {
    standard: 'EIP-1193',
    message: 'The provider is disconnected from the specified chain.'
  },
  '4902': {
    standard: 'EIP-3085',
    message: 'Unrecognized chain ID.'
  }
};

var FALLBACK_MESSAGE = 'Unspecified error message.';
var JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.';
/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 */
function getMessageFromCode(code) {
  var fallbackMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : FALLBACK_MESSAGE;
  if (code && Number.isInteger(code)) {
    var codeString = code.toString();
    if (hasKey(errorValues, codeString)) {
      return errorValues[codeString].message;
    }
    if (isJsonRpcServerError(code)) {
      return JSON_RPC_SERVER_ERROR_MESSAGE;
    }
  }
  return fallbackMessage;
}
/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 */
function isValidCode(code) {
  if (!Number.isInteger(code)) {
    return false;
  }
  var codeString = code.toString();
  if (errorValues[codeString]) {
    return true;
  }
  if (isJsonRpcServerError(code)) {
    return true;
  }
  return false;
}
/**
 * Returns the error code from an error object.
 */
function getErrorCode(error) {
  var _a;
  if (typeof error === 'number') {
    return error;
  } else if (isErrorWithCode(error)) {
    return (_a = error.code) !== null && _a !== void 0 ? _a : error.errorCode;
  }
  return undefined;
}
function isErrorWithCode(error) {
  return _typeof(error) === 'object' && error !== null && (typeof error.code === 'number' || typeof error.errorCode === 'number');
}
function serialize(error) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$shouldIncludeSta = _ref.shouldIncludeStack,
    shouldIncludeStack = _ref$shouldIncludeSta === void 0 ? false : _ref$shouldIncludeSta;
  var serialized = {};
  if (error && _typeof(error) === 'object' && !Array.isArray(error) && hasKey(error, 'code') && isValidCode(error.code)) {
    var _error = error;
    serialized.code = _error.code;
    if (_error.message && typeof _error.message === 'string') {
      serialized.message = _error.message;
      if (hasKey(_error, 'data')) {
        serialized.data = _error.data;
      }
    } else {
      serialized.message = getMessageFromCode(serialized.code);
      serialized.data = {
        originalError: assignOriginalError(error)
      };
    }
  } else {
    serialized.code = standardErrorCodes.rpc.internal;
    serialized.message = hasStringProperty(error, 'message') ? error.message : FALLBACK_MESSAGE;
    serialized.data = {
      originalError: assignOriginalError(error)
    };
  }
  if (shouldIncludeStack) {
    serialized.stack = hasStringProperty(error, 'stack') ? error.stack : undefined;
  }
  return serialized;
}
// Internal
function isJsonRpcServerError(code) {
  return code >= -32099 && code <= -32000;
}
function assignOriginalError(error) {
  if (error && _typeof(error) === 'object' && !Array.isArray(error)) {
    return Object.assign({}, error);
  }
  return error;
}
function hasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function hasStringProperty(obj, prop) {
  return _typeof(obj) === 'object' && obj !== null && prop in obj && typeof obj[prop] === 'string';
}

var standardErrors = {
  rpc: {
    parse: function parse(arg) {
      return getEthJsonRpcError(standardErrorCodes.rpc.parse, arg);
    },
    invalidRequest: function invalidRequest(arg) {
      return getEthJsonRpcError(standardErrorCodes.rpc.invalidRequest, arg);
    },
    invalidParams: function invalidParams(arg) {
      return getEthJsonRpcError(standardErrorCodes.rpc.invalidParams, arg);
    },
    methodNotFound: function methodNotFound(arg) {
      return getEthJsonRpcError(standardErrorCodes.rpc.methodNotFound, arg);
    },
    internal: function internal(arg) {
      return getEthJsonRpcError(standardErrorCodes.rpc.internal, arg);
    },
    server: function server(opts) {
      if (!opts || _typeof(opts) !== 'object' || Array.isArray(opts)) {
        throw new Error('Ethereum RPC Server errors must provide single object argument.');
      }
      var code = opts.code;
      if (!Number.isInteger(code) || code > -32005 || code < -32099) {
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      }
      return getEthJsonRpcError(code, opts);
    },
    invalidInput: function invalidInput(arg) {
      return getEthJsonRpcError(standardErrorCodes.rpc.invalidInput, arg);
    },
    resourceNotFound: function resourceNotFound(arg) {
      return getEthJsonRpcError(standardErrorCodes.rpc.resourceNotFound, arg);
    },
    resourceUnavailable: function resourceUnavailable(arg) {
      return getEthJsonRpcError(standardErrorCodes.rpc.resourceUnavailable, arg);
    },
    transactionRejected: function transactionRejected(arg) {
      return getEthJsonRpcError(standardErrorCodes.rpc.transactionRejected, arg);
    },
    methodNotSupported: function methodNotSupported(arg) {
      return getEthJsonRpcError(standardErrorCodes.rpc.methodNotSupported, arg);
    },
    limitExceeded: function limitExceeded(arg) {
      return getEthJsonRpcError(standardErrorCodes.rpc.limitExceeded, arg);
    }
  },
  provider: {
    userRejectedRequest: function userRejectedRequest(arg) {
      return getEthProviderError(standardErrorCodes.provider.userRejectedRequest, arg);
    },
    unauthorized: function unauthorized(arg) {
      return getEthProviderError(standardErrorCodes.provider.unauthorized, arg);
    },
    unsupportedMethod: function unsupportedMethod(arg) {
      return getEthProviderError(standardErrorCodes.provider.unsupportedMethod, arg);
    },
    disconnected: function disconnected(arg) {
      return getEthProviderError(standardErrorCodes.provider.disconnected, arg);
    },
    chainDisconnected: function chainDisconnected(arg) {
      return getEthProviderError(standardErrorCodes.provider.chainDisconnected, arg);
    },
    unsupportedChain: function unsupportedChain(arg) {
      return getEthProviderError(standardErrorCodes.provider.unsupportedChain, arg);
    },
    custom: function custom(opts) {
      if (!opts || _typeof(opts) !== 'object' || Array.isArray(opts)) {
        throw new Error('Ethereum Provider custom errors must provide single object argument.');
      }
      var code = opts.code,
        message = opts.message,
        data = opts.data;
      if (!message || typeof message !== 'string') {
        throw new Error('"message" must be a nonempty string');
      }
      return new EthereumProviderError(code, message, data);
    }
  }
};
// Internal
function getEthJsonRpcError(code, arg) {
  var _parseOpts = parseOpts(arg),
    _parseOpts2 = _slicedToArray(_parseOpts, 2),
    message = _parseOpts2[0],
    data = _parseOpts2[1];
  return new EthereumRpcError(code, message || getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
  var _parseOpts3 = parseOpts(arg),
    _parseOpts4 = _slicedToArray(_parseOpts3, 2),
    message = _parseOpts4[0],
    data = _parseOpts4[1];
  return new EthereumProviderError(code, message || getMessageFromCode(code), data);
}
function parseOpts(arg) {
  if (arg) {
    if (typeof arg === 'string') {
      return [arg];
    } else if (_typeof(arg) === 'object' && !Array.isArray(arg)) {
      var message = arg.message,
        data = arg.data;
      if (message && typeof message !== 'string') {
        throw new Error('Must specify string message.');
      }
      return [message || undefined, data];
    }
  }
  return [];
}
var EthereumRpcError = /*#__PURE__*/function (_Error) {
  function EthereumRpcError(code, message, data) {
    var _this;
    _classCallCheck(this, EthereumRpcError);
    if (!Number.isInteger(code)) {
      throw new Error('"code" must be an integer.');
    }
    if (!message || typeof message !== 'string') {
      throw new Error('"message" must be a nonempty string.');
    }
    _this = _callSuper(this, EthereumRpcError, [message]);
    _this.code = code;
    if (data !== undefined) {
      _this.data = data;
    }
    return _this;
  }
  _inherits(EthereumRpcError, _Error);
  return _createClass(EthereumRpcError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var EthereumProviderError = /*#__PURE__*/function (_EthereumRpcError) {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  function EthereumProviderError(code, message, data) {
    _classCallCheck(this, EthereumProviderError);
    if (!isValidEthProviderCode(code)) {
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    }
    return _callSuper(this, EthereumProviderError, [code, message, data]);
  }
  _inherits(EthereumProviderError, _EthereumRpcError);
  return _createClass(EthereumProviderError);
}(EthereumRpcError);
function isValidEthProviderCode(code) {
  return Number.isInteger(code) && code >= 1000 && code <= 4999;
}

function OpaqueType() {
  return function (value) {
    return value;
  };
}
var HexString = OpaqueType();
var AddressString = OpaqueType();
var BigIntString = OpaqueType();
function IntNumber(num) {
  return Math.floor(num);
}
var RegExpString = OpaqueType();

var INT_STRING_REGEX = /^[0-9]*$/;
var HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
/**
 * @param length number of bytes
 */
function randomBytesHex(length) {
  return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
}
function uint8ArrayToHex(value) {
  return _toConsumableArray(value).map(function (b) {
    return b.toString(16).padStart(2, '0');
  }).join('');
}
function hexStringToUint8Array(hexString) {
  return new Uint8Array(hexString.match(/.{1,2}/g).map(function (_byte) {
    return Number.parseInt(_byte, 16);
  }));
}
function hexStringFromBuffer(buf) {
  var includePrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var hex = buf.toString('hex');
  return HexString(includePrefix ? "0x".concat(hex) : hex);
}
function encodeToHexString(str) {
  return hexStringFromBuffer(ensureBuffer(str), true);
}
function bigIntStringFromBigInt(bi) {
  return BigIntString(bi.toString(10));
}
function intNumberFromHexString(hex) {
  return IntNumber(Number(BigInt(ensureEvenLengthHexString(hex, true))));
}
function hexStringFromNumber(num) {
  return HexString("0x".concat(BigInt(num).toString(16)));
}
function has0xPrefix(str) {
  return str.startsWith('0x') || str.startsWith('0X');
}
function strip0x(hex) {
  if (has0xPrefix(hex)) {
    return hex.slice(2);
  }
  return hex;
}
function prepend0x(hex) {
  if (has0xPrefix(hex)) {
    return "0x".concat(hex.slice(2));
  }
  return "0x".concat(hex);
}
function isHexString$1(hex) {
  if (typeof hex !== 'string') {
    return false;
  }
  var s = strip0x(hex).toLowerCase();
  return HEXADECIMAL_STRING_REGEX.test(s);
}
function ensureHexString(hex) {
  var includePrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof hex === 'string') {
    var s = strip0x(hex).toLowerCase();
    if (HEXADECIMAL_STRING_REGEX.test(s)) {
      return HexString(includePrefix ? "0x".concat(s) : s);
    }
  }
  throw standardErrors.rpc.invalidParams("\"".concat(String(hex), "\" is not a hexadecimal string"));
}
function ensureEvenLengthHexString(hex) {
  var includePrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var h = ensureHexString(hex, false);
  if (h.length % 2 === 1) {
    h = HexString("0".concat(h));
  }
  return includePrefix ? HexString("0x".concat(h)) : h;
}
function ensureAddressString(str) {
  if (typeof str === 'string') {
    var s = strip0x(str).toLowerCase();
    if (isHexString$1(s) && s.length === 40) {
      return AddressString(prepend0x(s));
    }
  }
  throw standardErrors.rpc.invalidParams("Invalid Ethereum address: ".concat(String(str)));
}
function ensureBuffer(str) {
  if (Buffer.isBuffer(str)) {
    return str;
  }
  if (typeof str === 'string') {
    if (isHexString$1(str)) {
      var s = ensureEvenLengthHexString(str, false);
      return Buffer.from(s, 'hex');
    }
    return Buffer.from(str, 'utf8');
  }
  throw standardErrors.rpc.invalidParams("Not binary data: ".concat(String(str)));
}
function ensureIntNumber(num) {
  if (typeof num === 'number' && Number.isInteger(num)) {
    return IntNumber(num);
  }
  if (typeof num === 'string') {
    if (INT_STRING_REGEX.test(num)) {
      return IntNumber(Number(num));
    }
    if (isHexString$1(num)) {
      return IntNumber(Number(BigInt(ensureEvenLengthHexString(num, true))));
    }
  }
  throw standardErrors.rpc.invalidParams("Not an integer: ".concat(String(num)));
}
function ensureRegExpString(regExp) {
  if (regExp instanceof RegExp) {
    return RegExpString(regExp.toString());
  }
  throw standardErrors.rpc.invalidParams("Not a RegExp: ".concat(String(regExp)));
}
function ensureBigInt(val) {
  if (val !== null && (typeof val === 'bigint' || isBigNumber(val))) {
    return BigInt(val.toString(10));
  }
  if (typeof val === 'number') {
    return BigInt(ensureIntNumber(val));
  }
  if (typeof val === 'string') {
    if (INT_STRING_REGEX.test(val)) {
      return BigInt(val);
    }
    if (isHexString$1(val)) {
      return BigInt(ensureEvenLengthHexString(val, true));
    }
  }
  throw standardErrors.rpc.invalidParams("Not an integer: ".concat(String(val)));
}
function ensureParsedJSONObject(val) {
  if (typeof val === 'string') {
    return JSON.parse(val);
  }
  if (_typeof(val) === 'object') {
    return val;
  }
  throw standardErrors.rpc.invalidParams("Not a JSON string or an object: ".concat(String(val)));
}
function isBigNumber(val) {
  if (val == null || typeof val.constructor !== 'function') {
    return false;
  }
  var constructor = val.constructor;
  return typeof constructor.config === 'function' && typeof constructor.EUCLID === 'number';
}
function range(start, stop) {
  return Array.from({
    length: stop - start
  }, function (_, i) {
    return start + i;
  });
}
function getFavicon() {
  var el = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
  var _document$location = document.location,
    protocol = _document$location.protocol,
    host = _document$location.host;
  var href = el ? el.getAttribute('href') : null;
  if (!href || href.startsWith('javascript:') || href.startsWith('vbscript:')) {
    return "".concat(protocol, "//").concat(host, "/favicon.ico"); // fallback
  }
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('data:')) {
    return href;
  }
  if (href.startsWith('//')) {
    return protocol + href;
  }
  return "".concat(protocol, "//").concat(host).concat(href);
}
function areAddressArraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every(function (value, index) {
    return value === arr2[index];
  });
}

function generateKeyPair() {
  return _generateKeyPair.apply(this, arguments);
}
function _generateKeyPair() {
  _generateKeyPair = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", crypto.subtle.generateKey({
            name: 'ECDH',
            namedCurve: 'P-256'
          }, true, ['deriveKey']));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _generateKeyPair.apply(this, arguments);
}
function deriveSharedSecret(_x, _x2) {
  return _deriveSharedSecret.apply(this, arguments);
}
function _deriveSharedSecret() {
  _deriveSharedSecret = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ownPrivateKey, peerPublicKey) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", crypto.subtle.deriveKey({
            name: 'ECDH',
            "public": peerPublicKey
          }, ownPrivateKey, {
            name: 'AES-GCM',
            length: 256
          }, false, ['encrypt', 'decrypt']));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _deriveSharedSecret.apply(this, arguments);
}
function encrypt(_x3, _x4) {
  return _encrypt.apply(this, arguments);
}
function _encrypt() {
  _encrypt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sharedSecret, plainText) {
    var iv, cipherText;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          iv = crypto.getRandomValues(new Uint8Array(12));
          _context3.next = 3;
          return crypto.subtle.encrypt({
            name: 'AES-GCM',
            iv: iv
          }, sharedSecret, new TextEncoder().encode(plainText));
        case 3:
          cipherText = _context3.sent;
          return _context3.abrupt("return", {
            iv: iv,
            cipherText: cipherText
          });
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _encrypt.apply(this, arguments);
}
function decrypt(_x5, _x6) {
  return _decrypt.apply(this, arguments);
}
function _decrypt() {
  _decrypt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(sharedSecret, _ref) {
    var iv, cipherText, plainText;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          iv = _ref.iv, cipherText = _ref.cipherText;
          _context4.next = 3;
          return crypto.subtle.decrypt({
            name: 'AES-GCM',
            iv: iv
          }, sharedSecret, cipherText);
        case 3:
          plainText = _context4.sent;
          return _context4.abrupt("return", new TextDecoder().decode(plainText));
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _decrypt.apply(this, arguments);
}
function getFormat(keyType) {
  switch (keyType) {
    case 'public':
      return 'spki';
    case 'private':
      return 'pkcs8';
  }
}
function exportKeyToHexString(_x7, _x8) {
  return _exportKeyToHexString.apply(this, arguments);
}
function _exportKeyToHexString() {
  _exportKeyToHexString = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(type, key) {
    var format, exported;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          format = getFormat(type);
          _context5.next = 3;
          return crypto.subtle.exportKey(format, key);
        case 3:
          exported = _context5.sent;
          return _context5.abrupt("return", uint8ArrayToHex(new Uint8Array(exported)));
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _exportKeyToHexString.apply(this, arguments);
}
function importKeyFromHexString(_x9, _x10) {
  return _importKeyFromHexString.apply(this, arguments);
}
function _importKeyFromHexString() {
  _importKeyFromHexString = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(type, hexString) {
    var format, arrayBuffer;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          format = getFormat(type);
          arrayBuffer = hexStringToUint8Array(hexString).buffer;
          _context6.next = 4;
          return crypto.subtle.importKey(format, new Uint8Array(arrayBuffer), {
            name: 'ECDH',
            namedCurve: 'P-256'
          }, true, type === 'private' ? ['deriveKey'] : []);
        case 4:
          return _context6.abrupt("return", _context6.sent);
        case 5:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _importKeyFromHexString.apply(this, arguments);
}
function encryptContent(_x11, _x12) {
  return _encryptContent.apply(this, arguments);
}
function _encryptContent() {
  _encryptContent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(content, sharedSecret) {
    var serialized;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          serialized = JSON.stringify(content, function (_, value) {
            if (!(value instanceof Error)) return value;
            var error = value;
            return Object.assign(Object.assign({}, error.code ? {
              code: error.code
            } : {}), {
              message: error.message
            });
          });
          return _context7.abrupt("return", encrypt(sharedSecret, serialized));
        case 2:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _encryptContent.apply(this, arguments);
}
function decryptContent(_x13, _x14) {
  return _decryptContent.apply(this, arguments);
}
function _decryptContent() {
  _decryptContent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(encryptedData, sharedSecret) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.t0 = JSON;
          _context8.next = 3;
          return decrypt(sharedSecret, encryptedData);
        case 3:
          _context8.t1 = _context8.sent;
          return _context8.abrupt("return", _context8.t0.parse.call(_context8.t0, _context8.t1));
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _decryptContent.apply(this, arguments);
}

var OWN_PRIVATE_KEY = {
  storageKey: 'ownPrivateKey',
  keyType: 'private'
};
var OWN_PUBLIC_KEY = {
  storageKey: 'ownPublicKey',
  keyType: 'public'
};
var PEER_PUBLIC_KEY = {
  storageKey: 'peerPublicKey',
  keyType: 'public'
};
var SCWKeyManager = /*#__PURE__*/function () {
  function SCWKeyManager() {
    _classCallCheck(this, SCWKeyManager);
    this.storage = new ScopedLocalStorage('CBWSDK', 'SCWKeyManager');
    this.ownPrivateKey = null;
    this.ownPublicKey = null;
    this.peerPublicKey = null;
    this.sharedSecret = null;
  }
  return _createClass(SCWKeyManager, [{
    key: "getOwnPublicKey",
    value: function () {
      var _getOwnPublicKey = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.loadKeysIfNeeded();
            case 2:
              return _context.abrupt("return", this.ownPublicKey);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getOwnPublicKey() {
        return _getOwnPublicKey.apply(this, arguments);
      }
      return getOwnPublicKey;
    }() // returns null if the shared secret is not yet derived
  }, {
    key: "getSharedSecret",
    value: function () {
      var _getSharedSecret = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.loadKeysIfNeeded();
            case 2:
              return _context2.abrupt("return", this.sharedSecret);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getSharedSecret() {
        return _getSharedSecret.apply(this, arguments);
      }
      return getSharedSecret;
    }()
  }, {
    key: "setPeerPublicKey",
    value: function () {
      var _setPeerPublicKey = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(key) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.sharedSecret = null;
              this.peerPublicKey = key;
              _context3.next = 4;
              return this.storeKey(PEER_PUBLIC_KEY, key);
            case 4:
              _context3.next = 6;
              return this.loadKeysIfNeeded();
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function setPeerPublicKey(_x) {
        return _setPeerPublicKey.apply(this, arguments);
      }
      return setPeerPublicKey;
    }()
  }, {
    key: "clear",
    value: function () {
      var _clear = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              this.ownPrivateKey = null;
              this.ownPublicKey = null;
              this.peerPublicKey = null;
              this.sharedSecret = null;
              this.storage.removeItem(OWN_PUBLIC_KEY.storageKey);
              this.storage.removeItem(OWN_PRIVATE_KEY.storageKey);
              this.storage.removeItem(PEER_PUBLIC_KEY.storageKey);
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function clear() {
        return _clear.apply(this, arguments);
      }
      return clear;
    }()
  }, {
    key: "generateKeyPair",
    value: function () {
      var _generateKeyPair2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var newKeyPair;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return generateKeyPair();
            case 2:
              newKeyPair = _context5.sent;
              this.ownPrivateKey = newKeyPair.privateKey;
              this.ownPublicKey = newKeyPair.publicKey;
              _context5.next = 7;
              return this.storeKey(OWN_PRIVATE_KEY, newKeyPair.privateKey);
            case 7:
              _context5.next = 9;
              return this.storeKey(OWN_PUBLIC_KEY, newKeyPair.publicKey);
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function generateKeyPair$1() {
        return _generateKeyPair2.apply(this, arguments);
      }
      return generateKeyPair$1;
    }()
  }, {
    key: "loadKeysIfNeeded",
    value: function () {
      var _loadKeysIfNeeded = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(this.ownPrivateKey === null)) {
                _context6.next = 4;
                break;
              }
              _context6.next = 3;
              return this.loadKey(OWN_PRIVATE_KEY);
            case 3:
              this.ownPrivateKey = _context6.sent;
            case 4:
              if (!(this.ownPublicKey === null)) {
                _context6.next = 8;
                break;
              }
              _context6.next = 7;
              return this.loadKey(OWN_PUBLIC_KEY);
            case 7:
              this.ownPublicKey = _context6.sent;
            case 8:
              if (!(this.ownPrivateKey === null || this.ownPublicKey === null)) {
                _context6.next = 11;
                break;
              }
              _context6.next = 11;
              return this.generateKeyPair();
            case 11:
              if (!(this.peerPublicKey === null)) {
                _context6.next = 15;
                break;
              }
              _context6.next = 14;
              return this.loadKey(PEER_PUBLIC_KEY);
            case 14:
              this.peerPublicKey = _context6.sent;
            case 15:
              if (!(this.sharedSecret === null)) {
                _context6.next = 21;
                break;
              }
              if (!(this.ownPrivateKey === null || this.peerPublicKey === null)) {
                _context6.next = 18;
                break;
              }
              return _context6.abrupt("return");
            case 18:
              _context6.next = 20;
              return deriveSharedSecret(this.ownPrivateKey, this.peerPublicKey);
            case 20:
              this.sharedSecret = _context6.sent;
            case 21:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function loadKeysIfNeeded() {
        return _loadKeysIfNeeded.apply(this, arguments);
      }
      return loadKeysIfNeeded;
    }() // storage methods
  }, {
    key: "loadKey",
    value: function () {
      var _loadKey = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(item) {
        var key;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              key = this.storage.getItem(item.storageKey);
              if (key) {
                _context7.next = 3;
                break;
              }
              return _context7.abrupt("return", null);
            case 3:
              return _context7.abrupt("return", importKeyFromHexString(item.keyType, key));
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function loadKey(_x2) {
        return _loadKey.apply(this, arguments);
      }
      return loadKey;
    }()
  }, {
    key: "storeKey",
    value: function () {
      var _storeKey = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(item, key) {
        var hexString;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return exportKeyToHexString(item.keyType, key);
            case 2:
              hexString = _context8.sent;
              this.storage.setItem(item.storageKey, hexString);
            case 4:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function storeKey(_x3, _x4) {
        return _storeKey.apply(this, arguments);
      }
      return storeKey;
    }()
  }]);
}();

var VERSION = '4.2.4';
var NAME = '@coinbase/wallet-sdk';

function fetchRPCRequest(_x, _x2) {
  return _fetchRPCRequest.apply(this, arguments);
}
function _fetchRPCRequest() {
  _fetchRPCRequest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, rpcUrl) {
    var requestBody, res, _yield$res$json, result, error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          requestBody = Object.assign(Object.assign({}, request), {
            jsonrpc: '2.0',
            id: crypto.randomUUID()
          });
          _context.next = 3;
          return window.fetch(rpcUrl, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'X-Cbw-Sdk-Version': VERSION,
              'X-Cbw-Sdk-Platform': NAME
            }
          });
        case 3:
          res = _context.sent;
          _context.next = 6;
          return res.json();
        case 6:
          _yield$res$json = _context.sent;
          result = _yield$res$json.result;
          error = _yield$res$json.error;
          if (!error) {
            _context.next = 11;
            break;
          }
          throw error;
        case 11:
          return _context.abrupt("return", result);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _fetchRPCRequest.apply(this, arguments);
}
function getCoinbaseInjectedLegacyProvider() {
  var window = globalThis;
  return window.coinbaseWalletExtension;
}
function getInjectedEthereum() {
  var _a, _b;
  try {
    var _window = globalThis;
    return (_a = _window.ethereum) !== null && _a !== void 0 ? _a : (_b = _window.top) === null || _b === void 0 ? void 0 : _b.ethereum;
  } catch (_c) {
    return undefined;
  }
}
function getCoinbaseInjectedProvider(_ref) {
  var metadata = _ref.metadata,
    preference = _ref.preference;
  var _a, _b;
  var appName = metadata.appName,
    appLogoUrl = metadata.appLogoUrl,
    appChainIds = metadata.appChainIds;
  if (preference.options !== 'smartWalletOnly') {
    var extension = getCoinbaseInjectedLegacyProvider();
    if (extension) {
      (_a = extension.setAppInfo) === null || _a === void 0 ? void 0 : _a.call(extension, appName, appLogoUrl, appChainIds, preference);
      return extension;
    }
  }
  var ethereum = getInjectedEthereum();
  if (ethereum === null || ethereum === void 0 ? void 0 : ethereum.isCoinbaseBrowser) {
    (_b = ethereum.setAppInfo) === null || _b === void 0 ? void 0 : _b.call(ethereum, appName, appLogoUrl, appChainIds, preference);
    return ethereum;
  }
  return undefined;
}
/**
 * Validates the arguments for an invalid request and returns an error if any validation fails.
 * Valid request args are defined here: https://eips.ethereum.org/EIPS/eip-1193#request
 * @param args The request arguments to validate.
 * @returns An error object if the arguments are invalid, otherwise undefined.
 */
function checkErrorForInvalidRequestArgs(args) {
  if (!args || _typeof(args) !== 'object' || Array.isArray(args)) {
    throw standardErrors.rpc.invalidParams({
      message: 'Expected a single, non-array, object argument.',
      data: args
    });
  }
  var method = args.method,
    params = args.params;
  if (typeof method !== 'string' || method.length === 0) {
    throw standardErrors.rpc.invalidParams({
      message: "'args.method' must be a non-empty string.",
      data: args
    });
  }
  if (params !== undefined && !Array.isArray(params) && (_typeof(params) !== 'object' || params === null)) {
    throw standardErrors.rpc.invalidParams({
      message: "'args.params' must be an object or array if provided.",
      data: args
    });
  }
  switch (method) {
    case 'eth_sign':
    case 'eth_signTypedData_v2':
    case 'eth_subscribe':
    case 'eth_unsubscribe':
      throw standardErrors.provider.unsupportedMethod();
  }
}

var ACCOUNTS_KEY = 'accounts';
var ACTIVE_CHAIN_STORAGE_KEY = 'activeChain';
var AVAILABLE_CHAINS_STORAGE_KEY = 'availableChains';
var WALLET_CAPABILITIES_STORAGE_KEY = 'walletCapabilities';
var SCWSigner = /*#__PURE__*/function () {
  function SCWSigner(params) {
    _classCallCheck(this, SCWSigner);
    var _a, _b, _c;
    this.metadata = params.metadata;
    this.communicator = params.communicator;
    this.callback = params.callback;
    this.keyManager = new SCWKeyManager();
    this.storage = new ScopedLocalStorage('CBWSDK', 'SCWStateManager');
    this.accounts = (_a = this.storage.loadObject(ACCOUNTS_KEY)) !== null && _a !== void 0 ? _a : [];
    this.chain = this.storage.loadObject(ACTIVE_CHAIN_STORAGE_KEY) || {
      id: (_c = (_b = params.metadata.appChainIds) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : 1
    };
    this.handshake = this.handshake.bind(this);
    this.request = this.request.bind(this);
    this.createRequestMessage = this.createRequestMessage.bind(this);
    this.decryptResponseMessage = this.decryptResponseMessage.bind(this);
  }
  return _createClass(SCWSigner, [{
    key: "handshake",
    value: function () {
      var _handshake = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
        var _a, _b, handshakeMessage, response, peerPublicKey, decrypted, result, accounts;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.createRequestMessage({
                handshake: {
                  method: args.method,
                  params: Object.assign({}, this.metadata, (_a = args.params) !== null && _a !== void 0 ? _a : {})
                }
              });
            case 2:
              handshakeMessage = _context.sent;
              _context.next = 5;
              return this.communicator.postRequestAndWaitForResponse(handshakeMessage);
            case 5:
              response = _context.sent;
              if (!('failure' in response.content)) {
                _context.next = 8;
                break;
              }
              throw response.content.failure;
            case 8:
              _context.next = 10;
              return importKeyFromHexString('public', response.sender);
            case 10:
              peerPublicKey = _context.sent;
              _context.next = 13;
              return this.keyManager.setPeerPublicKey(peerPublicKey);
            case 13:
              _context.next = 15;
              return this.decryptResponseMessage(response);
            case 15:
              decrypted = _context.sent;
              result = decrypted.result;
              if (!('error' in result)) {
                _context.next = 19;
                break;
              }
              throw result.error;
            case 19:
              accounts = result.value;
              this.accounts = accounts;
              this.storage.storeObject(ACCOUNTS_KEY, accounts);
              (_b = this.callback) === null || _b === void 0 ? void 0 : _b.call(this, 'accountsChanged', accounts);
            case 23:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function handshake(_x) {
        return _handshake.apply(this, arguments);
      }
      return handshake;
    }()
  }, {
    key: "request",
    value: function () {
      var _request2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_request) {
        var _a;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this.accounts.length === 0)) {
                _context2.next = 2;
                break;
              }
              throw standardErrors.provider.unauthorized();
            case 2:
              _context2.t0 = _request.method;
              _context2.next = _context2.t0 === 'eth_requestAccounts' ? 5 : _context2.t0 === 'eth_accounts' ? 7 : _context2.t0 === 'eth_coinbase' ? 8 : _context2.t0 === 'net_version' ? 9 : _context2.t0 === 'eth_chainId' ? 10 : _context2.t0 === 'wallet_getCapabilities' ? 11 : _context2.t0 === 'wallet_switchEthereumChain' ? 12 : _context2.t0 === 'eth_ecRecover' ? 13 : _context2.t0 === 'personal_sign' ? 13 : _context2.t0 === 'personal_ecRecover' ? 13 : _context2.t0 === 'eth_signTransaction' ? 13 : _context2.t0 === 'eth_sendTransaction' ? 13 : _context2.t0 === 'eth_signTypedData_v1' ? 13 : _context2.t0 === 'eth_signTypedData_v3' ? 13 : _context2.t0 === 'eth_signTypedData_v4' ? 13 : _context2.t0 === 'eth_signTypedData' ? 13 : _context2.t0 === 'wallet_addEthereumChain' ? 13 : _context2.t0 === 'wallet_watchAsset' ? 13 : _context2.t0 === 'wallet_sendCalls' ? 13 : _context2.t0 === 'wallet_showCallsStatus' ? 13 : _context2.t0 === 'wallet_grantPermissions' ? 13 : 14;
              break;
            case 5:
              (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, 'connect', {
                chainId: hexStringFromNumber(this.chain.id)
              });
              return _context2.abrupt("return", this.accounts);
            case 7:
              return _context2.abrupt("return", this.accounts);
            case 8:
              return _context2.abrupt("return", this.accounts[0]);
            case 9:
              return _context2.abrupt("return", this.chain.id);
            case 10:
              return _context2.abrupt("return", hexStringFromNumber(this.chain.id));
            case 11:
              return _context2.abrupt("return", this.storage.loadObject(WALLET_CAPABILITIES_STORAGE_KEY));
            case 12:
              return _context2.abrupt("return", this.handleSwitchChainRequest(_request));
            case 13:
              return _context2.abrupt("return", this.sendRequestToPopup(_request));
            case 14:
              if (this.chain.rpcUrl) {
                _context2.next = 16;
                break;
              }
              throw standardErrors.rpc.internal('No RPC URL set for chain');
            case 16:
              return _context2.abrupt("return", fetchRPCRequest(_request, this.chain.rpcUrl));
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function request(_x2) {
        return _request2.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "sendRequestToPopup",
    value: function () {
      var _sendRequestToPopup = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var _a, _b, response, decrypted, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (_b = (_a = this.communicator).waitForPopupLoaded) === null || _b === void 0 ? void 0 : _b.call(_a);
            case 2:
              _context3.next = 4;
              return this.sendEncryptedRequest(request);
            case 4:
              response = _context3.sent;
              _context3.next = 7;
              return this.decryptResponseMessage(response);
            case 7:
              decrypted = _context3.sent;
              result = decrypted.result;
              if (!('error' in result)) {
                _context3.next = 11;
                break;
              }
              throw result.error;
            case 11:
              return _context3.abrupt("return", result.value);
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function sendRequestToPopup(_x3) {
        return _sendRequestToPopup.apply(this, arguments);
      }
      return sendRequestToPopup;
    }()
  }, {
    key: "cleanup",
    value: function () {
      var _cleanup = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _a, _b;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              this.storage.clear();
              _context4.next = 3;
              return this.keyManager.clear();
            case 3:
              this.accounts = [];
              this.chain = {
                id: (_b = (_a = this.metadata.appChainIds) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : 1
              };
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function cleanup() {
        return _cleanup.apply(this, arguments);
      }
      return cleanup;
    }()
    /**
     * @returns `null` if the request was successful.
     * https://eips.ethereum.org/EIPS/eip-3326#wallet_switchethereumchain
     */
  }, {
    key: "handleSwitchChainRequest",
    value: (function () {
      var _handleSwitchChainRequest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request) {
        var _a, params, chainId, localResult, popupResult;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              params = request.params;
              if (!(!params || !((_a = params[0]) === null || _a === void 0 ? void 0 : _a.chainId))) {
                _context5.next = 3;
                break;
              }
              throw standardErrors.rpc.invalidParams();
            case 3:
              chainId = ensureIntNumber(params[0].chainId);
              localResult = this.updateChain(chainId);
              if (!localResult) {
                _context5.next = 7;
                break;
              }
              return _context5.abrupt("return", null);
            case 7:
              _context5.next = 9;
              return this.sendRequestToPopup(request);
            case 9:
              popupResult = _context5.sent;
              if (popupResult === null) {
                this.updateChain(chainId);
              }
              return _context5.abrupt("return", popupResult);
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function handleSwitchChainRequest(_x4) {
        return _handleSwitchChainRequest.apply(this, arguments);
      }
      return handleSwitchChainRequest;
    }())
  }, {
    key: "sendEncryptedRequest",
    value: function () {
      var _sendEncryptedRequest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(request) {
        var sharedSecret, encrypted, message;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.keyManager.getSharedSecret();
            case 2:
              sharedSecret = _context6.sent;
              if (sharedSecret) {
                _context6.next = 5;
                break;
              }
              throw standardErrors.provider.unauthorized('No valid session found, try requestAccounts before other methods');
            case 5:
              _context6.next = 7;
              return encryptContent({
                action: request,
                chainId: this.chain.id
              }, sharedSecret);
            case 7:
              encrypted = _context6.sent;
              _context6.next = 10;
              return this.createRequestMessage({
                encrypted: encrypted
              });
            case 10:
              message = _context6.sent;
              return _context6.abrupt("return", this.communicator.postRequestAndWaitForResponse(message));
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function sendEncryptedRequest(_x5) {
        return _sendEncryptedRequest.apply(this, arguments);
      }
      return sendEncryptedRequest;
    }()
  }, {
    key: "createRequestMessage",
    value: function () {
      var _createRequestMessage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(content) {
        var publicKey;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.t0 = exportKeyToHexString;
              _context7.next = 3;
              return this.keyManager.getOwnPublicKey();
            case 3:
              _context7.t1 = _context7.sent;
              _context7.next = 6;
              return (0, _context7.t0)('public', _context7.t1);
            case 6:
              publicKey = _context7.sent;
              return _context7.abrupt("return", {
                id: crypto.randomUUID(),
                sender: publicKey,
                content: content,
                timestamp: new Date()
              });
            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function createRequestMessage(_x6) {
        return _createRequestMessage.apply(this, arguments);
      }
      return createRequestMessage;
    }()
  }, {
    key: "decryptResponseMessage",
    value: function () {
      var _decryptResponseMessage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(message) {
        var _a, _b, content, sharedSecret, response, availableChains, chains, walletCapabilities;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              content = message.content; // throw protocol level error
              if (!('failure' in content)) {
                _context8.next = 3;
                break;
              }
              throw content.failure;
            case 3:
              _context8.next = 5;
              return this.keyManager.getSharedSecret();
            case 5:
              sharedSecret = _context8.sent;
              if (sharedSecret) {
                _context8.next = 8;
                break;
              }
              throw standardErrors.provider.unauthorized('Invalid session');
            case 8:
              _context8.next = 10;
              return decryptContent(content.encrypted, sharedSecret);
            case 10:
              response = _context8.sent;
              availableChains = (_a = response.data) === null || _a === void 0 ? void 0 : _a.chains;
              if (availableChains) {
                chains = Object.entries(availableChains).map(function (_ref) {
                  var _ref2 = _slicedToArray(_ref, 2),
                    id = _ref2[0],
                    rpcUrl = _ref2[1];
                  return {
                    id: Number(id),
                    rpcUrl: rpcUrl
                  };
                });
                this.storage.storeObject(AVAILABLE_CHAINS_STORAGE_KEY, chains);
                this.updateChain(this.chain.id, chains);
              }
              walletCapabilities = (_b = response.data) === null || _b === void 0 ? void 0 : _b.capabilities;
              if (walletCapabilities) {
                this.storage.storeObject(WALLET_CAPABILITIES_STORAGE_KEY, walletCapabilities);
              }
              return _context8.abrupt("return", response);
            case 16:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function decryptResponseMessage(_x7) {
        return _decryptResponseMessage.apply(this, arguments);
      }
      return decryptResponseMessage;
    }()
  }, {
    key: "updateChain",
    value: function updateChain(chainId, newAvailableChains) {
      var _a;
      var chains = newAvailableChains !== null && newAvailableChains !== void 0 ? newAvailableChains : this.storage.loadObject(AVAILABLE_CHAINS_STORAGE_KEY);
      var chain = chains === null || chains === void 0 ? void 0 : chains.find(function (chain) {
        return chain.id === chainId;
      });
      if (!chain) return false;
      if (chain !== this.chain) {
        this.chain = chain;
        this.storage.storeObject(ACTIVE_CHAIN_STORAGE_KEY, chain);
        (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, 'chainChanged', hexStringFromNumber(chain.id));
      }
      return true;
    }
  }]);
}();

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

var sha3 = {};

var _assert = {};

"use strict";
Object.defineProperty(_assert, "__esModule", {
  value: true
});
var isBytes_1 = _assert.isBytes = isBytes$2;
var number_1 = _assert.number = number$1;
var bool_1 = _assert.bool = bool$1;
var bytes_1 = _assert.bytes = bytes$1;
var hash_1 = _assert.hash = hash$1;
var exists_1 = _assert.exists = exists$1;
var output_1 = _assert.output = output$1;
function number$1(n) {
  if (!Number.isSafeInteger(n) || n < 0) throw new Error("positive integer expected, not ".concat(n));
}
function bool$1(b) {
  if (typeof b !== 'boolean') throw new Error("boolean expected, not ".concat(b));
}
// copied from utils
function isBytes$2(a) {
  return a instanceof Uint8Array || a != null && _typeof(a) === 'object' && a.constructor.name === 'Uint8Array';
}
function bytes$1(b) {
  if (!isBytes$2(b)) throw new Error('Uint8Array expected');
  for (var _len = arguments.length, lengths = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    lengths[_key - 1] = arguments[_key];
  }
  if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error("Uint8Array expected of length ".concat(lengths, ", not of length=").concat(b.length));
}
function hash$1(h) {
  if (typeof h !== 'function' || typeof h.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
  number$1(h.outputLen);
  number$1(h.blockLen);
}
function exists$1(instance) {
  var checkFinished = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (instance.destroyed) throw new Error('Hash instance has been destroyed');
  if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
function output$1(out, instance) {
  bytes$1(out);
  var min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least ".concat(min));
  }
}
var assert$1 = {
  number: number$1,
  bool: bool$1,
  bytes: bytes$1,
  hash: hash$1,
  exists: exists$1,
  output: output$1
};
var _default$1 = _assert["default"] = assert$1;

var _u64 = {};

"use strict";
Object.defineProperty(_u64, "__esModule", {
  value: true
});
var add5L_1 = _u64.add5L = add5H_1 = _u64.add5H = add4H_1 = _u64.add4H = add4L_1 = _u64.add4L = add3H_1 = _u64.add3H = add3L_1 = _u64.add3L = rotlBL_1 = _u64.rotlBL = rotlBH_1 = _u64.rotlBH = rotlSL_1 = _u64.rotlSL = rotlSH_1 = _u64.rotlSH = rotr32L_1 = _u64.rotr32L = rotr32H_1 = _u64.rotr32H = rotrBL_1 = _u64.rotrBL = rotrBH_1 = _u64.rotrBH = rotrSL_1 = _u64.rotrSL = rotrSH_1 = _u64.rotrSH = shrSL_1 = _u64.shrSL = shrSH_1 = _u64.shrSH = toBig_1 = _u64.toBig = void 0;
var fromBig_1 = _u64.fromBig = fromBig;
var split_1 = _u64.split = split;
var add_1 = _u64.add = add;
var U32_MASK64 = /* @__PURE__ */BigInt(Math.pow(2, 32) - 1);
var _32n = /* @__PURE__ */BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n) {
  var le = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (le) return {
    h: Number(n & U32_MASK64),
    l: Number(n >> _32n & U32_MASK64)
  };
  return {
    h: Number(n >> _32n & U32_MASK64) | 0,
    l: Number(n & U32_MASK64) | 0
  };
}
function split(lst) {
  var le = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var Ah = new Uint32Array(lst.length);
  var Al = new Uint32Array(lst.length);
  for (var i = 0; i < lst.length; i++) {
    var _fromBig = fromBig(lst[i], le),
      h = _fromBig.h,
      l = _fromBig.l;
    var _ref = [h, l];
    Ah[i] = _ref[0];
    Al[i] = _ref[1];
  }
  return [Ah, Al];
}
var toBig = function toBig(h, l) {
  return BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
};
var toBig_1 = _u64.toBig = toBig;
// for Shift in [0, 32)
var shrSH = function shrSH(h, _l, s) {
  return h >>> s;
};
var shrSH_1 = _u64.shrSH = shrSH;
var shrSL = function shrSL(h, l, s) {
  return h << 32 - s | l >>> s;
};
var shrSL_1 = _u64.shrSL = shrSL;
// Right rotate for Shift in [1, 32)
var rotrSH = function rotrSH(h, l, s) {
  return h >>> s | l << 32 - s;
};
var rotrSH_1 = _u64.rotrSH = rotrSH;
var rotrSL = function rotrSL(h, l, s) {
  return h << 32 - s | l >>> s;
};
var rotrSL_1 = _u64.rotrSL = rotrSL;
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
var rotrBH = function rotrBH(h, l, s) {
  return h << 64 - s | l >>> s - 32;
};
var rotrBH_1 = _u64.rotrBH = rotrBH;
var rotrBL = function rotrBL(h, l, s) {
  return h >>> s - 32 | l << 64 - s;
};
var rotrBL_1 = _u64.rotrBL = rotrBL;
// Right rotate for shift===32 (just swaps l&h)
var rotr32H = function rotr32H(_h, l) {
  return l;
};
var rotr32H_1 = _u64.rotr32H = rotr32H;
var rotr32L = function rotr32L(h, _l) {
  return h;
};
var rotr32L_1 = _u64.rotr32L = rotr32L;
// Left rotate for Shift in [1, 32)
var rotlSH = function rotlSH(h, l, s) {
  return h << s | l >>> 32 - s;
};
var rotlSH_1 = _u64.rotlSH = rotlSH;
var rotlSL = function rotlSL(h, l, s) {
  return l << s | h >>> 32 - s;
};
var rotlSL_1 = _u64.rotlSL = rotlSL;
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
var rotlBH = function rotlBH(h, l, s) {
  return l << s - 32 | h >>> 64 - s;
};
var rotlBH_1 = _u64.rotlBH = rotlBH;
var rotlBL = function rotlBL(h, l, s) {
  return h << s - 32 | l >>> 64 - s;
};
var rotlBL_1 = _u64.rotlBL = rotlBL;
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
function add(Ah, Al, Bh, Bl) {
  var l = (Al >>> 0) + (Bl >>> 0);
  return {
    h: Ah + Bh + (l / Math.pow(2, 32) | 0) | 0,
    l: l | 0
  };
}
// Addition with more than 2 elements
var add3L = function add3L(Al, Bl, Cl) {
  return (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
};
var add3L_1 = _u64.add3L = add3L;
var add3H = function add3H(low, Ah, Bh, Ch) {
  return Ah + Bh + Ch + (low / Math.pow(2, 32) | 0) | 0;
};
var add3H_1 = _u64.add3H = add3H;
var add4L = function add4L(Al, Bl, Cl, Dl) {
  return (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
};
var add4L_1 = _u64.add4L = add4L;
var add4H = function add4H(low, Ah, Bh, Ch, Dh) {
  return Ah + Bh + Ch + Dh + (low / Math.pow(2, 32) | 0) | 0;
};
var add4H_1 = _u64.add4H = add4H;
var add5L = function add5L(Al, Bl, Cl, Dl, El) {
  return (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
};
add5L_1 = _u64.add5L = add5L;
var add5H = function add5H(low, Ah, Bh, Ch, Dh, Eh) {
  return Ah + Bh + Ch + Dh + Eh + (low / Math.pow(2, 32) | 0) | 0;
};
var add5H_1 = _u64.add5H = add5H;
// prettier-ignore
var u64 = {
  fromBig: fromBig,
  split: split,
  toBig: toBig,
  shrSH: shrSH,
  shrSL: shrSL,
  rotrSH: rotrSH,
  rotrSL: rotrSL,
  rotrBH: rotrBH,
  rotrBL: rotrBL,
  rotr32H: rotr32H,
  rotr32L: rotr32L,
  rotlSH: rotlSH,
  rotlSL: rotlSL,
  rotlBH: rotlBH,
  rotlBL: rotlBL,
  add: add,
  add3L: add3L,
  add3H: add3H,
  add4L: add4L,
  add4H: add4H,
  add5H: add5H,
  add5L: add5L
};
var _default = _u64["default"] = u64;

var utils$1 = {};

var crypto$2 = {};

"use strict";
Object.defineProperty(crypto$2, "__esModule", {
  value: true
});
var crypto_1 = crypto$2.crypto = void 0;
crypto_1 = crypto$2.crypto = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;

(function (exports) {
  "use strict";

  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Hash = exports.nextTick = exports.byteSwapIfBE = exports.byteSwap = exports.isLE = exports.rotl = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
  exports.isBytes = isBytes;
  exports.byteSwap32 = byteSwap32;
  exports.bytesToHex = bytesToHex;
  exports.hexToBytes = hexToBytes;
  exports.asyncLoop = asyncLoop;
  exports.utf8ToBytes = utf8ToBytes;
  exports.toBytes = toBytes;
  exports.concatBytes = concatBytes;
  exports.checkOpts = checkOpts;
  exports.wrapConstructor = wrapConstructor;
  exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
  exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
  exports.randomBytes = randomBytes;
  // We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
  // node.js versions earlier than v19 don't declare it in global scope.
  // For node.js, package.json#exports field mapping rewrites import
  // from `crypto` to `cryptoNode`, which imports native module.
  // Makes the utils un-importable in browsers without a bundler.
  // Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
  var crypto_1 = crypto$2;
  var _assert_js_1 = _assert;
  // export { isBytes } from './_assert.js';
  // We can't reuse isBytes from _assert, because somehow this causes huge perf issues
  function isBytes(a) {
    return a instanceof Uint8Array || a != null && _typeof(a) === 'object' && a.constructor.name === 'Uint8Array';
  }
  // Cast array to different type
  var u8 = function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  };
  exports.u8 = u8;
  var u32 = function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  };
  exports.u32 = u32;
  // Cast array to view
  var createView = function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  };
  exports.createView = createView;
  // The rotate right (circular right shift) operation for uint32
  var rotr = function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
  };
  exports.rotr = rotr;
  // The rotate left (circular left shift) operation for uint32
  var rotl = function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
  };
  exports.rotl = rotl;
  exports.isLE = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
  // The byte swap operation for uint32
  var byteSwap = function byteSwap(word) {
    return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
  };
  exports.byteSwap = byteSwap;
  // Conditionally byte swap if on a big-endian platform
  exports.byteSwapIfBE = exports.isLE ? function (n) {
    return n;
  } : function (n) {
    return (0, exports.byteSwap)(n);
  };
  // In place byte swap for Uint32Array
  function byteSwap32(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = (0, exports.byteSwap)(arr[i]);
    }
  }
  // Array where index 0xf0 (240) is mapped to string 'f0'
  var hexes = /* @__PURE__ */Array.from({
    length: 256
  }, function (_, i) {
    return i.toString(16).padStart(2, '0');
  });
  /**
   * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
   */
  function bytesToHex(bytes) {
    (0, _assert_js_1.bytes)(bytes);
    // pre-caching improves the speed 6x
    var hex = '';
    for (var i = 0; i < bytes.length; i++) {
      hex += hexes[bytes[i]];
    }
    return hex;
  }
  // We use optimized technique to convert hex string to byte array
  var asciis = {
    _0: 48,
    _9: 57,
    _A: 65,
    _F: 70,
    _a: 97,
    _f: 102
  };
  function asciiToBase16(_char) {
    if (_char >= asciis._0 && _char <= asciis._9) return _char - asciis._0;
    if (_char >= asciis._A && _char <= asciis._F) return _char - (asciis._A - 10);
    if (_char >= asciis._a && _char <= asciis._f) return _char - (asciis._a - 10);
    return;
  }
  /**
   * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
   */
  function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + _typeof(hex));
    var hl = hex.length;
    var al = hl / 2;
    if (hl % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + hl);
    var array = new Uint8Array(al);
    for (var ai = 0, hi = 0; ai < al; ai++, hi += 2) {
      var n1 = asciiToBase16(hex.charCodeAt(hi));
      var n2 = asciiToBase16(hex.charCodeAt(hi + 1));
      if (n1 === undefined || n2 === undefined) {
        var _char2 = hex[hi] + hex[hi + 1];
        throw new Error('hex string expected, got non-hex character "' + _char2 + '" at index ' + hi);
      }
      array[ai] = n1 * 16 + n2;
    }
    return array;
  }
  // There is no setImmediate in browser and setTimeout is slow.
  // call of async fn will return Promise, which will be fullfiled only on
  // next scheduler queue processing step and this is exactly what we need.
  var nextTick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function nextTick() {
      return _ref.apply(this, arguments);
    };
  }();
  exports.nextTick = nextTick;
  // Returns control to thread each 'tick' ms to avoid blocking
  function asyncLoop(_x, _x2, _x3) {
    return _asyncLoop.apply(this, arguments);
  }
  /**
   * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
   */
  function _asyncLoop() {
    _asyncLoop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(iters, tick, cb) {
      var ts, i, diff;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            ts = Date.now();
            i = 0;
          case 2:
            if (!(i < iters)) {
              _context2.next = 13;
              break;
            }
            cb(i);
            // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
            diff = Date.now() - ts;
            if (!(diff >= 0 && diff < tick)) {
              _context2.next = 7;
              break;
            }
            return _context2.abrupt("continue", 10);
          case 7:
            _context2.next = 9;
            return (0, exports.nextTick)();
          case 9:
            ts += diff;
          case 10:
            i++;
            _context2.next = 2;
            break;
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _asyncLoop.apply(this, arguments);
  }
  function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error("utf8ToBytes expected string, got ".concat(_typeof(str)));
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
  }
  /**
   * Normalizes (non-hex) string or Uint8Array to Uint8Array.
   * Warning: when Uint8Array is passed, it would NOT get copied.
   * Keep in mind for future mutable operations.
   */
  function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    (0, _assert_js_1.bytes)(data);
    return data;
  }
  /**
   * Copies several Uint8Arrays into one.
   */
  function concatBytes() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      var a = i < 0 || arguments.length <= i ? undefined : arguments[i];
      (0, _assert_js_1.bytes)(a);
      sum += a.length;
    }
    var res = new Uint8Array(sum);
    for (var _i = 0, pad = 0; _i < arguments.length; _i++) {
      var _a = _i < 0 || arguments.length <= _i ? undefined : arguments[_i];
      res.set(_a, pad);
      pad += _a.length;
    }
    return res;
  }
  // For runtime check if class implements interface
  var Hash = /*#__PURE__*/function () {
    function Hash() {
      _classCallCheck(this, Hash);
    }
    return _createClass(Hash, [{
      key: "clone",
      value:
      // Safe version that clones internal state
      function clone() {
        return this._cloneInto();
      }
    }]);
  }();
  exports.Hash = Hash;
  var toStr = {}.toString;
  function checkOpts(defaults, opts) {
    if (opts !== undefined && toStr.call(opts) !== '[object Object]') throw new Error('Options should be object or undefined');
    var merged = Object.assign(defaults, opts);
    return merged;
  }
  function wrapConstructor(hashCons) {
    var hashC = function hashC(msg) {
      return hashCons().update(toBytes(msg)).digest();
    };
    var tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = function () {
      return hashCons();
    };
    return hashC;
  }
  function wrapConstructorWithOpts(hashCons) {
    var hashC = function hashC(msg, opts) {
      return hashCons(opts).update(toBytes(msg)).digest();
    };
    var tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = function (opts) {
      return hashCons(opts);
    };
    return hashC;
  }
  function wrapXOFConstructorWithOpts(hashCons) {
    var hashC = function hashC(msg, opts) {
      return hashCons(opts).update(toBytes(msg)).digest();
    };
    var tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = function (opts) {
      return hashCons(opts);
    };
    return hashC;
  }
  /**
   * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
   */
  function randomBytes() {
    var bytesLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === 'function') {
      return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    // Legacy Node.js compatibility
    if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === 'function') {
      return crypto_1.crypto.randomBytes(bytesLength);
    }
    throw new Error('crypto.getRandomValues must be defined');
  }
})(utils$1);
var utils = /*@__PURE__*/getDefaultExportFromCjs(utils$1);

"use strict";
Object.defineProperty(sha3, "__esModule", {
  value: true
});
var shake256 = sha3.shake256 = shake128 = sha3.shake128 = keccak_512 = sha3.keccak_512 = keccak_384 = sha3.keccak_384 = keccak_256$1 = sha3.keccak_256 = keccak_224 = sha3.keccak_224 = sha3_512 = sha3.sha3_512 = sha3_384 = sha3.sha3_384 = sha3_256 = sha3.sha3_256 = sha3_224 = sha3.sha3_224 = Keccak_1 = sha3.Keccak = void 0;
var keccakP_1 = sha3.keccakP = keccakP;
var _assert_js_1 = _assert;
var _u64_js_1 = _u64;
var utils_js_1 = utils$1;
// SHA3 (keccak) is based on a new design: basically, the internal state is bigger than output size.
// It's called a sponge function.
// Various per round constants calculations
var SHA3_PI = [];
var SHA3_ROTL = [];
var _SHA3_IOTA = [];
var _0n = /* @__PURE__ */BigInt(0);
var _1n = /* @__PURE__ */BigInt(1);
var _2n = /* @__PURE__ */BigInt(2);
var _7n = /* @__PURE__ */BigInt(7);
var _256n = /* @__PURE__ */BigInt(256);
var _0x71n = /* @__PURE__ */BigInt(0x71);
for (var round = 0, R = _1n, x$2 = 1, y$2 = 0; round < 24; round++) {
  // Pi
  var _ref = [y$2, (2 * x$2 + 3 * y$2) % 5];
  x$2 = _ref[0];
  y$2 = _ref[1];
  SHA3_PI.push(2 * (5 * y$2 + x$2));
  // Rotational
  SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
  // Iota
  var t$2 = _0n;
  for (var j$2 = 0; j$2 < 7; j$2++) {
    R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
    if (R & _2n) t$2 ^= _1n << (_1n << /* @__PURE__ */BigInt(j$2)) - _1n;
  }
  _SHA3_IOTA.push(t$2);
}
var _ref2 = /* @__PURE__ */(0, _u64_js_1.split)(_SHA3_IOTA, true),
  _ref3 = _slicedToArray(_ref2, 2),
  SHA3_IOTA_H = _ref3[0],
  SHA3_IOTA_L = _ref3[1];
// Left rotation (without 0, 32, 64)
var rotlH = function rotlH(h, l, s) {
  return s > 32 ? (0, _u64_js_1.rotlBH)(h, l, s) : (0, _u64_js_1.rotlSH)(h, l, s);
};
var rotlL = function rotlL(h, l, s) {
  return s > 32 ? (0, _u64_js_1.rotlBL)(h, l, s) : (0, _u64_js_1.rotlSL)(h, l, s);
};
// Same as keccakf1600, but allows to skip some rounds
function keccakP(s) {
  var rounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
  var B = new Uint32Array(5 * 2);
  // NOTE: all indices are x2 since we store state as u32 instead of u64 (bigints to slow in js)
  for (var _round = 24 - rounds; _round < 24; _round++) {
    // Theta θ
    for (var _x = 0; _x < 10; _x++) B[_x] = s[_x] ^ s[_x + 10] ^ s[_x + 20] ^ s[_x + 30] ^ s[_x + 40];
    for (var _x2 = 0; _x2 < 10; _x2 += 2) {
      var idx1 = (_x2 + 8) % 10;
      var idx0 = (_x2 + 2) % 10;
      var B0 = B[idx0];
      var B1 = B[idx0 + 1];
      var Th = rotlH(B0, B1, 1) ^ B[idx1];
      var Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (var _y = 0; _y < 50; _y += 10) {
        s[_x2 + _y] ^= Th;
        s[_x2 + _y + 1] ^= Tl;
      }
    }
    // Rho (ρ) and Pi (π)
    var curH = s[2];
    var curL = s[3];
    for (var _t = 0; _t < 24; _t++) {
      var shift = SHA3_ROTL[_t];
      var _Th = rotlH(curH, curL, shift);
      var _Tl = rotlL(curH, curL, shift);
      var PI = SHA3_PI[_t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = _Th;
      s[PI + 1] = _Tl;
    }
    // Chi (χ)
    for (var _y2 = 0; _y2 < 50; _y2 += 10) {
      for (var _x3 = 0; _x3 < 10; _x3++) B[_x3] = s[_y2 + _x3];
      for (var _x4 = 0; _x4 < 10; _x4++) s[_y2 + _x4] ^= ~B[(_x4 + 2) % 10] & B[(_x4 + 4) % 10];
    }
    // Iota (ι)
    s[0] ^= SHA3_IOTA_H[_round];
    s[1] ^= SHA3_IOTA_L[_round];
  }
  B.fill(0);
}
var Keccak = /*#__PURE__*/function (_utils_js_1$Hash) {
  // NOTE: we accept arguments in bytes instead of bits here.
  function Keccak(blockLen, suffix, outputLen) {
    var _this;
    var enableXOF = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var rounds = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 24;
    _classCallCheck(this, Keccak);
    _this = _callSuper(this, Keccak);
    _this.blockLen = blockLen;
    _this.suffix = suffix;
    _this.outputLen = outputLen;
    _this.enableXOF = enableXOF;
    _this.rounds = rounds;
    _this.pos = 0;
    _this.posOut = 0;
    _this.finished = false;
    _this.destroyed = false;
    // Can be passed from user as dkLen
    (0, _assert_js_1.number)(outputLen);
    // 1600 = 5x5 matrix of 64bit.  1600 bits === 200 bytes
    if (0 >= _this.blockLen || _this.blockLen >= 200) throw new Error('Sha3 supports only keccak-f1600 function');
    _this.state = new Uint8Array(200);
    _this.state32 = (0, utils_js_1.u32)(_this.state);
    return _this;
  }
  _inherits(Keccak, _utils_js_1$Hash);
  return _createClass(Keccak, [{
    key: "keccak",
    value: function keccak() {
      if (!utils_js_1.isLE) (0, utils_js_1.byteSwap32)(this.state32);
      keccakP(this.state32, this.rounds);
      if (!utils_js_1.isLE) (0, utils_js_1.byteSwap32)(this.state32);
      this.posOut = 0;
      this.pos = 0;
    }
  }, {
    key: "update",
    value: function update(data) {
      (0, _assert_js_1.exists)(this);
      var blockLen = this.blockLen,
        state = this.state;
      data = (0, utils_js_1.toBytes)(data);
      var len = data.length;
      for (var pos = 0; pos < len;) {
        var take = Math.min(blockLen - this.pos, len - pos);
        for (var i = 0; i < take; i++) state[this.pos++] ^= data[pos++];
        if (this.pos === blockLen) this.keccak();
      }
      return this;
    }
  }, {
    key: "finish",
    value: function finish() {
      if (this.finished) return;
      this.finished = true;
      var state = this.state,
        suffix = this.suffix,
        pos = this.pos,
        blockLen = this.blockLen;
      // Do the padding
      state[pos] ^= suffix;
      if ((suffix & 0x80) !== 0 && pos === blockLen - 1) this.keccak();
      state[blockLen - 1] ^= 0x80;
      this.keccak();
    }
  }, {
    key: "writeInto",
    value: function writeInto(out) {
      (0, _assert_js_1.exists)(this, false);
      (0, _assert_js_1.bytes)(out);
      this.finish();
      var bufferOut = this.state;
      var blockLen = this.blockLen;
      for (var pos = 0, len = out.length; pos < len;) {
        if (this.posOut >= blockLen) this.keccak();
        var take = Math.min(blockLen - this.posOut, len - pos);
        out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
        this.posOut += take;
        pos += take;
      }
      return out;
    }
  }, {
    key: "xofInto",
    value: function xofInto(out) {
      // Sha3/Keccak usage with XOF is probably mistake, only SHAKE instances can do XOF
      if (!this.enableXOF) throw new Error('XOF is not possible for this instance');
      return this.writeInto(out);
    }
  }, {
    key: "xof",
    value: function xof(bytes) {
      (0, _assert_js_1.number)(bytes);
      return this.xofInto(new Uint8Array(bytes));
    }
  }, {
    key: "digestInto",
    value: function digestInto(out) {
      (0, _assert_js_1.output)(out, this);
      if (this.finished) throw new Error('digest() was already called');
      this.writeInto(out);
      this.destroy();
      return out;
    }
  }, {
    key: "digest",
    value: function digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.destroyed = true;
      this.state.fill(0);
    }
  }, {
    key: "_cloneInto",
    value: function _cloneInto(to) {
      var blockLen = this.blockLen,
        suffix = this.suffix,
        outputLen = this.outputLen,
        rounds = this.rounds,
        enableXOF = this.enableXOF;
      to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
      to.state32.set(this.state32);
      to.pos = this.pos;
      to.posOut = this.posOut;
      to.finished = this.finished;
      to.rounds = rounds;
      // Suffix can change in cSHAKE
      to.suffix = suffix;
      to.outputLen = outputLen;
      to.enableXOF = enableXOF;
      to.destroyed = this.destroyed;
      return to;
    }
  }]);
}(utils_js_1.Hash);
var Keccak_1 = sha3.Keccak = Keccak;
var gen = function gen(suffix, blockLen, outputLen) {
  return (0, utils_js_1.wrapConstructor)(function () {
    return new Keccak(blockLen, suffix, outputLen);
  });
};
var sha3_224 = sha3.sha3_224 = gen(0x06, 144, 224 / 8);
/**
 * SHA3-256 hash function
 * @param message - that would be hashed
 */
var sha3_256 = sha3.sha3_256 = gen(0x06, 136, 256 / 8);
var sha3_384 = sha3.sha3_384 = gen(0x06, 104, 384 / 8);
var sha3_512 = sha3.sha3_512 = gen(0x06, 72, 512 / 8);
var keccak_224 = sha3.keccak_224 = gen(0x01, 144, 224 / 8);
/**
 * keccak-256 hash function. Different from SHA3-256.
 * @param message - that would be hashed
 */
var keccak_256$1 = sha3.keccak_256 = gen(0x01, 136, 256 / 8);
var keccak_384 = sha3.keccak_384 = gen(0x01, 104, 384 / 8);
var keccak_512 = sha3.keccak_512 = gen(0x01, 72, 512 / 8);
var genShake = function genShake(suffix, blockLen, outputLen) {
  return (0, utils_js_1.wrapXOFConstructorWithOpts)(function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true);
  });
};
var shake128 = sha3.shake128 = genShake(0x1f, 168, 128 / 8);
shake256 = sha3.shake256 = genShake(0x1f, 136, 256 / 8);

// Extracted from https://github.com/ethereumjs/ethereumjs-util and stripped out irrelevant code
// Original code licensed under the Mozilla Public License Version 2.0

/* eslint-disable */
//prettier-ignore
var keccak_256 = sha3.keccak_256;

/**
 * Returns a buffer filled with 0s
 * @method zeros
 * @param {Number} bytes  the number of bytes the buffer should be
 * @return {Buffer}
 */
function zeros(bytes) {
  return Buffer.allocUnsafe(bytes).fill(0);
}
function bitLengthFromBigInt(num) {
  return num.toString(2).length;
}
function bufferBEFromBigInt(num, length) {
  var hex = num.toString(16);
  // Ensure the hex string length is even
  if (hex.length % 2 !== 0) hex = '0' + hex;
  // Convert hex string to a byte array
  var byteArray = hex.match(/.{1,2}/g).map(function (_byte) {
    return parseInt(_byte, 16);
  });
  // Ensure the byte array is of the specified length
  while (byteArray.length < length) {
    byteArray.unshift(0); // Prepend with zeroes if shorter than required length
  }
  return Buffer.from(byteArray);
}
function twosFromBigInt(value, width) {
  var isNegative = value < 0n;
  var result;
  if (isNegative) {
    // Prepare a mask for the specified width to perform NOT operation
    var mask = (1n << BigInt(width)) - 1n;
    // Invert bits (using NOT) and add one
    result = (~value & mask) + 1n;
  } else {
    result = value;
  }
  // Ensure the result fits in the specified width
  result &= (1n << BigInt(width)) - 1n;
  return result;
}

/**
 * Left Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @method setLength
 * @param {Buffer|Array} msg the value to pad
 * @param {Number} length the number of bytes the output should be
 * @param {Boolean} [right=false] whether to start padding form the left or right
 * @return {Buffer|Array}
 */
function setLength(msg, length, right) {
  var buf = zeros(length);
  msg = toBuffer(msg);
  if (right) {
    if (msg.length < length) {
      msg.copy(buf);
      return buf;
    }
    return msg.slice(0, length);
  } else {
    if (msg.length < length) {
      msg.copy(buf, length - msg.length);
      return buf;
    }
    return msg.slice(-length);
  }
}

/**
 * Right Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @param {Buffer|Array} msg the value to pad
 * @param {Number} length the number of bytes the output should be
 * @return {Buffer|Array}
 */
function setLengthRight(msg, length) {
  return setLength(msg, length, true);
}

/**
 * Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BIgInt` and other objects with a `toArray()` method.
 * @param {*} v the value
 */
function toBuffer(v) {
  if (!Buffer.isBuffer(v)) {
    if (Array.isArray(v)) {
      v = Buffer.from(v);
    } else if (typeof v === 'string') {
      if (isHexString(v)) {
        v = Buffer.from(padToEven(stripHexPrefix(v)), 'hex');
      } else {
        v = Buffer.from(v);
      }
    } else if (typeof v === 'number') {
      v = intToBuffer(v);
    } else if (v === null || v === undefined) {
      v = Buffer.allocUnsafe(0);
    } else if (typeof v === 'bigint') {
      v = bufferBEFromBigInt(v);
    } else if (v.toArray) {
      // TODO: bigint should be handled above, may remove this duplicate
      // converts a BigInt to a Buffer
      v = Buffer.from(v.toArray());
    } else {
      throw new Error('invalid type');
    }
  }
  return v;
}

/**
 * Converts a `Buffer` into a hex `String`
 * @param {Buffer} buf
 * @return {String}
 */
function bufferToHex(buf) {
  buf = toBuffer(buf);
  return '0x' + buf.toString('hex');
}

/**
 * Creates Keccak hash of the input
 * @param {Buffer|Array|String|Number} a the input data
 * @param {Number} [bits=256] the Keccak width
 * @return {Buffer}
 */
function keccak(a, bits) {
  a = toBuffer(a);
  if (!bits) bits = 256;
  if (bits !== 256) {
    throw new Error('unsupported');
  }
  return Buffer.from(keccak_256(new Uint8Array(a)));
}
function padToEven(str) {
  return str.length % 2 ? '0' + str : str;
}
function isHexString(str) {
  return typeof str === 'string' && str.match(/^0x[0-9A-Fa-f]*$/);
}
function stripHexPrefix(str) {
  if (typeof str === 'string' && str.startsWith('0x')) {
    return str.slice(2);
  }
  return str;
}
var util$2 = {
  zeros: zeros,
  setLength: setLength,
  setLengthRight: setLengthRight,
  isHexString: isHexString,
  stripHexPrefix: stripHexPrefix,
  toBuffer: toBuffer,
  bufferToHex: bufferToHex,
  keccak: keccak,
  bitLengthFromBigInt: bitLengthFromBigInt,
  bufferBEFromBigInt: bufferBEFromBigInt,
  twosFromBigInt: twosFromBigInt
};
var util$3 = /*@__PURE__*/getDefaultExportFromCjs(util$2);

// Extracted from https://github.com/ethereumjs/ethereumjs-abi and stripped out irrelevant code
// Original code licensed under the MIT License - Copyright (c) 2015 Alex Beregszaszi

/* eslint-disable */
//prettier-ignore
var util$1 = util$2;

// Convert from short to canonical names
// FIXME: optimise or make this nicer?
function elementaryName(name) {
  if (name.startsWith('int[')) {
    return 'int256' + name.slice(3);
  } else if (name === 'int') {
    return 'int256';
  } else if (name.startsWith('uint[')) {
    return 'uint256' + name.slice(4);
  } else if (name === 'uint') {
    return 'uint256';
  } else if (name.startsWith('fixed[')) {
    return 'fixed128x128' + name.slice(5);
  } else if (name === 'fixed') {
    return 'fixed128x128';
  } else if (name.startsWith('ufixed[')) {
    return 'ufixed128x128' + name.slice(6);
  } else if (name === 'ufixed') {
    return 'ufixed128x128';
  }
  return name;
}

// Parse N from type<N>
function parseTypeN(type) {
  return Number.parseInt(/^\D+(\d+)$/.exec(type)[1], 10);
}

// Parse N,M from type<N>x<M>
function parseTypeNxM(type) {
  var tmp = /^\D+(\d+)x(\d+)$/.exec(type);
  return [Number.parseInt(tmp[1], 10), Number.parseInt(tmp[2], 10)];
}

// Parse N in type[<N>] where "type" can itself be an array type.
function parseTypeArray(type) {
  var tmp = type.match(/(.*)\[(.*?)\]$/);
  if (tmp) {
    return tmp[2] === '' ? 'dynamic' : Number.parseInt(tmp[2], 10);
  }
  return null;
}
function parseNumber(arg) {
  var type = _typeof(arg);
  if (type === 'string' || type === 'number') {
    return BigInt(arg);
  } else if (type === 'bigint') {
    return arg;
  } else {
    throw new Error('Argument is not a number');
  }
}

// Encodes a single item (can be dynamic array)
// @returns: Buffer
function encodeSingle(type, arg) {
  var size, num, ret, i;
  if (type === 'address') {
    return encodeSingle('uint160', parseNumber(arg));
  } else if (type === 'bool') {
    return encodeSingle('uint8', arg ? 1 : 0);
  } else if (type === 'string') {
    return encodeSingle('bytes', new Buffer(arg, 'utf8'));
  } else if (isArray(type)) {
    // this part handles fixed-length ([2]) and variable length ([]) arrays
    // NOTE: we catch here all calls to arrays, that simplifies the rest
    if (typeof arg.length === 'undefined') {
      throw new Error('Not an array?');
    }
    size = parseTypeArray(type);
    if (size !== 'dynamic' && size !== 0 && arg.length > size) {
      throw new Error('Elements exceed array size: ' + size);
    }
    ret = [];
    type = type.slice(0, type.lastIndexOf('['));
    if (typeof arg === 'string') {
      arg = JSON.parse(arg);
    }
    for (i in arg) {
      ret.push(encodeSingle(type, arg[i]));
    }
    if (size === 'dynamic') {
      var length = encodeSingle('uint256', arg.length);
      ret.unshift(length);
    }
    return Buffer.concat(ret);
  } else if (type === 'bytes') {
    arg = new Buffer(arg);
    ret = Buffer.concat([encodeSingle('uint256', arg.length), arg]);
    if (arg.length % 32 !== 0) {
      ret = Buffer.concat([ret, util$1.zeros(32 - arg.length % 32)]);
    }
    return ret;
  } else if (type.startsWith('bytes')) {
    size = parseTypeN(type);
    if (size < 1 || size > 32) {
      throw new Error('Invalid bytes<N> width: ' + size);
    }
    return util$1.setLengthRight(arg, 32);
  } else if (type.startsWith('uint')) {
    size = parseTypeN(type);
    if (size % 8 || size < 8 || size > 256) {
      throw new Error('Invalid uint<N> width: ' + size);
    }
    num = parseNumber(arg);
    var bitLength = util$1.bitLengthFromBigInt(num);
    if (bitLength > size) {
      throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + bitLength);
    }
    if (num < 0) {
      throw new Error('Supplied uint is negative');
    }
    return util$1.bufferBEFromBigInt(num, 32);
  } else if (type.startsWith('int')) {
    size = parseTypeN(type);
    if (size % 8 || size < 8 || size > 256) {
      throw new Error('Invalid int<N> width: ' + size);
    }
    num = parseNumber(arg);
    var _bitLength = util$1.bitLengthFromBigInt(num);
    if (_bitLength > size) {
      throw new Error('Supplied int exceeds width: ' + size + ' vs ' + _bitLength);
    }
    var twos = util$1.twosFromBigInt(num, 256);
    return util$1.bufferBEFromBigInt(twos, 32);
  } else if (type.startsWith('ufixed')) {
    size = parseTypeNxM(type);
    num = parseNumber(arg);
    if (num < 0) {
      throw new Error('Supplied ufixed is negative');
    }
    return encodeSingle('uint256', num * Math.pow(BigInt(2), BigInt(size[1])));
  } else if (type.startsWith('fixed')) {
    size = parseTypeNxM(type);
    return encodeSingle('int256', parseNumber(arg) * Math.pow(BigInt(2), BigInt(size[1])));
  }
  throw new Error('Unsupported or invalid type: ' + type);
}

// Is a type dynamic?
function isDynamic(type) {
  // FIXME: handle all types? I don't think anything is missing now
  return type === 'string' || type === 'bytes' || parseTypeArray(type) === 'dynamic';
}

// Is a type an array?
function isArray(type) {
  return type.lastIndexOf(']') === type.length - 1;
}

// Encode a method/event with arguments
// @types an array of string type names
// @args  an array of the appropriate values
function rawEncode(types, values) {
  var output = [];
  var data = [];
  var headLength = 32 * types.length;
  for (var i in types) {
    var type = elementaryName(types[i]);
    var value = values[i];
    var cur = encodeSingle(type, value);

    // Use the head/tail method for storing dynamic data
    if (isDynamic(type)) {
      output.push(encodeSingle('uint256', headLength));
      data.push(cur);
      headLength += cur.length;
    } else {
      output.push(cur);
    }
  }
  return Buffer.concat(output.concat(data));
}
function solidityPack(types, values) {
  if (types.length !== values.length) {
    throw new Error('Number of types are not matching the values');
  }
  var size, num;
  var ret = [];
  for (var i = 0; i < types.length; i++) {
    var type = elementaryName(types[i]);
    var value = values[i];
    if (type === 'bytes') {
      ret.push(value);
    } else if (type === 'string') {
      ret.push(new Buffer(value, 'utf8'));
    } else if (type === 'bool') {
      ret.push(new Buffer(value ? '01' : '00', 'hex'));
    } else if (type === 'address') {
      ret.push(util$1.setLength(value, 20));
    } else if (type.startsWith('bytes')) {
      size = parseTypeN(type);
      if (size < 1 || size > 32) {
        throw new Error('Invalid bytes<N> width: ' + size);
      }
      ret.push(util$1.setLengthRight(value, size));
    } else if (type.startsWith('uint')) {
      size = parseTypeN(type);
      if (size % 8 || size < 8 || size > 256) {
        throw new Error('Invalid uint<N> width: ' + size);
      }
      num = parseNumber(value);
      var bitLength = util$1.bitLengthFromBigInt(num);
      if (bitLength > size) {
        throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + bitLength);
      }
      ret.push(util$1.bufferBEFromBigInt(num, size / 8));
    } else if (type.startsWith('int')) {
      size = parseTypeN(type);
      if (size % 8 || size < 8 || size > 256) {
        throw new Error('Invalid int<N> width: ' + size);
      }
      num = parseNumber(value);
      var _bitLength2 = util$1.bitLengthFromBigInt(num);
      if (_bitLength2 > size) {
        throw new Error('Supplied int exceeds width: ' + size + ' vs ' + _bitLength2);
      }
      var twos = util$1.twosFromBigInt(num, size);
      ret.push(util$1.bufferBEFromBigInt(twos, size / 8));
    } else {
      // FIXME: support all other types
      throw new Error('Unsupported or invalid type: ' + type);
    }
  }
  return Buffer.concat(ret);
}
function soliditySHA3(types, values) {
  return util$1.keccak(solidityPack(types, values));
}
var abi$1 = {
  rawEncode: rawEncode,
  solidityPack: solidityPack,
  soliditySHA3: soliditySHA3
};
var abi$2 = /*@__PURE__*/getDefaultExportFromCjs(abi$1);

//prettier-ignore

var util = util$2;
var abi = abi$1;
var TYPED_MESSAGE_SCHEMA = {
  type: 'object',
  properties: {
    types: {
      type: 'object',
      additionalProperties: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            type: {
              type: 'string'
            }
          },
          required: ['name', 'type']
        }
      }
    },
    primaryType: {
      type: 'string'
    },
    domain: {
      type: 'object'
    },
    message: {
      type: 'object'
    }
  },
  required: ['types', 'primaryType', 'domain', 'message']
};

/**
 * A collection of utility functions used for signing typed data
 */
var TypedDataUtils = {
  /**
   * Encodes an object by encoding and concatenating each of its members
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of an object
   */
  encodeData: function encodeData(primaryType, data, types) {
    var _this = this;
    var useV4 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var encodedTypes = ['bytes32'];
    var encodedValues = [this.hashType(primaryType, types)];
    if (useV4) {
      var _encodeField = function encodeField(name, type, value) {
        if (types[type] !== undefined) {
          return ['bytes32', value == null ? '0x0000000000000000000000000000000000000000000000000000000000000000' : util.keccak(_this.encodeData(type, value, types, useV4))];
        }
        if (value === undefined) throw new Error("missing value for field ".concat(name, " of type ").concat(type));
        if (type === 'bytes') {
          return ['bytes32', util.keccak(value)];
        }
        if (type === 'string') {
          // convert string to buffer - prevents ethUtil from interpreting strings like '0xabcd' as hex
          if (typeof value === 'string') {
            value = Buffer.from(value, 'utf8');
          }
          return ['bytes32', util.keccak(value)];
        }
        if (type.lastIndexOf(']') === type.length - 1) {
          var parsedType = type.slice(0, type.lastIndexOf('['));
          var typeValuePairs = value.map(function (item) {
            return _encodeField(name, parsedType, item);
          });
          return ['bytes32', util.keccak(abi.rawEncode(typeValuePairs.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
              type = _ref2[0];
            return type;
          }), typeValuePairs.map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              value = _ref4[1];
            return value;
          })))];
        }
        return [type, value];
      };
      var _iterator = _createForOfIteratorHelper(types[primaryType]),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;
          var _encodeField2 = _encodeField(field.name, field.type, data[field.name]),
            _encodeField3 = _slicedToArray(_encodeField2, 2),
            type = _encodeField3[0],
            value = _encodeField3[1];
          encodedTypes.push(type);
          encodedValues.push(value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      var _iterator2 = _createForOfIteratorHelper(types[primaryType]),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _field = _step2.value;
          var _value = data[_field.name];
          if (_value !== undefined) {
            if (_field.type === 'bytes') {
              encodedTypes.push('bytes32');
              _value = util.keccak(_value);
              encodedValues.push(_value);
            } else if (_field.type === 'string') {
              encodedTypes.push('bytes32');
              // convert string to buffer - prevents ethUtil from interpreting strings like '0xabcd' as hex
              if (typeof _value === 'string') {
                _value = Buffer.from(_value, 'utf8');
              }
              _value = util.keccak(_value);
              encodedValues.push(_value);
            } else if (types[_field.type] !== undefined) {
              encodedTypes.push('bytes32');
              _value = util.keccak(this.encodeData(_field.type, _value, types, useV4));
              encodedValues.push(_value);
            } else if (_field.type.lastIndexOf(']') === _field.type.length - 1) {
              throw new Error('Arrays currently unimplemented in encodeData');
            } else {
              encodedTypes.push(_field.type);
              encodedValues.push(_value);
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    return abi.rawEncode(encodedTypes, encodedValues);
  },
  /**
   * Encodes the type of an object by encoding a comma delimited list of its members
   *
   * @param {string} primaryType - Root type to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of the type of an object
   */
  encodeType: function encodeType(primaryType, types) {
    var result = '';
    var deps = this.findTypeDependencies(primaryType, types).filter(function (dep) {
      return dep !== primaryType;
    });
    deps = [primaryType].concat(deps.sort());
    var _iterator3 = _createForOfIteratorHelper(deps),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var type = _step3.value;
        var children = types[type];
        if (!children) {
          throw new Error('No type definition specified: ' + type);
        }
        result += type + '(' + types[type].map(function (_ref5) {
          var name = _ref5.name,
            type = _ref5.type;
          return type + ' ' + name;
        }).join(',') + ')';
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return result;
  },
  /**
   * Finds all types within a type definition object
   *
   * @param {string} primaryType - Root type
   * @param {Object} types - Type definitions
   * @param {Array} results - current set of accumulated types
   * @returns {Array} - Set of all types found in the type definition
   */
  findTypeDependencies: function findTypeDependencies(primaryType, types) {
    var results = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    primaryType = primaryType.match(/^\w*/)[0];
    if (results.includes(primaryType) || types[primaryType] === undefined) {
      return results;
    }
    results.push(primaryType);
    var _iterator4 = _createForOfIteratorHelper(types[primaryType]),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var field = _step4.value;
        var _iterator5 = _createForOfIteratorHelper(this.findTypeDependencies(field.type, types, results)),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var dep = _step5.value;
            !results.includes(dep) && results.push(dep);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return results;
  },
  /**
   * Hashes an object
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to hash
   * @param {Object} types - Type definitions
   * @returns {Buffer} - Hash of an object
   */
  hashStruct: function hashStruct(primaryType, data, types) {
    var useV4 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return util.keccak(this.encodeData(primaryType, data, types, useV4));
  },
  /**
   * Hashes the type of an object
   *
   * @param {string} primaryType - Root type to hash
   * @param {Object} types - Type definitions
   * @returns {string} - Hash of an object
   */
  hashType: function hashType(primaryType, types) {
    return util.keccak(this.encodeType(primaryType, types));
  },
  /**
   * Removes properties from a message object that are not defined per EIP-712
   *
   * @param {Object} data - typed message object
   * @returns {Object} - typed message object with only allowed fields
   */
  sanitizeData: function sanitizeData(data) {
    var sanitizedData = {};
    for (var key in TYPED_MESSAGE_SCHEMA.properties) {
      data[key] && (sanitizedData[key] = data[key]);
    }
    if (sanitizedData.types) {
      sanitizedData.types = Object.assign({
        EIP712Domain: []
      }, sanitizedData.types);
    }
    return sanitizedData;
  },
  /**
   * Returns the hash of a typed message as per EIP-712 for signing
   *
   * @param {Object} typedData - Types message data to sign
   * @returns {string} - sha3 hash for signing
   */
  hash: function hash(typedData) {
    var useV4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var sanitizedData = this.sanitizeData(typedData);
    var parts = [Buffer.from('1901', 'hex')];
    parts.push(this.hashStruct('EIP712Domain', sanitizedData.domain, sanitizedData.types, useV4));
    if (sanitizedData.primaryType !== 'EIP712Domain') {
      parts.push(this.hashStruct(sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, useV4));
    }
    return util.keccak(Buffer.concat(parts));
  }
};
var ethEip712Util = {
  TYPED_MESSAGE_SCHEMA: TYPED_MESSAGE_SCHEMA,
  TypedDataUtils: TypedDataUtils,
  hashForSignTypedDataLegacy: function hashForSignTypedDataLegacy(msgParams) {
    return typedSignatureHashLegacy(msgParams.data);
  },
  hashForSignTypedData_v3: function hashForSignTypedData_v3(msgParams) {
    return TypedDataUtils.hash(msgParams.data, false);
  },
  hashForSignTypedData_v4: function hashForSignTypedData_v4(msgParams) {
    return TypedDataUtils.hash(msgParams.data);
  }
};

/**
 * @param typedData - Array of data along with types, as per EIP712.
 * @returns Buffer
 */
function typedSignatureHashLegacy(typedData) {
  var error = new Error('Expect argument to be non-empty array');
  if (_typeof(typedData) !== 'object' || !typedData.length) throw error;
  var data = typedData.map(function (e) {
    return e.type === 'bytes' ? util.toBuffer(e.value) : e.value;
  });
  var types = typedData.map(function (e) {
    return e.type;
  });
  var schema = typedData.map(function (e) {
    if (!e.name) throw error;
    return e.type + ' ' + e.name;
  });
  return abi.soliditySHA3(['bytes32', 'bytes32'], [abi.soliditySHA3(new Array(typedData.length).fill('string'), schema), abi.soliditySHA3(types, data)]);
}
var eip712 = /*@__PURE__*/getDefaultExportFromCjs(ethEip712Util);

var WALLET_USER_NAME_KEY = 'walletUsername';
var LOCAL_STORAGE_ADDRESSES_KEY = 'Addresses';
var APP_VERSION_KEY = 'AppVersion';

// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
function isErrorResponse(response) {
  return response.errorMessage !== undefined;
}

var WalletLinkCipher = /*#__PURE__*/function () {
  // @param secret hex representation of 32-byte secret
  function WalletLinkCipher(secret) {
    _classCallCheck(this, WalletLinkCipher);
    this.secret = secret;
  }
  /**
   *
   * @param plainText string to be encrypted
   * returns hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
   * encrypted plainText.
   */
  return _createClass(WalletLinkCipher, [{
    key: "encrypt",
    value: (function () {
      var _encrypt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(plainText) {
        var secret, ivBytes, secretKey, enc, encryptedResult, tagLength, authTag, encryptedPlaintext, authTagBytes, encryptedPlaintextBytes, concatted;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              secret = this.secret;
              if (!(secret.length !== 64)) {
                _context.next = 3;
                break;
              }
              throw Error("secret must be 256 bits");
            case 3:
              ivBytes = crypto.getRandomValues(new Uint8Array(12));
              _context.next = 6;
              return crypto.subtle.importKey('raw', hexStringToUint8Array(secret), {
                name: 'aes-gcm'
              }, false, ['encrypt', 'decrypt']);
            case 6:
              secretKey = _context.sent;
              enc = new TextEncoder(); // Will return encrypted plainText with auth tag (ie MAC or checksum) appended at the end
              _context.next = 10;
              return window.crypto.subtle.encrypt({
                name: 'AES-GCM',
                iv: ivBytes
              }, secretKey, enc.encode(plainText));
            case 10:
              encryptedResult = _context.sent;
              tagLength = 16;
              authTag = encryptedResult.slice(encryptedResult.byteLength - tagLength);
              encryptedPlaintext = encryptedResult.slice(0, encryptedResult.byteLength - tagLength);
              authTagBytes = new Uint8Array(authTag);
              encryptedPlaintextBytes = new Uint8Array(encryptedPlaintext);
              concatted = new Uint8Array([].concat(_toConsumableArray(ivBytes), _toConsumableArray(authTagBytes), _toConsumableArray(encryptedPlaintextBytes)));
              return _context.abrupt("return", uint8ArrayToHex(concatted));
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function encrypt(_x) {
        return _encrypt.apply(this, arguments);
      }
      return encrypt;
    }()
    /**
     *
     * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
     * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
     */
    )
  }, {
    key: "decrypt",
    value: (function () {
      var _decrypt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(cipherText) {
        var secret;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              secret = this.secret;
              if (!(secret.length !== 64)) {
                _context3.next = 3;
                break;
              }
              throw Error("secret must be 256 bits");
            case 3:
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                void _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  var secretKey, encrypted, ivBytes, authTagBytes, encryptedPlaintextBytes, concattedBytes, algo, decrypted, decoder;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return crypto.subtle.importKey('raw', hexStringToUint8Array(secret), {
                          name: 'aes-gcm'
                        }, false, ['encrypt', 'decrypt']);
                      case 2:
                        secretKey = _context2.sent;
                        encrypted = hexStringToUint8Array(cipherText);
                        ivBytes = encrypted.slice(0, 12);
                        authTagBytes = encrypted.slice(12, 28);
                        encryptedPlaintextBytes = encrypted.slice(28);
                        concattedBytes = new Uint8Array([].concat(_toConsumableArray(encryptedPlaintextBytes), _toConsumableArray(authTagBytes)));
                        algo = {
                          name: 'AES-GCM',
                          iv: new Uint8Array(ivBytes)
                        };
                        _context2.prev = 9;
                        _context2.next = 12;
                        return window.crypto.subtle.decrypt(algo, secretKey, concattedBytes);
                      case 12:
                        decrypted = _context2.sent;
                        decoder = new TextDecoder();
                        resolve(decoder.decode(decrypted));
                        _context2.next = 20;
                        break;
                      case 17:
                        _context2.prev = 17;
                        _context2.t0 = _context2["catch"](9);
                        reject(_context2.t0);
                      case 20:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, null, [[9, 17]]);
                }))();
              }));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function decrypt(_x2) {
        return _decrypt.apply(this, arguments);
      }
      return decrypt;
    }())
  }]);
}();

var WalletLinkHTTP = /*#__PURE__*/function () {
  function WalletLinkHTTP(linkAPIUrl, sessionId, sessionKey) {
    _classCallCheck(this, WalletLinkHTTP);
    this.linkAPIUrl = linkAPIUrl;
    this.sessionId = sessionId;
    var credentials = "".concat(sessionId, ":").concat(sessionKey);
    this.auth = "Basic ".concat(btoa(credentials));
  }
  // mark unseen events as seen
  return _createClass(WalletLinkHTTP, [{
    key: "markUnseenEventsAsSeen",
    value: function () {
      var _markUnseenEventsAsSeen = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(events) {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", Promise.all(events.map(function (e) {
                return fetch("".concat(_this.linkAPIUrl, "/events/").concat(e.eventId, "/seen"), {
                  method: 'POST',
                  headers: {
                    Authorization: _this.auth
                  }
                });
              }))["catch"](function (error) {
                return console.error('Unabled to mark event as failed:', error);
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function markUnseenEventsAsSeen(_x) {
        return _markUnseenEventsAsSeen.apply(this, arguments);
      }
      return markUnseenEventsAsSeen;
    }()
  }, {
    key: "fetchUnseenEvents",
    value: function () {
      var _fetchUnseenEvents = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2 = this;
        var _a, response, _yield$response$json, events, error, responseEvents;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("".concat(this.linkAPIUrl, "/events?unseen=true"), {
                headers: {
                  Authorization: this.auth
                }
              });
            case 2:
              response = _context2.sent;
              if (!response.ok) {
                _context2.next = 14;
                break;
              }
              _context2.next = 6;
              return response.json();
            case 6:
              _yield$response$json = _context2.sent;
              events = _yield$response$json.events;
              error = _yield$response$json.error;
              if (!error) {
                _context2.next = 11;
                break;
              }
              throw new Error("Check unseen events failed: ".concat(error));
            case 11:
              responseEvents = (_a = events === null || events === void 0 ? void 0 : events.filter(function (e) {
                return e.event === 'Web3Response';
              }).map(function (e) {
                return {
                  type: 'Event',
                  sessionId: _this2.sessionId,
                  eventId: e.id,
                  event: e.event,
                  data: e.data
                };
              })) !== null && _a !== void 0 ? _a : [];
              this.markUnseenEventsAsSeen(responseEvents);
              return _context2.abrupt("return", responseEvents);
            case 14:
              throw new Error("Check unseen events failed: ".concat(response.status));
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function fetchUnseenEvents() {
        return _fetchUnseenEvents.apply(this, arguments);
      }
      return fetchUnseenEvents;
    }()
  }]);
}();

// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
var ConnectionState;
(function (ConnectionState) {
  ConnectionState[ConnectionState["DISCONNECTED"] = 0] = "DISCONNECTED";
  ConnectionState[ConnectionState["CONNECTING"] = 1] = "CONNECTING";
  ConnectionState[ConnectionState["CONNECTED"] = 2] = "CONNECTED";
})(ConnectionState || (ConnectionState = {}));
var WalletLinkWebSocket = /*#__PURE__*/function () {
  /**
   * Constructor
   * @param url WebSocket server URL
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  function WalletLinkWebSocket(url) {
    var WebSocketClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : WebSocket;
    _classCallCheck(this, WalletLinkWebSocket);
    this.WebSocketClass = WebSocketClass;
    this.webSocket = null;
    this.pendingData = [];
    this.url = url.replace(/^http/, 'ws');
  }
  /**
   * Make a websocket connection
   * @returns a Promise that resolves when connected
   */
  return _createClass(WalletLinkWebSocket, [{
    key: "setConnectionStateListener",
    value: function setConnectionStateListener(listener) {
      this.connectionStateListener = listener;
    }
  }, {
    key: "setIncomingDataListener",
    value: function setIncomingDataListener(listener) {
      this.incomingDataListener = listener;
    }
  }, {
    key: "connect",
    value: (function () {
      var _connect = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.webSocket) {
                _context.next = 2;
                break;
              }
              throw new Error('webSocket object is not null');
            case 2:
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                var _a;
                var webSocket;
                try {
                  _this.webSocket = webSocket = new _this.WebSocketClass(_this.url);
                } catch (err) {
                  reject(err);
                  return;
                }
                (_a = _this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(_this, ConnectionState.CONNECTING);
                webSocket.onclose = function (evt) {
                  var _a;
                  _this.clearWebSocket();
                  reject(new Error("websocket error ".concat(evt.code, ": ").concat(evt.reason)));
                  (_a = _this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(_this, ConnectionState.DISCONNECTED);
                };
                webSocket.onopen = function (_) {
                  var _a;
                  resolve();
                  (_a = _this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(_this, ConnectionState.CONNECTED);
                  if (_this.pendingData.length > 0) {
                    var pending = _toConsumableArray(_this.pendingData);
                    pending.forEach(function (data) {
                      return _this.sendData(data);
                    });
                    _this.pendingData = [];
                  }
                };
                webSocket.onmessage = function (evt) {
                  var _a, _b;
                  if (evt.data === 'h') {
                    (_a = _this.incomingDataListener) === null || _a === void 0 ? void 0 : _a.call(_this, {
                      type: 'Heartbeat'
                    });
                  } else {
                    try {
                      var message = JSON.parse(evt.data);
                      (_b = _this.incomingDataListener) === null || _b === void 0 ? void 0 : _b.call(_this, message);
                    } catch (_c) {
                      /* empty */
                    }
                  }
                };
              }));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function connect() {
        return _connect.apply(this, arguments);
      }
      return connect;
    }()
    /**
     * Disconnect from server
     */
    )
  }, {
    key: "disconnect",
    value: function disconnect() {
      var _a;
      var webSocket = this.webSocket;
      if (!webSocket) {
        return;
      }
      this.clearWebSocket();
      (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.DISCONNECTED);
      this.connectionStateListener = undefined;
      this.incomingDataListener = undefined;
      try {
        webSocket.close();
      } catch (_b) {
        // noop
      }
    }
    /**
     * Send data to server
     * @param data text to send
     */
  }, {
    key: "sendData",
    value: function sendData(data) {
      var webSocket = this.webSocket;
      if (!webSocket) {
        this.pendingData.push(data);
        this.connect();
        return;
      }
      webSocket.send(data);
    }
  }, {
    key: "clearWebSocket",
    value: function clearWebSocket() {
      var webSocket = this.webSocket;
      if (!webSocket) {
        return;
      }
      this.webSocket = null;
      webSocket.onclose = null;
      webSocket.onerror = null;
      webSocket.onmessage = null;
      webSocket.onopen = null;
    }
  }]);
}();

var HEARTBEAT_INTERVAL = 10000;
var REQUEST_TIMEOUT = 60000;
/**
 * Coinbase Wallet Connection
 */
var WalletLinkConnection = /*#__PURE__*/function () {
  /**
   * Constructor
   * @param session Session
   * @param linkAPIUrl Coinbase Wallet link server URL
   * @param listener WalletLinkConnectionUpdateListener
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  function WalletLinkConnection(_ref) {
    var _this = this;
    var session = _ref.session,
      linkAPIUrl = _ref.linkAPIUrl,
      listener = _ref.listener;
    _classCallCheck(this, WalletLinkConnection);
    this.destroyed = false;
    this.lastHeartbeatResponse = 0;
    this.nextReqId = IntNumber(1);
    /**
     * true if connected and authenticated, else false
     * runs listener when connected status changes
     */
    this._connected = false;
    /**
     * true if linked (a guest has joined before)
     * runs listener when linked status changes
     */
    this._linked = false;
    this.shouldFetchUnseenEventsOnConnect = false;
    this.requestResolutions = new Map();
    this.handleSessionMetadataUpdated = function (metadata) {
      if (!metadata) return;
      // Map of metadata key to handler function
      var handlers = new Map([['__destroyed', _this.handleDestroyed], ['EthereumAddress', _this.handleAccountUpdated], ['WalletUsername', _this.handleWalletUsernameUpdated], ['AppVersion', _this.handleAppVersionUpdated], ['ChainId',
      // ChainId and JsonRpcUrl are always updated together
      function (v) {
        return metadata.JsonRpcUrl && _this.handleChainUpdated(v, metadata.JsonRpcUrl);
      }]]);
      // call handler for each metadata key if value is defined
      handlers.forEach(function (handler, key) {
        var value = metadata[key];
        if (value === undefined) return;
        handler(value);
      });
    };
    this.handleDestroyed = function (__destroyed) {
      var _a;
      if (__destroyed !== '1') return;
      (_a = _this.listener) === null || _a === void 0 ? void 0 : _a.resetAndReload();
    };
    this.handleAccountUpdated = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(encryptedEthereumAddress) {
        var _a, address;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.cipher.decrypt(encryptedEthereumAddress);
            case 2:
              address = _context.sent;
              (_a = _this.listener) === null || _a === void 0 ? void 0 : _a.accountUpdated(address);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.handleMetadataUpdated = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(key, encryptedMetadataValue) {
        var _a, decryptedValue;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.cipher.decrypt(encryptedMetadataValue);
            case 2:
              decryptedValue = _context2.sent;
              (_a = _this.listener) === null || _a === void 0 ? void 0 : _a.metadataUpdated(key, decryptedValue);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }();
    this.handleWalletUsernameUpdated = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(walletUsername) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this.handleMetadataUpdated(WALLET_USER_NAME_KEY, walletUsername);
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();
    this.handleAppVersionUpdated = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(appVersion) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this.handleMetadataUpdated(APP_VERSION_KEY, appVersion);
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }();
    this.handleChainUpdated = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(encryptedChainId, encryptedJsonRpcUrl) {
        var _a, chainId, jsonRpcUrl;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this.cipher.decrypt(encryptedChainId);
            case 2:
              chainId = _context5.sent;
              _context5.next = 5;
              return _this.cipher.decrypt(encryptedJsonRpcUrl);
            case 5:
              jsonRpcUrl = _context5.sent;
              (_a = _this.listener) === null || _a === void 0 ? void 0 : _a.chainUpdated(chainId, jsonRpcUrl);
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x6, _x7) {
        return _ref6.apply(this, arguments);
      };
    }();
    this.session = session;
    this.cipher = new WalletLinkCipher(session.secret);
    this.listener = listener;
    var ws = new WalletLinkWebSocket("".concat(linkAPIUrl, "/rpc"), WebSocket);
    ws.setConnectionStateListener(/*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(state) {
        var connected, _connect;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              // attempt to reconnect every 5 seconds when disconnected
              connected = false;
              _context7.t0 = state;
              _context7.next = _context7.t0 === ConnectionState.DISCONNECTED ? 4 : _context7.t0 === ConnectionState.CONNECTED ? 6 : _context7.t0 === ConnectionState.CONNECTING ? 13 : 14;
              break;
            case 4:
              // if DISCONNECTED and not destroyed
              if (!_this.destroyed) {
                _connect = /*#__PURE__*/function () {
                  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                      while (1) switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return new Promise(function (resolve) {
                            return setTimeout(resolve, 5000);
                          });
                        case 2:
                          // check whether it's destroyed again
                          if (!_this.destroyed) {
                            // reconnect
                            ws.connect()["catch"](function () {
                              _connect();
                            });
                          }
                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                    }, _callee6);
                  }));
                  return function connect() {
                    return _ref8.apply(this, arguments);
                  };
                }();
                _connect();
              }
              return _context7.abrupt("break", 14);
            case 6:
              _context7.next = 8;
              return _this.handleConnected();
            case 8:
              connected = _context7.sent;
              // send heartbeat every n seconds while connected
              // if CONNECTED, start the heartbeat timer
              // first timer event updates lastHeartbeat timestamp
              // subsequent calls send heartbeat message
              _this.updateLastHeartbeat();
              setInterval(function () {
                _this.heartbeat();
              }, HEARTBEAT_INTERVAL);
              // check for unseen events
              if (_this.shouldFetchUnseenEventsOnConnect) {
                _this.fetchUnseenEventsAPI();
              }
              return _context7.abrupt("break", 14);
            case 13:
              return _context7.abrupt("break", 14);
            case 14:
              // distinctUntilChanged
              if (_this.connected !== connected) {
                _this.connected = connected;
              }
            case 15:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      return function (_x8) {
        return _ref7.apply(this, arguments);
      };
    }());
    ws.setIncomingDataListener(function (m) {
      var _a;
      switch (m.type) {
        // handle server's heartbeat responses
        case 'Heartbeat':
          _this.updateLastHeartbeat();
          return;
        // handle link status updates
        case 'IsLinkedOK':
        case 'Linked':
          {
            var linked = m.type === 'IsLinkedOK' ? m.linked : undefined;
            _this.linked = linked || m.onlineGuests > 0;
            break;
          }
        // handle session config updates
        case 'GetSessionConfigOK':
        case 'SessionConfigUpdated':
          {
            _this.handleSessionMetadataUpdated(m.metadata);
            break;
          }
        case 'Event':
          {
            _this.handleIncomingEvent(m);
            break;
          }
      }
      // resolve request promises
      if (m.id !== undefined) {
        (_a = _this.requestResolutions.get(m.id)) === null || _a === void 0 ? void 0 : _a(m);
      }
    });
    this.ws = ws;
    this.http = new WalletLinkHTTP(linkAPIUrl, session.id, session.key);
  }
  /**
   * Make a connection to the server
   */
  return _createClass(WalletLinkConnection, [{
    key: "connect",
    value: function connect() {
      if (this.destroyed) {
        throw new Error('instance is destroyed');
      }
      this.ws.connect();
    }
    /**
     * Terminate connection, and mark as destroyed. To reconnect, create a new
     * instance of WalletSDKConnection
     */
  }, {
    key: "destroy",
    value: (function () {
      var _destroy = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!this.destroyed) {
                _context8.next = 2;
                break;
              }
              return _context8.abrupt("return");
            case 2:
              _context8.next = 4;
              return this.makeRequest({
                type: 'SetSessionConfig',
                id: IntNumber(this.nextReqId++),
                sessionId: this.session.id,
                metadata: {
                  __destroyed: '1'
                }
              }, {
                timeout: 1000
              });
            case 4:
              this.destroyed = true;
              this.ws.disconnect();
              this.listener = undefined;
            case 7:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function destroy() {
        return _destroy.apply(this, arguments);
      }
      return destroy;
    }())
  }, {
    key: "connected",
    get: function get() {
      return this._connected;
    },
    set: function set(connected) {
      this._connected = connected;
    }
  }, {
    key: "linked",
    get: function get() {
      return this._linked;
    },
    set: function set(linked) {
      var _a, _b;
      this._linked = linked;
      if (linked) (_a = this.onceLinked) === null || _a === void 0 ? void 0 : _a.call(this);
      (_b = this.listener) === null || _b === void 0 ? void 0 : _b.linkedUpdated(linked);
    }
  }, {
    key: "setOnceLinked",
    value: function setOnceLinked(callback) {
      var _this2 = this;
      return new Promise(function (resolve) {
        if (_this2.linked) {
          callback().then(resolve);
        } else {
          _this2.onceLinked = function () {
            callback().then(resolve);
            _this2.onceLinked = undefined;
          };
        }
      });
    }
  }, {
    key: "handleIncomingEvent",
    value: function () {
      var _handleIncomingEvent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(m) {
        var _a, decryptedData, message, id, response;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!(m.type !== 'Event' || m.event !== 'Web3Response')) {
                _context9.next = 2;
                break;
              }
              return _context9.abrupt("return");
            case 2:
              _context9.next = 4;
              return this.cipher.decrypt(m.data);
            case 4:
              decryptedData = _context9.sent;
              message = JSON.parse(decryptedData);
              if (!(message.type !== 'WEB3_RESPONSE')) {
                _context9.next = 8;
                break;
              }
              return _context9.abrupt("return");
            case 8:
              id = message.id, response = message.response;
              (_a = this.listener) === null || _a === void 0 ? void 0 : _a.handleWeb3ResponseMessage(id, response);
            case 10:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function handleIncomingEvent(_x9) {
        return _handleIncomingEvent.apply(this, arguments);
      }
      return handleIncomingEvent;
    }()
  }, {
    key: "checkUnseenEvents",
    value: function () {
      var _checkUnseenEvents = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (this.connected) {
                _context10.next = 3;
                break;
              }
              this.shouldFetchUnseenEventsOnConnect = true;
              return _context10.abrupt("return");
            case 3:
              _context10.next = 5;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 250);
              });
            case 5:
              _context10.prev = 5;
              _context10.next = 8;
              return this.fetchUnseenEventsAPI();
            case 8:
              _context10.next = 13;
              break;
            case 10:
              _context10.prev = 10;
              _context10.t0 = _context10["catch"](5);
              console.error('Unable to check for unseen events', _context10.t0);
            case 13:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[5, 10]]);
      }));
      function checkUnseenEvents() {
        return _checkUnseenEvents.apply(this, arguments);
      }
      return checkUnseenEvents;
    }()
  }, {
    key: "fetchUnseenEventsAPI",
    value: function () {
      var _fetchUnseenEventsAPI = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var _this3 = this;
        var responseEvents;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              this.shouldFetchUnseenEventsOnConnect = false;
              _context11.next = 3;
              return this.http.fetchUnseenEvents();
            case 3:
              responseEvents = _context11.sent;
              responseEvents.forEach(function (e) {
                return _this3.handleIncomingEvent(e);
              });
            case 5:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function fetchUnseenEventsAPI() {
        return _fetchUnseenEventsAPI.apply(this, arguments);
      }
      return fetchUnseenEventsAPI;
    }()
    /**
     * Publish an event and emit event ID when successful
     * @param event event name
     * @param unencryptedData unencrypted event data
     * @param callWebhook whether the webhook should be invoked
     * @returns a Promise that emits event ID when successful
     */
  }, {
    key: "publishEvent",
    value: (function () {
      var _publishEvent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(event, unencryptedData) {
        var _this4 = this;
        var callWebhook,
          data,
          message,
          _args13 = arguments;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              callWebhook = _args13.length > 2 && _args13[2] !== undefined ? _args13[2] : false;
              _context13.next = 3;
              return this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, unencryptedData), {
                origin: location.origin,
                location: location.href,
                relaySource: 'coinbaseWalletExtension' in window && window.coinbaseWalletExtension ? 'injected_sdk' : 'sdk'
              })));
            case 3:
              data = _context13.sent;
              message = {
                type: 'PublishEvent',
                id: IntNumber(this.nextReqId++),
                sessionId: this.session.id,
                event: event,
                data: data,
                callWebhook: callWebhook
              };
              return _context13.abrupt("return", this.setOnceLinked(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
                var res;
                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return _this4.makeRequest(message);
                    case 2:
                      res = _context12.sent;
                      if (!(res.type === 'Fail')) {
                        _context12.next = 5;
                        break;
                      }
                      throw new Error(res.error || 'failed to publish event');
                    case 5:
                      return _context12.abrupt("return", res.eventId);
                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee12);
              }))));
            case 6:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function publishEvent(_x10, _x11) {
        return _publishEvent.apply(this, arguments);
      }
      return publishEvent;
    }())
  }, {
    key: "sendData",
    value: function sendData(message) {
      this.ws.sendData(JSON.stringify(message));
    }
  }, {
    key: "updateLastHeartbeat",
    value: function updateLastHeartbeat() {
      this.lastHeartbeatResponse = Date.now();
    }
  }, {
    key: "heartbeat",
    value: function heartbeat() {
      if (Date.now() - this.lastHeartbeatResponse > HEARTBEAT_INTERVAL * 2) {
        this.ws.disconnect();
        return;
      }
      try {
        this.ws.sendData('h');
      } catch (_a) {
        // noop
      }
    }
  }, {
    key: "makeRequest",
    value: function () {
      var _makeRequest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(message) {
        var _this5 = this;
        var options,
          reqId,
          timeoutId,
          _args14 = arguments;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              options = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {
                timeout: REQUEST_TIMEOUT
              };
              reqId = message.id;
              this.sendData(message);
              // await server message with corresponding id
              return _context14.abrupt("return", Promise.race([new Promise(function (_, reject) {
                timeoutId = window.setTimeout(function () {
                  reject(new Error("request ".concat(reqId, " timed out")));
                }, options.timeout);
              }), new Promise(function (resolve) {
                _this5.requestResolutions.set(reqId, function (m) {
                  clearTimeout(timeoutId); // clear the timeout
                  resolve(m);
                  _this5.requestResolutions["delete"](reqId);
                });
              })]));
            case 4:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function makeRequest(_x12) {
        return _makeRequest.apply(this, arguments);
      }
      return makeRequest;
    }()
  }, {
    key: "handleConnected",
    value: function () {
      var _handleConnected = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        var res;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return this.makeRequest({
                type: 'HostSession',
                id: IntNumber(this.nextReqId++),
                sessionId: this.session.id,
                sessionKey: this.session.key
              });
            case 2:
              res = _context15.sent;
              if (!(res.type === 'Fail')) {
                _context15.next = 5;
                break;
              }
              return _context15.abrupt("return", false);
            case 5:
              this.sendData({
                type: 'IsLinked',
                id: IntNumber(this.nextReqId++),
                sessionId: this.session.id
              });
              this.sendData({
                type: 'GetSessionConfig',
                id: IntNumber(this.nextReqId++),
                sessionId: this.session.id
              });
              return _context15.abrupt("return", true);
            case 8:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function handleConnected() {
        return _handleConnected.apply(this, arguments);
      }
      return handleConnected;
    }()
  }]);
}();

var RelayEventManager = /*#__PURE__*/function () {
  function RelayEventManager() {
    _classCallCheck(this, RelayEventManager);
    this._nextRequestId = 0;
    this.callbacks = new Map();
  }
  return _createClass(RelayEventManager, [{
    key: "makeRequestId",
    value: function makeRequestId() {
      // max nextId == max int32 for compatibility with mobile
      this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
      var id = this._nextRequestId;
      var idStr = prepend0x(id.toString(16));
      // unlikely that this will ever be an issue, but just to be safe
      var callback = this.callbacks.get(idStr);
      if (callback) {
        this.callbacks["delete"](idStr);
      }
      return id;
    }
  }]);
}();

function number(n) {
  if (!Number.isSafeInteger(n) || n < 0) throw new Error("positive integer expected, not ".concat(n));
}
function bool(b) {
  if (typeof b !== 'boolean') throw new Error("boolean expected, not ".concat(b));
}
// copied from utils
function isBytes$1(a) {
  return a instanceof Uint8Array || a != null && _typeof(a) === 'object' && a.constructor.name === 'Uint8Array';
}
function bytes(b) {
  if (!isBytes$1(b)) throw new Error('Uint8Array expected');
  for (var _len = arguments.length, lengths = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    lengths[_key - 1] = arguments[_key];
  }
  if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error("Uint8Array expected of length ".concat(lengths, ", not of length=").concat(b.length));
}
function hash(h) {
  if (typeof h !== 'function' || typeof h.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
  number(h.outputLen);
  number(h.blockLen);
}
function exists(instance) {
  var checkFinished = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (instance.destroyed) throw new Error('Hash instance has been destroyed');
  if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
function output(out, instance) {
  bytes(out);
  var min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least ".concat(min));
  }
}
var assert = {
  number: number,
  bool: bool,
  bytes: bytes,
  hash: hash,
  exists: exists,
  output: output
};

var crypto$1 = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;

// export { isBytes } from './_assert.js';
// We can't reuse isBytes from _assert, because somehow this causes huge perf issues
function isBytes(a) {
  return a instanceof Uint8Array || a != null && _typeof(a) === 'object' && a.constructor.name === 'Uint8Array';
}
// Cast array to different type
var u8 = function u8(arr) {
  return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
};
var u32 = function u32(arr) {
  return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
};
// Cast array to view
var createView = function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
};
// The rotate right (circular right shift) operation for uint32
var rotr = function rotr(word, shift) {
  return word << 32 - shift | word >>> shift;
};
// The rotate left (circular left shift) operation for uint32
var rotl = function rotl(word, shift) {
  return word << shift | word >>> 32 - shift >>> 0;
};
var isLE = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
// The byte swap operation for uint32
var byteSwap = function byteSwap(word) {
  return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
};
// Conditionally byte swap if on a big-endian platform
var byteSwapIfBE = isLE ? function (n) {
  return n;
} : function (n) {
  return byteSwap(n);
};
// In place byte swap for Uint32Array
function byteSwap32(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = byteSwap(arr[i]);
  }
}
// Array where index 0xf0 (240) is mapped to string 'f0'
var hexes = /* @__PURE__ */Array.from({
  length: 256
}, function (_, i) {
  return i.toString(16).padStart(2, '0');
});
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */
function bytesToHex(bytes$1) {
  bytes(bytes$1);
  // pre-caching improves the speed 6x
  var hex = '';
  for (var i = 0; i < bytes$1.length; i++) {
    hex += hexes[bytes$1[i]];
  }
  return hex;
}
// We use optimized technique to convert hex string to byte array
var asciis = {
  _0: 48,
  _9: 57,
  _A: 65,
  _F: 70,
  _a: 97,
  _f: 102
};
function asciiToBase16(_char) {
  if (_char >= asciis._0 && _char <= asciis._9) return _char - asciis._0;
  if (_char >= asciis._A && _char <= asciis._F) return _char - (asciis._A - 10);
  if (_char >= asciis._a && _char <= asciis._f) return _char - (asciis._a - 10);
  return;
}
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */
function hexToBytes(hex) {
  if (typeof hex !== 'string') throw new Error('hex string expected, got ' + _typeof(hex));
  var hl = hex.length;
  var al = hl / 2;
  if (hl % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + hl);
  var array = new Uint8Array(al);
  for (var ai = 0, hi = 0; ai < al; ai++, hi += 2) {
    var n1 = asciiToBase16(hex.charCodeAt(hi));
    var n2 = asciiToBase16(hex.charCodeAt(hi + 1));
    if (n1 === undefined || n2 === undefined) {
      var _char2 = hex[hi] + hex[hi + 1];
      throw new Error('hex string expected, got non-hex character "' + _char2 + '" at index ' + hi);
    }
    array[ai] = n1 * 16 + n2;
  }
  return array;
}
// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
var nextTick = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function nextTick() {
    return _ref.apply(this, arguments);
  };
}();
// Returns control to thread each 'tick' ms to avoid blocking
function asyncLoop(_x, _x2, _x3) {
  return _asyncLoop.apply(this, arguments);
}
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */
function _asyncLoop() {
  _asyncLoop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(iters, tick, cb) {
    var ts, i, diff;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          ts = Date.now();
          i = 0;
        case 2:
          if (!(i < iters)) {
            _context2.next = 13;
            break;
          }
          cb(i);
          // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
          diff = Date.now() - ts;
          if (!(diff >= 0 && diff < tick)) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("continue", 10);
        case 7:
          _context2.next = 9;
          return nextTick();
        case 9:
          ts += diff;
        case 10:
          i++;
          _context2.next = 2;
          break;
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _asyncLoop.apply(this, arguments);
}
function utf8ToBytes(str) {
  if (typeof str !== 'string') throw new Error("utf8ToBytes expected string, got ".concat(_typeof(str)));
  return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */
function toBytes(data) {
  if (typeof data === 'string') data = utf8ToBytes(data);
  bytes(data);
  return data;
}
/**
 * Copies several Uint8Arrays into one.
 */
function concatBytes() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    var a = i < 0 || arguments.length <= i ? undefined : arguments[i];
    bytes(a);
    sum += a.length;
  }
  var res = new Uint8Array(sum);
  for (var _i = 0, pad = 0; _i < arguments.length; _i++) {
    var _a = _i < 0 || arguments.length <= _i ? undefined : arguments[_i];
    res.set(_a, pad);
    pad += _a.length;
  }
  return res;
}
// For runtime check if class implements interface
var Hash = /*#__PURE__*/function () {
  function Hash() {
    _classCallCheck(this, Hash);
  }
  return _createClass(Hash, [{
    key: "clone",
    value:
    // Safe version that clones internal state
    function clone() {
      return this._cloneInto();
    }
  }]);
}();
var toStr = {}.toString;
function checkOpts(defaults, opts) {
  if (opts !== undefined && toStr.call(opts) !== '[object Object]') throw new Error('Options should be object or undefined');
  var merged = Object.assign(defaults, opts);
  return merged;
}
function wrapConstructor(hashCons) {
  var hashC = function hashC(msg) {
    return hashCons().update(toBytes(msg)).digest();
  };
  var tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = function () {
    return hashCons();
  };
  return hashC;
}
function wrapConstructorWithOpts(hashCons) {
  var hashC = function hashC(msg, opts) {
    return hashCons(opts).update(toBytes(msg)).digest();
  };
  var tmp = hashCons({});
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = function (opts) {
    return hashCons(opts);
  };
  return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
  var hashC = function hashC(msg, opts) {
    return hashCons(opts).update(toBytes(msg)).digest();
  };
  var tmp = hashCons({});
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = function (opts) {
    return hashCons(opts);
  };
  return hashC;
}
/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */
function randomBytes() {
  var bytesLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  if (crypto$1 && typeof crypto$1.getRandomValues === 'function') {
    return crypto$1.getRandomValues(new Uint8Array(bytesLength));
  }
  // Legacy Node.js compatibility
  if (crypto$1 && typeof crypto$1.randomBytes === 'function') {
    return crypto$1.randomBytes(bytesLength);
  }
  throw new Error('crypto.getRandomValues must be defined');
}

/**
 * Polyfill for Safari 14
 */
function setBigUint64(view, byteOffset, value, isLE) {
  if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE);
  var _32n = BigInt(32);
  var _u32_max = BigInt(0xffffffff);
  var wh = Number(value >> _32n & _u32_max);
  var wl = Number(value & _u32_max);
  var h = isLE ? 4 : 0;
  var l = isLE ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE);
  view.setUint32(byteOffset + l, wl, isLE);
}
/**
 * Choice: a ? b : c
 */
var Chi = function Chi(a, b, c) {
  return a & b ^ ~a & c;
};
/**
 * Majority function, true if any two inputs is true
 */
var Maj = function Maj(a, b, c) {
  return a & b ^ a & c ^ b & c;
};
/**
 * Merkle-Damgard hash construction base class.
 * Could be used to create MD5, RIPEMD, SHA1, SHA2.
 */
var HashMD = /*#__PURE__*/function (_Hash) {
  function HashMD(blockLen, outputLen, padOffset, isLE) {
    var _this;
    _classCallCheck(this, HashMD);
    _this = _callSuper(this, HashMD);
    _this.blockLen = blockLen;
    _this.outputLen = outputLen;
    _this.padOffset = padOffset;
    _this.isLE = isLE;
    _this.finished = false;
    _this.length = 0;
    _this.pos = 0;
    _this.destroyed = false;
    _this.buffer = new Uint8Array(blockLen);
    _this.view = createView(_this.buffer);
    return _this;
  }
  _inherits(HashMD, _Hash);
  return _createClass(HashMD, [{
    key: "update",
    value: function update(data) {
      exists(this);
      var view = this.view,
        buffer = this.buffer,
        blockLen = this.blockLen;
      data = toBytes(data);
      var len = data.length;
      for (var pos = 0; pos < len;) {
        var take = Math.min(blockLen - this.pos, len - pos);
        // Fast path: we have at least one block in input, cast it to view and process
        if (take === blockLen) {
          var dataView = createView(data);
          for (; blockLen <= len - pos; pos += blockLen) this.process(dataView, pos);
          continue;
        }
        buffer.set(data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(view, 0);
          this.pos = 0;
        }
      }
      this.length += data.length;
      this.roundClean();
      return this;
    }
  }, {
    key: "digestInto",
    value: function digestInto(out) {
      exists(this);
      output(out, this);
      this.finished = true;
      // Padding
      // We can avoid allocation of buffer for padding completely if it
      // was previously not allocated here. But it won't change performance.
      var buffer = this.buffer,
        view = this.view,
        blockLen = this.blockLen,
        isLE = this.isLE;
      var pos = this.pos;
      // append the bit '1' to the message
      buffer[pos++] = 128;
      this.buffer.subarray(pos).fill(0);
      // we have less than padOffset left in buffer, so we cannot put length in
      // current block, need process it and pad again
      if (this.padOffset > blockLen - pos) {
        this.process(view, 0);
        pos = 0;
      }
      // Pad until full block byte with zeros
      for (var i = pos; i < blockLen; i++) buffer[i] = 0;
      // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
      // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
      // So we just write lowest 64 bits of that value.
      setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
      this.process(view, 0);
      var oview = createView(out);
      var len = this.outputLen;
      // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
      if (len % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
      var outLen = len / 4;
      var state = this.get();
      if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
      for (var _i = 0; _i < outLen; _i++) oview.setUint32(4 * _i, state[_i], isLE);
    }
  }, {
    key: "digest",
    value: function digest() {
      var buffer = this.buffer,
        outputLen = this.outputLen;
      this.digestInto(buffer);
      var res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
  }, {
    key: "_cloneInto",
    value: function _cloneInto(to) {
      var _to;
      to || (to = new this.constructor());
      (_to = to).set.apply(_to, _toConsumableArray(this.get()));
      var blockLen = this.blockLen,
        buffer = this.buffer,
        length = this.length,
        finished = this.finished,
        destroyed = this.destroyed,
        pos = this.pos;
      to.length = length;
      to.pos = pos;
      to.finished = finished;
      to.destroyed = destroyed;
      if (length % blockLen) to.buffer.set(buffer);
      return to;
    }
  }]);
}(Hash);

// SHA2-256 need to try 2^128 hashes to execute birthday attack.
// BTC network is doing 2^67 hashes/sec as per early 2023.
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
var SHA256_K = /* @__PURE__ */new Uint32Array([0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]);
// Initial state:
// first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19
// prettier-ignore
var SHA256_IV = /* @__PURE__ */new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
var SHA256_W = /* @__PURE__ */new Uint32Array(64);
var SHA256 = /*#__PURE__*/function (_HashMD) {
  function SHA256() {
    var _this;
    _classCallCheck(this, SHA256);
    _this = _callSuper(this, SHA256, [64, 32, 8, false]);
    // We cannot use array here since array allows indexing by variable
    // which means optimizer/compiler cannot use registers.
    _this.A = SHA256_IV[0] | 0;
    _this.B = SHA256_IV[1] | 0;
    _this.C = SHA256_IV[2] | 0;
    _this.D = SHA256_IV[3] | 0;
    _this.E = SHA256_IV[4] | 0;
    _this.F = SHA256_IV[5] | 0;
    _this.G = SHA256_IV[6] | 0;
    _this.H = SHA256_IV[7] | 0;
    return _this;
  }
  _inherits(SHA256, _HashMD);
  return _createClass(SHA256, [{
    key: "get",
    value: function get() {
      var A = this.A,
        B = this.B,
        C = this.C,
        D = this.D,
        E = this.E,
        F = this.F,
        G = this.G,
        H = this.H;
      return [A, B, C, D, E, F, G, H];
    }
    // prettier-ignore
  }, {
    key: "set",
    value: function set(A, B, C, D, E, F, G, H) {
      this.A = A | 0;
      this.B = B | 0;
      this.C = C | 0;
      this.D = D | 0;
      this.E = E | 0;
      this.F = F | 0;
      this.G = G | 0;
      this.H = H | 0;
    }
  }, {
    key: "process",
    value: function process(view, offset) {
      // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
      for (var i = 0; i < 16; i++, offset += 4) SHA256_W[i] = view.getUint32(offset, false);
      for (var _i = 16; _i < 64; _i++) {
        var W15 = SHA256_W[_i - 15];
        var W2 = SHA256_W[_i - 2];
        var s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
        var s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
        SHA256_W[_i] = s1 + SHA256_W[_i - 7] + s0 + SHA256_W[_i - 16] | 0;
      }
      // Compression function main loop, 64 rounds
      var A = this.A,
        B = this.B,
        C = this.C,
        D = this.D,
        E = this.E,
        F = this.F,
        G = this.G,
        H = this.H;
      for (var _i2 = 0; _i2 < 64; _i2++) {
        var sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
        var T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[_i2] + SHA256_W[_i2] | 0;
        var sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
        var T2 = sigma0 + Maj(A, B, C) | 0;
        H = G;
        G = F;
        F = E;
        E = D + T1 | 0;
        D = C;
        C = B;
        B = A;
        A = T1 + T2 | 0;
      }
      // Add the compressed chunk to the current hash value
      A = A + this.A | 0;
      B = B + this.B | 0;
      C = C + this.C | 0;
      D = D + this.D | 0;
      E = E + this.E | 0;
      F = F + this.F | 0;
      G = G + this.G | 0;
      H = H + this.H | 0;
      this.set(A, B, C, D, E, F, G, H);
    }
  }, {
    key: "roundClean",
    value: function roundClean() {
      SHA256_W.fill(0);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0);
      this.buffer.fill(0);
    }
  }]);
}(HashMD);
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
var SHA224 = /*#__PURE__*/function (_SHA) {
  function SHA224() {
    var _this2;
    _classCallCheck(this, SHA224);
    _this2 = _callSuper(this, SHA224);
    _this2.A = 0xc1059ed8 | 0;
    _this2.B = 0x367cd507 | 0;
    _this2.C = 0x3070dd17 | 0;
    _this2.D = 0xf70e5939 | 0;
    _this2.E = 0xffc00b31 | 0;
    _this2.F = 0x68581511 | 0;
    _this2.G = 0x64f98fa7 | 0;
    _this2.H = 0xbefa4fa4 | 0;
    _this2.outputLen = 28;
    return _this2;
  }
  _inherits(SHA224, _SHA);
  return _createClass(SHA224);
}(SHA256);
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */
var sha256 = /* @__PURE__ */wrapConstructor(function () {
  return new SHA256();
});
/**
 * SHA2-224 hash function
 */
var sha224 = /* @__PURE__ */wrapConstructor(function () {
  return new SHA224();
});

var STORAGE_KEY_SESSION_ID = 'session:id';
var STORAGE_KEY_SESSION_SECRET = 'session:secret';
var STORAGE_KEY_SESSION_LINKED = 'session:linked';
var WalletLinkSession = /*#__PURE__*/function () {
  function WalletLinkSession(storage, id, secret) {
    var linked = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    _classCallCheck(this, WalletLinkSession);
    this.storage = storage;
    this.id = id;
    this.secret = secret;
    this.key = bytesToHex(sha256("".concat(id, ", ").concat(secret, " WalletLink")));
    this._linked = !!linked;
  }
  return _createClass(WalletLinkSession, [{
    key: "linked",
    get: function get() {
      return this._linked;
    },
    set: function set(val) {
      this._linked = val;
      this.persistLinked();
    }
  }, {
    key: "save",
    value: function save() {
      this.storage.setItem(STORAGE_KEY_SESSION_ID, this.id);
      this.storage.setItem(STORAGE_KEY_SESSION_SECRET, this.secret);
      this.persistLinked();
      return this;
    }
  }, {
    key: "persistLinked",
    value: function persistLinked() {
      this.storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? '1' : '0');
    }
  }], [{
    key: "create",
    value: function create(storage) {
      var id = randomBytesHex(16);
      var secret = randomBytesHex(32);
      return new WalletLinkSession(storage, id, secret).save();
    }
  }, {
    key: "load",
    value: function load(storage) {
      var id = storage.getItem(STORAGE_KEY_SESSION_ID);
      var linked = storage.getItem(STORAGE_KEY_SESSION_LINKED);
      var secret = storage.getItem(STORAGE_KEY_SESSION_SECRET);
      if (id && secret) {
        return new WalletLinkSession(storage, id, secret, linked === '1');
      }
      return null;
    }
  }]);
}();

function createQrUrl(sessionId, sessionSecret, serverUrl, isParentConnection, version, chainId) {
  var sessionIdKey = isParentConnection ? 'parent-id' : 'id';
  var query = new URLSearchParams(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, sessionIdKey, sessionId), "secret", sessionSecret), "server", serverUrl), "v", version), "chainId", chainId.toString())).toString();
  var qrUrl = "".concat(serverUrl, "/#/link?").concat(query);
  return qrUrl;
}
function isInIFrame() {
  try {
    return window.frameElement !== null;
  } catch (e) {
    return false;
  }
}
function getLocation() {
  try {
    if (isInIFrame() && window.top) {
      return window.top.location;
    }
    return window.location;
  } catch (e) {
    return window.location;
  }
}
function isMobileWeb() {
  var _a;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent);
}
function isDarkMode() {
  var _a, _b;
  return (_b = (_a = window === null || window === void 0 ? void 0 : window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, '(prefers-color-scheme: dark)').matches) !== null && _b !== void 0 ? _b : false;
}

var css$2 = (function () {
  return "@namespace svg \"http://www.w3.org/2000/svg\";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:\"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}";
})();

// Copyright (c) 2018-2023 Coinbase, Inc. <https://www.coinbase.com/>
function injectCssReset() {
  var styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.appendChild(document.createTextNode(css$2));
  document.documentElement.appendChild(styleEl);
}

function r$2(e) {
  var t,
    f,
    n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == _typeof(e)) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r$2(e[t])) && (n && (n += " "), n += f);else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length;) (e = arguments[f++]) && (t = r$2(e)) && (n && (n += " "), n += t);
  return n;
}

var n,
  l$1,
  u$1,
  t$1,
  i$1,
  o$1,
  r$1,
  f$1,
  e$1,
  c$1,
  s$1,
  a$1,
  h$1 = {},
  v$1 = [],
  p$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  y$1 = Array.isArray;
function d$1(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function w$1(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function _$1(l, u, t) {
  var i,
    o,
    r,
    f = {};
  for (r in u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return g$1(l, f, i, o, null);
}
function g$1(n, t, i, o, r) {
  var f = {
    type: n,
    props: t,
    key: i,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: null == r ? ++u$1 : r,
    __i: -1,
    __u: 0
  };
  return null == r && null != l$1.vnode && l$1.vnode(f), f;
}
function m$1() {
  return {
    current: null
  };
}
function b$1(n) {
  return n.children;
}
function k$1(n, l) {
  this.props = n, this.context = l;
}
function x$1(n, l) {
  if (null == l) return n.__ ? x$1(n.__, n.__i + 1) : null;
  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? x$1(n) : null;
}
function C$1(n) {
  var l, u;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }
    return C$1(n);
  }
}
function S(n) {
  (!n.__d && (n.__d = !0) && i$1.push(n) && !M.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || r$1)(M);
}
function M() {
  var n, u, t, o, r, e, c, s;
  for (i$1.sort(f$1); n = i$1.shift();) n.__d && (u = i$1.length, o = void 0, e = (r = (t = n).__v).__e, c = [], s = [], t.__P && ((o = d$1({}, r)).__v = r.__v + 1, l$1.vnode && l$1.vnode(o), O(t.__P, o, r, t.__n, t.__P.namespaceURI, 32 & r.__u ? [e] : null, c, null == e ? x$1(r) : e, !!(32 & r.__u), s), o.__v = r.__v, o.__.__k[o.__i] = o, j$1(c, o, s), o.__e != e && C$1(o)), i$1.length > u && i$1.sort(f$1));
  M.__r = 0;
}
function P$1(n, l, u, t, i, o, r, f, e, c, s) {
  var a,
    p,
    y,
    d,
    w,
    _ = t && t.__k || v$1,
    g = l.length;
  for (u.__d = e, $(u, l, _), e = u.__d, a = 0; a < g; a++) null != (y = u.__k[a]) && (p = -1 === y.__i ? h$1 : _[y.__i] || h$1, y.__i = a, O(n, y, p, i, o, r, f, e, c, s), d = y.__e, y.ref && p.ref != y.ref && (p.ref && N(p.ref, null, y), s.push(y.ref, y.__c || d, y)), null == w && null != d && (w = d), 65536 & y.__u || p.__k === y.__k ? e = I(y, e, n) : "function" == typeof y.type && void 0 !== y.__d ? e = y.__d : d && (e = d.nextSibling), y.__d = void 0, y.__u &= -196609);
  u.__d = e, u.__e = w;
}
function $(n, l, u) {
  var t,
    i,
    o,
    r,
    f,
    e = l.length,
    c = u.length,
    s = c,
    a = 0;
  for (n.__k = [], t = 0; t < e; t++) null != (i = l[t]) && "boolean" != typeof i && "function" != typeof i ? (r = t + a, (i = n.__k[t] = "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? g$1(null, i, null, null, null) : y$1(i) ? g$1(b$1, {
    children: i
  }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? g$1(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i).__ = n, i.__b = n.__b + 1, o = null, -1 !== (f = i.__i = L(i, u, r, s)) && (s--, (o = u[f]) && (o.__u |= 131072)), null == o || null === o.__v ? (-1 == f && a--, "function" != typeof i.type && (i.__u |= 65536)) : f !== r && (f == r - 1 ? a-- : f == r + 1 ? a++ : (f > r ? a-- : a++, i.__u |= 65536))) : i = n.__k[t] = null;
  if (s) for (t = 0; t < c; t++) null != (o = u[t]) && 0 == (131072 & o.__u) && (o.__e == n.__d && (n.__d = x$1(o)), V(o, o));
}
function I(n, l, u) {
  var t, i;
  if ("function" == typeof n.type) {
    for (t = n.__k, i = 0; t && i < t.length; i++) t[i] && (t[i].__ = n, l = I(t[i], l, u));
    return l;
  }
  n.__e != l && (l && n.type && !u.contains(l) && (l = x$1(n)), u.insertBefore(n.__e, l || null), l = n.__e);
  do {
    l = l && l.nextSibling;
  } while (null != l && 8 === l.nodeType);
  return l;
}
function H(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (y$1(n) ? n.some(function (n) {
    H(n, l);
  }) : l.push(n)), l;
}
function L(n, l, u, t) {
  var i = n.key,
    o = n.type,
    r = u - 1,
    f = u + 1,
    e = l[u];
  if (null === e || e && i == e.key && o === e.type && 0 == (131072 & e.__u)) return u;
  if (t > (null != e && 0 == (131072 & e.__u) ? 1 : 0)) for (; r >= 0 || f < l.length;) {
    if (r >= 0) {
      if ((e = l[r]) && 0 == (131072 & e.__u) && i == e.key && o === e.type) return r;
      r--;
    }
    if (f < l.length) {
      if ((e = l[f]) && 0 == (131072 & e.__u) && i == e.key && o === e.type) return f;
      f++;
    }
  }
  return -1;
}
function T$1(n, l, u) {
  "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || p$1.test(l) ? u : u + "px";
}
function A$1(n, l, u, t, i) {
  var o;
  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || T$1(n.style, l, "");
      if (u) for (l in u) t && u[l] === t[l] || T$1(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/(PointerCapture)$|Capture$/i, "$1")), l = l.toLowerCase() in n || "onFocusOut" === l || "onFocusIn" === l ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t ? u.u = t.u : (u.u = e$1, n.addEventListener(l, o ? s$1 : c$1, o)) : n.removeEventListener(l, o ? s$1 : c$1, o);else {
    if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
  }
}
function F$1(n) {
  return function (u) {
    if (this.l) {
      var t = this.l[u.type + n];
      if (null == u.t) u.t = e$1++;else if (u.t < t.u) return;
      return t(l$1.event ? l$1.event(u) : u);
    }
  };
}
function O(n, u, t, i, o, r, f, e, c, s) {
  var a,
    h,
    v,
    p,
    w,
    _,
    g,
    m,
    x,
    C,
    S,
    M,
    $,
    I,
    H,
    L,
    T = u.type;
  if (void 0 !== u.constructor) return null;
  128 & t.__u && (c = !!(32 & t.__u), r = [e = u.__e = t.__e]), (a = l$1.__b) && a(u);
  n: if ("function" == typeof T) try {
    if (m = u.props, x = "prototype" in T && T.prototype.render, C = (a = T.contextType) && i[a.__c], S = a ? C ? C.props.value : a.__ : i, t.__c ? g = (h = u.__c = t.__c).__ = h.__E : (x ? u.__c = h = new T(m, S) : (u.__c = h = new k$1(m, S), h.constructor = T, h.render = q$1), C && C.sub(h), h.props = m, h.state || (h.state = {}), h.context = S, h.__n = i, v = h.__d = !0, h.__h = [], h._sb = []), x && null == h.__s && (h.__s = h.state), x && null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = d$1({}, h.__s)), d$1(h.__s, T.getDerivedStateFromProps(m, h.__s))), p = h.props, w = h.state, h.__v = u, v) x && null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), x && null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
      if (x && null == T.getDerivedStateFromProps && m !== p && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, S), !h.__e && (null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, S) || u.__v === t.__v)) {
        for (u.__v !== t.__v && (h.props = m, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function (n) {
          n && (n.__ = u);
        }), M = 0; M < h._sb.length; M++) h.__h.push(h._sb[M]);
        h._sb = [], h.__h.length && f.push(h);
        break n;
      }
      null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, S), x && null != h.componentDidUpdate && h.__h.push(function () {
        h.componentDidUpdate(p, w, _);
      });
    }
    if (h.context = S, h.props = m, h.__P = n, h.__e = !1, $ = l$1.__r, I = 0, x) {
      for (h.state = h.__s, h.__d = !1, $ && $(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++) h.__h.push(h._sb[H]);
      h._sb = [];
    } else do {
      h.__d = !1, $ && $(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
    } while (h.__d && ++I < 25);
    h.state = h.__s, null != h.getChildContext && (i = d$1(d$1({}, i), h.getChildContext())), x && !v && null != h.getSnapshotBeforeUpdate && (_ = h.getSnapshotBeforeUpdate(p, w)), P$1(n, y$1(L = null != a && a.type === b$1 && null == a.key ? a.props.children : a) ? L : [L], u, t, i, o, r, f, e, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && f.push(h), g && (h.__E = h.__ = null);
  } catch (n) {
    if (u.__v = null, c || null != r) {
      for (u.__u |= c ? 160 : 128; e && 8 === e.nodeType && e.nextSibling;) e = e.nextSibling;
      r[r.indexOf(e)] = null, u.__e = e;
    } else u.__e = t.__e, u.__k = t.__k;
    l$1.__e(n, u, t);
  } else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = z$1(t.__e, u, t, i, o, r, f, c, s);
  (a = l$1.diffed) && a(u);
}
function j$1(n, u, t) {
  u.__d = void 0;
  for (var i = 0; i < t.length; i++) N(t[i], t[++i], t[++i]);
  l$1.__c && l$1.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l$1.__e(n, u.__v);
    }
  });
}
function z$1(u, t, i, o, r, f, e, c, s) {
  var a,
    v,
    p,
    d,
    _,
    g,
    m,
    b = i.props,
    k = t.props,
    C = t.type;
  if ("svg" === C ? r = "http://www.w3.org/2000/svg" : "math" === C ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), null != f) for (a = 0; a < f.length; a++) if ((_ = f[a]) && "setAttribute" in _ == !!C && (C ? _.localName === C : 3 === _.nodeType)) {
    u = _, f[a] = null;
    break;
  }
  if (null == u) {
    if (null === C) return document.createTextNode(k);
    u = document.createElementNS(r, C, k.is && k), c && (l$1.__m && l$1.__m(t, f), c = !1), f = null;
  }
  if (null === C) b === k || c && u.data === k || (u.data = k);else {
    if (f = f && n.call(u.childNodes), b = i.props || h$1, !c && null != f) for (b = {}, a = 0; a < u.attributes.length; a++) b[(_ = u.attributes[a]).name] = _.value;
    for (a in b) if (_ = b[a], "children" == a) ;else if ("dangerouslySetInnerHTML" == a) p = _;else if (!(a in k)) {
      if ("value" == a && "defaultValue" in k || "checked" == a && "defaultChecked" in k) continue;
      A$1(u, a, null, _, r);
    }
    for (a in k) _ = k[a], "children" == a ? d = _ : "dangerouslySetInnerHTML" == a ? v = _ : "value" == a ? g = _ : "checked" == a ? m = _ : c && "function" != typeof _ || b[a] === _ || A$1(u, a, _, b[a], r);
    if (v) c || p && (v.__html === p.__html || v.__html === u.innerHTML) || (u.innerHTML = v.__html), t.__k = [];else if (p && (u.innerHTML = ""), P$1(u, y$1(d) ? d : [d], t, i, o, "foreignObject" === C ? "http://www.w3.org/1999/xhtml" : r, f, e, f ? f[0] : i.__k && x$1(i, 0), c, s), null != f) for (a = f.length; a--;) w$1(f[a]);
    c || (a = "value", "progress" === C && null == g ? u.removeAttribute("value") : void 0 !== g && (g !== u[a] || "progress" === C && !g || "option" === C && g !== b[a]) && A$1(u, a, g, b[a], r), a = "checked", void 0 !== m && m !== u[a] && A$1(u, a, m, b[a], r));
  }
  return u;
}
function N(n, u, t) {
  try {
    if ("function" == typeof n) {
      var i = "function" == typeof n.__u;
      i && n.__u(), i && null == u || (n.__u = n(u));
    } else n.current = u;
  } catch (n) {
    l$1.__e(n, t);
  }
}
function V(n, u, t) {
  var i, o;
  if (l$1.unmount && l$1.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || N(i, null, u)), null != (i = n.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (n) {
      l$1.__e(n, u);
    }
    i.base = i.__P = null;
  }
  if (i = n.__k) for (o = 0; o < i.length; o++) i[o] && V(i[o], u, t || "function" != typeof n.type);
  t || w$1(n.__e), n.__c = n.__ = n.__e = n.__d = void 0;
}
function q$1(n, l, u) {
  return this.constructor(n, u);
}
function B$1(u, t, i) {
  var o, r, f, e;
  l$1.__ && l$1.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, f = [], e = [], O(t, u = (!o && i || t).__k = _$1(b$1, null, [u]), r || h$1, h$1, t.namespaceURI, !o && i ? [i] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), j$1(f, u, e);
}
function D$1(n, l) {
  B$1(n, l, D$1);
}
function E(l, u, t) {
  var i,
    o,
    r,
    f,
    e = d$1({}, l.props);
  for (r in l.type && l.type.defaultProps && (f = l.type.defaultProps), u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : e[r] = void 0 === u[r] && void 0 !== f ? f[r] : u[r];
  return arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), g$1(l.type, e, i || l.key, o || l.ref, null);
}
function G(n, l) {
  var u = {
    __c: l = "__cC" + a$1++,
    __: n,
    Consumer: function Consumer(n, l) {
      return n.children(l);
    },
    Provider: function Provider(n) {
      var u, t;
      return this.getChildContext || (u = new Set(), (t = {})[l] = this, this.getChildContext = function () {
        return t;
      }, this.componentWillUnmount = function () {
        u = null;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.forEach(function (n) {
          n.__e = !0, S(n);
        });
      }, this.sub = function (n) {
        u.add(n);
        var l = n.componentWillUnmount;
        n.componentWillUnmount = function () {
          u && u["delete"](n), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}
n = v$1.slice, l$1 = {
  __e: function __e(n, l, u, t) {
    for (var i, o, r; l = l.__;) if ((i = l.__c) && !i.__) try {
      if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
    } catch (l) {
      n = l;
    }
    throw n;
  }
}, u$1 = 0, t$1 = function t(n) {
  return null != n && null == n.constructor;
}, k$1.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d$1({}, this.state), "function" == typeof n && (n = n(d$1({}, u), this.props)), n && d$1(u, n), null != n && this.__v && (l && this._sb.push(l), S(this));
}, k$1.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), S(this));
}, k$1.prototype.render = b$1, i$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function f(n, l) {
  return n.__v.__b - l.__v.__b;
}, M.__r = 0, e$1 = 0, c$1 = F$1(!1), s$1 = F$1(!0), a$1 = 0;

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = l$1,
  e = c.__b,
  a = c.__r,
  v = c.diffed,
  l = c.__c,
  m = c.unmount,
  s = c.__;
function d(n, t) {
  c.__h && c.__h(r, n, o || t), o = 0;
  var u = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return n >= u.__.length && u.__.push({}), u.__[n];
}
function h(n) {
  return o = 1, p(D, n);
}
function p(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : D(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    var f = function f(n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return !!n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
    };
    r.u = !0;
    var c = r.shouldComponentUpdate,
      e = r.componentWillUpdate;
    r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function y(n, u) {
  var i = d(t++, 3);
  !c.__s && C(i.__H, u) && (i.__ = n, i.i = u, r.__H.__h.push(i));
}
function _(n, u) {
  var i = d(t++, 4);
  !c.__s && C(i.__H, u) && (i.__ = n, i.i = u, r.__h.push(i));
}
function A(n) {
  return o = 5, T(function () {
    return {
      current: n
    };
  }, []);
}
function F(n, t, r) {
  o = 6, _(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function T(n, r) {
  var u = d(t++, 7);
  return C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
}
function q(n, t) {
  return o = 8, T(function () {
    return n;
  }, t);
}
function x(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function P(n, t) {
  c.useDebugValue && c.useDebugValue(t ? t(n) : n);
}
function b(n) {
  var u = d(t++, 10),
    i = h();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function g() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function j() {
  for (var n; n = f.shift();) if (n.__P && n.__H) try {
    n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
  } catch (t) {
    n.__H.__h = [], c.__e(t, n.__v);
  }
}
c.__b = function (n) {
  r = null, e && e(n);
}, c.__ = function (n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), s && s(n, t);
}, c.__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.i = n.__N = void 0;
  })) : (i.__h.forEach(z), i.__h.forEach(B), i.__h = [], t = 0)), u = r;
}, c.diffed = function (n) {
  v && v(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (1 !== f.push(t) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.i = void 0;
  })), u = r = null;
}, c.__c = function (n, t) {
  t.some(function (n) {
    try {
      n.__h.forEach(z), n.__h = n.__h.filter(function (n) {
        return !n.__ || B(n);
      });
    } catch (r) {
      t.some(function (n) {
        n.__h && (n.__h = []);
      }), t = [], c.__e(r, n.__v);
    }
  }), l && l(n, t);
}, c.unmount = function (n) {
  m && m(n);
  var t,
    r = n.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      z(n);
    } catch (n) {
      t = n;
    }
  }), r.__H = void 0, t && c.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
  var t,
    r = function r() {
      clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  k && (t = requestAnimationFrame(r));
}
function z(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function B(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function C(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function D(n, t) {
  return "function" == typeof t ? t(n) : t;
}

var css$1 = (function () {
  return ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
})();

var cblogo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+";
var gearIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
var Snackbar = /*#__PURE__*/function () {
  function Snackbar() {
    _classCallCheck(this, Snackbar);
    this.items = new Map();
    this.nextItemKey = 0;
    this.root = null;
    this.darkMode = isDarkMode();
  }
  return _createClass(Snackbar, [{
    key: "attach",
    value: function attach(el) {
      this.root = document.createElement('div');
      this.root.className = '-cbwsdk-snackbar-root';
      el.appendChild(this.root);
      this.render();
    }
  }, {
    key: "presentItem",
    value: function presentItem(itemProps) {
      var _this = this;
      var key = this.nextItemKey++;
      this.items.set(key, itemProps);
      this.render();
      return function () {
        _this.items["delete"](key);
        _this.render();
      };
    }
  }, {
    key: "clear",
    value: function clear() {
      this.items.clear();
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.root) {
        return;
      }
      B$1(_$1("div", null, _$1(SnackbarContainer, {
        darkMode: this.darkMode
      }, Array.from(this.items.entries()).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          itemProps = _ref2[1];
        return _$1(SnackbarInstance, Object.assign({}, itemProps, {
          key: key
        }));
      }))), this.root);
    }
  }]);
}();
var SnackbarContainer = function SnackbarContainer(props) {
  return _$1("div", {
    "class": clsx('-cbwsdk-snackbar-container')
  }, _$1("style", null, css$1), _$1("div", {
    "class": "-cbwsdk-snackbar"
  }, props.children));
};
var SnackbarInstance = function SnackbarInstance(_ref3) {
  var autoExpand = _ref3.autoExpand,
    message = _ref3.message,
    menuItems = _ref3.menuItems;
  var _useState = h(true),
    _useState2 = _slicedToArray(_useState, 2),
    hidden = _useState2[0],
    setHidden = _useState2[1];
  var _useState3 = h(autoExpand !== null && autoExpand !== void 0 ? autoExpand : false),
    _useState4 = _slicedToArray(_useState3, 2),
    expanded = _useState4[0],
    setExpanded = _useState4[1];
  y(function () {
    var timers = [window.setTimeout(function () {
      setHidden(false);
    }, 1), window.setTimeout(function () {
      setExpanded(true);
    }, 10000)];
    return function () {
      timers.forEach(window.clearTimeout);
    };
  });
  var toggleExpanded = function toggleExpanded() {
    setExpanded(!expanded);
  };
  return _$1("div", {
    "class": clsx('-cbwsdk-snackbar-instance', hidden && '-cbwsdk-snackbar-instance-hidden', expanded && '-cbwsdk-snackbar-instance-expanded')
  }, _$1("div", {
    "class": "-cbwsdk-snackbar-instance-header",
    onClick: toggleExpanded
  }, _$1("img", {
    src: cblogo,
    "class": "-cbwsdk-snackbar-instance-header-cblogo"
  }), ' ', _$1("div", {
    "class": "-cbwsdk-snackbar-instance-header-message"
  }, message), _$1("div", {
    "class": "-gear-container"
  }, !expanded && _$1("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _$1("circle", {
    cx: "12",
    cy: "12",
    r: "12",
    fill: "#F5F7F8"
  })), _$1("img", {
    src: gearIcon,
    "class": "-gear-icon",
    title: "Expand"
  }))), menuItems && menuItems.length > 0 && _$1("div", {
    "class": "-cbwsdk-snackbar-instance-menu"
  }, menuItems.map(function (action, i) {
    return _$1("div", {
      "class": clsx('-cbwsdk-snackbar-instance-menu-item', action.isRed && '-cbwsdk-snackbar-instance-menu-item-is-red'),
      onClick: action.onClick,
      key: i
    }, _$1("svg", {
      width: action.svgWidth,
      height: action.svgHeight,
      viewBox: "0 0 10 11",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _$1("path", {
      "fill-rule": action.defaultFillRule,
      "clip-rule": action.defaultClipRule,
      d: action.path,
      fill: "#AAAAAA"
    })), _$1("span", {
      "class": clsx('-cbwsdk-snackbar-instance-menu-item-info', action.isRed && '-cbwsdk-snackbar-instance-menu-item-info-is-red')
    }, action.info));
  })));
};

var WalletLinkRelayUI = /*#__PURE__*/function () {
  function WalletLinkRelayUI() {
    _classCallCheck(this, WalletLinkRelayUI);
    this.attached = false;
    this.snackbar = new Snackbar();
  }
  return _createClass(WalletLinkRelayUI, [{
    key: "attach",
    value: function attach() {
      if (this.attached) {
        throw new Error('Coinbase Wallet SDK UI is already attached');
      }
      var el = document.documentElement;
      var container = document.createElement('div');
      container.className = '-cbwsdk-css-reset';
      el.appendChild(container);
      this.snackbar.attach(container);
      this.attached = true;
      injectCssReset();
    }
  }, {
    key: "showConnecting",
    value: function showConnecting(options) {
      var snackbarProps;
      if (options.isUnlinkedErrorState) {
        snackbarProps = {
          autoExpand: true,
          message: 'Connection lost',
          menuItems: [{
            isRed: false,
            info: 'Reset connection',
            svgWidth: '10',
            svgHeight: '11',
            path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
            defaultFillRule: 'evenodd',
            defaultClipRule: 'evenodd',
            onClick: options.onResetConnection
          }]
        };
      } else {
        snackbarProps = {
          message: 'Confirm on phone',
          menuItems: [{
            isRed: true,
            info: 'Cancel transaction',
            svgWidth: '11',
            svgHeight: '11',
            path: 'M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z',
            defaultFillRule: 'inherit',
            defaultClipRule: 'inherit',
            onClick: options.onCancel
          }, {
            isRed: false,
            info: 'Reset connection',
            svgWidth: '10',
            svgHeight: '11',
            path: 'M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z',
            defaultFillRule: 'evenodd',
            defaultClipRule: 'evenodd',
            onClick: options.onResetConnection
          }]
        };
      }
      return this.snackbar.presentItem(snackbarProps);
    }
  }]);
}();

var css = (function () {
  return ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}";
})();

var RedirectDialog = /*#__PURE__*/function () {
  function RedirectDialog() {
    _classCallCheck(this, RedirectDialog);
    this.root = null;
    this.darkMode = isDarkMode();
  }
  return _createClass(RedirectDialog, [{
    key: "attach",
    value: function attach() {
      var el = document.documentElement;
      this.root = document.createElement('div');
      this.root.className = '-cbwsdk-css-reset';
      el.appendChild(this.root);
      injectCssReset();
    }
  }, {
    key: "present",
    value: function present(props) {
      this.render(props);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.render(null);
    }
  }, {
    key: "render",
    value: function render(props) {
      var _this = this;
      if (!this.root) return;
      B$1(null, this.root);
      if (!props) return;
      B$1(_$1(RedirectDialogContent, Object.assign({}, props, {
        onDismiss: function onDismiss() {
          _this.clear();
        },
        darkMode: this.darkMode
      })), this.root);
    }
  }]);
}();
var RedirectDialogContent = function RedirectDialogContent(_ref) {
  var title = _ref.title,
    buttonText = _ref.buttonText,
    darkMode = _ref.darkMode,
    onButtonClick = _ref.onButtonClick,
    onDismiss = _ref.onDismiss;
  var theme = darkMode ? 'dark' : 'light';
  return _$1(SnackbarContainer, {
    darkMode: darkMode
  }, _$1("div", {
    "class": "-cbwsdk-redirect-dialog"
  }, _$1("style", null, css), _$1("div", {
    "class": "-cbwsdk-redirect-dialog-backdrop",
    onClick: onDismiss
  }), _$1("div", {
    "class": clsx('-cbwsdk-redirect-dialog-box', theme)
  }, _$1("p", null, title), _$1("button", {
    onClick: onButtonClick
  }, buttonText))));
};

var CB_KEYS_URL = 'https://keys.coinbase.com/connect';
var WALLETLINK_URL = 'https://www.walletlink.org';
var CBW_MOBILE_DEEPLINK_URL = 'https://go.cb-w.com/walletlink';

var WLMobileRelayUI = /*#__PURE__*/function () {
  function WLMobileRelayUI() {
    _classCallCheck(this, WLMobileRelayUI);
    this.attached = false;
    this.redirectDialog = new RedirectDialog();
  }
  return _createClass(WLMobileRelayUI, [{
    key: "attach",
    value: function attach() {
      if (this.attached) {
        throw new Error('Coinbase Wallet SDK UI is already attached');
      }
      this.redirectDialog.attach();
      this.attached = true;
    }
  }, {
    key: "redirectToCoinbaseWallet",
    value: function redirectToCoinbaseWallet(walletLinkUrl) {
      var url = new URL(CBW_MOBILE_DEEPLINK_URL);
      url.searchParams.append('redirect_url', getLocation().href);
      if (walletLinkUrl) {
        url.searchParams.append('wl_url', walletLinkUrl);
      }
      var anchorTag = document.createElement('a');
      anchorTag.target = 'cbw-opener';
      anchorTag.href = url.href;
      anchorTag.rel = 'noreferrer noopener';
      anchorTag.click();
    }
  }, {
    key: "openCoinbaseWalletDeeplink",
    value: function openCoinbaseWalletDeeplink(walletLinkUrl) {
      var _this = this;
      this.redirectDialog.present({
        title: 'Redirecting to Coinbase Wallet...',
        buttonText: 'Open',
        onButtonClick: function onButtonClick() {
          _this.redirectToCoinbaseWallet(walletLinkUrl);
        }
      });
      setTimeout(function () {
        _this.redirectToCoinbaseWallet(walletLinkUrl);
      }, 99);
    }
  }, {
    key: "showConnecting",
    value: function showConnecting(_options) {
      var _this2 = this;
      // it uses the return callback to clear the dialog
      return function () {
        _this2.redirectDialog.clear();
      };
    }
  }]);
}();

var WalletLinkRelay = /*#__PURE__*/function () {
  function WalletLinkRelay(options) {
    var _this = this;
    _classCallCheck(this, WalletLinkRelay);
    this.chainCallbackParams = {
      chainId: '',
      jsonRpcUrl: ''
    }; // to implement distinctUntilChanged
    this.isMobileWeb = isMobileWeb();
    this.linkedUpdated = function (linked) {
      _this.isLinked = linked;
      var cachedAddresses = _this.storage.getItem(LOCAL_STORAGE_ADDRESSES_KEY);
      if (linked) {
        // Only set linked session variable one way
        _this._session.linked = linked;
      }
      _this.isUnlinkedErrorState = false;
      if (cachedAddresses) {
        var addresses = cachedAddresses.split(' ');
        var wasConnectedViaStandalone = _this.storage.getItem('IsStandaloneSigning') === 'true';
        if (addresses[0] !== '' && !linked && _this._session.linked && !wasConnectedViaStandalone) {
          _this.isUnlinkedErrorState = true;
        }
      }
    };
    this.metadataUpdated = function (key, value) {
      _this.storage.setItem(key, value);
    };
    this.chainUpdated = function (chainId, jsonRpcUrl) {
      if (_this.chainCallbackParams.chainId === chainId && _this.chainCallbackParams.jsonRpcUrl === jsonRpcUrl) {
        return;
      }
      _this.chainCallbackParams = {
        chainId: chainId,
        jsonRpcUrl: jsonRpcUrl
      };
      if (_this.chainCallback) {
        _this.chainCallback(jsonRpcUrl, Number.parseInt(chainId, 10));
      }
    };
    this.accountUpdated = function (selectedAddress) {
      if (_this.accountsCallback) {
        _this.accountsCallback([selectedAddress]);
      }
      if (WalletLinkRelay.accountRequestCallbackIds.size > 0) {
        // We get the ethereum address from the metadata.  If for whatever
        // reason we don't get a response via an explicit web3 message
        // we can still fulfill the eip1102 request.
        Array.from(WalletLinkRelay.accountRequestCallbackIds.values()).forEach(function (id) {
          _this.invokeCallback(id, {
            method: 'requestEthereumAccounts',
            result: [selectedAddress]
          });
        });
        WalletLinkRelay.accountRequestCallbackIds.clear();
      }
    };
    this.resetAndReload = this.resetAndReload.bind(this);
    this.linkAPIUrl = options.linkAPIUrl;
    this.storage = options.storage;
    this.metadata = options.metadata;
    this.accountsCallback = options.accountsCallback;
    this.chainCallback = options.chainCallback;
    var _this$subscribe = this.subscribe(),
      session = _this$subscribe.session,
      ui = _this$subscribe.ui,
      connection = _this$subscribe.connection;
    this._session = session;
    this.connection = connection;
    this.relayEventManager = new RelayEventManager();
    this.ui = ui;
    this.ui.attach();
  }
  return _createClass(WalletLinkRelay, [{
    key: "subscribe",
    value: function subscribe() {
      var session = WalletLinkSession.load(this.storage) || WalletLinkSession.create(this.storage);
      var linkAPIUrl = this.linkAPIUrl;
      var connection = new WalletLinkConnection({
        session: session,
        linkAPIUrl: linkAPIUrl,
        listener: this
      });
      var ui = this.isMobileWeb ? new WLMobileRelayUI() : new WalletLinkRelayUI();
      connection.connect();
      return {
        session: session,
        ui: ui,
        connection: connection
      };
    }
  }, {
    key: "resetAndReload",
    value: function resetAndReload() {
      var _this2 = this;
      this.connection.destroy().then(function () {
        /**
         * Only clear storage if the session id we have in memory matches the one on disk
         * Otherwise, in the case where we have 2 tabs, another tab might have cleared
         * storage already.  In that case if we clear storage again, the user will be in
         * a state where the first tab allows the user to connect but the session that
         * was used isn't persisted.  This leaves the user in a state where they aren't
         * connected to the mobile app.
         */
        var storedSession = WalletLinkSession.load(_this2.storage);
        if ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) === _this2._session.id) {
          ScopedLocalStorage.clearAll();
        }
        document.location.reload();
      })["catch"](function (_) {});
    }
  }, {
    key: "signEthereumTransaction",
    value: function signEthereumTransaction(params) {
      return this.sendRequest({
        method: 'signEthereumTransaction',
        params: {
          fromAddress: params.fromAddress,
          toAddress: params.toAddress,
          weiValue: bigIntStringFromBigInt(params.weiValue),
          data: hexStringFromBuffer(params.data, true),
          nonce: params.nonce,
          gasPriceInWei: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
          maxFeePerGas: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
          maxPriorityFeePerGas: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
          gasLimit: params.gasLimit ? bigIntStringFromBigInt(params.gasLimit) : null,
          chainId: params.chainId,
          shouldSubmit: false
        }
      });
    }
  }, {
    key: "signAndSubmitEthereumTransaction",
    value: function signAndSubmitEthereumTransaction(params) {
      return this.sendRequest({
        method: 'signEthereumTransaction',
        params: {
          fromAddress: params.fromAddress,
          toAddress: params.toAddress,
          weiValue: bigIntStringFromBigInt(params.weiValue),
          data: hexStringFromBuffer(params.data, true),
          nonce: params.nonce,
          gasPriceInWei: params.gasPriceInWei ? bigIntStringFromBigInt(params.gasPriceInWei) : null,
          maxFeePerGas: params.maxFeePerGas ? bigIntStringFromBigInt(params.maxFeePerGas) : null,
          maxPriorityFeePerGas: params.maxPriorityFeePerGas ? bigIntStringFromBigInt(params.maxPriorityFeePerGas) : null,
          gasLimit: params.gasLimit ? bigIntStringFromBigInt(params.gasLimit) : null,
          chainId: params.chainId,
          shouldSubmit: true
        }
      });
    }
  }, {
    key: "submitEthereumTransaction",
    value: function submitEthereumTransaction(signedTransaction, chainId) {
      return this.sendRequest({
        method: 'submitEthereumTransaction',
        params: {
          signedTransaction: hexStringFromBuffer(signedTransaction, true),
          chainId: chainId
        }
      });
    }
  }, {
    key: "getWalletLinkSession",
    value: function getWalletLinkSession() {
      return this._session;
    }
  }, {
    key: "sendRequest",
    value: function sendRequest(request) {
      var _this3 = this;
      var hideSnackbarItem = null;
      var id = randomBytesHex(8);
      var cancel = function cancel(error) {
        _this3.publishWeb3RequestCanceledEvent(id);
        _this3.handleErrorResponse(id, request.method, error);
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
      };
      return new Promise(function (resolve, reject) {
        {
          hideSnackbarItem = _this3.ui.showConnecting({
            isUnlinkedErrorState: _this3.isUnlinkedErrorState,
            onCancel: cancel,
            onResetConnection: _this3.resetAndReload // eslint-disable-line @typescript-eslint/unbound-method
          });
        }
        _this3.relayEventManager.callbacks.set(id, function (response) {
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
          if (isErrorResponse(response)) {
            return reject(new Error(response.errorMessage));
          }
          resolve(response);
        });
        _this3.publishWeb3RequestEvent(id, request);
      });
    }
  }, {
    key: "publishWeb3RequestEvent",
    value: function publishWeb3RequestEvent(id, request) {
      var _this4 = this;
      var message = {
        type: 'WEB3_REQUEST',
        id: id,
        request: request
      };
      this.publishEvent('Web3Request', message, true).then(function (_) {})["catch"](function (err) {
        _this4.handleWeb3ResponseMessage(message.id, {
          method: request.method,
          errorMessage: err.message
        });
      });
      if (this.isMobileWeb) {
        this.openCoinbaseWalletDeeplink(request.method);
      }
    }
    // copied from MobileRelay
  }, {
    key: "openCoinbaseWalletDeeplink",
    value: function openCoinbaseWalletDeeplink(method) {
      var _this5 = this;
      if (!(this.ui instanceof WLMobileRelayUI)) return;
      // For mobile relay requests, open the Coinbase Wallet app
      switch (method) {
        case 'requestEthereumAccounts': // requestEthereumAccounts is handled via popup
        case 'switchEthereumChain':
          // switchEthereumChain doesn't need to open the app
          return;
        default:
          window.addEventListener('blur', function () {
            window.addEventListener('focus', function () {
              _this5.connection.checkUnseenEvents();
            }, {
              once: true
            });
          }, {
            once: true
          });
          this.ui.openCoinbaseWalletDeeplink();
          break;
      }
    }
  }, {
    key: "publishWeb3RequestCanceledEvent",
    value: function publishWeb3RequestCanceledEvent(id) {
      var message = {
        type: 'WEB3_REQUEST_CANCELED',
        id: id
      };
      this.publishEvent('Web3RequestCanceled', message, false).then();
    }
  }, {
    key: "publishEvent",
    value: function publishEvent(event, message, callWebhook) {
      return this.connection.publishEvent(event, message, callWebhook);
    }
  }, {
    key: "handleWeb3ResponseMessage",
    value: function handleWeb3ResponseMessage(id, response) {
      var _this6 = this;
      if (response.method === 'requestEthereumAccounts') {
        WalletLinkRelay.accountRequestCallbackIds.forEach(function (id) {
          return _this6.invokeCallback(id, response);
        });
        WalletLinkRelay.accountRequestCallbackIds.clear();
        return;
      }
      this.invokeCallback(id, response);
    }
  }, {
    key: "handleErrorResponse",
    value: function handleErrorResponse(id, method, error) {
      var _a;
      var errorMessage = (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Unspecified error message.';
      this.handleWeb3ResponseMessage(id, {
        method: method,
        errorMessage: errorMessage
      });
    }
  }, {
    key: "invokeCallback",
    value: function invokeCallback(id, response) {
      var callback = this.relayEventManager.callbacks.get(id);
      if (callback) {
        callback(response);
        this.relayEventManager.callbacks["delete"](id);
      }
    }
  }, {
    key: "requestEthereumAccounts",
    value: function requestEthereumAccounts() {
      var _this7 = this;
      var _this$metadata = this.metadata,
        appName = _this$metadata.appName,
        appLogoUrl = _this$metadata.appLogoUrl;
      var request = {
        method: 'requestEthereumAccounts',
        params: {
          appName: appName,
          appLogoUrl: appLogoUrl
        }
      };
      var hideSnackbarItem = null;
      var id = randomBytesHex(8);
      return new Promise(function (resolve, reject) {
        _this7.relayEventManager.callbacks.set(id, function (response) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
          if (isErrorResponse(response)) {
            return reject(new Error(response.errorMessage));
          }
          resolve(response);
        });
        WalletLinkRelay.accountRequestCallbackIds.add(id);
        _this7.publishWeb3RequestEvent(id, request);
      });
    }
  }, {
    key: "watchAsset",
    value: function watchAsset(type, address, symbol, decimals, image, chainId) {
      var _this8 = this;
      var request = {
        method: 'watchAsset',
        params: {
          type: type,
          options: {
            address: address,
            symbol: symbol,
            decimals: decimals,
            image: image
          },
          chainId: chainId
        }
      };
      var hideSnackbarItem = null;
      var id = randomBytesHex(8);
      var cancel = function cancel(error) {
        _this8.publishWeb3RequestCanceledEvent(id);
        _this8.handleErrorResponse(id, request.method, error);
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
      };
      {
        hideSnackbarItem = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: cancel,
          onResetConnection: this.resetAndReload // eslint-disable-line @typescript-eslint/unbound-method
        });
      }
      return new Promise(function (resolve, reject) {
        _this8.relayEventManager.callbacks.set(id, function (response) {
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
          if (isErrorResponse(response)) {
            return reject(new Error(response.errorMessage));
          }
          resolve(response);
        });
        _this8.publishWeb3RequestEvent(id, request);
      });
    }
  }, {
    key: "addEthereumChain",
    value: function addEthereumChain(chainId, rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency) {
      var _this9 = this;
      var request = {
        method: 'addEthereumChain',
        params: {
          chainId: chainId,
          rpcUrls: rpcUrls,
          blockExplorerUrls: blockExplorerUrls,
          chainName: chainName,
          iconUrls: iconUrls,
          nativeCurrency: nativeCurrency
        }
      };
      var hideSnackbarItem = null;
      var id = randomBytesHex(8);
      var cancel = function cancel(error) {
        _this9.publishWeb3RequestCanceledEvent(id);
        _this9.handleErrorResponse(id, request.method, error);
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
      };
      {
        hideSnackbarItem = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: cancel,
          onResetConnection: this.resetAndReload // eslint-disable-line @typescript-eslint/unbound-method
        });
      }
      return new Promise(function (resolve, reject) {
        _this9.relayEventManager.callbacks.set(id, function (response) {
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
          if (isErrorResponse(response)) {
            return reject(new Error(response.errorMessage));
          }
          resolve(response);
        });
        _this9.publishWeb3RequestEvent(id, request);
      });
    }
  }, {
    key: "switchEthereumChain",
    value: function switchEthereumChain(chainId, address) {
      var _this10 = this;
      var request = {
        method: 'switchEthereumChain',
        params: Object.assign({
          chainId: chainId
        }, {
          address: address
        })
      };
      var hideSnackbarItem = null;
      var id = randomBytesHex(8);
      var cancel = function cancel(error) {
        _this10.publishWeb3RequestCanceledEvent(id);
        _this10.handleErrorResponse(id, request.method, error);
        hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
      };
      {
        hideSnackbarItem = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: cancel,
          onResetConnection: this.resetAndReload // eslint-disable-line @typescript-eslint/unbound-method
        });
      }
      return new Promise(function (resolve, reject) {
        _this10.relayEventManager.callbacks.set(id, function (response) {
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
          if (isErrorResponse(response) && response.errorCode) {
            return reject(standardErrors.provider.custom({
              code: response.errorCode,
              message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
            }));
          } else if (isErrorResponse(response)) {
            return reject(new Error(response.errorMessage));
          }
          resolve(response);
        });
        _this10.publishWeb3RequestEvent(id, request);
      });
    }
  }]);
}();
WalletLinkRelay.accountRequestCallbackIds = new Set();

var DEFAULT_CHAIN_ID_KEY = 'DefaultChainId';
var DEFAULT_JSON_RPC_URL = 'DefaultJsonRpcUrl';
// original source: https://github.com/coinbase/coinbase-wallet-sdk/blob/v3.7.1/packages/wallet-sdk/src/provider/CoinbaseWalletProvider.ts
var WalletLinkSigner = /*#__PURE__*/function () {
  function WalletLinkSigner(options) {
    _classCallCheck(this, WalletLinkSigner);
    this._relay = null;
    this._addresses = [];
    this.metadata = options.metadata;
    this._storage = new ScopedLocalStorage('walletlink', WALLETLINK_URL);
    this.callback = options.callback || null;
    var cachedAddresses = this._storage.getItem(LOCAL_STORAGE_ADDRESSES_KEY);
    if (cachedAddresses) {
      var addresses = cachedAddresses.split(' ');
      if (addresses[0] !== '') {
        this._addresses = addresses.map(function (address) {
          return ensureAddressString(address);
        });
      }
    }
    this.initializeRelay();
  }
  return _createClass(WalletLinkSigner, [{
    key: "getSession",
    value: function getSession() {
      var relay = this.initializeRelay();
      var _relay$getWalletLinkS = relay.getWalletLinkSession(),
        id = _relay$getWalletLinkS.id,
        secret = _relay$getWalletLinkS.secret;
      return {
        id: id,
        secret: secret
      };
    }
  }, {
    key: "handshake",
    value: function () {
      var _handshake = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this._eth_requestAccounts();
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function handshake() {
        return _handshake.apply(this, arguments);
      }
      return handshake;
    }()
  }, {
    key: "selectedAddress",
    get: function get() {
      return this._addresses[0] || undefined;
    }
  }, {
    key: "jsonRpcUrl",
    get: function get() {
      var _a;
      return (_a = this._storage.getItem(DEFAULT_JSON_RPC_URL)) !== null && _a !== void 0 ? _a : undefined;
    },
    set: function set(value) {
      this._storage.setItem(DEFAULT_JSON_RPC_URL, value);
    }
  }, {
    key: "updateProviderInfo",
    value: function updateProviderInfo(jsonRpcUrl, chainId) {
      var _a;
      this.jsonRpcUrl = jsonRpcUrl;
      // emit chainChanged event if necessary
      var originalChainId = this.getChainId();
      this._storage.setItem(DEFAULT_CHAIN_ID_KEY, chainId.toString(10));
      var chainChanged = ensureIntNumber(chainId) !== originalChainId;
      if (chainChanged) {
        (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, 'chainChanged', hexStringFromNumber(chainId));
      }
    }
  }, {
    key: "watchAsset",
    value: function () {
      var _watchAsset = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params) {
        var request, chainId, _request$options, address, symbol, image, decimals, relay, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              request = Array.isArray(params) ? params[0] : params;
              if (request.type) {
                _context2.next = 3;
                break;
              }
              throw standardErrors.rpc.invalidParams('Type is required');
            case 3:
              if (!((request === null || request === void 0 ? void 0 : request.type) !== 'ERC20')) {
                _context2.next = 5;
                break;
              }
              throw standardErrors.rpc.invalidParams("Asset of type '".concat(request.type, "' is not supported"));
            case 5:
              if (request === null || request === void 0 ? void 0 : request.options) {
                _context2.next = 7;
                break;
              }
              throw standardErrors.rpc.invalidParams('Options are required');
            case 7:
              if (request === null || request === void 0 ? void 0 : request.options.address) {
                _context2.next = 9;
                break;
              }
              throw standardErrors.rpc.invalidParams('Address is required');
            case 9:
              chainId = this.getChainId();
              _request$options = request.options, address = _request$options.address, symbol = _request$options.symbol, image = _request$options.image, decimals = _request$options.decimals;
              relay = this.initializeRelay();
              _context2.next = 14;
              return relay.watchAsset(request.type, address, symbol, decimals, image, chainId === null || chainId === void 0 ? void 0 : chainId.toString());
            case 14:
              result = _context2.sent;
              if (!isErrorResponse(result)) {
                _context2.next = 17;
                break;
              }
              return _context2.abrupt("return", false);
            case 17:
              return _context2.abrupt("return", !!result.result);
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function watchAsset(_x) {
        return _watchAsset.apply(this, arguments);
      }
      return watchAsset;
    }()
  }, {
    key: "addEthereumChain",
    value: function () {
      var _addEthereumChain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(params) {
        var _a, _b, request, chainIdNumber, relay, _request$rpcUrls, rpcUrls, _request$blockExplore, blockExplorerUrls, chainName, _request$iconUrls, iconUrls, nativeCurrency, res;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              request = params[0];
              if (!(((_a = request.rpcUrls) === null || _a === void 0 ? void 0 : _a.length) === 0)) {
                _context3.next = 3;
                break;
              }
              throw standardErrors.rpc.invalidParams('please pass in at least 1 rpcUrl');
            case 3:
              if (!(!request.chainName || request.chainName.trim() === '')) {
                _context3.next = 5;
                break;
              }
              throw standardErrors.rpc.invalidParams('chainName is a required field');
            case 5:
              if (request.nativeCurrency) {
                _context3.next = 7;
                break;
              }
              throw standardErrors.rpc.invalidParams('nativeCurrency is a required field');
            case 7:
              chainIdNumber = Number.parseInt(request.chainId, 16);
              if (!(chainIdNumber === this.getChainId())) {
                _context3.next = 10;
                break;
              }
              return _context3.abrupt("return", false);
            case 10:
              relay = this.initializeRelay();
              _request$rpcUrls = request.rpcUrls, rpcUrls = _request$rpcUrls === void 0 ? [] : _request$rpcUrls, _request$blockExplore = request.blockExplorerUrls, blockExplorerUrls = _request$blockExplore === void 0 ? [] : _request$blockExplore, chainName = request.chainName, _request$iconUrls = request.iconUrls, iconUrls = _request$iconUrls === void 0 ? [] : _request$iconUrls, nativeCurrency = request.nativeCurrency;
              _context3.next = 14;
              return relay.addEthereumChain(chainIdNumber.toString(), rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency);
            case 14:
              res = _context3.sent;
              if (!isErrorResponse(res)) {
                _context3.next = 17;
                break;
              }
              return _context3.abrupt("return", false);
            case 17:
              if (!(((_b = res.result) === null || _b === void 0 ? void 0 : _b.isApproved) === true)) {
                _context3.next = 20;
                break;
              }
              this.updateProviderInfo(rpcUrls[0], chainIdNumber);
              return _context3.abrupt("return", null);
            case 20:
              throw standardErrors.rpc.internal('unable to add ethereum chain');
            case 21:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function addEthereumChain(_x2) {
        return _addEthereumChain.apply(this, arguments);
      }
      return addEthereumChain;
    }()
  }, {
    key: "switchEthereumChain",
    value: function () {
      var _switchEthereumChain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(params) {
        var request, chainId, relay, res, switchResponse;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              request = params[0];
              chainId = Number.parseInt(request.chainId, 16);
              relay = this.initializeRelay();
              _context4.next = 5;
              return relay.switchEthereumChain(chainId.toString(10), this.selectedAddress || undefined);
            case 5:
              res = _context4.sent;
              if (!isErrorResponse(res)) {
                _context4.next = 8;
                break;
              }
              throw res;
            case 8:
              switchResponse = res.result;
              if (switchResponse.isApproved && switchResponse.rpcUrl.length > 0) {
                this.updateProviderInfo(switchResponse.rpcUrl, chainId);
              }
              return _context4.abrupt("return", null);
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function switchEthereumChain(_x3) {
        return _switchEthereumChain.apply(this, arguments);
      }
      return switchEthereumChain;
    }()
  }, {
    key: "cleanup",
    value: function () {
      var _cleanup = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              this.callback = null;
              if (this._relay) {
                this._relay.resetAndReload();
              }
              this._storage.clear();
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function cleanup() {
        return _cleanup.apply(this, arguments);
      }
      return cleanup;
    }()
  }, {
    key: "_setAddresses",
    value: function _setAddresses(addresses, _) {
      var _a;
      if (!Array.isArray(addresses)) {
        throw new Error('addresses is not an array');
      }
      var newAddresses = addresses.map(function (address) {
        return ensureAddressString(address);
      });
      if (JSON.stringify(newAddresses) === JSON.stringify(this._addresses)) {
        return;
      }
      this._addresses = newAddresses;
      (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, 'accountsChanged', newAddresses);
      this._storage.setItem(LOCAL_STORAGE_ADDRESSES_KEY, newAddresses.join(' '));
    }
  }, {
    key: "request",
    value: function () {
      var _request2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_request) {
        var params;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              params = _request.params || [];
              _context6.t0 = _request.method;
              _context6.next = _context6.t0 === 'eth_accounts' ? 4 : _context6.t0 === 'eth_coinbase' ? 5 : _context6.t0 === 'net_version' ? 6 : _context6.t0 === 'eth_chainId' ? 7 : _context6.t0 === 'eth_requestAccounts' ? 8 : _context6.t0 === 'eth_ecRecover' ? 9 : _context6.t0 === 'personal_ecRecover' ? 9 : _context6.t0 === 'personal_sign' ? 10 : _context6.t0 === 'eth_signTransaction' ? 11 : _context6.t0 === 'eth_sendRawTransaction' ? 12 : _context6.t0 === 'eth_sendTransaction' ? 13 : _context6.t0 === 'eth_signTypedData_v1' ? 14 : _context6.t0 === 'eth_signTypedData_v3' ? 14 : _context6.t0 === 'eth_signTypedData_v4' ? 14 : _context6.t0 === 'eth_signTypedData' ? 14 : _context6.t0 === 'wallet_addEthereumChain' ? 15 : _context6.t0 === 'wallet_switchEthereumChain' ? 16 : _context6.t0 === 'wallet_watchAsset' ? 17 : 18;
              break;
            case 4:
              return _context6.abrupt("return", _toConsumableArray(this._addresses));
            case 5:
              return _context6.abrupt("return", this.selectedAddress || null);
            case 6:
              return _context6.abrupt("return", this.getChainId().toString(10));
            case 7:
              return _context6.abrupt("return", hexStringFromNumber(this.getChainId()));
            case 8:
              return _context6.abrupt("return", this._eth_requestAccounts());
            case 9:
              return _context6.abrupt("return", this.ecRecover(_request));
            case 10:
              return _context6.abrupt("return", this.personalSign(_request));
            case 11:
              return _context6.abrupt("return", this._eth_signTransaction(params));
            case 12:
              return _context6.abrupt("return", this._eth_sendRawTransaction(params));
            case 13:
              return _context6.abrupt("return", this._eth_sendTransaction(params));
            case 14:
              return _context6.abrupt("return", this.signTypedData(_request));
            case 15:
              return _context6.abrupt("return", this.addEthereumChain(params));
            case 16:
              return _context6.abrupt("return", this.switchEthereumChain(params));
            case 17:
              return _context6.abrupt("return", this.watchAsset(params));
            case 18:
              if (this.jsonRpcUrl) {
                _context6.next = 20;
                break;
              }
              throw standardErrors.rpc.internal('No RPC URL set for chain');
            case 20:
              return _context6.abrupt("return", fetchRPCRequest(_request, this.jsonRpcUrl));
            case 21:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function request(_x4) {
        return _request2.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "_ensureKnownAddress",
    value: function _ensureKnownAddress(addressString) {
      var addressStr = ensureAddressString(addressString);
      var lowercaseAddresses = this._addresses.map(function (address) {
        return ensureAddressString(address);
      });
      if (!lowercaseAddresses.includes(addressStr)) {
        throw new Error('Unknown Ethereum address');
      }
    }
  }, {
    key: "_prepareTransactionParams",
    value: function _prepareTransactionParams(tx) {
      var fromAddress = tx.from ? ensureAddressString(tx.from) : this.selectedAddress;
      if (!fromAddress) {
        throw new Error('Ethereum address is unavailable');
      }
      this._ensureKnownAddress(fromAddress);
      var toAddress = tx.to ? ensureAddressString(tx.to) : null;
      var weiValue = tx.value != null ? ensureBigInt(tx.value) : BigInt(0);
      var data = tx.data ? ensureBuffer(tx.data) : Buffer.alloc(0);
      var nonce = tx.nonce != null ? ensureIntNumber(tx.nonce) : null;
      var gasPriceInWei = tx.gasPrice != null ? ensureBigInt(tx.gasPrice) : null;
      var maxFeePerGas = tx.maxFeePerGas != null ? ensureBigInt(tx.maxFeePerGas) : null;
      var maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? ensureBigInt(tx.maxPriorityFeePerGas) : null;
      var gasLimit = tx.gas != null ? ensureBigInt(tx.gas) : null;
      var chainId = tx.chainId ? ensureIntNumber(tx.chainId) : this.getChainId();
      return {
        fromAddress: fromAddress,
        toAddress: toAddress,
        weiValue: weiValue,
        data: data,
        nonce: nonce,
        gasPriceInWei: gasPriceInWei,
        maxFeePerGas: maxFeePerGas,
        maxPriorityFeePerGas: maxPriorityFeePerGas,
        gasLimit: gasLimit,
        chainId: chainId
      };
    }
  }, {
    key: "ecRecover",
    value: function () {
      var _ecRecover = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(request) {
        var method, params, relay, res;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              method = request.method, params = request.params;
              if (Array.isArray(params)) {
                _context7.next = 3;
                break;
              }
              throw standardErrors.rpc.invalidParams();
            case 3:
              relay = this.initializeRelay();
              _context7.next = 6;
              return relay.sendRequest({
                method: 'ethereumAddressFromSignedMessage',
                params: {
                  message: encodeToHexString(params[0]),
                  signature: encodeToHexString(params[1]),
                  addPrefix: method === 'personal_ecRecover'
                }
              });
            case 6:
              res = _context7.sent;
              if (!isErrorResponse(res)) {
                _context7.next = 9;
                break;
              }
              throw res;
            case 9:
              return _context7.abrupt("return", res.result);
            case 10:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function ecRecover(_x5) {
        return _ecRecover.apply(this, arguments);
      }
      return ecRecover;
    }()
  }, {
    key: "getChainId",
    value: function getChainId() {
      var _a;
      return Number.parseInt((_a = this._storage.getItem(DEFAULT_CHAIN_ID_KEY)) !== null && _a !== void 0 ? _a : '1', 10);
    }
  }, {
    key: "_eth_requestAccounts",
    value: function () {
      var _eth_requestAccounts2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _a, _b, relay, res;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!(this._addresses.length > 0)) {
                _context8.next = 3;
                break;
              }
              (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, 'connect', {
                chainId: hexStringFromNumber(this.getChainId())
              });
              return _context8.abrupt("return", this._addresses);
            case 3:
              relay = this.initializeRelay();
              _context8.next = 6;
              return relay.requestEthereumAccounts();
            case 6:
              res = _context8.sent;
              if (!isErrorResponse(res)) {
                _context8.next = 9;
                break;
              }
              throw res;
            case 9:
              if (res.result) {
                _context8.next = 11;
                break;
              }
              throw new Error('accounts received is empty');
            case 11:
              this._setAddresses(res.result);
              (_b = this.callback) === null || _b === void 0 ? void 0 : _b.call(this, 'connect', {
                chainId: hexStringFromNumber(this.getChainId())
              });
              return _context8.abrupt("return", this._addresses);
            case 14:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function _eth_requestAccounts() {
        return _eth_requestAccounts2.apply(this, arguments);
      }
      return _eth_requestAccounts;
    }()
  }, {
    key: "personalSign",
    value: function () {
      var _personalSign = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(_ref) {
        var params, address, rawData, relay, res;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              params = _ref.params;
              if (Array.isArray(params)) {
                _context9.next = 3;
                break;
              }
              throw standardErrors.rpc.invalidParams();
            case 3:
              address = params[1];
              rawData = params[0];
              this._ensureKnownAddress(address);
              relay = this.initializeRelay();
              _context9.next = 9;
              return relay.sendRequest({
                method: 'signEthereumMessage',
                params: {
                  address: ensureAddressString(address),
                  message: encodeToHexString(rawData),
                  addPrefix: true,
                  typedDataJson: null
                }
              });
            case 9:
              res = _context9.sent;
              if (!isErrorResponse(res)) {
                _context9.next = 12;
                break;
              }
              throw res;
            case 12:
              return _context9.abrupt("return", res.result);
            case 13:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function personalSign(_x6) {
        return _personalSign.apply(this, arguments);
      }
      return personalSign;
    }()
  }, {
    key: "_eth_signTransaction",
    value: function () {
      var _eth_signTransaction2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(params) {
        var tx, relay, res;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              tx = this._prepareTransactionParams(params[0] || {});
              relay = this.initializeRelay();
              _context10.next = 4;
              return relay.signEthereumTransaction(tx);
            case 4:
              res = _context10.sent;
              if (!isErrorResponse(res)) {
                _context10.next = 7;
                break;
              }
              throw res;
            case 7:
              return _context10.abrupt("return", res.result);
            case 8:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function _eth_signTransaction(_x7) {
        return _eth_signTransaction2.apply(this, arguments);
      }
      return _eth_signTransaction;
    }()
  }, {
    key: "_eth_sendRawTransaction",
    value: function () {
      var _eth_sendRawTransaction2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(params) {
        var signedTransaction, relay, res;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              signedTransaction = ensureBuffer(params[0]);
              relay = this.initializeRelay();
              _context11.next = 4;
              return relay.submitEthereumTransaction(signedTransaction, this.getChainId());
            case 4:
              res = _context11.sent;
              if (!isErrorResponse(res)) {
                _context11.next = 7;
                break;
              }
              throw res;
            case 7:
              return _context11.abrupt("return", res.result);
            case 8:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function _eth_sendRawTransaction(_x8) {
        return _eth_sendRawTransaction2.apply(this, arguments);
      }
      return _eth_sendRawTransaction;
    }()
  }, {
    key: "_eth_sendTransaction",
    value: function () {
      var _eth_sendTransaction2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(params) {
        var tx, relay, res;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              tx = this._prepareTransactionParams(params[0] || {});
              relay = this.initializeRelay();
              _context12.next = 4;
              return relay.signAndSubmitEthereumTransaction(tx);
            case 4:
              res = _context12.sent;
              if (!isErrorResponse(res)) {
                _context12.next = 7;
                break;
              }
              throw res;
            case 7:
              return _context12.abrupt("return", res.result);
            case 8:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function _eth_sendTransaction(_x9) {
        return _eth_sendTransaction2.apply(this, arguments);
      }
      return _eth_sendTransaction;
    }()
  }, {
    key: "signTypedData",
    value: function () {
      var _signTypedData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(request) {
        var method, params, encode, address, rawData, relay, res;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              method = request.method, params = request.params;
              if (Array.isArray(params)) {
                _context13.next = 3;
                break;
              }
              throw standardErrors.rpc.invalidParams();
            case 3:
              encode = function encode(input) {
                var hashFuncMap = {
                  eth_signTypedData_v1: eip712.hashForSignTypedDataLegacy,
                  eth_signTypedData_v3: eip712.hashForSignTypedData_v3,
                  eth_signTypedData_v4: eip712.hashForSignTypedData_v4,
                  eth_signTypedData: eip712.hashForSignTypedData_v4
                };
                return hexStringFromBuffer(hashFuncMap[method]({
                  data: ensureParsedJSONObject(input)
                }), true);
              };
              address = params[method === 'eth_signTypedData_v1' ? 1 : 0];
              rawData = params[method === 'eth_signTypedData_v1' ? 0 : 1];
              this._ensureKnownAddress(address);
              relay = this.initializeRelay();
              _context13.next = 10;
              return relay.sendRequest({
                method: 'signEthereumMessage',
                params: {
                  address: ensureAddressString(address),
                  message: encode(rawData),
                  typedDataJson: JSON.stringify(rawData, null, 2),
                  addPrefix: false
                }
              });
            case 10:
              res = _context13.sent;
              if (!isErrorResponse(res)) {
                _context13.next = 13;
                break;
              }
              throw res;
            case 13:
              return _context13.abrupt("return", res.result);
            case 14:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function signTypedData(_x10) {
        return _signTypedData.apply(this, arguments);
      }
      return signTypedData;
    }()
  }, {
    key: "initializeRelay",
    value: function initializeRelay() {
      if (!this._relay) {
        this._relay = new WalletLinkRelay({
          linkAPIUrl: WALLETLINK_URL,
          storage: this._storage,
          metadata: this.metadata,
          accountsCallback: this._setAddresses.bind(this),
          chainCallback: this.updateProviderInfo.bind(this)
        });
      }
      return this._relay;
    }
  }]);
}();

var SIGNER_TYPE_KEY = 'SignerType';
var storage = new ScopedLocalStorage('CBWSDK', 'SignerConfigurator');
function loadSignerType() {
  return storage.getItem(SIGNER_TYPE_KEY);
}
function storeSignerType(signerType) {
  storage.setItem(SIGNER_TYPE_KEY, signerType);
}
function fetchSignerType(_x) {
  return _fetchSignerType.apply(this, arguments);
}
function _fetchSignerType() {
  _fetchSignerType = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
    var communicator, metadata, handshakeRequest, callback, request, _yield$communicator$p, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          communicator = params.communicator, metadata = params.metadata, handshakeRequest = params.handshakeRequest, callback = params.callback;
          listenForWalletLinkSessionRequest(communicator, metadata, callback)["catch"](function () {});
          request = {
            id: crypto.randomUUID(),
            event: 'selectSignerType',
            data: Object.assign(Object.assign({}, params.preference), {
              handshakeRequest: handshakeRequest
            })
          };
          _context.next = 5;
          return communicator.postRequestAndWaitForResponse(request);
        case 5:
          _yield$communicator$p = _context.sent;
          data = _yield$communicator$p.data;
          return _context.abrupt("return", data);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _fetchSignerType.apply(this, arguments);
}
function createSigner(params) {
  var signerType = params.signerType,
    metadata = params.metadata,
    communicator = params.communicator,
    callback = params.callback;
  switch (signerType) {
    case 'scw':
      {
        return new SCWSigner({
          metadata: metadata,
          callback: callback,
          communicator: communicator
        });
      }
    case 'walletlink':
      {
        return new WalletLinkSigner({
          metadata: metadata,
          callback: callback
        });
      }
  }
}
function listenForWalletLinkSessionRequest(_x2, _x3, _x4) {
  return _listenForWalletLinkSessionRequest.apply(this, arguments);
}
function _listenForWalletLinkSessionRequest() {
  _listenForWalletLinkSessionRequest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(communicator, metadata, callback) {
    var walletlink;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return communicator.onMessage(function (_ref) {
            var event = _ref.event;
            return event === 'WalletLinkSessionRequest';
          });
        case 2:
          // temporary walletlink signer instance to handle WalletLinkSessionRequest
          // will revisit this when refactoring the walletlink signer
          walletlink = new WalletLinkSigner({
            metadata: metadata,
            callback: callback
          }); // send wallet link session to popup
          communicator.postMessage({
            event: 'WalletLinkUpdate',
            data: {
              session: walletlink.getSession()
            }
          });
          // wait for handshake to complete
          _context2.next = 6;
          return walletlink.handshake();
        case 6:
          // send connected status to popup
          communicator.postMessage({
            event: 'WalletLinkUpdate',
            data: {
              connected: true
            }
          });
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _listenForWalletLinkSessionRequest.apply(this, arguments);
}

var COOP_ERROR_MESSAGE = "Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.\n\nPlease see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.";
/**
 * Creates a checker for the Cross-Origin-Opener-Policy (COOP).
 *
 * @returns An object with methods to get and check the Cross-Origin-Opener-Policy.
 *
 * @method getCrossOriginOpenerPolicy
 * Retrieves current Cross-Origin-Opener-Policy.
 * @throws Will throw an error if the policy has not been checked yet.
 *
 * @method checkCrossOriginOpenerPolicy
 * Checks the Cross-Origin-Opener-Policy of the current environment.
 * If in a non-browser environment, sets the policy to 'non-browser-env'.
 * If in a browser environment, fetches the policy from the current origin.
 * Logs an error if the policy is 'same-origin'.
 */
var createCoopChecker = function createCoopChecker() {
  var crossOriginOpenerPolicy;
  return {
    getCrossOriginOpenerPolicy: function getCrossOriginOpenerPolicy() {
      if (crossOriginOpenerPolicy === undefined) {
        return 'undefined';
      }
      return crossOriginOpenerPolicy;
    },
    checkCrossOriginOpenerPolicy: function () {
      var _checkCrossOriginOpenerPolicy = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var url, response, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof window === 'undefined')) {
                _context.next = 3;
                break;
              }
              // Non-browser environment
              crossOriginOpenerPolicy = 'non-browser-env';
              return _context.abrupt("return");
            case 3:
              _context.prev = 3;
              url = "".concat(window.location.origin).concat(window.location.pathname);
              _context.next = 7;
              return fetch(url, {
                method: 'HEAD'
              });
            case 7:
              response = _context.sent;
              if (response.ok) {
                _context.next = 10;
                break;
              }
              throw new Error("HTTP error! status: ".concat(response.status));
            case 10:
              result = response.headers.get('Cross-Origin-Opener-Policy');
              crossOriginOpenerPolicy = result !== null && result !== void 0 ? result : 'null';
              if (crossOriginOpenerPolicy === 'same-origin') {
                console.error(COOP_ERROR_MESSAGE);
              }
              _context.next = 19;
              break;
            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](3);
              console.error('Error checking Cross-Origin-Opener-Policy:', _context.t0.message);
              crossOriginOpenerPolicy = 'error';
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 15]]);
      }));
      function checkCrossOriginOpenerPolicy() {
        return _checkCrossOriginOpenerPolicy.apply(this, arguments);
      }
      return checkCrossOriginOpenerPolicy;
    }()
  };
};
var _createCoopChecker = createCoopChecker(),
  checkCrossOriginOpenerPolicy = _createCoopChecker.checkCrossOriginOpenerPolicy,
  getCrossOriginOpenerPolicy = _createCoopChecker.getCrossOriginOpenerPolicy;

var POPUP_WIDTH = 420;
var POPUP_HEIGHT = 540;
// Window Management
function openPopup(url) {
  var left = (window.innerWidth - POPUP_WIDTH) / 2 + window.screenX;
  var top = (window.innerHeight - POPUP_HEIGHT) / 2 + window.screenY;
  appendAppInfoQueryParams(url);
  var popup = window.open(url, 'Smart Wallet', "width=".concat(POPUP_WIDTH, ", height=").concat(POPUP_HEIGHT, ", left=").concat(left, ", top=").concat(top));
  popup === null || popup === void 0 ? void 0 : popup.focus();
  if (!popup) {
    throw standardErrors.rpc.internal('Pop up window failed to open');
  }
  return popup;
}
function closePopup(popup) {
  if (popup && !popup.closed) {
    popup.close();
  }
}
function appendAppInfoQueryParams(url) {
  var params = {
    sdkName: NAME,
    sdkVersion: VERSION,
    origin: window.location.origin,
    coop: getCrossOriginOpenerPolicy()
  };
  for (var _i = 0, _Object$entries = Object.entries(params); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    url.searchParams.append(key, value.toString());
  }
}

/**
 * Communicates with a popup window for Coinbase keys.coinbase.com (or another url)
 * to send and receive messages.
 *
 * This class is responsible for opening a popup window, posting messages to it,
 * and listening for responses.
 *
 * It also handles cleanup of event listeners and the popup window itself when necessary.
 */
var Communicator = /*#__PURE__*/_createClass(function Communicator(_ref) {
  var _this = this;
  var _ref$url = _ref.url,
    url = _ref$url === void 0 ? CB_KEYS_URL : _ref$url,
    metadata = _ref.metadata,
    preference = _ref.preference;
  _classCallCheck(this, Communicator);
  this.popup = null;
  this.listeners = new Map();
  /**
   * Posts a message to the popup window
   */
  this.postMessage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(message) {
      var popup;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.waitForPopupLoaded();
          case 2:
            popup = _context.sent;
            popup.postMessage(message, _this.url.origin);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Posts a request to the popup window and waits for a response
   */
  this.postRequestAndWaitForResponse = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
      var responsePromise;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            responsePromise = _this.onMessage(function (_ref4) {
              var requestId = _ref4.requestId;
              return requestId === request.id;
            });
            _this.postMessage(request);
            _context2.next = 4;
            return responsePromise;
          case 4:
            return _context2.abrupt("return", _context2.sent);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Listens for messages from the popup window that match a given predicate.
   */
  this.onMessage = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(predicate) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              var _listener = function listener(event) {
                if (event.origin !== _this.url.origin) return; // origin validation
                var message = event.data;
                if (predicate(message)) {
                  resolve(message);
                  window.removeEventListener('message', _listener);
                  _this.listeners["delete"](_listener);
                }
              };
              window.addEventListener('message', _listener);
              _this.listeners.set(_listener, {
                reject: reject
              });
            }));
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Closes the popup, rejects all requests and clears the listeners
   */
  this.disconnect = function () {
    // Note: keys popup handles closing itself. this is a fallback.
    closePopup(_this.popup);
    _this.popup = null;
    _this.listeners.forEach(function (_ref6, listener) {
      var reject = _ref6.reject;
      reject(standardErrors.provider.userRejectedRequest('Request rejected'));
      window.removeEventListener('message', listener);
    });
    _this.listeners.clear();
  };
  /**
   * Waits for the popup window to fully load and then sends a version message.
   */
  this.waitForPopupLoaded = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(_this.popup && !_this.popup.closed)) {
            _context4.next = 3;
            break;
          }
          // In case the user un-focused the popup between requests, focus it again
          _this.popup.focus();
          return _context4.abrupt("return", _this.popup);
        case 3:
          _this.popup = openPopup(_this.url);
          _this.onMessage(function (_ref8) {
            var event = _ref8.event;
            return event === 'PopupUnload';
          }).then(_this.disconnect)["catch"](function () {});
          return _context4.abrupt("return", _this.onMessage(function (_ref9) {
            var event = _ref9.event;
            return event === 'PopupLoaded';
          }).then(function (message) {
            _this.postMessage({
              requestId: message.id,
              data: {
                version: VERSION,
                metadata: _this.metadata,
                preference: _this.preference,
                location: window.location.toString()
              }
            });
          }).then(function () {
            if (!_this.popup) throw standardErrors.rpc.internal();
            return _this.popup;
          }));
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  this.url = new URL(url);
  this.metadata = metadata;
  this.preference = preference;
});

// TODO: error should not depend on walletlink. revisit this.
/**
 * Serializes an error to a format that is compatible with the Ethereum JSON RPC error format.
 * See https://docs.cloud.coinbase.com/wallet-sdk/docs/errors
 * for more information.
 */
function serializeError(error) {
  var serialized = serialize(getErrorObject(error), {
    shouldIncludeStack: true
  });
  var docUrl = new URL('https://docs.cloud.coinbase.com/wallet-sdk/docs/errors');
  docUrl.searchParams.set('version', VERSION);
  docUrl.searchParams.set('code', serialized.code.toString());
  docUrl.searchParams.set('message', serialized.message);
  return Object.assign(Object.assign({}, serialized), {
    docUrl: docUrl.href
  });
}
/**
 * Converts an error to a serializable object.
 */
function getErrorObject(error) {
  var _a;
  if (typeof error === 'string') {
    return {
      message: error,
      code: standardErrorCodes.rpc.internal
    };
  } else if (isErrorResponse(error)) {
    var message = error.errorMessage;
    var code = (_a = error.errorCode) !== null && _a !== void 0 ? _a : message.match(/(denied|rejected)/i) ? standardErrorCodes.provider.userRejectedRequest : undefined;
    return Object.assign(Object.assign({}, error), {
      message: message,
      code: code,
      data: {
        method: error.method
      }
    });
  }
  return error;
}

var eventemitter3$1 = {exports: {}};

var eventemitter3 = eventemitter3$1.exports;
(function (module) {
  'use strict';

  var has = Object.prototype.hasOwnProperty,
    prefix = '~';

  /**
   * Constructor to create a storage for our `EE` objects.
   * An `Events` instance is a plain object whose properties are event names.
   *
   * @constructor
   * @private
   */
  function Events() {}

  //
  // We try to not inherit from `Object.prototype`. In some engines creating an
  // instance in this way is faster than calling `Object.create(null)` directly.
  // If `Object.create(null)` is not supported we prefix the event names with a
  // character to make sure that the built-in object properties are not
  // overridden or used as an attack vector.
  //
  if (Object.create) {
    Events.prototype = Object.create(null);

    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
  }

  /**
   * Representation of a single event listener.
   *
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
   * @constructor
   * @private
   */
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }

  /**
   * Add a listener for a given event.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} once Specify if the listener is a one-time listener.
   * @returns {EventEmitter}
   * @private
   */
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
      throw new TypeError('The listener must be a function');
    }
    var listener = new EE(fn, context || emitter, once),
      evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
    return emitter;
  }

  /**
   * Clear event by name.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} evt The Event name.
   * @private
   */
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
  }

  /**
   * Minimal `EventEmitter` interface that is molded against the Node.js
   * `EventEmitter` interface.
   *
   * @constructor
   * @public
   */
  function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
  }

  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   *
   * @returns {Array}
   * @public
   */
  EventEmitter.prototype.eventNames = function eventNames() {
    var names = [],
      events,
      name;
    if (this._eventsCount === 0) return names;
    for (name in events = this._events) {
      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
  };

  /**
   * Return the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Array} The registered listeners.
   * @public
   */
  EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event,
      handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [handlers.fn];
    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
      ee[i] = handlers[i].fn;
    }
    return ee;
  };

  /**
   * Return the number of listeners listening to a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Number} The number of listeners.
   * @public
   */
  EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event,
      listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
  };

  /**
   * Calls each of the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Boolean} `true` if the event had listeners, else `false`.
   * @public
   */
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt],
      len = arguments.length,
      args,
      i;
    if (listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }
      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length,
        j;
      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          case 4:
            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
            break;
          default:
            if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
              args[j - 1] = arguments[j];
            }
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
    return true;
  };

  /**
   * Add a listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };

  /**
   * Add a one-time listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };

  /**
   * Remove the listeners of a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn Only remove the listeners that match this function.
   * @param {*} context Only remove the listeners that have this context.
   * @param {Boolean} once Only remove one-time listeners.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
      if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
          events.push(listeners[i]);
        }
      }

      //
      // Reset the array, or remove it completely if we have no more listeners.
      //
      if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
    }
    return this;
  };

  /**
   * Remove all listeners, or those of the specified event.
   *
   * @param {(String|Symbol)} [event] The event name.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }
    return this;
  };

  //
  // Alias methods names because people roll like that.
  //
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  //
  // Expose the prefix.
  //
  EventEmitter.prefixed = prefix;

  //
  // Allow `EventEmitter` to be imported as module namespace.
  //
  EventEmitter.EventEmitter = EventEmitter;

  //
  // Expose the module.
  //
  if ('undefined' !== 'object') {
    module.exports = EventEmitter;
  }
})(eventemitter3$1);
var eventemitter3Exports = eventemitter3$1.exports;
var EventEmitter = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

var ProviderEventEmitter = /*#__PURE__*/function (_EventEmitter) {
  function ProviderEventEmitter() {
    _classCallCheck(this, ProviderEventEmitter);
    return _callSuper(this, ProviderEventEmitter, arguments);
  }
  _inherits(ProviderEventEmitter, _EventEmitter);
  return _createClass(ProviderEventEmitter);
}(EventEmitter);

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var CoinbaseWalletProvider = /*#__PURE__*/function (_ProviderEventEmitter) {
  function CoinbaseWalletProvider(_a) {
    var _this;
    _classCallCheck(this, CoinbaseWalletProvider);
    var metadata = _a.metadata,
      _b = _a.preference,
      keysUrl = _b.keysUrl,
      preference = __rest(_b, ["keysUrl"]);
    _this = _callSuper(this, CoinbaseWalletProvider);
    _this.signer = null;
    _this.isCoinbaseWallet = true;
    _this.metadata = metadata;
    _this.preference = preference;
    _this.communicator = new Communicator({
      url: keysUrl,
      metadata: metadata,
      preference: preference
    });
    var signerType = loadSignerType();
    if (signerType) {
      _this.signer = _this.initSigner(signerType);
    }
    return _this;
  }
  _inherits(CoinbaseWalletProvider, _ProviderEventEmitter);
  return _createClass(CoinbaseWalletProvider, [{
    key: "request",
    value: function () {
      var _request = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
        var signerType, signer, code;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              checkErrorForInvalidRequestArgs(args);
              if (this.signer) {
                _context.next = 18;
                break;
              }
              _context.t0 = args.method;
              _context.next = _context.t0 === 'eth_requestAccounts' ? 6 : _context.t0 === 'net_version' ? 15 : _context.t0 === 'eth_chainId' ? 16 : 17;
              break;
            case 6:
              _context.next = 8;
              return this.requestSignerSelection(args);
            case 8:
              signerType = _context.sent;
              signer = this.initSigner(signerType);
              _context.next = 12;
              return signer.handshake(args);
            case 12:
              this.signer = signer;
              storeSignerType(signerType);
              return _context.abrupt("break", 18);
            case 15:
              return _context.abrupt("return", 1);
            case 16:
              return _context.abrupt("return", hexStringFromNumber(1));
            case 17:
              throw standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
            case 18:
              return _context.abrupt("return", this.signer.request(args));
            case 21:
              _context.prev = 21;
              _context.t1 = _context["catch"](0);
              code = _context.t1.code;
              if (code === standardErrorCodes.provider.unauthorized) this.disconnect();
              return _context.abrupt("return", Promise.reject(serializeError(_context.t1)));
            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 21]]);
      }));
      function request(_x) {
        return _request.apply(this, arguments);
      }
      return request;
    }() /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
  }, {
    key: "enable",
    value: (function () {
      var _enable = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              console.warn(".enable() has been deprecated. Please use .request({ method: \"eth_requestAccounts\" }) instead.");
              _context2.next = 3;
              return this.request({
                method: 'eth_requestAccounts'
              });
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function enable() {
        return _enable.apply(this, arguments);
      }
      return enable;
    }())
  }, {
    key: "disconnect",
    value: function () {
      var _disconnect = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _a;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (_a = this.signer) === null || _a === void 0 ? void 0 : _a.cleanup();
            case 2:
              this.signer = null;
              ScopedLocalStorage.clearAll();
              this.emit('disconnect', standardErrors.provider.disconnected('User initiated disconnection'));
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function disconnect() {
        return _disconnect.apply(this, arguments);
      }
      return disconnect;
    }()
  }, {
    key: "requestSignerSelection",
    value: function requestSignerSelection(handshakeRequest) {
      return fetchSignerType({
        communicator: this.communicator,
        preference: this.preference,
        metadata: this.metadata,
        handshakeRequest: handshakeRequest,
        callback: this.emit.bind(this)
      });
    }
  }, {
    key: "initSigner",
    value: function initSigner(signerType) {
      return createSigner({
        signerType: signerType,
        metadata: this.metadata,
        communicator: this.communicator,
        callback: this.emit.bind(this)
      });
    }
  }]);
}(ProviderEventEmitter);

/**
 * Validates user supplied preferences. Throws if keys are not valid.
 * @param preference
 */
function validatePreferences(preference) {
  if (!preference) {
    return;
  }
  if (!['all', 'smartWalletOnly', 'eoaOnly'].includes(preference.options)) {
    throw new Error("Invalid options: ".concat(preference.options));
  }
  if (preference.attribution) {
    if (preference.attribution.auto !== undefined && preference.attribution.dataSuffix !== undefined) {
      throw new Error("Attribution cannot contain both auto and dataSuffix properties");
    }
  }
}

/**
 * CoinbaseWalletSDK
 *
 * @deprecated CoinbaseWalletSDK is deprecated and will likely be removed in a future major version release.
 * It's recommended to use `createCoinbaseWalletSDK` instead.
 */
var CoinbaseWalletSDK = /*#__PURE__*/function () {
  function CoinbaseWalletSDK(metadata) {
    _classCallCheck(this, CoinbaseWalletSDK);
    this.metadata = {
      appName: metadata.appName || 'Dapp',
      appLogoUrl: metadata.appLogoUrl || getFavicon(),
      appChainIds: metadata.appChainIds || []
    };
    this.storeLatestVersion();
    void checkCrossOriginOpenerPolicy();
  }
  return _createClass(CoinbaseWalletSDK, [{
    key: "makeWeb3Provider",
    value: function makeWeb3Provider() {
      var preference = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        options: 'all'
      };
      var _a;
      validatePreferences(preference);
      var params = {
        metadata: this.metadata,
        preference: preference
      };
      return (_a = getCoinbaseInjectedProvider(params)) !== null && _a !== void 0 ? _a : new CoinbaseWalletProvider(params);
    }
    /**
     * Official Coinbase Wallet logo for developers to use on their frontend
     * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
     * @param width Width of the logo (Optional)
     * @returns SVG Data URI
     */
  }, {
    key: "getCoinbaseWalletLogo",
    value: function getCoinbaseWalletLogo(type) {
      var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 240;
      return walletLogo(type, width);
    }
  }, {
    key: "storeLatestVersion",
    value: function storeLatestVersion() {
      var versionStorage = new ScopedLocalStorage('CBWSDK');
      versionStorage.setItem('VERSION', VERSION);
    }
  }]);
}();

function createCoinbaseWalletProvider(options) {
  var _a;
  var params = {
    metadata: options.metadata,
    preference: options.preference
  };
  return (_a = getCoinbaseInjectedProvider(params)) !== null && _a !== void 0 ? _a : new CoinbaseWalletProvider(params);
}

var DEFAULT_PREFERENCE = {
  options: 'all'
};
/**
 * Create a Coinbase Wallet SDK instance.
 * @param params - Options to create a Coinbase Wallet SDK instance.
 * @returns A Coinbase Wallet SDK object.
 */
function createCoinbaseWalletSDK(params) {
  var _a;
  var versionStorage = new ScopedLocalStorage('CBWSDK');
  versionStorage.setItem('VERSION', VERSION);
  void checkCrossOriginOpenerPolicy();
  var options = {
    metadata: {
      appName: params.appName || 'Dapp',
      appLogoUrl: params.appLogoUrl || '',
      appChainIds: params.appChainIds || []
    },
    preference: Object.assign(DEFAULT_PREFERENCE, (_a = params.preference) !== null && _a !== void 0 ? _a : {})
  };
  /**
   * Validate user supplied preferences. Throws if key/values are not valid.
   */
  validatePreferences(options.preference);
  var provider = null;
  return {
    getProvider: function getProvider() {
      if (!provider) {
        provider = createCoinbaseWalletProvider(options);
      }
      return provider;
    }
  };
}

// Copyright (c) 2018-2024 Coinbase, Inc. <https://www.coinbase.com/>

export { CoinbaseWalletSDK, createCoinbaseWalletSDK, CoinbaseWalletSDK as default };
//# sourceMappingURL=coinbase.js.map
