<template>
    <section class="notfound">
  <div class="container">
    <div class="col-md-12">
     
        <div class="back">
            <router-link to="/" class="viewmore-btn mt-5">Back to Home</router-link>
        </div>
    </div>
  </div>
   </section>
</template>

<script>
export default {

}
</script>

<style>
.notfound{
    background: #0E293C;
    background-image: url(/assets/img/notfound.jpg);
    object-fit: contain;
    width: 100%;
    height: 100vh;
    background-size: cover;
    position: relative;
}
.back a {
position: absolute;
right: 20px;
bottom: 50px;
}
</style>