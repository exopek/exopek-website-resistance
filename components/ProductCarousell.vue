<template>
    <div class="w-full">
        <Carousel :per-page="2" :autoplay="true" :loop="true" :speed="5000">
            <div v-for="(product, index) in products" :key="index" class="p-2">
                <ProductCard :product="product" />
            </div>
        </Carousel>
        
    </div>    
</template>
<script setup>
const products = ref([
    {
        title: 'EXOPEK Pro',
        description: 'Exopek Trainingsgerät mit Widerstandsbändern',
        image: 'https://exopek.de/wp-content/uploads/2024/05/zehn-widerstandsbaender-sicher-fixiert.jpg',
        shopUrl: 'https://exopek.de/produkt/exopek-pro/',
        price: 295.00,
    },
    {
        title: 'Manschetten',
        description: '5er Set für alle Fitnesslevel',
        image: 'https://exopek.de/wp-content/uploads/2023/06/Manschetten.jpg',
        shopUrl: 'https://exopek.de/produkt/widerstandsbaender-arme/',
        price: 10.00
    },
    {
        title: 'Widerstandsbänder für die Arme',
        description: 'Einzeln oder im Set erhältlich',
        image: 'https://exopek.de/wp-content/uploads/2024/01/Widerstandsbaender.jpg',
        shopUrl: 'https://exopek.de/produkt/widerstandsbaender-arme/',
        price: 15.00
    },
    {
        title: 'Widerstandsbänder für die Beine',
        description: 'Einzeln oder im Set erhältlich',
        image: 'https://exopek.de/wp-content/uploads/2024/01/Widerstandsbaender.jpg',
        shopUrl: 'https://exopek.de/produkt/widerstandsbaender-beine/',
        price: 15.00
    },
    {
        title: 'Widerstandsbänder Griffe',
        description: 'Für noch mehr Trainingsmöglichkeiten',
        image: 'https://exopek.de/wp-content/uploads/2023/06/Griffe.jpg',
        shopUrl: 'https://exopek.de/produkt/widerstandsbaender-arme/',
        price: 10.00
    }
])
</script>