<template>
    <form @submit.prevent="onsubmit">
    <h2 class="label-wrapper">
      <label for="new-todo-input" class="label__lg">
        What needs to be done?
      </label>
    </h2>
    <input 
        type="text" id="new-to-do-input" name="new-todo" autocomplete="off" v-model.lazy.trim="label" class="input_lg"
    >
    <button type="submit" class="btn btn_primary btn_lg">Add</button>


    </form>


</template>

<script>
  export default {
    methods:{
        onsubmit(){
            this.$emit("todo-added",this.label);
            this.label="";
        }
    },

    data(){
        return {
            label:""
        }
    }

  };
</script>