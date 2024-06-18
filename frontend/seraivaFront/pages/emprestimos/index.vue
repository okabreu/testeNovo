<script setup lang="ts">
import { getEmprestimos } from "~/services/emprestimos";
import { type Emprestimo } from "~/models/emprestimo";
import { type Ref, ref } from "vue";
import { useToast } from "primevue/usetoast";
const toast = useToast();


const livros: Ref<Array<Emprestimo>> = ref([])  

const atualizarLivros = () => {
  getEmprestimos()
  .then((emprestimoEncontrados?) => {
    console.log("Livros Encontrados: ", emprestimoEncontrados??.results[0].usuarioFK);
    livros.value = emprestimoEncontrados??.results ?? [];
  });
};

atualizarLivros();

</script>

<template>
  <main class="home-container flex flex-column align-items-center">
    <Toast/>
    <div class="LivroContainer grid align-items-center justify-content-center">
      <div v-for="(livro,index) in livros">
        <LivroItem :key="index" class="col-4" :livro="livro" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
  .home-container{
      margin: 0;
      width: 100vw;
      min-height: calc(100vh - var(--altura-header));
      background-color: #f6f6f6;
  }
</style>