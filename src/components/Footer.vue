<template>
  <footer>
    <div class="footer__container">
      <div class="footer__body">
        <nav>
          <a href="/"
            ><img src="../assets/logo-footer.svg" alt="footer-link"
          /></a>
          <ul>
            <li :key="link.title" v-for="link in links">
              <router-link :to="link.path"
                >{{ link.title }}
                <img :src="link.icon" v-if="link.icon" alt="link-icon" />
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="socials">
          <a href="#"><img src="../assets/twitter.svg" alt="twitter-link" /></a>
          <a href="#"><img src="../assets/discord.svg" alt="discord-link" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import exLink from "../assets/external-link.svg";
export default {
  name: "footer-component",
  data() {
    return {
      links: [
        {
          title: "About",
          path: "about",
        },
        {
          title: "FAQ",
          path: "faq",
        },
        {
          title: "Brand assets",
          path: "brand_assets",
        },
        {
          title: "dYdX Foundation",
          path: "dydx_foundation",
          icon: exLink,
        },
        {
          title: "dYdX trading",
          path: "dydx_trading",
          icon: exLink,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 0.1) 100%
  );
}
.footer__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 40px;
  @media (max-width: 991.98px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    padding-top: 40px;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    @media (max-width: 991.98px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    ul {
      display: flex;
      gap: 32px;
      @media (max-width: 991.98px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
      li {
        a {
          display: flex;
          align-items: center;
          color: var(--text-icon-secondary, #c8c7d8);

          /* Desktop/Mono Paragraph Medium */
          font-family: Space Mono;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 150% */
          gap: 8px;
        }
      }
    }
  }
  .socials {
    display: flex;
    gap: 32px;
  }
}
</style>
