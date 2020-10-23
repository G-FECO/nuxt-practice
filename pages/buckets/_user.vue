<template>
  <div>
    <div v-if="!isValid">유효하지 않는 주소입니다.</div>
    <div v-else>{{ userId }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userParams: this.$route.params.user
    }
  },
  computed: {
    isValid() {
      return this.userParams && this.userParams[0] === '@' && this.userParams.length >= 2
    },
    userId() {
      return this.userParams.slice(1)
    }
  }
}
</script>

<style>

</style>