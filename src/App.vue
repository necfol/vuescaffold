<template>
  <ul class="nav nav-pills nav-stacked">
      <li>
        <a v-link="{ path: '/view0' }">
            view0
        </a>
      </li>
      <li>
        <a v-link="{ path: '/view1' }">
            view1
        </a>
      </li>
      <li>
        <a v-link="{ path: '/view2' }">
            view2
        </a>
      </li>
  </ul>
  <div>
    <router-view></router-view>
  </div>
</template>
