<template>
  <div>
    {{ this.$route.params.todoDetail }}
  </div>
</template>
<script>
export default {
  name: 'TodoDetail',
  created() {
    console.log(this.$route.params);
  },
};
</script>
