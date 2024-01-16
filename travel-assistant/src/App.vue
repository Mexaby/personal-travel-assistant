<template>
  <div class="active-page">
    <router-view v-slot="{ Component }">
      <transition name="zoom-fade" mode="out-in">
        <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: all 0.5s;
}

.zoom-fade-enter-from {
  transform: scale(0.5);
  opacity: 0;
}

.zoom-fade-leave-to {
  transform: scale(1.5);
  opacity: 0;
}

.zoom-fade-enter-to,
.zoom-fade-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style>

<style>
*
{
  font-family: "Montserrat", sans-serif;
}
</style>

