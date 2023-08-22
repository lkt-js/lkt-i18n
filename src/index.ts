import {fill} from "lkt-string-tools";
import {LktObject} from "lkt-ts-interfaces";
import {Settings} from "./Settings/Settings";

const I18n = {
    value: {}
}

export const __ = (key = '', replacements = {}) => {

    if (Settings.value.debugEnabled) return key;

    const args = key.split('.');
    const argsLength = args.length;
    let c = 0;
    let t: any = I18n.value;

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

export const setI18n = (i18n: LktObject = {}) => {
    I18n.value = i18n;
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