<template>
  <div>
    <div class="filter-range mt-5">
      <button class="button medium secondary hover-alternate me-3 button-filter" @click="filter=!filter">
        <span class="icon icon-filter">
      <svg xmlns="http://www.w3.org/2000/svg" aria-label="Filter" role="img" width="15" height="15" viewBox="0 0 13 13" class="" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
      <title>Filter</title>
      <desc>Filter Icon</desc>
          <path d="M.95 10.05v1.3h3.9v-1.3H.95zm0-7.8v1.3h6.5v-1.3H.95zm6.5 10.4v-1.3h5.2v-1.3h-5.2v-1.3h-1.3v3.9h1.3zm-3.9-7.8v1.3H.95v1.3h2.6v1.3h1.3v-3.9h-1.3zm9.1 2.6v-1.3h-6.5v1.3h6.5zm-3.9-2.6h1.3v-1.3h2.6v-1.3h-2.6V.95h-1.3v3.9z" class="fill"></path>
      </svg>
      <span class="icon-fallback-text" style="text-transform: none" >Filter</span>
  </span>
      </button>

      <button class="button medium secondary hover-alternate"><span class="icon icon-down">
        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Down" role="img" width="15" height="15" viewBox="0 0 14 9" class="" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
          <title>Sort by</title>
          <path d="M.04 1.73L1.101.67l6.663 6.663-1.06 1.06L.04 1.732zM12.36.67l1.061 1.06-6.663 6.664-1.06-1.06L12.36.67z" class="fill"></path>
        </svg>    <span class="icon-fallback-text">Sort by</span>
      </span>
      </button>
      <div class="position-relative">
        <div class="filter-options-wrapper " :class="{'transit-filter':filter}">
          <div class="filter-options d-flex flex-row justify-content-around">
            <div>
              <h3 class="text-uppercase foreground--text">
                By Category
              </h3>
              <div class="d-flex flex-column">
                <el-checkbox label="Body lotion"></el-checkbox>
                <el-checkbox label="Body Scrub"></el-checkbox>
                <el-checkbox label="Body Wash"></el-checkbox>
              </div>

            </div>
            <div>
              <h3 class="text-uppercase foreground--text">
                Range
              </h3>
              <div class="d-flex flex-column">
                <el-checkbox label="Creamy"></el-checkbox>
                <el-checkbox label="Sensitive"></el-checkbox>
                <el-checkbox label="Signature"></el-checkbox>
              </div>
            </div>
            <div>
              <h3 class="text-uppercase foreground--text">
                Skin type
              </h3>
              <div class="d-flex flex-column">
                <el-checkbox label="Normal"></el-checkbox>
                <el-checkbox label="Sensitive"></el-checkbox>
                <el-checkbox label="Dry"></el-checkbox>
              </div>
            </div>
          </div>
            <div class="d-flex flex-row justify-content-center py-5">
                <div class="me-3">
                  <button class="wide button secondary" data-filter-clear="" fdprocessedid="pdocsm" data-acsb-clickable="true" data-acsb-navigable="true" data-acsb-now-navigable="true" role="button" data-acsb-hover="true" data-acsb-textual-ops="null">Clear</button>
                </div>
                <div>
                  <button class="button wide" data-filter-close="" fdprocessedid="ih3wuti" data-acsb-clickable="true" data-acsb-navigable="true" data-acsb-now-navigable="true" role="button" data-acsb-hover="true" data-acsb-textual-ops="close">Show Results</button>
                </div>
            </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "CollectionFilter",
  data(){
    return{
      filter:false
    }
  }
}
</script>

<style>
.filter-options-wrapper{
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 9;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 1px #2d29263d;
  transform: scaleY(0);
  transition: all .3s ease-in-out;
  transform-origin: left top;
}
.transit-filter{
  transform: scaleY(1);
}
</style>
