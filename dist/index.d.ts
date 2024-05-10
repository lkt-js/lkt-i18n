import { LktObject } from "lkt-ts-interfaces";
import { UnwrapNestedRefs } from "vue";
export declare const i18n: UnwrapNestedRefs<LktObject>;
export declare const __: (key?: string, replacements?: {}) => any;
export declare const setI18n: (data?: LktObject) => void;
export declare const setI18nNotFoundReturnModeToEmpty: () => void;
export declare const setI18nNotFoundReturnModeToKey: () => void;
export declare const setI18nDebugMode: (status?: boolean) => void;
