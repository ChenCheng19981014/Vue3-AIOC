<!-- 综合告警 -->
<template>
    <div class="alarm">
        <title-type-common :tips="'综合告警'">
            <div class="alarm-main">
                <alarm-list></alarm-list>
            </div>
        </title-type-common>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

</script>

<style scoped lang="scss">
.alarm {
    width: 100%;
    height: 100%;
    .alarm-main {
        width: 100%;
        height: 100%; 
        padding-top: 16px;
    }
}
</style>
