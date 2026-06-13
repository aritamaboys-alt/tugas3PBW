// Order Form Component
const OrderForm = {
    template: `
        <div>
            <app-modal
                :isOpen="showModal"
                :title="isEditMode ? 'Edit Stok' : 'Tambah Stok Baru'"
                submitText="Simpan"
                @close="closeModal"
                @submit="handleSubmit"
            >
                <div class="form-group">
                    <label>Kode Mata Kuliah</label>
                    <input type="text" v-model="form.kode" :disabled="isEditMode" required>
                </div>
                <div class="form-group">
                    <label>Judul Bahan Ajar</label>
                    <input type="text" v-model="form.judul" required>
                </div>
                <div class="form-group">
                    <label>Kategori</label>
                    <select v-model="form.kategori" required>
                        <option value="">Pilih Kategori</option>
                        <option v-for="kategori in kategoriList" :key="kategori" :value="kategori">
                            {{ kategori }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>UT-Daerah</label>
                    <select v-model="form.upbjj" required>
                        <option value="">Pilih UT-Daerah</option>
                        <option v-for="upbjj in upbjjList" :key="upbjj" :value="upbjj">
                            {{ upbjj }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Lokasi Rak</label>
                    <input type="text" v-model="form.lokasiRak" placeholder="Contoh: R1-A3" required>
                </div>
                <div class="form-group">
                    <label>Harga (Rp)</label>
                    <input type="number" v-model.number="form.harga" required>
                </div>
                <div class="form-group">
                    <label>Jumlah Stok (Qty)</label>
                    <input type="number" v-model.number="form.qty" required>
                </div>
                <div class="form-group">
                    <label>Safety Stock</label>
                    <input type="number" v-model.number="form.safety" required>
                </div>
                <div class="form-group">
                    <label>Catatan (HTML)</label>
                    <textarea v-model="form.catatanHTML" placeholder="Contoh: <em>Edisi 2024</em>"></textarea>
                </div>
            </app-modal>
        </div>
    `,
    components: {
        AppModal
    },
    props: {
        showModal: Boolean,
        isEditMode: Boolean,
        initialData: Object,
        kategoriList: Array,
        upbjjList: Array
    },
    emits: ['close', 'submit'],
    data() {
        return {
            form: {
                kode: '',
                judul: '',
                kategori: '',
                upbjj: '',
                lokasiRak: '',
                harga: '',
                qty: '',
                safety: '',
                catatanHTML: ''
            }
        };
    },
    watch: {
        showModal(newVal) {
            if (newVal && this.isEditMode && this.initialData) {
                this.form = { ...this.initialData };
            } else if (newVal && !this.isEditMode) {
                this.resetForm();
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        handleSubmit() {
            this.$emit('submit', this.form);
        },
        resetForm() {
            this.form = {
                kode: '',
                judul: '',
                kategori: '',
                upbjj: '',
                lokasiRak: '',
                harga: '',
                qty: '',
                safety: '',
                catatanHTML: ''
            };
        }
    }
};