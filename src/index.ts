import {fill} from "lkt-string-tools";
import {LktObject} from "lkt-ts-interfaces";
import {Settings} from "./Settings/Settings";
import {reactive, UnwrapNestedRefs} from "vue";

export const i18n:UnwrapNestedRefs<LktObject> = reactive({})

export const __ = (key = '', replacements = {}) => {

    if (Settings.value.debugEnabled) return key;

    const args = key.split('.');
    const argsLength = args.length;
    let c = 0;
    let t: any = i18n;

    // Parse config data and fetch attribute
    while (typeof t[args[c]] !== 'undefined') {
        t = t[args[c]];
        ++c;
    }

    // If not found...
    if (c < argsLength) {
        if (Settings.value.notFoundReturnMode === Settings.NOT_FOUND_RETURN_KEY) {
            return key;
        }
        return undefined;
    }

    if (typeof t === "string") return fill(t, replacements, ':', '');

    return t;
}

export const setI18n = (data: LktObject = {}) => {
    for (let k in i18n) delete i18n[k];
    for (let k in data) i18n[k] = data[k];
}

export const setI18nNotFoundReturnModeToEmpty = () => {
    Settings.value.notFoundReturnMode = Settings.NOT_FOUND_RETURN_EMPTY;
}

export const setI18nNotFoundReturnModeToKey = () => {
    Settings.value.notFoundReturnMode = Settings.NOT_FOUND_RETURN_KEY;
}

export const setI18nDebugMode = (status: boolean = true) => {
    Settings.value.debugEnabled = status;
}