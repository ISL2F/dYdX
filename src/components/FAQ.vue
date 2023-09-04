<template>
  <div class="faq">
    <div class="faq__container">
      <div class="faq__body">
        <h2 class="faq__title">Frequently asked questions</h2>
        <p class="faq__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
          risus, consectetur ut bibendum non, gravida non libero.
        </p>
        <div class="faq__accordion">
          <div class="faq__item" :key="item.title" v-for="item in faqItems">
            <p @click="openAccItem" :id="item.title" class="item-faq_title">
              {{ item.title }}
              <font-awesome-icon class="plus" icon="fa-solid fa-plus" />
              <font-awesome-icon class="minus" :icon="['fas', 'minus']" />
            </p>
            <p :id="item.title" class="item-faq_text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faq from "@/components/data/faq.js";
export default {
  name: "faq",
  data() {
    return {
      faqItems: faq,
    };
  },
  methods: {
    openAccItem(e) {
      const allAccs = document.querySelectorAll(".item-faq_text");
      const allAccsTittle = document.querySelectorAll(".item-faq_title");
      allAccsTittle.forEach((item) => item.classList.remove("active"));
      allAccs.forEach((item) => item.classList.remove("active"));
      allAccs.forEach((item) => {
        if (item.id === e.target.id) {
          item.classList.add("active");
        }
      });
      allAccsTittle.forEach((item) => {
        if (item.id === e.target.id) {
          item.classList.add("active");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.faq {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1) 35%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
.faq__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 0;
  @media (max-width: 991.98px) {
    padding: 65px 0;
  }
  @media (max-width: 767.98px) {
    padding: 54px 0;
  }
  @media (max-width: 523.98px) {
    padding: 40px 0;
  }
}
.faq__title {
  color: var(--text-icon-primary, #fff);

  font-feature-settings: "clig" off, "liga" off;

  /* Desktop/Heading Large */
  font-family: Circular Std;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.88px;
  margin-bottom: 24px;
  position: relative;
  text-align: center;
  align-self: center;
  &::after {
    content: "";
    background: url("@/assets/circle.svg") 100% no-repeat;
    position: absolute;
    background-size: contain;
    flex-shrink: 0;
    width: 230px;
    height: 64px;
    right: -40px;
    top: -15px;
  }
  @media (max-width: 991.98px) {
    font-size: 36px;
    &::after {
      width: 190px;
      height: 54px;
      right: -20px;
      top: -5px;
    }
  }
  @media (max-width: 767.98px) {
    font-size: 30px;
    &::after {
      width: 170px;
      height: 44px;
      right: -15px;
      top: 0px;
    }
  }
  @media (max-width: 523.98px) {
    font-size: 24px;
    max-width: 272px;

    &::after {
      width: 129px;
      height: 35.896px;
      top: 46%;
      right: 27%;
    }
  }
}
.faq__description {
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
  margin-bottom: 80px;
  align-self: center;
  @media (max-width: 991.98px) {
    margin-bottom: 65px 0;
  }
  @media (max-width: 767.98px) {
    margin-bottom: 54px 0;
  }
  @media (max-width: 523.98px) {
    margin-bottom: 40px 0;
  }
}
.faq__accordion {
  display: flex;
  flex-direction: column;
  border-top: solid 1px var(--border-subtle, #393953);
  max-width: 808px;
  align-self: center;
}
.faq__item {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 24px;
  border-bottom: solid 1px var(--border-subtle, #393953);
}
.item-faq_title {
  display: inline-flex;
  justify-content: space-between;
  padding: 24px 0 10px 0;
  width: 100%;
  color: var(--text-icon-primary, #fff);
  font-feature-settings: "clig" off, "liga" off;

  /* Desktop/Paragraph Large */
  font-family: Circular Std;
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.252px;
  svg {
    pointer-events: none;
  }
  .plus {
    display: inline-block;
  }
  .minus {
    display: none;
  }
  &.active {
    .plus {
      display: none;
    }
    .minus {
      display: inline-block;
    }
  }
}

.item-faq_text {
  height: 0;
  opacity: 0;
  color: var(--text-icon-secondary, #a7a6b2);

  font-feature-settings: "clig" off, "liga" off;

  /* Desktop/Paragraph Large */
  font-family: Circular Std;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.333%;
  letter-spacing: -0.252px;
  transition: opacity 0.2s ease-in;
  &.active {
    height: 100%;
    opacity: 1;
  }
}
</style>
