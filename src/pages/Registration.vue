<template>
  <div>
    <h1> Hello World! </h1>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default({
  computed: mapState([
    'count'
  ]),
})
</script>
