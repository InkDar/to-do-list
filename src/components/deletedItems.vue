<template>
  <div>
    <span>{{ toDoItem.title }}</span>
    <br>
    <button @click="restoreItem()">Restore</button>
  </div>
  <!-- v-if="toDoItem.deleted" -->
</template>

<script lang="ts">
import ToDoItem from "@/types/toDoItem";
import { defineComponent } from "vue";

export default defineComponent({
  name: "deletedItems",
  props: {
    toDoItem: {
      required: true,
      type: ToDoItem,
    },
  },
  methods: {
    restoreItem(): void {
      this.toDoItem.restoreItem();
    },
  },
});
</script>
