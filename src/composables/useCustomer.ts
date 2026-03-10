import { ref, watch } from 'vue'
import { useRecipe } from './useRecipe'
import type { Recipe } from '@/types/recipe'
import type { Customer } from '@/types/customer'
import { useSelling } from './useSelling'

const { recipes, calculateRecipeCost } = useRecipe()
const { sellItem } = useSelling()

const customerSchedule = [
  0.01, 0.02, 0.03, 0.04, 0.05, 0.07, 0.09, 0.06, 0.03, 0.05, 0.07, 0.1, 0.05, 0.03, 0.02, 0.01,
]
const maxCustomers = ref<number>(3)
const currentHourProbability = ref<number>(0)
const currentCustomer = ref<Customer | null>(null)
const customerQueue = ref<Customer[]>([])
const customerLog = ref({
  totalSpawned: 0,
  totalServed: 0,
})
watch(
  maxCustomers,
  (newVal) => {
    for (let i = customerQueue.value.length; i < newVal; i++) {
      customerQueue.value[i] = null
    }
  },
  { immediate: true },
)
function addCustomerToQueue(customer: Customer) {
  for (let i = 0; i < maxCustomers.value; i++) {
    if (customerQueue.value[i] === null) {
      customerQueue.value[i] = customer
      break
    }
  }
}

function createCustomerRequest(): Recipe {
  const randomIndex = Math.ceil(Math.random() * recipes.value.length) - 1
  const itemData = recipes.value[randomIndex]
  if (!itemData) return null
  return itemData
}
function createNewCustomer() {
  customerLog.value.totalSpawned++
  const waitTime = Math.ceil(Math.random() * 20) + 10 // Random wait time between 10 and 30 ticks
  currentCustomer.value = {
    id: `customer-${customerLog.value.totalSpawned}`,
    request: createCustomerRequest(), // Placeholder for random item request
    waitTime: waitTime,
    patience: waitTime,
    isBeingServed: false,
    income: Math.ceil(Math.random() * 50) + 50, // Random income between 50 and 100
  }
  addCustomerToQueue(currentCustomer.value)
}

function trySpawnCustomer(currentHour: number) {
  currentHourProbability.value = customerSchedule[currentHour] || 0
  const probability = currentHourProbability.value
  if (Math.random() < probability) {
    createNewCustomer()
  }
}

function serveCustomer(index: number, request: Recipe) {
  const customer = customerQueue.value[index]
  const ItemPrice = calculateRecipeCost(request)
  if (customer) {
    sellItem(customer.request.id, ItemPrice)
    customerLog.value.totalServed++
    customerQueue.value[index] = null
  }
}
function removeFirstCustomerFromQueue() {
  if (customerQueue.value.length > 0) {
    customerQueue.value.shift()
  }
}

function increaseMaxCustomers() {
  maxCustomers.value++
}
function decreaseCustomerPatience() {
  for (let i = 0; i < customerQueue.value.length; i++) {
    if (customerQueue.value[i]) {
      if (!customerQueue.value[i].isBeingServed) {
        customerQueue.value[i].patience--
        if (customerQueue.value[i].patience <= 0) {
          removeImpatientCustomer(i)
        }
      }
    }
  }
}
function removeImpatientCustomer(index: number) {
  customerQueue.value[index] = null
}
function pauseCustomerPatience(index: number) {
  if (customerQueue.value[index]) {
    customerQueue.value[index].isBeingServed = true
  }
}
export function useCustomer() {
  return {
    decreaseCustomerPatience,
    pauseCustomerPatience,
    customerLog,
    maxCustomers,
    createNewCustomer,
    trySpawnCustomer,
    increaseMaxCustomers,
    serveCustomer,
    currentHourProbability,
    customerQueue,
    currentCustomer,
    removeFirstCustomerFromQueue,
  }
}
