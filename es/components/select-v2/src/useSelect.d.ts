import { useNamespace } from 'element-plus/es/hooks';
import type { Option, OptionType, SelectStates } from './select.types';
import type { ISelectV2Props } from './token';
import type { SelectEmitFn } from './defaults';
import type { TooltipInstance } from 'element-plus/es/components/tooltip';
import type { SelectDropdownInstance } from './select-dropdown';
import type { Component, ComputedRef, Ref, WritableComputedRef } from 'vue';
type useSelectReturnType = (props: ISelectV2Props, emit: SelectEmitFn) => {
    inputId: Ref<string | undefined>;
    collapseTagSize: ComputedRef<'default' | 'small'>;
    currentPlaceholder: ComputedRef<string>;
    expanded: Ref<boolean>;
    emptyText: ComputedRef<string | false | null>;
    popupHeight: ComputedRef<number>;
    debounce: ComputedRef<0 | 300>;
    allOptions: Ref<OptionType[]>;
    filteredOptions: Ref<OptionType[]>;
    iconComponent: ComputedRef<any>;
    iconReverse: ComputedRef<any>;
    tagStyle: ComputedRef<{
        maxWidth: string;
    }>;
    collapseTagStyle: ComputedRef<{
        maxWidth: string;
    }>;
    popperSize: Ref<number>;
    dropdownMenuVisible: WritableComputedRef<boolean>;
    hasModelValue: ComputedRef<boolean>;
    shouldShowPlaceholder: ComputedRef<boolean>;
    selectDisabled: ComputedRef<boolean | undefined>;
    selectSize: ComputedRef<string>;
    needStatusIcon: ComputedRef<boolean>;
    showClearBtn: ComputedRef<boolean>;
    states: SelectStates;
    isFocused: Ref<boolean>;
    nsSelect: ReturnType<typeof useNamespace>;
    nsInput: ReturnType<typeof useNamespace>;
    inputRef: Ref<HTMLElement | undefined>;
    menuRef: Ref<SelectDropdownInstance | undefined>;
    tagMenuRef: Ref<HTMLElement | undefined>;
    tooltipRef: Ref<TooltipInstance | undefined>;
    tagTooltipRef: Ref<TooltipInstance | undefined>;
    selectRef: Ref<HTMLElement | undefined>;
    wrapperRef: Ref<HTMLElement | undefined>;
    selectionRef: Ref<HTMLElement | undefined>;
    prefixRef: Ref<HTMLElement | undefined>;
    suffixRef: Ref<HTMLElement | undefined>;
    collapseItemRef: Ref<HTMLElement | undefined>;
    popperRef: ComputedRef<HTMLElement | undefined>;
    validateState: ComputedRef<string>;
    validateIcon: ComputedRef<Component | undefined>;
    showTagList: ComputedRef<Option[]>;
    collapseTagList: ComputedRef<Option[]>;
    debouncedOnInputChange: () => void;
    deleteTag: (event: MouseEvent, option: Option) => void;
    getLabel: (option: Option) => string;
    getValue: (option: Option) => unknown;
    getDisabled: (option: Option) => boolean;
    getValueKey: (item: unknown) => any;
    handleClear: () => void;
    handleClickOutside: (event: Event) => void;
    handleDel: (e: KeyboardEvent) => void;
    handleEsc: () => void;
    focus: () => void;
    blur: () => void;
    handleMenuEnter: () => void;
    handleResize: () => void;
    resetSelectionWidth: () => void;
    updateTooltip: () => void;
    updateTagTooltip: () => void;
    updateOptions: () => void;
    toggleMenu: () => void;
    scrollTo: (index: number) => void;
    onInput: (event: Event) => void;
    onKeyboardNavigate: (direction: 'forward' | 'backward', hoveringIndex?: number) => void;
    onKeyboardSelect: () => void;
    onSelect: (option: Option) => void;
    onHover: (idx?: number) => void;
    handleCompositionStart: (event: CompositionEvent) => void;
    handleCompositionEnd: (event: CompositionEvent) => void;
    handleCompositionUpdate: (event: CompositionEvent) => void;
};
declare const useSelect: useSelectReturnType;
export default useSelect;
