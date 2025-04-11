<template>
  <div class="bg-zinc-50 min-h-screen">
    <div class="max-w-4xl mx-auto p-6">
      <h1 class="text-2xl font-bold mb-6 text-center">Időnyilvántartó rendszer</h1>

      <!-- Űrlap -->
      <TimeEntryForm
        @submit="handleFormSubmit"
        ref="entryForm"
        :isEdit="isEdit"
        :entry="currentEntry"
      />

      <!-- Szűrés -->
      <div class="bg-white p-4 rounded shadow-md mt-8 flex flex-col md:flex-row gap-4 md:items-end md:justify-between">
        <div class="flex flex-col w-full md:w-1/3">
          <label for="viewType" class="text-sm font-medium text-gray-700 mb-1">Nézet:</label>
          <select v-model="viewType" id="viewType" class="p-2 border border-gray-300 rounded">
            <option value="daily">Napi</option>
            <option value="weekly">Heti</option>
            <option value="monthly">Havi</option>
          </select>
        </div>

        <div class="flex flex-col w-full md:w-1/3">
          <label for="selectedDate" class="text-sm font-medium text-gray-700 mb-1">Dátum:</label>
          <input
            type="date"
            v-model="selectedDate"
            id="selectedDate"
            class="p-2 border border-gray-300 rounded"
          />
        </div>

        <div class="flex flex-col w-full md:w-1/3">
          <label for="tagFilter" class="text-sm font-medium text-gray-700 mb-1">Szűrés címkére:</label>
          <select v-model="tagFilter" id="tagFilter" class="p-2 border border-gray-300 rounded">
            <option value="">Összes</option>
            <option value="projekt">Projekt</option>
            <option value="ügyfél">Ügyfél</option>
          </select>
        </div>
      </div>

      <!-- Bejegyzések -->
      <div class="mt-10">
        <h2 class="text-xl font-semibold mb-4">Bejegyzések</h2>
        <div v-if="filteredEntries.length === 0" class="text-gray-500 italic">Nincsenek bejegyzések.</div>
        <div
          v-for="(entry, index) in filteredEntries"
          :key="index"
          class="mb-4 bg-white rounded-2xl border p-4 shadow-sm"
        >
          <p><strong>Munkavállaló neve:</strong> {{ entry.userName }}</p>
          <p><strong>Dátum:</strong> {{ entry.date }}</p>
          <p><strong>Kezdési idő:</strong> {{ entry.startTime }}</p>
          <p><strong>Befejezési idő:</strong> {{ entry.endTime }}</p>
          <p><strong>Feladat leírása:</strong> {{ entry.taskDescription }}</p>
          <p>
            <strong>Címkék:</strong>
            <span v-if="entry.tags.length">{{ entry.tags }}</span>
            <span v-else class="text-gray-500 italic">Nincsenek címkék</span>
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <button
              @click="editEntry(entry, entry.userName, entry.originalIndex)"
              class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded"
            >
              Módosítás
            </button>
            <button
              @click="deleteEntry(entry.userName, entry.originalIndex)"
              class="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
            >
              Törlés
            </button>
          </div>
        </div>
      </div>

      <!-- Statisztika -->
      <MyStatistics :entries="aggregatedEntries" v-if="filteredEntries.length" class="mt-10" />

      <!-- Toast üzenetek -->
      <div class="fixed top-0 right-0 p-4 z-50">
        <div
          v-for="(toast, index) in toasts"
          :key="index"
          :class="['toast', toast.type]"
        >
          {{ toast.message }}
          <button @click="removeToast(index)" class="ml-2 bg-transparent border-0 cursor-pointer">X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeEntryForm from './components/TimeEntryForm.vue';
import MyStatistics from './components/MyStatistics.vue';

export default {
  components: {
    TimeEntryForm,
    MyStatistics,
  },
  data() {
    return {
      entries: JSON.parse(localStorage.getItem('entries')) || {},
      viewType: 'daily',
      selectedDate: new Date().toISOString().split('T')[0],
      tagFilter: '',
      toasts: [],
      isEdit: false,
      currentEntry: {},
      currentUserName: '',
      currentEntryIndex: null,
    };
  },
  computed: {
    filteredEntries() {
      if (!this.selectedDate || isNaN(new Date(this.selectedDate).getTime())) return [];

      const selected = new Date(this.selectedDate);
      const selectedString = selected.toISOString().split('T')[0];

      const startOfWeek = new Date(selected);
      const dayOfWeek = selected.getDay();
      startOfWeek.setDate(selected.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      const result = [];

      for (const userName in this.entries) {
        const userEntries = this.entries[userName];
        userEntries.forEach((entry, index) => {
          if (!entry.date) return;
          const entryDate = new Date(entry.date);
          if (isNaN(entryDate.getTime())) return;

          let isDateMatch = false;

          if (this.viewType === 'daily') {
            isDateMatch = entry.date === selectedString;
          } else if (this.viewType === 'weekly') {
            isDateMatch = entryDate >= startOfWeek && entryDate <= endOfWeek;
          } else if (this.viewType === 'monthly') {
            isDateMatch =
              entryDate.getFullYear() === selected.getFullYear() &&
              entryDate.getMonth() === selected.getMonth();
          }

          const isTagMatch = this.tagFilter ? entry.tags === this.tagFilter : true;

          if (isDateMatch && isTagMatch) {
            result.push({ ...entry, userName, originalIndex: index });
          }
        });
      }

      return result;
    },
    aggregatedEntries() {
      const result = {};
      this.filteredEntries.forEach(entry => {
        if (!result[entry.userName]) result[entry.userName] = [];
        result[entry.userName].push(entry);
      });
      return result;
    },
  },
  methods: {
    handleFormSubmit(formData) {
      const userName = formData.userName;

      if (this.isEdit) {
        this.entries[userName][this.currentEntryIndex] = formData;
        this.isEdit = false;
        this.addToast('Bejegyzés sikeresen módosítva!', 'success');
      } else {
        if (!this.entries[userName]) {
          this.entries[userName] = [];
        }
        this.entries[userName].push(formData);
        this.addToast('Bejegyzés sikeresen mentve!', 'success');
      }

      localStorage.setItem('entries', JSON.stringify(this.entries));
      this.$refs.entryForm.resetForm();
    },
    editEntry(entry, userName, index) {
      this.currentEntry = { ...entry };
      this.isEdit = true;
      this.currentUserName = userName;
      this.currentEntryIndex = index;
      this.$refs.entryForm.formData = { ...entry };
      this.scrollToTop();
    },
    deleteEntry(userName, index) {
      this.entries[userName].splice(index, 1);
      if (this.entries[userName].length === 0) {
        delete this.entries[userName];
      }
      localStorage.setItem('entries', JSON.stringify(this.entries));
      this.addToast('Bejegyzés törölve!', 'error');
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    addToast(message, type) {
      this.toasts.push({ message, type });
      setTimeout(() => {
        this.removeToast(this.toasts.length - 1);
      }, 3000);
    },
    removeToast(index) {
      this.toasts.splice(index, 1);
    },
  },
};
</script>

<style>
.toast {
  @apply p-2 mb-2 rounded shadow-md;
}
.toast.success {
  @apply bg-green-100 text-green-800;
}
.toast.error {
  @apply bg-red-100 text-red-800;
}
</style>
