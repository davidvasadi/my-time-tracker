
<!-- Az alábbi komponens nem készült el -->

<template>
  <div class="mt-6">
    <h2 class="text-xl font-semibold">Statisztikák</h2>
    <div v-if="totalEntries > 0">
      <p>Összes bejegyzés: {{ totalEntries }}</p>
      <canvas ref="entriesChart"></canvas>
    </div>
    <div v-else>
      <p>Nincsenek bejegyzések a statisztikákhoz.</p>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import Chart from 'chart.js/auto';

export default {
  props: {
    entries: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const totalEntries = ref(0);
    const entriesChart = ref(null);
    let chartInstance = null; // A Chart példány tárolására

    const createChart = () => {
      if (chartInstance) {
        chartInstance.destroy(); // Az előző diagram eltávolítása
      }

      if (!entriesChart.value) return; // Ellenőrizzük, hogy a ref elérhető

      const ctx = entriesChart.value.getContext('2d');
      if (ctx) {
        chartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Object.keys(props.entries),
            datasets: [{
              label: 'Bejegyzések száma',
              data: Object.values(props.entries).map(userEntries => userEntries.length),
              backgroundColor: 'rgb(234 179 8)',
              borderColor: 'rgb(234 179 8)',
              borderWidth: 1,
            }],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    };

    watch(
      () => props.entries,
      (newEntries) => {
        totalEntries.value = Object.values(newEntries).flat().length;
        createChart();
      },
      { immediate: true }
    );

    onMounted(() => {
      createChart();
    });

    // Diagram példány eltávolítása a komponens eltávolítása előtt
    onBeforeUnmount(() => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    });

    return {
      totalEntries,
      entriesChart,
    };
  },
};
</script>

<style scoped>
canvas {
  max-width: 600px;
  margin: auto;
}
</style>
