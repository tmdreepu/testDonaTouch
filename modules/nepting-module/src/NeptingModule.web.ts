import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './NeptingModule.types';

type NeptingModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class NeptingModule extends NativeModule<NeptingModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(NeptingModule, 'NeptingModule');
