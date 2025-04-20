<template>
  <footer>
    <div class="footer-container">
      <div class="footer-coop">
        <div class="footer-img-somos-coop">
          <a
            href="https://www.somos.coop.br/"
            title="Visitar o site Somos Coop"
          >
            <img
              src="https://www.unimed.coop.br/site/o/sites-theme/images/imagens-rodape/somoscoop.png"
              alt="Somos Coop"
            />
          </a>
        </div>

        <div class="footer-img-ans">
          <a href="https://www.ica.coop/en" title="Visitar o site Coop">
            <img
              src="https://www.unimed.coop.br/site/o/sites-theme/images/imagens-rodape/coop-badge.png"
              alt="Coop"
            />
          </a>
        </div>

        <div class="footer-img-ans">
          <a href="http://www.ans.gov.br/" title="Visitar o site da ANS">
            <img
              src="https://www.unimed.coop.br/site/o/sites-theme/images/imagens-rodape/ans_logo_horiz.gif"
              alt="Agência Nacional de Saúde Suplementar"
            />
          </a>
        </div>
      </div>

      <div class="footer-social-media">
        <h4>Siga nossas redes sociais</h4>
        <div class="social-icons">
          <a
            href="https://www.facebook.com/UnimedOesteDoPara"
            class="footer-icon-address"
            title="Facebook"
          >
            <img
              class="footer-icon-img"
              src="https://www.unimed.coop.br/site/o/sites-theme/images/icons/ico_facebook.svg"
              alt="Ícone do facebook"
            />
          </a>

          <a
            href="https://twitter.com/UnimedOestePara"
            class="footer-icon-address"
            title="Twitter"
          >
            <img
              class="footer-icon-img"
              src="https://www.unimed.coop.br/site/o/sites-theme/images/icons/ico_twitter.svg"
              alt="Ícone do twitter"
            />
          </a>

          <a
            href="https://www.instagram.com/unimedoestepara/"
            class="footer-icon-address"
            title="Instagram"
          >
            <img
              class="footer-icon-img"
              src="https://www.unimed.coop.br/site/o/sites-theme/images/icons/ico_instagram.svg"
              alt="Ícone do instagram"
            />
          </a>

          <a
            href="https://www.youtube.com/channel/UCoXnu-2fBpsbD7dEOF8wPDw"
            class="footer-icon-address"
            title="Youtube"
          >
            <img
              class="footer-icon-img"
              src="https://www.unimed.coop.br/site/o/sites-theme/images/icons/ico_youtube.svg"
              alt="Ícone do youtube"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/unimed-oeste-do-par%C3%A1/"
            class="footer-icon-address"
            title="Linkedin"
          >
            <img
              class="footer-icon-img"
              src="https://www.unimed.coop.br/site/o/sites-theme/images/icons/ico_linkedin.svg"
              alt="Ícone do linkedin"
            />
          </a>
        </div>
        <p class="footer-copyright">
          Copyright 2001 - 2024 Unimed do Brasil - Todos os direitos reservados
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  width: 100vw;
  /* margin-top: 80px; */
  background-color: #ffffff;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  max-width: 1224px;
  margin: auto;
}

.footer-coop {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
}

.footer-img-ans img {
  height: 3.1875rem;
}

.footer-img-somos-coop {
  display: flex;
  align-items: start;
}

.footer-social-media {
  text-align: right;
}

.social-icons {
  display: flex;
  justify-content: end;
  gap: 10px;
}

.footer-icon-address img {
  width: 24px;
  height: 24px;
}

.footer-copyright {
  font-size: 0.875rem;
  word-spacing: -1px;
  margin-top: 10px;
  color: #666;
  padding-bottom: 15px;
}
</style>
