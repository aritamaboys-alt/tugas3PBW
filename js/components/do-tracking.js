// DO Tracking Component
const DoTracking = {
    template: `
        <div>
            <div v-if="tracking.length > 0" class="tracking-list">
                <div v-for="item in tracking" :key="item.doNumber" class="tracking-card">
                    <div class="tracking-header">
                        <div class="tracking-info">
                            <label>Nomor DO</label>
                            <div class="tracking-info-value">{{ item.doNumber }}</div>
                        </div>
                        <div class="tracking-info">
                            <label>Nama Penerima</label>
                            <div class="tracking-info-value">{{ item.nama }}</div>
                        </div>
                        <div class="tracking-info">
                            <label>NIM</label>
                            <div class="tracking-info-value">{{ item.nim }}</div>
                        </div>
                        <div class="tracking-info">
                            <label>Status</label>
                            <div class="tracking-info-value">{{ item.status }}</div>
                        </div>
                        <div class="tracking-info">
                            <label>Ekspedisi</label>
                            <div class="tracking-info-value">{{ item.ekspedisi }}</div>
                        </div>
                        <div class="tracking-info">
                            <label>Tanggal Kirim</label>
                            <div class="tracking-info-value">{{ formatDate(item.tanggalKirim) }}</div>
                        </div>
                    </div>

                    <div style="margin-bottom: 1.5rem;">
                        <label style="font-weight: 600; color: #666; font-size: 0.9rem; display: block; margin-bottom: 0.5rem;">Paket</label>
                        <div class="tracking-info-value">{{ item.paket }}</div>
                    </div>

                    <div style="margin-bottom: 1.5rem;">
                        <label style="font-weight: 600; color: #666; font-size: 0.9rem; display: block; margin-bottom: 0.5rem;">Total</label>
                        <div class="tracking-info-value">{{ formatCurrency(item.total) }}</div>
                    </div>

                    <div>
                        <h3 style="margin-bottom: 1rem; font-size: 1rem; color: #333;">Riwayat Perjalanan</h3>
                        <div class="tracking-timeline">
                            <div v-for="(journey, index) in item.perjalanan" :key="index" class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-content">
                                    <div class="timeline-time">{{ formatTime(journey.waktu) }}</div>
                                    <div class="timeline-desc">{{ journey.keterangan }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="empty-state">
                <p>Tidak ada data tracking</p>
            </div>
        </div>
    `,
    props: {
        tracking: Array
    },
    methods: {
        formatCurrency(amount) {
            return ApiService.formatCurrency(amount);
        },
        formatDate(dateString) {
            return ApiService.formatDate(dateString);
        },
        formatTime(timeString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            return new Date(timeString).toLocaleDateString('id-ID', options);
        }
    }
};