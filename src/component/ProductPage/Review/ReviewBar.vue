<template>
  <div>
    <form class="filter" style="border-bottom: 1px solid black">
      <h4 class="title mt-2" style="color: silver">Filter Reviews</h4>

      <div
        class="search"
        style="
          margin-top: 15px;
          margin-bottom: 15px;
          width: 32%;
          border: 0.8px solid black;
          border-radius: 5px;
        "
      >
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          style="width: 5%"
        />
        <input
          type="text"
          placeholder="Search reviews"
          style="
            padding: 8px;
            text-transform: capitalize;
            font-size: large;
            width: 90%;
            border: 0;
          "
        />
      </div>

      <div class="sections">
        <div class="select-boxes">
          <el-row>
            <el-button
              type="primary"
              plain
              style="margin-left: 0; margin-right: 10px; color: black"
              >Primary</el-button
            >
            <el-button
              type="primary"
              plain
              style="margin-left: 0; margin-right: 10px; color: black"
              >Primary</el-button
            >
            <el-button
              @click="
                () => {
                  this.state = !this.state;
                }
              "
              type="primary"
              plain
              >...</el-button
            >
          </el-row>
        </div>
        <div
          class="select-more d-flex flex-wrap justify-content-start"
          style="width: 45%"
          v-if="this.state"
        >
          <el-button
            type="primary"
            plain
            style="margin-left: 0; margin-right: 10px; color: black"
            >Primary</el-button
          >
          <el-button
            type="primary"
            plain
            style="margin-left: 0; margin-right: 10px; color: black"
            >Primary</el-button
          >
          <el-button
            type="primary"
            plain
            style="margin-left: 0; margin-right: 10px; color: black"
            >Primary</el-button
          >
          <el-button
            type="primary"
            plain
            style="margin-left: 0; margin-right: 10px; color: black"
            >Primary</el-button
          >
          <el-button
            type="primary"
            plain
            style="margin-left: 0; margin-right: 10px; color: black"
            >Primary</el-button
          >
          <el-button
            type="primary"
            plain
            style="margin-left: 0; margin-right: 10px; color: black"
            >Primary</el-button
          >
          <el-button
            type="primary"
            plain
            style="margin-left: 0; margin-right: 10px; color: black"
            >Primary</el-button
          >
          <el-button
            type="primary"
            plain
            style="margin-left: 0; margin-right: 10px; color: black"
            >Primary</el-button
          >
        </div>
      </div>

      <div
        class="selections-range row mt-3 pb-4 mb-3"
        style="margin-right: 20%"
      >
        <div class="range col-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            style="
              width: 100%;
              height: 100%;
              text-align: center;
              text-transform: capitalize;
              margin-left: 0;
              margin-right: 0;
            "
          >
            <option selected style="padding: 10px">
              Open this select menu
            </option>
            <option value="1" style="padding: 10px">One</option>
            <option value="2" style="padding: 10px">Two</option>
            <option value="3" style="padding: 10px">Three</option>
          </select>
        </div>
        <div class="range col-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            style="
              width: 100%;
              height: 100%;
              text-align: center;
              text-transform: capitalize;
              margin-left: 0;
              margin-right: 0;
            "
          >
            <option selected style="padding: 10px">
              Open this select menu
            </option>
            <option value="1" style="padding: 10px">One</option>
            <option value="2" style="padding: 10px">Two</option>
            <option value="3" style="padding: 10px">Three</option>
          </select>
        </div>
        <div class="range col-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            style="
              width: 100%;
              height: 100%;
              text-align: center;
              text-transform: capitalize;
              margin-left: 0;
              margin-right: 0;
            "
          >
            <option selected style="padding: 10px">
              Open this select menu
            </option>
            <option value="1" style="padding: 10px">One</option>
            <option value="2" style="padding: 10px">Two</option>
            <option value="3" style="padding: 10px">Three</option>
          </select>
        </div>
        <div class="range col-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            style="
              width: 100%;
              height: 100%;
              text-align: center;
              text-transform: capitalize;
              margin-left: 0;
              margin-right: 0;
            "
          >
            <option selected style="padding: 10px">
              Open this select menu
            </option>
            <option value="1" style="padding: 10px">One</option>
            <option value="2" style="padding: 10px">Two</option>
            <option value="3" style="padding: 10px">Three</option>
          </select>
        </div>
        <div class="range col-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            style="
              width: 100%;
              height: 100%;
              text-align: center;
              text-transform: capitalize;
              margin-left: 0;
              margin-right: 0;
            "
          >
            <option selected style="padding: 10px">
              Open this select menu
            </option>
            <option value="1" style="padding: 10px">One</option>
            <option value="2" style="padding: 10px">Two</option>
            <option value="3" style="padding: 10px">Three</option>
          </select>
        </div>
        <div class="range col-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            style="
              width: 100%;
              height: 100%;
              text-align: center;
              text-transform: capitalize;
              margin-left: 0;
              margin-right: 0;
            "
          >
            <option selected style="padding: 10px">
              Open this select menu
            </option>
            <option value="1" style="padding: 10px">One</option>
            <option value="2" style="padding: 10px">Two</option>
            <option value="3" style="padding: 10px">Three</option>
          </select>
        </div>
        <div class="range col-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            style="
              width: 100%;
              height: 100%;
              text-align: center;
              text-transform: capitalize;
              margin-left: 0;
              margin-right: 0;
            "
          >
            <option selected style="padding: 10px">
              Open this select menu
            </option>
            <option value="1" style="padding: 10px">One</option>
            <option value="2" style="padding: 10px">Two</option>
            <option value="3" style="padding: 10px">Three</option>
          </select>
        </div>
      </div>
    </form>

    <div class="reviews mt-4">
      <h4 class="title" style="color: silver">64 reviews</h4>
      <div class="review row mt-4">
        <div class="info d-flex flex-row">
          <div class="avatar col-1">
            <span>V</span>
          </div>
          <div class="sub-info col-11">
            <span class="name">Virginia K.</span>
            <span>Verified Buyer</span>
            <span class="date">02/09/23</span>
          </div>
        </div>

        <div class="rates col-11">
          <el-rate v-model="value" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
          <div class="skin-type">
            <span>Skin Type:</span>
            <span>Combination</span>
          </div>
          <div class="skin-type">
            <span>Age Range:</span>
            <span>65+</span>
          </div>

          <div class="feelins mt-1 py-2 d-flex justify-content-start">
            <div class="feeling-rating d-flex me-3">
              <span>Feeling</span>
              <el-rate
                v-model="value1"
                :icon-classes="iconClasses"
                void-icon-class="'el-icon-minus'"
                :colors="['#000', '#000', '#000']"
                class="mx-1 py-1"
              >
              </el-rate>
            </div>
            <div class="feeling-rating d-flex">
              <span>Smell</span>
              <el-rate
                v-model="value1"
                :icon-classes="iconClasses"
                void-icon-class="'el-icon-minus'"
                :colors="['#000', '#000', '#000']"
                class="mx-1 py-1"
              >
              </el-rate>
            </div>
          </div>

          <div class="comment mt-2">
            <h4>Love this comment</h4>
            <p>Love this comment</p>
            <div class="share d-flex flex-row justify-content-between">
              <div class="icons">
                <span style="text-transform: capitalize"
                  ><font-awesome-icon
                    icon="fa-solid fa-share-from-square"
                    style="padding-right: 8px; height: 1rem"
                  />share</span
                >
              </div>

              <div class="help">
                <span
                  style="
                    padding-right: 8px;
                    height: 1rem;
                    text-transform: capitalize;
                  "
                  >was this helpful?</span
                >
                <span style="padding-right: 4px"
                  ><font-awesome-icon
                    icon="fa-solid fa-thumbs-up "
                    style="padding-right: 2px"
                  />
                  0</span
                >
                <span
                  ><font-awesome-icon
                    icon="fa-solid fa-thumbs-up"
                    flip="vertical"
                    style="padding-right: 2px"
                  />
                  0</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagnation m-auto mt-5" style="width: 20%;">
        <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewBar",

  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value: 5,
      value1: 5,
      iconClasses: ["el-icon-minus", "el-icon-minus", "el-icon-minus"],
      state: false,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.info {
  position: relative;
}
.info .avatar {
  position: relative;
}
.info .avatar span {
  position: absolute;
  background-color: aqua;
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  font-weight: 900;
  font-size: large;
  right: 19px;
}
.info .sub-info .name {
  font-weight: 800;
  padding-right: 5px;
}
.info .sub-info .date {
  float: right;
}
.rates {
  margin-top: 5px;
  margin-left: 8%;
}

.rates .skin-type span:first-child {
  font-weight: 700;
  padding-right: 5px;
}
</style>
