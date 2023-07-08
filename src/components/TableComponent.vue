<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th v-for="(header, i) in headers" :key="i">{{ header }}</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, j) in items" :key="item.id">
          <th scope="row">{{ j + 1 }}</th>
          <td v-for="(header, k) in headers" :key="k">
            <template v-if="header === 'img'">
              <img
                :src="item[header]"
                class="img-fluid rounded-start"
                alt="..."
              />
            </template>
            <template v-else>
              {{ item[header] }}
            </template>
          </td>
          <td v-if="actions">
            <button
              v-if="actions.includes('edit')"
              type="button"
              class="btn btn-danger"
              @click="editItem(item.id)"
            >
              <b-icon icon="pencil" class="nav-icon"></b-icon>
            </button>
            <button
              v-if="actions.includes('delete')"
              type="button"
              class="btn btn-danger"
              @click="deleteItem(item.id)"
            >
              <b-icon icon="trash" class="nav-icon"></b-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  props: {
    headers: {
      Array,
      required: true,
    },
    items: {
      Array,
      required: true,
    },
    actions: {
      Array,
    },
  },
  methods: {
    editItem(itemId) {
      this.$emit("editItem", itemId);
    },
    deleteItem(itemId) {
      this.$emit("deleteItem", itemId);
    },
  },
};
</script>

<style scoped>
.table {
  background-color: white;
  max-width: 90%;
  margin-left: 5%;
}

img {
  max-height: 6rem;
  max-width: 6rem;
}

.btn {
  margin: 3px;
}
</style>
