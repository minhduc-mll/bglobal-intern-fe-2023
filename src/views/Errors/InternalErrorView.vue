<template>
  <div class="internal-error-container">
    <img src="@/assets/img/oc-think.svg" alt="500" class="image" />
    <div class="content">
      <h1 class="title">500</h1>
      <span class="desc">{{ app.t("app.internalError") }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseComponent, defineClassComponent } from "@/plugins/component.plugin";

const app = defineClassComponent(
  class View extends BaseComponent {
    public constructor() {
      super();
      document.title = this.t("title.internalError");
    }
  },
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
@import "@/assets/scss/admin";

.internal-error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.5rem 0;

  & .image {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 33.33333333%;
    padding: 0 0.75rem;
    vertical-align: middle;
  }

  & .content {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 33.33333333%;

    & .title {
      font-size: 5rem;
      font-weight: 600;
      line-height: 1.2;
    }

    & .desc {
      font-size: 1.09375rem;
      font-weight: 400;
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }
}
</style>
