<template>
  <div>
    <h1>个人信息</h1>
    {{id}},{{name}}
    {{info.name}}
    {{info.url}}
  </div>
</template>

<script>
    export default {
        props: ['id', 'name'],
        name: "UserProfile",
        beforeRouteEnter: (to, from, next) => {
            next(vm=>{
                vm.getData();//进入路由前执行得到json方法
            });
        },

        beforeRouteLeave: (to, from, next) => {
            next();
        },

  methods:{
        getData: function () {
            this.axios.get('/static/mork/data.json')
                .then(response =>(this.info=response.data) );
        }
    },

        data(){
            return{
                //请求所返回的参数格式必须和json 字符串一致
                info:{
                    name:''
                }
            }
        }

  }

</script>

<style scoped>

</style>
