<template>
  <div>
    <h4>En la página de Checkout</h4>
    <p>1. Inserta el código CSS en la etiqueta head</p>
    <Prism language="markup" :code="copyText.css.value"></Prism>
    <span
      class="copy-text"
      v-clipboard="copyText.css.value"
      @click="copySuccessHandler(copyText.css)"
    >
      {{ copyText.css.label }}
    </span>
    <br>
    <p>2. Inserta el código Javascript al final de la etiqueta body</p>
    <Prism language="markup" :code="copyText.js.value"></Prism>
    <span
      class="copy-text"
      v-clipboard="copyText.js.value"
      @click="copySuccessHandler(copyText.js)"
    >
      {{ copyText.js.label }}
    </span>
    <br>
    <p>3. Inserta el código del Yapay Widget junto con las opciones de pago que tengas</p>
    <Prism language="markup" :code="copyText.widget.value"></Prism>
    <span
      class="copy-text"
      v-clipboard="copyText.widget.value"
      @click="copySuccessHandler(copyText.widget)"
    >
      {{ copyText.widget.label }}
    </span>
    <br>
    <h4>Cómo conseguir el atributo <code>paymentjwt</code></h4>
    <p>//TODO</p>
  </div>
</template>

<script>
import Prism from 'vue-prism-component'
export default {
  name: 'HelloWorld',
  props: ['companyName', 'companyPhone'],
  components: {
    Prism
  },
  data() {
    return {
      copyText: {
        css: {
          label: "Copiar",
          value: `<!-- Yapay CSS minificado -->
<link rel="stylesheet" href="TODO">`
        },
        js: {
          label: "Copiar",
          value: `<!-- Yapay JS minificado -->
<script src="TODO">`
        },
        widget: {
          label: "Copiar",
          value: `<!-- Yapay Widget -->
<yapay-widget
  paymentjwt="getJwt()"
  cpn=\"`+ this.companyName + `\"
  cpp=\"` + this.companyPhone + `\"
>
</yapay-widget>`
        }
      } 
    }
  },
  methods: {
    copySuccessHandler: function(element) {
      console.log("Copied to clipboard")
      element.label = "Copiado!"
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.copy-text {
  float: right;
  color: royalblue;
}

.copy-text:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
