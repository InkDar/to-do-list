<template>
  <div class="home">
    <form class="add-todo-input">
      <label for="title">Title of new ToDo</label> <br />
      <input type="text" id="title" v-model="newTitle" />
      <button type="submit" @click.prevent="addNewItem()">Add</button>
    </form>
    <ul>
      <component
        :is="compName"
        v-for="item in currItems"
        :key="item.id"
        :toDoItem="item"
      />
    </ul>
  </div>
  <div>
    <button @click="showComplete()">Show "Done"s</button>
    <button @click="showDeleted()">Show "Deleted"s</button>
    <button @click="showAll()">Show "Current"s</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDoItem from "@/types/toDoItem";
import currentItems from "@/components/currentItems.vue";
import completeItems from "@/components/completeItems.vue";
import deletedItems from "@/components/deletedItems.vue";
import { current, deleted, complete } from "@/constants/modeConstants";

export default defineComponent({
  name: "Home",
  components: { currentItems, completeItems, deletedItems },
  data() {
    return {
      newTitle: "",
      description: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
      compName: current,
      counter: 5 as number,
      allItems: [
        new ToDoItem(
          1,
          "ToDo_1",
          "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"
        ),
        new ToDoItem(
          2,
          "ToDo_2",
          "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"
        ),
        new ToDoItem(
          3,
          "ToDo_3",
          "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"
        ),
        new ToDoItem(
          4,
          "ToDo_4",
          "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"
        ),
      ] as ToDoItem[],
    };
  },
  computed: {
    currItems: {
      get(): ToDoItem[] {
        if (this.compName === current) {
          return this.allItems.filter((item) => !item.deleted && !item.done);
        } else if (this.compName === deleted) {
          return this.allItems.filter((item) => item.deleted);
        } else if (this.compName === complete) {
          return this.allItems.filter((item) => !item.deleted && item.done);
        } else {
          return [];
        }
      },
      set(): void {
        return;
      },
    },
  },
  methods: {
    addNewItem(): void {
      this.allItems.push(
        new ToDoItem(this.counter++, this.newTitle, this.description)
      );
      this.newTitle = "";
    },
    showDeleted(): void {
      this.compName = deleted;
    },
    showComplete(): void {
      this.compName = complete;
    },
    showAll(): void {
      this.compName = current;
    },
  },
});
</script>
