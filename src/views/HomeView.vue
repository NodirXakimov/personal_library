<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data(){
    return {
      name: 'Nodir'
    }
  },
  methods: {
    changeTheName() {
      this.name = 'Adham'
      console.log(this.$data)
    }
  },
  mounted() {
    console.log(this.$data);    // Raw data object
    console.log(this.$props);   // Props passed to the component
    console.log(this.$el);      // Root element
    console.log(this.$options);  // Merged options
  }

}
</script>

<template>
  <main>
    <h1>Home View</h1>
    <h3>The name is <strong>{{ name }}</strong></h3>
    <el-button type="primary" @click="changeTheName">Change the name</el-button>
  </main>
</template>
