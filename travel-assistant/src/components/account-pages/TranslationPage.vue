<script setup>
import {computed, ref} from "vue";
import {useRouter} from "vue-router";
import AppHeader from "@/components/page-components/AppHeader.vue";

const language = ref('en');
const translations = {
  en: {
    greeting: 'Hello!',
    message: 'This is a translation dummy page.',
  },
  es: {
    greeting: '¡Hola!',
    message: 'Esta es una página de traducción ficticia.',
  },
  fr: {
    greeting: 'Bonjour!',
    message: 'Ceci est une page de traduction fictive.',
  },
};

const setLanguage = (lang) => {
  language.value = lang;
};
const router = useRouter();
const goBack = () => {
  router.back();
};

const currentTranslation = computed(() => translations[language.value]);
</script>

<!-- TranslationComponent.vue -->

<template>
  <AppHeader></AppHeader>
  <button class="homeButton" @click="goBack">Go back</button>
  <div class="translation-container">
    <h1>{{ currentTranslation.greeting }}</h1>
    <p>{{ currentTranslation.message }}</p>

    <div class="language-buttons">
      <button @click="setLanguage('en')">English</button>
      <button @click="setLanguage('es')">Español</button>
      <button @click="setLanguage('fr')">Français</button>
    </div>
  </div>
</template>

<style scoped>
/* Enhanced and more sophisticated styling */
.translation-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
}
.homeButton {
  margin-top: 20px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 15px;
}

p {
  color: #555;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.language-buttons button {
  margin: 8px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: #fff;
  transition: background-color 0.3s;
}

.language-buttons button:hover {
  background-color: #2980b9;
}
</style>
