<template>
  <div class="cat-item">
    <p class="cat-item_title">
      {{ categoryItem.title }}
    </p>
    <p class="cat-item_-description">{{ categoryItem.text }}</p>
    <p class="cat-item_-amount">Funding amount: {{ categoryItem.amount }}</p>
    <p :id="categoryItem.category" class="cat-item_category">
      {{ categoryItem.category }}
      <font-awesome-icon
        v-if="categoryItem.category === 'Completed'"
        icon="fa-solid fa-check"
      />
    </p>
  </div>
</template>

<script>
export default {
  name: "category-item",
  props: {
    categoryItem: Object,
  },
};
</script>

<style lang="scss" scoped>
.cat-item {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 24px;
  gap: 8px;
  border-radius: 16px;
  border: 1px solid var(--border-card, #ffffff1b);
  background: var(--background-secondary, #393953);
  max-width: 808px;
}
.cat-item_category {
  position: absolute;
  border: 1px solid var(--border-card, #ffffff1b);

  top: 24px;
  display: flex;
  padding: 4px 16px;
  align-items: flex-start;
  gap: 16px;
  border-radius: 100px;

  right: 24px;
  &#Open {
    border-radius: 100px;
    background: var(--accent-brand, #6966ff);
  }
  &#Funded {
    background: var(--background-primary, #1c1c28);
  }
  &#Completed {
    background: var(--accent-green, #16b57f);
  }
  @media (max-width: 523.98px) {
    position: relative;
    top: 0;
    right: 0;

    align-self: flex-start;
  }
}
.cat-item_title {
  color: var(--text-icon-primary, #fff);

  /* Desktop/Heading Medium */
  font-family: Circular Std;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.456px;
}
.cat-item_-description {
  color: var(--text-icon-primary, #fff);
  font-feature-settings: "clig" off, "liga" off;

  /* Desktop/Paragraph Medium */
  font-family: Circular Std;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 24px; /* 150% */
  letter-spacing: -0.176px;
}
.cat-item_-amount {
  color: var(--text-icon-secondary, #c8c7d8);

  /* Desktop/Mono Paragraph Medium */
  font-family: Space Mono;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
</style>
