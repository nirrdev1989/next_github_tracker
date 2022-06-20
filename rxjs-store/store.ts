import { BehaviorSubject, Subject } from "rxjs"
import Cookie from "js-cookie"
const mode = Cookie.get("mode")

export const modeStore = new BehaviorSubject<boolean>(mode === "dark" ? true : false)
