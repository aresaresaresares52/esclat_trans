<script setup lang="ts">
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'

interface FilterOption {
  label: string
  value: string | number
}

interface FilterBarProps {
  items: any[]
  filterKey: string
  searchKey: string
  filterOptions: FilterOption[]
}

const props = defineProps<FilterBarProps>()

const emit = defineEmits<{
  filter: [filtered: any[]]
}>()

const searchQuery = ref('')
const selectedFilter = ref('')

const handleSearch = (e: Event) => {
  const query = (e.target as HTMLInputElement).value
  searchQuery.value = query
  updateFilters()
}

const selectButtonFilter = (value: string | number) => {
  selectedFilter.value = String(value)
  updateFilters()
}

const updateFilters = () => {
  let filtered = props.items

  if (searchQuery.value) {
    filtered = filtered.filter(item =>
      String(item[props.searchKey]).toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (selectedFilter.value) {
    filtered = filtered.filter(item => String(item[props.filterKey]) === selectedFilter.value)
  }

  emit('filter', filtered)
}
</script>

<template>
  <div class="filter-bar flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center md:justify-between w-full max-w-6xl mx-auto bg-black">
    
    <div class="flex flex-wrap items-center gap-3">
      <button
        @click="selectButtonFilter('')"
        :class="[
          'border-2 px-[21px] py-[13px] font-bold uppercase text-sm tracking-tight transition-all rounded-none',
          selectedFilter === '' 
            ? 'bg-brand-yellow text-black border-brand-yellow' 
            : 'border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black'
        ]"
      >
        Todos
      </button>

      <button
        v-for="option in filterOptions"
        :key="option.value"
        @click="selectButtonFilter(option.value)"
        :class="[
          'border-2 px-[21px] py-[13px] font-bold uppercase text-sm tracking-tight transition-all rounded-none',
          selectedFilter === String(option.value) 
            ? 'bg-brand-yellow text-black border-brand-yellow' 
            : 'border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black'
        ]"
      >
        {{ option.label }}
      </button>
    </div>

    <div class="relative w-full md:w-64">
      <Search class="absolute right-4 top-1/2 -translate-y-1/2 text-brand-yellow" :size="18" />
      <input
        type="text"
        placeholder="Buscar..."
        :value="searchQuery"
        @input="handleSearch"
        class="w-full pl-4 pr-11 py-[11px] bg-black border-2 border-brand-yellow text-brand-yellow placeholder-brand-yellow/50 font-normal uppercase focus:outline-none transition-colors rounded-none text-sm"
      />
    </div>

  </div>
</template>