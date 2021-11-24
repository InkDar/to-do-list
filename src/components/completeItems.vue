<template>
  <div>
    <span>{{ toDoItem.title }}</span>
    <br />
    <button @click="changeStatus()">Mark Undone</button>
    <button @click="deleteItem()">Delete</button>
  </div>
  <!-- v-if="!toDoItem.deleted && toDoItem.done" -->
</template>

<script lang="ts">
/* eslint-disable prettier/prettier */
import ToDoItem from "@/types/toDoItem";
import { defineComponent } from "vue";

export default defineComponent({
  name: "completeItems",
  props: {
    toDoItem: {
      required: true,
      type: ToDoItem,
    },
  },
  methods: {
      changeStatus(): void{
          this.toDoItem.changeStatus();
      },
      deleteItem(): void {
          this.toDoItem.deleteItem();
      }
  }
});
</script>
