import { defineComponent, ref, computed, onMounted, watch, openBlock, createBlock, Transition, unref, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, createCommentVNode, renderSlot, createElementBlock, toDisplayString, createTextVNode, Fragment, withModifiers, createVNode, vShow } from 'vue';
import { useEventListener, useResizeObserver, useTimeoutFn } from '@vueuse/core';
import { ElBadge } from '../../badge/index.mjs';
import { ElButton } from '../../button/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { getLastOffset, getOffsetOrSpace } from './instance.mjs';
import { messageProps, messageEmits } from './message.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useGlobalComponentSettings } from '../../config-provider/src/hooks/use-global-config.mjs';
import { TypeComponentsMap, TypeComponents } from '../../../utils/vue/icon.mjs';
import { EVENT_CODE } from '../../../constants/aria.mjs';

const __default__ = defineComponent({
  name: "ElMessage"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: messageProps,
  emits: messageEmits,
  setup(__props, { expose }) {
    const props = __props;
    const { Close } = TypeComponents;
    const { ns, zIndex } = useGlobalComponentSettings("message");
    const { currentZIndex, nextZIndex } = zIndex;
    const messageRef = ref();
    const visible = ref(false);
    const height = ref(0);
    let stopTimer = void 0;
    const badgeType = computed(() => props.type ? props.type === "error" ? "danger" : props.type : "info");
    const typeClass = computed(() => {
      const type = props.type;
      return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const iconComponent = computed(() => props.icon || TypeComponentsMap[props.type] || "");
    const lastOffset = computed(() => getLastOffset(props.id));
    const offset = computed(() => getOffsetOrSpace(props.id, props.offset) + lastOffset.value);
    const bottom = computed(() => height.value + offset.value);
    const customStyle = computed(() => ({
      top: `${offset.value}px`,
      zIndex: currentZIndex.value
    }));
    function startTimer() {
      if (props.duration === 0)
        return;
      ({ stop: stopTimer } = useTimeoutFn(() => {
        close();
      }, props.duration));
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close() {
      visible.value = false;
    }
    function onLabelClick() {
      if (!props.onLabelClick)
        return;
      props.onLabelClick();
    }
    function keydown({ code }) {
      if (code === EVENT_CODE.esc) {
        close();
      }
    }
    onMounted(() => {
      startTimer();
      nextZIndex();
      visible.value = true;
    });
    watch(() => props.repeatNum, () => {
      clearTimer();
      startTimer();
    });
    useEventListener(document, "keydown", keydown);
    useResizeObserver(messageRef, () => {
      height.value = messageRef.value.getBoundingClientRect().height;
    });
    expose({
      visible,
      bottom,
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        onBeforeLeave: _ctx.onClose,
        onAfterLeave: ($event) => _ctx.$emit("destroy"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            id: _ctx.id,
            ref_key: "messageRef",
            ref: messageRef,
            class: normalizeClass([
              unref(ns).b(),
              { [unref(ns).m(_ctx.type)]: _ctx.type },
              unref(ns).is("center", _ctx.center),
              unref(ns).is("closable", _ctx.showClose),
              unref(ns).is("plain", _ctx.plain),
              _ctx.customClass,
              `is-${_ctx.effect}`
            ]),
            style: normalizeStyle(unref(customStyle)),
            role: "alert",
            onMouseenter: clearTimer,
            onMouseleave: startTimer
          }, [
            _ctx.repeatNum > 1 ? (openBlock(), createBlock(unref(ElBadge), {
              key: 0,
              value: _ctx.repeatNum,
              type: unref(badgeType),
              class: normalizeClass(unref(ns).e("badge"))
            }, null, 8, ["value", "type", "class"])) : createCommentVNode("v-if", true),
            unref(iconComponent) ? (openBlock(), createBlock(unref(ElIcon), {
              key: 1,
              class: normalizeClass([unref(ns).e("icon"), unref(typeClass)]),
              color: _ctx.plain ? unref(badgeType) === "warning" ? "#2a3f4d" : "#fff" : unref(badgeType) === "warning" ? "#d9a514" : "#2a3f4d",
              size: "16px",
              innerHTML: unref(iconComponent)
            }, null, 8, ["class", "color", "innerHTML"])) : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "default", {}, () => [
              !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: normalizeClass(unref(ns).e("content"))
              }, [
                _ctx.title ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(unref(ns).e("title"))
                }, toDisplayString(_ctx.title), 3)) : createCommentVNode("v-if", true),
                createTextVNode(" " + toDisplayString(_ctx.message), 1)
              ], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
                createElementVNode("p", {
                  class: normalizeClass(unref(ns).e("content")),
                  innerHTML: _ctx.message
                }, null, 10, ["innerHTML"])
              ], 2112))
            ]),
            _ctx.label ? (openBlock(), createBlock(unref(ElButton), {
              key: 2,
              plain: "",
              class: normalizeClass(unref(ns).e("labelBtn")),
              onClick: onLabelClick
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.label), 1)
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true),
            _ctx.showClose ? (openBlock(), createBlock(unref(ElIcon), {
              key: 3,
              class: normalizeClass(unref(ns).e("closeBtn")),
              onClick: withModifiers(close, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(Close))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 46, ["id"]), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name", "onBeforeLeave", "onAfterLeave"]);
    };
  }
});
var MessageConstructor = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "message.vue"]]);

export { MessageConstructor as default };
//# sourceMappingURL=message2.mjs.map
