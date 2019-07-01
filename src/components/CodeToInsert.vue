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
		<p>Para satisfacer el atributo <code>paymentjwt</code>, se debe realizar una llamada HTTP POST a <code>http://yapay.com/payments</code>, con el siguiente cuerpo:</p>
		<Prism language="json" :code="copyText.jsonbody.value"></Prism>
    <span
      class="copy-text"
      v-clipboard="copyText.jsonbody.value"
      @click="copySuccessHandler(copyText.jsonbody)"
    >
      {{ copyText.jsonbody.label }}
    </span>
    <p>Por ejemplo, para Python Flask:</p>
    <Prism language="python" :code="copyText.pythonexample.value"></Prism>
    <span
      class="copy-text"
      v-clipboard="copyText.pythonexample.value"
      @click="copySuccessHandler(copyText.pythonexample)"
    >
      {{ copyText.pythonexample.label }}
    </span>
    <br><br>
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
<link rel="stylesheet" href="http://yapay.com/assets/yapay-widget.css">`
        },
        js: {
          label: "Copiar",
          value: `<!-- Yapay JS minificado -->
<script src="http://yapay.com/assets/yapay-widget.js">`
        },
        widget: {
          label: "Copiar",
          value: `<!-- Yapay Widget -->
<yapay-widget
  paymentjwt="getJwt()"
  confirmationpage="your-confirmation-url"
>
</yapay-widget>`
        },
				jsonbody: {
					label: "Copiar",
					value: `{
	"amt": amount-variable,
	"cpn": "` + this.companyName + `",
	"cpp": "` + this.companyPhone + `"
}`
				},
        pythonexample: {
          label: "Copiar",
          value: `@app.route('/checkout')
def checkout():
    total = 0
    for item in cartlist:
        total = total + int(item["Price"])

    url = "http://yapay.com/payments"

    payload = {
        "amt": total,
        "cpn": "` + this.companyName + `",
        "cpp": "` + this.companyPhone + `"
    }

    r = requests.post(url, json=payload)

    return render_template('checkout.html', total=total, jwt=r.text)`
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
h4 {
	color: purple;
}

.copy-text {
  float: right;
  color: royalblue;
}

.copy-text:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
