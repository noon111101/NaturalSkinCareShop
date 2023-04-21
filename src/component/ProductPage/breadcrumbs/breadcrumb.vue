<template>
  <div class="d-flex justify-content-left">
    <el-breadcrumb separator-class="el-icon-arrow-right" seperator="/" :replace="true">
      <el-breadcrumb-item :to="{ path: '/' }" style="color: #2d2926; cursor: pointer;">Home</el-breadcrumb-item>
      <el-breadcrumb-item>Foaming Facial Cleanser Pump | Signature</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "BreadC",
};
</script>

<style scoped>
.el-breadcrumb .el-breadcrumb__item:first-child:hover{
    color: green ;
    text-decoration: underline;
}
</style>
