<template>
  <button class="category-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "category-btn",
};
</script>

<style lang="scss" scoped>
.category-btn {
  color: var(--text-icon-primary, #fff);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Desktop/Label */
  font-family: Circular Std;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.176px;
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  background: transparent;
  gap: 4px;
  &:hover,
  &.active {
    border-radius: 7.29px;
    background: var(--background-secondary, #393953);
  }
}
</style>
