<template>
  <router-link :to="path"><slot></slot></router-link>
</template>

<script>
export default {
  name: "link-grey",
  props: {
    path: String,
  },
};
</script>

<style lang="scss" scoped>
a {
  display: flex;
  width: 180px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 7.29px;
  background: var(--background-secondary, #393953);
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
}
</style>
