<template>
    <table>
        <tr>
            <th>amount</th>
            <th>bureau</th>
            <th>fiscal_year</th>
        </tr>
        <tr v-for="(kpm, index) in kpms" :key="index">
            <td>{{kpm.amount}}</td>
            <td>{{kpm.bureau}}</td>
            <td>{{kpm.fiscal_year}}</td>
        </tr>
    </table>
</template>

<script>
export default {
  props: {
    kpms: Array
  }
};
</script>

<style>

</style>
