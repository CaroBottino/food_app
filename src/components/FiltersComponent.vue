<script>
export default {
  filters: {
    toPrice(price) {
      return "$ " + price.toFixed(2);
    },
  },
};
</script>
