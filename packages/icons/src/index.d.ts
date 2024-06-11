import { DefineComponent, EmitFn } from '../../primevue/src/ts-helpers';

export interface IconProps {
    label?: string | undefined;
    spin?: boolean;
}

export interface IconSlots {}

export interface IconEmitsOptions {}

export declare type IconEmits = EmitFn<IconEmitsOptions>;

declare const Icon: DefineComponent<IconProps, IconSlots, IconEmits>;