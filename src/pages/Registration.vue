<template>
  <div>
    <h1> Hello World! </h1>
    <custom-input type='text' v-model='valueName'></custom-input>
    <custom-input type='text' v-model='valueFamily'></custom-input>

  </div>
</template>

<script>
import {mapState} from 'vuex';

export default({
    data() {
        return {
            valueName: '',
            valueFamily:''
        }
    },
    computed: mapState([
        'count'
    ]),
    methods: {
        inputHandler($event) {
            return this.value = $event;
        },
    }
})
</script>
