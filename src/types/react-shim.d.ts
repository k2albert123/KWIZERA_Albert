/**
 * Temporary React typings shim to unblock JSX compilation until @types packages are installed.
 * Remove this file once dev deps are installed: @types/react, @types/react-dom
 */
declare module 'react' {
    export type ReactNode = any;
    export type ReactElement = any;
    export interface PropsWithChildren<P = {}> { children?: ReactNode }
    export type FC<P = {}> = (props: PropsWithChildren<P>) => ReactElement | null;
    export type FormEvent = any;
    export function useState<T = any>(initial?: T): [T, (v: any) => void];
    export function useEffect(...args: any[]): any;
    export namespace JSX {
        interface IntrinsicElements { [elemName: string]: any; }
    }
    const React: any;
    export default React;
}

declare module 'react-dom/client' {
    const anything: any;
    export default anything;
    export function createRoot(el: any): any;
}

declare module 'react/jsx-runtime' {
    export const jsx: any;
    export const jsxs: any;
    export const Fragment: any;
}

