<template>
    <section>
        <h2>KPMS</h2>
        <KPM :kpms="kpms"></KPM>
    </section>
</template>

<script>

import KPM from './KPM';
import api from '../../services/api';

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
    KPM
  }
};
</script>

<style>

</style>
