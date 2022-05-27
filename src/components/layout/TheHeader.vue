<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Bienvenidos a mi Pagina Personal</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 a {
  color: rgb(230, 161, 32);
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 481px) {
  header {
    width: 100%;
    color: white;
    height: 5.8rem;
    background-color: #3d008d;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  header a {
    text-decoration: none;
    color: rgb(230, 161, 32);
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
  }
  h1 {
    font-size: 30px;
    margin: 0;
  }
  li {
    font-size: 20px;
    margin: 0 0.5rem;
  }
}

@media only screen and (max-width: 1000px) {
  header {
    height: 5rem;
  }
  header a {
    padding: 0.35rem 1rem;
  }
  h1 {
    font-size: 20px;
  }
  li {
    font-size: 15px;
  }
}

@media only screen and (max-width: 750px) {
  header {
    height: 4.5rem;
  }
  header a {
    padding: 0.15rem 0.75rem;
  }
  h1 {
    font-size: 18px;
  }
  .li {
    font-size: 12px;
  }
}
</style>
