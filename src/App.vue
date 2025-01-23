<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6">Időnyilvántartó rendszer</h1>
    <TimeEntryForm 
      @submit="handleFormSubmit" 
      ref="entryForm" 
      :isEdit="isEdit" 
      :entry="currentEntry" 
    />

    <!-- Nézet kiválasztása -->
    <div class="mt-6 mb-4">
      <label for="viewType" class="mr-2">Nézet:</label>
      <select v-model="viewType" id="viewType" class="p-2 border border-gray-300 rounded">
        <option value="daily">Napi</option>
        <option value="weekly">Heti</option>
        <option value="monthly">Havi</option>
      </select>
    </div>

    <!-- Szűrés címkére -->
    <div class="mb-4">
      <label for="tagFilter" class="mr-2">Szűrés címkére:</label>
      <select v-model="tagFilter" id="tagFilter" class="p-2 border border-gray-300 rounded">
        <option value="">Összes</option>
        <option value="projekt">Projekt</option>
        <option value="ügyfél">Ügyfél</option>
      </select>
    </div>

    <!-- Bejegyzések -->
    <div class="mt-6">
      <h2 class="text-xl font-semibold">Bejegyzések</h2>
      <div v-if="Object.keys(filteredEntries).length === 0" class="mt-4">
        <p>Nincsenek bejegyzések.</p>
      </div>
      <div v-for="(userEntries, userName) in filteredEntries" :key="userName" class="mb-4">
        <div v-for="(entry, index) in userEntries" :key="index" class="border p-4 mt-2 rounded">
          <p><strong>Munkavállaló neve:</strong> {{ entry.userName }}</p>
          <p><strong>Dátum:</strong> {{ entry.date }}</p>
          <p><strong>Kezdési idő:</strong> {{ entry.startTime }}</p>
          <p><strong>Befejezési idő:</strong> {{ entry.endTime }}</p>
          <p><strong>Feladat leírása:</strong> {{ entry.taskDescription }}</p>
          <p><strong>Címkék:</strong> <span v-if="entry.tags.length">{{ entry.tags }}</span><span v-else>Nincsenek címkék.</span></p>
          <button @click="editEntry(entry, userName, index)" class="mt-2 bg-yellow-500 hover:bg-yellow-700 text-white p-2 rounded">Módosítás</button>
          <button @click="deleteEntry(userName, index)" class="mt-2 mx-2 bg-red-500 hover:bg-red-700 text-white p-2 rounded">Törlés</button>
        </div>
      </div>
    </div>

    <!-- MyStatistics komponens -->
    <MyStatistics :entries="filteredEntries" v-if="filteredEntries && Object.keys(filteredEntries).length" />

    <!-- Értesítések (toast) -->
    <div class="fixed top-0 right-0 p-4">
      <div v-for="(toast, index) in toasts" :key="index" :class="['toast', toast.type]">
        {{ toast.message }}
        <button @click="removeToast(index)" class="ml-2 bg-transparent border-0 cursor-pointer">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import TimeEntryForm from './components/TimeEntryForm.vue';
import MyStatistics from './components/MyStatistics.vue'; // Győződj meg róla, hogy ezt importálod

export default {
  components: {
    TimeEntryForm,
    MyStatistics,
  },
  data() {
    return {
      entries: JSON.parse(localStorage.getItem('entries')) || {},
      viewType: 'daily',
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
      const filtered = {};
      const today = new Date();
      const todayString = today.toISOString().split('T')[0];
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      for (const userName in this.entries) {
        const userEntries = this.entries[userName];

        filtered[userName] = userEntries.filter(entry => {
          const entryDate = new Date(entry.date);
          const isDateMatch =
            (this.viewType === 'daily' && entry.date === todayString) ||
            (this.viewType === 'weekly' && entryDate >= startOfWeek && entryDate <= endOfWeek) ||
            (this.viewType === 'monthly' && entryDate.getMonth() === today.getMonth());
          const isTagMatch = this.tagFilter ? entry.tags === this.tagFilter : true;

          return isDateMatch && isTagMatch;
        });
      }
      return filtered;
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
      window.scrollTo(0, 0); 
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
