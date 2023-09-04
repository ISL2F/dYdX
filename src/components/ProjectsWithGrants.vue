<template>
  <div class="with-grants">
    <div class="with-grants__container">
      <div class="with-grants__body">
        <h2 class="with-grants__title">Projects built with grants</h2>
        <p class="with-grants__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
          risus, consectetur ut bibendum non, gravida non libero.
        </p>
        <router-link to="funded_projects" class="with-grants__link">
          View all funded projects
          <font-awesome-icon icon="fa-solid fa-arrow-right"
        /></router-link>
        <div class="with-grants__cards">
          <swiper-slider :cards="cards" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardsItems from "./data/cards";
export default {
  name: "projects-with-grants",
  data() {
    return {
      cards: cardsItems,
    };
  },
};
</script>

<style lang="scss" scoped>
.with-grants {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1) 35%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
.with-grants__body {
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  @media (max-width: 991.98px) {
    padding: 70px 0;
  }
  @media (max-width: 767.98px) {
    padding: 55px 0;
  }
  @media (max-width: 523.98px) {
    padding: 40px 0;
  }
  .with-grants__title {
    color: var(--text-icon-primary, #fff);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;

    /* Desktop/Heading Large */
    font-family: Circular Std;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 120% */
    letter-spacing: -0.88px;
    margin-bottom: 16px;
  }
  .with-grants__subtitle {
    color: var(--text-icon-secondary, #c8c7d8);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;

    /* Desktop/Paragraph Large */
    font-family: Circular Std;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;
    max-width: 600px;
    align-self: center;
    margin-bottom: 24px;
  }
  .with-grants__link {
    color: var(--accent-brand, #6966ff);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;

    /* Desktop/Paragraph Large */
    font-family: Circular Std;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;
    display: inline-flex;
    align-self: center;
    gap: 8px;
    align-items: center;
    margin-bottom: 80px;
    @media (max-width: 991.98px) {
      margin-bottom: 70px;
    }
    @media (max-width: 767.98px) {
      margin-bottom: 60px;
    }
    @media (max-width: 523.98px) {
      margin-bottom: 48px;
    }
  }
}
.with-grants__cards {
  display: flex;
  overflow: visible;
}
</style>
