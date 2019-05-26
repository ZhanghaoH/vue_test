<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <hr> -->
    <div class="container">
      <div class="aside">
        <div
          v-for="(item, index) in navs"
          :key="index"
        >
          <el-menu router>
            <!-- 1 c -->
            <el-submenu
              v-if="item.children"
              index="1"
            >
              <template slot="title">
                <span>{{ item.name }}</span>
              </template>
              <div
                v-for="(child, childIndex) in item.children"
              >
                <!-- 2 c -->
                <el-submenu
                  v-if="child.children"
                  index="1-1"
                >
                  <template slot="title">
                    <span>{{ child.name }}</span>
                  </template>
                  <el-menu-item v-for="(kid, index) in child.children">
                    {{ kid.name }}
                  </el-menu-item>
                  <!-- <li v-for="(kid, index) in child.children">
                    {{ kid.name }}
                  </li> -->
                </el-submenu>
                <!-- 2 -->
                <el-menu-item
                  v-else
                  :index="child.path"
                >
                  {{child.name}}
                </el-menu-item>
              </div>
            </el-submenu>

            <!-- 1 -->
            <el-menu-item
              v-else
              :index="item.path"
            >
              {{ item.name }}
            </el-menu-item>
          </el-menu>
        </div>
        <!-- <hr> -->
        <!-- <div v-for="item in navs">
          <router-link
            :to="item.path"
            v-if="!item.children"
          >{{ item.name }}</router-link>
          <div v-else>{{ item.name }}</div>
          <div
            v-for="child in item.children"
            style="margin-left: 50px"
          >
            <router-link
              :to="child.path"
              v-if="!child.children"
            >{{ child.name }}</router-link>
            <div v-else>{{ child.name }}</div>

            <div
              v-for="kid in child.children"
              style="margin-left: 100px"
            >
              <router-link :to="kid.path">{{ kid.name }}</router-link>
            </div>
          </div>
        </div> -->
      </div>
      <div class="cnt">
        <router-view />
      </div>
    </div>
    <!-- <router-link to="/test">to test</router-link> -->
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      navs: [
        {
          path: '/home',
          name: 'home',
          // component: Home,
        },
        {
          path: '/resource',
          name: 'resource',
          // component: Resource,
          children: [
            {
              path: '/resource/equipment',
              name: '设备管理',
              // component: Equipment,
              children: [
                {
                  path: '/resource/equipment/export',
                  name: '设备导出',
                  // component: Export,
                },
                {
                  path: '/resource/equipment/site',
                  name: '站点管理',
                  // component: Site,
                },
                {
                  path: '/resource/equipment/connection',
                  name: '资源关联',
                  // component: Connection,
                }
              ]
            },
            {
              path: '/resource/details',
              name: '设备详情',
            },
            {
              path: '/resource/map',
              name: '网络拓扑',
            }
          ]
        },
        {
          path: '/system',
          name: 'system',
          // component: System,
          children: [
            {
              path: '/system/account',
              name: '账户管理',
            },
            {
              path: '/system/update',
              name: '软件升级',
            },
            {
              path: '/system/license',
              name: 'License管理',
            },
            {
              path: '/system/cluster',
              name: '集群管理',
            }
          ]
        },
        {
          path: '/network',
          name: 'network',
          // component: Network,
          children: [
            {
              path: '/network/log-Management',
              name: '日志管理',
            },
            {
              path: '/network/service-FTP',
              name: 'FTP服务器',
            },
            {
              path: '/network/remote',
              name: '远程操作',
            },
            {
              path: '/network/fault-location',
              name: '故障定位',
            }
          ]
        }
      ]
    }
  },
  mounted () {
    console.log(this.navs);
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #eee;
}
.container {
  display: flex;
}
.aside {
  width: 230px;
  flex: none;
  text-align: left;
}
.cnt {
  flex: auto;
  background-color: aquamarine;
  height: 500px;
}
</style>
