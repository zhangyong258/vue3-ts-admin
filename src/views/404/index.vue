<template>
  <div class="notFound">
    <img src="./404.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    jump() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="less">
.notFound {
  padding: 200px 0;
  min-height: 600px;
  text-align: center;
}
</style>
