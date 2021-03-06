<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="wheel-dialog-overlay" @click="onClickOverlay"></div>
      <div class="wheel-dialog-wrapper">
        <div class="wheel-dialog">
          <header>
            <slot name="title" />
            <span @click="close" class="wheel-dialog-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button @click="onClickCancel">取消</Button>
            <Button @click="onClickOk" theme="main">确定</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang="ts">
import Button from "./Button.vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  components: {
    Button,
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const onClickOk = () => {
      if (props.ok && props.ok() !== false) {
        close();
      }
    };
    const onClickCancel = () => {
      props.cancel && props.cancel();
      close();
    };

    return { close, onClickOverlay, onClickOk, onClickCancel };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
$fade-out: fade-out(black, 0.5);
$padding: 12px 16px;
.wheel-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px $fade-out;
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $fade-out;
    z-index: 30;
  }

  &-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 31;
  }

  > header {
    padding: $padding;
    border-bottom: 1px solid $border-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }

  > main {
    padding: $padding;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: $padding;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>