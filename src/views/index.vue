<template>
  <!-- 导入饿了么样式 -->
  <!-- <h2>123</h2> -->
  <el-container class="my-container">
    <el-header class="my-header">
      <el-row>
        <el-col :span="5">
          <img src="../assets/logo.png" alt />
        </el-col>
        <el-col :span="18">
          <h3 class="my-title">后台管理系统</h3>
        </el-col>
        <el-col :span="1">
          <a href="#" class="logout">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="my-main">
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :unique-opened="false"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                选项1
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-menu"></i>
                选项2
              </el-menu-item>
            </el-menu-item-group>

            <el-submenu index="1-4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                选项4
              </template>
              <el-menu-item index="1-4-1">
                <i class="el-icon-menu"></i>
                选项1
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                选项1
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-menu"></i>
                选项2
              </el-menu-item>
            </el-menu-item-group>

            <el-submenu index="1-4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                选项4
              </template>
              <el-menu-item index="1-4-1">
                <i class="el-icon-menu"></i>
                选项1
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                选项1
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-menu"></i>
                选项2
              </el-menu-item>
            </el-menu-item-group>

            <el-submenu index="1-4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                选项4
              </template>
              <el-menu-item index="1-4-1">
                <i class="el-icon-menu"></i>
                选项1
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                选项1
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-menu"></i>
                选项2
              </el-menu-item>
            </el-menu-item-group>

            <el-submenu index="1-4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                选项4
              </template>
              <el-menu-item index="1-4-1">
                <i class="el-icon-menu"></i>
                选项1
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                选项1
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-menu"></i>
                选项2
              </el-menu-item>
            </el-menu-item-group>

            <el-submenu index="1-4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                选项4
              </template>
              <el-menu-item index="1-4-1">
                <i class="el-icon-menu"></i>
                选项1
              </el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",

  
  methods: {
      open(){

      },
    close(){

    },
  },
};
</script>

<style lang="less" scoped>
.my-container {
  height: 100%;
  .my-header {
    height: 60px;
    background-color: #b3c0d1;
    text-align: center;
    line-height: 60px;
    .my-title {
      color: #fff;
    }
    .logout {
      color: #fff;
      background-color: red;
      padding: 5px;
      border-radius: 5px;
    }
  }
  .my-main {
    background-color: #e9eef3;
  }
}
</style>
