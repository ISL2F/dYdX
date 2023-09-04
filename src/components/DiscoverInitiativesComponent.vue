<template>
  <div class="discover-initiatives-component">
    <div class="discover-initiatives-component__container">
      <div class="discover-initiatives-component__body">
        <h2 class="discover-initiatives-component__title">
          Discover initiatives (RFPs)
        </h2>
        <p class="discover-initiatives-component__subtitle">
          The list below includes initial ideas that we think could make
          excellent Grants. This is a living list that will continue to update
          as ideas popup.
        </p>
        <div class="discover-initiatives-component__category-btns">
          <category-btn
            :class="{ active: activeCat === cat.title }"
            :id="cat.title"
            @click="changeCat"
            v-for="cat in categories"
            >{{ cat.title }}</category-btn
          >
        </div>
        <div class="discover-initiatives-component__items">
          <category-item
            v-for="categoryItem in data"
            :categoryItem="categoryItem"
            :key="categoryItem.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import discoverData from "./data/discoverData";
export default {
  name: "discover-initiatives-component",
  data() {
    return {
      data: discoverData,
      activeCat: "All",
      categories: [
        { title: "All" },
        { title: "Open" },
        { title: "Funded" },
        { title: "Completed" },
      ],
    };
  },
  methods: {
    changeCat(e) {
      this.activeCat = e.target.id;
      if (this.activeCat === "All") {
        this.data = discoverData;
      } else {
        this.data = discoverData.filter(
          (item) => item.category === this.activeCat
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.discover-initiatives-component {
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
.discover-initiatives-component__body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.discover-initiatives-component__title {
  color: var(--base-white, #fff);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Desktop/Heading XLarge */
  font-family: Circular Std;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -1.32px;
  margin-bottom: 24px;
  @media (max-width: 991.98px) {
    font-size: 52px;
  }
  @media (max-width: 767.98px) {
    font-size: 44px;
  }
  @media (max-width: 523.98px) {
    font-size: 38px;
  }
}
.discover-initiatives-component__subtitle {
  color: var(--text-icon-secondary, #c8c7d8);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  max-width: 808px;

  /* Desktop/Paragraph Large */
  font-family: Circular Std;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.333%;
  letter-spacing: -0.252px;
  margin-bottom: 40px;
  @media (max-width: 523.98px) {
    font-size: 16px;
  }
}
.discover-initiatives-component__category-btns {
  display: flex;
  gap: 24px;
  align-self: center;
  @media (max-width: 399.98px) {
    gap: 10px;
  }
}
.discover-initiatives-component__items {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 808px;

  padding: 80px 0px;
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
