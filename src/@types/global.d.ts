interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
  __REACT_DEVTOOLS_GLOBAL_HOOK__: any
}
interface WithRouter {
  router: any
}

declare module '*.png' {
  const resource: string
  export = resource
}
declare module '*.svg' {
  const resource: string
  export = resource
}
declare module '*.pcss' {
  const resource: any
  export default resource
}

