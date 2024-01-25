<template>
  <div>
    <h1>Async components</h1>
    <h3>{{ selectedComponent }}</h3>
    <el-radio-group v-model="selectedComponent" @change="handleChange">
      <el-radio v-for="component in componentsList" :key="component.id" :label="component.value">{{ component.value }}</el-radio>
    </el-radio-group>
    <component :is="dynamicComponent" v-if="selectedComponent"></component>
  </div>
</template>

<script>
import componentsList from "@/enums/componentsList.js"
import { markRaw } from 'vue';
export default {
  data() {
    return {
      componentsList: componentsList,
      selectedComponent: null,
      dynamicComponent: null
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
      this.loadComponent()
    },
    async loadComponent() {
      const comp = await import(`@/components/AsyncComponents/${this.selectedComponent}.vue`)
      this.dynamicComponent = markRaw(comp.default)
      console.log(this.dynamicComponent)
    }
  },
  created() {
    console.log(this.componentsList)
  }

}
</script>

<style lang="scss" scoped>

</style>