<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item>Collections</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="filter-range">
      <button class="button medium secondary"><span class="icon icon-filter">
    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Filter" role="img" width="15" height="15" viewBox="0 0 13 13" class="" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
      <title>Filter</title>
      <desc>Filter Icon</desc>
          <path d="M.95 10.05v1.3h3.9v-1.3H.95zm0-7.8v1.3h6.5v-1.3H.95zm6.5 10.4v-1.3h5.2v-1.3h-5.2v-1.3h-1.3v3.9h1.3zm-3.9-7.8v1.3H.95v1.3h2.6v1.3h1.3v-3.9h-1.3zm9.1 2.6v-1.3h-6.5v1.3h6.5zm-3.9-2.6h1.3v-1.3h2.6v-1.3h-2.6V.95h-1.3v3.9z" class="fill"></path>
    </svg>
    <span class="icon-fallback-text">Filter</span>
  </span>
      </button>

      <button class="button medium secondary"><span class="icon icon-down">
        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Down" role="img" width="15" height="15" viewBox="0 0 14 9" class="" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
          <title>Down</title>
          <desc>Down Icon</desc>
          <path d="M.04 1.73L1.101.67l6.663 6.663-1.06 1.06L.04 1.732zM12.36.67l1.061 1.06-6.663 6.664-1.06-1.06L12.36.67z" class="fill"></path>
        </svg>    <span class="icon-fallback-text">Down</span>
      </span>
      </button>


    </div>
  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CollectionItem"
}
</script>

<style>
.el-breadcrumb__inner.is-link {
   font-weight: unset;
   color: #606266;
}
</style>
