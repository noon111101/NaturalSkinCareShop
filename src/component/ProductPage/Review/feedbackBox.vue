<template>
    <div>
        <ReviewHead />
        <div class="choice d-flex justify-content-startmt-2" style="border-bottom: 1px solid black;">
            <div @click="() => {this.state = true; changeColor()}" :style="{borderBottom: color,}">Review</div>
            <div @click="() => {this.state = false; resetColor();}" :style="{borderBottom: color1,}">Questions</div>
        </div>
        <ReviewBar v-if="this.state"/>
        <QuestionsBar v-else/>
    </div>
</template>

<script>
import ReviewBar from './ReviewBar.vue';
import QuestionsBar from './questionsBar.vue';
import ReviewHead from './reviewHead.vue';


export default {
    name: "feedbackBox",
    data() {
        return {
            state: true,
            color: "1px solid green",
            color1: "",
        };
    },
    mounted() {
    },
    methods: {
        changeColor(){
            
                this.color = "1px solid green";
                this.color1 = "";
        },
        resetColor(){
            this.color = "";
                this.color1 = "1px solid green";
        }
    },
    components: { ReviewBar, QuestionsBar, ReviewHead }
};
</script>

<style scoped>
.choice{
    height: 50px;
}
.choice div{
    height: 90%;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    /* width: 10%; */
    margin-right: 10px;
    margin-bottom: 8px;
}
.choice div:hover{
    color: aqua;
    /* border-bottom: 3px solid green; */
}
</style>