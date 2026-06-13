const { createApp } = Vue;

const App = {
    template: `
        <div>
            <div class="navbar">
                <h1>📚 Sistem Manajemen Stok Bahan Ajar</h1>
                <p>Universitas Terbuka - Platform Manajemen Inventory</p>
            </div>

            <div class="container">
                <div class="tabs">
                    <button 
                        v-for="tab in tabs" 
                        :key="tab"
                        @click="activeTab = tab"
                        :class="['tab-btn', { active: activeTab === tab }]"
                    >
                        {{ getTabLabel(tab) }}
                    </button>
                </div>

                <div v-if="activeTab === 'stok'" class="tab-content active">
                    <stock-table
                        :stok="data.stok"
                        :upbjjList="data.upbjjList"
                        :kategoriList="data.kategoriList"
                        @openAddModal="openAddModal"
                        @editItem="openEditModal"
                        @deleteItem="deleteItem"
                    ></stock-table>
                </div>

                <div v-if="activeTab === 'tracking'" class="tab-content active">
                    <do-tracking :tracking="data.tracking"></do-tracking>
                </div>
            </div>

            <order-form
                :showModal="showModal"
                :isEditMode="isEditMode"
                :initialData="editingItem"
                :kategoriList="data.kategoriList"
                :upbjjList="data.upbjjList"
                @close="closeModal"
                @submit="handleSubmit"
            ></order-form>
        </div>
    `,
    components: {
        StockTable,
        DoTracking,
        OrderForm
    },
    data() {
        return {
            tabs: ['stok', 'tracking'],
            activeTab: 'stok',
            data: {
                stok: [],
                tracking: [],
                upbjjList: [],
                kategoriList: [],
                pengirimanList: [],
                paket: []
            },
            showModal: false,
            isEditMode: false,
            editingItem: null
        };
    },
    methods: {
        async loadData() {
            const result = await ApiService.fetchData();
            if (result) {
                this.data = result;
            } else {
                alert('Gagal memuat data!');
            }
        },
        getTabLabel(tab) {
            const labels = {
                stok: '📦 Stok Bahan Ajar',
                tracking: '🚚 Tracking DO'
            };
            return labels[tab] || tab;
        },
        openAddModal() {
            this.isEditMode = false;
            this.editingItem = null;
            this.showModal = true;
        },
        openEditModal(item) {
            this.isEditMode = true;
            this.editingItem = item;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.isEditMode = false;
            this.editingItem = null;
        },
        handleSubmit(formData) {
            if (this.isEditMode) {
                // Update item
                const index = this.data.stok.findIndex(item => item.kode === formData.kode);
                if (index !== -1) {
                    this.data.stok[index] = formData;
                    alert('Data berhasil diperbarui!');
                }
            } else {
                // Add new item
                const exists = this.data.stok.some(item => item.kode === formData.kode);
                if (exists) {
                    alert('Kode bahan ajar sudah ada!');
                    return;
                }
                this.data.stok.push(formData);
                alert('Data berhasil ditambahkan!');
            }
            this.closeModal();
        },
        deleteItem(kode) {
            if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
                const index = this.data.stok.findIndex(item => item.kode === kode);
                if (index !== -1) {
                    this.data.stok.splice(index, 1);
                    alert('Data berhasil dihapus!');
                }
            }
        }
    },
    mounted() {
        this.loadData();
    }
};

const app = createApp(App);
app.mount('#app');
