<template>
  <div class="container">
    <h2>메인 랜딩 페이지</h2>
    <el-button type="primary" round @click="goBucketPage">
      Log in with Google
    </el-button>
    <br>
    <el-button type="success" round @click="goChartPage">
      Go Chart Page
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: 'wally'
    }
  },
  methods: {
    goBucketPage() {
      this.$router.push(`/buckets/@${this.user}`);
    },
    goChartPage() {
      this.$router.push('/chart');
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 300px;
  padding: 10px;
  border: 1px solid $colorLight;
  border-radius: 10px;
  box-shadow: 2px 4px 4px $colorLight;
  
  > h2 {
    color: $colorBlue;
    margin-bottom: 10px;
  }
}
</style>
