declare module "nativescript-webview-interface" {
     export function callJSFunction(js: any, args: any, callback: any): void;
     export var WebViewInterface: any;
}