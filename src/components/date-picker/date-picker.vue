<template>
  <div class="date-picker">
    <!-- TODO MG: use placeholder? for input icon -->
    <input type="text"></input>
    <i class="fa fa-calendar"></i>
    <div class="calendar">
      
    </div>
  </div>
</template>

<script>
// Prop date comes in as DD/MM/YYYY
export default {
  props: {
    date: {
      type: String
    }
  },
  computed: {
    today: () {
      return new Date
    }
    selectedDate: () {
      if (!this.date) {
        return 
      }
    }
  },
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