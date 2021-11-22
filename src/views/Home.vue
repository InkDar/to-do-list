<template>
  <div class="home">
    <ul>
      <to-do-item-view
        v-for="item in toDoItems"
        :key="item.id"
        :toDoItem="item"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDoItem from "@/types/toDoItem";
import ToDoItemView from "@/components/ToDoItemView.vue";

export default defineComponent({
  name: "Home",
  components: { ToDoItemView },
  data() {
    return {
      toDoItems: [
        new ToDoItem(
          1,
          "ToDO_1",
          "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"
        ),
        new ToDoItem(
          2,
          "ToDO_2",
          "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"
        ),
        new ToDoItem(
          3,
          "ToDO_3",
          "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"
        ),
        new ToDoItem(
          4,
          "ToDO_4",
          "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"
        ),
      ] as ToDoItem[],
      counter: 5 as number,
    };
  },
});
</script>

