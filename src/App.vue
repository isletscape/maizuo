<template>
  <!--    
              App                             
               |                                  
               |----Home  
               |      |            
               |      |----Movie         
               |      |----Cinema        
               |      |----Mine          
               |                                  
               |----City                          
               |----                                                     
-->
  <!-- <transition :name="transName">
    <router-view></router-view>
  </transition> -->
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <!-- <keep-alive> -->
        <component :is="Component" />
        <!-- </keep-alive> -->
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  setup() {},
}
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
}
.fade-enter-active {
  transition: opacity 3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
