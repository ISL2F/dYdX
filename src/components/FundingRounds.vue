<template>
  <div class="founding-rounds">
    <div class="founding-rounds__container">
      <div class="founding-rounds__body">
        <h2 class="founding-rounds__title">What’s new?</h2>
        <p class="founding-rounds__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
          risus, consectetur ut bibendum non, gravida non libero.
        </p>
        <router-link class="founding-rounds_link" to="blogs"
          >Read more on our blog
          <font-awesome-icon icon="fa-solid fa-arrow-right"
        /></router-link>
        <div class="funding-rounds__rounds">
          <div class="rounds-item">
            <div class="rounds-item_image">
              <img src="../assets/rounds/round_9.jpg" alt="round-image" />
            </div>
            <div class="rounds-item_body">
              <p class="rounds-item_subtitle">Funding round</p>
              <h5 class="rounds-item_title">Round 9 of approvals</h5>
              <p class="rounds-item_date">January 1, 2022</p>
            </div>
          </div>
          <div class="rounds-item">
            <div class="rounds-item_image">
              <img src="../assets/rounds/round_8.jpg" alt="round-image" />
            </div>
            <div class="rounds-item_body">
              <p class="rounds-item_subtitle">Funding round</p>
              <h5 class="rounds-item_title">Round 8 of approvals</h5>
              <p class="rounds-item_date">January 1, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "funding-rounds",
};
</script>

<style lang="scss" scoped>
.founding-rounds {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 0.1) 100%
  );
}
.founding-rounds__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  @media (max-width: 991.98px) {
    padding: 66px 0;
  }
  @media (max-width: 767.98px) {
    padding: 52px 0;
  }
  @media (max-width: 523.98px) {
    padding: 40px 0;
  }
}
.founding-rounds__title {
  color: var(--text-icon-primary, #fff);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Desktop/Heading Large */
  font-family: Circular Std;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.88px;
  margin-bottom: 16px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    background: url("@/assets/sparkle.svg") 100% no-repeat;
    position: absolute;
    background-size: contain;
    width: 62.5px;
    height: 60px;
    flex-shrink: 0;
    right: -45px;
    top: -35px;
  }
  @media (max-width: 991.98px) {
    font-size: 34px;
    &::after {
      width: 50.167px;
      height: 49px;

      right: -30px;
      top: -23px;
    }
  }
  @media (max-width: 767.98px) {
    font-size: 28px;
    &::after {
      width: 40.167px;
      height: 39px;
    }
  }
  @media (max-width: 523.98px) {
    font-size: 24px;
    &::after {
      width: 29.167px;
      height: 28px;

      right: -25px;
      top: -20px;
    }
  }
}
.founding-rounds__description {
  color: var(--text-icon-secondary, #c8c7d8);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Desktop/Paragraph Large */
  font-family: Circular Std;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.333%;
  letter-spacing: -0.252px;
  max-width: 600px;
  margin-bottom: 24px;
  @media (max-width: 767.98px) {
    font-size: 16px;
  }
}
.founding-rounds_link {
  color: var(--accent-brand, #6966ff);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Desktop/Paragraph Large */
  font-family: Circular Std;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.333%;
  letter-spacing: -0.252px;
  margin-bottom: 80px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 991.98px) {
    margin-bottom: 60px;
  }
  @media (max-width: 767.98px) {
    margin-bottom: 50px;
  }
  @media (max-width: 523.98px) {
    margin-bottom: 40px;
  }
}
.funding-rounds__rounds {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}
.rounds-item {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: var(--background-secondary, #393953);
}
.rounds-item_image {
  widows: 100%;

  background: var(--background-secondary, #393953);
  img {
    width: 100%;
    height: 100%;
    border-radius: 18.5px;
  }
}
.rounds-item_body {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 216px;
}
.rounds-item_subtitle {
  color: var(--text-icon-secondary, #c8c7d8);

  /* Desktop/Mono Paragraph Medium */
  font-family: Space Mono;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 8px;
}
.rounds-item_title {
  flex: 1 1 auto;
  color: var(--text-icon-primary, #fff);

  /* Desktop/Heading Medium */
  font-family: Circular Std;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.333%;
  letter-spacing: -0.456px;
}
.rounds-item_date {
  color: var(--text-icon-secondary, #c8c7d8);

  /* Desktop/Mono Paragraph Medium */
  font-family: Space Mono;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
</style>
