<template>    
    <div class="tab-bar-item" @click="itemclick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>    
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        
        <div :style="activeStyle"><slot name="item-text"></slot></div>         
        <!-- <img src="../../assets/img/tabbar/index.png" alt="">
        <div>首页</div> -->
    </div>    
</template>

<script>
export default {
    name: "TarBarItem",
    props:{
        path: String,
        activeColor:{
            type: String,
            default: 'red'
        }
    },
    data(){
        return {
                    
        }
    },
    methods:{
        itemclick(){
            this.$router.replace(this.path)
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    }
}
</script>

<style  scoped>
   .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 4px;
        margin-bottom: 2px;
        vertical-align: middle;
    }
    .active{
        color: red;
    }

</style>