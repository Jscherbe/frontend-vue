function m(t, e) {
  let n = (t?.meta || {}).title;
  return typeof n == "function" && (n = n(e || t)), n;
}
function w(t, e) {
  const n = Object.assign({}, {
    qualifier(s, c) {
      return c ? b(s) : $(s);
    },
    sort: p,
    item: {},
    includeChildren: !1
  }, e), r = (s, c) => c ? `${c}/${s.path}` : s.path, i = (s, c = null) => s.filter((u) => n.qualifier(u, c)).map((u) => {
    const o = u.children ? g(u.children) : u, h = u.children ? u.children.filter((d) => d.path !== "") : !1, a = f(o, r(u, c), n.item);
    return n.includeChildren && h.length && (a.children = i(h, a.path)), a;
  }).sort(n.sort);
  return i(t);
}
function j(t) {
  function e(l) {
    const n = [];
    for (const r of l) {
      const i = { ...r };
      delete i.children, n.push(i), r.children && n.push(...e(r.children));
    }
    return n;
  }
  return e(t);
}
function O(t, e, l) {
  const r = Object.assign({}, {
    includeIndex: !1,
    item: {},
    sort: p
  }, l), i = t.find((o) => o.path !== "/" && e.includes(o.path)), s = (o, h, a) => {
    if (o.children) {
      const d = o.children.find((x) => x.path.includes(e));
      if (d)
        return s(d, o, a + d.path);
    }
    return { route: h, path: a };
  }, { route: c, path: u } = s(i, i, i.path);
  return c.children ? c.children.filter(I(r.includeIndex)).map((o) => f(o, `${u}/${o.path}`, r.item)).sort(r.sort) : (console.warn("Unable to build menu for:", e), []);
}
function g(t) {
  return t.find((e) => e.path === "");
}
function f(t, e = t.path, l) {
  const r = Object.assign({}, {
    indexMeta: !0,
    modify: null
  }, l);
  let i = Object.assign({}, t.meta);
  r.indexMeta && t.children && (i = Object.assign({}, i, g(t.children)?.meta));
  const s = { ...t, meta: i }, c = {
    path: e,
    title: m(s, t) || "Missing Title",
    weight: i?.weight || 0,
    meta: i
  };
  return r.modify && r.modify(c, t), c;
}
function b(t) {
  return !t.path.includes("/:");
}
function $(t) {
  const e = t.path.match(/\//g) || [];
  return b(t) && e.length === 1;
}
function y(t, e) {
  const { target: l } = e, n = l.closest("a");
  if (n) {
    let r = n.getAttribute("href");
    r.startsWith("/") && (t.push(r), e.preventDefault());
  }
}
function R(t, e = M(t)) {
  return e?.children;
}
function M(t, e) {
  const l = t.matched.length, n = l - 2;
  return e ? l > 1 ? t.matched[0] : null : n < 0 ? null : t.matched[n];
}
function I(t) {
  return (e) => t || e.path !== "";
}
function p(t, e) {
  return t?.weight - e?.weight;
}
function S(t, e) {
  const n = Object.assign({}, {
    parent: null,
    includeIndex: !1,
    item: {},
    sort: p
  }, e), r = n.parent || M(t);
  return (R(t, r) || []).filter(I(n.includeIndex)).map((s) => f(s, `${r.path}/${s.path}`, n.item)).sort(n.sort);
}
function B(t) {
  const { matched: e, path: l } = t, n = e.reduce((i, s) => {
    if (s.meta?.breadcrumb === !1)
      return i;
    const c = i[i.length - 1];
    return c && c.path === s.path || i.push(s), i;
  }, []);
  return n.map((i, s) => {
    const c = s === n.length - 1, u = m(i, t);
    return u || console.warn("Missing route title"), {
      title: u || "Missing Title",
      to: { path: c ? l : i.path },
      current: c
    };
  });
}
export {
  B as $createBreadcrumb,
  S as $createSectionMenu,
  M as $getParentRoute,
  R as $getRouteChildren,
  w as createBaseMenu,
  f as createMenuItem,
  O as createSectionMenu,
  j as flattenMenu,
  g as getChildIndexRoute,
  m as getRouteTitle,
  $ as isStaticBaseRoute,
  b as isStaticRoute,
  y as nativeLinkRouter
};
