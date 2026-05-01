import { requireNativeView } from 'expo';
import * as React from 'react';

import { NeptingModuleViewProps } from './NeptingModule.types';

const NativeView: React.ComponentType<NeptingModuleViewProps> =
  requireNativeView('NeptingModule');

export default function NeptingModuleView(props: NeptingModuleViewProps) {
  return <NativeView {...props} />;
}
