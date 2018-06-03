<template>
  <div>
    <h1> Registration </h1>
        <custom-input v-for='field in fields'
        :placeholder='field.placeholder'
        :key='field.key'
        :type='field.type'
        v-model='field.value'></custom-input>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default({
    data() {
        return {
            fields: {
                name: {key: 'Name', placeholder: 'Enter Name..', type: 'text', value: ''},
                email: {key: 'Email', placeholder: 'Enter Email..', type: 'email', value: ''},
                password: {key: 'Password', placeholder: 'Enter Password..', type: 'password', value: ''}
            }
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
