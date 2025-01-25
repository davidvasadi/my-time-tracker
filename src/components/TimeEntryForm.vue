<template>
  <div class="p-6 bg-white rounded shadow">
    <h2 class="text-lg font-semibold mb-4">{{ isEdit ? 'Módosítsd a bejegyzést' : 'Új munkaidő bejegyzés' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="userName" class="block text-sm font-medium text-gray-700">Munkavállaló neve</label>
        <input v-model="formData.userName" type="text" id="userName" required
               class="mt-1 block w-full p-2 border border-gray-300 rounded"/>
      </div>
      <div class="mb-4">
        <label for="date" class="block text-sm font-medium text-gray-700">Dátum</label>
        <input v-model="formData.date" type="date" id="date" required
               class="mt-1 block w-full p-2 border border-gray-300 rounded"/>
      </div>
      <div class="flex flex-wrap gap-6">
        <div class="mb-4 flex-1">
          <label for="startTime" class="block text-sm font-medium text-gray-700">Kezdési idő</label>
          <input v-model="formData.startTime" type="time" id="startTime" required
                class="mt-1 block w-full p-2 border border-gray-300 rounded"/>
        </div>
        <div class="mb-4 flex-1">
          <label for="endTime" class="block text-sm font-medium text-gray-700">Befejezési idő</label>
          <input v-model="formData.endTime" type="time" id="endTime" required
                class="mt-1 block w-full p-2 border border-gray-300 rounded"/>
        </div>
      </div>
      
      <div class="mb-4">
        <label for="taskDescription" class="block text-sm font-medium text-gray-700">Feladat leírása</label>
        <textarea v-model="formData.taskDescription" id="taskDescription" rows="3" required
                  class="mt-1 block w-full p-2 border border-gray-300 rounded"></textarea>
      </div>
      <div class="mb-4">
        <label for="tags" class="block text-sm font-medium text-gray-700">Címkék</label>
        <select v-model="formData.tags" id="tags" required class="mt-1 block w-full p-2 border border-gray-300 rounded">
          <option disabled value="">Válassz egy címkét</option>
          <option value="projekt">Projekt</option>
          <option value="ügyfél">Ügyfél</option>
        </select>
      </div>
      <button type="submit" class="mt-2 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
        {{ isEdit ? 'Módosítás' : 'Hozzáadás' }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    entry: {
      type: Object,
      default: () => ({
        userName: '',
        date: '',
        startTime: '',
        endTime: '',
        taskDescription: '',
        tags: '',
      }),
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formData: {
        userName: this.entry.userName || '',
        date: this.entry.date || '',
        startTime: this.entry.startTime || '',
        endTime: this.entry.endTime || '',
        taskDescription: this.entry.taskDescription || '',
        tags: this.entry.tags || '',
      },
    };
  },
  watch: {
    entry: {
      handler(newEntry) {
        this.formData = { ...newEntry };
      },
      deep: true,
      immediate: true,
    },
    isEdit(newVal) {
      if (!newVal) {
        this.resetForm();
      }
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.formData });
      this.resetForm(); 
      this.$emit('notify', 'Sikeresen mentve!'); 
    },
    resetForm() {
      this.formData = {
        userName: '',
        date: '',
        startTime: '',
        endTime: '',
        taskDescription: '',
        tags: '',
      };
    },
  },
};
</script>

<style scoped>
</style>
