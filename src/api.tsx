const base_url = "https://terangnesia-api-y2vek.ondigitalocean.app/terangnesia/api/v1/";
const x_api_key = "12345678";

export async function fetchProducts(limit: number, offset: number): Promise<any> {
    try {
        const url = base_url + `products/?limit=${limit}&offset=${offset}`;
        const headers = new Headers();
        headers.set('X-Api-Key', x_api_key);

        const response = await fetch(url, { method: 'GET', headers });
        if (!response.ok) {
            throw new Error('Gagal mengambil data dari API');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        throw error; // Melempar kembali error untuk penanganan lebih lanjut
    }
}

