import { fill as s } from "lkt-string-tools";
const e = {
  NOT_FOUND_RETURN_EMPTY: 1,
  NOT_FOUND_RETURN_KEY: 2,
  value: {
    notFoundReturnMode: 2,
    debugEnabled: !1
  }
}, r = {
  value: {}
}, _ = (t = "", d = {}) => {
  if (e.value.debugEnabled)
    return t;
  const u = t.split("."), l = u.length;
  let o = 0, n = r.value;
  for (; typeof n[u[o]] != "undefined"; )
    n = n[u[o]], ++o;
  return o < l ? e.value.notFoundReturnMode === e.NOT_FOUND_RETURN_KEY ? t : void 0 : typeof n == "string" ? s(n, d, ":", "") : n;
}, R = (t = {}) => {
  r.value = t;
}, a = () => {
  e.value.notFoundReturnMode = e.NOT_FOUND_RETURN_EMPTY;
}, E = () => {
  e.value.notFoundReturnMode = e.NOT_FOUND_RETURN_KEY;
}, T = (t = !0) => {
  e.value.debugEnabled = t;
};
export {
  _ as __,
  R as setI18n,
  T as setI18nDebugMode,
  a as setI18nNotFoundReturnModeToEmpty,
  E as setI18nNotFoundReturnModeToKey
};
