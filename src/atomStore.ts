import {atomWithStorage} from "jotai/utils";
import {getSessionStorage, removeSessionStorage, setSessionStorage} from "./utils/sessionStorage.ts";

export const tokenAtom = atomWithStorage("token", "", {
    getItem: getSessionStorage,
    setItem: setSessionStorage,
    removeItem: removeSessionStorage,
})