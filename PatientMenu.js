import { PATIENT_MENU } from 'dentalsleepsolutions-common-js/src/constants/main'
import PatientMenuElementComponent from './PatientMenuElement.vue'

export default {
  props: {
    patientId: {
      type: Number,
      required: true
    }
  },
  computed: {
    menuElements () {
      const elements = []
      for (let menuElement of PATIENT_MENU) {
        const newElement = menuElement
        if (!menuElement.hasOwnProperty('active')) {
          newElement.active = ''
        }
        if (!menuElement.hasOwnProperty('activeLike')) {
          newElement.activeLike = []
        }
        if (!menuElement.hasOwnProperty('legacy')) {
          newElement.legacy = true
        }
        elements.push(newElement)
      }
      return elements
    }
  },
  components: {
    patientMenuElement: PatientMenuElementComponent
  }
}
