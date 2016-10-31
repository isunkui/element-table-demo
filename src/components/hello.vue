<template>
  <section class="demo-bg" v-loading="loading">
    <el-table :data="datas" boder style="width: 400px; margin: 0 auto;">
      <el-table-column align="center" label="id"></el-table-column>
      <el-table-column align="center" label="count"></el-table-column>
    </el-table>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: mapState({
    loading: state => state.common.loading,
    datas: state => state.common.mockDatas,
    page: state => state.common.mockDatasPage
  }),
  methods: {
    ...mapActions(['fetchMockDatas'])
  },
  created() {
    this.fetchMockDatas();
  }
};
</script>

<style lang="css" scoped>
  .demo-bg {
    width: 100%;
    min-height: 600px;
    background: #eee;
  }
</style>
