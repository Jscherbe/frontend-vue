import { ref as T, computed as E, watch as $, watchPostEffect as X } from "vue";
import Y from "fuse.js";
const Z = (u) => typeof u == "function";
function ee(u) {
  const h = /* @__PURE__ */ new Set();
  for (const d of u)
    for (const a of d)
      h.add(a);
  return h;
}
function k(u) {
  if (!u || u.length === 0) return /* @__PURE__ */ new Set();
  const h = u.sort((a, S) => a.size - S.size), d = new Set(h[0]);
  for (let a = 1; a < h.length; a++) {
    for (const S of d)
      h[a].has(S) || d.delete(S);
    if (d.size === 0) break;
  }
  return d;
}
function O(u, h, d) {
  if (!u || u.length === 0)
    return d;
  const a = u.map((S) => {
    const z = S.children.map((V) => {
      const v = `${S.uid}:${V.uid}`;
      return h.get(v) || /* @__PURE__ */ new Set();
    });
    return S.match === "all" ? k(z) : ee(z);
  });
  return k(a);
}
function te(u, h) {
  return !h || !Array.isArray(h) ? [] : h.map((d) => {
    const a = /* @__PURE__ */ new Set(), S = d.getValue || ((v) => v[d.uid]);
    u.forEach((v) => {
      const F = S(v);
      Array.isArray(F) ? F.forEach((A) => A && a.add(A)) : F && a.add(F);
    });
    const z = d.getLabel || ((v) => v), V = [...a].map((v) => ({
      uid: v,
      label: z(v),
      selected: !1
    }));
    return V.sort((v, F) => String(v.label).localeCompare(String(F.label))), {
      ...d,
      children: V
    };
  });
}
function re(u, h = {}) {
  const {
    initialFacets: d,
    facetFields: a,
    initialSearchValue: S = "",
    initialSortType: z = "az",
    noDefaultSorts: V = !1,
    extraSortTypes: v = {},
    searchOptions: F = {},
    getSortValue: A = (e) => e.title || e.label || "",
    countMode: q = "none",
    // 'none', 'simple', 'intuitive'
    urlSync: U,
    isPinned: B
  } = h, _ = (e) => e.sort((t, r) => {
    const n = A(t), s = A(r);
    return n && s ? String(n).localeCompare(String(s)) : n ? -1 : s ? 1 : 0;
  }), j = {
    az: { text: "A-Z", sort: _ },
    za: { text: "Z-A", sort: (e) => _(e).reverse() }
  };
  function D(e) {
    return (e || []).map((t) => ({
      ...t,
      open: t.open || !1,
      children: t.children.map((r) => ({
        ...r,
        selected: r.selected || !1
      })),
      selectedCount: 0
    }));
  }
  const f = T([]), x = T(S), I = T(z), G = E(() => !a || !u.value?.length ? null : te(u.value, a)), J = E(() => ({
    ...V ? {} : j,
    ...v
  })), M = E(() => {
    const e = /* @__PURE__ */ new Map(), t = y.value;
    if (!t || !a) return e;
    const r = new Map(a.map((n) => {
      const s = n.getValue || ((o) => o[n.uid]);
      return [n.uid, s];
    }));
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      for (const o of a) {
        const l = r.get(o.uid)(s), c = Array.isArray(l) ? l : l ? [l] : [];
        for (const m of c) {
          const p = `${o.uid}:${m}`;
          e.has(p) || e.set(p, /* @__PURE__ */ new Set()), e.get(p).add(n);
        }
      }
    }
    return e;
  }), R = E(() => ({
    shouldSort: !0,
    keys: ["title", "label", "description", "author"],
    ...F
  })), y = E(() => x.value?.length ? new Y(u.value, R.value).search(x.value).map((t) => t.item) : u.value), b = E(() => {
    const e = [];
    return f.value.forEach((t) => {
      const r = t.children.filter((n) => n.selected);
      r.length > 0 && e.push({ ...t, children: r });
    }), e;
  }), L = E(() => {
    if (!b.value.length)
      return y.value;
    const e = M.value;
    if (e.size === 0 && y.value.length > 0 && a?.length > 0)
      return [];
    const t = new Set(y.value.map((s, o) => o)), r = O(b.value, e, t), n = [];
    for (const s of r)
      n.push(y.value[s]);
    return n;
  }), N = E(() => {
    const e = J.value[I.value]?.sort;
    let t = Z(e) ? e([...L.value]) : [...L.value];
    if (Z(B)) {
      const r = [], n = [];
      return t.forEach((s) => B(s) ? r.push(s) : n.push(s)), { pinned: r, unpinned: n, all: [...r, ...n] };
    }
    return { pinned: [], unpinned: t, all: t };
  }), W = E(() => N.value.all), H = E(() => N.value.pinned);
  function K() {
    f.value.forEach((e) => {
      e.children && e.children.forEach((t) => t.selected = !1), e.selectedCount = 0;
    });
  }
  function P({ groupUid: e, facetUid: t, selected: r }) {
    const n = f.value.find((s) => s.uid === e);
    if (n) {
      !n.multiple && r && n.children.forEach((o) => {
        o.uid !== t && (o.selected = !1);
      });
      const s = n.children.find((o) => o.uid === t);
      s && (s.selected = r), n.selectedCount = n.children.filter((o) => o.selected).length;
    }
  }
  if ($(G, (e) => {
    const t = D(d || e);
    t.forEach((r) => {
      r.selectedCount = r.children.filter((n) => n.selected).length;
    }), f.value = t;
  }, { immediate: !0 }), $([b, y], ([e, t], [r, n]) => {
    if (!(q === "none" || !f.value.length) && !(e === r && t === n)) {
      if (q === "simple") {
        const s = M.value;
        if (s.size === 0 && y.value.length > 0 && a?.length > 0)
          return;
        const o = new Set(y.value.map((i, l) => l));
        f.value.forEach((i) => {
          const l = e.filter((m) => m.uid !== i.uid), c = O(l, s, o);
          i.children.forEach((m) => {
            const p = `${i.uid}:${m.uid}`, g = s.get(p) || /* @__PURE__ */ new Set(), w = k([c, g]);
            m.count = w.size;
          });
        });
      } else if (q === "intuitive") {
        const s = M.value;
        if (s.size === 0 && y.value.length > 0 && a?.length > 0)
          return;
        const o = new Set(y.value.map((l, c) => c)), i = O(e, s, o);
        f.value.forEach((l) => {
          l.children.forEach((c) => {
            const m = `${l.uid}:${c.uid}`, p = s.get(m) || /* @__PURE__ */ new Set();
            if (c.selected)
              if (l.multiple) {
                const g = k([i, p]);
                c.count = g.size;
              } else
                c.count = i.size;
            else {
              const g = [];
              for (const C of e)
                g.push({ ...C, children: [...C.children] });
              let w = g.find((C) => C.uid === l.uid);
              w || (w = { ...l, children: [] }, g.push(w)), l.multiple ? w.children.push(c) : w.children = [c];
              const Q = O(g, s, o);
              c.count = Q.size;
            }
          });
        });
      }
    }
  }, { deep: !0, immediate: !0 }), U?.router && U?.route) {
    const { router: e, route: t } = U, r = () => f.value && f.value.length > 0, n = () => {
      if (!r()) return;
      const i = { ...t.query };
      delete i.sort, delete i.search, f.value.forEach((l) => delete i[l.uid]), I.value && I.value !== z && (i.sort = I.value), x.value && (i.search = x.value), b.value.forEach((l) => {
        l.children.length > 0 && (i[l.uid] = l.children.map((c) => c.uid).join(","));
      }), JSON.stringify(i) !== JSON.stringify(t.query) && e.push({ query: i });
    }, s = () => {
      const i = t.query;
      i.sort && (I.value = i.sort), i.search && (x.value = i.search);
      const l = /* @__PURE__ */ new Map();
      f.value.forEach((c) => {
        const m = i[c.uid] ? i[c.uid].split(",") : [];
        l.set(c.uid, new Set(m));
      }), f.value.forEach((c) => {
        const m = l.get(c.uid) || /* @__PURE__ */ new Set();
        c.children.forEach((p) => {
          const g = p.selected, w = m.has(p.uid);
          g !== w && P({ groupUid: c.uid, facetUid: p.uid, selected: w });
        });
      });
    }, o = X(() => {
      f.value && f.value.length > 0 && (s(), o());
    });
    $(
      [I, x, b],
      n,
      { deep: !0 }
    ), $(() => t.query, s);
  }
  return {
    facets: f,
    searchValue: x,
    selectedSort: I,
    sortTypes: J,
    displayItems: W,
    pinnedItems: H,
    selectedFacets: b,
    clearFilters: K,
    handleFacetChange: P
  };
}
export {
  re as useFacets
};
