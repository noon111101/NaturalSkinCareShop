<template>
  <div>
    <CartHead :price="price" />

    <form action="">
      <div @click="() => { this.price = '$9.99'; this.state = false; changeColor();}" class="choice" :style="{ backgroundColor: color,}">
        <input type="radio" v-model="price" value="9.99" />
        <label><span>One-time purchase</span><span class="price">$9.99</span></label>
      </div>

      <div @click="() => {this.price = '$8.99'; changeState(); changeColor2()}" class="choice" :style="{backgroundColor: color1,}">
        <input type="radio" v-model="price" value="8.99" />
        <label
          ><span>Subscribe & save</span><span>10%</span
          ><span class="price">$8.99</span></label
        >
        <select v-if="state" class="form-select">
          <option>Delivery for 1 month</option>
          <option>Delivery for 2 month</option>
          <option>Delivery for 3 month</option>
        </select>
      </div>

      <div class="subcribe">
        <div class="d-flex flex-row justify-content-start">
          <svg
            ill="black"
            xmlns="http://www.w3.org/2000/svg"
            class="reload-icon"
            data-test-popup-icon=""
            data-v-7bc675e0=""
            style="width: 20px; height: 20px; margin-top: 5px"
          >
            <path
              fill="currentColor"
              d="M13.64 2.35C12.19 0.9 10.2 0 7.99 0C3.57 0 0 3.58 0 8C0 12.42 3.57 16 7.99 16C11.72 16 14.83 13.45 15.72 10H13.64C12.82 12.33 10.6 14 7.99 14C4.68 14 1.99 11.31 1.99 8C1.99 4.69 4.68 2 7.99 2C9.65 2 11.13 2.69 12.21 3.78L8.99 7H15.99V0L13.64 2.35Z"
            ></path>
          </svg>
          <p class="fs-5 mx-2">Subscription details</p>
        </div>

        <div
          class="sub-detail-more text-white mx-3 p-2"
          style="width: 40%; background-color: black; display: none"
        >
          <h6 class="fw-bolder">How subscriptions work</h6>
          <p class="fs-6 text-break">
            Products are automatically delivered on your schedule. No
            obligation, modify or cancel your subscription anytime.
          </p>
        </div>
      </div>

      <div class="add-cart">
        <div class="dropdown">
           <!-- <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          > 
            Dropdown button
          </button>  -->
          <!-- <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul> -->
          <el-dropdown>
      <el-button type="primary">
        qty{{ choice }} <el-icon class="el-icon-right-open"></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu style="  background-color: #173f35; color: aliceblue;">
          <el-dropdown-item ><span @click="changeAmount">1</span></el-dropdown-item>
          <el-dropdown-item><span @click="changeAmount">2</span></el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
        </div>
        <button>ADD to bag</button>
      </div>
    </form>

    <ProductInfo @response="(index) => this.cIndex = index" :cIndex= "cIndex" :index="'1'"/>
    <ProductInfo @response="(index) => this.cIndex = index" :cIndex= "cIndex" :index="'2'"/>
    <ProductInfo @response="(index) => this.cIndex = index" :cIndex= "cIndex" :index="'3'"/>
    <ProductInfo @response="(index) => this.cIndex = index" :cIndex= "cIndex" :index="'4'"/>
    <ProductInfo @response="(index) => this.cIndex = index" :cIndex= "cIndex" :index="'5'"/>

  </div>
</template>

<script>
import CartHead from "./CartHead.vue";
import ProductInfo from "./ProductInfo.vue";

export default {
  name: "ProductCart",
  data() {
    return { price: "", choice: "" , state: false, color1: "", color:"pink", cIndex:''};
  },
  mounted() {},
  methods: {
    change(event) {
      event.stopPropagation();
      this.price = event.target.innerText;
      console.log(event.target);
    },
    changeColor(){
      this.color = "pink";
      this.color1 = "white"
    },
    changeColor2(){
      this.color1 = "pink";
      this.color = "white";
    },
    changeState() {
      this.state = true;
    },
    changeAmount(event){
      this.choice = event.target.innerText;
      console.log(event.target.innerText);
    },
  },
  components: { CartHead, ProductInfo },
};
</script>

<style scoped>

form .choice {
  color: black;
  display: block;
  width: 100%;
  padding: 10px;
  height: 6rem;
  position: relative;
}
form .choice span {
  font-size: large !important;
}
form .choice span:first-child {
  margin-left: 50px;
}
form .choice select {
  color: black;
  display: block;
  width: 60%;
  height: 60%;
  margin: 10px auto;
  border-radius: 0;
  background-color: transparent;
  border: 1px solid black;
}
.subcribe:hover .sub-detail-more {
  display: block !important;
  margin-bottom: 10px;
  /* width: 100px; */
  /* transition: all 5s; */
}

.choice label::before {
  border: 1px solid #d4d0c4;
  background-color: #d4d0c4;
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-left: 10px;
  transform: translateY(-130%);
  pointer-events: none;
}
.choice input[type="radio"]:checked label::before {
  border-color: #173f35 !important;
  background-color: #173f35 !important;
}
.add-cart {
  display: flex;
  flex-direction: row;
  background-color: #173f35;
  color: #fff;
  width: 100%;
  height: 60px;
}
.add-cart .dropdown {
  position: relative;
  width: 30%;
  height: 100%;
}
.add-cart .dropdown::after {
  content: "";
  position: absolute;
  bottom: 23%;
  height: 80%;
  border: 0.6px solid #fff;
}
.add-cart .dropdown button {
  padding: 15px;
  border-radius: 0;
  font-size: large;
  background-color: transparent;
  border: 0;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
}
.add-cart .dropdown span {
  height: 100%;
  width: 100px;
  font-size: medium;
  color: #fff !important;
}
.add-cart button {
  width: 100%;
  background-color: transparent;
  border: 0;
  text-transform: uppercase;
  text-align: center;
  font-size: medium !important;
  color: #fff;
}
</style>
