import { OriginalEvent } from '@thednp/shorty/src/interface/originalEvent';
import { BaseOptions } from './baseComponent';

export interface DropdownOptions extends BaseOptions {
  offset: number;
  display: string | 'dynamic' | 'static';
}

export interface DropdownEvent extends OriginalEvent {
  readonly type: string | 'show.bs.dropdown' | 'shown.bs.dropdown' | 'hide.bs.dropdown' | 'hidden.bs.dropdown';
}
