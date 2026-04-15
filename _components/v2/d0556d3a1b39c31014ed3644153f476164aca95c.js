const $h = () => Promise.resolve().then(() => Oh), { Fragment: he, jsx: e, jsxs: r } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function Mr(t) {
  const n = t?.props?._fgT, a = typeof n == "function" || typeof n == "string" || typeof n == "object" && n !== null && "$$typeof" in n;
  return globalThis.__GLOBALS__.React.isValidElement(t) && a;
}
function Tt(t) {
  return globalThis.__GLOBALS__.React.isValidElement(t) && t.type === "fg-txt";
}
function Ir(t) {
  const { _fgT: n, _fgS: a, _fgB: s, _fgD: i, ...l } = t.props;
  return globalThis.__GLOBALS__.React.createElement(n, {
    ...l,
    key: t.key
  }, l.children);
}
function un(t) {
  return Mr(t) ? Ir(t) : Tt(t) ? t.props.children : t;
}
const Lt = globalThis.__GLOBALS__.React.Children, Rr = {
  map(t, n, a) {
    return Lt.map(t, (s, i) => {
      const l = un(s);
      return Tt(s) ? null : n.call(a, l, i);
    });
  },
  forEach(t, n, a) {
    Lt.forEach(t, (s, i) => {
      if (Tt(s))
        return;
      const l = un(s);
      n.call(a, l, i);
    });
  },
  count(t) {
    let n = 0;
    return Lt.forEach(t, (a) => {
      Tt(a) || n++;
    }), n;
  },
  toArray(t) {
    const n = [];
    return Lt.forEach(t, (a) => {
      Tt(a) || n.push(un(a));
    }), n;
  },
  only(t) {
    const n = Lt.only(t);
    return un(n);
  }
}, $n = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function ti(t) {
  if (t == null || typeof t != "object") return t;
  const n = Object.keys(t);
  let a = !1;
  for (let i = 0; i < $n.length; i++)
    if ($n[i] in t) {
      a = !0;
      break;
    }
  if (!a) return t;
  const s = {};
  for (let i = 0; i < n.length; i++) {
    const l = n[i];
    $n.indexOf(l) === -1 && (s[l] = t[l]);
  }
  return s;
}
const $a = globalThis.__GLOBALS__.React.cloneElement, zr = (t, ...n) => {
  if (Mr(t)) {
    const a = Ir(t), s = n[0];
    return s != null && typeof s == "object" && (n = [
      ti(s),
      ...n.slice(1)
    ]), $a(a, ...n);
  }
  return $a(t, ...n);
}, sa = {
  ...globalThis.__GLOBALS__.React,
  Children: Rr,
  cloneElement: zr
}, { Component: Dr, createContext: ue, createElement: V, createFactory: ni, createRef: ai, forwardRef: Rt, Fragment: St, isValidElement: ri, lazy: si, memo: Pr, Profiler: ii, PureComponent: li, startTransition: Ht, StrictMode: oi, Suspense: ci, use: di, useCallback: Me, useContext: F, useDebugValue: ui, useDeferredValue: hi, useEffect: X, useId: pi, useImperativeHandle: fi, useInsertionEffect: mi, useLayoutEffect: ia, useMemo: Ne, useReducer: xi, useRef: Se, useState: A, useSyncExternalStore: gi, useTransition: yi, version: bi, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: vi } = globalThis.__GLOBALS__.React, Ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Rr,
  Component: Dr,
  Fragment: St,
  Profiler: ii,
  PureComponent: li,
  StrictMode: oi,
  Suspense: ci,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: vi,
  cloneElement: zr,
  createContext: ue,
  createElement: V,
  createFactory: ni,
  createRef: ai,
  default: sa,
  forwardRef: Rt,
  isValidElement: ri,
  lazy: si,
  memo: Pr,
  startTransition: Ht,
  use: di,
  useCallback: Me,
  useContext: F,
  useDebugValue: ui,
  useDeferredValue: hi,
  useEffect: X,
  useId: pi,
  useImperativeHandle: fi,
  useInsertionEffect: mi,
  useLayoutEffect: ia,
  useMemo: Ne,
  useReducer: xi,
  useRef: Se,
  useState: A,
  useSyncExternalStore: gi,
  useTransition: yi,
  version: bi
}, Symbol.toStringTag, { value: "Module" }));
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Ar = (t) => {
  throw TypeError(t);
}, wi = (t, n, a) => n.has(t) || Ar("Cannot " + a), En = (t, n, a) => (wi(t, n, "read from private field"), a ? a.call(t) : n.get(t)), ki = (t, n, a) => n.has(t) ? Ar("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, a), Ea = "popstate";
function Ci(t = {}) {
  function n(s, i) {
    let { pathname: l, search: c, hash: o } = s.location;
    return Gt(
      "",
      { pathname: l, search: c, hash: o },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function a(s, i) {
    return typeof i == "string" ? i : je(i);
  }
  return Si(
    n,
    a,
    null,
    t
  );
}
function U(t, n) {
  if (t === !1 || t === null || typeof t > "u")
    throw new Error(n);
}
function ce(t, n) {
  if (!t) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {
    }
  }
}
function Wi() {
  return Math.random().toString(36).substring(2, 10);
}
function Ba(t, n) {
  return {
    usr: t.state,
    key: t.key,
    idx: n
  };
}
function Gt(t, n, a = null, s) {
  return {
    pathname: typeof t == "string" ? t : t.pathname,
    search: "",
    hash: "",
    ...typeof n == "string" ? rt(n) : n,
    state: a,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: n && n.key || s || Wi()
  };
}
function je({
  pathname: t = "/",
  search: n = "",
  hash: a = ""
}) {
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), a && a !== "#" && (t += a.charAt(0) === "#" ? a : "#" + a), t;
}
function rt(t) {
  let n = {};
  if (t) {
    let a = t.indexOf("#");
    a >= 0 && (n.hash = t.substring(a), t = t.substring(0, a));
    let s = t.indexOf("?");
    s >= 0 && (n.search = t.substring(s), t = t.substring(0, s)), t && (n.pathname = t);
  }
  return n;
}
function Si(t, n, a, s = {}) {
  let { window: i = document.defaultView, v5Compat: l = !1 } = s, c = i.history, o = "POP", d = null, u = h();
  u == null && (u = 0, c.replaceState({ ...c.state, idx: u }, ""));
  function h() {
    return (c.state || { idx: null }).idx;
  }
  function m() {
    o = "POP";
    let w = h(), S = w == null ? null : w - u;
    u = w, d && d({ action: o, location: v.location, delta: S });
  }
  function g(w, S) {
    o = "PUSH";
    let W = Gt(v.location, w, S);
    u = h() + 1;
    let R = Ba(W, u), E = v.createHref(W);
    try {
      c.pushState(R, "", E);
    } catch (z) {
      if (z instanceof DOMException && z.name === "DataCloneError")
        throw z;
      i.location.assign(E);
    }
    l && d && d({ action: o, location: v.location, delta: 1 });
  }
  function f(w, S) {
    o = "REPLACE";
    let W = Gt(v.location, w, S);
    u = h();
    let R = Ba(W, u), E = v.createHref(W);
    c.replaceState(R, "", E), l && d && d({ action: o, location: v.location, delta: 0 });
  }
  function N(w) {
    return Lr(w);
  }
  let v = {
    get action() {
      return o;
    },
    get location() {
      return t(i, c);
    },
    listen(w) {
      if (d)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(Ea, m), d = w, () => {
        i.removeEventListener(Ea, m), d = null;
      };
    },
    createHref(w) {
      return n(i, w);
    },
    createURL: N,
    encodeLocation(w) {
      let S = N(w);
      return {
        pathname: S.pathname,
        search: S.search,
        hash: S.hash
      };
    },
    push: g,
    replace: f,
    go(w) {
      return c.go(w);
    }
  };
  return v;
}
function Lr(t, n = !1) {
  let a = "http://localhost";
  typeof window < "u" && (a = window.location.origin !== "null" ? window.location.origin : window.location.href), U(a, "No window.location.(origin|href) available to create URL");
  let s = typeof t == "string" ? t : je(t);
  return s = s.replace(/ $/, "%20"), !n && s.startsWith("//") && (s = a + s), new URL(s, a);
}
var jt, _a = class {
  /**
   * Create a new `RouterContextProvider` instance
   * @param init An optional initial context map to populate the provider with
   */
  constructor(t) {
    if (ki(this, jt, /* @__PURE__ */ new Map()), t)
      for (let [n, a] of t)
        this.set(n, a);
  }
  /**
   * Access a value from the context. If no value has been set for the context,
   * it will return the context's `defaultValue` if provided, or throw an error
   * if no `defaultValue` was set.
   * @param context The context to get the value for
   * @returns The value for the context, or the context's `defaultValue` if no
   * value was set
   */
  get(t) {
    if (En(this, jt).has(t))
      return En(this, jt).get(t);
    if (t.defaultValue !== void 0)
      return t.defaultValue;
    throw new Error("No value found for context");
  }
  /**
   * Set a value for the context. If the context already has a value set, this
   * will overwrite it.
   *
   * @param context The context to set the value for
   * @param value The value to set for the context
   * @returns {void}
   */
  set(t, n) {
    En(this, jt).set(t, n);
  }
};
jt = /* @__PURE__ */ new WeakMap();
var Mi = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function Ii(t) {
  return Mi.has(
    t
  );
}
var Ri = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children"
]);
function zi(t) {
  return Ri.has(
    t
  );
}
function Di(t) {
  return t.index === !0;
}
function qt(t, n, a = [], s = {}, i = !1) {
  return t.map((l, c) => {
    let o = [...a, String(c)], d = typeof l.id == "string" ? l.id : o.join("-");
    if (U(
      l.index !== !0 || !l.children,
      "Cannot specify children on an index route"
    ), U(
      i || !s[d],
      `Found a route id collision on id "${d}".  Route id's must be globally unique within Data Router usages`
    ), Di(l)) {
      let u = {
        ...l,
        id: d
      };
      return s[d] = Ta(
        u,
        n(u)
      ), u;
    } else {
      let u = {
        ...l,
        id: d,
        children: void 0
      };
      return s[d] = Ta(
        u,
        n(u)
      ), l.children && (u.children = qt(
        l.children,
        n,
        o,
        s,
        i
      )), u;
    }
  });
}
function Ta(t, n) {
  return Object.assign(t, {
    ...n,
    ...typeof n.lazy == "object" && n.lazy != null ? {
      lazy: {
        ...t.lazy,
        ...n.lazy
      }
    } : {}
  });
}
function Xe(t, n, a = "/") {
  return Vt(t, n, a, !1);
}
function Vt(t, n, a, s) {
  let i = typeof n == "string" ? rt(n) : n, l = $e(i.pathname || "/", a);
  if (l == null)
    return null;
  let c = Or(t);
  Ai(c);
  let o = null;
  for (let d = 0; o == null && d < c.length; ++d) {
    let u = Ui(l);
    o = Vi(
      c[d],
      u,
      s
    );
  }
  return o;
}
function Pi(t, n) {
  let { route: a, pathname: s, params: i } = t;
  return {
    id: a.id,
    pathname: s,
    params: i,
    data: n[a.id],
    loaderData: n[a.id],
    handle: a.handle
  };
}
function Or(t, n = [], a = [], s = "", i = !1) {
  let l = (c, o, d = i, u) => {
    let h = {
      relativePath: u === void 0 ? c.path || "" : u,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: o,
      route: c
    };
    if (h.relativePath.startsWith("/")) {
      if (!h.relativePath.startsWith(s) && d)
        return;
      U(
        h.relativePath.startsWith(s),
        `Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), h.relativePath = h.relativePath.slice(s.length);
    }
    let m = Te([s, h.relativePath]), g = a.concat(h);
    c.children && c.children.length > 0 && (U(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      c.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
    ), Or(
      c.children,
      n,
      g,
      m,
      d
    )), !(c.path == null && !c.index) && n.push({
      path: m,
      score: Ti(m, c.index),
      routesMeta: g
    });
  };
  return t.forEach((c, o) => {
    if (c.path === "" || !c.path?.includes("?"))
      l(c, o);
    else
      for (let d of $r(c.path))
        l(c, o, !0, d);
  }), n;
}
function $r(t) {
  let n = t.split("/");
  if (n.length === 0) return [];
  let [a, ...s] = n, i = a.endsWith("?"), l = a.replace(/\?$/, "");
  if (s.length === 0)
    return i ? [l, ""] : [l];
  let c = $r(s.join("/")), o = [];
  return o.push(
    ...c.map(
      (d) => d === "" ? l : [l, d].join("/")
    )
  ), i && o.push(...c), o.map(
    (d) => t.startsWith("/") && d === "" ? "/" : d
  );
}
function Ai(t) {
  t.sort(
    (n, a) => n.score !== a.score ? a.score - n.score : ji(
      n.routesMeta.map((s) => s.childrenIndex),
      a.routesMeta.map((s) => s.childrenIndex)
    )
  );
}
var Li = /^:[\w-]+$/, Oi = 3, $i = 2, Ei = 1, Bi = 10, _i = -2, ja = (t) => t === "*";
function Ti(t, n) {
  let a = t.split("/"), s = a.length;
  return a.some(ja) && (s += _i), n && (s += $i), a.filter((i) => !ja(i)).reduce(
    (i, l) => i + (Li.test(l) ? Oi : l === "" ? Ei : Bi),
    s
  );
}
function ji(t, n) {
  return t.length === n.length && t.slice(0, -1).every((s, i) => s === n[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    t[t.length - 1] - n[n.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Vi(t, n, a = !1) {
  let { routesMeta: s } = t, i = {}, l = "/", c = [];
  for (let o = 0; o < s.length; ++o) {
    let d = s[o], u = o === s.length - 1, h = l === "/" ? n : n.slice(l.length) || "/", m = bn(
      { path: d.relativePath, caseSensitive: d.caseSensitive, end: u },
      h
    ), g = d.route;
    if (!m && u && a && !s[s.length - 1].route.index && (m = bn(
      {
        path: d.relativePath,
        caseSensitive: d.caseSensitive,
        end: !1
      },
      h
    )), !m)
      return null;
    Object.assign(i, m.params), c.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: Te([l, m.pathname]),
      pathnameBase: qi(
        Te([l, m.pathnameBase])
      ),
      route: g
    }), m.pathnameBase !== "/" && (l = Te([l, m.pathnameBase]));
  }
  return c;
}
function bn(t, n) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [a, s] = Fi(
    t.path,
    t.caseSensitive,
    t.end
  ), i = n.match(a);
  if (!i) return null;
  let l = i[0], c = l.replace(/(.)\/+$/, "$1"), o = i.slice(1);
  return {
    params: s.reduce(
      (u, { paramName: h, isOptional: m }, g) => {
        if (h === "*") {
          let N = o[g] || "";
          c = l.slice(0, l.length - N.length).replace(/(.)\/+$/, "$1");
        }
        const f = o[g];
        return m && !f ? u[h] = void 0 : u[h] = (f || "").replace(/%2F/g, "/"), u;
      },
      {}
    ),
    pathname: l,
    pathnameBase: c,
    pattern: t
  };
}
function Fi(t, n = !1, a = !0) {
  ce(
    t === "*" || !t.endsWith("*") || t.endsWith("/*"),
    `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, "/*")}".`
  );
  let s = [], i = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (c, o, d) => (s.push({ paramName: o, isOptional: d != null }), d ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return t.endsWith("*") ? (s.push({ paramName: "*" }), i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a ? i += "\\/*$" : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, n ? void 0 : "i"), s];
}
function Ui(t) {
  try {
    return t.split("/").map((n) => decodeURIComponent(n).replace(/\//g, "%2F")).join("/");
  } catch (n) {
    return ce(
      !1,
      `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`
    ), t;
  }
}
function $e(t, n) {
  if (n === "/") return t;
  if (!t.toLowerCase().startsWith(n.toLowerCase()))
    return null;
  let a = n.endsWith("/") ? n.length - 1 : n.length, s = t.charAt(a);
  return s && s !== "/" ? null : t.slice(a) || "/";
}
function Hi({
  basename: t,
  pathname: n
}) {
  return n === "/" ? t : Te([t, n]);
}
var Er = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, la = (t) => Er.test(t);
function Gi(t, n = "/") {
  let {
    pathname: a,
    search: s = "",
    hash: i = ""
  } = typeof t == "string" ? rt(t) : t, l;
  return a ? (a = a.replace(/\/\/+/g, "/"), a.startsWith("/") ? l = Va(a.substring(1), "/") : l = Va(a, n)) : l = n, {
    pathname: l,
    search: Ki(s),
    hash: Yi(i)
  };
}
function Va(t, n) {
  let a = n.replace(/\/+$/, "").split("/");
  return t.split("/").forEach((i) => {
    i === ".." ? a.length > 1 && a.pop() : i !== "." && a.push(i);
  }), a.length > 1 ? a.join("/") : "/";
}
function Bn(t, n, a, s) {
  return `Cannot include a '${t}' character in a manually specified \`to.${n}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Br(t) {
  return t.filter(
    (n, a) => a === 0 || n.route.path && n.route.path.length > 0
  );
}
function oa(t) {
  let n = Br(t);
  return n.map(
    (a, s) => s === n.length - 1 ? a.pathname : a.pathnameBase
  );
}
function ca(t, n, a, s = !1) {
  let i;
  typeof t == "string" ? i = rt(t) : (i = { ...t }, U(
    !i.pathname || !i.pathname.includes("?"),
    Bn("?", "pathname", "search", i)
  ), U(
    !i.pathname || !i.pathname.includes("#"),
    Bn("#", "pathname", "hash", i)
  ), U(
    !i.search || !i.search.includes("#"),
    Bn("#", "search", "hash", i)
  ));
  let l = t === "" || i.pathname === "", c = l ? "/" : i.pathname, o;
  if (c == null)
    o = a;
  else {
    let m = n.length - 1;
    if (!s && c.startsWith("..")) {
      let g = c.split("/");
      for (; g[0] === ".."; )
        g.shift(), m -= 1;
      i.pathname = g.join("/");
    }
    o = m >= 0 ? n[m] : "/";
  }
  let d = Gi(i, o), u = c && c !== "/" && c.endsWith("/"), h = (l || c === ".") && a.endsWith("/");
  return !d.pathname.endsWith("/") && (u || h) && (d.pathname += "/"), d;
}
var Te = (t) => t.join("/").replace(/\/\/+/g, "/"), qi = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"), Ki = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, Yi = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t, Zt = class {
  constructor(t, n, a, s = !1) {
    this.status = t, this.statusText = n || "", this.internal = s, a instanceof Error ? (this.data = a.toString(), this.error = a) : this.data = a;
  }
};
function Kt(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
}
function Qt(t) {
  return t.map((n) => n.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var _r = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Tr(t, n) {
  let a = t;
  if (typeof a != "string" || !Er.test(a))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: a
    };
  let s = a, i = !1;
  if (_r)
    try {
      let l = new URL(window.location.href), c = a.startsWith("//") ? new URL(l.protocol + a) : new URL(a), o = $e(c.pathname, n);
      c.origin === l.origin && o != null ? a = o + c.search + c.hash : i = !0;
    } catch {
      ce(
        !1,
        `<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: s,
    isExternal: i,
    to: a
  };
}
var tt = Symbol("Uninstrumented");
function Ji(t, n) {
  let a = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: []
  };
  t.forEach(
    (i) => i({
      id: n.id,
      index: n.index,
      path: n.path,
      instrument(l) {
        let c = Object.keys(a);
        for (let o of c)
          l[o] && a[o].push(l[o]);
      }
    })
  );
  let s = {};
  if (typeof n.lazy == "function" && a.lazy.length > 0) {
    let i = wt(a.lazy, n.lazy, () => {
    });
    i && (s.lazy = i);
  }
  if (typeof n.lazy == "object") {
    let i = n.lazy;
    ["middleware", "loader", "action"].forEach((l) => {
      let c = i[l], o = a[`lazy.${l}`];
      if (typeof c == "function" && o.length > 0) {
        let d = wt(o, c, () => {
        });
        d && (s.lazy = Object.assign(s.lazy || {}, {
          [l]: d
        }));
      }
    });
  }
  return ["loader", "action"].forEach((i) => {
    let l = n[i];
    if (typeof l == "function" && a[i].length > 0) {
      let c = l[tt] ?? l, o = wt(
        a[i],
        c,
        (...d) => Fa(d[0])
      );
      o && (i === "loader" && c.hydrate === !0 && (o.hydrate = !0), o[tt] = c, s[i] = o);
    }
  }), n.middleware && n.middleware.length > 0 && a.middleware.length > 0 && (s.middleware = n.middleware.map((i) => {
    let l = i[tt] ?? i, c = wt(
      a.middleware,
      l,
      (...o) => Fa(o[0])
    );
    return c ? (c[tt] = l, c) : i;
  })), s;
}
function Zi(t, n) {
  let a = {
    navigate: [],
    fetch: []
  };
  if (n.forEach(
    (s) => s({
      instrument(i) {
        let l = Object.keys(i);
        for (let c of l)
          i[c] && a[c].push(i[c]);
      }
    })
  ), a.navigate.length > 0) {
    let s = t.navigate[tt] ?? t.navigate, i = wt(
      a.navigate,
      s,
      (...l) => {
        let [c, o] = l;
        return {
          to: typeof c == "number" || typeof c == "string" ? c : c ? je(c) : ".",
          ...Ua(t, o ?? {})
        };
      }
    );
    i && (i[tt] = s, t.navigate = i);
  }
  if (a.fetch.length > 0) {
    let s = t.fetch[tt] ?? t.fetch, i = wt(a.fetch, s, (...l) => {
      let [c, , o, d] = l;
      return {
        href: o ?? ".",
        fetcherKey: c,
        ...Ua(t, d ?? {})
      };
    });
    i && (i[tt] = s, t.fetch = i);
  }
  return t;
}
function wt(t, n, a) {
  return t.length === 0 ? null : async (...s) => {
    let i = await jr(
      t,
      a(...s),
      () => n(...s),
      t.length - 1
    );
    if (i.type === "error")
      throw i.value;
    return i.value;
  };
}
async function jr(t, n, a, s) {
  let i = t[s], l;
  if (i) {
    let c, o = async () => (c ? console.error("You cannot call instrumented handlers more than once") : c = jr(t, n, a, s - 1), l = await c, U(l, "Expected a result"), l.type === "error" && l.value instanceof Error ? { status: "error", error: l.value } : { status: "success", error: void 0 });
    try {
      await i(o, n);
    } catch (d) {
      console.error("An instrumentation function threw an error:", d);
    }
    c || await o(), await c;
  } else
    try {
      l = { type: "success", value: await a() };
    } catch (c) {
      l = { type: "error", value: c };
    }
  return l || {
    type: "error",
    value: new Error("No result assigned in instrumentation chain.")
  };
}
function Fa(t) {
  let { request: n, context: a, params: s, unstable_pattern: i } = t;
  return {
    request: Qi(n),
    params: { ...s },
    unstable_pattern: i,
    context: Xi(a)
  };
}
function Ua(t, n) {
  return {
    currentUrl: je(t.state.location),
    ..."formMethod" in n ? { formMethod: n.formMethod } : {},
    ..."formEncType" in n ? { formEncType: n.formEncType } : {},
    ..."formData" in n ? { formData: n.formData } : {},
    ..."body" in n ? { body: n.body } : {}
  };
}
function Qi(t) {
  return {
    method: t.method,
    url: t.url,
    headers: {
      get: (...n) => t.headers.get(...n)
    }
  };
}
function Xi(t) {
  if (tl(t)) {
    let n = { ...t };
    return Object.freeze(n), n;
  } else
    return {
      get: (n) => t.get(n)
    };
}
var el = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function tl(t) {
  if (t === null || typeof t != "object")
    return !1;
  const n = Object.getPrototypeOf(t);
  return n === Object.prototype || n === null || Object.getOwnPropertyNames(n).sort().join("\0") === el;
}
var Vr = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
], nl = new Set(
  Vr
), al = [
  "GET",
  ...Vr
], rl = new Set(al), Fr = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), sl = /* @__PURE__ */ new Set([307, 308]), _n = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, il = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Ot = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, ll = (t) => ({
  hasErrorBoundary: !!t.hasErrorBoundary
}), Ur = "remix-router-transitions", Hr = Symbol("ResetLoaderData");
function ol(t) {
  const n = t.window ? t.window : typeof window < "u" ? window : void 0, a = typeof n < "u" && typeof n.document < "u" && typeof n.document.createElement < "u";
  U(
    t.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let s = t.hydrationRouteProperties || [], i = t.mapRouteProperties || ll, l = i;
  if (t.unstable_instrumentations) {
    let p = t.unstable_instrumentations;
    l = (x) => ({
      ...i(x),
      ...Ji(
        p.map((y) => y.route).filter(Boolean),
        x
      )
    });
  }
  let c = {}, o = qt(
    t.routes,
    l,
    void 0,
    c
  ), d, u = t.basename || "/";
  u.startsWith("/") || (u = `/${u}`);
  let h = t.dataStrategy || pl, m = {
    ...t.future
  }, g = null, f = /* @__PURE__ */ new Set(), N = null, v = null, w = null, S = t.hydrationData != null, W = Xe(o, t.history.location, u), R = !1, E = null, z;
  if (W == null && !t.patchRoutesOnNavigation) {
    let p = Oe(404, {
      pathname: t.history.location.pathname
    }), { matches: x, route: y } = hn(o);
    z = !0, W = x, E = { [y.id]: p };
  } else if (W && !t.hydrationData && sn(
    W,
    o,
    t.history.location.pathname
  ).active && (W = null), W)
    if (W.some((p) => p.route.lazy))
      z = !1;
    else if (!W.some((p) => da(p.route)))
      z = !0;
    else {
      let p = t.hydrationData ? t.hydrationData.loaderData : null, x = t.hydrationData ? t.hydrationData.errors : null;
      if (x) {
        let y = W.findIndex(
          (C) => x[C.route.id] !== void 0
        );
        z = W.slice(0, y + 1).every(
          (C) => !Yn(C.route, p, x)
        );
      } else
        z = W.every(
          (y) => !Yn(y.route, p, x)
        );
    }
  else {
    z = !1, W = [];
    let p = sn(
      null,
      o,
      t.history.location.pathname
    );
    p.active && p.matches && (R = !0, W = p.matches);
  }
  let D, b = {
    historyAction: t.history.action,
    location: t.history.location,
    matches: W,
    initialized: z,
    navigation: _n,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: t.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: t.hydrationData && t.hydrationData.loaderData || {},
    actionData: t.hydrationData && t.hydrationData.actionData || null,
    errors: t.hydrationData && t.hydrationData.errors || E,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, B = "POP", G = null, te = !1, ee, le = !1, Re = /* @__PURE__ */ new Map(), Z = null, J = !1, ne = !1, Ce = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Map(), k = 0, ae = -1, oe = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Set(), st = /* @__PURE__ */ new Map(), an, zt = null;
  function Es() {
    if (g = t.history.listen(
      ({ action: p, location: x, delta: y }) => {
        if (an) {
          an(), an = void 0;
          return;
        }
        ce(
          st.size === 0 || y != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let C = Da({
          currentLocation: b.location,
          nextLocation: x,
          historyAction: p
        });
        if (C && y != null) {
          let M = new Promise((O) => {
            an = O;
          });
          t.history.go(y * -1), rn(C, {
            state: "blocked",
            location: x,
            proceed() {
              rn(C, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: x
              }), M.then(() => t.history.go(y));
            },
            reset() {
              let O = new Map(b.blockers);
              O.set(C, Ot), xe({ blockers: O });
            }
          }), G?.resolve(), G = null;
          return;
        }
        return it(p, x);
      }
    ), a) {
      Dl(n, Re);
      let p = () => Pl(n, Re);
      n.addEventListener("pagehide", p), Z = () => n.removeEventListener("pagehide", p);
    }
    return b.initialized || it("POP", b.location, {
      initialHydration: !0
    }), D;
  }
  function Bs() {
    g && g(), Z && Z(), f.clear(), ee && ee.abort(), b.fetchers.forEach((p, x) => An(x)), b.blockers.forEach((p, x) => za(x));
  }
  function _s(p) {
    return f.add(p), () => f.delete(p);
  }
  function xe(p, x = {}) {
    p.matches && (p.matches = p.matches.map((M) => {
      let O = c[M.route.id], P = M.route;
      return P.element !== O.element || P.errorElement !== O.errorElement || P.hydrateFallbackElement !== O.hydrateFallbackElement ? {
        ...M,
        route: O
      } : M;
    })), b = {
      ...b,
      ...p
    };
    let y = [], C = [];
    b.fetchers.forEach((M, O) => {
      M.state === "idle" && (ze.has(O) ? y.push(O) : C.push(O));
    }), ze.forEach((M) => {
      !b.fetchers.has(M) && !Y.has(M) && y.push(M);
    }), [...f].forEach(
      (M) => M(b, {
        deletedFetchers: y,
        newErrors: p.errors ?? null,
        viewTransitionOpts: x.viewTransitionOpts,
        flushSync: x.flushSync === !0
      })
    ), y.forEach((M) => An(M)), C.forEach((M) => b.fetchers.delete(M));
  }
  function yt(p, x, { flushSync: y } = {}) {
    let C = b.actionData != null && b.navigation.formMethod != null && ye(b.navigation.formMethod) && b.navigation.state === "loading" && p.state?._isRedirect !== !0, M;
    x.actionData ? Object.keys(x.actionData).length > 0 ? M = x.actionData : M = null : C ? M = b.actionData : M = null;
    let O = x.loaderData ? er(
      b.loaderData,
      x.loaderData,
      x.matches || [],
      x.errors
    ) : b.loaderData, P = b.blockers;
    P.size > 0 && (P = new Map(P), P.forEach((j, _) => P.set(_, Ot)));
    let L = J ? !1 : Aa(p, x.matches || b.matches), $ = te === !0 || b.navigation.formMethod != null && ye(b.navigation.formMethod) && p.state?._isRedirect !== !0;
    d && (o = d, d = void 0), J || B === "POP" || (B === "PUSH" ? t.history.push(p, p.state) : B === "REPLACE" && t.history.replace(p, p.state));
    let T;
    if (B === "POP") {
      let j = Re.get(b.location.pathname);
      j && j.has(p.pathname) ? T = {
        currentLocation: b.location,
        nextLocation: p
      } : Re.has(p.pathname) && (T = {
        currentLocation: p,
        nextLocation: b.location
      });
    } else if (le) {
      let j = Re.get(b.location.pathname);
      j ? j.add(p.pathname) : (j = /* @__PURE__ */ new Set([p.pathname]), Re.set(b.location.pathname, j)), T = {
        currentLocation: b.location,
        nextLocation: p
      };
    }
    xe(
      {
        ...x,
        // matches, errors, fetchers go through as-is
        actionData: M,
        loaderData: O,
        historyAction: B,
        location: p,
        initialized: !0,
        navigation: _n,
        revalidation: "idle",
        restoreScrollPosition: L,
        preventScrollReset: $,
        blockers: P
      },
      {
        viewTransitionOpts: T,
        flushSync: y === !0
      }
    ), B = "POP", te = !1, le = !1, J = !1, ne = !1, G?.resolve(), G = null, zt?.resolve(), zt = null;
  }
  async function ka(p, x) {
    if (G?.resolve(), G = null, typeof p == "number") {
      G || (G = rr());
      let K = G.promise;
      return t.history.go(p), K;
    }
    let y = Kn(
      b.location,
      b.matches,
      u,
      p,
      x?.fromRouteId,
      x?.relative
    ), { path: C, submission: M, error: O } = Ha(
      !1,
      y,
      x
    ), P = b.location, L = Gt(b.location, C, x && x.state);
    L = {
      ...L,
      ...t.history.encodeLocation(L)
    };
    let $ = x && x.replace != null ? x.replace : void 0, T = "PUSH";
    $ === !0 ? T = "REPLACE" : $ === !1 || M != null && ye(M.formMethod) && M.formAction === b.location.pathname + b.location.search && (T = "REPLACE");
    let j = x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0, _ = (x && x.flushSync) === !0, q = Da({
      currentLocation: P,
      nextLocation: L,
      historyAction: T
    });
    if (q) {
      rn(q, {
        state: "blocked",
        location: L,
        proceed() {
          rn(q, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: L
          }), ka(p, x);
        },
        reset() {
          let K = new Map(b.blockers);
          K.set(q, Ot), xe({ blockers: K });
        }
      });
      return;
    }
    await it(T, L, {
      submission: M,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: O,
      preventScrollReset: j,
      replace: x && x.replace,
      enableViewTransition: x && x.viewTransition,
      flushSync: _,
      callSiteDefaultShouldRevalidate: x && x.unstable_defaultShouldRevalidate
    });
  }
  function Ts() {
    zt || (zt = rr()), Pn(), xe({ revalidation: "loading" });
    let p = zt.promise;
    return b.navigation.state === "submitting" ? p : b.navigation.state === "idle" ? (it(b.historyAction, b.location, {
      startUninterruptedRevalidation: !0
    }), p) : (it(
      B || b.historyAction,
      b.navigation.location,
      {
        overrideNavigation: b.navigation,
        // Proxy through any rending view transition
        enableViewTransition: le === !0
      }
    ), p);
  }
  async function it(p, x, y) {
    ee && ee.abort(), ee = null, B = p, J = (y && y.startUninterruptedRevalidation) === !0, Zs(b.location, b.matches), te = (y && y.preventScrollReset) === !0, le = (y && y.enableViewTransition) === !0;
    let C = d || o, M = y && y.overrideNavigation, O = y?.initialHydration && b.matches && b.matches.length > 0 && !R ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      b.matches
    ) : Xe(C, x, u), P = (y && y.flushSync) === !0;
    if (O && b.initialized && !ne && Nl(b.location, x) && !(y && y.submission && ye(y.submission.formMethod))) {
      yt(x, { matches: O }, { flushSync: P });
      return;
    }
    let L = sn(O, C, x.pathname);
    if (L.active && L.matches && (O = L.matches), !O) {
      let { error: fe, notFoundMatches: ve, route: Q } = Ln(
        x.pathname
      );
      yt(
        x,
        {
          matches: ve,
          loaderData: {},
          errors: {
            [Q.id]: fe
          }
        },
        { flushSync: P }
      );
      return;
    }
    ee = new AbortController();
    let $ = Nt(
      t.history,
      x,
      ee.signal,
      y && y.submission
    ), T = t.getContext ? await t.getContext() : new _a(), j;
    if (y && y.pendingError)
      j = [
        et(O).route.id,
        { type: "error", error: y.pendingError }
      ];
    else if (y && y.submission && ye(y.submission.formMethod)) {
      let fe = await js(
        $,
        x,
        y.submission,
        O,
        T,
        L.active,
        y && y.initialHydration === !0,
        { replace: y.replace, flushSync: P }
      );
      if (fe.shortCircuited)
        return;
      if (fe.pendingActionResult) {
        let [ve, Q] = fe.pendingActionResult;
        if (De(Q) && Kt(Q.error) && Q.error.status === 404) {
          ee = null, yt(x, {
            matches: fe.matches,
            loaderData: {},
            errors: {
              [ve]: Q.error
            }
          });
          return;
        }
      }
      O = fe.matches || O, j = fe.pendingActionResult, M = Tn(x, y.submission), P = !1, L.active = !1, $ = Nt(
        t.history,
        $.url,
        $.signal
      );
    }
    let {
      shortCircuited: _,
      matches: q,
      loaderData: K,
      errors: me
    } = await Vs(
      $,
      x,
      O,
      T,
      L.active,
      M,
      y && y.submission,
      y && y.fetcherSubmission,
      y && y.replace,
      y && y.initialHydration === !0,
      P,
      j,
      y && y.callSiteDefaultShouldRevalidate
    );
    _ || (ee = null, yt(x, {
      matches: q || O,
      ...tr(j),
      loaderData: K,
      errors: me
    }));
  }
  async function js(p, x, y, C, M, O, P, L = {}) {
    Pn();
    let $ = Rl(x, y);
    if (xe({ navigation: $ }, { flushSync: L.flushSync === !0 }), O) {
      let _ = await ln(
        C,
        x.pathname,
        p.signal
      );
      if (_.type === "aborted")
        return { shortCircuited: !0 };
      if (_.type === "error") {
        if (_.partialMatches.length === 0) {
          let { matches: K, route: me } = hn(o);
          return {
            matches: K,
            pendingActionResult: [
              me.id,
              {
                type: "error",
                error: _.error
              }
            ]
          };
        }
        let q = et(_.partialMatches).route.id;
        return {
          matches: _.partialMatches,
          pendingActionResult: [
            q,
            {
              type: "error",
              error: _.error
            }
          ]
        };
      } else if (_.matches)
        C = _.matches;
      else {
        let { notFoundMatches: q, error: K, route: me } = Ln(
          x.pathname
        );
        return {
          matches: q,
          pendingActionResult: [
            me.id,
            {
              type: "error",
              error: K
            }
          ]
        };
      }
    }
    let T, j = xn(C, x);
    if (!j.route.action && !j.route.lazy)
      T = {
        type: "error",
        error: Oe(405, {
          method: p.method,
          pathname: x.pathname,
          routeId: j.route.id
        })
      };
    else {
      let _ = kt(
        l,
        c,
        p,
        C,
        j,
        P ? [] : s,
        M
      ), q = await Dt(
        p,
        _,
        M,
        null
      );
      if (T = q[j.route.id], !T) {
        for (let K of C)
          if (q[K.route.id]) {
            T = q[K.route.id];
            break;
          }
      }
      if (p.signal.aborted)
        return { shortCircuited: !0 };
    }
    if (ft(T)) {
      let _;
      return L && L.replace != null ? _ = L.replace : _ = Za(
        T.response.headers.get("Location"),
        new URL(p.url),
        u,
        t.history
      ) === b.location.pathname + b.location.search, await lt(p, T, !0, {
        submission: y,
        replace: _
      }), { shortCircuited: !0 };
    }
    if (De(T)) {
      let _ = et(C, j.route.id);
      return (L && L.replace) !== !0 && (B = "PUSH"), {
        matches: C,
        pendingActionResult: [
          _.route.id,
          T,
          j.route.id
        ]
      };
    }
    return {
      matches: C,
      pendingActionResult: [j.route.id, T]
    };
  }
  async function Vs(p, x, y, C, M, O, P, L, $, T, j, _, q) {
    let K = O || Tn(x, P), me = P || L || ar(K), fe = !J && !T;
    if (M) {
      if (fe) {
        let ge = Ca(_);
        xe(
          {
            navigation: K,
            ...ge !== void 0 ? { actionData: ge } : {}
          },
          {
            flushSync: j
          }
        );
      }
      let H = await ln(
        y,
        x.pathname,
        p.signal
      );
      if (H.type === "aborted")
        return { shortCircuited: !0 };
      if (H.type === "error") {
        if (H.partialMatches.length === 0) {
          let { matches: bt, route: dt } = hn(o);
          return {
            matches: bt,
            loaderData: {},
            errors: {
              [dt.id]: H.error
            }
          };
        }
        let ge = et(H.partialMatches).route.id;
        return {
          matches: H.partialMatches,
          loaderData: {},
          errors: {
            [ge]: H.error
          }
        };
      } else if (H.matches)
        y = H.matches;
      else {
        let { error: ge, notFoundMatches: bt, route: dt } = Ln(
          x.pathname
        );
        return {
          matches: bt,
          loaderData: {},
          errors: {
            [dt.id]: ge
          }
        };
      }
    }
    let ve = d || o, { dsMatches: Q, revalidatingFetchers: Le } = Ga(
      p,
      C,
      l,
      c,
      t.history,
      b,
      y,
      me,
      x,
      T ? [] : s,
      T === !0,
      ne,
      Ce,
      ze,
      Pe,
      We,
      ve,
      u,
      t.patchRoutesOnNavigation != null,
      _,
      q
    );
    if (ae = ++k, !t.dataStrategy && !Q.some((H) => H.shouldLoad) && !Q.some(
      (H) => H.route.middleware && H.route.middleware.length > 0
    ) && Le.length === 0) {
      let H = Ia();
      return yt(
        x,
        {
          matches: y,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: _ && De(_[1]) ? { [_[0]]: _[1].error } : null,
          ...tr(_),
          ...H ? { fetchers: new Map(b.fetchers) } : {}
        },
        { flushSync: j }
      ), { shortCircuited: !0 };
    }
    if (fe) {
      let H = {};
      if (!M) {
        H.navigation = K;
        let ge = Ca(_);
        ge !== void 0 && (H.actionData = ge);
      }
      Le.length > 0 && (H.fetchers = Fs(Le)), xe(H, { flushSync: j });
    }
    Le.forEach((H) => {
      Ge(H.key), H.controller && Y.set(H.key, H.controller);
    });
    let ot = () => Le.forEach((H) => Ge(H.key));
    ee && ee.signal.addEventListener(
      "abort",
      ot
    );
    let { loaderResults: Pt, fetcherResults: Qe } = await Wa(
      Q,
      Le,
      p,
      C
    );
    if (p.signal.aborted)
      return { shortCircuited: !0 };
    ee && ee.signal.removeEventListener(
      "abort",
      ot
    ), Le.forEach((H) => Y.delete(H.key));
    let _e = pn(Pt);
    if (_e)
      return await lt(p, _e.result, !0, {
        replace: $
      }), { shortCircuited: !0 };
    if (_e = pn(Qe), _e)
      return We.add(_e.key), await lt(p, _e.result, !0, {
        replace: $
      }), { shortCircuited: !0 };
    let { loaderData: On, errors: At } = Xa(
      b,
      y,
      Pt,
      _,
      Le,
      Qe
    );
    T && b.errors && (At = { ...b.errors, ...At });
    let ct = Ia(), on = Ra(ae), cn = ct || on || Le.length > 0;
    return {
      matches: y,
      loaderData: On,
      errors: At,
      ...cn ? { fetchers: new Map(b.fetchers) } : {}
    };
  }
  function Ca(p) {
    if (p && !De(p[1]))
      return {
        [p[0]]: p[1].data
      };
    if (b.actionData)
      return Object.keys(b.actionData).length === 0 ? null : b.actionData;
  }
  function Fs(p) {
    return p.forEach((x) => {
      let y = b.fetchers.get(x.key), C = $t(
        void 0,
        y ? y.data : void 0
      );
      b.fetchers.set(x.key, C);
    }), new Map(b.fetchers);
  }
  async function Us(p, x, y, C) {
    Ge(p);
    let M = (C && C.flushSync) === !0, O = d || o, P = Kn(
      b.location,
      b.matches,
      u,
      y,
      x,
      C?.relative
    ), L = Xe(O, P, u), $ = sn(L, O, P);
    if ($.active && $.matches && (L = $.matches), !L) {
      He(
        p,
        x,
        Oe(404, { pathname: P }),
        { flushSync: M }
      );
      return;
    }
    let { path: T, submission: j, error: _ } = Ha(
      !0,
      P,
      C
    );
    if (_) {
      He(p, x, _, { flushSync: M });
      return;
    }
    let q = t.getContext ? await t.getContext() : new _a(), K = (C && C.preventScrollReset) === !0;
    if (j && ye(j.formMethod)) {
      await Hs(
        p,
        x,
        T,
        L,
        q,
        $.active,
        M,
        K,
        j,
        C && C.unstable_defaultShouldRevalidate
      );
      return;
    }
    Pe.set(p, { routeId: x, path: T }), await Gs(
      p,
      x,
      T,
      L,
      q,
      $.active,
      M,
      K,
      j
    );
  }
  async function Hs(p, x, y, C, M, O, P, L, $, T) {
    Pn(), Pe.delete(p);
    let j = b.fetchers.get(p);
    Ue(p, zl($, j), {
      flushSync: P
    });
    let _ = new AbortController(), q = Nt(
      t.history,
      y,
      _.signal,
      $
    );
    if (O) {
      let re = await ln(
        C,
        new URL(q.url).pathname,
        q.signal,
        p
      );
      if (re.type === "aborted")
        return;
      if (re.type === "error") {
        He(p, x, re.error, { flushSync: P });
        return;
      } else if (re.matches)
        C = re.matches;
      else {
        He(
          p,
          x,
          Oe(404, { pathname: y }),
          { flushSync: P }
        );
        return;
      }
    }
    let K = xn(C, y);
    if (!K.route.action && !K.route.lazy) {
      let re = Oe(405, {
        method: $.formMethod,
        pathname: y,
        routeId: x
      });
      He(p, x, re, { flushSync: P });
      return;
    }
    Y.set(p, _);
    let me = k, fe = kt(
      l,
      c,
      q,
      C,
      K,
      s,
      M
    ), ve = await Dt(
      q,
      fe,
      M,
      p
    ), Q = ve[K.route.id];
    if (!Q) {
      for (let re of fe)
        if (ve[re.route.id]) {
          Q = ve[re.route.id];
          break;
        }
    }
    if (q.signal.aborted) {
      Y.get(p) === _ && Y.delete(p);
      return;
    }
    if (ze.has(p)) {
      if (ft(Q) || De(Q)) {
        Ue(p, qe(void 0));
        return;
      }
    } else {
      if (ft(Q))
        if (Y.delete(p), ae > me) {
          Ue(p, qe(void 0));
          return;
        } else
          return We.add(p), Ue(p, $t($)), lt(q, Q, !1, {
            fetcherSubmission: $,
            preventScrollReset: L
          });
      if (De(Q)) {
        He(p, x, Q.error);
        return;
      }
    }
    let Le = b.navigation.location || b.location, ot = Nt(
      t.history,
      Le,
      _.signal
    ), Pt = d || o, Qe = b.navigation.state !== "idle" ? Xe(Pt, b.navigation.location, u) : b.matches;
    U(Qe, "Didn't find any matches after fetcher action");
    let _e = ++k;
    oe.set(p, _e);
    let On = $t($, Q.data);
    b.fetchers.set(p, On);
    let { dsMatches: At, revalidatingFetchers: ct } = Ga(
      ot,
      M,
      l,
      c,
      t.history,
      b,
      Qe,
      $,
      Le,
      s,
      !1,
      ne,
      Ce,
      ze,
      Pe,
      We,
      Pt,
      u,
      t.patchRoutesOnNavigation != null,
      [K.route.id, Q],
      T
    );
    ct.filter((re) => re.key !== p).forEach((re) => {
      let dn = re.key, Oa = b.fetchers.get(dn), ei = $t(
        void 0,
        Oa ? Oa.data : void 0
      );
      b.fetchers.set(dn, ei), Ge(dn), re.controller && Y.set(dn, re.controller);
    }), xe({ fetchers: new Map(b.fetchers) });
    let on = () => ct.forEach((re) => Ge(re.key));
    _.signal.addEventListener(
      "abort",
      on
    );
    let { loaderResults: cn, fetcherResults: H } = await Wa(
      At,
      ct,
      ot,
      M
    );
    if (_.signal.aborted)
      return;
    if (_.signal.removeEventListener(
      "abort",
      on
    ), oe.delete(p), Y.delete(p), ct.forEach((re) => Y.delete(re.key)), b.fetchers.has(p)) {
      let re = qe(Q.data);
      b.fetchers.set(p, re);
    }
    let ge = pn(cn);
    if (ge)
      return lt(
        ot,
        ge.result,
        !1,
        { preventScrollReset: L }
      );
    if (ge = pn(H), ge)
      return We.add(ge.key), lt(
        ot,
        ge.result,
        !1,
        { preventScrollReset: L }
      );
    let { loaderData: bt, errors: dt } = Xa(
      b,
      Qe,
      cn,
      void 0,
      ct,
      H
    );
    Ra(_e), b.navigation.state === "loading" && _e > ae ? (U(B, "Expected pending action"), ee && ee.abort(), yt(b.navigation.location, {
      matches: Qe,
      loaderData: bt,
      errors: dt,
      fetchers: new Map(b.fetchers)
    })) : (xe({
      errors: dt,
      loaderData: er(
        b.loaderData,
        bt,
        Qe,
        dt
      ),
      fetchers: new Map(b.fetchers)
    }), ne = !1);
  }
  async function Gs(p, x, y, C, M, O, P, L, $) {
    let T = b.fetchers.get(p);
    Ue(
      p,
      $t(
        $,
        T ? T.data : void 0
      ),
      { flushSync: P }
    );
    let j = new AbortController(), _ = Nt(
      t.history,
      y,
      j.signal
    );
    if (O) {
      let Q = await ln(
        C,
        new URL(_.url).pathname,
        _.signal,
        p
      );
      if (Q.type === "aborted")
        return;
      if (Q.type === "error") {
        He(p, x, Q.error, { flushSync: P });
        return;
      } else if (Q.matches)
        C = Q.matches;
      else {
        He(
          p,
          x,
          Oe(404, { pathname: y }),
          { flushSync: P }
        );
        return;
      }
    }
    let q = xn(C, y);
    Y.set(p, j);
    let K = k, me = kt(
      l,
      c,
      _,
      C,
      q,
      s,
      M
    ), ve = (await Dt(
      _,
      me,
      M,
      p
    ))[q.route.id];
    if (Y.get(p) === j && Y.delete(p), !_.signal.aborted) {
      if (ze.has(p)) {
        Ue(p, qe(void 0));
        return;
      }
      if (ft(ve))
        if (ae > K) {
          Ue(p, qe(void 0));
          return;
        } else {
          We.add(p), await lt(_, ve, !1, {
            preventScrollReset: L
          });
          return;
        }
      if (De(ve)) {
        He(p, x, ve.error);
        return;
      }
      Ue(p, qe(ve.data));
    }
  }
  async function lt(p, x, y, {
    submission: C,
    fetcherSubmission: M,
    preventScrollReset: O,
    replace: P
  } = {}) {
    y || (G?.resolve(), G = null), x.response.headers.has("X-Remix-Revalidate") && (ne = !0);
    let L = x.response.headers.get("Location");
    U(L, "Expected a Location header on the redirect Response"), L = Za(
      L,
      new URL(p.url),
      u,
      t.history
    );
    let $ = Gt(b.location, L, {
      _isRedirect: !0
    });
    if (a) {
      let me = !1;
      if (x.response.headers.has("X-Remix-Reload-Document"))
        me = !0;
      else if (la(L)) {
        const fe = Lr(L, !0);
        me = // Hard reload if it's an absolute URL to a new origin
        fe.origin !== n.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        $e(fe.pathname, u) == null;
      }
      if (me) {
        P ? n.location.replace(L) : n.location.assign(L);
        return;
      }
    }
    ee = null;
    let T = P === !0 || x.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: j, formAction: _, formEncType: q } = b.navigation;
    !C && !M && j && _ && q && (C = ar(b.navigation));
    let K = C || M;
    if (sl.has(x.response.status) && K && ye(K.formMethod))
      await it(T, $, {
        submission: {
          ...K,
          formAction: L
        },
        // Preserve these flags across redirects
        preventScrollReset: O || te,
        enableViewTransition: y ? le : void 0
      });
    else {
      let me = Tn(
        $,
        C
      );
      await it(T, $, {
        overrideNavigation: me,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: M,
        // Preserve these flags across redirects
        preventScrollReset: O || te,
        enableViewTransition: y ? le : void 0
      });
    }
  }
  async function Dt(p, x, y, C) {
    let M, O = {};
    try {
      M = await ml(
        h,
        p,
        x,
        C,
        y,
        !1
      );
    } catch (P) {
      return x.filter((L) => L.shouldLoad).forEach((L) => {
        O[L.route.id] = {
          type: "error",
          error: P
        };
      }), O;
    }
    if (p.signal.aborted)
      return O;
    if (!ye(p.method))
      for (let P of x) {
        if (M[P.route.id]?.type === "error")
          break;
        !M.hasOwnProperty(P.route.id) && !b.loaderData.hasOwnProperty(P.route.id) && (!b.errors || !b.errors.hasOwnProperty(P.route.id)) && P.shouldCallHandler() && (M[P.route.id] = {
          type: "error",
          result: new Error(
            `No result returned from dataStrategy for route ${P.route.id}`
          )
        });
      }
    for (let [P, L] of Object.entries(M))
      if (Wl(L)) {
        let $ = L.result;
        O[P] = {
          type: "redirect",
          response: bl(
            $,
            p,
            P,
            x,
            u
          )
        };
      } else
        O[P] = await yl(L);
    return O;
  }
  async function Wa(p, x, y, C) {
    let M = Dt(
      y,
      p,
      C,
      null
    ), O = Promise.all(
      x.map(async ($) => {
        if ($.matches && $.match && $.request && $.controller) {
          let j = (await Dt(
            $.request,
            $.matches,
            C,
            $.key
          ))[$.match.route.id];
          return { [$.key]: j };
        } else
          return Promise.resolve({
            [$.key]: {
              type: "error",
              error: Oe(404, {
                pathname: $.path
              })
            }
          });
      })
    ), P = await M, L = (await O).reduce(
      ($, T) => Object.assign($, T),
      {}
    );
    return {
      loaderResults: P,
      fetcherResults: L
    };
  }
  function Pn() {
    ne = !0, Pe.forEach((p, x) => {
      Y.has(x) && Ce.add(x), Ge(x);
    });
  }
  function Ue(p, x, y = {}) {
    b.fetchers.set(p, x), xe(
      { fetchers: new Map(b.fetchers) },
      { flushSync: (y && y.flushSync) === !0 }
    );
  }
  function He(p, x, y, C = {}) {
    let M = et(b.matches, x);
    An(p), xe(
      {
        errors: {
          [M.route.id]: y
        },
        fetchers: new Map(b.fetchers)
      },
      { flushSync: (C && C.flushSync) === !0 }
    );
  }
  function Sa(p) {
    return Ae.set(p, (Ae.get(p) || 0) + 1), ze.has(p) && ze.delete(p), b.fetchers.get(p) || il;
  }
  function qs(p, x) {
    Ge(p, x?.reason), Ue(p, qe(null));
  }
  function An(p) {
    let x = b.fetchers.get(p);
    Y.has(p) && !(x && x.state === "loading" && oe.has(p)) && Ge(p), Pe.delete(p), oe.delete(p), We.delete(p), ze.delete(p), Ce.delete(p), b.fetchers.delete(p);
  }
  function Ks(p) {
    let x = (Ae.get(p) || 0) - 1;
    x <= 0 ? (Ae.delete(p), ze.add(p)) : Ae.set(p, x), xe({ fetchers: new Map(b.fetchers) });
  }
  function Ge(p, x) {
    let y = Y.get(p);
    y && (y.abort(x), Y.delete(p));
  }
  function Ma(p) {
    for (let x of p) {
      let y = Sa(x), C = qe(y.data);
      b.fetchers.set(x, C);
    }
  }
  function Ia() {
    let p = [], x = !1;
    for (let y of We) {
      let C = b.fetchers.get(y);
      U(C, `Expected fetcher: ${y}`), C.state === "loading" && (We.delete(y), p.push(y), x = !0);
    }
    return Ma(p), x;
  }
  function Ra(p) {
    let x = [];
    for (let [y, C] of oe)
      if (C < p) {
        let M = b.fetchers.get(y);
        U(M, `Expected fetcher: ${y}`), M.state === "loading" && (Ge(y), oe.delete(y), x.push(y));
      }
    return Ma(x), x.length > 0;
  }
  function Ys(p, x) {
    let y = b.blockers.get(p) || Ot;
    return st.get(p) !== x && st.set(p, x), y;
  }
  function za(p) {
    b.blockers.delete(p), st.delete(p);
  }
  function rn(p, x) {
    let y = b.blockers.get(p) || Ot;
    U(
      y.state === "unblocked" && x.state === "blocked" || y.state === "blocked" && x.state === "blocked" || y.state === "blocked" && x.state === "proceeding" || y.state === "blocked" && x.state === "unblocked" || y.state === "proceeding" && x.state === "unblocked",
      `Invalid blocker state transition: ${y.state} -> ${x.state}`
    );
    let C = new Map(b.blockers);
    C.set(p, x), xe({ blockers: C });
  }
  function Da({
    currentLocation: p,
    nextLocation: x,
    historyAction: y
  }) {
    if (st.size === 0)
      return;
    st.size > 1 && ce(!1, "A router only supports one blocker at a time");
    let C = Array.from(st.entries()), [M, O] = C[C.length - 1], P = b.blockers.get(M);
    if (!(P && P.state === "proceeding") && O({ currentLocation: p, nextLocation: x, historyAction: y }))
      return M;
  }
  function Ln(p) {
    let x = Oe(404, { pathname: p }), y = d || o, { matches: C, route: M } = hn(y);
    return { notFoundMatches: C, route: M, error: x };
  }
  function Js(p, x, y) {
    if (N = p, w = x, v = y || null, !S && b.navigation === _n) {
      S = !0;
      let C = Aa(b.location, b.matches);
      C != null && xe({ restoreScrollPosition: C });
    }
    return () => {
      N = null, w = null, v = null;
    };
  }
  function Pa(p, x) {
    return v && v(
      p,
      x.map((C) => Pi(C, b.loaderData))
    ) || p.key;
  }
  function Zs(p, x) {
    if (N && w) {
      let y = Pa(p, x);
      N[y] = w();
    }
  }
  function Aa(p, x) {
    if (N) {
      let y = Pa(p, x), C = N[y];
      if (typeof C == "number")
        return C;
    }
    return null;
  }
  function sn(p, x, y) {
    if (t.patchRoutesOnNavigation)
      if (p) {
        if (Object.keys(p[0].params).length > 0)
          return { active: !0, matches: Vt(
            x,
            y,
            u,
            !0
          ) };
      } else
        return { active: !0, matches: Vt(
          x,
          y,
          u,
          !0
        ) || [] };
    return { active: !1, matches: null };
  }
  async function ln(p, x, y, C) {
    if (!t.patchRoutesOnNavigation)
      return { type: "success", matches: p };
    let M = p;
    for (; ; ) {
      let O = d == null, P = d || o, L = c;
      try {
        await t.patchRoutesOnNavigation({
          signal: y,
          path: x,
          matches: M,
          fetcherKey: C,
          patch: (j, _) => {
            y.aborted || qa(
              j,
              _,
              P,
              L,
              l,
              !1
            );
          }
        });
      } catch (j) {
        return { type: "error", error: j, partialMatches: M };
      } finally {
        O && !y.aborted && (o = [...o]);
      }
      if (y.aborted)
        return { type: "aborted" };
      let $ = Xe(P, x, u), T = null;
      if ($) {
        if (Object.keys($[0].params).length === 0)
          return { type: "success", matches: $ };
        if (T = Vt(
          P,
          x,
          u,
          !0
        ), !(T && M.length < T.length && La(
          M,
          T.slice(0, M.length)
        )))
          return { type: "success", matches: $ };
      }
      if (T || (T = Vt(
        P,
        x,
        u,
        !0
      )), !T || La(M, T))
        return { type: "success", matches: null };
      M = T;
    }
  }
  function La(p, x) {
    return p.length === x.length && p.every((y, C) => y.route.id === x[C].route.id);
  }
  function Qs(p) {
    c = {}, d = qt(
      p,
      l,
      void 0,
      c
    );
  }
  function Xs(p, x, y = !1) {
    let C = d == null;
    qa(
      p,
      x,
      d || o,
      c,
      l,
      y
    ), C && (o = [...o], xe({}));
  }
  return D = {
    get basename() {
      return u;
    },
    get future() {
      return m;
    },
    get state() {
      return b;
    },
    get routes() {
      return o;
    },
    get window() {
      return n;
    },
    initialize: Es,
    subscribe: _s,
    enableScrollRestoration: Js,
    navigate: ka,
    fetch: Us,
    revalidate: Ts,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (p) => t.history.createHref(p),
    encodeLocation: (p) => t.history.encodeLocation(p),
    getFetcher: Sa,
    resetFetcher: qs,
    deleteFetcher: Ks,
    dispose: Bs,
    getBlocker: Ys,
    deleteBlocker: za,
    patchRoutes: Xs,
    _internalFetchControllers: Y,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: Qs,
    _internalSetStateDoNotUseOrYouWillBreakYourApp(p) {
      xe(p);
    }
  }, t.unstable_instrumentations && (D = Zi(
    D,
    t.unstable_instrumentations.map((p) => p.router).filter(Boolean)
  )), D;
}
function cl(t) {
  return t != null && ("formData" in t && t.formData != null || "body" in t && t.body !== void 0);
}
function Kn(t, n, a, s, i, l) {
  let c, o;
  if (i) {
    c = [];
    for (let u of n)
      if (c.push(u), u.route.id === i) {
        o = u;
        break;
      }
  } else
    c = n, o = n[n.length - 1];
  let d = ca(
    s || ".",
    oa(c),
    $e(t.pathname, a) || t.pathname,
    l === "path"
  );
  if (s == null && (d.search = t.search, d.hash = t.hash), (s == null || s === "" || s === ".") && o) {
    let u = ha(d.search);
    if (o.route.index && !u)
      d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index";
    else if (!o.route.index && u) {
      let h = new URLSearchParams(d.search), m = h.getAll("index");
      h.delete("index"), m.filter((f) => f).forEach((f) => h.append("index", f));
      let g = h.toString();
      d.search = g ? `?${g}` : "";
    }
  }
  return a !== "/" && (d.pathname = Hi({ basename: a, pathname: d.pathname })), je(d);
}
function Ha(t, n, a) {
  if (!a || !cl(a))
    return { path: n };
  if (a.formMethod && !Il(a.formMethod))
    return {
      path: n,
      error: Oe(405, { method: a.formMethod })
    };
  let s = () => ({
    path: n,
    error: Oe(400, { type: "invalid-body" })
  }), l = (a.formMethod || "get").toUpperCase(), c = Zr(n);
  if (a.body !== void 0) {
    if (a.formEncType === "text/plain") {
      if (!ye(l))
        return s();
      let m = typeof a.body == "string" ? a.body : a.body instanceof FormData || a.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(a.body.entries()).reduce(
          (g, [f, N]) => `${g}${f}=${N}
`,
          ""
        )
      ) : String(a.body);
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: c,
          formEncType: a.formEncType,
          formData: void 0,
          json: void 0,
          text: m
        }
      };
    } else if (a.formEncType === "application/json") {
      if (!ye(l))
        return s();
      try {
        let m = typeof a.body == "string" ? JSON.parse(a.body) : a.body;
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: c,
            formEncType: a.formEncType,
            formData: void 0,
            json: m,
            text: void 0
          }
        };
      } catch {
        return s();
      }
    }
  }
  U(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let o, d;
  if (a.formData)
    o = Zn(a.formData), d = a.formData;
  else if (a.body instanceof FormData)
    o = Zn(a.body), d = a.body;
  else if (a.body instanceof URLSearchParams)
    o = a.body, d = Qa(o);
  else if (a.body == null)
    o = new URLSearchParams(), d = new FormData();
  else
    try {
      o = new URLSearchParams(a.body), d = Qa(o);
    } catch {
      return s();
    }
  let u = {
    formMethod: l,
    formAction: c,
    formEncType: a && a.formEncType || "application/x-www-form-urlencoded",
    formData: d,
    json: void 0,
    text: void 0
  };
  if (ye(u.formMethod))
    return { path: n, submission: u };
  let h = rt(n);
  return t && h.search && ha(h.search) && o.append("index", ""), h.search = `?${o}`, { path: je(h), submission: u };
}
function Ga(t, n, a, s, i, l, c, o, d, u, h, m, g, f, N, v, w, S, W, R, E) {
  let z = R ? De(R[1]) ? R[1].error : R[1].data : void 0, D = i.createURL(l.location), b = i.createURL(d), B;
  if (h && l.errors) {
    let J = Object.keys(l.errors)[0];
    B = c.findIndex((ne) => ne.route.id === J);
  } else if (R && De(R[1])) {
    let J = R[0];
    B = c.findIndex((ne) => ne.route.id === J) - 1;
  }
  let G = R ? R[1].statusCode : void 0, te = G && G >= 400, ee = {
    currentUrl: D,
    currentParams: l.matches[0]?.params || {},
    nextUrl: b,
    nextParams: c[0].params,
    ...o,
    actionResult: z,
    actionStatus: G
  }, le = Qt(c), Re = c.map((J, ne) => {
    let { route: Ce } = J, Y = null;
    if (B != null && ne > B ? Y = !1 : Ce.lazy ? Y = !0 : da(Ce) ? h ? Y = Yn(
      Ce,
      l.loaderData,
      l.errors
    ) : dl(l.loaderData, l.matches[ne], J) && (Y = !0) : Y = !1, Y !== null)
      return Jn(
        a,
        s,
        t,
        le,
        J,
        u,
        n,
        Y
      );
    let k = !1;
    typeof E == "boolean" ? k = E : te ? k = !1 : (m || D.pathname + D.search === b.pathname + b.search || D.search !== b.search || ul(l.matches[ne], J)) && (k = !0);
    let ae = {
      ...ee,
      defaultShouldRevalidate: k
    }, oe = Ut(J, ae);
    return Jn(
      a,
      s,
      t,
      le,
      J,
      u,
      n,
      oe,
      ae,
      E
    );
  }), Z = [];
  return N.forEach((J, ne) => {
    if (h || !c.some((Ae) => Ae.route.id === J.routeId) || f.has(ne))
      return;
    let Ce = l.fetchers.get(ne), Y = Ce && Ce.state !== "idle" && Ce.data === void 0, k = Xe(w, J.path, S);
    if (!k) {
      if (W && Y)
        return;
      Z.push({
        key: ne,
        routeId: J.routeId,
        path: J.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (v.has(ne))
      return;
    let ae = xn(k, J.path), oe = new AbortController(), We = Nt(
      i,
      J.path,
      oe.signal
    ), Pe = null;
    if (g.has(ne))
      g.delete(ne), Pe = kt(
        a,
        s,
        We,
        k,
        ae,
        u,
        n
      );
    else if (Y)
      m && (Pe = kt(
        a,
        s,
        We,
        k,
        ae,
        u,
        n
      ));
    else {
      let Ae;
      typeof E == "boolean" ? Ae = E : te ? Ae = !1 : Ae = m;
      let ze = {
        ...ee,
        defaultShouldRevalidate: Ae
      };
      Ut(ae, ze) && (Pe = kt(
        a,
        s,
        We,
        k,
        ae,
        u,
        n,
        ze
      ));
    }
    Pe && Z.push({
      key: ne,
      routeId: J.routeId,
      path: J.path,
      matches: Pe,
      match: ae,
      request: We,
      controller: oe
    });
  }), { dsMatches: Re, revalidatingFetchers: Z };
}
function da(t) {
  return t.loader != null || t.middleware != null && t.middleware.length > 0;
}
function Yn(t, n, a) {
  if (t.lazy)
    return !0;
  if (!da(t))
    return !1;
  let s = n != null && t.id in n, i = a != null && a[t.id] !== void 0;
  return !s && i ? !1 : typeof t.loader == "function" && t.loader.hydrate === !0 ? !0 : !s && !i;
}
function dl(t, n, a) {
  let s = (
    // [a] -> [a, b]
    !n || // [a, b] -> [a, c]
    a.route.id !== n.route.id
  ), i = !t.hasOwnProperty(a.route.id);
  return s || i;
}
function ul(t, n) {
  let a = t.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    t.pathname !== n.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    a != null && a.endsWith("*") && t.params["*"] !== n.params["*"]
  );
}
function Ut(t, n) {
  if (t.route.shouldRevalidate) {
    let a = t.route.shouldRevalidate(n);
    if (typeof a == "boolean")
      return a;
  }
  return n.defaultShouldRevalidate;
}
function qa(t, n, a, s, i, l) {
  let c;
  if (t) {
    let u = s[t];
    U(
      u,
      `No route found to patch children into: routeId = ${t}`
    ), u.children || (u.children = []), c = u.children;
  } else
    c = a;
  let o = [], d = [];
  if (n.forEach((u) => {
    let h = c.find(
      (m) => Gr(u, m)
    );
    h ? d.push({ existingRoute: h, newRoute: u }) : o.push(u);
  }), o.length > 0) {
    let u = qt(
      o,
      i,
      [t || "_", "patch", String(c?.length || "0")],
      s
    );
    c.push(...u);
  }
  if (l && d.length > 0)
    for (let u = 0; u < d.length; u++) {
      let { existingRoute: h, newRoute: m } = d[u], g = h, [f] = qt(
        [m],
        i,
        [],
        // Doesn't matter for mutated routes since they already have an id
        {},
        // Don't touch the manifest here since we're updating in place
        !0
      );
      Object.assign(g, {
        element: f.element ? f.element : g.element,
        errorElement: f.errorElement ? f.errorElement : g.errorElement,
        hydrateFallbackElement: f.hydrateFallbackElement ? f.hydrateFallbackElement : g.hydrateFallbackElement
      });
    }
}
function Gr(t, n) {
  return "id" in t && "id" in n && t.id === n.id ? !0 : t.index === n.index && t.path === n.path && t.caseSensitive === n.caseSensitive ? (!t.children || t.children.length === 0) && (!n.children || n.children.length === 0) ? !0 : t.children.every(
    (a, s) => n.children?.some((i) => Gr(a, i))
  ) : !1;
}
var Ka = /* @__PURE__ */ new WeakMap(), qr = ({
  key: t,
  route: n,
  manifest: a,
  mapRouteProperties: s
}) => {
  let i = a[n.id];
  if (U(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object")
    return;
  let l = i.lazy[t];
  if (!l)
    return;
  let c = Ka.get(i);
  c || (c = {}, Ka.set(i, c));
  let o = c[t];
  if (o)
    return o;
  let d = (async () => {
    let u = Ii(t), m = i[t] !== void 0 && t !== "hasErrorBoundary";
    if (u)
      ce(
        !u,
        "Route property " + t + " is not a supported lazy route property. This property will be ignored."
      ), c[t] = Promise.resolve();
    else if (m)
      ce(
        !1,
        `Route "${i.id}" has a static property "${t}" defined. The lazy property will be ignored.`
      );
    else {
      let g = await l();
      g != null && (Object.assign(i, { [t]: g }), Object.assign(i, s(i)));
    }
    typeof i.lazy == "object" && (i.lazy[t] = void 0, Object.values(i.lazy).every((g) => g === void 0) && (i.lazy = void 0));
  })();
  return c[t] = d, d;
}, Ya = /* @__PURE__ */ new WeakMap();
function hl(t, n, a, s, i) {
  let l = a[t.id];
  if (U(l, "No route found in manifest"), !t.lazy)
    return {
      lazyRoutePromise: void 0,
      lazyHandlerPromise: void 0
    };
  if (typeof t.lazy == "function") {
    let h = Ya.get(l);
    if (h)
      return {
        lazyRoutePromise: h,
        lazyHandlerPromise: h
      };
    let m = (async () => {
      U(
        typeof t.lazy == "function",
        "No lazy route function found"
      );
      let g = await t.lazy(), f = {};
      for (let N in g) {
        let v = g[N];
        if (v === void 0)
          continue;
        let w = zi(N), W = l[N] !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        N !== "hasErrorBoundary";
        w ? ce(
          !w,
          "Route property " + N + " is not a supported property to be returned from a lazy route function. This property will be ignored."
        ) : W ? ce(
          !W,
          `Route "${l.id}" has a static property "${N}" defined but its lazy function is also returning a value for this property. The lazy route property "${N}" will be ignored.`
        ) : f[N] = v;
      }
      Object.assign(l, f), Object.assign(l, {
        // To keep things framework agnostic, we use the provided `mapRouteProperties`
        // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
        // since the logic will differ between frameworks.
        ...s(l),
        lazy: void 0
      });
    })();
    return Ya.set(l, m), m.catch(() => {
    }), {
      lazyRoutePromise: m,
      lazyHandlerPromise: m
    };
  }
  let c = Object.keys(t.lazy), o = [], d;
  for (let h of c) {
    if (i && i.includes(h))
      continue;
    let m = qr({
      key: h,
      route: t,
      manifest: a,
      mapRouteProperties: s
    });
    m && (o.push(m), h === n && (d = m));
  }
  let u = o.length > 0 ? Promise.all(o).then(() => {
  }) : void 0;
  return u?.catch(() => {
  }), d?.catch(() => {
  }), {
    lazyRoutePromise: u,
    lazyHandlerPromise: d
  };
}
async function Ja(t) {
  let n = t.matches.filter((i) => i.shouldLoad), a = {};
  return (await Promise.all(n.map((i) => i.resolve()))).forEach((i, l) => {
    a[n[l].route.id] = i;
  }), a;
}
async function pl(t) {
  return t.matches.some((n) => n.route.middleware) ? Kr(t, () => Ja(t)) : Ja(t);
}
function Kr(t, n) {
  return fl(
    t,
    n,
    (s) => {
      if (Ml(s))
        throw s;
      return s;
    },
    kl,
    a
  );
  function a(s, i, l) {
    if (l)
      return Promise.resolve(
        Object.assign(l.value, {
          [i]: { type: "error", result: s }
        })
      );
    {
      let { matches: c } = t, o = Math.min(
        // Throwing route
        Math.max(
          c.findIndex((u) => u.route.id === i),
          0
        ),
        // or the shallowest route that needs to load data
        Math.max(
          c.findIndex((u) => u.shouldCallHandler()),
          0
        )
      ), d = et(
        c,
        c[o].route.id
      ).route.id;
      return Promise.resolve({
        [d]: { type: "error", result: s }
      });
    }
  }
}
async function fl(t, n, a, s, i) {
  let { matches: l, request: c, params: o, context: d, unstable_pattern: u } = t, h = l.flatMap(
    (g) => g.route.middleware ? g.route.middleware.map((f) => [g.route.id, f]) : []
  );
  return await Yr(
    {
      request: c,
      params: o,
      context: d,
      unstable_pattern: u
    },
    h,
    n,
    a,
    s,
    i
  );
}
async function Yr(t, n, a, s, i, l, c = 0) {
  let { request: o } = t;
  if (o.signal.aborted)
    throw o.signal.reason ?? new Error(`Request aborted: ${o.method} ${o.url}`);
  let d = n[c];
  if (!d)
    return await a();
  let [u, h] = d, m, g = async () => {
    if (m)
      throw new Error("You may only call `next()` once per middleware");
    try {
      return m = { value: await Yr(
        t,
        n,
        a,
        s,
        i,
        l,
        c + 1
      ) }, m.value;
    } catch (f) {
      return m = { value: await l(f, u, m) }, m.value;
    }
  };
  try {
    let f = await h(t, g), N = f != null ? s(f) : void 0;
    return i(N) ? N : m ? N ?? m.value : (m = { value: await g() }, m.value);
  } catch (f) {
    return await l(f, u, m);
  }
}
function Jr(t, n, a, s, i) {
  let l = qr({
    key: "middleware",
    route: s.route,
    manifest: n,
    mapRouteProperties: t
  }), c = hl(
    s.route,
    ye(a.method) ? "action" : "loader",
    n,
    t,
    i
  );
  return {
    middleware: l,
    route: c.lazyRoutePromise,
    handler: c.lazyHandlerPromise
  };
}
function Jn(t, n, a, s, i, l, c, o, d = null, u) {
  let h = !1, m = Jr(
    t,
    n,
    a,
    i,
    l
  );
  return {
    ...i,
    _lazyPromises: m,
    shouldLoad: o,
    shouldRevalidateArgs: d,
    shouldCallHandler(g) {
      return h = !0, d ? typeof u == "boolean" ? Ut(i, {
        ...d,
        defaultShouldRevalidate: u
      }) : typeof g == "boolean" ? Ut(i, {
        ...d,
        defaultShouldRevalidate: g
      }) : Ut(i, d) : o;
    },
    resolve(g) {
      let { lazy: f, loader: N, middleware: v } = i.route, w = h || o || g && !ye(a.method) && (f || N), S = v && v.length > 0 && !N && !f;
      return w && (ye(a.method) || !S) ? xl({
        request: a,
        unstable_pattern: s,
        match: i,
        lazyHandlerPromise: m?.handler,
        lazyRoutePromise: m?.route,
        handlerOverride: g,
        scopedContext: c
      }) : Promise.resolve({ type: "data", result: void 0 });
    }
  };
}
function kt(t, n, a, s, i, l, c, o = null) {
  return s.map((d) => d.route.id !== i.route.id ? {
    ...d,
    shouldLoad: !1,
    shouldRevalidateArgs: o,
    shouldCallHandler: () => !1,
    _lazyPromises: Jr(
      t,
      n,
      a,
      d,
      l
    ),
    resolve: () => Promise.resolve({ type: "data", result: void 0 })
  } : Jn(
    t,
    n,
    a,
    Qt(s),
    d,
    l,
    c,
    !0,
    o
  ));
}
async function ml(t, n, a, s, i, l) {
  a.some((u) => u._lazyPromises?.middleware) && await Promise.all(a.map((u) => u._lazyPromises?.middleware));
  let c = {
    request: n,
    unstable_pattern: Qt(a),
    params: a[0].params,
    context: i,
    matches: a
  }, d = await t({
    ...c,
    fetcherKey: s,
    runClientMiddleware: (u) => {
      let h = c;
      return Kr(h, () => u({
        ...h,
        fetcherKey: s,
        runClientMiddleware: () => {
          throw new Error(
            "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
          );
        }
      }));
    }
  });
  try {
    await Promise.all(
      a.flatMap((u) => [
        u._lazyPromises?.handler,
        u._lazyPromises?.route
      ])
    );
  } catch {
  }
  return d;
}
async function xl({
  request: t,
  unstable_pattern: n,
  match: a,
  lazyHandlerPromise: s,
  lazyRoutePromise: i,
  handlerOverride: l,
  scopedContext: c
}) {
  let o, d, u = ye(t.method), h = u ? "action" : "loader", m = (g) => {
    let f, N = new Promise((S, W) => f = W);
    d = () => f(), t.signal.addEventListener("abort", d);
    let v = (S) => typeof g != "function" ? Promise.reject(
      new Error(
        `You cannot call the handler for a route which defines a boolean "${h}" [routeId: ${a.route.id}]`
      )
    ) : g(
      {
        request: t,
        unstable_pattern: n,
        params: a.params,
        context: c
      },
      ...S !== void 0 ? [S] : []
    ), w = (async () => {
      try {
        return { type: "data", result: await (l ? l((W) => v(W)) : v()) };
      } catch (S) {
        return { type: "error", result: S };
      }
    })();
    return Promise.race([w, N]);
  };
  try {
    let g = u ? a.route.action : a.route.loader;
    if (s || i)
      if (g) {
        let f, [N] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          m(g).catch((v) => {
            f = v;
          }),
          // Ensure all lazy route promises are resolved before continuing
          s,
          i
        ]);
        if (f !== void 0)
          throw f;
        o = N;
      } else {
        await s;
        let f = u ? a.route.action : a.route.loader;
        if (f)
          [o] = await Promise.all([m(f), i]);
        else if (h === "action") {
          let N = new URL(t.url), v = N.pathname + N.search;
          throw Oe(405, {
            method: t.method,
            pathname: v,
            routeId: a.route.id
          });
        } else
          return { type: "data", result: void 0 };
      }
    else if (g)
      o = await m(g);
    else {
      let f = new URL(t.url), N = f.pathname + f.search;
      throw Oe(404, {
        pathname: N
      });
    }
  } catch (g) {
    return { type: "error", result: g };
  } finally {
    d && t.signal.removeEventListener("abort", d);
  }
  return o;
}
async function gl(t) {
  let n = t.headers.get("Content-Type");
  return n && /\bapplication\/json\b/.test(n) ? t.body == null ? null : t.json() : t.text();
}
async function yl(t) {
  let { result: n, type: a } = t;
  if (ua(n)) {
    let s;
    try {
      s = await gl(n);
    } catch (i) {
      return { type: "error", error: i };
    }
    return a === "error" ? {
      type: "error",
      error: new Zt(n.status, n.statusText, s),
      statusCode: n.status,
      headers: n.headers
    } : {
      type: "data",
      data: s,
      statusCode: n.status,
      headers: n.headers
    };
  }
  return a === "error" ? nr(n) ? n.data instanceof Error ? {
    type: "error",
    error: n.data,
    statusCode: n.init?.status,
    headers: n.init?.headers ? new Headers(n.init.headers) : void 0
  } : {
    type: "error",
    error: wl(n),
    statusCode: Kt(n) ? n.status : void 0,
    headers: n.init?.headers ? new Headers(n.init.headers) : void 0
  } : {
    type: "error",
    error: n,
    statusCode: Kt(n) ? n.status : void 0
  } : nr(n) ? {
    type: "data",
    data: n.data,
    statusCode: n.init?.status,
    headers: n.init?.headers ? new Headers(n.init.headers) : void 0
  } : { type: "data", data: n };
}
function bl(t, n, a, s, i) {
  let l = t.headers.get("Location");
  if (U(
    l,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  ), !la(l)) {
    let c = s.slice(
      0,
      s.findIndex((o) => o.route.id === a) + 1
    );
    l = Kn(
      new URL(n.url),
      c,
      i,
      l
    ), t.headers.set("Location", l);
  }
  return t;
}
function Za(t, n, a, s) {
  let i = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  if (la(t)) {
    let l = t, c = l.startsWith("//") ? new URL(n.protocol + l) : new URL(l);
    if (i.includes(c.protocol))
      throw new Error("Invalid redirect location");
    let o = $e(c.pathname, a) != null;
    if (c.origin === n.origin && o)
      return c.pathname + c.search + c.hash;
  }
  try {
    let l = s.createURL(t);
    if (i.includes(l.protocol))
      throw new Error("Invalid redirect location");
  } catch {
  }
  return t;
}
function Nt(t, n, a, s) {
  let i = t.createURL(Zr(n)).toString(), l = { signal: a };
  if (s && ye(s.formMethod)) {
    let { formMethod: c, formEncType: o } = s;
    l.method = c.toUpperCase(), o === "application/json" ? (l.headers = new Headers({ "Content-Type": o }), l.body = JSON.stringify(s.json)) : o === "text/plain" ? l.body = s.text : o === "application/x-www-form-urlencoded" && s.formData ? l.body = Zn(s.formData) : l.body = s.formData;
  }
  return new Request(i, l);
}
function Zn(t) {
  let n = new URLSearchParams();
  for (let [a, s] of t.entries())
    n.append(a, typeof s == "string" ? s : s.name);
  return n;
}
function Qa(t) {
  let n = new FormData();
  for (let [a, s] of t.entries())
    n.append(a, s);
  return n;
}
function vl(t, n, a, s = !1, i = !1) {
  let l = {}, c = null, o, d = !1, u = {}, h = a && De(a[1]) ? a[1].error : void 0;
  return t.forEach((m) => {
    if (!(m.route.id in n))
      return;
    let g = m.route.id, f = n[g];
    if (U(
      !ft(f),
      "Cannot handle redirect results in processLoaderData"
    ), De(f)) {
      let N = f.error;
      if (h !== void 0 && (N = h, h = void 0), c = c || {}, i)
        c[g] = N;
      else {
        let v = et(t, g);
        c[v.route.id] == null && (c[v.route.id] = N);
      }
      s || (l[g] = Hr), d || (d = !0, o = Kt(f.error) ? f.error.status : 500), f.headers && (u[g] = f.headers);
    } else
      l[g] = f.data, f.statusCode && f.statusCode !== 200 && !d && (o = f.statusCode), f.headers && (u[g] = f.headers);
  }), h !== void 0 && a && (c = { [a[0]]: h }, a[2] && (l[a[2]] = void 0)), {
    loaderData: l,
    errors: c,
    statusCode: o || 200,
    loaderHeaders: u
  };
}
function Xa(t, n, a, s, i, l) {
  let { loaderData: c, errors: o } = vl(
    n,
    a,
    s
  );
  return i.filter((d) => !d.matches || d.matches.some((u) => u.shouldLoad)).forEach((d) => {
    let { key: u, match: h, controller: m } = d;
    if (m && m.signal.aborted)
      return;
    let g = l[u];
    if (U(g, "Did not find corresponding fetcher result"), De(g)) {
      let f = et(t.matches, h?.route.id);
      o && o[f.route.id] || (o = {
        ...o,
        [f.route.id]: g.error
      }), t.fetchers.delete(u);
    } else if (ft(g))
      U(!1, "Unhandled fetcher revalidation redirect");
    else {
      let f = qe(g.data);
      t.fetchers.set(u, f);
    }
  }), { loaderData: c, errors: o };
}
function er(t, n, a, s) {
  let i = Object.entries(n).filter(([, l]) => l !== Hr).reduce((l, [c, o]) => (l[c] = o, l), {});
  for (let l of a) {
    let c = l.route.id;
    if (!n.hasOwnProperty(c) && t.hasOwnProperty(c) && l.route.loader && (i[c] = t[c]), s && s.hasOwnProperty(c))
      break;
  }
  return i;
}
function tr(t) {
  return t ? De(t[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [t[0]]: t[1].data
    }
  } : {};
}
function et(t, n) {
  return (n ? t.slice(0, t.findIndex((s) => s.route.id === n) + 1) : [...t]).reverse().find((s) => s.route.hasErrorBoundary === !0) || t[0];
}
function hn(t) {
  let n = t.length === 1 ? t[0] : t.find((a) => a.index || !a.path || a.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route: n
      }
    ],
    route: n
  };
}
function Oe(t, {
  pathname: n,
  routeId: a,
  method: s,
  type: i,
  message: l
} = {}) {
  let c = "Unknown Server Error", o = "Unknown @remix-run/router error";
  return t === 400 ? (c = "Bad Request", s && n && a ? o = `You made a ${s} request to "${n}" but did not provide a \`loader\` for route "${a}", so there is no way to handle the request.` : i === "invalid-body" && (o = "Unable to encode submission body")) : t === 403 ? (c = "Forbidden", o = `Route "${a}" does not match URL "${n}"`) : t === 404 ? (c = "Not Found", o = `No route matches URL "${n}"`) : t === 405 && (c = "Method Not Allowed", s && n && a ? o = `You made a ${s.toUpperCase()} request to "${n}" but did not provide an \`action\` for route "${a}", so there is no way to handle the request.` : s && (o = `Invalid request method "${s.toUpperCase()}"`)), new Zt(
    t || 500,
    c,
    new Error(o),
    !0
  );
}
function pn(t) {
  let n = Object.entries(t);
  for (let a = n.length - 1; a >= 0; a--) {
    let [s, i] = n[a];
    if (ft(i))
      return { key: s, result: i };
  }
}
function Zr(t) {
  let n = typeof t == "string" ? rt(t) : t;
  return je({ ...n, hash: "" });
}
function Nl(t, n) {
  return t.pathname !== n.pathname || t.search !== n.search ? !1 : t.hash === "" ? n.hash !== "" : t.hash === n.hash ? !0 : n.hash !== "";
}
function wl(t) {
  return new Zt(
    t.init?.status ?? 500,
    t.init?.statusText ?? "Internal Server Error",
    t.data
  );
}
function kl(t) {
  return t != null && typeof t == "object" && Object.entries(t).every(
    ([n, a]) => typeof n == "string" && Cl(a)
  );
}
function Cl(t) {
  return t != null && typeof t == "object" && "type" in t && "result" in t && (t.type === "data" || t.type === "error");
}
function Wl(t) {
  return ua(t.result) && Fr.has(t.result.status);
}
function De(t) {
  return t.type === "error";
}
function ft(t) {
  return (t && t.type) === "redirect";
}
function nr(t) {
  return typeof t == "object" && t != null && "type" in t && "data" in t && "init" in t && t.type === "DataWithResponseInit";
}
function ua(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.headers == "object" && typeof t.body < "u";
}
function Sl(t) {
  return Fr.has(t);
}
function Ml(t) {
  return ua(t) && Sl(t.status) && t.headers.has("Location");
}
function Il(t) {
  return rl.has(t.toUpperCase());
}
function ye(t) {
  return nl.has(t.toUpperCase());
}
function ha(t) {
  return new URLSearchParams(t).getAll("index").some((n) => n === "");
}
function xn(t, n) {
  let a = typeof n == "string" ? rt(n).search : n.search;
  if (t[t.length - 1].route.index && ha(a || ""))
    return t[t.length - 1];
  let s = Br(t);
  return s[s.length - 1];
}
function ar(t) {
  let { formMethod: n, formAction: a, formEncType: s, text: i, formData: l, json: c } = t;
  if (!(!n || !a || !s)) {
    if (i != null)
      return {
        formMethod: n,
        formAction: a,
        formEncType: s,
        formData: void 0,
        json: void 0,
        text: i
      };
    if (l != null)
      return {
        formMethod: n,
        formAction: a,
        formEncType: s,
        formData: l,
        json: void 0,
        text: void 0
      };
    if (c !== void 0)
      return {
        formMethod: n,
        formAction: a,
        formEncType: s,
        formData: void 0,
        json: c,
        text: void 0
      };
  }
}
function Tn(t, n) {
  return n ? {
    state: "loading",
    location: t,
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text
  } : {
    state: "loading",
    location: t,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function Rl(t, n) {
  return {
    state: "submitting",
    location: t,
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text
  };
}
function $t(t, n) {
  return t ? {
    state: "loading",
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
    data: n
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: n
  };
}
function zl(t, n) {
  return {
    state: "submitting",
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
    data: n ? n.data : void 0
  };
}
function qe(t) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t
  };
}
function Dl(t, n) {
  try {
    let a = t.sessionStorage.getItem(
      Ur
    );
    if (a) {
      let s = JSON.parse(a);
      for (let [i, l] of Object.entries(s || {}))
        l && Array.isArray(l) && n.set(i, new Set(l || []));
    }
  } catch {
  }
}
function Pl(t, n) {
  if (n.size > 0) {
    let a = {};
    for (let [s, i] of n)
      a[s] = [...i];
    try {
      t.sessionStorage.setItem(
        Ur,
        JSON.stringify(a)
      );
    } catch (s) {
      ce(
        !1,
        `Failed to save applied view transitions in sessionStorage (${s}).`
      );
    }
  }
}
function rr() {
  let t, n, a = new Promise((s, i) => {
    t = async (l) => {
      s(l);
      try {
        await a;
      } catch {
      }
    }, n = async (l) => {
      i(l);
      try {
        await a;
      } catch {
      }
    };
  });
  return {
    promise: a,
    //@ts-ignore
    resolve: t,
    //@ts-ignore
    reject: n
  };
}
var gt = ue(null);
gt.displayName = "DataRouter";
var Xt = ue(null);
Xt.displayName = "DataRouterState";
var Qr = ue(!1);
function Al() {
  return F(Qr);
}
var pa = ue({
  isTransitioning: !1
});
pa.displayName = "ViewTransition";
var Xr = ue(
  /* @__PURE__ */ new Map()
);
Xr.displayName = "Fetchers";
var Ll = ue(null);
Ll.displayName = "Await";
var Ee = ue(
  null
);
Ee.displayName = "Navigation";
var wn = ue(
  null
);
wn.displayName = "Location";
var Be = ue({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Be.displayName = "Route";
var fa = ue(null);
fa.displayName = "RouteError";
var es = "REACT_ROUTER_ERROR", Ol = "REDIRECT", $l = "ROUTE_ERROR_RESPONSE";
function El(t) {
  if (t.startsWith(`${es}:${Ol}:{`))
    try {
      let n = JSON.parse(t.slice(28));
      if (typeof n == "object" && n && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.location == "string" && typeof n.reloadDocument == "boolean" && typeof n.replace == "boolean")
        return n;
    } catch {
    }
}
function Bl(t) {
  if (t.startsWith(
    `${es}:${$l}:{`
  ))
    try {
      let n = JSON.parse(t.slice(40));
      if (typeof n == "object" && n && typeof n.status == "number" && typeof n.statusText == "string")
        return new Zt(
          n.status,
          n.statusText,
          n.data
        );
    } catch {
    }
}
function _l(t, { relative: n } = {}) {
  U(
    en(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: s } = F(Ee), { hash: i, pathname: l, search: c } = tn(t, { relative: n }), o = l;
  return a !== "/" && (o = l === "/" ? a : Te([a, l])), s.createHref({ pathname: o, search: c, hash: i });
}
function en() {
  return F(wn) != null;
}
function Ze() {
  return U(
    en(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), F(wn).location;
}
var ts = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ns(t) {
  F(Ee).static || ia(t);
}
function pe() {
  let { isDataRoute: t } = F(Be);
  return t ? to() : Tl();
}
function Tl() {
  U(
    en(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let t = F(gt), { basename: n, navigator: a } = F(Ee), { matches: s } = F(Be), { pathname: i } = Ze(), l = JSON.stringify(oa(s)), c = Se(!1);
  return ns(() => {
    c.current = !0;
  }), Me(
    (d, u = {}) => {
      if (ce(c.current, ts), !c.current) return;
      if (typeof d == "number") {
        a.go(d);
        return;
      }
      let h = ca(
        d,
        JSON.parse(l),
        i,
        u.relative === "path"
      );
      t == null && n !== "/" && (h.pathname = h.pathname === "/" ? n : Te([n, h.pathname])), (u.replace ? a.replace : a.push)(
        h,
        u.state,
        u
      );
    },
    [
      n,
      a,
      l,
      i,
      t
    ]
  );
}
var jl = ue(null);
function Vl(t) {
  let n = F(Be).outlet;
  return Ne(
    () => n && /* @__PURE__ */ V(jl.Provider, { value: t }, n),
    [n, t]
  );
}
function Fl() {
  let { matches: t } = F(Be), n = t[t.length - 1];
  return n ? n.params : {};
}
function tn(t, { relative: n } = {}) {
  let { matches: a } = F(Be), { pathname: s } = Ze(), i = JSON.stringify(oa(a));
  return Ne(
    () => ca(
      t,
      JSON.parse(i),
      s,
      n === "path"
    ),
    [t, i, s, n]
  );
}
function Ul(t, n, a, s, i) {
  U(
    en(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l } = F(Ee), { matches: c } = F(Be), o = c[c.length - 1], d = o ? o.params : {}, u = o ? o.pathname : "/", h = o ? o.pathnameBase : "/", m = o && o.route;
  {
    let W = m && m.path || "";
    rs(
      u,
      !m || W.endsWith("*") || W.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W === "/" ? "*" : `${W}/*`}">.`
    );
  }
  let g = Ze(), f;
  f = g;
  let N = f.pathname || "/", v = N;
  if (h !== "/") {
    let W = h.replace(/^\//, "").split("/");
    v = "/" + N.replace(/^\//, "").split("/").slice(W.length).join("/");
  }
  let w = Xe(t, { pathname: v });
  return ce(
    m || w != null,
    `No routes matched location "${f.pathname}${f.search}${f.hash}" `
  ), ce(
    w == null || w[w.length - 1].route.element !== void 0 || w[w.length - 1].route.Component !== void 0 || w[w.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), Yl(
    w && w.map(
      (W) => Object.assign({}, W, {
        params: Object.assign({}, d, W.params),
        pathname: Te([
          h,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          l.encodeLocation ? l.encodeLocation(
            W.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : W.pathname
        ]),
        pathnameBase: W.pathnameBase === "/" ? h : Te([
          h,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          l.encodeLocation ? l.encodeLocation(
            W.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : W.pathnameBase
        ])
      })
    ),
    c,
    a,
    s,
    i
  );
}
function Hl() {
  let t = eo(), n = Kt(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t), a = t instanceof Error ? t.stack : null, s = "rgba(200,200,200, 0.5)", i = { padding: "0.5rem", backgroundColor: s }, l = { padding: "2px 4px", backgroundColor: s }, c = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    t
  ), c = /* @__PURE__ */ V(St, null, /* @__PURE__ */ V("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ V("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ V("code", { style: l }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ V("code", { style: l }, "errorElement"), " prop on your route.")), /* @__PURE__ */ V(St, null, /* @__PURE__ */ V("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ V("h3", { style: { fontStyle: "italic" } }, n), a ? /* @__PURE__ */ V("pre", { style: i }, a) : null, c);
}
var Gl = /* @__PURE__ */ V(Hl, null), as = class extends Dr {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    this.props.onError ? this.props.onError(t, n) : console.error(
      "React Router caught the following error during render",
      t
    );
  }
  render() {
    let t = this.state.error;
    if (this.context && typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
      const a = Bl(t.digest);
      a && (t = a);
    }
    let n = t !== void 0 ? /* @__PURE__ */ V(Be.Provider, { value: this.props.routeContext }, /* @__PURE__ */ V(
      fa.Provider,
      {
        value: t,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ V(ql, { error: t }, n) : n;
  }
};
as.contextType = Qr;
var jn = /* @__PURE__ */ new WeakMap();
function ql({
  children: t,
  error: n
}) {
  let { basename: a } = F(Ee);
  if (typeof n == "object" && n && "digest" in n && typeof n.digest == "string") {
    let s = El(n.digest);
    if (s) {
      let i = jn.get(n);
      if (i) throw i;
      let l = Tr(s.location, a);
      if (_r && !jn.get(n))
        if (l.isExternal || s.reloadDocument)
          window.location.href = l.absoluteURL || l.to;
        else {
          const c = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(l.to, {
              replace: s.replace
            })
          );
          throw jn.set(n, c), c;
        }
      return /* @__PURE__ */ V(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${l.absoluteURL || l.to}`
        }
      );
    }
  }
  return t;
}
function Kl({ routeContext: t, match: n, children: a }) {
  let s = F(gt);
  return s && s.static && s.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ V(Be.Provider, { value: t }, a);
}
function Yl(t, n = [], a = null, s = null, i = null) {
  if (t == null) {
    if (!a)
      return null;
    if (a.errors)
      t = a.matches;
    else if (n.length === 0 && !a.initialized && a.matches.length > 0)
      t = a.matches;
    else
      return null;
  }
  let l = t, c = a?.errors;
  if (c != null) {
    let h = l.findIndex(
      (m) => m.route.id && c?.[m.route.id] !== void 0
    );
    U(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        c
      ).join(",")}`
    ), l = l.slice(
      0,
      Math.min(l.length, h + 1)
    );
  }
  let o = !1, d = -1;
  if (a)
    for (let h = 0; h < l.length; h++) {
      let m = l[h];
      if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (d = h), m.route.id) {
        let { loaderData: g, errors: f } = a, N = m.route.loader && !g.hasOwnProperty(m.route.id) && (!f || f[m.route.id] === void 0);
        if (m.route.lazy || N) {
          o = !0, d >= 0 ? l = l.slice(0, d + 1) : l = [l[0]];
          break;
        }
      }
    }
  let u = a && s ? (h, m) => {
    s(h, {
      location: a.location,
      params: a.matches?.[0]?.params ?? {},
      unstable_pattern: Qt(a.matches),
      errorInfo: m
    });
  } : void 0;
  return l.reduceRight(
    (h, m, g) => {
      let f, N = !1, v = null, w = null;
      a && (f = c && m.route.id ? c[m.route.id] : void 0, v = m.route.errorElement || Gl, o && (d < 0 && g === 0 ? (rs(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), N = !0, w = null) : d === g && (N = !0, w = m.route.hydrateFallbackElement || null)));
      let S = n.concat(l.slice(0, g + 1)), W = () => {
        let R;
        return f ? R = v : N ? R = w : m.route.Component ? R = /* @__PURE__ */ V(m.route.Component, null) : m.route.element ? R = m.route.element : R = h, /* @__PURE__ */ V(
          Kl,
          {
            match: m,
            routeContext: {
              outlet: h,
              matches: S,
              isDataRoute: a != null
            },
            children: R
          }
        );
      };
      return a && (m.route.ErrorBoundary || m.route.errorElement || g === 0) ? /* @__PURE__ */ V(
        as,
        {
          location: a.location,
          revalidation: a.revalidation,
          component: v,
          error: f,
          children: W(),
          routeContext: { outlet: null, matches: S, isDataRoute: !0 },
          onError: u
        }
      ) : W();
    },
    null
  );
}
function ma(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jl(t) {
  let n = F(gt);
  return U(n, ma(t)), n;
}
function Zl(t) {
  let n = F(Xt);
  return U(n, ma(t)), n;
}
function Ql(t) {
  let n = F(Be);
  return U(n, ma(t)), n;
}
function xa(t) {
  let n = Ql(t), a = n.matches[n.matches.length - 1];
  return U(
    a.route.id,
    `${t} can only be used on routes that contain a unique "id"`
  ), a.route.id;
}
function Xl() {
  return xa(
    "useRouteId"
    /* UseRouteId */
  );
}
function eo() {
  let t = F(fa), n = Zl(
    "useRouteError"
    /* UseRouteError */
  ), a = xa(
    "useRouteError"
    /* UseRouteError */
  );
  return t !== void 0 ? t : n.errors?.[a];
}
function to() {
  let { router: t } = Jl(
    "useNavigate"
    /* UseNavigateStable */
  ), n = xa(
    "useNavigate"
    /* UseNavigateStable */
  ), a = Se(!1);
  return ns(() => {
    a.current = !0;
  }), Me(
    async (i, l = {}) => {
      ce(a.current, ts), a.current && (typeof i == "number" ? await t.navigate(i) : await t.navigate(i, { fromRouteId: n, ...l }));
    },
    [t, n]
  );
}
var sr = {};
function rs(t, n, a) {
  !n && !sr[t] && (sr[t] = !0, ce(!1, a));
}
var ir = {};
function lr(t, n) {
  !t && !ir[n] && (ir[n] = !0, console.warn(n));
}
var no = "useOptimistic", or = Ni[no], ao = () => {
};
function ro(t) {
  return or ? or(t) : [t, ao];
}
function so(t) {
  let n = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: t.hasErrorBoundary || t.ErrorBoundary != null || t.errorElement != null
  };
  return t.Component && (t.element && ce(
    !1,
    "You should not include both `Component` and `element` on your route - `Component` will be used."
  ), Object.assign(n, {
    element: V(t.Component),
    Component: void 0
  })), t.HydrateFallback && (t.hydrateFallbackElement && ce(
    !1,
    "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
  ), Object.assign(n, {
    hydrateFallbackElement: V(t.HydrateFallback),
    HydrateFallback: void 0
  })), t.ErrorBoundary && (t.errorElement && ce(
    !1,
    "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
  ), Object.assign(n, {
    errorElement: V(t.ErrorBoundary),
    ErrorBoundary: void 0
  })), n;
}
var io = [
  "HydrateFallback",
  "hydrateFallbackElement"
], lo = class {
  constructor() {
    this.status = "pending", this.promise = new Promise((t, n) => {
      this.resolve = (a) => {
        this.status === "pending" && (this.status = "resolved", t(a));
      }, this.reject = (a) => {
        this.status === "pending" && (this.status = "rejected", n(a));
      };
    });
  }
};
function oo({
  router: t,
  flushSync: n,
  onError: a,
  unstable_useTransitions: s
}) {
  s = Al() || s;
  let [l, c] = A(t.state), [o, d] = ro(l), [u, h] = A(), [m, g] = A({
    isTransitioning: !1
  }), [f, N] = A(), [v, w] = A(), [S, W] = A(), R = Se(/* @__PURE__ */ new Map()), E = Me(
    (B, { deletedFetchers: G, newErrors: te, flushSync: ee, viewTransitionOpts: le }) => {
      te && a && Object.values(te).forEach(
        (Z) => a(Z, {
          location: B.location,
          params: B.matches[0]?.params ?? {},
          unstable_pattern: Qt(B.matches)
        })
      ), B.fetchers.forEach((Z, J) => {
        Z.data !== void 0 && R.current.set(J, Z.data);
      }), G.forEach((Z) => R.current.delete(Z)), lr(
        ee === !1 || n != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let Re = t.window != null && t.window.document != null && typeof t.window.document.startViewTransition == "function";
      if (lr(
        le == null || Re,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      ), !le || !Re) {
        n && ee ? n(() => c(B)) : s === !1 ? c(B) : Ht(() => {
          s === !0 && d((Z) => cr(Z, B)), c(B);
        });
        return;
      }
      if (n && ee) {
        n(() => {
          v && (f?.resolve(), v.skipTransition()), g({
            isTransitioning: !0,
            flushSync: !0,
            currentLocation: le.currentLocation,
            nextLocation: le.nextLocation
          });
        });
        let Z = t.window.document.startViewTransition(() => {
          n(() => c(B));
        });
        Z.finished.finally(() => {
          n(() => {
            N(void 0), w(void 0), h(void 0), g({ isTransitioning: !1 });
          });
        }), n(() => w(Z));
        return;
      }
      v ? (f?.resolve(), v.skipTransition(), W({
        state: B,
        currentLocation: le.currentLocation,
        nextLocation: le.nextLocation
      })) : (h(B), g({
        isTransitioning: !0,
        flushSync: !1,
        currentLocation: le.currentLocation,
        nextLocation: le.nextLocation
      }));
    },
    [
      t.window,
      n,
      v,
      f,
      s,
      d,
      a
    ]
  );
  ia(() => t.subscribe(E), [t, E]), X(() => {
    m.isTransitioning && !m.flushSync && N(new lo());
  }, [m]), X(() => {
    if (f && u && t.window) {
      let B = u, G = f.promise, te = t.window.document.startViewTransition(async () => {
        s === !1 ? c(B) : Ht(() => {
          s === !0 && d((ee) => cr(ee, B)), c(B);
        }), await G;
      });
      te.finished.finally(() => {
        N(void 0), w(void 0), h(void 0), g({ isTransitioning: !1 });
      }), w(te);
    }
  }, [
    u,
    f,
    t.window,
    s,
    d
  ]), X(() => {
    f && u && o.location.key === u.location.key && f.resolve();
  }, [f, v, o.location, u]), X(() => {
    !m.isTransitioning && S && (h(S.state), g({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: S.currentLocation,
      nextLocation: S.nextLocation
    }), W(void 0));
  }, [m.isTransitioning, S]);
  let z = Ne(() => ({
    createHref: t.createHref,
    encodeLocation: t.encodeLocation,
    go: (B) => t.navigate(B),
    push: (B, G, te) => t.navigate(B, {
      state: G,
      preventScrollReset: te?.preventScrollReset
    }),
    replace: (B, G, te) => t.navigate(B, {
      replace: !0,
      state: G,
      preventScrollReset: te?.preventScrollReset
    })
  }), [t]), D = t.basename || "/", b = Ne(
    () => ({
      router: t,
      navigator: z,
      static: !1,
      basename: D,
      onError: a
    }),
    [t, z, D, a]
  );
  return /* @__PURE__ */ V(St, null, /* @__PURE__ */ V(gt.Provider, { value: b }, /* @__PURE__ */ V(Xt.Provider, { value: o }, /* @__PURE__ */ V(Xr.Provider, { value: R.current }, /* @__PURE__ */ V(pa.Provider, { value: m }, /* @__PURE__ */ V(
    po,
    {
      basename: D,
      location: o.location,
      navigationType: o.historyAction,
      navigator: z,
      unstable_useTransitions: s
    },
    /* @__PURE__ */ V(
      co,
      {
        routes: t.routes,
        future: t.future,
        state: o,
        onError: a
      }
    )
  ))))), null);
}
function cr(t, n) {
  return {
    // Don't surface "current location specific" stuff mid-navigation
    // (historyAction, location, matches, loaderData, errors, initialized,
    // restoreScroll, preventScrollReset, blockers, etc.)
    ...t,
    // Only surface "pending/in-flight stuff"
    // (navigation, revalidation, actionData, fetchers, )
    navigation: n.navigation.state !== "idle" ? n.navigation : t.navigation,
    revalidation: n.revalidation !== "idle" ? n.revalidation : t.revalidation,
    actionData: n.navigation.state !== "submitting" ? n.actionData : t.actionData,
    fetchers: n.fetchers
  };
}
var co = Pr(uo);
function uo({
  routes: t,
  future: n,
  state: a,
  onError: s
}) {
  return Ul(t, void 0, a, s, n);
}
function ho(t) {
  return Vl(t.context);
}
function po({
  basename: t = "/",
  children: n = null,
  location: a,
  navigationType: s = "POP",
  navigator: i,
  static: l = !1,
  unstable_useTransitions: c
}) {
  U(
    !en(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let o = t.replace(/^\/*/, "/"), d = Ne(
    () => ({
      basename: o,
      navigator: i,
      static: l,
      unstable_useTransitions: c,
      future: {}
    }),
    [o, i, l, c]
  );
  typeof a == "string" && (a = rt(a));
  let {
    pathname: u = "/",
    search: h = "",
    hash: m = "",
    state: g = null,
    key: f = "default"
  } = a, N = Ne(() => {
    let v = $e(u, o);
    return v == null ? null : {
      location: {
        pathname: v,
        search: h,
        hash: m,
        state: g,
        key: f
      },
      navigationType: s
    };
  }, [o, u, h, m, g, f, s]);
  return ce(
    N != null,
    `<Router basename="${o}"> is not able to match the URL "${u}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`
  ), N == null ? null : /* @__PURE__ */ V(Ee.Provider, { value: d }, /* @__PURE__ */ V(wn.Provider, { children: n, value: N }));
}
var gn = "get", yn = "application/x-www-form-urlencoded";
function kn(t) {
  return typeof HTMLElement < "u" && t instanceof HTMLElement;
}
function fo(t) {
  return kn(t) && t.tagName.toLowerCase() === "button";
}
function mo(t) {
  return kn(t) && t.tagName.toLowerCase() === "form";
}
function xo(t) {
  return kn(t) && t.tagName.toLowerCase() === "input";
}
function go(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function yo(t, n) {
  return t.button === 0 && // Ignore everything but left clicks
  (!n || n === "_self") && // Let browser handle "target=_blank" etc.
  !go(t);
}
var fn = null;
function bo() {
  if (fn === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), fn = !1;
    } catch {
      fn = !0;
    }
  return fn;
}
var vo = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Vn(t) {
  return t != null && !vo.has(t) ? (ce(
    !1,
    `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yn}"`
  ), null) : t;
}
function No(t, n) {
  let a, s, i, l, c;
  if (mo(t)) {
    let o = t.getAttribute("action");
    s = o ? $e(o, n) : null, a = t.getAttribute("method") || gn, i = Vn(t.getAttribute("enctype")) || yn, l = new FormData(t);
  } else if (fo(t) || xo(t) && (t.type === "submit" || t.type === "image")) {
    let o = t.form;
    if (o == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let d = t.getAttribute("formaction") || o.getAttribute("action");
    if (s = d ? $e(d, n) : null, a = t.getAttribute("formmethod") || o.getAttribute("method") || gn, i = Vn(t.getAttribute("formenctype")) || Vn(o.getAttribute("enctype")) || yn, l = new FormData(o, t), !bo()) {
      let { name: u, type: h, value: m } = t;
      if (h === "image") {
        let g = u ? `${u}.` : "";
        l.append(`${g}x`, "0"), l.append(`${g}y`, "0");
      } else u && l.append(u, m);
    }
  } else {
    if (kn(t))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    a = gn, s = null, i = yn, c = t;
  }
  return l && i === "text/plain" && (c = l, l = void 0), { action: s, method: a.toLowerCase(), encType: i, formData: l, body: c };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ga(t, n) {
  if (t === !1 || t === null || typeof t > "u")
    throw new Error(n);
}
function wo(t, n, a, s) {
  let i = typeof t == "string" ? new URL(
    t,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : t;
  return a ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${s}` : i.pathname = `${i.pathname}.${s}` : i.pathname === "/" ? i.pathname = `_root.${s}` : n && $e(i.pathname, n) === "/" ? i.pathname = `${n.replace(/\/$/, "")}/_root.${s}` : i.pathname = `${i.pathname.replace(/\/$/, "")}.${s}`, i;
}
async function ko(t, n) {
  if (t.id in n)
    return n[t.id];
  try {
    let a = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      t.module
    );
    return n[t.id] = a, a;
  } catch (a) {
    return console.error(
      `Error loading route module \`${t.module}\`, reloading page...`
    ), console.error(a), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Co(t) {
  return t == null ? !1 : t.href == null ? t.rel === "preload" && typeof t.imageSrcSet == "string" && typeof t.imageSizes == "string" : typeof t.rel == "string" && typeof t.href == "string";
}
async function Wo(t, n, a) {
  let s = await Promise.all(
    t.map(async (i) => {
      let l = n.routes[i.route.id];
      if (l) {
        let c = await ko(l, a);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return Ro(
    s.flat(1).filter(Co).filter((i) => i.rel === "stylesheet" || i.rel === "preload").map(
      (i) => i.rel === "stylesheet" ? { ...i, rel: "prefetch", as: "style" } : { ...i, rel: "prefetch" }
    )
  );
}
function dr(t, n, a, s, i, l) {
  let c = (d, u) => a[u] ? d.route.id !== a[u].route.id : !0, o = (d, u) => (
    // param change, /users/123 -> /users/456
    a[u].pathname !== d.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    a[u].route.path?.endsWith("*") && a[u].params["*"] !== d.params["*"]
  );
  return l === "assets" ? n.filter(
    (d, u) => c(d, u) || o(d, u)
  ) : l === "data" ? n.filter((d, u) => {
    let h = s.routes[d.route.id];
    if (!h || !h.hasLoader)
      return !1;
    if (c(d, u) || o(d, u))
      return !0;
    if (d.route.shouldRevalidate) {
      let m = d.route.shouldRevalidate({
        currentUrl: new URL(
          i.pathname + i.search + i.hash,
          window.origin
        ),
        currentParams: a[0]?.params || {},
        nextUrl: new URL(t, window.origin),
        nextParams: d.params,
        defaultShouldRevalidate: !0
      });
      if (typeof m == "boolean")
        return m;
    }
    return !0;
  }) : [];
}
function So(t, n, { includeHydrateFallback: a } = {}) {
  return Mo(
    t.map((s) => {
      let i = n.routes[s.route.id];
      if (!i) return [];
      let l = [i.module];
      return i.clientActionModule && (l = l.concat(i.clientActionModule)), i.clientLoaderModule && (l = l.concat(i.clientLoaderModule)), a && i.hydrateFallbackModule && (l = l.concat(i.hydrateFallbackModule)), i.imports && (l = l.concat(i.imports)), l;
    }).flat(1)
  );
}
function Mo(t) {
  return [...new Set(t)];
}
function Io(t) {
  let n = {}, a = Object.keys(t).sort();
  for (let s of a)
    n[s] = t[s];
  return n;
}
function Ro(t, n) {
  let a = /* @__PURE__ */ new Set();
  return new Set(n), t.reduce((s, i) => {
    let l = JSON.stringify(Io(i));
    return a.has(l) || (a.add(l), s.push({ key: l, link: i })), s;
  }, []);
}
function ss() {
  let t = F(gt);
  return ga(
    t,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), t;
}
function zo() {
  let t = F(Xt);
  return ga(
    t,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), t;
}
var ya = ue(void 0);
ya.displayName = "FrameworkContext";
function is() {
  let t = F(ya);
  return ga(
    t,
    "You must render this element inside a <HydratedRouter> element"
  ), t;
}
function Do(t, n) {
  let a = F(ya), [s, i] = A(!1), [l, c] = A(!1), { onFocus: o, onBlur: d, onMouseEnter: u, onMouseLeave: h, onTouchStart: m } = n, g = Se(null);
  X(() => {
    if (t === "render" && c(!0), t === "viewport") {
      let v = (S) => {
        S.forEach((W) => {
          c(W.isIntersecting);
        });
      }, w = new IntersectionObserver(v, { threshold: 0.5 });
      return g.current && w.observe(g.current), () => {
        w.disconnect();
      };
    }
  }, [t]), X(() => {
    if (s) {
      let v = setTimeout(() => {
        c(!0);
      }, 100);
      return () => {
        clearTimeout(v);
      };
    }
  }, [s]);
  let f = () => {
    i(!0);
  }, N = () => {
    i(!1), c(!1);
  };
  return a ? t !== "intent" ? [l, g, {}] : [
    l,
    g,
    {
      onFocus: Et(o, f),
      onBlur: Et(d, N),
      onMouseEnter: Et(u, f),
      onMouseLeave: Et(h, N),
      onTouchStart: Et(m, f)
    }
  ] : [!1, g, {}];
}
function Et(t, n) {
  return (a) => {
    t && t(a), a.defaultPrevented || n(a);
  };
}
function Po({ page: t, ...n }) {
  let { router: a } = ss(), s = Ne(
    () => Xe(a.routes, t, a.basename),
    [a.routes, t, a.basename]
  );
  return s ? /* @__PURE__ */ V(Lo, { page: t, matches: s, ...n }) : null;
}
function Ao(t) {
  let { manifest: n, routeModules: a } = is(), [s, i] = A([]);
  return X(() => {
    let l = !1;
    return Wo(t, n, a).then(
      (c) => {
        l || i(c);
      }
    ), () => {
      l = !0;
    };
  }, [t, n, a]), s;
}
function Lo({
  page: t,
  matches: n,
  ...a
}) {
  let s = Ze(), { future: i, manifest: l, routeModules: c } = is(), { basename: o } = ss(), { loaderData: d, matches: u } = zo(), h = Ne(
    () => dr(
      t,
      n,
      u,
      l,
      s,
      "data"
    ),
    [t, n, u, l, s]
  ), m = Ne(
    () => dr(
      t,
      n,
      u,
      l,
      s,
      "assets"
    ),
    [t, n, u, l, s]
  ), g = Ne(() => {
    if (t === s.pathname + s.search + s.hash)
      return [];
    let v = /* @__PURE__ */ new Set(), w = !1;
    if (n.forEach((W) => {
      let R = l.routes[W.route.id];
      !R || !R.hasLoader || (!h.some((E) => E.route.id === W.route.id) && W.route.id in d && c[W.route.id]?.shouldRevalidate || R.hasClientLoader ? w = !0 : v.add(W.route.id));
    }), v.size === 0)
      return [];
    let S = wo(
      t,
      o,
      i.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return w && v.size > 0 && S.searchParams.set(
      "_routes",
      n.filter((W) => v.has(W.route.id)).map((W) => W.route.id).join(",")
    ), [S.pathname + S.search];
  }, [
    o,
    i.unstable_trailingSlashAwareDataRequests,
    d,
    s,
    l,
    h,
    n,
    t,
    c
  ]), f = Ne(
    () => So(m, l),
    [m, l]
  ), N = Ao(m);
  return /* @__PURE__ */ V(St, null, g.map((v) => /* @__PURE__ */ V("link", { key: v, rel: "prefetch", as: "fetch", href: v, ...a })), f.map((v) => /* @__PURE__ */ V("link", { key: v, rel: "modulepreload", href: v, ...a })), N.map(({ key: v, link: w }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ V(
      "link",
      {
        key: v,
        nonce: a.nonce,
        ...w,
        crossOrigin: w.crossOrigin ?? a.crossOrigin
      }
    )
  )));
}
function Oo(...t) {
  return (n) => {
    t.forEach((a) => {
      typeof a == "function" ? a(n) : a != null && (a.current = n);
    });
  };
}
var $o = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  $o && (window.__reactRouterVersion = // @ts-expect-error
  "7.13.0");
} catch {
}
function Eo(t, n) {
  return ol({
    basename: n?.basename,
    getContext: n?.getContext,
    future: n?.future,
    history: Ci({ window: n?.window }),
    hydrationData: Bo(),
    routes: t,
    mapRouteProperties: so,
    hydrationRouteProperties: io,
    dataStrategy: n?.dataStrategy,
    patchRoutesOnNavigation: n?.patchRoutesOnNavigation,
    window: n?.window,
    unstable_instrumentations: n?.unstable_instrumentations
  }).initialize();
}
function Bo() {
  let t = window?.__staticRouterHydrationData;
  return t && t.errors && (t = {
    ...t,
    errors: _o(t.errors)
  }), t;
}
function _o(t) {
  if (!t) return null;
  let n = Object.entries(t), a = {};
  for (let [s, i] of n)
    if (i && i.__type === "RouteErrorResponse")
      a[s] = new Zt(
        i.status,
        i.statusText,
        i.data,
        i.internal === !0
      );
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let l = window[i.__subType];
        if (typeof l == "function")
          try {
            let c = new l(i.message);
            c.stack = "", a[s] = c;
          } catch {
          }
      }
      if (a[s] == null) {
        let l = new Error(i.message);
        l.stack = "", a[s] = l;
      }
    } else
      a[s] = i;
  return a;
}
var ls = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, os = Rt(
  function({
    onClick: n,
    discover: a = "render",
    prefetch: s = "none",
    relative: i,
    reloadDocument: l,
    replace: c,
    state: o,
    target: d,
    to: u,
    preventScrollReset: h,
    viewTransition: m,
    unstable_defaultShouldRevalidate: g,
    ...f
  }, N) {
    let { basename: v, unstable_useTransitions: w } = F(Ee), S = typeof u == "string" && ls.test(u), W = Tr(u, v);
    u = W.to;
    let R = _l(u, { relative: i }), [E, z, D] = Do(
      s,
      f
    ), b = Fo(u, {
      replace: c,
      state: o,
      target: d,
      preventScrollReset: h,
      relative: i,
      viewTransition: m,
      unstable_defaultShouldRevalidate: g,
      unstable_useTransitions: w
    });
    function B(te) {
      n && n(te), te.defaultPrevented || b(te);
    }
    let G = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ V(
        "a",
        {
          ...f,
          ...D,
          href: W.absoluteURL || R,
          onClick: W.isExternal || l ? n : B,
          ref: Oo(N, z),
          target: d,
          "data-discover": !S && a === "render" ? "true" : void 0
        }
      )
    );
    return E && !S ? /* @__PURE__ */ V(St, null, G, /* @__PURE__ */ V(Po, { page: R })) : G;
  }
);
os.displayName = "Link";
var To = Rt(
  function({
    "aria-current": n = "page",
    caseSensitive: a = !1,
    className: s = "",
    end: i = !1,
    style: l,
    to: c,
    viewTransition: o,
    children: d,
    ...u
  }, h) {
    let m = tn(c, { relative: u.relative }), g = Ze(), f = F(Xt), { navigator: N, basename: v } = F(Ee), w = f != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Ko(m) && o === !0, S = N.encodeLocation ? N.encodeLocation(m).pathname : m.pathname, W = g.pathname, R = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
    a || (W = W.toLowerCase(), R = R ? R.toLowerCase() : null, S = S.toLowerCase()), R && v && (R = $e(R, v) || R);
    const E = S !== "/" && S.endsWith("/") ? S.length - 1 : S.length;
    let z = W === S || !i && W.startsWith(S) && W.charAt(E) === "/", D = R != null && (R === S || !i && R.startsWith(S) && R.charAt(S.length) === "/"), b = {
      isActive: z,
      isPending: D,
      isTransitioning: w
    }, B = z ? n : void 0, G;
    typeof s == "function" ? G = s(b) : G = [
      s,
      z ? "active" : null,
      D ? "pending" : null,
      w ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let te = typeof l == "function" ? l(b) : l;
    return /* @__PURE__ */ V(
      os,
      {
        ...u,
        "aria-current": B,
        className: G,
        ref: h,
        style: te,
        to: c,
        viewTransition: o
      },
      typeof d == "function" ? d(b) : d
    );
  }
);
To.displayName = "NavLink";
var jo = Rt(
  ({
    discover: t = "render",
    fetcherKey: n,
    navigate: a,
    reloadDocument: s,
    replace: i,
    state: l,
    method: c = gn,
    action: o,
    onSubmit: d,
    relative: u,
    preventScrollReset: h,
    viewTransition: m,
    unstable_defaultShouldRevalidate: g,
    ...f
  }, N) => {
    let { unstable_useTransitions: v } = F(Ee), w = Go(), S = qo(o, { relative: u }), W = c.toLowerCase() === "get" ? "get" : "post", R = typeof o == "string" && ls.test(o);
    return /* @__PURE__ */ V(
      "form",
      {
        ref: N,
        method: W,
        action: S,
        onSubmit: s ? d : (z) => {
          if (d && d(z), z.defaultPrevented) return;
          z.preventDefault();
          let D = z.nativeEvent.submitter, b = D?.getAttribute("formmethod") || c, B = () => w(D || z.currentTarget, {
            fetcherKey: n,
            method: b,
            navigate: a,
            replace: i,
            state: l,
            relative: u,
            preventScrollReset: h,
            viewTransition: m,
            unstable_defaultShouldRevalidate: g
          });
          v && a !== !1 ? Ht(() => B()) : B();
        },
        ...f,
        "data-discover": !R && t === "render" ? "true" : void 0
      }
    );
  }
);
jo.displayName = "Form";
function Vo(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function cs(t) {
  let n = F(gt);
  return U(n, Vo(t)), n;
}
function Fo(t, {
  target: n,
  replace: a,
  state: s,
  preventScrollReset: i,
  relative: l,
  viewTransition: c,
  unstable_defaultShouldRevalidate: o,
  unstable_useTransitions: d
} = {}) {
  let u = pe(), h = Ze(), m = tn(t, { relative: l });
  return Me(
    (g) => {
      if (yo(g, n)) {
        g.preventDefault();
        let f = a !== void 0 ? a : je(h) === je(m), N = () => u(t, {
          replace: f,
          state: s,
          preventScrollReset: i,
          relative: l,
          viewTransition: c,
          unstable_defaultShouldRevalidate: o
        });
        d ? Ht(() => N()) : N();
      }
    },
    [
      h,
      u,
      m,
      a,
      s,
      n,
      t,
      i,
      l,
      c,
      o,
      d
    ]
  );
}
var Uo = 0, Ho = () => `__${String(++Uo)}__`;
function Go() {
  let { router: t } = cs(
    "useSubmit"
    /* UseSubmit */
  ), { basename: n } = F(Ee), a = Xl(), s = t.fetch, i = t.navigate;
  return Me(
    async (l, c = {}) => {
      let { action: o, method: d, encType: u, formData: h, body: m } = No(
        l,
        n
      );
      if (c.navigate === !1) {
        let g = c.fetcherKey || Ho();
        await s(g, a, c.action || o, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: h,
          body: m,
          formMethod: c.method || d,
          formEncType: c.encType || u,
          flushSync: c.flushSync
        });
      } else
        await i(c.action || o, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: h,
          body: m,
          formMethod: c.method || d,
          formEncType: c.encType || u,
          replace: c.replace,
          state: c.state,
          fromRouteId: a,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition
        });
    },
    [s, i, n, a]
  );
}
function qo(t, { relative: n } = {}) {
  let { basename: a } = F(Ee), s = F(Be);
  U(s, "useFormAction must be used inside a RouteContext");
  let [i] = s.matches.slice(-1), l = { ...tn(t || ".", { relative: n }) }, c = Ze();
  if (t == null) {
    l.search = c.search;
    let o = new URLSearchParams(l.search), d = o.getAll("index");
    if (d.some((h) => h === "")) {
      o.delete("index"), d.filter((m) => m).forEach((m) => o.append("index", m));
      let h = o.toString();
      l.search = h ? `?${h}` : "";
    }
  }
  return (!t || t === ".") && i.route.index && (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), a !== "/" && (l.pathname = l.pathname === "/" ? a : Te([a, l.pathname])), je(l);
}
function Ko(t, { relative: n } = {}) {
  let a = F(pa);
  U(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = cs(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), i = tn(t, { relative: n });
  if (!a.isTransitioning)
    return !1;
  let l = $e(a.currentLocation.pathname, s) || a.currentLocation.pathname, c = $e(a.nextLocation.pathname, s) || a.nextLocation.pathname;
  return bn(i.pathname, c) != null || bn(i.pathname, l) != null;
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Jo = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, a, s) => s ? s.toUpperCase() : a.toLowerCase()
), ur = (t) => {
  const n = Jo(t);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, ds = (...t) => t.filter((n, a, s) => !!n && n.trim() !== "" && s.indexOf(n) === a).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Zo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = Rt(
  ({
    color: t = "currentColor",
    size: n = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: s,
    className: i = "",
    children: l,
    iconNode: c,
    ...o
  }, d) => V(
    "svg",
    {
      ref: d,
      ...Zo,
      width: n,
      height: n,
      stroke: t,
      strokeWidth: s ? Number(a) * 24 / Number(n) : a,
      className: ds("lucide", i),
      ...o
    },
    [
      ...c.map(([u, h]) => V(u, h)),
      ...Array.isArray(l) ? l : [l]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I = (t, n) => {
  const a = Rt(
    ({ className: s, ...i }, l) => V(Qo, {
      ref: l,
      iconNode: n,
      className: ds(
        `lucide-${Yo(ur(t))}`,
        `lucide-${t}`,
        s
      ),
      ...i
    })
  );
  return a.displayName = ur(t), a;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
], Cn = I("activity", Xo);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
], tc = I("arrow-down-right", ec);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], hr = I("arrow-down", nc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Ke = I("arrow-right", ac);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
], sc = I("arrow-up-right", rc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }]
], Je = I("ban", ic);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], us = I("bell", lc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = [
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  [
    "path",
    {
      d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
      key: "1fpvtg"
    }
  ]
], cc = I("blocks", oc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
], Wn = I("book-open", dc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
], ba = I("box", uc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
], Mt = I("boxes", hc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Qn = I("calendar", pc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
], Sn = I("chart-column", fc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Xn = I("check", mc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xc = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], de = I("chevron-down", xc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], hs = I("chevron-left", gc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], vn = I("chevron-right", yc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bc = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Ct = I("chevron-up", bc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], ea = I("circle-alert", vc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nc = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], be = I("circle-check-big", Nc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
], Bt = I("circle-dot", wc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Cc = I("circle-help", kc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], Fn = I("circle-x", Wc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], pr = I("circle", Sc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], ps = I("clock", Mc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ic = [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
], Rc = I("code", Ic);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zc = [
  [
    "path",
    {
      d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
      key: "1t2lqe"
    }
  ],
  ["path", { d: "M10 21.9V14L2.1 9.1", key: "o7czzq" }],
  ["path", { d: "m10 14 11.9-6.9", key: "zm5e20" }],
  ["path", { d: "M14 19.8v-8.1", key: "159ecu" }],
  ["path", { d: "M18 17.5V9.4", key: "11uown" }]
], fs = I("container", zc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dc = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], ms = I("copy", Dc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pc = [
  ["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" }],
  ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }]
], ta = I("cpu", Pc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ac = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], na = I("database", Ac);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lc = [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",
      key: "1f1r0c"
    }
  ]
], Yt = I("diamond", Lc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oc = [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
], Mn = I("download", Oc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $c = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], xs = I("ellipsis", $c);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], xt = I("external-link", Ec);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bc = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], at = I("file-text", Bc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _c = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
], gs = I("folder-open", _c);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], va = I("funnel", Tc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], In = I("globe", jc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vc = [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }]
], mt = I("hard-drive", Vc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fc = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
], ys = I("house", Fc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uc = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], Wt = I("info", Uc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hc = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], bs = I("layers", Hc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gc = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
], ut = I("list-filter", Gc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qc = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], vs = I("list", qc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kc = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
I("loader-circle", Kc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yc = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Jc = I("lock", Yc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zc = [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
], aa = I("log-out", Zc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qc = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], fr = I("menu", Qc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xc = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
], ed = I("message-square", Xc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const td = [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
], Ns = I("mic", td);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nd = [
  ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8", key: "10dyio" }],
  ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }],
  ["path", { d: "M7 19h5", key: "qswx4l" }],
  ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2", key: "1egngj" }]
], ad = I("monitor-smartphone", nd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rd = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
], sd = I("monitor", rd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const id = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], ld = I("moon", id);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const od = [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
], Ft = I("network", od);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cd = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
], dd = I("panel-left-close", cd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ud = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
], hd = I("panel-left-open", ud);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pd = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }]
], mr = I("panels-top-left", pd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fd = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], ws = I("pencil", fd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const md = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Ve = I("plus", md);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xd = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Na = I("refresh-cw", xd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gd = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], yd = I("rotate-ccw", gd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bd = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
], xr = I("rotate-cw", bd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vd = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], Ie = I("search", vd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], ks = I("send", Nd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wd = [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
], Ye = I("server", wd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kd = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Jt = I("settings", kd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cd = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Wd = I("shield-check", Cd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sd = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], Nn = I("shield", Sd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Md = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
], It = I("sparkles", Md);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Id = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], Rd = I("square", Id);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zd = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], Dd = I("sun", zd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pd = [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
      key: "m61m77"
    }
  ]
], gr = I("thumbs-down", Pd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ad = [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }
  ]
], yr = I("thumbs-up", Ad);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ld = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], Rn = I("trash-2", Ld);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Od = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Fe = I("triangle-alert", Od);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $d = [
  ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
  ["path", { d: "m21.7 16.4-.9-.3", key: "12j9ji" }],
  ["path", { d: "m15.2 13.9-.9-.3", key: "1fdjdi" }],
  ["path", { d: "m16.6 18.7.3-.9", key: "heedtr" }],
  ["path", { d: "m19.1 12.2.3-.9", key: "1af3ki" }],
  ["path", { d: "m19.6 18.7-.4-1", key: "1x9vze" }],
  ["path", { d: "m16.8 12.3-.4-1", key: "vqeiwj" }],
  ["path", { d: "m14.3 16.6 1-.4", key: "1qlj63" }],
  ["path", { d: "m20.7 13.8 1-.4", key: "1v5t8k" }]
], Ed = I("user-cog", $d);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bd = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], ra = I("user", Bd);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _d = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
], Td = I("users", _d);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jd = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], nt = I("x", jd), Cs = ue({
  collapsed: !1,
  toggleCollapsed: () => {
  },
  setCollapsed: () => {
  }
});
function Vd({ children: t }) {
  const [n, a] = A(!1), s = Me(() => a((i) => !i), []);
  return /* @__PURE__ */ e(Cs.Provider, { value: { collapsed: n, toggleCollapsed: s, setCollapsed: a }, children: t });
}
function we() {
  return F(Cs);
}
const Un = [
  { id: "adam", name: "Adam Habensusz", email: "adam.habensusz@ibm.com", firstName: "Adam" },
  { id: "jozsef", name: "Jozsef Szabo", email: "jozsef.szabo@ibm.com", firstName: "Jozsef" }
], Ws = ue(null);
function Fd({ children: t }) {
  const [n, a] = A("adam"), s = Un.find((i) => i.id === n) || Un[0];
  return /* @__PURE__ */ e(Ws.Provider, { value: { activeUser: s, activeUserId: n, setActiveUserId: a, users: Un }, children: t });
}
function wa() {
  const t = F(Ws);
  if (!t) throw new Error("useUser must be used within UserProvider");
  return t;
}
const Ss = ue(void 0);
function Ud({ children: t }) {
  const [n, a] = A(!1), [s, i] = A(null), l = () => a(!n), c = (o) => {
    i(o), a(!0);
  };
  return /* @__PURE__ */ e(Ss.Provider, { value: { isOpen: n, setIsOpen: a, togglePanel: l, activeChatId: s, setActiveChatId: i, openWithChat: c }, children: t });
}
function ke() {
  const t = F(Ss);
  if (!t)
    throw new Error("useAIPanel must be used within AIPanelProvider");
  return t;
}
const Ms = ue(void 0);
function Hd({ children: t }) {
  const [n, a] = A(() => localStorage.getItem("ibm-cloud-dark-mode") === "true");
  X(() => {
    localStorage.setItem("ibm-cloud-dark-mode", String(n)), n ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [n]);
  const s = () => {
    a((i) => !i);
  };
  return /* @__PURE__ */ e(Ms.Provider, { value: { isDarkMode: n, toggleDarkMode: s }, children: t });
}
function zn() {
  const t = F(Ms);
  if (!t)
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  return t;
}
function Gd() {
  const { collapsed: t } = we(), { isOpen: n, togglePanel: a } = ke(), { activeUser: s, activeUserId: i, setActiveUserId: l, users: c } = wa(), { isDarkMode: o, toggleDarkMode: d } = zn(), u = pe(), [h, m] = A(!1), [g, f] = A(!1), [N, v] = A(!1), w = Se(null), S = Se(null), W = Se(null);
  return X(() => {
    if (!h) return;
    const R = (E) => {
      w.current && !w.current.contains(E.target) && m(!1);
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, [h]), X(() => {
    if (!g) return;
    const R = (E) => {
      S.current && !S.current.contains(E.target) && f(!1);
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, [g]), X(() => {
    if (!N) return;
    const R = (E) => {
      W.current && !W.current.contains(E.target) && v(!1);
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, [N]), /* @__PURE__ */ e("header", { className: `h-12 ${o ? "bg-[#262626] border-[#393939]" : "bg-white border-[#e0e0e0]"} border-b flex items-center justify-end px-0 z-50 fixed top-0 ${t ? "left-[48px]" : "left-[256px]"} ${n ? "right-[320px]" : "right-0"} transition-all duration-200`, style: { fontFamily: "'IBM Plex Sans', sans-serif" }, children: /* @__PURE__ */ r("div", { className: "flex items-center h-full", children: [
    /* @__PURE__ */ r("div", { className: "relative h-full", ref: w, children: [
      /* @__PURE__ */ r(
        "button",
        {
          className: `h-full px-4 flex items-center gap-1 ${o ? "text-[#c6c6c6] hover:bg-[#393939]" : "text-[#525252] hover:bg-[#e8e8e8]"} text-[14px] transition-colors ${h ? o ? "bg-[#393939]" : "bg-[#e8e8e8]" : ""}`,
          style: { fontWeight: 400 },
          onClick: () => m(!h),
          children: [
            "124849 · ",
            s.name,
            "'s Account",
            /* @__PURE__ */ e(de, { size: 16, className: `transition-transform ${h ? "rotate-180" : ""}` })
          ]
        }
      ),
      h && /* @__PURE__ */ r("div", { className: `absolute right-0 top-12 w-[320px] ${o ? "bg-[#262626] border-[#393939]" : "bg-white border-[#e0e0e0]"} border shadow-lg z-[100]`, children: [
        /* @__PURE__ */ e("div", { className: `px-4 pt-4 pb-3 ${o ? "border-[#393939]" : "border-[#e0e0e0]"} border-b`, children: /* @__PURE__ */ r("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e("div", { className: `w-10 h-10 rounded-full ${o ? "bg-[#393939]" : "bg-[#e0e0e0]"} flex items-center justify-center`, children: /* @__PURE__ */ e(ra, { size: 20, className: o ? "text-[#c6c6c6]" : "text-[#525252]" }) }),
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ e("p", { className: `text-[14px] ${o ? "text-[#f4f4f4]" : "text-[#161616]"}`, style: { fontWeight: 600 }, children: s.name }),
            /* @__PURE__ */ e("p", { className: `text-[12px] ${o ? "text-[#c6c6c6]" : "text-[#525252]"}`, style: { fontWeight: 400 }, children: s.email })
          ] })
        ] }) }),
        /* @__PURE__ */ e("div", { className: `px-4 py-3 ${o ? "border-[#393939]" : "border-[#e0e0e0]"} border-b`, children: /* @__PURE__ */ e("span", { className: `text-[14px] ${o ? "text-[#8d8d8d]" : "text-[#a8a8a8]"} cursor-default`, style: { fontWeight: 400 }, children: "Profile" }) }),
        /* @__PURE__ */ r("div", { className: "px-4 pt-3 pb-2", children: [
          /* @__PURE__ */ e("p", { className: `text-[12px] ${o ? "text-[#c6c6c6]" : "text-[#525252]"} mb-2`, style: { fontWeight: 600, letterSpacing: "0.32px", textTransform: "uppercase" }, children: "Switch account" }),
          c.map((R) => /* @__PURE__ */ r(
            "button",
            {
              className: `w-full flex items-center justify-between px-3 py-2.5 text-left ${o ? "hover:bg-[#393939]" : "hover:bg-[#e8e8e8]"} transition-colors rounded`,
              onClick: () => {
                l(R.id), m(!1);
              },
              children: [
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("p", { className: `text-[14px] ${o ? "text-[#f4f4f4]" : "text-[#161616]"}`, style: { fontWeight: R.id === i ? 600 : 400 }, children: R.name }),
                  /* @__PURE__ */ e("p", { className: `text-[12px] ${o ? "text-[#c6c6c6]" : "text-[#525252]"}`, style: { fontWeight: 400 }, children: R.email })
                ] }),
                R.id === i && /* @__PURE__ */ e(Xn, { size: 16, className: "text-[#0f62fe] shrink-0" })
              ]
            },
            R.id
          ))
        ] }),
        /* @__PURE__ */ e("div", { className: `${o ? "border-[#393939]" : "border-[#e0e0e0]"} border-t px-4 py-3`, children: /* @__PURE__ */ r("button", { className: "flex items-center gap-2 text-[14px] text-[#da1e28] hover:underline", style: { fontWeight: 400 }, children: [
          /* @__PURE__ */ e(aa, { size: 16 }),
          "Log out"
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "relative h-full", ref: S, children: [
      /* @__PURE__ */ r(
        "button",
        {
          className: `h-full px-4 flex items-center gap-1 ${o ? "text-[#c6c6c6] hover:bg-[#393939]" : "text-[#525252] hover:bg-[#e8e8e8]"} text-[14px] transition-colors ${g ? o ? "bg-[#393939]" : "bg-[#e8e8e8]" : ""}`,
          style: { fontWeight: 400 },
          onClick: () => f(!g),
          children: [
            "Support",
            /* @__PURE__ */ e(de, { size: 16, className: `transition-transform ${g ? "rotate-180" : ""}` })
          ]
        }
      ),
      g && /* @__PURE__ */ e("div", { className: `absolute right-0 top-12 w-[240px] ${o ? "bg-[#262626] border-[#393939]" : "bg-white border-[#e0e0e0]"} border shadow-lg z-[100]`, children: /* @__PURE__ */ r("div", { className: "py-1", children: [
        /* @__PURE__ */ e("button", { className: `w-full px-4 py-2 text-left text-[14px] ${o ? "text-[#f4f4f4] hover:bg-[#393939]" : "text-[#161616] hover:bg-[#e8e8e8]"} transition-colors`, style: { fontWeight: 400 }, children: "Documentation" }),
        /* @__PURE__ */ e("button", { className: `w-full px-4 py-2 text-left text-[14px] ${o ? "text-[#f4f4f4] hover:bg-[#393939]" : "text-[#161616] hover:bg-[#e8e8e8]"} transition-colors`, style: { fontWeight: 400 }, children: "Support Center" }),
        /* @__PURE__ */ e("button", { className: `w-full px-4 py-2 text-left text-[14px] ${o ? "text-[#f4f4f4] hover:bg-[#393939]" : "text-[#161616] hover:bg-[#e8e8e8]"} transition-colors`, style: { fontWeight: 400 }, children: "API Docs" }),
        /* @__PURE__ */ e("button", { className: `w-full px-4 py-2 text-left text-[14px] ${o ? "text-[#f4f4f4] hover:bg-[#393939]" : "text-[#161616] hover:bg-[#e8e8e8]"} transition-colors`, style: { fontWeight: 400 }, children: "Open Ticket" })
      ] }) })
    ] }),
    /* @__PURE__ */ r("div", { className: "relative h-full", ref: W, children: [
      /* @__PURE__ */ r(
        "button",
        {
          className: `h-full px-4 flex items-center gap-1 ${o ? "text-[#c6c6c6] hover:bg-[#393939]" : "text-[#525252] hover:bg-[#e8e8e8]"} text-[14px] transition-colors ${N ? o ? "bg-[#393939]" : "bg-[#e8e8e8]" : ""}`,
          style: { fontWeight: 400 },
          onClick: () => v(!N),
          children: [
            "Manage",
            /* @__PURE__ */ e(de, { size: 16, className: `transition-transform ${N ? "rotate-180" : ""}` })
          ]
        }
      ),
      N && /* @__PURE__ */ e("div", { className: `absolute right-0 top-12 w-[240px] ${o ? "bg-[#262626] border-[#393939]" : "bg-white border-[#e0e0e0]"} border shadow-lg z-[100]`, children: /* @__PURE__ */ r("div", { className: "py-1", children: [
        /* @__PURE__ */ e("button", { className: `w-full px-4 py-2 text-left text-[14px] ${o ? "text-[#f4f4f4] hover:bg-[#393939]" : "text-[#161616] hover:bg-[#e8e8e8]"} transition-colors`, style: { fontWeight: 400 }, children: "Account" }),
        /* @__PURE__ */ e(
          "button",
          {
            className: `w-full px-4 py-2 text-left text-[14px] ${o ? "text-[#f4f4f4] hover:bg-[#393939]" : "text-[#161616] hover:bg-[#e8e8e8]"} transition-colors`,
            style: { fontWeight: 400 },
            onClick: () => {
              u("/billing"), v(!1);
            },
            children: "Billing and Usage"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            className: `w-full text-left px-4 py-2 ${o ? "hover:bg-[#393939] text-[#f4f4f4]" : "hover:bg-[#e8e8e8] text-[#161616]"} text-[14px]`,
            style: { fontWeight: 400 },
            onClick: () => {
              u("/catalog"), v(!1);
            },
            children: "Products and hubs"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            className: `w-full px-4 py-2 text-left text-[14px] ${o ? "text-[#f4f4f4] hover:bg-[#393939]" : "text-[#161616] hover:bg-[#e8e8e8]"} transition-colors`,
            style: { fontWeight: 400 },
            onClick: () => {
              u("/access-iam"), v(!1);
            },
            children: "Access (IAM)"
          }
        ),
        /* @__PURE__ */ e("button", { className: `w-full px-4 py-2 text-left text-[14px] ${o ? "text-[#f4f4f4] hover:bg-[#393939]" : "text-[#161616] hover:bg-[#e8e8e8]"} transition-colors`, style: { fontWeight: 400 }, children: "Context-based restrictions" }),
        /* @__PURE__ */ e("div", { className: `${o ? "border-[#393939]" : "border-[#e0e0e0]"} border-t my-1` }),
        /* @__PURE__ */ r(
          "button",
          {
            className: `w-full px-4 py-2 text-left text-[14px] ${o ? "text-[#f4f4f4] hover:bg-[#393939]" : "text-[#161616] hover:bg-[#e8e8e8]"} transition-colors flex items-center justify-between`,
            style: { fontWeight: 400 },
            onClick: () => {
              d();
            },
            children: [
              /* @__PURE__ */ e("span", { children: "Dark mode" }),
              /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: o ? /* @__PURE__ */ e(ld, { size: 16 }) : /* @__PURE__ */ e(Dd, { size: 16 }) })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ e("button", { className: `h-full w-12 flex items-center justify-center ${o ? "text-[#c6c6c6] hover:bg-[#393939]" : "text-[#525252] hover:bg-[#e8e8e8]"} transition-colors`, children: /* @__PURE__ */ e(us, { size: 20 }) }),
    /* @__PURE__ */ r(
      "button",
      {
        className: "group relative h-full w-12 flex items-center justify-center text-white transition-all",
        style: { background: "linear-gradient(135deg, #0f62fe 0%, #a56eff 100%)" },
        onClick: a,
        children: [
          /* @__PURE__ */ e("span", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none", style: { boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.5), 0 0 8px 0 rgba(165,110,255,0.3)" } }),
          /* @__PURE__ */ e(It, { size: 20 })
        ]
      }
    )
  ] }) });
}
const Is = ue({
  recentlyVisited: [],
  frequentlyVisited: [],
  addVisit: () => {
  },
  removeVisit: () => {
  }
}), Rs = 16, zs = "ibm-cloud-visited-v8-ts";
try {
  ["ibm-cloud-frequently-visited-v3", "ibm-cloud-frequently-visited-v4", "ibm-cloud-frequently-visited-v5", "ibm-cloud-visited-v6-16items", "ibm-cloud-visited-v7-full"].forEach((t) => localStorage.removeItem(t));
} catch {
}
const Ds = [
  { resourceId: "vsi-prod-web-01", name: "vsi-prod-web-01", status: "Running", product: "Virtual Server Instances", visitCount: 5, lastVisited: "2026-03-17T09:42:00Z" },
  { resourceId: "cos-migration-store", name: "cos-migration-store", status: "Failed", product: "Cloud Object Storage", visitCount: 4, lastVisited: "2026-03-17T08:15:00Z" },
  { resourceId: "iks-prod-cluster-01", name: "iks-prod-cluster-01", status: "Running", product: "Clusters", visitCount: 3, lastVisited: "2026-03-17T07:30:00Z" },
  { resourceId: "fn-data-processor", name: "fn-data-processor", status: "Warning", product: "Serverless", visitCount: 3, lastVisited: "2026-03-16T22:10:00Z" },
  { resourceId: "log-prod-us-south", name: "log-prod-us-south", status: "Running", product: "Logging instances", visitCount: 3, lastVisited: "2026-03-16T18:45:00Z" },
  { resourceId: "mon-prod-infra", name: "mon-prod-infra", status: "Running", product: "Monitoring instances", visitCount: 2, lastVisited: "2026-03-16T14:20:00Z" },
  { resourceId: "vpc-network-prod", name: "vpc-network-prod", status: "Failed", product: "Virtual Server Instances", visitCount: 2, lastVisited: "2026-03-16T11:05:00Z" },
  { resourceId: "cos-media-assets", name: "cos-media-assets", status: "Running", product: "Cloud Object Storage", visitCount: 2, lastVisited: "2026-03-16T09:30:00Z" },
  { resourceId: "fn-event-handler", name: "fn-event-handler", status: "Running", product: "Serverless", visitCount: 2, lastVisited: "2026-03-15T21:15:00Z" },
  { resourceId: "iks-staging-cluster-02", name: "iks-staging-cluster-02", status: "Running", product: "Clusters", visitCount: 1, lastVisited: "2026-03-15T16:40:00Z" },
  { resourceId: "log-staging-eu-de", name: "log-staging-eu-de", status: "Running", product: "Logging instances", visitCount: 1, lastVisited: "2026-03-15T12:00:00Z" },
  { resourceId: "mon-app-performance", name: "mon-app-performance", status: "Running", product: "Monitoring instances", visitCount: 1, lastVisited: "2026-03-15T08:25:00Z" },
  { resourceId: "vsi-dev-sandbox-03", name: "vsi-dev-sandbox-03", status: "Running", product: "Virtual Server Instances", visitCount: 1, lastVisited: "2026-03-14T19:50:00Z" },
  { resourceId: "cos-backup-archive", name: "cos-backup-archive", status: "Running", product: "Cloud Object Storage", visitCount: 1, lastVisited: "2026-03-14T15:10:00Z" },
  { resourceId: "iks-dev-cluster-03", name: "iks-dev-cluster-03", status: "Running", product: "Clusters", visitCount: 1, lastVisited: "2026-03-14T10:35:00Z" },
  { resourceId: "fn-api-gateway", name: "fn-api-gateway", status: "Running", product: "Serverless", visitCount: 1, lastVisited: "2026-03-13T23:00:00Z" }
];
function qd() {
  try {
    const t = localStorage.getItem(zs);
    if (t) {
      const n = JSON.parse(t);
      if (Array.isArray(n) && n.length > 0) {
        const a = n.map((s) => ({
          ...s,
          visitCount: typeof s.visitCount == "number" ? s.visitCount : 1,
          lastVisited: typeof s.lastVisited == "string" ? s.lastVisited : (/* @__PURE__ */ new Date()).toISOString()
        }));
        if (a.length < 16) {
          const s = new Set(a.map((l) => l.resourceId)), i = Ds.filter((l) => !s.has(l.resourceId));
          return [...a, ...i].slice(0, Rs);
        }
        return a;
      }
    }
  } catch {
  }
  return null;
}
function Kd(t) {
  try {
    localStorage.setItem(zs, JSON.stringify(t));
  } catch {
  }
}
function Yd({ children: t }) {
  const [n, a] = A(
    () => qd() || Ds
  );
  X(() => {
    Kd(n);
  }, [n]);
  const s = Ne(
    () => [...n].sort((c, o) => o.visitCount - c.visitCount),
    [n]
  ), i = Me((c) => {
    a((o) => {
      const d = o.find((m) => m.resourceId === c.resourceId), u = d ? d.visitCount + 1 : 1, h = o.filter((m) => m.resourceId !== c.resourceId);
      return [{ ...c, visitCount: u, lastVisited: (/* @__PURE__ */ new Date()).toISOString() }, ...h].slice(0, Rs);
    });
  }, []), l = Me((c) => {
    a((o) => o.filter((d) => d.resourceId !== c));
  }, []);
  return /* @__PURE__ */ e(Is.Provider, { value: { recentlyVisited: n, frequentlyVisited: s, addVisit: i, removeVisit: l }, children: t });
}
function nn() {
  return F(Is);
}
const Jd = [
  { id: "vsi-prod-web-01", name: "vsi-prod-web-01", type: "resource", product: "Virtual Server Instances", status: "Running", icon: "vsi", path: "/resources/vsi-prod-web-01" },
  { id: "vpc-network-prod", name: "vpc-network-prod", type: "resource", product: "Virtual Server Instances", status: "Failed", icon: "vsi", path: "/resources/vpc-network-prod" },
  { id: "vsi-dev-sandbox-03", name: "vsi-dev-sandbox-03", type: "resource", product: "Virtual Server Instances", status: "Running", icon: "vsi", path: "/resources/vsi-dev-sandbox-03" },
  { id: "cos-media-assets", name: "cos-media-assets", type: "resource", product: "Cloud Object Storage", status: "Running", icon: "storage", path: "/resources/cos-media-assets" },
  { id: "cos-migration-store", name: "cos-migration-store", type: "resource", product: "Cloud Object Storage", status: "Failed", icon: "storage", path: "/resources/cos-migration-store" },
  { id: "cos-backup-archive", name: "cos-backup-archive", type: "resource", product: "Cloud Object Storage", status: "Running", icon: "storage", path: "/resources/cos-backup-archive" },
  { id: "fn-data-processor", name: "fn-data-processor", type: "resource", product: "Serverless", status: "Warning", icon: "serverless", path: "/resources/fn-data-processor" },
  { id: "fn-event-handler", name: "fn-event-handler", type: "resource", product: "Serverless", status: "Running", icon: "serverless", path: "/resources/fn-event-handler" },
  { id: "fn-api-gateway", name: "fn-api-gateway", type: "resource", product: "Serverless", status: "Running", icon: "serverless", path: "/resources/fn-api-gateway" },
  { id: "iks-prod-cluster-01", name: "iks-prod-cluster-01", type: "resource", product: "Clusters", status: "Running", icon: "cluster", path: "/resources/iks-prod-cluster-01" },
  { id: "iks-staging-cluster-02", name: "iks-staging-cluster-02", type: "resource", product: "Clusters", status: "Running", icon: "cluster", path: "/resources/iks-staging-cluster-02" },
  { id: "iks-dev-cluster-03", name: "iks-dev-cluster-03", type: "resource", product: "Clusters", status: "Running", icon: "cluster", path: "/resources/iks-dev-cluster-03" },
  { id: "log-prod-us-south", name: "log-prod-us-south", type: "resource", product: "Logging instances", status: "Running", icon: "logging", path: "/resources/log-prod-us-south" },
  { id: "log-staging-eu-de", name: "log-staging-eu-de", type: "resource", product: "Logging instances", status: "Running", icon: "logging", path: "/resources/log-staging-eu-de" },
  { id: "log-dev-analytics", name: "log-dev-analytics", type: "resource", product: "Logging instances", status: "Running", icon: "logging", path: "/resources/log-dev-analytics" },
  { id: "mon-prod-infra", name: "mon-prod-infra", type: "resource", product: "Monitoring instances", status: "Running", icon: "monitoring", path: "/resources/mon-prod-infra" },
  { id: "mon-app-performance", name: "mon-app-performance", type: "resource", product: "Monitoring instances", status: "Running", icon: "monitoring", path: "/resources/mon-app-performance" },
  { id: "mon-network-health", name: "mon-network-health", type: "resource", product: "Monitoring instances", status: "Running", icon: "monitoring", path: "/resources/mon-network-health" }
], Zd = [
  { id: "page-catalog", name: "Products and hubs", type: "page", icon: "page", path: "/catalog" },
  { id: "page-resources", name: "Resource list", type: "page", icon: "page", path: "/resources" },
  { id: "page-activities", name: "Activities", type: "page", icon: "page", path: "/activities" },
  { id: "page-containers", name: "Containers", type: "page", icon: "page", path: "/containers" },
  { id: "page-clusters", name: "Clusters", type: "page", icon: "page", path: "/containers/clusters" },
  { id: "page-observability", name: "Observability", type: "page", icon: "page", path: "/observability" },
  { id: "page-infrastructure", name: "Infrastructure", type: "page", icon: "page", path: "/infrastructure" }
];
function Qd({ type: t, size: n = 14 }) {
  const a = "text-[#161616]";
  switch (t) {
    case "vsi":
      return /* @__PURE__ */ e(Ye, { size: n, className: a });
    case "storage":
      return /* @__PURE__ */ e(mt, { size: n, className: a });
    case "serverless":
      return /* @__PURE__ */ e(Mt, { size: n, className: a });
    case "cluster":
      return /* @__PURE__ */ e(fs, { size: n, className: a });
    case "logging":
      return /* @__PURE__ */ e(at, { size: n, className: a });
    case "monitoring":
      return /* @__PURE__ */ e(Sn, { size: n, className: a });
    default:
      return /* @__PURE__ */ e(Ye, { size: n, className: a });
  }
}
function Xd({ status: t }) {
  return t === "Running" ? /* @__PURE__ */ e(be, { size: 16, className: "shrink-0", style: { color: "#198038" }, fill: "#198038", stroke: "white" }) : t === "Failed" ? /* @__PURE__ */ e(Je, { size: 16, className: "shrink-0", style: { color: "#da1e28" }, fill: "#da1e28", stroke: "white" }) : t === "Warning" ? /* @__PURE__ */ e(Fe, { size: 16, className: "shrink-0", style: { color: "#f1c21b" }, fill: "#f1c21b", stroke: "white" }) : null;
}
function br({ isOpen: t, onClose: n }) {
  const [a, s] = A(""), i = pe(), l = Se(null);
  if (X(() => {
    t && l.current && l.current.focus();
  }, [t]), X(() => {
    if (t) {
      const u = (h) => {
        h.key === "Escape" && n();
      };
      return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
    }
  }, [t, n]), !t) return null;
  const c = [...Jd, ...Zd], o = a.trim() ? c.filter(
    (u) => u.name.toLowerCase().includes(a.toLowerCase()) || u.product?.toLowerCase().includes(a.toLowerCase())
  ) : [], d = (u) => {
    u.path && (i(u.path), n(), s(""));
  };
  return /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "fixed inset-0 z-50",
        onClick: n
      }
    ),
    /* @__PURE__ */ r(
      "div",
      {
        className: "fixed top-[60px] left-4 w-[400px] bg-white border border-[#e0e0e0] shadow-xl z-50 rounded",
        style: { fontFamily: "'IBM Plex Sans', sans-serif" },
        onClick: (u) => u.stopPropagation(),
        children: [
          /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-4 py-3 border-b border-[#e0e0e0]", children: [
            /* @__PURE__ */ e(Ie, { size: 16, className: "text-[#525252] shrink-0" }),
            /* @__PURE__ */ e(
              "input",
              {
                ref: l,
                type: "text",
                value: a,
                onChange: (u) => s(u.target.value),
                placeholder: "Search...",
                className: "flex-1 text-[14px] text-[#161616] placeholder-[#a8a8a8] outline-none bg-transparent",
                style: { fontWeight: 400 }
              }
            ),
            a && /* @__PURE__ */ e(
              "button",
              {
                onClick: () => s(""),
                className: "p-0.5 hover:bg-[#e0e0e0] rounded transition-colors",
                title: "Clear search",
                children: /* @__PURE__ */ e(nt, { size: 16, className: "text-[#525252]" })
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: n,
                className: "p-0.5 hover:bg-[#e0e0e0] rounded transition-colors",
                title: "Close",
                children: /* @__PURE__ */ e(nt, { size: 16, className: "text-[#525252]" })
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "max-h-[500px] overflow-y-auto", children: a.trim() === "" ? /* @__PURE__ */ e("div", { className: "px-4 py-6 text-center", children: /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Search resources and pages" }) }) : o.length === 0 ? /* @__PURE__ */ e("div", { className: "px-4 py-6 text-center", children: /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "No results found" }) }) : /* @__PURE__ */ e("div", { className: "py-1", children: o.map((u) => /* @__PURE__ */ r(
            "button",
            {
              onClick: () => d(u),
              className: "w-full flex items-center justify-between px-4 py-2.5 hover:bg-[#e8e8e8] transition-colors group",
              children: [
                /* @__PURE__ */ r("div", { className: "flex items-center gap-2.5 flex-1 min-w-0", children: [
                  /* @__PURE__ */ e("div", { className: "shrink-0 w-8 h-8 flex items-center justify-center bg-[#f4f4f4] rounded", children: /* @__PURE__ */ e(Qd, { type: u.icon, size: 16 }) }),
                  /* @__PURE__ */ r("div", { className: "flex-1 min-w-0 text-left", children: [
                    /* @__PURE__ */ r("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ e(
                        "p",
                        {
                          className: "text-[13px] text-[#161616] truncate",
                          style: { fontWeight: 600 },
                          children: u.name
                        }
                      ),
                      u.status && /* @__PURE__ */ e(Xd, { status: u.status })
                    ] }),
                    u.product && /* @__PURE__ */ e(
                      "p",
                      {
                        className: "text-[11px] text-[#525252] truncate",
                        style: { fontWeight: 400 },
                        children: u.product
                      }
                    ),
                    u.type === "page" && /* @__PURE__ */ e(
                      "p",
                      {
                        className: "text-[11px] text-[#525252] truncate",
                        style: { fontWeight: 400 },
                        children: "Page"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ e(
                  Ke,
                  {
                    size: 14,
                    className: "text-[#525252] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2"
                  }
                )
              ]
            },
            u.id
          )) }) })
        ]
      }
    )
  ] });
}
function eu() {
  const t = pe(), a = Ze().pathname, { frequentlyVisited: s } = nn(), { collapsed: i, toggleCollapsed: l } = we(), { activeUser: c, activeUserId: o, setActiveUserId: d, users: u } = wa(), { isDarkMode: h } = zn(), m = a.startsWith("/containers");
  a.startsWith("/access-iam");
  const g = o !== "adam", [f, N] = A(!1), [v, w] = A(!1), S = Se(null);
  X(() => {
    if (!f) return;
    const z = (D) => {
      S.current && !S.current.contains(D.target) && N(!1);
    };
    return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
  }, [f]);
  const [W, R] = A({
    "Frequently visited": !0,
    "Needs attention": !0,
    Containers: !1,
    Serverless: !1,
    "Cluster management": !1,
    "Container registry": !1
  });
  X(() => {
    m && !W.Containers && R((z) => ({ ...z, Containers: !0 }));
  }, [m]);
  const E = (z) => {
    R((D) => ({ ...D, [z]: !D[z] }));
  };
  return X(() => {
    N(!1);
  }, [i]), i ? /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ r(
      "nav",
      {
        className: `w-[48px] ${h ? "bg-[#262626] border-[#393939]" : "bg-white border-[#e0e0e0]"} border-r fixed left-0 top-0 bottom-0 overflow-y-auto z-40 flex flex-col transition-all duration-200`,
        style: { fontFamily: "'IBM Plex Sans', sans-serif" },
        children: [
          /* @__PURE__ */ e("div", { className: `flex items-center justify-center h-12 shrink-0 ${h ? "border-[#393939]" : "border-[#e0e0e0]"} border-b`, children: /* @__PURE__ */ e("button", { className: `p-1 ${h ? "hover:bg-[#393939]" : "hover:bg-[#e0e0e0]"} rounded transition-colors`, onClick: l, title: "Expand navigation", children: /* @__PURE__ */ e(hd, { size: 16, className: h ? "text-[#c6c6c6]" : "text-[#525252]" }) }) }),
          /* @__PURE__ */ e("div", { className: "flex items-center justify-center py-3", children: /* @__PURE__ */ e("button", { className: `p-1 ${h ? "hover:bg-[#393939]" : "hover:bg-[#e0e0e0]"} rounded transition-colors`, title: "Quick search", onClick: () => w(!0), children: /* @__PURE__ */ e(Ie, { size: 16, className: h ? "text-[#c6c6c6]" : "text-[#525252]" }) }) }),
          /* @__PURE__ */ r("div", { className: "py-1 flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ e(ht, { icon: /* @__PURE__ */ e(ys, { size: 16 }), label: "Home", active: a === "/", onClick: () => t("/"), isDarkMode: h }),
            /* @__PURE__ */ e(ht, { icon: /* @__PURE__ */ e(Wn, { size: 16 }), label: "Products and hubs", active: a === "/catalog", onClick: () => t("/catalog"), isDarkMode: h }),
            /* @__PURE__ */ e(ht, { icon: /* @__PURE__ */ e(gs, { size: 16 }), label: "Projects", isDarkMode: h }),
            /* @__PURE__ */ e(ht, { icon: /* @__PURE__ */ e(Yt, { size: 16 }), label: "Resources", active: a === "/resources", onClick: () => t("/resources"), isDarkMode: h }),
            /* @__PURE__ */ e(ht, { icon: /* @__PURE__ */ e(Cn, { size: 16 }), label: "Activities", active: a === "/activities", onClick: () => t("/activities"), isDarkMode: h })
          ] }),
          /* @__PURE__ */ r("div", { className: "py-2 flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ e("div", { className: `mx-2 ${h ? "border-[#393939]" : "border-[#e0e0e0]"} border-t w-[calc(100%-16px)]` }),
            /* @__PURE__ */ e(ht, { icon: /* @__PURE__ */ e(ps, { size: 16 }), label: "Frequently visited", isDarkMode: h })
          ] }),
          /* @__PURE__ */ r("div", { className: "py-2 flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ e("div", { className: `mx-2 ${h ? "border-[#393939]" : "border-[#e0e0e0]"} border-t w-[calc(100%-16px)]` }),
            /* @__PURE__ */ e(ht, { icon: /* @__PURE__ */ e(ba, { size: 16 }), label: "Containers", isDarkMode: h })
          ] }),
          /* @__PURE__ */ r("div", { className: "mt-auto relative", ref: S, children: [
            f && /* @__PURE__ */ r("div", { className: `absolute bottom-0 left-[48px] w-[256px] ${h ? "bg-[#262626] border-[#393939]" : "bg-white border-[#e0e0e0]"} border shadow-lg z-50`, children: [
              /* @__PURE__ */ e("div", { className: "px-4 pt-4 pb-3", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-3 mb-1", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-full bg-[#0f62fe] flex items-center justify-center text-white text-[13px]", style: { fontWeight: 600 }, children: c.name.split(" ").map((z) => z[0]).join("") }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("p", { className: `text-[14px] ${h ? "text-[#f4f4f4]" : "text-[#161616]"}`, style: { fontWeight: 600 }, children: c.name }),
                  /* @__PURE__ */ e("p", { className: `text-[12px] ${h ? "text-[#c6c6c6]" : "text-[#525252]"}`, style: { fontWeight: 400 }, children: c.email })
                ] })
              ] }) }),
              /* @__PURE__ */ r("div", { className: `${h ? "border-[#393939]" : "border-[#e0e0e0]"} border-t`, children: [
                /* @__PURE__ */ e("p", { className: `px-4 pt-3 pb-1 text-[12px] ${h ? "text-[#c6c6c6]" : "text-[#525252]"}`, style: { fontWeight: 600 }, children: "Switch account" }),
                u.map((z) => /* @__PURE__ */ r(
                  "button",
                  {
                    className: `w-full flex items-center justify-between px-4 py-2 ${h ? "hover:bg-[#393939]" : "hover:bg-[#e8e8e8]"} transition-colors text-[14px] ${z.id === o ? h ? "bg-[#393939]" : "bg-[#e0e0e0]" : ""}`,
                    style: { fontWeight: 400 },
                    onClick: () => {
                      d(z.id), N(!1);
                    },
                    children: [
                      /* @__PURE__ */ r("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("div", { className: "w-6 h-6 rounded-full bg-[#393939] flex items-center justify-center text-white text-[10px]", style: { fontWeight: 600 }, children: z.name.split(" ").map((D) => D[0]).join("") }),
                        /* @__PURE__ */ e("span", { className: h ? "text-[#f4f4f4]" : "text-[#161616]", children: z.name })
                      ] }),
                      z.id === o && /* @__PURE__ */ e(Xn, { size: 16, className: "text-[#0f62fe]" })
                    ]
                  },
                  z.id
                ))
              ] }),
              /* @__PURE__ */ r("div", { className: `${h ? "border-[#393939]" : "border-[#e0e0e0]"} border-t`, children: [
                /* @__PURE__ */ r(
                  "button",
                  {
                    className: `w-full flex items-center gap-3 px-4 py-2.5 ${h ? "hover:bg-[#393939] text-[#c6c6c6]" : "hover:bg-[#e8e8e8] text-[#525252]"} transition-colors text-[14px]`,
                    style: { fontWeight: 400 },
                    children: [
                      /* @__PURE__ */ e(Jt, { size: 16 }),
                      "Profile and settings"
                    ]
                  }
                ),
                /* @__PURE__ */ r(
                  "button",
                  {
                    className: `w-full flex items-center gap-3 px-4 py-2.5 ${h ? "hover:bg-[#393939]" : "hover:bg-[#e8e8e8]"} transition-colors text-[14px] text-[#da1e28]`,
                    style: { fontWeight: 400 },
                    children: [
                      /* @__PURE__ */ e(aa, { size: 16 }),
                      "Log out"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ r("div", { className: "py-2 flex flex-col items-center", children: [
              /* @__PURE__ */ e("div", { className: `mx-2 ${h ? "border-[#393939]" : "border-[#e0e0e0]"} border-t w-[calc(100%-16px)]` }),
              /* @__PURE__ */ e(
                "button",
                {
                  className: `relative flex items-center justify-center w-10 h-10 rounded ${h ? "hover:bg-[#393939]" : "hover:bg-[#e8e8e8]"} transition-colors ${f ? h ? "bg-[#393939]" : "bg-[#e0e0e0]" : ""}`,
                  onClick: () => N(!f),
                  title: c.name,
                  children: /* @__PURE__ */ e("span", { className: h ? "text-[#c6c6c6]" : "text-[#525252]", children: /* @__PURE__ */ e(ra, { size: 16 }) })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e(br, { isOpen: v, onClose: () => w(!1) })
  ] }) : /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ r(
      "nav",
      {
        className: `w-[256px] ${h ? "bg-[#262626] border-[#393939]" : "bg-white border-[#e0e0e0]"} border-r fixed left-0 top-0 bottom-0 z-40 flex flex-col transition-all duration-200`,
        style: { fontFamily: "'IBM Plex Sans', sans-serif" },
        children: [
          /* @__PURE__ */ r("div", { className: `flex items-center justify-between h-12 px-4 shrink-0 ${h ? "border-[#393939]" : "border-[#e0e0e0]"} border-b`, children: [
            /* @__PURE__ */ e("span", { className: `text-[14px] ${h ? "text-[#f4f4f4]" : "text-[#161616]"}`, style: { fontWeight: 600 }, children: "IBM Cloud" }),
            /* @__PURE__ */ e("button", { className: `p-1 ${h ? "hover:bg-[#393939]" : "hover:bg-[#e0e0e0]"} rounded transition-colors`, onClick: l, title: "Collapse navigation", children: /* @__PURE__ */ e(dd, { size: 16, className: h ? "text-[#c6c6c6]" : "text-[#525252]" }) })
          ] }),
          /* @__PURE__ */ e("div", { className: "px-4 py-2 shrink-0", children: /* @__PURE__ */ r(
            "button",
            {
              className: `w-full flex items-center gap-2 px-3 py-2 ${h ? "bg-[#393939] hover:bg-[#4c4c4c] text-[#8d8d8d]" : "bg-[#f4f4f4] hover:bg-[#e8e8e8] text-[#a8a8a8]"} rounded text-[12px] cursor-pointer transition-colors`,
              onClick: () => w(!0),
              children: [
                /* @__PURE__ */ e(Ie, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Quick search" })
              ]
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ e(
            tu,
            {
              currentPath: a,
              navState: W,
              toggleSection: E,
              frequentlyVisited: s,
              navigate: t,
              isNewUser: g,
              isDarkMode: h
            }
          ) }),
          /* @__PURE__ */ r("div", { className: "shrink-0 relative", ref: S, children: [
            f && /* @__PURE__ */ r("div", { className: `absolute bottom-full left-0 w-full ${h ? "bg-[#262626] border-[#393939]" : "bg-white border-[#e0e0e0]"} border shadow-lg z-50`, children: [
              /* @__PURE__ */ e("div", { className: "px-4 pt-4 pb-3", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-3 mb-1", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-full bg-[#0f62fe] flex items-center justify-center text-white text-[13px]", style: { fontWeight: 600 }, children: c.name.split(" ").map((z) => z[0]).join("") }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("p", { className: `text-[14px] ${h ? "text-[#f4f4f4]" : "text-[#161616]"}`, style: { fontWeight: 600 }, children: c.name }),
                  /* @__PURE__ */ e("p", { className: `text-[12px] ${h ? "text-[#c6c6c6]" : "text-[#525252]"}`, style: { fontWeight: 400 }, children: c.email })
                ] })
              ] }) }),
              /* @__PURE__ */ r("div", { className: `${h ? "border-[#393939]" : "border-[#e0e0e0]"} border-t`, children: [
                /* @__PURE__ */ e("p", { className: `px-4 pt-3 pb-1 text-[12px] ${h ? "text-[#c6c6c6]" : "text-[#525252]"}`, style: { fontWeight: 600 }, children: "Switch account" }),
                u.map((z) => /* @__PURE__ */ r(
                  "button",
                  {
                    className: `w-full flex items-center justify-between px-4 py-2 ${h ? "hover:bg-[#393939]" : "hover:bg-[#e8e8e8]"} transition-colors text-[14px] ${z.id === o ? h ? "bg-[#393939]" : "bg-[#e0e0e0]" : ""}`,
                    style: { fontWeight: 400 },
                    onClick: () => {
                      d(z.id), N(!1);
                    },
                    children: [
                      /* @__PURE__ */ r("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ e("div", { className: "w-6 h-6 rounded-full bg-[#393939] flex items-center justify-center text-white text-[10px]", style: { fontWeight: 600 }, children: z.name.split(" ").map((D) => D[0]).join("") }),
                        /* @__PURE__ */ e("span", { className: h ? "text-[#f4f4f4]" : "text-[#161616]", children: z.name })
                      ] }),
                      z.id === o && /* @__PURE__ */ e(Xn, { size: 16, className: "text-[#0f62fe]" })
                    ]
                  },
                  z.id
                ))
              ] }),
              /* @__PURE__ */ r("div", { className: `${h ? "border-[#393939]" : "border-[#e0e0e0]"} border-t`, children: [
                /* @__PURE__ */ r(
                  "button",
                  {
                    className: `w-full flex items-center gap-3 px-4 py-2.5 ${h ? "hover:bg-[#393939] text-[#c6c6c6]" : "hover:bg-[#e8e8e8] text-[#525252]"} transition-colors text-[14px]`,
                    style: { fontWeight: 400 },
                    children: [
                      /* @__PURE__ */ e(Jt, { size: 16 }),
                      "Profile and settings"
                    ]
                  }
                ),
                /* @__PURE__ */ r(
                  "button",
                  {
                    className: `w-full flex items-center gap-3 px-4 py-2.5 ${h ? "hover:bg-[#393939]" : "hover:bg-[#e8e8e8]"} transition-colors text-[14px] text-[#da1e28]`,
                    style: { fontWeight: 400 },
                    children: [
                      /* @__PURE__ */ e(aa, { size: 16 }),
                      "Log out"
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: `${h ? "border-[#393939]" : "border-[#e0e0e0]"} border-t` }),
            /* @__PURE__ */ r(
              "button",
              {
                className: `w-full flex items-center justify-between px-4 py-3 ${h ? "hover:bg-[#393939]" : "hover:bg-[#e8e8e8]"} transition-colors`,
                onClick: () => N(!f),
                children: [
                  /* @__PURE__ */ r("div", { className: `flex items-center gap-2 text-[14px] ${h ? "text-[#c6c6c6]" : "text-[#525252]"}`, style: { fontWeight: 400 }, children: [
                    /* @__PURE__ */ e(ra, { size: 16 }),
                    c.name
                  ] }),
                  f ? /* @__PURE__ */ e(de, { size: 16, className: h ? "text-[#c6c6c6]" : "text-[#525252]" }) : /* @__PURE__ */ e(Ct, { size: 16, className: h ? "text-[#c6c6c6]" : "text-[#525252]" })
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e(br, { isOpen: v, onClose: () => w(!1) })
  ] });
}
function tu({
  currentPath: t,
  navState: n,
  toggleSection: a,
  frequentlyVisited: s,
  navigate: i,
  isNewUser: l,
  isDarkMode: c
}) {
  return /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ r("div", { className: "py-1", children: [
      /* @__PURE__ */ e(ie, { icon: /* @__PURE__ */ e(ys, { size: 16 }), label: "Home", active: t === "/", onClick: () => i("/") }),
      /* @__PURE__ */ e(ie, { icon: /* @__PURE__ */ e(Wn, { size: 16 }), label: "Products and hubs", active: t === "/catalog", onClick: () => i("/catalog") }),
      /* @__PURE__ */ e(
        ie,
        {
          icon: /* @__PURE__ */ e(Cn, { size: 16 }),
          label: "Activities",
          active: t === "/activities",
          onClick: () => i("/activities")
        }
      )
    ] }),
    /* @__PURE__ */ r("div", { children: [
      /* @__PURE__ */ e("div", { className: "mx-4 border-t border-[#e0e0e0]" }),
      /* @__PURE__ */ e("div", { className: "px-4 pt-3 pb-1", children: /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252] uppercase tracking-wide", style: { fontWeight: 600 }, children: "My Projects" }) }),
      /* @__PURE__ */ e(ie, { icon: /* @__PURE__ */ e(gs, { size: 16 }), label: "Projects list" })
    ] }),
    /* @__PURE__ */ r("div", { children: [
      /* @__PURE__ */ e("div", { className: "mx-4 border-t border-[#e0e0e0]" }),
      /* @__PURE__ */ e("div", { className: "px-4 pt-3 pb-1", children: /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252] uppercase tracking-wide", style: { fontWeight: 600 }, children: "My Resources" }) }),
      /* @__PURE__ */ e(ie, { icon: /* @__PURE__ */ e(Yt, { size: 16 }), label: "Resource list", active: t === "/resources", onClick: () => i("/resources") }),
      /* @__PURE__ */ r(
        "button",
        {
          className: "w-full flex items-center justify-between px-4 py-2 hover:bg-[#e8e8e8] transition-colors",
          onClick: () => a("Needs attention"),
          children: [
            /* @__PURE__ */ r("div", { className: "flex items-center gap-2 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: [
              "Needs attention",
              !l && (() => {
                const o = s.filter((d) => d.status === "Failed" || d.status === "Warning").length;
                return o > 0 ? /* @__PURE__ */ e("span", { className: "flex items-center justify-center min-w-[18px] h-[18px] rounded-full bg-[#da1e28] text-white text-[11px] px-1.5", style: { fontWeight: 600 }, children: o }) : null;
              })()
            ] }),
            n["Needs attention"] ? /* @__PURE__ */ e(Ct, { size: 16, className: "text-[#525252]" }) : /* @__PURE__ */ e(de, { size: 16, className: "text-[#525252]" })
          ]
        }
      ),
      !l && n["Needs attention"] && (() => {
        const o = s.filter((d) => d.status === "Failed" || d.status === "Warning");
        return o.length > 0 ? /* @__PURE__ */ e("div", { children: o.map((d) => /* @__PURE__ */ e(
          ie,
          {
            label: d.name,
            indent: 1,
            badge: d.status === "Failed" ? { type: "error" } : { type: "warning" },
            active: t === `/resources/${d.resourceId}`,
            onClick: () => i(`/resources/${d.resourceId}`)
          },
          d.resourceId
        )) }) : /* @__PURE__ */ e("div", { className: "py-2 text-[14px] text-[#525252]", style: { paddingLeft: 32, fontWeight: 400 }, children: "No resources need attention" });
      })(),
      /* @__PURE__ */ r(
        "button",
        {
          className: "w-full flex items-center justify-between px-4 py-2 hover:bg-[#e8e8e8] transition-colors",
          onClick: () => a("Frequently visited"),
          children: [
            /* @__PURE__ */ e("div", { className: "flex items-center gap-2 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Frequently visited" }),
            n["Frequently visited"] ? /* @__PURE__ */ e(Ct, { size: 16, className: "text-[#525252]" }) : /* @__PURE__ */ e(de, { size: 16, className: "text-[#525252]" })
          ]
        }
      ),
      !l && n["Frequently visited"] && /* @__PURE__ */ e("div", { children: s.slice(0, 5).map((o) => /* @__PURE__ */ e(
        ie,
        {
          label: o.name,
          indent: 1,
          active: t === `/resources/${o.resourceId}`,
          onClick: () => i(`/resources/${o.resourceId}`)
        },
        o.resourceId
      )) }),
      l && n["Frequently visited"] && /* @__PURE__ */ e(
        "button",
        {
          className: "w-full flex items-center gap-1.5 py-2 hover:bg-[#e8e8e8] transition-colors text-[14px] text-[#0f62fe]",
          style: { paddingLeft: 32, fontWeight: 400 },
          children: "Add new +"
        }
      )
    ] }),
    /* @__PURE__ */ r("div", { children: [
      /* @__PURE__ */ e("div", { className: "mx-4 border-t border-[#e0e0e0]" }),
      /* @__PURE__ */ r("div", { className: "px-4 pt-3 pb-1 flex items-center justify-between", children: [
        /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252] uppercase tracking-wide", style: { fontWeight: 600 }, children: "My products" }),
        /* @__PURE__ */ e(
          "button",
          {
            className: "p-0.5 hover:bg-[#e0e0e0] rounded transition-colors",
            onClick: () => i("/catalog"),
            title: "Browse catalog",
            children: /* @__PURE__ */ e(Ve, { size: 14, className: "text-[#525252]" })
          }
        )
      ] }),
      /* @__PURE__ */ r(
        "button",
        {
          className: "w-full flex items-center justify-between px-4 py-2 hover:bg-[#e8e8e8] transition-colors",
          onClick: () => a("Containers"),
          children: [
            /* @__PURE__ */ r("div", { className: "flex items-center gap-2 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: [
              /* @__PURE__ */ e(ba, { size: 16 }),
              "Containers"
            ] }),
            n.Containers ? /* @__PURE__ */ e(Ct, { size: 16, className: "text-[#525252]" }) : /* @__PURE__ */ e(de, { size: 16, className: "text-[#525252]" })
          ]
        }
      ),
      n.Containers && /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ e(
          ie,
          {
            label: "Overview",
            indent: 1,
            active: t === "/containers",
            onClick: () => i("/containers")
          }
        ),
        /* @__PURE__ */ e(
          Hn,
          {
            label: "Serverless (3)",
            expanded: n.Serverless,
            onToggle: () => a("Serverless"),
            indent: 1
          }
        ),
        n.Serverless && /* @__PURE__ */ r("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute left-[39px] top-0 bottom-0 w-px bg-[#e0e0e0]" }),
          /* @__PURE__ */ e(ie, { label: "Get started", indent: 2 }),
          /* @__PURE__ */ e(ie, { label: "Serverless project", indent: 2 }),
          /* @__PURE__ */ e(ie, { label: "CLI", indent: 2 })
        ] }),
        /* @__PURE__ */ e(
          Hn,
          {
            label: "Cluster management (3)",
            expanded: n["Cluster management"],
            onToggle: () => a("Cluster management"),
            indent: 1
          }
        ),
        n["Cluster management"] && /* @__PURE__ */ r("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute left-[39px] top-0 bottom-0 w-px bg-[#e0e0e0]" }),
          /* @__PURE__ */ e(ie, { label: "Get started", indent: 2 }),
          /* @__PURE__ */ e(
            ie,
            {
              label: "Clusters",
              indent: 2,
              active: t === "/containers/clusters",
              onClick: () => i("/containers/clusters")
            }
          ),
          /* @__PURE__ */ e(ie, { label: "Reservations", indent: 2 }),
          /* @__PURE__ */ e(ie, { label: "Helm catalog", indent: 2 })
        ] }),
        /* @__PURE__ */ e(
          Hn,
          {
            label: "Container registry",
            expanded: n["Container registry"],
            onToggle: () => a("Container registry"),
            indent: 1
          }
        ),
        n["Container registry"] && /* @__PURE__ */ r("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute left-[39px] top-0 bottom-0 w-px bg-[#e0e0e0]" }),
          /* @__PURE__ */ e(ie, { label: "Get started", indent: 2 }),
          /* @__PURE__ */ e(ie, { label: "Namespaces", indent: 2 }),
          /* @__PURE__ */ e(ie, { label: "Repositories", indent: 2 }),
          /* @__PURE__ */ e(ie, { label: "Images", indent: 2 }),
          /* @__PURE__ */ e(ie, { label: "Trash", indent: 2 }),
          /* @__PURE__ */ e(ie, { label: "Settings", indent: 2 })
        ] }),
        /* @__PURE__ */ r(
          "button",
          {
            className: "w-full flex items-center justify-between py-2 pr-4 hover:bg-[#e8e8e8] transition-colors text-[14px] text-[#525252]",
            style: { paddingLeft: 32, fontWeight: 400 },
            children: [
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e(at, { size: 16 }),
                "Docs"
              ] }),
              /* @__PURE__ */ e(xt, { size: 14, className: "text-[#525252]" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex-1" })
  ] });
}
function ht({
  icon: t,
  label: n,
  active: a,
  badge: s,
  onClick: i,
  isDarkMode: l
}) {
  return /* @__PURE__ */ r(
    "button",
    {
      className: `relative flex items-center justify-center w-10 h-10 rounded hover:bg-[#e8e8e8] transition-colors ${a ? "bg-[#e0e0e0]" : ""}`,
      onClick: i,
      title: n,
      children: [
        /* @__PURE__ */ e("span", { className: l ? "text-[#c6c6c6]" : "text-[#525252]", children: t }),
        s && /* @__PURE__ */ e("span", { className: "absolute top-0 right-0", children: s.type === "notification" && s.count ? /* @__PURE__ */ e("span", { className: "flex items-center justify-center min-w-[16px] h-[16px] rounded-full bg-[#da1e28] text-white text-[10px] px-1", style: { fontWeight: 600 }, children: s.count }) : s.type === "warning" ? /* @__PURE__ */ e("span", { className: "w-2 h-2 rounded-full bg-[#f1c21b] block" }) : /* @__PURE__ */ e("span", { className: "w-2 h-2 rounded-full bg-[#da1e28] block" }) })
      ]
    }
  );
}
function Hn({
  label: t,
  expanded: n,
  onToggle: a,
  indent: s = 0
}) {
  return /* @__PURE__ */ r(
    "button",
    {
      className: "w-full flex items-center justify-between py-2 pr-4 hover:bg-[#e8e8e8] transition-colors text-[14px] text-[#525252]",
      style: { paddingLeft: s === 0 ? 16 : s === 1 ? 32 : 48, fontWeight: 400 },
      onClick: a,
      children: [
        /* @__PURE__ */ e("span", { children: t }),
        n ? /* @__PURE__ */ e(Ct, { size: 14, className: "text-[#525252]" }) : /* @__PURE__ */ e(de, { size: 14, className: "text-[#525252]" })
      ]
    }
  );
}
function ie({
  icon: t,
  label: n,
  active: a,
  badge: s,
  indent: i = 0,
  onClick: l
}) {
  return /* @__PURE__ */ r(
    "button",
    {
      className: `w-full flex items-center justify-between py-2 pr-4 hover:bg-[#e8e8e8] transition-colors text-[14px] ${a ? "bg-[#e0e0e0] text-[#525252] border-l-3 border-[#0f62fe]" : "text-[#525252]"}`,
      style: { paddingLeft: i === 0 ? 16 : i === 1 ? 32 : 48, fontWeight: a ? 600 : 400 },
      onClick: l,
      children: [
        /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
          t,
          /* @__PURE__ */ e("span", { children: n })
        ] }),
        s && /* @__PURE__ */ e("span", { children: s.type === "notification" && s.count ? /* @__PURE__ */ r("span", { className: "flex items-center justify-center min-w-[18px] h-[18px] rounded-full bg-[#da1e28] text-white text-[11px] px-1.5 gap-0.5", style: { fontWeight: 600 }, children: [
          /* @__PURE__ */ e(ea, { size: 10, fill: "white", stroke: "#da1e28" }),
          s.count
        ] }) : s.type === "warning" && s.count ? /* @__PURE__ */ r("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ e(ea, { size: 14, className: "text-[#f1c21b]", fill: "#f1c21b", stroke: "white" }),
          /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", children: s.count })
        ] }) : s.type === "error" ? /* @__PURE__ */ e(Je, { size: 14, className: "text-[#da1e28]", fill: "#da1e28", stroke: "white" }) : s.type === "warning" && !s.count ? /* @__PURE__ */ e(Fe, { size: 14, className: "text-[#f1c21b]", fill: "#f1c21b", stroke: "white" }) : null })
      ]
    }
  );
}
const Ps = ue({
  clusters: [],
  addCluster: () => {
  },
  removeCluster: () => {
  }
}), As = "ibm-cloud-clusters-v1";
function nu() {
  try {
    const t = localStorage.getItem(As);
    if (t) return JSON.parse(t);
  } catch {
  }
  return [];
}
function au({ children: t }) {
  const [n, a] = A(nu);
  X(() => {
    localStorage.setItem(As, JSON.stringify(n));
  }, [n]);
  const s = Me((c) => {
    a((o) => o.some((d) => d.name === c.name) ? o : [c, ...o]);
  }, []), i = Me((c) => {
    a((o) => o.filter((d) => d.name !== c));
  }, []), l = Ne(() => ({ clusters: n, addCluster: s, removeCluster: i }), [n, s, i]);
  return /* @__PURE__ */ e(Ps.Provider, { value: l, children: t });
}
function Dn() {
  return F(Ps);
}
const Ls = "ibm-cloud-invited-users-v1";
function ru() {
  try {
    const t = localStorage.getItem(Ls);
    if (t) return JSON.parse(t);
  } catch {
  }
  return [];
}
const Os = ue({
  invitedUsers: [],
  addInvitedUsers: () => {
  },
  removeInvitedUser: () => {
  }
});
function su({ children: t }) {
  const [n, a] = A(ru);
  X(() => {
    localStorage.setItem(Ls, JSON.stringify(n));
  }, [n]);
  const s = Me((c) => {
    const o = (/* @__PURE__ */ new Date()).toISOString(), d = c.map((u) => ({
      name: (u.split("@")[0] || u).split(/[._-]/).map((f) => f.charAt(0).toUpperCase() + f.slice(1).toLowerCase()).join(" "),
      email: u,
      status: "In-progress",
      lastLogin: "Never",
      invitedAt: o
    }));
    a((u) => [...d, ...u]);
  }, []), i = Me((c) => {
    a((o) => o.filter((d) => d.email !== c));
  }, []), l = Ne(
    () => ({ invitedUsers: n, addInvitedUsers: s, removeInvitedUser: i }),
    [n, s, i]
  );
  return /* @__PURE__ */ e(Os.Provider, { value: l, children: t });
}
function $s() {
  return F(Os);
}
const iu = [
  {
    id: "chat-1",
    title: "Compare my resource distribution across us-south, us-east, and eu-de regions.",
    messages: [
      {
        role: "user",
        content: "Compare my resource distribution across us-south, us-east, and eu-de regions.",
        timestamp: "10:23"
      },
      {
        role: "assistant",
        content: `I've analyzed your resource distribution across the three regions. Here's what I found:

**us-south:** 45 resources (42%)
- 18 Virtual Server Instances
- 12 Object Storage buckets
- 8 Kubernetes clusters
- 7 other services

**us-east:** 32 resources (30%)
- 14 Virtual Server Instances
- 9 Object Storage buckets
- 5 Kubernetes clusters
- 4 other services

**eu-de:** 30 resources (28%)
- 11 Virtual Server Instances
- 10 Object Storage buckets
- 6 Kubernetes clusters
- 3 other services

Your workload is fairly balanced with a slight preference for us-south. Would you like me to analyze costs or performance across these regions?`,
        timestamp: "10:24"
      },
      {
        role: "user",
        content: "Yes, show me the cost breakdown",
        timestamp: "10:25"
      },
      {
        role: "assistant",
        content: `Here's your monthly cost breakdown by region:

**us-south:** $2,847/month
- Compute: $1,450
- Storage: $892
- Network: $505

**us-east:** $1,923/month
- Compute: $1,020
- Storage: $645
- Network: $258

**eu-de:** $2,105/month
- Compute: $1,180
- Storage: $710
- Network: $215

**Total:** $6,875/month

The eu-de region has higher per-resource costs due to data sovereignty requirements. Would you like recommendations on optimization?`,
        timestamp: "10:25"
      }
    ]
  },
  {
    id: "chat-2",
    title: "Create a timeline of performance degradation for the last 24 hours.",
    messages: [
      {
        role: "user",
        content: "Create a timeline of performance degradation for the last 24 hours.",
        timestamp: "Yesterday 15:42"
      },
      {
        role: "assistant",
        content: `I've identified several performance issues in the last 24 hours:

**09:15 AM** - Initial slowdown detected
- API response times increased from 120ms to 340ms
- Affected service: vpc-network-prod

**11:30 AM** - Peak degradation
- Response times peaked at 890ms
- CPU utilization hit 94%
- Memory usage at 87%

**13:45 PM** - Partial recovery
- Auto-scaling kicked in, added 3 worker nodes
- Response times improved to 420ms

**16:20 PM** - Full recovery
- All metrics returned to normal
- Response times: 135ms average

Root cause appears to be a traffic spike coinciding with a memory leak in the application tier. Would you like me to create an incident report?`,
        timestamp: "Yesterday 15:43"
      }
    ]
  },
  {
    id: "chat-3",
    title: "Update my ROKS cluster 'prod-cluster-1' to Kubernetes version 1.28.",
    messages: [
      {
        role: "user",
        content: "Update my ROKS cluster 'prod-cluster-1' to Kubernetes version 1.28.",
        timestamp: "Yesterday 11:18"
      },
      {
        role: "assistant",
        content: `I can help you update your ROKS cluster to Kubernetes 1.28. Before we proceed, let me verify the current configuration:

**Current state:**
- Cluster: prod-cluster-1
- Current version: 1.27.8
- Worker nodes: 5
- Location: us-south-1
- Status: Normal

**Update plan:**
- Target version: 1.28.3 (latest stable)
- Estimated downtime: ~45 minutes
- Worker nodes will be updated sequentially

**Pre-update checklist:**
✓ Backup all persistent volumes
✓ Review breaking changes in 1.28
✓ Test applications in staging cluster
⚠ Schedule maintenance window

Would you like me to proceed with the update? Please confirm and specify your preferred maintenance window.`,
        timestamp: "Yesterday 11:19"
      },
      {
        role: "user",
        content: "Yes, schedule it for tonight at 2 AM",
        timestamp: "Yesterday 11:21"
      },
      {
        role: "assistant",
        content: `Perfect! I've scheduled the cluster update for tonight at 2:00 AM local time. Here's the confirmation:

**Scheduled Update**
- Start time: Today, 2:00 AM
- Estimated duration: 45-60 minutes
- Notification: You'll receive alerts at start, 50% completion, and finish

I'll also create a rollback plan in case any issues occur. The update will proceed automatically unless you cancel it before 2:00 AM.

Is there anything else you'd like me to prepare for the update?`,
        timestamp: "Yesterday 11:22"
      }
    ]
  },
  {
    id: "chat-4",
    title: "Audit security group rules for overly permissive access (0.0.0.0/0).",
    messages: [
      {
        role: "user",
        content: "Audit security group rules for overly permissive access (0.0.0.0/0).",
        timestamp: "2 days ago 14:35"
      },
      {
        role: "assistant",
        content: `I've completed a security audit of your security groups. Here are the findings:

**⚠ HIGH RISK - 4 rules found:**

1. **sg-prod-web-01**
   - Port 22 (SSH) open to 0.0.0.0/0
   - Created: 14 days ago
   - Recommendation: Restrict to VPN IP range

2. **sg-database-tier**
   - Port 3306 (MySQL) open to 0.0.0.0/0
   - Created: 3 months ago
   - Recommendation: URGENT - Restrict to application tier only

3. **sg-dev-environment**
   - All ports open to 0.0.0.0/0
   - Created: 6 days ago
   - Recommendation: Apply least-privilege principle

4. **sg-admin-access**
   - Port 443 open to 0.0.0.0/0
   - Created: 2 months ago
   - Recommendation: Consider using IBM Cloud IAM instead

**MEDIUM RISK - 7 additional rules** with overly broad ranges

Would you like me to generate remediation scripts for these security groups?`,
        timestamp: "2 days ago 14:36"
      }
    ]
  },
  {
    id: "chat-5",
    title: "Create a Key Protect instance with automatic key rotation every 90 days.",
    messages: [
      {
        role: "user",
        content: "Create a Key Protect instance with automatic key rotation every 90 days.",
        timestamp: "3 days ago 09:15"
      },
      {
        role: "assistant",
        content: `I'll help you create a Key Protect instance with automatic key rotation. Here's the configuration I'm preparing:

**Instance details:**
- Name: key-protect-prod-01
- Region: us-south
- Plan: Standard
- Resource group: Default

**Key rotation policy:**
- Automatic rotation: Enabled
- Rotation interval: 90 days
- Next rotation: June 28, 2026

**Initial keys to create:**
1. root-key-database
2. root-key-storage
3. root-key-app-secrets

**Additional features:**
✓ Dual authorization enabled
✓ Activity tracking configured
✓ Integration with Event Notifications
✓ Automatic backup to COS

Estimated cost: $1.10/key/month = $3.30/month for 3 keys

Shall I proceed with creating this Key Protect instance?`,
        timestamp: "3 days ago 09:16"
      },
      {
        role: "user",
        content: "Yes, create it",
        timestamp: "3 days ago 09:17"
      },
      {
        role: "assistant",
        content: `✓ Key Protect instance created successfully!

**Instance ID:** crn:v1:bluemix:public:kms:us-south:a/abc123::instance:def456

**Created keys:**
1. root-key-database (ID: key-001)
2. root-key-storage (ID: key-002)
3. root-key-app-secrets (ID: key-003)

**Rotation schedule:**
- First rotation: June 28, 2026
- Subsequent rotations: Every 90 days

**Next steps:**
- Integrate keys with your services
- Set up alerts for rotation events
- Review access policies

Would you like me to help you integrate these keys with your existing resources?`,
        timestamp: "3 days ago 09:18"
      }
    ]
  },
  {
    id: "chat-6",
    title: "Detect potential memory leaks in my application based on memory usage trends.",
    messages: [
      {
        role: "user",
        content: "Detect potential memory leaks in my application based on memory usage trends.",
        timestamp: "4 days ago 16:22"
      },
      {
        role: "assistant",
        content: `I've analyzed memory usage patterns across your applications. Here's what I found:

**🔴 HIGH CONFIDENCE LEAKS (3 services):**

1. **fn-data-processor**
   - Memory growth: 12 MB/hour (consistent)
   - Duration: 7 days
   - Current usage: 2.1 GB / 2.5 GB limit
   - Pattern: Linear growth, no garbage collection
   - Recommendation: Review event listeners and closures

2. **api-gateway-prod**
   - Memory growth: 8 MB/hour
   - Duration: 4 days
   - Current usage: 1.8 GB / 2.0 GB limit
   - Pattern: Stepwise increase after each deployment
   - Recommendation: Check for connection pooling issues

3. **worker-queue-processor**
   - Memory growth: 15 MB/hour
   - Duration: 3 days
   - Current usage: 1.2 GB / 1.5 GB limit
   - Pattern: Correlates with job queue depth
   - Recommendation: Review job cleanup logic

**🟡 POTENTIAL LEAKS (2 services):**
- cache-service-01: Unusual growth pattern
- notification-worker: Sporadic spikes

Would you like me to generate heap dumps or set up monitoring alerts?`,
        timestamp: "4 days ago 16:23"
      }
    ]
  },
  {
    id: "chat-7",
    title: "Create a ROKS cluster with 3 worker nodes, CIS hardening, and private service endpoint only.",
    messages: [
      {
        role: "user",
        content: "Create a ROKS cluster with 3 worker nodes, CIS hardening, and private service endpoint only.",
        timestamp: "5 days ago 13:47"
      },
      {
        role: "assistant",
        content: `I'll create a secure ROKS cluster with CIS hardening. Here's the configuration:

**Cluster configuration:**
- Name: secure-cluster-01
- Version: OpenShift 4.15.22
- Location: us-south-1
- Worker nodes: 3
- Flavor: bx2.4x16 (4 vCPU, 16 GB RAM)

**Security settings:**
✓ Private service endpoint only (no public access)
✓ CIS Kubernetes Benchmark hardening applied
✓ Pod security policies: Restricted
✓ Network policies: Enabled by default
✓ Image security enforcement

**CIS hardening includes:**
- API server audit logging
- RBAC with least privilege
- Encrypted secrets at rest
- Admission controllers enabled
- Resource quotas and limits
- Security context constraints

**Networking:**
- VPC: Create new isolated VPC
- Subnets: Private subnets in 3 zones
- Service mesh: Istio (optional)

**Estimated cost:** $512/month

Shall I proceed with cluster creation?`,
        timestamp: "5 days ago 13:48"
      },
      {
        role: "user",
        content: "Yes, and include Istio",
        timestamp: "5 days ago 13:50"
      },
      {
        role: "assistant",
        content: `✓ ROKS cluster creation initiated!

**Status:** Provisioning (estimated 25 minutes)

**Cluster details:**
- ID: c8j6kz5f0r1234abcd
- Name: secure-cluster-01
- Master endpoint: https://c100-e.us-south.containers.cloud.ibm.com:31234 (private)

**Worker nodes:**
1. 10.240.0.4 - Deploying
2. 10.240.0.5 - Deploying
3. 10.240.0.6 - Pending

**Istio installation:**
- Version: 1.20.2
- Components: Ingress gateway, Egress gateway, Telemetry
- mTLS: Enabled (STRICT mode)

**Next steps:**
1. Configure VPN access for cluster management
2. Set up image registry authentication
3. Deploy initial workloads

I'll notify you when the cluster is ready. You can monitor progress in the Containers dashboard.`,
        timestamp: "5 days ago 13:51"
      }
    ]
  },
  {
    id: "chat-8",
    title: "Generate a billing anomaly report for eu-de workloads; highlight spikes.",
    messages: [
      {
        role: "user",
        content: "Generate a billing anomaly report for eu-de workloads; highlight spikes.",
        timestamp: "6 days ago 10:05"
      },
      {
        role: "assistant",
        content: `I've analyzed your eu-de billing for the past 30 days. Here are the anomalies:

**🔴 CRITICAL SPIKES:**

**March 18-19, 2026**
- Normal daily cost: $85
- Spike cost: $437 (+414%)
- Duration: 18 hours
- Root cause: Object Storage egress
- Details: 12.4 TB data transfer (vs. usual 890 GB)
- Likely cause: Misconfigured backup job

**March 24, 2026**
- Normal daily cost: $85
- Spike cost: $218 (+156%)
- Duration: 6 hours
- Root cause: Compute instances
- Details: 24 extra VSIs launched (probable runaway autoscaler)

**🟡 MODERATE ANOMALIES:**

**March 21, 2026** - Storage increase
- +$45 (53% above baseline)
- Caused by snapshot retention policy changes

**March 26, 2026** - Network costs
- +$32 (38% above baseline)
- Increased VPN Gateway usage

**Monthly impact:** $512 in unexpected charges

**Recommendations:**
1. Set budget alerts at $100/day threshold
2. Review Object Storage lifecycle policies
3. Add autoscaler limits (max 10 instances)

Would you like me to set up preventive measures?`,
        timestamp: "6 days ago 10:06"
      }
    ]
  }
];
function lu() {
  const { isOpen: t, setIsOpen: n, activeChatId: a, setActiveChatId: s } = ke(), [i, l] = A("chat");
  if (!t) return null;
  const c = a ? iu.find((o) => o.id === a) : null;
  return /* @__PURE__ */ r(
    "div",
    {
      className: "fixed right-0 top-0 bottom-0 w-[320px] bg-white shadow-2xl z-[60] flex flex-col border-l border-[#e0e0e0] transition-transform duration-200",
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: [
        /* @__PURE__ */ r("div", { className: "flex items-center justify-between h-12 px-4 border-b border-[#e0e0e0] shrink-0", children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "p-1 hover:bg-[#e0e0e0] rounded transition-colors",
              title: "Menu",
              children: /* @__PURE__ */ e(fr, { size: 16, className: "text-[#525252]" })
            }
          ),
          /* @__PURE__ */ e("h2", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "IBM Cloud AI" }),
          /* @__PURE__ */ e(
            "button",
            {
              className: "p-1 hover:bg-[#e0e0e0] rounded transition-colors",
              onClick: () => n(!1),
              title: "Close",
              children: /* @__PURE__ */ e(nt, { size: 16, className: "text-[#525252]" })
            }
          )
        ] }),
        /* @__PURE__ */ r("div", { className: "flex border-b border-[#e0e0e0] shrink-0", children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: `flex-1 flex items-center justify-center h-12 transition-colors ${i === "chat" ? "bg-white border-b-2 border-[#0f62fe]" : "bg-[#f4f4f4] hover:bg-[#e8e8e8]"}`,
              onClick: () => l("chat"),
              title: "Chat",
              children: /* @__PURE__ */ e(ed, { size: 16, className: i === "chat" ? "text-[#0f62fe]" : "text-[#525252]" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: `flex-1 flex items-center justify-center h-12 transition-colors ${i === "calendar" ? "bg-white border-b-2 border-[#0f62fe]" : "bg-[#f4f4f4] hover:bg-[#e8e8e8]"}`,
              onClick: () => l("calendar"),
              title: "Calendar",
              children: /* @__PURE__ */ e(Qn, { size: 16, className: i === "calendar" ? "text-[#0f62fe]" : "text-[#525252]" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: `flex-1 flex items-center justify-center h-12 transition-colors ${i === "analytics" ? "bg-white border-b-2 border-[#0f62fe]" : "bg-[#f4f4f4] hover:bg-[#e8e8e8]"}`,
              onClick: () => l("analytics"),
              title: "Analytics",
              children: /* @__PURE__ */ e(Sn, { size: 16, className: i === "analytics" ? "text-[#0f62fe]" : "text-[#525252]" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: `flex-1 flex items-center justify-center h-12 transition-colors ${i === "help" ? "bg-white border-b-2 border-[#0f62fe]" : "bg-[#f4f4f4] hover:bg-[#e8e8e8]"}`,
              onClick: () => l("help"),
              title: "Help",
              children: /* @__PURE__ */ e(Cc, { size: 16, className: i === "help" ? "text-[#0f62fe]" : "text-[#525252]" })
            }
          )
        ] }),
        i === "chat" && /* @__PURE__ */ r(he, { children: [
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto p-4", children: c ? (
            // Display messages from the selected chat
            c.messages.map((o, d) => /* @__PURE__ */ r("div", { className: "flex gap-3 mb-6", children: [
              o.role === "assistant" ? /* @__PURE__ */ e("div", { className: "shrink-0 w-8 h-8 rounded-full bg-[#0f62fe] flex items-center justify-center", children: /* @__PURE__ */ e(It, { size: 16, className: "text-white" }) }) : /* @__PURE__ */ e("div", { className: "shrink-0 w-8 h-8 rounded-full bg-[#525252] flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-[12px] text-white", style: { fontWeight: 600 }, children: "AH" }) }),
              /* @__PURE__ */ r("div", { className: "flex-1", children: [
                /* @__PURE__ */ r("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 600 }, children: o.role === "assistant" ? "IBM Cloud AI" : "Adam Habensusz" }),
                  /* @__PURE__ */ e("span", { className: "text-[11px] text-[#a8a8a8]", style: { fontWeight: 400 }, children: o.timestamp })
                ] }),
                /* @__PURE__ */ e("div", { className: "text-[14px] text-[#161616] leading-relaxed mb-3 whitespace-pre-line", style: { fontWeight: 400 }, children: o.content }),
                o.role === "assistant" && /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "p-1.5 hover:bg-[#e0e0e0] rounded transition-colors",
                      title: "Helpful",
                      children: /* @__PURE__ */ e(yr, { size: 14, className: "text-[#525252]" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "p-1.5 hover:bg-[#e0e0e0] rounded transition-colors",
                      title: "Not helpful",
                      children: /* @__PURE__ */ e(gr, { size: 14, className: "text-[#525252]" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "p-1.5 hover:bg-[#e0e0e0] rounded transition-colors",
                      title: "Regenerate",
                      children: /* @__PURE__ */ e(xr, { size: 14, className: "text-[#525252]" })
                    }
                  )
                ] })
              ] })
            ] }, d))
          ) : (
            // Default welcome message when no chat is selected
            /* @__PURE__ */ r("div", { className: "flex gap-3 mb-6", children: [
              /* @__PURE__ */ e("div", { className: "shrink-0 w-8 h-8 rounded-full bg-[#0f62fe] flex items-center justify-center", children: /* @__PURE__ */ e(It, { size: 16, className: "text-white" }) }),
              /* @__PURE__ */ r("div", { className: "flex-1", children: [
                /* @__PURE__ */ r("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 600 }, children: "IBM Cloud AI" }),
                  /* @__PURE__ */ e("span", { className: "text-[11px] text-[#a8a8a8]", style: { fontWeight: 400 }, children: "12:46" })
                ] }),
                /* @__PURE__ */ r("div", { className: "text-[14px] text-[#161616] leading-relaxed mb-3", style: { fontWeight: 400 }, children: [
                  /* @__PURE__ */ e("p", { className: "mb-3", children: "Hi! I'm Finn, an AI-powered agent for IBM Cloud." }),
                  /* @__PURE__ */ e("p", { className: "mb-3", children: "I can answer questions, help you understand your infrastructure, or even help you make new things." }),
                  /* @__PURE__ */ e("p", { children: "What can I do for you today?" })
                ] }),
                /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "p-1.5 hover:bg-[#e0e0e0] rounded transition-colors",
                      title: "Helpful",
                      children: /* @__PURE__ */ e(yr, { size: 14, className: "text-[#525252]" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "p-1.5 hover:bg-[#e0e0e0] rounded transition-colors",
                      title: "Not helpful",
                      children: /* @__PURE__ */ e(gr, { size: 14, className: "text-[#525252]" })
                    }
                  ),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "p-1.5 hover:bg-[#e0e0e0] rounded transition-colors",
                      title: "Regenerate",
                      children: /* @__PURE__ */ e(xr, { size: 14, className: "text-[#525252]" })
                    }
                  )
                ] })
              ] })
            ] })
          ) }),
          /* @__PURE__ */ e("div", { className: "shrink-0 border-t border-[#e0e0e0] p-3", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-3 py-2 bg-[#f4f4f4] rounded", children: [
            /* @__PURE__ */ e(
              "button",
              {
                className: "p-0.5 hover:bg-[#e0e0e0] rounded transition-colors shrink-0",
                title: "Menu",
                children: /* @__PURE__ */ e(fr, { size: 16, className: "text-[#525252]" })
              }
            ),
            /* @__PURE__ */ e(
              "input",
              {
                type: "text",
                placeholder: "Type something...",
                className: "flex-1 text-[14px] text-[#161616] placeholder-[#a8a8a8] bg-transparent outline-none",
                style: { fontWeight: 400 }
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                className: "p-0.5 hover:bg-[#e0e0e0] rounded transition-colors shrink-0",
                title: "Voice input",
                children: /* @__PURE__ */ e(Ns, { size: 16, className: "text-[#525252]" })
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                className: "p-0.5 hover:bg-[#e0e0e0] rounded transition-colors shrink-0",
                title: "Send",
                children: /* @__PURE__ */ e(ks, { size: 16, className: "text-[#525252]" })
              }
            )
          ] }) })
        ] }),
        i === "calendar" && /* @__PURE__ */ e("div", { className: "flex-1 flex items-center justify-center p-4", children: /* @__PURE__ */ e("p", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Calendar view coming soon" }) }),
        i === "analytics" && /* @__PURE__ */ e("div", { className: "flex-1 flex items-center justify-center p-4", children: /* @__PURE__ */ e("p", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Analytics view coming soon" }) }),
        i === "help" && /* @__PURE__ */ e("div", { className: "flex-1 flex items-center justify-center p-4", children: /* @__PURE__ */ e("p", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Help view coming soon" }) })
      ]
    }
  );
}
const ou = { fontFamily: "'IBM Plex Sans', sans-serif" };
function cu() {
  const { isDarkMode: t } = zn();
  return /* @__PURE__ */ r("div", { className: `min-h-screen ${t ? "bg-[#161616]" : "bg-[#f4f4f4]"}`, style: ou, children: [
    /* @__PURE__ */ e(Gd, {}),
    /* @__PURE__ */ e(eu, {}),
    /* @__PURE__ */ e(ho, {}),
    /* @__PURE__ */ e(lu, {})
  ] });
}
function du() {
  return /* @__PURE__ */ e(Yd, { children: /* @__PURE__ */ e(Vd, { children: /* @__PURE__ */ e(au, { children: /* @__PURE__ */ e(su, { children: /* @__PURE__ */ e(cu, {}) }) }) }) });
}
const uu = [
  {
    title: "Product Catalog",
    description: "Discover our industry leading products and solutions.",
    action: "Explore",
    actionType: "link",
    gradient: "linear-gradient(135deg, #0f62fe 0%, #a56eff 100%)",
    icon: /* @__PURE__ */ e(Wn, { size: 32, className: "text-white" }),
    path: "/catalog"
  },
  {
    title: "IBM Docs",
    description: "Visit the IBM Cloud Docs page to help get started in the right direction.",
    action: "Explore",
    actionType: "link",
    gradient: "linear-gradient(135deg, #0f62fe 0%, #4589ff 50%, #78a9ff 100%)",
    icon: /* @__PURE__ */ e(bs, { size: 32, className: "text-white" }),
    path: "#"
  },
  {
    title: "Resources",
    description: "Resources are on-demand services created and managed in the cloud.",
    action: "Create",
    actionType: "create",
    gradient: "linear-gradient(135deg, #42be65 0%, #08bdba 50%, #4589ff 100%)",
    icon: /* @__PURE__ */ e(Yt, { size: 32, className: "text-white" }),
    path: "/resources"
  },
  {
    title: "Deployable Architectures",
    description: "Explore pre-built compositions of products that work together.",
    action: "Create",
    actionType: "create",
    gradient: "linear-gradient(135deg, #08bdba 0%, #a56eff 100%)",
    icon: /* @__PURE__ */ e(In, { size: 32, className: "text-white" }),
    path: "#"
  }
], hu = [
  {
    title: "Get 60% off your Virtual Server for VPC for 12 months",
    subtitle: "Use promo code BUYVPC",
    icon: "doc"
  },
  {
    title: "Get $1000 in credits to deploy Confidential Compute, networking and storage",
    subtitle: "Use promo code VPC1000",
    icon: "doc"
  },
  {
    title: "IBM Elects Ramon L. Laguarta to its Board of Directors",
    subtitle: "Published August 29, 2024",
    icon: "globe"
  },
  {
    title: "Get $1000 in credits to deploy Confidential Compute, networking and storage",
    subtitle: "Use promo code VPC1000",
    icon: "doc"
  }
], pu = [
  {
    title: "Application Hosting (Web & Mobile Apps)",
    description: "Run Websites, Web applications, Mobile app backends, APIs and enjoy scalability, global reach, load balancing, and no server maintenance.",
    icon: "app-hosting",
    path: "#"
  },
  {
    title: "Virtual Machines & Legacy Workloads",
    description: "Run virtual machines on IBM Cloud and with reduced provisioning time, flexible on-demand capacity and easier Disaster Recovery solutions.",
    icon: "vm",
    path: "#"
  },
  {
    title: "Data Storage & Backup",
    description: "Explore enterprise grade storage solutions for Backups, Logs, Documents, Media files and Long-term archive (cold storage).",
    icon: "storage",
    path: "#"
  },
  {
    title: "Databases & Analytics",
    description: "Run database services and let IBM manage servers, replication, or scaling.",
    icon: "databases",
    path: "#"
  },
  {
    title: "Containers & Kubernetes",
    description: "Run Websites, Web applications, Mobile app backends, APIs and enjoy scalability, global reach, load balancing, and no server maintenance.",
    icon: "containers",
    path: "/containers"
  },
  {
    title: "AI, Machine Learning & GPU Workloads",
    description: "watsonx is a portfolio of AI products that accelerates the impact of generative AI in core workflows to drive productivity.",
    icon: "ai",
    path: "#"
  },
  {
    title: "Disaster Recovery & High Availability",
    description: "Backup, monitor, and restore your applications and infrastructure services on IBM Cloud.",
    icon: "disaster",
    path: "#"
  },
  {
    title: "SaaS & Managed Platforms",
    description: "Embrace the cloud through SaaS solutions, gaining instantly available, always-updated applications without the burden of managing infrastructure.",
    icon: "saas",
    path: "#"
  }
];
function fu({ type: t }) {
  const n = "w-10 h-10 text-[#161616]";
  switch (t) {
    case "app-hosting":
      return /* @__PURE__ */ r("svg", { className: n, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "6", y: "8", width: "28", height: "20", rx: "2", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("line", { x1: "6", y1: "24", x2: "34", y2: "24", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("line", { x1: "20", y1: "28", x2: "20", y2: "34", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("line", { x1: "14", y1: "34", x2: "26", y2: "34", stroke: "currentColor", strokeWidth: "1.5" })
      ] });
    case "vm":
      return /* @__PURE__ */ r("svg", { className: n, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "4", y: "10", width: "14", height: "10", rx: "1", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("rect", { x: "22", y: "10", width: "14", height: "10", rx: "1", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("rect", { x: "4", y: "24", width: "14", height: "10", rx: "1", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("rect", { x: "22", y: "24", width: "14", height: "10", rx: "1", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("line", { x1: "7", y1: "14", x2: "15", y2: "14", stroke: "currentColor", strokeWidth: "1" }),
        /* @__PURE__ */ e("line", { x1: "25", y1: "14", x2: "33", y2: "14", stroke: "currentColor", strokeWidth: "1" })
      ] });
    case "storage":
      return /* @__PURE__ */ r("svg", { className: n, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "8", y: "6", width: "24", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("rect", { x: "8", y: "16", width: "24", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("rect", { x: "8", y: "26", width: "24", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("circle", { cx: "28", cy: "10", r: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ e("circle", { cx: "28", cy: "20", r: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ e("circle", { cx: "28", cy: "30", r: "1.5", fill: "currentColor" })
      ] });
    case "databases":
      return /* @__PURE__ */ r("svg", { className: n, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("circle", { cx: "10", cy: "10", r: "3", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("circle", { cx: "30", cy: "10", r: "3", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("circle", { cx: "10", cy: "30", r: "3", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("circle", { cx: "30", cy: "30", r: "3", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("line", { x1: "13", y1: "10", x2: "27", y2: "10", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("line", { x1: "13", y1: "30", x2: "27", y2: "30", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("line", { x1: "10", y1: "13", x2: "10", y2: "27", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("line", { x1: "30", y1: "13", x2: "30", y2: "27", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("rect", { x: "16", y: "16", width: "8", height: "8", rx: "1", stroke: "currentColor", strokeWidth: "1.5" })
      ] });
    case "containers":
      return /* @__PURE__ */ r("svg", { className: n, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "6", y: "6", width: "12", height: "12", rx: "2", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("rect", { x: "22", y: "6", width: "12", height: "12", rx: "2", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("rect", { x: "6", y: "22", width: "12", height: "12", rx: "2", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("rect", { x: "22", y: "22", width: "12", height: "12", rx: "2", stroke: "currentColor", strokeWidth: "1.5" })
      ] });
    case "ai":
      return /* @__PURE__ */ r("svg", { className: n, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "12", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("path", { d: "M14 20 C14 16, 20 12, 20 20 C20 28, 26 24, 26 20", stroke: "currentColor", strokeWidth: "1.5", fill: "none" }),
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "3", stroke: "currentColor", strokeWidth: "1.5" })
      ] });
    case "disaster":
      return /* @__PURE__ */ r("svg", { className: n, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "6", y: "12", width: "12", height: "16", rx: "2", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("rect", { x: "22", y: "12", width: "12", height: "16", rx: "2", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("path", { d: "M18 18 L22 18", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("path", { d: "M18 22 L22 22", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("path", { d: "M14 8 L14 12", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("path", { d: "M26 8 L26 12", stroke: "currentColor", strokeWidth: "1.5" })
      ] });
    case "saas":
      return /* @__PURE__ */ r("svg", { className: n, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("circle", { cx: "10", cy: "14", r: "3", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("circle", { cx: "30", cy: "14", r: "3", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("rect", { x: "6", y: "20", width: "8", height: "6", rx: "1", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("rect", { x: "26", y: "20", width: "8", height: "6", rx: "1", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("line", { x1: "14", y1: "23", x2: "26", y2: "23", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("rect", { x: "16", y: "30", width: "8", height: "4", rx: "1", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ e("line", { x1: "20", y1: "26", x2: "20", y2: "30", stroke: "currentColor", strokeWidth: "1.5" })
      ] });
    default:
      return /* @__PURE__ */ e("div", { className: "w-10 h-10" });
  }
}
function mu({ type: t }) {
  return t === "globe" ? /* @__PURE__ */ e("div", { className: "w-8 h-8 border border-[#e0e0e0] rounded flex items-center justify-center", children: /* @__PURE__ */ e(In, { size: 16, className: "text-[#525252]" }) }) : /* @__PURE__ */ e("div", { className: "w-8 h-8 border border-[#e0e0e0] rounded flex items-center justify-center", children: /* @__PURE__ */ r("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
    /* @__PURE__ */ e("rect", { x: "2", y: "1", width: "10", height: "14", rx: "1", stroke: "#525252", strokeWidth: "1.2" }),
    /* @__PURE__ */ e("line", { x1: "4", y1: "5", x2: "10", y2: "5", stroke: "#525252", strokeWidth: "1" }),
    /* @__PURE__ */ e("line", { x1: "4", y1: "7.5", x2: "10", y2: "7.5", stroke: "#525252", strokeWidth: "1" }),
    /* @__PURE__ */ e("line", { x1: "4", y1: "10", x2: "8", y2: "10", stroke: "#525252", strokeWidth: "1" })
  ] }) });
}
function xu() {
  const t = pe();
  return /* @__PURE__ */ r("div", { className: "px-8 pt-8 pb-12 max-w-[1600px] mx-auto w-full", children: [
    /* @__PURE__ */ r("div", { className: "mb-10", children: [
      /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616] mb-5", style: { fontWeight: 300 }, children: "Explore IBM Cloud" }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-4 gap-0.5", children: uu.map((n) => /* @__PURE__ */ r(
        "div",
        {
          className: "bg-white cursor-pointer hover:bg-[#e8e8e8] transition-colors",
          onClick: () => n.path !== "#" && t(n.path),
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "h-[100px] flex items-center justify-center",
                style: { background: n.gradient },
                children: n.icon
              }
            ),
            /* @__PURE__ */ r("div", { className: "p-4 pb-5", children: [
              /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 600 }, children: n.title }),
              /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252] mb-4 min-h-[32px]", style: { fontWeight: 400 }, children: n.description }),
              /* @__PURE__ */ r("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ e("span", { className: "text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: n.action }),
                n.actionType === "link" ? /* @__PURE__ */ e(Ke, { size: 16, className: "text-[#0f62fe]" }) : /* @__PURE__ */ e(Ve, { size: 16, className: "text-[#0f62fe]" })
              ] })
            ] })
          ]
        },
        n.title
      )) })
    ] }),
    /* @__PURE__ */ r("div", { className: "mb-10", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-3 mb-5", children: [
        /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Promotions and credits" }),
        /* @__PURE__ */ e("button", { className: "p-1 text-[#525252] hover:text-[#161616] transition-colors", children: /* @__PURE__ */ e(ws, { size: 16 }) })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-4 gap-0.5", children: hu.map((n, a) => /* @__PURE__ */ r(
        "div",
        {
          className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-colors flex flex-col justify-between min-h-[120px]",
          children: [
            /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 600 }, children: n.title }),
              /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: n.subtitle })
            ] }),
            /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ e(mu, { type: n.icon }) })
          ]
        },
        a
      )) })
    ] }),
    /* @__PURE__ */ r("div", { className: "mb-10", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-3 mb-5", children: [
        /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Discover solutions based on use cases" }),
        /* @__PURE__ */ e(Ke, { size: 18, className: "text-[#161616]" })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-4 gap-0.5", children: pu.map((n) => /* @__PURE__ */ r(
        "div",
        {
          className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-colors flex flex-col justify-between min-h-[180px]",
          onClick: () => n.path !== "#" && t(n.path),
          children: [
            /* @__PURE__ */ r("div", { children: [
              /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-2", style: { fontWeight: 600 }, children: n.title }),
              /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: n.description })
            ] }),
            /* @__PURE__ */ e("div", { className: "mt-4", children: /* @__PURE__ */ e(fu, { type: n.icon }) })
          ]
        },
        n.title
      )) })
    ] })
  ] });
}
function gu() {
  const [t, n] = A(!1), [a, s] = A("my-products"), [i, l] = A(!1), [c, o] = A(""), d = Se(null), u = Se(null), h = Se(null), m = pe(), { recentlyVisited: g, addVisit: f } = nn(), { collapsed: N } = we(), { activeUser: v } = wa(), { isOpen: w, openWithChat: S } = ke(), { isDarkMode: W } = zn(), R = v.id === "jozsef";
  return t ? g.slice(0, 12) : g.slice(0, 6), X(() => {
    if (u.current) {
      const z = () => {
        window.innerWidth < 768 && l(!1);
      };
      return window.addEventListener("resize", z), () => {
        window.removeEventListener("resize", z);
      };
    }
  }, []), X(() => {
    if (!i) return;
    const E = (z) => {
      h.current && !h.current.contains(z.target) && (l(!1), o(""));
    };
    return document.addEventListener("mousedown", E), () => document.removeEventListener("mousedown", E);
  }, [i]), /* @__PURE__ */ r(
    "main",
    {
      className: `${N ? "ml-[48px]" : "ml-[256px]"} ${w ? "mr-[320px]" : "mr-0"} mt-12 min-h-[calc(100vh-48px)] bg-[#f4f4f4] pb-16 transition-all duration-200`,
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            ref: u,
            className: "transition-all duration-300 ease-in-out",
            style: {
              background: "linear-gradient(180deg, #ffffff 0%, #e8f0fe 60%, #dbeafe 100%)"
            },
            children: /* @__PURE__ */ r("div", { className: `px-8 ${i ? "pt-8 pb-8" : "pt-8 pb-6"} max-w-[1600px] mx-auto w-full transition-all duration-300`, children: [
              /* @__PURE__ */ r("div", { className: "flex items-start justify-between mb-6", children: [
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252] mb-2 block", style: { fontWeight: 400 }, children: "Welcome," }),
                  /* @__PURE__ */ e("h1", { className: "text-[28px] text-[#161616]", style: { fontWeight: 300 }, children: "Adam Habensusz" })
                ] }),
                /* @__PURE__ */ r("div", { className: "flex items-center gap-16", children: [
                  /* @__PURE__ */ r("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252] mb-2", style: { fontWeight: 400 }, children: "Issues" }),
                    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e(Je, { size: 20, fill: "#da1e28", stroke: "white" }),
                      /* @__PURE__ */ e("span", { className: "text-[28px] text-[#161616]", style: { fontWeight: 300 }, children: "2" }),
                      /* @__PURE__ */ e(
                        "button",
                        {
                          onClick: () => m("/activities"),
                          className: "hover:opacity-70 transition-opacity",
                          children: /* @__PURE__ */ e(Ke, { size: 20, className: "text-[#525252]" })
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ r("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252] mb-2", style: { fontWeight: 400 }, children: "Cloud incidents" }),
                    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e(Fe, { size: 20, fill: "#f1c21b", stroke: "white" }),
                      /* @__PURE__ */ e("span", { className: "text-[28px] text-[#161616]", style: { fontWeight: 300 }, children: "2" }),
                      /* @__PURE__ */ e(
                        "button",
                        {
                          onClick: () => m("/activities"),
                          className: "hover:opacity-70 transition-opacity",
                          children: /* @__PURE__ */ e(Ke, { size: 20, className: "text-[#525252]" })
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ r("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252] mb-2", style: { fontWeight: 400 }, children: "Maintenance" }),
                    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ e("span", { className: "text-[28px] text-[#161616]", style: { fontWeight: 300 }, children: "2" }),
                      /* @__PURE__ */ e(Ke, { size: 20, className: "text-[#525252]" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e("div", { ref: h, className: `mb-8 transition-all duration-300 ease-in-out ${i ? "w-[800px]" : ""}`, children: /* @__PURE__ */ r(
                "div",
                {
                  className: `flex ${i ? "items-start w-[800px]" : "items-center w-[600px] ai-search-hover"} bg-white rounded-lg px-4 ${i ? "py-4" : "py-3"} transition-all duration-300`,
                  style: { border: "1px solid #4589FF" },
                  onClick: () => {
                    i || (l(!0), setTimeout(() => d.current?.focus(), 50));
                  },
                  children: [
                    /* @__PURE__ */ r("div", { className: "flex-1 flex flex-col", children: [
                      i && /* @__PURE__ */ r("div", { className: "flex items-center gap-2 mb-2", children: [
                        /* @__PURE__ */ e(It, { size: 16, className: "text-[#0f62fe]" }),
                        /* @__PURE__ */ e("span", { className: "text-[12px] text-[#0f62fe]", style: { fontWeight: 600 }, children: "Ask IBM Cloud AI" })
                      ] }),
                      i ? /* @__PURE__ */ e(
                        "textarea",
                        {
                          ref: d,
                          value: c,
                          onChange: (E) => o(E.target.value),
                          placeholder: "Ask IBM Cloud AI a question, e.g. 'What resources need attention?' or 'Estimate my monthly costs'",
                          className: "flex-1 bg-transparent outline-none text-[16px] text-[#161616] placeholder-[#a8a8a8] resize-none",
                          style: { fontWeight: 400, minHeight: "80px" },
                          rows: 3
                        }
                      ) : /* @__PURE__ */ e(
                        "input",
                        {
                          type: "text",
                          placeholder: "Ask IBM Cloud AI ...",
                          className: "flex-1 bg-transparent outline-none text-[14px] text-[#161616] placeholder-[#a8a8a8] cursor-pointer",
                          style: { fontWeight: 400 },
                          readOnly: !0
                        }
                      )
                    ] }),
                    /* @__PURE__ */ r("div", { className: `flex items-center gap-2 ${i ? "mt-auto pt-2" : ""} ml-2`, children: [
                      i && /* @__PURE__ */ e(
                        "button",
                        {
                          className: "p-1.5 text-[#525252] hover:text-[#161616] hover:bg-[#e8e8e8] rounded transition-colors text-[13px]",
                          style: { fontWeight: 400 },
                          onClick: (E) => {
                            E.stopPropagation(), l(!1), o("");
                          },
                          children: "Cancel"
                        }
                      ),
                      /* @__PURE__ */ e("button", { className: "p-1 text-[#525252] hover:text-[#161616] transition-colors", children: /* @__PURE__ */ e(Ns, { size: 18 }) }),
                      /* @__PURE__ */ e("button", { className: `p-1 ${i && c.trim() ? "text-[#0f62fe]" : "text-[#525252]"} hover:text-[#161616] transition-colors`, children: /* @__PURE__ */ e(ks, { size: 18 }) })
                    ] })
                  ]
                }
              ) }),
              /* @__PURE__ */ e("div", { className: `transition-all duration-300 ${i ? "mb-4" : "mb-6"}`, children: /* @__PURE__ */ r("div", { className: "flex items-stretch", children: [
                /* @__PURE__ */ r("div", { className: "flex-1 px-4", children: [
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252] mb-2", style: { fontWeight: 400 }, children: "New feature" }),
                  /* @__PURE__ */ e("p", { className: "text-[14px] text-[#161616] mb-3", style: { fontWeight: 400, lineHeight: "20px", minHeight: "40px" }, children: "IBM Cloud is now AI-first. Run an AI task with your IBM Cloud account." }),
                  /* @__PURE__ */ e("button", { className: "text-[14px] text-[#0f62fe] hover:underline", style: { fontWeight: 400 }, children: "Learn more" })
                ] }),
                /* @__PURE__ */ e("div", { className: "w-px bg-[#a6c8ff]" }),
                /* @__PURE__ */ r("div", { className: "flex-1 px-4", children: [
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252] mb-2", style: { fontWeight: 400 }, children: "Available promotions" }),
                  /* @__PURE__ */ e("p", { className: "text-[14px] text-[#161616] mb-3", style: { fontWeight: 400, lineHeight: "20px", minHeight: "40px" }, children: "Get 60% off your Virtual Server for VPC for 12 months" }),
                  /* @__PURE__ */ e("button", { className: "text-[14px] text-[#0f62fe] hover:underline", style: { fontWeight: 400 }, children: "View promotions" })
                ] }),
                /* @__PURE__ */ e("div", { className: "w-px bg-[#a6c8ff]" }),
                /* @__PURE__ */ r("div", { className: "flex-1 px-4", children: [
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252] mb-2", style: { fontWeight: 400 }, children: "Latest news" }),
                  /* @__PURE__ */ e("p", { className: "text-[14px] text-[#161616] mb-3", style: { fontWeight: 400, lineHeight: "20px", minHeight: "40px" }, children: "IBM Elects Ramon L. Laguarta to Its Board of Directors" }),
                  /* @__PURE__ */ e("button", { className: "text-[14px] text-[#0f62fe] hover:underline", style: { fontWeight: 400 }, children: "View all news" })
                ] }),
                /* @__PURE__ */ e("div", { className: "w-px bg-[#a6c8ff]" }),
                /* @__PURE__ */ r("div", { className: "flex-1 px-4", children: [
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252] mb-2", style: { fontWeight: 400 }, children: "Learning" }),
                  /* @__PURE__ */ e("p", { className: "text-[14px] text-[#161616] mb-3", style: { fontWeight: 400, lineHeight: "20px", minHeight: "40px" }, children: "Explore essential features for creating your virtual server on IBM Cloud VPC." }),
                  /* @__PURE__ */ e("button", { className: "text-[14px] text-[#0f62fe] hover:underline", style: { fontWeight: 400 }, children: "Explore" })
                ] })
              ] }) })
            ] })
          }
        ),
        R ? /* @__PURE__ */ e(xu, {}) : /* @__PURE__ */ r("div", { className: "px-8 pt-8 max-w-[1600px] mx-auto w-full", children: [
          /* @__PURE__ */ r("div", { className: "mb-8", children: [
            /* @__PURE__ */ e("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Shortcuts" }) }),
            /* @__PURE__ */ r("div", { className: "flex items-center gap-2 mb-4", children: [
              /* @__PURE__ */ r(
                "button",
                {
                  className: `px-3 py-1.5 ${a === "my-products" ? "bg-[#161616] text-white" : "bg-[#e0e0e0] text-[#161616] hover:bg-[#d0d0d0]"} text-[12px] rounded-full flex items-center gap-1.5 transition-colors`,
                  style: { fontWeight: 400 },
                  onClick: () => s("my-products"),
                  children: [
                    /* @__PURE__ */ e("span", { children: "My products (16)" }),
                    a === "my-products" && /* @__PURE__ */ e(Fn, { size: 14 })
                  ]
                }
              ),
              /* @__PURE__ */ r(
                "button",
                {
                  className: `px-3 py-1.5 ${a === "pinned" ? "bg-[#161616] text-white" : "bg-[#e0e0e0] text-[#161616] hover:bg-[#d0d0d0]"} text-[12px] rounded-full flex items-center gap-1.5 transition-colors`,
                  style: { fontWeight: 400 },
                  onClick: () => s("pinned"),
                  children: [
                    /* @__PURE__ */ e("span", { children: "Pinned" }),
                    a === "pinned" && /* @__PURE__ */ e(Fn, { size: 14 })
                  ]
                }
              ),
              /* @__PURE__ */ r(
                "button",
                {
                  className: `px-3 py-1.5 ${a === "getting-started" ? "bg-[#161616] text-white" : "bg-[#e0e0e0] text-[#161616] hover:bg-[#d0d0d0]"} text-[12px] rounded-full flex items-center gap-1.5 transition-colors`,
                  style: { fontWeight: 400 },
                  onClick: () => s("getting-started"),
                  children: [
                    /* @__PURE__ */ e("span", { children: "Getting started" }),
                    a === "getting-started" && /* @__PURE__ */ e(Fn, { size: 14 })
                  ]
                }
              ),
              a === "my-products" && /* @__PURE__ */ e(he, { children: t ? /* @__PURE__ */ e(
                "button",
                {
                  className: "text-[12px] text-[#0f62fe] hover:underline ml-auto",
                  style: { fontWeight: 400 },
                  onClick: () => n(!1),
                  children: "View less"
                }
              ) : /* @__PURE__ */ e(
                "button",
                {
                  className: "text-[12px] text-[#0f62fe] hover:underline ml-auto",
                  style: { fontWeight: 400 },
                  onClick: () => n(!0),
                  children: "View more"
                }
              ) })
            ] }),
            a === "my-products" && /* @__PURE__ */ r("div", { className: "grid grid-cols-8 gap-4", children: [
              /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(Mt, { size: 24, className: "text-[#0f62fe]" }) }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Containers" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                ] })
              ] }) }),
              /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(ta, { size: 24, className: "text-[#0f62fe]" }) }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Code Engine" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                ] })
              ] }) }),
              /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(It, { size: 24, className: "text-[#0f62fe]" }) }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "watsonx" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                ] })
              ] }) }),
              /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(Ft, { size: 24, className: "text-[#0f62fe]" }) }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Transit Gateway" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                ] })
              ] }) }),
              /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(mt, { size: 24, className: "text-[#0f62fe]" }) }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Block Storage for VPC" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                ] })
              ] }) }),
              /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(na, { size: 24, className: "text-[#0f62fe]" }) }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Databases" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                ] })
              ] }) }),
              /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(Ye, { size: 24, className: "text-[#0f62fe]" }) }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Virtual Servers" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                ] })
              ] }) }),
              /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(Ft, { size: 24, className: "text-[#0f62fe]" }) }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "VPC" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                ] })
              ] }) }),
              t && /* @__PURE__ */ r(he, { children: [
                /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                  /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(mt, { size: 24, className: "text-[#0f62fe]" }) }),
                  /* @__PURE__ */ r("div", { children: [
                    /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "File Storage for VPC" }),
                    /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                  ] })
                ] }) }),
                /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                  /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(Ye, { size: 24, className: "text-[#0f62fe]" }) }),
                  /* @__PURE__ */ r("div", { children: [
                    /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "VMware Solutions" }),
                    /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                  ] })
                ] }) }),
                /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                  /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(Nn, { size: 24, className: "text-[#0f62fe]" }) }),
                  /* @__PURE__ */ r("div", { children: [
                    /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Security Groups" }),
                    /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                  ] })
                ] }) }),
                /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                  /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(Ft, { size: 24, className: "text-[#0f62fe]" }) }),
                  /* @__PURE__ */ r("div", { children: [
                    /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Load Balancers" }),
                    /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                  ] })
                ] }) }),
                /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                  /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(na, { size: 24, className: "text-[#0f62fe]" }) }),
                  /* @__PURE__ */ r("div", { children: [
                    /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Object Storage" }),
                    /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                  ] })
                ] }) }),
                /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                  /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(ta, { size: 24, className: "text-[#0f62fe]" }) }),
                  /* @__PURE__ */ r("div", { children: [
                    /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Functions" }),
                    /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                  ] })
                ] }) }),
                /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                  /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(ad, { size: 24, className: "text-[#0f62fe]" }) }),
                  /* @__PURE__ */ r("div", { children: [
                    /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Monitoring" }),
                    /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                  ] })
                ] }) }),
                /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                  /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(mr, { size: 24, className: "text-[#0f62fe]" }) }),
                  /* @__PURE__ */ r("div", { children: [
                    /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Event Streams" }),
                    /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "5 resources" })
                  ] })
                ] }) })
              ] })
            ] }),
            a === "pinned" && /* @__PURE__ */ r("div", { className: "grid grid-cols-4 gap-4", children: [
              /* @__PURE__ */ e(
                "div",
                {
                  className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1",
                  onClick: () => m("/billing"),
                  children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                    /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(mr, { size: 24, className: "text-[#525252]" }) }),
                    /* @__PURE__ */ r("div", { children: [
                      /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Billing and usage" }),
                      /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Last visited 5 mins ago" })
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1",
                  onClick: () => m("/access"),
                  children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                    /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(Nn, { size: 24, className: "text-[#525252]" }) }),
                    /* @__PURE__ */ r("div", { children: [
                      /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Access (IAM)" }),
                      /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Last visited 15 mins ago" })
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(Ye, { size: 24, className: "text-[#525252]" }) }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "vm" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "VMware console" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "External" })
                ] })
              ] }) }),
              /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col group hover:-translate-y-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(In, { size: 24, className: "text-[#525252]" }) }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-1", style: { fontWeight: 400 }, children: "Veeam console" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "External" })
                ] })
              ] }) })
            ] }),
            a === "getting-started" && /* @__PURE__ */ r("div", { className: "grid grid-cols-4 gap-4", children: [
              /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(Yt, { size: 24, className: "text-[#525252]" }) }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-2", style: { fontWeight: 400 }, children: "Create your first resource" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Resources are on-demand services created and managed in the cloud." })
                ] })
              ] }) }),
              /* @__PURE__ */ e(
                "div",
                {
                  className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col",
                  onClick: () => m("/catalog"),
                  children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                    /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(Wn, { size: 24, className: "text-[#525252]" }) }),
                    /* @__PURE__ */ r("div", { children: [
                      /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-2", style: { fontWeight: 400 }, children: "Explore our product catalog" }),
                      /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Discover our industry leading products and solutions." })
                    ] })
                  ] })
                }
              ),
              /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(bs, { size: 24, className: "text-[#525252]" }) }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-2", style: { fontWeight: 400 }, children: "Deploy deployable architectures" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Explore pre-built compositions of products that work together." })
                ] })
              ] }) }),
              /* @__PURE__ */ e("div", { className: "bg-white p-4 cursor-pointer hover:bg-[#e8e8e8] transition-all duration-200 flex flex-col", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ e(at, { size: 24, className: "text-[#525252]" }) }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-2", style: { fontWeight: 400 }, children: "IBM Documentation" }),
                  /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Visit the IBM Cloud Docs page to help you get started in the right direction." })
                ] })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ r("div", { className: "mb-8", children: [
            /* @__PURE__ */ e("div", { className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Jump back in" }) }),
            /* @__PURE__ */ r("div", { className: "grid grid-cols-16 gap-4", children: [
              /* @__PURE__ */ r("div", { className: "col-span-12 bg-white", children: [
                /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pt-4 pb-2", children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Recently visited" }),
                  /* @__PURE__ */ e("button", { className: "p-1 text-[#525252] hover:text-[#161616] transition-colors", children: /* @__PURE__ */ e(ut, { size: 16 }) })
                ] }),
                /* @__PURE__ */ e("div", { children: g.slice(0, 8).map((E, z) => {
                  let D = /* @__PURE__ */ e(Ye, { size: 16, className: "text-[#525252]" });
                  return E.product === "Cloud Object Storage" ? D = /* @__PURE__ */ e(mt, { size: 16, className: "text-[#525252]" }) : E.product === "Serverless" ? D = /* @__PURE__ */ e(Mt, { size: 16, className: "text-[#525252]" }) : E.product === "Clusters" ? D = /* @__PURE__ */ e(Ft, { size: 16, className: "text-[#525252]" }) : E.product === "Logging instances" ? D = /* @__PURE__ */ e(at, { size: 16, className: "text-[#525252]" }) : E.product === "Monitoring instances" && (D = /* @__PURE__ */ e(Yt, { size: 16, className: "text-[#525252]" })), /* @__PURE__ */ r(
                    "button",
                    {
                      onClick: () => m(`/resources/${E.resourceId}`),
                      className: `w-full grid grid-cols-2 items-center px-4 py-2.5 hover:bg-[#e8e8e8] transition-colors text-[14px] text-[#161616] ${z > 0 ? "border-t border-[#e0e0e0]" : ""}`,
                      style: { fontWeight: 400 },
                      children: [
                        /* @__PURE__ */ r("div", { className: "flex items-center gap-3", children: [
                          D,
                          /* @__PURE__ */ e("span", { className: "truncate", children: E.name })
                        ] }),
                        /* @__PURE__ */ r("div", { className: "flex items-center justify-between", children: [
                          /* @__PURE__ */ e("span", { className: "truncate text-[#525252]", children: E.product }),
                          /* @__PURE__ */ e(Ke, { size: 16, className: "text-[#525252] shrink-0" })
                        ] })
                      ]
                    },
                    E.resourceId
                  );
                }) }),
                /* @__PURE__ */ e("div", { className: "px-4 py-3", children: /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: () => m("/resources"),
                    className: "text-[12px] text-[#0f62fe] hover:underline",
                    style: { fontWeight: 400 },
                    children: "View all resources (256)"
                  }
                ) })
              ] }),
              /* @__PURE__ */ r("div", { className: "col-span-4 bg-white", children: [
                /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pt-4 pb-2", children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Recent chats" }),
                  /* @__PURE__ */ r("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ e("button", { className: "p-1 text-[#525252] hover:text-[#161616] transition-colors", children: /* @__PURE__ */ e(xt, { size: 16 }) }),
                    /* @__PURE__ */ e("button", { className: "p-1 text-[#525252] hover:text-[#161616] transition-colors", children: /* @__PURE__ */ e(ut, { size: 16 }) })
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("button", { onClick: () => S("chat-1"), className: "w-full flex items-center px-4 py-2.5 hover:bg-[#e8e8e8] transition-colors text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: /* @__PURE__ */ e("span", { className: "truncate text-left", children: "Resource distribution" }) }),
                  /* @__PURE__ */ e("button", { onClick: () => S("chat-2"), className: "w-full flex items-center px-4 py-2.5 hover:bg-[#e8e8e8] transition-colors text-[14px] text-[#161616] border-t border-[#e0e0e0]", style: { fontWeight: 400 }, children: /* @__PURE__ */ e("span", { className: "truncate text-left", children: "Performance timeline" }) }),
                  /* @__PURE__ */ e("button", { onClick: () => S("chat-3"), className: "w-full flex items-center px-4 py-2.5 hover:bg-[#e8e8e8] transition-colors text-[14px] text-[#161616] border-t border-[#e0e0e0]", style: { fontWeight: 400 }, children: /* @__PURE__ */ e("span", { className: "truncate text-left", children: "Update ROKS cluster" }) }),
                  /* @__PURE__ */ e("button", { onClick: () => S("chat-4"), className: "w-full flex items-center px-4 py-2.5 hover:bg-[#e8e8e8] transition-colors text-[14px] text-[#161616] border-t border-[#e0e0e0]", style: { fontWeight: 400 }, children: /* @__PURE__ */ e("span", { className: "truncate text-left", children: "Audit security groups" }) }),
                  /* @__PURE__ */ e("button", { onClick: () => S("chat-5"), className: "w-full flex items-center px-4 py-2.5 hover:bg-[#e8e8e8] transition-colors text-[14px] text-[#161616] border-t border-[#e0e0e0]", style: { fontWeight: 400 }, children: /* @__PURE__ */ e("span", { className: "truncate text-left", children: "Key Protect setup" }) }),
                  /* @__PURE__ */ e("button", { onClick: () => S("chat-6"), className: "w-full flex items-center px-4 py-2.5 hover:bg-[#e8e8e8] transition-colors text-[14px] text-[#161616] border-t border-[#e0e0e0]", style: { fontWeight: 400 }, children: /* @__PURE__ */ e("span", { className: "truncate text-left", children: "Detect memory leaks" }) }),
                  /* @__PURE__ */ e("button", { onClick: () => S("chat-7"), className: "w-full flex items-center px-4 py-2.5 hover:bg-[#e8e8e8] transition-colors text-[14px] text-[#161616] border-t border-[#e0e0e0]", style: { fontWeight: 400 }, children: /* @__PURE__ */ e("span", { className: "truncate text-left", children: "Create ROKS cluster" }) }),
                  /* @__PURE__ */ e("button", { onClick: () => S("chat-8"), className: "w-full flex items-center px-4 py-2.5 hover:bg-[#e8e8e8] transition-colors text-[14px] text-[#161616] border-t border-[#e0e0e0]", style: { fontWeight: 400 }, children: /* @__PURE__ */ e("span", { className: "truncate text-left", children: "Billing anomaly report" }) })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-4 py-3", children: /* @__PURE__ */ e("button", { className: "text-[12px] text-[#0f62fe] hover:underline", style: { fontWeight: 400 }, children: "View all chats (24)" }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ r("div", { className: "mb-8", children: [
            /* @__PURE__ */ r("div", { className: "flex items-center gap-2 mb-4", children: [
              /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Dashboard" }),
              /* @__PURE__ */ e("button", { className: "p-1 text-[#525252] hover:text-[#161616] transition-colors", children: /* @__PURE__ */ e(ws, { size: 16 }) })
            ] }),
            /* @__PURE__ */ r("div", { className: "grid grid-cols-4 gap-4 mb-4", children: [
              /* @__PURE__ */ r("div", { className: "col-span-2 bg-white", children: [
                /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pt-4 pb-2", children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Month-to-date usage" }),
                  /* @__PURE__ */ r("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ e("button", { className: "p-1 text-[#525252] hover:text-[#161616] transition-colors", children: /* @__PURE__ */ e(Ve, { size: 16 }) }),
                    /* @__PURE__ */ e("button", { className: "p-1 text-[#525252] hover:text-[#161616] transition-colors", children: /* @__PURE__ */ e(ut, { size: 16 }) })
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { className: "px-4 pb-4", children: [
                  /* @__PURE__ */ r("p", { className: "text-[24px] text-[#161616] mb-4", style: { fontWeight: 300 }, children: [
                    "$6672.7K",
                    /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", children: "/100" })
                  ] }),
                  /* @__PURE__ */ r("div", { className: "flex items-end justify-between h-32 gap-2 mb-3", children: [
                    /* @__PURE__ */ r("div", { className: "flex flex-col items-center flex-1", children: [
                      /* @__PURE__ */ e("div", { className: "w-full bg-[#8a3ffc]", style: { height: "60%" } }),
                      /* @__PURE__ */ e("span", { className: "text-[10px] text-[#525252] mt-2", children: "Jan" })
                    ] }),
                    /* @__PURE__ */ r("div", { className: "flex flex-col items-center flex-1", children: [
                      /* @__PURE__ */ e("div", { className: "w-full bg-[#a56eff]", style: { height: "80%" } }),
                      /* @__PURE__ */ e("span", { className: "text-[10px] text-[#525252] mt-2", children: "Feb" })
                    ] }),
                    /* @__PURE__ */ r("div", { className: "flex flex-col items-center flex-1", children: [
                      /* @__PURE__ */ e("div", { className: "w-full bg-[#ff7eb6]", style: { height: "70%" } }),
                      /* @__PURE__ */ e("span", { className: "text-[10px] text-[#525252] mt-2", children: "Mar" })
                    ] }),
                    /* @__PURE__ */ r("div", { className: "flex flex-col items-center flex-1", children: [
                      /* @__PURE__ */ e("div", { className: "w-full bg-[#da1e28]", style: { height: "100%" } }),
                      /* @__PURE__ */ e("span", { className: "text-[10px] text-[#525252] mt-2", children: "Apr" })
                    ] }),
                    /* @__PURE__ */ r("div", { className: "flex flex-col items-center flex-1", children: [
                      /* @__PURE__ */ e("div", { className: "w-full bg-[#42be65]", style: { height: "85%" } }),
                      /* @__PURE__ */ e("span", { className: "text-[10px] text-[#525252] mt-2", children: "May" })
                    ] }),
                    /* @__PURE__ */ r("div", { className: "flex flex-col items-center flex-1", children: [
                      /* @__PURE__ */ e("div", { className: "w-full bg-[#0f62fe]", style: { height: "65%" } }),
                      /* @__PURE__ */ e("span", { className: "text-[10px] text-[#525252] mt-2", children: "Jun" })
                    ] }),
                    /* @__PURE__ */ r("div", { className: "flex flex-col items-center flex-1", children: [
                      /* @__PURE__ */ e("div", { className: "w-full bg-[#ff7eb6]", style: { height: "90%" } }),
                      /* @__PURE__ */ e("span", { className: "text-[10px] text-[#525252] mt-2", children: "Jul" })
                    ] }),
                    /* @__PURE__ */ r("div", { className: "flex flex-col items-center flex-1", children: [
                      /* @__PURE__ */ e("div", { className: "w-full bg-[#f1c21b]", style: { height: "75%" } }),
                      /* @__PURE__ */ e("span", { className: "text-[10px] text-[#525252] mt-2", children: "Aug" })
                    ] })
                  ] }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "text-[12px] text-[#0f62fe] hover:underline",
                      style: { fontWeight: 400 },
                      onClick: () => m("/billing"),
                      children: "Go to Billing and usage"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ r("div", { className: "bg-white flex flex-col h-full", children: [
                /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pt-4 pb-2", children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Active support tickets" }),
                  /* @__PURE__ */ r("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ e("button", { className: "p-1 text-[#525252] hover:text-[#161616] transition-colors", children: /* @__PURE__ */ e(Ve, { size: 16 }) }),
                    /* @__PURE__ */ e("button", { className: "p-1 text-[#525252] hover:text-[#161616] transition-colors", children: /* @__PURE__ */ e(ut, { size: 16 }) })
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { className: "px-4 pb-2 flex-grow", children: [
                  /* @__PURE__ */ e("p", { className: "text-[24px] text-[#161616] mb-4", style: { fontWeight: 300 }, children: "2" }),
                  /* @__PURE__ */ r("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ r("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ e(Bt, { size: 16, className: "text-[#0f62fe] mt-0.5 shrink-0" }),
                      /* @__PURE__ */ e("p", { className: "text-[13px] text-[#161616]", style: { fontWeight: 400 }, children: "Severity 4: Order tracking for BM classic" })
                    ] }),
                    /* @__PURE__ */ r("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ e(Bt, { size: 16, className: "text-[#0f62fe] mt-0.5 shrink-0" }),
                      /* @__PURE__ */ e("p", { className: "text-[13px] text-[#161616]", style: { fontWeight: 400 }, children: "Severity 4: Order tracking for BM classic" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-4 py-3", children: /* @__PURE__ */ e("button", { className: "text-[12px] text-[#0f62fe] hover:underline", style: { fontWeight: 400 }, children: "Go to Support" }) })
              ] }),
              /* @__PURE__ */ r("div", { className: "bg-white flex flex-col h-full", children: [
                /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pt-4 pb-2", children: [
                  /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Planned maintenance" }),
                  /* @__PURE__ */ e("button", { className: "p-1 text-[#525252] hover:text-[#161616] transition-colors", children: /* @__PURE__ */ e(ut, { size: 16 }) })
                ] }),
                /* @__PURE__ */ r("div", { className: "px-4 pb-2 flex-grow", children: [
                  /* @__PURE__ */ e("p", { className: "text-[24px] text-[#161616] mb-4", style: { fontWeight: 300 }, children: "2" }),
                  /* @__PURE__ */ r("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ e("p", { className: "text-[13px] text-[#161616]", style: { fontWeight: 400 }, children: "Basic monitoring and bandwidth services mainten..." }),
                    /* @__PURE__ */ e("p", { className: "text-[13px] text-[#161616]", style: { fontWeight: 400 }, children: "Basic monitoring and bandwidth services mainten..." })
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: "px-4 py-3", children: /* @__PURE__ */ e("button", { className: "text-[12px] text-[#0f62fe] hover:underline", style: { fontWeight: 400 }, children: "View all" }) })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { className: "bg-white", children: [
              /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 pt-4 pb-2", children: [
                /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Recent activities" }),
                /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("button", { className: "p-1 text-[#525252] hover:text-[#161616] transition-colors", children: /* @__PURE__ */ e(ut, { size: 16 }) }),
                  /* @__PURE__ */ e("button", { className: "p-1 text-[#525252] hover:text-[#161616] transition-colors", children: /* @__PURE__ */ e(ut, { size: 16 }) })
                ] })
              ] }),
              /* @__PURE__ */ r("div", { children: [
                /* @__PURE__ */ r("div", { className: "flex items-start justify-between px-4 py-3 border-t border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors cursor-pointer", children: [
                  /* @__PURE__ */ r("div", { className: "flex items-start gap-3 flex-1", children: [
                    /* @__PURE__ */ e(Je, { size: 16, fill: "#da1e28", stroke: "white", className: "mt-0.5 shrink-0" }),
                    /* @__PURE__ */ e("p", { className: "text-[13px] text-[#161616]", style: { fontWeight: 400 }, children: 'A cluster in "Resource 1" has lost networking to an application server' })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252] shrink-0 ml-4", style: { fontWeight: 400 }, children: "February 28, 2026 5:00 AM" })
                ] }),
                /* @__PURE__ */ r("div", { className: "flex items-start justify-between px-4 py-3 border-t border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors cursor-pointer", children: [
                  /* @__PURE__ */ r("div", { className: "flex items-start gap-3 flex-1", children: [
                    /* @__PURE__ */ e(Je, { size: 16, fill: "#da1e28", stroke: "white", className: "mt-0.5 shrink-0" }),
                    /* @__PURE__ */ e("p", { className: "text-[13px] text-[#161616]", style: { fontWeight: 400 }, children: '"Resource 2" has lost connection to the server' })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252] shrink-0 ml-4", style: { fontWeight: 400 }, children: "February 28, 2026 5:00 AM" })
                ] }),
                /* @__PURE__ */ r("div", { className: "flex items-start justify-between px-4 py-3 border-t border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors cursor-pointer", children: [
                  /* @__PURE__ */ r("div", { className: "flex items-start gap-3 flex-1", children: [
                    /* @__PURE__ */ e(Fe, { size: 16, fill: "#f1c21b", stroke: "white", className: "mt-0.5 shrink-0" }),
                    /* @__PURE__ */ e("p", { className: "text-[13px] text-[#161616]", style: { fontWeight: 400 }, children: 'Storage capacity in "Resource 3" is running low' })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252] shrink-0 ml-4", style: { fontWeight: 400 }, children: "February 28, 2026 5:00 AM" })
                ] }),
                /* @__PURE__ */ r("div", { className: "flex items-start justify-between px-4 py-3 border-t border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors cursor-pointer", children: [
                  /* @__PURE__ */ r("div", { className: "flex items-start gap-3 flex-1", children: [
                    /* @__PURE__ */ e(Qn, { size: 16, className: "text-[#525252] mt-0.5 shrink-0" }),
                    /* @__PURE__ */ e("p", { className: "text-[13px] text-[#161616]", style: { fontWeight: 400 }, children: 'A cluster in "Resource 1" has lost networking to an application server' })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252] shrink-0 ml-4", style: { fontWeight: 400 }, children: "February 28, 2026 5:00 AM" })
                ] }),
                /* @__PURE__ */ r("div", { className: "flex items-start justify-between px-4 py-3 border-t border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors cursor-pointer", children: [
                  /* @__PURE__ */ r("div", { className: "flex items-start gap-3 flex-1", children: [
                    /* @__PURE__ */ e(Qn, { size: 16, className: "text-[#525252] mt-0.5 shrink-0" }),
                    /* @__PURE__ */ e("p", { className: "text-[13px] text-[#161616]", style: { fontWeight: 400 }, children: '"automate cluster creation" task has been scheduled' })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252] shrink-0 ml-4", style: { fontWeight: 400 }, children: "February 28, 2026 5:00 AM" })
                ] }),
                /* @__PURE__ */ r("div", { className: "flex items-start justify-between px-4 py-3 border-t border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors cursor-pointer", children: [
                  /* @__PURE__ */ r("div", { className: "flex items-start gap-3 flex-1", children: [
                    /* @__PURE__ */ e(Bt, { size: 16, className: "text-[#0f62fe] mt-0.5 shrink-0" }),
                    /* @__PURE__ */ e("p", { className: "text-[13px] text-[#161616]", style: { fontWeight: 400 }, children: "cluster03 is being created" })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252] shrink-0 ml-4", style: { fontWeight: 400 }, children: "February 28, 2026 5:00 AM" })
                ] }),
                /* @__PURE__ */ r("div", { className: "flex items-start justify-between px-4 py-3 border-t border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors cursor-pointer", children: [
                  /* @__PURE__ */ r("div", { className: "flex items-start gap-3 flex-1", children: [
                    /* @__PURE__ */ e(Bt, { size: 16, className: "text-[#0f62fe] mt-0.5 shrink-0" }),
                    /* @__PURE__ */ e("p", { className: "text-[13px] text-[#161616]", style: { fontWeight: 400 }, children: "cluster04 is being deleted" })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252] shrink-0 ml-4", style: { fontWeight: 400 }, children: "February 28, 2026 5:00 AM" })
                ] }),
                /* @__PURE__ */ r("div", { className: "flex items-start justify-between px-4 py-3 border-t border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors cursor-pointer", children: [
                  /* @__PURE__ */ r("div", { className: "flex items-start gap-3 flex-1", children: [
                    /* @__PURE__ */ e(Bt, { size: 16, className: "text-[#0f62fe] mt-0.5 shrink-0" }),
                    /* @__PURE__ */ e("p", { className: "text-[13px] text-[#161616]", style: { fontWeight: 400 }, children: "prod-test-tgw is being deleted" })
                  ] }),
                  /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252] shrink-0 ml-4", style: { fontWeight: 400 }, children: "February 28, 2026 5:00 AM" })
                ] })
              ] }),
              /* @__PURE__ */ e("div", { className: "px-4 py-3 border-t border-[#e0e0e0]", children: /* @__PURE__ */ e(
                "button",
                {
                  className: "text-[12px] text-[#0f62fe] hover:underline",
                  style: { fontWeight: 400 },
                  onClick: () => m("/activities"),
                  children: "Go to Activities"
                }
              ) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
const yu = [
  // Virtual Server Instances (3)
  { name: "vsi-prod-web-01", group: "default", location: "us-south-1", product: "Virtual Server Instances", productIcon: "vsi", status: "Running", tags: "production" },
  { name: "vpc-network-prod", group: "default", location: "us-south-2", product: "Virtual Server Instances", productIcon: "vsi", status: "Failed", tags: "networking" },
  { name: "vsi-dev-sandbox-03", group: "staging", location: "eu-de-1", product: "Virtual Server Instances", productIcon: "vsi", status: "Running", tags: "development" },
  // Cloud Object Storage (3)
  { name: "cos-media-assets", group: "production", location: "us-east-1", product: "Cloud Object Storage", productIcon: "storage", status: "Running", tags: "media" },
  { name: "cos-migration-store", group: "default", location: "us-south-3", product: "Cloud Object Storage", productIcon: "storage", status: "Failed", tags: "migration" },
  { name: "cos-backup-archive", group: "default", location: "us-south-1", product: "Cloud Object Storage", productIcon: "storage", status: "Running", tags: "backup" },
  // Serverless (3)
  { name: "fn-data-processor", group: "default", location: "us-south-3", product: "Serverless", productIcon: "serverless", status: "Warning", tags: "functions" },
  { name: "fn-event-handler", group: "production", location: "us-south-1", product: "Serverless", productIcon: "serverless", status: "Running", tags: "events" },
  { name: "fn-api-gateway", group: "default", location: "eu-de-1", product: "Serverless", productIcon: "serverless", status: "Running", tags: "api" },
  // Clusters (3)
  { name: "iks-prod-cluster-01", group: "default", location: "us-south-1", product: "Clusters", productIcon: "cluster", status: "Running", tags: "kubernetes" },
  { name: "iks-staging-cluster-02", group: "staging", location: "eu-de-1", product: "Clusters", productIcon: "cluster", status: "Running", tags: "staging" },
  { name: "iks-dev-cluster-03", group: "default", location: "us-south-2", product: "Clusters", productIcon: "cluster", status: "Running", tags: "development" },
  // Logging instances (3)
  { name: "log-prod-us-south", group: "observability", location: "us-south-1", product: "Logging instances", productIcon: "logging", status: "Running", tags: "logging" },
  { name: "log-staging-eu-de", group: "staging", location: "eu-de-1", product: "Logging instances", productIcon: "logging", status: "Running", tags: "staging" },
  { name: "log-dev-analytics", group: "analytics", location: "us-south-2", product: "Logging instances", productIcon: "logging", status: "Running", tags: "analytics" },
  // Monitoring instances (3)
  { name: "mon-prod-infra", group: "observability", location: "us-south-1", product: "Monitoring instances", productIcon: "monitoring", status: "Running", tags: "monitoring" },
  { name: "mon-app-performance", group: "production", location: "us-south-2", product: "Monitoring instances", productIcon: "monitoring", status: "Running", tags: "performance" },
  { name: "mon-network-health", group: "default", location: "us-south-3", product: "Monitoring instances", productIcon: "monitoring", status: "Running", tags: "network" }
], bu = [
  { label: "default", color: "#e0e0e0" },
  { label: "us-south-3", color: "#d0e2ff" },
  { label: "us-south-3", color: "#a6c8ff" },
  { label: "us-south-3", color: "#a6c8ff" },
  { label: "us-south-3", color: "#d0e2ff" },
  { label: "us-south-3", color: "#d0e2ff" },
  { label: "Virtual Private Cloud", color: "#d0e2ff" }
];
function vu({ type: t }) {
  const n = "text-[#0f62fe]";
  switch (t) {
    case "vsi":
      return /* @__PURE__ */ e(Ye, { size: 14, className: n });
    case "storage":
      return /* @__PURE__ */ e(mt, { size: 14, className: n });
    case "serverless":
      return /* @__PURE__ */ e(Mt, { size: 14, className: n });
    case "cluster":
      return /* @__PURE__ */ e(fs, { size: 14, className: n });
    case "logging":
      return /* @__PURE__ */ e(at, { size: 14, className: n });
    case "monitoring":
      return /* @__PURE__ */ e(Sn, { size: 14, className: n });
    default:
      return /* @__PURE__ */ e(Ye, { size: 14, className: n });
  }
}
function vr({ status: t }) {
  return t === "Running" ? /* @__PURE__ */ e(be, { size: 16, className: "shrink-0", style: { color: "#198038" }, fill: "#198038", stroke: "white" }) : t === "Failed" ? /* @__PURE__ */ e(Je, { size: 16, className: "shrink-0", style: { color: "#da1e28" }, fill: "#da1e28", stroke: "white" }) : t === "Warning" ? /* @__PURE__ */ e(Fe, { size: 16, className: "shrink-0", style: { color: "#f1c21b" }, fill: "#f1c21b", stroke: "white" }) : /* @__PURE__ */ e(be, { size: 16, className: "shrink-0 text-[#a8a8a8]" });
}
function Nu() {
  const [t, n] = A(""), [a, s] = A(bu), [i, l] = A(!1), [c, o] = A(/* @__PURE__ */ new Set()), [d, u] = A(/* @__PURE__ */ new Set()), [h, m] = A(/* @__PURE__ */ new Set()), [g, f] = A(/* @__PURE__ */ new Set()), N = pe(), { addVisit: v, removeVisit: w } = nn(), { collapsed: S } = we(), { isOpen: W } = ke(), { clusters: R, removeCluster: E } = Dn(), [z, D] = A(/* @__PURE__ */ new Set()), B = [...R.map((k) => ({
    name: k.name,
    group: k.resourceGroup,
    location: k.location,
    product: "Red Hat OpenShift",
    productIcon: "openshift",
    status: "Running",
    tags: "openshift"
  })), ...yu.filter((k) => !z.has(k.name))], G = B.filter((k) => !(c.size > 0 && !c.has(k.product) || d.size > 0 && !d.has(k.group) || h.size > 0 && !h.has(k.location) || g.size > 0 && !g.has(k.status))), te = [...new Set(B.map((k) => k.product))].sort(), ee = [...new Set(B.map((k) => k.group))].sort(), le = [...new Set(B.map((k) => k.location))].sort(), Re = [...new Set(B.map((k) => k.status))].sort(), Z = (k, ae) => {
    const oe = new Set(k);
    return oe.has(ae) ? oe.delete(ae) : oe.add(ae), oe;
  }, J = c.size > 0 || d.size > 0 || h.size > 0 || g.size > 0, ne = () => {
    o(/* @__PURE__ */ new Set()), u(/* @__PURE__ */ new Set()), m(/* @__PURE__ */ new Set()), f(/* @__PURE__ */ new Set());
  }, Ce = (k) => {
    w(k.name), R.some((ae) => ae.name === k.name) ? E(k.name) : D((ae) => new Set(ae).add(k.name));
  }, Y = (k) => {
    v({
      resourceId: k.name,
      name: k.name,
      status: k.status,
      product: k.product
    }), N(`/resources/${k.name}`);
  };
  return /* @__PURE__ */ r(
    "main",
    {
      className: `${S ? "ml-[48px]" : "ml-[256px]"} ${W ? "mr-[320px]" : "mr-0"} mt-12 min-h-[calc(100vh-48px)] bg-[#f4f4f4] transition-all duration-200`,
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: [
        /* @__PURE__ */ e("div", { className: "bg-white border-b border-[#e0e0e0] w-full", children: /* @__PURE__ */ e("div", { className: "px-8 py-5 max-w-[1600px] mx-auto w-full", children: /* @__PURE__ */ e(
          "h1",
          {
            className: "text-[28px] text-[#161616]",
            style: { fontWeight: 300 },
            children: "Resource list"
          }
        ) }) }),
        /* @__PURE__ */ r("div", { className: "px-8 pt-6 pb-8 max-w-[1600px] mx-auto w-full flex flex-col gap-[24px]", children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ r("div", { className: "flex items-center gap-0", children: [
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-4 py-2 bg-white border-r border-[#e0e0e0] min-w-[240px]", children: [
                /* @__PURE__ */ e(Ie, { size: 16, className: "text-[#525252] shrink-0" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "text",
                    placeholder: "Search",
                    value: t,
                    onChange: (k) => n(k.target.value),
                    className: "bg-transparent outline-none text-[14px] text-[#161616] placeholder-[#a8a8a8] w-full",
                    style: { fontWeight: 400 }
                  }
                )
              ] }),
              /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e("button", { className: "p-3 hover:bg-[#e8e8e8] transition-colors text-[#161616]", children: /* @__PURE__ */ e(vs, { size: 16 }) }) }),
              /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e("button", { className: "p-3 hover:bg-[#e8e8e8] transition-colors text-[#525252]", children: /* @__PURE__ */ e(Na, { size: 16 }) }) }),
              /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e("button", { className: "p-3 hover:bg-[#e8e8e8] transition-colors text-[#525252]", children: /* @__PURE__ */ e(Mn, { size: 16 }) }) }),
              /* @__PURE__ */ r(
                "button",
                {
                  className: `flex items-center gap-1.5 px-4 py-2 text-[14px] transition-colors ${i ? "text-[#0f62fe] bg-[#e0e0e0]" : "text-[#0f62fe] hover:bg-[#e8e8e8]"}`,
                  style: { fontWeight: 400 },
                  onClick: () => l(!i),
                  children: [
                    /* @__PURE__ */ e(va, { size: 14 }),
                    "Filter",
                    J && /* @__PURE__ */ e("span", { className: "ml-1 bg-[#0f62fe] text-white text-[11px] w-5 h-5 rounded-full flex items-center justify-center", style: { fontWeight: 600 }, children: c.size + d.size + h.size + g.size })
                  ]
                }
              ),
              J && /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-3 py-2 flex-wrap flex-1", children: [
                [...c].map((k) => /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] text-white", style: { backgroundColor: "#393939", fontWeight: 400 }, children: [
                  k,
                  /* @__PURE__ */ e("button", { onClick: () => o(Z(c, k)), className: "hover:text-[#a8a8a8] transition-colors", children: /* @__PURE__ */ e(nt, { size: 12 }) })
                ] }, `p-${k}`)),
                [...d].map((k) => /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] text-white", style: { backgroundColor: "#393939", fontWeight: 400 }, children: [
                  k,
                  /* @__PURE__ */ e("button", { onClick: () => u(Z(d, k)), className: "hover:text-[#a8a8a8] transition-colors", children: /* @__PURE__ */ e(nt, { size: 12 }) })
                ] }, `g-${k}`)),
                [...h].map((k) => /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] text-white", style: { backgroundColor: "#393939", fontWeight: 400 }, children: [
                  k,
                  /* @__PURE__ */ e("button", { onClick: () => m(Z(h, k)), className: "hover:text-[#a8a8a8] transition-colors", children: /* @__PURE__ */ e(nt, { size: 12 }) })
                ] }, `l-${k}`)),
                [...g].map((k) => /* @__PURE__ */ r("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] text-white", style: { backgroundColor: "#393939", fontWeight: 400 }, children: [
                  k,
                  /* @__PURE__ */ e("button", { onClick: () => f(Z(g, k)), className: "hover:text-[#a8a8a8] transition-colors", children: /* @__PURE__ */ e(nt, { size: 12 }) })
                ] }, `s-${k}`)),
                /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: ne,
                    className: "text-[12px] text-[#0f62fe] hover:underline ml-1",
                    style: { fontWeight: 400 },
                    children: "Clear all"
                  }
                )
              ] })
            ] }),
            i && /* @__PURE__ */ r("div", { className: "bg-white border-t border-[#e0e0e0] px-6 py-4 flex gap-8", children: [
              /* @__PURE__ */ r("div", { className: "min-w-[180px]", children: [
                /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252] mb-2", style: { fontWeight: 600 }, children: "Product" }),
                /* @__PURE__ */ e("div", { className: "flex flex-col gap-1.5", children: te.map((k) => /* @__PURE__ */ r("label", { className: "flex items-center gap-2 text-[13px] text-[#161616] cursor-pointer hover:bg-[#f4f4f4] px-2 py-1 rounded transition-colors", style: { fontWeight: 400 }, children: [
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "checkbox",
                      checked: c.has(k),
                      onChange: () => o(Z(c, k)),
                      className: "w-4 h-4 accent-[#0f62fe]"
                    }
                  ),
                  k
                ] }, k)) })
              ] }),
              /* @__PURE__ */ r("div", { className: "min-w-[140px]", children: [
                /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252] mb-2", style: { fontWeight: 600 }, children: "Group" }),
                /* @__PURE__ */ e("div", { className: "flex flex-col gap-1.5", children: ee.map((k) => /* @__PURE__ */ r("label", { className: "flex items-center gap-2 text-[13px] text-[#161616] cursor-pointer hover:bg-[#f4f4f4] px-2 py-1 rounded transition-colors", style: { fontWeight: 400 }, children: [
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "checkbox",
                      checked: d.has(k),
                      onChange: () => u(Z(d, k)),
                      className: "w-4 h-4 accent-[#0f62fe]"
                    }
                  ),
                  k
                ] }, k)) })
              ] }),
              /* @__PURE__ */ r("div", { className: "min-w-[140px]", children: [
                /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252] mb-2", style: { fontWeight: 600 }, children: "Location" }),
                /* @__PURE__ */ e("div", { className: "flex flex-col gap-1.5", children: le.map((k) => /* @__PURE__ */ r("label", { className: "flex items-center gap-2 text-[13px] text-[#161616] cursor-pointer hover:bg-[#f4f4f4] px-2 py-1 rounded transition-colors", style: { fontWeight: 400 }, children: [
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "checkbox",
                      checked: h.has(k),
                      onChange: () => m(Z(h, k)),
                      className: "w-4 h-4 accent-[#0f62fe]"
                    }
                  ),
                  k
                ] }, k)) })
              ] }),
              /* @__PURE__ */ r("div", { className: "min-w-[120px]", children: [
                /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252] mb-2", style: { fontWeight: 600 }, children: "Status" }),
                /* @__PURE__ */ e("div", { className: "flex flex-col gap-1.5", children: Re.map((k) => /* @__PURE__ */ r("label", { className: "flex items-center gap-2 text-[13px] text-[#161616] cursor-pointer hover:bg-[#f4f4f4] px-2 py-1 rounded transition-colors", style: { fontWeight: 400 }, children: [
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "checkbox",
                      checked: g.has(k),
                      onChange: () => f(Z(g, k)),
                      className: "w-4 h-4 accent-[#0f62fe]"
                    }
                  ),
                  /* @__PURE__ */ e(vr, { status: k }),
                  k
                ] }, k)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "bg-white overflow-x-auto", children: /* @__PURE__ */ r("table", { className: "w-full", children: [
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
              /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Name" }),
              /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Group" }),
              /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Location" }),
              /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Product" }),
              /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Status" }),
              /* @__PURE__ */ e("th", { className: "w-12 px-4 py-3" })
            ] }) }),
            /* @__PURE__ */ e("tbody", { children: G.map((k, ae) => /* @__PURE__ */ r(
              "tr",
              {
                className: "border-b border-[#e0e0e0] hover:bg-[#e8e8e8] transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
                    "button",
                    {
                      className: "text-[14px] text-[#0f62fe] hover:underline text-left",
                      style: { fontWeight: 400 },
                      onClick: () => Y(k),
                      children: k.name
                    }
                  ) }),
                  /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: k.group }),
                  /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: k.location }),
                  /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(vu, { type: k.productIcon }),
                    /* @__PURE__ */ e(
                      "a",
                      {
                        href: "#",
                        className: "text-[14px] text-[#0f62fe] hover:underline",
                        style: { fontWeight: 400 },
                        onClick: (oe) => oe.preventDefault(),
                        children: k.product
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(vr, { status: k.status }),
                    /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: k.status })
                  ] }) }),
                  /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
                    "button",
                    {
                      className: "p-1 hover:bg-[#d6d6d6] rounded transition-colors text-[#525252]",
                      title: "Delete resource",
                      onClick: (oe) => {
                        oe.stopPropagation(), Ce(k);
                      },
                      children: /* @__PURE__ */ e(Rn, { size: 16 })
                    }
                  ) })
                ]
              },
              ae
            )) })
          ] }) })
        ] })
      ]
    }
  );
}
const wu = [
  {
    id: 1,
    type: "Incident",
    severity: "Failed",
    content: 'A cluster in "cos-migration-store" has lost networking to an application server',
    created: "5 minutes ago",
    action: "/resources/cos-migration-store",
    actionLabel: "cos-migration-store"
  },
  {
    id: 2,
    type: "Incident",
    severity: "Failed",
    content: '"vpc-network-prod" has lost connection to the server',
    created: "5 minutes ago",
    action: "/resources/vpc-network-prod",
    actionLabel: "vpc-network-prod"
  },
  {
    id: 3,
    type: "Incident",
    severity: "Warning",
    content: 'Storage capacity in "fn-data-processor" is running low',
    created: "5 minutes ago",
    action: "/resources/fn-data-processor",
    actionLabel: "fn-data-processor"
  },
  {
    id: 4,
    type: "Announcement",
    severity: "Information",
    content: "New promotion for you",
    created: "5 minutes ago",
    action: "",
    actionLabel: "Activate promotion"
  },
  {
    id: 5,
    type: "Announcement",
    severity: "Information",
    content: "New promotion for you",
    created: "24 hrs ago",
    action: "",
    actionLabel: "Activate promotion"
  }
], ku = [
  { label: "All", count: 5 },
  { label: "Issues", count: 3 },
  { label: "In-progress", count: null },
  { label: "Completed", count: null },
  { label: "Scheduled", count: null }
];
function Cu({ severity: t }) {
  return t === "Failed" ? /* @__PURE__ */ e(
    Je,
    {
      size: 16,
      className: "shrink-0",
      style: { color: "#da1e28" },
      fill: "#da1e28",
      stroke: "white"
    }
  ) : t === "Warning" ? /* @__PURE__ */ e(
    Fe,
    {
      size: 16,
      className: "shrink-0",
      style: { color: "#f1c21b" },
      fill: "#f1c21b",
      stroke: "white"
    }
  ) : t === "Information" ? /* @__PURE__ */ e(
    Wt,
    {
      size: 16,
      className: "shrink-0",
      style: { color: "#0f62fe" },
      fill: "#0f62fe",
      stroke: "white"
    }
  ) : /* @__PURE__ */ e(be, { size: 16, className: "shrink-0 text-[#a8a8a8]" });
}
function Wu({ severity: t }) {
  return /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ e(Cu, { severity: t }),
    /* @__PURE__ */ e(
      "span",
      {
        className: "text-[14px] text-[#161616]",
        style: { fontWeight: 400 },
        children: t
      }
    )
  ] });
}
function Su() {
  const [t, n] = A("All"), [a, s] = A(""), [i] = A(100), l = pe(), { collapsed: c } = we(), { isOpen: o } = ke(), d = wu.filter((u) => t === "All" ? !0 : t === "Issues" ? u.type === "Incident" : !1);
  return /* @__PURE__ */ r(
    "main",
    {
      className: `${c ? "ml-[48px]" : "ml-[256px]"} ${o ? "mr-[320px]" : "mr-0"} mt-12 min-h-[calc(100vh-48px)] bg-[#f4f4f4] transition-all duration-200`,
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: [
        /* @__PURE__ */ e("div", { className: "bg-white w-full", children: /* @__PURE__ */ e("div", { className: "px-8 py-5 max-w-[1600px] mx-auto w-full", children: /* @__PURE__ */ e("h1", { className: "text-[28px] text-[#161616]", style: { fontWeight: 300 }, children: "Activities" }) }) }),
        /* @__PURE__ */ e("div", { className: "bg-white w-full", children: /* @__PURE__ */ e("div", { className: "px-8 max-w-[1600px] mx-auto w-full", children: /* @__PURE__ */ e("div", { className: "flex items-center gap-0", children: ku.map((u) => /* @__PURE__ */ r(
          "button",
          {
            className: `px-4 py-3 text-[14px] border-b-2 transition-colors ${t === u.label ? "border-[#0f62fe] text-[#161616]" : "border-transparent text-[#525252] hover:text-[#161616] hover:border-[#c6c6c6]"}`,
            style: {
              fontWeight: t === u.label ? 600 : 400
            },
            onClick: () => n(u.label),
            children: [
              u.label,
              u.count !== null && /* @__PURE__ */ r("span", { className: "ml-1", children: [
                "(",
                u.count,
                ")"
              ] })
            ]
          },
          u.label
        )) }) }) }),
        /* @__PURE__ */ r("div", { className: "px-8 pt-6 pb-8 max-w-[1600px] mx-auto w-full flex flex-col gap-[24px]", children: [
          /* @__PURE__ */ e("div", { children: /* @__PURE__ */ r("div", { className: "flex items-center gap-0", children: [
            /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-4 py-2 bg-white min-w-[240px] flex-1", children: [
              /* @__PURE__ */ e(Ie, { size: 16, className: "text-[#525252] shrink-0" }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  placeholder: "Search input text",
                  value: a,
                  onChange: (u) => s(u.target.value),
                  className: "bg-transparent outline-none text-[14px] text-[#161616] placeholder-[#a8a8a8] w-full",
                  style: { fontWeight: 400 }
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e("button", { className: "p-3 hover:bg-[#e8e8e8] transition-colors text-[#525252]", children: /* @__PURE__ */ e(va, { size: 16 }) }) }),
            /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e("button", { className: "p-3 hover:bg-[#e8e8e8] transition-colors text-[#525252]", children: /* @__PURE__ */ e(Mn, { size: 16 }) }) }),
            /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e("button", { className: "p-3 hover:bg-[#e8e8e8] transition-colors text-[#525252]", children: /* @__PURE__ */ e(Na, { size: 16 }) }) }),
            /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e("button", { className: "p-3 hover:bg-[#e8e8e8] transition-colors text-[#525252]", children: /* @__PURE__ */ e(Jt, { size: 16 }) }) })
          ] }) }),
          /* @__PURE__ */ r("div", { className: "bg-white overflow-x-auto", children: [
            /* @__PURE__ */ r("table", { className: "w-full", children: [
              /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
                /* @__PURE__ */ e(
                  "th",
                  {
                    className: "text-left px-4 py-3 text-[14px] text-[#161616] w-[140px]",
                    style: { fontWeight: 600 },
                    children: "Type"
                  }
                ),
                /* @__PURE__ */ e(
                  "th",
                  {
                    className: "text-left px-4 py-3 text-[14px] text-[#161616] w-[140px]",
                    style: { fontWeight: 600 },
                    children: "Severity"
                  }
                ),
                /* @__PURE__ */ e(
                  "th",
                  {
                    className: "text-left px-4 py-3 text-[14px] text-[#161616]",
                    style: { fontWeight: 600 },
                    children: "Content"
                  }
                ),
                /* @__PURE__ */ e(
                  "th",
                  {
                    className: "text-left px-4 py-3 text-[14px] text-[#161616] w-[160px]",
                    style: { fontWeight: 600 },
                    children: "Created"
                  }
                ),
                /* @__PURE__ */ e(
                  "th",
                  {
                    className: "text-left px-4 py-3 text-[14px] text-[#161616] w-[160px]",
                    style: { fontWeight: 600 },
                    children: "Action"
                  }
                )
              ] }) }),
              /* @__PURE__ */ e("tbody", { children: d.map((u) => /* @__PURE__ */ r(
                "tr",
                {
                  className: "border-b border-[#e0e0e0] hover:bg-[#e8e8e8] transition-colors",
                  children: [
                    /* @__PURE__ */ e(
                      "td",
                      {
                        className: "px-4 py-3 text-[14px] text-[#161616]",
                        style: { fontWeight: 400 },
                        children: u.type
                      }
                    ),
                    /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(Wu, { severity: u.severity }) }),
                    /* @__PURE__ */ e(
                      "td",
                      {
                        className: "px-4 py-3 text-[14px] text-[#161616]",
                        style: { fontWeight: 400 },
                        children: u.content
                      }
                    ),
                    /* @__PURE__ */ e(
                      "td",
                      {
                        className: "px-4 py-3 text-[14px] text-[#525252]",
                        style: { fontWeight: 400 },
                        children: u.created
                      }
                    ),
                    /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
                      "button",
                      {
                        className: "text-[14px] text-[#0f62fe] hover:underline text-left",
                        style: { fontWeight: 400 },
                        onClick: () => u.action && l(u.action),
                        children: u.actionLabel
                      }
                    ) })
                  ]
                },
                u.id
              )) })
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 py-3 border-t border-[#e0e0e0]", children: [
              /* @__PURE__ */ r("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ r("div", { className: "flex items-center gap-2 text-[14px] text-[#161616]", children: [
                  /* @__PURE__ */ e("span", { style: { fontWeight: 400 }, children: "Items per page:" }),
                  /* @__PURE__ */ r(
                    "button",
                    {
                      className: "flex items-center gap-1 px-2 py-1 border border-[#e0e0e0] bg-white text-[14px] text-[#161616]",
                      style: { fontWeight: 400 },
                      children: [
                        i,
                        /* @__PURE__ */ e(de, { size: 14, className: "text-[#525252]" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: "text-[14px] text-[#161616] border-l border-[#e0e0e0] pl-4",
                    style: { fontWeight: 400 },
                    children: "1–100 of 100 items"
                  }
                )
              ] }),
              /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: "text-[14px] text-[#161616]",
                    style: { fontWeight: 400 },
                    children: "1"
                  }
                ),
                /* @__PURE__ */ e(
                  "button",
                  {
                    className: "flex items-center gap-1 px-2 py-1 border border-[#e0e0e0] bg-white text-[14px] text-[#525252]",
                    style: { fontWeight: 400 },
                    children: /* @__PURE__ */ e(de, { size: 14 })
                  }
                ),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: "text-[14px] text-[#525252]",
                    style: { fontWeight: 400 },
                    children: "of 10 pages"
                  }
                ),
                /* @__PURE__ */ e("button", { className: "p-1.5 border border-[#e0e0e0] bg-white hover:bg-[#e8e8e8] transition-colors text-[#525252]", children: /* @__PURE__ */ e(hs, { size: 16 }) }),
                /* @__PURE__ */ e("button", { className: "p-1.5 border border-[#e0e0e0] bg-white hover:bg-[#e8e8e8] transition-colors text-[#525252]", children: /* @__PURE__ */ e(vn, { size: 16 }) })
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
const Gn = {
  "dal-wash-testconnection": {
    name: "dal-wash-testconnection",
    product: "Virtual Private Cloud",
    productCategory: "Infrastructure",
    status: "Running",
    location: "us-south-3",
    group: "default",
    tags: ["schematics"],
    tabs: ["Overview", "Subnets", "Access control"]
  },
  "cos-migration-store": {
    name: "cos-migration-store",
    product: "Storage",
    productCategory: "Infrastructure",
    status: "Failed",
    location: "us-south-3",
    group: "default",
    tags: ["schematics"],
    tabs: ["Buckets", "Configuration"]
  },
  "vpc-network-prod": {
    name: "vpc-network-prod",
    product: "Virtual Private Cloud",
    productCategory: "Infrastructure",
    status: "Failed",
    location: "us-south-3",
    group: "default",
    tags: ["schematics"],
    tabs: ["Overview", "Subnets"]
  },
  "fn-data-processor": {
    name: "fn-data-processor",
    product: "Serverless",
    productCategory: "Containers",
    status: "Warning",
    location: "us-south-3",
    group: "default",
    tags: ["schematics"],
    tabs: ["Revisions", "Environment"]
  },
  "iks-prod-cluster-01": {
    name: "iks-prod-cluster-01",
    product: "Virtual Private Cloud",
    productCategory: "Infrastructure",
    status: "Running",
    location: "us-south-1",
    group: "default",
    tags: ["schematics"],
    tabs: ["Overview", "Subnets"]
  },
  "pg-analytics-west": {
    name: "pg-analytics-west",
    product: "Virtual Private Cloud",
    productCategory: "Infrastructure",
    status: "Running",
    location: "us-south-2",
    group: "analytics",
    tags: ["databases"],
    tabs: ["Overview", "Subnets"]
  },
  "cos-media-assets": {
    name: "cos-media-assets",
    product: "Storage",
    productCategory: "Infrastructure",
    status: "Running",
    location: "us-east-1",
    group: "production",
    tags: ["media"],
    tabs: ["Buckets", "Configuration"]
  },
  "vpc-staging-eu-de": {
    name: "vpc-staging-eu-de",
    product: "Virtual Private Cloud",
    productCategory: "Infrastructure",
    status: "Running",
    location: "eu-de-1",
    group: "staging",
    tags: ["staging"],
    tabs: ["Overview", "Subnets"]
  },
  "kube-worker-pool-03": {
    name: "kube-worker-pool-03",
    product: "Virtual Private Cloud",
    productCategory: "Infrastructure",
    status: "Running",
    location: "us-south-1",
    group: "default",
    tags: ["kubernetes"],
    tabs: ["Overview", "Subnets"]
  },
  "tgw-us-south-prod": {
    name: "tgw-us-south-prod",
    product: "Virtual Private Cloud",
    productCategory: "Infrastructure",
    status: "Running",
    location: "us-south-3",
    group: "networking",
    tags: ["transit"],
    tabs: ["Overview", "Subnets"]
  },
  "sg-frontend-rules": {
    name: "sg-frontend-rules",
    product: "Virtual Private Cloud",
    productCategory: "Infrastructure",
    status: "Running",
    location: "us-south-1",
    group: "security",
    tags: ["firewall"],
    tabs: ["Overview", "Access control"]
  },
  "vsi-batch-worker-02": {
    name: "vsi-batch-worker-02",
    product: "Virtual Private Cloud",
    productCategory: "Infrastructure",
    status: "Running",
    location: "us-south-2",
    group: "compute",
    tags: ["batch"],
    tabs: ["Overview", "Subnets"]
  },
  "lb-api-gateway-public": {
    name: "lb-api-gateway-public",
    product: "Virtual Private Cloud",
    productCategory: "Infrastructure",
    status: "Running",
    location: "us-south-1",
    group: "production",
    tags: ["load-balancer"],
    tabs: ["Overview", "Subnets"]
  },
  "vpn-site-to-site-dal": {
    name: "vpn-site-to-site-dal",
    product: "Virtual Private Cloud",
    productCategory: "Infrastructure",
    status: "Running",
    location: "us-south-3",
    group: "networking",
    tags: ["vpn"],
    tabs: ["Overview", "Subnets"]
  },
  "flow-logs-collector": {
    name: "flow-logs-collector",
    product: "Virtual Private Cloud",
    productCategory: "Infrastructure",
    status: "Running",
    location: "us-south-1",
    group: "observability",
    tags: ["logging"],
    tabs: ["Overview", "Subnets"]
  },
  "subnet-private-mgmt": {
    name: "subnet-private-mgmt",
    product: "Virtual Private Cloud",
    productCategory: "Infrastructure",
    status: "Running",
    location: "us-south-3",
    group: "default",
    tags: ["management"],
    tabs: ["Overview", "Subnets"]
  },
  Cluster01: {
    name: "Cluster01",
    product: "Red Hat OpenShift",
    productCategory: "Containers",
    status: "Running",
    location: "us-south",
    group: "default",
    tags: ["kubernetes", "openshift"],
    tabs: ["Overview", "Worker nodes", "Worker pools", "Networking", "Ingress", "DevOps"]
  }
};
function Mu({ status: t }) {
  return /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
    t === "Running" ? /* @__PURE__ */ e(be, { size: 16, className: "shrink-0", style: { color: "#198038" }, fill: "#198038", stroke: "white" }) : t === "Failed" ? /* @__PURE__ */ e(Je, { size: 16, className: "shrink-0", style: { color: "#da1e28" }, fill: "#da1e28", stroke: "white" }) : t === "Warning" ? /* @__PURE__ */ e(Fe, { size: 16, className: "shrink-0", style: { color: "#f1c21b" }, fill: "#f1c21b", stroke: "white" }) : /* @__PURE__ */ e(be, { size: 16, className: "shrink-0 text-[#a8a8a8]" }),
    /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: t })
  ] });
}
function Nr({ config: t }) {
  return /* @__PURE__ */ r("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ r("button", { className: "flex items-center gap-2 px-4 py-2 bg-[#0f62fe] text-white text-[14px] hover:bg-[#0353e9] transition-colors", style: { fontWeight: 400 }, children: [
        /* @__PURE__ */ e(sd, { size: 14 }),
        "Open dashboard"
      ] }),
      /* @__PURE__ */ r("button", { className: "flex items-center gap-2 px-4 py-2 border border-[#0f62fe] text-[#0f62fe] text-[14px] hover:bg-[#e8e8e8] transition-colors", style: { fontWeight: 400 }, children: [
        /* @__PURE__ */ e(yd, { size: 14 }),
        "Restart"
      ] }),
      /* @__PURE__ */ r("button", { className: "flex items-center gap-2 px-4 py-2 border border-[#0f62fe] text-[#0f62fe] text-[14px] hover:bg-[#e8e8e8] transition-colors", style: { fontWeight: 400 }, children: [
        /* @__PURE__ */ e(Rd, { size: 14 }),
        "Stop"
      ] }),
      /* @__PURE__ */ r("button", { className: "flex items-center gap-2 px-4 py-2 border border-[#da1e28] text-[#da1e28] text-[14px] hover:bg-[#fff1f1] transition-colors ml-auto", style: { fontWeight: 400 }, children: [
        /* @__PURE__ */ e(Rn, { size: 14 }),
        "Delete"
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid grid-cols-2 gap-6", children: [
      /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-4", children: [
        /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Resource details" }),
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ e(se, { label: "Name", value: t.name, copyable: !0 }),
          /* @__PURE__ */ e(se, { label: "CRN", value: `crn:v1:bluemix:public:${t.product.toLowerCase().replace(/ /g, "-")}:${t.location}:a/abc123::${t.name}`, copyable: !0 }),
          /* @__PURE__ */ e(se, { label: "Resource group", value: t.group }),
          /* @__PURE__ */ e(se, { label: "Location", value: t.location }),
          /* @__PURE__ */ e(se, { label: "Product", value: t.product, link: !0 }),
          /* @__PURE__ */ e(se, { label: "Created", value: "2025-12-15 14:32:00 UTC" }),
          /* @__PURE__ */ e(se, { label: "Last updated", value: "2026-03-10 09:15:00 UTC" }),
          /* @__PURE__ */ r("div", { className: "flex items-start gap-0 py-1", children: [
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252] w-[140px] shrink-0", style: { fontWeight: 400 }, children: "Tags" }),
            /* @__PURE__ */ e("div", { className: "flex items-center gap-1 flex-wrap", children: t.tags.map((n) => /* @__PURE__ */ e("span", { className: "inline-block px-2 py-0.5 bg-[#d0e2ff] rounded text-[12px] text-[#0043ce]", style: { fontWeight: 400 }, children: n }, n)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-4", children: [
        /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Metrics" }),
        /* @__PURE__ */ r("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e(mn, { icon: /* @__PURE__ */ e(ta, { size: 20 }), label: "CPU usage", value: "42%", trend: "up" }),
          /* @__PURE__ */ e(mn, { icon: /* @__PURE__ */ e(mt, { size: 20 }), label: "Memory", value: "2.1 GB", trend: "up" }),
          /* @__PURE__ */ e(mn, { icon: /* @__PURE__ */ e(Cn, { size: 20 }), label: "Network I/O", value: "340 Mbps", trend: "down" }),
          /* @__PURE__ */ e(mn, { icon: /* @__PURE__ */ e(ps, { size: 20 }), label: "Uptime", value: "99.2%", trend: "up" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Recent events" }),
      /* @__PURE__ */ e("div", { className: "flex flex-col", children: [
        { time: "5 min ago", msg: "Health check completed successfully", type: "info" },
        { time: "22 min ago", msg: "Auto-scaling triggered: 2 instances added", type: "info" },
        { time: "1 hr ago", msg: "Deployment v3.2.1 completed", type: "info" },
        { time: "3 hrs ago", msg: "Certificate renewal scheduled", type: "warning" }
      ].map((n, a) => /* @__PURE__ */ r("div", { className: "flex items-center gap-4 px-0 py-3 border-b border-[#e0e0e0] last:border-b-0", children: [
        /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252] w-[80px] shrink-0", style: { fontWeight: 400 }, children: n.time }),
        /* @__PURE__ */ e(
          "span",
          {
            className: "inline-block w-2 h-2 rounded-full shrink-0",
            style: { backgroundColor: n.type === "warning" ? "#f1c21b" : "#42be65" }
          }
        ),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.msg })
      ] }, a)) })
    ] })
  ] });
}
function Iu() {
  return /* @__PURE__ */ e("div", { className: "bg-white overflow-x-auto", children: /* @__PURE__ */ r("table", { className: "w-full", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Name" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "CIDR block" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Zone" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Available IPs" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Attached resources" })
    ] }) }),
    /* @__PURE__ */ e("tbody", { children: [
      { name: "subnet-public-01", cidr: "10.240.0.0/24", zone: "us-south-1", available: 218, attached: 37 },
      { name: "subnet-private-01", cidr: "10.240.1.0/24", zone: "us-south-1", available: 241, attached: 14 },
      { name: "subnet-public-02", cidr: "10.240.10.0/24", zone: "us-south-2", available: 250, attached: 5 },
      { name: "subnet-private-02", cidr: "10.240.11.0/24", zone: "us-south-2", available: 253, attached: 2 }
    ].map((n, a) => /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] hover:bg-[#e8e8e8] transition-colors", children: [
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: n.name }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616] font-mono", style: { fontWeight: 400 }, children: n.cidr }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.zone }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.available }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.attached })
    ] }, a)) })
  ] }) });
}
function Ru() {
  return /* @__PURE__ */ e("div", { className: "bg-white overflow-x-auto", children: /* @__PURE__ */ r("table", { className: "w-full", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Rule name" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Direction" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Protocol" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Port" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Source" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Action" })
    ] }) }),
    /* @__PURE__ */ e("tbody", { children: [
      { name: "allow-inbound-https", direction: "Inbound", protocol: "TCP", port: "443", source: "0.0.0.0/0", action: "Allow" },
      { name: "allow-inbound-http", direction: "Inbound", protocol: "TCP", port: "80", source: "0.0.0.0/0", action: "Allow" },
      { name: "allow-internal", direction: "Inbound", protocol: "All", port: "All", source: "10.240.0.0/16", action: "Allow" },
      { name: "deny-all-inbound", direction: "Inbound", protocol: "All", port: "All", source: "0.0.0.0/0", action: "Deny" },
      { name: "allow-outbound-all", direction: "Outbound", protocol: "All", port: "All", source: "0.0.0.0/0", action: "Allow" }
    ].map((n, a) => /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] hover:bg-[#e8e8e8] transition-colors", children: [
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: n.name }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.direction }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.protocol }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616] font-mono", style: { fontWeight: 400 }, children: n.port }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616] font-mono", style: { fontWeight: 400 }, children: n.source }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e("span", { className: `text-[14px] ${n.action === "Allow" ? "text-[#42be65]" : "text-[#da1e28]"}`, style: { fontWeight: 600 }, children: n.action }) })
    ] }, a)) })
  ] }) });
}
function zu({ config: t }) {
  return /* @__PURE__ */ r("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ r("div", { className: "grid grid-cols-3 gap-6", children: [
      /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-2", children: [
        /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Storage class" }),
        /* @__PURE__ */ e("span", { className: "text-[20px] text-[#161616]", style: { fontWeight: 600 }, children: "Standard" })
      ] }),
      /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-2", children: [
        /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Total capacity" }),
        /* @__PURE__ */ e("span", { className: "text-[20px] text-[#161616]", style: { fontWeight: 600 }, children: "500 GB" })
      ] }),
      /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-2", children: [
        /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Used capacity" }),
        /* @__PURE__ */ e("span", { className: "text-[20px] text-[#da1e28]", style: { fontWeight: 600 }, children: "487 GB (97%)" })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Buckets" }),
      /* @__PURE__ */ r("table", { className: "w-full", children: [
        /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Bucket name" }),
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Objects" }),
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Size" }),
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Region" }),
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Encryption" })
        ] }) }),
        /* @__PURE__ */ e("tbody", { children: [
          { name: "backup-prod-daily", objects: 1243, size: "210 GB", region: "us-south", encryption: "AES-256" },
          { name: "logs-archive-2026", objects: 8432, size: "145 GB", region: "us-south", encryption: "AES-256" },
          { name: "media-assets-cdn", objects: 532, size: "98 GB", region: "us-south", encryption: "AES-256" },
          { name: "db-snapshots", objects: 64, size: "34 GB", region: "us-south", encryption: "AES-256" }
        ].map((n, a) => /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] hover:bg-[#e8e8e8] transition-colors", children: [
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: n.name }),
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.objects.toLocaleString() }),
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.size }),
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.region }),
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.encryption })
        ] }, a)) })
      ] })
    ] })
  ] });
}
function Du() {
  return /* @__PURE__ */ r("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Configuration" }),
      /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ e(se, { label: "Replication", value: "Cross-region (us-south, us-east)" }),
        /* @__PURE__ */ e(se, { label: "Versioning", value: "Enabled" }),
        /* @__PURE__ */ e(se, { label: "Lifecycle policy", value: "Archive after 90 days" }),
        /* @__PURE__ */ e(se, { label: "Retention", value: "30 days minimum" }),
        /* @__PURE__ */ e(se, { label: "CORS", value: "Enabled for *.ibm.com" }),
        /* @__PURE__ */ e(se, { label: "Public access", value: "Disabled" })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Endpoints" }),
      /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ e(se, { label: "Public", value: "s3.us-south.cloud-object-storage.appdomain.cloud", copyable: !0 }),
        /* @__PURE__ */ e(se, { label: "Private", value: "s3.private.us-south.cloud-object-storage.appdomain.cloud", copyable: !0 }),
        /* @__PURE__ */ e(se, { label: "Direct", value: "s3.direct.us-south.cloud-object-storage.appdomain.cloud", copyable: !0 })
      ] })
    ] })
  ] });
}
function Pu() {
  return /* @__PURE__ */ r("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ r("div", { className: "grid grid-cols-4 gap-6", children: [
      /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-2", children: [
        /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Runtime" }),
        /* @__PURE__ */ e("span", { className: "text-[20px] text-[#161616]", style: { fontWeight: 600 }, children: "Node.js 20" })
      ] }),
      /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-2", children: [
        /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Invocations (24h)" }),
        /* @__PURE__ */ e("span", { className: "text-[20px] text-[#161616]", style: { fontWeight: 600 }, children: "12,432" })
      ] }),
      /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-2", children: [
        /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Avg. duration" }),
        /* @__PURE__ */ e("span", { className: "text-[20px] text-[#f1c21b]", style: { fontWeight: 600 }, children: "820 ms" })
      ] }),
      /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-2", children: [
        /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Error rate" }),
        /* @__PURE__ */ e("span", { className: "text-[20px] text-[#da1e28]", style: { fontWeight: 600 }, children: "4.2%" })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Revisions" }),
      /* @__PURE__ */ r("table", { className: "w-full", children: [
        /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Revision" }),
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Traffic" }),
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Status" }),
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Created" }),
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Image" })
        ] }) }),
        /* @__PURE__ */ e("tbody", { children: [
          { name: "fn-data-processor-rev-3", traffic: "80%", status: "Ready", created: "Mar 14, 2026", image: "us.icr.io/ns/app:v3.0" },
          { name: "fn-data-processor-rev-2", traffic: "20%", status: "Ready", created: "Mar 10, 2026", image: "us.icr.io/ns/app:v2.5" },
          { name: "fn-data-processor-rev-1", traffic: "0%", status: "Retired", created: "Mar 1, 2026", image: "us.icr.io/ns/app:v2.0" }
        ].map((t, n) => /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] hover:bg-[#e8e8e8] transition-colors", children: [
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: t.name }),
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: t.traffic }),
          /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-block w-2 h-2 rounded-full", style: { backgroundColor: t.status === "Ready" ? "#42be65" : "#a8a8a8" } }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: t.status })
          ] }) }),
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: t.created }),
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252] font-mono", style: { fontWeight: 400 }, children: t.image })
        ] }, n)) })
      ] })
    ] })
  ] });
}
function Au() {
  return /* @__PURE__ */ r("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Environment variables" }),
      /* @__PURE__ */ r("table", { className: "w-full", children: [
        /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Key" }),
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Value" }),
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Type" })
        ] }) }),
        /* @__PURE__ */ e("tbody", { children: [
          { key: "NODE_ENV", value: "production", type: "Literal" },
          { key: "API_ENDPOINT", value: "https://api.example.com", type: "Literal" },
          { key: "DB_CONNECTION", value: "••••••••", type: "Secret" },
          { key: "LOG_LEVEL", value: "warn", type: "Literal" },
          { key: "CACHE_TTL", value: "3600", type: "Literal" }
        ].map((t, n) => /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] hover:bg-[#e8e8e8] transition-colors", children: [
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616] font-mono", style: { fontWeight: 400 }, children: t.key }),
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252] font-mono", style: { fontWeight: 400 }, children: t.value }),
          /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e("span", { className: `inline-block px-2 py-0.5 rounded text-[12px] ${t.type === "Secret" ? "bg-[#fff1f1] text-[#da1e28]" : "bg-[#e0e0e0] text-[#161616]"}`, style: { fontWeight: 400 }, children: t.type }) })
        ] }, n)) })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Runtime settings" }),
      /* @__PURE__ */ r("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ e(se, { label: "Memory", value: "256 MB" }),
        /* @__PURE__ */ e(se, { label: "CPU", value: "0.5 vCPU" }),
        /* @__PURE__ */ e(se, { label: "Max instances", value: "10" }),
        /* @__PURE__ */ e(se, { label: "Min instances", value: "1" }),
        /* @__PURE__ */ e(se, { label: "Concurrency", value: "100" }),
        /* @__PURE__ */ e(se, { label: "Timeout", value: "300 seconds" })
      ] })
    ] })
  ] });
}
function wr() {
  return /* @__PURE__ */ e("div", { className: "bg-white overflow-x-auto", children: /* @__PURE__ */ r("table", { className: "w-full", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Pool name" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Flavor" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Workers" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Zone" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Status" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "OS" })
    ] }) }),
    /* @__PURE__ */ e("tbody", { children: [
      { name: "default", flavor: "bx2.4x16", workers: 3, zone: "us-south-1", status: "Ready", os: "RHCOS" },
      { name: "infra-pool", flavor: "bx2.8x32", workers: 2, zone: "us-south-2", status: "Ready", os: "RHCOS" }
    ].map((n, a) => /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] hover:bg-[#e8e8e8] transition-colors", children: [
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: n.name }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616] font-mono", style: { fontWeight: 400 }, children: n.flavor }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.workers }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.zone }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("span", { className: "inline-block w-2 h-2 rounded-full", style: { backgroundColor: "#42be65" } }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.status })
      ] }) }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.os })
    ] }, a)) })
  ] }) });
}
function kr({ config: t }) {
  const n = sa.useMemo(
    () => "d6bh6si0h9h5h4tssjg".slice(0, 18) + Math.random().toString(36).slice(2, 5),
    []
  );
  return /* @__PURE__ */ r("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ r("div", { className: "bg-[#edf5ff] border-l-[3px] border-[#0f62fe] px-5 py-4 flex gap-3", children: [
      /* @__PURE__ */ e(Wt, { size: 20, className: "text-[#0f62fe] shrink-0 mt-0.5" }),
      /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Enable telemetry" }),
        /* @__PURE__ */ r("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: [
          "If you are a Red Hat customer and would like to see your Red Hat OpenShift on IBM Cloud clusters appear in the",
          " ",
          /* @__PURE__ */ e("a", { href: "#", className: "text-[#0f62fe] hover:underline", onClick: (a) => a.preventDefault(), children: "Red Hat Hybrid Cloud Console" }),
          ", follow",
          " ",
          /* @__PURE__ */ e("a", { href: "#", className: "text-[#0f62fe] hover:underline", onClick: (a) => a.preventDefault(), children: "these instructions" }),
          " ",
          "to enable telemetry."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-2", children: [
      /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Explore Red Hat OpenShift AI add-on" }),
      /* @__PURE__ */ r("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: [
        "Get started with",
        " ",
        /* @__PURE__ */ e("a", { href: "#", className: "text-[#0f62fe] hover:underline", onClick: (a) => a.preventDefault(), children: "Red Hat OpenShift AI" }),
        " ",
        "which is a complete platform for the entire lifecycle of your AI/ML projects."
      ] }),
      /* @__PURE__ */ e("a", { href: "#", className: "text-[14px] text-[#0f62fe] hover:underline mt-1", style: { fontWeight: 400 }, onClick: (a) => a.preventDefault(), children: "Learn more" })
    ] }),
    /* @__PURE__ */ r("div", { className: "grid grid-cols-4 gap-[1px] bg-[#e0e0e0]", children: [
      /* @__PURE__ */ r("div", { className: "bg-white p-5 flex flex-col gap-2", children: [
        /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Worker node status" }),
        /* @__PURE__ */ e("span", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "9 of 9" }),
        /* @__PURE__ */ r("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(be, { size: 14, style: { color: "#198038" }, fill: "#198038", stroke: "white" }),
          /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Healthy" })
        ] }),
        /* @__PURE__ */ r("a", { href: "#", className: "text-[14px] text-[#0f62fe] hover:underline flex items-center gap-1 mt-1", style: { fontWeight: 400 }, onClick: (a) => a.preventDefault(), children: [
          "Details ",
          /* @__PURE__ */ e(hr, { size: 12 })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "bg-white p-5 flex flex-col gap-2", children: [
        /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Add-on status" }),
        /* @__PURE__ */ e("span", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "2 of 2" }),
        /* @__PURE__ */ r("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(be, { size: 14, style: { color: "#198038" }, fill: "#198038", stroke: "white" }),
          /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Healthy" })
        ] }),
        /* @__PURE__ */ r("a", { href: "#", className: "text-[14px] text-[#0f62fe] hover:underline flex items-center gap-1 mt-1", style: { fontWeight: 400 }, onClick: (a) => a.preventDefault(), children: [
          "Details ",
          /* @__PURE__ */ e(hr, { size: 12 })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "bg-white p-5 flex flex-col gap-2", children: [
        /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Master status" }),
        /* @__PURE__ */ e("span", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Normal" }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-1.5", children: /* @__PURE__ */ e(be, { size: 14, style: { color: "#198038" }, fill: "#198038", stroke: "white" }) }),
        /* @__PURE__ */ r("a", { href: "#", className: "text-[14px] text-[#0f62fe] hover:underline flex items-center gap-1 mt-1", style: { fontWeight: 400 }, onClick: (a) => a.preventDefault(), children: [
          "Docs ",
          /* @__PURE__ */ e(xt, { size: 12 })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "bg-white p-5 flex flex-col gap-2", children: [
        /* @__PURE__ */ r("span", { className: "text-[12px] text-[#525252] flex items-center gap-1", style: { fontWeight: 400 }, children: [
          "Ingress status ",
          /* @__PURE__ */ e(Wt, { size: 12, className: "text-[#525252]" })
        ] }),
        /* @__PURE__ */ e("span", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Warning" }),
        /* @__PURE__ */ e("div", { className: "flex items-center gap-1.5", children: /* @__PURE__ */ e(Fe, { size: 14, style: { color: "#f1c21b" }, fill: "#f1c21b", stroke: "white" }) }),
        /* @__PURE__ */ r("div", { className: "flex items-center gap-3 mt-1", children: [
          /* @__PURE__ */ e("a", { href: "#", className: "text-[14px] text-[#0f62fe] hover:underline", style: { fontWeight: 400 }, onClick: (a) => a.preventDefault(), children: "Details" }),
          /* @__PURE__ */ r("a", { href: "#", className: "text-[14px] text-[#0f62fe] hover:underline flex items-center gap-1", style: { fontWeight: 400 }, onClick: (a) => a.preventDefault(), children: [
            "Docs ",
            /* @__PURE__ */ e(xt, { size: 12 })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-5", children: [
      /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Cluster details" }),
      /* @__PURE__ */ r("div", { className: "grid grid-cols-4 gap-x-8 gap-y-5", children: [
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Cluster ID" }),
          /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616] font-mono", style: { fontWeight: 400 }, children: n }),
            /* @__PURE__ */ e("button", { className: "p-0.5 hover:bg-[#e8e8e8] transition-colors text-[#525252]", children: /* @__PURE__ */ e(ms, { size: 14 }) })
          ] })
        ] }),
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Version" }),
          /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: "4.19.23_1568" })
        ] }),
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Infrastructure" }),
          /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: "VPC Gen2" })
        ] }),
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "VPC" }),
          /* @__PURE__ */ e("a", { href: "#", className: "text-[14px] text-[#0f62fe] hover:underline", style: { fontWeight: 400 }, onClick: (a) => a.preventDefault(), children: "aaa" })
        ] }),
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Master location" }),
          /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: "Washington DC" })
        ] }),
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Worker zones" }),
          /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: "us-east-1, us-east-2, us-east-3" })
        ] }),
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Created" }),
          /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: "19/02/2026, 14:43" })
        ] }),
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Resource group" }),
          /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: t.group })
        ] }),
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Image security enforcement" }),
          /* @__PURE__ */ e("button", { className: "self-start mt-0.5 px-3 py-1 text-[14px] text-[#0f62fe] border border-[#0f62fe] hover:bg-[#e8e8e8] transition-colors", style: { fontWeight: 400 }, children: "Enable" })
        ] }),
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ r("span", { className: "text-[12px] text-[#525252] flex items-center gap-1", style: { fontWeight: 400 }, children: [
            "Cluster encryption ",
            /* @__PURE__ */ e(Wt, { size: 12, className: "text-[#525252]" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: "Enabled" }),
            /* @__PURE__ */ e("a", { href: "#", className: "text-[14px] text-[#0f62fe] hover:underline", style: { fontWeight: 400 }, onClick: (a) => a.preventDefault(), children: "Update" })
          ] })
        ] }),
        /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Network plugin" }),
          /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: "Calico" })
        ] })
      ] })
    ] })
  ] });
}
function Lu() {
  return /* @__PURE__ */ e("div", { className: "bg-white overflow-x-auto", children: /* @__PURE__ */ r("table", { className: "w-full", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Name" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Status" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Private IP" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Flavor" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Zone" }),
      /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Age" })
    ] }) }),
    /* @__PURE__ */ e("tbody", { children: [
      { name: "kube-cg8h3k0w-worker-1", status: "Ready", ip: "10.240.0.12", flavor: "bx2.4x16", zone: "us-east-1", age: "45d" },
      { name: "kube-cg8h3k0w-worker-2", status: "Ready", ip: "10.240.0.13", flavor: "bx2.4x16", zone: "us-east-1", age: "45d" },
      { name: "kube-cg8h3k0w-worker-3", status: "Ready", ip: "10.240.0.14", flavor: "bx2.4x16", zone: "us-east-1", age: "45d" },
      { name: "kube-cg8h3k0w-worker-4", status: "Ready", ip: "10.240.1.10", flavor: "bx2.4x16", zone: "us-east-2", age: "45d" },
      { name: "kube-cg8h3k0w-worker-5", status: "Ready", ip: "10.240.1.11", flavor: "bx2.4x16", zone: "us-east-2", age: "45d" },
      { name: "kube-cg8h3k0w-worker-6", status: "Ready", ip: "10.240.1.12", flavor: "bx2.4x16", zone: "us-east-2", age: "45d" },
      { name: "kube-cg8h3k0w-worker-7", status: "Ready", ip: "10.240.2.10", flavor: "bx2.4x16", zone: "us-east-3", age: "45d" },
      { name: "kube-cg8h3k0w-worker-8", status: "Ready", ip: "10.240.2.11", flavor: "bx2.4x16", zone: "us-east-3", age: "45d" },
      { name: "kube-cg8h3k0w-worker-9", status: "Ready", ip: "10.240.2.12", flavor: "bx2.4x16", zone: "us-east-3", age: "38d" }
    ].map((n) => /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] hover:bg-[#e8e8e8] transition-colors", children: [
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: n.name }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("span", { className: "inline-block w-2 h-2 rounded-full", style: { backgroundColor: "#42be65" } }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.status })
      ] }) }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616] font-mono", style: { fontWeight: 400 }, children: n.ip }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616] font-mono", style: { fontWeight: 400 }, children: n.flavor }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.zone }),
      /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.age })
    ] }, n.name)) })
  ] }) });
}
function Ou() {
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-6", children: /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-4", children: [
    /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Subnets" }),
    /* @__PURE__ */ r("table", { className: "w-full", children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
        /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Subnet" }),
        /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "CIDR" }),
        /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Zone" }),
        /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Public gateway" })
      ] }) }),
      /* @__PURE__ */ e("tbody", { children: [
        { name: "sn-us-east-1", cidr: "10.240.0.0/24", zone: "us-east-1", gw: "Attached" },
        { name: "sn-us-east-2", cidr: "10.240.1.0/24", zone: "us-east-2", gw: "Attached" },
        { name: "sn-us-east-3", cidr: "10.240.2.0/24", zone: "us-east-3", gw: "None" }
      ].map((t) => /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] hover:bg-[#e8e8e8] transition-colors", children: [
        /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: t.name }),
        /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616] font-mono", style: { fontWeight: 400 }, children: t.cidr }),
        /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: t.zone }),
        /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: t.gw })
      ] }, t.name)) })
    ] })
  ] }) });
}
function $u() {
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-6", children: /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-4", children: [
    /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Ingress subdomains" }),
    /* @__PURE__ */ r("table", { className: "w-full", children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
        /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Subdomain" }),
        /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Status" }),
        /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Secret" }),
        /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Type" })
      ] }) }),
      /* @__PURE__ */ e("tbody", { children: [
        { domain: "cluster01-abc123.us-east.containers.appdomain.cloud", status: "Warning", secret: "cluster01-abc123", type: "IBM managed" },
        { domain: "custom-app.example.com", status: "Healthy", secret: "custom-app-tls", type: "User managed" }
      ].map((t) => /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] hover:bg-[#e8e8e8] transition-colors", children: [
        /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#0f62fe] font-mono", style: { fontWeight: 400 }, children: t.domain }),
        /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
          t.status === "Healthy" ? /* @__PURE__ */ e(be, { size: 14, style: { color: "#198038" }, fill: "#198038", stroke: "white" }) : /* @__PURE__ */ e(Fe, { size: 14, style: { color: "#f1c21b" }, fill: "#f1c21b", stroke: "white" }),
          /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: t.status })
        ] }) }),
        /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616] font-mono", style: { fontWeight: 400 }, children: t.secret }),
        /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: t.type })
      ] }, t.domain)) })
    ] })
  ] }) });
}
function Eu() {
  return /* @__PURE__ */ r("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Toolchains" }),
      /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Connect a continuous delivery toolchain to automate builds and deployments to this cluster." }),
      /* @__PURE__ */ e("button", { className: "self-start flex items-center gap-2 px-4 py-2 bg-[#0f62fe] text-white text-[14px] hover:bg-[#0353e9] transition-colors", style: { fontWeight: 400 }, children: "Create toolchain" })
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white p-6 flex flex-col gap-4", children: [
      /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Recent deployments" }),
      /* @__PURE__ */ r("table", { className: "w-full", children: [
        /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Pipeline" }),
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Status" }),
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Triggered" }),
          /* @__PURE__ */ e("th", { className: "text-left px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Duration" })
        ] }) }),
        /* @__PURE__ */ e("tbody", { children: [
          { name: "deploy-prod-v3.2.1", status: "Succeeded", triggered: "Mar 14, 2026 09:12", duration: "4m 32s" },
          { name: "deploy-prod-v3.2.0", status: "Succeeded", triggered: "Mar 10, 2026 14:05", duration: "3m 48s" },
          { name: "deploy-staging-v3.2.1", status: "Failed", triggered: "Mar 13, 2026 16:40", duration: "1m 12s" }
        ].map((t) => /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] hover:bg-[#e8e8e8] transition-colors", children: [
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: t.name }),
          /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("span", { className: "inline-block w-2 h-2 rounded-full", style: { backgroundColor: t.status === "Succeeded" ? "#42be65" : "#da1e28" } }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: t.status })
          ] }) }),
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: t.triggered }),
          /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: t.duration })
        ] }, t.name)) })
      ] })
    ] })
  ] });
}
function se({ label: t, value: n, copyable: a, link: s }) {
  return /* @__PURE__ */ r("div", { className: "flex items-start gap-0 py-1", children: [
    /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252] w-[140px] shrink-0", style: { fontWeight: 400 }, children: t }),
    /* @__PURE__ */ r("div", { className: "flex items-center gap-2 min-w-0", children: [
      s ? /* @__PURE__ */ e("a", { href: "#", className: "text-[14px] text-[#0f62fe] hover:underline truncate", style: { fontWeight: 400 }, onClick: (i) => i.preventDefault(), children: n }) : /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616] truncate", style: { fontWeight: 400 }, children: n }),
      a && /* @__PURE__ */ e("button", { className: "p-0.5 hover:bg-[#e8e8e8] transition-colors text-[#525252] shrink-0", children: /* @__PURE__ */ e(ms, { size: 12 }) })
    ] })
  ] });
}
function mn({ icon: t, label: n, value: a, trend: s }) {
  return /* @__PURE__ */ r("div", { className: "bg-white p-4 flex flex-col gap-2", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e("span", { className: "text-[#525252]", children: t }),
      s === "up" ? /* @__PURE__ */ e(sc, { size: 16, className: "text-[#42be65]" }) : /* @__PURE__ */ e(tc, { size: 16, className: "text-[#da1e28]" })
    ] }),
    /* @__PURE__ */ e("span", { className: "text-[24px] text-[#161616]", style: { fontWeight: 300 }, children: a }),
    /* @__PURE__ */ e("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: n })
  ] });
}
function Bu({ product: t }) {
  switch (t) {
    case "Virtual Private Cloud":
      return /* @__PURE__ */ e(Ft, { size: 14, className: "text-[#0f62fe]" });
    case "Serverless":
      return /* @__PURE__ */ e(Mt, { size: 14, className: "text-[#0f62fe]" });
    case "Storage":
      return /* @__PURE__ */ e(mt, { size: 14, className: "text-[#0f62fe]" });
    default:
      return /* @__PURE__ */ e(In, { size: 14, className: "text-[#0f62fe]" });
  }
}
function _u() {
  const { resourceId: t } = Fl(), n = pe(), { addVisit: a } = nn(), { collapsed: s } = we(), { isOpen: i } = ke(), { clusters: l } = Dn(), o = sa.useMemo(() => {
    const f = t || "";
    if (Gn[f]) return Gn[f];
    const N = l.find((v) => v.name === f);
    return N ? {
      name: N.name,
      product: "Red Hat OpenShift",
      productCategory: "Containers",
      status: "Running",
      location: N.location.includes("(") ? N.location.split("(")[1].replace(")", "") : N.location,
      group: N.resourceGroup,
      tags: ["kubernetes", "openshift"],
      tabs: ["Overview", "Worker nodes", "Worker pools", "Networking", "Ingress", "DevOps"]
    } : Gn["dal-wash-testconnection"];
  }, [t, l]), [d, u] = A(o.tabs[0]), h = Se(o);
  X(() => {
    h.current = o;
  }, [o]), X(() => {
    u(o.tabs[0]);
  }, [t]), X(() => () => {
    const f = h.current;
    a({
      resourceId: f.name,
      name: f.name,
      status: f.status,
      product: f.product
    });
  }, [t]);
  const m = o.product === "Red Hat OpenShift", g = () => {
    if (m)
      return d === "Overview" ? /* @__PURE__ */ e(kr, { config: o }) : d === "Worker nodes" ? /* @__PURE__ */ e(Lu, {}) : d === "Worker pools" ? /* @__PURE__ */ e(wr, {}) : d === "Networking" ? /* @__PURE__ */ e(Ou, {}) : d === "Ingress" ? /* @__PURE__ */ e($u, {}) : d === "DevOps" ? /* @__PURE__ */ e(Eu, {}) : /* @__PURE__ */ e(kr, { config: o });
    if (o.product === "Storage") {
      if (d === "Buckets") return /* @__PURE__ */ e(zu, { config: o });
      if (d === "Configuration") return /* @__PURE__ */ e(Du, {});
    }
    if (o.product === "Serverless") {
      if (d === "Revisions") return /* @__PURE__ */ e(Pu, {});
      if (d === "Environment") return /* @__PURE__ */ e(Au, {});
    }
    return d === "Overview" ? /* @__PURE__ */ e(Nr, { config: o }) : d === "Subnets" ? /* @__PURE__ */ e(Iu, {}) : d === "Access control" ? /* @__PURE__ */ e(Ru, {}) : d === "Worker pools" ? /* @__PURE__ */ e(wr, {}) : /* @__PURE__ */ e(Nr, { config: o });
  };
  return /* @__PURE__ */ r(
    "main",
    {
      className: `${s ? "ml-[48px]" : "ml-[256px]"} ${i ? "mr-[320px]" : "mr-0"} mt-12 min-h-[calc(100vh-48px)] bg-[#f4f4f4] transition-all duration-200`,
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: [
        /* @__PURE__ */ e("div", { className: "bg-white w-full", children: /* @__PURE__ */ r("div", { className: "px-8 pt-4 pb-0 max-w-[1600px] mx-auto w-full flex flex-col gap-3", children: [
          /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[14px]", children: [
            /* @__PURE__ */ e(
              "button",
              {
                className: "text-[#0f62fe] hover:underline",
                style: { fontWeight: 400 },
                onClick: () => n(o.product === "Red Hat OpenShift" ? "/containers" : "/resources"),
                children: o.productCategory
              }
            ),
            /* @__PURE__ */ e(vn, { size: 14, className: "text-[#525252]" }),
            /* @__PURE__ */ e(
              "button",
              {
                className: "text-[#0f62fe] hover:underline",
                style: { fontWeight: 400 },
                onClick: () => n(o.product === "Red Hat OpenShift" ? "/containers/clusters" : "/resources"),
                children: o.product === "Red Hat OpenShift" ? "Clusters" : o.product
              }
            ),
            /* @__PURE__ */ e(vn, { size: 14, className: "text-[#525252]" }),
            /* @__PURE__ */ e("span", { className: "text-[#525252]", style: { fontWeight: 400 }, children: o.name })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex items-center gap-3 pb-4", children: [
            !m && /* @__PURE__ */ e(Bu, { product: o.product }),
            /* @__PURE__ */ e("h1", { className: "text-[28px] text-[#161616]", style: { fontWeight: 300 }, children: o.name }),
            m ? /* @__PURE__ */ e(he, { children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2 ml-auto", children: [
              /* @__PURE__ */ r("button", { className: "flex items-center gap-2 px-4 py-2 border border-[#0f62fe] text-[#0f62fe] text-[14px] hover:bg-[#e8e8e8] transition-colors", style: { fontWeight: 400 }, children: [
                "Actions ",
                /* @__PURE__ */ e(de, { size: 14 })
              ] }),
              /* @__PURE__ */ r("button", { className: "flex items-center gap-2 px-4 py-2 bg-[#161616] text-white text-[14px] hover:bg-[#393939] transition-colors", style: { fontWeight: 400 }, children: [
                "OpenShift web console ",
                /* @__PURE__ */ e(xt, { size: 14 })
              ] })
            ] }) }) : /* @__PURE__ */ e(Mu, { status: o.status })
          ] }),
          m && /* @__PURE__ */ r("div", { className: "flex items-center gap-2 pb-4 -mt-2", children: [
            /* @__PURE__ */ e(be, { size: 16, style: { color: "#198038" }, fill: "#198038", stroke: "white" }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Normal" })
          ] })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "bg-white w-full border-b border-[#e0e0e0]", children: /* @__PURE__ */ e("div", { className: "px-8 max-w-[1600px] mx-auto w-full", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-0", children: [
          o.tabs.map((f) => /* @__PURE__ */ e(
            "button",
            {
              className: `px-4 py-3 text-[14px] border-b-2 transition-colors ${d === f ? "border-[#0f62fe] text-[#161616]" : "border-transparent text-[#525252] hover:text-[#161616] hover:border-[#c6c6c6]"}`,
              style: { fontWeight: d === f ? 600 : 400 },
              onClick: () => u(f),
              children: f
            },
            f
          )),
          m && /* @__PURE__ */ r("div", { className: "flex items-center gap-2 ml-auto", children: [
            /* @__PURE__ */ e("span", { className: "inline-block px-2 py-0.5 bg-[#e0e0e0] rounded text-[12px] text-[#525252] truncate max-w-[140px]", style: { fontWeight: 400 }, children: "logging-instance..." }),
            /* @__PURE__ */ e("span", { className: "inline-block px-2 py-0.5 bg-[#e0e0e0] rounded text-[12px] text-[#525252] truncate max-w-[160px]", style: { fontWeight: 400 }, children: "logging-workspace..." })
          ] })
        ] }) }) }),
        /* @__PURE__ */ e("div", { className: "px-8 pt-6 pb-8 max-w-[1600px] mx-auto w-full", children: g() })
      ]
    }
  );
}
const Tu = [
  { label: "Serverless", count: 3 },
  { label: "Cluster management", count: 0 },
  { label: "Container registry", count: 0 }
], ju = [
  {
    title: "Run code, jobs, or container images",
    description: "Deploy on a fully managed, serverless platform",
    icon: /* @__PURE__ */ e(Rc, { size: 28, className: "text-[#161616]" }),
    link: ""
  },
  {
    title: "Create a cluster",
    description: "Modernize with OpenShift or Kubernetes",
    icon: /* @__PURE__ */ e(Nn, { size: 28, className: "text-[#161616]" }),
    link: "/containers/clusters/create"
  },
  {
    title: "Browse Deployable architectures",
    description: "Deploy common, compliant architectural patterns",
    icon: /* @__PURE__ */ e(cc, { size: 28, className: "text-[#161616]" }),
    link: ""
  }
];
function Vu() {
  const { collapsed: t } = we(), { isOpen: n } = ke(), a = pe();
  return /* @__PURE__ */ e(
    "main",
    {
      className: `${t ? "ml-[48px]" : "ml-[256px]"} ${n ? "mr-[320px]" : "mr-0"} mt-12 min-h-[calc(100vh-48px)] bg-[#f4f4f4] transition-all duration-200`,
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: /* @__PURE__ */ r("div", { className: "px-8 pt-10 pb-8 max-w-[1200px]", children: [
        /* @__PURE__ */ e("h1", { className: "text-[36px] text-[#161616] mb-2", style: { fontWeight: 300 }, children: "Run and manage containerized applications" }),
        /* @__PURE__ */ e("p", { className: "text-[16px] text-[#525252] mb-6", style: { fontWeight: 400 }, children: "From Kubernetes and Red Hat OpenShift, to Serverless solutions, we've got you covered" }),
        /* @__PURE__ */ r("div", { className: "flex items-start gap-3 bg-[#edf5ff] border-l-3 border-[#0f62fe] px-4 py-4 mb-8", children: [
          /* @__PURE__ */ e(Wt, { size: 20, className: "text-[#0f62fe] shrink-0 mt-0.5", fill: "#0f62fe", stroke: "white" }),
          /* @__PURE__ */ r("div", { className: "flex-1", children: [
            /* @__PURE__ */ e("p", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "50% savings for 6 months with promo code TRYCONTAINERS" }),
            /* @__PURE__ */ e("p", { className: "text-[13px] text-[#525252] mt-0.5", style: { fontWeight: 400 }, children: "Optimize enterprise container runtime costs when deploying IBM Kubernetes Service, Red Hat OpenShift on IBM Cloud, and IBM Code Engine workloads (excludes GPU profiles). Offer valid for net-new container accounts." })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              className: "text-[14px] text-[#0f62fe] hover:underline whitespace-nowrap shrink-0",
              style: { fontWeight: 400 },
              children: "Claim now"
            }
          )
        ] }),
        /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616] mb-4", style: { fontWeight: 300 }, children: "Jump in" }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-4 mb-10", children: ju.map((s) => /* @__PURE__ */ r(
          "div",
          {
            className: "bg-white p-6 cursor-pointer hover:bg-[#e8e8e8] transition-colors flex flex-col justify-between min-h-[180px]",
            onClick: () => s.link && a(s.link),
            children: [
              /* @__PURE__ */ r("div", { children: [
                /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616] mb-1", style: { fontWeight: 600 }, children: s.title }),
                /* @__PURE__ */ e("p", { className: "text-[13px] text-[#525252]", style: { fontWeight: 400 }, children: s.description })
              ] }),
              /* @__PURE__ */ e("div", { className: "mt-6", children: s.icon })
            ]
          },
          s.title
        )) }),
        /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616] mb-4", style: { fontWeight: 300 }, children: "Dashboard" }),
        /* @__PURE__ */ r("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ r("div", { className: "bg-white", children: [
            /* @__PURE__ */ e("div", { className: "px-4 pt-4 pb-3", children: /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Inventory" }) }),
            /* @__PURE__ */ e("div", { children: Tu.map((s) => /* @__PURE__ */ r(
              "div",
              {
                className: "flex items-center justify-between px-4 py-3 border-t border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: s.label }),
                  /* @__PURE__ */ e("span", { className: "text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: s.count })
                ]
              },
              s.label
            )) })
          ] }),
          /* @__PURE__ */ r("div", { className: "bg-white", children: [
            /* @__PURE__ */ e("div", { className: "px-4 pt-4 pb-3", children: /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Explore the docs" }) }),
            /* @__PURE__ */ e("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ e(at, { size: 56, className: "text-[#a8a8a8]" }) })
          ] })
        ] })
      ] })
    }
  );
}
const Cr = [
  "Name",
  "State",
  "Location",
  "Worker count",
  "Created",
  "Infrastructure",
  "Version"
], Fu = [
  {
    name: "iks-prod-cluster-01",
    state: "Normal",
    location: "us-south-1",
    workerCount: 6,
    created: "Feb 10, 2026",
    infrastructure: "VPC",
    version: "1.29.2_1538",
    orchestrator: "Kubernetes",
    resourceGroup: "default"
  },
  {
    name: "iks-staging-cluster-02",
    state: "Normal",
    location: "eu-de-1",
    workerCount: 3,
    created: "Jan 22, 2026",
    infrastructure: "VPC",
    version: "1.28.6_1552",
    orchestrator: "Kubernetes",
    resourceGroup: "staging"
  },
  {
    name: "iks-dev-cluster-03",
    state: "Critical",
    location: "us-south-2",
    workerCount: 2,
    created: "Mar 5, 2026",
    infrastructure: "Classic",
    version: "1.29.1_1535",
    orchestrator: "Kubernetes",
    resourceGroup: "default"
  }
];
function Uu({ state: t }) {
  return t === "Normal" ? /* @__PURE__ */ e(be, { size: 16, fill: "#198038", stroke: "white" }) : t === "Critical" ? /* @__PURE__ */ e(Je, { size: 16, fill: "#da1e28", stroke: "white" }) : t === "Warning" ? /* @__PURE__ */ e(Fe, { size: 16, fill: "#f1c21b", stroke: "white" }) : /* @__PURE__ */ e(be, { size: 16, fill: "#198038", stroke: "white" });
}
function Hu() {
  const { collapsed: t } = we(), { isOpen: n } = ke(), a = pe(), [s, i] = A(""), { clusters: l, removeCluster: c } = Dn(), { removeVisit: o } = nn(), [d, u] = A(/* @__PURE__ */ new Set()), m = [
    ...l,
    ...Fu.filter((f) => !d.has(f.name))
  ].filter(
    (f) => f.name.toLowerCase().includes(s.toLowerCase())
  ), g = (f) => {
    o(f.name), l.some((N) => N.name === f.name) ? c(f.name) : u((N) => new Set(N).add(f.name));
  };
  return /* @__PURE__ */ r(
    "main",
    {
      className: `${t ? "ml-[48px]" : "ml-[256px]"} ${n ? "mr-[320px]" : "mr-0"} mt-12 min-h-[calc(100vh-48px)] bg-[#f4f4f4] transition-all duration-200`,
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: [
        /* @__PURE__ */ e("div", { className: "bg-white border-b border-[#e0e0e0] w-full", children: /* @__PURE__ */ r("div", { className: "px-8 pt-4 pb-5 max-w-[1600px] mx-auto w-full", children: [
          /* @__PURE__ */ r("nav", { className: "flex items-center gap-1.5 text-[14px] mb-3", style: { fontWeight: 400 }, children: [
            /* @__PURE__ */ e(
              "button",
              {
                className: "text-[#0f62fe] hover:underline",
                style: { fontWeight: 400 },
                onClick: () => a("/"),
                children: "Home"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-[#525252]", children: "/" }),
            /* @__PURE__ */ e(
              "button",
              {
                className: "text-[#0f62fe] hover:underline",
                style: { fontWeight: 400 },
                onClick: () => a("/containers"),
                children: "Containers"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-[#525252]", children: "/" }),
            /* @__PURE__ */ e("span", { className: "text-[#525252]", children: "Clusters" })
          ] }),
          /* @__PURE__ */ r("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ e(
              "h1",
              {
                className: "text-[28px] text-[#161616]",
                style: { fontWeight: 300 },
                children: "Clusters"
              }
            ),
            /* @__PURE__ */ r(
              "button",
              {
                className: "flex items-center gap-2 px-4 py-2.5 bg-[#0f62fe] text-white text-[14px] hover:bg-[#0353e9] transition-colors",
                style: { fontWeight: 400 },
                onClick: () => a("/containers/clusters/create"),
                children: [
                  "Create cluster",
                  /* @__PURE__ */ e(Ve, { size: 16 })
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ r("div", { className: "px-8 pt-6 pb-8 max-w-[1600px] mx-auto w-full", children: [
          /* @__PURE__ */ r("div", { className: "flex items-center gap-0 mb-0 bg-white border-b border-[#e0e0e0]", children: [
            /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-4 py-2.5 border-r border-[#e0e0e0]", children: [
              /* @__PURE__ */ e("span", { className: "text-[13px] text-[#525252] whitespace-nowrap", style: { fontWeight: 400 }, children: "Resource group:" }),
              /* @__PURE__ */ r("button", { className: "flex items-center gap-1 text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: [
                "Filter...",
                /* @__PURE__ */ e(de, { size: 14, className: "text-[#525252]" })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-4 py-2.5 border-r border-[#e0e0e0]", children: [
              /* @__PURE__ */ e("span", { className: "text-[13px] text-[#525252] whitespace-nowrap", style: { fontWeight: 400 }, children: "Location:" }),
              /* @__PURE__ */ r("button", { className: "flex items-center gap-1 text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: [
                "Filter...",
                /* @__PURE__ */ e(de, { size: 14, className: "text-[#525252]" })
              ] })
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-4 py-2.5 flex-1", children: [
              /* @__PURE__ */ e(Ie, { size: 16, className: "text-[#a8a8a8] shrink-0" }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  placeholder: "Search...",
                  value: s,
                  onChange: (f) => i(f.target.value),
                  className: "bg-transparent outline-none text-[14px] text-[#161616] placeholder-[#a8a8a8] w-full",
                  style: { fontWeight: 400 }
                }
              )
            ] }),
            /* @__PURE__ */ e("button", { className: "p-3 hover:bg-[#e8e8e8] transition-colors text-[#525252] shrink-0", children: /* @__PURE__ */ e(Jt, { size: 16 }) })
          ] }),
          /* @__PURE__ */ e("div", { className: "bg-white overflow-x-auto", children: /* @__PURE__ */ r("table", { className: "w-full", children: [
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ r("tr", { className: "border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
              Cr.map((f) => /* @__PURE__ */ e(
                "th",
                {
                  className: "text-left px-4 py-3 text-[14px] text-[#161616]",
                  style: { fontWeight: 600 },
                  children: f
                },
                f
              )),
              /* @__PURE__ */ e("th", { className: "w-12 px-4 py-3" })
            ] }) }),
            /* @__PURE__ */ e("tbody", { children: m.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: Cr.length, className: "px-4 py-12", children: /* @__PURE__ */ r("div", { className: "flex flex-col items-start", children: [
              /* @__PURE__ */ e("div", { className: "mb-4", children: /* @__PURE__ */ r(
                "svg",
                {
                  width: "80",
                  height: "80",
                  viewBox: "0 0 80 80",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    /* @__PURE__ */ e("path", { d: "M20 25L40 15L60 25L60 55L40 65L20 55Z", fill: "#e8e8e8", stroke: "#c6c6c6", strokeWidth: "1" }),
                    /* @__PURE__ */ e("path", { d: "M20 25L40 35L40 65L20 55Z", fill: "#d8d8d8", stroke: "#c6c6c6", strokeWidth: "1" }),
                    /* @__PURE__ */ e("path", { d: "M60 25L40 35L40 65L60 55Z", fill: "#f4f4f4", stroke: "#c6c6c6", strokeWidth: "1" }),
                    /* @__PURE__ */ e("path", { d: "M20 25L40 15L60 25L40 35Z", fill: "#ffffff", stroke: "#c6c6c6", strokeWidth: "1" })
                  ]
                }
              ) }),
              /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616] mb-1", style: { fontWeight: 600 }, children: "No clusters" }),
              /* @__PURE__ */ e("p", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: 'The cluster list is empty. Click "Create cluster" to get started.' })
            ] }) }) }) : m.map((f) => /* @__PURE__ */ r(
              "tr",
              {
                className: "border-b border-[#e0e0e0] hover:bg-[#e8e8e8] transition-colors",
                children: [
                  /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
                    "button",
                    {
                      className: "text-[14px] text-[#0f62fe] hover:underline",
                      style: { fontWeight: 400 },
                      onClick: () => a(`/resources/${f.name}`),
                      children: f.name
                    }
                  ) }),
                  /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(Uu, { state: f.state }),
                    /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: f.state })
                  ] }) }),
                  /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: f.location }),
                  /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: f.workerCount }),
                  /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: f.created }),
                  /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: f.infrastructure }),
                  /* @__PURE__ */ e("td", { className: "px-4 py-3 text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: f.version }),
                  /* @__PURE__ */ e("td", { className: "px-4 py-3", children: /* @__PURE__ */ e(
                    "button",
                    {
                      className: "p-1 hover:bg-[#d6d6d6] rounded transition-colors text-[#525252]",
                      title: "Delete cluster",
                      onClick: () => g(f),
                      children: /* @__PURE__ */ e(Rn, { size: 16 })
                    }
                  ) })
                ]
              },
              f.name
            )) })
          ] }) })
        ] })
      ]
    }
  );
}
const Gu = {
  Infrastructure: { name: "Infrastructure", icon: /* @__PURE__ */ e(Ye, { size: 16 }) },
  Containers: { name: "Containers", icon: /* @__PURE__ */ e(ba, { size: 16 }) },
  "Backup and security": { name: "Backup and security", icon: /* @__PURE__ */ e(Nn, { size: 16 }) },
  Security: { name: "Security", icon: /* @__PURE__ */ e(Jc, { size: 16 }) },
  WatsonX: { name: "WatsonX", icon: /* @__PURE__ */ e(It, { size: 16 }) },
  Databases: { name: "Databases", icon: /* @__PURE__ */ e(na, { size: 16 }) },
  Observability: { name: "Observability", icon: /* @__PURE__ */ e(Cn, { size: 16 }) },
  "Platform Automation": { name: "Platform Automation", icon: /* @__PURE__ */ e(Jt, { size: 16 }) }
}, qu = [
  // Infrastructure
  {
    id: "vsi-infrastructure",
    title: "Virtual Server Instance Infrastructure",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Infrastructure"
  },
  {
    id: "vpc-landing-zone",
    title: "VPC Landing Zone Architecture",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Infrastructure"
  },
  {
    id: "vsi-on-vpc",
    title: "Virtual Servers on VPC",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "cloud",
    category: "Infrastructure"
  },
  {
    id: "slz-vpc",
    title: "Secure Landing Zone VPC",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Infrastructure"
  },
  {
    id: "power-infrastructure",
    title: "Power Systems Infrastructure",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "diamond",
    category: "Infrastructure"
  },
  {
    id: "bare-metal",
    title: "Bare Metal Servers",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "square",
    category: "Infrastructure"
  },
  {
    id: "vpc-multizone",
    title: "Multi-zone VPC Deployment",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "cloud",
    category: "Infrastructure"
  },
  {
    id: "satellite-location",
    title: "Satellite Location Services",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "circle",
    category: "Infrastructure"
  },
  // Containers
  {
    id: "openshift-cluster",
    title: "Red Hat OpenShift on IBM Cloud",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "cube",
    category: "Containers"
  },
  {
    id: "kubernetes-service",
    title: "IBM Cloud Kubernetes Service",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "cube",
    category: "Containers"
  },
  {
    id: "container-registry",
    title: "IBM Cloud Container Registry",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "cube",
    category: "Containers"
  },
  {
    id: "code-engine",
    title: "IBM Cloud Code Engine",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "cube",
    category: "Containers"
  },
  {
    id: "satellite-clusters",
    title: "Satellite Enabled Clusters",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "cube",
    category: "Containers"
  },
  {
    id: "openshift-data-foundation",
    title: "OpenShift Data Foundation",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "cube",
    category: "Containers"
  },
  {
    id: "redhat-marketplace",
    title: "Red Hat Marketplace",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "cube",
    category: "Containers"
  },
  {
    id: "turbonomic",
    title: "Turbonomic Platform",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "cube",
    category: "Containers"
  },
  // Backup and security
  {
    id: "backup-service",
    title: "Cloud Backup Service",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Backup and security"
  },
  {
    id: "cloud-backup",
    title: "IBM Cloud Backup",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Backup and security"
  },
  {
    id: "hyper-protect-crypto",
    title: "Hyper Protect Crypto Services",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Backup and security"
  },
  {
    id: "veeam-backup",
    title: "Veeam Backup & Replication",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Backup and security"
  },
  {
    id: "data-shield",
    title: "IBM Cloud Data Shield",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Backup and security"
  },
  {
    id: "security-compliance",
    title: "Security and Compliance Center",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Backup and security"
  },
  {
    id: "backup-restore",
    title: "Backup and Restore Service",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Backup and security"
  },
  {
    id: "cloud-object-storage-backup",
    title: "Cloud Object Storage Backup",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Backup and security"
  },
  // Security
  {
    id: "key-protect",
    title: "IBM Key Protect",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Security"
  },
  {
    id: "secrets-manager",
    title: "IBM Secrets Manager",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Security"
  },
  {
    id: "certificate-manager",
    title: "IBM Certificate Manager",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Security"
  },
  {
    id: "app-id",
    title: "IBM Cloud App ID",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Security"
  },
  {
    id: "security-advisor",
    title: "IBM Cloud Security Advisor",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Security"
  },
  {
    id: "guardium",
    title: "IBM Security Guardium",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Security"
  },
  {
    id: "qradar",
    title: "IBM Security QRadar",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Security"
  },
  {
    id: "security-verify",
    title: "IBM Security Verify",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "shield",
    category: "Security"
  },
  // WatsonX
  {
    id: "watsonx-ai",
    title: "watsonx.ai",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "circle",
    category: "WatsonX"
  },
  {
    id: "watsonx-data",
    title: "watsonx.data",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "circle",
    category: "WatsonX"
  },
  {
    id: "watsonx-governance",
    title: "watsonx.governance",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "circle",
    category: "WatsonX"
  },
  {
    id: "watson-assistant",
    title: "Watson Assistant",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "circle",
    category: "WatsonX"
  },
  {
    id: "watson-discovery",
    title: "Watson Discovery",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "circle",
    category: "WatsonX"
  },
  {
    id: "watson-nlp",
    title: "Watson Natural Language Processing",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "circle",
    category: "WatsonX"
  },
  {
    id: "watson-studio",
    title: "Watson Studio",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "circle",
    category: "WatsonX"
  },
  {
    id: "watson-machine-learning",
    title: "Watson Machine Learning",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "circle",
    category: "WatsonX"
  },
  // Databases
  {
    id: "db2-warehouse",
    title: "Db2 Warehouse on Cloud",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "hexagon",
    category: "Databases"
  },
  {
    id: "cloudant",
    title: "IBM Cloudant",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "hexagon",
    category: "Databases"
  },
  {
    id: "databases-postgresql",
    title: "IBM Cloud Databases for PostgreSQL",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "hexagon",
    category: "Databases"
  },
  {
    id: "databases-mongodb",
    title: "IBM Cloud Databases for MongoDB",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "hexagon",
    category: "Databases"
  },
  {
    id: "databases-redis",
    title: "IBM Cloud Databases for Redis",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "hexagon",
    category: "Databases"
  },
  {
    id: "databases-elasticsearch",
    title: "IBM Cloud Databases for Elasticsearch",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "hexagon",
    category: "Databases"
  },
  {
    id: "databases-mysql",
    title: "IBM Cloud Databases for MySQL",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "hexagon",
    category: "Databases"
  },
  {
    id: "databases-etcd",
    title: "IBM Cloud Databases for etcd",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "hexagon",
    category: "Databases"
  },
  // Observability
  {
    id: "log-analysis",
    title: "IBM Cloud Log Analysis",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "square",
    category: "Observability"
  },
  {
    id: "monitoring",
    title: "IBM Cloud Monitoring",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "square",
    category: "Observability"
  },
  {
    id: "activity-tracker",
    title: "IBM Cloud Activity Tracker",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "square",
    category: "Observability"
  },
  {
    id: "cloud-logs",
    title: "IBM Cloud Logs",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "square",
    category: "Observability"
  },
  {
    id: "metrics-router",
    title: "IBM Cloud Metrics Router",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "square",
    category: "Observability"
  },
  {
    id: "instana",
    title: "IBM Instana Observability",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "square",
    category: "Observability"
  },
  {
    id: "event-notifications",
    title: "IBM Event Notifications",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "square",
    category: "Observability"
  },
  {
    id: "apm",
    title: "Application Performance Monitoring",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "square",
    category: "Observability"
  },
  // Platform Automation
  {
    id: "terraform",
    title: "Terraform on IBM Cloud",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "grid",
    category: "Platform Automation"
  },
  {
    id: "schematics",
    title: "IBM Cloud Schematics",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "grid",
    category: "Platform Automation"
  },
  {
    id: "ansible",
    title: "Ansible Automation Platform",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "grid",
    category: "Platform Automation"
  },
  {
    id: "projects",
    title: "IBM Cloud Projects",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "grid",
    category: "Platform Automation"
  },
  {
    id: "toolchain",
    title: "IBM Cloud Toolchain",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "grid",
    category: "Platform Automation"
  },
  {
    id: "continuous-delivery",
    title: "IBM Continuous Delivery",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "grid",
    category: "Platform Automation"
  },
  {
    id: "devops-insights",
    title: "IBM DevOps Insights",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }, { label: "Owned", color: "blue" }],
    iconColor: "#0f62fe",
    iconType: "grid",
    category: "Platform Automation"
  },
  {
    id: "pipeline-service",
    title: "IBM Cloud Pipeline Service",
    provider: "By IBM",
    description: "DevSecOps provides a set of predefined continuous integration, continuous deployment and continuous toolchain templates.",
    tags: [{ label: "Deployable Architecture", color: "purple" }],
    iconColor: "#0f62fe",
    iconType: "grid",
    category: "Platform Automation"
  }
], Ku = [
  "All services",
  "Highlights",
  "Deployable architectures",
  "Cloud essentials",
  "IBM products",
  "Partner products",
  "Professional services"
];
function Yu({ type: t, color: n }) {
  switch (t) {
    case "shield":
      return /* @__PURE__ */ r("svg", { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("path", { d: "M20 4L6 10v10c0 9.55 5.97 18.48 14 20 8.03-1.52 14-10.45 14-20V10L20 4z", fill: n, opacity: "0.15" }),
        /* @__PURE__ */ e("path", { d: "M20 4L6 10v10c0 9.55 5.97 18.48 14 20 8.03-1.52 14-10.45 14-20V10L20 4z", stroke: n, strokeWidth: "1.5", fill: "none" }),
        /* @__PURE__ */ e("circle", { cx: "20", cy: "18", r: "4", fill: n, opacity: "0.6" })
      ] });
    case "circle":
      return /* @__PURE__ */ r("svg", { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "14", fill: n, opacity: "0.15" }),
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "14", stroke: n, strokeWidth: "1.5" }),
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "6", fill: n, opacity: "0.5" }),
        /* @__PURE__ */ e("circle", { cx: "20", cy: "14", r: "2", fill: n }),
        /* @__PURE__ */ e("circle", { cx: "20", cy: "26", r: "2", fill: n })
      ] });
    case "hexagon":
      return /* @__PURE__ */ r("svg", { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("polygon", { points: "20,4 34,12 34,28 20,36 6,28 6,12", fill: n, opacity: "0.15" }),
        /* @__PURE__ */ e("polygon", { points: "20,4 34,12 34,28 20,36 6,28 6,12", stroke: n, strokeWidth: "1.5", fill: "none" }),
        /* @__PURE__ */ e("polygon", { points: "20,13 27,17 27,25 20,29 13,25 13,17", fill: n, opacity: "0.4" })
      ] });
    case "square":
      return /* @__PURE__ */ r("svg", { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "6", y: "6", width: "28", height: "28", rx: "3", fill: n, opacity: "0.15" }),
        /* @__PURE__ */ e("rect", { x: "6", y: "6", width: "28", height: "28", rx: "3", stroke: n, strokeWidth: "1.5", fill: "none" }),
        /* @__PURE__ */ e("rect", { x: "14", y: "14", width: "12", height: "12", rx: "2", fill: n, opacity: "0.5" })
      ] });
    case "diamond":
      return /* @__PURE__ */ r("svg", { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "6", y: "6", width: "28", height: "28", rx: "3", fill: n, opacity: "0.15", transform: "rotate(0 20 20)" }),
        /* @__PURE__ */ e("polygon", { points: "20,4 36,20 20,36 4,20", fill: n, opacity: "0.15" }),
        /* @__PURE__ */ e("polygon", { points: "20,4 36,20 20,36 4,20", stroke: n, strokeWidth: "1.5", fill: "none" }),
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "5", fill: n, opacity: "0.5" })
      ] });
    case "cloud":
      return /* @__PURE__ */ r("svg", { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("path", { d: "M12 28h18a7 7 0 00-1-13.9A10 10 0 0010 18a6 6 0 002 10z", fill: n, opacity: "0.15" }),
        /* @__PURE__ */ e("path", { d: "M12 28h18a7 7 0 00-1-13.9A10 10 0 0010 18a6 6 0 002 10z", stroke: n, strokeWidth: "1.5", fill: "none" }),
        /* @__PURE__ */ e("circle", { cx: "22", cy: "21", r: "3", fill: n, opacity: "0.5" })
      ] });
    case "cube":
      return /* @__PURE__ */ r("svg", { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("path", { d: "M20 4L6 12v16l14 8 14-8V12L20 4z", fill: n, opacity: "0.15" }),
        /* @__PURE__ */ e("path", { d: "M20 4L6 12v16l14 8 14-8V12L20 4z", stroke: n, strokeWidth: "1.5", fill: "none" }),
        /* @__PURE__ */ e("path", { d: "M6 12l14 8 14-8", stroke: n, strokeWidth: "1", opacity: "0.4" }),
        /* @__PURE__ */ e("path", { d: "M20 20v16", stroke: n, strokeWidth: "1", opacity: "0.4" })
      ] });
    case "grid":
      return /* @__PURE__ */ r("svg", { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("rect", { x: "6", y: "6", width: "12", height: "12", rx: "2", fill: n, opacity: "0.3" }),
        /* @__PURE__ */ e("rect", { x: "22", y: "6", width: "12", height: "12", rx: "2", fill: n, opacity: "0.2" }),
        /* @__PURE__ */ e("rect", { x: "6", y: "22", width: "12", height: "12", rx: "2", fill: n, opacity: "0.2" }),
        /* @__PURE__ */ e("rect", { x: "22", y: "22", width: "12", height: "12", rx: "2", fill: n, opacity: "0.15" }),
        /* @__PURE__ */ e("rect", { x: "6", y: "6", width: "28", height: "28", rx: "3", stroke: n, strokeWidth: "1.5", fill: "none" })
      ] });
    default:
      return /* @__PURE__ */ r("svg", { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", children: [
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "14", fill: n, opacity: "0.15" }),
        /* @__PURE__ */ e("circle", { cx: "20", cy: "20", r: "14", stroke: n, strokeWidth: "1.5" })
      ] });
  }
}
function Ju({ tag: t }) {
  const n = {
    blue: "bg-[#d0e2ff] text-[#0043ce]",
    purple: "bg-[#e8daff] text-[#6929c4]",
    teal: "bg-[#d9fbfb] text-[#005d5d]",
    green: "bg-[#defbe6] text-[#198038]",
    gray: "bg-[#e0e0e0] text-[#393939]"
  }, a = n[t.color || "gray"] || n.gray;
  return /* @__PURE__ */ e(
    "span",
    {
      className: `inline-block px-2 py-0.5 rounded text-[11px] ${a}`,
      style: { fontWeight: 400 },
      children: t.label
    }
  );
}
function Zu({
  item: t
}) {
  return /* @__PURE__ */ e("div", { className: "bg-white px-4 py-5 hover:bg-[#e8e8e8] transition-colors cursor-pointer", children: /* @__PURE__ */ r("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ e("div", { className: "shrink-0", children: /* @__PURE__ */ e(Yu, { type: t.iconType, color: t.iconColor }) }),
    /* @__PURE__ */ r("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ e(
        "h3",
        {
          className: "text-[14px] text-[#161616] mb-0.5",
          style: { fontWeight: 600 },
          children: t.title
        }
      ),
      /* @__PURE__ */ e(
        "p",
        {
          className: "text-[12px] text-[#525252] mb-3",
          style: { fontWeight: 400 },
          children: t.description
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-1 flex-wrap", children: t.tags.map((n, a) => /* @__PURE__ */ e(Ju, { tag: n }, a)) })
    ] })
  ] }) });
}
function Qu({
  category: t,
  items: n,
  expanded: a,
  onToggle: s
}) {
  const i = Gu[t], l = pe(), c = (o) => {
    o.preventDefault(), t === "Containers" && l("/containers");
  };
  return /* @__PURE__ */ r("div", { className: "bg-white", children: [
    /* @__PURE__ */ r(
      "button",
      {
        className: "w-full flex items-center justify-between px-4 py-4 hover:bg-[#e8e8e8] transition-colors",
        onClick: s,
        children: [
          /* @__PURE__ */ r("div", { className: "flex items-center gap-2 text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: [
            i.icon,
            /* @__PURE__ */ e("span", { children: i.name }),
            /* @__PURE__ */ r("span", { className: "text-[#525252] text-[14px]", style: { fontWeight: 400 }, children: [
              "(",
              n.length,
              ")"
            ] })
          ] }),
          a ? /* @__PURE__ */ e(Ct, { size: 16, className: "text-[#525252]" }) : /* @__PURE__ */ e(de, { size: 16, className: "text-[#525252]" })
        ]
      }
    ),
    /* @__PURE__ */ e("div", { className: "px-4 pb-3 pt-1", children: /* @__PURE__ */ r(
      "a",
      {
        href: "#",
        className: "text-[14px] text-[#0f62fe] hover:underline flex items-center gap-1",
        style: { fontWeight: 400 },
        onClick: c,
        children: [
          "Explore",
          /* @__PURE__ */ e(Ke, { size: 14 })
        ]
      }
    ) }),
    a && /* @__PURE__ */ e("div", { className: "grid grid-cols-4 gap-px bg-white p-4", children: n.map((o) => /* @__PURE__ */ e(Zu, { item: o }, o.id)) })
  ] });
}
function Xu() {
  const [t, n] = A("All services"), [a, s] = A(""), i = pe(), { collapsed: l } = we(), { isOpen: c } = ke(), [o, d] = A({
    Infrastructure: !0,
    Containers: !1,
    "Backup and security": !1,
    Security: !1,
    WatsonX: !1,
    Databases: !1,
    Observability: !1,
    "Platform Automation": !1
  }), u = (v) => {
    d((w) => ({
      ...w,
      [v]: !w[v]
    }));
  }, h = () => {
    const w = Object.values(o).some((S) => !S);
    d({
      Infrastructure: w,
      Containers: w,
      "Backup and security": w,
      Security: w,
      WatsonX: w,
      Databases: w,
      Observability: w,
      "Platform Automation": w
    });
  }, m = Object.values(o).every((v) => v), f = qu.filter((v) => {
    if (a.trim()) {
      const w = a.toLowerCase();
      return v.title.toLowerCase().includes(w) || v.description.toLowerCase().includes(w) || v.tags.some((S) => S.label.toLowerCase().includes(w));
    }
    return !0;
  }).reduce((v, w) => (v[w.category] || (v[w.category] = []), v[w.category].push(w), v), {}), N = (v) => a.trim() ? f[v] && f[v].length > 0 : o[v];
  return /* @__PURE__ */ r(
    "main",
    {
      className: `${l ? "ml-[48px]" : "ml-[256px]"} ${c ? "mr-[320px]" : "mr-0"} mt-12 min-h-[calc(100vh-48px)] bg-[#f4f4f4] transition-all duration-200`,
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: [
        /* @__PURE__ */ e("div", { className: "bg-white w-full", children: /* @__PURE__ */ r("div", { className: "px-8 pt-4 pb-0 max-w-[1600px] mx-auto w-full flex flex-col gap-1", children: [
          /* @__PURE__ */ r("div", { className: "flex items-center gap-1 text-[14px]", children: [
            /* @__PURE__ */ e(
              "button",
              {
                className: "text-[#0f62fe] hover:underline",
                style: { fontWeight: 400 },
                onClick: () => i("/"),
                children: "Home"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-[#525252]", children: "/" }),
            /* @__PURE__ */ e("span", { className: "text-[#525252]", style: { fontWeight: 400 }, children: "Products and hubs" })
          ] }),
          /* @__PURE__ */ e(
            "h1",
            {
              className: "text-[28px] text-[#161616] pb-4",
              style: { fontWeight: 300 },
              children: "Products and hubs"
            }
          )
        ] }) }),
        /* @__PURE__ */ e("div", { className: "bg-white w-full", children: /* @__PURE__ */ e("div", { className: "px-8 max-w-[1600px] mx-auto w-full", children: /* @__PURE__ */ e("div", { className: "flex items-center gap-0", children: Ku.map((v) => /* @__PURE__ */ e(
          "button",
          {
            className: `px-4 py-3 text-[14px] border-b-2 transition-colors ${t === v ? "border-[#0f62fe] text-[#161616]" : "border-transparent text-[#525252] hover:text-[#161616] hover:border-[#c6c6c6]"}`,
            style: {
              fontWeight: t === v ? 600 : 400
            },
            onClick: () => n(v),
            children: v
          },
          v
        )) }) }) }),
        /* @__PURE__ */ r("div", { className: "px-8 pt-6 pb-8 max-w-[1600px] mx-auto w-full flex flex-col gap-5", children: [
          /* @__PURE__ */ r("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-4 py-2 bg-white min-w-[280px] w-[320px]", children: [
              /* @__PURE__ */ e(Ie, { size: 16, className: "text-[#525252] shrink-0" }),
              /* @__PURE__ */ e(
                "input",
                {
                  type: "text",
                  placeholder: "Search",
                  value: a,
                  onChange: (v) => s(v.target.value),
                  className: "bg-transparent outline-none text-[14px] text-[#161616] placeholder-[#a8a8a8] w-full",
                  style: { fontWeight: 400 }
                }
              )
            ] }),
            /* @__PURE__ */ r("div", { className: "flex items-center gap-4", children: [
              !a.trim() && /* @__PURE__ */ e(
                "button",
                {
                  className: "text-[14px] text-[#0f62fe] hover:underline",
                  style: { fontWeight: 400 },
                  onClick: h,
                  children: m ? "Collapse all" : "Expand all"
                }
              ),
              /* @__PURE__ */ r("button", { className: "flex items-center gap-2 text-[14px] text-[#0f62fe] hover:underline", style: { fontWeight: 400 }, children: [
                /* @__PURE__ */ e(va, { size: 14 }),
                "Filters"
              ] }),
              /* @__PURE__ */ r("button", { className: "flex items-center gap-1 text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: [
                "Relevance",
                /* @__PURE__ */ e(de, { size: 14, className: "text-[#525252]" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: Object.entries(f).map(([v, w]) => /* @__PURE__ */ e(
            Qu,
            {
              category: v,
              items: w,
              expanded: N(v),
              onToggle: () => u(v)
            },
            v
          )) })
        ] })
      ]
    }
  );
}
const eh = ["Create", "Pricing", "About"], th = [
  {
    label: "Cluster encryption",
    price: "View pricing",
    details: ["Service: Key Protect"]
  },
  {
    label: "Image registry backup",
    price: "View pricing",
    details: [
      "Service: Cloud Object Storage",
      "Name: Cloud Object Storage ar",
      "Location: Global",
      "Plan: Standard"
    ]
  },
  {
    label: "Ingress secrets management",
    price: "View pricing",
    details: [
      "Service: IBM Cloud Secrets Manager",
      "Instance: thomas-dns-test-2",
      "Group: default",
      "Location: Frankfurt (eu-de)",
      "Plan: Trial"
    ]
  },
  {
    label: "Logging",
    price: "View pricing",
    details: [
      "Service: Cloud Logs",
      "Name: Cloud Logs-Do",
      "Location: Dallas (us-south)",
      "Plan: Standard"
    ]
  },
  {
    label: "Monitoring",
    price: "View pricing",
    details: ["Service: IBM Cloud Monitoring"]
  }
];
function Wr({
  title: t,
  description: n,
  selected: a,
  onClick: s,
  icon: i
}) {
  return /* @__PURE__ */ r(
    "button",
    {
      onClick: s,
      className: `relative text-left p-5 bg-white flex flex-col justify-between min-h-[140px] transition-colors hover:bg-[#e8e8e8] ${a ? "outline outline-2 outline-[#0f62fe]" : ""}`,
      children: [
        a && /* @__PURE__ */ e("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ e(be, { size: 20, fill: "#0f62fe", stroke: "white" }) }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ e(
            "h4",
            {
              className: "text-[14px] text-[#161616] mb-2",
              style: { fontWeight: 600 },
              children: t
            }
          ),
          /* @__PURE__ */ e(
            "p",
            {
              className: "text-[12px] text-[#525252]",
              style: { fontWeight: 400 },
              children: n
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: "mt-3", children: i })
      ]
    }
  );
}
function qn({
  title: t,
  description: n,
  selected: a,
  onClick: s
}) {
  return /* @__PURE__ */ r(
    "button",
    {
      onClick: s,
      className: `relative text-left p-5 bg-white flex flex-col min-h-[120px] transition-colors hover:bg-[#e8e8e8] ${a ? "outline outline-2 outline-[#0f62fe]" : ""}`,
      children: [
        a && /* @__PURE__ */ e("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ e(be, { size: 20, fill: "#0f62fe", stroke: "white" }) }),
        /* @__PURE__ */ e(
          "h4",
          {
            className: "text-[14px] text-[#161616] mb-2",
            style: { fontWeight: 600 },
            children: t
          }
        ),
        /* @__PURE__ */ e(
          "p",
          {
            className: "text-[12px] text-[#525252]",
            style: { fontWeight: 400 },
            children: n
          }
        )
      ]
    }
  );
}
function nh({ onClickCreate: t }) {
  return /* @__PURE__ */ e("aside", { className: "w-[320px] shrink-0 bg-white border-l border-[#e0e0e0] sticky top-12 h-[calc(100vh-48px)] overflow-y-auto", children: /* @__PURE__ */ r("div", { className: "px-5 pt-5 pb-4", children: [
    /* @__PURE__ */ r("div", { className: "flex items-center justify-between mb-5", children: [
      /* @__PURE__ */ e(
        "h2",
        {
          className: "text-[16px] text-[#161616]",
          style: { fontWeight: 600 },
          children: "Summary"
        }
      ),
      /* @__PURE__ */ r("button", { className: "flex items-center gap-1 text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: [
        "United States",
        /* @__PURE__ */ e(de, { size: 14, className: "text-[#525252]" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "mb-4 pb-4 border-b border-[#e0e0e0]", children: /* @__PURE__ */ e(
      "p",
      {
        className: "text-[13px] text-[#525252] mb-1",
        style: { fontWeight: 400 },
        children: "OpenShift cluster"
      }
    ) }),
    /* @__PURE__ */ e("div", { className: "mb-4 pb-4 border-b border-[#e0e0e0]", children: /* @__PURE__ */ r("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ e(
          "p",
          {
            className: "text-[13px] text-[#161616] mb-1",
            style: { fontWeight: 600 },
            children: "Worker nodes"
          }
        ),
        /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "bx2.4x16 - 4 vCPUs 16GB RAM" }),
        /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Virtual - shared" }),
        /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "x86-64" }),
        /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "RHCOS" })
      ] }),
      /* @__PURE__ */ e(
        "span",
        {
          className: "text-[13px] text-[#161616] whitespace-nowrap",
          style: { fontWeight: 600 },
          children: "US$2.50/hr"
        }
      )
    ] }) }),
    /* @__PURE__ */ r("div", { className: "mb-4 pb-4 border-b border-[#e0e0e0]", children: [
      /* @__PURE__ */ e(
        "p",
        {
          className: "text-[13px] text-[#161616] mb-1",
          style: { fontWeight: 600 },
          children: "Usage-based charges"
        }
      ),
      /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "The charges for these services are based on actual usage after provisioning." })
    ] }),
    th.map((n, a) => /* @__PURE__ */ r(
      "div",
      {
        className: "mb-4 pb-4 border-b border-[#e0e0e0]",
        children: [
          /* @__PURE__ */ r("div", { className: "flex items-start justify-between mb-1", children: [
            /* @__PURE__ */ e(
              "p",
              {
                className: "text-[13px] text-[#161616]",
                style: { fontWeight: 600 },
                children: n.label
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                className: "text-[12px] text-[#0f62fe] hover:underline whitespace-nowrap ml-2",
                style: { fontWeight: 400 },
                children: n.price
              }
            )
          ] }),
          n.details.map((s, i) => /* @__PURE__ */ e(
            "p",
            {
              className: "text-[12px] text-[#525252]",
              style: { fontWeight: 400 },
              children: s
            },
            i
          ))
        ]
      },
      a
    )),
    /* @__PURE__ */ r("div", { className: "flex items-center justify-between mb-2 pt-2", children: [
      /* @__PURE__ */ e(
        "p",
        {
          className: "text-[14px] text-[#161616]",
          style: { fontWeight: 600 },
          children: "Total estimated cost"
        }
      ),
      /* @__PURE__ */ e(
        "p",
        {
          className: "text-[14px] text-[#161616]",
          style: { fontWeight: 600 },
          children: "US$1,825.76/mo"
        }
      )
    ] }),
    /* @__PURE__ */ r("p", { className: "text-[11px] text-[#525252] mb-6", style: { fontWeight: 400 }, children: [
      "Additional charges for",
      " ",
      /* @__PURE__ */ e("span", { className: "underline", children: "networking" }),
      " and",
      " ",
      /* @__PURE__ */ e("span", { className: "underline", children: "bandwidth" }),
      " might apply.",
      /* @__PURE__ */ e("br", {}),
      "Actual monthly total will vary with",
      " ",
      /* @__PURE__ */ e("span", { className: "text-[#0f62fe] underline", children: "tiered pricing" }),
      ".",
      /* @__PURE__ */ e("br", {}),
      "Estimate does not include usage-based charges."
    ] }),
    /* @__PURE__ */ e(
      "button",
      {
        className: "w-full py-3 px-4 bg-[#0f62fe] text-white text-[14px] hover:bg-[#0353e9] transition-colors mb-2",
        style: { fontWeight: 400 },
        onClick: t,
        children: "Create"
      }
    ),
    /* @__PURE__ */ e(
      "button",
      {
        className: "w-full py-3 px-4 bg-white border border-[#0f62fe] text-[#0f62fe] text-[14px] hover:bg-[#d0e2ff] transition-colors",
        style: { fontWeight: 400 },
        children: "Add to estimate"
      }
    )
  ] }) });
}
function ah() {
  const [t, n] = A("Create"), [a, s] = A("openshift"), [i, l] = A("vpc"), [c, o] = A(""), d = pe(), { collapsed: u, setCollapsed: h } = we(), { isOpen: m } = ke(), { addCluster: g, clusters: f } = Dn(), N = Me(() => {
    const v = a === "openshift" ? "Red Hat OpenShift" : "IBM Kubernetes Service", w = i.charAt(0).toUpperCase() + i.slice(1), S = a === "openshift" ? "4.15.22_openshift" : "1.29.6_kubernetes";
    let W = 0;
    for (let z = 0; z < f.length; z++) {
      const D = f[z].name.match(/^Cluster(\d+)$/);
      if (D) {
        const b = parseInt(D[1], 10);
        b > W && (W = b);
      }
    }
    const R = W + 1, E = `Cluster${String(R).padStart(2, "0")}`;
    g({
      name: E,
      state: "Normal",
      location: "Dallas (us-south)",
      workerCount: 3,
      created: "Mar 17, 2026",
      infrastructure: w,
      version: S,
      orchestrator: v,
      resourceGroup: "default"
    }), d("/containers/clusters");
  }, [a, i, g, f, d]);
  return X(() => (h(!0), () => {
    h(!1);
  }), [h]), /* @__PURE__ */ r(
    "div",
    {
      className: `${u ? "ml-[48px]" : "ml-[256px]"} ${m ? "mr-[320px]" : "mr-0"} mt-12 min-h-[calc(100vh-48px)] bg-[#f4f4f4] transition-all duration-200 flex`,
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: [
        /* @__PURE__ */ r("main", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e("div", { className: "bg-white w-full", children: /* @__PURE__ */ r("div", { className: "px-8 pt-4 pb-0 max-w-[1600px] mx-auto w-full flex flex-col gap-1", children: [
            /* @__PURE__ */ r("nav", { className: "flex items-center gap-1.5 text-[14px]", style: { fontWeight: 400 }, children: [
              /* @__PURE__ */ e(
                "button",
                {
                  className: "text-[#0f62fe] hover:underline",
                  style: { fontWeight: 400 },
                  onClick: () => d("/"),
                  children: "Home"
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-[#525252]", children: "/" }),
              /* @__PURE__ */ e(
                "button",
                {
                  className: "text-[#0f62fe] hover:underline",
                  style: { fontWeight: 400 },
                  onClick: () => d("/containers"),
                  children: "Containers"
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-[#525252]", children: "/" }),
              /* @__PURE__ */ e(
                "button",
                {
                  className: "text-[#0f62fe] hover:underline",
                  style: { fontWeight: 400 },
                  onClick: () => d("/containers/clusters"),
                  children: "Clusters"
                }
              )
            ] }),
            /* @__PURE__ */ e(
              "h1",
              {
                className: "text-[28px] text-[#161616] pb-4",
                style: { fontWeight: 300 },
                children: "Red Hat OpenShift on IBM Cloud"
              }
            )
          ] }) }),
          /* @__PURE__ */ e("div", { className: "bg-white w-full", children: /* @__PURE__ */ e("div", { className: "px-8 max-w-[1600px] mx-auto w-full", children: /* @__PURE__ */ e("div", { className: "flex items-center gap-0", children: eh.map((v) => /* @__PURE__ */ e(
            "button",
            {
              className: `px-4 py-3 text-[14px] border-b-2 transition-colors ${t === v ? "border-[#0f62fe] text-[#161616]" : "border-transparent text-[#525252] hover:text-[#161616] hover:border-[#c6c6c6]"}`,
              style: {
                fontWeight: t === v ? 600 : 400
              },
              onClick: () => n(v),
              children: v
            },
            v
          )) }) }) }),
          /* @__PURE__ */ r("div", { className: "px-8 pt-6 pb-8 max-w-[1600px] mx-auto w-full flex flex-col gap-8", children: [
            /* @__PURE__ */ r("section", { children: [
              /* @__PURE__ */ e(
                "h2",
                {
                  className: "text-[20px] text-[#161616] mb-1",
                  style: { fontWeight: 300 },
                  children: "Orchestrator"
                }
              ),
              /* @__PURE__ */ e(
                "p",
                {
                  className: "text-[14px] text-[#525252] mb-4",
                  style: { fontWeight: 400 },
                  children: "Choose the orchestration platform for your cluster."
                }
              ),
              /* @__PURE__ */ r("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[700px]", children: [
                /* @__PURE__ */ e(
                  Wr,
                  {
                    title: "Red Hat OpenShift",
                    description: "Deploy and secure hybrid workloads with developer-focused tools and integrations.",
                    selected: a === "openshift",
                    onClick: () => s("openshift"),
                    icon: /* @__PURE__ */ r("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [
                      /* @__PURE__ */ e("path", { d: "M12 2L2 7v10l10 5 10-5V7L12 2z", fill: "#ee0000", opacity: "0.85" }),
                      /* @__PURE__ */ e("path", { d: "M7 9.5l5-2.5 5 2.5v5l-5 2.5-5-2.5v-5z", fill: "white", opacity: "0.3" })
                    ] })
                  }
                ),
                /* @__PURE__ */ e(
                  Wr,
                  {
                    title: "IBM Kubernetes Service",
                    description: "Automate deployments and manage your containerized apps in a native Kubernetes experience.",
                    selected: a === "kubernetes",
                    onClick: () => s("kubernetes"),
                    icon: /* @__PURE__ */ r("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [
                      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10", fill: "#326ce5", opacity: "0.15" }),
                      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10", stroke: "#326ce5", strokeWidth: "1.5" }),
                      /* @__PURE__ */ e("path", { d: "M12 6v12M6 12h12M8 8l8 8M16 8l-8 8", stroke: "#326ce5", strokeWidth: "0.8" })
                    ] })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ r(
              "section",
              {
                className: "relative p-6 overflow-hidden",
                style: {
                  background: "linear-gradient(135deg, #edf5ff 0%, #d0e2ff 50%, #a6c8ff 100%)"
                },
                children: [
                  /* @__PURE__ */ r("div", { className: "relative z-10 max-w-[600px]", children: [
                    /* @__PURE__ */ e(
                      "h3",
                      {
                        className: "text-[16px] text-[#161616] mb-2",
                        style: { fontWeight: 600 },
                        children: "Explore Red Hat OpenShift on IBM Cloud deployable architectures"
                      }
                    ),
                    /* @__PURE__ */ r(
                      "p",
                      {
                        className: "text-[14px] text-[#525252] mb-3",
                        style: { fontWeight: 400 },
                        children: [
                          "Quickly get started with easy-to-deploy solutions built for common workloads.",
                          " ",
                          /* @__PURE__ */ r(
                            "button",
                            {
                              className: "text-[#0f62fe] hover:underline inline-flex items-center gap-1",
                              style: { fontWeight: 400 },
                              children: [
                                "Learn more",
                                /* @__PURE__ */ e(xt, { size: 12 })
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ e(
                      "button",
                      {
                        className: "text-[14px] text-[#0f62fe] hover:underline",
                        style: { fontWeight: 400 },
                        children: "Landing zone for containerized applications with OpenShift"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e(
                    "div",
                    {
                      className: "absolute right-0 bottom-0 w-[280px] h-full opacity-40",
                      style: {
                        background: "radial-gradient(ellipse at 80% 80%, #a6c8ff 0%, transparent 70%)"
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ r("section", { children: [
              /* @__PURE__ */ e(
                "h2",
                {
                  className: "text-[20px] text-[#161616] mb-1",
                  style: { fontWeight: 300 },
                  children: "Infrastructure"
                }
              ),
              /* @__PURE__ */ r(
                "p",
                {
                  className: "text-[14px] text-[#525252] mb-4",
                  style: { fontWeight: 400 },
                  children: [
                    "Choose the network and compute environment to run your cluster.",
                    " ",
                    /* @__PURE__ */ e(
                      "button",
                      {
                        className: "text-[#0f62fe] hover:underline",
                        style: { fontWeight: 400 },
                        children: "Learn more"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[700px]", children: [
                /* @__PURE__ */ e(
                  qn,
                  {
                    title: "VPC",
                    description: "Create a fully customizable, software-defined virtual network with superior isolation using IBM Cloud VPC.",
                    selected: i === "vpc",
                    onClick: () => l("vpc")
                  }
                ),
                /* @__PURE__ */ e(
                  qn,
                  {
                    title: "Classic",
                    description: "Run your cluster with native subnet and VLAN networking on our classic infrastructure.",
                    selected: i === "classic",
                    onClick: () => l("classic")
                  }
                ),
                /* @__PURE__ */ e(
                  qn,
                  {
                    title: "Satellite",
                    description: "Run your cluster in one of your connected data centers.",
                    selected: i === "satellite",
                    onClick: () => l("satellite")
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ r("section", { children: [
              /* @__PURE__ */ e(
                "h2",
                {
                  className: "text-[20px] text-[#161616] mb-1",
                  style: { fontWeight: 300 },
                  children: "Virtual private cloud"
                }
              ),
              /* @__PURE__ */ r(
                "p",
                {
                  className: "text-[14px] text-[#525252] mb-4",
                  style: { fontWeight: 400 },
                  children: [
                    "Choose an existing VPC or create a new one.",
                    " ",
                    /* @__PURE__ */ e(
                      "button",
                      {
                        className: "text-[#0f62fe] hover:underline",
                        style: { fontWeight: 400 },
                        children: "Learn more"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r("div", { className: "max-w-[400px]", children: [
                /* @__PURE__ */ e(
                  "label",
                  {
                    className: "block text-[12px] text-[#525252] mb-1",
                    style: { fontWeight: 400 },
                    children: "Virtual private cloud"
                  }
                ),
                /* @__PURE__ */ r("div", { className: "relative", children: [
                  /* @__PURE__ */ r(
                    "select",
                    {
                      value: c,
                      onChange: (v) => o(v.target.value),
                      className: "w-full px-4 py-2.5 bg-white border-b border-[#8d8d8d] text-[14px] text-[#161616] appearance-none pr-8 outline-none focus:border-[#0f62fe] focus:border-b-2",
                      style: { fontWeight: 400 },
                      children: [
                        /* @__PURE__ */ e("option", { value: "", children: "Select a VPC" }),
                        /* @__PURE__ */ e("option", { value: "vpc-prod-us-south", children: "vpc-prod-us-south" }),
                        /* @__PURE__ */ e("option", { value: "vpc-dev-eu-de", children: "vpc-dev-eu-de" }),
                        /* @__PURE__ */ e("option", { value: "vpc-staging-jp-tok", children: "vpc-staging-jp-tok" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e(
                    de,
                    {
                      size: 16,
                      className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#525252] pointer-events-none"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ r("section", { children: [
              /* @__PURE__ */ e(
                "h2",
                {
                  className: "text-[20px] text-[#161616] mb-1",
                  style: { fontWeight: 300 },
                  children: "Resource details"
                }
              ),
              /* @__PURE__ */ e(
                "p",
                {
                  className: "text-[14px] text-[#525252] mb-4",
                  style: { fontWeight: 400 },
                  children: "Configure the resource group and cluster name."
                }
              ),
              /* @__PURE__ */ r("div", { className: "max-w-[400px] flex flex-col gap-4", children: [
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e(
                    "label",
                    {
                      className: "block text-[12px] text-[#525252] mb-1",
                      style: { fontWeight: 400 },
                      children: "Resource group"
                    }
                  ),
                  /* @__PURE__ */ r("div", { className: "relative", children: [
                    /* @__PURE__ */ r(
                      "select",
                      {
                        className: "w-full px-4 py-2.5 bg-white border-b border-[#8d8d8d] text-[14px] text-[#161616] appearance-none pr-8 outline-none focus:border-[#0f62fe] focus:border-b-2",
                        style: { fontWeight: 400 },
                        defaultValue: "default",
                        children: [
                          /* @__PURE__ */ e("option", { value: "default", children: "default" }),
                          /* @__PURE__ */ e("option", { value: "production", children: "production" }),
                          /* @__PURE__ */ e("option", { value: "development", children: "development" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ e(
                      de,
                      {
                        size: 16,
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#525252] pointer-events-none"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e(
                    "label",
                    {
                      className: "block text-[12px] text-[#525252] mb-1",
                      style: { fontWeight: 400 },
                      children: "Cluster name"
                    }
                  ),
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "text",
                      defaultValue: "mycluster-dal10-b3c.4x16",
                      className: "w-full px-4 py-2.5 bg-white border-b border-[#8d8d8d] text-[14px] text-[#161616] outline-none focus:border-[#0f62fe] focus:border-b-2",
                      style: { fontWeight: 400 }
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e(nh, { onClickCreate: N })
      ]
    }
  );
}
const rh = [
  { id: "overview", label: "Overview" },
  { id: "dashboard", label: "Dashboard" },
  { id: "users", label: "Users" },
  { id: "trusted-profiles", label: "Trusted profiles" },
  { id: "service-ids", label: "Service IDs" },
  { id: "api-keys", label: "API keys" },
  { id: "identity-providers", label: "Identity providers" },
  { id: "access-groups", label: "Access groups" },
  { id: "authorizations", label: "Authorizations" },
  { id: "roles", label: "Roles" },
  { id: "settings", label: "Settings" }
], sh = [
  {
    title: "Limit access with resource attribute-based conditions",
    date: "7 December 2023",
    description: "IBM Cloud IAM is excited to give customers the ability to grant access based on multiple resource attribute-based conditions. With this ability, you can create a single policy with various conditions instead of individual access policies.",
    link: "Learn more about access based on resource attribute-based conditions."
  },
  {
    title: "Centrally administer your multi-account environment",
    date: "5 September 2023",
    description: "IBM Cloud is excited to announce that you can now centrally administer access and security settings in your organization with Enterprise-managed IAM. By using enterprise IAM templates, you can quickly create and manage access groups and trusted profiles across accounts and easily ensure that all new accounts inherit the same settings.",
    link: "Learn more about enterprise IAM templates."
  }
], ih = [
  {
    icon: /* @__PURE__ */ e(Td, { size: 40, className: "text-[#525252]" }),
    title: "User management",
    description: "With unified user management you can add and delete users in an account for both platform and classic infrastructure services."
  },
  {
    icon: /* @__PURE__ */ e(Wd, { size: 40, className: "text-[#525252]" }),
    title: "Fine-grained access control",
    description: "Within the policy the scope of access can be assigned to a set of resources in a resource group, a single resource or account management service."
  },
  {
    icon: /* @__PURE__ */ e(Ed, { size: 40, className: "text-[#525252]" }),
    title: "Streamlined access management",
    description: "Easily assign access for a group of users or service IDs and then update them as needed to grant or deny access to account resources."
  }
], lh = [
  { name: "Adam Habensusz", email: "adam.h@company.com", status: "Active", lastLogin: "2 hours ago" },
  { name: "Sarah Chen", email: "sarah.chen@company.com", status: "Active", lastLogin: "1 day ago" },
  { name: "Marcus Johnson", email: "m.johnson@company.com", status: "Active", lastLogin: "3 days ago" },
  { name: "Emily Rivera", email: "e.rivera@company.com", status: "Pending", lastLogin: "Never" },
  { name: "James Kim", email: "j.kim@company.com", status: "Active", lastLogin: "5 hours ago" }
], oh = [
  { name: "Admin Group", description: "Full administrator access", members: 3 },
  { name: "Developer Group", description: "Access to development resources", members: 8 },
  { name: "Viewer Group", description: "Read-only access to all resources", members: 12 },
  { name: "Network Admin", description: "Network infrastructure management", members: 2 }
], ch = [
  { name: "Production API Key", created: "2024-01-15", lastUsed: "2 hours ago", status: "Active" },
  { name: "Dev Environment Key", created: "2024-03-22", lastUsed: "1 day ago", status: "Active" },
  { name: "CI/CD Pipeline Key", created: "2023-11-08", lastUsed: "30 mins ago", status: "Active" },
  { name: "Legacy Integration", created: "2023-06-14", lastUsed: "45 days ago", status: "Inactive" }
];
function dh() {
  const { collapsed: t } = we(), { isOpen: n } = ke(), a = Ze(), s = new URLSearchParams(a.search).get("tab"), [i, l] = A(s || "overview");
  return X(() => {
    s && l(s);
  }, [s]), /* @__PURE__ */ r(
    "main",
    {
      className: `${t ? "ml-[48px]" : "ml-[256px]"} ${n ? "mr-[320px]" : "mr-0"} mt-12 min-h-[calc(100vh-48px)] bg-[#f4f4f4] transition-all duration-200`,
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: [
        /* @__PURE__ */ e("div", { className: "bg-white w-full", children: /* @__PURE__ */ e("div", { className: "px-8 py-5 max-w-[1600px] mx-auto w-full", children: /* @__PURE__ */ e("h1", { className: "text-[28px] text-[#161616]", style: { fontWeight: 300 }, children: "Access (IAM)" }) }) }),
        /* @__PURE__ */ e("div", { className: "bg-white w-full", children: /* @__PURE__ */ e("div", { className: "px-8 max-w-[1600px] mx-auto w-full", children: /* @__PURE__ */ e("div", { className: "flex items-center gap-0 overflow-x-auto", children: rh.map((c) => /* @__PURE__ */ e(
          "button",
          {
            className: `px-4 py-3 text-[14px] border-b-2 transition-colors whitespace-nowrap ${i === c.id ? "border-[#0f62fe] text-[#161616]" : "border-transparent text-[#525252] hover:text-[#161616] hover:border-[#c6c6c6]"}`,
            style: { fontWeight: i === c.id ? 600 : 400 },
            onClick: () => l(c.id),
            children: c.label
          },
          c.id
        )) }) }) }),
        /* @__PURE__ */ r("div", { className: "px-8 pt-6 pb-8 max-w-[1600px] mx-auto w-full", children: [
          i === "overview" && /* @__PURE__ */ e(uh, {}),
          i === "dashboard" && /* @__PURE__ */ e(hh, {}),
          i === "users" && /* @__PURE__ */ e(ph, {}),
          i === "trusted-profiles" && /* @__PURE__ */ e(vt, { title: "Trusted profiles", description: "Create trusted profiles to automatically grant federated users access to your account with conditions based on SAML attributes." }),
          i === "service-ids" && /* @__PURE__ */ e(vt, { title: "Service IDs", description: "A service ID identifies a service or application similar to how a user ID identifies a user." }),
          i === "api-keys" && /* @__PURE__ */ e(fh, {}),
          i === "identity-providers" && /* @__PURE__ */ e(vt, { title: "Identity providers", description: "Configure identity providers to enable federated login to your IBM Cloud account." }),
          i === "access-groups" && /* @__PURE__ */ e(mh, {}),
          i === "authorizations" && /* @__PURE__ */ e(vt, { title: "Authorizations", description: "Use authorizations to grant one service access to another service." }),
          i === "roles" && /* @__PURE__ */ e(vt, { title: "Roles", description: "Create custom roles to tailor the combination of actions to meet specific needs." }),
          i === "settings" && /* @__PURE__ */ e(vt, { title: "Settings", description: "Manage account-level IAM settings for authentication and access." })
        ] })
      ]
    }
  );
}
function uh() {
  const t = pe();
  return /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ r("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ r(
        "button",
        {
          className: "flex items-center gap-2 px-4 py-2.5 bg-[#0f62fe] text-white text-[14px] hover:bg-[#0043ce] transition-colors",
          style: { fontWeight: 400 },
          onClick: () => t("/access-iam/invite-users"),
          children: [
            "Invite users",
            /* @__PURE__ */ e(Ve, { size: 16 })
          ]
        }
      ),
      /* @__PURE__ */ r(
        "button",
        {
          className: "flex items-center gap-2 px-4 py-2.5 bg-[#393939] text-white text-[14px] hover:bg-[#4c4c4c] transition-colors",
          style: { fontWeight: 400 },
          children: [
            "Create access group",
            /* @__PURE__ */ e(Ve, { size: 16 })
          ]
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          className: "flex items-center gap-1 text-[14px] text-[#0f62fe] hover:underline ml-2",
          style: { fontWeight: 400 },
          children: "Help"
        }
      )
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white mb-8", children: [
      /* @__PURE__ */ r("div", { className: "px-6 pt-5 pb-4 flex items-start justify-between", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252] mb-1", style: { fontWeight: 400 }, children: "Last updated: 06/02/2024" }),
          /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "What's new?" })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            className: "text-[14px] text-[#0f62fe] hover:underline",
            style: { fontWeight: 400 },
            children: "Past releases"
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "px-6 pb-6", children: sh.map((n, a) => /* @__PURE__ */ r("div", { className: `${a > 0 ? "mt-5" : ""}`, children: [
        /* @__PURE__ */ r("div", { className: "flex items-baseline gap-3 mb-1", children: [
          /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: n.title }),
          /* @__PURE__ */ e("span", { className: "text-[13px] text-[#525252] whitespace-nowrap", style: { fontWeight: 400 }, children: n.date })
        ] }),
        /* @__PURE__ */ r("p", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400, lineHeight: 1.5 }, children: [
          n.description,
          " ",
          /* @__PURE__ */ e("button", { className: "text-[#0f62fe] hover:underline", style: { fontWeight: 400 }, children: n.link })
        ] })
      ] }, a)) })
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white mb-8", children: [
      /* @__PURE__ */ e("div", { className: "px-6 pt-5 pb-4", children: /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "IAM capabilities" }) }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-0 border-t border-[#e0e0e0]", children: ih.map((n, a) => /* @__PURE__ */ r(
        "div",
        {
          className: `px-6 py-6 ${a < 2 ? "border-r border-[#e0e0e0]" : ""}`,
          children: [
            /* @__PURE__ */ e("div", { className: "mb-4", children: n.icon }),
            /* @__PURE__ */ e("h3", { className: "text-[14px] text-[#161616] mb-2", style: { fontWeight: 600 }, children: n.title }),
            /* @__PURE__ */ e("p", { className: "text-[13px] text-[#525252]", style: { fontWeight: 400, lineHeight: 1.5 }, children: n.description })
          ]
        },
        a
      )) })
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white", children: [
      /* @__PURE__ */ e("div", { className: "px-6 pt-5 pb-4", children: /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Documentation" }) }),
      /* @__PURE__ */ e("div", { className: "border-t border-[#e0e0e0]", children: [
        "Getting started with IAM",
        "Managing access groups",
        "Creating and working with service IDs",
        "Understanding API keys",
        "Enterprise IAM Docs"
      ].map((n) => /* @__PURE__ */ r(
        "button",
        {
          className: "w-full flex items-center justify-between px-6 py-3 hover:bg-[#f4f4f4] transition-colors border-b border-[#e0e0e0] last:border-b-0",
          children: [
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: n }),
            /* @__PURE__ */ e(xt, { size: 14, className: "text-[#0f62fe]" })
          ]
        },
        n
      )) })
    ] })
  ] });
}
function hh() {
  return /* @__PURE__ */ r("div", { className: "grid grid-cols-2 gap-4", children: [
    /* @__PURE__ */ r("div", { className: "bg-white", children: [
      /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-3", children: /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Users" }) }),
      /* @__PURE__ */ r("div", { className: "px-5 pb-5", children: [
        /* @__PURE__ */ e("div", { className: "text-[48px] text-[#161616] mb-1", style: { fontWeight: 300 }, children: "5" }),
        /* @__PURE__ */ e("p", { className: "text-[13px] text-[#525252]", style: { fontWeight: 400 }, children: "Total users in account" })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white", children: [
      /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-3", children: /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Service IDs" }) }),
      /* @__PURE__ */ r("div", { className: "px-5 pb-5", children: [
        /* @__PURE__ */ e("div", { className: "text-[48px] text-[#161616] mb-1", style: { fontWeight: 300 }, children: "2" }),
        /* @__PURE__ */ e("p", { className: "text-[13px] text-[#525252]", style: { fontWeight: 400 }, children: "Total service IDs" })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white", children: [
      /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-3", children: /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Access groups" }) }),
      /* @__PURE__ */ r("div", { className: "px-5 pb-5", children: [
        /* @__PURE__ */ e("div", { className: "text-[48px] text-[#161616] mb-1", style: { fontWeight: 300 }, children: "4" }),
        /* @__PURE__ */ e("p", { className: "text-[13px] text-[#525252]", style: { fontWeight: 400 }, children: "Total access groups" })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white", children: [
      /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-3", children: /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "API keys" }) }),
      /* @__PURE__ */ r("div", { className: "px-5 pb-5", children: [
        /* @__PURE__ */ e("div", { className: "text-[48px] text-[#161616] mb-1", style: { fontWeight: 300 }, children: "4" }),
        /* @__PURE__ */ e("p", { className: "text-[13px] text-[#525252]", style: { fontWeight: 400 }, children: "Total API keys" })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: "col-span-2 bg-white", children: [
      /* @__PURE__ */ e("div", { className: "px-5 pt-4 pb-3", children: /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Recent activity" }) }),
      /* @__PURE__ */ e("div", { className: "border-t border-[#e0e0e0]", children: [
        { action: "User invited", user: "emily.rivera@company.com", time: "2 hours ago" },
        { action: "Access group updated", user: "Admin Group", time: "1 day ago" },
        { action: "API key created", user: "CI/CD Pipeline Key", time: "3 days ago" },
        { action: "Role assigned", user: "james.kim@company.com", time: "5 days ago" }
      ].map((t, n) => /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-5 py-3 border-b border-[#e0e0e0] last:border-b-0", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: t.action }),
          /* @__PURE__ */ r("span", { className: "text-[14px] text-[#525252] ml-2", style: { fontWeight: 400 }, children: [
            "— ",
            t.user
          ] })
        ] }),
        /* @__PURE__ */ e("span", { className: "text-[13px] text-[#525252]", style: { fontWeight: 400 }, children: t.time })
      ] }, n)) })
    ] })
  ] });
}
function ph() {
  const t = pe(), { invitedUsers: n, removeInvitedUser: a } = $s(), [s, i] = A(/* @__PURE__ */ new Set()), l = [
    ...n.map((o) => ({
      name: o.name,
      email: o.email,
      status: o.status,
      lastLogin: o.lastLogin,
      isInvited: !0
    })),
    ...lh.filter((o) => !s.has(o.email)).map((o) => ({ ...o, isInvited: !1 }))
  ], c = (o, d) => {
    d ? a(o) : i((u) => new Set(u).add(o));
  };
  return /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ r("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Users" }),
      /* @__PURE__ */ r(
        "button",
        {
          className: "flex items-center gap-2 px-4 py-2.5 bg-[#0f62fe] text-white text-[14px] hover:bg-[#0043ce] transition-colors",
          style: { fontWeight: 400 },
          onClick: () => t("/access-iam/invite-users"),
          children: [
            "Invite users",
            /* @__PURE__ */ e(Ve, { size: 16 })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mb-4", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-3 py-2.5 bg-white border border-[#c6c6c6] text-[14px]", children: [
      /* @__PURE__ */ e(Ie, { size: 16, className: "text-[#525252]" }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          placeholder: "Search users",
          className: "flex-1 bg-transparent outline-none text-[14px] text-[#161616] placeholder-[#a8a8a8]",
          style: { fontWeight: 400 }
        }
      )
    ] }) }),
    /* @__PURE__ */ r("div", { className: "bg-white", children: [
      /* @__PURE__ */ r("div", { className: "grid grid-cols-[2fr_2fr_1fr_1fr_40px] px-5 py-3 border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Name" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Email" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Status" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Last login" }),
        /* @__PURE__ */ e("span", {})
      ] }),
      l.map((o, d) => /* @__PURE__ */ r(
        "div",
        {
          className: "grid grid-cols-[2fr_2fr_1fr_1fr_40px] px-5 py-3 border-b border-[#e0e0e0] last:border-b-0 hover:bg-[#f4f4f4] transition-colors cursor-pointer",
          children: [
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: o.name }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: o.email }),
            /* @__PURE__ */ e(
              "span",
              {
                className: `text-[14px] ${o.status === "Active" ? "text-[#198038]" : o.status === "In-progress" ? "text-[#0f62fe]" : "text-[#f1c21b]"}`,
                style: { fontWeight: 400 },
                children: o.status
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: o.lastLogin }),
            /* @__PURE__ */ e(
              "button",
              {
                className: "p-1 hover:bg-[#d6d6d6] rounded transition-colors text-[#525252]",
                title: "Delete user",
                onClick: (u) => {
                  u.stopPropagation(), c(o.email, o.isInvited);
                },
                children: /* @__PURE__ */ e(Rn, { size: 16 })
              }
            )
          ]
        },
        `${o.email}-${d}`
      ))
    ] })
  ] });
}
function fh() {
  return /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ r("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "API keys" }),
      /* @__PURE__ */ r(
        "button",
        {
          className: "flex items-center gap-2 px-4 py-2.5 bg-[#0f62fe] text-white text-[14px] hover:bg-[#0043ce] transition-colors",
          style: { fontWeight: 400 },
          children: [
            "Create an IBM Cloud API key",
            /* @__PURE__ */ e(Ve, { size: 16 })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mb-4", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-3 py-2.5 bg-white border border-[#c6c6c6] text-[14px]", children: [
      /* @__PURE__ */ e(Ie, { size: 16, className: "text-[#525252]" }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          placeholder: "Search API keys",
          className: "flex-1 bg-transparent outline-none text-[14px] text-[#161616] placeholder-[#a8a8a8]",
          style: { fontWeight: 400 }
        }
      )
    ] }) }),
    /* @__PURE__ */ r("div", { className: "bg-white", children: [
      /* @__PURE__ */ r("div", { className: "grid grid-cols-[2fr_1fr_1fr_1fr_40px] px-5 py-3 border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Name" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Created" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Last used" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Status" }),
        /* @__PURE__ */ e("span", {})
      ] }),
      ch.map((t, n) => /* @__PURE__ */ r(
        "div",
        {
          className: "grid grid-cols-[2fr_1fr_1fr_1fr_40px] px-5 py-3 border-b border-[#e0e0e0] last:border-b-0 hover:bg-[#f4f4f4] transition-colors cursor-pointer",
          children: [
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: t.name }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: t.created }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: t.lastUsed }),
            /* @__PURE__ */ e("span", { className: `text-[14px] ${t.status === "Active" ? "text-[#198038]" : "text-[#525252]"}`, style: { fontWeight: 400 }, children: t.status }),
            /* @__PURE__ */ e("button", { className: "flex items-center justify-center hover:bg-[#e0e0e0] rounded transition-colors", children: /* @__PURE__ */ e(xs, { size: 16, className: "text-[#525252]" }) })
          ]
        },
        n
      ))
    ] })
  ] });
}
function mh() {
  return /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ r("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Access groups" }),
      /* @__PURE__ */ r(
        "button",
        {
          className: "flex items-center gap-2 px-4 py-2.5 bg-[#0f62fe] text-white text-[14px] hover:bg-[#0043ce] transition-colors",
          style: { fontWeight: 400 },
          children: [
            "Create access group",
            /* @__PURE__ */ e(Ve, { size: 16 })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mb-4", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-3 py-2.5 bg-white border border-[#c6c6c6] text-[14px]", children: [
      /* @__PURE__ */ e(Ie, { size: 16, className: "text-[#525252]" }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          placeholder: "Search access groups",
          className: "flex-1 bg-transparent outline-none text-[14px] text-[#161616] placeholder-[#a8a8a8]",
          style: { fontWeight: 400 }
        }
      )
    ] }) }),
    /* @__PURE__ */ r("div", { className: "bg-white", children: [
      /* @__PURE__ */ r("div", { className: "grid grid-cols-[2fr_3fr_1fr_40px] px-5 py-3 border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Name" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Description" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Members" }),
        /* @__PURE__ */ e("span", {})
      ] }),
      oh.map((t, n) => /* @__PURE__ */ r(
        "div",
        {
          className: "grid grid-cols-[2fr_3fr_1fr_40px] px-5 py-3 border-b border-[#e0e0e0] last:border-b-0 hover:bg-[#f4f4f4] transition-colors cursor-pointer",
          children: [
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: t.name }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: t.description }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: t.members }),
            /* @__PURE__ */ e("button", { className: "flex items-center justify-center hover:bg-[#e0e0e0] rounded transition-colors", children: /* @__PURE__ */ e(xs, { size: 16, className: "text-[#525252]" }) })
          ]
        },
        n
      ))
    ] })
  ] });
}
function vt({ title: t, description: n }) {
  return /* @__PURE__ */ r("div", { children: [
    /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616] mb-2", style: { fontWeight: 300 }, children: t }),
    /* @__PURE__ */ e("p", { className: "text-[14px] text-[#525252] mb-6", style: { fontWeight: 400 }, children: n }),
    /* @__PURE__ */ r("div", { className: "bg-white p-12 flex flex-col items-center justify-center text-center", children: [
      /* @__PURE__ */ e(at, { size: 48, className: "text-[#a8a8a8] mb-4" }),
      /* @__PURE__ */ r("p", { className: "text-[16px] text-[#161616] mb-1", style: { fontWeight: 600 }, children: [
        "No ",
        t.toLowerCase(),
        " found"
      ] }),
      /* @__PURE__ */ e("p", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Get started by creating your first resource." })
    ] })
  ] });
}
const _t = [
  { name: "Admin Group", description: "Full admin access", members: 5, policies: 12 },
  { name: "Developer Group", description: "Development resources", members: 18, policies: 8 },
  { name: "Viewer Group", description: "Read-only access", members: 32, policies: 4 },
  { name: "Network Admins", description: "Network management", members: 3, policies: 6 },
  { name: "Security Team", description: "Security & compliance", members: 7, policies: 15 },
  { name: "Data Engineers", description: "Data services access", members: 12, policies: 9 },
  { name: "DevOps Team", description: "CI/CD pipeline access", members: 9, policies: 11 },
  { name: "Support Team", description: "Support ticket access", members: 6, policies: 5 },
  { name: "Billing Admins", description: "Billing management", members: 2, policies: 3 },
  { name: "Compliance Team", description: "Audit & compliance", members: 4, policies: 7 }
];
function Sr({
  title: t,
  description: n,
  selected: a,
  onClick: s
}) {
  return /* @__PURE__ */ r(
    "button",
    {
      onClick: s,
      className: `relative text-left p-4 bg-white flex flex-col min-h-[100px] min-w-[160px] max-w-[180px] transition-colors hover:bg-[#e8e8e8] ${a ? "outline outline-2 outline-[#0f62fe]" : ""}`,
      children: [
        a && /* @__PURE__ */ e("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ e(be, { size: 18, fill: "#0f62fe", stroke: "white" }) }),
        /* @__PURE__ */ e(
          "h4",
          {
            className: "text-[14px] text-[#161616] mb-2",
            style: { fontWeight: 600 },
            children: t
          }
        ),
        /* @__PURE__ */ e(
          "p",
          {
            className: "text-[12px] text-[#525252]",
            style: { fontWeight: 400 },
            children: n
          }
        )
      ]
    }
  );
}
function xh({
  emailCount: t,
  selectedGroupCount: n,
  onInvite: a,
  onCancel: s
}) {
  const [i, l] = A("summary"), c = n > 0 ? t * n : 0;
  return /* @__PURE__ */ e("aside", { className: "w-[320px] shrink-0 bg-white border-l border-[#e0e0e0] sticky top-12 h-[calc(100vh-48px)] overflow-y-auto", children: /* @__PURE__ */ r("div", { className: "px-5 pt-5 pb-4", children: [
    /* @__PURE__ */ e(
      "h2",
      {
        className: "text-[16px] text-[#161616] mb-4",
        style: { fontWeight: 600 },
        children: "Access summary"
      }
    ),
    /* @__PURE__ */ r("div", { className: "flex items-center gap-0 mb-5 border-b border-[#e0e0e0]", children: [
      /* @__PURE__ */ e(
        "button",
        {
          className: `px-4 py-2 text-[14px] border-b-2 transition-colors ${i === "summary" ? "border-[#0f62fe] text-[#161616]" : "border-transparent text-[#525252] hover:text-[#161616]"}`,
          style: { fontWeight: i === "summary" ? 600 : 400 },
          onClick: () => l("summary"),
          children: "Summary"
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          className: `px-4 py-2 text-[14px] border-b-2 transition-colors ${i === "api" ? "border-[#0f62fe] text-[#161616]" : "border-transparent text-[#525252] hover:text-[#161616]"}`,
          style: { fontWeight: i === "api" ? 600 : 400 },
          onClick: () => l("api"),
          children: "API"
        }
      )
    ] }),
    i === "summary" ? /* @__PURE__ */ r(he, { children: [
      /* @__PURE__ */ r("div", { className: "flex items-start gap-6 mb-8", children: [
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: t }),
          /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Users" })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: n }),
          /* @__PURE__ */ r("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: [
            "Access",
            /* @__PURE__ */ e("br", {}),
            "Groups"
          ] })
        ] }),
        /* @__PURE__ */ r("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: c }),
          /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: "Assignments" })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "flex flex-col items-center justify-center mb-6", children: [
        /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center mb-4 text-[#a8a8a8]", children: /* @__PURE__ */ e(Mt, { size: 56, strokeWidth: 0.8 }) }),
        /* @__PURE__ */ e("p", { className: "text-[13px] text-[#525252] text-center", style: { fontWeight: 400 }, children: t === 0 && n === 0 ? "You haven't added any access, but that's ok. You can still invite users to your account." : t > 0 && n > 0 ? `${t} user${t > 1 ? "s" : ""} will be invited with ${n} access group${n > 1 ? "s" : ""}.` : t > 0 ? `${t} user${t > 1 ? "s" : ""} will be invited. Select access groups to assign access.` : "Add email addresses and select access groups to assign access." })
      ] })
    ] }) : /* @__PURE__ */ r("div", { className: "py-4", children: [
      /* @__PURE__ */ e("p", { className: "text-[13px] text-[#525252] mb-3", style: { fontWeight: 400 }, children: "Use the IAM API to programmatically invite users to your account." }),
      /* @__PURE__ */ e("pre", { className: "bg-[#f4f4f4] p-3 text-[12px] text-[#161616] overflow-x-auto", style: { fontWeight: 400 }, children: `curl -X POST \\
  "https://iam.cloud.ibm.com/v2/users" \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d '{ "users": [...] }'` })
    ] }),
    /* @__PURE__ */ r("div", { className: "flex items-center gap-0 mt-4", children: [
      /* @__PURE__ */ e(
        "button",
        {
          className: "flex-1 py-3 px-4 bg-[#0f62fe] text-white text-[14px] hover:bg-[#0353e9] transition-colors disabled:bg-[#c6c6c6] disabled:cursor-not-allowed",
          style: { fontWeight: 400 },
          onClick: a,
          disabled: t === 0,
          children: "Invite"
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          className: "flex-1 py-3 px-4 bg-[#393939] text-white text-[14px] hover:bg-[#4c4c4c] transition-colors",
          style: { fontWeight: 400 },
          onClick: s,
          children: "Cancel"
        }
      )
    ] })
  ] }) });
}
function gh() {
  const [t, n] = A(""), [a, s] = A("access-group"), [i, l] = A(/* @__PURE__ */ new Set()), [c, o] = A(!1), [d, u] = A(1), [h] = A(100), m = pe(), { collapsed: g, setCollapsed: f } = we(), { isOpen: N } = ke(), { addInvitedUsers: v } = $s(), S = t.split(/[,\n]/).map((D) => D.trim()).filter((D) => D.length > 0).length, W = () => {
    const D = t.split(/[,\n]/).map((b) => b.trim()).filter((b) => b.length > 0);
    D.length > 0 && (v(D), m("/access-iam?tab=users"));
  }, R = (D) => {
    l((b) => {
      const B = new Set(b);
      return B.has(D) ? B.delete(D) : B.add(D), B;
    });
  }, E = () => {
    c ? (l(/* @__PURE__ */ new Set()), o(!1)) : (l(new Set(_t.map((D) => D.name))), o(!0));
  }, z = Math.max(1, Math.ceil(_t.length / h));
  return X(() => (f(!0), () => {
    f(!1);
  }), [f]), /* @__PURE__ */ r(
    "div",
    {
      className: `${g ? "ml-[48px]" : "ml-[256px]"} ${N ? "mr-[320px]" : "mr-0"} mt-12 min-h-[calc(100vh-48px)] bg-[#f4f4f4] transition-all duration-200 flex`,
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: [
        /* @__PURE__ */ r("main", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e("div", { className: "bg-white w-full", children: /* @__PURE__ */ r("div", { className: "px-8 pt-4 pb-5 w-full flex flex-col gap-1", children: [
            /* @__PURE__ */ r("nav", { className: "flex items-center gap-1.5 text-[14px]", style: { fontWeight: 400 }, children: [
              /* @__PURE__ */ e(
                "button",
                {
                  className: "text-[#0f62fe] hover:underline",
                  style: { fontWeight: 400 },
                  onClick: () => m("/"),
                  children: "Home"
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-[#525252]", children: "/" }),
              /* @__PURE__ */ e(
                "button",
                {
                  className: "text-[#0f62fe] hover:underline",
                  style: { fontWeight: 400 },
                  onClick: () => m("/access-iam"),
                  children: "Access (IAM)"
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-[#525252]", children: "/" }),
              /* @__PURE__ */ e("span", { className: "text-[#525252]", children: "Invite users" })
            ] }),
            /* @__PURE__ */ e(
              "h1",
              {
                className: "text-[28px] text-[#161616]",
                style: { fontWeight: 300 },
                children: "Invite users"
              }
            )
          ] }) }),
          /* @__PURE__ */ r("div", { className: "px-8 pt-6 pb-8 max-w-[900px]", children: [
            /* @__PURE__ */ r("section", { className: "mb-8", children: [
              /* @__PURE__ */ r("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ e(
                  "label",
                  {
                    className: "text-[12px] text-[#525252]",
                    style: { fontWeight: 400 },
                    children: "Enter email addresses"
                  }
                ),
                /* @__PURE__ */ r("span", { className: "text-[12px] text-[#525252]", style: { fontWeight: 400 }, children: [
                  S,
                  "/100"
                ] })
              ] }),
              /* @__PURE__ */ e(
                "textarea",
                {
                  value: t,
                  onChange: (D) => n(D.target.value),
                  placeholder: "Enter up to 100 separated by commas",
                  className: "w-full h-[120px] px-4 py-3 bg-white border-b border-[#8d8d8d] text-[14px] text-[#161616] outline-none resize-y focus:border-[#0f62fe] focus:border-b-2 placeholder-[#a8a8a8]",
                  style: { fontWeight: 400 }
                }
              )
            ] }),
            /* @__PURE__ */ r("section", { className: "mb-8", children: [
              /* @__PURE__ */ e(
                "h2",
                {
                  className: "text-[16px] text-[#161616] mb-4",
                  style: { fontWeight: 600 },
                  children: "How do you want to assign access?"
                }
              ),
              /* @__PURE__ */ r("div", { className: "flex items-stretch gap-4", children: [
                /* @__PURE__ */ e(
                  Sr,
                  {
                    title: "Access group",
                    description: "Streamline access management by adding the user to one or more existing access groups.",
                    selected: a === "access-group",
                    onClick: () => s("access-group")
                  }
                ),
                /* @__PURE__ */ e(
                  Sr,
                  {
                    title: "Access policy",
                    description: "Assign the user individual access policies.",
                    selected: a === "access-policy",
                    onClick: () => s("access-policy")
                  }
                )
              ] })
            ] }),
            a === "access-group" && /* @__PURE__ */ r("section", { className: "mb-8", children: [
              /* @__PURE__ */ e(
                "h2",
                {
                  className: "text-[16px] text-[#161616] mb-4",
                  style: { fontWeight: 600 },
                  children: "Select access groups"
                }
              ),
              /* @__PURE__ */ r("div", { className: "bg-white", children: [
                /* @__PURE__ */ r("div", { className: "grid grid-cols-[40px_2fr_2fr_1fr_1fr_1fr] px-4 py-3 border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
                  /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(
                    "input",
                    {
                      type: "checkbox",
                      checked: c,
                      onChange: E,
                      className: "w-4 h-4 accent-[#0f62fe] cursor-pointer"
                    }
                  ) }),
                  /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Content" }),
                  /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Content" }),
                  /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Content" }),
                  /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Content" }),
                  /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Content" })
                ] }),
                _t.map((D) => /* @__PURE__ */ r(
                  "div",
                  {
                    className: "grid grid-cols-[40px_2fr_2fr_1fr_1fr_1fr] px-4 py-3 border-b border-[#e0e0e0] last:border-b-0 hover:bg-[#f4f4f4] transition-colors cursor-pointer",
                    onClick: () => R(D.name),
                    children: [
                      /* @__PURE__ */ e("div", { className: "flex items-center", children: /* @__PURE__ */ e(
                        "input",
                        {
                          type: "checkbox",
                          checked: i.has(D.name),
                          onChange: () => R(D.name),
                          className: "w-4 h-4 accent-[#0f62fe] cursor-pointer",
                          onClick: (b) => b.stopPropagation()
                        }
                      ) }),
                      /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: "Content" }),
                      /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Content" }),
                      /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Content" }),
                      /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Content" }),
                      /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Content" })
                    ]
                  },
                  D.name
                )),
                /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 py-3 border-t border-[#e0e0e0]", children: [
                  /* @__PURE__ */ r("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ r("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: "Items per page:" }),
                      /* @__PURE__ */ r(
                        "button",
                        {
                          className: "flex items-center gap-1 px-2 py-1 border border-[#e0e0e0] bg-white text-[14px] text-[#161616]",
                          style: { fontWeight: 400 },
                          children: [
                            h,
                            /* @__PURE__ */ e(de, { size: 14, className: "text-[#525252]" })
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ r(
                      "span",
                      {
                        className: "text-[14px] text-[#161616] border-l border-[#e0e0e0] pl-3",
                        style: { fontWeight: 400 },
                        children: [
                          "1–",
                          Math.min(h, _t.length),
                          " of ",
                          _t.length,
                          " items"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ r("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ r(
                        "button",
                        {
                          className: "flex items-center gap-1 px-2 py-1 border border-[#e0e0e0] bg-white text-[14px] text-[#525252]",
                          style: { fontWeight: 400 },
                          children: [
                            d,
                            /* @__PURE__ */ e(de, { size: 14 })
                          ]
                        }
                      ),
                      /* @__PURE__ */ r("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: [
                        "of ",
                        z,
                        " pages"
                      ] })
                    ] }),
                    /* @__PURE__ */ e(
                      "button",
                      {
                        className: "p-1.5 border border-[#e0e0e0] bg-white hover:bg-[#e8e8e8] transition-colors text-[#525252]",
                        onClick: () => u((D) => Math.max(1, D - 1)),
                        children: /* @__PURE__ */ e(hs, { size: 16 })
                      }
                    ),
                    /* @__PURE__ */ e(
                      "button",
                      {
                        className: "p-1.5 border border-[#e0e0e0] bg-white hover:bg-[#e8e8e8] transition-colors text-[#525252]",
                        onClick: () => u((D) => Math.min(z, D + 1)),
                        children: /* @__PURE__ */ e(vn, { size: 16 })
                      }
                    )
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ r(
              "button",
              {
                className: "flex items-center gap-2 px-4 py-2.5 bg-[#0f62fe] text-white text-[14px] hover:bg-[#0353e9] transition-colors disabled:bg-[#c6c6c6] disabled:cursor-not-allowed",
                style: { fontWeight: 400 },
                disabled: S === 0,
                children: [
                  "Add",
                  /* @__PURE__ */ e(Ke, { size: 16 })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e(
          xh,
          {
            emailCount: S,
            selectedGroupCount: i.size,
            onInvite: W,
            onCancel: () => m("/access-iam")
          }
        )
      ]
    }
  );
}
const yh = [
  { id: "overview", label: "Overview" },
  { id: "usage", label: "Usage" },
  { id: "billing-items", label: "Billing items" },
  { id: "payments", label: "Payments" },
  { id: "invoices", label: "Invoices" },
  { id: "subscriptions", label: "Subscriptions" },
  { id: "commitments", label: "Commitments" },
  { id: "carbon-calculator", label: "Carbon calculator" },
  { id: "sales", label: "Sales" },
  { id: "spending-notifications", label: "Spending notifications" },
  { id: "promotions", label: "Promotions" },
  { id: "settings", label: "Settings" },
  { id: "payment-preferences", label: "Payment preferences" }
], bh = [
  { name: "Project 1", amount: "$18,562.00", hasView: !1, badge: { type: "info", label: "5 planned maintenances" } },
  { name: "Project 2", amount: "$5,562.00", hasView: !0 },
  { name: "Project 3", amount: "$100.00", hasView: !0 },
  { name: "Project 4", amount: "$185.00", hasView: !0, badge: { type: "warning", label: "Close to budget cap" } },
  { name: "Project 5", amount: "$18,562.00", hasView: !1, badge: { type: "info", label: "5 planned maintenances" } },
  { name: "Project 8", amount: "$185.00", hasView: !1, badge: { type: "warning", label: "Close to budget cap" } },
  { name: "Project 6", amount: "$5,562.00", hasView: !0 },
  { name: "Project 7", amount: "$100.00", hasView: !0 }
], vh = [
  { id: "hr", label: "hr", color: "#393939" },
  { id: "developers", label: "developers", color: "#393939" },
  { id: "us-south-3a", label: "us-south-3", color: "#0f62fe" },
  { id: "us-south-3b", label: "us-south-3", color: "#0f62fe" },
  { id: "us-south-3c", label: "us-south-3", color: "#6929c4" },
  { id: "vpc", label: "Virtual Private Cloud", color: "#393939" }
], Nh = [
  { name: "VPC1000", spent: 785, total: 1e3 },
  { name: "VPC1000", spent: 785, total: 1e3 }
];
function wh() {
  const [t, n] = A(vh), a = (s) => {
    n((i) => i.filter((l) => l.id !== s));
  };
  return /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ r("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center gap-0", children: [
        /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-3 py-2 bg-white w-[200px]", children: [
          /* @__PURE__ */ e(Ie, { size: 16, className: "text-[#525252]" }),
          /* @__PURE__ */ e(
            "input",
            {
              type: "text",
              placeholder: "Search",
              className: "flex-1 bg-transparent outline-none text-[14px] text-[#161616] placeholder-[#a8a8a8]",
              style: { fontWeight: 400 }
            }
          )
        ] }),
        /* @__PURE__ */ e("button", { className: "p-2.5 bg-transparent hover:bg-[#e0e0e0] transition-colors", children: /* @__PURE__ */ e(vs, { size: 16, className: "text-[#525252]" }) }),
        /* @__PURE__ */ e("button", { className: "p-2.5 bg-transparent hover:bg-[#e0e0e0] transition-colors", children: /* @__PURE__ */ e(Na, { size: 16, className: "text-[#525252]" }) }),
        /* @__PURE__ */ e("button", { className: "p-2.5 bg-transparent hover:bg-[#e0e0e0] transition-colors", children: /* @__PURE__ */ e(Mn, { size: 16, className: "text-[#525252]" }) })
      ] }),
      /* @__PURE__ */ r("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ r(
          "button",
          {
            className: "text-[14px] text-[#0f62fe] hover:underline flex items-center gap-1",
            style: { fontWeight: 400 },
            children: [
              "Add a filter",
              /* @__PURE__ */ e("span", { className: "text-[#0f62fe]", children: "+" })
            ]
          }
        ),
        t.map((s) => /* @__PURE__ */ r(
          "span",
          {
            className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] text-white",
            style: { backgroundColor: s.color, fontWeight: 400 },
            children: [
              s.label,
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: () => a(s.id),
                  className: "hover:opacity-70 transition-opacity",
                  children: /* @__PURE__ */ e(nt, { size: 12 })
                }
              )
            ]
          },
          s.id
        ))
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-4 gap-4 mb-6", children: bh.map((s) => /* @__PURE__ */ r(
      "div",
      {
        className: "bg-white p-5 flex flex-col justify-between min-h-[140px]",
        children: [
          /* @__PURE__ */ r("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ e(
              "span",
              {
                className: "text-[14px] text-[#161616]",
                style: { fontWeight: 600 },
                children: s.name
              }
            ),
            s.hasView && /* @__PURE__ */ e(
              "button",
              {
                className: "text-[14px] text-[#0f62fe] hover:underline",
                style: { fontWeight: 400 },
                children: "View"
              }
            )
          ] }),
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ e(
              "p",
              {
                className: "text-[28px] text-[#161616] mt-2 mb-3",
                style: { fontWeight: 300 },
                children: s.amount
              }
            ),
            s.badge && /* @__PURE__ */ r("div", { className: "flex items-center gap-1.5", children: [
              s.badge.type === "info" ? /* @__PURE__ */ e(pr, { size: 10, fill: "#0f62fe", className: "text-[#0f62fe]" }) : /* @__PURE__ */ e(pr, { size: 10, fill: "#f1c21b", className: "text-[#f1c21b]" }),
              /* @__PURE__ */ e(
                "span",
                {
                  className: `text-[12px] ${s.badge.type === "info" ? "text-[#0f62fe]" : "text-[#161616]"}`,
                  style: { fontWeight: 400 },
                  children: s.badge.label
                }
              )
            ] })
          ] })
        ]
      },
      s.name
    )) }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-4", children: Nh.map((s, i) => /* @__PURE__ */ r("div", { className: "bg-white p-5", children: [
      /* @__PURE__ */ r("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ e(
          "span",
          {
            className: "text-[14px] text-[#161616]",
            style: { fontWeight: 600 },
            children: "Active promotion"
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            className: "text-[14px] text-[#0f62fe] hover:underline",
            style: { fontWeight: 400 },
            children: "View"
          }
        )
      ] }),
      /* @__PURE__ */ r(
        "p",
        {
          className: "text-[14px] text-[#161616] mb-3",
          style: { fontWeight: 400 },
          children: [
            /* @__PURE__ */ e("span", { style: { fontWeight: 600 }, children: s.name }),
            " ",
            "$",
            s.spent,
            "/$",
            s.total
          ]
        }
      ),
      /* @__PURE__ */ e("div", { className: "w-full h-[8px] bg-[#e0e0e0] rounded-sm overflow-hidden mb-3", children: /* @__PURE__ */ e(
        "div",
        {
          className: "h-full rounded-sm",
          style: {
            width: `${s.spent / s.total * 100}%`,
            background: "linear-gradient(to right, #198038 0%, #198038 60%, #0f62fe 60%, #0f62fe 100%)"
          }
        }
      ) }),
      /* @__PURE__ */ e(
        "button",
        {
          className: "text-[14px] text-[#0f62fe] hover:underline",
          style: { fontWeight: 400 },
          children: "View all promotions and credits"
        }
      )
    ] }, i)) })
  ] });
}
function kh() {
  const t = [
    { month: "Mar 2026", total: "$24,856.00" },
    { month: "Feb 2026", total: "$22,340.00" },
    { month: "Jan 2026", total: "$19,720.00" }
  ], n = [
    { name: "Kubernetes Service", cost: "$8,420.00", change: "+12%" },
    { name: "Cloud Object Storage", cost: "$4,230.00", change: "+3%" },
    { name: "Virtual Servers", cost: "$3,890.00", change: "-5%" },
    { name: "Watson AI", cost: "$2,560.00", change: "+18%" },
    { name: "Databases for PostgreSQL", cost: "$1,980.00", change: "+2%" },
    { name: "Cloud Functions", cost: "$1,450.00", change: "-1%" },
    { name: "VPC Infrastructure", cost: "$1,220.00", change: "+7%" },
    { name: "App ID", cost: "$1,106.00", change: "0%" }
  ];
  return /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ r("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Usage" }),
      /* @__PURE__ */ r(
        "button",
        {
          className: "flex items-center gap-2 px-4 py-2.5 bg-[#393939] text-white text-[14px] hover:bg-[#4c4c4c] transition-colors",
          style: { fontWeight: 400 },
          children: [
            "Export CSV",
            /* @__PURE__ */ e(Mn, { size: 16 })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-4 mb-6", children: t.map((a) => /* @__PURE__ */ r("div", { className: "bg-white p-5", children: [
      /* @__PURE__ */ e("p", { className: "text-[12px] text-[#525252] mb-1", style: { fontWeight: 400 }, children: a.month }),
      /* @__PURE__ */ e("p", { className: "text-[28px] text-[#161616]", style: { fontWeight: 300 }, children: a.total })
    ] }, a.month)) }),
    /* @__PURE__ */ r("div", { className: "bg-white", children: [
      /* @__PURE__ */ e("div", { className: "px-5 py-3 border-b border-[#e0e0e0] bg-[#e0e0e0]", children: /* @__PURE__ */ r("div", { className: "grid grid-cols-[3fr_1fr_1fr]", children: [
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Service" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Cost" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Change" })
      ] }) }),
      n.map((a) => /* @__PURE__ */ r(
        "div",
        {
          className: "grid grid-cols-[3fr_1fr_1fr] px-5 py-3 border-b border-[#e0e0e0] last:border-b-0 hover:bg-[#f4f4f4] transition-colors cursor-pointer",
          children: [
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: a.name }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: a.cost }),
            /* @__PURE__ */ e(
              "span",
              {
                className: `text-[14px] ${a.change.startsWith("+") ? "text-[#da1e28]" : a.change.startsWith("-") ? "text-[#198038]" : "text-[#525252]"}`,
                style: { fontWeight: 400 },
                children: a.change
              }
            )
          ]
        },
        a.name
      ))
    ] })
  ] });
}
function Ch() {
  return /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Billing items" }) }),
    /* @__PURE__ */ e("div", { className: "mb-4", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-3 py-2.5 bg-white border border-[#c6c6c6]", children: [
      /* @__PURE__ */ e(Ie, { size: 16, className: "text-[#525252]" }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          placeholder: "Search billing items",
          className: "flex-1 bg-transparent outline-none text-[14px] text-[#161616] placeholder-[#a8a8a8]",
          style: { fontWeight: 400 }
        }
      )
    ] }) }),
    /* @__PURE__ */ r("div", { className: "bg-white", children: [
      /* @__PURE__ */ r("div", { className: "grid grid-cols-[2fr_1fr_1.5fr_1fr_1fr] px-5 py-3 border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Name" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Type" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Billing period" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Amount" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Status" })
      ] }),
      [
        { name: "Red Hat OpenShift on IBM Cloud", type: "Infrastructure", period: "Mar 1-31, 2026", amount: "$4,210.00", status: "Billed" },
        { name: "Cloud Object Storage Standard", type: "Storage", period: "Mar 1-31, 2026", amount: "$2,115.00", status: "Billed" },
        { name: "Virtual Server (bx2-8x32)", type: "Compute", period: "Mar 1-31, 2026", amount: "$1,945.00", status: "Pending" },
        { name: "Databases for PostgreSQL", type: "Database", period: "Mar 1-31, 2026", amount: "$990.00", status: "Billed" },
        { name: "Watson Discovery", type: "AI / ML", period: "Mar 1-31, 2026", amount: "$780.00", status: "Pending" },
        { name: "VPC Network", type: "Networking", period: "Mar 1-31, 2026", amount: "$610.00", status: "Billed" }
      ].map((n) => /* @__PURE__ */ r(
        "div",
        {
          className: "grid grid-cols-[2fr_1fr_1.5fr_1fr_1fr] px-5 py-3 border-b border-[#e0e0e0] last:border-b-0 hover:bg-[#f4f4f4] transition-colors cursor-pointer",
          children: [
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: n.name }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.type }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.period }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.amount }),
            /* @__PURE__ */ e(
              "span",
              {
                className: `text-[14px] ${n.status === "Billed" ? "text-[#198038]" : "text-[#f1c21b]"}`,
                style: { fontWeight: 400 },
                children: n.status
              }
            )
          ]
        },
        n.name
      ))
    ] })
  ] });
}
function Wh() {
  return /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ r("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Payments" }),
      /* @__PURE__ */ e(
        "button",
        {
          className: "flex items-center gap-2 px-4 py-2.5 bg-[#0f62fe] text-white text-[14px] hover:bg-[#0043ce] transition-colors",
          style: { fontWeight: 400 },
          children: "Make a payment"
        }
      )
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white", children: [
      /* @__PURE__ */ r("div", { className: "grid grid-cols-[1.5fr_2fr_1fr_1fr] px-5 py-3 border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Date" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Payment method" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Amount" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Status" })
      ] }),
      [
        { date: "Mar 1, 2026", method: "Credit Card ****4821", amount: "$22,340.00", status: "Completed" },
        { date: "Feb 1, 2026", method: "Credit Card ****4821", amount: "$19,720.00", status: "Completed" },
        { date: "Jan 1, 2026", method: "Credit Card ****4821", amount: "$18,950.00", status: "Completed" },
        { date: "Dec 1, 2025", method: "Credit Card ****4821", amount: "$17,680.00", status: "Completed" }
      ].map((n) => /* @__PURE__ */ r(
        "div",
        {
          className: "grid grid-cols-[1.5fr_2fr_1fr_1fr] px-5 py-3 border-b border-[#e0e0e0] last:border-b-0 hover:bg-[#f4f4f4] transition-colors",
          children: [
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.date }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.method }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.amount }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#198038]", style: { fontWeight: 400 }, children: n.status })
          ]
        },
        n.date
      ))
    ] })
  ] });
}
function Sh() {
  return /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ e("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Invoices" }) }),
    /* @__PURE__ */ e("div", { className: "mb-4", children: /* @__PURE__ */ r("div", { className: "flex items-center gap-2 px-3 py-2.5 bg-white border border-[#c6c6c6]", children: [
      /* @__PURE__ */ e(Ie, { size: 16, className: "text-[#525252]" }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "text",
          placeholder: "Search invoices",
          className: "flex-1 bg-transparent outline-none text-[14px] text-[#161616] placeholder-[#a8a8a8]",
          style: { fontWeight: 400 }
        }
      )
    ] }) }),
    /* @__PURE__ */ r("div", { className: "bg-white", children: [
      /* @__PURE__ */ r("div", { className: "grid grid-cols-[1.5fr_1.5fr_1fr_1fr] px-5 py-3 border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Invoice ID" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Date" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Amount" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Status" })
      ] }),
      [
        { id: "INV-2026-003", date: "Mar 1, 2026", amount: "$24,856.00", status: "Open" },
        { id: "INV-2026-002", date: "Feb 1, 2026", amount: "$22,340.00", status: "Paid" },
        { id: "INV-2026-001", date: "Jan 1, 2026", amount: "$19,720.00", status: "Paid" },
        { id: "INV-2025-012", date: "Dec 1, 2025", amount: "$17,680.00", status: "Paid" },
        { id: "INV-2025-011", date: "Nov 1, 2025", amount: "$16,540.00", status: "Paid" }
      ].map((n) => /* @__PURE__ */ r(
        "div",
        {
          className: "grid grid-cols-[1.5fr_1.5fr_1fr_1fr] px-5 py-3 border-b border-[#e0e0e0] last:border-b-0 hover:bg-[#f4f4f4] transition-colors cursor-pointer",
          children: [
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: n.id }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.date }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.amount }),
            /* @__PURE__ */ e(
              "span",
              {
                className: `text-[14px] ${n.status === "Paid" ? "text-[#198038]" : "text-[#0f62fe]"}`,
                style: { fontWeight: 400 },
                children: n.status
              }
            )
          ]
        },
        n.id
      ))
    ] })
  ] });
}
function Mh() {
  return /* @__PURE__ */ r(he, { children: [
    /* @__PURE__ */ r("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616]", style: { fontWeight: 300 }, children: "Promotions and credits" }),
      /* @__PURE__ */ e(
        "button",
        {
          className: "flex items-center gap-2 px-4 py-2.5 bg-[#0f62fe] text-white text-[14px] hover:bg-[#0043ce] transition-colors",
          style: { fontWeight: 400 },
          children: "Apply a code"
        }
      )
    ] }),
    /* @__PURE__ */ r("div", { className: "bg-white", children: [
      /* @__PURE__ */ r("div", { className: "grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] px-5 py-3 border-b border-[#e0e0e0] bg-[#e0e0e0]", children: [
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Code" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Description" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Credit" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Remaining" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Expires" }),
        /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "Status" })
      ] }),
      [
        { code: "VPC1000", description: "VPC Infrastructure Credit", credit: "$1,000.00", remaining: "$215.00", expires: "Jun 30, 2026", status: "Active" },
        { code: "AI500", description: "Watson AI Trial Credit", credit: "$500.00", remaining: "$320.00", expires: "Sep 15, 2026", status: "Active" },
        { code: "STARTUP2025", description: "Startup Program Credit", credit: "$10,000.00", remaining: "$0.00", expires: "Dec 31, 2025", status: "Expired" }
      ].map((n) => /* @__PURE__ */ r(
        "div",
        {
          className: "grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] px-5 py-3 border-b border-[#e0e0e0] last:border-b-0 hover:bg-[#f4f4f4] transition-colors cursor-pointer",
          children: [
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#0f62fe]", style: { fontWeight: 600 }, children: n.code }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.description }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.credit }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: n.remaining }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: n.expires }),
            /* @__PURE__ */ e(
              "span",
              {
                className: `text-[14px] ${n.status === "Active" ? "text-[#198038]" : "text-[#525252]"}`,
                style: { fontWeight: 400 },
                children: n.status
              }
            )
          ]
        },
        n.code
      ))
    ] })
  ] });
}
function pt({ title: t, description: n }) {
  return /* @__PURE__ */ r("div", { children: [
    /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616] mb-2", style: { fontWeight: 300 }, children: t }),
    /* @__PURE__ */ e("p", { className: "text-[14px] text-[#525252] mb-6", style: { fontWeight: 400 }, children: n }),
    /* @__PURE__ */ r("div", { className: "bg-white p-12 flex flex-col items-center justify-center text-center", children: [
      /* @__PURE__ */ e(ea, { size: 48, className: "text-[#a8a8a8] mb-4" }),
      /* @__PURE__ */ e("p", { className: "text-[16px] text-[#161616] mb-1", style: { fontWeight: 600 }, children: "No data available" }),
      /* @__PURE__ */ r("p", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: [
        "Content for ",
        t.toLowerCase(),
        " will appear here."
      ] })
    ] })
  ] });
}
function Ih() {
  const { collapsed: t } = we(), { isOpen: n } = ke(), a = pe(), [s, i] = A("overview");
  return /* @__PURE__ */ r(
    "main",
    {
      className: `${t ? "ml-[48px]" : "ml-[256px]"} ${n ? "mr-[320px]" : "mr-0"} mt-12 min-h-[calc(100vh-48px)] bg-[#f4f4f4] transition-all duration-200`,
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: [
        /* @__PURE__ */ e("div", { className: "bg-white w-full", children: /* @__PURE__ */ r("div", { className: "px-8 pt-4 pb-5 max-w-[1600px] mx-auto w-full", children: [
          /* @__PURE__ */ r("nav", { className: "flex items-center gap-1.5 mb-2", children: [
            /* @__PURE__ */ e(
              "button",
              {
                className: "text-[14px] text-[#0f62fe] hover:underline",
                style: { fontWeight: 400 },
                onClick: () => a("/"),
                children: "Manage"
              }
            ),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "/" }),
            /* @__PURE__ */ e("span", { className: "text-[14px] text-[#525252]", style: { fontWeight: 400 }, children: "Billing and usage" })
          ] }),
          /* @__PURE__ */ e("h1", { className: "text-[28px] text-[#161616]", style: { fontWeight: 300 }, children: "Billing and usage" })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "bg-white w-full border-b border-[#e0e0e0]", children: /* @__PURE__ */ e("div", { className: "px-8 max-w-[1600px] mx-auto w-full", children: /* @__PURE__ */ e("div", { className: "flex items-center gap-0 overflow-x-auto", children: yh.map((l) => /* @__PURE__ */ e(
          "button",
          {
            className: `px-4 py-3 text-[14px] border-b-2 transition-colors whitespace-nowrap ${s === l.id ? "border-[#0f62fe] text-[#161616]" : "border-transparent text-[#525252] hover:text-[#161616] hover:border-[#c6c6c6]"}`,
            style: { fontWeight: s === l.id ? 600 : 400 },
            onClick: () => i(l.id),
            children: l.label
          },
          l.id
        )) }) }) }),
        /* @__PURE__ */ r("div", { className: "px-8 pt-6 pb-8 max-w-[1600px] mx-auto w-full", children: [
          s === "overview" && /* @__PURE__ */ e(wh, {}),
          s === "usage" && /* @__PURE__ */ e(kh, {}),
          s === "billing-items" && /* @__PURE__ */ e(Ch, {}),
          s === "payments" && /* @__PURE__ */ e(Wh, {}),
          s === "invoices" && /* @__PURE__ */ e(Sh, {}),
          s === "promotions" && /* @__PURE__ */ e(Mh, {}),
          s === "subscriptions" && /* @__PURE__ */ e(pt, { title: "Subscriptions", description: "View and manage your IBM Cloud subscriptions." }),
          s === "commitments" && /* @__PURE__ */ e(pt, { title: "Commitments", description: "View your commitment usage and balances." }),
          s === "carbon-calculator" && /* @__PURE__ */ e(pt, { title: "Carbon calculator", description: "Estimate the carbon emissions associated with your IBM Cloud usage." }),
          s === "sales" && /* @__PURE__ */ e(pt, { title: "Sales", description: "View sales quotes and contact your IBM sales representative." }),
          s === "spending-notifications" && /* @__PURE__ */ e(pt, { title: "Spending notifications", description: "Set up notifications to track your account spending." }),
          s === "settings" && /* @__PURE__ */ e(pt, { title: "Settings", description: "Manage your billing account settings." }),
          s === "payment-preferences" && /* @__PURE__ */ e(pt, { title: "Payment preferences", description: "Manage your payment methods and preferences." })
        ] })
      ]
    }
  );
}
function Rh() {
  const { collapsed: t } = we(), { isOpen: n } = ke();
  return /* @__PURE__ */ e(
    "main",
    {
      className: `${t ? "ml-[48px]" : "ml-[256px]"} ${n ? "mr-[320px]" : "mr-0"} mt-12 min-h-[calc(100vh-48px)] bg-[#f4f4f4] transition-all duration-200`,
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: /* @__PURE__ */ r("div", { className: "px-8 pt-10 pb-8 max-w-[1200px]", children: [
        /* @__PURE__ */ e("h1", { className: "text-[36px] text-[#161616] mb-2", style: { fontWeight: 300 }, children: "Infrastructure" }),
        /* @__PURE__ */ e("p", { className: "text-[16px] text-[#525252]", style: { fontWeight: 400 }, children: "Overview of your cloud infrastructure resources." })
      ] })
    }
  );
}
const zh = [
  { label: "Logging instances", count: 3 },
  { label: "Monitoring instances", count: 3 },
  { label: "Activity Tracker routes", count: 0 }
], Dh = [
  {
    title: "Set up log analysis",
    description: "Aggregate, search, and analyze platform and application logs",
    icon: /* @__PURE__ */ e(Ie, { size: 28, className: "text-[#161616]" }),
    link: ""
  },
  {
    title: "Create a monitoring instance",
    description: "Gain operational visibility into your infrastructure and apps",
    icon: /* @__PURE__ */ e(Sn, { size: 28, className: "text-[#161616]" }),
    link: ""
  },
  {
    title: "Configure alerts and notifications",
    description: "Set up real-time alerting for critical events and thresholds",
    icon: /* @__PURE__ */ e(us, { size: 28, className: "text-[#161616]" }),
    link: ""
  }
];
function Ph() {
  const { collapsed: t } = we(), { isOpen: n } = ke(), a = pe();
  return /* @__PURE__ */ r(
    "main",
    {
      className: `${t ? "ml-[48px]" : "ml-[256px]"} ${n ? "mr-[320px]" : "mr-0"} mt-12 min-h-[calc(100vh-48px)] bg-[#f4f4f4] transition-all duration-200`,
      style: { fontFamily: "'IBM Plex Sans', sans-serif" },
      children: [
        /* @__PURE__ */ e("div", { className: "bg-white border-b border-[#e0e0e0] w-full", children: /* @__PURE__ */ e("div", { className: "px-8 max-w-[1600px] mx-auto w-full flex items-center gap-0", children: [
          { label: "Overview", path: "/observability" },
          { label: "Logging (3)", path: "" },
          { label: "Monitoring (3)", path: "" },
          { label: "Activity Tracker", path: "" }
        ].map((i) => {
          const l = i.path === "/observability";
          return /* @__PURE__ */ e(
            "button",
            {
              className: `relative px-4 py-3 text-[14px] transition-colors whitespace-nowrap ${l ? "text-[#161616] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-[#0f62fe]" : "text-[#525252] hover:text-[#161616] hover:bg-[#e8e8e8]"}`,
              style: { fontWeight: l ? 600 : 400 },
              onClick: () => i.path && a(i.path),
              children: i.label
            },
            i.label
          );
        }) }) }),
        /* @__PURE__ */ r("div", { className: "px-8 pt-10 pb-8 max-w-[1200px]", children: [
          /* @__PURE__ */ e("h1", { className: "text-[36px] text-[#161616] mb-2", style: { fontWeight: 300 }, children: "Monitor, log, and observe your cloud" }),
          /* @__PURE__ */ e("p", { className: "text-[16px] text-[#525252] mb-6", style: { fontWeight: 400 }, children: "Centralized logging, metrics, and activity tracking for full-stack observability" }),
          /* @__PURE__ */ r("div", { className: "flex items-start gap-3 bg-[#edf5ff] border-l-3 border-[#0f62fe] px-4 py-4 mb-8", children: [
            /* @__PURE__ */ e(Wt, { size: 20, className: "text-[#0f62fe] shrink-0 mt-0.5", fill: "#0f62fe", stroke: "white" }),
            /* @__PURE__ */ r("div", { className: "flex-1", children: [
              /* @__PURE__ */ e("p", { className: "text-[14px] text-[#161616]", style: { fontWeight: 600 }, children: "IBM Cloud Logs: Next-gen observability is here" }),
              /* @__PURE__ */ e("p", { className: "text-[13px] text-[#525252] mt-0.5", style: { fontWeight: 400 }, children: "Migrate to IBM Cloud Logs for unified log analysis with TCO Optimizer, powered by Mezmo technology. Existing Log Analysis and Activity Tracker instances will be deprecated Q4 2026." })
            ] }),
            /* @__PURE__ */ e(
              "button",
              {
                className: "text-[14px] text-[#0f62fe] hover:underline whitespace-nowrap shrink-0",
                style: { fontWeight: 400 },
                children: "Migrate now"
              }
            )
          ] }),
          /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616] mb-4", style: { fontWeight: 300 }, children: "Jump in" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-4 mb-10", children: Dh.map((i) => /* @__PURE__ */ r(
            "div",
            {
              className: "bg-white p-6 cursor-pointer hover:bg-[#e8e8e8] transition-colors flex flex-col justify-between min-h-[180px]",
              onClick: () => i.link && a(i.link),
              children: [
                /* @__PURE__ */ r("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616] mb-1", style: { fontWeight: 600 }, children: i.title }),
                  /* @__PURE__ */ e("p", { className: "text-[13px] text-[#525252]", style: { fontWeight: 400 }, children: i.description })
                ] }),
                /* @__PURE__ */ e("div", { className: "mt-6", children: i.icon })
              ]
            },
            i.title
          )) }),
          /* @__PURE__ */ e("h2", { className: "text-[20px] text-[#161616] mb-4", style: { fontWeight: 300 }, children: "Dashboard" }),
          /* @__PURE__ */ r("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ r("div", { className: "bg-white", children: [
              /* @__PURE__ */ e("div", { className: "px-4 pt-4 pb-3", children: /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Inventory" }) }),
              /* @__PURE__ */ e("div", { children: zh.map((i) => /* @__PURE__ */ r(
                "div",
                {
                  className: "flex items-center justify-between px-4 py-3 border-t border-[#e0e0e0] hover:bg-[#f4f4f4] transition-colors cursor-pointer",
                  children: [
                    /* @__PURE__ */ e("span", { className: "text-[14px] text-[#161616]", style: { fontWeight: 400 }, children: i.label }),
                    /* @__PURE__ */ e("span", { className: "text-[14px] text-[#0f62fe]", style: { fontWeight: 400 }, children: i.count })
                  ]
                },
                i.label
              )) })
            ] }),
            /* @__PURE__ */ r("div", { className: "bg-white", children: [
              /* @__PURE__ */ e("div", { className: "px-4 pt-4 pb-3", children: /* @__PURE__ */ e("h3", { className: "text-[16px] text-[#161616]", style: { fontWeight: 600 }, children: "Explore the docs" }) }),
              /* @__PURE__ */ e("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ e(at, { size: 56, className: "text-[#a8a8a8]" }) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
const Ah = Eo([
  {
    path: "/",
    Component: du,
    children: [
      { index: !0, Component: gu },
      { path: "resources", Component: Nu },
      { path: "resources/:resourceId", Component: _u },
      { path: "activities", Component: Su },
      { path: "catalog", Component: Xu },
      { path: "containers", Component: Vu },
      { path: "containers/clusters", Component: Hu },
      { path: "containers/clusters/create", Component: ah },
      { path: "infrastructure", Component: Rh },
      { path: "observability", Component: Ph },
      { path: "access-iam", Component: dh },
      { path: "access-iam/invite-users", Component: gh },
      { path: "billing", Component: Ih }
    ]
  }
]);
function Lh() {
  return /* @__PURE__ */ e(Fd, { children: /* @__PURE__ */ e(Hd, { children: /* @__PURE__ */ e(Ud, { children: /* @__PURE__ */ e(oo, { router: Ah }) }) }) });
}
const Oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lh
}, Symbol.toStringTag, { value: "Module" }));
export {
  $h as Code0_8
};
