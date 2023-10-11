<template>
    <div class="flex justify-center text-center">
        <div class="max-w-4xl px-10 my-4 py-6 bg-custom-white rounded-lg shadow-md">
            <h2 class="mt-2 text-2xl md:text-3xl font-bold">
                Sélectionne ton Quiz
            </h2>
            <div class="flex justify-between py-8">

                <div class="flex flex-col items-center w-1/3 px-4">
                    <router-link to="/classic">
                        <button
                            class="rounded flex items-center bg-custom-blue px-6 py-2 my-6 font-medium leading-normal text-custom-white shadow-lg shadow-custom-blue/50 transform active:scale-75 transition-transform"><span
                                class="text-2xl pr-4">&#128212;</span>Classic</button>
                    </router-link>
                    <p class="font-light text-sm">Des questions au hasard sans contraintes.</p>

                </div>

                <div class="flex flex-col items-center w-1/3 px-4">
                    <button
                        class="rounded flex items-center bg-custom-blue px-6 py-2 my-6 font-medium leading-normal text-custom-white shadow-lg shadow-custom-blue/50 transform active:scale-75 transition-transform"><span
                            class="text-2xl pr-4">&#128128;</span>Survie</button>
                    <p class="font-light text-sm">Tente d'aller le plus loin possible sans te tromper.</p>
                </div>


                <div class="flex flex-col items-center w-1/3 px-4">
                    <button
                        class="rounded flex items-center bg-custom-blue px-6 py-2 my-6 font-medium leading-normal text-custom-white shadow-lg shadow-custom-blue/50 transform active:scale-75 transition-transform"><span
                            class="text-2xl pr-4">&#8987;</span>Contre-la-montre</button>
                    <p class="font-light text-sm">Réponds à un maximum de questions dans le temps imparti.</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

</script>