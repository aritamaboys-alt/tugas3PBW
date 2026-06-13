// Status Badge Component
const StatusBadge = {
    template: `
        <span :class="['badge', badgeClass]" :title="tooltipText">
            {{ statusText }}
        </span>
    `,
    props: {
        qty: Number,
        safety: Number
    },
    computed: {
        statusText() {
            if (this.qty === 0) return '❌ Kosong';
            if (this.qty < this.safety) return '⚠️ Menipis';
            return '✅ Aman';
        },
        badgeClass() {
            if (this.qty === 0) return 'badge-critical';
            if (this.qty < this.safety) return 'badge-warning';
            return 'badge-safe';
        },
        tooltipText() {
            if (this.qty === 0) return 'Bahaya: Stok kosong';
            if (this.qty < this.safety) return `Warning: Qty (${this.qty}) < Safety (${this.safety})`;
            return `Aman: Qty (${this.qty}) >= Safety (${this.safety})`;
        }
    }
};