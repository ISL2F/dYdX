<template>
  <header>
    <div class="header__body">
      <a href="/" class="header__logo">
        <img src="@/assets/logo.svg" alt="Main-logo" />
      </a>
      <nav>
        <ul :class="{ 'burger-active': menuOpen }">
          <li :key="link.title" v-for="link in links">
            <router-link :to="link.path">{{ link.title }}</router-link>
          </li>
          <div class="header-socials" v-if="tablet">
            <a href="#"
              ><img src="../assets/twitter.svg" alt="twitter-link"
            /></a>
            <a href="#"
              ><img src="../assets/discord.svg" alt="discord-link"
            /></a>
          </div>
        </ul>
        <link-blue to="/apply_for_grant" v-if="!tablet"
          >Apply for grant</link-blue
        >
        <link-blue v-if="tablet" to="/apply_for_grant">Apply</link-blue>
        <div class="burger" v-if="tablet">
          <font-awesome-icon
            @click="openMenu"
            v-if="!menuOpen"
            icon="fa-solid fa-bars"
          />
          <font-awesome-icon
            @click="openMenu"
            v-if="menuOpen"
            icon="fa-solid fa-xmark"
          />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-component",

  data() {
    return {
      menuOpen: false,
      links: [
        {
          title: "Discover initiatives",
          path: "/discover",
        },
        {
          title: "Funded grants",
          path: "/funded",
        },
        { title: "Program expenses", path: "/program" },
        { title: "Blog", path: "/blogs" },
        { title: "FAQ", path: "/faq" },
      ],
      tablet: window.innerWidth < 991,
    };
  },
  computed: {
    tabletChange() {
      return this.$data.tablet;
    },
  },
  methods: {
    handleResize() {
      this.tablet = window.innerWidth < 991;
    },
    openMenu() {
      const htmlElement = document.querySelector("html");
      const bodyElement = document.querySelector("body");
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        htmlElement.style.overflow = "hidden";
        bodyElement.style.overflow = "hidden";
      } else {
        htmlElement.style.overflow = "";
        bodyElement.style.overflow = "";
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  width: 100%;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1) 35%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
.header__body {
  max-width: 1376px;
  width: 100%;

  padding: 24px 26px;
  display: flex;
  widows: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  a {
    z-index: 10;
  }
  nav {
    .burger {
      z-index: 10;
      padding: 5px;
      font-size: 20px;
      margin-left: 24px;
    }
    router-link {
      z-index: 10;
    }
    display: flex;
    align-items: center;
    ul {
      display: flex;
      li {
        a {
          color: var(--text-icon-secondary, #c8c7d8);

          /* Desktop/Mono Paragraph Medium */
          font-family: Space Mono;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 150% */
          padding: 12px 16px;
          cursor: pointer;
        }
      }
      @media (max-width: 991.98px) {
        flex-direction: column;
        position: absolute;
        top: 0;
        padding-top: 160px;
        padding-bottom: 100%;
        gap: 32px;
        justify-content: center;
        align-items: center;
        width: 100%;
        left: -100%;
        z-index: 6;
        background: var(--background-secondary, #393953);
        transition: all 0.2s ease-in-out;
        &.burger-active {
          left: 0;
        }
      }
    }
  }
}
.header-socials {
  display: flex;
  gap: 32px;
  margin-top: 5%;
}
</style>
