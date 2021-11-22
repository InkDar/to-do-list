<template>
  <div>
    <span>{{ toDoItem.title }}</span>
    <span>{{ toDoItem.deleted }}</span>
    <button @click="deleteItem()">Delete</button>
  </div>
</template>

<script lang="ts">
import ToDoItem from "@/types/toDoItem";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToDoItem",
  props: {
    toDoItem: {
      required: true,
      type: ToDoItem,
    },
  },
  methods: {
    changeStatus() {
      this.toDoItem.changeStatus();
    },
    deleteItem() {
      this.toDoItem.deleteItem();
    },
    restoreItem() {
      this.toDoItem.restoreItem();
    },
  },
});
</script>
