'use strict';

function __(a, b) {
  b.tag = a;
  return b;
}

var undefinedHeader = [];

function some(a) {
  if (void 0 === a) {
    return ((a = [undefinedHeader, 0]).tag = 256), a;
  }
  null !== a && a[0] === undefinedHeader && ((a = [undefinedHeader, (a[1] + 1) | 0]).tag = 256);
  return a;
}

function valFromOption(a) {
  if (null !== a && a[0] === undefinedHeader) {
    if (0 !== (a = a[1])) {
      return [undefinedHeader, (a - 1) | 0];
    }
  } else {
    return a;
  }
}

function talkbackPlaceholder(a) {
  return 0;
}

function makeTrampoline(a, b) {
  let c = !1,
    e = !1,
    d = !1;
  return a(
    __(0, [
      function(f) {
        if (f) {
          c = !0;
        } else if (e) {
          d = !0;
        } else {
          for (e = d = !0; d && !c; ) {
            void 0 !== (f = b()) ? ((d = !1), a(__(1, [valFromOption(f)]))) : ((c = !0), a(0));
          }
          e = !1;
        }
        return 0;
      }
    ])
  );
}

function fromArray(a) {
  return function(b) {
    var c = a.length;
    let e = 0;
    return makeTrampoline(b, function() {
      if (e < c) {
        var d = a[e];
        e = (e + 1) | 0;
        return some(d);
      }
    });
  };
}

function _ref() {
  return 0;
}

function _ref4(a) {
  return a(0);
}

function _ref7(a) {
  return a(0);
}

function empty(a) {
  let b = !1;
  return a(
    __(0, [
      function(c) {
        return c ? ((b = !0), 0) : b ? 0 : a(0);
      }
    ])
  );
}

var fromArray$1 = fromArray,
  fromList$1 = function fromList(a) {
    return function(b) {
      let c = a;
      return makeTrampoline(b, function() {
        var a = c;
        if (a) {
          return (c = a[1]), some(a[0]);
        }
      });
    };
  },
  fromValue$1 = function fromValue(a) {
    return function(b) {
      let c = !1;
      return b(
        __(0, [
          function(e) {
            if (e) {
              return (c = !0), 0;
            }
            if (c) {
              return 0;
            }
            c = !0;
            b(__(1, [a]));
            return b(0);
          }
        ])
      );
    };
  },
  make$1 = function make(a) {
    return function(b) {
      let c = _ref,
        e = !1;
      c = a({
        next: function(a) {
          return e ? 0 : b(__(1, [a]));
        },
        complete: function(a) {
          if (e) {
            return 0;
          }
          e = !0;
          return b(0);
        }
      });
      return b(
        __(0, [
          function(a) {
            return a && !e ? ((e = !0), c()) : 0;
          }
        ])
      );
    };
  },
  makeSubject$1 = function makeSubject(a) {
    let b = [],
      c = !1;
    return {
      source: function(a) {
        function c(c) {
          return c !== a;
        }
        b = b.concat(a);
        return a(
          __(0, [
            function(a) {
              a && (b = b.filter(c));
              return 0;
            }
          ])
        );
      },
      next: function(a) {
        c ||
          b.forEach(function d(c) {
            return c(__(1, [a]));
          });
        return 0;
      },
      complete: function(a) {
        c || ((c = !0), b.forEach(_ref4));
        return 0;
      }
    };
  },
  makeReplaySubject$1 = function makeReplaySubject(a) {
    let b = [],
      c = [],
      e = !1;
    return {
      source: function(a) {
        function d(c) {
          return c !== a;
        }
        let g = !1;
        c = c.concat(a);
        a(
          __(0, [
            function(a) {
              a && ((c = c.filter(d)), (g = !0));
              return 0;
            }
          ])
        );
        b.forEach(function(c) {
          return g ? 0 : a(__(1, [c]));
        });
        return e ? a(0) : 0;
      },
      next: function(d) {
        if (!e) {
          var g = b.concat(d);
          g.length > a && (g = g.slice(1, g.length));
          b = g;
          c.forEach(function f(a) {
            return a(__(1, [d]));
          });
        }
        return 0;
      },
      complete: function(a) {
        e || ((e = !0), c.forEach(_ref7));
        return 0;
      }
    };
  },
  empty$1 = empty,
  never$1 = function never(a) {
    return a(__(0, [talkbackPlaceholder]));
  };

function caml_array_sub(a, b, c) {
  for (var e = Array(c), d = 0; d < c; ) {
    (e[d] = a[b]), (d = (d + 1) | 0), (b = (b + 1) | 0);
  }
  return e;
}

function app(a, b) {
  for (;;) {
    var c = b;
    var e = 0 === (b = a.length) ? 1 : b;
    if (0 === (b = (e - c.length) | 0)) {
      return a.apply(null, c);
    }
    if (0 > b) {
      (b = caml_array_sub(c, e, 0 | -b)), (a = a.apply(null, caml_array_sub(c, 0, e)));
    } else {
      return (function(a, c) {
        return function(d) {
          return app(a, c.concat([d]));
        };
      })(a, c);
    }
  }
}

function _1(a, b) {
  var c = a.length;
  return 1 === c
    ? a(b)
    : (function curry_1(a, b, c) {
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
            return function(c, d, f) {
              return a(b, c, d, f);
            };

          case 5:
            return function(c, d, f, g) {
              return a(b, c, d, f, g);
            };

          case 6:
            return function(c, d, f, g, h) {
              return a(b, c, d, f, g, h);
            };

          case 7:
            return function(c, d, f, g, h, k) {
              return a(b, c, d, f, g, h, k);
            };

          default:
            return app(a, [b]);
        }
      })(a, b, c);
}

function _2(a, b, c) {
  var e = a.length;
  return 2 === e
    ? a(b, c)
    : (function curry_2(a, b, c, e) {
        switch (e) {
          case 1:
            return app(a(b), [c]);

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
            return function(d, e, g) {
              return a(b, c, d, e, g);
            };

          case 6:
            return function(d, e, g, h) {
              return a(b, c, d, e, g, h);
            };

          case 7:
            return function(d, e, g, h, k) {
              return a(b, c, d, e, g, h, k);
            };

          default:
            return app(a, [b, c]);
        }
      })(a, b, c, e);
}

function _3(a, b, c, e) {
  var d = a.length;
  return 3 === d
    ? a(b, c, e)
    : (function curry_3(a, b, c, e, d) {
        switch (d) {
          case 1:
            return app(a(b), [c, e]);

          case 2:
            return app(a(b, c), [e]);

          case 3:
            return a(b, c, e);

          case 4:
            return function(d) {
              return a(b, c, e, d);
            };

          case 5:
            return function(d, g) {
              return a(b, c, e, d, g);
            };

          case 6:
            return function(d, g, h) {
              return a(b, c, e, d, g, h);
            };

          case 7:
            return function(d, g, h, k) {
              return a(b, c, e, d, g, h, k);
            };

          default:
            return app(a, [b, c, e]);
        }
      })(a, b, c, e, d);
}

function combine(a, b) {
  return function(c) {
    let e = talkbackPlaceholder,
      d = talkbackPlaceholder,
      f = void 0,
      g = void 0,
      h = !1,
      k = 0,
      l = !1;
    _1(a, function(a) {
      var b = g;
      if ('number' == typeof a) {
        if (1 > k) {
          return (k = (k + 1) | 0), 0;
        }
        if (l) {
          return 0;
        }
        l = !0;
        return c(0);
      }
      if (a.tag) {
        a = a[0];
        if (void 0 !== b) {
          if (l) {
            return 0;
          }
          f = some(a);
          h = !1;
          return c(__(1, [[a, valFromOption(b)]]));
        }
        f = some(a);
        return h ? ((h = !1), 0) : d(0);
      }
      e = a[0];
      return 0;
    });
    _1(b, function(a) {
      var b = f;
      if ('number' == typeof a) {
        if (1 > k) {
          return (k = (k + 1) | 0), 0;
        }
        if (l) {
          return 0;
        }
        l = !0;
        return c(0);
      }
      if (a.tag) {
        a = a[0];
        if (void 0 !== b) {
          if (l) {
            return 0;
          }
          g = some(a);
          h = !1;
          return c(__(1, [[valFromOption(b), a]]));
        }
        g = some(a);
        return h ? ((h = !1), 0) : e(0);
      }
      d = a[0];
      return 0;
    });
    return c(
      __(0, [
        function(a) {
          if (l) {
            return 0;
          }
          if (a) {
            return (l = !0), e(1), d(1);
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

function concatMap(a) {
  return function(b) {
    return function(c) {
      function e(b) {
        if ('number' == typeof b) {
          if (k) {
            k = !1;
            if (void 0 !== (b = d.shift())) {
              return n(a(valFromOption(b)));
            }
            if (m) {
              return c(0);
            }
            if (g) {
              return 0;
            }
            g = !0;
            return f(0);
          }
          return 0;
        }
        if (b.tag) {
          return k ? (c(b), l ? ((l = !1), 0) : h(0)) : 0;
        }
        h = b = b[0];
        l = !1;
        return b(0);
      }
      let d = [],
        f = talkbackPlaceholder,
        g = !1,
        h = talkbackPlaceholder,
        k = !1,
        l = !1,
        m = !1;
      var n = function(a) {
        k = !0;
        return _1(a, e);
      };
      _1(b, function(b) {
        if ('number' == typeof b) {
          if (m) {
            return 0;
          }
          m = !0;
          return !k &&
            (function isEmpty(a) {
              return 0 === a.length;
            })(d)
            ? c(0)
            : 0;
        }
        if (b.tag) {
          if (m) {
            return 0;
          }
          b = b[0];
          g = !1;
          return k ? (d.push(b), 0) : n(a(b));
        }
        f = b[0];
        return 0;
      });
      return c(
        __(0, [
          function(a) {
            if (a) {
              if ((m || ((m = !0), f(1)), k)) {
                return (k = !1), h(1);
              }
            } else if ((m || g || ((g = !0), f(0)), k && !l)) {
              return (l = !0), h(0);
            }
            return 0;
          }
        ])
      );
    };
  };
}

function _ref3(a) {
  return a;
}

function _ref4$1(a) {
  return a;
}

function _ref7$1(a) {
  return a(0);
}

function mergeMap(a) {
  return function(b) {
    return function(c) {
      let e = talkbackPlaceholder,
        d = !1,
        f = [],
        g = !1;
      _1(b, function(b) {
        if ('number' == typeof b) {
          if (g) {
            return 0;
          }
          g = !0;
          return 0 === f.length ? c(0) : 0;
        }
        if (b.tag) {
          if (g) {
            return 0;
          }
          d = !1;
          !(function(a) {
            function b(a) {
              return a !== h;
            }
            let h = talkbackPlaceholder;
            _1(a, function(a) {
              if ('number' == typeof a) {
                if (0 !== f.length) {
                  f = f.filter(b);
                  a = 0 === f.length;
                  if (g && a) {
                    return c(0);
                  }
                  if (!d && a) {
                    return (d = !0), e(0);
                  }
                }
                return 0;
              }
              if (a.tag) {
                return 0 !== f.length ? (c(__(1, [a[0]])), h(0)) : 0;
              }
              h = a = a[0];
              f = f.concat(a);
              return a(0);
            });
          })(a(b[0]));
          if (d) {
            return 0;
          }
          d = !0;
          return e(0);
        }
        e = b[0];
        return 0;
      });
      return c(
        __(0, [
          function(a) {
            a
              ? (g || ((g = !0), e(a)),
                f.forEach(function c(c) {
                  return c(a);
                }),
                (f = []))
              : (d || g ? (d = !1) : ((d = !0), e(0)), f.forEach(_ref7$1));
            return 0;
          }
        ])
      );
    };
  };
}

function _ref8(a) {
  return a;
}

function _ref9(a) {
  return a;
}

function mergeAll(a) {
  return mergeMap(_ref9)(a);
}

function onPush(a) {
  return function(b) {
    return function(c) {
      let e = !1;
      return _1(b, function(b) {
        if ('number' == typeof b) {
          if (e) {
            return 0;
          }
          e = !0;
          return c(b);
        }
        if (b.tag) {
          if (e) {
            return 0;
          }
          a(b[0]);
          return c(b);
        }
        var d = b[0];
        return c(
          __(0, [
            function(a) {
              if (e) {
                return 0;
              }
              a && (e = !0);
              return d(a);
            }
          ])
        );
      });
    };
  };
}

function scan(a, b) {
  return function(c) {
    return function(e) {
      let d = b;
      return _1(c, function(c) {
        'number' == typeof c
          ? (c = 0)
          : c.tag
          ? ((d = a(d, c[0])), (c = __(1, [d])))
          : (c = __(0, [c[0]]));
        return e(c);
      });
    };
  };
}

function _ref12(a) {
  return a(0);
}

function switchMap(a) {
  return function(b) {
    return function(c) {
      function e(a) {
        if (h) {
          if ('number' == typeof a) {
            h = !1;
            if (l) {
              return c(a);
            }
            if (f) {
              return 0;
            }
            f = !0;
            return d(0);
          }
          if (a.tag) {
            return c(a), k ? ((k = !1), 0) : g(0);
          }
          g = a = a[0];
          k = !1;
          return a(0);
        }
        return 0;
      }
      let d = talkbackPlaceholder,
        f = !1,
        g = talkbackPlaceholder,
        h = !1,
        k = !1,
        l = !1;
      _1(b, function(b) {
        if ('number' == typeof b) {
          if (l) {
            return 0;
          }
          l = !0;
          return h ? 0 : c(0);
        }
        if (b.tag) {
          if (l) {
            return 0;
          }
          h && (g(1), (g = talkbackPlaceholder));
          f ? (f = !1) : ((f = !0), d(0));
          b = a(b[0]);
          h = !0;
          return _1(b, e);
        }
        d = b[0];
        return 0;
      });
      return c(
        __(0, [
          function(a) {
            if (a) {
              if ((l || ((l = !0), d(1)), h)) {
                return (h = !1), g(1);
              }
            } else if ((l || f || ((f = !0), d(0)), h && !k)) {
              return (k = !0), g(0);
            }
            return 0;
          }
        ])
      );
    };
  };
}

function _ref18(a) {
  return a;
}

function takeLast(a) {
  return function(b) {
    return function(c) {
      function e() {
        return f.shift();
      }
      let d = talkbackPlaceholder;
      var f = [];
      return _1(b, function(b) {
        if ('number' == typeof b) {
          return makeTrampoline(c, e);
        }
        if (b.tag) {
          return f.length >= a && 0 < a && f.shift(), f.push(b[0]), d(0);
        }
        b = b[0];
        if (0 >= a) {
          return b(1), empty(c);
        }
        d = b;
        return b(0);
      });
    };
  };
}

var buffer$1 = function buffer(a) {
    return function(b) {
      return function(c) {
        function e(a) {
          if ('number' == typeof a) {
            if (k) {
              return 0;
            }
            k = !0;
            f(1);
            0 < d.length && c(__(1, [d]));
            return c(0);
          }
          if (a.tag) {
            if (k || 0 >= d.length) {
              return 0;
            }
            a = d;
            d = [];
            return c(__(1, [a]));
          }
          g = a[0];
          return 0;
        }
        let d = [],
          f = talkbackPlaceholder,
          g = talkbackPlaceholder,
          h = !1,
          k = !1;
        _1(b, function(b) {
          if ('number' == typeof b) {
            if (k) {
              return 0;
            }
            k = !0;
            g(1);
            0 < d.length && c(__(1, [d]));
            return c(0);
          }
          if (b.tag) {
            if (k) {
              return 0;
            }
            d.push(b[0]);
            if (h) {
              return (h = !1), 0;
            }
            h = !0;
            f(0);
            return g(0);
          }
          f = b[0];
          return _1(a, e);
        });
        return c(
          __(0, [
            function(a) {
              if (k) {
                return 0;
              }
              if (a) {
                return (k = !0), f(1), g(1);
              }
              if (h) {
                return 0;
              }
              h = !0;
              f(0);
              return g(0);
            }
          ])
        );
      };
    };
  },
  concatMap$1 = concatMap,
  concatAll$1 = function concatAll(a) {
    return concatMap(_ref3)(a);
  },
  concat$1 = function concat(a) {
    return concatMap(_ref4$1)(fromArray(a));
  },
  filter$1 = function filter(a) {
    return function(b) {
      return function(c) {
        let e = talkbackPlaceholder;
        return _1(b, function(d) {
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
  },
  map$1 = function map(a) {
    return function(b) {
      return function(c) {
        return _1(b, function(b) {
          b = 'number' == typeof b ? 0 : b.tag ? __(1, [a(b[0])]) : __(0, [b[0]]);
          return c(b);
        });
      };
    };
  },
  mergeMap$1 = mergeMap,
  merge$1 = function merge(a) {
    return mergeMap(_ref8)(fromArray(a));
  },
  mergeAll$1 = mergeAll,
  flatten$1 = mergeAll,
  onEnd$1 = function onEnd(a) {
    return function(b) {
      return function(c) {
        let e = !1;
        return _1(b, function(b) {
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
            __(0, [
              function(c) {
                return e ? 0 : c ? ((e = !0), d(c), a()) : d(c);
              }
            ])
          );
        });
      };
    };
  },
  onPush$1 = onPush,
  tap$1 = onPush,
  onStart$1 = function onStart(a) {
    return function(b) {
      return function(c) {
        return _1(b, function(b) {
          if ('number' == typeof b || b.tag) {
            return c(b);
          }
          c(b);
          return a();
        });
      };
    };
  },
  sample$1 = function sample(a) {
    return function(b) {
      return function(c) {
        let e = talkbackPlaceholder,
          d = talkbackPlaceholder,
          f = void 0,
          g = !1,
          h = !1;
        _1(b, function(a) {
          if ('number' == typeof a) {
            if (h) {
              return 0;
            }
            h = !0;
            d(1);
            return c(0);
          }
          if (a.tag) {
            f = some(a[0]);
            if (g) {
              return (g = !1), 0;
            }
            g = !0;
            d(0);
            return e(0);
          }
          e = a[0];
          return 0;
        });
        _1(a, function(a) {
          var b = f;
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
            f = void 0;
            return c(__(1, [valFromOption(b)]));
          }
          d = a[0];
          return 0;
        });
        return c(
          __(0, [
            function(a) {
              if (h) {
                return 0;
              }
              if (a) {
                return (h = !0), e(1), d(1);
              }
              if (g) {
                return 0;
              }
              g = !0;
              e(0);
              return d(0);
            }
          ])
        );
      };
    };
  },
  share$1 = function share(a) {
    function b(a) {
      'number' == typeof a
        ? (c.forEach(_ref12), (c = []))
        : a.tag
        ? ((d = !1),
          c.forEach(function b(c) {
            return c(a);
          }))
        : (e = a[0]);
      return 0;
    }
    let c = [],
      e = talkbackPlaceholder,
      d = !1;
    return function(f) {
      function g(a) {
        return a !== f;
      }
      c = c.concat(f);
      1 === c.length && _1(a, b);
      return f(
        __(0, [
          function(a) {
            if (a) {
              return (c = c.filter(g)), 0 === c.length ? e(1) : 0;
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
  },
  skip$1 = function skip(a) {
    return function(b) {
      return function(c) {
        let e = talkbackPlaceholder,
          d = a;
        return _1(b, function(a) {
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
  },
  skipUntil$1 = function skipUntil(a) {
    return function(b) {
      return function(c) {
        function e(a) {
          if ('number' == typeof a) {
            return g ? ((k = !0), d(1)) : 0;
          }
          if (a.tag) {
            return (g = !1), f(1);
          }
          f = a = a[0];
          return a(0);
        }
        let d = talkbackPlaceholder,
          f = talkbackPlaceholder,
          g = !0,
          h = !1,
          k = !1;
        _1(b, function(b) {
          if ('number' == typeof b) {
            return g && f(1), (k = !0), c(0);
          }
          if (b.tag) {
            if (g || k) {
              if (h) {
                return (h = !1), 0;
              }
              h = !0;
              d(0);
              return f(0);
            }
            h = !1;
            return c(b);
          }
          d = b[0];
          return _1(a, e);
        });
        return c(
          __(0, [
            function(a) {
              if (k) {
                return 0;
              }
              if (a) {
                return (k = !0), d(1), g ? f(1) : 0;
              }
              if (h) {
                return 0;
              }
              h = !0;
              g && f(0);
              return d(0);
            }
          ])
        );
      };
    };
  },
  skipWhile$1 = function skipWhile(a) {
    return function(b) {
      return function(c) {
        let e = talkbackPlaceholder,
          d = !0;
        return _1(b, function(b) {
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
  },
  switchMap$1 = switchMap,
  switchAll$1 = function switchAll(a) {
    return switchMap(_ref18)(a);
  },
  take$1 = function take(a) {
    return function(b) {
      return function(c) {
        let e = !1,
          d = 0,
          f = talkbackPlaceholder;
        _1(b, function(b) {
          if ('number' == typeof b) {
            if (e) {
              return 0;
            }
            e = !0;
            return c(0);
          }
          if (b.tag) {
            return d < a && !e && ((d = (d + 1) | 0), c(b), !e && d >= a)
              ? ((e = !0), c(0), f(1))
              : 0;
          }
          b = b[0];
          if (0 >= a) {
            return (e = !0), c(0), b(1);
          }
          f = b;
          return 0;
        });
        return c(
          __(0, [
            function(b) {
              return e ? 0 : b ? ((e = !0), f(1)) : d < a ? f(0) : 0;
            }
          ])
        );
      };
    };
  },
  takeLast$1 = takeLast,
  takeUntil$1 = function takeUntil(a) {
    return function(b) {
      return function(c) {
        function e(a) {
          if ('number' == typeof a) {
            return 0;
          }
          if (a.tag) {
            return (d = !0), f(1), c(0);
          }
          g = a = a[0];
          return a(0);
        }
        let d = !1,
          f = talkbackPlaceholder,
          g = talkbackPlaceholder;
        _1(b, function(b) {
          if ('number' == typeof b) {
            if (d) {
              return 0;
            }
            d = !0;
            g(1);
            return c(0);
          }
          if (b.tag) {
            return d ? 0 : c(b);
          }
          f = b[0];
          return _1(a, e);
        });
        return c(
          __(0, [
            function(a) {
              return d ? 0 : a ? ((d = !0), f(1), g(1)) : f(0);
            }
          ])
        );
      };
    };
  },
  takeWhile$1 = function takeWhile(a) {
    return function(b) {
      return function(c) {
        let e = talkbackPlaceholder,
          d = !1;
        return _1(b, function(b) {
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
  };

function subscribe(a) {
  return function(b) {
    let c = talkbackPlaceholder,
      e = !1;
    _1(b, function(b) {
      if ('number' == typeof b) {
        return (e = !0), 0;
      }
      if (b.tag) {
        if (e) {
          return 0;
        }
        a(b[0]);
        return c(0);
      }
      c = b = b[0];
      return b(0);
    });
    return {
      unsubscribe: function(a) {
        if (e) {
          return 0;
        }
        e = !0;
        return c(1);
      }
    };
  };
}

function _ref$1(a) {
  return 0;
}

var subscribe$1 = subscribe,
  forEach$1 = function forEach(a) {
    return function(b) {
      subscribe(a)(b);
      return 0;
    };
  },
  publish$1 = function publish(a) {
    return subscribe(_ref$1)(a);
  },
  toArray$1 = function toArray(a) {
    let b = [],
      c = talkbackPlaceholder,
      e = !1;
    _1(a, function(a) {
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
  };

var observableSymbol =
  'function' == typeof Symbol
    ? Symbol.observable || (Symbol.observable = Symbol('observable'))
    : '@@observable';

function _ref$2(a) {
  return 0;
}

function _ref5(a, b, c) {
  a.addEventListener(b, c);
}

function _ref6(a, b, c) {
  a.removeEventListener(b, c);
}

function fromDomEvent(a, b) {
  return function(c) {
    var e = _ref5,
      d = _ref6,
      f = function(a) {
        return c(__(1, [a]));
      };
    c(
      __(0, [
        function(c) {
          return c ? _3(d, a, b, f) : 0;
        }
      ])
    );
    return _3(e, a, b, f);
  };
}

var fromObservable$2 = function fromObservable(a) {
    var b = void 0 !== a[observableSymbol] ? a[observableSymbol]() : a;
    return function(a) {
      var c = b.subscribe({
        next: function(b) {
          return a(__(1, [b]));
        },
        complete: function() {
          return a(0);
        },
        error: _ref$2
      });
      return a(
        __(0, [
          function(a) {
            return a ? c.unsubscribe() : 0;
          }
        ])
      );
    };
  },
  toObservable$2 = function toObservable(a) {
    var b = {
      subscribe: function(b) {
        let c = talkbackPlaceholder,
          d = !1;
        _1(a, function(a) {
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
    b[observableSymbol] = function(a) {
      return b;
    };
    return b;
  },
  fromCallbag$2 = function fromCallbag(a) {
    return function(b) {
      return _2(a, 0, function(a, e) {
        switch (a) {
          case 0:
            return b(
              __(0, [
                function c(a) {
                  return a ? e(2) : e(1);
                }
              ])
            );

          case 1:
            return b(__(1, [e]));

          case 2:
            return b(0);
        }
      });
    };
  },
  toCallbag$2 = function toCallbag(a) {
    return function(b, c) {
      return 0 === b
        ? _1(a, function e(a) {
            if ('number' == typeof a) {
              return _2(c, 2, 0);
            }
            if (a.tag) {
              return _2(c, 1, a[0]);
            }
            var b = a[0];
            return _2(c, 0, function(a) {
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
  },
  debounce$1 = function debounce(a) {
    return function(b) {
      return function(c) {
        let e = void 0,
          d = !1,
          f = !1;
        var g = function(a) {
          void 0 !== (a = e) && ((e = void 0), clearTimeout(valFromOption(a)));
          return 0;
        };
        return _1(b, function(b) {
          if ('number' == typeof b) {
            if (f) {
              return 0;
            }
            f = !0;
            return void 0 !== e ? ((d = !0), 0) : c(0);
          }
          if (b.tag) {
            return (
              f ||
                (g(),
                (e = some(
                  setTimeout(function h(a) {
                    e = void 0;
                    c(b);
                    return d ? c(0) : 0;
                  }, a(b[0]))
                ))),
              0
            );
          }
          var l = b[0];
          return c(
            __(0, [
              function(a) {
                return f ? 0 : a ? ((f = !0), (d = !1), g(), l(1)) : l(0);
              }
            ])
          );
        });
      };
    };
  },
  delay$1 = function delay(a) {
    return function(b) {
      return function(c) {
        let e = 0;
        return _1(b, function(b) {
          if ('number' != typeof b && !b.tag) {
            return c(b);
          }
          e = (e + 1) | 0;
          setTimeout(function(a) {
            return 0 !== e ? ((e = (e - 1) | 0), c(b)) : 0;
          }, a);
          return 0;
        });
      };
    };
  },
  throttle$1 = function throttle(a) {
    return function(b) {
      return function(c) {
        function e(a) {
          f = void 0;
          d = !1;
          return 0;
        }
        let d = !1,
          f = void 0;
        var g = function(a) {
          void 0 !== (a = f) && clearTimeout(valFromOption(a));
          return 0;
        };
        return _1(b, function(b) {
          if ('number' == typeof b) {
            return g(), c(0);
          }
          if (b.tag) {
            if (d) {
              return 0;
            }
            d = !0;
            g();
            f = some(setTimeout(e, a(b[0])));
            return c(b);
          }
          var h = b[0];
          return c(
            __(0, [
              function(a) {
                return a ? (g(), h(1)) : h(a);
              }
            ])
          );
        });
      };
    };
  },
  toPromise$1 = function toPromise(a) {
    return new Promise(function(b, c) {
      return _1(takeLast(1)(a), function(a) {
        return 'number' == typeof a ? 0 : a.tag ? b(a[0]) : a[0](0);
      });
    });
  },
  interval$1 = function interval(a) {
    return function(b) {
      let c = 0;
      var e = setInterval(function(a) {
        a = c;
        c = (c + 1) | 0;
        return b(__(1, [a]));
      }, a);
      return b(
        __(0, [
          function(a) {
            a && clearInterval(e);
            return 0;
          }
        ])
      );
    };
  },
  fromPromise$1 = function fromPromise(a) {
    return function(b) {
      let c = !1;
      a.then(function(a) {
        c || (b(__(1, [a])), b(0));
        return Promise.resolve(0);
      });
      return b(
        __(0, [
          function(a) {
            a && (c = !0);
            return 0;
          }
        ])
      );
    };
  };

exports.buffer = buffer$1;

exports.combine = function(a, b) {
  return _2(combine, a, b);
};

exports.concat = concat$1;

exports.concatAll = concatAll$1;

exports.concatMap = concatMap$1;

exports.debounce = debounce$1;

exports.delay = delay$1;

exports.empty = empty$1;

exports.filter = filter$1;

exports.flatten = flatten$1;

exports.forEach = forEach$1;

exports.fromArray = fromArray$1;

exports.fromCallbag = fromCallbag$2;

exports.fromDomEvent = function(a, b) {
  return _2(fromDomEvent, a, b);
};

exports.fromList = fromList$1;

exports.fromObservable = fromObservable$2;

exports.fromPromise = fromPromise$1;

exports.fromValue = fromValue$1;

exports.interval = interval$1;

exports.make = make$1;

exports.makeReplaySubject = makeReplaySubject$1;

exports.makeSubject = makeSubject$1;

exports.map = map$1;

exports.merge = merge$1;

exports.mergeAll = mergeAll$1;

exports.mergeMap = mergeMap$1;

exports.never = never$1;

exports.onEnd = onEnd$1;

exports.onPush = onPush$1;

exports.onStart = onStart$1;

exports.pipe = function pipe() {
  for (var a = arguments, b = arguments[0], c = 1, e = arguments.length; c < e; c++) {
    b = a[c](b);
  }
  return b;
};

exports.publish = publish$1;

exports.sample = sample$1;

exports.scan = function(a, b) {
  return _2(scan, a, b);
};

exports.share = share$1;

exports.skip = skip$1;

exports.skipUntil = skipUntil$1;

exports.skipWhile = skipWhile$1;

exports.subscribe = subscribe$1;

exports.switchAll = switchAll$1;

exports.switchMap = switchMap$1;

exports.take = take$1;

exports.takeLast = takeLast$1;

exports.takeUntil = takeUntil$1;

exports.takeWhile = takeWhile$1;

exports.tap = tap$1;

exports.throttle = throttle$1;

exports.toArray = toArray$1;

exports.toCallbag = toCallbag$2;

exports.toObservable = toObservable$2;

exports.toPromise = toPromise$1;
