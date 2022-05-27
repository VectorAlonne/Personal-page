<template>
  <div class="inner-content">
    <div class="footer-main">
      <div class="basic-contact">
        <span class="say-hello">Saludame</span>
      </div>
      <ul>
        <li>
          <a href="https://outlook.live.com/mail/0/">
            lucasvargas@hotmail.es
          </a>
        </li>
        <li>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            lucasavg14@gmail.com
          </a>
        </li>
      </ul>
    </div>

    <div class="footer-bottom">
      <span class="copyright">
        <p>© Lucas Vargas 2022</p>
      </span>
      <ul class="social-contact">
        <li class="social-link">
          <a
            href="https://www.facebook.com/profile.php?id=100058927570475"
            target="_blank"
            >FC</a
          >
        </li>
        <li class="social-link">
          <a href="https://twitter.com/LucasVargasGar1" target="_blank">TW</a>
        </li>
        <li class="social-link">
          <a href="https://www.instagram.com/lucasavg99/" target="_blank">IG</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.inner-content {
  padding: 0 10rem;
  background-color: rgb(82, 14, 82);
}

a {
  text-decoration: none;
  color: #f391e3;
}

@media only screen and (min-width: 481px) {
  .footer-main {
    margin-bottom: 5.5rem;
  }
  .basic-contact {
    line-height: 2.5;
    margin-right: 18vw;
  }
  .say-hello {
    font-size: 2.15rem;
    color: rgb(230, 161, 32);
    letter-spacing: 0.25em;
  }
  ul {
    font-size: 1.25em;
    margin: 0;
    padding: 0;
    list-style-type: none;
    line-height: 2.5;
  }
  .footer-bottom {
    width: 100%;
    display: flex;
    padding-top: 3rem;
    justify-content: space-between;
    border-top: 1px solid #f391e3;
  }
  .copyright {
    font-size: 1.5rem;
    color: rgb(230, 161, 32);
  }
  .social-contact {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }
  .social-link {
    align-items: center;
    margin-right: 3rem;
    margin-left: 3rem;
  }
}

@media only screen and (max-width: 1000px) {
  .say-hello,
  .social-contact {
    font-size: 1.9rem;
  }
  .copyright {
    font-size: 1.2rem;
  }
  ul {
    font-size: 1rem;
  }
  .social-contact {
    font-size: 1.2rem;
  }
  .social-link {
    margin-right: 2.5rem;
    margin-left: 2.5rem;
  }
}

@media only screen and (max-width: 750px) {
  .say-hello,
  .social-contact {
    font-size: 1.45rem;
  }
  .copyright {
    font-size: 1rem;
  }
  ul {
    font-size: 0.75rem;
  }
  .social-contact {
    font-size: 1rem;
  }
  .social-link {
    margin-right: 2rem;
    margin-left: 2rem;
  }
}
</style>
