<template>
    <section>
        <h2>KPMS</h2>

        <KPMSSearch :onSubmit="handleSubmit"/>

        <KPM :kpms="kpms"></KPM>
    </section>
</template>

<script>

import api from '../../services/api';
import KPM from './KPM';
import KPMSSearch from './KPMSSearch';

export default {
  data() {
    return {
      kpms: []
    };
  },
  created() {
    api.getKpm().then(kpms => this.kpms = kpms.results);
  },
  components: {
    KPM,
    KPMSSearch
  },
  methods: {
    handleSubmit(keyword) {
      this.$router.push({ query: {
        fiscal_year: encodeURIComponent(keyword.fyear)
      } });
  
      api.getKpm(keyword.fyear).then(kpms => this.kpms = kpms.results);
    }
  }

};
</script>

<style>

</style>
