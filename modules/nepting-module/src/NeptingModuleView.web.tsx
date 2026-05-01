import * as React from 'react';

import { NeptingModuleViewProps } from './NeptingModule.types';

export default function NeptingModuleView(props: NeptingModuleViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
