import { ref } from 'vue';

export function useMobileNav() {
    const isNavOpen = ref(false);

    function open() {
        isNavOpen.value = true;
    }

    function close() {
        isNavOpen.value = false;
    }

    return {
        isNavOpen,
        open,
        close,
    };
}
