<template>
  <div>
    <child-component :parent-message="msg"
                     @print="val => printMessage(val)"></child-component>
  </div>
</template>

<script>
import ChildComponent from './components/child-component'

export default {
  name: 'parent-component',
  components: { ChildComponent },
  data () {
    return {
      msg: '안녕하세요.'
    }
  },
  methods: {
    printMessage (val) {
      console.log(val)
    }
  }
}
</script>