<template>
  <router-link :to="path" class="blue-link"><slot></slot></router-link>
</template>

<script>
export default {
  name: "link-blue",
  props: {
    path: String,
  },
};
</script>

<style lang="scss" scoped>
.blue-link {
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
  gap: 10px;
  border-radius: 7.29px;
  background: var(--accent-brand, #6966ff);
  cursor: pointer;
}
</style>
