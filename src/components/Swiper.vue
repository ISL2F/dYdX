<template>
  <swiper
    :slides-per-view="slidesPerView"
    :space-between="24"
    ref="mySwiper"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="card in cards">
      <div class="card_body">
        <p class="card-category">{{ card.category }}</p>
        <h5 class="card-title">{{ card.title }}</h5>
        <p class="card-amount">Funding amount: {{ card.amount }}</p>
        <p class="card-text">{{ card.description }}</p>
        <div class="card-avatars">
          <div
            v-for="avatar in card.avatars"
            :key="card.avatars"
            class="avatar"
          >
            <img :src="avatar" alt="avatar" />
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  name: "swiper-slider",
  props: { cards: Array },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const tablet = ref(window.innerWidth < 991);
    const mobile = ref(window.innerWidth < 767);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    const slidesPerView = computed(() => {
      if (mobile.value) {
        return 1;
      } else if (tablet.value) {
        return 2;
      } else {
        return 3;
      }
    });
    const handleResize = () => {
      tablet.value = window.innerWidth < 991;
      mobile.value = window.innerWidth < 600;
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });
    return {
      onSwiper,
      onSlideChange,
      slidesPerView,
    };
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.card_body {
  overflow: visible;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 16px;
  background: var(--background-secondary, #393953);
  align-items: flex-start;
  height: 560px;
  position: relative;
}
.card-category {
  color: var(--text-icon-tertiary, #a59eba);

  /* Desktop/Mono Paragraph Medium */
  font-family: Space Mono;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 8px;
}
.card-title {
  color: var(--text-icon-primary, #fff);

  /* Desktop/Heading Medium */
  font-family: Circular Std;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.333%;
  letter-spacing: -0.456px;
  margin-bottom: 8px;
}
.card-amount {
  color: var(--text-icon-tertiary, #a59eba);

  /* Desktop/Mono Paragraph Medium */
  font-family: Space Mono;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 16px;
}
.card-text {
  color: var(--text-icon-primary, #fff);
  font-feature-settings: "clig" off, "liga" off;

  /* Desktop/Paragraph Medium */
  font-family: Circular Std;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: 24px; /* 150% */
  letter-spacing: -0.176px;
  flex: 1 1 auto;
}
.card-avatars {
  display: flex;
  position: relative;
  flex-direction: row;
}
.avatar {
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
