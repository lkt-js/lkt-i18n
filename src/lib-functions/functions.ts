import {fetchInObject} from "lkt-object-tools";
import {fill} from "lkt-string-tools";
import {LktObject} from "lkt-ts-interfaces";

const I18n = {
    value: {}
}

export const __ = (key = '', replacements = {}) => {
    let r = fetchInObject(I18n.value, key);

    if (typeof r === "string") {
        return fill(r, replacements, ':', '');
    }

    return r;
}

export const setI18n = (i18n: LktObject = {}) => {
    I18n.value = i18n;
}