<script setup lang="ts">
import { type Emprestimo } from '~/models/emprestimo';
import { computed } from "#imports";


type propType = {
  emprestimo: Emprestimo;
}
const props = defineProps<propType>();

</script>

<template>
    <section class="cartao flex flex-column align-items-center justify-content-center" v-if="props.emprestimo">
      <div class="check text right">
        
      </div>
      <div>
        <h4 class="emprestimoNome">{{ props.emprestimo.usuarioFK }}</h4>
      </div>
      <div>
        <h4 class="emprestimoData">{{ props.emprestimo.data_emprestimo }}</h4>
      </div>
      <div>
        <h4 class="emprestimoStatus">{{ props.emprestimo.status }}</h4>
      </div>
    </section>
</template>

<style scoped lang="scss">
.cartao {
  width: 300px;
  height: 300px;
  background-color: rgb(226, 18, 18);
  border-radius: 8px;
  margin-top: 5rem;
  margin-left: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.318);

  .emprestimoNome,
  .emprestimoData,
  .emprestimoStatus {
    color: #000000;
    text-align: center;
    margin: 0.5rem 0;
  }
}
</style>