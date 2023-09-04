<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__body">
        <h1 class="hero__title">
          Powering the future of dYdX through community grants
        </h1>
        <div class="hero__btns">
          <link-grey path="/discover_rfps">Discover RFPs</link-grey>
          <link-blue path="/apply_for_grant"
            >Apply for grant <font-awesome-icon icon="fa-solid fa-arrow-right"
          /></link-blue>
        </div>
        <div class="hero__counts">
          <p>
            <span>100+ </span><br />
            projects funded
          </p>

          <p>
            <span>$3+ milion </span><br />
            awarded
          </p>
          <p>
            <span>400+ </span><br />
            projects funded
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
};
</script>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 0.1) 100%
  );
}
.hero__body {
  .hero__counts {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 32px;
    p {
      color: var(--text-icon-secondary, #c8c7d8);
      text-align: center;
      font-feature-settings: "clig" off, "liga" off;

      /* Desktop/Mono Paragraph Large */
      font-family: Space Mono;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 133.333% */
      span {
        color: var(--base-white, #fff);
        text-align: center;
        font-feature-settings: "clig" off, "liga" off;

        /* Desktop/Mono Paragraph XLarge */
        font-family: Space Mono;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px; /* 160% */
      }
    }

    @media (max-width: 523.98px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0 128px 0;
  @media (max-width: 991.98px) {
    padding: 60px 0 80px 0;
  }
  @media (max-width: 767.98px) {
    padding: 50px 0 50px 0;
  }
  @media (max-width: 523.98px) {
    padding: 40px 0;
  }
  .hero__btns {
    display: flex;
    gap: 32px;
    margin-bottom: 80px;

    @media (max-width: 991.98px) {
      gap: 24px;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin-bottom: 60px;
    }
    @media (max-width: 767.98px) {
      gap: 20px;
      margin-bottom: 50px;
    }
    @media (max-width: 523.98px) {
      gap: 16px;
      margin-bottom: 40px;
      a {
        width: 100%;
      }
    }
  }
  .hero__title {
    color: var(--text-icon-primary, #fff);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;

    /* Desktop/Hero */
    font-family: Circular Std;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: -1.76px;
    margin-bottom: 40px;
    position: relative;
    display: inline-block;
    max-width: 808px;
    &::after {
      content: "";
      background: url("../assets/hero_line.svg");
      position: absolute;
      display: flex;
      width: 277px;
      height: 24px;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      right: 53px;
      @media (max-width: 991.98px) {
        background: url("../assets/hero_line-2.svg") 100% no-repeat;
      }
    }
    @media (max-width: 991.98px) {
      font-size: 62px;
    }
    @media (max-width: 767.98px) {
      font-size: 50px;
    }
    @media (max-width: 523.98px) {
      letter-spacing: -0.84px;
      font-size: 40px;
    }
  }
  position: relative;
  &::after {
    content: "";
    background: url("../assets/down-arrow.svg") 100% no-repeat;
    background-size: contain;
    position: absolute;
    width: 32px;
    height: 100px;
    flex-shrink: 0;
    bottom: -50px;
    @media (max-width: 991.98px) {
      width: 28px;
      height: 80px;
    }
    @media (max-width: 767.98px) {
      width: 24px;
      bottom: -45px;

      height: 65px;
    }
    @media (max-width: 523.98px) {
      width: 20px;
      bottom: -35px;

      height: 50px;
    }
  }
}
</style>
