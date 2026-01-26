<script setup lang="ts">
  import slide1 from '@/assets/img/slide1.jpg'
  import slide2 from '@/assets/img/slide2.jpg'
  import slide3 from '@/assets/img/slide3.jpg'
  
  import {Swiper, SwiperSlide} from 'swiper/vue'
  import { Autoplay } from 'swiper/modules'
  import type { Swiper as SwiperType } from 'swiper'
  import 'swiper/css'
  
  const modules = [Autoplay]
  
  const onSwiper = (swiper: SwiperType) => {
    console.log(swiper)
  }
  
  </script>
  
  
  <template>
    <div class="container">
      <div class="slider">
        <swiper
            :slides-per-view="1"
            :modules="modules"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :loop="true"
            @swiper="onSwiper"
            class="picSwiper"
        >
          <swiper-slide><img :src="slide1" alt="pic"></swiper-slide>
          <swiper-slide><img :src="slide2" alt="pic"></swiper-slide>
          <swiper-slide><img :src="slide3" alt="pic"></swiper-slide>
        </swiper>
      </div>
    </div>
  </template>
  
  <style scoped>
  .picSwiper {
    height: 500px;
  
    img {
      max-width: 100%;
      height: 100%;
    }
  }
  </style>