 <template>
  <div>
    <AppHeader/>
    <div>Flights Page</div>
    <button @click="goTo('/')">Back to Home</button>
    <div class=InputsClass>
    <div class=InputGroup>
    <div class="DropdownTransport">
    <label for="dropdownInput">Select transport:</label>
    <select id="dropdownInput" v-model="selectedOption">
      <option value="opcion1">Plane</option>
      <option value="opcion2">Train</option>
      <option value="opcion3">Bus</option>
      <option value="opcion4">Boat</option>
    </select>
    </div>


     <div class= "FromContainer">
      <span class="From"> From </span>
      <input type="text" class="location1" placeholder="Select your location...">
    </div>
    <div class= "ToContainer">
      <span class="To"> To </span>
      <input type="text" class="location2" placeholder="Search destination...">
    </div>
   <div class= "DepartContainer">
      <span class="Depart"> Depart </span>
      <input type="date" class="date1">
    </div>
    <div class= "ReturnContainer">
      <span class="Return"> Return </span>
      <input type="date" class="date2">
    </div>
     <div class= "TravellersContainer">
      <span class="Travellers"> Travellers and cabin class </span>
      <input type="text" class="travellersandclass" placeholder="1 Adult, Economy">
    </div>
    </div>
    <div class= InputButtons>
     <div class= "DirectContainer">
      <span class="DirectFlight"> Direct Flight </span>
      <input type="checkbox" class="Directcheck">
    </div>
    <button class="Searchbutton">Search</button>
    </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './page-components/AppHeader.vue';
console.log(localStorage.getItem("plan"));
export default {
  components: {
    AppHeader,
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}



#dropdownInput{
  position: relative;
  background: white url(http://192.168.1.95:8080/img/search-icon.f7bfd452.svg) no-repeat 0 center;
  background-size: 15px 15px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 30px 5px 20px;
  margin: 20px;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
  rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}



.location2{
  position: relative;
  background: white url(http://192.168.1.95:8080/img/search-icon.f7bfd452.svg) no-repeat 0 center;
  background-size: 15px 15px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 30px 5px 20px;
}

.location1{
  position: relative;
  background: white url(http://192.168.1.95:8080/img/search-icon.f7bfd452.svg) no-repeat 0 center;
  background-size: 15px 15px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 30px 5px 20px;
}

.date1{
  position: relative;
  background: white url(http://192.168.1.95:8080/img/search-icon.f7bfd452.svg) no-repeat 0 center;
  background-size: 15px 15px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 30px 5px 20px;
}

.date2{
  position: relative;
  background: white url(http://192.168.1.95:8080/img/search-icon.f7bfd452.svg) no-repeat 0 center;
  background-size: 15px 15px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 30px 5px 20px;
}

.travellersandclass{
  position: relative;
  background: white url(http://192.168.1.95:8080/img/search-icon.f7bfd452.svg) no-repeat 0 center;
  background-size: 15px 15px;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px 30px 5px 20px;
}

label {
  position: absolute;
  top: 0px;
  left:20px;
}

.DropdownTransport{
  position: relative;
}
.To {
  position: absolute;
  top: 0px;
  left:20px;
}

.ToContainer {
  position: relative;
}


.From {
  position: absolute;
  top: 0px;
  left:20px;
}

.FromContainer {
  position: relative;
}

.Depart {
  position: absolute;
  top: 0px;
  left:20px;
}

.DepartContainer {
  position: relative;
}
 .Return {
  position: absolute;
  top: 0px;
  left:20px;
}

.ReturnContainer {
  position: relative;
}

 .Travellers {
  position: absolute;
  top: 0px;
  left:20px;
}

.TravellersContainer {
  position: relative;
}

.InputGroup input {
  margin: 20px;
}

.InputGroup {
  display: flex;
  align-items: center;
}
.InputButtons{
  display: flex;
  align-items: center;
  margin-left: 25px;
}

.Searchbutton{
    width: 150px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px;
    margin-left: 500px;
    margin-top:20px;
}

.InputsClass{
  margin-top:50px;
}

</style>
