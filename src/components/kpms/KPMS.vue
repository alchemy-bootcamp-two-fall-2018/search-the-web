<template>
    <section>
        <h2>KPMS</h2>

        <KPMSSearch :onSubmit="handleSubmit"/>

        <div v-show="error" class="error"><br>
          {{error}}
        </div>

        <KPM :kpms="kpms" v-if="!error"></KPM>
    </section>
</template>

<script>

import api from '../../services/api';
import KPM from './KPM';
import KPMSSearch from './KPMSSearch';

export default {
  data() {
    return {
      kpms: [],
      error: null,
    };
  },
  watch: {
    $route(newRoute) {
      if(this.search !== newRoute.query.fiscal_year) {
        this.handleSubmit({fyear: newRoute.query.fiscal_year});
      }
    }
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
      this.error = null;
      this.$router.push({ query: {
        fiscal_year: encodeURIComponent(keyword.fyear)
      } });
  
      api.getKpm(keyword.fyear)
        .then(kpms => this.kpms = kpms.results)
        .catch(err => this.error = err.message);
    }
  }

};
</script>

<style>
.error {
  color: red;
}
</style>
