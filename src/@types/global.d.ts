declare module '*.jsx' {
  import { FC } from 'react';
  const ReactComponent: FC<object>;
  export default ReactComponent;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.glb' {
  const src: string;
  export default src;
}
