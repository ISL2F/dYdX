<template>
  <div class="app-process">
    <div class="app-process__container">
      <div class="app-process__body">
        <h2 class="app-process__title">Application process</h2>
        <p class="app-process__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
          risus, consectetur ut bibendum non, gravida non libero.
        </p>
        <div class="app-process__cards">
          <img class="curved-1" src="@/assets/arrow_curved_01.svg" alt="" />
          <img class="curved-2" src="@/assets/arrow_curved_02.svg" alt="" />

          <div class="app-process__card-item card-item-1">
            <p class="card-item_number">1</p>
            <p class="card-item_title">Apply</p>
            <p class="card-item_text">
              Submit a complete application to the dYdX Grants Team including as
              many details as possible about the proposed idea and their
              background.
            </p>
          </div>
          <div class="app-process__card-item card-item-2">
            <p class="card-item_number">2</p>
            <p class="card-item_title">Interview</p>
            <p class="card-item_text">
              If your application is selected, the dYdX Grants will conduct 1-2
              interviews to collect more information on the Applicant's
              background and the proposal.
            </p>
          </div>
          <div class="app-process__card-item card-item-3">
            <p class="card-item_number">3</p>
            <p class="card-item_title">Grant offer</p>
            <p class="card-item_text">
              The dYdX Grants team will determine if the proposal fits into the
              grant program. A vesting schedule and timeline for product
              development reports will also be determined in the offer;
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-process",
};
</script>

<style lang="scss" scoped>
.app-process {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 0.1) 100%
  );
}
.app-process__body {
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
.app-process__title {
  color: var(--text-icon-primary, #fff);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  z-index: 5;

  /* Desktop/Heading Large */
  font-family: Circular Std;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.88px;
  position: relative;
  margin-bottom: 16px;
  &::after {
    content: "";
    background: url("@/assets/traced.svg") 100% no-repeat;
    position: absolute;
    background-size: contain;
    width: 161px;
    height: 16px;
    flex-shrink: 0;
    right: -15px;
    bottom: -8px;
  }
  @media (max-width: 991.98px) {
    font-size: 35px;
    &::after {
      width: 130.5px;
      height: 13px;
      right: -5px;
      bottom: -7px;
    }
  }
  @media (max-width: 767.98px) {
    font-size: 30px;
    &::after {
      width: 100.5px;
      height: 10px;
      right: 0;
      bottom: -5px;
    }
  }
  @media (max-width: 523.98px) {
    font-size: 24px;
    &::after {
      width: 80.5px;
      height: 8px;
      right: 0;
      bottom: -5px;
    }
  }
}
.app-process__subtitle {
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
  margin-bottom: 80px;
  max-width: 600px;
  @media (max-width: 991.98px) {
    font-size: 16px;
    margin-bottom: 65px;
  }
  @media (max-width: 991.98px) {
    margin-bottom: 55px;
  }
  @media (max-width: 991.98px) {
    margin-bottom: 40px;
  }
}
.app-process__cards {
  display: flex;
  gap: 32px;
  position: relative;
  @media (max-width: 991.98px) {
    flex-direction: column;
  }
}
.app-process__card-item {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 392px;
  height: 480px;

  flex-direction: column;
  align-items: flex-start;

  border-radius: 16px;
  background: var(--background-secondary, #393953);

  position: relative;
  @media (max-width: 1250px) {
    width: 350px;
  }
  @media (max-width: 1130px) {
    width: 300px;
  }
  @media (max-width: 991.98px) {
    width: 392px;
  }
  @media (max-width: 523.98px) {
    width: 272px;
    height: 320px;
  }
}
.card-item-1 {
  transform: rotate(-1deg);
  margin-top: -20px;
}
.card-item_number {
  color: var(--text-icon-primary, #fff);
  text-align: center;
  font-family: "Nanum Pen Script";
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 26px;
  @media (max-width: 991.98px) {
    font-size: 58px;
    margin-bottom: 20px;
  }
  @media (max-width: 767.98px) {
    font-size: 52px;
    margin-bottom: 16px;
  }
  @media (max-width: 523.98px) {
    font-size: 48px;
    margin-bottom: 12px;
  }
}
.card-item_title {
  color: var(--text-icon-primary, #fff);

  /* Desktop/Heading Medium */
  font-family: Circular Std;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.333%;
  letter-spacing: -0.456px;
  margin-bottom: 10px;
}
.card-item_text {
  color: var(--text-icon-primary, #fff);
  font-feature-settings: "clig" off, "liga" off;

  /* Desktop/Paragraph Medium */
  font-family: Circular Std;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%;
  letter-spacing: -0.176px;
  @media (max-width: 523.98px) {
    font-size: 14px;
  }
}
.card-item-2 {
  transform: rotate(2deg);
}
.card-item-3 {
  transform: rotate(-2deg);
  margin-top: -20px;
}

.curved-1 {
  background-size: contain;
  position: absolute;
  width: 120px;
  height: 40px;
  left: 326px;
  top: -5px;
  z-index: 5;
  display: block;
  pointer-events: none;
  @media (max-width: 1250px) {
    left: 286px;
    top: -5px;
  }
  @media (max-width: 1130px) {
    left: 236px;
    top: -5px;
  }
  @media (max-width: 991.98px) {
    transform: rotate(90deg);
    top: 450px;
    left: 50px;
    width: 100px;
    height: 32px;
  }
  @media (max-width: 523.98px) {
    width: 90px;
    height: 30px;
    left: 30px;
    top: 300px;
  }
}
.curved-2 {
  background-size: contain;
  position: absolute;
  pointer-events: none;

  width: 120px;
  height: 40px;
  right: 340px;
  bottom: 105px;

  z-index: 5;
  display: block;
  @media (max-width: 1250px) {
    right: 300px;
  }
  @media (max-width: 1130px) {
    right: 250px;
    bottom: 85px;
  }
  @media (max-width: 991.98px) {
    transform: rotate(90deg);
    width: 100px;
    height: 32px;
    right: 340px;
    bottom: 475px;
  }
  @media (max-width: 523.98px) {
    right: 225px;
    width: 90px;
    bottom: 320px;
    height: 30px;
  }
}
</style>
