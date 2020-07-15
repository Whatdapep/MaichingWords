<template>
    <table>
    <tbody>
    <v-fo></v-fo>
    <tr v-for="result in props" v-bind:key="result" >
    {{result}}
    </tr>
    </tbody>
    </table>
</template>
<script>
export default {
    name:'TableResult',
    data:function ()
    {
        return {
            props:null,

        }
    }
    ,
    props:['props']
}
</script>
<style scoped>

</style>