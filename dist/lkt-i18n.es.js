import { fetchInObject as o } from "lkt-object-tools";
import { fill as f } from "lkt-string-tools";
const r = {
  value: {}
}, i = (t = "", n = {}) => {
  let e = o(r.value, t);
  return typeof e == "string" ? f(e, n, ":", "") : e;
}, s = (t = {}) => {
  r.value = t;
};
export {
  i as __,
  s as setI18n
};
