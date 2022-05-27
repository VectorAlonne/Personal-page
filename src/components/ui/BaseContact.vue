<template>
  <div class="container-form">
    <article>
      <div class="form-title">
        <h1>Comunicate conmigo</h1>
        <p>
          Quieres preguntarme algo? Una oferta de trabajo?<br />O conocerme
          mejor? Solo mandame un mensaje por aqui.
        </p>
      </div>
    </article>
    <form @submit.prevent="handleSubmit" class="form-content">
      <div class="form-row-name">
        <div class="full-name">
          <label class="label" for="name">Tu nombre </label>
          <input
            v-model.trim="name"
            type="text"
            placeholder="Escribe tu Nombre"
            name="name"
            required="required"
          />
        </div>
        <div>
          <div class="email">
            <label for="email">Correo Electronico </label>
            <input
              v-model.trim="email"
              placeholder="Escribe tu Correo"
              type="email"
              required="required"
            />
          </div>
        </div>
      </div>
      <div class="form-row-textarea">
        <label for="message">Tu Mensaje</label>
        <textarea
          
          v-model.trim="message"
          placeholder="Escribeme algo..."
          name="message"
          required="required"
          rows="7"
          minlength="30"
        ></textarea>
      </div>
      <button class="send" type="submit">
        <div>Envíar</div>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === "" ||
        this.name === ""
      ) {
        this.formIsValid = false;
        return;
      }
    },
    handleSubmit() {
      console.log('form submitted')
    }
  },
};
</script>

<style scoped>
/* container */
.container-form {
  height: 600px;
  padding: 0 10rem;
  display: flex;
  justify-content: center;
  flex-flow: column;
}

.full-name {
  margin-right: 2.5rem;
}

input:focus {
  
  background-color: rgb(156, 26, 156);
}

::placeholder {
  font-size: 15px;
  color: rgb(230, 161, 32);
}

input:focus::placeholder {
  color: transparent;
}

textarea:focus {
  background-color: rgb(156, 26, 156);
}

textarea:focus::placeholder {
  color: transparent;
}

.send:hover {
  background-color: #2f006d;
}

.footer {
  padding: 0 10rem;
  padding-top: 5rem;
  padding-bottom: 3rem;
  background-color: rgb(82, 14, 82);
}

textarea {
  padding: 10px;
  resize: none;
}
@media only screen and (min-width: 481px) {
  h1 {
    margin: 0;
    font-size: 50px;
  }
  p {
    font-size: 30px;
    letter-spacing: 0.02em;
  }
  .form-title {
    color: rgb(230, 161, 32);
    text-align: center;
    margin-top: 2.5rem;
  }
  .form-content {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    align-items: center;
    margin-top: 3.5rem;
  }
  .form-row-name {
    width: 50%;
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    display: flex;
  }
  label {
    color: #3d008d;
    font-size: 20px;
    margin-bottom: 5px;
    display: block;
  }
  input {
    border: none;
    border-bottom: 1px solid black;
    background-color: rgb(185, 31, 185);
    width: 286px;
    padding: 10px;
  }
  .form-row-textarea {
    width: 50%;
  }
  textarea {
    border: none;
    border-bottom: 1px solid black;
    background-color: rgb(185, 31, 185);
    width: 100%;
    height: 2.5rem;
  }
  .send {
    background-color: #3d008d;
    font-size: 20px;
    margin-top: 2.5rem;
    width: 20%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: rgb(230, 161, 32);
    letter-spacing: 0.10em;
  }
}

@media only screen and (max-width: 1000px) {
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 24px;
  }
  .form-content {
    align-items: flex-start;
  }
  .form-row-name {
    display: flex;
  }
  label {
    font-size: 16px;
  }
  .form-row-textarea {
    width: 286px;
  }
  textarea {
    height: 1.8rem;
  }
  .send {
    font-size: 16px;
    margin-top: 1.5rem;
    width: 20%;
    height: 3rem;
  }
}

@media only screen and (max-width: 750px) {
  h1 {
    font-size: 24px;
  }
  p {
    font-size: 18px;
  }
  .form-title {
    text-align: start;
  }
  .full-name {
    margin-bottom: 1.5rem;
  }
  .form-content {
    align-items: flex-start;
  }
  .form-row-name {
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 12px;
  }
  .form-row-textarea {
    width: 286px;
  }
  textarea {
    height: 1.8rem;
  }
}
</style>
