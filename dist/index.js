import { fill } from "lkt-string-tools";
import { Settings } from "./Settings/Settings";
import { computed, reactive, ref } from "vue";
export const i18n = reactive({});
export const currentLanguage = ref('en');
export const availableLanguages = ref(['en']);
export const __ = (key = '', replacements = {}) => {
    if (Settings.value.debugEnabled)
        return key;
    const args = key.split('.');
    const argsLength = args.length;
    let c = 0;
    let t = i18n;
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
    if (typeof t === "string")
        return fill(t, replacements, ':', '');
    return t;
};
export const setI18n = (data = {}) => {
    for (let k in i18n)
        delete i18n[k];
    for (let k in data)
        i18n[k] = data[k];
};
export const setI18nNotFoundReturnModeToEmpty = () => {
    Settings.value.notFoundReturnMode = Settings.NOT_FOUND_RETURN_EMPTY;
};
export const setI18nNotFoundReturnModeToKey = () => {
    Settings.value.notFoundReturnMode = Settings.NOT_FOUND_RETURN_KEY;
};
export const setI18nDebugMode = (status = true) => {
    Settings.value.debugEnabled = status;
};
export const setCurrentLanguage = (lang) => {
    currentLanguage.value = lang;
};
export const setAvailableLanguages = (languages) => {
    availableLanguages.value = languages;
};
export const getAvailableLanguages = () => {
    return availableLanguages.value;
};
export const getCurrentLanguage = () => {
    return currentLanguage.value;
};
export const computedCurrentLanguage = computed(() => {
    return currentLanguage.value;
});
