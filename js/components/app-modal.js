// Modal Component
const AppModal = {
    template: `
        <div :class="['modal-overlay', { hidden: !isOpen }]" @click.self="closeModal">
            <div class="modal">
                <div class="modal-header">
                    <h2>{{ title }}</h2>
                    <button class="modal-close" @click="closeModal">✕</button>
                </div>
                <form @submit.prevent="handleSubmit">
                    <slot></slot>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="closeModal">Batal</button>
                        <button type="submit" class="btn btn-primary">{{ submitText }}</button>
                    </div>
                </form>
            </div>
        </div>
    `,
    props: {
        isOpen: Boolean,
        title: String,
        submitText: {
            type: String,
            default: 'Simpan'
        }
    },
    emits: ['close', 'submit'],
    methods: {
        closeModal() {
            this.$emit('close');
        },
        handleSubmit() {
            this.$emit('submit');
        }
    }
};