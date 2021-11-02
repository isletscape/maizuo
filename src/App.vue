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
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
}
.fade-enter-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
