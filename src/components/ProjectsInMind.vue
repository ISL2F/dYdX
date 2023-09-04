<template>
  <div class="projects-in-mind">
    <div class="projects-in-mind__container">
      <div class="projects-in-mind__body">
        <h4 class="projects-in-mind__subtitle">Have a project in mind?</h4>
        <h2 class="projects-in-mind__title">Let’s create something awesome.</h2>
        <link-transparent path="/apply_for_grant"
          >Apply for grant <font-awesome-icon icon="fa-solid fa-arrow-right"
        /></link-transparent>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects-in-mind",
};
</script>

<style lang="scss" scoped>
.projects-in-mind {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1) 35%,
    rgba(0, 0, 0, 0.5) 100%
  );
  padding-bottom: 80px;
  @media (max-width: 991.98px) {
    padding-bottom: 40px;
  }
}
.projects-in-mind__body {
  padding: 40px 16px;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;

  background: var(
    --gradient-brand,
    linear-gradient(322deg, #6966ff 0%, rgba(105, 102, 255, 0.36) 100%)
  );

  /* 100 */
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  .projects-in-mind__subtitle {
    color: var(--text-icon-primary, #fff);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;

    /* Desktop/Paragraph Large */
    font-family: Circular Std;
    font-size: 18px;
    font-style: normal;
    font-weight: 450;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.252px;
    margin-bottom: 8px;
    @media (max-width: 991.98px) {
      font-size: 16px;
    }
  }
  .projects-in-mind__title {
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
    margin-bottom: 40px;
    @media (max-width: 991.98px) {
      font-size: 36px;
    }
    @media (max-width: 767.98px) {
      font-size: 30px;
    }
    @media (max-width: 523.98px) {
      font-size: 24px;
    }
  }
}
</style>
