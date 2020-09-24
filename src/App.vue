<template>
    <div id="app">

        <lay-admin>
            <lay-header>
                <lay-logo>vue-layui</lay-logo>
                <lay-menu mode="horizontal" class="layui-layout-left">
                    <lay-menu-item :index="0">
                        <template slot="title">
                            <span>导航一</span>
                        </template>
                        <lay-menu-child-item title="test"></lay-menu-child-item>
                        <lay-menu-child-item title="test"></lay-menu-child-item>
                    </lay-menu-item>
                    <lay-menu-item :index="1">
                        <template slot="title">
                            <span>导航一</span>
                        </template>
                    </lay-menu-item>
                    <lay-menu-item :index="2">
                        <template slot="title">
                            <span>导航一</span>
                        </template>
                    </lay-menu-item>
                    <lay-menu-item :index="3">
                        <template slot="title">
                            <span>导航一</span>
                        </template>
                    </lay-menu-item>
                </lay-menu>
                <lay-menu mode="horizontal" class="layui-layout-right">
                    <lay-menu-item :index="0">
                        <template slot="title">
                            <img src="https://avatars1.githubusercontent.com/u/23720738?s=460&v=4"
                                 class="layui-nav-img"> admin
                        </template>
                        <lay-menu-child-item title="基本资料"></lay-menu-child-item>
                        <lay-menu-child-item title="安全设置"></lay-menu-child-item>
                    </lay-menu-item>
                    <lay-menu-item :index="0">
       np                 <template slot="title">
                            退出
                        </template>
                    </lay-menu-item>
                </lay-menu>
            </lay-header>
            <lay-side>
                <lay-menu :default-openeds="[0, 1, 2]">
                    <lay-menu-item :index="0">
                        <template slot="title">
                            <span>薪资管理</span>
                        </template>
                        <lay-menu-child-item title="薪资详情" :to="{name: 'salaryinfo'}"></lay-menu-child-item>
                        <lay-menu-child-item title="员工薪资" :to="{name: 'salary'}"></lay-menu-child-item>
                        <lay-menu-child-item title="首页" :to="{name: 'home'}"></lay-menu-child-item>
                        <lay-menu-child-item title="关于vue-layui" :to="{name: 'about'}"></lay-menu-child-item>
                    </lay-menu-item>
                    <lay-menu-item :index="1">
                        <template slot="title">
                            <span>员工个人月产量管理</span>
                        </template>
                        <lay-menu-child-item title="员工个人月产量" :to="{name: 'admin'}"></lay-menu-child-item>

                    </lay-menu-item>

                </lay-menu>
            </lay-side>
            <lay-body>
                <div class="layui-main site-demo-body">
                    <router-view/>
                </div>

            </lay-body>
            <lay-footer style="text-align: center">
                <span>© 2018</span>
                <a class="deom-pl10" href="http://jskou.com" target="_blank">jskou.com</a>
                <span class="deom-pl10">MIT license</span>
                <a class="deom-pl10" href="https://github.com/kouchao/vue-layui" target="_blank">GitHub</a>
                <a class="deom-pl10" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37078202000111" target="_blank">鲁公网安备 37078202000111号</a>
                <span class="deom-pl10">|</span>
                <a class="deom-pl10" href="http://www.miibeian.gov.cn/" target="_blank">鲁ICP备17028069号-2</a>
            </lay-footer>

        </lay-admin>


    </div>
</template>

<style>

    .layui-layout-admin .site-demo-body {
        top: 30px;
    }

    .deom-pl10 {
        margin-left: 10px;
    }
</style>
