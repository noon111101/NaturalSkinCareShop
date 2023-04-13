<template>
  <nav class="navbar fixed-top container-fluid d-flex justify-content-around" style="padding: 14px 0">
    <img :src="data.logo1" alt="" style="fill: #173f35"/>
    <div class="nav-dropdown">
      <el-dropdown class="me-3">
        <span class="el-dropdown-link">
          BESTSELLERS<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="me-3">
        <span class="el-dropdown-link">
          GIFT SETS<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="me-3">
        <span class="el-dropdown-link">
          SHOP THE RANGE<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="me-3">
        <span class="el-dropdown-link">
          LAST CHANGE<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="split"></span>
      <img :src="data.logo2" style="width: 140px;height: 85px;" alt=""/>
    </div>
    <div class="nav-logo">
      <svg xmlns="http://www.w3.org/2000/svg" aria-label="Search" role="img" width="16" viewBox="0 0 16 16"
           class="icon me-4">
        <title>Search</title>
        <desc>Search Icon</desc>
        <path
            d="M12.148 11.075l3.629 3.641-1.06 1.06-3.629-3.639a6.673 6.673 0 1 1 1.06-1.062zm-5.225 1.021a5.173 5.173 0 1 0 0-10.346 5.173 5.173 0 0 0 0 10.346z"
            class="fill"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" aria-label="My Account" role="img" width="16" viewBox="0 0 16 18" class="icon me-4">
        <title>My Account</title>
        <desc>My Account Icon</desc>
        <path d="M15.75 18h-1.5a6.25 6.25 0 1 0-12.5 0H.25a7.75 7.75 0 0 1 15.5 0zM8 9.75a4.75 4.75 0 1 1 0-9.5 4.75 4.75 0 0 1 0 9.5zm0-1.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z" class="fill"></path>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" aria-label="Shopping bag" role="img" width="16" viewBox="0 0 16 16" class="icon me-4">
        <title>Shopping bag</title>
        <desc>Shopping bag Icon</desc>
        <path d="M11.205 6.5H4.972l-.23 1.606-1.484-.212.199-1.394H1.5v7.947h13V6.5h-1.78l.2 1.394-1.485.212-.23-1.606zM12.506 5h2.652c.465 0 .842.377.842.842v9.263a.842.842 0 0 1-.842.842H.842A.842.842 0 0 1 0 15.105V5.842C0 5.377.377 5 .842 5h2.829L4.258.894A.75.75 0 0 1 5 .25h6.177a.75.75 0 0 1 .743.644L12.506 5zm-1.515 0l-.464-3.25H5.65L5.186 5h5.805z" class="fill"></path>
      </svg>
    </div>
  </nav>
</template>
<script>

export default {
  data() {
    return {
      data: {
        logo2:
            "https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Navbar%2Flogo2.svg?alt=media&token=1c1ebefd-d4dc-41a7-a38c-a817170406e2",
        logo1:
            "https://firebasestorage.googleapis.com/v0/b/natural-skincare-62865.appspot.com/o/Navbar%2Flogo.svg?alt=media&token=17b28b01-c373-4863-b5bf-66817eb9088d",
      },
    };
  },
  props: {},
  computed: {},
  methods: {},
};
</script>
<style></style>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
}

.navbar {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font-weight: 600;
}

.icon :hover {
  fill: #54585a;
}

.nav-logo svg .fill {
  fill: #54585a;
}

.split {
  padding: 8px;
  border: 1px solid #979797;
  border-right: none;
  border-top: none;
  border-bottom: none;
}

</style>
