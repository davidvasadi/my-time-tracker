<template>
  <div v-if="isVisible" :class="['notification', notificationTypeClass]">
    <span>{{ message }}</span>
    <button @click="close" class="ml-2 bg-transparent border-0 cursor-pointer">X</button>
  </div>
</template>

<script>
export default {
  name: 'NotificationMessage',
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'success',
    },
  },
  data() {
    return {
      isVisible: true,
    };
  },
  computed: {
    notificationTypeClass() {
      return {
        'bg-green-100 text-green-800': this.type === 'success',
        'bg-red-100 text-red-800': this.type === 'danger',
      };
    },
  },
  methods: {
    close() {
      this.isVisible = false;
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.notification {
  @apply p-4 rounded-md mb-4;
}
</style>
