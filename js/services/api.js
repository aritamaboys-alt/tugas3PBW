// API Service untuk fetch data dari JSON
class ApiService {
    static async fetchData() {
        try {
            const response = await fetch('data/dataBahanAjar.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    // Format currency ke Rp
    static formatCurrency(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    }

    // Format tanggal
    static formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    }
}