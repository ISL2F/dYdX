<template>
  <div class="funded-grants-component">
    <div class="funded-grants-component__container">
      <div class="funded-grants-component__body">
        <h2 class="funded-grants-component__title"></h2>
        <div class="funded-grants-component__btns">
          <category-btn
            :class="{ active: category === 'All' }"
            v-for="category in categories"
            >{{ category }}</category-btn
          >
        </div>
        <div class="funded-grants-component__radio-btn">
          <input id="completed" type="checkbox" class="checkbox" />
          <span></span>
          <label for="completed">Show only completed</label>
        </div>
        <div class="funded-grants-component__grants-items">
          <grant-item v-for="grant in grants" :grant="grant" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import grantsData from "@/components/data/fundedGrantsData.js";
export default {
  name: "funded-grants-component",
  data() {
    return {
      grants: grantsData,
      categories: [
        "All",
        "Technical / Tool Development",
        "Governance",
        "Growth / Marketing",
        "Analytics",
        "Third Party Provider",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.funded-grants-component {
  padding: 80px 0px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 0.1) 100%
  );

  @media (max-width: 991.98px) {
    padding: 65px 0;
  }
  @media (max-width: 767.98px) {
    padding: 52px 0;
  }
  @media (max-width: 523.98px) {
    padding: 40px 0;
  }
}

.funded-grants-component__body {
  display: flex;
  flex-direction: column;
}
.funded-grants-component__title {
  color: var(--text-icon-primary, #fff);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Desktop/Heading XLarge */
  font-family: Circular Std;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px; /* 120% */
  letter-spacing: -1.32px;
  margin-bottom: 40px;
  @media (max-width: 991.98px) {
    margin-bottom: 36px;
    font-size: 52px;
  }
  @media (max-width: 767.98px) {
    margin-bottom: 30px;
    font-size: 42px;
  }
  @media (max-width: 523.98px) {
    margin-bottom: 24px;
    font-size: 32px;
  }
}
.funded-grants-component__btns {
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
  @media (max-width: 991.98px) {
    margin-bottom: 36px;
    gap: 16px;
    flex-wrap: wrap;
  }
  @media (max-width: 767.98px) {
    margin-bottom: 30px;
  }
  @media (max-width: 523.98px) {
    margin-bottom: 24px;
  }
}
.funded-grants-component__radio-btn {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  padding-left: 56px;
  span {
    background: var(--background-secondary, #393953);
    content: "";
    width: 35px;
    height: 15px;
    position: absolute;
    left: 0;
    top: 0px;
    border-radius: 25px;
    transition: all 0.2s ease-in-out;
  }
  span::after {
    background: #fff;
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    top: -2px;
    border-radius: 25px;
    transition: all 0.2s ease-in-out;
  }
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"]:checked + span::after {
  left: 18px;
}
input[type="checkbox"]:checked + span {
  background: #6966ff;
}
.funded-grants-component__grants-items {
  padding: 80px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;

  @media (max-width: 991.98px) {
    padding: 65px 0;
  }
  @media (max-width: 767.98px) {
    padding: 52px 0;
  }
  @media (max-width: 523.98px) {
    padding: 40px 0;
  }
}
</style>
