<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>{{name}}</el-menu-item>
          <el-menu-item index="4"><router-link to="/goHome">HOME</router-link></el-menu-item>
        </el-menu>


      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">

            <el-col :span="12">

              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router>
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>管理</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">用户管理</template>
                    <el-menu-item :index="{name:'UserProfile',params: {id: 1,name: 'gao'}}">
                      个人信息
                    </el-menu-item>
                    <el-menu-item index="/user/list">
                      用户列表
                    </el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="内容管理">
                    <el-menu-item index="1-3">待用</el-menu-item>
                  </el-menu-item-group>

                </el-submenu>

              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>

          <router-view></router-view>

        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
    export default {
        name: "Main",
        props:['name'],
        data() {
            return {
                activeIndex: '1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }


        }
    }


</script>


<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-menu {

    float: right;
  }

  .el-col {
    width: 200px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
