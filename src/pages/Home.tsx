import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, { useState, useEffect } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './Home.css';
import '../api';

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

const Home: React.FC = () => {
  

  const cdnLink: string = "https://terangnesia.sgp1.cdn.digitaloceanspaces.com/";
  const [products, setProducts] = useState<any[]>([]);
  const [limit] = useState<number>(10);
  const [offset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        await new Promise<void>((resolve) => setTimeout(resolve, 1000));
        // Assuming fetchProducts is a function returning a Promise
        const responseData = await fetchProducts(limit, offset);
        setProducts(responseData.data);
        setLoading(false);
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    };

    fetchDataFromAPI();
  }, [limit, offset]);
  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Final Project</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="container">
        <IonContent fullscreen={true} className="ion-padding">
          <IonGrid>
          <h1>MEGASIA</h1>
          <p>Produk - produk UMKM Indonesia</p>
          <IonRow>
              {products.map((product) => (
              <IonCol size="4" key={product.id}>
                
              <div style={{ maxWidth: '350px' }}>
              <IonCard>
              <img className="card-img-top" src={cdnLink + product.thumbnail} alt={product.name}  width={400}/>
             
                  <IonCardHeader>
                  <div
                    style={{
                      width: '90px',
                      height: '30px',
                      backgroundColor: 'orange',
                      borderRadius: '6px', // Untuk sudut yang melengkung
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textTransform: 'lowercase',
                      cursor: 'pointer',
                      color: 'white',
                      fontWeight: 'bold',                    }}
                  >
                    {product.label}
                  </div>

                  <IonCardTitle style={{ fontWeight: 'bold' }}>{product.name}</IonCardTitle>
                    <IonCardSubtitle>By : <span style={{ fontWeight: 'bold' }}>{product.owner}</span> | Lokasi :
                    <span style={{ fontWeight: 'bold' }}>{product.location}</span>
                     </IonCardSubtitle>
                  </IonCardHeader>
                <IonCardContent>{product.description}</IonCardContent>
                </IonCard>
              </div>
              </IonCol>

            ))}

            
              </IonRow>

                </IonGrid>
          </IonContent>
        </div>
    </>
  );
};

export default Home;
