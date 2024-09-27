import {LktObject} from "lkt-ts-interfaces";

export class Settings {
    static NOT_FOUND_RETURN_EMPTY: number = 1;
    static NOT_FOUND_RETURN_KEY: number = 2;
    static value: LktObject = {
        notFoundReturnMode: 2,
        debugEnabled: false
    }
}