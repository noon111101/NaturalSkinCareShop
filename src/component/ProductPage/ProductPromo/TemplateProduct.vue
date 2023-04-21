<template>
<div class="product-template row">
    <div class="col-8">
        <div class="img-row row">
            <div class="col-4">
                <div class="background-img"></div>
                <div class="background-img"></div>
            </div>
            <div class="col-8">
                <div class="background-img"></div>
            </div>
        </div>
        <div class="mid-img-row row">
            <div class="background-img"></div>
        </div>
    </div>
    <div class="col-4">
        <ProductCart />
    </div>
</div>
</template>

<script>
import ProductCart from './ProductCart.vue';

export default {
    name: "TemplateProduct",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { ProductCart }
};
</script>

<style scoped>
.product-template{
    margin-bottom: 80px;
    margin-top: 10px;
}
.img-row .col-4 .background-img:first-child{
    width: 100%;
    height: 250px;
    background-size: cover;
    object-fit: contain;
    background-image: url("https://cdn.shopify.com/s/files/1/0081/7374/8305/products/Signature_Foaming_Facial_Cleanser_125ml_OH_01_1_540x.jpg?v=1599504601%22");
}
.img-row .col-4 .background-img:nth-child(2){
    width: 100%;
    height: 250px;
    /* border-top: 10px solid white; */
    margin-top: 16px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    background-color: #f4f3f0;
    background-image: url("https://cdn.shopify.com/s/files/1/0081/7374/8305/products/NO_Lists_for_Site-SIG_9e8b8eea-6951-40fe-8927-7ee633399195_540x.png?v=1599504601%22");
}
.img-row .col-8 .background-img{
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    background-color: #f4f3f0;
    background-image: url("https://cdn.shopify.com/s/files/1/0081/7374/8305/products/Signature_Foaming_Facial_Cleanser_125ml_01_Product_1080x.jpg?v=1599504600%22");
}
.background-img:hover{
    transform: scale(1.05);
    transition: transform .2s ease-in-out;
}
.img-row .col-8 .background-img::before{
    content: "BestSeller";
    position: absolute;
    text-transform: uppercase;
    text-align: center;
    line-height: 38px;
    color: #f4f3f0;
    background-color: #173f35;
    border:1px solid #173f35;
    width: 30%;
    padding: 3px;
}


.mid-img-row .background-img{
    width: 383px;
    height: 383px;
    margin: 10px auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    background-color: #f4f3f0;
    background-image: url("https://cdn.shopify.com/s/files/1/0081/7374/8305/products/Signature_Foaming_Facial_Cleanser_125ml_01_Product_1080x.jpg?v=1599504600%22");
}



</style>