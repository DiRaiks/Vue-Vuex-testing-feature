<template lang="html">
    <label>
        {{label}}
        <input
        :placeholder="placeholder"
        :type='type'
        :value='value'
        @input="$emit('input', $event.target.value)" />
    </label>
</template>

<script>
export default {
    props: ['type', 'value', 'placeholder'],
    data() {
        return {
            label: 'TEST'
        }
    }
}
</script>

<style lang="css">
</style>
