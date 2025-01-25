<template>
  <div class="mt-6 max-w-4xl mx-auto">
    <h2 class="text-xl font-semibold mb-2">Statisztikák</h2>
    <div v-if="totalEntries > 0">
      <p>Összes bejegyzés: {{ totalEntries }}</p>
      <div class="relative w-full">
        <canvas ref="entriesChart"></canvas>
      </div>
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
    let chartInstance = null;

    const createChart = () => {
      if (chartInstance) {
        chartInstance.destroy(); // Előző diagram eltávolítása
      }

      if (!entriesChart.value) return;

      const ctx = entriesChart.value.getContext('2d');

      if (ctx) {
        // Kulcsok és értékek szűrése
        const validEntries = Object.entries(props.entries).filter(([key, value]) => {
          return (
            key !== undefined &&
            key !== null &&
            key !== '' &&
            Array.isArray(value) &&
            value.length > 0
          );
        });

        const labels = validEntries.map(([key]) => key); // Érvényes kulcsok
        const data = validEntries.map(([, value]) => value.length); // Érvényes értékek

        chartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Bejegyzések száma',
              data: data,
              backgroundColor: 'rgb(234 179 8)',
              borderColor: 'rgb(234 179 8)',
              borderWidth: 1,
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
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
        // Szűrjük az érvényes bejegyzéseket
        totalEntries.value = Object.entries(newEntries)
          .filter(([key, value]) => {
            return (
              key !== undefined &&
              key !== null &&
              key !== '' &&
              Array.isArray(value) &&
              value.length > 0
            );
          })
          .flatMap(([, value]) => value).length;

        createChart();
      },
      { immediate: true }
    );

    onMounted(() => {
      createChart();
    });

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


