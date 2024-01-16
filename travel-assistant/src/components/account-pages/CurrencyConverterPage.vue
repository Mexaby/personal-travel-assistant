<template>
  <div class="converter-container">
    <h2>Currency Converter</h2>

    <div class="input-group">
      <label for="fromCurrency">From:</label>
      <select v-model="fromCurrency" id="fromCurrency">
        <option v-for="(label, currency) in currencies" :key="currency" :value="currency">
          {{ currency }} - {{ label }}
        </option>
      </select>
    </div>

    <div class="input-group">
      <label for="toCurrency">To:</label>
      <select v-model="toCurrency" id="toCurrency">
        <option v-for="(label, currency) in currencies" :key="currency" :value="currency">
          {{ currency }} - {{ label }}
        </option>
      </select>
    </div>

    <div class="input-group">
      <label for="amount">Amount:</label>
      <input v-model="amount" type="number" id="amount" placeholder="Enter amount">
    </div>

    <button @click="convertCurrency">Convert</button>

    <div v-if="result" id="result">{{ result }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currencies: {
        USD: 'US Dollar',
        EUR: 'Euro',
        GBP: 'British Pound',
        // Add more currencies as needed
      },
      fromCurrency: 'USD',
      toCurrency: 'USD',
      amount: 1,
      conversionRates: {
        USD: 1.0,
        EUR: 0.85,
        GBP: 0.73,
        // Add more conversion rates as needed
      },
      result: '',
    };
  },
  methods: {
    convertCurrency() {
      const { fromCurrency, toCurrency, amount, conversionRates } = this;

      if (isNaN(amount) || amount <= 0) {
        this.result = 'Please enter a valid amount.';
        return;
      }

      if (!(fromCurrency in conversionRates) || !(toCurrency in conversionRates)) {
        this.result = 'Invalid currency selection.';
        return;
      }

      const result = (amount / conversionRates[fromCurrency]) * conversionRates[toCurrency];
      this.result = `${amount} ${fromCurrency} is equal to ${result.toFixed(2)} ${toCurrency}`;
    },
  },
};
</script>

<style scoped>
.converter-container {
  text-align: center;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

h2 {
  color: #3498db;
  margin-bottom: 20px;
}

.input-group {
  margin: 15px 0;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #555;
  font-weight: bold;
}

select,
input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  margin-top: 20px;
  padding: 12px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}

#result {
  margin-top: 20px;
  font-weight: bold;
  color: #555;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  background-color: #ecf0f1;
}
</style>
