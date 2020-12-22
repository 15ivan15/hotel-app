<template>
  <div id="HotelesZona">
    <div class="content">
      <table class="principal">
        <tr>
          <td>
            <nav class="form">
              <form class="formulario" v-on:submit.prevent="processSearchHotel">
                <select v-model="hotel_in.ciudad"> <!--=></!--->
                  <option disabled value="">Seleccione Ciudad</option>
                  <option>Bogotá</option>
                  <option>Medellín</option><!--=>Cambiar por los nombres de ciudad existentes</!--->
                  <option>Neiva</option>
                </select>
                <select v-model="hotel_in.zona">
                  <option disabled value="">Seleccione Zona</option>
                  <option>Centro</option>
                  <option>Norte</option>
                  <option>Sur</option>
                  <option>Oriente</option>
                  <option>Occidente</option>
                </select>
                <select v-model="hotel_in.mes">
                  <option disabled value="">Seleccione Mes</option>
                  <option>Enero</option>
                  <option>Febrero</option>
                  <option>Marzo</option>
                  <option>Abril</option>
                  <option>Mayo</option>
                  <option>Junio</option>
                  <option>Julio</option>
                  <option>Agosto</option>
                  <option>Septiembre</option>
                  <option>Octubre</option>
                  <option>Noviembre</option>
                  <option>Diciembre</option>
                </select>
                <div class="inputs">
                  <button type="submit" class="buttonZona">Buscar Hoteles</button>
                </div>
              </form>
            </nav>
          </td>

          <td class="tabla_hotels">
            <table class="datos">
              <tr class="tr1">
                <th>Nombre Hotel</th>
                <th>Estrellas</th>
                <th>Tipo Habitacion</th>
                <th>Tarifa por Noche</th>
                <th>Ciudad</th>
                <th>Zona</th>
              </tr>
              <tbody>
                <tr class="tr2" v-for="dato in salida" :key="dato.hotelname">
                  <td>{{ dato.hotelname }}</td>
                  <td>{{ dato.estrellas }}</td>
                  <td>{{ dato.tipo_habitacion }}</td>
                  <td>{{ dato.tarifa_alta }} {{ dato.tarifa_inicial }} {{ dato.tarifa_baja }}</td>
                  <td>{{ dato.ciudad }}</td>
                  <td>{{ dato.zona }}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    </div>
    <div class="footerZona">
        <h2 v-if="hotel_in.zona && hotel_in.ciudad && hotel_in.mes">Está buscando hotel en el {{hotel_in.zona}} de {{hotel_in.ciudad}} para el mes de {{hotel_in.mes}}</h2>
        <h2 v-if="!hotel_in.zona || !hotel_in.ciudad || !hotel_in.mes">Misión TIC 2022</h2>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HotelesZona",
  data: function () {
    return {
      hotel_in: {
        ciudad: "",
        zona: "",
        mes: ""
      },
      salida: "",
    };
  },
  methods: {
    processSearchHotel: function () {
      var self = this;
      axios
        .post("https://hotelapi-g1m2-e12.herokuapp.com/hotel/search/", self.hotel_in, {
          headers: {},
        })
        .then((result) => {
          this.salida = result.data;
        })
        .catch((error) => {
          if (error.response.status == 404)
            alert("No se han encontrado Hoteles en " + self.hotel_in.ciudad);
          if (error.response.status == 403)
            alert(
              "No se han encontrado Hoteles al " +
                self.hotel_in.zona +
                " de " +
                self.hotel_in.ciudad
            );
        });
    },
  },
  created: function () {
    this.ciudad = this.$route.params.ciudad;
  },
};
</script>

<style>
.HotelesZona {
  width: 100%;
  height: 100vh;
}
/*.content{
    text-align: center;
    width: 100%;
    height: 100%;
  }*/
/* .principal {
  border-collapse: collapse;
  text-align: top;
  border: 1px solid white;
} */

.tabla_hotels {
  position: absolute;
  margin-top: 6%;
  margin-left: 27%;
}

.formulario {
  width: 100%;
  position: absolute;
  display: flex;
  margin-left: 27.5%;
  margin-top: 2%;
}

.inputs {
  margin-left: 2%;
}


.boxInput {
  border: 1px solid #283747;
  border-radius: 5px;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 4%;
}

.buttonZona {
  color: #fff;
  background: #283747;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding-top: 4%;
  padding-bottom: 4%;
}

.datos {
  table-layout: fixed;
  height: flex;
  border-collapse: collapse;
  border: 1px solid black;
}

tbody {
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid white;
}
.principal .datos th {
  padding: 10px;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid black;
}
.principal .datos td {
  padding: 10px;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid black;
}

#HotelesZona span {
  color: crimson;
  font-weight: bold;
}

.footerZona {
  position: absoluta;
  width: 100%;
  height: 14vh;
  background-color: #283747;
  margin-top: 34.5%;
}

.footerZona h2 {
  display: fixed;
  width: 100%;
  height: 100%;
  color: #e5e7e9;
  text-align: center;
  padding-top: 1.5%;
}
</style>