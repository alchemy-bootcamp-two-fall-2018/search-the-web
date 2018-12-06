<template>
    <section>
        <h2>KPMS</h2>

        <KPMSSearch :onSubmit="handleSubmit"/>

        <Loader :loading="loading"/>

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
import Loader from './Loader';

export default {
  data() {
    return {
      loading: false,
      kpms: [],
      error: null,
      search: this.$route.query.fiscal_year || ''
    };
  },
  watch: {
    $route(newRoute) {
      if(newRoute.query.fiscal_year && this.search !== newRoute.query.fiscal_year) {
        this.search = { fyear: newRoute.query.fiscal_year };
      } else if(!newRoute.query.fiscal_year) {
        this.search = { fyear: '' };
      }
      this.handleSubmit(this.search);
    }
  },
  created() {
    api.getKpm(this.search).then(kpms => this.kpms = kpms.results);
  },
  components: {
    KPM,
    KPMSSearch,
    Loader
  },
  methods: {
    handleSubmit(keyword) {
      this.loading = true;
      this.error = null;
      this.$router.push({ query: {
        fiscal_year: encodeURIComponent(keyword.fyear)
      } });
  
      api.getKpm(keyword.fyear)
        .then(kpms => {
          this.kpms = kpms.results;
          this.loading = false;
        })
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
