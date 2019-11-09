export const base64 = {
	encode: (str: string) => btoa(unescape(encodeURIComponent(str))),
	decode: (str: string) => decodeURIComponent(escape(atob(str))),
}
