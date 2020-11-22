declare module '*.vue' {
    import { ComponentOptions  } from 'vue'
    const ComponentOptions : ComponentOptions 
    export default ComponentOptions 
  }
  declare module '*.md' {
    const str: String 
    export default str 
  }
  // declare module 'custom.d.ts'{
  //   const tableList:tableList
  //   export default tableList
  // }