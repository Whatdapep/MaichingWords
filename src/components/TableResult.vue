<template>
    <table>
    <tbody>
<!-- v-for="result in props" v-bind:key="result" -->
    <tr v-for="n in outputWords" v-bind:key="n" >
    {{n}}
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
            outputWords:null,

        }
    }
    ,
    props:['outputWords']
}
</script>
<style scoped>

</style>