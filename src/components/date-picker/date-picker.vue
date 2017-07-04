<template>
  <div class="date-picker">
    <input type="text"></input>
    <i class="fa fa-calendar"></i>
    <div class="calendar">
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      today: 'hoy'
    }
  }
}
</script>

<style lang="scss" scoped>
.date-picker {
  input {
    cursor: pointer;
  }

  .fa-calendar {
    cursor: pointer;
    margin-left: -25px;
  }
}
</style>