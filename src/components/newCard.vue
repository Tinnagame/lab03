<template>
  <div class="new-card">
    <span>@{{ event.category }} </span>
    <h4>{{ event.organizer }}</h4>
  </div>
</template>

<script>
export default {
  name: 'NewCard',

  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.new-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: right;
}
.new-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
