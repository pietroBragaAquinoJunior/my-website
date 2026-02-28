import { type ComputedRef, defineComponent, inject, onMounted, reactive, ref } from 'vue';
import { DatetimeFormat, useI18n } from 'vue-i18n';

export default defineComponent({
  compatConfig: { MODE: 3 },
  setup() {
    const authenticated = inject<ComputedRef<boolean>>('authenticated');

    const hourStyle = reactive({
      transform: 'rotate(0deg)',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    });

    const minuteStyle = reactive({
      transform: 'rotate(0deg)',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    });

    const secondStyle = reactive({
      transform: 'rotate(0deg)',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    });

    const data = new Date();

    const atualizarHora = function () {
      hourStyle.transform = 'rotate(' + ((new Date().getHours() * 60 + new Date().getMinutes()) / 2).toString() + 'deg)';
      minuteStyle.transform = 'rotate(' + (new Date().getMinutes() * 6).toString() + 'deg)';
      secondStyle.transform = 'rotate(' + (new Date().getSeconds() * 6).toString() + 'deg)';
    };

    onMounted(() => {
      atualizarHora();
      setInterval(() => {
        atualizarHora();
      }, 1000);
    });

    return {
      data,
      hourStyle,
      minuteStyle,
      secondStyle,
      authenticated,
      t$: useI18n().t,
    };
  },
});
