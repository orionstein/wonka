function k(a, b) {
  b.tag = a;
  return b;
}

var m = [];

function p(a) {
  if (void 0 === a) {
    return ((a = [m, 0]).tag = 256), a;
  }
  null !== a && a[0] === m && ((a = [m, (a[1] + 1) | 0]).tag = 256);
  return a;
}

function q(a) {
  if (null !== a && a[0] === m) {
    if (0 !== (a = a[1])) {
      return [m, (a - 1) | 0];
    }
  } else {
    return a;
  }
}

function r() {
  return 0;
}

function t(a, b) {
  let c = !1,
    e = !1,
    d = !1;
  return a(
    k(0, [
      function(g) {
        if (g) {
          c = !0;
        } else if (e) {
          d = !0;
        } else {
          for (e = d = !0; d && !c; ) {
            void 0 !== (g = b()) ? ((d = !1), a(k(1, [q(g)]))) : ((c = !0), a(0));
          }
          e = !1;
        }
        return 0;
      }
    ])
  );
}

function u(a) {
  return function(b) {
    var c = a.length;
    let e = 0;
    return t(b, function() {
      if (e < c) {
        var d = a[e];
        e = (e + 1) | 0;
        return p(d);
      }
    });
  };
}

function w() {
  return 0;
}

function y(a) {
  return a(0);
}

function z(a) {
  return a(0);
}

function A(a) {
  let b = !1;
  return a(
    k(0, [
      function(c) {
        return c ? ((b = !0), 0) : b ? 0 : a(0);
      }
    ])
  );
}

function B(a, b, c) {
  for (var e = Array(c), d = 0; d < c; ) {
    (e[d] = a[b]), (d = (d + 1) | 0), (b = (b + 1) | 0);
  }
  return e;
}

function C(a, b) {
  for (;;) {
    var c = b;
    var e = 0 === (b = a.length) ? 1 : b;
    if (0 === (b = (e - c.length) | 0)) {
      return a.apply(null, c);
    }
    if (0 > b) {
      (b = B(c, e, 0 | -b)), (a = a.apply(null, B(c, 0, e)));
    } else {
      return (function(c, a) {
        return function(d) {
          return C(c, a.concat([d]));
        };
      })(a, c);
    }
  }
}

function E(a, b) {
  var c = a.length;
  return 1 === c
    ? a(b)
    : (function D(a, b, c) {
        switch (c) {
          case 1:
            return a(b);

          case 2:
            return function(c) {
              return a(b, c);
            };

          case 3:
            return function(c, d) {
              return a(b, c, d);
            };

          case 4:
            return function(c, d, g) {
              return a(b, c, d, g);
            };

          case 5:
            return function(c, d, g, f) {
              return a(b, c, d, g, f);
            };

          case 6:
            return function(c, d, g, f, h) {
              return a(b, c, d, g, f, h);
            };

          case 7:
            return function(c, d, g, f, h, l) {
              return a(b, c, d, g, f, h, l);
            };

          default:
            return C(a, [b]);
        }
      })(a, b, c);
}

function G(a, b, c) {
  var e = a.length;
  return 2 === e
    ? a(b, c)
    : (function F(a, b, c, e) {
        switch (e) {
          case 1:
            return C(a(b), [c]);

          case 2:
            return a(b, c);

          case 3:
            return function(d) {
              return a(b, c, d);
            };

          case 4:
            return function(d, e) {
              return a(b, c, d, e);
            };

          case 5:
            return function(d, e, f) {
              return a(b, c, d, e, f);
            };

          case 6:
            return function(d, e, f, h) {
              return a(b, c, d, e, f, h);
            };

          case 7:
            return function(d, e, f, h, l) {
              return a(b, c, d, e, f, h, l);
            };

          default:
            return C(a, [b, c]);
        }
      })(a, b, c, e);
}

function I(a, b, c, e) {
  var d = a.length;
  return 3 === d
    ? a(b, c, e)
    : (function H(a, b, c, e, d) {
        switch (d) {
          case 1:
            return C(a(b), [c, e]);

          case 2:
            return C(a(b, c), [e]);

          case 3:
            return a(b, c, e);

          case 4:
            return function(d) {
              return a(b, c, e, d);
            };

          case 5:
            return function(d, f) {
              return a(b, c, e, d, f);
            };

          case 6:
            return function(d, f, h) {
              return a(b, c, e, d, f, h);
            };

          case 7:
            return function(d, f, h, l) {
              return a(b, c, e, d, f, h, l);
            };

          default:
            return C(a, [b, c, e]);
        }
      })(a, b, c, e, d);
}

function J(a, b) {
  return function(c) {
    let e = r,
      d = r,
      g = void 0,
      f = void 0,
      h = !1,
      l = 0,
      n = !1;
    E(a, function(a) {
      var b = f;
      if ('number' == typeof a) {
        if (1 > l) {
          return (l = (l + 1) | 0), 0;
        }
        if (n) {
          return 0;
        }
        n = !0;
        return c(0);
      }
      if (a.tag) {
        a = a[0];
        if (void 0 !== b) {
          if (n) {
            return 0;
          }
          g = p(a);
          h = !1;
          return c(k(1, [[a, q(b)]]));
        }
        g = p(a);
        return h ? ((h = !1), 0) : d(0);
      }
      e = a[0];
      return 0;
    });
    E(b, function(a) {
      var b = g;
      if ('number' == typeof a) {
        if (1 > l) {
          return (l = (l + 1) | 0), 0;
        }
        if (n) {
          return 0;
        }
        n = !0;
        return c(0);
      }
      if (a.tag) {
        a = a[0];
        if (void 0 !== b) {
          if (n) {
            return 0;
          }
          f = p(a);
          h = !1;
          return c(k(1, [[q(b), a]]));
        }
        f = p(a);
        return h ? ((h = !1), 0) : e(0);
      }
      d = a[0];
      return 0;
    });
    return c(
      k(0, [
        function(a) {
          if (n) {
            return 0;
          }
          if (a) {
            return (n = !0), e(1), d(1);
          }
          if (h) {
            return 0;
          }
          h = !0;
          e(a);
          return d(a);
        }
      ])
    );
  };
}

function K(a) {
  return function(b) {
    return function(c) {
      function e(a) {
        n = !0;
        return E(a, d);
      }
      function d(d) {
        if ('number' == typeof d) {
          if (n) {
            n = !1;
            if (void 0 !== (d = g.shift())) {
              return e(a(q(d)));
            }
            if (v) {
              return c(0);
            }
            if (h) {
              return 0;
            }
            h = !0;
            return f(0);
          }
          return 0;
        }
        if (d.tag) {
          return n ? (c(d), x ? ((x = !1), 0) : l(0)) : 0;
        }
        l = d = d[0];
        x = !1;
        return d(0);
      }
      let g = [],
        f = r,
        h = !1,
        l = r,
        n = !1,
        x = !1,
        v = !1;
      E(b, function(d) {
        if ('number' == typeof d) {
          if (v) {
            return 0;
          }
          v = !0;
          return n || 0 !== g.length ? 0 : c(0);
        }
        if (d.tag) {
          if (v) {
            return 0;
          }
          d = d[0];
          h = !1;
          return n ? (g.push(d), 0) : e(a(d));
        }
        f = d[0];
        return 0;
      });
      return c(
        k(0, [
          function(a) {
            if (a) {
              if ((v || ((v = !0), f(1)), n)) {
                return (n = !1), l(1);
              }
            } else if ((v || h || ((h = !0), f(0)), n && !x)) {
              return (x = !0), l(0);
            }
            return 0;
          }
        ])
      );
    };
  };
}

function L(a) {
  return a;
}

function M(a) {
  return a;
}

function N(a) {
  return a(0);
}

function O(a) {
  return function(b) {
    return function(c) {
      let d = r,
        g = !1,
        f = [],
        h = !1;
      E(b, function(b) {
        if ('number' == typeof b) {
          if (h) {
            return 0;
          }
          h = !0;
          return 0 === f.length ? c(0) : 0;
        }
        if (b.tag) {
          if (h) {
            return 0;
          }
          g = !1;
          !(function e(a) {
            function e(a) {
              return a !== b;
            }
            let b = r;
            return E(a, function(a) {
              if ('number' == typeof a) {
                if (0 !== f.length) {
                  f = f.filter(e);
                  a = 0 === f.length;
                  if (h && a) {
                    return c(0);
                  }
                  if (!g && a) {
                    return (g = !0), d(0);
                  }
                }
                return 0;
              }
              if (a.tag) {
                return 0 !== f.length ? (c(k(1, [a[0]])), b(0)) : 0;
              }
              b = a = a[0];
              f = f.concat(a);
              return a(0);
            });
          })(a(b[0]));
          if (g) {
            return 0;
          }
          g = !0;
          return d(0);
        }
        d = b[0];
        return 0;
      });
      return c(
        k(0, [
          function(a) {
            a
              ? (h || ((h = !0), d(a)),
                f.forEach(function c(c) {
                  return c(a);
                }),
                (f = []))
              : (g || h ? (g = !1) : ((g = !0), d(0)), f.forEach(N));
            return 0;
          }
        ])
      );
    };
  };
}

function P(a) {
  return a;
}

function Q(a) {
  return a;
}

function R(a) {
  return O(Q)(a);
}

function S(a) {
  return function(b) {
    return function(c) {
      let e = !1;
      return E(b, function(d) {
        if ('number' == typeof d) {
          if (e) {
            return 0;
          }
          e = !0;
          return c(d);
        }
        if (d.tag) {
          if (e) {
            return 0;
          }
          a(d[0]);
          return c(d);
        }
        var b = d[0];
        return c(
          k(0, [
            function(a) {
              if (e) {
                return 0;
              }
              a && (e = !0);
              return b(a);
            }
          ])
        );
      });
    };
  };
}

function T(a, b) {
  return function(c) {
    return function(e) {
      let d = b;
      return E(c, function(c) {
        'number' == typeof c
          ? (c = 0)
          : c.tag
          ? ((d = a(d, c[0])), (c = k(1, [d])))
          : (c = k(0, [c[0]]));
        return e(c);
      });
    };
  };
}

function U(a) {
  return a(0);
}

function V(a) {
  return function(b) {
    return function(c) {
      function e(a) {
        if (h) {
          if ('number' == typeof a) {
            h = !1;
            if (n) {
              return c(a);
            }
            if (g) {
              return 0;
            }
            g = !0;
            return d(0);
          }
          if (a.tag) {
            return c(a), l ? ((l = !1), 0) : f(0);
          }
          f = a = a[0];
          l = !1;
          return a(0);
        }
        return 0;
      }
      let d = r,
        g = !1,
        f = r,
        h = !1,
        l = !1,
        n = !1;
      E(b, function(b) {
        if ('number' == typeof b) {
          if (n) {
            return 0;
          }
          n = !0;
          return h ? 0 : c(0);
        }
        if (b.tag) {
          if (n) {
            return 0;
          }
          h && (f(1), (f = r));
          g ? (g = !1) : ((g = !0), d(0));
          b = a(b[0]);
          h = !0;
          return E(b, e);
        }
        d = b[0];
        return 0;
      });
      return c(
        k(0, [
          function(a) {
            if (a) {
              if ((n || ((n = !0), d(1)), h)) {
                return (h = !1), f(1);
              }
            } else if ((n || g || ((g = !0), d(0)), h && !l)) {
              return (l = !0), f(0);
            }
            return 0;
          }
        ])
      );
    };
  };
}

function W(a) {
  return a;
}

function X(a) {
  return function(b) {
    return function(c) {
      function e() {
        return g.shift();
      }
      let d = r;
      var g = [];
      return E(b, function(b) {
        if ('number' == typeof b) {
          return t(c, e);
        }
        if (b.tag) {
          return g.length >= a && 0 < a && g.shift(), g.push(b[0]), d(0);
        }
        b = b[0];
        if (0 >= a) {
          return b(1), A(c);
        }
        d = b;
        return b(0);
      });
    };
  };
}

function Y(a) {
  return function(b) {
    let c = r,
      e = !1;
    E(b, function(d) {
      if ('number' == typeof d) {
        return (e = !0), 0;
      }
      if (d.tag) {
        if (e) {
          return 0;
        }
        a(d[0]);
        return c(0);
      }
      c = d = d[0];
      return d(0);
    });
    return {
      unsubscribe: function() {
        if (e) {
          return 0;
        }
        e = !0;
        return c(1);
      }
    };
  };
}

function aa() {
  return 0;
}

var Z =
  'function' == typeof Symbol
    ? Symbol.observable || (Symbol.observable = Symbol('observable'))
    : '@@observable';

function ba() {
  return 0;
}

function ca(a, b, c) {
  a.addEventListener(b, c);
}

function da(a, b, c) {
  a.removeEventListener(b, c);
}

function ea(a, b) {
  return function(c) {
    function e(a) {
      return c(k(1, [a]));
    }
    c(
      k(0, [
        function(c) {
          return c ? I(da, a, b, e) : 0;
        }
      ])
    );
    return I(ca, a, b, e);
  };
}

function buffer(a) {
  return function(b) {
    return function(c) {
      function e(a) {
        if ('number' == typeof a) {
          if (l) {
            return 0;
          }
          l = !0;
          g(1);
          0 < d.length && c(k(1, [d]));
          return c(0);
        }
        if (a.tag) {
          if (l || 0 >= d.length) {
            return 0;
          }
          a = d;
          d = [];
          return c(k(1, [a]));
        }
        f = a[0];
        return 0;
      }
      let d = [],
        g = r,
        f = r,
        h = !1,
        l = !1;
      E(b, function(b) {
        if ('number' == typeof b) {
          if (l) {
            return 0;
          }
          l = !0;
          f(1);
          0 < d.length && c(k(1, [d]));
          return c(0);
        }
        if (b.tag) {
          if (l) {
            return 0;
          }
          d.push(b[0]);
          if (h) {
            return (h = !1), 0;
          }
          h = !0;
          g(0);
          return f(0);
        }
        g = b[0];
        return E(a, e);
      });
      return c(
        k(0, [
          function(a) {
            if (l) {
              return 0;
            }
            if (a) {
              return (l = !0), g(1), f(1);
            }
            if (h) {
              return 0;
            }
            h = !0;
            g(0);
            return f(0);
          }
        ])
      );
    };
  };
}

function combine(a, b) {
  return G(J, a, b);
}

function concat(a) {
  return K(M)(u(a));
}

function concatAll(a) {
  return K(L)(a);
}

function debounce(a) {
  return function(b) {
    return function(c) {
      function e() {
        var a = d;
        void 0 !== a && ((d = void 0), clearTimeout(q(a)));
        return 0;
      }
      let d = void 0,
        g = !1,
        f = !1;
      return E(b, function(b) {
        if ('number' == typeof b) {
          if (f) {
            return 0;
          }
          f = !0;
          return void 0 !== d ? ((g = !0), 0) : c(0);
        }
        if (b.tag) {
          return (
            f ||
              (e(),
              (d = p(
                setTimeout(function h() {
                  d = void 0;
                  c(b);
                  return g ? c(0) : 0;
                }, a(b[0]))
              ))),
            0
          );
        }
        var n = b[0];
        return c(
          k(0, [
            function(a) {
              return f ? 0 : a ? ((f = !0), (g = !1), e(), n(1)) : n(0);
            }
          ])
        );
      });
    };
  };
}

function delay(a) {
  return function(b) {
    return function(c) {
      let e = 0;
      return E(b, function(d) {
        if ('number' != typeof d && !d.tag) {
          return c(d);
        }
        e = (e + 1) | 0;
        setTimeout(function() {
          return 0 !== e ? ((e = (e - 1) | 0), c(d)) : 0;
        }, a);
        return 0;
      });
    };
  };
}

function filter(a) {
  return function(b) {
    return function(c) {
      let e = r;
      return E(b, function(d) {
        if ('number' == typeof d) {
          return c(d);
        }
        if (d.tag) {
          return a(d[0]) ? c(d) : e(0);
        }
        e = d[0];
        return c(d);
      });
    };
  };
}

function forEach(a) {
  return function(b) {
    Y(a)(b);
    return 0;
  };
}

function fromCallbag(a) {
  return function(b) {
    return G(a, 0, function(a, e) {
      switch (a) {
        case 0:
          return b(
            k(0, [
              function c(a) {
                return a ? e(2) : e(1);
              }
            ])
          );

        case 1:
          return b(k(1, [e]));

        case 2:
          return b(0);
      }
    });
  };
}

function fromDomEvent(a, b) {
  return G(ea, a, b);
}

function fromList(a) {
  return function(b) {
    let c = a;
    return t(b, function() {
      var a = c;
      if (a) {
        return (c = a[1]), p(a[0]);
      }
    });
  };
}

function fromObservable(a) {
  var b = void 0 !== a[Z] ? a[Z]() : a;
  return function(a) {
    var c = b.subscribe({
      next: function(c) {
        return a(k(1, [c]));
      },
      complete: function() {
        return a(0);
      },
      error: ba
    });
    return a(
      k(0, [
        function(a) {
          return a ? c.unsubscribe() : 0;
        }
      ])
    );
  };
}

function fromPromise(a) {
  return function(b) {
    let c = !1;
    a.then(function(a) {
      c || (b(k(1, [a])), b(0));
      return Promise.resolve(0);
    });
    return b(
      k(0, [
        function(a) {
          a && (c = !0);
          return 0;
        }
      ])
    );
  };
}

function fromValue(a) {
  return function(b) {
    let c = !1;
    return b(
      k(0, [
        function(e) {
          if (e) {
            return (c = !0), 0;
          }
          if (c) {
            return 0;
          }
          c = !0;
          b(k(1, [a]));
          return b(0);
        }
      ])
    );
  };
}

function interval(a) {
  return function(b) {
    let c = 0;
    var e = setInterval(function() {
      var a = c;
      c = (c + 1) | 0;
      return b(k(1, [a]));
    }, a);
    return b(
      k(0, [
        function(a) {
          a && clearInterval(e);
          return 0;
        }
      ])
    );
  };
}

function make(a) {
  return function(b) {
    let c = w,
      e = !1;
    c = a({
      next: function(a) {
        return e ? 0 : b(k(1, [a]));
      },
      complete: function() {
        if (e) {
          return 0;
        }
        e = !0;
        return b(0);
      }
    });
    return b(
      k(0, [
        function(a) {
          return a && !e ? ((e = !0), c()) : 0;
        }
      ])
    );
  };
}

function makeReplaySubject(a) {
  let b = [],
    c = [],
    e = !1;
  return {
    source: function(a) {
      function d(c) {
        return c !== a;
      }
      let f = !1;
      c = c.concat(a);
      a(
        k(0, [
          function(a) {
            a && ((c = c.filter(d)), (f = !0));
            return 0;
          }
        ])
      );
      b.forEach(function(c) {
        return f ? 0 : a(k(1, [c]));
      });
      return e ? a(0) : 0;
    },
    next: function(d) {
      if (!e) {
        var f = b.concat(d);
        f.length > a && (f = f.slice(1, f.length));
        b = f;
        c.forEach(function g(a) {
          return a(k(1, [d]));
        });
      }
      return 0;
    },
    complete: function() {
      e || ((e = !0), c.forEach(z));
      return 0;
    }
  };
}

function makeSubject() {
  let a = [],
    b = !1;
  return {
    source: function(c) {
      function b(a) {
        return a !== c;
      }
      a = a.concat(c);
      return c(
        k(0, [
          function(c) {
            c && (a = a.filter(b));
            return 0;
          }
        ])
      );
    },
    next: function(c) {
      b ||
        a.forEach(function e(a) {
          return a(k(1, [c]));
        });
      return 0;
    },
    complete: function() {
      b || ((b = !0), a.forEach(y));
      return 0;
    }
  };
}

function map(a) {
  return function(b) {
    return function(c) {
      return E(b, function(b) {
        b = 'number' == typeof b ? 0 : b.tag ? k(1, [a(b[0])]) : k(0, [b[0]]);
        return c(b);
      });
    };
  };
}

function merge(a) {
  return O(P)(u(a));
}

function never(a) {
  return a(k(0, [r]));
}

function onEnd(a) {
  return function(b) {
    return function(c) {
      let e = !1;
      return E(b, function(b) {
        if ('number' == typeof b) {
          if (e) {
            return 0;
          }
          e = !0;
          c(b);
          return a();
        }
        if (b.tag) {
          return e ? 0 : c(b);
        }
        var d = b[0];
        return c(
          k(0, [
            function(c) {
              return e ? 0 : c ? ((e = !0), d(c), a()) : d(c);
            }
          ])
        );
      });
    };
  };
}

function onStart(a) {
  return function(b) {
    return function(c) {
      return E(b, function(b) {
        if ('number' == typeof b || b.tag) {
          return c(b);
        }
        c(b);
        return a();
      });
    };
  };
}

function pipe() {
  for (var a = arguments, b = arguments[0], c = 1, e = arguments.length; c < e; c++) {
    b = a[c](b);
  }
  return b;
}

function publish(a) {
  return Y(aa)(a);
}

function sample(a) {
  return function(b) {
    return function(c) {
      let e = r,
        d = r,
        g = void 0,
        f = !1,
        h = !1;
      E(b, function(a) {
        if ('number' == typeof a) {
          if (h) {
            return 0;
          }
          h = !0;
          d(1);
          return c(0);
        }
        if (a.tag) {
          g = p(a[0]);
          if (f) {
            return (f = !1), 0;
          }
          f = !0;
          d(0);
          return e(0);
        }
        e = a[0];
        return 0;
      });
      E(a, function(a) {
        var b = g;
        if ('number' == typeof a) {
          if (h) {
            return 0;
          }
          h = !0;
          e(1);
          return c(0);
        }
        if (a.tag) {
          if (void 0 === b || h) {
            return 0;
          }
          g = void 0;
          return c(k(1, [q(b)]));
        }
        d = a[0];
        return 0;
      });
      return c(
        k(0, [
          function(a) {
            if (h) {
              return 0;
            }
            if (a) {
              return (h = !0), e(1), d(1);
            }
            if (f) {
              return 0;
            }
            f = !0;
            e(0);
            return d(0);
          }
        ])
      );
    };
  };
}

function scan(a, b) {
  return G(T, a, b);
}

function share(a) {
  function b(a) {
    'number' == typeof a
      ? (c.forEach(U), (c = []))
      : a.tag
      ? ((d = !1),
        c.forEach(function b(c) {
          return c(a);
        }))
      : (e = a[0]);
    return 0;
  }
  let c = [],
    e = r,
    d = !1;
  return function(g) {
    function f(a) {
      return a !== g;
    }
    c = c.concat(g);
    1 === c.length && E(a, b);
    return g(
      k(0, [
        function(a) {
          if (a) {
            return (c = c.filter(f)), 0 === c.length ? e(1) : 0;
          }
          if (d) {
            return 0;
          }
          d = !0;
          return e(a);
        }
      ])
    );
  };
}

function skip(a) {
  return function(b) {
    return function(c) {
      let e = r,
        d = a;
      return E(b, function(a) {
        if ('number' == typeof a) {
          return c(a);
        }
        if (a.tag) {
          return 0 < d ? ((d = (d - 1) | 0), e(0)) : c(a);
        }
        e = a[0];
        return c(a);
      });
    };
  };
}

function skipUntil(a) {
  return function(b) {
    return function(c) {
      function e(a) {
        if ('number' == typeof a) {
          return f ? ((l = !0), d(1)) : 0;
        }
        if (a.tag) {
          return (f = !1), g(1);
        }
        g = a = a[0];
        return a(0);
      }
      let d = r,
        g = r,
        f = !0,
        h = !1,
        l = !1;
      E(b, function(b) {
        if ('number' == typeof b) {
          return f && g(1), (l = !0), c(0);
        }
        if (b.tag) {
          if (f || l) {
            if (h) {
              return (h = !1), 0;
            }
            h = !0;
            d(0);
            return g(0);
          }
          h = !1;
          return c(b);
        }
        d = b[0];
        return E(a, e);
      });
      return c(
        k(0, [
          function(a) {
            if (l) {
              return 0;
            }
            if (a) {
              return (l = !0), d(1), f ? g(1) : 0;
            }
            if (h) {
              return 0;
            }
            h = !0;
            f && g(0);
            return d(0);
          }
        ])
      );
    };
  };
}

function skipWhile(a) {
  return function(b) {
    return function(c) {
      let e = r,
        d = !0;
      return E(b, function(b) {
        if ('number' == typeof b) {
          return c(b);
        }
        if (b.tag) {
          if (d) {
            if (a(b[0])) {
              return e(0);
            }
            d = !1;
          }
          return c(b);
        }
        e = b[0];
        return c(b);
      });
    };
  };
}

function switchAll(a) {
  return V(W)(a);
}

function take(a) {
  return function(b) {
    return function(c) {
      let e = !1,
        d = 0,
        g = r;
      E(b, function(b) {
        if ('number' == typeof b) {
          if (e) {
            return 0;
          }
          e = !0;
          return c(0);
        }
        if (b.tag) {
          return d < a && !e && ((d = (d + 1) | 0), c(b), !e && d >= a)
            ? ((e = !0), c(0), g(1))
            : 0;
        }
        b = b[0];
        if (0 >= a) {
          return (e = !0), c(0), b(1);
        }
        g = b;
        return 0;
      });
      return c(
        k(0, [
          function(b) {
            return e ? 0 : b ? ((e = !0), g(1)) : d < a ? g(0) : 0;
          }
        ])
      );
    };
  };
}

function takeUntil(a) {
  return function(b) {
    return function(c) {
      function e(a) {
        if ('number' == typeof a) {
          return 0;
        }
        if (a.tag) {
          return (d = !0), g(1), c(0);
        }
        f = a = a[0];
        return a(0);
      }
      let d = !1,
        g = r,
        f = r;
      E(b, function(b) {
        if ('number' == typeof b) {
          if (d) {
            return 0;
          }
          d = !0;
          f(1);
          return c(0);
        }
        if (b.tag) {
          return d ? 0 : c(b);
        }
        g = b[0];
        return E(a, e);
      });
      return c(
        k(0, [
          function(a) {
            return d ? 0 : a ? ((d = !0), g(1), f(1)) : g(0);
          }
        ])
      );
    };
  };
}

function takeWhile(a) {
  return function(b) {
    return function(c) {
      let e = r,
        d = !1;
      return E(b, function(b) {
        if ('number' == typeof b) {
          if (d) {
            return 0;
          }
          d = !0;
          return c(0);
        }
        if (b.tag) {
          if (d) {
            return 0;
          }
          if (a(b[0])) {
            return c(b);
          }
          d = !0;
          c(0);
          return e(1);
        }
        e = b[0];
        return c(b);
      });
    };
  };
}

function throttle(a) {
  return function(b) {
    return function(c) {
      function e() {
        void 0 !== f && clearTimeout(q(f));
        return 0;
      }
      function d() {
        f = void 0;
        g = !1;
        return 0;
      }
      let g = !1,
        f = void 0;
      return E(b, function(b) {
        if ('number' == typeof b) {
          return e(), c(0);
        }
        if (b.tag) {
          if (g) {
            return 0;
          }
          g = !0;
          e();
          f = p(setTimeout(d, a(b[0])));
          return c(b);
        }
        var h = b[0];
        return c(
          k(0, [
            function(a) {
              return a ? (e(), h(1)) : h(a);
            }
          ])
        );
      });
    };
  };
}

function toArray(a) {
  let b = [],
    c = r,
    e = !1;
  E(a, function(a) {
    if ('number' == typeof a) {
      return (e = !0), 0;
    }
    if (a.tag) {
      return b.push(a[0]), c(0);
    }
    c = a = a[0];
    return a(0);
  });
  e || c(1);
  return b;
}

function toCallbag(a) {
  return function(b, c) {
    return 0 === b
      ? E(a, function e(a) {
          if ('number' == typeof a) {
            return G(c, 2, 0);
          }
          if (a.tag) {
            return G(c, 1, a[0]);
          }
          var b = a[0];
          return G(c, 0, function(a) {
            switch (a) {
              case 0:
                return 0;

              case 1:
                return b(0);

              case 2:
                return b(1);
            }
          });
        })
      : 0;
  };
}

function toObservable(a) {
  var b = {
    subscribe: function(b) {
      let c = r,
        d = !1;
      E(a, function(a) {
        if ('number' == typeof a) {
          return (d = !0), b.complete();
        }
        if (a.tag) {
          if (d) {
            return 0;
          }
          b.next(a[0]);
          return c(0);
        }
        c = a = a[0];
        return a(0);
      });
      return {
        unsubscribe: function() {
          if (d) {
            return 0;
          }
          d = !0;
          return c(1);
        }
      };
    }
  };
  b[Z] = function() {
    return b;
  };
  return b;
}

function toPromise(a) {
  return new Promise(function(b) {
    return E(X(1)(a), function(a) {
      return 'number' == typeof a ? 0 : a.tag ? b(a[0]) : a[0](0);
    });
  });
}

export {
  buffer,
  combine,
  concat,
  concatAll,
  K as concatMap,
  debounce,
  delay,
  A as empty,
  filter,
  R as flatten,
  forEach,
  u as fromArray,
  fromCallbag,
  fromDomEvent,
  fromList,
  fromObservable,
  fromPromise,
  fromValue,
  interval,
  make,
  makeReplaySubject,
  makeSubject,
  map,
  merge,
  R as mergeAll,
  O as mergeMap,
  never,
  onEnd,
  S as onPush,
  onStart,
  pipe,
  publish,
  sample,
  scan,
  share,
  skip,
  skipUntil,
  skipWhile,
  Y as subscribe,
  switchAll,
  V as switchMap,
  take,
  X as takeLast,
  takeUntil,
  takeWhile,
  S as tap,
  throttle,
  toArray,
  toCallbag,
  toObservable,
  toPromise
};
