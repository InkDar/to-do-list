<template>
  <div>
    <span>{{ toDoItem.title }}</span>
    <br />
    <button @click="changeStatus()">Done</button>
    <button @click="deleteItem()">Delete</button>
  </div>
  <!-- v-if="!toDoItem.deleted && !toDoItem.done" -->
</template>



<script lang="ts">
import ToDoItem from "@/types/toDoItem";
import { defineComponent } from "vue";

export default defineComponent({
  name: "currentItems",
  props: {
    toDoItem: {
      required: true,
      type: ToDoItem,
    },
    mode: {
      required: true,
      type: String,
    },
  },
  methods: {
    changeStatus() {
      this.toDoItem.changeStatus();
    },
    deleteItem() {
      this.toDoItem.deleteItem();
    },
  },
});
</script>
