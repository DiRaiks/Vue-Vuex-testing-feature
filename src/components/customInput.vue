<template lang="html">
    <label>
        {{label}}
        <input
        :type='type'
        :value='value'
        @input="$emit('input', $event.target.value)" />
    </label>
</template>

<script>
export default {
    props: ['type', 'value'],
    data() {
        return {
            label: 'TEST'
        }
    }
}
</script>

<style lang="css">
</style>
