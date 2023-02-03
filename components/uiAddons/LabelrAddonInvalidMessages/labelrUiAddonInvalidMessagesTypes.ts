export type TUseLabelrUiAddonInvalidMessagesExecutor<T = any> = {
    validator: (value: T) => boolean;
    invalidMessage: string;
};
