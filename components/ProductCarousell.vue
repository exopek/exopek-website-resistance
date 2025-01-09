<template>
    <div class="w-full">
        <Carousel :itemsToShow=itemsToShow :autoplay="3000" :mouseDrag="true" :touchDrag="true" :transition="500" :wrap-around="true">
            <Slide v-for="(product, index) in products" :key="index">
                <ProductCard :product="product" />
            </Slide>
        </Carousel>
        
    </div>    
</template>
<script setup>

import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

const products = ref([
    {
        title: 'EXOPEK Pro',
        description: 'Exopek Trainingsgerät mit Widerstandsbändern',
        image: 'https://exopek.de/wp-content/uploads/2024/05/zehn-widerstandsbaender-sicher-fixiert.jpg',
        shopUrl: 'https://exopek.de/produkt/exopek-pro/',
        price: "ab 295.00",
    },
    {
        title: 'Widerstandsbänder für die Arme',
        description: 'Einzeln oder im Set erhältlich',
        image: 'https://exopek.de/wp-content/uploads/2024/05/set-widerstandsbaender-in-verschiedenen-staerken.jpg',
        shopUrl: 'https://exopek.de/produkt/widerstandsbaender-arme/',
        price: "ab 14.00"
    },
    {
        title: 'Widerstandsbänder für die Beine',
        description: 'Einzeln oder im Set erhältlich',
        image: 'https://exopek.de/wp-content/uploads/2024/05/set-widerstandsbaender-in-verschiedenen-staerken.jpg',
        shopUrl: 'https://exopek.de/produkt/widerstandsbaender-beine/',
        price: "ab 16.00"
    }
])

const itemsToShow = computed(() => {
    if (width.value < 768) {
        return 1
    } else if (width.value < 1024) {
        return 2
    } else {
        return 2
    }
})



</script>