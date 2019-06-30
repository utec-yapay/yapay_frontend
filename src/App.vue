<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>					
					<br>
          <div v-if="step == 1" style="width: 30%">
            <h2>Paso 1</h2>
            <p>Ingresa los datos de tu empresa</p>
            <b-form>
              <b-form-group
                label="Nombre de tu empresa"
                label-for="form-company-name"
                description="Este es el nombre que verán los compradores"
              >
                <b-form-input
                  id="form-company-name"
                  v-model="companyName"
                  type="text"
                  placeholder="Ejemplo: Malvados y Asociados Inc."
                  required
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                label="Teléfono celular de la empresa"
                label-for="form-company-phone"
                description="Este es el teléfono que usas con Yape"
              >
                <b-form-input
                  id="form-company-phone"
                  v-model="companyPhone"
                  type="tel"
                  placeholder="Ejemplo: 913929123"
                  required
                >
                </b-form-input>
              </b-form-group>
              <b-button
                variant="yape"
                @click="step = 2"
              >
                Siguiente
              </b-button>
            </b-form>
          </div>
          <div v-if="step == 2" style="width: 60%">
            <h2>Paso 2</h2>
            <p>Inserta el siguiente código en tu E-Commerce</p>
            <CodeToInsert
              :companyName="companyName"
              :companyPhone="companyPhone"
            >
            </CodeToInsert>
          </div>
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
import CodeToInsert from './components/CodeToInsert.vue'

export default {
  name: 'app',
  components: {
    CodeToInsert
  },
  data () {
    return {
      step: 1,
      companyName: "",
      companyPhone: "",
    }
  }
}
</script>

<style>
h2 {
	color: purple;
	font-weight: bold;
}

.btn-yape {
	background-color: rgb(1, 196, 164);
	color: white;
}
</style>
