<template>
  <div class="grant-item">
    <div class="grant-item_body">
      <p class="grant-item_category">{{ grant.category }}</p>
      <h5 class="grant-item_title">{{ grant.title }}</h5>
      <p class="grant-item__amount">Funding amount: {{ grant.amount }}</p>
      <p class="grant-item_description">{{ grant.description }}</p>
      <div class="grant-item_avatars">
        <div
          v-if="grant.avatars.length <= 3"
          v-for="avatar in grant.avatars"
          class="grant-item_avatar"
        >
          <img :src="avatar" alt="" />
        </div>
        <div
          v-else
          v-for="(avatar, index) in grant.avatars.slice(0, 3)"
          class="grant-item_avatar"
        >
          <img :src="avatar" alt="" />
        </div>
        <span v-if="grant.avatars.length > 3"
          >+{{ grant.avatars.length - 3 }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "grant-item",
  props: {
    grant: Object,
  },
};
</script>

<style lang="scss" scoped>
.grant-item {
  display: flex;
  height: 560px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid var(--border-card, #ffffff37);
  background: var(--background-secondary, #393953);
  @media (max-width: 991.98px) {
    height: 480px;
  }
}
.grant-item_body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.grant-item_category {
  color: var(--text-icon-tertiary, #a59eba);

  /* Desktop/Mono Paragraph Medium */
  font-family: Space Mono;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin-bottom: 8px;
  @media (max-width: 991.98px) {
    font-size: 14px;
  }
}
.grant-item_title {
  margin-bottom: 8px;
  color: var(--text-icon-primary, #fff);

  /* Desktop/Heading Medium */
  font-family: Circular Std;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.333%;
  letter-spacing: -0.456px;
  @media (max-width: 991.98px) {
    font-size: 20px;
  }
}
.grant-item__amount {
  margin-bottom: 16px;
  color: var(--text-icon-tertiary, #a59eba);

  /* Desktop/Mono Paragraph Medium */
  font-family: Space Mono;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  @media (max-width: 991.98px) {
    font-size: 14px;
  }
}
.grant-item_description {
  color: var(--text-icon-primary, #fff);
  font-feature-settings: "clig" off, "liga" off;

  /* Desktop/Paragraph Medium */
  font-family: Circular Std;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
  letter-spacing: -0.176px;
  flex: 1 1 auto;
  @media (max-width: 991.98px) {
    font-size: 14px;
  }
}
.grant-item_avatars {
  display: flex;
  padding-left: 10px;
  span {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--background-secondary, #393953);
    background: var(--accent-brand, #6966ff);
    border-radius: 50%;
    margin-left: -10px;
  }
}
.grant-item_avatar {
  width: 40px;
  height: 40px;
  border: solid 2px #393953;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  margin-left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
