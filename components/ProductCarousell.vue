<template>
    <div class="w-full">
        <Carousel :itemsToShow="2" :autoplay="3000" :mouseDrag="true" :touchDrag="true" :transition="500" :wrap-around="true">
            <Slide v-for="(product, index) in products" :key="index">
                <ProductCard :product="product" />
            </Slide>
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
        price: "ab 295.00",
    },
    {
        title: 'Manschetten',
        description: '5er Set für alle Fitnesslevel',
        image: 'https://exopek.de/wp-content/uploads/2023/06/Manschetten.jpg',
        shopUrl: 'https://exopek.de/produkt/widerstandsbaender-arme/',
        price: "-"
    },
    {
        title: 'Widerstandsbänder für die Arme',
        description: 'Einzeln oder im Set erhältlich',
        image: 'https://exopek.de/wp-content/uploads/2024/01/Widerstandsbaender.jpg',
        shopUrl: 'https://exopek.de/produkt/widerstandsbaender-arme/',
        price: "ab 14.00"
    },
    {
        title: 'Widerstandsbänder für die Beine',
        description: 'Einzeln oder im Set erhältlich',
        image: 'https://exopek.de/wp-content/uploads/2024/01/Widerstandsbaender.jpg',
        shopUrl: 'https://exopek.de/produkt/widerstandsbaender-beine/',
        price: "ab 16.00"
    },
    {
        title: 'Widerstandsbänder Griffe',
        description: 'Für noch mehr Trainingsmöglichkeiten',
        image: 'https://exopek.de/wp-content/uploads/2023/06/Griffe.jpg',
        shopUrl: 'https://exopek.de/produkt/widerstandsbaender-arme/',
        price: "-"
    }
])
</script>