<template>
  <header class="header_container">
    <nav class="header_wrap">
      <ul class="menu_list">
        <li class="vertical_center">
          <img class="logo cursor" src="@/assets/images/icon.png" alt="icon.png">
        </li>
        <li class="menu_list_item right vertical_center">
          <button v-if="!isLogin" class="loginbtn" @click="customMethod">로그인</button>
          <button v-else class="loginbtn logout" @click="customMethod">로그아웃</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'BookHeaderComp',
  props: {
    logisStatus: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      isLogin: false
    }
  },

  mounted() { },

  methods: {
    customMethod() {

    }
  }
}
</script>

<style scoped src="@/assets/styles/headercomp.css"></style>
