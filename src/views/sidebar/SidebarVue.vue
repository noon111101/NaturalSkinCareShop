<template>
  <nav class="navbar fixed-top container-fluid d-flex justify-content-around" style="padding: 14px 0">
    <img :src="data.logo1" alt="" />
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
      <img :src="data.logo2" style="width: 140px;height: 85px;" alt="" />
    </div>
    <div class="nav-logo">
      <svg xmlns="http://www.w3.org/2000/svg"  aria-label="Search" role="img" width="16" viewBox="0 0 16 16" class="icon me-4">
      <title>Search</title>
      <desc>Search Icon</desc>

      
          <path d="M12.148 11.075l3.629 3.641-1.06 1.06-3.629-3.639a6.673 6.673 0 1 1 1.06-1.062zm-5.225 1.021a5.173 5.173 0 1 0 0-10.346 5.173 5.173 0 0 0 0 10.346z" class="fill"></path>
        
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" aria-label="My Account" role="img" width="16" viewBox="0 0 16 18" class="icon me-4">
      <title>My Account</title>
      <desc>My Account Icon</desc>

      
          <path d="M15.75 18H.25a7.75 7.75 0 0 1 15.5 0zM8 9.75a4.75 4.75 0 1 1 0-9.5 4.75 4.75 0 0 1 0 9.5z" class="fill"></path>
        
    </svg>      <font-awesome-icon class="me-3" :icon="['fas', 'bag-shopping']" />
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
.user-detail {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1030;
}

#offcanvasDarkNavbar {
  width: 16%;
}


@media screen and (max-width: 700px) {
  #offcanvasDarkNavbar {
    width: 60%;
  }
}

@media screen and (min-width: 750px) and (max-width: 950px) {
  #offcanvasDarkNavbar {
    width: 30%;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1280px) {
  #offcanvasDarkNavbar {
    width: 25%;
  }
}
.icon :hover {
  fill: #54585a;
}
.icon {
  stroke: none;
  stroke-width: 2px;
}


</style>
