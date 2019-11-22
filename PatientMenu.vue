<template>
    <div id="patient_nav" class="patient_nav">
        <ul>
            <patient-menu-element
                v-for="(menuElement, loopIndex) in menuElements"
                v-bind:element-link="menuElement.link"
                v-bind:element-name="menuElement.name"
                v-bind:element-active="menuElement.active"
                v-bind:element-active-like="menuElement.activeLike"
                v-bind:element-legacy="menuElement.legacy"
                v-bind:last-element="(loopIndex === menuElements.length - 1)"
                v-bind:patient-id="patientId"
                v-bind:key="loopIndex"
            ></patient-menu-element>
        </ul>
    </div>
</template>

<script src="./PatientMenu.js"></script>

<style lang="scss" scoped>
    @import "../../assets/css/patients/patient-menu.scss";
</style>
